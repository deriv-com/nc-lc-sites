(function(global, factory) {
    if (typeof define === "function" && define.amd) {
        define("@outsystems/logger-js", ["exports", "@outsystems/settings-js", "@outsystems/communication-js"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("@outsystems/settings-js"), require("@outsystems/communication-js"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.settingsJs, global.communicationJs);
        global.outsystemsLoggerJs = mod.exports;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function(_exports, _settingsJs, _communicationJs) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.Visibility = _exports.Version = _exports.Tracer = _exports.SpanKind = _exports.Logger = _exports.LogType = _exports.Log = _exports.KnownAttributes = _exports.InstrumentationFactory = void 0;

    function i(t, e, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function s(t) {
                try {
                    u(n.next(t));
                } catch (t) {
                    o(t);
                }
            }

            function a(t) {
                try {
                    u(n.throw(t));
                } catch (t) {
                    o(t);
                }
            }

            function u(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e);
                })).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
        });
    }

    function o(t, e, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t);
    }

    function s(t, e, r, n, i) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
    }
    "function" == typeof SuppressedError && SuppressedError;
    var a = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof global ? global : {},
        u = "1.9.0",
        c = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    var l = function(t) {
            var e = new Set([t]),
                r = new Set(),
                n = t.match(c);
            if (!n) return function() {
                return !1;
            };
            var i = +n[1],
                o = +n[2],
                s = +n[3];
            if (null != n[4]) return function(e) {
                return e === t;
            };

            function a(t) {
                return r.add(t), !1;
            }

            function u(t) {
                return e.add(t), !0;
            }
            return function(t) {
                if (e.has(t)) return !0;
                if (r.has(t)) return !1;
                var n = t.match(c);
                if (!n) return a(t);
                var l = +n[1],
                    f = +n[2],
                    h = +n[3];
                return null != n[4] || i !== l ? a(t) : 0 === i ? o === f && s <= h ? u(t) : a(t) : o <= f ? u(t) : a(t);
            };
        }(u),
        f = u.split(".")[0],
        h = Symbol.for("opentelemetry.js.api." + f),
        p = a;

    function d(t, e, r, n) {
        var i;
        void 0 === n && (n = !1);
        var o = p[h] = null !== (i = p[h]) && void 0 !== i ? i : {
            version: u
        };
        if (!n && o[t]) {
            var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + t);
            return r.error(s.stack || s.message), !1;
        }
        if (o.version !== u) {
            s = new Error("@opentelemetry/api: Registration of version v" + o.version + " for " + t + " does not match previously registered API v" + u);
            return r.error(s.stack || s.message), !1;
        }
        return o[t] = e, r.debug("@opentelemetry/api: Registered a global for " + t + " v" + u + "."), !0;
    }

    function g(t) {
        var e,
            r,
            n = null === (e = p[h]) || void 0 === e ? void 0 : e.version;
        if (n && l(n)) return null === (r = p[h]) || void 0 === r ? void 0 : r[t];
    }

    function v(t, e) {
        e.debug("@opentelemetry/api: Unregistering a global for " + t + " v" + u + ".");
        var r = p[h];
        r && delete r[t];
    }
    var _,
        y = void 0 && (void 0).__read || function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        },
        T = void 0 && (void 0).__spreadArray || function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
            return t.concat(n || Array.prototype.slice.call(e));
        },
        m = function() {
            function t(t) {
                this._namespace = t.namespace || "DiagComponentLogger";
            }
            return t.prototype.debug = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return b("debug", this._namespace, t);
            }, t.prototype.error = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return b("error", this._namespace, t);
            }, t.prototype.info = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return b("info", this._namespace, t);
            }, t.prototype.warn = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return b("warn", this._namespace, t);
            }, t.prototype.verbose = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return b("verbose", this._namespace, t);
            }, t;
        }();

    function b(t, e, r) {
        var n = g("diag");
        if (n) return r.unshift(e), n[t].apply(n, T([], y(r), !1));
    }! function(t) {
        t[t.NONE = 0] = "NONE", t[t.ERROR = 30] = "ERROR", t[t.WARN = 50] = "WARN", t[t.INFO = 60] = "INFO", t[t.DEBUG = 70] = "DEBUG", t[t.VERBOSE = 80] = "VERBOSE", t[t.ALL = 9999] = "ALL";
    }(_ || (_ = {}));
    var E = void 0 && (void 0).__read || function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        },
        S = void 0 && (void 0).__spreadArray || function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
            return t.concat(n || Array.prototype.slice.call(e));
        },
        O = function() {
            function t() {
                function t(t) {
                    return function() {
                        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                        var n = g("diag");
                        if (n) return n[t].apply(n, S([], E(e), !1));
                    };
                }
                var e = this;
                e.setLogger = function(t, r) {
                    var n, i, o;
                    if (void 0 === r && (r = {
                            logLevel: _.INFO
                        }), t === e) {
                        var s = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                        return e.error(null !== (n = s.stack) && void 0 !== n ? n : s.message), !1;
                    }
                    "number" == typeof r && (r = {
                        logLevel: r
                    });
                    var a = g("diag"),
                        u = function(t, e) {
                            function r(r, n) {
                                var i = e[r];
                                return "function" == typeof i && t >= n ? i.bind(e) : function() {};
                            }
                            return t < _.NONE ? t = _.NONE : t > _.ALL && (t = _.ALL), e = e || {}, {
                                error: r("error", _.ERROR),
                                warn: r("warn", _.WARN),
                                info: r("info", _.INFO),
                                debug: r("debug", _.DEBUG),
                                verbose: r("verbose", _.VERBOSE)
                            };
                        }(null !== (i = r.logLevel) && void 0 !== i ? i : _.INFO, t);
                    if (a && !r.suppressOverrideMessage) {
                        var c = null !== (o = new Error().stack) && void 0 !== o ? o : "<failed to generate stacktrace>";
                        a.warn("Current logger will be overwritten from " + c), u.warn("Current logger will overwrite one already registered from " + c);
                    }
                    return d("diag", u, e, !0);
                }, e.disable = function() {
                    v("diag", e);
                }, e.createComponentLogger = function(t) {
                    return new m(t);
                }, e.verbose = t("verbose"), e.debug = t("debug"), e.info = t("info"), e.warn = t("warn"), e.error = t("error");
            }
            return t.instance = function() {
                return this._instance || (this._instance = new t()), this._instance;
            }, t;
        }(),
        w = void 0 && (void 0).__read || function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        },
        L = void 0 && (void 0).__values || function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    };
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        },
        A = function() {
            function t(t) {
                this._entries = t ? new Map(t) : new Map();
            }
            return t.prototype.getEntry = function(t) {
                var e = this._entries.get(t);
                if (e) return Object.assign({}, e);
            }, t.prototype.getAllEntries = function() {
                return Array.from(this._entries.entries()).map(function(t) {
                    var e = w(t, 2);
                    return [e[0], e[1]];
                });
            }, t.prototype.setEntry = function(e, r) {
                var n = new t(this._entries);
                return n._entries.set(e, r), n;
            }, t.prototype.removeEntry = function(e) {
                var r = new t(this._entries);
                return r._entries.delete(e), r;
            }, t.prototype.removeEntries = function() {
                for (var e, r, n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                var o = new t(this._entries);
                try {
                    for (var s = L(n), a = s.next(); !a.done; a = s.next()) {
                        var u = a.value;
                        o._entries.delete(u);
                    }
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally {
                    try {
                        a && !a.done && (r = s.return) && r.call(s);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return o;
            }, t.prototype.clear = function() {
                return new t();
            }, t;
        }(),
        I = Symbol("BaggageEntryMetadata"),
        k = O.instance();

    function R(t) {
        return void 0 === t && (t = {}), new A(new Map(Object.entries(t)));
    }

    function P(t) {
        return Symbol.for(t);
    }
    var C,
        N,
        x = function t(e) {
            var r = this;
            r._currentContext = e ? new Map(e) : new Map(), r.getValue = function(t) {
                return r._currentContext.get(t);
            }, r.setValue = function(e, n) {
                var i = new t(r._currentContext);
                return i._currentContext.set(e, n), i;
            }, r.deleteValue = function(e) {
                var n = new t(r._currentContext);
                return n._currentContext.delete(e), n;
            };
        },
        j = new x(),
        M = void 0 && (void 0).__extends || (C = function(t, e) {
            return C = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, C(t, e);
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function r() {
                this.constructor = t;
            }
            C(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
        }),
        D = function() {
            function t() {}
            return t.prototype.createGauge = function(t, e) {
                return q;
            }, t.prototype.createHistogram = function(t, e) {
                return K;
            }, t.prototype.createCounter = function(t, e) {
                return $;
            }, t.prototype.createUpDownCounter = function(t, e) {
                return Y;
            }, t.prototype.createObservableGauge = function(t, e) {
                return J;
            }, t.prototype.createObservableCounter = function(t, e) {
                return Q;
            }, t.prototype.createObservableUpDownCounter = function(t, e) {
                return tt;
            }, t.prototype.addBatchObservableCallback = function(t, e) {}, t.prototype.removeBatchObservableCallback = function(t) {}, t;
        }(),
        B = function() {},
        U = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return M(e, t), e.prototype.add = function(t, e) {}, e;
        }(B),
        W = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return M(e, t), e.prototype.add = function(t, e) {}, e;
        }(B),
        z = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return M(e, t), e.prototype.record = function(t, e) {}, e;
        }(B),
        F = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return M(e, t), e.prototype.record = function(t, e) {}, e;
        }(B),
        Z = function() {
            function t() {}
            return t.prototype.addCallback = function(t) {}, t.prototype.removeCallback = function(t) {}, t;
        }(),
        V = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return M(e, t), e;
        }(Z),
        G = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return M(e, t), e;
        }(Z),
        H = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return M(e, t), e;
        }(Z),
        X = new D(),
        $ = new U(),
        q = new z(),
        K = new F(),
        Y = new W(),
        Q = new V(),
        J = new G(),
        tt = new H(),
        et = {
            get: function(t, e) {
                if (null != t) return t[e];
            },
            keys: function(t) {
                return null == t ? [] : Object.keys(t);
            }
        },
        rt = {
            set: function(t, e, r) {
                null != t && (t[e] = r);
            }
        },
        nt = void 0 && (void 0).__read || function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        },
        it = void 0 && (void 0).__spreadArray || function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
            return t.concat(n || Array.prototype.slice.call(e));
        },
        ot = function() {
            function t() {}
            return t.prototype.active = function() {
                return j;
            }, t.prototype.with = function(t, e, r) {
                for (var n = [], i = 3; i < arguments.length; i++) n[i - 3] = arguments[i];
                return e.call.apply(e, it([r], nt(n), !1));
            }, t.prototype.bind = function(t, e) {
                return e;
            }, t.prototype.enable = function() {
                return this;
            }, t.prototype.disable = function() {
                return this;
            }, t;
        }(),
        st = void 0 && (void 0).__read || function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        },
        at = void 0 && (void 0).__spreadArray || function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
            return t.concat(n || Array.prototype.slice.call(e));
        },
        ut = "context",
        ct = new ot(),
        lt = function() {
            function t() {}
            return t.getInstance = function() {
                return this._instance || (this._instance = new t()), this._instance;
            }, t.prototype.setGlobalContextManager = function(t) {
                return d(ut, t, O.instance());
            }, t.prototype.active = function() {
                return this._getContextManager().active();
            }, t.prototype.with = function(t, e, r) {
                for (var n, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
                return (n = this._getContextManager()).with.apply(n, at([t, e, r], st(i), !1));
            }, t.prototype.bind = function(t, e) {
                return this._getContextManager().bind(t, e);
            }, t.prototype._getContextManager = function() {
                return g(ut) || ct;
            }, t.prototype.disable = function() {
                this._getContextManager().disable(), v(ut, O.instance());
            }, t;
        }();
    ! function(t) {
        t[t.NONE = 0] = "NONE", t[t.SAMPLED = 1] = "SAMPLED";
    }(N || (N = {}));
    var ft = "0000000000000000",
        ht = "00000000000000000000000000000000",
        pt = {
            traceId: ht,
            spanId: ft,
            traceFlags: N.NONE
        },
        dt = function() {
            function t(t) {
                void 0 === t && (t = pt), this._spanContext = t;
            }
            return t.prototype.spanContext = function() {
                return this._spanContext;
            }, t.prototype.setAttribute = function(t, e) {
                return this;
            }, t.prototype.setAttributes = function(t) {
                return this;
            }, t.prototype.addEvent = function(t, e) {
                return this;
            }, t.prototype.addLink = function(t) {
                return this;
            }, t.prototype.addLinks = function(t) {
                return this;
            }, t.prototype.setStatus = function(t) {
                return this;
            }, t.prototype.updateName = function(t) {
                return this;
            }, t.prototype.end = function(t) {}, t.prototype.isRecording = function() {
                return !1;
            }, t.prototype.recordException = function(t, e) {}, t;
        }(),
        gt = P("OpenTelemetry Context Key SPAN");

    function vt(t) {
        return t.getValue(gt) || void 0;
    }

    function _t() {
        return vt(lt.getInstance().active());
    }

    function yt(t, e) {
        return t.setValue(gt, e);
    }

    function Tt(t) {
        return t.deleteValue(gt);
    }

    function mt(t, e) {
        return yt(t, new dt(e));
    }

    function bt(t) {
        var e;
        return null === (e = vt(t)) || void 0 === e ? void 0 : e.spanContext();
    }
    var Et = /^([0-9a-f]{32})$/i,
        St = /^[0-9a-f]{16}$/i;

    function Ot(t) {
        return Et.test(t) && t !== ht;
    }

    function wt(t) {
        return Ot(t.traceId) && (e = t.spanId, St.test(e) && e !== ft);
        var e;
    }

    function Lt(t) {
        return new dt(t);
    }
    var At = lt.getInstance(),
        It = function() {
            function t() {}
            return t.prototype.startSpan = function(t, e, r) {
                if (void 0 === r && (r = At.active()), Boolean(null == e ? void 0 : e.root)) return new dt();
                var n,
                    i = r && bt(r);
                return "object" == typeof(n = i) && "string" == typeof n.spanId && "string" == typeof n.traceId && "number" == typeof n.traceFlags && wt(i) ? new dt(i) : new dt();
            }, t.prototype.startActiveSpan = function(t, e, r, n) {
                var i, o, s;
                if (!(arguments.length < 2)) {
                    2 === arguments.length ? s = e : 3 === arguments.length ? (i = e, s = r) : (i = e, o = r, s = n);
                    var a = null != o ? o : At.active(),
                        u = this.startSpan(t, i, a),
                        c = yt(a, u);
                    return At.with(c, s, void 0, u);
                }
            }, t;
        }();
    var kt,
        Rt,
        Pt,
        Ct = new It(),
        Nt = function() {
            function t(t, e, r, n) {
                this._provider = t, this.name = e, this.version = r, this.options = n;
            }
            return t.prototype.startSpan = function(t, e, r) {
                return this._getTracer().startSpan(t, e, r);
            }, t.prototype.startActiveSpan = function(t, e, r, n) {
                var i = this._getTracer();
                return Reflect.apply(i.startActiveSpan, i, arguments);
            }, t.prototype._getTracer = function() {
                if (this._delegate) return this._delegate;
                var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
                return t ? (this._delegate = t, this._delegate) : Ct;
            }, t;
        }(),
        xt = new(function() {
            function t() {}
            return t.prototype.getTracer = function(t, e, r) {
                return new It();
            }, t;
        }())(),
        jt = function() {
            function t() {}
            return t.prototype.getTracer = function(t, e, r) {
                var n;
                return null !== (n = this.getDelegateTracer(t, e, r)) && void 0 !== n ? n : new Nt(this, t, e, r);
            }, t.prototype.getDelegate = function() {
                var t;
                return null !== (t = this._delegate) && void 0 !== t ? t : xt;
            }, t.prototype.setDelegate = function(t) {
                this._delegate = t;
            }, t.prototype.getDelegateTracer = function(t, e, r) {
                var n;
                return null === (n = this._delegate) || void 0 === n ? void 0 : n.getTracer(t, e, r);
            }, t;
        }();
    ! function(t) {
        t[t.NOT_RECORD = 0] = "NOT_RECORD", t[t.RECORD = 1] = "RECORD", t[t.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
    }(kt || (kt = {})),
    function(t) {
        t[t.INTERNAL = 0] = "INTERNAL", t[t.SERVER = 1] = "SERVER", t[t.CLIENT = 2] = "CLIENT", t[t.PRODUCER = 3] = "PRODUCER", t[t.CONSUMER = 4] = "CONSUMER";
    }(Rt || (Rt = {})),
    function(t) {
        t[t.UNSET = 0] = "UNSET", t[t.OK = 1] = "OK", t[t.ERROR = 2] = "ERROR";
    }(Pt || (Pt = {}));
    var Mt = lt.getInstance(),
        Dt = O.instance(),
        Bt = new(function() {
            function t() {}
            return t.prototype.getMeter = function(t, e, r) {
                return X;
            }, t;
        }())(),
        Ut = "metrics",
        Wt = function() {
            function t() {}
            return t.getInstance = function() {
                return this._instance || (this._instance = new t()), this._instance;
            }, t.prototype.setGlobalMeterProvider = function(t) {
                return d(Ut, t, O.instance());
            }, t.prototype.getMeterProvider = function() {
                return g(Ut) || Bt;
            }, t.prototype.getMeter = function(t, e, r) {
                return this.getMeterProvider().getMeter(t, e, r);
            }, t.prototype.disable = function() {
                v(Ut, O.instance());
            }, t;
        }().getInstance(),
        zt = function() {
            function t() {}
            return t.prototype.inject = function(t, e) {}, t.prototype.extract = function(t, e) {
                return t;
            }, t.prototype.fields = function() {
                return [];
            }, t;
        }(),
        Ft = P("OpenTelemetry Baggage Key");

    function Zt(t) {
        return t.getValue(Ft) || void 0;
    }

    function Vt() {
        return Zt(lt.getInstance().active());
    }

    function Gt(t, e) {
        return t.setValue(Ft, e);
    }

    function Ht(t) {
        return t.deleteValue(Ft);
    }
    var Xt = "propagation",
        $t = new zt(),
        qt = function() {
            function t() {
                this.createBaggage = R, this.getBaggage = Zt, this.getActiveBaggage = Vt, this.setBaggage = Gt, this.deleteBaggage = Ht;
            }
            return t.getInstance = function() {
                return this._instance || (this._instance = new t()), this._instance;
            }, t.prototype.setGlobalPropagator = function(t) {
                return d(Xt, t, O.instance());
            }, t.prototype.inject = function(t, e, r) {
                return void 0 === r && (r = rt), this._getGlobalPropagator().inject(t, e, r);
            }, t.prototype.extract = function(t, e, r) {
                return void 0 === r && (r = et), this._getGlobalPropagator().extract(t, e, r);
            }, t.prototype.fields = function() {
                return this._getGlobalPropagator().fields();
            }, t.prototype.disable = function() {
                v(Xt, O.instance());
            }, t.prototype._getGlobalPropagator = function() {
                return g(Xt) || $t;
            }, t;
        }(),
        Kt = qt.getInstance(),
        Yt = "trace",
        Qt = function() {
            function t() {
                this._proxyTracerProvider = new jt(), this.wrapSpanContext = Lt, this.isSpanContextValid = wt, this.deleteSpan = Tt, this.getSpan = vt, this.getActiveSpan = _t, this.getSpanContext = bt, this.setSpan = yt, this.setSpanContext = mt;
            }
            return t.getInstance = function() {
                return this._instance || (this._instance = new t()), this._instance;
            }, t.prototype.setGlobalTracerProvider = function(t) {
                var e = d(Yt, this._proxyTracerProvider, O.instance());
                return e && this._proxyTracerProvider.setDelegate(t), e;
            }, t.prototype.getTracerProvider = function() {
                return g(Yt) || this._proxyTracerProvider;
            }, t.prototype.getTracer = function(t, e) {
                return this.getTracerProvider().getTracer(t, e);
            }, t.prototype.disable = function() {
                v(Yt, O.instance()), this._proxyTracerProvider = new jt();
            }, t;
        }().getInstance(),
        Jt = P("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

    function te(t) {
        return !0 === t.getValue(Jt);
    }
    var ee = "baggage",
        re = void 0 && (void 0).__read || function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        };

    function ne(t) {
        var e = t.split(";");
        if (!(e.length <= 0)) {
            var r = e.shift();
            if (r) {
                var n = r.indexOf("=");
                if (!(n <= 0)) {
                    var i,
                        o,
                        s = decodeURIComponent(r.substring(0, n).trim()),
                        a = decodeURIComponent(r.substring(n + 1).trim());
                    return e.length > 0 && ("string" != typeof(o = e.join(";")) && (k.error("Cannot create baggage metadata from unknown type: " + typeof o), o = ""), i = {
                        __TYPE__: I,
                        toString: function() {
                            return o;
                        }
                    }), {
                        key: s,
                        value: a,
                        metadata: i
                    };
                }
            }
        }
    }
    var ie = function() {
            function t() {}
            return t.prototype.inject = function(t, e, r) {
                var n = Kt.getBaggage(t);
                if (n && !te(t)) {
                    var i = function(t) {
                            return t.getAllEntries().map(function(t) {
                                var e = re(t, 2),
                                    r = e[0],
                                    n = e[1],
                                    i = encodeURIComponent(r) + "=" + encodeURIComponent(n.value);
                                return void 0 !== n.metadata && (i += ";" + n.metadata.toString()), i;
                            });
                        }(n).filter(function(t) {
                            return t.length <= 4096;
                        }).slice(0, 180),
                        o = function(t) {
                            return t.reduce(function(t, e) {
                                var r = t + ("" !== t ? "," : "") + e;
                                return r.length > 8192 ? t : r;
                            }, "");
                        }(i);
                    o.length > 0 && r.set(e, ee, o);
                }
            }, t.prototype.extract = function(t, e, r) {
                var n = r.get(e, ee),
                    i = Array.isArray(n) ? n.join(",") : n;
                if (!i) return t;
                var o = {};
                return 0 === i.length ? t : (i.split(",").forEach(function(t) {
                    var e = ne(t);
                    if (e) {
                        var r = {
                            value: e.value
                        };
                        e.metadata && (r.metadata = e.metadata), o[e.key] = r;
                    }
                }), 0 === Object.entries(o).length ? t : Kt.setBaggage(t, Kt.createBaggage(o)));
            }, t.prototype.fields = function() {
                return [ee];
            }, t;
        }(),
        oe = void 0 && (void 0).__values || function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    };
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        },
        se = void 0 && (void 0).__read || function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        };

    function ae(t) {
        var e,
            r,
            n = {};
        if ("object" != typeof t || null == t) return n;
        try {
            for (var i = oe(Object.entries(t)), o = i.next(); !o.done; o = i.next()) {
                var s = se(o.value, 2),
                    a = s[0],
                    u = s[1];
                ue(a) ? ce(u) ? Array.isArray(u) ? n[a] = u.slice() : n[a] = u : Dt.warn("Invalid attribute value set for key: " + a) : Dt.warn("Invalid attribute key: " + a);
            }
        } catch (t) {
            e = {
                error: t
            };
        } finally {
            try {
                o && !o.done && (r = i.return) && r.call(i);
            } finally {
                if (e) throw e.error;
            }
        }
        return n;
    }

    function ue(t) {
        return "string" == typeof t && t.length > 0;
    }

    function ce(t) {
        return null == t || (Array.isArray(t) ? function(t) {
            var e, r, n;
            try {
                for (var i = oe(t), o = i.next(); !o.done; o = i.next()) {
                    var s = o.value;
                    if (null != s) {
                        if (!n) {
                            if (le(s)) {
                                n = typeof s;
                                continue;
                            }
                            return !1;
                        }
                        if (typeof s !== n) return !1;
                    }
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i);
                } finally {
                    if (e) throw e.error;
                }
            }
            return !0;
        }(t) : le(t));
    }

    function le(t) {
        switch (typeof t) {
            case "number":
            case "boolean":
            case "string":
                return !0;
        }
        return !1;
    }
    var fe,
        he = function(t) {
            Dt.error(function(t) {
                return "string" == typeof t ? t : JSON.stringify(function(t) {
                    for (var e = {}, r = t; null !== r;) Object.getOwnPropertyNames(r).forEach(function(t) {
                        if (!e[t]) {
                            var n = r[t];
                            n && (e[t] = String(n));
                        }
                    }), r = Object.getPrototypeOf(r);
                    return e;
                }(t));
            }(t));
        };

    function pe(t) {
        try {
            he(t);
        } catch (t) {}
    }! function(t) {
        t.AlwaysOff = "always_off", t.AlwaysOn = "always_on", t.ParentBasedAlwaysOff = "parentbased_always_off", t.ParentBasedAlwaysOn = "parentbased_always_on", t.ParentBasedTraceIdRatio = "parentbased_traceidratio", t.TraceIdRatio = "traceidratio";
    }(fe || (fe = {}));
    var de = ",",
        ge = ["OTEL_SDK_DISABLED"];

    function ve(t) {
        return ge.indexOf(t) > -1;
    }
    var _e = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_BLRP_EXPORT_TIMEOUT", "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE", "OTEL_BLRP_MAX_QUEUE_SIZE", "OTEL_BLRP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"];

    function ye(t) {
        return _e.indexOf(t) > -1;
    }
    var Te = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"];

    function me(t) {
        return Te.indexOf(t) > -1;
    }
    var be = 1 / 0,
        Ee = 128,
        Se = {
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
            OTEL_LOG_LEVEL: _.INFO,
            OTEL_NO_PATCH_MODULES: [],
            OTEL_PROPAGATORS: ["tracecontext", "baggage"],
            OTEL_RESOURCE_ATTRIBUTES: "",
            OTEL_SERVICE_NAME: "",
            OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: be,
            OTEL_ATTRIBUTE_COUNT_LIMIT: Ee,
            OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: be,
            OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: Ee,
            OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: be,
            OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: Ee,
            OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
            OTEL_SPAN_LINK_COUNT_LIMIT: 128,
            OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: 128,
            OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: 128,
            OTEL_TRACES_EXPORTER: "",
            OTEL_TRACES_SAMPLER: fe.ParentBasedAlwaysOn,
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

    function Oe(t, e, r) {
        if (void 0 !== r[t]) {
            var n = String(r[t]);
            e[t] = "true" === n.toLowerCase();
        }
    }

    function we(t, e, r, n, i) {
        if (void 0 === n && (n = -1 / 0), void 0 === i && (i = 1 / 0), void 0 !== r[t]) {
            var o = Number(r[t]);
            isNaN(o) || (e[t] = o < n ? n : o > i ? i : o);
        }
    }

    function Le(t, e, r, n) {
        void 0 === n && (n = de);
        var i = r[t];
        "string" == typeof i && (e[t] = i.split(n).map(function(t) {
            return t.trim();
        }));
    }
    var Ae = {
        ALL: _.ALL,
        VERBOSE: _.VERBOSE,
        DEBUG: _.DEBUG,
        INFO: _.INFO,
        WARN: _.WARN,
        ERROR: _.ERROR,
        NONE: _.NONE
    };

    function Ie(t, e, r) {
        var n = r[t];
        if ("string" == typeof n) {
            var i = Ae[n.toUpperCase()];
            null != i && (e[t] = i);
        }
    }

    function ke(t) {
        var e = {};
        for (var r in Se) {
            var n = r;
            if ("OTEL_LOG_LEVEL" === n) Ie(n, e, t);
            else if (ve(n)) Oe(n, e, t);
            else if (ye(n)) we(n, e, t);
            else if (me(n)) Le(n, e, t);
            else {
                var i = t[n];
                null != i && (e[n] = String(i));
            }
        }
        return e;
    }
    var Re = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof global ? global : {};

    function Pe() {
        var t = ke(Re);
        return Object.assign({}, Se, t);
    }
    var Ce,
        Ne = performance,
        xe = "exception.type",
        je = "exception.message",
        Me = "telemetry.sdk.name",
        De = "telemetry.sdk.language",
        Be = "telemetry.sdk.version",
        Ue = ((Ce = {})[Me] = "opentelemetry", Ce["process.runtime.name"] = "browser", Ce[De] = "webjs", Ce[Be] = "1.26.0", Ce);
    var We,
        ze = Math.pow(10, 6),
        Fe = Math.pow(10, 9);

    function Ze(t) {
        var e = t / 1e3;
        return [Math.trunc(e), Math.round(t % 1e3 * ze)];
    }

    function Ve() {
        var t = Ne.timeOrigin;
        if ("number" != typeof t) {
            var e = Ne;
            t = e.timing && e.timing.fetchStart;
        }
        return t;
    }

    function Ge(t) {
        return Ke(Ze(Ve()), Ze("number" == typeof t ? t : Ne.now()));
    }

    function He(t) {
        if ($e(t)) return t;
        if ("number" == typeof t) return t < Ve() ? Ge(t) : Ze(t);
        if (t instanceof Date) return Ze(t.getTime());
        throw TypeError("Invalid input type");
    }

    function Xe(t) {
        return t[0] * Fe + t[1];
    }

    function $e(t) {
        return Array.isArray(t) && 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1];
    }

    function qe(t) {
        return $e(t) || "number" == typeof t || t instanceof Date;
    }

    function Ke(t, e) {
        var r = [t[0] + e[0], t[1] + e[1]];
        return r[1] >= Fe && (r[1] -= Fe, r[0] += 1), r;
    }! function(t) {
        t[t.SUCCESS = 0] = "SUCCESS", t[t.FAILED = 1] = "FAILED";
    }(We || (We = {}));
    var Ye = void 0 && (void 0).__values || function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    };
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        },
        Qe = function() {
            function t(t) {
                var e;
                void 0 === t && (t = {}), this._propagators = null !== (e = t.propagators) && void 0 !== e ? e : [], this._fields = Array.from(new Set(this._propagators.map(function(t) {
                    return "function" == typeof t.fields ? t.fields() : [];
                }).reduce(function(t, e) {
                    return t.concat(e);
                }, [])));
            }
            return t.prototype.inject = function(t, e, r) {
                var n, i;
                try {
                    for (var o = Ye(this._propagators), s = o.next(); !s.done; s = o.next()) {
                        var a = s.value;
                        try {
                            a.inject(t, e, r);
                        } catch (t) {
                            Dt.warn("Failed to inject with " + a.constructor.name + ". Err: " + t.message);
                        }
                    }
                } catch (t) {
                    n = {
                        error: t
                    };
                } finally {
                    try {
                        s && !s.done && (i = o.return) && i.call(o);
                    } finally {
                        if (n) throw n.error;
                    }
                }
            }, t.prototype.extract = function(t, e, r) {
                return this._propagators.reduce(function(t, n) {
                    try {
                        return n.extract(t, e, r);
                    } catch (t) {
                        Dt.warn("Failed to inject with " + n.constructor.name + ". Err: " + t.message);
                    }
                    return t;
                }, t);
            }, t.prototype.fields = function() {
                return this._fields.slice();
            }, t;
        }(),
        Je = "[_0-9a-z-*/]",
        tr = new RegExp("^(?:" + ("[a-z]" + Je + "{0,255}") + "|" + ("[a-z0-9]" + Je + "{0,240}@[a-z]" + Je + "{0,13}") + ")$"),
        er = /^[ -~]{0,255}[!-~]$/,
        rr = /,|=/;
    var nr = function() {
            function t(t) {
                this._internalState = new Map(), t && this._parse(t);
            }
            return t.prototype.set = function(t, e) {
                var r = this._clone();
                return r._internalState.has(t) && r._internalState.delete(t), r._internalState.set(t, e), r;
            }, t.prototype.unset = function(t) {
                var e = this._clone();
                return e._internalState.delete(t), e;
            }, t.prototype.get = function(t) {
                return this._internalState.get(t);
            }, t.prototype.serialize = function() {
                var t = this;
                return this._keys().reduce(function(e, r) {
                    return e.push(r + "=" + t.get(r)), e;
                }, []).join(",");
            }, t.prototype._parse = function(t) {
                t.length > 512 || (this._internalState = t.split(",").reverse().reduce(function(t, e) {
                    var r = e.trim(),
                        n = r.indexOf("=");
                    if (-1 !== n) {
                        var i = r.slice(0, n),
                            o = r.slice(n + 1, e.length);
                        (function(t) {
                            return tr.test(t);
                        })(i) && function(t) {
                            return er.test(t) && !rr.test(t);
                        }(o) && t.set(i, o);
                    }
                    return t;
                }, new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
            }, t.prototype._keys = function() {
                return Array.from(this._internalState.keys()).reverse();
            }, t.prototype._clone = function() {
                var e = new t();
                return e._internalState = new Map(this._internalState), e;
            }, t;
        }(),
        ir = "traceparent",
        or = "tracestate",
        sr = new RegExp("^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$");
    var ar,
        ur,
        cr = function() {
            function t() {}
            return t.prototype.inject = function(t, e, r) {
                var n = Qt.getSpanContext(t);
                if (n && !te(t) && wt(n)) {
                    var i = "00-" + n.traceId + "-" + n.spanId + "-0" + Number(n.traceFlags || N.NONE).toString(16);
                    r.set(e, ir, i), n.traceState && r.set(e, or, n.traceState.serialize());
                }
            }, t.prototype.extract = function(t, e, r) {
                var n = r.get(e, ir);
                if (!n) return t;
                var i = Array.isArray(n) ? n[0] : n;
                if ("string" != typeof i) return t;
                var o = function(t) {
                    var e = sr.exec(t);
                    return e ? "00" === e[1] && e[5] ? null : {
                        traceId: e[2],
                        spanId: e[3],
                        traceFlags: parseInt(e[4], 16)
                    } : null;
                }(i);
                if (!o) return t;
                o.isRemote = !0;
                var s = r.get(e, or);
                if (s) {
                    var a = Array.isArray(s) ? s.join(",") : s;
                    o.traceState = new nr("string" == typeof a ? a : void 0);
                }
                return Qt.setSpanContext(t, o);
            }, t.prototype.fields = function() {
                return [ir, or];
            }, t;
        }(),
        lr = "[object Object]",
        fr = "[object Null]",
        hr = "[object Undefined]",
        pr = Function.prototype.toString,
        dr = pr.call(Object),
        gr = (ar = Object.getPrototypeOf, ur = Object, function(t) {
            return ar(ur(t));
        }),
        vr = Object.prototype,
        _r = vr.hasOwnProperty,
        yr = Symbol ? Symbol.toStringTag : void 0,
        Tr = vr.toString;

    function mr(t) {
        if (! function(t) {
                return null != t && "object" == typeof t;
            }(t) || function(t) {
                if (null == t) return void 0 === t ? hr : fr;
                return yr && yr in Object(t) ? function(t) {
                    var e = _r.call(t, yr),
                        r = t[yr],
                        n = !1;
                    try {
                        t[yr] = void 0, n = !0;
                    } catch (t) {}
                    var i = Tr.call(t);
                    n && (e ? t[yr] = r : delete t[yr]);
                    return i;
                }(t) : function(t) {
                    return Tr.call(t);
                }(t);
            }(t) !== lr) return !1;
        var e = gr(t);
        if (null === e) return !0;
        var r = _r.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r instanceof r && pr.call(r) === dr;
    }
    var br = 20;

    function Er(t) {
        return wr(t) ? t.slice() : t;
    }

    function Sr(t, e, r, n) {
        var i;
        if (void 0 === r && (r = 0), !(r > br)) {
            if (r++, Ir(t) || Ir(e) || Lr(e)) i = Er(e);
            else if (wr(t)) {
                if (i = t.slice(), wr(e))
                    for (var o = 0, s = e.length; o < s; o++) i.push(Er(e[o]));
                else if (Ar(e))
                    for (o = 0, s = (a = Object.keys(e)).length; o < s; o++) {
                        i[u = a[o]] = Er(e[u]);
                    }
            } else if (Ar(t))
                if (Ar(e)) {
                    if (! function(t, e) {
                            if (!mr(t) || !mr(e)) return !1;
                            return !0;
                        }(t, e)) return e;
                    i = Object.assign({}, t);
                    var a;
                    for (o = 0, s = (a = Object.keys(e)).length; o < s; o++) {
                        var u,
                            c = e[u = a[o]];
                        if (Ir(c)) void 0 === c ? delete i[u] : i[u] = c;
                        else {
                            var l = i[u],
                                f = c;
                            if (Or(t, u, n) || Or(e, u, n)) delete i[u];
                            else {
                                if (Ar(l) && Ar(f)) {
                                    var h = n.get(l) || [],
                                        p = n.get(f) || [];
                                    h.push({
                                        obj: t,
                                        key: u
                                    }), p.push({
                                        obj: e,
                                        key: u
                                    }), n.set(l, h), n.set(f, p);
                                }
                                i[u] = Sr(i[u], c, r, n);
                            }
                        }
                    }
                } else i = e;
            return i;
        }
    }

    function Or(t, e, r) {
        for (var n = r.get(t[e]) || [], i = 0, o = n.length; i < o; i++) {
            var s = n[i];
            if (s.key === e && s.obj === t) return !0;
        }
        return !1;
    }

    function wr(t) {
        return Array.isArray(t);
    }

    function Lr(t) {
        return "function" == typeof t;
    }

    function Ar(t) {
        return !Ir(t) && !wr(t) && !Lr(t) && "object" == typeof t;
    }

    function Ir(t) {
        return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || void 0 === t || t instanceof Date || t instanceof RegExp || null === t;
    }
    var kr = void 0 && (void 0).__values || function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
                    done: !t
                };
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    function Rr(t, e) {
        return "string" == typeof e ? t === e : !!t.match(e);
    }
    var Pr = function() {
            function t() {
                var t = this;
                this._promise = new Promise(function(e, r) {
                    t._resolve = e, t._reject = r;
                });
            }
            return Object.defineProperty(t.prototype, "promise", {
                get: function() {
                    return this._promise;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.resolve = function(t) {
                this._resolve(t);
            }, t.prototype.reject = function(t) {
                this._reject(t);
            }, t;
        }(),
        Cr = void 0 && (void 0).__read || function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        },
        Nr = void 0 && (void 0).__spreadArray || function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
            return t.concat(n || Array.prototype.slice.call(e));
        },
        xr = function() {
            function t(t, e) {
                this._callback = t, this._that = e, this._isCalled = !1, this._deferred = new Pr();
            }
            return Object.defineProperty(t.prototype, "isCalled", {
                get: function() {
                    return this._isCalled;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "promise", {
                get: function() {
                    return this._deferred.promise;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.call = function() {
                for (var t, e = this, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                if (!this._isCalled) {
                    this._isCalled = !0;
                    try {
                        Promise.resolve((t = this._callback).call.apply(t, Nr([this._that], Cr(r), !1))).then(function(t) {
                            return e._deferred.resolve(t);
                        }, function(t) {
                            return e._deferred.reject(t);
                        });
                    } catch (t) {
                        this._deferred.reject(t);
                    }
                }
                return this._deferred.promise;
            }, t;
        }();
    class jr {
        constructor() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Ge();
            this.instant = t;
        }
        static toISOString(t) {
            return e = t.instant, r = "" + "0".repeat(9) + e[1] + "Z", n = r.substr(r.length - 9 - 1), new Date(1e3 * e[0]).toISOString().replace("000Z", n);
            var e, r, n;
        }
        static toNanoSeconds(t) {
            return Xe(t.instant);
        }
    }
    var Mr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function Dr(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    }
    var Br,
        Ur,
        Wr,
        zr,
        Fr,
        Zr = {
            exports: {}
        },
        Vr = {
            exports: {}
        };

    function Gr() {
        return Br ? Vr.exports : (Br = 1, Vr.exports = function() {
            function t(t) {
                return !isNaN(parseFloat(t)) && isFinite(t);
            }

            function e(t) {
                return t.charAt(0).toUpperCase() + t.substring(1);
            }

            function r(t) {
                return function() {
                    return this[t];
                };
            }
            var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                i = ["columnNumber", "lineNumber"],
                o = ["fileName", "functionName", "source"],
                s = ["args"],
                a = ["evalOrigin"],
                u = n.concat(i, o, s, a);

            function c(t) {
                if (t)
                    for (var r = 0; r < u.length; r++) void 0 !== t[u[r]] && this["set" + e(u[r])](t[u[r]]);
            }
            c.prototype = {
                getArgs: function() {
                    return this.args;
                },
                setArgs: function(t) {
                    if ("[object Array]" !== Object.prototype.toString.call(t)) throw new TypeError("Args must be an Array");
                    this.args = t;
                },
                getEvalOrigin: function() {
                    return this.evalOrigin;
                },
                setEvalOrigin: function(t) {
                    if (t instanceof c) this.evalOrigin = t;
                    else {
                        if (!(t instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                        this.evalOrigin = new c(t);
                    }
                },
                toString: function() {
                    var t = this.getFileName() || "",
                        e = this.getLineNumber() || "",
                        r = this.getColumnNumber() || "",
                        n = this.getFunctionName() || "";
                    return this.getIsEval() ? t ? "[eval] (" + t + ":" + e + ":" + r + ")" : "[eval]:" + e + ":" + r : n ? n + " (" + t + ":" + e + ":" + r + ")" : t + ":" + e + ":" + r;
                }
            }, c.fromString = function(t) {
                var e = t.indexOf("("),
                    r = t.lastIndexOf(")"),
                    n = t.substring(0, e),
                    i = t.substring(e + 1, r).split(","),
                    o = t.substring(r + 1);
                if (0 === o.indexOf("@")) var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(o, ""),
                    a = s[1],
                    u = s[2],
                    l = s[3];
                return new c({
                    functionName: n,
                    args: i || void 0,
                    fileName: a,
                    lineNumber: u || void 0,
                    columnNumber: l || void 0
                });
            };
            for (var l = 0; l < n.length; l++) c.prototype["get" + e(n[l])] = r(n[l]), c.prototype["set" + e(n[l])] = function(t) {
                return function(e) {
                    this[t] = Boolean(e);
                };
            }(n[l]);
            for (var f = 0; f < i.length; f++) c.prototype["get" + e(i[f])] = r(i[f]), c.prototype["set" + e(i[f])] = function(e) {
                return function(r) {
                    if (!t(r)) throw new TypeError(e + " must be a Number");
                    this[e] = Number(r);
                };
            }(i[f]);
            for (var h = 0; h < o.length; h++) c.prototype["get" + e(o[h])] = r(o[h]), c.prototype["set" + e(o[h])] = function(t) {
                return function(e) {
                    this[t] = String(e);
                };
            }(o[h]);
            return c;
        }());
    }
    var Hr,
        Xr,
        $r,
        qr,
        Kr,
        Yr,
        Qr,
        Jr = Dr(Zr.exports = (Ur = Gr(), Wr = /(^|@)\S+:\d+/, zr = /^\s*at .*(\S+:\d+|\(native\))/m, Fr = /^(eval@)?(\[native code])?$/, {
            parse: function(t) {
                if (void 0 !== t.stacktrace || void 0 !== t["opera#sourceloc"]) return this.parseOpera(t);
                if (t.stack && t.stack.match(zr)) return this.parseV8OrIE(t);
                if (t.stack) return this.parseFFOrSafari(t);
                throw new Error("Cannot parse given Error object");
            },
            extractLocation: function(t) {
                if (-1 === t.indexOf(":")) return [t];
                var e = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/[()]/g, ""));
                return [e[1], e[2] || void 0, e[3] || void 0];
            },
            parseV8OrIE: function(t) {
                return t.stack.split("\n").filter(function(t) {
                    return !!t.match(zr);
                }, this).map(function(t) {
                    t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                    var e = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                        r = e.match(/ (\(.+\)$)/);
                    e = r ? e.replace(r[0], "") : e;
                    var n = this.extractLocation(r ? r[1] : e),
                        i = r && e || void 0,
                        o = ["eval", "<anonymous>"].indexOf(n[0]) > -1 ? void 0 : n[0];
                    return new Ur({
                        functionName: i,
                        fileName: o,
                        lineNumber: n[1],
                        columnNumber: n[2],
                        source: t
                    });
                }, this);
            },
            parseFFOrSafari: function(t) {
                return t.stack.split("\n").filter(function(t) {
                    return !t.match(Fr);
                }, this).map(function(t) {
                    if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new Ur({
                        functionName: t
                    });
                    var e = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                        r = t.match(e),
                        n = r && r[1] ? r[1] : void 0,
                        i = this.extractLocation(t.replace(e, ""));
                    return new Ur({
                        functionName: n,
                        fileName: i[0],
                        lineNumber: i[1],
                        columnNumber: i[2],
                        source: t
                    });
                }, this);
            },
            parseOpera: function(t) {
                return !t.stacktrace || t.message.indexOf("\n") > -1 && t.message.split("\n").length > t.stacktrace.split("\n").length ? this.parseOpera9(t) : t.stack ? this.parseOpera11(t) : this.parseOpera10(t);
            },
            parseOpera9: function(t) {
                for (var e = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), n = [], i = 2, o = r.length; i < o; i += 2) {
                    var s = e.exec(r[i]);
                    s && n.push(new Ur({
                        fileName: s[2],
                        lineNumber: s[1],
                        source: r[i]
                    }));
                }
                return n;
            },
            parseOpera10: function(t) {
                for (var e = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), n = [], i = 0, o = r.length; i < o; i += 2) {
                    var s = e.exec(r[i]);
                    s && n.push(new Ur({
                        functionName: s[3] || void 0,
                        fileName: s[2],
                        lineNumber: s[1],
                        source: r[i]
                    }));
                }
                return n;
            },
            parseOpera11: function(t) {
                return t.stack.split("\n").filter(function(t) {
                    return !!t.match(Wr) && !t.match(/^Error created at/);
                }, this).map(function(t) {
                    var e,
                        r = t.split("@"),
                        n = this.extractLocation(r.pop()),
                        i = r.shift() || "",
                        o = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                    i.match(/\(([^)]*)\)/) && (e = i.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                    var s = void 0 === e || "[arguments not available]" === e ? void 0 : e.split(",");
                    return new Ur({
                        functionName: o,
                        args: s,
                        fileName: n[0],
                        lineNumber: n[1],
                        columnNumber: n[2],
                        source: t
                    });
                }, this);
            }
        }));
    class tn {
        constructor(t) {
            this.name = t.name, this.message = t.message, t.stack && (this.stack = o(Hr, Hr, "m", Xr).call(Hr, t));
        }
    }
    Hr = tn, Xr = function(t) {
        const e = Jr.parse(t),
            r = t,
            n = (null == r ? void 0 : r.extraStack) ? `ExtraStack: ${r.extraStack}` : "",
            i = e.map(t => t.source).join("\n");
        return `${t.name}: ${t.message}\n${i}\n${n}`;
    };
    class en {
        constructor(_ref) {
            let {
                type: t,
                category: e,
                message: r,
                error: n,
                visibility: i,
                timestamp: o = new jr(),
                span: s,
                errorCode: a,
                attributes: u
            } = _ref;
            this.type = t, this.category = e, this.message = r, n && (this.error = new tn(n)), this.visibility = i, this.timestamp = o, this.span = s, this.errorCode = a, this.attributes = u;
        }
    }
    _exports.Log = en;
    class rn {
        constructor() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
            $r.add(this), qr.set(this, void 0), s(this, qr, t, "f");
        }
        closeCircuit(t) {
            o(this, qr, "f").delete(t);
        }
        run(t, e) {
            return i(this, void 0, void 0, function*() {
                const r = o(this, qr, "f").get(t);
                return void 0 === r ? o(this, $r, "m", Yr).call(this, t, e) : r.iterationsUntilRetry > 0 ? (r.iterationsUntilRetry--, 2) : o(this, $r, "m", Qr).call(this, t, r, e);
            });
        }
    }
    qr = new WeakMap(), $r = new WeakSet(), Kr = function(t) {
        o(this, qr, "f").set(t, {
            retriesFailed: 0,
            iterationsUntilRetry: 5
        });
    }, Yr = function(t, e) {
        return i(this, void 0, void 0, function*() {
            try {
                return yield e(), 0;
            } catch (e) {
                return o(this, $r, "m", Kr).call(this, t), console.debug(`Circuit breaker ${t} was opened: ${e}`), 1;
            }
        });
    }, Qr = function(t, e, r) {
        return i(this, void 0, void 0, function*() {
            try {
                return yield r(), this.closeCircuit(t), console.debug(`Circuit breaker ${t} was closed`), 0;
            } catch (t) {
                return e.retriesFailed++, e.iterationsUntilRetry = Math.min(5 * e.retriesFailed, 10), 1;
            }
        });
    };
    const nn = new Error("request for lock canceled");
    var on = function(t, e, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function s(t) {
                try {
                    u(n.next(t));
                } catch (t) {
                    o(t);
                }
            }

            function a(t) {
                try {
                    u(n.throw(t));
                } catch (t) {
                    o(t);
                }
            }

            function u(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e);
                })).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
        });
    };
    class sn {
        constructor(t) {
            let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nn;
            this._value = t, this._cancelError = e, this._queue = [], this._weightedWaiters = [];
        }
        acquire() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
            return new Promise((r, n) => {
                const i = {
                        resolve: r,
                        reject: n,
                        weight: t,
                        priority: e
                    },
                    o = an(this._queue, t => e <= t.priority); -
                1 === o && t <= this._value ? this._dispatchItem(i) : this._queue.splice(o + 1, 0, i);
            });
        }
        runExclusive(t) {
            return on(this, arguments, void 0, function(t) {
                var _this = this;
                let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                return function*() {
                    const [n, i] = yield _this.acquire(e, r);
                    try {
                        return yield t(n);
                    } finally {
                        i();
                    }
                }();
            });
        }
        waitForUnlock() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
            return this._couldLockImmediately(t, e) ? Promise.resolve() : new Promise(r => {
                this._weightedWaiters[t - 1] || (this._weightedWaiters[t - 1] = []),
                    function(t, e) {
                        const r = an(t, t => e.priority <= t.priority);
                        t.splice(r + 1, 0, e);
                    }(this._weightedWaiters[t - 1], {
                        resolve: r,
                        priority: e
                    });
            });
        }
        isLocked() {
            return this._value <= 0;
        }
        getValue() {
            return this._value;
        }
        setValue(t) {
            this._value = t, this._dispatchQueue();
        }
        release() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
            this._value += t, this._dispatchQueue();
        }
        cancel() {
            this._queue.forEach(t => t.reject(this._cancelError)), this._queue = [];
        }
        _dispatchQueue() {
            for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value;) this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters();
        }
        _dispatchItem(t) {
            const e = this._value;
            this._value -= t.weight, t.resolve([e, this._newReleaser(t.weight)]);
        }
        _newReleaser(t) {
            let e = !1;
            return () => {
                e || (e = !0, this.release(t));
            };
        }
        _drainUnlockWaiters() {
            if (0 === this._queue.length)
                for (let t = this._value; t > 0; t--) {
                    const e = this._weightedWaiters[t - 1];
                    e && (e.forEach(t => t.resolve()), this._weightedWaiters[t - 1] = []);
                } else {
                    const t = this._queue[0].priority;
                    for (let e = this._value; e > 0; e--) {
                        const r = this._weightedWaiters[e - 1];
                        if (!r) continue;
                        const n = r.findIndex(e => e.priority <= t);
                        (-1 === n ? r : r.splice(0, n)).forEach(t => t.resolve());
                    }
                }
        }
        _couldLockImmediately(t, e) {
            return (0 === this._queue.length || this._queue[0].priority < e) && t <= this._value;
        }
    }

    function an(t, e) {
        for (let r = t.length - 1; r >= 0; r--)
            if (e(t[r])) return r;
        return -1;
    }
    var un,
        cn = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, o) {
                function s(t) {
                    try {
                        u(n.next(t));
                    } catch (t) {
                        o(t);
                    }
                }

                function a(t) {
                    try {
                        u(n.throw(t));
                    } catch (t) {
                        o(t);
                    }
                }

                function u(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e);
                    })).then(s, a);
                }
                u((n = n.apply(t, e || [])).next());
            });
        };
    class ln {
        constructor(t) {
            this._semaphore = new sn(1, t);
        }
        acquire() {
            return cn(this, arguments, void 0, function() {
                var _this2 = this;
                let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return function*() {
                    const [, e] = yield _this2._semaphore.acquire(1, t);
                    return e;
                }();
            });
        }
        runExclusive(t) {
            let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this._semaphore.runExclusive(() => t(), 1, e);
        }
        isLocked() {
            return this._semaphore.isLocked();
        }
        waitForUnlock() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            return this._semaphore.waitForUnlock(1, t);
        }
        release() {
            this._semaphore.isLocked() && this._semaphore.release();
        }
        cancel() {
            return this._semaphore.cancel();
        }
    }! function(t) {
        t[t.Debug = 1] = "Debug", t[t.Info = 2] = "Info", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Trace = 5] = "Trace";
    }(un || (un = {}));
    const fn = {
        Debug: un.Debug,
        Info: un.Info,
        Warning: un.Warning,
        Error: un.Error,
        Trace: un.Trace
    };
    var hn = _exports.LogType = un;
    class pn {
        constructor(t, e, r, n) {
            this.logId = t, this.log = e, this.logType = r, this.transportId = n;
        }
    }
    const dn = "logger-offline-db",
        gn = "byTransportId",
        vn = "transportId",
        _n = (t, e) => e.some(e => t instanceof e);
    let yn, Tn;
    const mn = new WeakMap(),
        bn = new WeakMap(),
        En = new WeakMap(),
        Sn = new WeakMap(),
        On = new WeakMap();
    let wn = {
        get(t, e, r) {
            if (t instanceof IDBTransaction) {
                if ("done" === e) return bn.get(t);
                if ("objectStoreNames" === e) return t.objectStoreNames || En.get(t);
                if ("store" === e) return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0]);
            }
            return In(t[e]);
        },
        set: (t, e, r) => (t[e] = r, !0),
        has: (t, e) => t instanceof IDBTransaction && ("done" === e || "store" === e) || e in t
    };

    function Ln(t) {
        return t !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Tn || (Tn = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function() {
            for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
                e[_key] = arguments[_key];
            }
            return t.apply(kn(this), e), In(mn.get(this));
        } : function() {
            for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                e[_key2] = arguments[_key2];
            }
            return In(t.apply(kn(this), e));
        } : function(e) {
            for (var _len3 = arguments.length, r = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                r[_key3 - 1] = arguments[_key3];
            }
            const n = t.call(kn(this), e, ...r);
            return En.set(n, e.sort ? e.sort() : [e]), In(n);
        };
    }

    function An(t) {
        return "function" == typeof t ? Ln(t) : (t instanceof IDBTransaction && function(t) {
            if (bn.has(t)) return;
            const e = new Promise((e, r) => {
                const n = () => {
                        t.removeEventListener("complete", i), t.removeEventListener("error", o), t.removeEventListener("abort", o);
                    },
                    i = () => {
                        e(), n();
                    },
                    o = () => {
                        r(t.error || new DOMException("AbortError", "AbortError")), n();
                    };
                t.addEventListener("complete", i), t.addEventListener("error", o), t.addEventListener("abort", o);
            });
            bn.set(t, e);
        }(t), _n(t, yn || (yn = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(t, wn) : t);
    }

    function In(t) {
        if (t instanceof IDBRequest) return function(t) {
            const e = new Promise((e, r) => {
                const n = () => {
                        t.removeEventListener("success", i), t.removeEventListener("error", o);
                    },
                    i = () => {
                        e(In(t.result)), n();
                    },
                    o = () => {
                        r(t.error), n();
                    };
                t.addEventListener("success", i), t.addEventListener("error", o);
            });
            return e.then(e => {
                e instanceof IDBCursor && mn.set(e, t);
            }).catch(() => {}), On.set(e, t), e;
        }(t);
        if (Sn.has(t)) return Sn.get(t);
        const e = An(t);
        return e !== t && (Sn.set(t, e), On.set(e, t)), e;
    }
    const kn = t => On.get(t);
    const Rn = ["get", "getKey", "getAll", "getAllKeys", "count"],
        Pn = ["put", "add", "delete", "clear"],
        Cn = new Map();

    function Nn(t, e) {
        if (!(t instanceof IDBDatabase) || e in t || "string" != typeof e) return;
        if (Cn.get(e)) return Cn.get(e);
        const r = e.replace(/FromIndex$/, ""),
            n = e !== r,
            i = Pn.includes(r);
        if (!(r in (n ? IDBIndex : IDBObjectStore).prototype) || !i && !Rn.includes(r)) return;
        const o = async function(t) {
            const o = this.transaction(t, i ? "readwrite" : "readonly");
            let s = o.store;
            for (var _len4 = arguments.length, e = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                e[_key4 - 1] = arguments[_key4];
            }
            return n && (s = s.index(e.shift())), (await Promise.all([s[r](...e), i && o.done]))[0];
        };
        return Cn.set(e, o), o;
    }
    var xn, jn, Mn, Dn, Bn, Un, Wn, zn, Fn;
    wn = (t => ({
        ...t,
        get: (e, r, n) => Nn(e, r) || t.get(e, r, n),
        has: (e, r) => !!Nn(e, r) || t.has(e, r)
    }))(wn);
    const Zn = "next";
    class Vn {
        constructor(_ref2) {
            let {
                dbName: t,
                tableName: e,
                version: r,
                indices: n,
                cursorToRecord: i,
                propertyKey: o
            } = _ref2;
            xn.add(this), jn.set(this, void 0), Mn.set(this, void 0), Dn.set(this, void 0), Bn.set(this, void 0), Un.set(this, void 0), Wn.set(this, void 0), s(this, jn, t, "f"), s(this, Mn, e, "f"), s(this, Bn, r, "f"), s(this, Un, n, "f"), s(this, Wn, i, "f"), s(this, Dn, o, "f");
        }
        open() {
            return i(this, void 0, void 0, function*() {
                const t = o(this, Mn, "f"),
                    e = o(this, Un, "f"),
                    r = {
                        keyPath: o(this, Dn, "f"),
                        autoIncrement: !o(this, Dn, "f")
                    };
                return function(t, e) {
                    let {
                        blocked: r,
                        upgrade: n,
                        blocking: i,
                        terminated: o
                    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    const s = indexedDB.open(t, e),
                        a = In(s);
                    return n && s.addEventListener("upgradeneeded", t => {
                        n(In(s.result), t.oldVersion, t.newVersion, In(s.transaction), t);
                    }), r && s.addEventListener("blocked", t => r(t.oldVersion, t.newVersion, t)), a.then(t => {
                        o && t.addEventListener("close", () => o()), i && t.addEventListener("versionchange", t => i(t.oldVersion, t.newVersion, t));
                    }).catch(() => {}), a;
                }(o(this, jn, "f"), o(this, Bn, "f"), {
                    upgrade(n, i) {
                        if (i < 1) {
                            const i = n.createObjectStore(t, r);
                            for (const t of e) i.createIndex(t.name, t.field);
                        }
                    }
                });
            });
        }
        getAll() {
            return i(this, arguments, void 0, function() {
                var _this3 = this;
                let {
                    maxRecords: t = 100,
                    sortAsc: e = !0
                } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return function*() {
                    const r = yield _this3.open();
                    try {
                        const n = r.transaction(o(_this3, Mn, "f")).objectStore(o(_this3, Mn, "f"));
                        return yield o(_this3, xn, "m", zn).call(_this3, yield n.openCursor(null, e ? Zn : "prev"), t);
                    } finally {
                        r.close();
                    }
                }();
            });
        }
        getByIndex(t, e) {
            return i(this, arguments, void 0, function(t, e) {
                var _this4 = this;
                let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
                let n = arguments.length > 3 ? arguments[3] : undefined;
                return function*() {
                    const i = yield _this4.open();
                    try {
                        const s = i.transaction(o(_this4, Mn, "f")).objectStore(o(_this4, Mn, "f"));
                        return yield o(_this4, xn, "m", zn).call(_this4, yield s.index(t).openCursor(e), r, n);
                    } finally {
                        i.close();
                    }
                }();
            });
        }
        put(t) {
            return i(this, void 0, void 0, function*() {
                const e = yield this.open();
                try {
                    const r = e.transaction(o(this, Mn, "f"), "readwrite").objectStore(o(this, Mn, "f"));
                    for (const e of t) yield r.put(e);
                } finally {
                    e.close();
                }
            });
        }
        count() {
            return i(this, void 0, void 0, function*() {
                const t = yield this.open();
                try {
                    return yield t.count(o(this, Mn, "f"));
                } finally {
                    t.close();
                }
            });
        }
        delete(t) {
            return i(this, void 0, void 0, function*() {
                const e = yield this.open();
                try {
                    yield e.delete(o(this, Mn, "f"), t);
                } finally {
                    e.close();
                }
            });
        }
        deleteMultiple(t) {
            return i(this, void 0, void 0, function*() {
                const e = yield this.open();
                try {
                    const r = t.map(t => e.delete(o(this, Mn, "f"), t));
                    yield Promise.all(r);
                } finally {
                    e.close();
                }
            });
        }
        deleteByIndex(t, e) {
            return i(this, arguments, void 0, function(t, e) {
                var _this5 = this;
                let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
                return function*() {
                    const n = yield _this5.open();
                    try {
                        const i = n.transaction(o(_this5, Mn, "f"), "readwrite").objectStore(o(_this5, Mn, "f"));
                        return yield o(_this5, xn, "m", Fn).call(_this5, yield i.index(t).openCursor(e), r);
                    } finally {
                        n.close();
                    }
                }();
            });
        }
        deleteRecords() {
            return i(this, arguments, void 0, function() {
                var _this6 = this;
                let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
                return function*() {
                    const e = yield _this6.open();
                    try {
                        const r = e.transaction(o(_this6, Mn, "f"), "readwrite").objectStore(o(_this6, Mn, "f"));
                        return yield o(_this6, xn, "m", Fn).call(_this6, yield r.openCursor(null, Zn), t);
                    } finally {
                        e.close();
                    }
                }();
            });
        }
    }
    jn = new WeakMap(), Mn = new WeakMap(), Dn = new WeakMap(), Bn = new WeakMap(), Un = new WeakMap(), Wn = new WeakMap(), xn = new WeakSet(), zn = function(t) {
        return i(this, arguments, void 0, function(t) {
            var _this7 = this;
            let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
            let r = arguments.length > 2 ? arguments[2] : undefined;
            return function*() {
                const n = [];
                for (; t && n.length < e;) {
                    const e = o(_this7, Wn, "f").call(_this7, t);
                    r && !r(e) || n.push(e), t = yield t.continue();
                }
                return n;
            }();
        });
    }, Fn = function(t, e) {
        return i(this, void 0, void 0, function*() {
            let r = 0;
            for (; t && r < e;) yield t.delete(), r++, t = yield t.continue();
            return r;
        });
    };
    class Gn extends Vn {
        constructor() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dn;
            super({
                dbName: t,
                tableName: "logs",
                cursorToRecord: t => new pn(t.primaryKey, t.value.log, t.value.logType, t.value.transportId),
                indices: [{
                    name: gn,
                    field: vn
                }, {
                    name: "byLogType",
                    field: "logType"
                }],
                version: 1
            });
        }
        getByTransportId(t, e) {
            return i(this, void 0, void 0, function*() {
                return this.getByIndex("byTransportId", t, e);
            });
        }
        getByLogType(t, e) {
            return i(this, void 0, void 0, function*() {
                return this.getByIndex("byLogType", t, e);
            });
        }
        putLog(t, e) {
            return i(this, void 0, void 0, function*() {
                return this.put([{
                    log: t,
                    logType: t.type,
                    transportId: e
                }]);
            });
        }
        deleteByLogType(t, e) {
            return i(this, void 0, void 0, function*() {
                return this.deleteByIndex("byLogType", t, e);
            });
        }
    }
    var Hn;
    class Xn {
        constructor(_ref3) {
            let {
                databaseName: t,
                database: e = new Gn(t)
            } = _ref3;
            Hn.set(this, void 0), s(this, Hn, e, "f");
        }
        readLogs(t) {
            return i(this, void 0, void 0, function*() {
                return o(this, Hn, "f").getAll({
                    sortAsc: !0,
                    maxRecords: t
                });
            });
        }
        readLogsByTransport(t, e) {
            return i(this, void 0, void 0, function*() {
                return o(this, Hn, "f").getByTransportId(t, e);
            });
        }
        removeLogs(t) {
            return i(this, void 0, void 0, function*() {
                return o(this, Hn, "f").deleteMultiple(t);
            });
        }
        insertLog(t, e) {
            return i(this, void 0, void 0, function*() {
                return o(this, Hn, "f").putLog(t, e);
            });
        }
        countLogs() {
            return i(this, void 0, void 0, function*() {
                return o(this, Hn, "f").count();
            });
        }
        isFull() {
            return i(this, void 0, void 0, function*() {
                return (yield o(this, Hn, "f").count()) >= 1e4;
            });
        }
        discardLogs() {
            return i(this, arguments, void 0, function() {
                var _this8 = this;
                let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
                return function*() {
                    const e = Object.keys(hn).filter(t => isNaN(Number(t)));
                    let r = t;
                    for (const t of e) {
                        const e = fn[t];
                        if (r -= yield o(_this8, Hn, "f").deleteByLogType(e, r), r <= 0) break;
                    }
                    return r;
                }();
            });
        }
    }
    var $n;
    Hn = new WeakMap(),
        function(t) {
            t.IsAggregateProxy = "outsystems.aggregation.proxy", t.AggregationSize = "outsystems.aggregation.size", t.IsOutlier = "outsystems.aggregation.outlier", t.AverageDuration = "outsystems.aggregation.duration.average", t.MaxDuration = "outsystems.aggregation.duration.max", t.MinDuration = "outsystems.aggregation.duration.min", t.IsNonAggregable = "osinternal.spanIsNonAggregable", t.ChildrenNames = "osinternal.childrenNames", t.functionKey = "outsystems.function.key";
        }($n || ($n = {}));

    function qn(t, e) {
        return t < e ? -1 : e < t ? 1 : 0;
    }

    function Kn(t) {
        return t.attributes[$n.functionKey];
    }

    function Yn(t, e, r) {
        var n;
        const i = t.name,
            o = null == r ? void 0 : r(t),
            s = null !== (n = t.attributes[$n.ChildrenNames]) && void 0 !== n ? n : [];
        s.sort(qn);
        return `${t.attributes[$n.IsNonAggregable] ? "NonAggregable." : ""}${e}.${i}.${o}(${s.join(",")})`;
    }
    const Qn = {
        absolute: (_ref4, r) => {
            let {
                min: t,
                max: e
            } = _ref4;
            return "number" == typeof t && r < t || "number" == typeof e && r > e;
        },
        relative: (_ref5, r, n) => {
            let {
                min: t,
                max: e
            } = _ref5;
            return Qn.absolute({
                min: "number" == typeof t ? n + t : void 0,
                max: "number" == typeof e ? n + e : void 0
            }, r);
        },
        ratio: (_ref6, i, o) => {
            let {
                lower: t,
                upper: e,
                max: r,
                min: n
            } = _ref6;
            return Qn.relative({
                min: "number" == typeof t ? Math.min(o * t, null != n ? n : 1 / 0) : void 0,
                max: "number" == typeof e ? Math.max(o * e, null != r ? r : -1 / 0) : void 0
            }, i, o);
        }
    };

    function Jn(t, e, r) {
        return Qn[t.type](t, e, r);
    }
    var ti, ei, ri, ni, ii, oi, si, ai, ui, ci, li, fi, hi;
    class pi {
        constructor(t) {
            ti.set(this, void 0), s(this, ti, t, "f");
        }
        isOutlier(t, e) {
            for (const [r, n] of Object.entries(o(this, ti, "f"))) {
                const i = t.attributes[r],
                    o = e.attributes[r];
                if ((void 0 !== i || void 0 !== o) && (void 0 === i || void 0 === o || Jn(n, i, o))) return !0;
            }
            return !1;
        }
    }
    ti = new WeakMap();
    class di {
        constructor(_ref7) {
            let {
                storage: t,
                outlierDetector: e = new pi({
                    [$n.AverageDuration]: {
                        type: "ratio",
                        upper: .1,
                        max: 5e7
                    }
                }),
                getSpanObjectId: r = Kn
            } = _ref7;
            ei.add(this), ri.set(this, void 0), ni.set(this, void 0), ii.set(this, void 0), s(this, ri, t, "f"), s(this, ni, e, "f"), s(this, ii, r, "f");
        }
        aggregate(t, e) {
            return i(this, void 0, void 0, function*() {
                const r = yield o(this, ri, "f").readSpansByParentId(t.spanId),
                    n = o(this, ei, "m", ai).call(this, t),
                    i = function(t, e) {
                        return !(t.attributes[$n.IsNonAggregable] || e.some(t => t.attributes[$n.IsNonAggregable]));
                    }(n, r);
                if (!i) return void(yield o(this, ri, "f").insertSpans([o(this, ei, "m", ci).call(this, n)], e));
                const s = yield o(this, ei, "m", oi).call(this, n, e);
                if (s) {
                    if (o(this, ni, "f").isOutlier(n, s)) yield o(this, ri, "f").insertSpans([o(this, ei, "m", ui).call(this, n)], e);
                    else {
                        const n = o(this, ei, "m", si).call(this, t, s),
                            i = o(this, ei, "m", li).call(this, r, n);
                        yield o(this, ri, "f").insertSpans([n, ...i], e);
                    }
                } else yield o(this, ri, "f").insertSpans([n], e);
            });
        }
    }
    ri = new WeakMap(), ni = new WeakMap(), ii = new WeakMap(), ei = new WeakSet(), oi = function(t, e) {
        return i(this, void 0, void 0, function*() {
            const r = Yn(t, e, o(this, ii, "f")),
                [n] = yield o(this, ri, "f").readSpansByAggregateSignature(r);
            return n;
        });
    }, si = function(t, e) {
        var r;
        const n = null !== (r = e.attributes[$n.AggregationSize]) && void 0 !== r ? r : 1,
            i = e.attributes[$n.AverageDuration],
            o = e.attributes[$n.MaxDuration],
            s = e.attributes[$n.MinDuration],
            a = t.endTimeUnixNano - t.startTimeUnixNano;
        return Object.assign(Object.assign({}, e), {
            attributes: Object.assign(Object.assign({}, e.attributes), {
                [$n.IsAggregateProxy]: !0,
                [$n.AggregationSize]: n + 1,
                [$n.AverageDuration]: (i * n + a) / (n + 1),
                [$n.MaxDuration]: Math.max(o, a),
                [$n.MinDuration]: Math.min(s, a)
            }),
            parentSpanId: e.parentSpanId === t.spanId ? t.parentSpanId : e.parentSpanId
        });
    }, ai = function(t) {
        const e = t.endTimeUnixNano - t.startTimeUnixNano;
        return Object.assign(Object.assign({}, t), {
            attributes: Object.assign(Object.assign({}, t.attributes), {
                [$n.IsAggregateProxy]: !1,
                [$n.AverageDuration]: e,
                [$n.MaxDuration]: e,
                [$n.MinDuration]: e
            })
        });
    }, ui = function(t) {
        return Object.assign(Object.assign({}, t), {
            attributes: Object.assign(Object.assign({}, t.attributes), {
                [$n.IsOutlier]: !0,
                [$n.IsNonAggregable]: !0
            })
        });
    }, ci = function(t) {
        return Object.assign(Object.assign({}, t), {
            attributes: Object.assign(Object.assign({}, t.attributes), {
                [$n.IsNonAggregable]: !0
            })
        });
    }, li = function(t, e) {
        return t.flatMap(t => t.spanId !== e.spanId ? [Object.assign(Object.assign({}, t), {
            parentSpanId: e.spanId
        })] : []);
    };
    class gi {
        constructor(_ref8) {
            let {
                spanId: t,
                span: e,
                transportId: r,
                aggregateSignature: n
            } = _ref8;
            this.spanId = t, this.span = e, this.transportId = r, this.parentId = e.parentSpanId, this.aggregateSignature = null != n ? n : "";
        }
    }
    class vi extends Vn {
        constructor() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dn;
            let e = arguments.length > 1 ? arguments[1] : undefined;
            super({
                dbName: t,
                tableName: "spans",
                version: 1,
                propertyKey: e,
                cursorToRecord: t => new gi({
                    spanId: t.primaryKey,
                    span: t.value.span,
                    transportId: t.value.transportId,
                    aggregateSignature: t.value.aggregateSignature
                }),
                indices: [{
                    name: gn,
                    field: vn
                }, {
                    name: "byAggregateSignature",
                    field: "aggregateSignature"
                }, {
                    name: "byParentId",
                    field: "parentId"
                }]
            }), fi.add(this);
        }
        getByAggregateSignature(t, e) {
            return this.getByIndex("byAggregateSignature", t, e);
        }
        getByParentId(t, e) {
            return this.getByIndex("byParentId", t, e);
        }
        getByTransportId(t, e) {
            return this.getByIndex("byTransportId", t, e);
        }
        getTopLevelByTransportId(t, e) {
            return this.getByIndex("byTransportId", t, e, t => void 0 === t.parentId);
        }
        putSpans(t, e) {
            return this.put(t.map(t => o(this, fi, "m", hi).call(this, t, e)));
        }
    }
    var _i;
    fi = new WeakSet(), hi = function(t, e) {
        return {
            span: t,
            transportId: e,
            spanId: t.spanId,
            aggregateSignature: Yn(t, e, t => t.attributes["outsystems.function.key"]),
            parentId: t.parentSpanId
        };
    };
    class yi {
        constructor(_ref9) {
            let {
                databaseName: t,
                autoincrement: e = !0,
                database: r = e ? new vi(t) : new vi(t, "spanId")
            } = _ref9;
            _i.set(this, void 0), s(this, _i, r, "f");
        }
        readSpans(t) {
            return i(this, void 0, void 0, function*() {
                return o(this, _i, "f").getAll({
                    sortAsc: !0,
                    maxRecords: t
                });
            });
        }
        readSpansByTransport(t, e) {
            return i(this, void 0, void 0, function*() {
                const r = yield o(this, _i, "f").getTopLevelByTransportId(t, e);
                return r.length > 0 ? r : o(this, _i, "f").getByTransportId(t, e);
            });
        }
        readSpansByParentId(t, e) {
            return i(this, void 0, void 0, function*() {
                return o(this, _i, "f").getByParentId(t, e);
            });
        }
        readSpansByAggregateSignature(t, e) {
            return i(this, void 0, void 0, function*() {
                return o(this, _i, "f").getByAggregateSignature(t, e);
            });
        }
        removeSpans(t) {
            return i(this, void 0, void 0, function*() {
                return o(this, _i, "f").deleteMultiple(t);
            });
        }
        insertSpan(t, e) {
            return i(this, void 0, void 0, function*() {
                return o(this, _i, "f").putSpans([t], e);
            });
        }
        insertSerializableSpans(t, e) {
            return i(this, void 0, void 0, function*() {
                return o(this, _i, "f").putSpans(t, e);
            });
        }
        countSpans() {
            return i(this, void 0, void 0, function*() {
                return o(this, _i, "f").count();
            });
        }
        isFull() {
            return i(this, void 0, void 0, function*() {
                return (yield o(this, _i, "f").count()) >= 1e4;
            });
        }
        discardSpans() {
            return i(this, arguments, void 0, function() {
                var _this9 = this;
                let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
                return function*() {
                    return o(_this9, _i, "f").deleteRecords(t);
                }();
            });
        }
    }

    function Ti(t) {
        return new di({
            storage: {
                insertSpans: (e, r) => i(this, void 0, void 0, function*() {
                    yield t.insertSerializableSpans(e, r);
                }),
                readSpansByAggregateSignature: e => i(this, void 0, void 0, function*() {
                    return (yield t.readSpansByAggregateSignature(e)).map(t => t.span);
                }),
                readSpansByParentId: e => i(this, void 0, void 0, function*() {
                    return (yield t.readSpansByParentId(e)).map(t => t.span);
                })
            },
            getSpanObjectId: t => t.attributes["outsystems.function.key"]
        });
    }
    var mi, bi, Ei, Si, Oi, wi, Li, Ai, Ii;
    _i = new WeakMap();
    const ki = new ln(),
        Ri = new ln();
    class Pi {
        constructor(_ref10) {
            let {
                databaseNameSuffix: t,
                isOnline: e = () => !0,
                offlineLogsStorage: r = new Xn({
                    databaseName: `logs-${t}`
                }),
                offlineTracesStorage: n = new yi({
                    databaseName: `spans_v2-${t}`,
                    autoincrement: !1
                }),
                legacyOfflineTracesStorage: i = new yi({
                    databaseName: `spans-${t}`
                }),
                flushLegacyTraces: o = !1,
                aggregateSpans: a = !1,
                spanAggregator: u = Ti(n),
                mutexDispatchLogs: c = ki,
                mutexDispatchSpans: l = Ri
            } = _ref10;
            mi.set(this, void 0), bi.set(this, void 0), Ei.set(this, void 0), Si.set(this, !0), Oi.set(this, void 0), wi.set(this, void 0), Li.set(this, void 0), Ai.set(this, void 0), Ii.set(this, void 0), s(this, mi, r, "f"), s(this, bi, n, "f"), s(this, Ei, i, "f"), s(this, Oi, e, "f"), s(this, Si, o, "f"), s(this, wi, a, "f"), s(this, Li, u, "f"), s(this, Ii, c, "f"), s(this, Ai, l, "f");
        }
        setAggregateSpansStatus(t) {
            s(this, wi, t, "f");
        }
        writeLog(t, e) {
            return i(this, arguments, void 0, function(t, e) {
                var _this10 = this;
                let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
                return function*() {
                    try {
                        (yield o(_this10, mi, "f").isFull()) && (yield o(_this10, mi, "f").discardLogs()), yield o(_this10, mi, "f").insertLog(t, e.getTransportId()), (yield o(_this10, mi, "f").countLogs()) >= r && (yield _this10.flushTransportLogs(e));
                    } catch (t) {
                        console.debug("Error writing log to storage", t);
                    }
                }();
            });
        }
        writeSpan(t, e) {
            return i(this, arguments, void 0, function(t, e) {
                var _this11 = this;
                let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e3;
                return function*() {
                    try {
                        (yield o(_this11, bi, "f").isFull()) && (yield o(_this11, bi, "f").discardSpans()), yield o(_this11, Ai, "f").runExclusive(() => i(_this11, void 0, void 0, function*() {
                            o(this, wi, "f") ? yield o(this, Li, "f").aggregate(t, e.getTransportId()): yield o(this, bi, "f").insertSpan(t, e.getTransportId());
                        })), (yield o(_this11, bi, "f").countSpans()) >= r && (yield _this11.flushTransportSpans(e));
                    } catch (t) {
                        console.debug("Error writing trace to storage", t);
                    }
                }();
            });
        }
        processTransportLogs(t) {
            return i(this, arguments, void 0, function(t) {
                var _this12 = this;
                let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
                return function*() {
                    yield o(_this12, Ii, "f").runExclusive(() => i(_this12, void 0, void 0, function*() {
                        yield this.internalLogProcess(t, e, !0);
                    }));
                }();
            });
        }
        flushTransportLogs(t) {
            return i(this, arguments, void 0, function(t) {
                var _this13 = this;
                let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
                return function*() {
                    yield o(_this13, Ii, "f").runExclusive(() => i(_this13, void 0, void 0, function*() {
                        yield this.internalLogProcess(t, e, !1);
                    }));
                }();
            });
        }
        internalLogProcess(t, e, r) {
            return i(this, void 0, void 0, function*() {
                if (!t.requiresConnectivity() || o(this, Oi, "f").call(this)) try {
                    const n = r ? e : 1;
                    let i = yield o(this, mi, "f").readLogsByTransport(t.getTransportId(), e);
                    for (; i.length >= n;) yield t.writeAll(i.map(t => t.log)), yield o(this, mi, "f").removeLogs(i.map(t => t.logId)), i = yield o(this, mi, "f").readLogsByTransport(t.getTransportId(), e);
                } catch (t) {
                    throw console.debug("Error in internal log processing", t), t;
                }
            });
        }
        processTransportSpans(t) {
            return i(this, arguments, void 0, function(t) {
                var _this14 = this;
                let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e3;
                return function*() {
                    yield o(_this14, Ai, "f").runExclusive(() => i(_this14, void 0, void 0, function*() {
                        yield this.internalSpanProcess(t, e, !0);
                    }));
                }();
            });
        }
        flushTransportSpans(t) {
            return i(this, arguments, void 0, function(t) {
                var _this15 = this;
                let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e3;
                return function*() {
                    yield o(_this15, Ai, "f").runExclusive(() => i(_this15, void 0, void 0, function*() {
                        yield this.internalSpanProcess(t, e, !1);
                    }));
                }();
            });
        }
        internalSpanProcess(t, e, r) {
            return i(this, void 0, void 0, function*() {
                if (!t.requiresConnectivity() || o(this, Oi, "f").call(this)) {
                    if (o(this, Si, "f")) try {
                        const r = yield this.writeSpansToTransport({
                            transport: t,
                            spansBatchSize: e,
                            storage: o(this, Ei, "f"),
                            processCompleteBatchOnly: !1
                        });
                        s(this, Si, r > 0, "f");
                    } catch (t) {
                        console.warn("Error in processing legacy spans", t);
                    }
                    yield this.writeSpansToTransport({
                        transport: t,
                        spansBatchSize: e,
                        processCompleteBatchOnly: r,
                        storage: o(this, bi, "f")
                    });
                }
            });
        }
        writeSpansToTransport(t) {
            return i(this, arguments, void 0, function(_ref11) {
                let {
                    transport: t,
                    spansBatchSize: e,
                    processCompleteBatchOnly: r,
                    storage: n
                } = _ref11;
                return function*() {
                    try {
                        const i = r ? e : 1;
                        let o = yield n.readSpansByTransport(t.getTransportId(), e);
                        if (0 === o.length) return 0;
                        for (; o.length >= i;) yield t.writeAll(o.map(t => t.span)), yield n.removeSpans(o.map(t => t.spanId)), o = yield n.readSpansByTransport(t.getTransportId(), e);
                        return yield n.countSpans();
                    } catch (t) {
                        throw console.debug("Error processing spans", t), t;
                    }
                }();
            });
        }
    }
    mi = new WeakMap(), bi = new WeakMap(), Ei = new WeakMap(), Si = new WeakMap(), Oi = new WeakMap(), wi = new WeakMap(), Li = new WeakMap(), Ai = new WeakMap(), Ii = new WeakMap();
    class Ci {
        constructor() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6e4;
            this.timerInterval = t, this.tasksToRun = new Map();
        }
        scheduleNextRun() {
            this.currentTaskTimeout && clearTimeout(this.currentTaskTimeout), this.currentTaskTimeout = setTimeout(() => this.runTask(), this.timerInterval);
        }
        runTask() {
            return i(this, void 0, void 0, function*() {
                if (this.currentTaskTimeout) {
                    this.stop();
                    const t = Array.from(this.tasksToRun.values()).map(t => t());
                    yield Promise.all(t), this.scheduleNextRun();
                }
            });
        }
        start() {
            this.scheduleNextRun();
        }
        stop() {
            this.currentTaskTimeout && (clearTimeout(this.currentTaskTimeout), this.currentTaskTimeout = void 0);
        }
        addTask(t, e) {
            this.tasksToRun.set(t, e);
        }
        deleteTask(t) {
            this.tasksToRun.delete(t);
        }
        getTask(t) {
            return this.tasksToRun.get(t);
        }
        setTimerInterval(t) {
            this.timerInterval = t, this.start();
        }
    }
    class Ni {
        constructor(_ref12) {
            let {
                logTransports: t = [],
                traceTransports: e = [],
                databaseNameSuffix: r,
                isOnline: n,
                aggregateSpans: o,
                offlineManager: s = new Pi({
                    databaseNameSuffix: r,
                    isOnline: n,
                    flushLegacyTraces: !0,
                    aggregateSpans: o
                }),
                taskScheduler: a = new Ci(),
                circuitBreakerRunner: u = new rn()
            } = _ref12;
            this.logTransports = t, this.traceTransports = e, this.offlineManager = s, this.taskScheduler = a, this.circuitBreakerRunner = u, this.taskScheduler.addTask("flush-logs", () => i(this, void 0, void 0, function*() {
                return this.flushLogs();
            })), this.taskScheduler.addTask("flush-spans", () => i(this, void 0, void 0, function*() {
                return this.flushSpans();
            })), this.taskScheduler.start();
        }
        addLogTransport(t) {
            const e = t.getTransportId();
            this.logTransports.some(t => t.getTransportId() === e) || this.logTransports.push(t);
        }
        addTraceTransport(t) {
            const e = t.getTransportId();
            this.traceTransports.some(t => t.getTransportId() === e) || this.traceTransports.push(t);
        }
        removeLogTransport(t) {
            const e = this.logTransports.findIndex(e => e.getTransportId() === t); -
            1 !== e && (this.logTransports.splice(e, 1), this.circuitBreakerRunner.closeCircuit(t));
        }
        removeTraceTransport(t) {
            const e = this.traceTransports.findIndex(e => e.getTransportId() === t); -
            1 !== e && (this.traceTransports.splice(e, 1), this.circuitBreakerRunner.closeCircuit(t));
        }
        setAllLogTypeBaselines(t) {
            for (const e of this.logTransports) e.setLogTypeBaseline(t);
        }
        setTagId(t) {
            var e, r;
            for (const r of this.traceTransports) null === (e = r.setTagId) || void 0 === e || e.call(r, t);
            for (const e of this.logTransports) null === (r = e.setTagId) || void 0 === r || r.call(e, t);
        }
        setResourceAttributes(t) {
            var e, r;
            for (const r of this.traceTransports) null === (e = r.setResourceAttributes) || void 0 === e || e.call(r, t);
            for (const e of this.logTransports) null === (r = e.setResourceAttributes) || void 0 === r || r.call(e, t);
        }
        enableTracing() {
            for (const t of this.traceTransports) t.enableTracing();
        }
        disableTracing() {
            for (const t of this.traceTransports) t.disableTracing();
        }
        flushLogs() {
            return i(this, void 0, void 0, function*() {
                const t = this.logTransports.map(t => i(this, void 0, void 0, function*() {
                    const e = t.getTransportId();
                    yield this.circuitBreakerRunner.run(e, () => this.offlineManager.flushTransportLogs(t));
                }));
                yield Promise.all(t);
            });
        }
        flushSpans() {
            return i(this, void 0, void 0, function*() {
                const t = this.traceTransports.map(t => i(this, void 0, void 0, function*() {
                    const e = t.getTransportId();
                    yield this.circuitBreakerRunner.run(e, () => t.hasWriteBuffer() || "function" != typeof t.flush ? this.offlineManager.flushTransportSpans(t) : t.flush());
                }));
                yield Promise.all(t);
            });
        }
        processLog(t) {
            return i(this, void 0, void 0, function*() {
                const e = this.logTransports.filter(e => e.getLogTypeBaseline() <= t.type);
                for (const r of e)
                    if (r.hasWriteBuffer()) yield this.offlineManager.writeLog(t, r);
                    else {
                        const e = r.getTransportId();
                        0 !== (yield this.circuitBreakerRunner.run(e, () => r.write(t))) && (yield this.offlineManager.writeLog(t, r));
                    }
            });
        }
        processSpan(t) {
            return i(this, void 0, void 0, function*() {
                const e = this.traceTransports.filter(t => t.isTracingEnabled());
                for (const r of e)
                    if (r.hasWriteBuffer()) yield this.offlineManager.writeSpan(t, r);
                    else {
                        const e = r.getTransportId();
                        0 !== (yield this.circuitBreakerRunner.run(e, () => r.write(t))) && (yield this.offlineManager.writeSpan(t, r));
                    }
            });
        }
        setSchedulerTimerInterval(t) {
            this.taskScheduler.setTimerInterval(t);
        }
        setAggregateSpansStatus(t) {
            this.offlineManager.setAggregateSpansStatus(t);
        }
    }
    var xi;
    ! function(t) {
        t[t.Internal = 0] = "Internal", t[t.External = 1] = "External", t[t.Client = 2] = "Client";
    }(xi || (xi = {}));
    var ji = _exports.Visibility = xi,
        Mi = "object" == typeof Mr && Mr && Mr.Object === Object && Mr,
        Di = Mi,
        Bi = "object" == typeof self && self && self.Object === Object && self,
        Ui = Di || Bi || Function("return this")(),
        Wi = Ui.Symbol,
        zi = Wi,
        Fi = Object.prototype,
        Zi = Fi.hasOwnProperty,
        Vi = Fi.toString,
        Gi = zi ? zi.toStringTag : void 0;
    var Hi = function(t) {
            var e = Zi.call(t, Gi),
                r = t[Gi];
            try {
                t[Gi] = void 0;
                var n = !0;
            } catch (t) {}
            var i = Vi.call(t);
            return n && (e ? t[Gi] = r : delete t[Gi]), i;
        },
        Xi = Object.prototype.toString;
    var $i = Hi,
        qi = function(t) {
            return Xi.call(t);
        },
        Ki = Wi ? Wi.toStringTag : void 0;
    var Yi = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Ki && Ki in Object(t) ? $i(t) : qi(t);
    };
    var Qi = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
        },
        Ji = Yi,
        to = Qi;
    var eo,
        ro = function(t) {
            if (!to(t)) return !1;
            var e = Ji(t);
            return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e;
        },
        no = Ui["__core-js_shared__"],
        io = (eo = /[^.]+$/.exec(no && no.keys && no.keys.IE_PROTO || "")) ? "Symbol(src)_1." + eo : "";
    var oo = function(t) {
            return !!io && io in t;
        },
        so = Function.prototype.toString;
    var ao = function(t) {
            if (null != t) {
                try {
                    return so.call(t);
                } catch (t) {}
                try {
                    return t + "";
                } catch (t) {}
            }
            return "";
        },
        uo = ro,
        co = oo,
        lo = Qi,
        fo = ao,
        ho = /^\[object .+?Constructor\]$/,
        po = Function.prototype,
        go = Object.prototype,
        vo = po.toString,
        _o = go.hasOwnProperty,
        yo = RegExp("^" + vo.call(_o).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var To = function(t) {
            return !(!lo(t) || co(t)) && (uo(t) ? yo : ho).test(fo(t));
        },
        mo = function(t, e) {
            return null == t ? void 0 : t[e];
        };
    var bo = function(t, e) {
            var r = mo(t, e);
            return To(r) ? r : void 0;
        },
        Eo = bo,
        So = function() {
            try {
                var t = Eo(Object, "defineProperty");
                return t({}, "", {}), t;
            } catch (t) {}
        }(),
        Oo = So;
    var wo = function(t, e, r) {
        "__proto__" == e && Oo ? Oo(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r;
    };
    var Lo = function(t) {
        return function(e, r, n) {
            for (var i = -1, o = Object(e), s = n(e), a = s.length; a--;) {
                var u = s[t ? a : ++i];
                if (!1 === r(o[u], u, o)) break;
            }
            return e;
        };
    }();
    var Ao = function(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n;
    };
    var Io = function(t) {
            return null != t && "object" == typeof t;
        },
        ko = Yi,
        Ro = Io;
    var Po = function(t) {
            return Ro(t) && "[object Arguments]" == ko(t);
        },
        Co = Io,
        No = Object.prototype,
        xo = No.hasOwnProperty,
        jo = No.propertyIsEnumerable,
        Mo = Po(function() {
            return arguments;
        }()) ? Po : function(t) {
            return Co(t) && xo.call(t, "callee") && !jo.call(t, "callee");
        },
        Do = Array.isArray,
        Bo = {
            exports: {}
        };
    var Uo = function() {
        return !1;
    };
    ! function(t, e) {
        var r = Ui,
            n = Uo,
            i = e && !e.nodeType && e,
            o = i && t && !t.nodeType && t,
            s = o && o.exports === i ? r.Buffer : void 0,
            a = (s ? s.isBuffer : void 0) || n;
        t.exports = a;
    }(Bo, Bo.exports);
    var Wo = Bo.exports,
        zo = /^(?:0|[1-9]\d*)$/;
    var Fo = function(t, e) {
        var r = typeof t;
        return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && zo.test(t)) && t > -1 && t % 1 == 0 && t < e;
    };
    var Zo = function(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
        },
        Vo = Yi,
        Go = Zo,
        Ho = Io,
        Xo = {};
    Xo["[object Float32Array]"] = Xo["[object Float64Array]"] = Xo["[object Int8Array]"] = Xo["[object Int16Array]"] = Xo["[object Int32Array]"] = Xo["[object Uint8Array]"] = Xo["[object Uint8ClampedArray]"] = Xo["[object Uint16Array]"] = Xo["[object Uint32Array]"] = !0, Xo["[object Arguments]"] = Xo["[object Array]"] = Xo["[object ArrayBuffer]"] = Xo["[object Boolean]"] = Xo["[object DataView]"] = Xo["[object Date]"] = Xo["[object Error]"] = Xo["[object Function]"] = Xo["[object Map]"] = Xo["[object Number]"] = Xo["[object Object]"] = Xo["[object RegExp]"] = Xo["[object Set]"] = Xo["[object String]"] = Xo["[object WeakMap]"] = !1;
    var $o = function(t) {
        return Ho(t) && Go(t.length) && !!Xo[Vo(t)];
    };
    var qo = function(t) {
            return function(e) {
                return t(e);
            };
        },
        Ko = {
            exports: {}
        };
    ! function(t, e) {
        var r = Mi,
            n = e && !e.nodeType && e,
            i = n && t && !t.nodeType && t,
            o = i && i.exports === n && r.process,
            s = function() {
                try {
                    var t = i && i.require && i.require("util").types;
                    return t || o && o.binding && o.binding("util");
                } catch (t) {}
            }();
        t.exports = s;
    }(Ko, Ko.exports);
    var Yo = Ko.exports,
        Qo = $o,
        Jo = qo,
        ts = Yo && Yo.isTypedArray,
        es = ts ? Jo(ts) : Qo,
        rs = Ao,
        ns = Mo,
        is = Do,
        os = Wo,
        ss = Fo,
        as = es,
        us = Object.prototype.hasOwnProperty;
    var cs = function(t, e) {
            var r = is(t),
                n = !r && ns(t),
                i = !r && !n && os(t),
                o = !r && !n && !i && as(t),
                s = r || n || i || o,
                a = s ? rs(t.length, String) : [],
                u = a.length;
            for (var c in t) !e && !us.call(t, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || ss(c, u)) || a.push(c);
            return a;
        },
        ls = Object.prototype;
    var fs = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || ls);
    };
    var hs = function(t, e) {
            return function(r) {
                return t(e(r));
            };
        },
        ps = hs(Object.keys, Object),
        ds = fs,
        gs = ps,
        vs = Object.prototype.hasOwnProperty;
    var _s = ro,
        ys = Zo;
    var Ts = function(t) {
            return null != t && ys(t.length) && !_s(t);
        },
        ms = cs,
        bs = function(t) {
            if (!ds(t)) return gs(t);
            var e = [];
            for (var r in Object(t)) vs.call(t, r) && "constructor" != r && e.push(r);
            return e;
        },
        Es = Ts;
    var Ss = function(t) {
            return Es(t) ? ms(t) : bs(t);
        },
        Os = Lo,
        ws = Ss;
    var Ls = function(t, e) {
        return t && Os(t, e, ws);
    };
    var As = function() {
        this.__data__ = [], this.size = 0;
    };
    var Is = function(t, e) {
            return t === e || t != t && e != e;
        },
        ks = Is;
    var Rs = function(t, e) {
            for (var r = t.length; r--;)
                if (ks(t[r][0], e)) return r;
            return -1;
        },
        Ps = Rs,
        Cs = Array.prototype.splice;
    var Ns = Rs;
    var xs = Rs;
    var js = Rs;
    var Ms = As,
        Ds = function(t) {
            var e = this.__data__,
                r = Ps(e, t);
            return !(r < 0) && (r == e.length - 1 ? e.pop() : Cs.call(e, r, 1), --this.size, !0);
        },
        Bs = function(t) {
            var e = this.__data__,
                r = Ns(e, t);
            return r < 0 ? void 0 : e[r][1];
        },
        Us = function(t) {
            return xs(this.__data__, t) > -1;
        },
        Ws = function(t, e) {
            var r = this.__data__,
                n = js(r, t);
            return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
        };

    function zs(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1]);
        }
    }
    zs.prototype.clear = Ms, zs.prototype.delete = Ds, zs.prototype.get = Bs, zs.prototype.has = Us, zs.prototype.set = Ws;
    var Fs = zs,
        Zs = Fs;
    var Vs = function() {
        this.__data__ = new Zs(), this.size = 0;
    };
    var Gs = function(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r;
    };
    var Hs = function(t) {
        return this.__data__.get(t);
    };
    var Xs = function(t) {
            return this.__data__.has(t);
        },
        $s = bo(Ui, "Map"),
        qs = bo(Object, "create"),
        Ks = qs;
    var Ys = function() {
        this.__data__ = Ks ? Ks(null) : {}, this.size = 0;
    };
    var Qs = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e;
        },
        Js = qs,
        ta = Object.prototype.hasOwnProperty;
    var ea = function(t) {
            var e = this.__data__;
            if (Js) {
                var r = e[t];
                return "__lodash_hash_undefined__" === r ? void 0 : r;
            }
            return ta.call(e, t) ? e[t] : void 0;
        },
        ra = qs,
        na = Object.prototype.hasOwnProperty;
    var ia = qs;
    var oa = Ys,
        sa = Qs,
        aa = ea,
        ua = function(t) {
            var e = this.__data__;
            return ra ? void 0 !== e[t] : na.call(e, t);
        },
        ca = function(t, e) {
            var r = this.__data__;
            return this.size += this.has(t) ? 0 : 1, r[t] = ia && void 0 === e ? "__lodash_hash_undefined__" : e, this;
        };

    function la(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1]);
        }
    }
    la.prototype.clear = oa, la.prototype.delete = sa, la.prototype.get = aa, la.prototype.has = ua, la.prototype.set = ca;
    var fa = la,
        ha = Fs,
        pa = $s;
    var da = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
    };
    var ga = function(t, e) {
            var r = t.__data__;
            return da(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
        },
        va = ga;
    var _a = ga;
    var ya = ga;
    var Ta = ga;
    var ma = function() {
            this.size = 0, this.__data__ = {
                hash: new fa(),
                map: new(pa || ha)(),
                string: new fa()
            };
        },
        ba = function(t) {
            var e = va(this, t).delete(t);
            return this.size -= e ? 1 : 0, e;
        },
        Ea = function(t) {
            return _a(this, t).get(t);
        },
        Sa = function(t) {
            return ya(this, t).has(t);
        },
        Oa = function(t, e) {
            var r = Ta(this, t),
                n = r.size;
            return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
        };

    function wa(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1]);
        }
    }
    wa.prototype.clear = ma, wa.prototype.delete = ba, wa.prototype.get = Ea, wa.prototype.has = Sa, wa.prototype.set = Oa;
    var La = wa,
        Aa = Fs,
        Ia = $s,
        ka = La;
    var Ra = Fs,
        Pa = Vs,
        Ca = Gs,
        Na = Hs,
        xa = Xs,
        ja = function(t, e) {
            var r = this.__data__;
            if (r instanceof Aa) {
                var n = r.__data__;
                if (!Ia || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
                r = this.__data__ = new ka(n);
            }
            return r.set(t, e), this.size = r.size, this;
        };

    function Ma(t) {
        var e = this.__data__ = new Ra(t);
        this.size = e.size;
    }
    Ma.prototype.clear = Pa, Ma.prototype.delete = Ca, Ma.prototype.get = Na, Ma.prototype.has = xa, Ma.prototype.set = ja;
    var Da = Ma;
    var Ba = La,
        Ua = function(t) {
            return this.__data__.set(t, "__lodash_hash_undefined__"), this;
        },
        Wa = function(t) {
            return this.__data__.has(t);
        };

    function za(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.__data__ = new Ba(); ++e < r;) this.add(t[e]);
    }
    za.prototype.add = za.prototype.push = Ua, za.prototype.has = Wa;
    var Fa = za,
        Za = function(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
                if (e(t[r], r, t)) return !0;
            return !1;
        },
        Va = function(t, e) {
            return t.has(e);
        };
    var Ga = function(t, e, r, n, i, o) {
        var s = 1 & r,
            a = t.length,
            u = e.length;
        if (a != u && !(s && u > a)) return !1;
        var c = o.get(t),
            l = o.get(e);
        if (c && l) return c == e && l == t;
        var f = -1,
            h = !0,
            p = 2 & r ? new Fa() : void 0;
        for (o.set(t, e), o.set(e, t); ++f < a;) {
            var d = t[f],
                g = e[f];
            if (n) var v = s ? n(g, d, f, e, t, o) : n(d, g, f, t, e, o);
            if (void 0 !== v) {
                if (v) continue;
                h = !1;
                break;
            }
            if (p) {
                if (!Za(e, function(t, e) {
                        if (!Va(p, e) && (d === t || i(d, t, r, n, o))) return p.push(e);
                    })) {
                    h = !1;
                    break;
                }
            } else if (d !== g && !i(d, g, r, n, o)) {
                h = !1;
                break;
            }
        }
        return o.delete(t), o.delete(e), h;
    };
    var Ha = Ui.Uint8Array,
        Xa = Is,
        $a = Ga,
        qa = function(t) {
            var e = -1,
                r = Array(t.size);
            return t.forEach(function(t, n) {
                r[++e] = [n, t];
            }), r;
        },
        Ka = function(t) {
            var e = -1,
                r = Array(t.size);
            return t.forEach(function(t) {
                r[++e] = t;
            }), r;
        },
        Ya = Wi ? Wi.prototype : void 0,
        Qa = Ya ? Ya.valueOf : void 0;
    var Ja = function(t, e, r, n, i, o, s) {
        switch (r) {
            case "[object DataView]":
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case "[object ArrayBuffer]":
                return !(t.byteLength != e.byteLength || !o(new Ha(t), new Ha(e)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return Xa(+t, +e);
            case "[object Error]":
                return t.name == e.name && t.message == e.message;
            case "[object RegExp]":
            case "[object String]":
                return t == e + "";
            case "[object Map]":
                var a = qa;
            case "[object Set]":
                var u = 1 & n;
                if (a || (a = Ka), t.size != e.size && !u) return !1;
                var c = s.get(t);
                if (c) return c == e;
                n |= 2, s.set(t, e);
                var l = $a(a(t), a(e), n, i, o, s);
                return s.delete(t), l;
            case "[object Symbol]":
                if (Qa) return Qa.call(t) == Qa.call(e);
        }
        return !1;
    };
    var tu = function(t, e) {
            for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];
            return t;
        },
        eu = tu,
        ru = Do;
    var nu = function(t, e, r) {
        var n = e(t);
        return ru(t) ? n : eu(n, r(t));
    };
    var iu = function() {
            return [];
        },
        ou = function(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length, i = 0, o = []; ++r < n;) {
                var s = t[r];
                e(s, r, t) && (o[i++] = s);
            }
            return o;
        },
        su = iu,
        au = Object.prototype.propertyIsEnumerable,
        uu = Object.getOwnPropertySymbols,
        cu = uu ? function(t) {
            return null == t ? [] : (t = Object(t), ou(uu(t), function(e) {
                return au.call(t, e);
            }));
        } : su,
        lu = nu,
        fu = cu,
        hu = Ss;
    var pu = function(t) {
            return lu(t, hu, fu);
        },
        du = Object.prototype.hasOwnProperty;
    var gu = function(t, e, r, n, i, o) {
            var s = 1 & r,
                a = pu(t),
                u = a.length;
            if (u != pu(e).length && !s) return !1;
            for (var c = u; c--;) {
                var l = a[c];
                if (!(s ? l in e : du.call(e, l))) return !1;
            }
            var f = o.get(t),
                h = o.get(e);
            if (f && h) return f == e && h == t;
            var p = !0;
            o.set(t, e), o.set(e, t);
            for (var d = s; ++c < u;) {
                var g = t[l = a[c]],
                    v = e[l];
                if (n) var _ = s ? n(v, g, l, e, t, o) : n(g, v, l, t, e, o);
                if (!(void 0 === _ ? g === v || i(g, v, r, n, o) : _)) {
                    p = !1;
                    break;
                }
                d || (d = "constructor" == l);
            }
            if (p && !d) {
                var y = t.constructor,
                    T = e.constructor;
                y == T || !("constructor" in t) || !("constructor" in e) || "function" == typeof y && y instanceof y && "function" == typeof T && T instanceof T || (p = !1);
            }
            return o.delete(t), o.delete(e), p;
        },
        vu = bo(Ui, "DataView"),
        _u = $s,
        yu = bo(Ui, "Promise"),
        Tu = bo(Ui, "Set"),
        mu = bo(Ui, "WeakMap"),
        bu = Yi,
        Eu = ao,
        Su = "[object Map]",
        Ou = "[object Promise]",
        wu = "[object Set]",
        Lu = "[object WeakMap]",
        Au = "[object DataView]",
        Iu = Eu(vu),
        ku = Eu(_u),
        Ru = Eu(yu),
        Pu = Eu(Tu),
        Cu = Eu(mu),
        Nu = bu;
    (vu && Nu(new vu(new ArrayBuffer(1))) != Au || _u && Nu(new _u()) != Su || yu && Nu(yu.resolve()) != Ou || Tu && Nu(new Tu()) != wu || mu && Nu(new mu()) != Lu) && (Nu = function(t) {
        var e = bu(t),
            r = "[object Object]" == e ? t.constructor : void 0,
            n = r ? Eu(r) : "";
        if (n) switch (n) {
            case Iu:
                return Au;
            case ku:
                return Su;
            case Ru:
                return Ou;
            case Pu:
                return wu;
            case Cu:
                return Lu;
        }
        return e;
    });
    var xu = Da,
        ju = Ga,
        Mu = Ja,
        Du = gu,
        Bu = Nu,
        Uu = Do,
        Wu = Wo,
        zu = es,
        Fu = "[object Arguments]",
        Zu = "[object Array]",
        Vu = "[object Object]",
        Gu = Object.prototype.hasOwnProperty;
    var Hu = function(t, e, r, n, i, o) {
            var s = Uu(t),
                a = Uu(e),
                u = s ? Zu : Bu(t),
                c = a ? Zu : Bu(e),
                l = (u = u == Fu ? Vu : u) == Vu,
                f = (c = c == Fu ? Vu : c) == Vu,
                h = u == c;
            if (h && Wu(t)) {
                if (!Wu(e)) return !1;
                s = !0, l = !1;
            }
            if (h && !l) return o || (o = new xu()), s || zu(t) ? ju(t, e, r, n, i, o) : Mu(t, e, u, r, n, i, o);
            if (!(1 & r)) {
                var p = l && Gu.call(t, "__wrapped__"),
                    d = f && Gu.call(e, "__wrapped__");
                if (p || d) {
                    var g = p ? t.value() : t,
                        v = d ? e.value() : e;
                    return o || (o = new xu()), i(g, v, r, n, o);
                }
            }
            return !!h && (o || (o = new xu()), Du(t, e, r, n, i, o));
        },
        Xu = Io;
    var $u = function t(e, r, n, i, o) {
            return e === r || (null == e || null == r || !Xu(e) && !Xu(r) ? e != e && r != r : Hu(e, r, n, i, t, o));
        },
        qu = Da,
        Ku = $u;
    var Yu = Qi;
    var Qu = function(t) {
            return t == t && !Yu(t);
        },
        Ju = Qu,
        tc = Ss;
    var ec = function(t, e) {
            return function(r) {
                return null != r && r[t] === e && (void 0 !== e || t in Object(r));
            };
        },
        rc = function(t, e, r, n) {
            var i = r.length,
                o = i,
                s = !n;
            if (null == t) return !o;
            for (t = Object(t); i--;) {
                var a = r[i];
                if (s && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1;
            }
            for (; ++i < o;) {
                var u = (a = r[i])[0],
                    c = t[u],
                    l = a[1];
                if (s && a[2]) {
                    if (void 0 === c && !(u in t)) return !1;
                } else {
                    var f = new qu();
                    if (n) var h = n(c, l, u, t, e, f);
                    if (!(void 0 === h ? Ku(l, c, 3, n, f) : h)) return !1;
                }
            }
            return !0;
        },
        nc = function(t) {
            for (var e = tc(t), r = e.length; r--;) {
                var n = e[r],
                    i = t[n];
                e[r] = [n, i, Ju(i)];
            }
            return e;
        },
        ic = ec;
    var oc = function(t) {
            var e = nc(t);
            return 1 == e.length && e[0][2] ? ic(e[0][0], e[0][1]) : function(r) {
                return r === t || rc(r, t, e);
            };
        },
        sc = Yi,
        ac = Io;
    var uc = function(t) {
            return "symbol" == typeof t || ac(t) && "[object Symbol]" == sc(t);
        },
        cc = Do,
        lc = uc,
        fc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        hc = /^\w*$/;
    var pc = function(t, e) {
            if (cc(t)) return !1;
            var r = typeof t;
            return !("number" != r && "symbol" != r && "boolean" != r && null != t && !lc(t)) || hc.test(t) || !fc.test(t) || null != e && t in Object(e);
        },
        dc = La;

    function gc(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
        var r = function() {
            var n = arguments,
                i = e ? e.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(i)) return o.get(i);
            var s = t.apply(this, n);
            return r.cache = o.set(i, s) || o, s;
        };
        return r.cache = new(gc.Cache || dc)(), r;
    }
    gc.Cache = dc;
    var vc = gc;
    var _c = function(t) {
            var e = vc(t, function(t) {
                    return 500 === r.size && r.clear(), t;
                }),
                r = e.cache;
            return e;
        },
        yc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Tc = /\\(\\)?/g,
        mc = _c(function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(yc, function(t, r, n, i) {
                e.push(n ? i.replace(Tc, "$1") : r || t);
            }), e;
        });
    var bc = function(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n;) i[r] = e(t[r], r, t);
            return i;
        },
        Ec = bc,
        Sc = Do,
        Oc = uc,
        wc = Wi ? Wi.prototype : void 0,
        Lc = wc ? wc.toString : void 0;
    var Ac = function t(e) {
            if ("string" == typeof e) return e;
            if (Sc(e)) return Ec(e, t) + "";
            if (Oc(e)) return Lc ? Lc.call(e) : "";
            var r = e + "";
            return "0" == r && 1 / e == -Infinity ? "-0" : r;
        },
        Ic = Ac;
    var kc = Do,
        Rc = pc,
        Pc = mc,
        Cc = function(t) {
            return null == t ? "" : Ic(t);
        };
    var Nc = function(t, e) {
            return kc(t) ? t : Rc(t, e) ? [t] : Pc(Cc(t));
        },
        xc = uc;
    var jc = function(t) {
            if ("string" == typeof t || xc(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -Infinity ? "-0" : e;
        },
        Mc = Nc,
        Dc = jc;
    var Bc = function(t, e) {
            for (var r = 0, n = (e = Mc(e, t)).length; null != t && r < n;) t = t[Dc(e[r++])];
            return r && r == n ? t : void 0;
        },
        Uc = Bc;
    var Wc = Nc,
        zc = Mo,
        Fc = Do,
        Zc = Fo,
        Vc = Zo,
        Gc = jc;
    var Hc = function(t, e) {
            return null != t && e in Object(t);
        },
        Xc = function(t, e, r) {
            for (var n = -1, i = (e = Wc(e, t)).length, o = !1; ++n < i;) {
                var s = Gc(e[n]);
                if (!(o = null != t && r(t, s))) break;
                t = t[s];
            }
            return o || ++n != i ? o : !!(i = null == t ? 0 : t.length) && Vc(i) && Zc(s, i) && (Fc(t) || zc(t));
        };
    var $c = $u,
        qc = function(t, e, r) {
            var n = null == t ? void 0 : Uc(t, e);
            return void 0 === n ? r : n;
        },
        Kc = function(t, e) {
            return null != t && Xc(t, e, Hc);
        },
        Yc = pc,
        Qc = Qu,
        Jc = ec,
        tl = jc;
    var el = Bc;
    var rl = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t];
            };
        },
        nl = function(t) {
            return function(e) {
                return el(e, t);
            };
        },
        il = pc,
        ol = jc;
    var sl = oc,
        al = function(t, e) {
            return Yc(t) && Qc(e) ? Jc(tl(t), e) : function(r) {
                var n = qc(r, t);
                return void 0 === n && n === e ? Kc(r, t) : $c(e, n, 3);
            };
        },
        ul = function(t) {
            return t;
        },
        cl = Do,
        ll = function(t) {
            return il(t) ? rl(ol(t)) : nl(t);
        };
    var fl = function(t) {
            return "function" == typeof t ? t : null == t ? ul : "object" == typeof t ? cl(t) ? al(t[0], t[1]) : sl(t) : ll(t);
        },
        hl = wo,
        pl = Ls,
        dl = fl;
    var gl = Dr(function(t, e) {
            var r = {};
            return e = dl(e), pl(t, function(t, n, i) {
                hl(r, n, e(t, n, i));
            }), r;
        }),
        vl = wo,
        _l = Is,
        yl = Object.prototype.hasOwnProperty;
    var Tl = function(t, e, r) {
            var n = t[e];
            yl.call(t, e) && _l(n, r) && (void 0 !== r || e in t) || vl(t, e, r);
        },
        ml = Nc,
        bl = Fo,
        El = Qi,
        Sl = jc;
    var Ol = Bc,
        wl = function(t, e, r, n) {
            if (!El(t)) return t;
            for (var i = -1, o = (e = ml(e, t)).length, s = o - 1, a = t; null != a && ++i < o;) {
                var u = Sl(e[i]),
                    c = r;
                if ("__proto__" === u || "constructor" === u || "prototype" === u) return t;
                if (i != s) {
                    var l = a[u];
                    void 0 === (c = n ? n(l, u, a) : void 0) && (c = El(l) ? l : bl(e[i + 1]) ? [] : {});
                }
                Tl(a, u, c), a = a[u];
            }
            return t;
        },
        Ll = Nc;
    var Al = function(t, e, r) {
            for (var n = -1, i = e.length, o = {}; ++n < i;) {
                var s = e[n],
                    a = Ol(t, s);
                r(a, s) && wl(o, Ll(s, t), a);
            }
            return o;
        },
        Il = hs(Object.getPrototypeOf, Object),
        kl = tu,
        Rl = Il,
        Pl = cu,
        Cl = iu,
        Nl = Object.getOwnPropertySymbols ? function(t) {
            for (var e = []; t;) kl(e, Pl(t)), t = Rl(t);
            return e;
        } : Cl;
    var xl = Qi,
        jl = fs,
        Ml = function(t) {
            var e = [];
            if (null != t)
                for (var r in Object(t)) e.push(r);
            return e;
        },
        Dl = Object.prototype.hasOwnProperty;
    var Bl = cs,
        Ul = function(t) {
            if (!xl(t)) return Ml(t);
            var e = jl(t),
                r = [];
            for (var n in t)("constructor" != n || !e && Dl.call(t, n)) && r.push(n);
            return r;
        },
        Wl = Ts;
    var zl = nu,
        Fl = Nl,
        Zl = function(t) {
            return Wl(t) ? Bl(t, !0) : Ul(t);
        };
    var Vl = bc,
        Gl = fl,
        Hl = Al,
        Xl = function(t) {
            return zl(t, Zl, Fl);
        };
    var $l = Dr(function(t, e) {
        if (null == t) return {};
        var r = Vl(Xl(t), function(t) {
            return [t];
        });
        return e = Gl(e), Hl(t, r, function(t, r) {
            return e(t, r[0]);
        });
    });
    const ql = "OS-CLRT-00000",
        Kl = t => {
            const e = gl(t, t => t());
            return $l(e, t => null != t);
        },
        Yl = {
            [ji.Internal]: 1,
            [ji.External]: 2,
            [ji.Client]: 3
        },
        Ql = t => {
            var e, r, n;
            const i = {};
            return t.type === hn.Error && t.error && (i["exception.type"] = t.error.name, i["exception.message"] = ef(t.error.message), i["exception.stacktrace"] = null !== (e = t.error.stack) && void 0 !== e ? e : "", i["outsystems.error.code"] = null !== (n = null === (r = t.errorCode) || void 0 === r ? void 0 : r.toString()) && void 0 !== n ? n : ql.toString()), i;
        },
        Jl = t => {
            const e = t => "boolean" == typeof t ? "boolValue" : "number" == typeof t ? t % 1 == 0 ? "intValue" : "doubleValue" : "stringValue";
            return Object.entries(t).map(_ref13 => {
                let [t, r] = _ref13;
                return {
                    key: t,
                    value: {
                        [e(r)]: r
                    }
                };
            });
        },
        tf = t => (t["http.url"] && (t["http.url"] = ef(t["http.url"])), t),
        ef = t => t.replace(/((outsystems|https|http):\/\/[^ ]*?)\?[^ ]*/g, "$1");
    var rf, nf, of ;
    class sf {
        constructor(_ref14) {
            let {
                baseAttributes: t = {},
                transportManager: e,
                getTimestamp: r
            } = _ref14;
            rf.set(this, void 0), nf.set(this, void 0), of .set(this, void 0), s(this, rf, e, "f"), s(this, nf, r, "f"), s(this, of , t, "f");
        }
        static build(t) {
            return i(this, arguments, void 0, function(_ref15) {
                let {
                    transports: t = [],
                    baseAttributes: e,
                    databaseNameSuffix: r,
                    transportManager: n = new Ni({
                        databaseNameSuffix: r,
                        logTransports: t
                    }),
                    getTimestamp: i = () => new jr()
                } = _ref15;
                return function*() {
                    return new sf({
                        baseAttributes: e,
                        transportManager: n,
                        getTimestamp: i
                    });
                }();
            });
        }
        addTransport(t) {
            o(this, rf, "f").addLogTransport(t);
        }
        removeTransport(t) {
            o(this, rf, "f").removeLogTransport(t);
        }
        setLogTypeBaseline() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : hn.Error;
            o(this, rf, "f").setAllLogTypeBaselines(t);
        }
        flush() {
            return i(this, void 0, void 0, function*() {
                o(this, rf, "f").flushLogs();
            });
        }
        setSchedulerTimerInterval(t) {
            o(this, rf, "f").setSchedulerTimerInterval(t);
        }
        error(_ref16) {
            let {
                category: t,
                message: e,
                error: r,
                errorCode: n,
                visibility: i = ji.Internal,
                span: s,
                attributes: a
            } = _ref16;
            const u = new en({
                type: hn.Error,
                category: t,
                message: e,
                error: r,
                visibility: i,
                timestamp: o(this, nf, "f").call(this),
                errorCode: n,
                span: s,
                attributes: Object.assign(Object.assign({}, Kl(o(this, of , "f"))), a)
            });
            o(this, rf, "f").processLog(u);
        }
        warning(_ref17) {
            let {
                category: t,
                message: e,
                visibility: r = ji.Internal,
                span: n,
                attributes: i
            } = _ref17;
            const s = new en({
                type: hn.Warning,
                category: t,
                message: e,
                visibility: r,
                timestamp: o(this, nf, "f").call(this),
                span: n,
                attributes: Object.assign(Object.assign({}, Kl(o(this, of , "f"))), i)
            });
            o(this, rf, "f").processLog(s);
        }
        info(_ref18) {
            let {
                category: t,
                message: e,
                visibility: r = ji.External,
                span: n,
                attributes: i
            } = _ref18;
            const s = new en({
                type: hn.Info,
                category: t,
                message: e,
                visibility: r,
                timestamp: o(this, nf, "f").call(this),
                span: n,
                attributes: Object.assign(Object.assign({}, Kl(o(this, of , "f"))), i)
            });
            o(this, rf, "f").processLog(s);
        }
        debug(_ref19) {
            let {
                category: t,
                message: e,
                visibility: r = ji.Internal,
                span: n,
                attributes: i
            } = _ref19;
            const s = new en({
                type: hn.Debug,
                category: t,
                message: e,
                visibility: r,
                timestamp: o(this, nf, "f").call(this),
                span: n,
                attributes: Object.assign(Object.assign({}, Kl(o(this, of , "f"))), i)
            });
            o(this, rf, "f").processLog(s);
        }
        log(t) {
            return i(this, void 0, void 0, function*() {
                yield o(this, rf, "f").processLog(t);
            });
        }
    }
    _exports.Logger = sf;
    rf = new WeakMap(), nf = new WeakMap(), of = new WeakMap();
    var af = "OT_ZONE_CONTEXT",
        uf = function() {
            function t() {
                this._enabled = !1, this._zoneCounter = 0;
            }
            return t.prototype._activeContextFromZone = function(t) {
                return t && t.get(af) || j;
            }, t.prototype._bindFunction = function(t, e) {
                var r = this,
                    n = function() {
                        for (var n = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
                        return r.with(t, function() {
                            return e.apply(n, i);
                        });
                    };
                return Object.defineProperty(n, "length", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !1,
                    value: e.length
                }), n;
            }, t.prototype._bindListener = function(t, e) {
                var r = e;
                return void 0 !== r.__ot_listeners || (r.__ot_listeners = {}, "function" == typeof r.addEventListener && (r.addEventListener = this._patchAddEventListener(r, r.addEventListener, t)), "function" == typeof r.removeEventListener && (r.removeEventListener = this._patchRemoveEventListener(r, r.removeEventListener))), e;
            }, t.prototype._createZoneName = function() {
                this._zoneCounter++;
                var t = Math.random();
                return this._zoneCounter + "-" + t;
            }, t.prototype._createZone = function(t, e) {
                var r;
                return Zone.current.fork({
                    name: t,
                    properties: (r = {}, r[af] = e, r)
                });
            }, t.prototype._getActiveZone = function() {
                return Zone.current;
            }, t.prototype._patchAddEventListener = function(t, e, r) {
                var n = this;
                return function(i, o, s) {
                    void 0 === t.__ot_listeners && (t.__ot_listeners = {});
                    var a = t.__ot_listeners[i];
                    void 0 === a && (a = new WeakMap(), t.__ot_listeners[i] = a);
                    var u = n.bind(r, o);
                    return a.set(o, u), e.call(this, i, u, s);
                };
            }, t.prototype._patchRemoveEventListener = function(t, e) {
                return function(r, n) {
                    if (void 0 === t.__ot_listeners || void 0 === t.__ot_listeners[r]) return e.call(this, r, n);
                    var i = t.__ot_listeners[r],
                        o = i.get(n);
                    return i.delete(n), e.call(this, r, o || n);
                };
            }, t.prototype.active = function() {
                if (!this._enabled) return j;
                var t = this._getActiveZone(),
                    e = this._activeContextFromZone(t);
                return e || j;
            }, t.prototype.bind = function(t, e) {
                return void 0 === t && (t = this.active()), "function" == typeof e ? this._bindFunction(t, e) : (void 0 === (r = e) && (r = {}), "function" == typeof r.addEventListener && "function" == typeof r.removeEventListener && this._bindListener(t, e), e);
                var r;
            }, t.prototype.disable = function() {
                return this._enabled = !1, this;
            }, t.prototype.enable = function() {
                return this._enabled = !0, this;
            }, t.prototype.with = function(t, e, r) {
                for (var n = [], i = 3; i < arguments.length; i++) n[i - 3] = arguments[i];
                var o = this._createZoneName();
                return this._createZone(o, t).run(e, r, n);
            }, t;
        }();
    /**
     * @license Angular v<unknown>
     * (c) 2010-2024 Google LLC. https://angular.io/
     * License: MIT
     */
    const cf = globalThis;

    function lf(t) {
        return (cf.__Zone_symbol_prefix || "__zone_symbol__") + t;
    }
    const ff = Object.getOwnPropertyDescriptor,
        hf = Object.defineProperty,
        pf = Object.getPrototypeOf,
        df = Object.create,
        gf = Array.prototype.slice,
        vf = "addEventListener",
        _f = "removeEventListener",
        yf = lf(vf),
        Tf = lf(_f),
        mf = "true",
        bf = "false",
        Ef = lf("");

    function Sf(t, e) {
        return Zone.current.wrap(t, e);
    }

    function Of(t, e, r, n, i) {
        return Zone.current.scheduleMacroTask(t, e, r, n, i);
    }
    const wf = lf,
        Lf = "undefined" != typeof window,
        Af = Lf ? window : void 0,
        If = Lf && Af || globalThis,
        kf = "removeAttribute";

    function Rf(t, e) {
        for (let r = t.length - 1; r >= 0; r--) "function" == typeof t[r] && (t[r] = Sf(t[r], e + "_" + r));
        return t;
    }

    function Pf(t) {
        return !t || !1 !== t.writable && !("function" == typeof t.get && void 0 === t.set);
    }
    const Cf = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
        Nf = !("nw" in If) && void 0 !== If.process && "[object process]" === If.process.toString(),
        xf = !Nf && !Cf && !(!Lf || !Af.HTMLElement),
        jf = void 0 !== If.process && "[object process]" === If.process.toString() && !Cf && !(!Lf || !Af.HTMLElement),
        Mf = {},
        Df = wf("enable_beforeunload"),
        Bf = function(t) {
            if (!(t = t || If.event)) return;
            let e = Mf[t.type];
            e || (e = Mf[t.type] = wf("ON_PROPERTY" + t.type));
            const r = this || t.target || If,
                n = r[e];
            let i;
            if (xf && r === Af && "error" === t.type) {
                const e = t;
                i = n && n.call(this, e.message, e.filename, e.lineno, e.colno, e.error), !0 === i && t.preventDefault();
            } else i = n && n.apply(this, arguments), "beforeunload" === t.type && If[Df] && "string" == typeof i ? t.returnValue = i : null == i || i || t.preventDefault();
            return i;
        };

    function Uf(t, e, r) {
        let n = ff(t, e);
        if (!n && r) {
            ff(r, e) && (n = {
                enumerable: !0,
                configurable: !0
            });
        }
        if (!n || !n.configurable) return;
        const i = wf("on" + e + "patched");
        if (t.hasOwnProperty(i) && t[i]) return;
        delete n.writable, delete n.value;
        const o = n.get,
            s = n.set,
            a = e.slice(2);
        let u = Mf[a];
        u || (u = Mf[a] = wf("ON_PROPERTY" + a)), n.set = function(e) {
            let r = this;
            if (r || t !== If || (r = If), !r) return;
            "function" == typeof r[u] && r.removeEventListener(a, Bf), s && s.call(r, null), r[u] = e, "function" == typeof e && r.addEventListener(a, Bf, !1);
        }, n.get = function() {
            let r = this;
            if (r || t !== If || (r = If), !r) return null;
            const i = r[u];
            if (i) return i;
            if (o) {
                let t = o.call(this);
                if (t) return n.set.call(this, t), "function" == typeof r[kf] && r.removeAttribute(e), t;
            }
            return null;
        }, hf(t, e, n), t[i] = !0;
    }

    function Wf(t, e, r) {
        if (e)
            for (let n = 0; n < e.length; n++) Uf(t, "on" + e[n], r);
        else {
            const e = [];
            for (const r in t) "on" == r.slice(0, 2) && e.push(r);
            for (let n = 0; n < e.length; n++) Uf(t, e[n], r);
        }
    }
    const zf = wf("originalInstance");

    function Ff(t) {
        const e = If[t];
        if (!e) return;
        If[wf(t)] = e, If[t] = function() {
            const r = Rf(arguments, t);
            switch (r.length) {
                case 0:
                    this[zf] = new e();
                    break;
                case 1:
                    this[zf] = new e(r[0]);
                    break;
                case 2:
                    this[zf] = new e(r[0], r[1]);
                    break;
                case 3:
                    this[zf] = new e(r[0], r[1], r[2]);
                    break;
                case 4:
                    this[zf] = new e(r[0], r[1], r[2], r[3]);
                    break;
                default:
                    throw new Error("Arg list too long.");
            }
        }, Gf(If[t], e);
        const r = new e(function() {});
        let n;
        for (n in r) "XMLHttpRequest" === t && "responseBlob" === n || function(e) {
            "function" == typeof r[e] ? If[t].prototype[e] = function() {
                return this[zf][e].apply(this[zf], arguments);
            } : hf(If[t].prototype, e, {
                set: function(r) {
                    "function" == typeof r ? (this[zf][e] = Sf(r, t + "." + e), Gf(this[zf][e], r)) : this[zf][e] = r;
                },
                get: function() {
                    return this[zf][e];
                }
            });
        }(n);
        for (n in e) "prototype" !== n && e.hasOwnProperty(n) && (If[t][n] = e[n]);
    }

    function Zf(t, e, r) {
        let n = t;
        for (; n && !n.hasOwnProperty(e);) n = pf(n);
        !n && t[e] && (n = t);
        const i = wf(e);
        let o = null;
        if (n && (!(o = n[i]) || !n.hasOwnProperty(i))) {
            o = n[i] = n[e];
            if (Pf(n && ff(n, e))) {
                const t = r(o, i, e);
                n[e] = function() {
                    return t(this, arguments);
                }, Gf(n[e], o);
            }
        }
        return o;
    }

    function Vf(t, e, r) {
        let n = null;

        function i(t) {
            const e = t.data;
            return e.args[e.cbIdx] = function() {
                t.invoke.apply(this, arguments);
            }, n.apply(e.target, e.args), t;
        }
        n = Zf(t, e, t => function(e, n) {
            const o = r(e, n);
            return o.cbIdx >= 0 && "function" == typeof n[o.cbIdx] ? Of(o.name, n[o.cbIdx], o, i) : t.apply(e, n);
        });
    }

    function Gf(t, e) {
        t[wf("OriginalDelegate")] = e;
    }
    let Hf = !1,
        Xf = !1;

    function $f() {
        try {
            const t = Af.navigator.userAgent;
            if (-1 !== t.indexOf("MSIE ") || -1 !== t.indexOf("Trident/")) return !0;
        } catch (t) {}
        return !1;
    }

    function qf() {
        if (Hf) return Xf;
        Hf = !0;
        try {
            const t = Af.navigator.userAgent; -
            1 === t.indexOf("MSIE ") && -1 === t.indexOf("Trident/") && -1 === t.indexOf("Edge/") || (Xf = !0);
        } catch (t) {}
        return Xf;
    }

    function Kf(t) {
        return "function" == typeof t;
    }

    function Yf(t) {
        return "number" == typeof t;
    }
    let Qf = !1;
    if ("undefined" != typeof window) try {
        const t = Object.defineProperty({}, "passive", {
            get: function() {
                Qf = !0;
            }
        });
        window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
    } catch (t) {
        Qf = !1;
    }
    const Jf = {
            useG: !0
        },
        th = {},
        eh = {},
        rh = new RegExp("^" + Ef + "(\\w+)(true|false)$"),
        nh = wf("propagationStopped");

    function ih(t, e) {
        const r = (e ? e(t) : t) + bf,
            n = (e ? e(t) : t) + mf,
            i = Ef + r,
            o = Ef + n;
        th[t] = {}, th[t][bf] = i, th[t][mf] = o;
    }

    function oh(t, e, r, n) {
        const i = n && n.add || vf,
            o = n && n.rm || _f,
            s = n && n.listeners || "eventListeners",
            a = n && n.rmAll || "removeAllListeners",
            u = wf(i),
            c = "." + i + ":",
            l = "prependListener",
            f = "." + l + ":",
            h = function(t, e, r) {
                if (t.isRemoved) return;
                const n = t.callback;
                let i;
                "object" == typeof n && n.handleEvent && (t.callback = t => n.handleEvent(t), t.originalDelegate = n);
                try {
                    t.invoke(t, e, [r]);
                } catch (t) {
                    i = t;
                }
                const s = t.options;
                if (s && "object" == typeof s && s.once) {
                    const n = t.originalDelegate ? t.originalDelegate : t.callback;
                    e[o].call(e, r.type, n, s);
                }
                return i;
            };

        function p(r, n, i) {
            if (!(n = n || t.event)) return;
            const o = r || n.target || t,
                s = o[th[n.type][i ? mf : bf]];
            if (s) {
                const t = [];
                if (1 === s.length) {
                    const e = h(s[0], o, n);
                    e && t.push(e);
                } else {
                    const e = s.slice();
                    for (let r = 0; r < e.length && (!n || !0 !== n[nh]); r++) {
                        const i = h(e[r], o, n);
                        i && t.push(i);
                    }
                }
                if (1 === t.length) throw t[0];
                for (let r = 0; r < t.length; r++) {
                    const n = t[r];
                    e.nativeScheduleMicroTask(() => {
                        throw n;
                    });
                }
            }
        }
        const d = function(t) {
                return p(this, t, !1);
            },
            g = function(t) {
                return p(this, t, !0);
            };

        function v(e, r) {
            if (!e) return !1;
            let n = !0;
            r && void 0 !== r.useG && (n = r.useG);
            const h = r && r.vh;
            let p = !0;
            r && void 0 !== r.chkDup && (p = r.chkDup);
            let v = !1;
            r && void 0 !== r.rt && (v = r.rt);
            let _ = e;
            for (; _ && !_.hasOwnProperty(i);) _ = pf(_);
            if (!_ && e[i] && (_ = e), !_) return !1;
            if (_[u]) return !1;
            const y = r && r.eventNameToString,
                T = {},
                m = _[u] = _[i],
                b = _[wf(o)] = _[o],
                E = _[wf(s)] = _[s],
                S = _[wf(a)] = _[a];
            let O;
            r && r.prepend && (O = _[wf(r.prepend)] = _[r.prepend]);
            const w = function(t) {
                    return O.call(T.target, T.eventName, t.invoke, T.options);
                },
                L = n ? function(t) {
                    if (!T.isExisting) return m.call(T.target, T.eventName, T.capture ? g : d, T.options);
                } : function(t) {
                    return m.call(T.target, T.eventName, t.invoke, T.options);
                },
                A = n ? function(t) {
                    if (!t.isRemoved) {
                        const e = th[t.eventName];
                        let r;
                        e && (r = e[t.capture ? mf : bf]);
                        const n = r && t.target[r];
                        if (n)
                            for (let e = 0; e < n.length; e++) {
                                if (n[e] === t) {
                                    n.splice(e, 1), t.isRemoved = !0, t.removeAbortListener && (t.removeAbortListener(), t.removeAbortListener = null), 0 === n.length && (t.allRemoved = !0, t.target[r] = null);
                                    break;
                                }
                            }
                    }
                    if (t.allRemoved) return b.call(t.target, t.eventName, t.capture ? g : d, t.options);
                } : function(t) {
                    return b.call(t.target, t.eventName, t.invoke, t.options);
                },
                I = r && r.diff ? r.diff : function(t, e) {
                    const r = typeof e;
                    return "function" === r && t.callback === e || "object" === r && t.originalDelegate === e;
                },
                k = Zone[wf("UNPATCHED_EVENTS")],
                R = t[wf("PASSIVE_EVENTS")];
            const P = function(e, i, o, s) {
                let a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
                let u = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
                return function() {
                    const c = this || t;
                    let l = arguments[0];
                    r && r.transferEventName && (l = r.transferEventName(l));
                    let f = arguments[1];
                    if (!f) return e.apply(this, arguments);
                    if (Nf && "uncaughtException" === l) return e.apply(this, arguments);
                    let d = !1;
                    if ("function" != typeof f) {
                        if (!f.handleEvent) return e.apply(this, arguments);
                        d = !0;
                    }
                    if (h && !h(e, f, c, arguments)) return;
                    const g = Qf && !!R && -1 !== R.indexOf(l),
                        v = function(t) {
                            if ("object" == typeof t && null !== t) {
                                const e = {
                                    ...t
                                };
                                return t.signal && (e.signal = t.signal), e;
                            }
                            return t;
                        }(function(t, e) {
                            return !Qf && "object" == typeof t && t ? !!t.capture : Qf && e ? "boolean" == typeof t ? {
                                capture: t,
                                passive: !0
                            } : t ? "object" == typeof t && !1 !== t.passive ? {
                                ...t,
                                passive: !0
                            } : t : {
                                passive: !0
                            } : t;
                        }(arguments[2], g)),
                        _ = v === null || v === void 0 ? void 0 : v.signal;
                    if (_ !== null && _ !== void 0 && _.aborted) return;
                    if (k)
                        for (let t = 0; t < k.length; t++)
                            if (l === k[t]) return g ? e.call(c, l, f, v) : e.apply(this, arguments);
                    const m = !!v && ("boolean" == typeof v || v.capture),
                        b = !(!v || "object" != typeof v) && v.once,
                        E = Zone.current;
                    let S = th[l];
                    S || (ih(l, y), S = th[l]);
                    const O = S[m ? mf : bf];
                    let w,
                        L = c[O],
                        A = !1;
                    if (L) {
                        if (A = !0, p)
                            for (let t = 0; t < L.length; t++)
                                if (I(L[t], f)) return;
                    } else L = c[O] = [];
                    const P = c.constructor.name,
                        C = eh[P];
                    C && (w = C[l]), w || (w = P + i + (y ? y(l) : l)), T.options = v, b && (T.options.once = !1), T.target = c, T.capture = m, T.eventName = l, T.isExisting = A;
                    const N = n ? Jf : void 0;
                    N && (N.taskData = T), _ && (T.options.signal = void 0);
                    const x = E.scheduleEventTask(w, f, N, o, s);
                    if (_) {
                        T.options.signal = _;
                        const t = () => x.zone.cancelTask(x);
                        e.call(_, "abort", t, {
                            once: !0
                        }), x.removeAbortListener = () => _.removeEventListener("abort", t);
                    }
                    return T.target = null, N && (N.taskData = null), b && (T.options.once = !0), (Qf || "boolean" != typeof x.options) && (x.options = v), x.target = c, x.capture = m, x.eventName = l, d && (x.originalDelegate = f), u ? L.unshift(x) : L.push(x), a ? c : void 0;
                };
            };
            return _[i] = P(m, c, L, A, v), O && (_[l] = P(O, f, w, A, v, !0)), _[o] = function() {
                const e = this || t;
                let n = arguments[0];
                r && r.transferEventName && (n = r.transferEventName(n));
                const i = arguments[2],
                    o = !!i && ("boolean" == typeof i || i.capture),
                    s = arguments[1];
                if (!s) return b.apply(this, arguments);
                if (h && !h(b, s, e, arguments)) return;
                const a = th[n];
                let u;
                a && (u = a[o ? mf : bf]);
                const c = u && e[u];
                if (c)
                    for (let t = 0; t < c.length; t++) {
                        const r = c[t];
                        if (I(r, s)) {
                            if (c.splice(t, 1), r.isRemoved = !0, 0 === c.length && (r.allRemoved = !0, e[u] = null, !o && "string" == typeof n)) {
                                e[Ef + "ON_PROPERTY" + n] = null;
                            }
                            return r.zone.cancelTask(r), v ? e : void 0;
                        }
                    }
                return b.apply(this, arguments);
            }, _[s] = function() {
                const e = this || t;
                let n = arguments[0];
                r && r.transferEventName && (n = r.transferEventName(n));
                const i = [],
                    o = sh(e, y ? y(n) : n);
                for (let t = 0; t < o.length; t++) {
                    const e = o[t];
                    let r = e.originalDelegate ? e.originalDelegate : e.callback;
                    i.push(r);
                }
                return i;
            }, _[a] = function() {
                const e = this || t;
                let n = arguments[0];
                if (n) {
                    r && r.transferEventName && (n = r.transferEventName(n));
                    const t = th[n];
                    if (t) {
                        const r = t[bf],
                            i = t[mf],
                            s = e[r],
                            a = e[i];
                        if (s) {
                            const t = s.slice();
                            for (let e = 0; e < t.length; e++) {
                                const r = t[e];
                                let i = r.originalDelegate ? r.originalDelegate : r.callback;
                                this[o].call(this, n, i, r.options);
                            }
                        }
                        if (a) {
                            const t = a.slice();
                            for (let e = 0; e < t.length; e++) {
                                const r = t[e];
                                let i = r.originalDelegate ? r.originalDelegate : r.callback;
                                this[o].call(this, n, i, r.options);
                            }
                        }
                    }
                } else {
                    const t = Object.keys(e);
                    for (let e = 0; e < t.length; e++) {
                        const r = t[e],
                            n = rh.exec(r);
                        let i = n && n[1];
                        i && "removeListener" !== i && this[a].call(this, i);
                    }
                    this[a].call(this, "removeListener");
                }
                if (v) return this;
            }, Gf(_[i], m), Gf(_[o], b), S && Gf(_[a], S), E && Gf(_[s], E), !0;
        }
        let _ = [];
        for (let t = 0; t < r.length; t++) _[t] = v(r[t], n);
        return _;
    }

    function sh(t, e) {
        if (!e) {
            const r = [];
            for (let n in t) {
                const i = rh.exec(n);
                let o = i && i[1];
                if (o && (!e || o === e)) {
                    const e = t[n];
                    if (e)
                        for (let t = 0; t < e.length; t++) r.push(e[t]);
                }
            }
            return r;
        }
        let r = th[e];
        r || (ih(e), r = th[e]);
        const n = t[r[bf]],
            i = t[r[mf]];
        return n ? i ? n.concat(i) : n.slice() : i ? i.slice() : [];
    }

    function ah(t, e) {
        const r = t.Event;
        r && r.prototype && e.patchMethod(r.prototype, "stopImmediatePropagation", t => function(e, r) {
            e[nh] = !0, t && t.apply(e, r);
        });
    }

    function uh(t, e) {
        e.patchMethod(t, "queueMicrotask", t => function(t, e) {
            Zone.current.scheduleMicroTask("queueMicrotask", e[0]);
        });
    }
    const ch = wf("zoneTask");

    function lh(t, e, r, n) {
        let i = null,
            o = null;
        r += n;
        const s = {};

        function a(e) {
            const r = e.data;
            r.args[0] = function() {
                return e.invoke.apply(this, arguments);
            };
            const n = i.apply(t, r.args);
            return Yf(n) ? r.handleId = n : (r.handle = n, r.isRefreshable = Kf(n.refresh)), e;
        }

        function u(e) {
            const {
                handle: r,
                handleId: n
            } = e.data;
            return o.call(t, r !== null && r !== void 0 ? r : n);
        }
        i = Zf(t, e += n, r => function(i, o) {
            if (Kf(o[0])) {
                var _ref20;
                const t = {
                        isRefreshable: !1,
                        isPeriodic: "Interval" === n,
                        delay: "Timeout" === n || "Interval" === n ? o[1] || 0 : void 0,
                        args: o
                    },
                    r = o[0];
                o[0] = function() {
                    try {
                        return r.apply(this, arguments);
                    } finally {
                        const {
                            handle: e,
                            handleId: r,
                            isPeriodic: n,
                            isRefreshable: i
                        } = t;
                        n || i || (r ? delete s[r] : e && (e[ch] = null));
                    }
                };
                const i = Of(e, o[0], t, a, u);
                if (!i) return i;
                const {
                    handleId: c,
                    handle: l,
                    isRefreshable: f,
                    isPeriodic: h
                } = i.data;
                if (c) s[c] = i;
                else if (l && (l[ch] = i, f && !h)) {
                    const t = l.refresh;
                    l.refresh = function() {
                        const {
                            zone: e,
                            state: r
                        } = i;
                        return "notScheduled" === r ? (i._state = "scheduled", e._updateTaskCount(i, 1)) : "running" === r && (i._state = "scheduling"), t.call(this);
                    };
                }
                return (_ref20 = l !== null && l !== void 0 ? l : c) !== null && _ref20 !== void 0 ? _ref20 : i;
            }
            return r.apply(t, o);
        }), o = Zf(t, r, e => function(r, n) {
            var _o2;
            const i = n[0];
            let o;
            Yf(i) ? (o = s[i], delete s[i]) : (o = i === null || i === void 0 ? void 0 : i[ch], o ? i[ch] = null : o = i), (_o2 = o) !== null && _o2 !== void 0 && _o2.type ? o.cancelFn && o.zone.cancelTask(o) : e.apply(t, n);
        });
    }

    function fh(t, e) {
        if (Zone[e.symbol("patchEventTarget")]) return;
        const {
            eventNames: r,
            zoneSymbolEventNames: n,
            TRUE_STR: i,
            FALSE_STR: o,
            ZONE_SYMBOL_PREFIX: s
        } = e.getGlobalObjects();
        for (let t = 0; t < r.length; t++) {
            const e = r[t],
                a = s + (e + o),
                u = s + (e + i);
            n[e] = {}, n[e][o] = a, n[e][i] = u;
        }
        const a = t.EventTarget;
        return a && a.prototype ? (e.patchEventTarget(t, e, [a && a.prototype]), !0) : void 0;
    }

    function hh(t, e, r) {
        if (!r || 0 === r.length) return e;
        const n = r.filter(e => e.target === t);
        if (!n || 0 === n.length) return e;
        const i = n[0].ignoreProperties;
        return e.filter(t => -1 === i.indexOf(t));
    }

    function ph(t, e, r, n) {
        if (!t) return;
        Wf(t, hh(t, e, r), n);
    }

    function dh(t) {
        return Object.getOwnPropertyNames(t).filter(t => t.startsWith("on") && t.length > 2).map(t => t.substring(2));
    }

    function gh(t, e) {
        if (Nf && !jf) return;
        if (Zone[t.symbol("patchEvents")]) return;
        const r = e.__Zone_ignore_on_properties;
        let n = [];
        if (xf) {
            const t = window;
            n = n.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
            const e = $f() ? [{
                target: t,
                ignoreProperties: ["error"]
            }] : [];
            ph(t, dh(t), r ? r.concat(e) : r, pf(t));
        }
        n = n.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
        for (let t = 0; t < n.length; t++) {
            const i = e[n[t]];
            i && i.prototype && ph(i.prototype, dh(i.prototype), r);
        }
    }

    function vh(t) {
        t.__load_patch("ZoneAwarePromise", (t, e, r) => {
            const n = Object.getOwnPropertyDescriptor,
                i = Object.defineProperty;
            const o = r.symbol,
                s = [],
                a = !1 !== t[o("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                u = o("Promise"),
                c = o("then"),
                l = "__creationTrace__";
            r.onUnhandledError = t => {
                if (r.showUncaughtError()) {
                    const e = t && t.rejection;
                    e ? console.error("Unhandled Promise rejection:", e instanceof Error ? e.message : e, "; Zone:", t.zone.name, "; Task:", t.task && t.task.source, "; Value:", e, e instanceof Error ? e.stack : void 0) : console.error(t);
                }
            }, r.microtaskDrainDone = () => {
                for (; s.length;) {
                    const t = s.shift();
                    try {
                        t.zone.runGuarded(() => {
                            if (t.throwOriginal) throw t.rejection;
                            throw t;
                        });
                    } catch (t) {
                        h(t);
                    }
                }
            };
            const f = o("unhandledPromiseRejectionHandler");

            function h(t) {
                r.onUnhandledError(t);
                try {
                    const r = e[f];
                    "function" == typeof r && r.call(this, t);
                } catch (t) {}
            }

            function p(t) {
                return t && t.then;
            }

            function d(t) {
                return t;
            }

            function g(t) {
                return M.reject(t);
            }
            const v = o("state"),
                _ = o("value"),
                y = o("finally"),
                T = o("parentPromiseValue"),
                m = o("parentPromiseState"),
                b = "Promise.then",
                E = null,
                S = !0,
                O = !1,
                w = 0;

            function L(t, e) {
                return r => {
                    try {
                        R(t, e, r);
                    } catch (e) {
                        R(t, !1, e);
                    }
                };
            }
            const A = function() {
                    let t = !1;
                    return function(e) {
                        return function() {
                            t || (t = !0, e.apply(null, arguments));
                        };
                    };
                },
                I = "Promise resolved with itself",
                k = o("currentTaskTrace");

            function R(t, n, o) {
                const u = A();
                if (t === o) throw new TypeError(I);
                if (t[v] === E) {
                    let c = null;
                    try {
                        "object" != typeof o && "function" != typeof o || (c = o && o.then);
                    } catch (e) {
                        return u(() => {
                            R(t, !1, e);
                        })(), t;
                    }
                    if (n !== O && o instanceof M && o.hasOwnProperty(v) && o.hasOwnProperty(_) && o[v] !== E) C(o), R(t, o[v], o[_]);
                    else if (n !== O && "function" == typeof c) try {
                        c.call(o, u(L(t, n)), u(L(t, !1)));
                    } catch (e) {
                        u(() => {
                            R(t, !1, e);
                        })();
                    } else {
                        t[v] = n;
                        const u = t[_];
                        if (t[_] = o, t[y] === y && n === S && (t[v] = t[m], t[_] = t[T]), n === O && o instanceof Error) {
                            const t = e.currentTask && e.currentTask.data && e.currentTask.data[l];
                            t && i(o, k, {
                                configurable: !0,
                                enumerable: !1,
                                writable: !0,
                                value: t
                            });
                        }
                        for (let e = 0; e < u.length;) N(t, u[e++], u[e++], u[e++], u[e++]);
                        if (0 == u.length && n == O) {
                            t[v] = w;
                            let n = o;
                            try {
                                throw new Error("Uncaught (in promise): " + function(t) {
                                    if (t && t.toString === Object.prototype.toString) {
                                        return (t.constructor && t.constructor.name || "") + ": " + JSON.stringify(t);
                                    }
                                    return t ? t.toString() : Object.prototype.toString.call(t);
                                }(o) + (o && o.stack ? "\n" + o.stack : ""));
                            } catch (t) {
                                n = t;
                            }
                            a && (n.throwOriginal = !0), n.rejection = o, n.promise = t, n.zone = e.current, n.task = e.currentTask, s.push(n), r.scheduleMicroTask();
                        }
                    }
                }
                return t;
            }
            const P = o("rejectionHandledHandler");

            function C(t) {
                if (t[v] === w) {
                    try {
                        const r = e[P];
                        r && "function" == typeof r && r.call(this, {
                            rejection: t[_],
                            promise: t
                        });
                    } catch (t) {}
                    t[v] = O;
                    for (let e = 0; e < s.length; e++) t === s[e].promise && s.splice(e, 1);
                }
            }

            function N(t, e, r, n, i) {
                C(t);
                const o = t[v],
                    s = o ? "function" == typeof n ? n : d : "function" == typeof i ? i : g;
                e.scheduleMicroTask(b, () => {
                    try {
                        const n = t[_],
                            i = !!r && y === r[y];
                        i && (r[T] = n, r[m] = o);
                        const a = e.run(s, void 0, i && s !== g && s !== d ? [] : [n]);
                        R(r, !0, a);
                    } catch (t) {
                        R(r, !1, t);
                    }
                }, r);
            }
            const x = function() {},
                j = t.AggregateError;
            class M {
                static toString() {
                    return "function ZoneAwarePromise() { [native code] }";
                }
                static resolve(t) {
                    return t instanceof M ? t : R(new this(null), S, t);
                }
                static reject(t) {
                    return R(new this(null), O, t);
                }
                static withResolvers() {
                    const t = {};
                    return t.promise = new M((e, r) => {
                        t.resolve = e, t.reject = r;
                    }), t;
                }
                static any(t) {
                    if (!t || "function" != typeof t[Symbol.iterator]) return Promise.reject(new j([], "All promises were rejected"));
                    const e = [];
                    let r = 0;
                    try {
                        for (let n of t) r++, e.push(M.resolve(n));
                    } catch (t) {
                        return Promise.reject(new j([], "All promises were rejected"));
                    }
                    if (0 === r) return Promise.reject(new j([], "All promises were rejected"));
                    let n = !1;
                    const i = [];
                    return new M((t, o) => {
                        for (let s = 0; s < e.length; s++) e[s].then(e => {
                            n || (n = !0, t(e));
                        }, t => {
                            i.push(t), r--, 0 === r && (n = !0, o(new j(i, "All promises were rejected")));
                        });
                    });
                }
                static race(t) {
                    let e,
                        r,
                        n = new this((t, n) => {
                            e = t, r = n;
                        });

                    function i(t) {
                        e(t);
                    }

                    function o(t) {
                        r(t);
                    }
                    for (let e of t) p(e) || (e = this.resolve(e)), e.then(i, o);
                    return n;
                }
                static all(t) {
                    return M.allWithCallback(t);
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
                    });
                }
                static allWithCallback(t, e) {
                    let r,
                        n,
                        i = new this((t, e) => {
                            r = t, n = e;
                        }),
                        o = 2,
                        s = 0;
                    const a = [];
                    for (let i of t) {
                        p(i) || (i = this.resolve(i));
                        const t = s;
                        try {
                            i.then(n => {
                                a[t] = e ? e.thenCallback(n) : n, o--, 0 === o && r(a);
                            }, i => {
                                e ? (a[t] = e.errorCallback(i), o--, 0 === o && r(a)) : n(i);
                            });
                        } catch (t) {
                            n(t);
                        }
                        o++, s++;
                    }
                    return o -= 2, 0 === o && r(a), i;
                }
                constructor(t) {
                    const e = this;
                    if (!(e instanceof M)) throw new Error("Must be an instanceof Promise.");
                    e[v] = E, e[_] = [];
                    try {
                        const r = A();
                        t && t(r(L(e, S)), r(L(e, O)));
                    } catch (t) {
                        R(e, !1, t);
                    }
                }
                get[Symbol.toStringTag]() {
                    return "Promise";
                }
                get[Symbol.species]() {
                    return M;
                }
                then(t, r) {
                    var _this$constructor;
                    let n = (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor[Symbol.species];
                    n && "function" == typeof n || (n = this.constructor || M);
                    const i = new n(x),
                        o = e.current;
                    return this[v] == E ? this[_].push(o, i, t, r) : N(this, o, i, t, r), i;
                }
                catch (t) {
                    return this.then(null, t);
                } finally(t) {
                    var _this$constructor2;
                    let r = (_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2[Symbol.species];
                    r && "function" == typeof r || (r = M);
                    const n = new r(x);
                    n[y] = y;
                    const i = e.current;
                    return this[v] == E ? this[_].push(i, n, t, t) : N(this, i, n, t, t), n;
                }
            }
            M.resolve = M.resolve, M.reject = M.reject, M.race = M.race, M.all = M.all;
            const D = t[u] = t.Promise;
            t.Promise = M;
            const B = o("thenPatched");

            function U(t) {
                const e = t.prototype,
                    r = n(e, "then");
                if (r && (!1 === r.writable || !r.configurable)) return;
                const i = e.then;
                e[c] = i, t.prototype.then = function(t, e) {
                    return new M((t, e) => {
                        i.call(this, t, e);
                    }).then(t, e);
                }, t[B] = !0;
            }
            return r.patchThen = U, D && (U(D), Zf(t, "fetch", t => {
                return e = t,
                    function(t, r) {
                        let n = e.apply(t, r);
                        if (n instanceof M) return n;
                        let i = n.constructor;
                        return i[B] || U(i), n;
                    };
                var e;
            })), Promise[e.__symbol__("uncaughtPromiseErrors")] = s, M;
        });
    }

    function _h(t, e, r, n, i) {
        const o = Zone.__symbol__(n);
        if (e[o]) return;
        const s = e[o] = e[n];
        e[n] = function(o, a, u) {
            return a && a.prototype && i.forEach(function(e) {
                const i = `${r}.${n}::` + e,
                    o = a.prototype;
                try {
                    if (o.hasOwnProperty(e)) {
                        const r = t.ObjectGetOwnPropertyDescriptor(o, e);
                        r && r.value ? (r.value = t.wrapWithCurrentZone(r.value, i), t._redefineProperty(a.prototype, e, r)) : o[e] && (o[e] = t.wrapWithCurrentZone(o[e], i));
                    } else o[e] && (o[e] = t.wrapWithCurrentZone(o[e], i));
                } catch {}
            }), s.call(e, o, a, u);
        }, t.attachOriginToPatched(e[n], s);
    }
    const yh = function(_t$Zone) {
        const t = globalThis,
            e = !0 === t[lf("forceDuplicateZoneCheck")];
        if (t.Zone && (e || "function" != typeof t.Zone.__symbol__)) throw new Error("Zone already loaded.");
        return (_t$Zone = t.Zone) !== null && _t$Zone !== void 0 ? _t$Zone : t.Zone = function(_n2) {
            const t = cf.performance;

            function e(e) {
                t && t.mark && t.mark(e);
            }

            function r(e, r) {
                t && t.measure && t.measure(e, r);
            }
            e("Zone");
            class n {
                static assertZonePatched() {
                    if (cf.Promise !== L.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
                }
                static get root() {
                    let t = n.current;
                    for (; t.parent;) t = t.parent;
                    return t;
                }
                static get current() {
                    return I.zone;
                }
                static get currentTask() {
                    return k;
                }
                static __load_patch(t, i) {
                    let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                    if (L.hasOwnProperty(t)) {
                        const e = !0 === cf[lf("forceDuplicateZoneCheck")];
                        if (!o && e) throw Error("Already loaded patch: " + t);
                    } else if (!cf["__Zone_disable_" + t]) {
                        const o = "Zone:" + t;
                        e(o), L[t] = i(cf, n, A), r(o, o);
                    }
                }
                get parent() {
                    return this._parent;
                }
                get name() {
                    return this._name;
                }
                constructor(t, e) {
                    this._parent = t, this._name = e ? e.name || "unnamed" : "<root>", this._properties = e && e.properties || {}, this._zoneDelegate = new o(this, this._parent && this._parent._zoneDelegate, e);
                }
                get(t) {
                    const e = this.getZoneWith(t);
                    if (e) return e._properties[t];
                }
                getZoneWith(t) {
                    let e = this;
                    for (; e;) {
                        if (e._properties.hasOwnProperty(t)) return e;
                        e = e._parent;
                    }
                    return null;
                }
                fork(t) {
                    if (!t) throw new Error("ZoneSpec required!");
                    return this._zoneDelegate.fork(this, t);
                }
                wrap(t, e) {
                    if ("function" != typeof t) throw new Error("Expecting function got: " + t);
                    const r = this._zoneDelegate.intercept(this, t, e),
                        n = this;
                    return function() {
                        return n.runGuarded(r, this, arguments, e);
                    };
                }
                run(t, e, r, n) {
                    I = {
                        parent: I,
                        zone: this
                    };
                    try {
                        return this._zoneDelegate.invoke(this, t, e, r, n);
                    } finally {
                        I = I.parent;
                    }
                }
                runGuarded(t) {
                    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    let r = arguments.length > 2 ? arguments[2] : undefined;
                    let n = arguments.length > 3 ? arguments[3] : undefined;
                    I = {
                        parent: I,
                        zone: this
                    };
                    try {
                        try {
                            return this._zoneDelegate.invoke(this, t, e, r, n);
                        } catch (t) {
                            if (this._zoneDelegate.handleError(this, t)) throw t;
                        }
                    } finally {
                        I = I.parent;
                    }
                }
                runTask(t, e, r) {
                    if (t.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (t.zone || v).name + "; Execution: " + this.name + ")");
                    const n = t,
                        {
                            type: i,
                            data: {
                                isPeriodic: o = !1,
                                isRefreshable: s = !1
                            } = {}
                        } = t;
                    if (t.state === _ && (i === w || i === O)) return;
                    const a = t.state != m;
                    a && n._transitionTo(m, T);
                    const u = k;
                    k = n, I = {
                        parent: I,
                        zone: this
                    };
                    try {
                        i != O || !t.data || o || s || (t.cancelFn = void 0);
                        try {
                            return this._zoneDelegate.invokeTask(this, n, e, r);
                        } catch (t) {
                            if (this._zoneDelegate.handleError(this, t)) throw t;
                        }
                    } finally {
                        const e = t.state;
                        if (e !== _ && e !== E)
                            if (i == w || o || s && e === y) a && n._transitionTo(T, m, y);
                            else {
                                const t = n._zoneDelegates;
                                this._updateTaskCount(n, -1), a && n._transitionTo(_, m, _), s && (n._zoneDelegates = t);
                            }
                        I = I.parent, k = u;
                    }
                }
                scheduleTask(t) {
                    if (t.zone && t.zone !== this) {
                        let e = this;
                        for (; e;) {
                            if (e === t.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);
                            e = e.parent;
                        }
                    }
                    t._transitionTo(y, _);
                    const e = [];
                    t._zoneDelegates = e, t._zone = this;
                    try {
                        t = this._zoneDelegate.scheduleTask(this, t);
                    } catch (e) {
                        throw t._transitionTo(E, y, _), this._zoneDelegate.handleError(this, e), e;
                    }
                    return t._zoneDelegates === e && this._updateTaskCount(t, 1), t.state == y && t._transitionTo(T, y), t;
                }
                scheduleMicroTask(t, e, r, n) {
                    return this.scheduleTask(new s(S, t, e, r, n, void 0));
                }
                scheduleMacroTask(t, e, r, n, i) {
                    return this.scheduleTask(new s(O, t, e, r, n, i));
                }
                scheduleEventTask(t, e, r, n, i) {
                    return this.scheduleTask(new s(w, t, e, r, n, i));
                }
                cancelTask(t) {
                    if (t.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (t.zone || v).name + "; Execution: " + this.name + ")");
                    if (t.state === T || t.state === m) {
                        t._transitionTo(b, T, m);
                        try {
                            this._zoneDelegate.cancelTask(this, t);
                        } catch (e) {
                            throw t._transitionTo(E, b), this._zoneDelegate.handleError(this, e), e;
                        }
                        return this._updateTaskCount(t, -1), t._transitionTo(_, b), t.runCount = -1, t;
                    }
                }
                _updateTaskCount(t, e) {
                    const r = t._zoneDelegates; -
                    1 == e && (t._zoneDelegates = null);
                    for (let n = 0; n < r.length; n++) r[n]._updateTaskCount(t.type, e);
                }
            }
            _n2 = n;
            _n2.__symbol__ = lf;
            const i = {
                name: "",
                onHasTask: (t, e, r, n) => t.hasTask(r, n),
                onScheduleTask: (t, e, r, n) => t.scheduleTask(r, n),
                onInvokeTask: (t, e, r, n, i, o) => t.invokeTask(r, n, i, o),
                onCancelTask: (t, e, r, n) => t.cancelTask(r, n)
            };
            class o {
                get zone() {
                    return this._zone;
                }
                constructor(t, e, r) {
                    this._taskCounts = {
                        microTask: 0,
                        macroTask: 0,
                        eventTask: 0
                    }, this._zone = t, this._parentDelegate = e, this._forkZS = r && (r && r.onFork ? r : e._forkZS), this._forkDlgt = r && (r.onFork ? e : e._forkDlgt), this._forkCurrZone = r && (r.onFork ? this._zone : e._forkCurrZone), this._interceptZS = r && (r.onIntercept ? r : e._interceptZS), this._interceptDlgt = r && (r.onIntercept ? e : e._interceptDlgt), this._interceptCurrZone = r && (r.onIntercept ? this._zone : e._interceptCurrZone), this._invokeZS = r && (r.onInvoke ? r : e._invokeZS), this._invokeDlgt = r && (r.onInvoke ? e : e._invokeDlgt), this._invokeCurrZone = r && (r.onInvoke ? this._zone : e._invokeCurrZone), this._handleErrorZS = r && (r.onHandleError ? r : e._handleErrorZS), this._handleErrorDlgt = r && (r.onHandleError ? e : e._handleErrorDlgt), this._handleErrorCurrZone = r && (r.onHandleError ? this._zone : e._handleErrorCurrZone), this._scheduleTaskZS = r && (r.onScheduleTask ? r : e._scheduleTaskZS), this._scheduleTaskDlgt = r && (r.onScheduleTask ? e : e._scheduleTaskDlgt), this._scheduleTaskCurrZone = r && (r.onScheduleTask ? this._zone : e._scheduleTaskCurrZone), this._invokeTaskZS = r && (r.onInvokeTask ? r : e._invokeTaskZS), this._invokeTaskDlgt = r && (r.onInvokeTask ? e : e._invokeTaskDlgt), this._invokeTaskCurrZone = r && (r.onInvokeTask ? this._zone : e._invokeTaskCurrZone), this._cancelTaskZS = r && (r.onCancelTask ? r : e._cancelTaskZS), this._cancelTaskDlgt = r && (r.onCancelTask ? e : e._cancelTaskDlgt), this._cancelTaskCurrZone = r && (r.onCancelTask ? this._zone : e._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
                    const n = r && r.onHasTask,
                        o = e && e._hasTaskZS;
                    (n || o) && (this._hasTaskZS = n ? r : i, this._hasTaskDlgt = e, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = this._zone, r.onScheduleTask || (this._scheduleTaskZS = i, this._scheduleTaskDlgt = e, this._scheduleTaskCurrZone = this._zone), r.onInvokeTask || (this._invokeTaskZS = i, this._invokeTaskDlgt = e, this._invokeTaskCurrZone = this._zone), r.onCancelTask || (this._cancelTaskZS = i, this._cancelTaskDlgt = e, this._cancelTaskCurrZone = this._zone));
                }
                fork(t, e) {
                    return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, t, e) : new n(t, e);
                }
                intercept(t, e, r) {
                    return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, t, e, r) : e;
                }
                invoke(t, e, r, n, i) {
                    return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, t, e, r, n, i) : e.apply(r, n);
                }
                handleError(t, e) {
                    return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, t, e);
                }
                scheduleTask(t, e) {
                    let r = e;
                    if (this._scheduleTaskZS) this._hasTaskZS && r._zoneDelegates.push(this._hasTaskDlgtOwner), r = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, t, e), r || (r = e);
                    else if (e.scheduleFn) e.scheduleFn(e);
                    else {
                        if (e.type != S) throw new Error("Task is missing scheduleFn.");
                        d(e);
                    }
                    return r;
                }
                invokeTask(t, e, r, n) {
                    return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, t, e, r, n) : e.callback.apply(r, n);
                }
                cancelTask(t, e) {
                    let r;
                    if (this._cancelTaskZS) r = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, t, e);
                    else {
                        if (!e.cancelFn) throw Error("Task is not cancelable");
                        r = e.cancelFn(e);
                    }
                    return r;
                }
                hasTask(t, e) {
                    try {
                        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, t, e);
                    } catch (e) {
                        this.handleError(t, e);
                    }
                }
                _updateTaskCount(t, e) {
                    const r = this._taskCounts,
                        n = r[t],
                        i = r[t] = n + e;
                    if (i < 0) throw new Error("More tasks executed then were scheduled.");
                    if (0 == n || 0 == i) {
                        const e = {
                            microTask: r.microTask > 0,
                            macroTask: r.macroTask > 0,
                            eventTask: r.eventTask > 0,
                            change: t
                        };
                        this.hasTask(this._zone, e);
                    }
                }
            }
            class s {
                constructor(t, e, r, n, i, o) {
                    if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = t, this.source = e, this.data = n, this.scheduleFn = i, this.cancelFn = o, !r) throw new Error("callback is not defined");
                    this.callback = r;
                    const a = this;
                    t === w && n && n.useG ? this.invoke = s.invokeTask : this.invoke = function() {
                        return s.invokeTask.call(cf, a, this, arguments);
                    };
                }
                static invokeTask(t, e, r) {
                    t || (t = this), R++;
                    try {
                        return t.runCount++, t.zone.runTask(t, e, r);
                    } finally {
                        1 == R && g(), R--;
                    }
                }
                get zone() {
                    return this._zone;
                }
                get state() {
                    return this._state;
                }
                cancelScheduleRequest() {
                    this._transitionTo(_, y);
                }
                _transitionTo(t, e, r) {
                    if (this._state !== e && this._state !== r) throw new Error(`${this.type} '${this.source}': can not transition to '${t}', expecting state '${e}'${r ? " or '" + r + "'" : ""}, was '${this._state}'.`);
                    this._state = t, t == _ && (this._zoneDelegates = null);
                }
                toString() {
                    return this.data && void 0 !== this.data.handleId ? this.data.handleId.toString() : Object.prototype.toString.call(this);
                }
                toJSON() {
                    return {
                        type: this.type,
                        state: this.state,
                        source: this.source,
                        zone: this.zone.name,
                        runCount: this.runCount
                    };
                }
            }
            const a = lf("setTimeout"),
                u = lf("Promise"),
                c = lf("then");
            let l,
                f = [],
                h = !1;

            function p(t) {
                if (l || cf[u] && (l = cf[u].resolve(0)), l) {
                    let e = l[c];
                    e || (e = l.then), e.call(l, t);
                } else cf[a](t, 0);
            }

            function d(t) {
                0 === R && 0 === f.length && p(g), t && f.push(t);
            }

            function g() {
                if (!h) {
                    for (h = !0; f.length;) {
                        const t = f;
                        f = [];
                        for (let e = 0; e < t.length; e++) {
                            const r = t[e];
                            try {
                                r.zone.runTask(r, null, null);
                            } catch (t) {
                                A.onUnhandledError(t);
                            }
                        }
                    }
                    A.microtaskDrainDone(), h = !1;
                }
            }
            const v = {
                    name: "NO ZONE"
                },
                _ = "notScheduled",
                y = "scheduling",
                T = "scheduled",
                m = "running",
                b = "canceling",
                E = "unknown",
                S = "microTask",
                O = "macroTask",
                w = "eventTask",
                L = {},
                A = {
                    symbol: lf,
                    currentZoneFrame: () => I,
                    onUnhandledError: P,
                    microtaskDrainDone: P,
                    scheduleMicroTask: d,
                    showUncaughtError: () => !n[lf("ignoreConsoleErrorUncaughtError")],
                    patchEventTarget: () => [],
                    patchOnProperties: P,
                    patchMethod: () => P,
                    bindArguments: () => [],
                    patchThen: () => P,
                    patchMacroTask: () => P,
                    patchEventPrototype: () => P,
                    isIEOrEdge: () => !1,
                    getGlobalObjects: () => {},
                    ObjectDefineProperty: () => P,
                    ObjectGetOwnPropertyDescriptor: () => {},
                    ObjectCreate: () => {},
                    ArraySlice: () => [],
                    patchClass: () => P,
                    wrapWithCurrentZone: () => P,
                    filterProperties: () => [],
                    attachOriginToPatched: () => P,
                    _redefineProperty: () => P,
                    patchCallbacks: () => P,
                    nativeScheduleMicroTask: p
                };
            let I = {
                    parent: null,
                    zone: new n(null, null)
                },
                k = null,
                R = 0;

            function P() {}
            return r("Zone", "Zone"), n;
        }(), t.Zone;
    }();
    ! function(t) {
        vh(t),
            function(t) {
                t.__load_patch("toString", t => {
                    const e = Function.prototype.toString,
                        r = wf("OriginalDelegate"),
                        n = wf("Promise"),
                        i = wf("Error"),
                        o = function() {
                            if ("function" == typeof this) {
                                const o = this[r];
                                if (o) return "function" == typeof o ? e.call(o) : Object.prototype.toString.call(o);
                                if (this === Promise) {
                                    const r = t[n];
                                    if (r) return e.call(r);
                                }
                                if (this === Error) {
                                    const r = t[i];
                                    if (r) return e.call(r);
                                }
                            }
                            return e.call(this);
                        };
                    o[r] = e, Function.prototype.toString = o;
                    const s = Object.prototype.toString;
                    Object.prototype.toString = function() {
                        return "function" == typeof Promise && this instanceof Promise ? "[object Promise]" : s.call(this);
                    };
                });
            }(t),
            function(t) {
                t.__load_patch("util", (t, e, r) => {
                    const n = dh(t);
                    r.patchOnProperties = Wf, r.patchMethod = Zf, r.bindArguments = Rf, r.patchMacroTask = Vf;
                    const i = e.__symbol__("BLACK_LISTED_EVENTS"),
                        o = e.__symbol__("UNPATCHED_EVENTS");
                    t[o] && (t[i] = t[o]), t[i] && (e[i] = e[o] = t[i]), r.patchEventPrototype = ah, r.patchEventTarget = oh, r.isIEOrEdge = qf, r.ObjectDefineProperty = hf, r.ObjectGetOwnPropertyDescriptor = ff, r.ObjectCreate = df, r.ArraySlice = gf, r.patchClass = Ff, r.wrapWithCurrentZone = Sf, r.filterProperties = hh, r.attachOriginToPatched = Gf, r._redefineProperty = Object.defineProperty, r.patchCallbacks = _h, r.getGlobalObjects = () => ({
                        globalSources: eh,
                        zoneSymbolEventNames: th,
                        eventNames: n,
                        isBrowser: xf,
                        isMix: jf,
                        isNode: Nf,
                        TRUE_STR: mf,
                        FALSE_STR: bf,
                        ZONE_SYMBOL_PREFIX: Ef,
                        ADD_EVENT_LISTENER_STR: vf,
                        REMOVE_EVENT_LISTENER_STR: _f
                    });
                });
            }(t);
    }(yh),
    function(t) {
        t.__load_patch("legacy", e => {
            const r = e[t.__symbol__("legacyPatch")];
            r && r();
        }), t.__load_patch("timers", t => {
            const e = "set",
                r = "clear";
            lh(t, e, r, "Timeout"), lh(t, e, r, "Interval"), lh(t, e, r, "Immediate");
        }), t.__load_patch("requestAnimationFrame", t => {
            lh(t, "request", "cancel", "AnimationFrame"), lh(t, "mozRequest", "mozCancel", "AnimationFrame"), lh(t, "webkitRequest", "webkitCancel", "AnimationFrame");
        }), t.__load_patch("blocking", (t, e) => {
            const r = ["alert", "prompt", "confirm"];
            for (let n = 0; n < r.length; n++) {
                Zf(t, r[n], (r, n, i) => function(n, o) {
                    return e.current.run(r, t, o, i);
                });
            }
        }), t.__load_patch("EventTarget", (t, e, r) => {
            ! function(t, e) {
                e.patchEventPrototype(t, e);
            }(t, r), fh(t, r);
            const n = t.XMLHttpRequestEventTarget;
            n && n.prototype && r.patchEventTarget(t, r, [n.prototype]);
        }), t.__load_patch("MutationObserver", (t, e, r) => {
            Ff("MutationObserver"), Ff("WebKitMutationObserver");
        }), t.__load_patch("IntersectionObserver", (t, e, r) => {
            Ff("IntersectionObserver");
        }), t.__load_patch("FileReader", (t, e, r) => {
            Ff("FileReader");
        }), t.__load_patch("on_property", (t, e, r) => {
            gh(r, t);
        }), t.__load_patch("customElements", (t, e, r) => {
            ! function(t, e) {
                const {
                    isBrowser: r,
                    isMix: n
                } = e.getGlobalObjects();
                if (!r && !n || !t.customElements || !("customElements" in t)) return;
                e.patchCallbacks(e, t.customElements, "customElements", "define", ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback", "formAssociatedCallback", "formDisabledCallback", "formResetCallback", "formStateRestoreCallback"]);
            }(t, r);
        }), t.__load_patch("XHR", (t, e) => {
            ! function(t) {
                const u = t.XMLHttpRequest;
                if (!u) return;
                const c = u.prototype;
                let l = c[yf],
                    f = c[Tf];
                if (!l) {
                    const e = t.XMLHttpRequestEventTarget;
                    if (e) {
                        const t = e.prototype;
                        l = t[yf], f = t[Tf];
                    }
                }
                const h = "readystatechange",
                    p = "scheduled";

                function d(t) {
                    const n = t.data,
                        s = n.target;
                    s[o] = !1, s[a] = !1;
                    const u = s[i];
                    l || (l = s[yf], f = s[Tf]), u && f.call(s, h, u);
                    const c = s[i] = () => {
                        if (s.readyState === s.DONE)
                            if (!n.aborted && s[o] && t.state === p) {
                                const r = s[e.__symbol__("loadfalse")];
                                if (0 !== s.status && r && r.length > 0) {
                                    const i = t.invoke;
                                    t.invoke = function() {
                                        const r = s[e.__symbol__("loadfalse")];
                                        for (let e = 0; e < r.length; e++) r[e] === t && r.splice(e, 1);
                                        n.aborted || t.state !== p || i.call(t);
                                    }, r.push(t);
                                } else t.invoke();
                            } else n.aborted || !1 !== s[o] || (s[a] = !0);
                    };
                    l.call(s, h, c);
                    return s[r] || (s[r] = t), m.apply(s, n.args), s[o] = !0, t;
                }

                function g() {}

                function v(t) {
                    const e = t.data;
                    return e.aborted = !0, b.apply(e.target, e.args);
                }
                const _ = Zf(c, "open", () => function(t, e) {
                        return t[n] = 0 == e[2], t[s] = e[1], _.apply(t, e);
                    }),
                    y = wf("fetchTaskAborting"),
                    T = wf("fetchTaskScheduling"),
                    m = Zf(c, "send", () => function(t, r) {
                        if (!0 === e.current[T]) return m.apply(t, r);
                        if (t[n]) return m.apply(t, r); {
                            const e = {
                                    target: t,
                                    url: t[s],
                                    isPeriodic: !1,
                                    args: r,
                                    aborted: !1
                                },
                                n = Of("XMLHttpRequest.send", g, e, d, v);
                            t && !0 === t[a] && !e.aborted && n.state === p && n.invoke();
                        }
                    }),
                    b = Zf(c, "abort", () => function(t, n) {
                        const i = t[r];
                        if (i && "string" == typeof i.type) {
                            if (null == i.cancelFn || i.data && i.data.aborted) return;
                            i.zone.cancelTask(i);
                        } else if (!0 === e.current[y]) return b.apply(t, n);
                    });
            }(t);
            const r = wf("xhrTask"),
                n = wf("xhrSync"),
                i = wf("xhrListener"),
                o = wf("xhrScheduled"),
                s = wf("xhrURL"),
                a = wf("xhrErrorBeforeScheduled");
        }), t.__load_patch("geolocation", t => {
            t.navigator && t.navigator.geolocation && function(t, e) {
                const r = t.constructor.name;
                for (let n = 0; n < e.length; n++) {
                    const i = e[n],
                        o = t[i];
                    if (o) {
                        if (!Pf(ff(t, i))) continue;
                        t[i] = (t => {
                            const e = function() {
                                return t.apply(this, Rf(arguments, r + "." + i));
                            };
                            return Gf(e, t), e;
                        })(o);
                    }
                }
            }(t.navigator.geolocation, ["getCurrentPosition", "watchPosition"]);
        }), t.__load_patch("PromiseRejectionEvent", (t, e) => {
            function r(e) {
                return function(r) {
                    sh(t, e).forEach(n => {
                        const i = t.PromiseRejectionEvent;
                        if (i) {
                            const t = new i(e, {
                                promise: r.promise,
                                reason: r.rejection
                            });
                            n.invoke(t);
                        }
                    });
                };
            }
            t.PromiseRejectionEvent && (e[wf("unhandledPromiseRejectionHandler")] = r("unhandledrejection"), e[wf("rejectionHandledHandler")] = r("rejectionhandled"));
        }), t.__load_patch("queueMicrotask", (t, e, r) => {
            uh(t, r);
        });
    }(yh);
    var Th = function() {
            function t() {}
            return t.prototype.emit = function(t) {}, t;
        }(),
        mh = new(function() {
            function t() {}
            return t.prototype.getLogger = function(t, e, r) {
                return new Th();
            }, t;
        }())(),
        bh = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof global ? global : {},
        Eh = Symbol.for("io.opentelemetry.js.api.logs"),
        Sh = bh;
    var Oh = function() {
            function t() {}
            return t.getInstance = function() {
                return this._instance || (this._instance = new t()), this._instance;
            }, t.prototype.setGlobalLoggerProvider = function(t) {
                return Sh[Eh] ? this.getLoggerProvider() : (Sh[Eh] = (e = 1, r = t, n = mh, function(t) {
                    return t === e ? r : n;
                }), t);
                var e, r, n;
            }, t.prototype.getLoggerProvider = function() {
                var t, e;
                return null !== (e = null === (t = Sh[Eh]) || void 0 === t ? void 0 : t.call(Sh, 1)) && void 0 !== e ? e : mh;
            }, t.prototype.getLogger = function(t, e, r) {
                return this.getLoggerProvider().getLogger(t, e, r);
            }, t.prototype.disable = function() {
                delete Sh[Eh];
            }, t;
        }(),
        wh = Oh.getInstance();

    function Lh(t) {
        return "function" == typeof t;
    }
    var Ah = console.error.bind(console);

    function Ih(t, e, r) {
        var n = !!t[e] && t.propertyIsEnumerable(e);
        Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: n,
            writable: !0,
            value: r
        });
    }

    function kh(t) {
        t && t.logger && (Lh(t.logger) ? Ah = t.logger : Ah("new logger isn't a function, not replacing"));
    }

    function Rh(t, e, r) {
        if (t && t[e]) {
            if (!r) return Ah("no wrapper function"), void Ah(new Error().stack);
            if (Lh(t[e]) && Lh(r)) {
                var n = t[e],
                    i = r(n, e);
                return Ih(i, "__original", n), Ih(i, "__unwrap", function() {
                    t[e] === i && Ih(t, e, n);
                }), Ih(i, "__wrapped", !0), Ih(t, e, i), i;
            }
            Ah("original object and wrapper must be functions");
        } else Ah("no original function " + e + " to wrap");
    }

    function Ph(t, e) {
        return t && t[e] ? t[e].__unwrap ? t[e].__unwrap() : void Ah("no original to unwrap to -- has " + e + " already been unwrapped?") : (Ah("no function to unwrap."), void Ah(new Error().stack));
    }
    kh.wrap = Rh, kh.massWrap = function(t, e, r) {
        if (!t) return Ah("must provide one or more modules to patch"), void Ah(new Error().stack);
        Array.isArray(t) || (t = [t]), e && Array.isArray(e) ? t.forEach(function(t) {
            e.forEach(function(e) {
                Rh(t, e, r);
            });
        }) : Ah("must provide one or more functions to wrap on modules");
    }, kh.unwrap = Ph, kh.massUnwrap = function(t, e) {
        if (!t) return Ah("must provide one or more modules to patch"), void Ah(new Error().stack);
        Array.isArray(t) || (t = [t]), e && Array.isArray(e) ? t.forEach(function(t) {
            e.forEach(function(e) {
                Ph(t, e);
            });
        }) : Ah("must provide one or more functions to unwrap on modules");
    };
    var Ch = kh,
        Nh = void 0 && (void 0).__assign || function() {
            return Nh = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
            }, Nh.apply(this, arguments);
        },
        xh = function() {
            function t(t, e, r) {
                this.instrumentationName = t, this.instrumentationVersion = e, this._config = {}, this._wrap = Ch.wrap, this._unwrap = Ch.unwrap, this._massWrap = Ch.massWrap, this._massUnwrap = Ch.massUnwrap, this.setConfig(r), this._diag = Dt.createComponentLogger({
                    namespace: t
                }), this._tracer = Qt.getTracer(t, e), this._meter = Wt.getMeter(t, e), this._logger = wh.getLogger(t, e), this._updateMetricInstruments();
            }
            return Object.defineProperty(t.prototype, "meter", {
                get: function() {
                    return this._meter;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.setMeterProvider = function(t) {
                this._meter = t.getMeter(this.instrumentationName, this.instrumentationVersion), this._updateMetricInstruments();
            }, Object.defineProperty(t.prototype, "logger", {
                get: function() {
                    return this._logger;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.setLoggerProvider = function(t) {
                this._logger = t.getLogger(this.instrumentationName, this.instrumentationVersion);
            }, t.prototype.getModuleDefinitions = function() {
                var t,
                    e = null !== (t = this.init()) && void 0 !== t ? t : [];
                return Array.isArray(e) ? e : [e];
            }, t.prototype._updateMetricInstruments = function() {}, t.prototype.getConfig = function() {
                return this._config;
            }, t.prototype.setConfig = function(t) {
                this._config = Nh({
                    enabled: !0
                }, t);
            }, t.prototype.setTracerProvider = function(t) {
                this._tracer = t.getTracer(this.instrumentationName, this.instrumentationVersion);
            }, Object.defineProperty(t.prototype, "tracer", {
                get: function() {
                    return this._tracer;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype._runSpanCustomizationHook = function(t, e, r, n) {
                if (t) try {
                    t(r, n);
                } catch (t) {
                    this._diag.error("Error running span customization hook due to exception in handler", {
                        triggerName: e
                    }, t);
                }
            }, t;
        }(),
        jh = void 0 && (void 0).__extends || function() {
            var t = function(e, r) {
                return t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e;
                } || function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }, t(e, r);
            };
            return function(e, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                function n() {
                    this.constructor = e;
                }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
            };
        }(),
        Mh = function(t) {
            function e(e, r, n) {
                var i = t.call(this, e, r, n) || this;
                return i._config.enabled && i.enable(), i;
            }
            return jh(e, t), e;
        }(xh);
    void 0 && (void 0).__awaiter, void 0 && (void 0).__generator;
    var Dh,
        Bh = void 0 && (void 0).__values || function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    };
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        },
        Uh = void 0 && (void 0).__read || function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        },
        Wh = void 0 && (void 0).__spreadArray || function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
            return t.concat(n || Array.prototype.slice.call(e));
        },
        zh = function() {
            function t(t, e, r, n, i, o, s, a, u, c) {
                void 0 === s && (s = []), this.attributes = {}, this.links = [], this.events = [], this._droppedAttributesCount = 0, this._droppedEventsCount = 0, this._droppedLinksCount = 0, this.status = {
                    code: Pt.UNSET
                }, this.endTime = [0, 0], this._ended = !1, this._duration = [-1, -1], this.name = r, this._spanContext = n, this.parentSpanId = o, this.kind = i, this.links = s;
                var l = Date.now();
                this._performanceStartTime = Ne.now(), this._performanceOffset = l - (this._performanceStartTime + Ve()), this._startTimeProvided = null != a, this.startTime = this._getTime(null != a ? a : l), this.resource = t.resource, this.instrumentationLibrary = t.instrumentationLibrary, this._spanLimits = t.getSpanLimits(), this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0, null != c && this.setAttributes(c), this._spanProcessor = t.getActiveSpanProcessor(), this._spanProcessor.onStart(this, e);
            }
            return t.prototype.spanContext = function() {
                return this._spanContext;
            }, t.prototype.setAttribute = function(t, e) {
                return null == e || this._isSpanEnded() ? this : 0 === t.length ? (Dt.warn("Invalid attribute key: " + t), this) : ce(e) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? (this._droppedAttributesCount++, this) : (this.attributes[t] = this._truncateToSize(e), this) : (Dt.warn("Invalid attribute value set for key: " + t), this);
            }, t.prototype.setAttributes = function(t) {
                var e, r;
                try {
                    for (var n = Bh(Object.entries(t)), i = n.next(); !i.done; i = n.next()) {
                        var o = Uh(i.value, 2),
                            s = o[0],
                            a = o[1];
                        this.setAttribute(s, a);
                    }
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally {
                    try {
                        i && !i.done && (r = n.return) && r.call(n);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return this;
            }, t.prototype.addEvent = function(t, e, r) {
                if (this._isSpanEnded()) return this;
                if (0 === this._spanLimits.eventCountLimit) return Dt.warn("No events allowed."), this._droppedEventsCount++, this;
                this.events.length >= this._spanLimits.eventCountLimit && (0 === this._droppedEventsCount && Dt.debug("Dropping extra events."), this.events.shift(), this._droppedEventsCount++), qe(e) && (qe(r) || (r = e), e = void 0);
                var n = ae(e);
                return this.events.push({
                    name: t,
                    attributes: n,
                    time: this._getTime(r),
                    droppedAttributesCount: 0
                }), this;
            }, t.prototype.addLink = function(t) {
                return this.links.push(t), this;
            }, t.prototype.addLinks = function(t) {
                var e;
                return (e = this.links).push.apply(e, Wh([], Uh(t), !1)), this;
            }, t.prototype.setStatus = function(t) {
                return this._isSpanEnded() || (this.status = t), this;
            }, t.prototype.updateName = function(t) {
                return this._isSpanEnded() || (this.name = t), this;
            }, t.prototype.end = function(t) {
                this._isSpanEnded() ? Dt.error(this.name + " " + this._spanContext.traceId + "-" + this._spanContext.spanId + " - You can only call end() on a span once.") : (this._ended = !0, this.endTime = this._getTime(t), this._duration = function(t, e) {
                    var r = e[0] - t[0],
                        n = e[1] - t[1];
                    return n < 0 && (r -= 1, n += Fe), [r, n];
                }(this.startTime, this.endTime), this._duration[0] < 0 && (Dt.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0]), this._droppedEventsCount > 0 && Dt.warn("Dropped " + this._droppedEventsCount + " events because eventCountLimit reached"), this._spanProcessor.onEnd(this));
            }, t.prototype._getTime = function(t) {
                if ("number" == typeof t && t < Ne.now()) return Ge(t + this._performanceOffset);
                if ("number" == typeof t) return Ze(t);
                if (t instanceof Date) return Ze(t.getTime());
                if ($e(t)) return t;
                if (this._startTimeProvided) return Ze(Date.now());
                var e = Ne.now() - this._performanceStartTime;
                return Ke(this.startTime, Ze(e));
            }, t.prototype.isRecording = function() {
                return !1 === this._ended;
            }, t.prototype.recordException = function(t, e) {
                var r = {};
                "string" == typeof t ? r[je] = t : t && (t.code ? r[xe] = t.code.toString() : t.name && (r[xe] = t.name), t.message && (r[je] = t.message), t.stack && (r["exception.stacktrace"] = t.stack)), r[xe] || r[je] ? this.addEvent("exception", r, e) : Dt.warn("Failed to record an exception " + t);
            }, Object.defineProperty(t.prototype, "duration", {
                get: function() {
                    return this._duration;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ended", {
                get: function() {
                    return this._ended;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "droppedAttributesCount", {
                get: function() {
                    return this._droppedAttributesCount;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "droppedEventsCount", {
                get: function() {
                    return this._droppedEventsCount;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "droppedLinksCount", {
                get: function() {
                    return this._droppedLinksCount;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype._isSpanEnded = function() {
                return this._ended && Dt.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}"), this._ended;
            }, t.prototype._truncateToLimitUtil = function(t, e) {
                return t.length <= e ? t : t.substr(0, e);
            }, t.prototype._truncateToSize = function(t) {
                var e = this,
                    r = this._attributeValueLengthLimit;
                return r <= 0 ? (Dt.warn("Attribute value limit must be positive, got " + r), t) : "string" == typeof t ? this._truncateToLimitUtil(t, r) : Array.isArray(t) ? t.map(function(t) {
                    return "string" == typeof t ? e._truncateToLimitUtil(t, r) : t;
                }) : t;
            }, t;
        }();
    ! function(t) {
        t[t.NOT_RECORD = 0] = "NOT_RECORD", t[t.RECORD = 1] = "RECORD", t[t.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
    }(Dh || (Dh = {}));
    var Fh = function() {
            function t() {}
            return t.prototype.shouldSample = function() {
                return {
                    decision: Dh.NOT_RECORD
                };
            }, t.prototype.toString = function() {
                return "AlwaysOffSampler";
            }, t;
        }(),
        Zh = function() {
            function t() {}
            return t.prototype.shouldSample = function() {
                return {
                    decision: Dh.RECORD_AND_SAMPLED
                };
            }, t.prototype.toString = function() {
                return "AlwaysOnSampler";
            }, t;
        }(),
        Vh = function() {
            function t(t) {
                var e, r, n, i;
                this._root = t.root, this._root || (pe(new Error("ParentBasedSampler must have a root sampler configured")), this._root = new Zh()), this._remoteParentSampled = null !== (e = t.remoteParentSampled) && void 0 !== e ? e : new Zh(), this._remoteParentNotSampled = null !== (r = t.remoteParentNotSampled) && void 0 !== r ? r : new Fh(), this._localParentSampled = null !== (n = t.localParentSampled) && void 0 !== n ? n : new Zh(), this._localParentNotSampled = null !== (i = t.localParentNotSampled) && void 0 !== i ? i : new Fh();
            }
            return t.prototype.shouldSample = function(t, e, r, n, i, o) {
                var s = Qt.getSpanContext(t);
                return s && wt(s) ? s.isRemote ? s.traceFlags & N.SAMPLED ? this._remoteParentSampled.shouldSample(t, e, r, n, i, o) : this._remoteParentNotSampled.shouldSample(t, e, r, n, i, o) : s.traceFlags & N.SAMPLED ? this._localParentSampled.shouldSample(t, e, r, n, i, o) : this._localParentNotSampled.shouldSample(t, e, r, n, i, o) : this._root.shouldSample(t, e, r, n, i, o);
            }, t.prototype.toString = function() {
                return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}";
            }, t;
        }(),
        Gh = function() {
            function t(t) {
                void 0 === t && (t = 0), this._ratio = t, this._ratio = this._normalize(t), this._upperBound = Math.floor(4294967295 * this._ratio);
            }
            return t.prototype.shouldSample = function(t, e) {
                return {
                    decision: Ot(e) && this._accumulate(e) < this._upperBound ? Dh.RECORD_AND_SAMPLED : Dh.NOT_RECORD
                };
            }, t.prototype.toString = function() {
                return "TraceIdRatioBased{" + this._ratio + "}";
            }, t.prototype._normalize = function(t) {
                return "number" != typeof t || isNaN(t) ? 0 : t >= 1 ? 1 : t <= 0 ? 0 : t;
            }, t.prototype._accumulate = function(t) {
                for (var e = 0, r = 0; r < t.length / 8; r++) {
                    var n = 8 * r;
                    e = (e ^ parseInt(t.slice(n, n + 8), 16)) >>> 0;
                }
                return e;
            }, t;
        }(),
        Hh = Pe(),
        Xh = fe.AlwaysOn,
        $h = 1;

    function qh() {
        var t = Pe();
        return {
            sampler: Kh(Hh),
            forceFlushTimeoutMillis: 3e4,
            generalLimits: {
                attributeValueLengthLimit: t.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: t.OTEL_ATTRIBUTE_COUNT_LIMIT
            },
            spanLimits: {
                attributeValueLengthLimit: t.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: t.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
                linkCountLimit: t.OTEL_SPAN_LINK_COUNT_LIMIT,
                eventCountLimit: t.OTEL_SPAN_EVENT_COUNT_LIMIT,
                attributePerEventCountLimit: t.OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
                attributePerLinkCountLimit: t.OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
            }
        };
    }

    function Kh(t) {
        switch (void 0 === t && (t = Pe()), t.OTEL_TRACES_SAMPLER) {
            case fe.AlwaysOn:
                return new Zh();
            case fe.AlwaysOff:
                return new Fh();
            case fe.ParentBasedAlwaysOn:
                return new Vh({
                    root: new Zh()
                });
            case fe.ParentBasedAlwaysOff:
                return new Vh({
                    root: new Fh()
                });
            case fe.TraceIdRatio:
                return new Gh(Yh(t));
            case fe.ParentBasedTraceIdRatio:
                return new Vh({
                    root: new Gh(Yh(t))
                });
            default:
                return Dt.error('OTEL_TRACES_SAMPLER value "' + t.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + Xh + '".'), new Zh();
        }
    }

    function Yh(t) {
        if (void 0 === t.OTEL_TRACES_SAMPLER_ARG || "" === t.OTEL_TRACES_SAMPLER_ARG) return Dt.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to " + $h + "."), $h;
        var e = Number(t.OTEL_TRACES_SAMPLER_ARG);
        return isNaN(e) ? (Dt.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to " + $h + "."), $h) : e < 0 || e > 1 ? (Dt.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to " + $h + "."), $h) : e;
    }

    function Qh(t) {
        var e,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            f,
            h,
            p = Object.assign({}, t.spanLimits),
            d = ke(Re);
        return p.attributeCountLimit = null !== (s = null !== (o = null !== (i = null !== (r = null === (e = t.spanLimits) || void 0 === e ? void 0 : e.attributeCountLimit) && void 0 !== r ? r : null === (n = t.generalLimits) || void 0 === n ? void 0 : n.attributeCountLimit) && void 0 !== i ? i : d.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) && void 0 !== o ? o : d.OTEL_ATTRIBUTE_COUNT_LIMIT) && void 0 !== s ? s : Ee, p.attributeValueLengthLimit = null !== (h = null !== (f = null !== (l = null !== (u = null === (a = t.spanLimits) || void 0 === a ? void 0 : a.attributeValueLengthLimit) && void 0 !== u ? u : null === (c = t.generalLimits) || void 0 === c ? void 0 : c.attributeValueLengthLimit) && void 0 !== l ? l : d.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== f ? f : d.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== h ? h : be, Object.assign({}, t, {
            spanLimits: p
        });
    }
    var Jh = function() {
            function t(t, e) {
                this._exporter = t, this._isExporting = !1, this._finishedSpans = [], this._droppedSpansCount = 0;
                var r = Pe();
                this._maxExportBatchSize = "number" == typeof(null == e ? void 0 : e.maxExportBatchSize) ? e.maxExportBatchSize : r.OTEL_BSP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = "number" == typeof(null == e ? void 0 : e.maxQueueSize) ? e.maxQueueSize : r.OTEL_BSP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = "number" == typeof(null == e ? void 0 : e.scheduledDelayMillis) ? e.scheduledDelayMillis : r.OTEL_BSP_SCHEDULE_DELAY, this._exportTimeoutMillis = "number" == typeof(null == e ? void 0 : e.exportTimeoutMillis) ? e.exportTimeoutMillis : r.OTEL_BSP_EXPORT_TIMEOUT, this._shutdownOnce = new xr(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (Dt.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize);
            }
            return t.prototype.forceFlush = function() {
                return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll();
            }, t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {
                this._shutdownOnce.isCalled || t.spanContext().traceFlags & N.SAMPLED && this._addToBuffer(t);
            }, t.prototype.shutdown = function() {
                return this._shutdownOnce.call();
            }, t.prototype._shutdown = function() {
                var t = this;
                return Promise.resolve().then(function() {
                    return t.onShutdown();
                }).then(function() {
                    return t._flushAll();
                }).then(function() {
                    return t._exporter.shutdown();
                });
            }, t.prototype._addToBuffer = function(t) {
                if (this._finishedSpans.length >= this._maxQueueSize) return 0 === this._droppedSpansCount && Dt.debug("maxQueueSize reached, dropping spans"), void this._droppedSpansCount++;
                this._droppedSpansCount > 0 && (Dt.warn("Dropped " + this._droppedSpansCount + " spans because maxQueueSize reached"), this._droppedSpansCount = 0), this._finishedSpans.push(t), this._maybeStartTimer();
            }, t.prototype._flushAll = function() {
                var t = this;
                return new Promise(function(e, r) {
                    for (var n = [], i = 0, o = Math.ceil(t._finishedSpans.length / t._maxExportBatchSize); i < o; i++) n.push(t._flushOneBatch());
                    Promise.all(n).then(function() {
                        e();
                    }).catch(r);
                });
            }, t.prototype._flushOneBatch = function() {
                var t = this;
                return this._clearTimer(), 0 === this._finishedSpans.length ? Promise.resolve() : new Promise(function(e, r) {
                    var n = setTimeout(function() {
                        r(new Error("Timeout"));
                    }, t._exportTimeoutMillis);
                    Mt.with(function(t) {
                        return t.setValue(Jt, !0);
                    }(Mt.active()), function() {
                        var i;
                        t._finishedSpans.length <= t._maxExportBatchSize ? (i = t._finishedSpans, t._finishedSpans = []) : i = t._finishedSpans.splice(0, t._maxExportBatchSize);
                        for (var o = function() {
                                return t._exporter.export(i, function(t) {
                                    var i;
                                    clearTimeout(n), t.code === We.SUCCESS ? e() : r(null !== (i = t.error) && void 0 !== i ? i : new Error("BatchSpanProcessor: span export failed"));
                                });
                            }, s = null, a = 0, u = i.length; a < u; a++) {
                            var c = i[a];
                            c.resource.asyncAttributesPending && c.resource.waitForAsyncAttributes && (null != s || (s = []), s.push(c.resource.waitForAsyncAttributes()));
                        }
                        null === s ? o() : Promise.all(s).then(o, function(t) {
                            pe(t), r(t);
                        });
                    });
                });
            }, t.prototype._maybeStartTimer = function() {
                var t = this;
                if (!this._isExporting) {
                    var e = function() {
                        t._isExporting = !0, t._flushOneBatch().finally(function() {
                            t._isExporting = !1, t._finishedSpans.length > 0 && (t._clearTimer(), t._maybeStartTimer());
                        }).catch(function(e) {
                            t._isExporting = !1, pe(e);
                        });
                    };
                    if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
                    void 0 === this._timer && (this._timer = setTimeout(function() {
                        return e();
                    }, this._scheduledDelayMillis), this._timer);
                }
            }, t.prototype._clearTimer = function() {
                void 0 !== this._timer && (clearTimeout(this._timer), this._timer = void 0);
            }, t;
        }(),
        tp = void 0 && (void 0).__extends || function() {
            var t = function(e, r) {
                return t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e;
                } || function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }, t(e, r);
            };
            return function(e, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                function n() {
                    this.constructor = e;
                }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
            };
        }(),
        ep = function(t) {
            function e(e, r) {
                var n = t.call(this, e, r) || this;
                return n.onInit(r), n;
            }
            return tp(e, t), e.prototype.onInit = function(t) {
                var e = this;
                !0 !== (null == t ? void 0 : t.disableAutoFlushOnDocumentHide) && "undefined" != typeof document && (this._visibilityChangeListener = function() {
                    "hidden" === document.visibilityState && e.forceFlush();
                }, this._pageHideListener = function() {
                    e.forceFlush();
                }, document.addEventListener("visibilitychange", this._visibilityChangeListener), document.addEventListener("pagehide", this._pageHideListener));
            }, e.prototype.onShutdown = function() {
                "undefined" != typeof document && (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener), this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener));
            }, e;
        }(Jh),
        rp = function() {
            this.generateTraceId = ip(16), this.generateSpanId = ip(8);
        },
        np = Array(32);

    function ip(t) {
        return function() {
            for (var e = 0; e < 2 * t; e++) np[e] = Math.floor(16 * Math.random()) + 48, np[e] >= 58 && (np[e] += 39);
            return String.fromCharCode.apply(null, np.slice(0, 2 * t));
        };
    }
    var op = function() {
        function t(t, e, r) {
            this._tracerProvider = r;
            var n,
                i,
                o,
                s,
                a = (n = e, i = {
                    sampler: Kh()
                }, o = qh(), (s = Object.assign({}, o, i, n)).generalLimits = Object.assign({}, o.generalLimits, n.generalLimits || {}), s.spanLimits = Object.assign({}, o.spanLimits, n.spanLimits || {}), s);
            this._sampler = a.sampler, this._generalLimits = a.generalLimits, this._spanLimits = a.spanLimits, this._idGenerator = e.idGenerator || new rp(), this.resource = r.resource, this.instrumentationLibrary = t;
        }
        return t.prototype.startSpan = function(t, e, r) {
            var n, i, o;
            void 0 === e && (e = {}), void 0 === r && (r = Mt.active()), e.root && (r = Qt.deleteSpan(r));
            var s = Qt.getSpan(r);
            if (te(r)) return Dt.debug("Instrumentation suppressed, returning Noop Span"), Qt.wrapSpanContext(pt);
            var a,
                u,
                c,
                l = null == s ? void 0 : s.spanContext(),
                f = this._idGenerator.generateSpanId();
            l && Qt.isSpanContextValid(l) ? (a = l.traceId, u = l.traceState, c = l.spanId) : a = this._idGenerator.generateTraceId();
            var h = null !== (n = e.kind) && void 0 !== n ? n : Rt.INTERNAL,
                p = (null !== (i = e.links) && void 0 !== i ? i : []).map(function(t) {
                    return {
                        context: t.context,
                        attributes: ae(t.attributes)
                    };
                }),
                d = ae(e.attributes),
                g = this._sampler.shouldSample(r, a, t, h, d, p);
            u = null !== (o = g.traceState) && void 0 !== o ? o : u;
            var v = {
                traceId: a,
                spanId: f,
                traceFlags: g.decision === kt.RECORD_AND_SAMPLED ? N.SAMPLED : N.NONE,
                traceState: u
            };
            if (g.decision === kt.NOT_RECORD) return Dt.debug("Recording is off, propagating context in a non-recording span"), Qt.wrapSpanContext(v);
            var _ = ae(Object.assign(d, g.attributes));
            return new zh(this, r, t, v, h, c, p, e.startTime, void 0, _);
        }, t.prototype.startActiveSpan = function(t, e, r, n) {
            var i, o, s;
            if (!(arguments.length < 2)) {
                2 === arguments.length ? s = e : 3 === arguments.length ? (i = e, s = r) : (i = e, o = r, s = n);
                var a = null != o ? o : Mt.active(),
                    u = this.startSpan(t, i, a),
                    c = Qt.setSpan(a, u);
                return Mt.with(c, s, void 0, u);
            }
        }, t.prototype.getGeneralLimits = function() {
            return this._generalLimits;
        }, t.prototype.getSpanLimits = function() {
            return this._spanLimits;
        }, t.prototype.getActiveSpanProcessor = function() {
            return this._tracerProvider.getActiveSpanProcessor();
        }, t;
    }();
    var sp,
        ap = void 0 && (void 0).__assign || function() {
            return ap = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
            }, ap.apply(this, arguments);
        },
        up = void 0 && (void 0).__awaiter || function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, o) {
                function s(t) {
                    try {
                        u(n.next(t));
                    } catch (t) {
                        o(t);
                    }
                }

                function a(t) {
                    try {
                        u(n.throw(t));
                    } catch (t) {
                        o(t);
                    }
                }

                function u(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e);
                    })).then(s, a);
                }
                u((n = n.apply(t, e || [])).next());
            });
        },
        cp = void 0 && (void 0).__generator || function(t, e) {
            var r,
                n,
                i,
                o,
                s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: []
                };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                            switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, n = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        s = 0;
                                        continue;
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        s.label = o[1];
                                        break;
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        s.label = i[1], i = o;
                                        break;
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2], s.ops.push(o);
                                        break;
                                    }
                                    i[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                            }
                            o = e.call(t, s);
                        } catch (t) {
                            o = [6, t], n = 0;
                        } finally {
                            r = i = 0;
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        };
                    }([o, a]);
                };
            }
        },
        lp = void 0 && (void 0).__read || function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        },
        fp = function() {
            function t(t, e) {
                var r,
                    n = this;
                this._attributes = t, this.asyncAttributesPending = null != e, this._syncAttributes = null !== (r = this._attributes) && void 0 !== r ? r : {}, this._asyncAttributesPromise = null == e ? void 0 : e.then(function(t) {
                    return n._attributes = Object.assign({}, n._attributes, t), n.asyncAttributesPending = !1, t;
                }, function(t) {
                    return Dt.debug("a resource's async attributes promise rejected: %s", t), n.asyncAttributesPending = !1, {};
                });
            }
            return t.empty = function() {
                return t.EMPTY;
            }, t.default = function() {
                var e;
                return new t(((e = {})["service.name"] = "unknown_service", e[De] = Ue[De], e[Me] = Ue[Me], e[Be] = Ue[Be], e));
            }, Object.defineProperty(t.prototype, "attributes", {
                get: function() {
                    var t;
                    return this.asyncAttributesPending && Dt.error("Accessing resource attributes before async attributes settled"), null !== (t = this._attributes) && void 0 !== t ? t : {};
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.waitForAsyncAttributes = function() {
                return up(this, void 0, void 0, function() {
                    return cp(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return this.asyncAttributesPending ? [4, this._asyncAttributesPromise] : [3, 2];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return [2];
                        }
                    });
                });
            }, t.prototype.merge = function(e) {
                var r,
                    n = this;
                if (!e) return this;
                var i = ap(ap({}, this._syncAttributes), null !== (r = e._syncAttributes) && void 0 !== r ? r : e.attributes);
                if (!this._asyncAttributesPromise && !e._asyncAttributesPromise) return new t(i);
                var o = Promise.all([this._asyncAttributesPromise, e._asyncAttributesPromise]).then(function(t) {
                    var r,
                        i = lp(t, 2),
                        o = i[0],
                        s = i[1];
                    return ap(ap(ap(ap({}, n._syncAttributes), o), null !== (r = e._syncAttributes) && void 0 !== r ? r : e.attributes), s);
                });
                return new t(i, o);
            }, t.EMPTY = new t({}), t;
        }(),
        hp = void 0 && (void 0).__values || function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    };
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        },
        pp = function() {
            function t(t) {
                this._spanProcessors = t;
            }
            return t.prototype.forceFlush = function() {
                var t,
                    e,
                    r = [];
                try {
                    for (var n = hp(this._spanProcessors), i = n.next(); !i.done; i = n.next()) {
                        var o = i.value;
                        r.push(o.forceFlush());
                    }
                } catch (e) {
                    t = {
                        error: e
                    };
                } finally {
                    try {
                        i && !i.done && (e = n.return) && e.call(n);
                    } finally {
                        if (t) throw t.error;
                    }
                }
                return new Promise(function(t) {
                    Promise.all(r).then(function() {
                        t();
                    }).catch(function(e) {
                        pe(e || new Error("MultiSpanProcessor: forceFlush failed")), t();
                    });
                });
            }, t.prototype.onStart = function(t, e) {
                var r, n;
                try {
                    for (var i = hp(this._spanProcessors), o = i.next(); !o.done; o = i.next()) {
                        o.value.onStart(t, e);
                    }
                } catch (t) {
                    r = {
                        error: t
                    };
                } finally {
                    try {
                        o && !o.done && (n = i.return) && n.call(i);
                    } finally {
                        if (r) throw r.error;
                    }
                }
            }, t.prototype.onEnd = function(t) {
                var e, r;
                try {
                    for (var n = hp(this._spanProcessors), i = n.next(); !i.done; i = n.next()) {
                        i.value.onEnd(t);
                    }
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally {
                    try {
                        i && !i.done && (r = n.return) && r.call(n);
                    } finally {
                        if (e) throw e.error;
                    }
                }
            }, t.prototype.shutdown = function() {
                var t,
                    e,
                    r = [];
                try {
                    for (var n = hp(this._spanProcessors), i = n.next(); !i.done; i = n.next()) {
                        var o = i.value;
                        r.push(o.shutdown());
                    }
                } catch (e) {
                    t = {
                        error: e
                    };
                } finally {
                    try {
                        i && !i.done && (e = n.return) && e.call(n);
                    } finally {
                        if (t) throw t.error;
                    }
                }
                return new Promise(function(t, e) {
                    Promise.all(r).then(function() {
                        t();
                    }, e);
                });
            }, t;
        }(),
        dp = function() {
            function t() {}
            return t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {}, t.prototype.shutdown = function() {
                return Promise.resolve();
            }, t.prototype.forceFlush = function() {
                return Promise.resolve();
            }, t;
        }();
    ! function(t) {
        t[t.resolved = 0] = "resolved", t[t.timeout = 1] = "timeout", t[t.error = 2] = "error", t[t.unresolved = 3] = "unresolved";
    }(sp || (sp = {}));
    var gp,
        vp,
        _p,
        yp = function() {
            function t(t) {
                var e;
                void 0 === t && (t = {}), this._registeredSpanProcessors = [], this._tracers = new Map();
                var r = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    for (var r = t.shift(), n = new WeakMap(); t.length > 0;) r = Sr(r, t.shift(), 0, n);
                    return r;
                }({}, qh(), Qh(t));
                this.resource = null !== (e = r.resource) && void 0 !== e ? e : fp.empty(), this.resource = fp.default().merge(this.resource), this._config = Object.assign({}, r, {
                    resource: this.resource
                });
                var n = this._buildExporterFromEnv();
                if (void 0 !== n) {
                    var i = new ep(n);
                    this.activeSpanProcessor = i;
                } else this.activeSpanProcessor = new dp();
            }
            return t.prototype.getTracer = function(t, e, r) {
                var n = t + "@" + (e || "") + ":" + ((null == r ? void 0 : r.schemaUrl) || "");
                return this._tracers.has(n) || this._tracers.set(n, new op({
                    name: t,
                    version: e,
                    schemaUrl: null == r ? void 0 : r.schemaUrl
                }, this._config, this)), this._tracers.get(n);
            }, t.prototype.addSpanProcessor = function(t) {
                0 === this._registeredSpanProcessors.length && this.activeSpanProcessor.shutdown().catch(function(t) {
                    return Dt.error("Error while trying to shutdown current span processor", t);
                }), this._registeredSpanProcessors.push(t), this.activeSpanProcessor = new pp(this._registeredSpanProcessors);
            }, t.prototype.getActiveSpanProcessor = function() {
                return this.activeSpanProcessor;
            }, t.prototype.register = function(t) {
                void 0 === t && (t = {}), Qt.setGlobalTracerProvider(this), void 0 === t.propagator && (t.propagator = this._buildPropagatorFromEnv()), t.contextManager && Mt.setGlobalContextManager(t.contextManager), t.propagator && Kt.setGlobalPropagator(t.propagator);
            }, t.prototype.forceFlush = function() {
                var t = this._config.forceFlushTimeoutMillis,
                    e = this._registeredSpanProcessors.map(function(e) {
                        return new Promise(function(r) {
                            var n,
                                i = setTimeout(function() {
                                    r(new Error("Span processor did not completed within timeout period of " + t + " ms")), n = sp.timeout;
                                }, t);
                            e.forceFlush().then(function() {
                                clearTimeout(i), n !== sp.timeout && (n = sp.resolved, r(n));
                            }).catch(function(t) {
                                clearTimeout(i), n = sp.error, r(t);
                            });
                        });
                    });
                return new Promise(function(t, r) {
                    Promise.all(e).then(function(e) {
                        var n = e.filter(function(t) {
                            return t !== sp.resolved;
                        });
                        n.length > 0 ? r(n) : t();
                    }).catch(function(t) {
                        return r([t]);
                    });
                });
            }, t.prototype.shutdown = function() {
                return this.activeSpanProcessor.shutdown();
            }, t.prototype._getPropagator = function(t) {
                var e;
                return null === (e = this.constructor._registeredPropagators.get(t)) || void 0 === e ? void 0 : e();
            }, t.prototype._getSpanExporter = function(t) {
                var e;
                return null === (e = this.constructor._registeredExporters.get(t)) || void 0 === e ? void 0 : e();
            }, t.prototype._buildPropagatorFromEnv = function() {
                var t = this,
                    e = Array.from(new Set(Pe().OTEL_PROPAGATORS)),
                    r = e.map(function(e) {
                        var r = t._getPropagator(e);
                        return r || Dt.warn('Propagator "' + e + '" requested through environment variable is unavailable.'), r;
                    }).reduce(function(t, e) {
                        return e && t.push(e), t;
                    }, []);
                return 0 === r.length ? void 0 : 1 === e.length ? r[0] : new Qe({
                    propagators: r
                });
            }, t.prototype._buildExporterFromEnv = function() {
                var t = Pe().OTEL_TRACES_EXPORTER;
                if ("none" !== t && "" !== t) {
                    var e = this._getSpanExporter(t);
                    return e || Dt.error('Exporter "' + t + '" requested through environment variable is unavailable.'), e;
                }
            }, t._registeredPropagators = new Map([
                ["tracecontext", function() {
                    return new cr();
                }],
                ["baggage", function() {
                    return new ie();
                }]
            ]), t._registeredExporters = new Map(), t;
        }(),
        Tp = void 0 && (void 0).__read || function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        },
        mp = void 0 && (void 0).__spreadArray || function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
            return t.concat(n || Array.prototype.slice.call(e));
        },
        bp = function() {
            function t() {
                this._enabled = !1, this._currentContext = j;
            }
            return t.prototype._bindFunction = function(t, e) {
                void 0 === t && (t = j);
                var r = this,
                    n = function() {
                        for (var n = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
                        return r.with(t, function() {
                            return e.apply(n, i);
                        });
                    };
                return Object.defineProperty(n, "length", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !1,
                    value: e.length
                }), n;
            }, t.prototype.active = function() {
                return this._currentContext;
            }, t.prototype.bind = function(t, e) {
                return void 0 === t && (t = this.active()), "function" == typeof e ? this._bindFunction(t, e) : e;
            }, t.prototype.disable = function() {
                return this._currentContext = j, this._enabled = !1, this;
            }, t.prototype.enable = function() {
                return this._enabled || (this._enabled = !0, this._currentContext = j), this;
            }, t.prototype.with = function(t, e, r) {
                for (var n = [], i = 3; i < arguments.length; i++) n[i - 3] = arguments[i];
                var o = this._currentContext;
                this._currentContext = t || j;
                try {
                    return e.call.apply(e, mp([r], Tp(n), !1));
                } finally {
                    this._currentContext = o;
                }
            }, t;
        }(),
        Ep = void 0 && (void 0).__extends || function() {
            var t = function(e, r) {
                return t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e;
                } || function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }, t(e, r);
            };
            return function(e, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                function n() {
                    this.constructor = e;
                }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
            };
        }(),
        Sp = function(t) {
            function e(e) {
                void 0 === e && (e = {});
                var r = t.call(this, e) || this;
                if (e.contextManager) throw "contextManager should be defined in register method not in constructor";
                if (e.propagator) throw "propagator should be defined in register method not in constructor";
                return r;
            }
            return Ep(e, t), e.prototype.register = function(e) {
                void 0 === e && (e = {}), void 0 === e.contextManager && (e.contextManager = new bp()), e.contextManager && e.contextManager.enable(), t.prototype.register.call(this, e);
            }, e;
        }(yp);

    function Op(t, e) {
        return e in t;
    }

    function wp(t, e, r, n) {
        var i = void 0,
            o = void 0;
        Op(r, e) && "number" == typeof r[e] && (i = r[e]);
        var s = gp.FETCH_START;
        if (Op(r, s) && "number" == typeof r[s] && (o = r[s]), void 0 !== i && void 0 !== o && i >= o) return t.addEvent(e, i), t;
    }

    function Lp(t, e) {
        wp(t, gp.FETCH_START, e), wp(t, gp.DOMAIN_LOOKUP_START, e), wp(t, gp.DOMAIN_LOOKUP_END, e), wp(t, gp.CONNECT_START, e), Op(e, "name") && e.name.startsWith("https:") && wp(t, gp.SECURE_CONNECTION_START, e), wp(t, gp.CONNECT_END, e), wp(t, gp.REQUEST_START, e), wp(t, gp.RESPONSE_START, e), wp(t, gp.RESPONSE_END, e);
        var r = e[gp.ENCODED_BODY_SIZE];
        void 0 !== r && t.setAttribute("http.response_content_length", r);
        var n = e[gp.DECODED_BODY_SIZE];
        void 0 !== n && r !== n && t.setAttribute("http.response_content_length_uncompressed", n);
    }

    function Ap() {
        return "undefined" != typeof location ? location.origin : void 0;
    }

    function Ip(t, e, r, n, i, o) {
        void 0 === i && (i = new WeakSet());
        var s = kp(t),
            a = function(t, e, r, n, i, o) {
                var s = Xe(e),
                    a = Xe(r),
                    u = n.filter(function(e) {
                        var r = Xe(He(e[gp.FETCH_START])),
                            n = Xe(He(e[gp.RESPONSE_END]));
                        return e.initiatorType.toLowerCase() === o && e.name === t && r >= s && n <= a;
                    });
                u.length > 0 && (u = u.filter(function(t) {
                    return !i.has(t);
                }));
                return u;
            }(t = s.toString(), e, r, n, i, o);
        if (0 === a.length) return {
            mainRequest: void 0
        };
        if (1 === a.length) return {
            mainRequest: a[0]
        };
        var u = function(t) {
            return t.slice().sort(function(t, e) {
                var r = t[gp.FETCH_START],
                    n = e[gp.FETCH_START];
                return r > n ? 1 : r < n ? -1 : 0;
            });
        }(a);
        if (s.origin !== Ap() && u.length > 1) {
            var c = u[0],
                l = function(t, e, r) {
                    for (var n, i = Xe(r), o = Xe(He(e)), s = t[1], a = t.length, u = 1; u < a; u++) {
                        var c = t[u],
                            l = Xe(He(c[gp.FETCH_START])),
                            f = i - Xe(He(c[gp.RESPONSE_END]));
                        l >= o && (!n || f < n) && (n = f, s = c);
                    }
                    return s;
                }(u, c[gp.RESPONSE_END], r),
                f = c[gp.RESPONSE_END];
            return l[gp.FETCH_START] < f && (l = c, c = void 0), {
                corsPreFlightRequest: c,
                mainRequest: l
            };
        }
        return {
            mainRequest: a[0]
        };
    }

    function kp(t) {
        if ("function" == typeof URL) return new URL(t, "undefined" != typeof document ? document.baseURI : "undefined" != typeof location ? location.href : void 0);
        var e = (vp || (vp = document.createElement("a")), vp);
        return e.href = t, e;
    }! function(t) {
        t.CONNECT_END = "connectEnd", t.CONNECT_START = "connectStart", t.DECODED_BODY_SIZE = "decodedBodySize", t.DOM_COMPLETE = "domComplete", t.DOM_CONTENT_LOADED_EVENT_END = "domContentLoadedEventEnd", t.DOM_CONTENT_LOADED_EVENT_START = "domContentLoadedEventStart", t.DOM_INTERACTIVE = "domInteractive", t.DOMAIN_LOOKUP_END = "domainLookupEnd", t.DOMAIN_LOOKUP_START = "domainLookupStart", t.ENCODED_BODY_SIZE = "encodedBodySize", t.FETCH_START = "fetchStart", t.LOAD_EVENT_END = "loadEventEnd", t.LOAD_EVENT_START = "loadEventStart", t.NAVIGATION_START = "navigationStart", t.REDIRECT_END = "redirectEnd", t.REDIRECT_START = "redirectStart", t.REQUEST_START = "requestStart", t.RESPONSE_END = "responseEnd", t.RESPONSE_START = "responseStart", t.SECURE_CONNECTION_START = "secureConnectionStart", t.UNLOAD_EVENT_END = "unloadEventEnd", t.UNLOAD_EVENT_START = "unloadEventStart";
    }(gp || (gp = {})),
    function(t) {
        t.COMPONENT = "component", t.HTTP_ERROR_NAME = "http.error_name", t.HTTP_STATUS_TEXT = "http.status_text";
    }(_p || (_p = {}));
    var Rp,
        Pp,
        Cp,
        Np,
        xp,
        jp,
        Mp,
        Dp = "0.53.0",
        Bp = void 0 && (void 0).__extends || function() {
            var t = function(e, r) {
                return t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e;
                } || function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }, t(e, r);
            };
            return function(e, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                function n() {
                    this.constructor = e;
                }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
            };
        }(),
        Up = "object" == typeof process && "node" === (null === (Rp = process.release) || void 0 === Rp ? void 0 : Rp.name),
        Wp = function(t) {
            function e(e) {
                void 0 === e && (e = {});
                var r = t.call(this, "@opentelemetry/instrumentation-fetch", Dp, e) || this;
                return r.component = "fetch", r.version = Dp, r.moduleName = r.component, r._usedResources = new WeakSet(), r._tasksCount = 0, r;
            }
            return Bp(e, t), e.prototype.init = function() {}, e.prototype._addChildSpan = function(t, e) {
                var r = this.tracer.startSpan("CORS Preflight", {
                    startTime: e[gp.FETCH_START]
                }, Qt.setSpan(Mt.active(), t));
                this.getConfig().ignoreNetworkEvents || Lp(r, e), r.end(e[gp.RESPONSE_END]);
            }, e.prototype._addFinalSpanAttributes = function(t, e) {
                var r = kp(e.url);
                t.setAttribute("http.status_code", e.status), null != e.statusText && t.setAttribute(_p.HTTP_STATUS_TEXT, e.statusText), t.setAttribute("http.host", r.host), t.setAttribute("http.scheme", r.protocol.replace(":", "")), "undefined" != typeof navigator && t.setAttribute("http.user_agent", navigator.userAgent);
            }, e.prototype._addHeaders = function(t, e) {
                if (! function(t, e) {
                        var r = e || [];
                        return ("string" == typeof r || r instanceof RegExp) && (r = [r]), kp(t).origin === Ap() || r.some(function(e) {
                            return Rr(t, e);
                        });
                    }(e, this.getConfig().propagateTraceHeaderCorsUrls)) {
                    var r = {};
                    return Kt.inject(Mt.active(), r), void(Object.keys(r).length > 0 && this._diag.debug("headers inject skipped due to CORS policy"));
                }
                if (t instanceof Request) Kt.inject(Mt.active(), t.headers, {
                    set: function(t, e, r) {
                        return t.set(e, "string" == typeof r ? r : String(r));
                    }
                });
                else if (t.headers instanceof Headers) Kt.inject(Mt.active(), t.headers, {
                    set: function(t, e, r) {
                        return t.set(e, "string" == typeof r ? r : String(r));
                    }
                });
                else if (t.headers instanceof Map) Kt.inject(Mt.active(), t.headers, {
                    set: function(t, e, r) {
                        return t.set(e, "string" == typeof r ? r : String(r));
                    }
                });
                else {
                    r = {};
                    Kt.inject(Mt.active(), r), t.headers = Object.assign({}, r, t.headers || {});
                }
            }, e.prototype._clearResources = function() {
                0 === this._tasksCount && this.getConfig().clearTimingResources && (performance.clearResourceTimings(), this._usedResources = new WeakSet());
            }, e.prototype._createSpan = function(t, e) {
                var r;
                if (void 0 === e && (e = {}), ! function(t, e) {
                        var r, n;
                        if (!e) return !1;
                        try {
                            for (var i = kr(e), o = i.next(); !o.done; o = i.next())
                                if (Rr(t, o.value)) return !0;
                        } catch (t) {
                            r = {
                                error: t
                            };
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i);
                            } finally {
                                if (r) throw r.error;
                            }
                        }
                        return !1;
                    }(t, this.getConfig().ignoreUrls)) {
                    var n = (e.method || "GET").toUpperCase(),
                        i = "HTTP " + n;
                    return this.tracer.startSpan(i, {
                        kind: Rt.CLIENT,
                        attributes: (r = {}, r[_p.COMPONENT] = this.moduleName, r["http.method"] = n, r["http.url"] = t, r)
                    });
                }
                this._diag.debug("ignoring span as url matches ignored url");
            }, e.prototype._findResourceAndAddNetworkEvents = function(t, e, r) {
                var n = e.entries;
                if (!n.length) {
                    if (!performance.getEntriesByType) return;
                    n = performance.getEntriesByType("resource");
                }
                var i = Ip(e.spanUrl, e.startTime, r, n, this._usedResources, "fetch");
                if (i.mainRequest) {
                    var o = i.mainRequest;
                    this._markResourceAsUsed(o);
                    var s = i.corsPreFlightRequest;
                    s && (this._addChildSpan(t, s), this._markResourceAsUsed(s)), this.getConfig().ignoreNetworkEvents || Lp(t, o);
                }
            }, e.prototype._markResourceAsUsed = function(t) {
                this._usedResources.add(t);
            }, e.prototype._endSpan = function(t, e, r) {
                var n = this,
                    i = Ze(Date.now()),
                    o = Ge();
                this._addFinalSpanAttributes(t, r), setTimeout(function() {
                    var r;
                    null === (r = e.observer) || void 0 === r || r.disconnect(), n._findResourceAndAddNetworkEvents(t, e, o), n._tasksCount--, n._clearResources(), t.end(i);
                }, 300);
            }, e.prototype._patchConstructor = function() {
                var t = this;
                return function(e) {
                    var r = t;
                    return function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var i = this,
                            o = kp(t[0] instanceof Request ? t[0].url : String(t[0])).href,
                            s = t[0] instanceof Request ? t[0] : t[1] || {},
                            a = r._createSpan(o, s);
                        if (!a) return e.apply(this, t);
                        var u = r._prepareSpanData(o);

                        function c(t, e) {
                            r._applyAttributesAfterFetch(t, s, e), r._endSpan(t, u, {
                                status: e.status || 0,
                                statusText: e.message,
                                url: o
                            });
                        }

                        function l(t, e) {
                            r._applyAttributesAfterFetch(t, s, e), e.status >= 200 && e.status < 400 ? r._endSpan(t, u, e) : r._endSpan(t, u, {
                                status: e.status,
                                statusText: e.statusText,
                                url: o
                            });
                        }

                        function f(t, e, r) {
                            try {
                                var n = r.clone(),
                                    i = r.clone(),
                                    o = n.body;
                                if (o) {
                                    var s = o.getReader(),
                                        a = function() {
                                            s.read().then(function(e) {
                                                e.done ? l(t, i) : a();
                                            }, function(e) {
                                                c(t, e);
                                            });
                                        };
                                    a();
                                } else l(t, r);
                            } finally {
                                e(r);
                            }
                        }

                        function h(t, e, r) {
                            try {
                                c(t, r);
                            } finally {
                                e(r);
                            }
                        }
                        return new Promise(function(t, n) {
                            return Mt.with(Qt.setSpan(Mt.active(), a), function() {
                                return r._addHeaders(s, o), r._tasksCount++, e.apply(i, s instanceof Request ? [s] : [o, s]).then(f.bind(i, a, t), h.bind(i, a, n));
                            });
                        });
                    };
                };
            }, e.prototype._applyAttributesAfterFetch = function(t, e, r) {
                var n = this,
                    i = this.getConfig().applyCustomAttributesOnSpan;
                i && function(t, e, r) {
                    var n, i;
                    try {
                        i = t();
                    } catch (t) {
                        n = t;
                    } finally {
                        if (e(n, i), n && !r) throw n;
                        return i;
                    }
                }(function() {
                    return i(t, e, r);
                }, function(t) {
                    t && n._diag.error("applyCustomAttributesOnSpan", t);
                }, !0);
            }, e.prototype._prepareSpanData = function(t) {
                var e = Ge(),
                    r = [];
                if ("function" != typeof PerformanceObserver) return {
                    entries: r,
                    startTime: e,
                    spanUrl: t
                };
                var n = new PerformanceObserver(function(e) {
                    e.getEntries().forEach(function(e) {
                        "fetch" === e.initiatorType && e.name === t && r.push(e);
                    });
                });
                return n.observe({
                    entryTypes: ["resource"]
                }), {
                    entries: r,
                    observer: n,
                    startTime: e,
                    spanUrl: t
                };
            }, e.prototype.enable = function() {
                Up ? this._diag.warn("this instrumentation is intended for web usage only, it does not instrument Node.js's fetch()") : (function(t) {
                    return "function" == typeof t && "function" == typeof t.__original && "function" == typeof t.__unwrap && !0 === t.__wrapped;
                }(fetch) && (this._unwrap(Re, "fetch"), this._diag.debug("removing previous patch for constructor")), this._wrap(Re, "fetch", this._patchConstructor()));
            }, e.prototype.disable = function() {
                Up || (this._unwrap(Re, "fetch"), this._usedResources = new WeakSet());
            }, e;
        }(Mh);

    function zp(t) {
        const e = t.getSpanInformation(),
            r = t.getContext();
        return {
            traceId: r.traceId,
            spanId: r.spanId,
            parentSpanId: e.parentSpanId,
            name: e.name,
            startTimeUnixNano: e.startTime,
            endTimeUnixNano: e.endTime,
            attributes: r.attributes,
            kind: e.kind,
            status: e.status
        };
    }
    class Fp {
        constructor(_ref21) {
            let {
                transportManager: t,
                promiseMap: e = new Map(),
                tracer: r
            } = _ref21;
            Pp.add(this), Cp.set(this, void 0), Np.set(this, void 0), xp.set(this, 0), jp.set(this, void 0), s(this, Cp, t, "f"), s(this, Np, e, "f"), s(this, jp, r, "f");
        }
        shutdown() {
            return i(this, void 0, void 0, function*() {
                yield Promise.all(o(this, Np, "f").values());
            });
        }
        forceFlush() {
            return i(this, void 0, void 0, function*() {
                yield Promise.all(o(this, Np, "f").values());
            });
        }
        onStart() {}
        onEnd(t) {
            const e = o(this, jp, "f").fromOTSpan(t);
            o(this, Pp, "m", Mp).call(this, e);
        }
    }
    Cp = new WeakMap(), Np = new WeakMap(), xp = new WeakMap(), jp = new WeakMap(), Pp = new WeakSet(), Mp = function(t) {
        var e, r;
        const n = (s(this, xp, (r = o(this, xp, "f"), e = r++, r), "f"), e),
            a = zp(t);
        o(this, Np, "f").set(n, (() => i(this, void 0, void 0, function*() {
            yield o(this, Cp, "f").processSpan(a), o(this, Np, "f").delete(n);
        }))());
    };
    const Zp = _exports.KnownAttributes = {
            Tag: "outsystems.log.message.tag",
            Visibility: "outsystems.otel.access.visibility",
            AccessType: "outsystems.otel.access.type",
            ChildrenNames: $n.ChildrenNames,
            IsNonAggregable: $n.IsNonAggregable
        },
        Vp = [Zp.IsNonAggregable, Zp.ChildrenNames];
    var Gp, Hp, Xp, $p, qp, Kp, Yp, Qp, Jp, td, ed, rd, nd, id, od, sd, ad, ud;
    class cd {
        constructor(_ref22) {
            let {
                visibility: t,
                attributes: e = {},
                span: r,
                activateSpan: n,
                explicitChildren: i = []
            } = _ref22;
            Gp.set(this, void 0), Hp.set(this, void 0), Xp.set(this, void 0), $p.set(this, void 0), s(this, Gp, r, "f"), s(this, Hp, n, "f"), s(this, $p, i, "f"), void 0 !== t && o(this, Gp, "f").setAttribute(Zp.Visibility, Yl[t]), o(this, Gp, "f").setAttributes(e), this.ended = new Promise(t => {
                s(this, Xp, t, "f");
            });
        }
        setAttribute(t, e) {
            o(this, Gp, "f").setAttribute(t, e);
        }
        setStatus(t, e) {
            o(this, Gp, "f").setStatus({
                code: t,
                message: e
            });
        }
        raiseError(t, e) {
            o(this, Gp, "f").recordException(t), this.setStatus(2, e);
        }
        getContext() {
            const t = o(this, Gp, "f").spanContext();
            return {
                spanId: t.spanId,
                traceId: t.traceId,
                attributes: o(this, Gp, "f").attributes,
                sampled: Boolean(1 & t.traceFlags)
            };
        }
        addEvent(t, e) {
            o(this, Gp, "f").addEvent(t, e);
        }
        end() {
            return i(this, void 0, void 0, function*() {
                var t;
                yield Promise.all(o(this, $p, "f").map(t => t.ended)), o(this, Gp, "f").end(), null === (t = o(this, Xp, "f")) || void 0 === t || t.call(this);
            });
        }
        fail() {
            o(this, Gp, "f").setStatus({
                code: Pt.ERROR
            });
        }
        getSpanInformation() {
            return {
                name: o(this, Gp, "f").name,
                kind: o(this, Gp, "f").kind,
                status: o(this, Gp, "f").status.code,
                parentSpanId: o(this, Gp, "f").parentSpanId,
                startTime: jr.toNanoSeconds(new jr(o(this, Gp, "f").startTime)),
                endTime: jr.toNanoSeconds(new jr(o(this, Gp, "f").endTime)),
                childrenNames: o(this, Gp, "f").attributes[$n.ChildrenNames]
            };
        }
        activate() {
            return o(this, Hp, "f").call(this);
        }
        addExplicitChild(t) {
            o(this, $p, "f").push(t);
        }
    }
    Gp = new WeakMap(), Hp = new WeakMap(), Xp = new WeakMap(), $p = new WeakMap();
    class ld {
        constructor(_ref23) {
            let {
                transports: t,
                baseAttributes: e = {},
                staticAttributes: r = [],
                databaseNameSuffix: n,
                transportManager: i = new Ni({
                    traceTransports: t,
                    databaseNameSuffix: n
                }),
                tracerProvider: a = new Sp(),
                contextManager: u = new uf(),
                tracer: c = a.getTracer("@outsystems/logger-js", "3.1.0"),
                exporter: l,
                enabled: f = !0,
                getActiveSpan: h = () => Qt.getActiveSpan(),
                setSpan: p = (t, e) => Qt.setSpan(t, e)
            } = _ref23;
            qp.add(this), Kp.set(this, void 0), Yp.set(this, void 0), Qp.set(this, void 0), Jp.set(this, void 0), td.set(this, void 0), ed.set(this, void 0), rd.set(this, void 0), nd.set(this, void 0), id.set(this, void 0), s(this, Kp, i, "f"), s(this, Jp, c, "f"), s(this, Qp, f, "f"), s(this, ed, h, "f"), s(this, Yp, a, "f"), s(this, rd, p, "f"), s(this, td, u, "f"), s(this, nd, e, "f"), s(this, id, r, "f");
            const d = null != l ? l : new Fp({
                transportManager: i,
                tracer: this
            });
            o(this, Yp, "f").register({
                contextManager: u
            }), o(this, Yp, "f").addSpanProcessor(d);
        }
        addTransport(t) {
            o(this, Kp, "f").addTraceTransport(t);
        }
        removeTransport(t) {
            o(this, Kp, "f").removeTraceTransport(t);
        }
        startSpan(t, e, r, n) {
            if (o(this, Qp, "f")) {
                ! function(t, e) {
                    var r, n;
                    if (e) {
                        const i = null !== (n = null === (r = e.getSpanInformation()) || void 0 === r ? void 0 : r.childrenNames) && void 0 !== n ? n : [];
                        i.push(t), e.setAttribute($n.ChildrenNames, i);
                    }
                }(t, null != r ? r : o(this, ed, "f").call(this) ? this.fromOTSpan(o(this, ed, "f").call(this)) : void 0);
                const i = r ? o(this, Jp, "f").startSpan(t, {
                        attributes: {},
                        kind: n
                    }, r.activate()) : o(this, Jp, "f").startSpan(t, {
                        kind: n
                    }),
                    s = this.fromOTSpan(i, e);
                return null == r || r.addExplicitChild(s), s;
            }
        }
        startActiveSpan(t, e, r, n, i) {
            if (o(this, Qp, "f")) {
                const s = t => {
                    const i = this.fromOTSpan(t, r);
                    return null == n || n.addExplicitChild(i), e(i);
                };
                return n ? o(this, Jp, "f").startActiveSpan(t, {
                    attributes: {},
                    kind: i
                }, n.activate(), s) : o(this, Jp, "f").startActiveSpan(t, {
                    kind: i
                }, s);
            }
            return e(void 0);
        }
        getActiveSpan() {
            const t = o(this, ed, "f").call(this);
            return t ? this.fromOTSpan(t) : void 0;
        }
        setStatus(t) {
            s(this, Qp, t, "f");
        }
        addBaseSpanAttributes(t) {
            s(this, nd, Object.assign(Object.assign({}, o(this, nd, "f")), t), "f");
        }
        enableFetchInstrumentation() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Wp();
            t.setTracerProvider(o(this, Yp, "f"));
        }
        span(t) {
            return i(this, void 0, void 0, function*() {
                yield o(this, Kp, "f").processSpan(t);
            });
        }
        flush() {
            return i(this, void 0, void 0, function*() {
                o(this, Kp, "f").flushSpans();
            });
        }
        setSchedulerTimerInterval(t) {
            o(this, Kp, "f").setSchedulerTimerInterval(t);
        }
        fromOTSpan(t, e) {
            const r = o(this, qp, "m", od).call(this, t);
            return new cd({
                span: t,
                attributes: Kl(r),
                activateSpan: () => o(this, rd, "f").call(this, o(this, td, "f").active(), t),
                visibility: e
            });
        }
    }
    _exports.Tracer = ld;
    Kp = new WeakMap(), Yp = new WeakMap(), Qp = new WeakMap(), Jp = new WeakMap(), td = new WeakMap(), ed = new WeakMap(), rd = new WeakMap(), nd = new WeakMap(), id = new WeakMap(), qp = new WeakSet(), od = function(t) {
        const e = Object.assign({}, o(this, nd, "f"));
        return void 0 === t.parentSpanId || Object.keys(e).forEach(t => {
            o(this, id, "f").includes(t) && delete e[t];
        }), e;
    };
    class fd {
        constructor(_ref24) {
            let {
                transportId: t,
                logTypeBaseline: e = hn.Debug,
                formatter: r,
                transportConsole: n = console,
                shouldWriteLogsOnConsoles: i = () => !1
            } = _ref24;
            sd.add(this), ad.set(this, void 0), this.formatConsoleLog = t => {
                var e, r, n, i;
                const o = t.type === hn.Error ? null !== (e = t.errorCode) && void 0 !== e ? e : ql : void 0,
                    s = null !== (r = t.category) && void 0 !== r ? r : "Application",
                    a = null !== (i = null === (n = null == t ? void 0 : t.error) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : t.message;
                return `${jr.toISOString(t.timestamp)}:${o ? " " + o : ""} [${s}] ${a}`;
            }, this.transportId = t, this.logTypeBaseline = e, this.formatter = r, this.transportConsole = n, s(this, ad, i, "f");
        }
        getTransportId() {
            return this.transportId;
        }
        requiresConnectivity() {
            return !1;
        }
        hasWriteBuffer() {
            return !1;
        }
        getLogTypeBaseline() {
            return this.logTypeBaseline;
        }
        setLogTypeBaseline(t) {
            this.logTypeBaseline = t;
        }
        write(t) {
            return i(this, void 0, void 0, function*() {
                if (!o(this, sd, "m", ud).call(this, t)) return;
                const e = this.formatter ? this.formatter.format(t) : this.formatConsoleLog(t);
                switch (t.type) {
                    case hn.Debug:
                        this.transportConsole.debug(e);
                        break;
                    case hn.Info:
                        this.transportConsole.log(e);
                        break;
                    case hn.Warning:
                        this.transportConsole.warn(e);
                        break;
                    case hn.Error:
                        this.transportConsole.error(e, t.error);
                        break;
                    default:
                        this.transportConsole.log(e);
                }
            });
        }
        writeAll(t) {
            return i(this, void 0, void 0, function*() {
                for (const e of t) yield this.write(e);
            });
        }
    }

    function hd(t) {
        const e = {};
        return t.category && (e[Zp.Tag] = t.category), e;
    }
    ad = new WeakMap(), sd = new WeakSet(), ud = function(t) {
        return t.visibility === ji.External || o(this, ad, "f").call(this);
    };
    class pd {
        format(t) {
            var e, r;
            const n = null !== (e = t.visibility) && void 0 !== e ? e : ji.External,
                i = Ql(t),
                o = hd(t),
                s = Object.assign(Object.assign(Object.assign({
                    [Zp.Visibility]: Yl[n]
                }, i), o), t.attributes),
                a = tf(s),
                u = jr.toISOString(t.timestamp);
            return {
                message: null !== (r = t.message) && void 0 !== r ? r : "",
                attributes: a,
                instant: u
            };
        }
    }
    const dd = {
        [hn.Debug]: "logDebug",
        [hn.Info]: "logInfo",
        [hn.Warning]: "logWarning",
        [hn.Error]: "logError",
        [hn.Trace]: "logTrace"
    };
    class gd {
        constructor(_ref25) {
            let {
                transportId: t,
                logTypeBaseline: e,
                nativeLoggerV2: r,
                formatter: n = new pd()
            } = _ref25;
            this.transportId = t, this.logTypeBaseline = e, this.nativeLoggerV2 = r, this.formatter = n;
        }
        getTransportId() {
            return this.transportId;
        }
        requiresConnectivity() {
            return !1;
        }
        hasWriteBuffer() {
            return !1;
        }
        getLogTypeBaseline() {
            return this.logTypeBaseline;
        }
        setLogTypeBaseline(t) {
            this.logTypeBaseline = t;
        }
        write(t) {
            return i(this, void 0, void 0, function*() {
                const e = this.formatter.format(t),
                    r = dd[t.type];
                return this.nativeLoggerV2[r](e);
            });
        }
        writeAll(t) {
            return i(this, void 0, void 0, function*() {
                for (const e of t) yield this.write(e);
            });
        }
    }
    var vd;
    const _d = {
            [hn.Trace]: 1,
            [hn.Debug]: 5,
            [hn.Info]: 9,
            [hn.Warning]: 13,
            [hn.Error]: 17
        },
        yd = {
            [hn.Debug]: "Debug",
            [hn.Info]: "Information",
            [hn.Warning]: "Warning",
            [hn.Error]: "Error",
            [hn.Trace]: "Trace"
        };
    class Td {
        constructor() {
            let {
                resourceAttributes: t = {}
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            vd.set(this, void 0), s(this, vd, t, "f");
        }
        setResourceAttributes(t) {
            s(this, vd, null != t ? t : {}, "f");
        }
        format(t) {
            return this.formatAll([t]);
        }
        formatAll(t) {
            const e = Object.assign({
                    [Zp.AccessType]: 3
                }, o(this, vd, "f")),
                r = Jl(e),
                n = t.map(t => function(t) {
                    var e;
                    const r = null !== (e = t.visibility) && void 0 !== e ? e : ji.External,
                        n = Ql(t),
                        i = (t => {
                            const e = {},
                                r = t.span;
                            return r && (e.traceId = r.traceId, e.spanId = r.spanId), e;
                        })(t),
                        o = hd(t),
                        s = Object.assign(Object.assign(Object.assign({
                            [Zp.Visibility]: Yl[r]
                        }, n), o), t.attributes),
                        a = tf(s),
                        u = Jl(a),
                        c = _d[t.type],
                        l = yd[t.type],
                        f = jr.toNanoSeconds(t.timestamp),
                        h = (t => {
                            const e = {
                                body: {
                                    stringValue: ""
                                }
                            };
                            if (t.message) {
                                const r = t.message.length > 2e3 ? `${t.message.substring(0, 1997)}...` : t.message;
                                e.body = {
                                    stringValue: r
                                };
                            }
                            return e;
                        })(t);
                    return Object.assign(Object.assign(Object.assign({}, h), i), {
                        timeUnixNano: f,
                        severityNumber: c,
                        severityText: l,
                        attributes: u
                    });
                }(t));
            return function(t, e) {
                return {
                    resourceLogs: [{
                        resource: {
                            attributes: e
                        },
                        scopeLogs: [{
                            scope: {
                                name: "@outsystems/logger-js",
                                version: "3.1.0"
                            },
                            logRecords: t
                        }]
                    }]
                };
            }(n, r);
        }
    }
    var md, bd, Ed, Sd;
    vd = new WeakMap();
    class Od {
        constructor(_ref26) {
            let {
                transportId: t,
                resourceAttributes: e,
                logTypeBaseline: n,
                logsEndpoint: i = "/v2/logs",
                logsCollectorBaseUrl: o,
                tagId: a,
                enableWriteBuffer: u = !0,
                httpClient: c = new _communicationJs.HttpClient({
                    baseUrl: o,
                    headers: a ? {
                        "api-key": a,
                        "tag-id": a
                    } : {}
                }),
                formatter: l = new Td({
                    resourceAttributes: e
                })
            } = _ref26;
            md.add(this), bd.set(this, void 0), Ed.set(this, void 0), this.transportId = t, this.logTypeBaseline = n, this.logsEndpoint = i, this.enableWriteBuffer = u, this.httpClient = c, this.formatter = l, s(this, bd, a, "f"), s(this, Ed, o, "f");
        }
        getTransportId() {
            return this.transportId;
        }
        requiresConnectivity() {
            return !0;
        }
        hasWriteBuffer() {
            return this.enableWriteBuffer;
        }
        getLogTypeBaseline() {
            return this.logTypeBaseline;
        }
        setLogTypeBaseline(t) {
            this.logTypeBaseline = t;
        }
        setTagId(t) {
            s(this, bd, t, "f");
        }
        setResourceAttributes(t) {
            var e, r;
            null === (r = (e = this.formatter).setResourceAttributes) || void 0 === r || r.call(e, t);
        }
        write(t) {
            return i(this, void 0, void 0, function*() {
                return o(this, md, "m", Sd).call(this, this.formatter.format(t));
            });
        }
        writeAll(t) {
            return i(this, void 0, void 0, function*() {
                return o(this, md, "m", Sd).call(this, this.formatter.formatAll(t));
            });
        }
    }
    var wd, Ld, Ad, Id, kd, Rd, Pd, Cd;
    bd = new WeakMap(), Ed = new WeakMap(), md = new WeakSet(), Sd = function(t) {
        return i(this, void 0, void 0, function*() {
            return this.httpClient.post({
                url: this.logsEndpoint,
                payload: t,
                contentType: _communicationJs.ContentType.Json,
                headers: o(this, bd, "f") ? {
                    "api-key": o(this, bd, "f"),
                    "tag-id": o(this, bd, "f")
                } : {},
                baseURL: o(this, Ed, "f")
            });
        });
    };
    class Nd {
        constructor() {
            let {
                resourceAttributes: t = {}
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            wd.add(this), Ld.set(this, void 0), s(this, Ld, t, "f");
        }
        setResourceAttributes(t) {
            s(this, Ld, null != t ? t : {}, "f");
        }
        format(t) {
            return this.formatAll([t]);
        }
        formatAll(t) {
            const e = Object.assign({
                    [Zp.AccessType]: 3
                }, o(this, Ld, "f")),
                r = Jl(e);
            return function(t, e) {
                return {
                    resourceSpans: [{
                        resource: {
                            attributes: e
                        },
                        scopeSpans: [{
                            scope: {
                                name: "@outsystems/logger-js",
                                version: "3.1.0"
                            },
                            spans: t
                        }]
                    }]
                };
            }(t.map(t => {
                const e = Object.assign({
                        [Zp.Visibility]: Yl[ji.External]
                    }, o(this, wd, "m", Ad).call(this, t.attributes)),
                    r = tf(e),
                    n = Jl(r);
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
                    attributes: n
                }, t.kind ? {
                    kind: t.kind
                } : {});
            }), r);
        }
    }
    Ld = new WeakMap(), wd = new WeakSet(), Ad = function(t) {
        return Object.entries(t).reduce((t, _ref27) => {
            let [e, r] = _ref27;
            return Vp.includes(e) || (t[e] = r), t;
        }, {});
    };
    class xd {
        constructor(_ref28) {
            let {
                transportId: t,
                resourceAttributes: e,
                enabled: n = !0,
                tracesEndpoint: i = "/v2/traces",
                tracesCollectorBaseUrl: o,
                tagId: a,
                enableWriteBuffer: u = !0,
                httpClient: c = new _communicationJs.HttpClient({
                    baseUrl: o,
                    headers: a ? {
                        "api-key": a,
                        "tag-id": a
                    } : {}
                }),
                formatter: l = new Nd({
                    resourceAttributes: e
                })
            } = _ref28;
            Id.add(this), kd.set(this, void 0), Rd.set(this, void 0), Pd.set(this, void 0), this.transportId = t, s(this, kd, n, "f"), this.tracesEndpoint = i, this.enableWriteBuffer = u, this.httpClient = c, this.formatter = l, s(this, Rd, a, "f"), s(this, Pd, o, "f");
        }
        getTransportId() {
            return this.transportId;
        }
        isTracingEnabled() {
            return o(this, kd, "f");
        }
        enableTracing() {
            s(this, kd, !0, "f");
        }
        disableTracing() {
            s(this, kd, !1, "f");
        }
        requiresConnectivity() {
            return !0;
        }
        hasWriteBuffer() {
            return this.enableWriteBuffer;
        }
        setTagId(t) {
            s(this, Rd, t, "f");
        }
        setResourceAttributes(t) {
            var e, r;
            null === (r = (e = this.formatter).setResourceAttributes) || void 0 === r || r.call(e, t);
        }
        write(t) {
            return i(this, void 0, void 0, function*() {
                return o(this, Id, "m", Cd).call(this, this.formatter.format(t));
            });
        }
        writeAll(t) {
            return i(this, void 0, void 0, function*() {
                return o(this, Id, "m", Cd).call(this, this.formatter.formatAll(t));
            });
        }
    }
    var jd, Md, Dd, Bd, Ud, Wd, zd, Fd, Zd, Vd, Gd, Hd, Xd, $d, qd, Kd, Yd, Qd, Jd, tg, eg, rg, ng;
    kd = new WeakMap(), Rd = new WeakMap(), Pd = new WeakMap(), Id = new WeakSet(), Cd = function(t) {
        return i(this, void 0, void 0, function*() {
            return this.httpClient.post({
                url: this.tracesEndpoint,
                payload: t,
                contentType: _communicationJs.ContentType.Json,
                headers: o(this, Rd, "f") ? {
                    "api-key": o(this, Rd, "f"),
                    "tag-id": o(this, Rd, "f")
                } : {},
                baseURL: o(this, Pd, "f")
            });
        });
    };
    class ig {
        constructor() {
            let {
                sw: t,
                container: e = navigator.serviceWorker
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var r;
            if (jd.set(this, void 0), Md.set(this, void 0), Dd.set(this, []), Bd.set(this, !1), !e) throw new Error("No service worker container available");
            s(this, jd, null !== (r = null != t ? t : null == e ? void 0 : e.controller) && void 0 !== r ? r : void 0, "f"), s(this, Md, e, "f"), this.waitForSW();
        }
        get pendingMessages() {
            return o(this, Dd, "f");
        }
        isServiceWorkerAvailable() {
            return !!o(this, jd, "f") && "activated" === o(this, jd, "f").state;
        }
        send(t, e) {
            this.sendMessage({
                kind: t,
                data: e
            });
        }
        sendMessage(t, e) {
            var r;
            this.isServiceWorkerAvailable() ? null === (r = o(this, jd, "f")) || void 0 === r || r.postMessage(t, e) : (o(this, Dd, "f").push({
                message: t,
                options: e
            }), this.waitForSW());
        }
        waitForSW() {
            return i(this, void 0, void 0, function*() {
                if (this.isServiceWorkerAvailable() || o(this, Bd, "f")) return;
                s(this, Bd, !0, "f");
                const {
                    active: t
                } = yield o(this, Md, "f").ready;
                s(this, jd, null != t ? t : void 0, "f"), s(this, Bd, !1, "f"), this.flushMessages();
            });
        }
        flushMessages() {
            var t;
            if (this.isServiceWorkerAvailable()) {
                for (const {
                        message: e,
                        options: r
                    } of o(this, Dd, "f")) null === (t = o(this, jd, "f")) || void 0 === t || t.postMessage(e, r);
                s(this, Dd, [], "f");
            } else this.waitForSW();
        }
    }
    jd = new WeakMap(), Md = new WeakMap(), Dd = new WeakMap(), Bd = new WeakMap();
    class og {
        constructor(_ref29) {
            let {
                transportId: t,
                tagId: e,
                collectorBaseUrl: r,
                databaseSuffix: n,
                swTransport: i = new ig(),
                enabled: o = !0,
                attributes: a = {},
                aggregateSpans: u = !1
            } = _ref29;
            Ud.set(this, void 0), Wd.set(this, void 0), zd.set(this, void 0), Fd.set(this, void 0), Zd.set(this, void 0), Vd.set(this, void 0), Gd.set(this, void 0), Hd.set(this, void 0), s(this, Ud, t, "f"), s(this, Wd, i, "f"), s(this, Hd, o, "f"), s(this, zd, a, "f"), s(this, Fd, e, "f"), s(this, Zd, r, "f"), s(this, Vd, n, "f"), s(this, Gd, u, "f");
        }
        getTransportId() {
            return o(this, Ud, "f");
        }
        requiresConnectivity() {
            return !1;
        }
        isTracingEnabled() {
            return o(this, Hd, "f");
        }
        enableTracing() {
            s(this, Hd, !0, "f");
        }
        disableTracing() {
            s(this, Hd, !1, "f");
        }
        hasWriteBuffer() {
            return !1;
        }
        write(t) {
            return o(this, Wd, "f").send("Span", t), Promise.resolve();
        }
        writeAll(t) {
            for (const e of t) o(this, Wd, "f").send("Span", e);
            return Promise.resolve();
        }
        flush() {
            return o(this, Wd, "f").send("Flush", {
                kind: "Spans"
            }), Promise.resolve();
        }
        initialize() {
            o(this, Wd, "f").send("SpansInitialization", {
                databaseSuffix: o(this, Vd, "f"),
                resourceAttributes: o(this, zd, "f"),
                collectorBaseUrl: o(this, Zd, "f"),
                apiKey: o(this, Fd, "f"),
                aggregateSpans: o(this, Gd, "f")
            });
        }
    }
    Ud = new WeakMap(), Wd = new WeakMap(), zd = new WeakMap(), Fd = new WeakMap(), Zd = new WeakMap(), Vd = new WeakMap(), Gd = new WeakMap(), Hd = new WeakMap();
    class sg {
        constructor(_ref30) {
            let {
                databaseNameSuffix: r,
                logTransports: n,
                traceTransports: i,
                baseLogAttributes: o = {},
                baseSpanAttributes: a = {},
                staticSpanAttributes: u = [],
                isOnline: c,
                aggregateSpans: l,
                transportManager: f = new Ni({
                    databaseNameSuffix: r,
                    logTransports: n,
                    traceTransports: i,
                    isOnline: c,
                    aggregateSpans: l
                }),
                tracerInstance: h,
                loggerInstance: p
            } = _ref30;
            Xd.add(this), $d.set(this, void 0), qd.set(this, void 0), Kd.set(this, void 0), Yd.set(this, void 0), Qd.set(this, void 0), Jd.set(this, void 0), tg.set(this, void 0), eg.set(this, void 0), s(this, $d, f, "f"), s(this, qd, h, "f"), s(this, Kd, p, "f"), s(this, Yd, () => _settingsJs.FeaturesManager.isEnabled(_settingsJs.FeatureKeys.WriteLogsOnConsoles), "f"), s(this, Qd, o, "f"), s(this, Jd, a, "f"), s(this, tg, u, "f"), s(this, eg, r, "f");
        }
        init() {
            return i(this, void 0, void 0, function*() {
                yield this.getLogger(), this.getTracer();
            });
        }
        getLogger() {
            return i(this, void 0, void 0, function*() {
                return o(this, Kd, "f") || s(this, Kd, yield sf.build({
                    transportManager: o(this, $d, "f"),
                    baseAttributes: o(this, Qd, "f")
                }), "f"), o(this, Kd, "f");
            });
        }
        getTracer() {
            return o(this, qd, "f") || s(this, qd, new ld({
                transportManager: o(this, $d, "f"),
                baseAttributes: o(this, Jd, "f"),
                staticAttributes: o(this, tg, "f")
            }), "f"), o(this, qd, "f");
        }
        useNativeLoggerTransport(t) {
            return i(this, arguments, void 0, function(_ref31) {
                var _this16 = this;
                let {
                    plugin: t,
                    logTypeBaseline: e
                } = _ref31;
                return function*() {
                    (yield _this16.getLogger()).addTransport(new gd({
                        transportId: "native-logger-transport",
                        nativeLoggerV2: t,
                        logTypeBaseline: e
                    }));
                }();
            });
        }
        useOpenTelemetryLoggerTransport(t) {
            return i(this, arguments, void 0, function(_ref32) {
                var _this17 = this;
                let {
                    resourceAttributes: t,
                    logTypeBaseline: e,
                    collectorBaseUrl: r,
                    tagId: n,
                    httpClient: i
                } = _ref32;
                return function*() {
                    (yield _this17.getLogger()).addTransport(new Od({
                        transportId: "otel-logger-transport",
                        resourceAttributes: t,
                        logTypeBaseline: e,
                        logsCollectorBaseUrl: r,
                        tagId: n,
                        httpClient: i
                    }));
                }();
            });
        }
        useConsoleLoggerTransport(t) {
            return i(this, void 0, void 0, function*() {
                (yield this.getLogger()).addTransport(new fd({
                    transportId: "console-transport",
                    logTypeBaseline: t,
                    shouldWriteLogsOnConsoles: o(this, Yd, "f")
                }));
            });
        }
        useServiceWorkerTracerTransport(_ref33) {
            let {
                resourceAttributes: t,
                enabled: e = !0,
                collectorBaseUrl: r,
                tagId: n,
                swTransport: i,
                aggregateSpans: s = !1
            } = _ref33;
            const a = this.getTracer(),
                u = new og({
                    transportId: "sw-tracer-transport",
                    attributes: t,
                    enabled: e,
                    tagId: n,
                    collectorBaseUrl: r,
                    databaseSuffix: o(this, eg, "f"),
                    swTransport: i,
                    aggregateSpans: s
                });
            u.initialize(), a.addTransport(u);
        }
        useOpenTelemetryTracerTransport(_ref34) {
            let {
                resourceAttributes: t,
                enabled: e = !0,
                collectorBaseUrl: r,
                tagId: n,
                httpClient: i
            } = _ref34;
            const o = this.getTracer(),
                s = new xd({
                    transportId: "otel-tracer-transport",
                    resourceAttributes: t,
                    enabled: e,
                    tagId: n,
                    tracesCollectorBaseUrl: r,
                    httpClient: i
                });
            o.addTransport(s);
        }
        useConsoleTracerTransport() {
            return i(this, void 0, void 0, function*() {
                throw new Error("Not implemented");
            });
        }
        useFetchInstrumentation() {
            this.getTracer().enableFetchInstrumentation();
        }
        setLogLevel(t) {
            o(this, $d, "f").setAllLogTypeBaselines(t);
        }
        setTracerStatus(t) {
            this.getTracer().setStatus(t);
        }
        setTagId(t) {
            o(this, $d, "f").setTagId(t);
        }
        setAggregateSpansStatus(t) {
            o(this, $d, "f").setAggregateSpansStatus(t);
        }
        setResourceAttributes(t) {
            o(this, $d, "f").setResourceAttributes(t);
        }
        setSchedulerTimerInterval(t) {
            o(this, $d, "f").setSchedulerTimerInterval(t);
        }
        flushInstrumentationData() {
            return i(this, void 0, void 0, function*() {
                yield Promise.all([o(this, $d, "f").flushLogs(), o(this, $d, "f").flushSpans()]);
            });
        }
        logError(t) {
            return i(this, arguments, void 0, function(_ref35) {
                var _this18 = this;
                let {
                    category: t,
                    message: e,
                    error: r,
                    errorCode: n,
                    visibility: i,
                    failSpan: s = !0,
                    attributes: a
                } = _ref35;
                return function*() {
                    if (s) {
                        const t = _this18.getTracer().getActiveSpan();
                        null == t || t.fail();
                    }
                    (yield _this18.getLogger()).error({
                        category: t,
                        message: e,
                        error: r,
                        errorCode: n,
                        visibility: i,
                        span: o(_this18, Xd, "m", rg).call(_this18),
                        attributes: a
                    });
                }();
            });
        }
        logWarning(t) {
            return i(this, arguments, void 0, function(_ref36) {
                var _this19 = this;
                let {
                    category: t,
                    message: e,
                    visibility: r,
                    attributes: n
                } = _ref36;
                return function*() {
                    (yield _this19.getLogger()).warning({
                        category: t,
                        message: e,
                        visibility: r,
                        span: o(_this19, Xd, "m", rg).call(_this19),
                        attributes: n
                    });
                }();
            });
        }
        logInfo(t) {
            return i(this, arguments, void 0, function(_ref37) {
                var _this20 = this;
                let {
                    category: t,
                    message: e,
                    visibility: r,
                    attributes: n
                } = _ref37;
                return function*() {
                    (yield _this20.getLogger()).info({
                        category: t,
                        message: e,
                        visibility: r,
                        span: o(_this20, Xd, "m", rg).call(_this20),
                        attributes: n
                    });
                }();
            });
        }
        logDebug(t) {
            return i(this, arguments, void 0, function(_ref38) {
                var _this21 = this;
                let {
                    category: t,
                    message: e,
                    visibility: r,
                    attributes: n
                } = _ref38;
                return function*() {
                    (yield _this21.getLogger()).debug({
                        category: t,
                        message: e,
                        visibility: r,
                        span: o(_this21, Xd, "m", rg).call(_this21),
                        attributes: n
                    });
                }();
            });
        }
        log(t) {
            return i(this, void 0, void 0, function*() {
                const e = yield this.getLogger();
                yield e.log(t);
            });
        }
        span(t) {
            return i(this, void 0, void 0, function*() {
                const e = this.getTracer();
                yield e.span(t);
            });
        }
        flushLogs() {
            return i(this, void 0, void 0, function*() {
                yield o(this, $d, "f").flushLogs();
            });
        }
        flushSpans() {
            return i(this, void 0, void 0, function*() {
                yield o(this, $d, "f").flushSpans();
            });
        }
        startSpan(t, e, r, n) {
            return this.getTracer().startSpan(t, e, r, n);
        }
        startActiveSpan(t, e, r, n, i) {
            return this.getTracer().startActiveSpan(t, e, r, n, i);
        }
        getActiveSpan() {
            return this.getTracer().getActiveSpan();
        }
    }
    _exports.InstrumentationFactory = sg;
    $d = new WeakMap(), qd = new WeakMap(), Kd = new WeakMap(), Yd = new WeakMap(), Qd = new WeakMap(), Jd = new WeakMap(), tg = new WeakMap(), eg = new WeakMap(), Xd = new WeakSet(), rg = function() {
            const t = this.getTracer().getActiveSpan();
            return t ? zp(t) : void 0;
        },
        function(t) {
            t[t.Internal = 0] = "Internal", t[t.Client = 2] = "Client";
        }(ng || (_exports.SpanKind = ng = {}));
    const ag = _exports.Version = "3.1.0";
});