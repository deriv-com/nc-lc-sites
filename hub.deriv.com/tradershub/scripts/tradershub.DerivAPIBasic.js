/*! For license information please see DerivAPIBasic.js.LICENSE.txt */ ! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.DerivAPIBasic = t() : e.DerivAPIBasic = t()
}("undefined" != typeof self ? self : this, (() => (() => {
    var e = {
            768: (e, t, r) => {
                "use strict";
                var n = r(604),
                    i = r(572),
                    o = i(n("String.prototype.indexOf"));
                e.exports = function(e, t) {
                    var r = n(e, !!t);
                    return "function" == typeof r && o(e, ".prototype.") > -1 ? i(r) : r
                }
            },
            572: (e, t, r) => {
                "use strict";
                var n = r(268),
                    i = r(604),
                    o = r(392),
                    s = r(556),
                    u = i("%Function.prototype.apply%"),
                    a = i("%Function.prototype.call%"),
                    c = i("%Reflect.apply%", !0) || n.call(a, u),
                    p = i("%Object.defineProperty%", !0),
                    d = i("%Math.max%");
                if (p) try {
                    p({}, "a", {
                        value: 1
                    })
                } catch (e) {
                    p = null
                }
                e.exports = function(e) {
                    if ("function" != typeof e) throw new s("a function is required");
                    var t = c(n, a, arguments);
                    return o(t, 1 + d(0, e.length - (arguments.length - 1)), !0)
                };
                var y = function() {
                    return c(n, u, arguments)
                };
                p ? p(e.exports, "apply", {
                    value: y
                }) : e.exports.apply = y
            },
            456: (e, t, r) => {
                "use strict";
                var n = r(188)(),
                    i = r(604),
                    o = n && i("%Object.defineProperty%", !0);
                if (o) try {
                    o({}, "a", {
                        value: 1
                    })
                } catch (e) {
                    o = !1
                }
                var s = r(668),
                    u = r(556),
                    a = r(872);
                e.exports = function(e, t, r) {
                    if (!e || "object" != typeof e && "function" != typeof e) throw new u("`obj` must be an object or a function`");
                    if ("string" != typeof t && "symbol" != typeof t) throw new u("`property` must be a string or a symbol`");
                    if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new u("`nonEnumerable`, if provided, must be a boolean or null");
                    if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new u("`nonWritable`, if provided, must be a boolean or null");
                    if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new u("`nonConfigurable`, if provided, must be a boolean or null");
                    if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new u("`loose`, if provided, must be a boolean");
                    var n = arguments.length > 3 ? arguments[3] : null,
                        i = arguments.length > 4 ? arguments[4] : null,
                        c = arguments.length > 5 ? arguments[5] : null,
                        p = arguments.length > 6 && arguments[6],
                        d = !!a && a(e, t);
                    if (o) o(e, t, {
                        configurable: null === c && d ? d.configurable : !c,
                        enumerable: null === n && d ? d.enumerable : !n,
                        value: r,
                        writable: null === i && d ? d.writable : !i
                    });
                    else {
                        if (!p && (n || i || c)) throw new s("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                        e[t] = r
                    }
                }
            },
            576: e => {
                "use strict";
                e.exports = EvalError
            },
            772: e => {
                "use strict";
                e.exports = Error
            },
            360: e => {
                "use strict";
                e.exports = RangeError
            },
            380: e => {
                "use strict";
                e.exports = ReferenceError
            },
            668: e => {
                "use strict";
                e.exports = SyntaxError
            },
            556: e => {
                "use strict";
                e.exports = TypeError
            },
            568: e => {
                "use strict";
                e.exports = URIError
            },
            840: e => {
                "use strict";
                var t = Object.prototype.toString,
                    r = Math.max,
                    n = function(e, t) {
                        for (var r = [], n = 0; n < e.length; n += 1) r[n] = e[n];
                        for (var i = 0; i < t.length; i += 1) r[i + e.length] = t[i];
                        return r
                    };
                e.exports = function(e) {
                    var i = this;
                    if ("function" != typeof i || "[object Function]" !== t.apply(i)) throw new TypeError("Function.prototype.bind called on incompatible " + i);
                    for (var o, s = function(e, t) {
                            for (var r = [], n = 1, i = 0; n < e.length; n += 1, i += 1) r[i] = e[n];
                            return r
                        }(arguments), u = r(0, i.length - s.length), a = [], c = 0; c < u; c++) a[c] = "$" + c;
                    if (o = Function("binder", "return function (" + function(e, t) {
                            for (var r = "", n = 0; n < e.length; n += 1) r += e[n], n + 1 < e.length && (r += ",");
                            return r
                        }(a) + "){ return binder.apply(this,arguments); }")((function() {
                            if (this instanceof o) {
                                var t = i.apply(this, n(s, arguments));
                                return Object(t) === t ? t : this
                            }
                            return i.apply(e, n(s, arguments))
                        })), i.prototype) {
                        var p = function() {};
                        p.prototype = i.prototype, o.prototype = new p, p.prototype = null
                    }
                    return o
                }
            },
            268: (e, t, r) => {
                "use strict";
                var n = r(840);
                e.exports = Function.prototype.bind || n
            },
            604: (e, t, r) => {
                "use strict";
                var n, i = r(772),
                    o = r(576),
                    s = r(360),
                    u = r(380),
                    a = r(668),
                    c = r(556),
                    p = r(568),
                    d = Function,
                    y = function(e) {
                        try {
                            return d('"use strict"; return (' + e + ").constructor;")()
                        } catch (e) {}
                    },
                    l = Object.getOwnPropertyDescriptor;
                if (l) try {
                    l({}, "")
                } catch (e) {
                    l = null
                }
                var f = function() {
                        throw new c
                    },
                    h = l ? function() {
                        try {
                            return f
                        } catch (e) {
                            try {
                                return l(arguments, "callee").get
                            } catch (e) {
                                return f
                            }
                        }
                    }() : f,
                    g = r(308)(),
                    _ = r(608)(),
                    m = Object.getPrototypeOf || (_ ? function(e) {
                        return e.__proto__
                    } : null),
                    v = {},
                    b = "undefined" != typeof Uint8Array && m ? m(Uint8Array) : n,
                    q = {
                        __proto__: null,
                        "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError,
                        "%Array%": Array,
                        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
                        "%ArrayIteratorPrototype%": g && m ? m([][Symbol.iterator]()) : n,
                        "%AsyncFromSyncIteratorPrototype%": n,
                        "%AsyncFunction%": v,
                        "%AsyncGenerator%": v,
                        "%AsyncGeneratorFunction%": v,
                        "%AsyncIteratorPrototype%": v,
                        "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
                        "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
                        "%BigInt64Array%": "undefined" == typeof BigInt64Array ? n : BigInt64Array,
                        "%BigUint64Array%": "undefined" == typeof BigUint64Array ? n : BigUint64Array,
                        "%Boolean%": Boolean,
                        "%DataView%": "undefined" == typeof DataView ? n : DataView,
                        "%Date%": Date,
                        "%decodeURI%": decodeURI,
                        "%decodeURIComponent%": decodeURIComponent,
                        "%encodeURI%": encodeURI,
                        "%encodeURIComponent%": encodeURIComponent,
                        "%Error%": i,
                        "%eval%": eval,
                        "%EvalError%": o,
                        "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array,
                        "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array,
                        "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry,
                        "%Function%": d,
                        "%GeneratorFunction%": v,
                        "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
                        "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
                        "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
                        "%isFinite%": isFinite,
                        "%isNaN%": isNaN,
                        "%IteratorPrototype%": g && m ? m(m([][Symbol.iterator]())) : n,
                        "%JSON%": "object" == typeof JSON ? JSON : n,
                        "%Map%": "undefined" == typeof Map ? n : Map,
                        "%MapIteratorPrototype%": "undefined" != typeof Map && g && m ? m((new Map)[Symbol.iterator]()) : n,
                        "%Math%": Math,
                        "%Number%": Number,
                        "%Object%": Object,
                        "%parseFloat%": parseFloat,
                        "%parseInt%": parseInt,
                        "%Promise%": "undefined" == typeof Promise ? n : Promise,
                        "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
                        "%RangeError%": s,
                        "%ReferenceError%": u,
                        "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
                        "%RegExp%": RegExp,
                        "%Set%": "undefined" == typeof Set ? n : Set,
                        "%SetIteratorPrototype%": "undefined" != typeof Set && g && m ? m((new Set)[Symbol.iterator]()) : n,
                        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
                        "%String%": String,
                        "%StringIteratorPrototype%": g && m ? m("" [Symbol.iterator]()) : n,
                        "%Symbol%": g ? Symbol : n,
                        "%SyntaxError%": a,
                        "%ThrowTypeError%": h,
                        "%TypedArray%": b,
                        "%TypeError%": c,
                        "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
                        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
                        "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
                        "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
                        "%URIError%": p,
                        "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
                        "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
                        "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet
                    };
                if (m) try {
                    null.error
                } catch (e) {
                    var w = m(m(e));
                    q["%Error.prototype%"] = w
                }
                var k = function e(t) {
                        var r;
                        if ("%AsyncFunction%" === t) r = y("async function () {}");
                        else if ("%GeneratorFunction%" === t) r = y("function* () {}");
                        else if ("%AsyncGeneratorFunction%" === t) r = y("async function* () {}");
                        else if ("%AsyncGenerator%" === t) {
                            var n = e("%AsyncGeneratorFunction%");
                            n && (r = n.prototype)
                        } else if ("%AsyncIteratorPrototype%" === t) {
                            var i = e("%AsyncGenerator%");
                            i && m && (r = m(i.prototype))
                        }
                        return q[t] = r, r
                    },
                    A = {
                        __proto__: null,
                        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                        "%ArrayPrototype%": ["Array", "prototype"],
                        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                        "%ArrayProto_values%": ["Array", "prototype", "values"],
                        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                        "%BooleanPrototype%": ["Boolean", "prototype"],
                        "%DataViewPrototype%": ["DataView", "prototype"],
                        "%DatePrototype%": ["Date", "prototype"],
                        "%ErrorPrototype%": ["Error", "prototype"],
                        "%EvalErrorPrototype%": ["EvalError", "prototype"],
                        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                        "%FunctionPrototype%": ["Function", "prototype"],
                        "%Generator%": ["GeneratorFunction", "prototype"],
                        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                        "%JSONParse%": ["JSON", "parse"],
                        "%JSONStringify%": ["JSON", "stringify"],
                        "%MapPrototype%": ["Map", "prototype"],
                        "%NumberPrototype%": ["Number", "prototype"],
                        "%ObjectPrototype%": ["Object", "prototype"],
                        "%ObjProto_toString%": ["Object", "prototype", "toString"],
                        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                        "%PromisePrototype%": ["Promise", "prototype"],
                        "%PromiseProto_then%": ["Promise", "prototype", "then"],
                        "%Promise_all%": ["Promise", "all"],
                        "%Promise_reject%": ["Promise", "reject"],
                        "%Promise_resolve%": ["Promise", "resolve"],
                        "%RangeErrorPrototype%": ["RangeError", "prototype"],
                        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                        "%RegExpPrototype%": ["RegExp", "prototype"],
                        "%SetPrototype%": ["Set", "prototype"],
                        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                        "%StringPrototype%": ["String", "prototype"],
                        "%SymbolPrototype%": ["Symbol", "prototype"],
                        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                        "%TypeErrorPrototype%": ["TypeError", "prototype"],
                        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                        "%URIErrorPrototype%": ["URIError", "prototype"],
                        "%WeakMapPrototype%": ["WeakMap", "prototype"],
                        "%WeakSetPrototype%": ["WeakSet", "prototype"]
                    },
                    x = r(268),
                    S = r(176),
                    O = x.call(Function.call, Array.prototype.concat),
                    R = x.call(Function.apply, Array.prototype.splice),
                    P = x.call(Function.call, String.prototype.replace),
                    M = x.call(Function.call, String.prototype.slice),
                    j = x.call(Function.call, RegExp.prototype.exec),
                    E = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                    I = /\\(\\)?/g,
                    T = function(e, t) {
                        var r, n = e;
                        if (S(A, n) && (n = "%" + (r = A[n])[0] + "%"), S(q, n)) {
                            var i = q[n];
                            if (i === v && (i = k(n)), void 0 === i && !t) throw new c("intrinsic " + e + " exists, but is not available. Please file an issue!");
                            return {
                                alias: r,
                                name: n,
                                value: i
                            }
                        }
                        throw new a("intrinsic " + e + " does not exist!")
                    };
                e.exports = function(e, t) {
                    if ("string" != typeof e || 0 === e.length) throw new c("intrinsic name must be a non-empty string");
                    if (arguments.length > 1 && "boolean" != typeof t) throw new c('"allowMissing" argument must be a boolean');
                    if (null === j(/^%?[^%]*%?$/, e)) throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                    var r = function(e) {
                            var t = M(e, 0, 1),
                                r = M(e, -1);
                            if ("%" === t && "%" !== r) throw new a("invalid intrinsic syntax, expected closing `%`");
                            if ("%" === r && "%" !== t) throw new a("invalid intrinsic syntax, expected opening `%`");
                            var n = [];
                            return P(e, E, (function(e, t, r, i) {
                                n[n.length] = r ? P(i, I, "$1") : t || e
                            })), n
                        }(e),
                        n = r.length > 0 ? r[0] : "",
                        i = T("%" + n + "%", t),
                        o = i.name,
                        s = i.value,
                        u = !1,
                        p = i.alias;
                    p && (n = p[0], R(r, O([0, 1], p)));
                    for (var d = 1, y = !0; d < r.length; d += 1) {
                        var f = r[d],
                            h = M(f, 0, 1),
                            g = M(f, -1);
                        if (('"' === h || "'" === h || "`" === h || '"' === g || "'" === g || "`" === g) && h !== g) throw new a("property names with quotes must have matching quotes");
                        if ("constructor" !== f && y || (u = !0), S(q, o = "%" + (n += "." + f) + "%")) s = q[o];
                        else if (null != s) {
                            if (!(f in s)) {
                                if (!t) throw new c("base intrinsic for " + e + " exists, but the property is not available.");
                                return
                            }
                            if (l && d + 1 >= r.length) {
                                var _ = l(s, f);
                                s = (y = !!_) && "get" in _ && !("originalValue" in _.get) ? _.get : s[f]
                            } else y = S(s, f), s = s[f];
                            y && !u && (q[o] = s)
                        }
                    }
                    return s
                }
            },
            872: (e, t, r) => {
                "use strict";
                var n = r(604)("%Object.getOwnPropertyDescriptor%", !0);
                if (n) try {
                    n([], "length")
                } catch (e) {
                    n = null
                }
                e.exports = n
            },
            188: (e, t, r) => {
                "use strict";
                var n = r(604)("%Object.defineProperty%", !0),
                    i = function() {
                        if (n) try {
                            return n({}, "a", {
                                value: 1
                            }), !0
                        } catch (e) {
                            return !1
                        }
                        return !1
                    };
                i.hasArrayLengthDefineBug = function() {
                    if (!i()) return null;
                    try {
                        return 1 !== n([], "length", {
                            value: 1
                        }).length
                    } catch (e) {
                        return !0
                    }
                }, e.exports = i
            },
            608: e => {
                "use strict";
                var t = {
                        foo: {}
                    },
                    r = Object;
                e.exports = function() {
                    return {
                        __proto__: t
                    }.foo === t.foo && !({
                            __proto__: null
                        }
                        instanceof r)
                }
            },
            308: (e, t, r) => {
                "use strict";
                var n = "undefined" != typeof Symbol && Symbol,
                    i = r(968);
                e.exports = function() {
                    return "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && i()
                }
            },
            968: e => {
                "use strict";
                e.exports = function() {
                    if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                    if ("symbol" == typeof Symbol.iterator) return !0;
                    var e = {},
                        t = Symbol("test"),
                        r = Object(t);
                    if ("string" == typeof t) return !1;
                    if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
                    if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                    for (t in e[t] = 42, e) return !1;
                    if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
                    if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
                    var n = Object.getOwnPropertySymbols(e);
                    if (1 !== n.length || n[0] !== t) return !1;
                    if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
                    if ("function" == typeof Object.getOwnPropertyDescriptor) {
                        var i = Object.getOwnPropertyDescriptor(e, t);
                        if (42 !== i.value || !0 !== i.enumerable) return !1
                    }
                    return !0
                }
            },
            176: (e, t, r) => {
                "use strict";
                var n = Function.prototype.call,
                    i = Object.prototype.hasOwnProperty,
                    o = r(268);
                e.exports = o.call(n, i)
            },
            600: e => {
                var t = {}.toString;
                e.exports = Array.isArray || function(e) {
                    return "[object Array]" == t.call(e)
                }
            },
            532: (e, t, r) => {
                "use strict";
                var n = ("undefined" != typeof JSON ? JSON : r(0)).stringify,
                    i = r(600),
                    o = r(56),
                    s = r(572),
                    u = r(768),
                    a = u("Array.prototype.join"),
                    c = u("Array.prototype.push"),
                    p = function(e, t) {
                        for (var r = "", n = 0; n < e; n += 1) r += t;
                        return r
                    },
                    d = function(e, t, r) {
                        return r
                    };
                e.exports = function(e) {
                    var t = arguments.length > 1 ? arguments[1] : void 0,
                        r = t && t.space || "";
                    "number" == typeof r && (r = p(r, " "));
                    var u = !!t && "boolean" == typeof t.cycles && t.cycles,
                        y = t && t.replacer ? s(t.replacer) : d,
                        l = "function" == typeof t ? t : t && t.cmp,
                        f = l && function(e) {
                            var t = l.length > 2 && function(t) {
                                return e[t]
                            };
                            return function(r, n) {
                                return l({
                                    key: r,
                                    value: e[r]
                                }, {
                                    key: n,
                                    value: e[n]
                                }, t ? {
                                    __proto__: null,
                                    get: t
                                } : void 0)
                            }
                        },
                        h = [];
                    return function e(t, s, d, l) {
                        var g = r ? "\n" + p(l, r) : "",
                            _ = r ? ": " : ":";
                        if (d && d.toJSON && "function" == typeof d.toJSON && (d = d.toJSON()), void 0 !== (d = y(t, s, d))) {
                            if ("object" != typeof d || null === d) return n(d);
                            if (i(d)) {
                                for (var m = [], v = 0; v < d.length; v++) {
                                    var b = e(d, v, d[v], l + 1) || n(null);
                                    c(m, g + r + b)
                                }
                                return "[" + a(m, ",") + g + "]"
                            }
                            if (-1 !== h.indexOf(d)) {
                                if (u) return n("__cycle__");
                                throw new TypeError("Converting circular structure to JSON")
                            }
                            c(h, d);
                            var q = o(d).sort(f && f(d));
                            for (m = [], v = 0; v < q.length; v++) {
                                var w = e(d, s = q[v], d[s], l + 1);
                                if (w) {
                                    var k = n(s) + _ + w;
                                    c(m, g + r + k)
                                }
                            }
                            return h.splice(h.indexOf(d), 1), "{" + a(m, ",") + g + "}"
                        }
                    }({
                        "": e
                    }, "", e, 0)
                }
            },
            0: (e, t, r) => {
                "use strict";
                t.parse = r(960), t.stringify = r(136)
            },
            960: e => {
                "use strict";
                var t, r, n, i = {
                    '"': '"',
                    "\\": "\\",
                    "/": "/",
                    b: "\b",
                    f: "\f",
                    n: "\n",
                    r: "\r",
                    t: "\t"
                };

                function o(e) {
                    throw {
                        name: "SyntaxError",
                        message: e,
                        at: t,
                        text: n
                    }
                }

                function s(e) {
                    return e && e !== r && o("Expected '" + e + "' instead of '" + r + "'"), r = n.charAt(t), t += 1, r
                }

                function u() {
                    var e, t = "";
                    for ("-" === r && (t = "-", s("-")); r >= "0" && r <= "9";) t += r, s();
                    if ("." === r)
                        for (t += "."; s() && r >= "0" && r <= "9";) t += r;
                    if ("e" === r || "E" === r)
                        for (t += r, s(), "-" !== r && "+" !== r || (t += r, s()); r >= "0" && r <= "9";) t += r, s();
                    return e = Number(t), isFinite(e) || o("Bad number"), e
                }

                function a() {
                    var e, t, n, u = "";
                    if ('"' === r)
                        for (; s();) {
                            if ('"' === r) return s(), u;
                            if ("\\" === r)
                                if (s(), "u" === r) {
                                    for (n = 0, t = 0; t < 4 && (e = parseInt(s(), 16), isFinite(e)); t += 1) n = 16 * n + e;
                                    u += String.fromCharCode(n)
                                } else {
                                    if ("string" != typeof i[r]) break;
                                    u += i[r]
                                }
                            else u += r
                        }
                    o("Bad string")
                }

                function c() {
                    for (; r && r <= " ";) s()
                }

                function p() {
                    switch (c(), r) {
                        case "{":
                            return function() {
                                var e, t = {};
                                if ("{" === r) {
                                    if (s("{"), c(), "}" === r) return s("}"), t;
                                    for (; r;) {
                                        if (e = a(), c(), s(":"), Object.prototype.hasOwnProperty.call(t, e) && o('Duplicate key "' + e + '"'), t[e] = p(), c(), "}" === r) return s("}"), t;
                                        s(","), c()
                                    }
                                }
                                o("Bad object")
                            }();
                        case "[":
                            return function() {
                                var e = [];
                                if ("[" === r) {
                                    if (s("["), c(), "]" === r) return s("]"), e;
                                    for (; r;) {
                                        if (e.push(p()), c(), "]" === r) return s("]"), e;
                                        s(","), c()
                                    }
                                }
                                o("Bad array")
                            }();
                        case '"':
                            return a();
                        case "-":
                            return u();
                        default:
                            return r >= "0" && r <= "9" ? u() : function() {
                                switch (r) {
                                    case "t":
                                        return s("t"), s("r"), s("u"), s("e"), !0;
                                    case "f":
                                        return s("f"), s("a"), s("l"), s("s"), s("e"), !1;
                                    case "n":
                                        return s("n"), s("u"), s("l"), s("l"), null;
                                    default:
                                        o("Unexpected '" + r + "'")
                                }
                            }()
                    }
                }
                e.exports = function(e, i) {
                    var s;
                    return n = e, t = 0, r = " ", s = p(), c(), r && o("Syntax error"), "function" == typeof i ? function e(t, r) {
                        var n, o, s = t[r];
                        if (s && "object" == typeof s)
                            for (n in p) Object.prototype.hasOwnProperty.call(s, n) && (void 0 === (o = e(s, n)) ? delete s[n] : s[n] = o);
                        return i.call(t, r, s)
                    }({
                        "": s
                    }, "") : s
                }
            },
            136: e => {
                "use strict";
                var t, r, n, i = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    o = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    };

                function s(e) {
                    return i.lastIndex = 0, i.test(e) ? '"' + e.replace(i, (function(e) {
                        var t = o[e];
                        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    })) + '"' : '"' + e + '"'
                }

                function u(e, i) {
                    var o, a, c, p, d, y = t,
                        l = i[e];
                    switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof n && (l = n.call(i, e, l)), typeof l) {
                        case "string":
                            return s(l);
                        case "number":
                            return isFinite(l) ? String(l) : "null";
                        case "boolean":
                        case "null":
                            return String(l);
                        case "object":
                            if (!l) return "null";
                            if (t += r, d = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                                for (p = l.length, o = 0; o < p; o += 1) d[o] = u(o, l) || "null";
                                return c = 0 === d.length ? "[]" : t ? "[\n" + t + d.join(",\n" + t) + "\n" + y + "]" : "[" + d.join(",") + "]", t = y, c
                            }
                            if (n && "object" == typeof n)
                                for (p = n.length, o = 0; o < p; o += 1) "string" == typeof(a = n[o]) && (c = u(a, l)) && d.push(s(a) + (t ? ": " : ":") + c);
                            else
                                for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (c = u(a, l)) && d.push(s(a) + (t ? ": " : ":") + c);
                            return c = 0 === d.length ? "{}" : t ? "{\n" + t + d.join(",\n" + t) + "\n" + y + "}" : "{" + d.join(",") + "}", t = y, c
                    }
                }
                e.exports = function(e, i, o) {
                    var s;
                    if (t = "", r = "", "number" == typeof o)
                        for (s = 0; s < o; s += 1) r += " ";
                    else "string" == typeof o && (r = o);
                    if (n = i, i && "function" != typeof i && ("object" != typeof i || "number" != typeof i.length)) throw new Error("JSON.stringify");
                    return u("", {
                        "": e
                    })
                }
            },
            816: (e, t, r) => {
                "use strict";
                var n;
                if (!Object.keys) {
                    var i = Object.prototype.hasOwnProperty,
                        o = Object.prototype.toString,
                        s = r(428),
                        u = Object.prototype.propertyIsEnumerable,
                        a = !u.call({
                            toString: null
                        }, "toString"),
                        c = u.call((function() {}), "prototype"),
                        p = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        d = function(e) {
                            var t = e.constructor;
                            return t && t.prototype === e
                        },
                        y = {
                            $applicationCache: !0,
                            $console: !0,
                            $external: !0,
                            $frame: !0,
                            $frameElement: !0,
                            $frames: !0,
                            $innerHeight: !0,
                            $innerWidth: !0,
                            $onmozfullscreenchange: !0,
                            $onmozfullscreenerror: !0,
                            $outerHeight: !0,
                            $outerWidth: !0,
                            $pageXOffset: !0,
                            $pageYOffset: !0,
                            $parent: !0,
                            $scrollLeft: !0,
                            $scrollTop: !0,
                            $scrollX: !0,
                            $scrollY: !0,
                            $self: !0,
                            $webkitIndexedDB: !0,
                            $webkitStorageInfo: !0,
                            $window: !0
                        },
                        l = function() {
                            if ("undefined" == typeof window) return !1;
                            for (var e in window) try {
                                if (!y["$" + e] && i.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                                    d(window[e])
                                } catch (e) {
                                    return !0
                                }
                            } catch (e) {
                                return !0
                            }
                            return !1
                        }();
                    n = function(e) {
                        var t = null !== e && "object" == typeof e,
                            r = "[object Function]" === o.call(e),
                            n = s(e),
                            u = t && "[object String]" === o.call(e),
                            y = [];
                        if (!t && !r && !n) throw new TypeError("Object.keys called on a non-object");
                        var f = c && r;
                        if (u && e.length > 0 && !i.call(e, 0))
                            for (var h = 0; h < e.length; ++h) y.push(String(h));
                        if (n && e.length > 0)
                            for (var g = 0; g < e.length; ++g) y.push(String(g));
                        else
                            for (var _ in e) f && "prototype" === _ || !i.call(e, _) || y.push(String(_));
                        if (a)
                            for (var m = function(e) {
                                    if ("undefined" == typeof window || !l) return d(e);
                                    try {
                                        return d(e)
                                    } catch (e) {
                                        return !1
                                    }
                                }(e), v = 0; v < p.length; ++v) m && "constructor" === p[v] || !i.call(e, p[v]) || y.push(p[v]);
                        return y
                    }
                }
                e.exports = n
            },
            56: (e, t, r) => {
                "use strict";
                var n = Array.prototype.slice,
                    i = r(428),
                    o = Object.keys,
                    s = o ? function(e) {
                        return o(e)
                    } : r(816),
                    u = Object.keys;
                s.shim = function() {
                    if (Object.keys) {
                        var e = function() {
                            var e = Object.keys(arguments);
                            return e && e.length === arguments.length
                        }(1, 2);
                        e || (Object.keys = function(e) {
                            return i(e) ? u(n.call(e)) : u(e)
                        })
                    } else Object.keys = s;
                    return Object.keys || s
                }, e.exports = s
            },
            428: e => {
                "use strict";
                var t = Object.prototype.toString;
                e.exports = function(e) {
                    var r = t.call(e),
                        n = "[object Arguments]" === r;
                    return n || (n = "[object Array]" !== r && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), n
                }
            },
            392: (e, t, r) => {
                "use strict";
                var n = r(604),
                    i = r(456),
                    o = r(188)(),
                    s = r(872),
                    u = r(556),
                    a = n("%Math.floor%");
                e.exports = function(e, t) {
                    if ("function" != typeof e) throw new u("`fn` is not a function");
                    if ("number" != typeof t || t < 0 || t > 4294967295 || a(t) !== t) throw new u("`length` must be a positive 32-bit integer");
                    var r = arguments.length > 2 && !!arguments[2],
                        n = !0,
                        c = !0;
                    if ("length" in e && s) {
                        var p = s(e, "length");
                        p && !p.configurable && (n = !1), p && !p.writable && (c = !1)
                    }
                    return (n || c || !r) && (o ? i(e, "length", t, !0, !0) : i(e, "length", t)), e
                }
            },
            636: (e, t, r) => {
                var n = r(848).default;

                function i() {
                    "use strict";
                    e.exports = i = function() {
                        return r
                    }, e.exports.__esModule = !0, e.exports.default = e.exports;
                    var t, r = {},
                        o = Object.prototype,
                        s = o.hasOwnProperty,
                        u = Object.defineProperty || function(e, t, r) {
                            e[t] = r.value
                        },
                        a = "function" == typeof Symbol ? Symbol : {},
                        c = a.iterator || "@@iterator",
                        p = a.asyncIterator || "@@asyncIterator",
                        d = a.toStringTag || "@@toStringTag";

                    function y(e, t, r) {
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        y({}, "")
                    } catch (t) {
                        y = function(e, t, r) {
                            return e[t] = r
                        }
                    }

                    function l(e, t, r, n) {
                        var i = t && t.prototype instanceof b ? t : b,
                            o = Object.create(i.prototype),
                            s = new I(n || []);
                        return u(o, "_invoke", {
                            value: P(e, r, s)
                        }), o
                    }

                    function f(e, t, r) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, r)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    r.wrap = l;
                    var h = "suspendedStart",
                        g = "suspendedYield",
                        _ = "executing",
                        m = "completed",
                        v = {};

                    function b() {}

                    function q() {}

                    function w() {}
                    var k = {};
                    y(k, c, (function() {
                        return this
                    }));
                    var A = Object.getPrototypeOf,
                        x = A && A(A(T([])));
                    x && x !== o && s.call(x, c) && (k = x);
                    var S = w.prototype = b.prototype = Object.create(k);

                    function O(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            y(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function R(e, t) {
                        function r(i, o, u, a) {
                            var c = f(e[i], e, o);
                            if ("throw" !== c.type) {
                                var p = c.arg,
                                    d = p.value;
                                return d && "object" == n(d) && s.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                    r("next", e, u, a)
                                }), (function(e) {
                                    r("throw", e, u, a)
                                })) : t.resolve(d).then((function(e) {
                                    p.value = e, u(p)
                                }), (function(e) {
                                    return r("throw", e, u, a)
                                }))
                            }
                            a(c.arg)
                        }
                        var i;
                        u(this, "_invoke", {
                            value: function(e, n) {
                                function o() {
                                    return new t((function(t, i) {
                                        r(e, n, t, i)
                                    }))
                                }
                                return i = i ? i.then(o, o) : o()
                            }
                        })
                    }

                    function P(e, r, n) {
                        var i = h;
                        return function(o, s) {
                            if (i === _) throw new Error("Generator is already running");
                            if (i === m) {
                                if ("throw" === o) throw s;
                                return {
                                    value: t,
                                    done: !0
                                }
                            }
                            for (n.method = o, n.arg = s;;) {
                                var u = n.delegate;
                                if (u) {
                                    var a = M(u, n);
                                    if (a) {
                                        if (a === v) continue;
                                        return a
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (i === h) throw i = m, n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                i = _;
                                var c = f(e, r, n);
                                if ("normal" === c.type) {
                                    if (i = n.done ? m : g, c.arg === v) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (i = m, n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }

                    function M(e, r) {
                        var n = r.method,
                            i = e.iterator[n];
                        if (i === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, M(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
                        var o = f(i, e.iterator, r.arg);
                        if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, v;
                        var s = o.arg;
                        return s ? s.done ? (r[e.resultName] = s.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : s : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                    }

                    function j(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function E(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function I(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(j, this), this.reset(!0)
                    }

                    function T(e) {
                        if (e || "" === e) {
                            var r = e[c];
                            if (r) return r.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var i = -1,
                                    o = function r() {
                                        for (; ++i < e.length;)
                                            if (s.call(e, i)) return r.value = e[i], r.done = !1, r;
                                        return r.value = t, r.done = !0, r
                                    };
                                return o.next = o
                            }
                        }
                        throw new TypeError(n(e) + " is not iterable")
                    }
                    return q.prototype = w, u(S, "constructor", {
                        value: w,
                        configurable: !0
                    }), u(w, "constructor", {
                        value: q,
                        configurable: !0
                    }), q.displayName = y(w, d, "GeneratorFunction"), r.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === q || "GeneratorFunction" === (t.displayName || t.name))
                    }, r.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w, y(e, d, "GeneratorFunction")), e.prototype = Object.create(S), e
                    }, r.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, O(R.prototype), y(R.prototype, p, (function() {
                        return this
                    })), r.AsyncIterator = R, r.async = function(e, t, n, i, o) {
                        void 0 === o && (o = Promise);
                        var s = new R(l(e, t, n, i), o);
                        return r.isGeneratorFunction(t) ? s : s.next().then((function(e) {
                            return e.done ? e.value : s.next()
                        }))
                    }, O(S), y(S, d, "Generator"), y(S, c, (function() {
                        return this
                    })), y(S, "toString", (function() {
                        return "[object Generator]"
                    })), r.keys = function(e) {
                        var t = Object(e),
                            r = [];
                        for (var n in t) r.push(n);
                        return r.reverse(),
                            function e() {
                                for (; r.length;) {
                                    var n = r.pop();
                                    if (n in t) return e.value = n, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, r.values = T, I.prototype = {
                        constructor: I,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(E), !e)
                                for (var r in this) "t" === r.charAt(0) && s.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var r = this;

                            function n(n, i) {
                                return u.type = "throw", u.arg = e, r.next = n, i && (r.method = "next", r.arg = t), !!i
                            }
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var o = this.tryEntries[i],
                                    u = o.completion;
                                if ("root" === o.tryLoc) return n("end");
                                if (o.tryLoc <= this.prev) {
                                    var a = s.call(o, "catchLoc"),
                                        c = s.call(o, "finallyLoc");
                                    if (a && c) {
                                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                    } else if (a) {
                                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var n = this.tryEntries[r];
                                if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                    var i = n;
                                    break
                                }
                            }
                            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                            var o = i ? i.completion : {};
                            return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(o)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), E(r), v
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var i = n.arg;
                                        E(r)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, r, n) {
                            return this.delegate = {
                                iterator: T(e),
                                resultName: r,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = t), v
                        }
                    }, r
                }
                e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            848: e => {
                function t(r) {
                    return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r)
                }
                e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            248: (e, t, r) => {
                var n = r(636)();
                e.exports = n;
                try {
                    regeneratorRuntime = n
                } catch (e) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
                }
            }
        },
        t = {};

    function r(n) {
        var i = t[n];
        if (void 0 !== i) return i.exports;
        var o = t[n] = {
            exports: {}
        };
        return e[n](o, o.exports, r), o.exports
    }
    r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t
    }, r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var n = {};
    return (() => {
        "use strict";

        function e(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n
        }

        function t(e) {
            return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, t(e)
        }

        function i(e, t, r, n, i, o, s) {
            try {
                var u = e[o](s),
                    a = u.value
            } catch (e) {
                return void r(e)
            }
            u.done ? t(a) : Promise.resolve(a).then(n, i)
        }

        function o(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise((function(n, o) {
                    var s = e.apply(t, r);

                    function u(e) {
                        i(s, n, o, u, a, "next", e)
                    }

                    function a(e) {
                        i(s, n, o, u, a, "throw", e)
                    }
                    u(void 0)
                }))
            }
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function u(e) {
            var r = function(e, r) {
                if ("object" != t(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(e, "string");
                    if ("object" != t(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == t(r) ? r : String(r)
        }

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, u(n.key), n)
            }
        }

        function c(e, t, r) {
            return t && a(e.prototype, t), r && a(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e
        }

        function p(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function d(e, r) {
            if (r && ("object" === t(r) || "function" == typeof r)) return r;
            if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
            return p(e)
        }

        function y(e) {
            return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, y(e)
        }

        function l(e, t) {
            return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, l(e, t)
        }

        function f(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t && l(e, t)
        }
        r.d(n, {
            default: () => We
        });
        var h = r(248),
            g = r.n(h);

        function _(e) {
            var t = e((function(e) {
                Error.call(e), e.stack = (new Error).stack
            }));
            return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
        }
        var m = _((function(e) {
            return function() {
                e(this), this.name = "EmptyError", this.message = "no elements in sequence"
            }
        }));

        function v(e) {
            return "function" == typeof e
        }

        function b(e) {
            return function(t) {
                if (function(e) {
                        return v(null == e ? void 0 : e.lift)
                    }(t)) return t.lift((function(t) {
                    try {
                        return e(t, this)
                    } catch (e) {
                        this.error(e)
                    }
                }));
                throw new TypeError("Unable to lift unknown Observable type")
            }
        }
        var q = function(e, t) {
            return q = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }, q(e, t)
        };

        function w(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

            function r() {
                this.constructor = e
            }
            q(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }

        function k(e, t) {
            var r, n, i, o, s = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function u(u) {
                return function(a) {
                    return function(u) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; o && (o = 0, u[0] && (s = 0)), s;) try {
                            if (r = 1, n && (i = 2 & u[0] ? n.return : u[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, u[1])).done) return i;
                            switch (n = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                                case 0:
                                case 1:
                                    i = u;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: u[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, n = u[1], u = [0];
                                    continue;
                                case 7:
                                    u = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                        s.label = u[1];
                                        break
                                    }
                                    if (6 === u[0] && s.label < i[1]) {
                                        s.label = i[1], i = u;
                                        break
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2], s.ops.push(u);
                                        break
                                    }
                                    i[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            u = t.call(e, s)
                        } catch (e) {
                            u = [6, e], n = 0
                        } finally {
                            r = i = 0
                        }
                        if (5 & u[0]) throw u[1];
                        return {
                            value: u[0] ? u[1] : void 0,
                            done: !0
                        }
                    }([u, a])
                }
            }
        }

        function A(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                r = t && e[t],
                n = 0;
            if (r) return r.call(e);
            if (e && "number" == typeof e.length) return {
                next: function() {
                    return e && n >= e.length && (e = void 0), {
                        value: e && e[n++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function x(e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var n, i, o = r.call(e),
                s = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(n = o.next()).done;) s.push(n.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        }

        function S(e, t, r) {
            if (r || 2 === arguments.length)
                for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
            return e.concat(n || Array.prototype.slice.call(t))
        }

        function O(e) {
            return this instanceof O ? (this.v = e, this) : new O(e)
        }
        Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
        var R = _((function(e) {
            return function(t) {
                e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(e, t) {
                    return t + 1 + ") " + e.toString()
                })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t
            }
        }));

        function P(e, t) {
            if (e) {
                var r = e.indexOf(t);
                0 <= r && e.splice(r, 1)
            }
        }
        var M = function() {
                function e(e) {
                    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
                }
                return e.prototype.unsubscribe = function() {
                    var e, t, r, n, i;
                    if (!this.closed) {
                        this.closed = !0;
                        var o = this._parentage;
                        if (o)
                            if (this._parentage = null, Array.isArray(o)) try {
                                for (var s = A(o), u = s.next(); !u.done; u = s.next()) u.value.remove(this)
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    u && !u.done && (t = s.return) && t.call(s)
                                } finally {
                                    if (e) throw e.error
                                }
                            } else o.remove(this);
                        var a = this.initialTeardown;
                        if (v(a)) try {
                            a()
                        } catch (e) {
                            i = e instanceof R ? e.errors : [e]
                        }
                        var c = this._finalizers;
                        if (c) {
                            this._finalizers = null;
                            try {
                                for (var p = A(c), d = p.next(); !d.done; d = p.next()) {
                                    var y = d.value;
                                    try {
                                        I(y)
                                    } catch (e) {
                                        i = null != i ? i : [], e instanceof R ? i = S(S([], x(i)), x(e.errors)) : i.push(e)
                                    }
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    d && !d.done && (n = p.return) && n.call(p)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                        if (i) throw new R(i)
                    }
                }, e.prototype.add = function(t) {
                    var r;
                    if (t && t !== this)
                        if (this.closed) I(t);
                        else {
                            if (t instanceof e) {
                                if (t.closed || t._hasParent(this)) return;
                                t._addParent(this)
                            }(this._finalizers = null !== (r = this._finalizers) && void 0 !== r ? r : []).push(t)
                        }
                }, e.prototype._hasParent = function(e) {
                    var t = this._parentage;
                    return t === e || Array.isArray(t) && t.includes(e)
                }, e.prototype._addParent = function(e) {
                    var t = this._parentage;
                    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e
                }, e.prototype._removeParent = function(e) {
                    var t = this._parentage;
                    t === e ? this._parentage = null : Array.isArray(t) && P(t, e)
                }, e.prototype.remove = function(t) {
                    var r = this._finalizers;
                    r && P(r, t), t instanceof e && t._removeParent(this)
                }, e.EMPTY = ((t = new e).closed = !0, t), e;
                var t
            }(),
            j = M.EMPTY;

        function E(e) {
            return e instanceof M || e && "closed" in e && v(e.remove) && v(e.add) && v(e.unsubscribe)
        }

        function I(e) {
            v(e) ? e() : e.unsubscribe()
        }
        var T = {
                onUnhandledError: null,
                onStoppedNotification: null,
                Promise: void 0,
                useDeprecatedSynchronousErrorHandling: !1,
                useDeprecatedNextContext: !1
            },
            F = {
                setTimeout: function(e, t) {
                    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                    var i = F.delegate;
                    return (null == i ? void 0 : i.setTimeout) ? i.setTimeout.apply(i, S([e, t], x(r))) : setTimeout.apply(void 0, S([e, t], x(r)))
                },
                clearTimeout: function(e) {
                    var t = F.delegate;
                    return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e)
                },
                delegate: void 0
            };

        function C(e) {
            F.setTimeout((function() {
                var t = T.onUnhandledError;
                if (!t) throw e;
                t(e)
            }))
        }

        function U() {}
        var B = N("C", void 0, void 0);

        function N(e, t, r) {
            return {
                kind: e,
                value: t,
                error: r
            }
        }
        var L = null;

        function D(e) {
            if (T.useDeprecatedSynchronousErrorHandling) {
                var t = !L;
                if (t && (L = {
                        errorThrown: !1,
                        error: null
                    }), e(), t) {
                    var r = L,
                        n = r.errorThrown,
                        i = r.error;
                    if (L = null, n) throw i
                }
            } else e()
        }
        var G = function(e) {
                function t(t) {
                    var r = e.call(this) || this;
                    return r.isStopped = !1, t ? (r.destination = t, E(t) && t.add(r)) : r.destination = Y, r
                }
                return w(t, e), t.create = function(e, t, r) {
                    return new H(e, t, r)
                }, t.prototype.next = function(e) {
                    this.isStopped ? V(function(e) {
                        return N("N", e, void 0)
                    }(e), this) : this._next(e)
                }, t.prototype.error = function(e) {
                    this.isStopped ? V(N("E", void 0, e), this) : (this.isStopped = !0, this._error(e))
                }, t.prototype.complete = function() {
                    this.isStopped ? V(B, this) : (this.isStopped = !0, this._complete())
                }, t.prototype.unsubscribe = function() {
                    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
                }, t.prototype._next = function(e) {
                    this.destination.next(e)
                }, t.prototype._error = function(e) {
                    try {
                        this.destination.error(e)
                    } finally {
                        this.unsubscribe()
                    }
                }, t.prototype._complete = function() {
                    try {
                        this.destination.complete()
                    } finally {
                        this.unsubscribe()
                    }
                }, t
            }(M),
            $ = Function.prototype.bind;

        function W(e, t) {
            return $.call(e, t)
        }
        var z = function() {
                function e(e) {
                    this.partialObserver = e
                }
                return e.prototype.next = function(e) {
                    var t = this.partialObserver;
                    if (t.next) try {
                        t.next(e)
                    } catch (e) {
                        J(e)
                    }
                }, e.prototype.error = function(e) {
                    var t = this.partialObserver;
                    if (t.error) try {
                        t.error(e)
                    } catch (e) {
                        J(e)
                    } else J(e)
                }, e.prototype.complete = function() {
                    var e = this.partialObserver;
                    if (e.complete) try {
                        e.complete()
                    } catch (e) {
                        J(e)
                    }
                }, e
            }(),
            H = function(e) {
                function t(t, r, n) {
                    var i, o, s = e.call(this) || this;
                    return v(t) || !t ? i = {
                        next: null != t ? t : void 0,
                        error: null != r ? r : void 0,
                        complete: null != n ? n : void 0
                    } : s && T.useDeprecatedNextContext ? ((o = Object.create(t)).unsubscribe = function() {
                        return s.unsubscribe()
                    }, i = {
                        next: t.next && W(t.next, o),
                        error: t.error && W(t.error, o),
                        complete: t.complete && W(t.complete, o)
                    }) : i = t, s.destination = new z(i), s
                }
                return w(t, e), t
            }(G);

        function J(e) {
            var t;
            T.useDeprecatedSynchronousErrorHandling ? (t = e, T.useDeprecatedSynchronousErrorHandling && L && (L.errorThrown = !0, L.error = t)) : C(e)
        }

        function V(e, t) {
            var r = T.onStoppedNotification;
            r && F.setTimeout((function() {
                return r(e, t)
            }))
        }
        var Y = {
            closed: !0,
            next: U,
            error: function(e) {
                throw e
            },
            complete: U
        };

        function K(e, t, r, n, i) {
            return new X(e, t, r, n, i)
        }
        var X = function(e) {
            function t(t, r, n, i, o, s) {
                var u = e.call(this, t) || this;
                return u.onFinalize = o, u.shouldUnsubscribe = s, u._next = r ? function(e) {
                    try {
                        r(e)
                    } catch (e) {
                        t.error(e)
                    }
                } : e.prototype._next, u._error = i ? function(e) {
                    try {
                        i(e)
                    } catch (e) {
                        t.error(e)
                    } finally {
                        this.unsubscribe()
                    }
                } : e.prototype._error, u._complete = n ? function() {
                    try {
                        n()
                    } catch (e) {
                        t.error(e)
                    } finally {
                        this.unsubscribe()
                    }
                } : e.prototype._complete, u
            }
            return w(t, e), t.prototype.unsubscribe = function() {
                var t;
                if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                    var r = this.closed;
                    e.prototype.unsubscribe.call(this), !r && (null === (t = this.onFinalize) || void 0 === t || t.call(this))
                }
            }, t
        }(G);

        function Z(e, t) {
            return b((function(r, n) {
                var i = 0;
                r.subscribe(K(n, (function(r) {
                    return e.call(t, r, i++) && n.next(r)
                })))
            }))
        }
        var Q = "function" == typeof Symbol && Symbol.observable || "@@observable";

        function ee(e) {
            return e
        }
        var te = function() {
            function e(e) {
                e && (this._subscribe = e)
            }
            return e.prototype.lift = function(t) {
                var r = new e;
                return r.source = this, r.operator = t, r
            }, e.prototype.subscribe = function(e, t, r) {
                var n, i = this,
                    o = (n = e) && n instanceof G || function(e) {
                        return e && v(e.next) && v(e.error) && v(e.complete)
                    }(n) && E(n) ? e : new H(e, t, r);
                return D((function() {
                    var e = i,
                        t = e.operator,
                        r = e.source;
                    o.add(t ? t.call(o, r) : r ? i._subscribe(o) : i._trySubscribe(o))
                })), o
            }, e.prototype._trySubscribe = function(e) {
                try {
                    return this._subscribe(e)
                } catch (t) {
                    e.error(t)
                }
            }, e.prototype.forEach = function(e, t) {
                var r = this;
                return new(t = re(t))((function(t, n) {
                    var i = new H({
                        next: function(t) {
                            try {
                                e(t)
                            } catch (e) {
                                n(e), i.unsubscribe()
                            }
                        },
                        error: n,
                        complete: t
                    });
                    r.subscribe(i)
                }))
            }, e.prototype._subscribe = function(e) {
                var t;
                return null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)
            }, e.prototype[Q] = function() {
                return this
            }, e.prototype.pipe = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return (0 === (r = e).length ? ee : 1 === r.length ? r[0] : function(e) {
                    return r.reduce((function(e, t) {
                        return t(e)
                    }), e)
                })(this);
                var r
            }, e.prototype.toPromise = function(e) {
                var t = this;
                return new(e = re(e))((function(e, r) {
                    var n;
                    t.subscribe((function(e) {
                        return n = e
                    }), (function(e) {
                        return r(e)
                    }), (function() {
                        return e(n)
                    }))
                }))
            }, e.create = function(t) {
                return new e(t)
            }, e
        }();

        function re(e) {
            var t;
            return null !== (t = null != e ? e : T.Promise) && void 0 !== t ? t : Promise
        }
        var ne = new te((function(e) {
            return e.complete()
        }));

        function ie() {
            return new m
        }

        function oe(e, t) {
            var r = arguments.length >= 2;
            return function(n) {
                return n.pipe(e ? Z((function(t, r) {
                    return e(t, r, n)
                })) : ee, 1 <= 0 ? function() {
                    return ne
                } : b((function(e, t) {
                    var r = 0;
                    e.subscribe(K(t, (function(e) {
                        ++r <= 1 && (t.next(e), 1 <= r && t.complete())
                    })))
                })), r ? function(e) {
                    return b((function(t, r) {
                        var n = !1;
                        t.subscribe(K(r, (function(e) {
                            n = !0, r.next(e)
                        }), (function() {
                            n || r.next(e), r.complete()
                        })))
                    }))
                }(t) : function(e) {
                    return void 0 === e && (e = ie), b((function(t, r) {
                        var n = !1;
                        t.subscribe(K(r, (function(e) {
                            n = !0, r.next(e)
                        }), (function() {
                            return n ? r.complete() : r.error(e())
                        })))
                    }))
                }((function() {
                    return new m
                })))
            }
        }
        var se = function(e) {
                return e && "number" == typeof e.length && "function" != typeof e
            },
            ue = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";

        function ae(e) {
            if (e instanceof te) return e;
            if (null != e) {
                if (function(e) {
                        return v(e[Q])
                    }(e)) return o = e, new te((function(e) {
                    var t = o[Q]();
                    if (v(t.subscribe)) return t.subscribe(e);
                    throw new TypeError("Provided object does not correctly implement Symbol.observable")
                }));
                if (se(e)) return i = e, new te((function(e) {
                    for (var t = 0; t < i.length && !e.closed; t++) e.next(i[t]);
                    e.complete()
                }));
                if (v(null == (n = e) ? void 0 : n.then)) return r = e, new te((function(e) {
                    r.then((function(t) {
                        e.closed || (e.next(t), e.complete())
                    }), (function(t) {
                        return e.error(t)
                    })).then(null, C)
                }));
                if (function(e) {
                        return Symbol.asyncIterator && v(null == e ? void 0 : e[Symbol.asyncIterator])
                    }(e)) return ce(e);
                if (function(e) {
                        return v(null == e ? void 0 : e[ue])
                    }(e)) return t = e, new te((function(e) {
                    var r, n;
                    try {
                        for (var i = A(t), o = i.next(); !o.done; o = i.next()) {
                            var s = o.value;
                            if (e.next(s), e.closed) return
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = i.return) && n.call(i)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    e.complete()
                }));
                if (function(e) {
                        return v(null == e ? void 0 : e.getReader)
                    }(e)) return ce(function(e) {
                    return function(e, t, r) {
                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                        var n, i = r.apply(e, t || []),
                            o = [];
                        return n = {}, s("next"), s("throw"), s("return"), n[Symbol.asyncIterator] = function() {
                            return this
                        }, n;

                        function s(e) {
                            i[e] && (n[e] = function(t) {
                                return new Promise((function(r, n) {
                                    o.push([e, t, r, n]) > 1 || u(e, t)
                                }))
                            })
                        }

                        function u(e, t) {
                            try {
                                (r = i[e](t)).value instanceof O ? Promise.resolve(r.value.v).then(a, c) : p(o[0][2], r)
                            } catch (e) {
                                p(o[0][3], e)
                            }
                            var r
                        }

                        function a(e) {
                            u("next", e)
                        }

                        function c(e) {
                            u("throw", e)
                        }

                        function p(e, t) {
                            e(t), o.shift(), o.length && u(o[0][0], o[0][1])
                        }
                    }(this, arguments, (function() {
                        var t, r, n;
                        return k(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    t = e.getReader(), i.label = 1;
                                case 1:
                                    i.trys.push([1, , 9, 10]), i.label = 2;
                                case 2:
                                    return [4, O(t.read())];
                                case 3:
                                    return r = i.sent(), n = r.value, r.done ? [4, O(void 0)] : [3, 5];
                                case 4:
                                    return [2, i.sent()];
                                case 5:
                                    return [4, O(n)];
                                case 6:
                                    return [4, i.sent()];
                                case 7:
                                    return i.sent(), [3, 2];
                                case 8:
                                    return [3, 10];
                                case 9:
                                    return t.releaseLock(), [7];
                                case 10:
                                    return [2]
                            }
                        }))
                    }))
                }(e))
            }
            var t, r, n, i, o;
            throw function(e) {
                return new TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
            }(e)
        }

        function ce(e) {
            return new te((function(t) {
                (function(e, t) {
                    var r, n, i, o, s, u, a, c;
                    return s = this, u = void 0, c = function() {
                        var s, u;
                        return k(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    a.trys.push([0, 5, 6, 11]), r = function(e) {
                                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                                        var t, r = e[Symbol.asyncIterator];
                                        return r ? r.call(e) : (e = A(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                                            return this
                                        }, t);

                                        function n(r) {
                                            t[r] = e[r] && function(t) {
                                                return new Promise((function(n, i) {
                                                    ! function(e, t, r, n) {
                                                        Promise.resolve(n).then((function(t) {
                                                            e({
                                                                value: t,
                                                                done: r
                                                            })
                                                        }), t)
                                                    }(n, i, (t = e[r](t)).done, t.value)
                                                }))
                                            }
                                        }
                                    }(e), a.label = 1;
                                case 1:
                                    return [4, r.next()];
                                case 2:
                                    if ((n = a.sent()).done) return [3, 4];
                                    if (s = n.value, t.next(s), t.closed) return [2];
                                    a.label = 3;
                                case 3:
                                    return [3, 1];
                                case 4:
                                    return [3, 11];
                                case 5:
                                    return u = a.sent(), i = {
                                        error: u
                                    }, [3, 11];
                                case 6:
                                    return a.trys.push([6, , 9, 10]), n && !n.done && (o = r.return) ? [4, o.call(r)] : [3, 8];
                                case 7:
                                    a.sent(), a.label = 8;
                                case 8:
                                    return [3, 10];
                                case 9:
                                    if (i) throw i.error;
                                    return [7];
                                case 10:
                                    return [7];
                                case 11:
                                    return t.complete(), [2]
                            }
                        }))
                    }, new((a = void 0) || (a = Promise))((function(e, t) {
                        function r(e) {
                            try {
                                i(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function n(e) {
                            try {
                                i(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(t) {
                            var i;
                            t.done ? e(t.value) : (i = t.value, i instanceof a ? i : new a((function(e) {
                                e(i)
                            }))).then(r, n)
                        }
                        i((c = c.apply(s, u || [])).next())
                    }))
                })(e, t).catch((function(e) {
                    return t.error(e)
                }))
            }))
        }
        var pe = _((function(e) {
                return function() {
                    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
                }
            })),
            de = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
                }
                return w(t, e), t.prototype.lift = function(e) {
                    var t = new ye(this, this);
                    return t.operator = e, t
                }, t.prototype._throwIfClosed = function() {
                    if (this.closed) throw new pe
                }, t.prototype.next = function(e) {
                    var t = this;
                    D((function() {
                        var r, n;
                        if (t._throwIfClosed(), !t.isStopped) {
                            t.currentObservers || (t.currentObservers = Array.from(t.observers));
                            try {
                                for (var i = A(t.currentObservers), o = i.next(); !o.done; o = i.next()) o.value.next(e)
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    o && !o.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                    }))
                }, t.prototype.error = function(e) {
                    var t = this;
                    D((function() {
                        if (t._throwIfClosed(), !t.isStopped) {
                            t.hasError = t.isStopped = !0, t.thrownError = e;
                            for (var r = t.observers; r.length;) r.shift().error(e)
                        }
                    }))
                }, t.prototype.complete = function() {
                    var e = this;
                    D((function() {
                        if (e._throwIfClosed(), !e.isStopped) {
                            e.isStopped = !0;
                            for (var t = e.observers; t.length;) t.shift().complete()
                        }
                    }))
                }, t.prototype.unsubscribe = function() {
                    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
                }, Object.defineProperty(t.prototype, "observed", {
                    get: function() {
                        var e;
                        return (null === (e = this.observers) || void 0 === e ? void 0 : e.length) > 0
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype._trySubscribe = function(t) {
                    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
                }, t.prototype._subscribe = function(e) {
                    return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e)
                }, t.prototype._innerSubscribe = function(e) {
                    var t = this,
                        r = this,
                        n = r.hasError,
                        i = r.isStopped,
                        o = r.observers;
                    return n || i ? j : (this.currentObservers = null, o.push(e), new M((function() {
                        t.currentObservers = null, P(o, e)
                    })))
                }, t.prototype._checkFinalizedStatuses = function(e) {
                    var t = this,
                        r = t.hasError,
                        n = t.thrownError,
                        i = t.isStopped;
                    r ? e.error(n) : i && e.complete()
                }, t.prototype.asObservable = function() {
                    var e = new te;
                    return e.source = this, e
                }, t.create = function(e, t) {
                    return new ye(e, t)
                }, t
            }(te),
            ye = function(e) {
                function t(t, r) {
                    var n = e.call(this) || this;
                    return n.destination = t, n.source = r, n
                }
                return w(t, e), t.prototype.next = function(e) {
                    var t, r;
                    null === (r = null === (t = this.destination) || void 0 === t ? void 0 : t.next) || void 0 === r || r.call(t, e)
                }, t.prototype.error = function(e) {
                    var t, r;
                    null === (r = null === (t = this.destination) || void 0 === t ? void 0 : t.error) || void 0 === r || r.call(t, e)
                }, t.prototype.complete = function() {
                    var e, t;
                    null === (t = null === (e = this.destination) || void 0 === e ? void 0 : e.complete) || void 0 === t || t.call(e)
                }, t.prototype._subscribe = function(e) {
                    var t, r;
                    return null !== (r = null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)) && void 0 !== r ? r : j
                }, t
            }(de);

        function le(e) {
            void 0 === e && (e = {});
            var t = e.connector,
                r = void 0 === t ? function() {
                    return new de
                } : t,
                n = e.resetOnError,
                i = void 0 === n || n,
                o = e.resetOnComplete,
                s = void 0 === o || o,
                u = e.resetOnRefCountZero,
                a = void 0 === u || u;
            return function(e) {
                var t, n, o, u = 0,
                    c = !1,
                    p = !1,
                    d = function() {
                        null == n || n.unsubscribe(), n = void 0
                    },
                    y = function() {
                        d(), t = o = void 0, c = p = !1
                    },
                    l = function() {
                        var e = t;
                        y(), null == e || e.unsubscribe()
                    };
                return b((function(e, f) {
                    u++, p || c || d();
                    var h = o = null != o ? o : r();
                    f.add((function() {
                        0 != --u || p || c || (n = fe(l, a))
                    })), h.subscribe(f), !t && u > 0 && (t = new H({
                        next: function(e) {
                            return h.next(e)
                        },
                        error: function(e) {
                            p = !0, d(), n = fe(y, i, e), h.error(e)
                        },
                        complete: function() {
                            c = !0, d(), n = fe(y, s), h.complete()
                        }
                    }), ae(e).subscribe(t))
                }))(e)
            }
        }

        function fe(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
            if (!0 !== t) {
                if (!1 !== t) {
                    var i = new H({
                        next: function() {
                            i.unsubscribe(), e()
                        }
                    });
                    return ae(t.apply(void 0, S([], x(r)))).subscribe(i)
                }
            } else e()
        }

        function he(e, t, r) {
            return (t = u(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        var ge = function() {
                function e() {
                    s(this, e)
                }
                return c(e, [{
                    key: "accountClosure",
                    value: function() {
                        var e = {
                            method: "account_closure",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account_closure: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                reason: {
                                    required: 1,
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "accountSecurity",
                    value: function() {
                        var e = {
                            method: "account_security",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account_security: {
                                    required: 1,
                                    type: "numeric"
                                },
                                otp: {
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                totp_action: {
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "accountStatistics",
                    value: function() {
                        var e = {
                            method: "account_statistics",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account_statistics: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "activeSymbols",
                    value: function() {
                        var e = {
                            method: "active_symbols",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                active_symbols: {
                                    required: 1,
                                    type: "string"
                                },
                                landing_company: {
                                    type: "string"
                                },
                                passthrough: {},
                                product_type: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "affiliateAccountAdd",
                    value: function() {
                        var e = {
                            method: "affiliate_account_add",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                address_city: {
                                    required: 1,
                                    type: "string"
                                },
                                address_line_1: {
                                    required: 1,
                                    type: "string"
                                },
                                address_line_2: {
                                    type: "string"
                                },
                                address_postcode: {
                                    required: 1,
                                    type: "string"
                                },
                                address_state: {
                                    required: 1,
                                    type: "string"
                                },
                                affiliate_account_add: {
                                    required: 1,
                                    type: "numeric"
                                },
                                country: {
                                    required: 1,
                                    type: "string"
                                },
                                first_name: {
                                    required: 1,
                                    type: "string"
                                },
                                last_name: {
                                    required: 1,
                                    type: "string"
                                },
                                non_pep_declaration: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                password: {
                                    required: 1,
                                    type: "string"
                                },
                                phone: {
                                    required: 1,
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                tnc_accepted: {
                                    required: 1,
                                    type: "numeric"
                                },
                                username: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "apiToken",
                    value: function() {
                        var e = {
                            method: "api_token",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                api_token: {
                                    required: 1,
                                    type: "numeric"
                                },
                                delete_token: {
                                    type: "string"
                                },
                                new_token: {
                                    type: "string"
                                },
                                new_token_scopes: {},
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                valid_for_current_ip_only: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "appDelete",
                    value: function() {
                        var e = {
                            method: "app_delete",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                app_delete: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "appGet",
                    value: function() {
                        var e = {
                            method: "app_get",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                app_get: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "appList",
                    value: function() {
                        var e = {
                            method: "app_list",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                app_list: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "appMarkupDetails",
                    value: function() {
                        var e = {
                            method: "app_markup_details",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                app_id: {
                                    type: "numeric"
                                },
                                app_markup_details: {
                                    required: 1,
                                    type: "numeric"
                                },
                                client_loginid: {
                                    type: "string"
                                },
                                date_from: {
                                    required: 1,
                                    type: "string"
                                },
                                date_to: {
                                    required: 1,
                                    type: "string"
                                },
                                description: {
                                    type: "numeric"
                                },
                                limit: {
                                    type: "numeric"
                                },
                                offset: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                sort: {
                                    type: "string"
                                },
                                sort_fields: {}
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "appRegister",
                    value: function() {
                        var e = {
                            method: "app_register",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                app_markup_percentage: {
                                    type: "numeric"
                                },
                                app_register: {
                                    required: 1,
                                    type: "numeric"
                                },
                                appstore: {
                                    type: "string"
                                },
                                github: {
                                    type: "string"
                                },
                                googleplay: {
                                    type: "string"
                                },
                                homepage: {
                                    type: "string"
                                },
                                name: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                redirect_uri: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                scopes: {
                                    required: 1
                                },
                                verification_uri: {
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "appUpdate",
                    value: function() {
                        var e = {
                            method: "app_update",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                app_markup_percentage: {
                                    type: "numeric"
                                },
                                app_update: {
                                    required: 1,
                                    type: "numeric"
                                },
                                appstore: {
                                    type: "string"
                                },
                                github: {
                                    type: "string"
                                },
                                googleplay: {
                                    type: "string"
                                },
                                homepage: {
                                    type: "string"
                                },
                                name: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                redirect_uri: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                scopes: {
                                    required: 1
                                },
                                verification_uri: {
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "assetIndex",
                    value: function() {
                        var e = {
                            method: "asset_index",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                asset_index: {
                                    required: 1,
                                    type: "numeric"
                                },
                                landing_company: {
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "authorize",
                    value: function() {
                        var e = {
                            method: "authorize",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                add_to_login_history: {
                                    type: "numeric"
                                },
                                authorize: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "balance",
                    value: function() {
                        var e = {
                            method: "balance",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account: {
                                    type: "string"
                                },
                                balance: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "buy",
                    value: function() {
                        var e = {
                            method: "buy",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                buy: {
                                    required: 1,
                                    type: "string"
                                },
                                parameters: {
                                    amount: {
                                        type: "numeric"
                                    },
                                    app_markup_percentage: {
                                        type: "numeric"
                                    },
                                    barrier: {
                                        type: "string"
                                    },
                                    barrier2: {
                                        type: "string"
                                    },
                                    barrier_range: {
                                        type: "string"
                                    },
                                    basis: {
                                        type: "string"
                                    },
                                    cancellation: {
                                        type: "string"
                                    },
                                    contract_type: {
                                        required: 1,
                                        type: "string"
                                    },
                                    currency: {
                                        required: 1,
                                        type: "string"
                                    },
                                    date_expiry: {
                                        type: "numeric"
                                    },
                                    date_start: {
                                        type: "numeric"
                                    },
                                    duration: {
                                        type: "numeric"
                                    },
                                    duration_unit: {
                                        type: "string"
                                    },
                                    limit_order: {
                                        stop_loss: {
                                            type: "numeric"
                                        },
                                        take_profit: {
                                            type: "numeric"
                                        }
                                    },
                                    multiplier: {
                                        type: "numeric"
                                    },
                                    product_type: {
                                        type: "string"
                                    },
                                    selected_tick: {
                                        type: "numeric"
                                    },
                                    symbol: {
                                        required: 1,
                                        type: "string"
                                    },
                                    trading_period_start: {
                                        type: "numeric"
                                    }
                                },
                                passthrough: {},
                                price: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "buyContractForMultipleAccounts",
                    value: function() {
                        var e = {
                            method: "buy_contract_for_multiple_accounts",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                buy_contract_for_multiple_accounts: {
                                    required: 1,
                                    type: "string"
                                },
                                parameters: {
                                    amount: {
                                        type: "numeric"
                                    },
                                    app_markup_percentage: {
                                        type: "numeric"
                                    },
                                    barrier: {
                                        type: "string"
                                    },
                                    barrier2: {
                                        type: "string"
                                    },
                                    basis: {
                                        type: "string"
                                    },
                                    contract_type: {
                                        required: 1,
                                        type: "string"
                                    },
                                    currency: {
                                        required: 1,
                                        type: "string"
                                    },
                                    date_expiry: {
                                        type: "numeric"
                                    },
                                    date_start: {
                                        type: "numeric"
                                    },
                                    duration: {
                                        type: "numeric"
                                    },
                                    duration_unit: {
                                        type: "string"
                                    },
                                    multiplier: {
                                        type: "numeric"
                                    },
                                    selected_tick: {
                                        type: "numeric"
                                    },
                                    symbol: {
                                        required: 1,
                                        type: "string"
                                    }
                                },
                                passthrough: {},
                                price: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                tokens: {
                                    required: 1
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "cancel",
                    value: function() {
                        var e = {
                            method: "cancel",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                cancel: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "cashier",
                    value: function() {
                        var e = {
                            method: "cashier",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                address: {
                                    type: "string"
                                },
                                amount: {
                                    type: "numeric"
                                },
                                cashier: {
                                    required: 1,
                                    type: "string"
                                },
                                dry_run: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                provider: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                type: {
                                    type: "string"
                                },
                                verification_code: {
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "cashierPayments",
                    value: function() {
                        var e = {
                            method: "cashier_payments",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                cashier_payments: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                provider: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                },
                                transaction_type: {
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "cashierWithdrawalCancel",
                    value: function() {
                        var e = {
                            method: "cashier_withdrawal_cancel",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                cashier_withdrawal_cancel: {
                                    required: 1,
                                    type: "numeric"
                                },
                                id: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "changeEmail",
                    value: function() {
                        var e = {
                            method: "change_email",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                change_email: {
                                    required: 1,
                                    type: "string"
                                },
                                new_email: {
                                    required: 1,
                                    type: "string"
                                },
                                new_password: {
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                verification_code: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "changePassword",
                    value: function() {
                        var e = {
                            method: "change_password",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                change_password: {
                                    required: 1,
                                    type: "numeric"
                                },
                                new_password: {
                                    required: 1,
                                    type: "string"
                                },
                                old_password: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "contractUpdate",
                    value: function() {
                        var e = {
                            method: "contract_update",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                contract_id: {
                                    required: 1,
                                    type: "numeric"
                                },
                                contract_update: {
                                    required: 1,
                                    type: "numeric"
                                },
                                limit_order: {
                                    stop_loss: {},
                                    take_profit: {}
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "contractUpdateHistory",
                    value: function() {
                        var e = {
                            method: "contract_update_history",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                contract_id: {
                                    required: 1,
                                    type: "numeric"
                                },
                                contract_update_history: {
                                    required: 1,
                                    type: "numeric"
                                },
                                limit: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "contractsFor",
                    value: function() {
                        var e = {
                            method: "contracts_for",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                contracts_for: {
                                    required: 1,
                                    type: "string"
                                },
                                currency: {
                                    type: "string"
                                },
                                landing_company: {
                                    type: "string"
                                },
                                passthrough: {},
                                product_type: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "copyStart",
                    value: function() {
                        var e = {
                            method: "copy_start",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                assets: {},
                                copy_start: {
                                    required: 1,
                                    type: "string"
                                },
                                max_trade_stake: {
                                    type: "numeric"
                                },
                                min_trade_stake: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                trade_types: {}
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "copyStop",
                    value: function() {
                        var e = {
                            method: "copy_stop",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                copy_stop: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "copytradingList",
                    value: function() {
                        var e = {
                            method: "copytrading_list",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                copytrading_list: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "copytradingStatistics",
                    value: function() {
                        var e = {
                            method: "copytrading_statistics",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                copytrading_statistics: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                trader_id: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "cryptoConfig",
                    value: function() {
                        var e = {
                            method: "crypto_config",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                crypto_config: {
                                    required: 1,
                                    type: "numeric"
                                },
                                currency_code: {
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "documentUpload",
                    value: function() {
                        var e = {
                            method: "document_upload",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                document_format: {
                                    required: 1,
                                    type: "string"
                                },
                                document_id: {
                                    type: "string"
                                },
                                document_issuing_country: {
                                    type: "string"
                                },
                                document_type: {
                                    required: 1,
                                    type: "string"
                                },
                                document_upload: {
                                    required: 1,
                                    type: "numeric"
                                },
                                expected_checksum: {
                                    required: 1,
                                    type: "string"
                                },
                                expiration_date: {
                                    type: "string"
                                },
                                file_size: {
                                    required: 1,
                                    type: "numeric"
                                },
                                lifetime_valid: {
                                    type: "numeric"
                                },
                                page_type: {
                                    type: "string"
                                },
                                passthrough: {},
                                proof_of_ownership: {
                                    details: {
                                        required: 1
                                    },
                                    id: {
                                        required: 1,
                                        type: "numeric"
                                    }
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "economicCalendar",
                    value: function() {
                        var e = {
                            method: "economic_calendar",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                currency: {
                                    type: "string"
                                },
                                economic_calendar: {
                                    required: 1,
                                    type: "numeric"
                                },
                                end_date: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                start_date: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "exchangeRates",
                    value: function() {
                        var e = {
                            method: "exchange_rates",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                base_currency: {
                                    required: 1,
                                    type: "string"
                                },
                                exchange_rates: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                },
                                target_currency: {
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "forget",
                    value: function() {
                        var e = {
                            method: "forget",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                forget: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "forgetAll",
                    value: function() {
                        var e = {
                            method: "forget_all",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                forget_all: {
                                    required: 1
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "getAccountStatus",
                    value: function() {
                        var e = {
                            method: "get_account_status",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                get_account_status: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "getAccountTypes",
                    value: function() {
                        var e = {
                            method: "get_account_types",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                get_account_types: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "getAvailableAccountsToTransfer",
                    value: function() {
                        var e = {
                            method: "get_available_accounts_to_transfer",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                get_available_accounts_to_transfer: {
                                    required: 1,
                                    type: "numeric"
                                },
                                loginid: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "getFinancialAssessment",
                    value: function() {
                        var e = {
                            method: "get_financial_assessment",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                get_financial_assessment: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "getLimits",
                    value: function() {
                        var e = {
                            method: "get_limits",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                get_limits: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "getSelfExclusion",
                    value: function() {
                        var e = {
                            method: "get_self_exclusion",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                get_self_exclusion: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "getSettings",
                    value: function() {
                        var e = {
                            method: "get_settings",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                get_settings: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "identityVerificationDocumentAdd",
                    value: function() {
                        var e = {
                            method: "identity_verification_document_add",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                document_number: {
                                    required: 1,
                                    type: "string"
                                },
                                document_type: {
                                    required: 1,
                                    type: "string"
                                },
                                identity_verification_document_add: {
                                    required: 1,
                                    type: "numeric"
                                },
                                issuing_country: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "landingCompany",
                    value: function() {
                        var e = {
                            method: "landing_company",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                landing_company: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "landingCompanyDetails",
                    value: function() {
                        var e = {
                            method: "landing_company_details",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                landing_company_details: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "linkWallet",
                    value: function() {
                        var e = {
                            method: "link_wallet",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                client_id: {
                                    required: 1,
                                    type: "string"
                                },
                                link_wallet: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                wallet_id: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "loginHistory",
                    value: function() {
                        var e = {
                            method: "login_history",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                limit: {
                                    type: "numeric"
                                },
                                login_history: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "logout",
                    value: function() {
                        var e = {
                            method: "logout",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                logout: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "mt5Deposit",
                    value: function() {
                        var e = {
                            method: "mt5_deposit",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                amount: {
                                    type: "numeric"
                                },
                                from_binary: {
                                    type: "string"
                                },
                                mt5_deposit: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                to_mt5: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "mt5GetSettings",
                    value: function() {
                        var e = {
                            method: "mt5_get_settings",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                login: {
                                    required: 1,
                                    type: "string"
                                },
                                mt5_get_settings: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "mt5LoginList",
                    value: function() {
                        var e = {
                            method: "mt5_login_list",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                mt5_login_list: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "mt5NewAccount",
                    value: function() {
                        var e = {
                            method: "mt5_new_account",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account_type: {
                                    required: 1,
                                    type: "string"
                                },
                                address: {
                                    type: "string"
                                },
                                city: {
                                    type: "string"
                                },
                                company: {
                                    type: "string"
                                },
                                country: {
                                    type: "string"
                                },
                                currency: {
                                    type: "string"
                                },
                                dry_run: {
                                    type: "numeric"
                                },
                                email: {
                                    required: 1,
                                    type: "string"
                                },
                                investPassword: {
                                    type: "string"
                                },
                                leverage: {
                                    required: 1,
                                    type: "numeric"
                                },
                                mainPassword: {
                                    required: 1,
                                    type: "string"
                                },
                                mt5_account_category: {
                                    type: "string"
                                },
                                mt5_account_type: {
                                    type: "string"
                                },
                                mt5_new_account: {
                                    required: 1,
                                    type: "numeric"
                                },
                                name: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                phone: {
                                    type: "string"
                                },
                                phonePassword: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                server: {},
                                state: {
                                    type: "string"
                                },
                                zipCode: {
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "mt5PasswordChange",
                    value: function() {
                        var e = {
                            method: "mt5_password_change",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                login: {
                                    required: 1,
                                    type: "string"
                                },
                                mt5_password_change: {
                                    required: 1,
                                    type: "numeric"
                                },
                                new_password: {
                                    required: 1,
                                    type: "string"
                                },
                                old_password: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                password_type: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "mt5PasswordCheck",
                    value: function() {
                        var e = {
                            method: "mt5_password_check",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                login: {
                                    required: 1,
                                    type: "string"
                                },
                                mt5_password_check: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                password: {
                                    required: 1,
                                    type: "string"
                                },
                                password_type: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "mt5PasswordReset",
                    value: function() {
                        var e = {
                            method: "mt5_password_reset",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                login: {
                                    required: 1,
                                    type: "string"
                                },
                                mt5_password_reset: {
                                    required: 1,
                                    type: "numeric"
                                },
                                new_password: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                password_type: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                verification_code: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "mt5Withdrawal",
                    value: function() {
                        var e = {
                            method: "mt5_withdrawal",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                amount: {
                                    required: 1,
                                    type: "numeric"
                                },
                                from_mt5: {
                                    required: 1,
                                    type: "string"
                                },
                                mt5_withdrawal: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                to_binary: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "newAccountMaltainvest",
                    value: function() {
                        var e = {
                            method: "new_account_maltainvest",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                accept_risk: {
                                    required: 1,
                                    type: "numeric"
                                },
                                account_opening_reason: {
                                    type: "string"
                                },
                                account_turnover: {
                                    type: "string"
                                },
                                address_city: {
                                    required: 1,
                                    type: "string"
                                },
                                address_line_1: {
                                    required: 1,
                                    type: "string"
                                },
                                address_line_2: {
                                    type: "string"
                                },
                                address_postcode: {
                                    type: "string"
                                },
                                address_state: {
                                    type: "string"
                                },
                                affiliate_token: {
                                    type: "string"
                                },
                                binary_options_trading_experience: {
                                    type: "string"
                                },
                                binary_options_trading_frequency: {
                                    type: "string"
                                },
                                cfd_trading_experience: {
                                    type: "string"
                                },
                                cfd_trading_frequency: {
                                    type: "string"
                                },
                                citizen: {
                                    type: "string"
                                },
                                client_type: {
                                    type: "string"
                                },
                                currency: {
                                    type: "string"
                                },
                                date_of_birth: {
                                    required: 1,
                                    type: "string"
                                },
                                education_level: {
                                    required: 1,
                                    type: "string"
                                },
                                employment_industry: {
                                    required: 1,
                                    type: "string"
                                },
                                employment_status: {
                                    type: "string"
                                },
                                estimated_worth: {
                                    required: 1,
                                    type: "string"
                                },
                                first_name: {
                                    required: 1,
                                    type: "string"
                                },
                                forex_trading_experience: {
                                    type: "string"
                                },
                                forex_trading_frequency: {
                                    type: "string"
                                },
                                income_source: {
                                    required: 1,
                                    type: "string"
                                },
                                last_name: {
                                    required: 1,
                                    type: "string"
                                },
                                net_income: {
                                    required: 1,
                                    type: "string"
                                },
                                new_account_maltainvest: {
                                    required: 1,
                                    type: "numeric"
                                },
                                non_pep_declaration: {
                                    type: "numeric"
                                },
                                occupation: {
                                    required: 1,
                                    type: "string"
                                },
                                other_instruments_trading_experience: {
                                    type: "string"
                                },
                                other_instruments_trading_frequency: {
                                    type: "string"
                                },
                                passthrough: {},
                                phone: {},
                                place_of_birth: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                residence: {
                                    required: 1,
                                    type: "string"
                                },
                                salutation: {
                                    required: 1,
                                    type: "string"
                                },
                                secret_answer: {
                                    type: "string"
                                },
                                secret_question: {
                                    type: "string"
                                },
                                source_of_wealth: {
                                    type: "string"
                                },
                                tax_identification_number: {
                                    required: 1,
                                    type: "string"
                                },
                                tax_residence: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "newAccountReal",
                    value: function() {
                        var e = {
                            method: "new_account_real",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account_opening_reason: {
                                    type: "string"
                                },
                                account_turnover: {
                                    type: "string"
                                },
                                address_city: {
                                    type: "string"
                                },
                                address_line_1: {
                                    type: "string"
                                },
                                address_line_2: {
                                    type: "string"
                                },
                                address_postcode: {
                                    type: "string"
                                },
                                address_state: {
                                    type: "string"
                                },
                                affiliate_token: {
                                    type: "string"
                                },
                                citizen: {},
                                client_type: {
                                    type: "string"
                                },
                                currency: {
                                    type: "string"
                                },
                                date_of_birth: {
                                    type: "string"
                                },
                                first_name: {
                                    type: "string"
                                },
                                last_name: {
                                    type: "string"
                                },
                                new_account_real: {
                                    required: 1,
                                    type: "numeric"
                                },
                                non_pep_declaration: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                phone: {},
                                place_of_birth: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                residence: {
                                    type: "string"
                                },
                                salutation: {
                                    type: "string"
                                },
                                secret_answer: {
                                    type: "string"
                                },
                                secret_question: {
                                    type: "string"
                                },
                                tax_identification_number: {
                                    type: "string"
                                },
                                tax_residence: {
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "newAccountVirtual",
                    value: function() {
                        var e = {
                            method: "new_account_virtual",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                affiliate_token: {
                                    type: "string"
                                },
                                client_password: {
                                    type: "string"
                                },
                                date_first_contact: {
                                    type: "string"
                                },
                                email_consent: {
                                    type: "numeric"
                                },
                                gclid_url: {
                                    type: "string"
                                },
                                new_account_virtual: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                residence: {
                                    type: "string"
                                },
                                signup_device: {
                                    type: "string"
                                },
                                type: {
                                    type: "string"
                                },
                                utm_ad_id: {},
                                utm_adgroup_id: {},
                                utm_adrollclk_id: {},
                                utm_campaign: {},
                                utm_campaign_id: {},
                                utm_content: {},
                                utm_fbcl_id: {},
                                utm_gl_client_id: {},
                                utm_medium: {},
                                utm_msclk_id: {},
                                utm_source: {},
                                utm_term: {},
                                verification_code: {
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "newAccountWallet",
                    value: function() {
                        var e = {
                            method: "new_account_wallet",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                address_city: {
                                    type: "string"
                                },
                                address_line_1: {
                                    type: "string"
                                },
                                address_line_2: {
                                    type: "string"
                                },
                                address_postcode: {
                                    type: "string"
                                },
                                address_state: {
                                    type: "string"
                                },
                                currency: {
                                    required: 1,
                                    type: "string"
                                },
                                date_of_birth: {
                                    type: "string"
                                },
                                first_name: {
                                    type: "string"
                                },
                                last_name: {
                                    type: "string"
                                },
                                new_account_wallet: {
                                    required: 1,
                                    type: "numeric"
                                },
                                non_pep_declaration: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                payment_method: {
                                    required: 1,
                                    type: "string"
                                },
                                phone: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "notificationEvent",
                    value: function() {
                        var e = {
                            method: "notification_event",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                args: {
                                    documents: {}
                                },
                                category: {
                                    required: 1,
                                    type: "string"
                                },
                                event: {
                                    required: 1,
                                    type: "string"
                                },
                                notification_event: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "oauthApps",
                    value: function() {
                        var e = {
                            method: "oauth_apps",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                oauth_apps: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pAdvertCreate",
                    value: function() {
                        var e = {
                            method: "p2p_advert_create",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                amount: {
                                    required: 1,
                                    type: "numeric"
                                },
                                contact_info: {
                                    type: "string"
                                },
                                description: {
                                    type: "string"
                                },
                                local_currency: {
                                    type: "string"
                                },
                                max_order_amount: {
                                    required: 1,
                                    type: "numeric"
                                },
                                min_order_amount: {
                                    required: 1,
                                    type: "numeric"
                                },
                                p2p_advert_create: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                payment_info: {
                                    type: "string"
                                },
                                payment_method: {
                                    type: "string"
                                },
                                payment_method_ids: {},
                                payment_method_names: {},
                                rate: {
                                    required: 1,
                                    type: "numeric"
                                },
                                rate_type: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                type: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pAdvertInfo",
                    value: function() {
                        var e = {
                            method: "p2p_advert_info",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                id: {
                                    type: "string"
                                },
                                p2p_advert_info: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                },
                                use_client_limits: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pAdvertList",
                    value: function() {
                        var e = {
                            method: "p2p_advert_list",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                advertiser_id: {
                                    type: "string"
                                },
                                advertiser_name: {
                                    type: "string"
                                },
                                amount: {
                                    type: "numeric"
                                },
                                counterparty_type: {
                                    type: "string"
                                },
                                favourites_only: {
                                    type: "numeric"
                                },
                                limit: {
                                    type: "numeric"
                                },
                                local_currency: {
                                    type: "string"
                                },
                                offset: {
                                    type: "numeric"
                                },
                                p2p_advert_list: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                payment_method: {},
                                req_id: {
                                    type: "numeric"
                                },
                                sort_by: {
                                    type: "string"
                                },
                                use_client_limits: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pAdvertUpdate",
                    value: function() {
                        var e = {
                            method: "p2p_advert_update",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                contact_info: {
                                    type: "string"
                                },
                                delete: {
                                    type: "numeric"
                                },
                                description: {
                                    type: "string"
                                },
                                id: {
                                    required: 1,
                                    type: "string"
                                },
                                is_active: {
                                    type: "numeric"
                                },
                                local_currency: {
                                    type: "string"
                                },
                                max_order_amount: {
                                    type: "numeric"
                                },
                                min_order_amount: {
                                    type: "numeric"
                                },
                                p2p_advert_update: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                payment_info: {
                                    type: "string"
                                },
                                payment_method_ids: {},
                                payment_method_names: {},
                                rate: {
                                    type: "numeric"
                                },
                                rate_type: {
                                    type: "string"
                                },
                                remaining_amount: {
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pAdvertiserAdverts",
                    value: function() {
                        var e = {
                            method: "p2p_advertiser_adverts",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                limit: {
                                    type: "numeric"
                                },
                                offset: {
                                    type: "numeric"
                                },
                                p2p_advertiser_adverts: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pAdvertiserCreate",
                    value: function() {
                        var e = {
                            method: "p2p_advertiser_create",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                contact_info: {
                                    type: "string"
                                },
                                default_advert_description: {
                                    type: "string"
                                },
                                name: {
                                    required: 1,
                                    type: "string"
                                },
                                p2p_advertiser_create: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                payment_info: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pAdvertiserInfo",
                    value: function() {
                        var e = {
                            method: "p2p_advertiser_info",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                id: {
                                    type: "string"
                                },
                                p2p_advertiser_info: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pAdvertiserPaymentMethods",
                    value: function() {
                        var e = {
                            method: "p2p_advertiser_payment_methods",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                create: {},
                                delete: {},
                                p2p_advertiser_payment_methods: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                update: {}
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pAdvertiserRelations",
                    value: function() {
                        var e = {
                            method: "p2p_advertiser_relations",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                add_blocked: {},
                                add_favourites: {},
                                p2p_advertiser_relations: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                remove_blocked: {},
                                remove_favourites: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pAdvertiserUpdate",
                    value: function() {
                        var e = {
                            method: "p2p_advertiser_update",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                contact_info: {
                                    type: "string"
                                },
                                default_advert_description: {
                                    type: "string"
                                },
                                is_listed: {
                                    type: "numeric"
                                },
                                p2p_advertiser_update: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                payment_info: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                show_name: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pChatCreate",
                    value: function() {
                        var e = {
                            method: "p2p_chat_create",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                order_id: {
                                    required: 1,
                                    type: "string"
                                },
                                p2p_chat_create: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pOrderCancel",
                    value: function() {
                        var e = {
                            method: "p2p_order_cancel",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                id: {
                                    required: 1,
                                    type: "string"
                                },
                                p2p_order_cancel: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pOrderConfirm",
                    value: function() {
                        var e = {
                            method: "p2p_order_confirm",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                id: {
                                    required: 1,
                                    type: "string"
                                },
                                p2p_order_confirm: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pOrderCreate",
                    value: function() {
                        var e = {
                            method: "p2p_order_create",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                advert_id: {
                                    required: 1,
                                    type: "string"
                                },
                                amount: {
                                    required: 1,
                                    type: "numeric"
                                },
                                contact_info: {
                                    type: "string"
                                },
                                p2p_order_create: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                payment_info: {
                                    type: "string"
                                },
                                payment_method_ids: {},
                                rate: {
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pOrderDispute",
                    value: function() {
                        var e = {
                            method: "p2p_order_dispute",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                dispute_reason: {
                                    required: 1,
                                    type: "string"
                                },
                                id: {
                                    required: 1,
                                    type: "string"
                                },
                                p2p_order_dispute: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pOrderInfo",
                    value: function() {
                        var e = {
                            method: "p2p_order_info",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                id: {
                                    required: 1,
                                    type: "string"
                                },
                                p2p_order_info: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pOrderList",
                    value: function() {
                        var e = {
                            method: "p2p_order_list",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                active: {
                                    type: "numeric"
                                },
                                advert_id: {
                                    type: "string"
                                },
                                limit: {
                                    type: "numeric"
                                },
                                offset: {
                                    type: "numeric"
                                },
                                p2p_order_list: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pOrderReview",
                    value: function() {
                        var e = {
                            method: "p2p_order_review",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                order_id: {
                                    required: 1,
                                    type: "string"
                                },
                                p2p_order_review: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                rating: {
                                    required: 1,
                                    type: "numeric"
                                },
                                recommended: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pPaymentMethods",
                    value: function() {
                        var e = {
                            method: "p2p_payment_methods",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                p2p_payment_methods: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "p2pPing",
                    value: function() {
                        var e = {
                            method: "p2p_ping",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                p2p_ping: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "paymentMethods",
                    value: function() {
                        var e = {
                            method: "payment_methods",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                country: {
                                    type: "string"
                                },
                                passthrough: {},
                                payment_methods: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "paymentagentCreate",
                    value: function() {
                        var e = {
                            method: "paymentagent_create",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                affiliate_id: {
                                    type: "string"
                                },
                                code_of_conduct_approval: {
                                    required: 1,
                                    type: "numeric"
                                },
                                commission_deposit: {
                                    required: 1,
                                    type: "numeric"
                                },
                                commission_withdrawal: {
                                    required: 1,
                                    type: "numeric"
                                },
                                email: {
                                    required: 1,
                                    type: "string"
                                },
                                information: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                payment_agent_name: {
                                    required: 1,
                                    type: "string"
                                },
                                paymentagent_create: {
                                    required: 1,
                                    type: "numeric"
                                },
                                phone_numbers: {},
                                req_id: {
                                    type: "numeric"
                                },
                                supported_payment_methods: {
                                    required: 1
                                },
                                urls: {
                                    required: 1
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "paymentagentDetails",
                    value: function() {
                        var e = {
                            method: "paymentagent_details",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                paymentagent_details: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "paymentagentList",
                    value: function() {
                        var e = {
                            method: "paymentagent_list",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                currency: {
                                    type: "string"
                                },
                                passthrough: {},
                                paymentagent_list: {
                                    required: 1,
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "paymentagentTransfer",
                    value: function() {
                        var e = {
                            method: "paymentagent_transfer",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                amount: {
                                    required: 1,
                                    type: "numeric"
                                },
                                currency: {
                                    required: 1,
                                    type: "string"
                                },
                                description: {
                                    type: "string"
                                },
                                dry_run: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                paymentagent_transfer: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                transfer_to: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "paymentagentWithdraw",
                    value: function() {
                        var e = {
                            method: "paymentagent_withdraw",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                amount: {
                                    required: 1,
                                    type: "numeric"
                                },
                                currency: {
                                    required: 1,
                                    type: "string"
                                },
                                description: {
                                    type: "string"
                                },
                                dry_run: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                paymentagent_loginid: {
                                    required: 1,
                                    type: "string"
                                },
                                paymentagent_withdraw: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                verification_code: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "payoutCurrencies",
                    value: function() {
                        var e = {
                            method: "payout_currencies",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                payout_currencies: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "ping",
                    value: function() {
                        var e = {
                            method: "ping",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                ping: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "portfolio",
                    value: function() {
                        var e = {
                            method: "portfolio",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                contract_type: {},
                                passthrough: {},
                                portfolio: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "profitTable",
                    value: function() {
                        var e = {
                            method: "profit_table",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                contract_type: {},
                                date_from: {
                                    type: "string"
                                },
                                date_to: {
                                    type: "string"
                                },
                                description: {
                                    type: "numeric"
                                },
                                limit: {
                                    type: "numeric"
                                },
                                offset: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                profit_table: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                sort: {
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "proposal",
                    value: function() {
                        var e = {
                            method: "proposal",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                amount: {
                                    type: "numeric"
                                },
                                barrier: {
                                    type: "string"
                                },
                                barrier2: {
                                    type: "string"
                                },
                                barrier_range: {
                                    type: "string"
                                },
                                basis: {
                                    type: "string"
                                },
                                cancellation: {
                                    type: "string"
                                },
                                contract_type: {
                                    required: 1,
                                    type: "string"
                                },
                                currency: {
                                    required: 1,
                                    type: "string"
                                },
                                date_expiry: {
                                    type: "numeric"
                                },
                                date_start: {
                                    type: "numeric"
                                },
                                duration: {
                                    type: "numeric"
                                },
                                duration_unit: {
                                    type: "string"
                                },
                                limit_order: {
                                    stop_loss: {
                                        type: "numeric"
                                    },
                                    take_profit: {
                                        type: "numeric"
                                    }
                                },
                                multiplier: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                product_type: {
                                    type: "string"
                                },
                                proposal: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                selected_tick: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                },
                                symbol: {
                                    required: 1,
                                    type: "string"
                                },
                                trading_period_start: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "proposalOpenContract",
                    value: function() {
                        var e = {
                            method: "proposal_open_contract",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                contract_id: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                proposal_open_contract: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "realityCheck",
                    value: function() {
                        var e = {
                            method: "reality_check",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                reality_check: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "requestReport",
                    value: function() {
                        var e = {
                            method: "request_report",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                date_from: {
                                    required: 1,
                                    type: "numeric"
                                },
                                date_to: {
                                    required: 1,
                                    type: "numeric"
                                },
                                passthrough: {},
                                report_type: {
                                    required: 1,
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                request_report: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "resetPassword",
                    value: function() {
                        var e = {
                            method: "reset_password",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                date_of_birth: {
                                    type: "string"
                                },
                                new_password: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                reset_password: {
                                    required: 1,
                                    type: "numeric"
                                },
                                verification_code: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "residenceList",
                    value: function() {
                        var e = {
                            method: "residence_list",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                residence_list: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "revokeOauthApp",
                    value: function() {
                        var e = {
                            method: "revoke_oauth_app",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                revoke_oauth_app: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "sell",
                    value: function() {
                        var e = {
                            method: "sell",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                price: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                sell: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "sellContractForMultipleAccounts",
                    value: function() {
                        var e = {
                            method: "sell_contract_for_multiple_accounts",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                price: {
                                    required: 1,
                                    type: "numeric"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                sell_contract_for_multiple_accounts: {
                                    required: 1,
                                    type: "numeric"
                                },
                                shortcode: {
                                    required: 1,
                                    type: "string"
                                },
                                tokens: {
                                    required: 1
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "sellExpired",
                    value: function() {
                        var e = {
                            method: "sell_expired",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                sell_expired: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "serviceToken",
                    value: function() {
                        var e = {
                            method: "service_token",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                country: {
                                    type: "string"
                                },
                                passthrough: {},
                                referrer: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                server: {
                                    type: "string"
                                },
                                service: {
                                    required: 1
                                },
                                service_token: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "setAccountCurrency",
                    value: function() {
                        var e = {
                            method: "set_account_currency",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                set_account_currency: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "setFinancialAssessment",
                    value: function() {
                        var e = {
                            method: "set_financial_assessment",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account_turnover: {
                                    type: "string"
                                },
                                binary_options_trading_experience: {
                                    type: "string"
                                },
                                binary_options_trading_frequency: {
                                    type: "string"
                                },
                                cfd_trading_experience: {
                                    type: "string"
                                },
                                cfd_trading_frequency: {
                                    type: "string"
                                },
                                education_level: {
                                    required: 1,
                                    type: "string"
                                },
                                employment_industry: {
                                    required: 1,
                                    type: "string"
                                },
                                employment_status: {
                                    type: "string"
                                },
                                estimated_worth: {
                                    required: 1,
                                    type: "string"
                                },
                                forex_trading_experience: {
                                    type: "string"
                                },
                                forex_trading_frequency: {
                                    type: "string"
                                },
                                income_source: {
                                    required: 1,
                                    type: "string"
                                },
                                net_income: {
                                    required: 1,
                                    type: "string"
                                },
                                occupation: {
                                    required: 1,
                                    type: "string"
                                },
                                other_instruments_trading_experience: {
                                    type: "string"
                                },
                                other_instruments_trading_frequency: {
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                set_financial_assessment: {
                                    required: 1,
                                    type: "numeric"
                                },
                                source_of_wealth: {
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "setSelfExclusion",
                    value: function() {
                        var e = {
                            method: "set_self_exclusion",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                exclude_until: {},
                                max_30day_deposit: {},
                                max_30day_losses: {},
                                max_30day_turnover: {},
                                max_7day_deposit: {},
                                max_7day_losses: {},
                                max_7day_turnover: {},
                                max_balance: {},
                                max_deposit: {},
                                max_losses: {},
                                max_open_bets: {},
                                max_turnover: {},
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                session_duration_limit: {},
                                set_self_exclusion: {
                                    required: 1,
                                    type: "numeric"
                                },
                                timeout_until: {}
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "setSettings",
                    value: function() {
                        var e = {
                            method: "set_settings",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account_opening_reason: {
                                    type: "string"
                                },
                                address_city: {
                                    type: "string"
                                },
                                address_line_1: {
                                    type: "string"
                                },
                                address_line_2: {},
                                address_postcode: {
                                    type: "string"
                                },
                                address_state: {
                                    type: "string"
                                },
                                allow_copiers: {
                                    type: "numeric"
                                },
                                citizen: {},
                                date_of_birth: {
                                    type: "string"
                                },
                                email_consent: {
                                    type: "numeric"
                                },
                                feature_flag: {
                                    wallet: {
                                        type: "numeric"
                                    }
                                },
                                first_name: {
                                    type: "string"
                                },
                                last_name: {
                                    type: "string"
                                },
                                non_pep_declaration: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                phone: {},
                                place_of_birth: {
                                    type: "string"
                                },
                                preferred_language: {},
                                req_id: {
                                    type: "numeric"
                                },
                                request_professional_status: {
                                    type: "numeric"
                                },
                                residence: {},
                                salutation: {
                                    type: "string"
                                },
                                secret_answer: {
                                    type: "string"
                                },
                                secret_question: {
                                    type: "string"
                                },
                                set_settings: {
                                    required: 1,
                                    type: "numeric"
                                },
                                tax_identification_number: {
                                    type: "string"
                                },
                                tax_residence: {
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "statement",
                    value: function() {
                        var e = {
                            method: "statement",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                action_type: {
                                    type: "string"
                                },
                                date_from: {
                                    type: "numeric"
                                },
                                date_to: {
                                    type: "numeric"
                                },
                                description: {
                                    type: "numeric"
                                },
                                limit: {
                                    type: "numeric"
                                },
                                offset: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                statement: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "statesList",
                    value: function() {
                        var e = {
                            method: "states_list",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                states_list: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "ticks",
                    value: function() {
                        var e = {
                            method: "ticks",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                },
                                ticks: {
                                    required: 1
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "ticksHistory",
                    value: function() {
                        var e = {
                            method: "ticks_history",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                adjust_start_time: {
                                    type: "numeric"
                                },
                                count: {
                                    type: "numeric"
                                },
                                end: {
                                    required: 1,
                                    type: "string"
                                },
                                granularity: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                start: {
                                    type: "numeric"
                                },
                                style: {
                                    type: "string"
                                },
                                subscribe: {
                                    type: "numeric"
                                },
                                ticks_history: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "time",
                    value: function() {
                        var e = {
                            method: "time",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                time: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tncApproval",
                    value: function() {
                        var e = {
                            method: "tnc_approval",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                affiliate_coc_agreement: {
                                    type: "numeric"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                tnc_approval: {
                                    required: 1,
                                    type: "numeric"
                                },
                                ukgc_funds_protection: {
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "topupVirtual",
                    value: function() {
                        var e = {
                            method: "topup_virtual",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                topup_virtual: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tradingDurations",
                    value: function() {
                        var e = {
                            method: "trading_durations",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                landing_company: {
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                trading_durations: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tradingPlatformAccounts",
                    value: function() {
                        var e = {
                            method: "trading_platform_accounts",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                platform: {
                                    required: 1,
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                trading_platform_accounts: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tradingPlatformDeposit",
                    value: function() {
                        var e = {
                            method: "trading_platform_deposit",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                amount: {
                                    type: "numeric"
                                },
                                from_account: {
                                    type: "string"
                                },
                                passthrough: {},
                                platform: {
                                    required: 1,
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                to_account: {
                                    required: 1,
                                    type: "string"
                                },
                                trading_platform_deposit: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tradingPlatformInvestorPasswordChange",
                    value: function() {
                        var e = {
                            method: "trading_platform_investor_password_change",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account_id: {
                                    required: 1,
                                    type: "string"
                                },
                                new_password: {
                                    required: 1,
                                    type: "string"
                                },
                                old_password: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                platform: {
                                    required: 1,
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                trading_platform_investor_password_change: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tradingPlatformInvestorPasswordReset",
                    value: function() {
                        var e = {
                            method: "trading_platform_investor_password_reset",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account_id: {
                                    required: 1,
                                    type: "string"
                                },
                                new_password: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                platform: {
                                    required: 1,
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                trading_platform_investor_password_reset: {
                                    required: 1,
                                    type: "numeric"
                                },
                                verification_code: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tradingPlatformNewAccount",
                    value: function() {
                        var e = {
                            method: "trading_platform_new_account",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account_type: {
                                    required: 1,
                                    type: "string"
                                },
                                currency: {
                                    type: "string"
                                },
                                dry_run: {
                                    type: "numeric"
                                },
                                market_type: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                password: {
                                    required: 1,
                                    type: "string"
                                },
                                platform: {
                                    required: 1,
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                sub_account_type: {
                                    type: "string"
                                },
                                trading_platform_new_account: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tradingPlatformPasswordChange",
                    value: function() {
                        var e = {
                            method: "trading_platform_password_change",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                new_password: {
                                    required: 1,
                                    type: "string"
                                },
                                old_password: {
                                    type: "string"
                                },
                                passthrough: {},
                                platform: {
                                    required: 1,
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                trading_platform_password_change: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tradingPlatformPasswordReset",
                    value: function() {
                        var e = {
                            method: "trading_platform_password_reset",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                new_password: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                platform: {
                                    required: 1,
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                trading_platform_password_reset: {
                                    required: 1,
                                    type: "numeric"
                                },
                                verification_code: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tradingPlatformProductListing",
                    value: function() {
                        var e = {
                            method: "trading_platform_product_listing",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                app_id: {},
                                country_code: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                trading_platform_product_listing: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tradingPlatformWithdrawal",
                    value: function() {
                        var e = {
                            method: "trading_platform_withdrawal",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                amount: {
                                    required: 1,
                                    type: "numeric"
                                },
                                from_account: {
                                    required: 1,
                                    type: "string"
                                },
                                passthrough: {},
                                platform: {
                                    required: 1,
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                to_account: {
                                    required: 1,
                                    type: "string"
                                },
                                trading_platform_withdrawal: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tradingServers",
                    value: function() {
                        var e = {
                            method: "trading_servers",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account_type: {
                                    type: "string"
                                },
                                environment: {
                                    type: "string"
                                },
                                market_type: {
                                    type: "string"
                                },
                                passthrough: {},
                                platform: {
                                    type: "string"
                                },
                                req_id: {
                                    type: "numeric"
                                },
                                trading_servers: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "tradingTimes",
                    value: function() {
                        var e = {
                            method: "trading_times",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                trading_times: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "transaction",
                    value: function() {
                        var e = {
                            method: "transaction",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    required: 1,
                                    type: "numeric"
                                },
                                transaction: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "transferBetweenAccounts",
                    value: function() {
                        var e = {
                            method: "transfer_between_accounts",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                account_from: {
                                    type: "string"
                                },
                                account_to: {
                                    type: "string"
                                },
                                accounts: {
                                    type: "string"
                                },
                                amount: {
                                    type: "numeric"
                                },
                                currency: {
                                    type: "string"
                                },
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                transfer_between_accounts: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "verifyEmail",
                    value: function() {
                        var e = {
                            method: "verify_email",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                type: {
                                    required: 1,
                                    type: "string"
                                },
                                url_parameters: {
                                    affiliate_token: {
                                        type: "string"
                                    },
                                    date_first_contact: {
                                        type: "string"
                                    },
                                    gclid_url: {
                                        type: "string"
                                    },
                                    pa_amount: {
                                        type: "numeric"
                                    },
                                    pa_currency: {
                                        type: "string"
                                    },
                                    pa_loginid: {
                                        type: "string"
                                    },
                                    pa_remarks: {
                                        type: "string"
                                    },
                                    redirect_to: {
                                        type: "numeric"
                                    },
                                    signup_device: {
                                        type: "string"
                                    },
                                    utm_ad_id: {},
                                    utm_adgroup_id: {},
                                    utm_adrollclk_id: {},
                                    utm_campaign: {},
                                    utm_campaign_id: {},
                                    utm_content: {},
                                    utm_fbcl_id: {},
                                    utm_gl_client_id: {},
                                    utm_medium: {},
                                    utm_msclk_id: {},
                                    utm_source: {},
                                    utm_term: {}
                                },
                                verify_email: {
                                    required: 1,
                                    type: "string"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "websiteStatus",
                    value: function() {
                        var e = {
                            method: "website_status",
                            needsMethodArg: "1",
                            args: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            config: {
                                passthrough: {},
                                req_id: {
                                    type: "numeric"
                                },
                                subscribe: {
                                    type: "numeric"
                                },
                                website_status: {
                                    required: 1,
                                    type: "numeric"
                                }
                            }
                        };
                        return this.processRequest(e)
                    }
                }, {
                    key: "processRequest",
                    value: function(e) {
                        var r = e.config,
                            n = function(e) {
                                var t = e.config,
                                    r = e.args,
                                    n = e.method,
                                    i = e.needsMethodArg,
                                    o = r;
                                return i && !_e(o) && (o = he({}, n, o)), o[n] = o[n] || 1, Object.keys(o).forEach((function(e) {
                                    var r = o[e];
                                    e in t && ("string" === t[e].type ? o[e] = "".concat(r) : "numeric" === t[e].type ? o[e] = parseFloat(r) : "boolean" === t[e].type && (o[e] = +r))
                                })), o
                            }(e),
                            i = function(e) {
                                var r = e.config,
                                    n = e.args;
                                if (!_e(n)) return "Requires an object but a ".concat(t(n), " is passed.");
                                var i = [],
                                    o = Object.keys(r).filter((function(e) {
                                        return (r[e] || {}).required && !(e in n)
                                    }));
                                return o.length && i.push("Required parameters missing: ".concat(o.join(", "))), Object.keys(n).forEach((function(e) {
                                    var o = n[e];
                                    if (e in r) {
                                        var s = r[e].type;
                                        s && (me[s](o) || i.push("".concat(s, " value expected but found ").concat(t(o), ": ").concat(e)))
                                    }
                                })), i.length ? i.join(" - ") : ""
                            }({
                                config: r,
                                args: n
                            });
                        return i ? Promise.reject(i) : this.send(n)
                    }
                }]), e
            }(),
            _e = function(e) {
                return e instanceof Object
            },
            me = {
                object: _e,
                numeric: function(e) {
                    return !Number.isNaN(1 * e)
                },
                string: function(e) {
                    return "string" == typeof e
                },
                boolean: function(e) {
                    return [!0, !1, 0, 1].includes(e)
                }
            };

        function ve() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
            } catch (e) {}
            return (ve = function() {
                return !!e
            })()
        }

        function be(e) {
            var t = "function" == typeof Map ? new Map : void 0;
            return be = function(e) {
                if (null === e || ! function(e) {
                        try {
                            return -1 !== Function.toString.call(e).indexOf("[native code]")
                        } catch (t) {
                            return "function" == typeof e
                        }
                    }(e)) return e;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, r)
                }

                function r() {
                    return function(e, t, r) {
                        if (ve()) return Reflect.construct.apply(null, arguments);
                        var n = [null];
                        n.push.apply(n, t);
                        var i = new(e.bind.apply(e, n));
                        return r && l(i, r.prototype), i
                    }(e, arguments, y(this).constructor)
                }
                return r.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), l(r, e)
            }, be(e)
        }

        function qe(e, t, r) {
            return t = y(t), d(e, we() ? Reflect.construct(t, r || [], y(e).constructor) : t.apply(e, r))
        }

        function we() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
            } catch (e) {}
            return (we = function() {
                return !!e
            })()
        }

        function ke(e) {
            return function(t) {
                function r(t) {
                    var n;
                    return s(this, r), (n = qe(this, r)).type = e, n.message = t, n
                }
                return f(r, t), c(r, [{
                    key: "toString",
                    value: function() {
                        return "".concat(this.type, ": ").concat(this.message)
                    }
                }]), r
            }(be(Error))
        }
        var Ae = function(e) {
                function t() {
                    return s(this, t), qe(this, t, arguments)
                }
                return f(t, e), c(t)
            }(ke("APIError")),
            xe = function(e) {
                function t() {
                    return s(this, t), qe(this, t, arguments)
                }
                return f(t, e), c(t)
            }(ke("ConstructionError")),
            Se = r(532),
            Oe = r.n(Se);

        function Re(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function Pe(e) {
            var t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Re(Object(r), !0).forEach((function(t) {
                        he(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Re(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }({}, e);
            return delete t.req_id, delete t.passthrough, delete t.subscribe, Oe()(t)
        }

        function Me(e, t, r) {
            return t = y(t), d(e, je() ? Reflect.construct(t, r || [], y(e).constructor) : t.apply(e, r))
        }

        function je() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
            } catch (e) {}
            return (je = function() {
                return !!e
            })()
        }
        var Ee = function(e) {
            function t(e, r) {
                var n;
                if (s(this, t), !e) throw new xe("Cache object needs an API to work");
                return (n = Me(this, t)).api = e, n.storage = r, n
            }
            var r, n, i, u, a;
            return f(t, e), c(t, [{
                key: "send",
                value: (a = o(g().mark((function e(t) {
                    var r;
                    return g().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.has(t);
                            case 2:
                                if (!e.sent) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", this.get(t));
                            case 4:
                                return e.next = 6, this.api.send(t);
                            case 6:
                                return r = e.sent, e.next = 9, this.set(t, r);
                            case 9:
                                return e.abrupt("return", r);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function(e) {
                    return a.apply(this, arguments)
                })
            }, {
                key: "has",
                value: (u = o(g().mark((function e(t) {
                    return g().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", this.storage.has(Pe(t)));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function(e) {
                    return u.apply(this, arguments)
                })
            }, {
                key: "get",
                value: (i = o(g().mark((function e(t) {
                    return g().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", this.storage.get(Pe(t)));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function(e) {
                    return i.apply(this, arguments)
                })
            }, {
                key: "getByMsgType",
                value: (n = o(g().mark((function e(t) {
                    return g().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", this.storage.getByMsgType(t));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function(e) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "set",
                value: (r = o(g().mark((function e(t, r) {
                    return g().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", this.storage.set(Pe(t), r));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function(e, t) {
                    return r.apply(this, arguments)
                })
            }]), t
        }(ge);

        function Ie(e, t, r) {
            return t = y(t), d(e, Te() ? Reflect.construct(t, r || [], y(e).constructor) : t.apply(e, r))
        }

        function Te() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
            } catch (e) {}
            return (Te = function() {
                return !!e
            })()
        }
        var Fe = function(e) {
                function t() {
                    var e, r, n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                    return s(this, t), e = Ie(this, t, [function(e, t) {
                        r = e, n = t
                    }]), i(r, n), e.resolveCallback = r, e.rejectCallback = n, e.state = "pending", e
                }
                return f(t, e), c(t, [{
                    key: "resolve",
                    value: function(e) {
                        return this.resolveCallback(e), this.state = "resolved", this
                    }
                }, {
                    key: "reject",
                    value: function(e) {
                        return this.rejectCallback(e), this.state = "rejected", this
                    }
                }, {
                    key: "isPending",
                    value: function() {
                        return "pending" === this.state
                    }
                }, {
                    key: "isRejected",
                    value: function() {
                        return "rejected" === this.state
                    }
                }, {
                    key: "isResolved",
                    value: function() {
                        return "resolved" === this.state
                    }
                }], [{
                    key: "wrap",
                    value: function(e) {
                        if (e instanceof this) return e;
                        var t = new this;
                        return e.then(t.resolve.bind(t), t.reject.bind(t)), t
                    }
                }]), t
            }(be(Promise)),
            Ce = function() {
                function e() {
                    s(this, e), this.store = {
                        by_msg_type: {}
                    }
                }
                return c(e, [{
                    key: "has",
                    value: function(e) {
                        return e in this.store
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        return this.store[e]
                    }
                }, {
                    key: "getByMsgType",
                    value: function(e) {
                        return this.store.by_msg_type[e]
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        this.store.by_msg_type[t.msg_type] = t, this.store[e] = t
                    }
                }]), e
            }();
        const Ue = ["balance", "buy", "cashier_payments", "exchange_rates", "p2p_advert_info", "p2p_advertiser_create", "p2p_advertiser_info", "p2p_order_create", "p2p_order_info", "p2p_order_list", "proposal", "proposal_open_contract", "ticks", "ticks_history", "transaction", "website_status"];

        function Be(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function Ne(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Be(Object(r), !0).forEach((function(t) {
                    he(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }
        var Le = function() {
            function e(t) {
                s(this, e), this.api = t, this.sources = {}, this.subs_id_to_key = {}, this.key_to_subs_id = {}, this.buy_key_to_contract_id = {}, this.subs_per_msg_type = [], this.streams_list = Ue
            }
            return c(e, [{
                key: "subscribe",
                value: function(e) {
                    return this.sourceExists(e) ? this.getSource(e) : this.createNewSource(Ne(Ne({}, e), {}, {
                        subscribe: 1
                    }))
                }
            }, {
                key: "getSource",
                value: function(e) {
                    var t = De(e);
                    if (t in this.sources) return this.sources[t];
                    if (e.proposal_open_contract && e.contract_id) {
                        var r = Object.values(this.buy_key_to_contract_id).find((function(t) {
                            return t.contract_id === e.contract_id
                        }));
                        if (r) return this.sources[r.buy_key]
                    }
                }
            }, {
                key: "sourceExists",
                value: function(e) {
                    return this.getSource(e)
                }
            }, {
                key: "createNewSource",
                value: function(e) {
                    var t, r = this,
                        n = De(e),
                        i = this.api.sendAndGetSource(e).pipe((t = function() {
                            n in r.key_to_subs_id && r.forget(r.key_to_subs_id[n]).then((function() {}), (function() {}))
                        }, b((function(e, r) {
                            try {
                                e.subscribe(r)
                            } finally {
                                r.add(t)
                            }
                        }))), le());
                    return this.sources[n] = i, this.saveSubsPerMsgType(e, n), i.pipe(oe()).toPromise().then((function(t) {
                        e.buy && (r.buy_key_to_contract_id[n] = {
                            contract_id: t.buy.contract_id,
                            buy_key: n
                        }), r.saveSubsId(n, t)
                    }), this.removeKeyOnError(n)), i
                }
            }, {
                key: "forget",
                value: function(e) {
                    return this.completeSubsByIds(e), this.api.send({
                        forget: e
                    })
                }
            }, {
                key: "forgetAll",
                value: function() {
                    for (var e = this, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return r.forEach((function(t) {
                        (e.subs_per_msg_type[t] || []).forEach((function(t) {
                            return e.completeSubsByKey(t)
                        })), e.subs_per_msg_type[t] = []
                    })), this.api.send({
                        forget_all: r
                    })
                }
            }, {
                key: "completeSubsByIds",
                value: function() {
                    for (var e = this, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    r.forEach((function(t) {
                        var r = e.subs_id_to_key[t];
                        delete e.subs_id_to_key[t], e.completeSubsByKey(r)
                    }))
                }
            }, {
                key: "saveSubsId",
                value: function(e, t) {
                    var r = t.subscription;
                    if (!r) return this.completeSubsByKey(e);
                    var n = r.id;
                    n in this.subs_id_to_key || (this.subs_id_to_key[n] = e, this.key_to_subs_id[e] = n)
                }
            }, {
                key: "saveSubsPerMsgType",
                value: function(e, t) {
                    var r = this.getMsgType(e);
                    r ? (this.subs_per_msg_type[r] = this.subs_per_msg_type[r] || [], this.subs_per_msg_type[r].push(t)) : this.api.sanityErrors.next(new Ae("Subscription type is not found in deriv-api"))
                }
            }, {
                key: "removeKeyOnError",
                value: function(e) {
                    var t = this;
                    return function() {
                        return t.completeSubsByKey(e)
                    }
                }
            }, {
                key: "completeSubsByKey",
                value: function(e) {
                    if (e && this.sources[e]) {
                        var t = this.sources[e];
                        delete this.sources[e];
                        var r = this.key_to_subs_id[e];
                        delete this.subs_id_to_key[r], delete this.key_to_subs_id[e], delete this.buy_key_to_contract_id[e], t.complete()
                    }
                }
            }, {
                key: "getMsgType",
                value: function(e) {
                    return this.streams_list.find((function(t) {
                        return t in e
                    }))
                }
            }]), e
        }();

        function De(e) {
            return Pe(e)
        }

        function Ge(e, t, r) {
            return t = y(t), d(e, $e() ? Reflect.construct(t, r || [], y(e).constructor) : t.apply(e, r))
        }

        function $e() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
            } catch (e) {}
            return ($e = function() {
                return !!e
            })()
        }
        var We = function(e) {
            function t() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = r.storage,
                    i = r.app_id,
                    o = r.connection,
                    u = r.cache,
                    a = void 0 === u ? new Ce : u,
                    c = r.endpoint,
                    d = void 0 === c ? "ws.derivws.com" : c,
                    y = r.lang,
                    l = void 0 === y ? "EN" : y,
                    f = r.brand,
                    h = void 0 === f ? "" : f,
                    g = r.middleware,
                    _ = void 0 === g ? {} : g,
                    m = r.excluded_request_block,
                    v = void 0 === m ? ["website_status", "authorize"] : m;
                if (s(this, t), (e = Ge(this, t)).events = new de, o) e.connection = o;
                else {
                    if (!i) throw Error("An app_id is required to connect to the API");
                    e.shouldReconnect = !0, e.connectionArgs = {
                        app_id: i,
                        endpointUrl: ze(d),
                        lang: l.toUpperCase(),
                        brand: h.toLowerCase()
                    }, e.connect()
                }
                return e.lang = l, e.reqId = 0, e.connected = new Fe, e.sanityErrors = new de, e.middleware = _, e.pendingRequests = {}, e.expect_response_types = {}, e.subscription_manager = new Le(p(e)), e.reconnect_timeout = !1, e.keep_alive_interval = !1, e.is_request_blocked = !1, e.excluded_request_block = v, n && (e.storage = new Ee(p(e), n)), e.cache = new Ee(e.storage ? e.storage : p(e), a), e.connectionHandlers(), e
            }
            var r, n, i, u;
            return f(t, e), c(t, [{
                key: "blockRequest",
                value: function(e) {
                    this.is_request_blocked = e
                }
            }, {
                key: "connectionHandlers",
                value: function() {
                    this.connection.onopen = this.openHandler.bind(this), this.connection.onclose = this.closeHandler.bind(this), this.connection.onmessage = this.messageHandler.bind(this), this.connection.onerror = this.errorHandler.bind(this)
                }
            }, {
                key: "connect",
                value: function() {
                    if (!this.connectionArgs) throw new xe("Connection arguments are required to create a connection.");
                    this.events.next({
                        name: "connect"
                    });
                    var e = this.connectionArgs,
                        t = e.endpointUrl,
                        r = e.lang,
                        n = e.app_id,
                        i = e.brand;
                    this.connection = new WebSocket("".concat(t.toString(), "websockets/v3?app_id=").concat(n, "&l=").concat(r, "&brand=").concat(i))
                }
            }, {
                key: "disconnect",
                value: function() {
                    this.shouldReconnect = !1, this.connection.close()
                }
            }, {
                key: "isConnectionClosed",
                value: function() {
                    return this.connection.readyState !== WebSocket.OPEN
                }
            }, {
                key: "sendAndGetSource",
                value: function(e) {
                    var t = this,
                        r = new de;
                    return e.req_id = e.req_id || ++this.reqId, this.pendingRequests[e.req_id] = r, this.connected.then((function() {
                        t.isConnectionClosed() || t.connection.send(JSON.stringify(e))
                    })).catch((function(e) {
                        return r.error(e)
                    })), r
                }
            }, {
                key: "send",
                value: (u = o(g().mark((function e() {
                    var t, r, n, i, o, s, u, a, c, p = this,
                        d = arguments;
                    return g().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                for (t = d.length, r = new Array(t), n = 0; n < t; n++) r[n] = d[n];
                                if (i = Object.keys(r[0])[0], !this.is_request_blocked || this.excluded_request_block.includes(i)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", new Promise((function() {})));
                            case 4:
                                if (!(o = this.callMiddleware("sendWillBeCalled", {
                                        args: r
                                    }))) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", o);
                            case 7:
                                if (s = r[0], u = this.callMiddleware("requestDataTransformer", s) || s, this.events.next({
                                        name: "send",
                                        data: u
                                    }), this.deleteFromExpectResponse(u), (a = this.sendAndGetSource(u).pipe(oe()).toPromise()).then((function(e) {
                                        p.cache.set(u, e), p.storage && p.storage.set(u, e)
                                    }), (function() {})), !(c = this.callMiddleware("sendIsCalled", {
                                        response_promise: a,
                                        args: r
                                    }))) {
                                    e.next = 16;
                                    break
                                }
                                return e.abrupt("return", c);
                            case 16:
                                return e.abrupt("return", a);
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function() {
                    return u.apply(this, arguments)
                })
            }, {
                key: "callMiddleware",
                value: function(e, t) {
                    if (e in this.middleware) return this.middleware[e](t)
                }
            }, {
                key: "subscribe",
                value: function(e) {
                    if (this.is_request_blocked) return new de;
                    var t = this.callMiddleware("requestDataTransformer", e) || e;
                    return this.subscription_manager.subscribe(t)
                }
            }, {
                key: "forget",
                value: (i = o(g().mark((function e(t) {
                    return g().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", this.subscription_manager.forget(t));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function(e) {
                    return i.apply(this, arguments)
                })
            }, {
                key: "forgetAll",
                value: (n = o(g().mark((function e() {
                    var t, r = arguments;
                    return g().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (t = this.subscription_manager).forgetAll.apply(t, r));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function() {
                    return n.apply(this, arguments)
                })
            }, {
                key: "keepAlivePing",
                value: function() {
                    this.ping({
                        ping: 1
                    }), this.reconnect_timeout = setTimeout(this.reconnect.bind(this), 5e3)
                }
            }, {
                key: "pong",
                value: function() {
                    this.reconnect_timeout && (clearTimeout(this.reconnect_timeout), this.reconnect_timeout = !1)
                }
            }, {
                key: "openHandler",
                value: function() {
                    this.events.next({
                        name: "open"
                    }), this.shouldReconnect && (this.keep_alive_interval = setInterval(this.keepAlivePing.bind(this), 3e4)), 1 === this.connection.readyState ? this.connected.resolve() : setTimeout(this.openHandler.bind(this), 50)
                }
            }, {
                key: "messageHandler",
                value: function(e) {
                    if (e.data) {
                        var t = JSON.parse(e.data);
                        this.reconnect_timeout && "pong" === t.ping && this.pong(), this.events.next({
                            name: "message",
                            data: t
                        });
                        var r = t.req_id;
                        if (r in this.pendingRequests) {
                            var n = this.expect_response_types[t.msg_type];
                            n && n.isPending() && n.resolve(t);
                            var i = t.echo_req,
                                o = i && i.proposal_open_contract && !i.contract_id;
                            if (t.error && !o) this.pendingRequests[r].error(t);
                            else if (this.pendingRequests[r].isStopped && t.subscription) {
                                var s = t.subscription.id;
                                this.forget(s)
                            } else this.pendingRequests[r].next(t)
                        } else this.sanityErrors.next(new Ae("Extra response"))
                    } else this.sanityErrors.next(new Ae("Something went wrong while receiving the response from API."))
                }
            }, {
                key: "closeHandler",
                value: function() {
                    this.events.next({
                        name: "close"
                    }), this.shouldReconnect && (this.events.next({
                        name: "reconnecting"
                    }), this.reconnect())
                }
            }, {
                key: "reconnect",
                value: function() {
                    this.shouldReconnect && (this.keep_alive_interval && (clearInterval(this.keep_alive_interval), this.keep_alive_interval = !1), this.pong(), this.connect(), this.connectionHandlers())
                }
            }, {
                key: "errorHandler",
                value: function() {
                    this.sanityErrors.next(new Ae("Something went wrong while receiving the response from API."))
                }
            }, {
                key: "onClose",
                value: function() {
                    return this.events.pipe(Z((function(e) {
                        return "close" === e.name
                    })), le())
                }
            }, {
                key: "onOpen",
                value: function() {
                    return this.events.pipe(Z((function(e) {
                        return "open" === e.name
                    })), le())
                }
            }, {
                key: "onMessage",
                value: function() {
                    return this.events.pipe(Z((function(e) {
                        return "message" === e.name
                    })), le())
                }
            }, {
                key: "expectResponse",
                value: (r = o(g().mark((function e() {
                    var t, r, n, i = this,
                        o = arguments;
                    return g().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                for (t = o.length, r = new Array(t), n = 0; n < t; n++) r[n] = o[n];
                                if (r.forEach((function(e) {
                                        var t;
                                        e in i.expect_response_types || (i.expect_response_types[e] = (t = i.cache.getByMsgType(e).then((function(t) {
                                            return !t && i.storage ? i.storage.getByMsgType(e) : t
                                        })), Fe.wrap(t.then((function(e) {
                                            return e || new Fe
                                        })))))
                                    })), 1 !== r.length) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", this.expect_response_types[r[0]]);
                            case 4:
                                return e.abrupt("return", Promise.all(r.map((function(e) {
                                    return i.expect_response_types[e]
                                }))));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function() {
                    return r.apply(this, arguments)
                })
            }, {
                key: "deleteFromExpectResponse",
                value: function(e) {
                    var t = Object.keys(this.expect_response_types).find((function(t) {
                        return t in e
                    }));
                    this.expect_response_types[t] && !this.expect_response_types[t].isPending() && delete this.expect_response_types[t]
                }
            }]), t
        }(ge);

        function ze(r) {
            if ("string" != typeof r) throw new xe("Endpoint must be a string, passed: ".concat(t(r)));
            var n, i, o;
            try {
                var s = (i = r.match(/((?:\w*:\/\/)*)(.*)/), o = 3, function(e) {
                        if (Array.isArray(e)) return e
                    }(i) || function(e, t) {
                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != r) {
                            var n, i, o, s, u = [],
                                a = !0,
                                c = !1;
                            try {
                                if (o = (r = r.call(e)).next, 0 === t) {
                                    if (Object(r) !== r) return;
                                    a = !1
                                } else
                                    for (; !(a = (n = o.call(r)).done) && (u.push(n.value), u.length !== t); a = !0);
                            } catch (e) {
                                c = !0, i = e
                            } finally {
                                try {
                                    if (!a && null != r.return && (s = r.return(), Object(s) !== s)) return
                                } finally {
                                    if (c) throw i
                                }
                            }
                            return u
                        }
                    }(i, o) || function(t, r) {
                        if (t) {
                            if ("string" == typeof t) return e(t, r);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? e(t, r) : void 0
                        }
                    }(i, o) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    u = (s[0], s[1]),
                    a = s[2];
                n = new URL("".concat("ws://" === u ? u : "wss://").concat(a))
            } catch (e) {
                throw new xe("Invalid URL: ".concat(r))
            }
            return n
        }
    })(), n.default
})()));