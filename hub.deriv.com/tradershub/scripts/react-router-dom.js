! function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports, require("react")) : "function" == typeof define && define.amd ? define(["exports", "react"], n) : n((t = t || self).ReactRouterDOM = {}, t.React)
}(this, function(t, C) {
    "use strict";

    function e(t, n) {
        return (e = Object.setPrototypeOf || function(t, n) {
            return t.__proto__ = n, t
        })(t, n)
    }

    function c(t, n) {
        t.prototype = Object.create(n.prototype), e(t.prototype.constructor = t, n)
    }

    function n(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    function r(t, n) {
        return t(n = {
            exports: {}
        }, n.exports), n.exports
    }
    C = C && C.hasOwnProperty("default") ? C.default : C;
    var o = r(function(t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var e = "function" == typeof Symbol && Symbol.for,
            r = e ? Symbol.for("react.element") : 60103,
            o = e ? Symbol.for("react.portal") : 60106,
            i = e ? Symbol.for("react.fragment") : 60107,
            a = e ? Symbol.for("react.strict_mode") : 60108,
            c = e ? Symbol.for("react.profiler") : 60114,
            u = e ? Symbol.for("react.provider") : 60109,
            s = e ? Symbol.for("react.context") : 60110,
            f = e ? Symbol.for("react.async_mode") : 60111,
            l = e ? Symbol.for("react.concurrent_mode") : 60111,
            p = e ? Symbol.for("react.forward_ref") : 60112,
            h = e ? Symbol.for("react.suspense") : 60113,
            d = e ? Symbol.for("react.suspense_list") : 60120,
            v = e ? Symbol.for("react.memo") : 60115,
            y = e ? Symbol.for("react.lazy") : 60116,
            m = e ? Symbol.for("react.fundamental") : 60117,
            g = e ? Symbol.for("react.responder") : 60118;

        function w(t) {
            if ("object" == typeof t && null !== t) {
                var n = t.$$typeof;
                switch (n) {
                    case r:
                        switch (t = t.type) {
                            case f:
                            case l:
                            case i:
                            case c:
                            case a:
                            case h:
                                return t;
                            default:
                                switch (t = t && t.$$typeof) {
                                    case s:
                                    case p:
                                    case u:
                                        return t;
                                    default:
                                        return n
                                }
                        }
                    case y:
                    case v:
                    case o:
                        return n
                }
            }
        }

        function b(t) {
            return w(t) === l
        }
        n.typeOf = w, n.AsyncMode = f, n.ConcurrentMode = l, n.ContextConsumer = s, n.ContextProvider = u, n.Element = r, n.ForwardRef = p, n.Fragment = i, n.Lazy = y, n.Memo = v, n.Portal = o, n.Profiler = c, n.StrictMode = a, n.Suspense = h, n.isValidElementType = function(t) {
            return "string" == typeof t || "function" == typeof t || t === i || t === l || t === c || t === a || t === h || t === d || "object" == typeof t && null !== t && (t.$$typeof === y || t.$$typeof === v || t.$$typeof === u || t.$$typeof === s || t.$$typeof === p || t.$$typeof === m || t.$$typeof === g)
        }, n.isAsyncMode = function(t) {
            return b(t) || w(t) === f
        }, n.isConcurrentMode = b, n.isContextConsumer = function(t) {
            return w(t) === s
        }, n.isContextProvider = function(t) {
            return w(t) === u
        }, n.isElement = function(t) {
            return "object" == typeof t && null !== t && t.$$typeof === r
        }, n.isForwardRef = function(t) {
            return w(t) === p
        }, n.isFragment = function(t) {
            return w(t) === i
        }, n.isLazy = function(t) {
            return w(t) === y
        }, n.isMemo = function(t) {
            return w(t) === v
        }, n.isPortal = function(t) {
            return w(t) === o
        }, n.isProfiler = function(t) {
            return w(t) === c
        }, n.isStrictMode = function(t) {
            return w(t) === a
        }, n.isSuspense = function(t) {
            return w(t) === h
        }
    });
    n(o);
    o.typeOf, o.AsyncMode, o.ConcurrentMode, o.ContextConsumer, o.ContextProvider, o.Element, o.ForwardRef, o.Fragment, o.Lazy, o.Memo, o.Portal, o.Profiler, o.StrictMode, o.Suspense, o.isValidElementType, o.isAsyncMode, o.isConcurrentMode, o.isContextConsumer, o.isContextProvider, o.isElement, o.isForwardRef, o.isFragment, o.isLazy, o.isMemo, o.isPortal, o.isProfiler, o.isStrictMode, o.isSuspense;
    var i = r(function(t, n) {});
    n(i);
    i.typeOf, i.AsyncMode, i.ConcurrentMode, i.ContextConsumer, i.ContextProvider, i.Element, i.ForwardRef, i.Fragment, i.Lazy, i.Memo, i.Portal, i.Profiler, i.StrictMode, i.Suspense, i.isValidElementType, i.isAsyncMode, i.isConcurrentMode, i.isContextConsumer, i.isContextProvider, i.isElement, i.isForwardRef, i.isFragment, i.isLazy, i.isMemo, i.isPortal, i.isProfiler, i.isStrictMode, i.isSuspense;
    var a = r(function(t) {
            t.exports = o
        }),
        u = (a.isValidElementType, Object.getOwnPropertySymbols),
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable;
    ! function() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var n = {}, e = 0; e < 10; e++) n["_" + String.fromCharCode(e)] = e;
            if ("0123456789" !== Object.getOwnPropertyNames(n).map(function(t) {
                    return n[t]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                r[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (t) {
            return !1
        }
    }() || Object.assign, Function.call.bind(Object.prototype.hasOwnProperty);

    function l() {}

    function p() {}
    p.resetWarningCache = l;
    var h = r(function(t) {
        t.exports = function() {
            function t(t, n, e, r, o, i) {
                if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== i) {
                    var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw a.name = "Invariant Violation", a
                }
            }

            function n() {
                return t
            }
            var e = {
                array: t.isRequired = t,
                bool: t,
                func: t,
                number: t,
                object: t,
                string: t,
                symbol: t,
                any: t,
                arrayOf: n,
                element: t,
                elementType: t,
                instanceOf: n,
                node: t,
                objectOf: n,
                oneOf: n,
                oneOfType: n,
                shape: n,
                exact: n,
                checkPropTypes: p,
                resetWarningCache: l
            };
            return e.PropTypes = e
        }()
    });

    function T() {
        return (T = Object.assign || function(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = arguments[n];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }).apply(this, arguments)
    }

    function d(t) {
        return "/" === t.charAt(0)
    }

    function v(t, n) {
        for (var e = n, r = e + 1, o = t.length; r < o; e += 1, r += 1) t[e] = t[r];
        t.pop()
    }
    var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    var m = "Invariant failed";

    function k(t) {
        if (!t) throw new Error(m)
    }

    function A(t) {
        return "/" === t.charAt(0) ? t : "/" + t
    }

    function g(t) {
        return "/" === t.charAt(0) ? t.substr(1) : t
    }

    function M(t, n) {
        return function(t, n) {
            return new RegExp("^" + n + "(\\/|\\?|#|$)", "i").test(t)
        }(t, n) ? t.substr(n.length) : t
    }

    function j(t) {
        return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t
    }

    function _(t) {
        var n = t.pathname,
            e = t.search,
            r = t.hash,
            o = n || "/";
        return e && "?" !== e && (o += "?" === e.charAt(0) ? e : "?" + e), r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r), o
    }

    function L(t, n, e, r) {
        var o;
        "string" == typeof t ? (o = function(t) {
            var n = t || "/",
                e = "",
                r = "",
                o = n.indexOf("#"); - 1 !== o && (r = n.substr(o), n = n.substr(0, o));
            var i = n.indexOf("?");
            return -1 !== i && (e = n.substr(i), n = n.substr(0, i)), {
                pathname: n,
                search: "?" === e ? "" : e,
                hash: "#" === r ? "" : r
            }
        }(t)).state = n : (void 0 === (o = T({}, t)).pathname && (o.pathname = ""), o.search ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search) : o.search = "", o.hash ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash) : o.hash = "", void 0 !== n && void 0 === o.state && (o.state = n));
        try {
            o.pathname = decodeURI(o.pathname)
        } catch (t) {
            throw t instanceof URIError ? new URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : t
        }
        return e && (o.key = e), r ? o.pathname ? "/" !== o.pathname.charAt(0) && (o.pathname = function(t, n) {
            var e = 1 < arguments.length && void 0 !== n ? n : "",
                r = t && t.split("/") || [],
                o = e && e.split("/") || [],
                i = t && d(t),
                a = e && d(e),
                c = i || a;
            if (t && d(t) ? o = r : r.length && (o.pop(), o = o.concat(r)), !o.length) return "/";
            var u = void 0;
            if (o.length) {
                var s = o[o.length - 1];
                u = "." === s || ".." === s || "" === s
            } else u = !1;
            for (var f = 0, l = o.length; 0 <= l; l--) {
                var p = o[l];
                "." === p ? v(o, l) : ".." === p ? (v(o, l), f++) : f && (v(o, l), f--)
            }
            if (!c)
                for (; f--;) o.unshift("..");
            !c || "" === o[0] || o[0] && d(o[0]) || o.unshift("");
            var h = o.join("/");
            return u && "/" !== h.substr(-1) && (h += "/"), h
        }(o.pathname, r.pathname)) : o.pathname = r.pathname : o.pathname || (o.pathname = "/"), o
    }

    function S(t, n) {
        return t.pathname === n.pathname && t.search === n.search && t.hash === n.hash && t.key === n.key && function e(n, r) {
            if (n === r) return !0;
            if (null == n || null == r) return !1;
            if (Array.isArray(n)) return Array.isArray(r) && n.length === r.length && n.every(function(t, n) {
                return e(t, r[n])
            });
            var t = void 0 === n ? "undefined" : y(n);
            if (t !== (void 0 === r ? "undefined" : y(r))) return !1;
            if ("object" !== t) return !1;
            var o = n.valueOf(),
                i = r.valueOf();
            if (o !== n || i !== r) return e(o, i);
            var a = Object.keys(n),
                c = Object.keys(r);
            return a.length === c.length && a.every(function(t) {
                return e(n[t], r[t])
            })
        }(t.state, n.state)
    }

    function $() {
        var i = null;
        var r = [];
        return {
            setPrompt: function(t) {
                return i = t,
                    function() {
                        i === t && (i = null)
                    }
            },
            confirmTransitionTo: function(t, n, e, r) {
                if (null != i) {
                    var o = "function" == typeof i ? i(t, n) : i;
                    "string" == typeof o ? "function" == typeof e ? e(o, r) : r(!0) : r(!1 !== o)
                } else r(!0)
            },
            appendListener: function(t) {
                var n = !0;

                function e() {
                    n && t.apply(void 0, arguments)
                }
                return r.push(e),
                    function() {
                        n = !1, r = r.filter(function(t) {
                            return t !== e
                        })
                    }
            },
            notifyListeners: function() {
                for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                r.forEach(function(t) {
                    return t.apply(void 0, n)
                })
            }
        }
    }
    var U = !("undefined" == typeof window || !window.document || !window.document.createElement);

    function F(t, n) {
        n(window.confirm(t))
    }
    var N = "popstate",
        H = "hashchange";

    function I() {
        try {
            return window.history.state || {}
        } catch (t) {
            return {}
        }
    }

    function w(t) {
        void 0 === t && (t = {}), U || k(!1);
        var c = window.history,
            u = function() {
                var t = window.navigator.userAgent;
                return (-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && (window.history && "pushState" in window.history)
            }(),
            n = !(-1 === window.navigator.userAgent.indexOf("Trident")),
            e = t,
            r = e.forceRefresh,
            s = void 0 !== r && r,
            o = e.getUserConfirmation,
            f = void 0 === o ? F : o,
            i = e.keyLength,
            a = void 0 === i ? 6 : i,
            l = t.basename ? j(A(t.basename)) : "";

        function p(t) {
            var n = t || {},
                e = n.key,
                r = n.state,
                o = window.location,
                i = o.pathname + o.search + o.hash;
            return l && (i = M(i, l)), L(i, r, e)
        }

        function h() {
            return Math.random().toString(36).substr(2, a)
        }
        var d = $();

        function v(t) {
            T(R, t), R.length = c.length, d.notifyListeners(R.location, R.action)
        }

        function y(t) {
            ! function(t) {
                void 0 === t.state && navigator.userAgent.indexOf("CriOS")
            }(t) && w(p(t.state))
        }

        function m() {
            w(p(I()))
        }
        var g = !1;

        function w(n) {
            if (g) g = !1, v();
            else {
                d.confirmTransitionTo(n, "POP", f, function(t) {
                    t ? v({
                        action: "POP",
                        location: n
                    }) : function(t) {
                        var n = R.location,
                            e = x.indexOf(n.key); - 1 === e && (e = 0);
                        var r = x.indexOf(t.key); - 1 === r && (r = 0);
                        var o = e - r;
                        o && (g = !0, O(o))
                    }(n)
                })
            }
        }
        var b = p(I()),
            x = [b.key];

        function P(t) {
            return l + _(t)
        }

        function O(t) {
            c.go(t)
        }
        var C = 0;

        function E(t) {
            1 === (C += t) && 1 === t ? (window.addEventListener(N, y), n && window.addEventListener(H, m)) : 0 === C && (window.removeEventListener(N, y), n && window.removeEventListener(H, m))
        }
        var S = !1;
        var R = {
            length: c.length,
            action: "POP",
            location: b,
            createHref: P,
            push: function(t, n) {
                var a = L(t, n, h(), R.location);
                d.confirmTransitionTo(a, "PUSH", f, function(t) {
                    if (t) {
                        var n = P(a),
                            e = a.key,
                            r = a.state;
                        if (u)
                            if (c.pushState({
                                    key: e,
                                    state: r
                                }, null, n), s) window.location.href = n;
                            else {
                                var o = x.indexOf(R.location.key),
                                    i = x.slice(0, -1 === o ? 0 : o + 1);
                                i.push(a.key), x = i, v({
                                    action: "PUSH",
                                    location: a
                                })
                            }
                        else window.location.href = n
                    }
                })
            },
            replace: function(t, n) {
                var i = "REPLACE",
                    a = L(t, n, h(), R.location);
                d.confirmTransitionTo(a, i, f, function(t) {
                    if (t) {
                        var n = P(a),
                            e = a.key,
                            r = a.state;
                        if (u)
                            if (c.replaceState({
                                    key: e,
                                    state: r
                                }, null, n), s) window.location.replace(n);
                            else {
                                var o = x.indexOf(R.location.key); - 1 !== o && (x[o] = a.key), v({
                                    action: i,
                                    location: a
                                })
                            }
                        else window.location.replace(n)
                    }
                })
            },
            go: O,
            goBack: function() {
                O(-1)
            },
            goForward: function() {
                O(1)
            },
            block: function(t) {
                void 0 === t && (t = !1);
                var n = d.setPrompt(t);
                return S || (E(1), S = !0),
                    function() {
                        return S && (S = !1, E(-1)), n()
                    }
            },
            listen: function(t) {
                var n = d.appendListener(t);
                return E(1),
                    function() {
                        E(-1), n()
                    }
            }
        };
        return R
    }
    var R = "hashchange",
        B = {
            hashbang: {
                encodePath: function(t) {
                    return "!" === t.charAt(0) ? t : "!/" + g(t)
                },
                decodePath: function(t) {
                    return "!" === t.charAt(0) ? t.substr(1) : t
                }
            },
            noslash: {
                encodePath: g,
                decodePath: A
            },
            slash: {
                encodePath: A,
                decodePath: A
            }
        };

    function D() {
        var t = window.location.href,
            n = t.indexOf("#");
        return -1 === n ? "" : t.substring(n + 1)
    }

    function W(t) {
        var n = window.location.href.indexOf("#");
        window.location.replace(window.location.href.slice(0, 0 <= n ? n : 0) + "#" + t)
    }

    function b(t) {
        void 0 === t && (t = {}), U || k(!1);
        var n = window.history,
            e = (window.navigator.userAgent.indexOf("Firefox"), t),
            r = e.getUserConfirmation,
            a = void 0 === r ? F : r,
            o = e.hashType,
            i = void 0 === o ? "slash" : o,
            c = t.basename ? j(A(t.basename)) : "",
            u = B[i],
            s = u.encodePath,
            f = u.decodePath;

        function l() {
            var t = f(D());
            return c && (t = M(t, c)), L(t)
        }
        var p = $();

        function h(t) {
            T(E, t), E.length = n.length, p.notifyListeners(E.location, E.action)
        }
        var d = !1,
            v = null;

        function y() {
            var t = D(),
                n = s(t);
            if (t !== n) W(n);
            else {
                var e = l(),
                    r = E.location;
                if (!d && S(r, e)) return;
                if (v === _(e)) return;
                v = null,
                    function(n) {
                        if (d) d = !1, h();
                        else {
                            p.confirmTransitionTo(n, "POP", a, function(t) {
                                t ? h({
                                    action: "POP",
                                    location: n
                                }) : function(t) {
                                    var n = E.location,
                                        e = b.lastIndexOf(_(n)); - 1 === e && (e = 0);
                                    var r = b.lastIndexOf(_(t)); - 1 === r && (r = 0);
                                    var o = e - r;
                                    o && (d = !0, x(o))
                                }(n)
                            })
                        }
                    }(e)
            }
        }
        var m = D(),
            g = s(m);
        m !== g && W(g);
        var w = l(),
            b = [_(w)];

        function x(t) {
            n.go(t)
        }
        var P = 0;

        function O(t) {
            1 === (P += t) && 1 === t ? window.addEventListener(R, y) : 0 === P && window.removeEventListener(R, y)
        }
        var C = !1;
        var E = {
            length: n.length,
            action: "POP",
            location: w,
            createHref: function(t) {
                return "#" + s(c + _(t))
            },
            push: function(t, n) {
                var i = L(t, void 0, void 0, E.location);
                p.confirmTransitionTo(i, "PUSH", a, function(t) {
                    if (t) {
                        var n = _(i),
                            e = s(c + n);
                        if (D() !== e) {
                            v = n,
                                function(t) {
                                    window.location.hash = t
                                }(e);
                            var r = b.lastIndexOf(_(E.location)),
                                o = b.slice(0, -1 === r ? 0 : r + 1);
                            o.push(n), b = o, h({
                                action: "PUSH",
                                location: i
                            })
                        } else h()
                    }
                })
            },
            replace: function(t, n) {
                var o = "REPLACE",
                    i = L(t, void 0, void 0, E.location);
                p.confirmTransitionTo(i, o, a, function(t) {
                    if (t) {
                        var n = _(i),
                            e = s(c + n);
                        D() !== e && (v = n, W(e));
                        var r = b.indexOf(_(E.location)); - 1 !== r && (b[r] = n), h({
                            action: o,
                            location: i
                        })
                    }
                })
            },
            go: x,
            goBack: function() {
                x(-1)
            },
            goForward: function() {
                x(1)
            },
            block: function(t) {
                void 0 === t && (t = !1);
                var n = p.setPrompt(t);
                return C || (O(1), C = !0),
                    function() {
                        return C && (C = !1, O(-1)), n()
                    }
            },
            listen: function(t) {
                var n = p.appendListener(t);
                return O(1),
                    function() {
                        O(-1), n()
                    }
            }
        };
        return E
    }

    function x(t, n, e) {
        return Math.min(Math.max(t, n), e)
    }

    function P(t, n) {
        return Y(J(t, n))
    }
    var O = Array.isArray || function(t) {
            return "[object Array]" == Object.prototype.toString.call(t)
        },
        E = nt,
        V = J,
        z = Y,
        q = tt,
        K = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

    function J(t, n) {
        for (var e, r, o = [], i = 0, a = 0, c = "", u = n && n.delimiter || "/"; null != (e = K.exec(t));) {
            var s = e[0],
                f = e[1],
                l = e.index;
            if (c += t.slice(a, l), a = l + s.length, f) c += f[1];
            else {
                var p = t[a],
                    h = e[2],
                    d = e[3],
                    v = e[4],
                    y = e[5],
                    m = e[6],
                    g = e[7];
                c && (o.push(c), c = "");
                var w = null != h && null != p && p !== h,
                    b = "+" === m || "*" === m,
                    x = "?" === m || "*" === m,
                    P = e[2] || u,
                    O = v || y;
                o.push({
                    name: d || i++,
                    prefix: h || "",
                    delimiter: P,
                    optional: x,
                    repeat: b,
                    partial: w,
                    asterisk: !!g,
                    pattern: O ? (r = O, r.replace(/([=!:$\/()])/g, "\\$1")) : g ? ".*" : "[^" + Q(P) + "]+?"
                })
            }
        }
        return a < t.length && (c += t.substr(a)), c && o.push(c), o
    }

    function G(t) {
        return encodeURI(t).replace(/[\/?#]/g, function(t) {
            return "%" + t.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function Y(f) {
        for (var l = new Array(f.length), t = 0; t < f.length; t++) "object" == typeof f[t] && (l[t] = new RegExp("^(?:" + f[t].pattern + ")$"));
        return function(t, n) {
            for (var e = "", r = t || {}, o = (n || {}).pretty ? G : encodeURIComponent, i = 0; i < f.length; i++) {
                var a = f[i];
                if ("string" != typeof a) {
                    var c, u = r[a.name];
                    if (null == u) {
                        if (a.optional) {
                            a.partial && (e += a.prefix);
                            continue
                        }
                        throw new TypeError('Expected "' + a.name + '" to be defined')
                    }
                    if (O(u)) {
                        if (!a.repeat) throw new TypeError('Expected "' + a.name + '" to not repeat, but received `' + JSON.stringify(u) + "`");
                        if (0 === u.length) {
                            if (a.optional) continue;
                            throw new TypeError('Expected "' + a.name + '" to not be empty')
                        }
                        for (var s = 0; s < u.length; s++) {
                            if (c = o(u[s]), !l[i].test(c)) throw new TypeError('Expected all "' + a.name + '" to match "' + a.pattern + '", but received `' + JSON.stringify(c) + "`");
                            e += (0 === s ? a.prefix : a.delimiter) + c
                        }
                    } else {
                        if (c = a.asterisk ? encodeURI(u).replace(/[?#]/g, function(t) {
                                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                            }) : o(u), !l[i].test(c)) throw new TypeError('Expected "' + a.name + '" to match "' + a.pattern + '", but received "' + c + '"');
                        e += a.prefix + c
                    }
                } else e += a
            }
            return e
        }
    }

    function Q(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
    }

    function X(t, n) {
        return t.keys = n, t
    }

    function Z(t) {
        return t.sensitive ? "" : "i"
    }

    function tt(t, n, e) {
        O(n) || (e = n || e, n = []);
        for (var r = (e = e || {}).strict, o = !1 !== e.end, i = "", a = 0; a < t.length; a++) {
            var c = t[a];
            if ("string" == typeof c) i += Q(c);
            else {
                var u = Q(c.prefix),
                    s = "(?:" + c.pattern + ")";
                n.push(c), c.repeat && (s += "(?:" + u + s + ")*"), i += s = c.optional ? c.partial ? u + "(" + s + ")?" : "(?:" + u + "(" + s + "))?" : u + "(" + s + ")"
            }
        }
        var f = Q(e.delimiter || "/"),
            l = i.slice(-f.length) === f;
        return r || (i = (l ? i.slice(0, -f.length) : i) + "(?:" + f + "(?=$))?"), i += o ? "$" : r && l ? "" : "(?=" + f + "|$)", X(new RegExp("^" + i, Z(e)), n)
    }

    function nt(t, n, e) {
        return O(n) || (e = n || e, n = []), e = e || {}, t instanceof RegExp ? function(t, n) {
            var e = t.source.match(/\((?!\?)/g);
            if (e)
                for (var r = 0; r < e.length; r++) n.push({
                    name: r,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null
                });
            return X(t, n)
        }(t, n) : O(t) ? function(t, n, e) {
            for (var r = [], o = 0; o < t.length; o++) r.push(nt(t[o], n, e).source);
            return X(new RegExp("(?:" + r.join("|") + ")", Z(e)), n)
        }(t, n, e) : function(t, n, e) {
            return tt(J(t, e), n, e)
        }(t, n, e)
    }

    function et(t, n) {
        if (null == t) return {};
        var e, r, o = {},
            i = Object.keys(t);
        for (r = 0; r < i.length; r++) e = i[r], 0 <= n.indexOf(e) || (o[e] = t[e]);
        return o
    }
    E.parse = V, E.compile = P, E.tokensToFunction = z, E.tokensToRegExp = q;
    var rt = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        ot = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        it = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        },
        at = {};

    function ct(t) {
        return a.isMemo(t) ? it : at[t.$$typeof] || rt
    }
    at[a.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    };
    var ut = Object.defineProperty,
        st = Object.getOwnPropertyNames,
        ft = Object.getOwnPropertySymbols,
        lt = Object.getOwnPropertyDescriptor,
        pt = Object.getPrototypeOf,
        ht = Object.prototype;
    var dt = function t(n, e, r) {
            if ("string" == typeof e) return n;
            if (ht) {
                var o = pt(e);
                o && o !== ht && t(n, o, r)
            }
            var i = st(e);
            ft && (i = i.concat(ft(e)));
            for (var a = ct(n), c = ct(e), u = 0; u < i.length; ++u) {
                var s = i[u];
                if (!(ot[s] || r && r[s] || c && c[s] || a && a[s])) {
                    var f = lt(e, s);
                    try {
                        ut(n, s, f)
                    } catch (t) {}
                }
            }
            return n
        },
        vt = 1073741823,
        yt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {};

    function mt(t) {
        var n = gt();
        return n.displayName = t, n
    }
    var gt = C.createContext || function(e, i) {
            var t, n, r = "__create-react-context-" + function() {
                    var t = "__global_unique_id__";
                    return yt[t] = (yt[t] || 0) + 1
                }() + "__",
                o = function(o) {
                    function t() {
                        for (var t, n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                        return (t = o.call.apply(o, [this].concat(e)) || this).emitter = function(e) {
                            var r = [];
                            return {
                                on: function(t) {
                                    r.push(t)
                                },
                                off: function(n) {
                                    r = r.filter(function(t) {
                                        return t !== n
                                    })
                                },
                                get: function() {
                                    return e
                                },
                                set: function(t, n) {
                                    e = t, r.forEach(function(t) {
                                        return t(e, n)
                                    })
                                }
                            }
                        }(t.props.value), t
                    }
                    c(t, o);
                    var n = t.prototype;
                    return n.getChildContext = function() {
                        var t;
                        return (t = {})[r] = this.emitter, t
                    }, n.componentWillReceiveProps = function(t) {
                        if (this.props.value !== t.value) {
                            var n, e = this.props.value,
                                r = t.value;
                            ! function(t, n) {
                                return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n
                            }(e, r) ? (n = "function" == typeof i ? i(e, r) : vt, 0 !== (n |= 0) && this.emitter.set(t.value, n)) : n = 0
                        }
                    }, n.render = function() {
                        return this.props.children
                    }, t
                }(C.Component);
            o.childContextTypes = ((t = {})[r] = h.object.isRequired, t);
            var a = function(o) {
                function t() {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return (e = o.call.apply(o, [this].concat(n)) || this).observedBits = void 0, e.state = {
                        value: e.getValue()
                    }, e.onUpdate = function(t, n) {
                        0 != ((0 | e.observedBits) & n) && e.setState({
                            value: e.getValue()
                        })
                    }, e
                }
                c(t, o);
                var n = t.prototype;
                return n.componentWillReceiveProps = function(t) {
                    var n = t.observedBits;
                    this.observedBits = null == n ? vt : n
                }, n.componentDidMount = function() {
                    this.context[r] && this.context[r].on(this.onUpdate);
                    var t = this.props.observedBits;
                    this.observedBits = null == t ? vt : t
                }, n.componentWillUnmount = function() {
                    this.context[r] && this.context[r].off(this.onUpdate)
                }, n.getValue = function() {
                    return this.context[r] ? this.context[r].get() : e
                }, n.render = function() {
                    return function(t) {
                        return Array.isArray(t) ? t[0] : t
                    }(this.props.children)(this.state.value)
                }, t
            }(C.Component);
            return a.contextTypes = ((n = {})[r] = h.object, n), {
                Provider: o,
                Consumer: a
            }
        },
        wt = mt("Router-History"),
        bt = mt("Router"),
        xt = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).state = {
                    location: t.history.location
                }, n._isMounted = !1, n._pendingLocation = null, t.staticContext || (n.unlisten = t.history.listen(function(t) {
                    n._pendingLocation = t
                })), n
            }
            c(t, e), t.computeRootMatch = function(t) {
                return {
                    path: "/",
                    url: "/",
                    params: {},
                    isExact: "/" === t
                }
            };
            var n = t.prototype;
            return n.componentDidMount = function() {
                var n = this;
                this._isMounted = !0, this.unlisten && this.unlisten(), this.props.staticContext || (this.unlisten = this.props.history.listen(function(t) {
                    n._isMounted && n.setState({
                        location: t
                    })
                })), this._pendingLocation && this.setState({
                    location: this._pendingLocation
                })
            }, n.componentWillUnmount = function() {
                this.unlisten && (this.unlisten(), this._isMounted = !1, this._pendingLocation = null)
            }, n.render = function() {
                return C.createElement(bt.Provider, {
                    value: {
                        history: this.props.history,
                        location: this.state.location,
                        match: t.computeRootMatch(this.state.location.pathname),
                        staticContext: this.props.staticContext
                    }
                }, C.createElement(wt.Provider, {
                    children: this.props.children || null,
                    value: this.props.history
                }))
            }, t
        }(C.Component),
        Pt = function(o) {
            function t() {
                for (var t, n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                return (t = o.call.apply(o, [this].concat(e)) || this).history = function(t) {
                    void 0 === t && (t = {});
                    var n = t,
                        o = n.getUserConfirmation,
                        e = n.initialEntries,
                        r = void 0 === e ? ["/"] : e,
                        i = n.initialIndex,
                        a = void 0 === i ? 0 : i,
                        c = n.keyLength,
                        u = void 0 === c ? 6 : c,
                        s = $();

                    function f(t) {
                        T(y, t), y.length = y.entries.length, s.notifyListeners(y.location, y.action)
                    }

                    function l() {
                        return Math.random().toString(36).substr(2, u)
                    }
                    var p = x(a, 0, r.length - 1),
                        h = r.map(function(t) {
                            return L(t, void 0, "string" == typeof t ? l() : t.key || l())
                        }),
                        d = _;

                    function v(t) {
                        var n = x(y.index + t, 0, y.entries.length - 1),
                            e = y.entries[n];
                        s.confirmTransitionTo(e, "POP", o, function(t) {
                            t ? f({
                                action: "POP",
                                location: e,
                                index: n
                            }) : f()
                        })
                    }
                    var y = {
                        length: h.length,
                        action: "POP",
                        location: h[p],
                        index: p,
                        entries: h,
                        createHref: d,
                        push: function(t, n) {
                            var r = L(t, n, l(), y.location);
                            s.confirmTransitionTo(r, "PUSH", o, function(t) {
                                if (t) {
                                    var n = y.index + 1,
                                        e = y.entries.slice(0);
                                    e.length > n ? e.splice(n, e.length - n, r) : e.push(r), f({
                                        action: "PUSH",
                                        location: r,
                                        index: n,
                                        entries: e
                                    })
                                }
                            })
                        },
                        replace: function(t, n) {
                            var e = "REPLACE",
                                r = L(t, n, l(), y.location);
                            s.confirmTransitionTo(r, e, o, function(t) {
                                t && (y.entries[y.index] = r, f({
                                    action: e,
                                    location: r
                                }))
                            })
                        },
                        go: v,
                        goBack: function() {
                            v(-1)
                        },
                        goForward: function() {
                            v(1)
                        },
                        canGo: function(t) {
                            var n = y.index + t;
                            return 0 <= n && n < y.entries.length
                        },
                        block: function(t) {
                            return void 0 === t && (t = !1), s.setPrompt(t)
                        },
                        listen: function(t) {
                            return s.appendListener(t)
                        }
                    };
                    return y
                }(t.props), t
            }
            return c(t, o), t.prototype.render = function() {
                return C.createElement(xt, {
                    history: this.history,
                    children: this.props.children
                })
            }, t
        }(C.Component),
        Ot = function(t) {
            function n() {
                return t.apply(this, arguments) || this
            }
            c(n, t);
            var e = n.prototype;
            return e.componentDidMount = function() {
                this.props.onMount && this.props.onMount.call(this, this)
            }, e.componentDidUpdate = function(t) {
                this.props.onUpdate && this.props.onUpdate.call(this, this, t)
            }, e.componentWillUnmount = function() {
                this.props.onUnmount && this.props.onUnmount.call(this, this)
            }, e.render = function() {
                return null
            }, n
        }(C.Component);
    var Ct = {},
        Et = 1e4,
        St = 0;

    function Rt(t, n) {
        return void 0 === t && (t = "/"), void 0 === n && (n = {}), "/" === t ? t : function(t) {
            if (Ct[t]) return Ct[t];
            var n = E.compile(t);
            return St < Et && (Ct[t] = n, St++), n
        }(t)(n, {
            pretty: !0
        })
    }
    var Tt = {},
        kt = 1e4,
        At = 0;

    function Mt(s, t) {
        void 0 === t && (t = {}), "string" != typeof t && !Array.isArray(t) || (t = {
            path: t
        });
        var n = t,
            e = n.path,
            r = n.exact,
            f = void 0 !== r && r,
            o = n.strict,
            l = void 0 !== o && o,
            i = n.sensitive,
            p = void 0 !== i && i;
        return [].concat(e).reduce(function(t, n) {
            if (!n && "" !== n) return null;
            if (t) return t;
            var e = function(t, n) {
                    var e = "" + n.end + n.strict + n.sensitive,
                        r = Tt[e] || (Tt[e] = {});
                    if (r[t]) return r[t];
                    var o = [],
                        i = {
                            regexp: E(t, o, n),
                            keys: o
                        };
                    return At < kt && (r[t] = i, At++), i
                }(n, {
                    end: f,
                    strict: l,
                    sensitive: p
                }),
                r = e.regexp,
                o = e.keys,
                i = r.exec(s);
            if (!i) return null;
            var a = i[0],
                c = i.slice(1),
                u = s === a;
            return f && !u ? null : {
                path: n,
                url: "/" === n && "" === a ? "/" : a,
                isExact: u,
                params: o.reduce(function(t, n, e) {
                    return t[n.name] = c[e], t
                }, {})
            }
        }, null)
    }
    var jt = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        return c(n, t), n.prototype.render = function() {
            var c = this;
            return C.createElement(bt.Consumer, null, function(t) {
                t || k(!1);
                var n = c.props.location || t.location,
                    e = T({}, t, {
                        location: n,
                        match: c.props.computedMatch ? c.props.computedMatch : c.props.path ? Mt(n.pathname, c.props) : t.match
                    }),
                    r = c.props,
                    o = r.children,
                    i = r.component,
                    a = r.render;
                return Array.isArray(o) && function(t) {
                    return 0 === C.Children.count(t)
                }(o) && (o = null), C.createElement(bt.Provider, {
                    value: e
                }, e.match ? o ? "function" == typeof o ? o(e) : o : i ? C.createElement(i, e) : a ? a(e) : null : "function" == typeof o ? o(e) : null)
            })
        }, n
    }(C.Component);

    function _t(t) {
        return "/" === t.charAt(0) ? t : "/" + t
    }

    function Lt(t) {
        return "string" == typeof t ? t : _(t)
    }

    function $t() {
        return function() {
            k(!1)
        }
    }

    function Ut() {}
    var Ft = function(o) {
            function t() {
                for (var n, t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return (n = o.call.apply(o, [this].concat(e)) || this).handlePush = function(t) {
                    return n.navigateTo(t, "PUSH")
                }, n.handleReplace = function(t) {
                    return n.navigateTo(t, "REPLACE")
                }, n.handleListen = function() {
                    return Ut
                }, n.handleBlock = function() {
                    return Ut
                }, n
            }
            c(t, o);
            var n = t.prototype;
            return n.navigateTo = function(t, n) {
                var e = this.props,
                    r = e.basename,
                    o = void 0 === r ? "" : r,
                    i = e.context,
                    a = void 0 === i ? {} : i;
                a.action = n, a.location = function(t, n) {
                    return t ? T({}, n, {
                        pathname: _t(t) + n.pathname
                    }) : n
                }(o, L(t)), a.url = Lt(a.location)
            }, n.render = function() {
                var t = this.props,
                    n = t.basename,
                    e = void 0 === n ? "" : n,
                    r = t.context,
                    o = void 0 === r ? {} : r,
                    i = t.location,
                    a = void 0 === i ? "/" : i,
                    c = et(t, ["basename", "context", "location"]),
                    u = {
                        createHref: function(t) {
                            return _t(e + Lt(t))
                        },
                        action: "POP",
                        location: function(t, n) {
                            if (!t) return n;
                            var e = _t(t);
                            return 0 !== n.pathname.indexOf(e) ? n : T({}, n, {
                                pathname: n.pathname.substr(e.length)
                            })
                        }(e, L(a)),
                        push: this.handlePush,
                        replace: this.handleReplace,
                        go: $t(),
                        goBack: $t(),
                        goForward: $t(),
                        listen: this.handleListen,
                        block: this.handleBlock
                    };
                return C.createElement(xt, T({}, c, {
                    history: u,
                    staticContext: o
                }))
            }, t
        }(C.Component),
        Nt = function(t) {
            function n() {
                return t.apply(this, arguments) || this
            }
            return c(n, t), n.prototype.render = function() {
                var t = this;
                return C.createElement(bt.Consumer, null, function(e) {
                    e || k(!1);
                    var r, o, i = t.props.location || e.location;
                    return C.Children.forEach(t.props.children, function(t) {
                        if (null == o && C.isValidElement(t)) {
                            var n = (r = t).props.path || t.props.from;
                            o = n ? Mt(i.pathname, T({}, t.props, {
                                path: n
                            })) : e.match
                        }
                    }), o ? C.cloneElement(r, {
                        location: i,
                        computedMatch: o
                    }) : null
                })
            }, n
        }(C.Component);
    var Ht = C.useContext;

    function It() {
        return Ht(bt).location
    }

    function Bt(t, n) {
        return "function" == typeof t ? t(n) : t
    }

    function Dt(t, n) {
        return "string" == typeof t ? L(t, null, null, n) : t
    }

    function Wt(t) {
        return t
    }
    var Vt = function(o) {
            function t() {
                for (var t, n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                return (t = o.call.apply(o, [this].concat(e)) || this).history = w(t.props), t
            }
            return c(t, o), t.prototype.render = function() {
                return C.createElement(xt, {
                    history: this.history,
                    children: this.props.children
                })
            }, t
        }(C.Component),
        zt = function(o) {
            function t() {
                for (var t, n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                return (t = o.call.apply(o, [this].concat(e)) || this).history = b(t.props), t
            }
            return c(t, o), t.prototype.render = function() {
                return C.createElement(xt, {
                    history: this.history,
                    children: this.props.children
                })
            }, t
        }(C.Component),
        qt = C.forwardRef;
    void 0 === qt && (qt = Wt);

    function Kt(t) {
        return t
    }
    var Jt = qt(function(t, n) {
            var e = t.innerRef,
                r = t.navigate,
                o = t.onClick,
                i = et(t, ["innerRef", "navigate", "onClick"]),
                a = i.target,
                c = T({}, i, {
                    onClick: function(n) {
                        try {
                            o && o(n)
                        } catch (t) {
                            throw n.preventDefault(), t
                        }
                        n.defaultPrevented || 0 !== n.button || a && "_self" !== a || function(t) {
                            return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
                        }(n) || (n.preventDefault(), r())
                    }
                });
            return c.ref = Wt !== qt && n || e, C.createElement("a", c)
        }),
        Gt = qt(function(t, i) {
            var n = t.component,
                a = void 0 === n ? Jt : n,
                c = t.replace,
                u = t.to,
                s = t.innerRef,
                f = et(t, ["component", "replace", "to", "innerRef"]);
            return C.createElement(bt.Consumer, null, function(e) {
                e || k(!1);
                var r = e.history,
                    t = Dt(Bt(u, e.location), e.location),
                    n = t ? r.createHref(t) : "",
                    o = T({}, f, {
                        href: n,
                        navigate: function() {
                            var t = Bt(u, e.location),
                                n = _(e.location) === _(Dt(t));
                            (c || n ? r.replace : r.push)(t)
                        }
                    });
                return Wt !== qt ? o.ref = i || s : o.innerRef = s, C.createElement(a, o)
            })
        }),
        Yt = C.forwardRef;
    void 0 === Yt && (Yt = Kt);
    var Qt = Yt(function(t, f) {
        var n = t["aria-current"],
            l = void 0 === n ? "page" : n,
            e = t.activeClassName,
            p = void 0 === e ? "active" : e,
            h = t.activeStyle,
            d = t.className,
            v = t.exact,
            y = t.isActive,
            m = t.location,
            g = t.sensitive,
            w = t.strict,
            b = t.style,
            x = t.to,
            P = t.innerRef,
            O = et(t, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
        return C.createElement(bt.Consumer, null, function(t) {
            t || k(!1);
            var n = m || t.location,
                e = Dt(Bt(x, n), n),
                r = e.pathname,
                o = r && r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
                i = o ? Mt(n.pathname, {
                    path: o,
                    exact: v,
                    sensitive: g,
                    strict: w
                }) : null,
                a = !!(y ? y(i, n) : i),
                c = "function" == typeof d ? d(a) : d,
                u = "function" == typeof b ? b(a) : b;
            a && (c = function() {
                for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                return n.filter(function(t) {
                    return t
                }).join(" ")
            }(c, p), u = T({}, u, h));
            var s = T({
                "aria-current": a && l || null,
                className: c,
                style: u,
                to: e
            }, O);
            return Kt !== Yt ? s.ref = f || P : s.innerRef = P, C.createElement(Gt, s)
        })
    });
    t.BrowserRouter = Vt, t.HashRouter = zt, t.Link = Gt, t.MemoryRouter = Pt, t.NavLink = Qt, t.Prompt = function(t) {
        var r = t.message,
            n = t.when,
            o = void 0 === n || n;
        return C.createElement(bt.Consumer, null, function(t) {
            if (t || k(!1), !o || t.staticContext) return null;
            var e = t.history.block;
            return C.createElement(Ot, {
                onMount: function(t) {
                    t.release = e(r)
                },
                onUpdate: function(t, n) {
                    n.message !== r && (t.release(), t.release = e(r))
                },
                onUnmount: function(t) {
                    t.release()
                },
                message: r
            })
        })
    }, t.Redirect = function(t) {
        var i = t.computedMatch,
            a = t.to,
            n = t.push,
            c = void 0 !== n && n;
        return C.createElement(bt.Consumer, null, function(t) {
            t || k(!1);
            var n = t.history,
                e = t.staticContext,
                r = c ? n.push : n.replace,
                o = L(i ? "string" == typeof a ? Rt(a, i.params) : T({}, a, {
                    pathname: Rt(a.pathname, i.params)
                }) : a);
            return e ? (r(o), null) : C.createElement(Ot, {
                onMount: function() {
                    r(o)
                },
                onUpdate: function(t, n) {
                    var e = L(n.to);
                    S(e, T({}, o, {
                        key: e.key
                    })) || r(o)
                },
                to: a
            })
        })
    }, t.Route = jt, t.Router = xt, t.StaticRouter = Ft, t.Switch = Nt, t.generatePath = Rt, t.matchPath = Mt, t.useHistory = function() {
        return Ht(wt)
    }, t.useLocation = It, t.useParams = function() {
        var t = Ht(bt).match;
        return t ? t.params : {}
    }, t.useRouteMatch = function(t) {
        var n = It(),
            e = Ht(bt).match;
        return t ? Mt(n.pathname, t) : e
    }, t.withRouter = function(r) {
        function t(t) {
            var n = t.wrappedComponentRef,
                e = et(t, ["wrappedComponentRef"]);
            return C.createElement(bt.Consumer, null, function(t) {
                return t || k(!1), C.createElement(r, T({}, e, t, {
                    ref: n
                }))
            })
        }
        var n = "withRouter(" + (r.displayName || r.name) + ")";
        return t.displayName = n, t.WrappedComponent = r, dt(t, r)
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=react-router-dom.min.js.map