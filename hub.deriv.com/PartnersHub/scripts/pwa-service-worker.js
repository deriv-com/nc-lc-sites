! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self)["@outsystems/pwa-service-worker-js"] = {})
}(this, (function(t) {
    "use strict";

    function e(t, e, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function s(t) {
                try {
                    c(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function a(t) {
                try {
                    c(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(s, a)
            }
            c((r = r.apply(t, e || [])).next())
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
    var o, i, s, a, c;
    "function" == typeof SuppressedError && SuppressedError;
    class l {
        constructor({
            workerScope: t,
            console: e = globalThis.console
        }) {
            o.add(this), i.set(this, void 0), s.set(this, void 0), r(this, i, t, "f"), r(this, s, e, "f")
        }
        debug(t) {
            return n(this, o, "m", a).call(this, t, "debug")
        }
        error(t, e) {
            return n(this, o, "m", a).call(this, `${t}: ${e}`, "error")
        }
    }
    i = new WeakMap, s = new WeakMap, o = new WeakSet, a = function(t, r) {
        return e(this, void 0, void 0, (function*() {
            const e = yield n(this, o, "m", c).call(this);
            e ? e.postMessage({
                kind: "log",
                severity: r,
                message: t
            }) : n(this, s, "f")[r](t)
        }))
    }, c = function() {
        return e(this, void 0, void 0, (function*() {
            try {
                const t = (yield n(this, i, "f").clients.matchAll({
                    type: "window"
                })).filter((t => "visible" === t.visibilityState));
                if (1 === t.length) return t[0]
            } catch (t) {
                n(this, s, "f").error(`Error getting client: ${t}`)
            }
        }))
    };
    const u = t => e(void 0, [t], void 0, (function*({
            workerScope: t,
            cacheStorage: e,
            appName: n,
            cacheName: r,
            appUrls: o,
            logger: i = new l({
                workerScope: t
            })
        }) {
            const s = yield e.open(r);
            return i.debug(`[install] ${r}/${n} adding all core components to cache`), yield s.addAll(o), t.skipWaiting()
        })),
        h = t => e(void 0, [t], void 0, (function*({
            request: t,
            cacheStorage: e,
            cacheName: n,
            urlMappings: r,
            uncacheableUrls: o,
            logger: i
        }) {
            const s = yield e.open(n), a = new URL(t.url), c = a.pathname, l = c in r ? r[c] : t;
            if (a.searchParams.has("_ts") || o.includes(c)) return console.debug(`[fetch] Skipping cache behavior for ${c}`), yield fetch(t);
            try {
                const e = yield s.match(l);
                return e ? (null == i || i.debug(`[fetch] Returning from ${n} cache: ${c}`), e) : (null == i || i.debug(`[fetch] Returning from server: ${c}`), yield fetch(t))
            } catch (t) {
                throw null == i || i.error(`[fetch] Error trying to use cache. ${t}`), t
            }
        })),
        p = t => e(void 0, [t], void 0, (function*({
            workerScope: t,
            cacheStorage: e,
            appName: n,
            versionToken: r,
            cacheName: o,
            logger: i = new l({
                workerScope: t
            })
        }) {
            try {
                const s = (yield e.keys()).filter((t => t.startsWith(n) && t !== o)).map((t => (i.debug(`[activate] deleting old cache key: ${t}`), e.delete(t))));
                yield Promise.all(s), i.debug(`[activate] ${n} activated with version token: ${r}`), yield t.clients.claim()
            } catch (t) {
                console.error(`[activate] Error in ${n} activation. ${null==t?void 0:t.toString()}`)
            }
        })),
        f = ["/v1/logs", "/v2/logs"];
    var d, g, y, v, _, m, b, T;
    class w {
        constructor({
            workerScope: t,
            cacheStorage: e,
            appName: n,
            versionToken: o,
            appUrls: i,
            appUrlMappings: s
        }) {
            d.set(this, void 0), g.set(this, void 0), y.set(this, void 0), v.set(this, void 0), _.set(this, void 0), m.set(this, void 0), b.set(this, void 0), T.set(this, void 0), r(this, d, t, "f"), r(this, g, e, "f"), r(this, y, n, "f"), r(this, _, o, "f"), r(this, v, `${n}-${o}`, "f"), r(this, m, i, "f"), r(this, b, s, "f"), r(this, T, new l({
                workerScope: t
            }), "f")
        }
        install(t) {
            return e(this, arguments, void 0, (function*(t, e = u) {
                try {
                    t.waitUntil(e({
                        workerScope: n(this, d, "f"),
                        cacheStorage: n(this, g, "f"),
                        appName: n(this, y, "f"),
                        cacheName: n(this, v, "f"),
                        appUrls: n(this, m, "f"),
                        logger: n(this, T, "f")
                    }))
                } catch (t) {
                    n(this, T, "f").error("Error installing service worker", t)
                }
            }))
        }
        fetch(t) {
            return e(this, arguments, void 0, (function*(t, e = h) {
                try {
                    t.respondWith(e({
                        request: t.request,
                        cacheStorage: n(this, g, "f"),
                        cacheName: n(this, v, "f"),
                        urlMappings: n(this, b, "f"),
                        uncacheableUrls: (r = n(this, y, "f"), f.map((t => `/${r}${t}`))),
                        logger: n(this, T, "f")
                    }))
                } catch (t) {
                    console.error(t)
                }
                var r
            }))
        }
        activate(t) {
            return e(this, arguments, void 0, (function*(t, e = p) {
                try {
                    t.waitUntil(e({
                        workerScope: n(this, d, "f"),
                        cacheStorage: n(this, g, "f"),
                        appName: n(this, y, "f"),
                        versionToken: n(this, _, "f"),
                        cacheName: n(this, v, "f"),
                        logger: n(this, T, "f")
                    }))
                } catch (t) {
                    n(this, T, "f").error("Error activating service worker", t)
                }
            }))
        }
    }
    d = new WeakMap, g = new WeakMap, y = new WeakMap, v = new WeakMap, _ = new WeakMap, m = new WeakMap, b = new WeakMap, T = new WeakMap;
    var E = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function S(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var O = {};
    ! function(t) {
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
            function(t) {
                function e(t, e, n, r) {
                    function o(t) {
                        return t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))
                    }
                    return new(n || (n = Promise))((function(n, i) {
                        function s(t) {
                            try {
                                c(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? n(t.value) : o(t.value).then(s, a)
                        }
                        c((r = r.apply(t, e || [])).next())
                    }))
                }

                function n(t, e, n, r) {
                    if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t)
                }

                function r(t, e, n, r, o) {
                    if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return e.set(t, n), n
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Version = t.PathFilter = t.NativeHttpClient = t.LoggerHttpClient = t.HttpClientWithHealthCheck = t.HttpClient = t.FetchHttpClient = t.ErrorCodes = t.DebuggerHttpClient = t.ContentType = t.CommunicationError = void 0, t.isNetworkOrServerError = Ss, "function" == typeof SuppressedError && SuppressedError;
                class o extends Error {
                    constructor(t, e, n, r, o) {
                        super(t), this.errorCode = e, this.status = n ? `${n}` : "", this.response = r, this.category = o
                    }
                }
                var i;
                t.CommunicationError = o,
                    function(t) {
                        t.Communication_Default = "OS-CLRT-60900", t.Communication_Bad_Request = "OS-CLRT-60901", t.Communication_Unauthorized = "OS-CLRT-60902", t.Communication_Forbidden = "OS-CLRT-60903", t.Communication_Not_Found = "OS-CLRT-60904", t.Communication_Timeout = "OS-CLRT-60905", t.Communication_Internal_Server_Error = "OS-CLRT-60906", t.Communication_Unavailable = "OS-CLRT-60907"
                    }(i || (t.ErrorCodes = i = {}));
                const s = {
                        400: i.Communication_Bad_Request,
                        401: i.Communication_Unauthorized,
                        403: i.Communication_Forbidden,
                        404: i.Communication_Not_Found,
                        408: i.Communication_Timeout,
                        500: i.Communication_Internal_Server_Error,
                        503: i.Communication_Unavailable
                    },
                    a = t => {
                        var e;
                        return null !== (e = s[`${t}`]) && void 0 !== e ? e : i.Communication_Default
                    },
                    c = "traceparent",
                    l = "tracestate",
                    u = "baggage",
                    h = 512,
                    p = ["code.function", "outsystems.function.key", "outsystems.function.type", "outsystems.runtime.screen", "outsystems.otel.access.visibility"];

                function f() {
                    return e(this, arguments, void 0, (function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        return function*() {
                            if (!e) return t;
                            const n = yield e();
                            return n ? d(n, t) : t
                        }()
                    }))
                }

                function d(t, e) {
                    const n = Object.assign(Object.assign({}, e), {
                        [c]: g(t)
                    });
                    if (t.attributes) {
                        const e = y(t.attributes);
                        n[e.length > h ? u : l] = e
                    }
                    return n
                }

                function g(t) {
                    return `00-${t.traceId}-${t.spanId}-${t.sampled?"01":"00"}`
                }

                function y(t) {
                    return p.map((e => t[e] ? `${e}=${t[e]}` : void 0)).filter((t => void 0 !== t)).join(",")
                }
                var v;
                ! function(t) {
                    t.FormUrlEncoded = "application/x-www-form-urlencoded", t.Json = "application/json"
                }(v || (v = {}));
                var _, m = t.ContentType = v;
                ! function(t) {
                    t[t.Unknown = 0] = "Unknown", t[t.Timeout = 1] = "Timeout", t[t.Unauthorized = 2] = "Unauthorized"
                }(_ || (_ = {}));
                var b = _,
                    T = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== E ? E : "undefined" != typeof self ? self : {};

                function w(t) {
                    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
                }

                function O(t) {
                    if (t.__esModule) return t;
                    var e = t.default;
                    if ("function" == typeof e) {
                        var n = function t() {
                            return this instanceof t ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
                        };
                        n.prototype = e.prototype
                    } else n = {};
                    return Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), Object.keys(t).forEach((function(e) {
                        var r = Object.getOwnPropertyDescriptor(t, e);
                        Object.defineProperty(n, e, r.get ? r : {
                            enumerable: !0,
                            get: function() {
                                return t[e]
                            }
                        })
                    })), n
                }
                var C, k = Error,
                    I = EvalError,
                    P = RangeError,
                    A = ReferenceError,
                    L = SyntaxError,
                    R = TypeError,
                    j = URIError,
                    N = function() {
                        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                        if ("symbol" == typeof Symbol.iterator) return !0;
                        var t = {},
                            e = Symbol("test"),
                            n = Object(e);
                        if ("string" == typeof e) return !1;
                        if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
                        if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
                        var r = 42;
                        for (e in t[e] = r, t) return !1;
                        if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
                        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                        var o = Object.getOwnPropertySymbols(t);
                        if (1 !== o.length || o[0] !== e) return !1;
                        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                        if ("function" == typeof Object.getOwnPropertyDescriptor) {
                            var i = Object.getOwnPropertyDescriptor(t, e);
                            if (i.value !== r || !0 !== i.enumerable) return !1
                        }
                        return !0
                    },
                    x = "undefined" != typeof Symbol && Symbol,
                    M = N,
                    D = function() {
                        return "function" == typeof x && "function" == typeof Symbol && "symbol" == typeof x("foo") && "symbol" == typeof Symbol("bar") && M()
                    },
                    U = {
                        foo: {}
                    },
                    W = Object,
                    B = function() {
                        return {
                            __proto__: U
                        }.foo === U.foo && !({
                                __proto__: null
                            }
                            instanceof W)
                    },
                    $ = "Function.prototype.bind called on incompatible ",
                    F = Object.prototype.toString,
                    H = Math.max,
                    z = "[object Function]",
                    q = function(t, e) {
                        for (var n = [], r = 0; r < t.length; r += 1) n[r] = t[r];
                        for (var o = 0; o < e.length; o += 1) n[o + t.length] = e[o];
                        return n
                    },
                    V = function(t, e) {
                        for (var n = [], r = e, o = 0; r < t.length; r += 1, o += 1) n[o] = t[r];
                        return n
                    },
                    Z = function(t, e) {
                        for (var n = "", r = 0; r < t.length; r += 1) n += t[r], r + 1 < t.length && (n += e);
                        return n
                    },
                    G = function(t) {
                        var e = this;
                        if ("function" != typeof e || F.apply(e) !== z) throw new TypeError($ + e);
                        for (var n, r = V(arguments, 1), o = function() {
                                if (this instanceof n) {
                                    var o = e.apply(this, q(r, arguments));
                                    return Object(o) === o ? o : this
                                }
                                return e.apply(t, q(r, arguments))
                            }, i = H(0, e.length - r.length), s = [], a = 0; a < i; a++) s[a] = "$" + a;
                        if (n = Function("binder", "return function (" + Z(s, ",") + "){ return binder.apply(this,arguments); }")(o), e.prototype) {
                            var c = function() {};
                            c.prototype = e.prototype, n.prototype = new c, c.prototype = null
                        }
                        return n
                    },
                    X = G,
                    K = Function.prototype.bind || X,
                    Q = Function.prototype.call,
                    J = Object.prototype.hasOwnProperty,
                    Y = K.call(Q, J),
                    tt = k,
                    et = I,
                    nt = P,
                    rt = A,
                    ot = L,
                    it = R,
                    st = j,
                    at = Function,
                    ct = function(t) {
                        try {
                            return at('"use strict"; return (' + t + ").constructor;")()
                        } catch (t) {}
                    },
                    lt = Object.getOwnPropertyDescriptor;
                if (lt) try {
                    lt({}, "")
                } catch (t) {
                    lt = null
                }
                var ut = function() {
                        throw new it
                    },
                    ht = lt ? function() {
                        try {
                            return ut
                        } catch (t) {
                            try {
                                return lt(arguments, "callee").get
                            } catch (t) {
                                return ut
                            }
                        }
                    }() : ut,
                    pt = D(),
                    ft = B(),
                    dt = Object.getPrototypeOf || (ft ? function(t) {
                        return t.__proto__
                    } : null),
                    gt = {},
                    yt = "undefined" != typeof Uint8Array && dt ? dt(Uint8Array) : C,
                    vt = {
                        __proto__: null,
                        "%AggregateError%": "undefined" == typeof AggregateError ? C : AggregateError,
                        "%Array%": Array,
                        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? C : ArrayBuffer,
                        "%ArrayIteratorPrototype%": pt && dt ? dt([][Symbol.iterator]()) : C,
                        "%AsyncFromSyncIteratorPrototype%": C,
                        "%AsyncFunction%": gt,
                        "%AsyncGenerator%": gt,
                        "%AsyncGeneratorFunction%": gt,
                        "%AsyncIteratorPrototype%": gt,
                        "%Atomics%": "undefined" == typeof Atomics ? C : Atomics,
                        "%BigInt%": "undefined" == typeof BigInt ? C : BigInt,
                        "%BigInt64Array%": "undefined" == typeof BigInt64Array ? C : BigInt64Array,
                        "%BigUint64Array%": "undefined" == typeof BigUint64Array ? C : BigUint64Array,
                        "%Boolean%": Boolean,
                        "%DataView%": "undefined" == typeof DataView ? C : DataView,
                        "%Date%": Date,
                        "%decodeURI%": decodeURI,
                        "%decodeURIComponent%": decodeURIComponent,
                        "%encodeURI%": encodeURI,
                        "%encodeURIComponent%": encodeURIComponent,
                        "%Error%": tt,
                        "%eval%": eval,
                        "%EvalError%": et,
                        "%Float32Array%": "undefined" == typeof Float32Array ? C : Float32Array,
                        "%Float64Array%": "undefined" == typeof Float64Array ? C : Float64Array,
                        "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? C : FinalizationRegistry,
                        "%Function%": at,
                        "%GeneratorFunction%": gt,
                        "%Int8Array%": "undefined" == typeof Int8Array ? C : Int8Array,
                        "%Int16Array%": "undefined" == typeof Int16Array ? C : Int16Array,
                        "%Int32Array%": "undefined" == typeof Int32Array ? C : Int32Array,
                        "%isFinite%": isFinite,
                        "%isNaN%": isNaN,
                        "%IteratorPrototype%": pt && dt ? dt(dt([][Symbol.iterator]())) : C,
                        "%JSON%": "object" == typeof JSON ? JSON : C,
                        "%Map%": "undefined" == typeof Map ? C : Map,
                        "%MapIteratorPrototype%": "undefined" != typeof Map && pt && dt ? dt((new Map)[Symbol.iterator]()) : C,
                        "%Math%": Math,
                        "%Number%": Number,
                        "%Object%": Object,
                        "%parseFloat%": parseFloat,
                        "%parseInt%": parseInt,
                        "%Promise%": "undefined" == typeof Promise ? C : Promise,
                        "%Proxy%": "undefined" == typeof Proxy ? C : Proxy,
                        "%RangeError%": nt,
                        "%ReferenceError%": rt,
                        "%Reflect%": "undefined" == typeof Reflect ? C : Reflect,
                        "%RegExp%": RegExp,
                        "%Set%": "undefined" == typeof Set ? C : Set,
                        "%SetIteratorPrototype%": "undefined" != typeof Set && pt && dt ? dt((new Set)[Symbol.iterator]()) : C,
                        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? C : SharedArrayBuffer,
                        "%String%": String,
                        "%StringIteratorPrototype%": pt && dt ? dt("" [Symbol.iterator]()) : C,
                        "%Symbol%": pt ? Symbol : C,
                        "%SyntaxError%": ot,
                        "%ThrowTypeError%": ht,
                        "%TypedArray%": yt,
                        "%TypeError%": it,
                        "%Uint8Array%": "undefined" == typeof Uint8Array ? C : Uint8Array,
                        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? C : Uint8ClampedArray,
                        "%Uint16Array%": "undefined" == typeof Uint16Array ? C : Uint16Array,
                        "%Uint32Array%": "undefined" == typeof Uint32Array ? C : Uint32Array,
                        "%URIError%": st,
                        "%WeakMap%": "undefined" == typeof WeakMap ? C : WeakMap,
                        "%WeakRef%": "undefined" == typeof WeakRef ? C : WeakRef,
                        "%WeakSet%": "undefined" == typeof WeakSet ? C : WeakSet
                    };
                if (dt) try {
                    null.error
                } catch (t) {
                    var _t = dt(dt(t));
                    vt["%Error.prototype%"] = _t
                }
                var mt, bt, Tt = function t(e) {
                        var n;
                        if ("%AsyncFunction%" === e) n = ct("async function () {}");
                        else if ("%GeneratorFunction%" === e) n = ct("function* () {}");
                        else if ("%AsyncGeneratorFunction%" === e) n = ct("async function* () {}");
                        else if ("%AsyncGenerator%" === e) {
                            var r = t("%AsyncGeneratorFunction%");
                            r && (n = r.prototype)
                        } else if ("%AsyncIteratorPrototype%" === e) {
                            var o = t("%AsyncGenerator%");
                            o && dt && (n = dt(o.prototype))
                        }
                        return vt[e] = n, n
                    },
                    wt = {
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
                    Et = K,
                    St = Y,
                    Ot = Et.call(Function.call, Array.prototype.concat),
                    Ct = Et.call(Function.apply, Array.prototype.splice),
                    kt = Et.call(Function.call, String.prototype.replace),
                    It = Et.call(Function.call, String.prototype.slice),
                    Pt = Et.call(Function.call, RegExp.prototype.exec),
                    At = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                    Lt = /\\(\\)?/g,
                    Rt = function(t) {
                        var e = It(t, 0, 1),
                            n = It(t, -1);
                        if ("%" === e && "%" !== n) throw new ot("invalid intrinsic syntax, expected closing `%`");
                        if ("%" === n && "%" !== e) throw new ot("invalid intrinsic syntax, expected opening `%`");
                        var r = [];
                        return kt(t, At, (function(t, e, n, o) {
                            r[r.length] = n ? kt(o, Lt, "$1") : e || t
                        })), r
                    },
                    jt = function(t, e) {
                        var n, r = t;
                        if (St(wt, r) && (r = "%" + (n = wt[r])[0] + "%"), St(vt, r)) {
                            var o = vt[r];
                            if (o === gt && (o = Tt(r)), void 0 === o && !e) throw new it("intrinsic " + t + " exists, but is not available. Please file an issue!");
                            return {
                                alias: n,
                                name: r,
                                value: o
                            }
                        }
                        throw new ot("intrinsic " + t + " does not exist!")
                    },
                    Nt = function(t, e) {
                        if ("string" != typeof t || 0 === t.length) throw new it("intrinsic name must be a non-empty string");
                        if (arguments.length > 1 && "boolean" != typeof e) throw new it('"allowMissing" argument must be a boolean');
                        if (null === Pt(/^%?[^%]*%?$/, t)) throw new ot("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                        var n = Rt(t),
                            r = n.length > 0 ? n[0] : "",
                            o = jt("%" + r + "%", e),
                            i = o.name,
                            s = o.value,
                            a = !1,
                            c = o.alias;
                        c && (r = c[0], Ct(n, Ot([0, 1], c)));
                        for (var l = 1, u = !0; l < n.length; l += 1) {
                            var h = n[l],
                                p = It(h, 0, 1),
                                f = It(h, -1);
                            if (('"' === p || "'" === p || "`" === p || '"' === f || "'" === f || "`" === f) && p !== f) throw new ot("property names with quotes must have matching quotes");
                            if ("constructor" !== h && u || (a = !0), St(vt, i = "%" + (r += "." + h) + "%")) s = vt[i];
                            else if (null != s) {
                                if (!(h in s)) {
                                    if (!e) throw new it("base intrinsic for " + t + " exists, but the property is not available.");
                                    return
                                }
                                if (lt && l + 1 >= n.length) {
                                    var d = lt(s, h);
                                    s = (u = !!d) && "get" in d && !("originalValue" in d.get) ? d.get : s[h]
                                } else u = St(s, h), s = s[h];
                                u && !a && (vt[i] = s)
                            }
                        }
                        return s
                    },
                    xt = {
                        exports: {}
                    };

                function Mt() {
                    if (bt) return mt;
                    bt = 1;
                    var t = Nt("%Object.defineProperty%", !0) || !1;
                    if (t) try {
                        t({}, "a", {
                            value: 1
                        })
                    } catch (e) {
                        t = !1
                    }
                    return mt = t
                }
                var Dt = Nt("%Object.getOwnPropertyDescriptor%", !0);
                if (Dt) try {
                    Dt([], "length")
                } catch (t) {
                    Dt = null
                }
                var Ut = Dt,
                    Wt = Mt(),
                    Bt = L,
                    $t = R,
                    Ft = Ut,
                    Ht = function(t, e, n) {
                        if (!t || "object" != typeof t && "function" != typeof t) throw new $t("`obj` must be an object or a function`");
                        if ("string" != typeof e && "symbol" != typeof e) throw new $t("`property` must be a string or a symbol`");
                        if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new $t("`nonEnumerable`, if provided, must be a boolean or null");
                        if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new $t("`nonWritable`, if provided, must be a boolean or null");
                        if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new $t("`nonConfigurable`, if provided, must be a boolean or null");
                        if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new $t("`loose`, if provided, must be a boolean");
                        var r = arguments.length > 3 ? arguments[3] : null,
                            o = arguments.length > 4 ? arguments[4] : null,
                            i = arguments.length > 5 ? arguments[5] : null,
                            s = arguments.length > 6 && arguments[6],
                            a = !!Ft && Ft(t, e);
                        if (Wt) Wt(t, e, {
                            configurable: null === i && a ? a.configurable : !i,
                            enumerable: null === r && a ? a.enumerable : !r,
                            value: n,
                            writable: null === o && a ? a.writable : !o
                        });
                        else {
                            if (!s && (r || o || i)) throw new Bt("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                            t[e] = n
                        }
                    },
                    zt = Mt(),
                    qt = function() {
                        return !!zt
                    };
                qt.hasArrayLengthDefineBug = function() {
                    if (!zt) return null;
                    try {
                        return 1 !== zt([], "length", {
                            value: 1
                        }).length
                    } catch (t) {
                        return !0
                    }
                };
                var Vt = Nt,
                    Zt = Ht,
                    Gt = qt(),
                    Xt = Ut,
                    Kt = R,
                    Qt = Vt("%Math.floor%"),
                    Jt = function(t, e) {
                        if ("function" != typeof t) throw new Kt("`fn` is not a function");
                        if ("number" != typeof e || e < 0 || e > 4294967295 || Qt(e) !== e) throw new Kt("`length` must be a positive 32-bit integer");
                        var n = arguments.length > 2 && !!arguments[2],
                            r = !0,
                            o = !0;
                        if ("length" in t && Xt) {
                            var i = Xt(t, "length");
                            i && !i.configurable && (r = !1), i && !i.writable && (o = !1)
                        }
                        return (r || o || !n) && (Gt ? Zt(t, "length", e, !0, !0) : Zt(t, "length", e)), t
                    };
                ! function(t) {
                    var e = K,
                        n = Nt,
                        r = Jt,
                        o = R,
                        i = n("%Function.prototype.apply%"),
                        s = n("%Function.prototype.call%"),
                        a = n("%Reflect.apply%", !0) || e.call(s, i),
                        c = Mt(),
                        l = n("%Math.max%");
                    t.exports = function(t) {
                        if ("function" != typeof t) throw new o("a function is required");
                        var n = a(e, s, arguments);
                        return r(n, 1 + l(0, t.length - (arguments.length - 1)), !0)
                    };
                    var u = function() {
                        return a(e, i, arguments)
                    };
                    c ? c(t.exports, "apply", {
                        value: u
                    }) : t.exports.apply = u
                }(xt);
                var Yt = xt.exports,
                    te = Nt,
                    ee = Yt,
                    ne = ee(te("String.prototype.indexOf")),
                    re = function(t, e) {
                        var n = te(t, !!e);
                        return "function" == typeof n && ne(t, ".prototype.") > -1 ? ee(n) : n
                    },
                    oe = {},
                    ie = O(Object.freeze({
                        __proto__: null,
                        default: oe
                    })),
                    se = "function" == typeof Map && Map.prototype,
                    ae = Object.getOwnPropertyDescriptor && se ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
                    ce = se && ae && "function" == typeof ae.get ? ae.get : null,
                    le = se && Map.prototype.forEach,
                    ue = "function" == typeof Set && Set.prototype,
                    he = Object.getOwnPropertyDescriptor && ue ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
                    pe = ue && he && "function" == typeof he.get ? he.get : null,
                    fe = ue && Set.prototype.forEach,
                    de = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
                    ge = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
                    ye = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
                    ve = Boolean.prototype.valueOf,
                    _e = Object.prototype.toString,
                    me = Function.prototype.toString,
                    be = String.prototype.match,
                    Te = String.prototype.slice,
                    we = String.prototype.replace,
                    Ee = String.prototype.toUpperCase,
                    Se = String.prototype.toLowerCase,
                    Oe = RegExp.prototype.test,
                    Ce = Array.prototype.concat,
                    ke = Array.prototype.join,
                    Ie = Array.prototype.slice,
                    Pe = Math.floor,
                    Ae = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                    Le = Object.getOwnPropertySymbols,
                    Re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
                    je = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
                    Ne = "function" == typeof Symbol && Symbol.toStringTag && (Symbol.toStringTag, 1) ? Symbol.toStringTag : null,
                    xe = Object.prototype.propertyIsEnumerable,
                    Me = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
                        return t.__proto__
                    } : null);

                function De(t, e) {
                    if (t === 1 / 0 || t === -1 / 0 || t != t || t && t > -1e3 && t < 1e3 || Oe.call(/e/, e)) return e;
                    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                    if ("number" == typeof t) {
                        var r = t < 0 ? -Pe(-t) : Pe(t);
                        if (r !== t) {
                            var o = String(r),
                                i = Te.call(e, o.length + 1);
                            return we.call(o, n, "$&_") + "." + we.call(we.call(i, /([0-9]{3})/g, "$&_"), /_$/, "")
                        }
                    }
                    return we.call(e, n, "$&_")
                }
                var Ue = ie,
                    We = Ue.custom,
                    Be = Qe(We) ? We : null,
                    $e = function t(e, n, r, o) {
                        var i = n || {};
                        if (tn(i, "quoteStyle") && "single" !== i.quoteStyle && "double" !== i.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                        if (tn(i, "maxStringLength") && ("number" == typeof i.maxStringLength ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : null !== i.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                        var s = !tn(i, "customInspect") || i.customInspect;
                        if ("boolean" != typeof s && "symbol" !== s) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                        if (tn(i, "indent") && null !== i.indent && "\t" !== i.indent && !(parseInt(i.indent, 10) === i.indent && i.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                        if (tn(i, "numericSeparator") && "boolean" != typeof i.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                        var a = i.numericSeparator;
                        if (void 0 === e) return "undefined";
                        if (null === e) return "null";
                        if ("boolean" == typeof e) return e ? "true" : "false";
                        if ("string" == typeof e) return hn(e, i);
                        if ("number" == typeof e) {
                            if (0 === e) return 1 / 0 / e > 0 ? "0" : "-0";
                            var c = String(e);
                            return a ? De(e, c) : c
                        }
                        if ("bigint" == typeof e) {
                            var l = String(e) + "n";
                            return a ? De(e, l) : l
                        }
                        var u = void 0 === i.depth ? 5 : i.depth;
                        if (void 0 === r && (r = 0), r >= u && u > 0 && "object" == typeof e) return ze(e) ? "[Array]" : "[Object]";
                        var h = vn(i, r);
                        if (void 0 === o) o = [];
                        else if (rn(o, e) >= 0) return "[Circular]";

                        function p(e, n, s) {
                            if (n && (o = Ie.call(o)).push(n), s) {
                                var a = {
                                    depth: i.depth
                                };
                                return tn(i, "quoteStyle") && (a.quoteStyle = i.quoteStyle), t(e, a, r + 1, o)
                            }
                            return t(e, i, r + 1, o)
                        }
                        if ("function" == typeof e && !Ve(e)) {
                            var f = nn(e),
                                d = mn(e, p);
                            return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (d.length > 0 ? " { " + ke.call(d, ", ") + " }" : "")
                        }
                        if (Qe(e)) {
                            var g = je ? we.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Re.call(e);
                            return "object" != typeof e || je ? g : fn(g)
                        }
                        if (un(e)) {
                            for (var y = "<" + Se.call(String(e.nodeName)), v = e.attributes || [], _ = 0; _ < v.length; _++) y += " " + v[_].name + "=" + Fe(He(v[_].value), "double", i);
                            return y += ">", e.childNodes && e.childNodes.length && (y += "..."), y += "</" + Se.call(String(e.nodeName)) + ">"
                        }
                        if (ze(e)) {
                            if (0 === e.length) return "[]";
                            var m = mn(e, p);
                            return h && !yn(m) ? "[" + _n(m, h) + "]" : "[ " + ke.call(m, ", ") + " ]"
                        }
                        if (Ze(e)) {
                            var b = mn(e, p);
                            return "cause" in Error.prototype || !("cause" in e) || xe.call(e, "cause") ? 0 === b.length ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + ke.call(b, ", ") + " }" : "{ [" + String(e) + "] " + ke.call(Ce.call("[cause]: " + p(e.cause), b), ", ") + " }"
                        }
                        if ("object" == typeof e && s) {
                            if (Be && "function" == typeof e[Be] && Ue) return Ue(e, {
                                depth: u - r
                            });
                            if ("symbol" !== s && "function" == typeof e.inspect) return e.inspect()
                        }
                        if (on(e)) {
                            var w = [];
                            return le && le.call(e, (function(t, n) {
                                w.push(p(n, e, !0) + " => " + p(t, e))
                            })), gn("Map", ce.call(e), w, h)
                        }
                        if (cn(e)) {
                            var E = [];
                            return fe && fe.call(e, (function(t) {
                                E.push(p(t, e))
                            })), gn("Set", pe.call(e), E, h)
                        }
                        if (sn(e)) return dn("WeakMap");
                        if (ln(e)) return dn("WeakSet");
                        if (an(e)) return dn("WeakRef");
                        if (Xe(e)) return fn(p(Number(e)));
                        if (Je(e)) return fn(p(Ae.call(e)));
                        if (Ke(e)) return fn(ve.call(e));
                        if (Ge(e)) return fn(p(String(e)));
                        if ("undefined" != typeof window && e === window) return "{ [object Window] }";
                        if (e === T) return "{ [object globalThis] }";
                        if (!qe(e) && !Ve(e)) {
                            var S = mn(e, p),
                                O = Me ? Me(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                                C = e instanceof Object ? "" : "null prototype",
                                k = !O && Ne && Object(e) === e && Ne in e ? Te.call(en(e), 8, -1) : C ? "Object" : "",
                                I = (O || "function" != typeof e.constructor ? "" : e.constructor.name ? e.constructor.name + " " : "") + (k || C ? "[" + ke.call(Ce.call([], k || [], C || []), ": ") + "] " : "");
                            return 0 === S.length ? I + "{}" : h ? I + "{" + _n(S, h) + "}" : I + "{ " + ke.call(S, ", ") + " }"
                        }
                        return String(e)
                    };

                function Fe(t, e, n) {
                    var r = "double" === (n.quoteStyle || e) ? '"' : "'";
                    return r + t + r
                }

                function He(t) {
                    return we.call(String(t), /"/g, "&quot;")
                }

                function ze(t) {
                    return !("[object Array]" !== en(t) || Ne && "object" == typeof t && Ne in t)
                }

                function qe(t) {
                    return !("[object Date]" !== en(t) || Ne && "object" == typeof t && Ne in t)
                }

                function Ve(t) {
                    return !("[object RegExp]" !== en(t) || Ne && "object" == typeof t && Ne in t)
                }

                function Ze(t) {
                    return !("[object Error]" !== en(t) || Ne && "object" == typeof t && Ne in t)
                }

                function Ge(t) {
                    return !("[object String]" !== en(t) || Ne && "object" == typeof t && Ne in t)
                }

                function Xe(t) {
                    return !("[object Number]" !== en(t) || Ne && "object" == typeof t && Ne in t)
                }

                function Ke(t) {
                    return !("[object Boolean]" !== en(t) || Ne && "object" == typeof t && Ne in t)
                }

                function Qe(t) {
                    if (je) return t && "object" == typeof t && t instanceof Symbol;
                    if ("symbol" == typeof t) return !0;
                    if (!t || "object" != typeof t || !Re) return !1;
                    try {
                        return Re.call(t), !0
                    } catch (t) {}
                    return !1
                }

                function Je(t) {
                    if (!t || "object" != typeof t || !Ae) return !1;
                    try {
                        return Ae.call(t), !0
                    } catch (t) {}
                    return !1
                }
                var Ye = Object.prototype.hasOwnProperty || function(t) {
                    return t in this
                };

                function tn(t, e) {
                    return Ye.call(t, e)
                }

                function en(t) {
                    return _e.call(t)
                }

                function nn(t) {
                    if (t.name) return t.name;
                    var e = be.call(me.call(t), /^function\s*([\w$]+)/);
                    return e ? e[1] : null
                }

                function rn(t, e) {
                    if (t.indexOf) return t.indexOf(e);
                    for (var n = 0, r = t.length; n < r; n++)
                        if (t[n] === e) return n;
                    return -1
                }

                function on(t) {
                    if (!ce || !t || "object" != typeof t) return !1;
                    try {
                        ce.call(t);
                        try {
                            pe.call(t)
                        } catch (t) {
                            return !0
                        }
                        return t instanceof Map
                    } catch (t) {}
                    return !1
                }

                function sn(t) {
                    if (!de || !t || "object" != typeof t) return !1;
                    try {
                        de.call(t, de);
                        try {
                            ge.call(t, ge)
                        } catch (t) {
                            return !0
                        }
                        return t instanceof WeakMap
                    } catch (t) {}
                    return !1
                }

                function an(t) {
                    if (!ye || !t || "object" != typeof t) return !1;
                    try {
                        return ye.call(t), !0
                    } catch (t) {}
                    return !1
                }

                function cn(t) {
                    if (!pe || !t || "object" != typeof t) return !1;
                    try {
                        pe.call(t);
                        try {
                            ce.call(t)
                        } catch (t) {
                            return !0
                        }
                        return t instanceof Set
                    } catch (t) {}
                    return !1
                }

                function ln(t) {
                    if (!ge || !t || "object" != typeof t) return !1;
                    try {
                        ge.call(t, ge);
                        try {
                            de.call(t, de)
                        } catch (t) {
                            return !0
                        }
                        return t instanceof WeakSet
                    } catch (t) {}
                    return !1
                }

                function un(t) {
                    return !(!t || "object" != typeof t) && ("undefined" != typeof HTMLElement && t instanceof HTMLElement || "string" == typeof t.nodeName && "function" == typeof t.getAttribute)
                }

                function hn(t, e) {
                    if (t.length > e.maxStringLength) {
                        var n = t.length - e.maxStringLength,
                            r = "... " + n + " more character" + (n > 1 ? "s" : "");
                        return hn(Te.call(t, 0, e.maxStringLength), e) + r
                    }
                    return Fe(we.call(we.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, pn), "single", e)
                }

                function pn(t) {
                    var e = t.charCodeAt(0),
                        n = {
                            8: "b",
                            9: "t",
                            10: "n",
                            12: "f",
                            13: "r"
                        } [e];
                    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Ee.call(e.toString(16))
                }

                function fn(t) {
                    return "Object(" + t + ")"
                }

                function dn(t) {
                    return t + " { ? }"
                }

                function gn(t, e, n, r) {
                    return t + " (" + e + ") {" + (r ? _n(n, r) : ke.call(n, ", ")) + "}"
                }

                function yn(t) {
                    for (var e = 0; e < t.length; e++)
                        if (rn(t[e], "\n") >= 0) return !1;
                    return !0
                }

                function vn(t, e) {
                    var n;
                    if ("\t" === t.indent) n = "\t";
                    else {
                        if (!("number" == typeof t.indent && t.indent > 0)) return null;
                        n = ke.call(Array(t.indent + 1), " ")
                    }
                    return {
                        base: n,
                        prev: ke.call(Array(e + 1), n)
                    }
                }

                function _n(t, e) {
                    if (0 === t.length) return "";
                    var n = "\n" + e.prev + e.base;
                    return n + ke.call(t, "," + n) + "\n" + e.prev
                }

                function mn(t, e) {
                    var n = ze(t),
                        r = [];
                    if (n) {
                        r.length = t.length;
                        for (var o = 0; o < t.length; o++) r[o] = tn(t, o) ? e(t[o], t) : ""
                    }
                    var i, s = "function" == typeof Le ? Le(t) : [];
                    if (je) {
                        i = {};
                        for (var a = 0; a < s.length; a++) i["$" + s[a]] = s[a]
                    }
                    for (var c in t) tn(t, c) && (n && String(Number(c)) === c && c < t.length || je && i["$" + c] instanceof Symbol || (Oe.call(/[^\w$]/, c) ? r.push(e(c, t) + ": " + e(t[c], t)) : r.push(c + ": " + e(t[c], t))));
                    if ("function" == typeof Le)
                        for (var l = 0; l < s.length; l++) xe.call(t, s[l]) && r.push("[" + e(s[l]) + "]: " + e(t[s[l]], t));
                    return r
                }
                var bn = Nt,
                    Tn = re,
                    wn = $e,
                    En = R,
                    Sn = bn("%WeakMap%", !0),
                    On = bn("%Map%", !0),
                    Cn = Tn("WeakMap.prototype.get", !0),
                    kn = Tn("WeakMap.prototype.set", !0),
                    In = Tn("WeakMap.prototype.has", !0),
                    Pn = Tn("Map.prototype.get", !0),
                    An = Tn("Map.prototype.set", !0),
                    Ln = Tn("Map.prototype.has", !0),
                    Rn = function(t, e) {
                        for (var n, r = t; null !== (n = r.next); r = n)
                            if (n.key === e) return r.next = n.next, n.next = t.next, t.next = n, n
                    },
                    jn = function(t, e) {
                        var n = Rn(t, e);
                        return n && n.value
                    },
                    Nn = function(t, e, n) {
                        var r = Rn(t, e);
                        r ? r.value = n : t.next = {
                            key: e,
                            next: t.next,
                            value: n
                        }
                    },
                    xn = function(t, e) {
                        return !!Rn(t, e)
                    },
                    Mn = function() {
                        var t, e, n, r = {
                            assert: function(t) {
                                if (!r.has(t)) throw new En("Side channel does not contain " + wn(t))
                            },
                            get: function(r) {
                                if (Sn && r && ("object" == typeof r || "function" == typeof r)) {
                                    if (t) return Cn(t, r)
                                } else if (On) {
                                    if (e) return Pn(e, r)
                                } else if (n) return jn(n, r)
                            },
                            has: function(r) {
                                if (Sn && r && ("object" == typeof r || "function" == typeof r)) {
                                    if (t) return In(t, r)
                                } else if (On) {
                                    if (e) return Ln(e, r)
                                } else if (n) return xn(n, r);
                                return !1
                            },
                            set: function(r, o) {
                                Sn && r && ("object" == typeof r || "function" == typeof r) ? (t || (t = new Sn), kn(t, r, o)) : On ? (e || (e = new On), An(e, r, o)) : (n || (n = {
                                    key: {},
                                    next: null
                                }), Nn(n, r, o))
                            }
                        };
                        return r
                    },
                    Dn = String.prototype.replace,
                    Un = /%20/g,
                    Wn = {
                        RFC1738: "RFC1738",
                        RFC3986: "RFC3986"
                    },
                    Bn = {
                        default: Wn.RFC3986,
                        formatters: {
                            RFC1738: function(t) {
                                return Dn.call(t, Un, "+")
                            },
                            RFC3986: function(t) {
                                return String(t)
                            }
                        },
                        RFC1738: Wn.RFC1738,
                        RFC3986: Wn.RFC3986
                    },
                    $n = Bn,
                    Fn = Object.prototype.hasOwnProperty,
                    Hn = Array.isArray,
                    zn = function() {
                        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
                        return t
                    }(),
                    qn = function(t) {
                        for (; t.length > 1;) {
                            var e = t.pop(),
                                n = e.obj[e.prop];
                            if (Hn(n)) {
                                for (var r = [], o = 0; o < n.length; ++o) void 0 !== n[o] && r.push(n[o]);
                                e.obj[e.prop] = r
                            }
                        }
                    },
                    Vn = function(t, e) {
                        for (var n = e && e.plainObjects ? Object.create(null) : {}, r = 0; r < t.length; ++r) void 0 !== t[r] && (n[r] = t[r]);
                        return n
                    },
                    Zn = function t(e, n, r) {
                        if (!n) return e;
                        if ("object" != typeof n) {
                            if (Hn(e)) e.push(n);
                            else {
                                if (!e || "object" != typeof e) return [e, n];
                                (r && (r.plainObjects || r.allowPrototypes) || !Fn.call(Object.prototype, n)) && (e[n] = !0)
                            }
                            return e
                        }
                        if (!e || "object" != typeof e) return [e].concat(n);
                        var o = e;
                        return Hn(e) && !Hn(n) && (o = Vn(e, r)), Hn(e) && Hn(n) ? (n.forEach((function(n, o) {
                            if (Fn.call(e, o)) {
                                var i = e[o];
                                i && "object" == typeof i && n && "object" == typeof n ? e[o] = t(i, n, r) : e.push(n)
                            } else e[o] = n
                        })), e) : Object.keys(n).reduce((function(e, o) {
                            var i = n[o];
                            return Fn.call(e, o) ? e[o] = t(e[o], i, r) : e[o] = i, e
                        }), o)
                    },
                    Gn = 1024,
                    Xn = {
                        arrayToObject: Vn,
                        assign: function(t, e) {
                            return Object.keys(e).reduce((function(t, n) {
                                return t[n] = e[n], t
                            }), t)
                        },
                        combine: function(t, e) {
                            return [].concat(t, e)
                        },
                        compact: function(t) {
                            for (var e = [{
                                    obj: {
                                        o: t
                                    },
                                    prop: "o"
                                }], n = [], r = 0; r < e.length; ++r)
                                for (var o = e[r], i = o.obj[o.prop], s = Object.keys(i), a = 0; a < s.length; ++a) {
                                    var c = s[a],
                                        l = i[c];
                                    "object" == typeof l && null !== l && -1 === n.indexOf(l) && (e.push({
                                        obj: i,
                                        prop: c
                                    }), n.push(l))
                                }
                            return qn(e), t
                        },
                        decode: function(t, e, n) {
                            var r = t.replace(/\+/g, " ");
                            if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
                            try {
                                return decodeURIComponent(r)
                            } catch (t) {
                                return r
                            }
                        },
                        encode: function(t, e, n, r, o) {
                            if (0 === t.length) return t;
                            var i = t;
                            if ("symbol" == typeof t ? i = Symbol.prototype.toString.call(t) : "string" != typeof t && (i = String(t)), "iso-8859-1" === n) return escape(i).replace(/%u[0-9a-f]{4}/gi, (function(t) {
                                return "%26%23" + parseInt(t.slice(2), 16) + "%3B"
                            }));
                            for (var s = "", a = 0; a < i.length; a += Gn) {
                                for (var c = i.length >= Gn ? i.slice(a, a + Gn) : i, l = [], u = 0; u < c.length; ++u) {
                                    var h = c.charCodeAt(u);
                                    45 === h || 46 === h || 95 === h || 126 === h || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === $n.RFC1738 && (40 === h || 41 === h) ? l[l.length] = c.charAt(u) : h < 128 ? l[l.length] = zn[h] : h < 2048 ? l[l.length] = zn[192 | h >> 6] + zn[128 | 63 & h] : h < 55296 || h >= 57344 ? l[l.length] = zn[224 | h >> 12] + zn[128 | h >> 6 & 63] + zn[128 | 63 & h] : (u += 1, h = 65536 + ((1023 & h) << 10 | 1023 & c.charCodeAt(u)), l[l.length] = zn[240 | h >> 18] + zn[128 | h >> 12 & 63] + zn[128 | h >> 6 & 63] + zn[128 | 63 & h])
                                }
                                s += l.join("")
                            }
                            return s
                        },
                        isBuffer: function(t) {
                            return !(!t || "object" != typeof t || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)))
                        },
                        isRegExp: function(t) {
                            return "[object RegExp]" === Object.prototype.toString.call(t)
                        },
                        maybeMap: function(t, e) {
                            if (Hn(t)) {
                                for (var n = [], r = 0; r < t.length; r += 1) n.push(e(t[r]));
                                return n
                            }
                            return e(t)
                        },
                        merge: Zn
                    },
                    Kn = Mn,
                    Qn = Xn,
                    Jn = Bn,
                    Yn = Object.prototype.hasOwnProperty,
                    tr = {
                        brackets: function(t) {
                            return t + "[]"
                        },
                        comma: "comma",
                        indices: function(t, e) {
                            return t + "[" + e + "]"
                        },
                        repeat: function(t) {
                            return t
                        }
                    },
                    er = Array.isArray,
                    nr = Array.prototype.push,
                    rr = function(t, e) {
                        nr.apply(t, er(e) ? e : [e])
                    },
                    or = Date.prototype.toISOString,
                    ir = Jn.default,
                    sr = {
                        addQueryPrefix: !1,
                        allowDots: !1,
                        allowEmptyArrays: !1,
                        arrayFormat: "indices",
                        charset: "utf-8",
                        charsetSentinel: !1,
                        delimiter: "&",
                        encode: !0,
                        encodeDotInKeys: !1,
                        encoder: Qn.encode,
                        encodeValuesOnly: !1,
                        format: ir,
                        formatter: Jn.formatters[ir],
                        indices: !1,
                        serializeDate: function(t) {
                            return or.call(t)
                        },
                        skipNulls: !1,
                        strictNullHandling: !1
                    },
                    ar = function(t) {
                        return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || "symbol" == typeof t || "bigint" == typeof t
                    },
                    cr = {},
                    lr = function t(e, n, r, o, i, s, a, c, l, u, h, p, f, d, g, y, v, _) {
                        for (var m = e, b = _, T = 0, w = !1; void 0 !== (b = b.get(cr)) && !w;) {
                            var E = b.get(e);
                            if (T += 1, void 0 !== E) {
                                if (E === T) throw new RangeError("Cyclic object value");
                                w = !0
                            }
                            void 0 === b.get(cr) && (T = 0)
                        }
                        if ("function" == typeof u ? m = u(n, m) : m instanceof Date ? m = f(m) : "comma" === r && er(m) && (m = Qn.maybeMap(m, (function(t) {
                                return t instanceof Date ? f(t) : t
                            }))), null === m) {
                            if (s) return l && !y ? l(n, sr.encoder, v, "key", d) : n;
                            m = ""
                        }
                        if (ar(m) || Qn.isBuffer(m)) return l ? [g(y ? n : l(n, sr.encoder, v, "key", d)) + "=" + g(l(m, sr.encoder, v, "value", d))] : [g(n) + "=" + g(String(m))];
                        var S, O = [];
                        if (void 0 === m) return O;
                        if ("comma" === r && er(m)) y && l && (m = Qn.maybeMap(m, l)), S = [{
                            value: m.length > 0 ? m.join(",") || null : void 0
                        }];
                        else if (er(u)) S = u;
                        else {
                            var C = Object.keys(m);
                            S = h ? C.sort(h) : C
                        }
                        var k = c ? n.replace(/\./g, "%2E") : n,
                            I = o && er(m) && 1 === m.length ? k + "[]" : k;
                        if (i && er(m) && 0 === m.length) return I + "[]";
                        for (var P = 0; P < S.length; ++P) {
                            var A = S[P],
                                L = "object" == typeof A && void 0 !== A.value ? A.value : m[A];
                            if (!a || null !== L) {
                                var R = p && c ? A.replace(/\./g, "%2E") : A,
                                    j = er(m) ? "function" == typeof r ? r(I, R) : I : I + (p ? "." + R : "[" + R + "]");
                                _.set(e, T);
                                var N = Kn();
                                N.set(cr, _), rr(O, t(L, j, r, o, i, s, a, c, "comma" === r && y && er(m) ? null : l, u, h, p, f, d, g, y, v, N))
                            }
                        }
                        return O
                    },
                    ur = function(t) {
                        if (!t) return sr;
                        if (void 0 !== t.allowEmptyArrays && "boolean" != typeof t.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                        if (void 0 !== t.encodeDotInKeys && "boolean" != typeof t.encodeDotInKeys) throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
                        if (null !== t.encoder && void 0 !== t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
                        var e = t.charset || sr.charset;
                        if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                        var n = Jn.default;
                        if (void 0 !== t.format) {
                            if (!Yn.call(Jn.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                            n = t.format
                        }
                        var r, o = Jn.formatters[n],
                            i = sr.filter;
                        if (("function" == typeof t.filter || er(t.filter)) && (i = t.filter), r = t.arrayFormat in tr ? t.arrayFormat : "indices" in t ? t.indices ? "indices" : "repeat" : sr.arrayFormat, "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
                        var s = void 0 === t.allowDots ? !0 === t.encodeDotInKeys || sr.allowDots : !!t.allowDots;
                        return {
                            addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : sr.addQueryPrefix,
                            allowDots: s,
                            allowEmptyArrays: "boolean" == typeof t.allowEmptyArrays ? !!t.allowEmptyArrays : sr.allowEmptyArrays,
                            arrayFormat: r,
                            charset: e,
                            charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : sr.charsetSentinel,
                            commaRoundTrip: t.commaRoundTrip,
                            delimiter: void 0 === t.delimiter ? sr.delimiter : t.delimiter,
                            encode: "boolean" == typeof t.encode ? t.encode : sr.encode,
                            encodeDotInKeys: "boolean" == typeof t.encodeDotInKeys ? t.encodeDotInKeys : sr.encodeDotInKeys,
                            encoder: "function" == typeof t.encoder ? t.encoder : sr.encoder,
                            encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : sr.encodeValuesOnly,
                            filter: i,
                            format: n,
                            formatter: o,
                            serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : sr.serializeDate,
                            skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : sr.skipNulls,
                            sort: "function" == typeof t.sort ? t.sort : null,
                            strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : sr.strictNullHandling
                        }
                    },
                    hr = function(t, e) {
                        var n, r = t,
                            o = ur(e);
                        "function" == typeof o.filter ? r = (0, o.filter)("", r) : er(o.filter) && (n = o.filter);
                        var i = [];
                        if ("object" != typeof r || null === r) return "";
                        var s = tr[o.arrayFormat],
                            a = "comma" === s && o.commaRoundTrip;
                        n || (n = Object.keys(r)), o.sort && n.sort(o.sort);
                        for (var c = Kn(), l = 0; l < n.length; ++l) {
                            var u = n[l];
                            o.skipNulls && null === r[u] || rr(i, lr(r[u], u, s, a, o.allowEmptyArrays, o.strictNullHandling, o.skipNulls, o.encodeDotInKeys, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset, c))
                        }
                        var h = i.join(o.delimiter),
                            p = !0 === o.addQueryPrefix ? "?" : "";
                        return o.charsetSentinel && ("iso-8859-1" === o.charset ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), h.length > 0 ? p + h : ""
                    },
                    pr = Xn,
                    fr = Object.prototype.hasOwnProperty,
                    dr = Array.isArray,
                    gr = {
                        allowDots: !1,
                        allowEmptyArrays: !1,
                        allowPrototypes: !1,
                        allowSparse: !1,
                        arrayLimit: 20,
                        charset: "utf-8",
                        charsetSentinel: !1,
                        comma: !1,
                        decodeDotInKeys: !1,
                        decoder: pr.decode,
                        delimiter: "&",
                        depth: 5,
                        duplicates: "combine",
                        ignoreQueryPrefix: !1,
                        interpretNumericEntities: !1,
                        parameterLimit: 1e3,
                        parseArrays: !0,
                        plainObjects: !1,
                        strictNullHandling: !1
                    },
                    yr = function(t) {
                        return t.replace(/&#(\d+);/g, (function(t, e) {
                            return String.fromCharCode(parseInt(e, 10))
                        }))
                    },
                    vr = function(t, e) {
                        return t && "string" == typeof t && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
                    },
                    _r = "utf8=%26%2310003%3B",
                    mr = "utf8=%E2%9C%93",
                    br = function(t, e) {
                        var n = {
                                __proto__: null
                            },
                            r = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
                        r = r.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                        var o, i = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
                            s = r.split(e.delimiter, i),
                            a = -1,
                            c = e.charset;
                        if (e.charsetSentinel)
                            for (o = 0; o < s.length; ++o) 0 === s[o].indexOf("utf8=") && (s[o] === mr ? c = "utf-8" : s[o] === _r && (c = "iso-8859-1"), a = o, o = s.length);
                        for (o = 0; o < s.length; ++o)
                            if (o !== a) {
                                var l, u, h = s[o],
                                    p = h.indexOf("]="),
                                    f = -1 === p ? h.indexOf("=") : p + 1; - 1 === f ? (l = e.decoder(h, gr.decoder, c, "key"), u = e.strictNullHandling ? null : "") : (l = e.decoder(h.slice(0, f), gr.decoder, c, "key"), u = pr.maybeMap(vr(h.slice(f + 1), e), (function(t) {
                                    return e.decoder(t, gr.decoder, c, "value")
                                }))), u && e.interpretNumericEntities && "iso-8859-1" === c && (u = yr(u)), h.indexOf("[]=") > -1 && (u = dr(u) ? [u] : u);
                                var d = fr.call(n, l);
                                d && "combine" === e.duplicates ? n[l] = pr.combine(n[l], u) : d && "last" !== e.duplicates || (n[l] = u)
                            } return n
                    },
                    Tr = function(t, e, n, r) {
                        for (var o = r ? e : vr(e, n), i = t.length - 1; i >= 0; --i) {
                            var s, a = t[i];
                            if ("[]" === a && n.parseArrays) s = n.allowEmptyArrays && ("" === o || n.strictNullHandling && null === o) ? [] : [].concat(o);
                            else {
                                s = n.plainObjects ? Object.create(null) : {};
                                var c = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                                    l = n.decodeDotInKeys ? c.replace(/%2E/g, ".") : c,
                                    u = parseInt(l, 10);
                                n.parseArrays || "" !== l ? !isNaN(u) && a !== l && String(u) === l && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (s = [])[u] = o : "__proto__" !== l && (s[l] = o) : s = {
                                    0: o
                                }
                            }
                            o = s
                        }
                        return o
                    },
                    wr = function(t, e, n, r) {
                        if (t) {
                            var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                                i = /(\[[^[\]]*])/,
                                s = /(\[[^[\]]*])/g,
                                a = n.depth > 0 && i.exec(o),
                                c = a ? o.slice(0, a.index) : o,
                                l = [];
                            if (c) {
                                if (!n.plainObjects && fr.call(Object.prototype, c) && !n.allowPrototypes) return;
                                l.push(c)
                            }
                            for (var u = 0; n.depth > 0 && null !== (a = s.exec(o)) && u < n.depth;) {
                                if (u += 1, !n.plainObjects && fr.call(Object.prototype, a[1].slice(1, -1)) && !n.allowPrototypes) return;
                                l.push(a[1])
                            }
                            return a && l.push("[" + o.slice(a.index) + "]"), Tr(l, e, n, r)
                        }
                    },
                    Er = function(t) {
                        if (!t) return gr;
                        if (void 0 !== t.allowEmptyArrays && "boolean" != typeof t.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                        if (void 0 !== t.decodeDotInKeys && "boolean" != typeof t.decodeDotInKeys) throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
                        if (null !== t.decoder && void 0 !== t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
                        if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                        var e = void 0 === t.charset ? gr.charset : t.charset,
                            n = void 0 === t.duplicates ? gr.duplicates : t.duplicates;
                        if ("combine" !== n && "first" !== n && "last" !== n) throw new TypeError("The duplicates option must be either combine, first, or last");
                        return {
                            allowDots: void 0 === t.allowDots ? !0 === t.decodeDotInKeys || gr.allowDots : !!t.allowDots,
                            allowEmptyArrays: "boolean" == typeof t.allowEmptyArrays ? !!t.allowEmptyArrays : gr.allowEmptyArrays,
                            allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : gr.allowPrototypes,
                            allowSparse: "boolean" == typeof t.allowSparse ? t.allowSparse : gr.allowSparse,
                            arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : gr.arrayLimit,
                            charset: e,
                            charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : gr.charsetSentinel,
                            comma: "boolean" == typeof t.comma ? t.comma : gr.comma,
                            decodeDotInKeys: "boolean" == typeof t.decodeDotInKeys ? t.decodeDotInKeys : gr.decodeDotInKeys,
                            decoder: "function" == typeof t.decoder ? t.decoder : gr.decoder,
                            delimiter: "string" == typeof t.delimiter || pr.isRegExp(t.delimiter) ? t.delimiter : gr.delimiter,
                            depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : gr.depth,
                            duplicates: n,
                            ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
                            interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : gr.interpretNumericEntities,
                            parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : gr.parameterLimit,
                            parseArrays: !1 !== t.parseArrays,
                            plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : gr.plainObjects,
                            strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : gr.strictNullHandling
                        }
                    },
                    Sr = w({
                        formats: Bn,
                        parse: function(t, e) {
                            var n = Er(e);
                            if ("" === t || null == t) return n.plainObjects ? Object.create(null) : {};
                            for (var r = "string" == typeof t ? br(t, n) : t, o = n.plainObjects ? Object.create(null) : {}, i = Object.keys(r), s = 0; s < i.length; ++s) {
                                var a = i[s],
                                    c = wr(a, r[a], n, "string" == typeof t);
                                o = pr.merge(o, c, n)
                            }
                            return !0 === n.allowSparse ? o : pr.compact(o)
                        },
                        stringify: hr
                    });
                const Or = t => {
                        let {
                            payload: e,
                            headers: n
                        } = t;
                        return !(!e || (null == n ? void 0 : n["content-type"]))
                    },
                    Cr = (t, e) => {
                        const n = null == e ? void 0 : e["content-type"];
                        return n ? n.toLowerCase().includes(m.FormUrlEncoded.toLowerCase()) ? m.FormUrlEncoded : n.toLowerCase().includes(m.Json.toLowerCase()) ? m.Json : void 0 : t
                    },
                    kr = t => {
                        let {
                            payload: e,
                            contentType: n
                        } = t;
                        return n === m.FormUrlEncoded ? Sr.stringify(e) : n === m.Json ? JSON.stringify(e) : e
                    },
                    Ir = t => [...t].reduce(((t, e) => {
                        let [n, r] = e;
                        return t[n] = r, t
                    }), {}),
                    Pr = t => {
                        let {
                            responseHeaders: e,
                            localeHeader: n,
                            currentLocale: r,
                            setLocale: o
                        } = t;
                        const i = n.toLowerCase(),
                            s = Object.keys(e).find((t => t.toLowerCase() === i)),
                            a = s ? e[s] : void 0;
                        a && r && a !== r && (null == o || o(a))
                    },
                    Ar = t => null == t ? void 0 : t.replace("outsystems://", "https://"),
                    Lr = (t, e, n) => {
                        var r;
                        let o;
                        try {
                            t && (o = JSON.parse(t))
                        } catch (o) {
                            null === (r = null == e ? void 0 : e.clientError) || void 0 === r || r.call(e, {
                                error: o,
                                category: n,
                                clientMessage: `Could not parse response: ${t}`,
                                internalMessage: "Could not parse response."
                            })
                        }
                        return o
                    },
                    Rr = (t, e) => {
                        if (!e) return t;
                        const n = Sr.stringify(e);
                        if (n) {
                            const e = t.includes("?") ? "&" : "?";
                            return `${t}${e}${n}`
                        }
                        return t
                    };

                function jr() {
                    if ("undefined" != typeof window) return window;
                    if (void 0 !== E) return E;
                    if ("undefined" != typeof globalThis) return globalThis;
                    if ("undefined" != typeof self) return self;
                    throw new Error("unable to locate global object")
                }

                function Nr(t, n, r) {
                    return e(this, void 0, void 0, (function*() {
                        return (null == t ? void 0 : t.startActiveClientSpan) ? t.startActiveClientSpan(n, (t => e(this, void 0, void 0, (function*() {
                            try {
                                return yield r()
                            } finally {
                                null == t || t.end()
                            }
                        })))) : r()
                    }))
                }
                const xr = "os-auth-retry",
                    Mr = t => {
                        let {
                            fetchClient: n,
                            getToken: r,
                            retryOnUnauthorizedResponse: o = !0
                        } = t, i = n;
                        return r && (i = (t, i) => e(void 0, void 0, void 0, (function*() {
                            yield Dr({
                                config: i,
                                getToken: r
                            });
                            let e = yield n(t, i);
                            return o && (e.ok || (e = yield Ur({
                                response: e,
                                fetchClient: n,
                                config: Object.assign({}, i),
                                getToken: r
                            }))), e
                        }))), i
                    },
                    Dr = t => e(void 0, [t], void 0, (function(t) {
                        let {
                            config: e = {},
                            getToken: n
                        } = t;
                        return function*() {
                            var t;
                            const r = yield n();
                            return r && (e.headers = Object.assign(Object.assign({}, null !== (t = e.headers) && void 0 !== t ? t : {}), {
                                Authorization: r
                            })), e
                        }()
                    })),
                    Ur = t => e(void 0, [t], void 0, (function(t) {
                        let {
                            response: e,
                            fetchClient: n,
                            config: r = {},
                            getToken: o
                        } = t;
                        return function*() {
                            var t;
                            if (401 !== e.status || "true" === e.headers.get(xr)) return e;
                            const i = yield o(!0);
                            return i ? (r.headers = Object.assign(Object.assign({}, null !== (t = r.headers) && void 0 !== t ? t : {}), {
                                Authorization: i,
                                [xr]: "true"
                            }), n(e.url, r)) : e
                        }()
                    }));
                var Wr, Br, $r, Fr, Hr, zr, qr, Vr, Zr, Gr, Xr, Kr, Qr, Jr, Yr, to, eo, no, ro, oo;
                const io = "",
                    so = 1e4,
                    ao = "",
                    co = "FetchHttpClient",
                    lo = t => e(void 0, void 0, void 0, (function*() {
                        const e = yield t.text();
                        return "" === e ? void 0 : JSON.parse(e)
                    }));
                null !== (Wr = AbortSignal.timeout) && void 0 !== Wr || (AbortSignal.timeout = function(t) {
                    const e = new AbortController;
                    return setTimeout((() => e.abort()), t), e.signal
                });
                let uo = t.HttpClient = t.FetchHttpClient = class {
                    constructor() {
                        let {
                            baseUrl: t = io,
                            headers: e = {},
                            localeHeader: n = ao,
                            getLocale: o,
                            setLocale: i,
                            fetchClient: s = jr().fetch,
                            logger: a,
                            loadTrace: c,
                            getToken: l = () => Promise.resolve(void 0)
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Br.add(this), $r.set(this, void 0), Fr.set(this, void 0), Hr.set(this, void 0), zr.set(this, void 0), qr.set(this, void 0), Vr.set(this, void 0), Zr.set(this, void 0), Gr.set(this, void 0), r(this, Fr, t), r(this, Hr, e), r(this, zr, n), r(this, qr, o), r(this, Vr, i), r(this, Gr, a), r(this, Zr, c), r(this, $r, this.addAuthInterceptors(s, l))
                    }
                    addAuthInterceptors(t, e) {
                        return Mr({
                            fetchClient: t,
                            getToken: e
                        })
                    }
                    post(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var r = this;
                            let {
                                url: s,
                                payload: a,
                                params: c,
                                headers: l,
                                contentType: u = m.FormUrlEncoded,
                                timeout: h,
                                timeoutHandler: p,
                                useLocaleInfo: f = !1,
                                baseURL: d,
                                responseHandler: g
                            } = t;
                            return function*() {
                                var t, y, v, _, m, b, T;
                                null === (y = null === (t = n(r, Gr, "f")) || void 0 === t ? void 0 : t.setActiveSpanAsNonAggregable) || void 0 === y || y.call(t);
                                const w = f ? null === (v = n(r, qr, "f")) || void 0 === v ? void 0 : v.call(r) : void 0,
                                    [E, S] = n(r, Br, "m", Xr).call(r, s, d, c);
                                try {
                                    null === (m = null === (_ = n(r, Gr, "f")) || void 0 === _ ? void 0 : _.debug) || void 0 === m || m.call(_, {
                                        category: co,
                                        message: `POST ${S}`
                                    });
                                    const t = Cr(u, l),
                                        o = {
                                            body: a ? kr({
                                                payload: a,
                                                contentType: t
                                            }) : void 0,
                                            headers: yield n(r, Br, "m", ro).call(r, l, w, Or({
                                                payload: a,
                                                headers: l
                                            }) ? u : void 0),
                                            method: "POST",
                                            signal: AbortSignal.timeout(h ? 1e3 * h : so)
                                        },
                                        c = () => e(r, void 0, void 0, (function*() {
                                            return n(this, $r, "f").call(this, E, o)
                                        })),
                                        d = yield Nr(n(r, Gr, "f"), "POST", c);
                                    if (!d.ok) throw yield n(r, Br, "m", eo).call(r, d, s, "POST", p);
                                    const y = yield lo(d);
                                    if (n(r, Br, "m", Jr).call(r, d, f, w), "function" == typeof g) try {
                                        const t = {};
                                        d.headers.forEach(((e, n) => t[n] = e)), g({
                                            data: y,
                                            responseHeaders: t
                                        })
                                    } catch (t) {
                                        null === (T = null === (b = n(r, Gr, "f")) || void 0 === b ? void 0 : b.error) || void 0 === T || T.call(b, {
                                            category: co,
                                            message: `Handler Error: POST ${S}`,
                                            errorCode: i.Communication_Default,
                                            error: t
                                        })
                                    }
                                    return y
                                } catch (t) {
                                    throw t instanceof o ? t : yield n(r, Br, "m", to).call(r, t, s, "POST", p)
                                }
                            }()
                        }))
                    }
                    get(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                url: r,
                                params: i,
                                headers: s,
                                useLocaleInfo: a,
                                timeout: c,
                                timeoutHandler: l,
                                responseType: u = "json",
                                baseURL: h
                            } = t;
                            return function*() {
                                const t = yield n(e, Br, "m", Qr).call(e, {
                                    url: r,
                                    params: i,
                                    headers: s,
                                    useLocaleInfo: a,
                                    timeout: c,
                                    timeoutHandler: l,
                                    baseURL: h
                                });
                                try {
                                    return "blob" === u ? yield t.blob(): "json" === u ? yield lo(t): Promise.resolve()
                                } catch (t) {
                                    throw t instanceof o ? t : yield n(e, Br, "m", to).call(e, t, r, "GET", l)
                                }
                            }()
                        }))
                    }
                    getResponseUrl(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                url: r,
                                params: o,
                                headers: i,
                                useLocaleInfo: s,
                                timeout: a,
                                timeoutHandler: c,
                                baseURL: l
                            } = t;
                            return function*() {
                                return (yield n(e, Br, "m", Qr).call(e, {
                                    url: r,
                                    params: o,
                                    headers: i,
                                    useLocaleInfo: s,
                                    timeout: a,
                                    timeoutHandler: c,
                                    baseURL: l
                                })).url
                            }()
                        }))
                    }
                };
                $r = new WeakMap, Fr = new WeakMap, Hr = new WeakMap, zr = new WeakMap, qr = new WeakMap, Vr = new WeakMap, Zr = new WeakMap, Gr = new WeakMap, Br = new WeakSet, Xr = function(t, e, r) {
                    var o;
                    const i = null !== (o = Ar(t)) && void 0 !== o ? o : "",
                        s = Ar(e || n(this, Fr, "f")),
                        a = s && !t.includes("://") ? `${s.replace(/\/$/,"")}/${t.replace(/^\/+/,"")}` : i;
                    return [Rr(a, r), i]
                }, Kr = function(t, n) {
                    return e(this, void 0, void 0, (function*() {
                        t === b.Timeout && n && (yield n())
                    }))
                }, Qr = function(t) {
                    return e(this, arguments, void 0, (function(t) {
                        var r = this;
                        let {
                            url: i,
                            params: s,
                            headers: a,
                            useLocaleInfo: c = !1,
                            timeout: l,
                            timeoutHandler: u,
                            baseURL: h
                        } = t;
                        return function*() {
                            var t, p, f, d, g;
                            null === (p = null === (t = n(r, Gr, "f")) || void 0 === t ? void 0 : t.setActiveSpanAsNonAggregable) || void 0 === p || p.call(t);
                            const y = c ? null === (f = n(r, qr, "f")) || void 0 === f ? void 0 : f.call(r) : void 0,
                                [v, _] = n(r, Br, "m", Xr).call(r, i, h, s);
                            try {
                                null === (g = null === (d = n(r, Gr, "f")) || void 0 === d ? void 0 : d.debug) || void 0 === g || g.call(d, {
                                    category: co,
                                    message: `GET ${_}`
                                });
                                const t = {
                                        headers: yield n(r, Br, "m", ro).call(r, a, y),
                                        signal: AbortSignal.timeout(l ? 1e3 * l : so)
                                    },
                                    o = () => e(r, void 0, void 0, (function*() {
                                        return n(this, $r, "f").call(this, v, t)
                                    })),
                                    s = yield Nr(n(r, Gr, "f"), "GET", o);
                                if (!s.ok) throw yield n(r, Br, "m", eo).call(r, s, i, "GET", u);
                                return n(r, Br, "m", Jr).call(r, s, c, y), s
                            } catch (t) {
                                throw t instanceof o ? t : yield n(r, Br, "m", to).call(r, t, i, "GET", u)
                            }
                        }()
                    }))
                }, Jr = function(t, e, r) {
                    e && n(this, Vr, "f") && (null == t ? void 0 : t.headers) && Pr({
                        responseHeaders: Ir(t.headers.entries()),
                        localeHeader: n(this, zr, "f"),
                        currentLocale: r,
                        setLocale: n(this, Vr, "f")
                    })
                }, Yr = function(t, e) {
                    return "TimeoutError" === (null == t ? void 0 : t.name) || "AbortError" === (null == t ? void 0 : t.name) || 408 === e ? b.Timeout : 401 === e ? b.Unauthorized : b.Unknown
                }, to = function(t, r, s, a) {
                    return e(this, void 0, void 0, (function*() {
                        var e, c;
                        const l = n(this, Br, "m", Yr).call(this, t);
                        yield n(this, Br, "m", Kr).call(this, l, a);
                        let u = i.Communication_Default;
                        return l === b.Timeout ? u = i.Communication_Timeout : l === b.Unauthorized && (u = i.Communication_Unauthorized), null === (c = null === (e = n(this, Gr, "f")) || void 0 === e ? void 0 : e.error) || void 0 === c || c.call(e, {
                            category: co,
                            message: `${s} ${r} - ${t.message}`,
                            errorCode: u,
                            error: t
                        }), new o(`${s} ${r} - ${t.message}`, u, void 0, void 0, co)
                    }))
                }, eo = function(t, r, i, s) {
                    return e(this, void 0, void 0, (function*() {
                        var e, c, l;
                        const u = n(this, Br, "m", Yr).call(this, void 0, t.status);
                        yield n(this, Br, "m", Kr).call(this, u, s);
                        const h = a(null !== (e = t.status) && void 0 !== e ? e : ""),
                            p = yield n(this, Br, "m", no).call(this, t);
                        return null === (l = null === (c = n(this, Gr, "f")) || void 0 === c ? void 0 : c.error) || void 0 === l || l.call(c, {
                            category: co,
                            message: `${i} ${r} - ${t.status} ${t.statusText}`,
                            errorCode: h,
                            error: new Error(`Fetch ${i} Error - ${t.status} ${t.statusText}`)
                        }), new o(`${i} ${r} - ${t.status} ${t.statusText}`, h, t.status, p, co)
                    }))
                }, no = function(t) {
                    return e(this, void 0, void 0, (function*() {
                        try {
                            const e = /application\/.*json/i,
                                n = t.headers.get("content-type");
                            return n && e.test(n) ? yield t.json(): yield t.text()
                        } catch (t) {
                            return
                        }
                    }))
                }, ro = function(t, e) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    var o;
                    const i = Object.assign(Object.assign(Object.assign(Object.assign({}, n(this, Hr, "f")), t), e ? {
                        [n(this, zr, "f")]: e
                    } : {}), (null == t ? void 0 : t["content-type"]) || r ? {
                        "content-type": null !== (o = null == t ? void 0 : t["content-type"]) && void 0 !== o ? o : r
                    } : {});
                    return r && (i["content-type"] = r), n(this, Br, "m", oo).call(this, i)
                }, oo = function(t) {
                    return e(this, void 0, void 0, (function*() {
                        var e, r;
                        try {
                            return yield f(t, (() => {
                                var t;
                                return null === (t = n(this, Zr, "f")) || void 0 === t ? void 0 : t.call(this)
                            }))
                        } catch (t) {
                            null === (r = null === (e = n(this, Gr, "f")) || void 0 === e ? void 0 : e.error) || void 0 === r || r.call(e, {
                                category: co,
                                message: "Error loading trace information",
                                errorCode: i.Communication_Default,
                                error: t
                            })
                        }
                        return t
                    }))
                };
                class ho extends uo {
                    addAuthInterceptors(t, e) {
                        return Mr({
                            fetchClient: t,
                            getToken: e,
                            retryOnUnauthorizedResponse: !1
                        })
                    }
                }
                t.LoggerHttpClient = ho;
                const po = (t, e, n) => {
                        try {
                            return go(t, e, n)
                        } catch (r) {
                            return yo(t, e, n)
                        }
                    },
                    fo = t => {
                        try {
                            return new URL(t), !0
                        } catch (t) {
                            return !1
                        }
                    },
                    go = (t, e, n) => {
                        const r = fo(null != e ? e : "") ? new URL(t, e) : new URL(t);
                        return Object.entries(null != n ? n : {}).forEach((t => {
                            let [e, n] = t;
                            r.searchParams.append(e, null != n ? n : "")
                        })), r.toString()
                    },
                    yo = (t, e, n) => {
                        const r = `${e||""}/${t}${n?"?":""}`;
                        let o = "";
                        return Object.entries(null != n ? n : {}).forEach((t => {
                            let [e, n] = t;
                            o += `${o?"&":""}${e}=${encodeURIComponent(n)}`
                        })), `${r}${o}`.replace(/\/+/g, "/")
                    };
                var vo, _o, mo, bo, To, wo, Eo, So, Oo, Co, ko, Io, Po;
                const Ao = "",
                    Lo = "NativeHttpClient",
                    Ro = "";
                class jo {
                    constructor(t) {
                        let {
                            baseUrl: e = Ao,
                            headers: n = {},
                            localeHeader: o = Ro,
                            getLocale: i,
                            setLocale: s,
                            httpClientInstance: a,
                            logger: c,
                            loadTrace: l,
                            getToken: u
                        } = t;
                        vo.add(this), _o.set(this, void 0), mo.set(this, void 0), bo.set(this, void 0), To.set(this, void 0), wo.set(this, void 0), Eo.set(this, void 0), So.set(this, void 0), Oo.set(this, void 0), r(this, _o, o), r(this, mo, i), r(this, bo, s), r(this, To, c), this.httpClientInstance = a, r(this, So, e), r(this, Oo, n), r(this, Eo, l), r(this, wo, null != u ? u : () => Promise.resolve(void 0))
                    }
                    post(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                url: r,
                                payload: o,
                                params: s,
                                headers: a,
                                contentType: c = m.FormUrlEncoded,
                                timeout: l,
                                timeoutHandler: u,
                                useLocaleInfo: h,
                                baseURL: p,
                                responseHandler: f
                            } = t;
                            return function*() {
                                var t, d, g;
                                const y = kr({
                                        payload: o,
                                        contentType: c
                                    }),
                                    v = () => n(e, vo, "m", ko).call(e, {
                                        method: "POST",
                                        url: r,
                                        params: s,
                                        baseURL: p,
                                        headers: a,
                                        timeout: l,
                                        timeoutHandler: u,
                                        useLocaleInfo: h,
                                        contentType: c,
                                        payload: y
                                    }),
                                    _ = yield Nr(n(e, To, "f"), "POST", v), m = Lr(_.responseText, n(e, To, "f"), Lo);
                                if ("function" == typeof f) try {
                                    f({
                                        data: m,
                                        responseHeaders: null !== (t = _.responseHeaders) && void 0 !== t ? t : {}
                                    })
                                } catch (t) {
                                    null === (g = null === (d = n(e, To, "f")) || void 0 === d ? void 0 : d.error) || void 0 === g || g.call(d, {
                                        category: Lo,
                                        message: `Handler Error: Post ${_.responseUrl}`,
                                        errorCode: i.Communication_Default,
                                        error: t
                                    })
                                }
                                return m
                            }()
                        }))
                    }
                    get(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                url: r,
                                params: o,
                                headers: i,
                                responseType: s = "json",
                                useLocaleInfo: a,
                                timeout: c,
                                timeoutHandler: l,
                                baseURL: u
                            } = t;
                            return function*() {
                                const t = "blob" === s,
                                    h = () => n(e, vo, "m", ko).call(e, {
                                        method: "GET",
                                        url: r,
                                        params: o,
                                        baseURL: u,
                                        headers: i,
                                        timeout: c,
                                        timeoutHandler: l,
                                        useLocaleInfo: a,
                                        responseType: t ? "blob" : void 0
                                    }),
                                    p = yield Nr(n(e, To, "f"), "GET", h);
                                return t ? p.response : "none" !== s ? Lr(p.responseText, n(e, To, "f"), Lo) : void 0
                            }()
                        }))
                    }
                    getResponseUrl(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                url: r,
                                params: o,
                                headers: s,
                                useLocaleInfo: a,
                                timeout: c,
                                timeoutHandler: l,
                                baseURL: u
                            } = t;
                            return function*() {
                                var t, h;
                                const p = () => n(e, vo, "m", ko).call(e, {
                                        method: "GET",
                                        url: r,
                                        params: o,
                                        baseURL: u,
                                        headers: s,
                                        timeout: c,
                                        timeoutHandler: l,
                                        useLocaleInfo: a
                                    }),
                                    f = yield Nr(n(e, To, "f"), "GET", p);
                                if (!f.responseUrl) {
                                    const r = new Error("Successful request came without a response URL");
                                    throw null === (h = null === (t = n(e, To, "f")) || void 0 === t ? void 0 : t.error) || void 0 === h || h.call(t, {
                                        error: r,
                                        category: Lo,
                                        message: "Successful request came without a response URL",
                                        errorCode: i.Communication_Default
                                    }), r
                                }
                                return f.responseUrl
                            }()
                        }))
                    }
                }
                t.NativeHttpClient = jo, _o = new WeakMap, mo = new WeakMap, bo = new WeakMap, To = new WeakMap, wo = new WeakMap, Eo = new WeakMap, So = new WeakMap, Oo = new WeakMap, vo = new WeakSet, Co = function(t, r, s, c, l) {
                    return e(this, void 0, void 0, (function*() {
                        var e, u, h, p, f, d, g, y;
                        if (401 !== r.status || s) {
                            const e = null !== (f = null === (p = null === (h = r.status) || void 0 === h ? void 0 : h.toString) || void 0 === p ? void 0 : p.call(h)) && void 0 !== f ? f : "",
                                i = a(e),
                                s = new o(null !== (d = r.responseText) && void 0 !== d ? d : "Network Error", i, e, Lr(r.responseText, n(this, To, "f"), Lo), Lo);
                            throw null === (y = null === (g = n(this, To, "f")) || void 0 === g ? void 0 : g.error) || void 0 === y || y.call(g, {
                                error: s,
                                category: Lo,
                                message: `${t} ${c}`,
                                errorCode: i
                            }), s
                        }
                        if (yield n(this, wo, "f").call(this, !0)) return l(); {
                            const r = new Error("Unable to retrieve an authorization token");
                            throw null === (u = null === (e = n(this, To, "f")) || void 0 === e ? void 0 : e.error) || void 0 === u || u.call(e, {
                                error: r,
                                category: Lo,
                                message: `${t} ${c}`,
                                errorCode: i.Communication_Unauthorized
                            }), r
                        }
                    }))
                }, ko = function t(r) {
                    return e(this, void 0, void 0, (function*() {
                        var o, s, a;
                        null === (s = null === (o = n(this, To, "f")) || void 0 === o ? void 0 : o.setActiveSpanAsNonAggregable) || void 0 === s || s.call(o);
                        const {
                            method: c,
                            url: l,
                            params: u,
                            baseURL: h,
                            payload: p,
                            headers: f,
                            useLocaleInfo: d,
                            timeout: g,
                            timeoutHandler: y,
                            isRetry: v,
                            contentType: _,
                            responseType: m
                        } = r, b = po(l, null != h ? h : n(this, So, "f"), u), T = d ? null === (a = n(this, mo, "f")) || void 0 === a ? void 0 : a.call(this) : void 0, w = yield n(this, vo, "m", Io).call(this, {
                            headers: f,
                            locale: T,
                            contentType: _
                        });
                        return new Promise(((o, s) => {
                            var a, u;
                            const h = this.httpClientInstance.createRequest(c, b);
                            h.onError = i => e(this, void 0, void 0, (function*() {
                                try {
                                    const e = yield n(this, vo, "m", Co).call(this, c, i, !!v, b, (() => n(this, vo, "m", t).call(this, Object.assign(Object.assign({}, r), {
                                        isRetry: !0
                                    }))));
                                    o(e)
                                } catch (t) {
                                    s(t)
                                }
                            })), h.onTimeout = () => {
                                var t, e;
                                null == y || y();
                                const r = new Error(`Request timed out: ${b}`);
                                null === (e = null === (t = n(this, To, "f")) || void 0 === t ? void 0 : t.error) || void 0 === e || e.call(t, {
                                    category: Lo,
                                    message: `POST ${b}`,
                                    errorCode: i.Communication_Timeout,
                                    error: r
                                }), s(r)
                            }, h.onSuccess = t => {
                                d && n(this, bo, "f") && t.responseHeaders && Pr({
                                    responseHeaders: t.responseHeaders,
                                    localeHeader: n(this, _o, "f"),
                                    currentLocale: T,
                                    setLocale: n(this, bo, "f")
                                }), o(t)
                            }, Object.entries(w).forEach((t => {
                                let [e, n] = t;
                                h.setHeader(e, n)
                            })), g && h.setTimeout(1e3 * g), p && h.setBody(p), "blob" === m && (h.responseType = "blob"), null === (u = null === (a = n(this, To, "f")) || void 0 === a ? void 0 : a.debug) || void 0 === u || u.call(a, {
                                category: Lo,
                                message: `${c} ${l}`
                            }), h.send()
                        }))
                    }))
                }, Io = function(t) {
                    return e(this, arguments, void 0, (function(t) {
                        var e = this;
                        let {
                            headers: r,
                            locale: o,
                            contentType: i
                        } = t;
                        return function*() {
                            var t;
                            const s = Object.assign(Object.assign(Object.assign({}, null !== (t = n(e, Oo, "f")) && void 0 !== t ? t : {}), r), o ? {
                                [n(e, _o, "f")]: o
                            } : {});
                            i && !s["content-type"] && (s["content-type"] = i);
                            const a = yield n(e, wo, "f").call(e);
                            return a && (s.authorization = a), yield n(e, vo, "m", Po).call(e, s)
                        }()
                    }))
                }, Po = function(t) {
                    return e(this, void 0, void 0, (function*() {
                        var e, r;
                        try {
                            return yield f(t, (() => {
                                var t;
                                return null === (t = n(this, Eo, "f")) || void 0 === t ? void 0 : t.call(this)
                            }))
                        } catch (t) {
                            null === (r = null === (e = n(this, To, "f")) || void 0 === e ? void 0 : e.error) || void 0 === r || r.call(e, {
                                category: Lo,
                                message: "Error loading trace information",
                                errorCode: i.Communication_Default,
                                error: t
                            })
                        }
                        return t
                    }))
                };
                class No extends Error {
                    constructor(t, e) {
                        const n = new.target.prototype;
                        super(`${t}: Status code '${e}'`), this.statusCode = e, this.__proto__ = n
                    }
                }
                class xo extends Error {
                    constructor() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "A timeout occurred.";
                        const e = new.target.prototype;
                        super(t), this.__proto__ = e
                    }
                }
                class Mo extends Error {
                    constructor() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "An abort occurred.";
                        const e = new.target.prototype;
                        super(t), this.__proto__ = e
                    }
                }
                class Do extends Error {
                    constructor(t, e) {
                        const n = new.target.prototype;
                        super(t), this.transport = e, this.errorType = "UnsupportedTransportError", this.__proto__ = n
                    }
                }
                class Uo extends Error {
                    constructor(t, e) {
                        const n = new.target.prototype;
                        super(t), this.transport = e, this.errorType = "DisabledTransportError", this.__proto__ = n
                    }
                }
                class Wo extends Error {
                    constructor(t, e) {
                        const n = new.target.prototype;
                        super(t), this.transport = e, this.errorType = "FailedToStartTransportError", this.__proto__ = n
                    }
                }
                class Bo extends Error {
                    constructor(t) {
                        const e = new.target.prototype;
                        super(t), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = e
                    }
                }
                class $o extends Error {
                    constructor(t, e) {
                        const n = new.target.prototype;
                        super(t), this.innerErrors = e, this.__proto__ = n
                    }
                }
                class Fo {
                    constructor(t, e, n) {
                        this.statusCode = t, this.statusText = e, this.content = n
                    }
                }
                class Ho {
                    get(t, e) {
                        return this.send({
                            ...e,
                            method: "GET",
                            url: t
                        })
                    }
                    post(t, e) {
                        return this.send({
                            ...e,
                            method: "POST",
                            url: t
                        })
                    }
                    delete(t, e) {
                        return this.send({
                            ...e,
                            method: "DELETE",
                            url: t
                        })
                    }
                    getCookieString(t) {
                        return ""
                    }
                }
                var zo;
                ! function(t) {
                    t[t.Trace = 0] = "Trace", t[t.Debug = 1] = "Debug", t[t.Information = 2] = "Information", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Critical = 5] = "Critical", t[t.None = 6] = "None"
                }(zo || (zo = {}));
                class qo {
                    constructor() {}
                    log(t, e) {}
                }
                qo.instance = new qo;
                const Vo = "7.0.12";
                class Zo {
                    static isRequired(t, e) {
                        if (null == t) throw new Error(`The '${e}' argument is required.`)
                    }
                    static isNotEmpty(t, e) {
                        if (!t || t.match(/^\s*$/)) throw new Error(`The '${e}' argument should not be empty.`)
                    }
                    static isIn(t, e, n) {
                        if (!(t in e)) throw new Error(`Unknown ${n} value: ${t}.`)
                    }
                }
                class Go {
                    static get isBrowser() {
                        return "object" == typeof window && "object" == typeof window.document
                    }
                    static get isWebWorker() {
                        return "object" == typeof self && "importScripts" in self
                    }
                    static get isReactNative() {
                        return "object" == typeof window && void 0 === window.document
                    }
                    static get isNode() {
                        return !this.isBrowser && !this.isWebWorker && !this.isReactNative
                    }
                }

                function Xo(t, e) {
                    let n = "";
                    return Qo(t) ? (n = `Binary data of length ${t.byteLength}`, e && (n += `. Content: '${Ko(t)}'`)) : "string" == typeof t && (n = `String data of length ${t.length}`, e && (n += `. Content: '${t}'`)), n
                }

                function Ko(t) {
                    const e = new Uint8Array(t);
                    let n = "";
                    return e.forEach((t => {
                        n += `0x${t<16?"0":""}${t.toString(16)} `
                    })), n.substr(0, n.length - 1)
                }

                function Qo(t) {
                    return t && "undefined" != typeof ArrayBuffer && (t instanceof ArrayBuffer || t.constructor && "ArrayBuffer" === t.constructor.name)
                }
                async function Jo(t, e, n, r, o, i) {
                    const s = {},
                        [a, c] = ni();
                    s[a] = c, t.log(zo.Trace, `(${e} transport) sending data. ${Xo(o,i.logMessageContent)}.`);
                    const l = Qo(o) ? "arraybuffer" : "text",
                        u = await n.post(r, {
                            content: o,
                            headers: {
                                ...s,
                                ...i.headers
                            },
                            responseType: l,
                            timeout: i.timeout,
                            withCredentials: i.withCredentials
                        });
                    t.log(zo.Trace, `(${e} transport) request complete. Response status: ${u.statusCode}.`)
                }

                function Yo(t) {
                    return void 0 === t ? new ei(zo.Information) : null === t ? qo.instance : void 0 !== t.log ? t : new ei(t)
                }
                class ti {
                    constructor(t, e) {
                        this._subject = t, this._observer = e
                    }
                    dispose() {
                        const t = this._subject.observers.indexOf(this._observer);
                        t > -1 && this._subject.observers.splice(t, 1), 0 === this._subject.observers.length && this._subject.cancelCallback && this._subject.cancelCallback().catch((t => {}))
                    }
                }
                class ei {
                    constructor(t) {
                        this._minLevel = t, this.out = console
                    }
                    log(t, e) {
                        if (t >= this._minLevel) {
                            const n = `[${(new Date).toISOString()}] ${zo[t]}: ${e}`;
                            switch (t) {
                                case zo.Critical:
                                case zo.Error:
                                    this.out.error(n);
                                    break;
                                case zo.Warning:
                                    this.out.warn(n);
                                    break;
                                case zo.Information:
                                    this.out.info(n);
                                    break;
                                default:
                                    this.out.log(n)
                            }
                        }
                    }
                }

                function ni() {
                    let t = "X-SignalR-User-Agent";
                    return Go.isNode && (t = "User-Agent"), [t, ri(Vo, oi(), si(), ii())]
                }

                function ri(t, e, n, r) {
                    let o = "Microsoft SignalR/";
                    const i = t.split(".");
                    return o += `${i[0]}.${i[1]}`, o += ` (${t}; `, o += e && "" !== e ? `${e}; ` : "Unknown OS; ", o += `${n}`, o += r ? `; ${r}` : "; Unknown Runtime Version", o += ")", o
                }

                function oi() {
                    if (!Go.isNode) return "";
                    switch (process.platform) {
                        case "win32":
                            return "Windows NT";
                        case "darwin":
                            return "macOS";
                        case "linux":
                            return "Linux";
                        default:
                            return process.platform
                    }
                }

                function ii() {
                    if (Go.isNode) return process.versions.node
                }

                function si() {
                    return Go.isNode ? "NodeJS" : "Browser"
                }

                function ai(t) {
                    return t.stack ? t.stack : t.message ? t.message : `${t}`
                }

                function ci() {
                    if ("undefined" != typeof globalThis) return globalThis;
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if (void 0 !== E) return E;
                    throw new Error("could not find global")
                }
                class li extends Ho {
                    constructor(t) {
                        if (super(), this._logger = t, "undefined" == typeof fetch) {
                            const t = "function" == typeof __webpack_require__ ? __non_webpack_require__ : S;
                            this._jar = new(t("tough-cookie").CookieJar), this._fetchType = t("node-fetch"), this._fetchType = t("fetch-cookie")(this._fetchType, this._jar)
                        } else this._fetchType = fetch.bind(ci());
                        if ("undefined" == typeof AbortController) {
                            const t = "function" == typeof __webpack_require__ ? __non_webpack_require__ : S;
                            this._abortControllerType = t("abort-controller")
                        } else this._abortControllerType = AbortController
                    }
                    async send(t) {
                        if (t.abortSignal && t.abortSignal.aborted) throw new Mo;
                        if (!t.method) throw new Error("No method defined.");
                        if (!t.url) throw new Error("No url defined.");
                        const e = new this._abortControllerType;
                        let n;
                        t.abortSignal && (t.abortSignal.onabort = () => {
                            e.abort(), n = new Mo
                        });
                        let r, o = null;
                        if (t.timeout) {
                            const r = t.timeout;
                            o = setTimeout((() => {
                                e.abort(), this._logger.log(zo.Warning, "Timeout from HTTP request."), n = new xo
                            }), r)
                        }
                        "" === t.content && (t.content = void 0), t.content && (t.headers = t.headers || {}, Qo(t.content) ? t.headers["Content-Type"] = "application/octet-stream" : t.headers["Content-Type"] = "text/plain;charset=UTF-8");
                        try {
                            r = await this._fetchType(t.url, {
                                body: t.content,
                                cache: "no-cache",
                                credentials: !0 === t.withCredentials ? "include" : "same-origin",
                                headers: {
                                    "X-Requested-With": "XMLHttpRequest",
                                    ...t.headers
                                },
                                method: t.method,
                                mode: "cors",
                                redirect: "follow",
                                signal: e.signal
                            })
                        } catch (t) {
                            if (n) throw n;
                            throw this._logger.log(zo.Warning, `Error from HTTP request. ${t}.`), t
                        } finally {
                            o && clearTimeout(o), t.abortSignal && (t.abortSignal.onabort = null)
                        }
                        if (!r.ok) {
                            const t = await ui(r, "text");
                            throw new No(t || r.statusText, r.status)
                        }
                        const i = ui(r, t.responseType),
                            s = await i;
                        return new Fo(r.status, r.statusText, s)
                    }
                    getCookieString(t) {
                        let e = "";
                        return Go.isNode && this._jar && this._jar.getCookies(t, ((t, n) => e = n.join("; "))), e
                    }
                }

                function ui(t, e) {
                    let n;
                    switch (e) {
                        case "arraybuffer":
                            n = t.arrayBuffer();
                            break;
                        case "text":
                        default:
                            n = t.text();
                            break;
                        case "blob":
                        case "document":
                        case "json":
                            throw new Error(`${e} is not supported.`)
                    }
                    return n
                }
                class hi extends Ho {
                    constructor(t) {
                        super(), this._logger = t
                    }
                    send(t) {
                        return t.abortSignal && t.abortSignal.aborted ? Promise.reject(new Mo) : t.method ? t.url ? new Promise(((e, n) => {
                            const r = new XMLHttpRequest;
                            r.open(t.method, t.url, !0), r.withCredentials = void 0 === t.withCredentials || t.withCredentials, r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "" === t.content && (t.content = void 0), t.content && (Qo(t.content) ? r.setRequestHeader("Content-Type", "application/octet-stream") : r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"));
                            const o = t.headers;
                            o && Object.keys(o).forEach((t => {
                                r.setRequestHeader(t, o[t])
                            })), t.responseType && (r.responseType = t.responseType), t.abortSignal && (t.abortSignal.onabort = () => {
                                r.abort(), n(new Mo)
                            }), t.timeout && (r.timeout = t.timeout), r.onload = () => {
                                t.abortSignal && (t.abortSignal.onabort = null), r.status >= 200 && r.status < 300 ? e(new Fo(r.status, r.statusText, r.response || r.responseText)) : n(new No(r.response || r.responseText || r.statusText, r.status))
                            }, r.onerror = () => {
                                this._logger.log(zo.Warning, `Error from HTTP request. ${r.status}: ${r.statusText}.`), n(new No(r.statusText, r.status))
                            }, r.ontimeout = () => {
                                this._logger.log(zo.Warning, "Timeout from HTTP request."), n(new xo)
                            }, r.send(t.content)
                        })) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."))
                    }
                }
                class pi extends Ho {
                    constructor(t) {
                        if (super(), "undefined" != typeof fetch || Go.isNode) this._httpClient = new li(t);
                        else {
                            if ("undefined" == typeof XMLHttpRequest) throw new Error("No usable HttpClient found.");
                            this._httpClient = new hi(t)
                        }
                    }
                    send(t) {
                        return t.abortSignal && t.abortSignal.aborted ? Promise.reject(new Mo) : t.method ? t.url ? this._httpClient.send(t) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."))
                    }
                    getCookieString(t) {
                        return this._httpClient.getCookieString(t)
                    }
                }
                class fi {
                    static write(t) {
                        return `${t}${fi.RecordSeparator}`
                    }
                    static parse(t) {
                        if (t[t.length - 1] !== fi.RecordSeparator) throw new Error("Message is incomplete.");
                        const e = t.split(fi.RecordSeparator);
                        return e.pop(), e
                    }
                }
                fi.RecordSeparatorCode = 30, fi.RecordSeparator = String.fromCharCode(fi.RecordSeparatorCode);
                class di {
                    writeHandshakeRequest(t) {
                        return fi.write(JSON.stringify(t))
                    }
                    parseHandshakeResponse(t) {
                        let e, n;
                        if (Qo(t)) {
                            const r = new Uint8Array(t),
                                o = r.indexOf(fi.RecordSeparatorCode);
                            if (-1 === o) throw new Error("Message is incomplete.");
                            const i = o + 1;
                            e = String.fromCharCode.apply(null, Array.prototype.slice.call(r.slice(0, i))), n = r.byteLength > i ? r.slice(i).buffer : null
                        } else {
                            const r = t,
                                o = r.indexOf(fi.RecordSeparator);
                            if (-1 === o) throw new Error("Message is incomplete.");
                            const i = o + 1;
                            e = r.substring(0, i), n = r.length > i ? r.substring(i) : null
                        }
                        const r = fi.parse(e),
                            o = JSON.parse(r[0]);
                        if (o.type) throw new Error("Expected a handshake response from the server.");
                        return [n, o]
                    }
                }
                var gi;
                ! function(t) {
                    t[t.Invocation = 1] = "Invocation", t[t.StreamItem = 2] = "StreamItem", t[t.Completion = 3] = "Completion", t[t.StreamInvocation = 4] = "StreamInvocation", t[t.CancelInvocation = 5] = "CancelInvocation", t[t.Ping = 6] = "Ping", t[t.Close = 7] = "Close"
                }(gi || (gi = {}));
                class yi {
                    constructor() {
                        this.observers = []
                    }
                    next(t) {
                        for (const e of this.observers) e.next(t)
                    }
                    error(t) {
                        for (const e of this.observers) e.error && e.error(t)
                    }
                    complete() {
                        for (const t of this.observers) t.complete && t.complete()
                    }
                    subscribe(t) {
                        return this.observers.push(t), new ti(this, t)
                    }
                }
                const vi = 3e4,
                    _i = 15e3;
                var mi;
                ! function(t) {
                    t.Disconnected = "Disconnected", t.Connecting = "Connecting", t.Connected = "Connected", t.Disconnecting = "Disconnecting", t.Reconnecting = "Reconnecting"
                }(mi || (mi = {}));
                class bi {
                    constructor(t, e, n, r) {
                        this._nextKeepAlive = 0, this._freezeEventListener = () => {
                            this._logger.log(zo.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep")
                        }, Zo.isRequired(t, "connection"), Zo.isRequired(e, "logger"), Zo.isRequired(n, "protocol"), this.serverTimeoutInMilliseconds = vi, this.keepAliveIntervalInMilliseconds = _i, this._logger = e, this._protocol = n, this.connection = t, this._reconnectPolicy = r, this._handshakeProtocol = new di, this.connection.onreceive = t => this._processIncomingData(t), this.connection.onclose = t => this._connectionClosed(t), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = mi.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({
                            type: gi.Ping
                        })
                    }
                    static create(t, e, n, r) {
                        return new bi(t, e, n, r)
                    }
                    get state() {
                        return this._connectionState
                    }
                    get connectionId() {
                        return this.connection && this.connection.connectionId || null
                    }
                    get baseUrl() {
                        return this.connection.baseUrl || ""
                    }
                    set baseUrl(t) {
                        if (this._connectionState !== mi.Disconnected && this._connectionState !== mi.Reconnecting) throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
                        if (!t) throw new Error("The HubConnection url must be a valid url.");
                        this.connection.baseUrl = t
                    }
                    start() {
                        return this._startPromise = this._startWithStateTransitions(), this._startPromise
                    }
                    async _startWithStateTransitions() {
                        if (this._connectionState !== mi.Disconnected) return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
                        this._connectionState = mi.Connecting, this._logger.log(zo.Debug, "Starting HubConnection.");
                        try {
                            await this._startInternal(), Go.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = mi.Connected, this._connectionStarted = !0, this._logger.log(zo.Debug, "HubConnection connected successfully.")
                        } catch (t) {
                            return this._connectionState = mi.Disconnected, this._logger.log(zo.Debug, `HubConnection failed to start successfully because of error '${t}'.`), Promise.reject(t)
                        }
                    }
                    async _startInternal() {
                        this._stopDuringStartError = void 0, this._receivedHandshakeResponse = !1;
                        const t = new Promise(((t, e) => {
                            this._handshakeResolver = t, this._handshakeRejecter = e
                        }));
                        await this.connection.start(this._protocol.transferFormat);
                        try {
                            const e = {
                                protocol: this._protocol.name,
                                version: this._protocol.version
                            };
                            if (this._logger.log(zo.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(e)), this._logger.log(zo.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await t, this._stopDuringStartError) throw this._stopDuringStartError;
                            this.connection.features.inherentKeepAlive || await this._sendMessage(this._cachedPingMessage)
                        } catch (t) {
                            throw this._logger.log(zo.Debug, `Hub handshake failed with error '${t}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(t), t
                        }
                    }
                    async stop() {
                        const t = this._startPromise;
                        this._stopPromise = this._stopInternal(), await this._stopPromise;
                        try {
                            await t
                        } catch (t) {}
                    }
                    _stopInternal(t) {
                        return this._connectionState === mi.Disconnected ? (this._logger.log(zo.Debug, `Call to HubConnection.stop(${t}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === mi.Disconnecting ? (this._logger.log(zo.Debug, `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = mi.Disconnecting, this._logger.log(zo.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(zo.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = t || new Mo("The connection was stopped before the hub handshake could complete."), this.connection.stop(t)))
                    }
                    stream(t) {
                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                        const [o, i] = this._replaceStreamingParams(n), s = this._createStreamInvocation(t, n, i);
                        let a;
                        const c = new yi;
                        return c.cancelCallback = () => {
                            const t = this._createCancelInvocation(s.invocationId);
                            return delete this._callbacks[s.invocationId], a.then((() => this._sendWithProtocol(t)))
                        }, this._callbacks[s.invocationId] = (t, e) => {
                            e ? c.error(e) : t && (t.type === gi.Completion ? t.error ? c.error(new Error(t.error)) : c.complete() : c.next(t.item))
                        }, a = this._sendWithProtocol(s).catch((t => {
                            c.error(t), delete this._callbacks[s.invocationId]
                        })), this._launchStreams(o, a), c
                    }
                    _sendMessage(t) {
                        return this._resetKeepAliveInterval(), this.connection.send(t)
                    }
                    _sendWithProtocol(t) {
                        return this._sendMessage(this._protocol.writeMessage(t))
                    }
                    send(t) {
                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                        const [o, i] = this._replaceStreamingParams(n), s = this._sendWithProtocol(this._createInvocation(t, n, !0, i));
                        return this._launchStreams(o, s), s
                    }
                    invoke(t) {
                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                        const [o, i] = this._replaceStreamingParams(n), s = this._createInvocation(t, n, !1, i);
                        return new Promise(((t, e) => {
                            this._callbacks[s.invocationId] = (n, r) => {
                                r ? e(r) : n && (n.type === gi.Completion ? n.error ? e(new Error(n.error)) : t(n.result) : e(new Error(`Unexpected message type: ${n.type}`)))
                            };
                            const n = this._sendWithProtocol(s).catch((t => {
                                e(t), delete this._callbacks[s.invocationId]
                            }));
                            this._launchStreams(o, n)
                        }))
                    }
                    on(t, e) {
                        t && e && (t = t.toLowerCase(), this._methods[t] || (this._methods[t] = []), -1 === this._methods[t].indexOf(e) && this._methods[t].push(e))
                    }
                    off(t, e) {
                        if (!t) return;
                        t = t.toLowerCase();
                        const n = this._methods[t];
                        if (n)
                            if (e) {
                                const r = n.indexOf(e); - 1 !== r && (n.splice(r, 1), 0 === n.length && delete this._methods[t])
                            } else delete this._methods[t]
                    }
                    onclose(t) {
                        t && this._closedCallbacks.push(t)
                    }
                    onreconnecting(t) {
                        t && this._reconnectingCallbacks.push(t)
                    }
                    onreconnected(t) {
                        t && this._reconnectedCallbacks.push(t)
                    }
                    _processIncomingData(t) {
                        if (this._cleanupTimeout(), this._receivedHandshakeResponse || (t = this._processHandshakeResponse(t), this._receivedHandshakeResponse = !0), t) {
                            const e = this._protocol.parseMessages(t, this._logger);
                            for (const t of e) switch (t.type) {
                                case gi.Invocation:
                                    this._invokeClientMethod(t);
                                    break;
                                case gi.StreamItem:
                                case gi.Completion: {
                                    const e = this._callbacks[t.invocationId];
                                    if (e) {
                                        t.type === gi.Completion && delete this._callbacks[t.invocationId];
                                        try {
                                            e(t)
                                        } catch (t) {
                                            this._logger.log(zo.Error, `Stream callback threw error: ${ai(t)}`)
                                        }
                                    }
                                    break
                                }
                                case gi.Ping:
                                    break;
                                case gi.Close: {
                                    this._logger.log(zo.Information, "Close message received from server.");
                                    const e = t.error ? new Error("Server returned an error on close: " + t.error) : void 0;
                                    !0 === t.allowReconnect ? this.connection.stop(e) : this._stopPromise = this._stopInternal(e);
                                    break
                                }
                                default:
                                    this._logger.log(zo.Warning, `Invalid message type: ${t.type}.`)
                            }
                        }
                        this._resetTimeoutPeriod()
                    }
                    _processHandshakeResponse(t) {
                        let e, n;
                        try {
                            [n, e] = this._handshakeProtocol.parseHandshakeResponse(t)
                        } catch (t) {
                            const e = "Error parsing handshake response: " + t;
                            this._logger.log(zo.Error, e);
                            const n = new Error(e);
                            throw this._handshakeRejecter(n), n
                        }
                        if (e.error) {
                            const t = "Server returned handshake error: " + e.error;
                            this._logger.log(zo.Error, t);
                            const n = new Error(t);
                            throw this._handshakeRejecter(n), n
                        }
                        return this._logger.log(zo.Debug, "Server handshake complete."), this._handshakeResolver(), n
                    }
                    _resetKeepAliveInterval() {
                        this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (new Date).getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer())
                    }
                    _resetTimeoutPeriod() {
                        if (!(this.connection.features && this.connection.features.inherentKeepAlive || (this._timeoutHandle = setTimeout((() => this.serverTimeout()), this.serverTimeoutInMilliseconds), void 0 !== this._pingServerHandle))) {
                            let t = this._nextKeepAlive - (new Date).getTime();
                            t < 0 && (t = 0), this._pingServerHandle = setTimeout((async () => {
                                if (this._connectionState === mi.Connected) try {
                                    await this._sendMessage(this._cachedPingMessage)
                                } catch {
                                    this._cleanupPingTimer()
                                }
                            }), t)
                        }
                    }
                    serverTimeout() {
                        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))
                    }
                    async _invokeClientMethod(t) {
                        const e = t.target.toLowerCase(),
                            n = this._methods[e];
                        if (!n) return this._logger.log(zo.Warning, `No client method with the name '${e}' found.`), void(t.invocationId && (this._logger.log(zo.Warning, `No result given for '${e}' method and invocation ID '${t.invocationId}'.`), await this._sendWithProtocol(this._createCompletionMessage(t.invocationId, "Client didn't provide a result.", null))));
                        const r = n.slice(),
                            o = !!t.invocationId;
                        let i, s, a;
                        for (const n of r) try {
                            const r = i;
                            i = await n.apply(this, t.arguments), o && i && r && (this._logger.log(zo.Error, `Multiple results provided for '${e}'. Sending error to server.`), a = this._createCompletionMessage(t.invocationId, "Client provided multiple results.", null)), s = void 0
                        } catch (t) {
                            s = t, this._logger.log(zo.Error, `A callback for the method '${e}' threw error '${t}'.`)
                        }
                        a ? await this._sendWithProtocol(a) : o ? (s ? a = this._createCompletionMessage(t.invocationId, `${s}`, null) : void 0 !== i ? a = this._createCompletionMessage(t.invocationId, null, i) : (this._logger.log(zo.Warning, `No result given for '${e}' method and invocation ID '${t.invocationId}'.`), a = this._createCompletionMessage(t.invocationId, "Client didn't provide a result.", null)), await this._sendWithProtocol(a)) : i && this._logger.log(zo.Error, `Result given for '${e}' method but server is not expecting a result.`)
                    }
                    _connectionClosed(t) {
                        this._logger.log(zo.Debug, `HubConnection.connectionClosed(${t}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || t || new Mo("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(t || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === mi.Disconnecting ? this._completeClose(t) : this._connectionState === mi.Connected && this._reconnectPolicy ? this._reconnect(t) : this._connectionState === mi.Connected && this._completeClose(t)
                    }
                    _completeClose(t) {
                        if (this._connectionStarted) {
                            this._connectionState = mi.Disconnected, this._connectionStarted = !1, Go.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
                            try {
                                this._closedCallbacks.forEach((e => e.apply(this, [t])))
                            } catch (e) {
                                this._logger.log(zo.Error, `An onclose callback called with error '${t}' threw error '${e}'.`)
                            }
                        }
                    }
                    async _reconnect(t) {
                        const e = Date.now();
                        let n = 0,
                            r = void 0 !== t ? t : new Error("Attempting to reconnect due to a unknown error."),
                            o = this._getNextRetryDelay(n++, 0, r);
                        if (null === o) return this._logger.log(zo.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), void this._completeClose(t);
                        if (this._connectionState = mi.Reconnecting, t ? this._logger.log(zo.Information, `Connection reconnecting because of error '${t}'.`) : this._logger.log(zo.Information, "Connection reconnecting."), 0 !== this._reconnectingCallbacks.length) {
                            try {
                                this._reconnectingCallbacks.forEach((e => e.apply(this, [t])))
                            } catch (e) {
                                this._logger.log(zo.Error, `An onreconnecting callback called with error '${t}' threw error '${e}'.`)
                            }
                            if (this._connectionState !== mi.Reconnecting) return void this._logger.log(zo.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.")
                        }
                        for (; null !== o;) {
                            if (this._logger.log(zo.Information, `Reconnect attempt number ${n} will start in ${o} ms.`), await new Promise((t => {
                                    this._reconnectDelayHandle = setTimeout(t, o)
                                })), this._reconnectDelayHandle = void 0, this._connectionState !== mi.Reconnecting) return void this._logger.log(zo.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
                            try {
                                if (await this._startInternal(), this._connectionState = mi.Connected, this._logger.log(zo.Information, "HubConnection reconnected successfully."), 0 !== this._reconnectedCallbacks.length) try {
                                    this._reconnectedCallbacks.forEach((t => t.apply(this, [this.connection.connectionId])))
                                } catch (t) {
                                    this._logger.log(zo.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${t}'.`)
                                }
                                return
                            } catch (t) {
                                if (this._logger.log(zo.Information, `Reconnect attempt failed because of error '${t}'.`), this._connectionState !== mi.Reconnecting) return this._logger.log(zo.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), void(this._connectionState === mi.Disconnecting && this._completeClose());
                                r = t instanceof Error ? t : new Error(t.toString()), o = this._getNextRetryDelay(n++, Date.now() - e, r)
                            }
                        }
                        this._logger.log(zo.Information, `Reconnect retries have been exhausted after ${Date.now()-e} ms and ${n} failed attempts. Connection disconnecting.`), this._completeClose()
                    }
                    _getNextRetryDelay(t, e, n) {
                        try {
                            return this._reconnectPolicy.nextRetryDelayInMilliseconds({
                                elapsedMilliseconds: e,
                                previousRetryCount: t,
                                retryReason: n
                            })
                        } catch (n) {
                            return this._logger.log(zo.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${t}, ${e}) threw error '${n}'.`), null
                        }
                    }
                    _cancelCallbacksWithError(t) {
                        const e = this._callbacks;
                        this._callbacks = {}, Object.keys(e).forEach((n => {
                            const r = e[n];
                            try {
                                r(null, t)
                            } catch (e) {
                                this._logger.log(zo.Error, `Stream 'error' callback called with '${t}' threw error: ${ai(e)}`)
                            }
                        }))
                    }
                    _cleanupPingTimer() {
                        this._pingServerHandle && (clearTimeout(this._pingServerHandle), this._pingServerHandle = void 0)
                    }
                    _cleanupTimeout() {
                        this._timeoutHandle && clearTimeout(this._timeoutHandle)
                    }
                    _createInvocation(t, e, n, r) {
                        if (n) return 0 !== r.length ? {
                            arguments: e,
                            streamIds: r,
                            target: t,
                            type: gi.Invocation
                        } : {
                            arguments: e,
                            target: t,
                            type: gi.Invocation
                        }; {
                            const n = this._invocationId;
                            return this._invocationId++, 0 !== r.length ? {
                                arguments: e,
                                invocationId: n.toString(),
                                streamIds: r,
                                target: t,
                                type: gi.Invocation
                            } : {
                                arguments: e,
                                invocationId: n.toString(),
                                target: t,
                                type: gi.Invocation
                            }
                        }
                    }
                    _launchStreams(t, e) {
                        if (0 !== t.length) {
                            e || (e = Promise.resolve());
                            for (const n in t) t[n].subscribe({
                                complete: () => {
                                    e = e.then((() => this._sendWithProtocol(this._createCompletionMessage(n))))
                                },
                                error: t => {
                                    let r;
                                    r = t instanceof Error ? t.message : t && t.toString ? t.toString() : "Unknown error", e = e.then((() => this._sendWithProtocol(this._createCompletionMessage(n, r))))
                                },
                                next: t => {
                                    e = e.then((() => this._sendWithProtocol(this._createStreamItemMessage(n, t))))
                                }
                            })
                        }
                    }
                    _replaceStreamingParams(t) {
                        const e = [],
                            n = [];
                        for (let r = 0; r < t.length; r++) {
                            const o = t[r];
                            if (this._isObservable(o)) {
                                const i = this._invocationId;
                                this._invocationId++, e[i] = o, n.push(i.toString()), t.splice(r, 1)
                            }
                        }
                        return [e, n]
                    }
                    _isObservable(t) {
                        return t && t.subscribe && "function" == typeof t.subscribe
                    }
                    _createStreamInvocation(t, e, n) {
                        const r = this._invocationId;
                        return this._invocationId++, 0 !== n.length ? {
                            arguments: e,
                            invocationId: r.toString(),
                            streamIds: n,
                            target: t,
                            type: gi.StreamInvocation
                        } : {
                            arguments: e,
                            invocationId: r.toString(),
                            target: t,
                            type: gi.StreamInvocation
                        }
                    }
                    _createCancelInvocation(t) {
                        return {
                            invocationId: t,
                            type: gi.CancelInvocation
                        }
                    }
                    _createStreamItemMessage(t, e) {
                        return {
                            invocationId: t,
                            item: e,
                            type: gi.StreamItem
                        }
                    }
                    _createCompletionMessage(t, e, n) {
                        return e ? {
                            error: e,
                            invocationId: t,
                            type: gi.Completion
                        } : {
                            invocationId: t,
                            result: n,
                            type: gi.Completion
                        }
                    }
                }
                const Ti = [0, 2e3, 1e4, 3e4, null];
                class wi {
                    constructor(t) {
                        this._retryDelays = void 0 !== t ? [...t, null] : Ti
                    }
                    nextRetryDelayInMilliseconds(t) {
                        return this._retryDelays[t.previousRetryCount]
                    }
                }
                class Ei {}
                Ei.Authorization = "Authorization", Ei.Cookie = "Cookie";
                class Si extends Ho {
                    constructor(t, e) {
                        super(), this._innerClient = t, this._accessTokenFactory = e
                    }
                    async send(t) {
                        let e = !0;
                        this._accessTokenFactory && (!this._accessToken || t.url && t.url.indexOf("/negotiate?") > 0) && (e = !1, this._accessToken = await this._accessTokenFactory()), this._setAuthorizationHeader(t);
                        const n = await this._innerClient.send(t);
                        return e && 401 === n.statusCode && this._accessTokenFactory ? (this._accessToken = await this._accessTokenFactory(), this._setAuthorizationHeader(t), await this._innerClient.send(t)) : n
                    }
                    _setAuthorizationHeader(t) {
                        t.headers || (t.headers = {}), this._accessToken ? t.headers[Ei.Authorization] = `Bearer ${this._accessToken}` : this._accessTokenFactory && t.headers[Ei.Authorization] && delete t.headers[Ei.Authorization]
                    }
                    getCookieString(t) {
                        return this._innerClient.getCookieString(t)
                    }
                }
                var Oi, Ci;
                (function(t) {
                    t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling"
                })(Oi || (Oi = {})),
                function(t) {
                    t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary"
                }(Ci || (Ci = {}));
                let ki = class {
                    constructor() {
                        this._isAborted = !1, this.onabort = null
                    }
                    abort() {
                        this._isAborted || (this._isAborted = !0, this.onabort && this.onabort())
                    }
                    get signal() {
                        return this
                    }
                    get aborted() {
                        return this._isAborted
                    }
                };
                class Ii {
                    constructor(t, e, n) {
                        this._httpClient = t, this._logger = e, this._pollAbort = new ki, this._options = n, this._running = !1, this.onreceive = null, this.onclose = null
                    }
                    get pollAborted() {
                        return this._pollAbort.aborted
                    }
                    async connect(t, e) {
                        if (Zo.isRequired(t, "url"), Zo.isRequired(e, "transferFormat"), Zo.isIn(e, Ci, "transferFormat"), this._url = t, this._logger.log(zo.Trace, "(LongPolling transport) Connecting."), e === Ci.Binary && "undefined" != typeof XMLHttpRequest && "string" != typeof(new XMLHttpRequest).responseType) throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                        const [n, r] = ni(), o = {
                            [n]: r,
                            ...this._options.headers
                        }, i = {
                            abortSignal: this._pollAbort.signal,
                            headers: o,
                            timeout: 1e5,
                            withCredentials: this._options.withCredentials
                        };
                        e === Ci.Binary && (i.responseType = "arraybuffer");
                        const s = `${t}&_=${Date.now()}`;
                        this._logger.log(zo.Trace, `(LongPolling transport) polling: ${s}.`);
                        const a = await this._httpClient.get(s, i);
                        200 !== a.statusCode ? (this._logger.log(zo.Error, `(LongPolling transport) Unexpected response code: ${a.statusCode}.`), this._closeError = new No(a.statusText || "", a.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, i)
                    }
                    async _poll(t, e) {
                        try {
                            for (; this._running;) try {
                                const n = `${t}&_=${Date.now()}`;
                                this._logger.log(zo.Trace, `(LongPolling transport) polling: ${n}.`);
                                const r = await this._httpClient.get(n, e);
                                204 === r.statusCode ? (this._logger.log(zo.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : 200 !== r.statusCode ? (this._logger.log(zo.Error, `(LongPolling transport) Unexpected response code: ${r.statusCode}.`), this._closeError = new No(r.statusText || "", r.statusCode), this._running = !1) : r.content ? (this._logger.log(zo.Trace, `(LongPolling transport) data received. ${Xo(r.content,this._options.logMessageContent)}.`), this.onreceive && this.onreceive(r.content)) : this._logger.log(zo.Trace, "(LongPolling transport) Poll timed out, reissuing.")
                            } catch (t) {
                                this._running ? t instanceof xo ? this._logger.log(zo.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = t, this._running = !1) : this._logger.log(zo.Trace, `(LongPolling transport) Poll errored after shutdown: ${t.message}`)
                            }
                        } finally {
                            this._logger.log(zo.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose()
                        }
                    }
                    async send(t) {
                        return this._running ? Jo(this._logger, "LongPolling", this._httpClient, this._url, t, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"))
                    }
                    async stop() {
                        this._logger.log(zo.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
                        try {
                            await this._receiving, this._logger.log(zo.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
                            const t = {},
                                [e, n] = ni();
                            t[e] = n;
                            const r = {
                                headers: {
                                    ...t,
                                    ...this._options.headers
                                },
                                timeout: this._options.timeout,
                                withCredentials: this._options.withCredentials
                            };
                            await this._httpClient.delete(this._url, r), this._logger.log(zo.Trace, "(LongPolling transport) DELETE request sent.")
                        } finally {
                            this._logger.log(zo.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose()
                        }
                    }
                    _raiseOnClose() {
                        if (this.onclose) {
                            let t = "(LongPolling transport) Firing onclose event.";
                            this._closeError && (t += " Error: " + this._closeError), this._logger.log(zo.Trace, t), this.onclose(this._closeError)
                        }
                    }
                }
                class Pi {
                    constructor(t, e, n, r) {
                        this._httpClient = t, this._accessToken = e, this._logger = n, this._options = r, this.onreceive = null, this.onclose = null
                    }
                    async connect(t, e) {
                        return Zo.isRequired(t, "url"), Zo.isRequired(e, "transferFormat"), Zo.isIn(e, Ci, "transferFormat"), this._logger.log(zo.Trace, "(SSE transport) Connecting."), this._url = t, this._accessToken && (t += (t.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`), new Promise(((n, r) => {
                            let o, i = !1;
                            if (e === Ci.Text) {
                                if (Go.isBrowser || Go.isWebWorker) o = new this._options.EventSource(t, {
                                    withCredentials: this._options.withCredentials
                                });
                                else {
                                    const e = this._httpClient.getCookieString(t),
                                        n = {};
                                    n.Cookie = e;
                                    const [r, i] = ni();
                                    n[r] = i, o = new this._options.EventSource(t, {
                                        withCredentials: this._options.withCredentials,
                                        headers: {
                                            ...n,
                                            ...this._options.headers
                                        }
                                    })
                                }
                                try {
                                    o.onmessage = t => {
                                        if (this.onreceive) try {
                                            this._logger.log(zo.Trace, `(SSE transport) data received. ${Xo(t.data,this._options.logMessageContent)}.`), this.onreceive(t.data)
                                        } catch (t) {
                                            return void this._close(t)
                                        }
                                    }, o.onerror = t => {
                                        i ? this._close() : r(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."))
                                    }, o.onopen = () => {
                                        this._logger.log(zo.Information, `SSE connected to ${this._url}`), this._eventSource = o, i = !0, n()
                                    }
                                } catch (t) {
                                    return void r(t)
                                }
                            } else r(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"))
                        }))
                    }
                    async send(t) {
                        return this._eventSource ? Jo(this._logger, "SSE", this._httpClient, this._url, t, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"))
                    }
                    stop() {
                        return this._close(), Promise.resolve()
                    }
                    _close(t) {
                        this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(t))
                    }
                }
                class Ai {
                    constructor(t, e, n, r, o, i) {
                        this._logger = n, this._accessTokenFactory = e, this._logMessageContent = r, this._webSocketConstructor = o, this._httpClient = t, this.onreceive = null, this.onclose = null, this._headers = i
                    }
                    async connect(t, e) {
                        let n;
                        return Zo.isRequired(t, "url"), Zo.isRequired(e, "transferFormat"), Zo.isIn(e, Ci, "transferFormat"), this._logger.log(zo.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory && (n = await this._accessTokenFactory()), new Promise(((r, o) => {
                            let i;
                            t = t.replace(/^http/, "ws");
                            const s = this._httpClient.getCookieString(t);
                            let a = !1;
                            if (Go.isNode || Go.isReactNative) {
                                const e = {},
                                    [r, o] = ni();
                                e[r] = o, n && (e[Ei.Authorization] = `Bearer ${n}`), s && (e[Ei.Cookie] = s), i = new this._webSocketConstructor(t, void 0, {
                                    headers: {
                                        ...e,
                                        ...this._headers
                                    }
                                })
                            } else n && (t += (t.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(n)}`);
                            i || (i = new this._webSocketConstructor(t)), e === Ci.Binary && (i.binaryType = "arraybuffer"), i.onopen = e => {
                                this._logger.log(zo.Information, `WebSocket connected to ${t}.`), this._webSocket = i, a = !0, r()
                            }, i.onerror = t => {
                                let e = null;
                                e = "undefined" != typeof ErrorEvent && t instanceof ErrorEvent ? t.error : "There was an error with the transport", this._logger.log(zo.Information, `(WebSockets transport) ${e}.`)
                            }, i.onmessage = t => {
                                if (this._logger.log(zo.Trace, `(WebSockets transport) data received. ${Xo(t.data,this._logMessageContent)}.`), this.onreceive) try {
                                    this.onreceive(t.data)
                                } catch (t) {
                                    return void this._close(t)
                                }
                            }, i.onclose = t => {
                                if (a) this._close(t);
                                else {
                                    let e = null;
                                    e = "undefined" != typeof ErrorEvent && t instanceof ErrorEvent ? t.error : "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", o(new Error(e))
                                }
                            }
                        }))
                    }
                    send(t) {
                        return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(zo.Trace, `(WebSockets transport) sending data. ${Xo(t,this._logMessageContent)}.`), this._webSocket.send(t), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state")
                    }
                    stop() {
                        return this._webSocket && this._close(void 0), Promise.resolve()
                    }
                    _close(t) {
                        this._webSocket && (this._webSocket.onclose = () => {}, this._webSocket.onmessage = () => {}, this._webSocket.onerror = () => {}, this._webSocket.close(), this._webSocket = void 0), this._logger.log(zo.Trace, "(WebSockets transport) socket closed."), this.onclose && (!this._isCloseEvent(t) || !1 !== t.wasClean && 1e3 === t.code ? t instanceof Error ? this.onclose(t) : this.onclose() : this.onclose(new Error(`WebSocket closed with status code: ${t.code} (${t.reason||"no reason given"}).`)))
                    }
                    _isCloseEvent(t) {
                        return t && "boolean" == typeof t.wasClean && "number" == typeof t.code
                    }
                }
                const Li = 100;
                class Ri {
                    constructor(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (this._stopPromiseResolver = () => {}, this.features = {}, this._negotiateVersion = 1, Zo.isRequired(t, "url"), this._logger = Yo(e.logger), this.baseUrl = this._resolveUrl(t), e = e || {}, e.logMessageContent = void 0 !== e.logMessageContent && e.logMessageContent, "boolean" != typeof e.withCredentials && void 0 !== e.withCredentials) throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
                        e.withCredentials = void 0 === e.withCredentials || e.withCredentials, e.timeout = void 0 === e.timeout ? 1e5 : e.timeout;
                        let n = null,
                            r = null;
                        if (Go.isNode && void 0 !== S) {
                            const t = "function" == typeof __webpack_require__ ? __non_webpack_require__ : S;
                            n = t("ws"), r = t("eventsource")
                        }
                        Go.isNode || "undefined" == typeof WebSocket || e.WebSocket ? Go.isNode && !e.WebSocket && n && (e.WebSocket = n) : e.WebSocket = WebSocket, Go.isNode || "undefined" == typeof EventSource || e.EventSource ? Go.isNode && !e.EventSource && void 0 !== r && (e.EventSource = r) : e.EventSource = EventSource, this._httpClient = new Si(e.httpClient || new pi(this._logger), e.accessTokenFactory), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = e, this.onreceive = null, this.onclose = null
                    }
                    async start(t) {
                        if (t = t || Ci.Binary, Zo.isIn(t, Ci, "transferFormat"), this._logger.log(zo.Debug, `Starting connection with transfer format '${Ci[t]}'.`), "Disconnected" !== this._connectionState) return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
                        if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(t), await this._startInternalPromise, "Disconnecting" === this._connectionState) {
                            const t = "Failed to start the HttpConnection before stop() was called.";
                            return this._logger.log(zo.Error, t), await this._stopPromise, Promise.reject(new Mo(t))
                        }
                        if ("Connected" !== this._connectionState) {
                            const t = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
                            return this._logger.log(zo.Error, t), Promise.reject(new Mo(t))
                        }
                        this._connectionStarted = !0
                    }
                    send(t) {
                        return "Connected" !== this._connectionState ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new Ni(this.transport)), this._sendQueue.send(t))
                    }
                    async stop(t) {
                        return "Disconnected" === this._connectionState ? (this._logger.log(zo.Debug, `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnected state.`), Promise.resolve()) : "Disconnecting" === this._connectionState ? (this._logger.log(zo.Debug, `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = "Disconnecting", this._stopPromise = new Promise((t => {
                            this._stopPromiseResolver = t
                        })), await this._stopInternal(t), void await this._stopPromise)
                    }
                    async _stopInternal(t) {
                        this._stopError = t;
                        try {
                            await this._startInternalPromise
                        } catch (t) {}
                        if (this.transport) {
                            try {
                                await this.transport.stop()
                            } catch (t) {
                                this._logger.log(zo.Error, `HttpConnection.transport.stop() threw error '${t}'.`), this._stopConnection()
                            }
                            this.transport = void 0
                        } else this._logger.log(zo.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.")
                    }
                    async _startInternal(t) {
                        let e = this.baseUrl;
                        this._accessTokenFactory = this._options.accessTokenFactory, this._httpClient._accessTokenFactory = this._accessTokenFactory;
                        try {
                            if (this._options.skipNegotiation) {
                                if (this._options.transport !== Oi.WebSockets) throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                                this.transport = this._constructTransport(Oi.WebSockets), await this._startTransport(e, t)
                            } else {
                                let n = null,
                                    r = 0;
                                do {
                                    if (n = await this._getNegotiationResponse(e), "Disconnecting" === this._connectionState || "Disconnected" === this._connectionState) throw new Mo("The connection was stopped during negotiation.");
                                    if (n.error) throw new Error(n.error);
                                    if (n.ProtocolVersion) throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                                    if (n.url && (e = n.url), n.accessToken) {
                                        const t = n.accessToken;
                                        this._accessTokenFactory = () => t, this._httpClient._accessToken = t, this._httpClient._accessTokenFactory = void 0
                                    }
                                    r++
                                } while (n.url && r < Li);
                                if (r === Li && n.url) throw new Error("Negotiate redirection limit exceeded.");
                                await this._createTransport(e, this._options.transport, n, t)
                            }
                            this.transport instanceof Ii && (this.features.inherentKeepAlive = !0), "Connecting" === this._connectionState && (this._logger.log(zo.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected")
                        } catch (t) {
                            return this._logger.log(zo.Error, "Failed to start the connection: " + t), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(t)
                        }
                    }
                    async _getNegotiationResponse(t) {
                        const e = {},
                            [n, r] = ni();
                        e[n] = r;
                        const o = this._resolveNegotiateUrl(t);
                        this._logger.log(zo.Debug, `Sending negotiation request: ${o}.`);
                        try {
                            const t = await this._httpClient.post(o, {
                                content: "",
                                headers: {
                                    ...e,
                                    ...this._options.headers
                                },
                                timeout: this._options.timeout,
                                withCredentials: this._options.withCredentials
                            });
                            if (200 !== t.statusCode) return Promise.reject(new Error(`Unexpected status code returned from negotiate '${t.statusCode}'`));
                            const n = JSON.parse(t.content);
                            return (!n.negotiateVersion || n.negotiateVersion < 1) && (n.connectionToken = n.connectionId), n
                        } catch (t) {
                            let e = "Failed to complete negotiation with the server: " + t;
                            return t instanceof No && 404 === t.statusCode && (e += " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(zo.Error, e), Promise.reject(new Bo(e))
                        }
                    }
                    _createConnectUrl(t, e) {
                        return e ? t + (-1 === t.indexOf("?") ? "?" : "&") + `id=${e}` : t
                    }
                    async _createTransport(t, e, n, r) {
                        let o = this._createConnectUrl(t, n.connectionToken);
                        if (this._isITransport(e)) return this._logger.log(zo.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = e, await this._startTransport(o, r), void(this.connectionId = n.connectionId);
                        const i = [],
                            s = n.availableTransports || [];
                        let a = n;
                        for (const n of s) {
                            const s = this._resolveTransportOrError(n, e, r);
                            if (s instanceof Error) i.push(`${n.transport} failed:`), i.push(s);
                            else if (this._isITransport(s)) {
                                if (this.transport = s, !a) {
                                    try {
                                        a = await this._getNegotiationResponse(t)
                                    } catch (t) {
                                        return Promise.reject(t)
                                    }
                                    o = this._createConnectUrl(t, a.connectionToken)
                                }
                                try {
                                    return await this._startTransport(o, r), void(this.connectionId = a.connectionId)
                                } catch (t) {
                                    if (this._logger.log(zo.Error, `Failed to start the transport '${n.transport}': ${t}`), a = void 0, i.push(new Wo(`${n.transport} failed: ${t}`, Oi[n.transport])), "Connecting" !== this._connectionState) {
                                        const t = "Failed to select transport before stop() was called.";
                                        return this._logger.log(zo.Debug, t), Promise.reject(new Mo(t))
                                    }
                                }
                            }
                        }
                        return i.length > 0 ? Promise.reject(new $o(`Unable to connect to the server with any of the available transports. ${i.join(" ")}`, i)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."))
                    }
                    _constructTransport(t) {
                        switch (t) {
                            case Oi.WebSockets:
                                if (!this._options.WebSocket) throw new Error("'WebSocket' is not supported in your environment.");
                                return new Ai(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
                            case Oi.ServerSentEvents:
                                if (!this._options.EventSource) throw new Error("'EventSource' is not supported in your environment.");
                                return new Pi(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
                            case Oi.LongPolling:
                                return new Ii(this._httpClient, this._logger, this._options);
                            default:
                                throw new Error(`Unknown transport: ${t}.`)
                        }
                    }
                    _startTransport(t, e) {
                        return this.transport.onreceive = this.onreceive, this.transport.onclose = t => this._stopConnection(t), this.transport.connect(t, e)
                    }
                    _resolveTransportOrError(t, e, n) {
                        const r = Oi[t.transport];
                        if (null == r) return this._logger.log(zo.Debug, `Skipping transport '${t.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${t.transport}' because it is not supported by this client.`);
                        if (!ji(e, r)) return this._logger.log(zo.Debug, `Skipping transport '${Oi[r]}' because it was disabled by the client.`), new Uo(`'${Oi[r]}' is disabled by the client.`, r);
                        if (!(t.transferFormats.map((t => Ci[t])).indexOf(n) >= 0)) return this._logger.log(zo.Debug, `Skipping transport '${Oi[r]}' because it does not support the requested transfer format '${Ci[n]}'.`), new Error(`'${Oi[r]}' does not support ${Ci[n]}.`);
                        if (r === Oi.WebSockets && !this._options.WebSocket || r === Oi.ServerSentEvents && !this._options.EventSource) return this._logger.log(zo.Debug, `Skipping transport '${Oi[r]}' because it is not supported in your environment.'`), new Do(`'${Oi[r]}' is not supported in your environment.`, r);
                        this._logger.log(zo.Debug, `Selecting transport '${Oi[r]}'.`);
                        try {
                            return this._constructTransport(r)
                        } catch (t) {
                            return t
                        }
                    }
                    _isITransport(t) {
                        return t && "object" == typeof t && "connect" in t
                    }
                    _stopConnection(t) {
                        if (this._logger.log(zo.Debug, `HttpConnection.stopConnection(${t}) called while in state ${this._connectionState}.`), this.transport = void 0, t = this._stopError || t, this._stopError = void 0, "Disconnected" !== this._connectionState) {
                            if ("Connecting" === this._connectionState) throw this._logger.log(zo.Warning, `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${t}) was called while the connection is still in the connecting state.`);
                            if ("Disconnecting" === this._connectionState && this._stopPromiseResolver(), t ? this._logger.log(zo.Error, `Connection disconnected with error '${t}'.`) : this._logger.log(zo.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((t => {
                                    this._logger.log(zo.Error, `TransportSendQueue.stop() threw error '${t}'.`)
                                })), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
                                this._connectionStarted = !1;
                                try {
                                    this.onclose && this.onclose(t)
                                } catch (e) {
                                    this._logger.log(zo.Error, `HttpConnection.onclose(${t}) threw error '${e}'.`)
                                }
                            }
                        } else this._logger.log(zo.Debug, `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is already in the disconnected state.`)
                    }
                    _resolveUrl(t) {
                        if (0 === t.lastIndexOf("https://", 0) || 0 === t.lastIndexOf("http://", 0)) return t;
                        if (!Go.isBrowser) throw new Error(`Cannot resolve '${t}'.`);
                        const e = window.document.createElement("a");
                        return e.href = t, this._logger.log(zo.Information, `Normalizing '${t}' to '${e.href}'.`), e.href
                    }
                    _resolveNegotiateUrl(t) {
                        const e = t.indexOf("?");
                        let n = t.substring(0, -1 === e ? t.length : e);
                        return "/" !== n[n.length - 1] && (n += "/"), n += "negotiate", n += -1 === e ? "" : t.substring(e), -1 === n.indexOf("negotiateVersion") && (n += -1 === e ? "?" : "&", n += "negotiateVersion=" + this._negotiateVersion), n
                    }
                }

                function ji(t, e) {
                    return !t || !!(e & t)
                }
                class Ni {
                    constructor(t) {
                        this._transport = t, this._buffer = [], this._executing = !0, this._sendBufferedData = new xi, this._transportResult = new xi, this._sendLoopPromise = this._sendLoop()
                    }
                    send(t) {
                        return this._bufferData(t), this._transportResult || (this._transportResult = new xi), this._transportResult.promise
                    }
                    stop() {
                        return this._executing = !1, this._sendBufferedData.resolve(), this._sendLoopPromise
                    }
                    _bufferData(t) {
                        if (this._buffer.length && typeof this._buffer[0] != typeof t) throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof t}`);
                        this._buffer.push(t), this._sendBufferedData.resolve()
                    }
                    async _sendLoop() {
                        for (;;) {
                            if (await this._sendBufferedData.promise, !this._executing) {
                                this._transportResult && this._transportResult.reject("Connection stopped.");
                                break
                            }
                            this._sendBufferedData = new xi;
                            const t = this._transportResult;
                            this._transportResult = void 0;
                            const e = "string" == typeof this._buffer[0] ? this._buffer.join("") : Ni._concatBuffers(this._buffer);
                            this._buffer.length = 0;
                            try {
                                await this._transport.send(e), t.resolve()
                            } catch (e) {
                                t.reject(e)
                            }
                        }
                    }
                    static _concatBuffers(t) {
                        const e = t.map((t => t.byteLength)).reduce(((t, e) => t + e)),
                            n = new Uint8Array(e);
                        let r = 0;
                        for (const e of t) n.set(new Uint8Array(e), r), r += e.byteLength;
                        return n.buffer
                    }
                }
                class xi {
                    constructor() {
                        this.promise = new Promise(((t, e) => [this._resolver, this._rejecter] = [t, e]))
                    }
                    resolve() {
                        this._resolver()
                    }
                    reject(t) {
                        this._rejecter(t)
                    }
                }
                const Mi = "json";
                class Di {
                    constructor() {
                        this.name = Mi, this.version = 1, this.transferFormat = Ci.Text
                    }
                    parseMessages(t, e) {
                        if ("string" != typeof t) throw new Error("Invalid input for JSON hub protocol. Expected a string.");
                        if (!t) return [];
                        null === e && (e = qo.instance);
                        const n = fi.parse(t),
                            r = [];
                        for (const t of n) {
                            const n = JSON.parse(t);
                            if ("number" != typeof n.type) throw new Error("Invalid payload.");
                            switch (n.type) {
                                case gi.Invocation:
                                    this._isInvocationMessage(n);
                                    break;
                                case gi.StreamItem:
                                    this._isStreamItemMessage(n);
                                    break;
                                case gi.Completion:
                                    this._isCompletionMessage(n);
                                    break;
                                case gi.Ping:
                                case gi.Close:
                                    break;
                                default:
                                    e.log(zo.Information, "Unknown message type '" + n.type + "' ignored.");
                                    continue
                            }
                            r.push(n)
                        }
                        return r
                    }
                    writeMessage(t) {
                        return fi.write(JSON.stringify(t))
                    }
                    _isInvocationMessage(t) {
                        this._assertNotEmptyString(t.target, "Invalid payload for Invocation message."), void 0 !== t.invocationId && this._assertNotEmptyString(t.invocationId, "Invalid payload for Invocation message.")
                    }
                    _isStreamItemMessage(t) {
                        if (this._assertNotEmptyString(t.invocationId, "Invalid payload for StreamItem message."), void 0 === t.item) throw new Error("Invalid payload for StreamItem message.")
                    }
                    _isCompletionMessage(t) {
                        if (t.result && t.error) throw new Error("Invalid payload for Completion message.");
                        !t.result && t.error && this._assertNotEmptyString(t.error, "Invalid payload for Completion message."), this._assertNotEmptyString(t.invocationId, "Invalid payload for Completion message.")
                    }
                    _assertNotEmptyString(t, e) {
                        if ("string" != typeof t || "" === t) throw new Error(e)
                    }
                }
                const Ui = {
                    trace: zo.Trace,
                    debug: zo.Debug,
                    info: zo.Information,
                    information: zo.Information,
                    warn: zo.Warning,
                    warning: zo.Warning,
                    error: zo.Error,
                    critical: zo.Critical,
                    none: zo.None
                };

                function Wi(t) {
                    const e = Ui[t.toLowerCase()];
                    if (void 0 !== e) return e;
                    throw new Error(`Unknown log level: ${t}`)
                }
                class Bi {
                    configureLogging(t) {
                        if (Zo.isRequired(t, "logging"), $i(t)) this.logger = t;
                        else if ("string" == typeof t) {
                            const e = Wi(t);
                            this.logger = new ei(e)
                        } else this.logger = new ei(t);
                        return this
                    }
                    withUrl(t, e) {
                        return Zo.isRequired(t, "url"), Zo.isNotEmpty(t, "url"), this.url = t, this.httpConnectionOptions = "object" == typeof e ? {
                            ...this.httpConnectionOptions,
                            ...e
                        } : {
                            ...this.httpConnectionOptions,
                            transport: e
                        }, this
                    }
                    withHubProtocol(t) {
                        return Zo.isRequired(t, "protocol"), this.protocol = t, this
                    }
                    withAutomaticReconnect(t) {
                        if (this.reconnectPolicy) throw new Error("A reconnectPolicy has already been set.");
                        return t ? Array.isArray(t) ? this.reconnectPolicy = new wi(t) : this.reconnectPolicy = t : this.reconnectPolicy = new wi, this
                    }
                    build() {
                        const t = this.httpConnectionOptions || {};
                        if (void 0 === t.logger && (t.logger = this.logger), !this.url) throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
                        const e = new Ri(this.url, t);
                        return bi.create(e, this.logger || qo.instance, this.protocol || new Di, this.reconnectPolicy)
                    }
                }

                function $i(t) {
                    return void 0 !== t.log
                }

                function Fi(t) {
                    return e(this, void 0, void 0, (function*() {
                        var e;
                        return t && null !== (e = yield t()) && void 0 !== e ? e : ""
                    }))
                }
                const Hi = t => {
                    let {
                        builder: n = new Bi,
                        hubEndpoint: r,
                        appUrl: o,
                        logger: s,
                        getToken: a
                    } = t;
                    if (!r || !o) throw new Error("The AppUrl and HubEndpoint must be defined in order to use SignalR communications");
                    const c = n.withUrl(new URL(r, o).href, {
                        accessTokenFactory: () => e(void 0, void 0, void 0, (function*() {
                            return (yield Fi(a)).replace("Bearer ", "")
                        }))
                    }).withAutomaticReconnect();
                    return s && c.configureLogging({
                        log: (t, e) => {
                            var n, r;
                            switch (t) {
                                case zo.Information:
                                case zo.Trace:
                                case zo.Debug:
                                case zo.Warning:
                                    null === (n = s.debug) || void 0 === n || n.call(s, {
                                        category: "SignalRHttpClient",
                                        message: `HubConnection ${e}`
                                    });
                                    break;
                                case zo.Error:
                                case zo.Critical:
                                    null === (r = s.error) || void 0 === r || r.call(s, {
                                        category: "SignalRHttpClient",
                                        message: `Handler Error: HubConnection ${e}`,
                                        errorCode: i.Communication_Default,
                                        error: new Error(e)
                                    })
                            }
                        }
                    }), c.build()
                };
                var zi, qi, Vi, Zi, Gi, Xi, Ki, Qi;
                const Ji = "moduleservices/debugger/requestshub",
                    Yi = "",
                    ts = "SignalRHttpClient";
                class es {
                    constructor(t) {
                        let {
                            appUrl: e,
                            localeHeader: n = Yi,
                            getLocale: o,
                            setLocale: i,
                            logger: s,
                            getToken: a
                        } = t;
                        zi.add(this), qi.set(this, void 0), Vi.set(this, void 0), Zi.set(this, void 0), Gi.set(this, void 0), Xi.set(this, void 0), Ki.set(this, void 0), r(this, Xi, Ar(e)), r(this, qi, n), r(this, Vi, o), r(this, Zi, i), r(this, Gi, s), r(this, Ki, a)
                    }
                    executeRequest(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                url: r,
                                payload: s,
                                headers: c,
                                contentType: l = m.FormUrlEncoded,
                                useLocaleInfo: u = !1,
                                responseHandler: h,
                                hubConnectionBuilder: p = new Bi
                            } = t;
                            return function*() {
                                var t, f, d, g, y, v, _, m, b, T, w, E, S, O;
                                null === (f = null === (t = n(e, Gi, "f")) || void 0 === t ? void 0 : t.setActiveSpanAsNonAggregable) || void 0 === f || f.call(t);
                                const C = Hi({
                                        builder: p,
                                        hubEndpoint: Ji,
                                        appUrl: n(e, Xi, "f"),
                                        logger: n(e, Gi, "f"),
                                        getToken: n(e, Ki, "f")
                                    }),
                                    k = u ? null === (d = n(e, Vi, "f")) || void 0 === d ? void 0 : d.call(e) : void 0,
                                    I = Object.assign(Object.assign(Object.assign({}, c), k ? {
                                        [n(e, qi, "f")]: k
                                    } : {}), Or({
                                        payload: s,
                                        headers: c
                                    }) ? {
                                        "content-type": l
                                    } : {});
                                try {
                                    const t = s ? kr({
                                        payload: s,
                                        contentType: l
                                    }) : void 0;
                                    yield C.start();
                                    const c = yield C.invoke("ExecuteRequest", new URL(r, n(e, Xi, "f")).pathname, t, I);
                                    yield C.stop(), null === (y = null === (g = n(e, Gi, "f")) || void 0 === g ? void 0 : g.debug) || void 0 === y || y.call(g, {
                                        category: ts,
                                        message: `ExecuteRequest ${r}`
                                    });
                                    const p = Lr(null == c ? void 0 : c.ResponseBody, n(e, Gi, "f"), ts);
                                    if (!(null == c ? void 0 : c.ResponseStatusCode) || c.ResponseStatusCode < 200 || c.ResponseStatusCode > 299) {
                                        const t = null !== (m = null === (_ = null === (v = null == c ? void 0 : c.ResponseStatusCode) || void 0 === v ? void 0 : v.toString) || void 0 === _ ? void 0 : _.call(v)) && void 0 !== m ? m : "",
                                            e = a(t);
                                        throw new o(null !== (T = null === (b = null == p ? void 0 : p.exception) || void 0 === b ? void 0 : b.message) && void 0 !== T ? T : "Network Error", null !== (E = null === (w = null == p ? void 0 : p.exception) || void 0 === w ? void 0 : w.errorCode) && void 0 !== E ? E : e, t, p, ts)
                                    }
                                    if (u && n(e, Zi, "f") && (null == c ? void 0 : c.ResponseHeaders) && Pr({
                                            responseHeaders: c.ResponseHeaders,
                                            localeHeader: n(e, qi, "f"),
                                            currentLocale: k,
                                            setLocale: n(e, Zi, "f")
                                        }), "function" == typeof h) try {
                                        h({
                                            data: p,
                                            responseHeaders: null == c ? void 0 : c.ResponseHeaders
                                        })
                                    } catch (t) {
                                        null === (O = null === (S = n(e, Gi, "f")) || void 0 === S ? void 0 : S.error) || void 0 === O || O.call(S, {
                                            category: ts,
                                            message: `ExecuteRequest ${r}`,
                                            errorCode: i.Communication_Default,
                                            error: t
                                        })
                                    }
                                    return p
                                } catch (t) {
                                    throw yield null == C ? void 0 : C.stop(), n(e, zi, "m", Qi).call(e, t, r)
                                }
                            }()
                        }))
                    }
                }
                var ns, rs, os;
                qi = new WeakMap, Vi = new WeakMap, Zi = new WeakMap, Gi = new WeakMap, Xi = new WeakMap, Ki = new WeakMap, zi = new WeakSet, Qi = function(t, e) {
                    var r, s, c, l;
                    let u, h = i.Communication_Default;
                    return t instanceof o ? (h = a(null !== (r = t.status) && void 0 !== r ? r : ""), u = t) : u = new o(`ExecuteRequest ${e}`, h, void 0, void 0, ts), null === (c = null === (s = n(this, Gi, "f")) || void 0 === s ? void 0 : s.error) || void 0 === c || c.call(s, {
                        category: ts,
                        message: `ExecuteRequest ${e} - ${null!==(l=null==t?void 0:t.message)&&void 0!==l?l:""}`,
                        errorCode: h,
                        error: t
                    }), u
                };
                const is = t => {
                    let {
                        appUrl: e,
                        localeHeader: n,
                        getLocale: r,
                        setLocale: o,
                        logger: i,
                        getToken: s
                    } = t;
                    return new es({
                        appUrl: e,
                        localeHeader: n,
                        getLocale: r,
                        setLocale: o,
                        logger: i,
                        getToken: s
                    })
                };
                class ss {
                    constructor(t) {
                        let {
                            appUrl: e,
                            localeHeader: n,
                            getLocale: o,
                            setLocale: i,
                            logger: s,
                            getToken: a,
                            signalRClientInstance: c = is({
                                appUrl: e,
                                localeHeader: n,
                                getLocale: o,
                                setLocale: i,
                                logger: s,
                                getToken: a
                            }),
                            alternateHttpClientInstance: l
                        } = t;
                        ns.set(this, void 0), rs.set(this, void 0), os.set(this, void 0), r(this, ns, c), r(this, rs, l), r(this, os, s)
                    }
                    post(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                url: r,
                                payload: o,
                                headers: i,
                                contentType: s,
                                timeout: a,
                                timeoutHandler: c,
                                useLocaleInfo: l,
                                responseHandler: u
                            } = t;
                            return function*() {
                                const t = () => n(e, ns, "f").executeRequest({
                                    url: r,
                                    payload: o,
                                    headers: i,
                                    contentType: s,
                                    useLocaleInfo: l,
                                    timeout: a,
                                    timeoutHandler: c,
                                    responseHandler: u
                                });
                                return Nr(n(e, os, "f"), "POST", t)
                            }()
                        }))
                    }
                    get(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                url: r,
                                params: o,
                                headers: i,
                                responseType: s,
                                useLocaleInfo: a,
                                timeout: c,
                                timeoutHandler: l,
                                baseURL: u
                            } = t;
                            return function*() {
                                return n(e, rs, "f").get({
                                    url: r,
                                    params: o,
                                    headers: i,
                                    responseType: s,
                                    useLocaleInfo: a,
                                    timeout: c,
                                    timeoutHandler: l,
                                    baseURL: u
                                })
                            }()
                        }))
                    }
                    getResponseUrl(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                url: r,
                                params: o,
                                headers: i,
                                useLocaleInfo: s,
                                timeout: a,
                                timeoutHandler: c,
                                baseURL: l
                            } = t;
                            return function*() {
                                return n(e, rs, "f").getResponseUrl({
                                    url: r,
                                    params: o,
                                    headers: i,
                                    useLocaleInfo: s,
                                    timeout: a,
                                    timeoutHandler: c,
                                    baseURL: l
                                })
                            }()
                        }))
                    }
                }
                var as, cs, ls, us, hs, ps, fs, ds, gs, ys, vs, _s;
                t.DebuggerHttpClient = ss, ns = new WeakMap, rs = new WeakMap, os = new WeakMap;
                const ms = "HttpClientWithHealthCheck",
                    bs = 1800,
                    Ts = "ping",
                    ws = 30;
                class Es {
                    constructor(t) {
                        let {
                            isHealthy: e = !1,
                            healthCheckIntervalInSeconds: n = bs,
                            healthCheckEndpoint: o = Ts,
                            healingTimeoutDelayInSeconds: i = ws,
                            healthCheckNeededPathFilter: s,
                            logger: a
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        as.add(this), cs.set(this, void 0), ls.set(this, void 0), us.set(this, void 0), hs.set(this, void 0), ps.set(this, void 0), fs.set(this, void 0), ds.set(this, void 0), r(this, cs, t), r(this, ls, 1e3 * n), r(this, us, o), r(this, hs, i), r(this, ps, s), e && r(this, fs, Date.now()), r(this, ds, a)
                    }
                    setHealthCheckInterval(t) {
                        r(this, ls, 1e3 * t)
                    }
                    post(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                url: r,
                                payload: o,
                                params: i,
                                headers: s,
                                contentType: a,
                                timeout: c,
                                timeoutHandler: l,
                                useLocaleInfo: u,
                                baseURL: h,
                                responseHandler: p
                            } = t;
                            return function*() {
                                return n(e, as, "m", _s).call(e, (t => n(e, cs, "f").post({
                                    url: r,
                                    payload: o,
                                    params: i,
                                    headers: s,
                                    contentType: a,
                                    timeout: t,
                                    timeoutHandler: l,
                                    useLocaleInfo: u,
                                    baseURL: h,
                                    responseHandler: p
                                })), r, h, c)
                            }()
                        }))
                    }
                    get(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                url: r,
                                params: o,
                                headers: i,
                                useLocaleInfo: s,
                                timeout: a,
                                timeoutHandler: c,
                                responseType: l,
                                baseURL: u
                            } = t;
                            return function*() {
                                return n(e, as, "m", _s).call(e, (t => n(e, cs, "f").get({
                                    url: r,
                                    params: o,
                                    headers: i,
                                    useLocaleInfo: s,
                                    timeout: t,
                                    timeoutHandler: c,
                                    responseType: l,
                                    baseURL: u
                                })), r, u, a)
                            }()
                        }))
                    }
                    getResponseUrl(t) {
                        return e(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                url: r,
                                params: o,
                                headers: i,
                                useLocaleInfo: s,
                                timeout: a,
                                timeoutHandler: c,
                                baseURL: l
                            } = t;
                            return function*() {
                                return n(e, as, "m", _s).call(e, (t => n(e, cs, "f").getResponseUrl({
                                    url: r,
                                    params: o,
                                    headers: i,
                                    useLocaleInfo: s,
                                    timeout: t,
                                    timeoutHandler: c,
                                    baseURL: l
                                })), r, l, a)
                            }()
                        }))
                    }
                }

                function Ss(t) {
                    return t.errorCode === i.Communication_Timeout || t.errorCode === i.Communication_Unavailable || t.errorCode === i.Communication_Internal_Server_Error
                }
                var Os, Cs, ks, Is;
                t.HttpClientWithHealthCheck = Es, cs = new WeakMap, ls = new WeakMap, us = new WeakMap, hs = new WeakMap, ps = new WeakMap, fs = new WeakMap, ds = new WeakMap, as = new WeakSet, gs = function(t, e) {
                    var r, o;
                    const i = null === (o = null === (r = n(this, ps, "f")) || void 0 === r ? void 0 : r.isPathAcceptable(t, e)) || void 0 === o || o,
                        s = !n(this, fs, "f") || Date.now() - n(this, fs, "f") > n(this, ls, "f");
                    return i && s
                }, ys = function() {
                    return e(this, void 0, void 0, (function*() {
                        var t, e;
                        null === (e = null === (t = n(this, ds, "f")) || void 0 === t ? void 0 : t.debug) || void 0 === e || e.call(t, {
                            category: ms,
                            message: `Checking healthiness at ${n(this,us,"f")}`
                        });
                        try {
                            return yield n(this, cs, "f").get({
                                url: n(this, us, "f"),
                                timeout: 2
                            }), r(this, fs, Date.now(), "f"), !0
                        } catch (t) {
                            return !1
                        }
                    }))
                }, vs = function(t, r, o) {
                    return e(this, void 0, void 0, (function*() {
                        return void 0 === o || !n(this, as, "m", gs).call(this, t, r) || (yield n(this, as, "m", ys).call(this)) ? o : o + n(this, hs, "f")
                    }))
                }, _s = function(t, o, i, s) {
                    return e(this, void 0, void 0, (function*() {
                        const e = yield n(this, as, "m", vs).call(this, o, i, s);
                        try {
                            return yield t(e)
                        } finally {
                            r(this, fs, Date.now())
                        }
                    }))
                };
                class Ps {
                    constructor() {
                        let {
                            acceptionRules: t = [],
                            rejectionRules: e = []
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Os.add(this), Cs.set(this, void 0), ks.set(this, void 0), r(this, Cs, t), r(this, ks, e)
                    }
                    isPathAcceptable(t, e) {
                        const r = (e ? `${e}/${t}` : t).replace(/\/+/g, "/"),
                            o = 0 === n(this, Cs, "f").length || n(this, Cs, "f").some((t => n(this, Os, "m", Is).call(this, t, r))),
                            i = n(this, ks, "f").some((t => n(this, Os, "m", Is).call(this, t, r)));
                        return o && !i
                    }
                }
                t.PathFilter = Ps, Cs = new WeakMap, ks = new WeakMap, Os = new WeakSet, Is = function(t, e) {
                    return t instanceof RegExp ? t.test(e) : !!t && e.startsWith(t)
                }, t.Version = "1.10.2"
            }(t)
    }(O);
    var C, k, I = {},
        P = {};

    function A() {
        return C || (C = 1, function(t) {
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                function(t) {
                    var e;
                    Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Version = t.FeaturesManager = t.FeatureKeys = void 0,
                        function(t) {
                            t.WebHttpClientForNative = "WebHttpClientForNative", t.NoInstrumentationFactoryLogs = "NoInstrumentationFactoryLogs", t.WriteLogsOnConsoles = "WriteLogsOnConsoles", t.ServiceWorkerTraces = "ServiceWorkerTraces", t.EnableOTLV2TraceFormat = "EnableOTLV2TraceFormat"
                        }(e || (t.FeatureKeys = e = {}));
                    const n = {
                        ServiceWorkerTraces: "true",
                        EnableOTLV2TraceFormat: "true"
                    };

                    function r() {
                        if ("undefined" != typeof window) return window;
                        if (void 0 !== E) return E;
                        if ("undefined" != typeof globalThis) return globalThis;
                        if ("undefined" != typeof self) return self;
                        throw new Error("unable to locate global object")
                    }
                    const o = "ft-",
                        i = r().sessionStorage,
                        s = [];
                    class a {
                        static readValue(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
                            var n;
                            return null !== (n = null == e ? void 0 : e.getItem(this.getFeatureKey(t))) && void 0 !== n ? n : void 0
                        }
                        static isEnabled(t) {
                            let {
                                featuresStorage: e = i,
                                features: r = s,
                                defaultValues: o = n
                            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            var a;
                            const c = o[t],
                                l = null !== (a = this.readValue(t, e)) && void 0 !== a ? a : c,
                                u = "true" === (null == l ? void 0 : l.toLowerCase()),
                                h = u !== ("true" === (null == c ? void 0 : c.toLowerCase()));
                            return h && !r.includes(t) ? (console.warn(`FeaturesManager: Experimental flag "${t}" is overridden with value "${l}"`), r.push(t)) : !h && r.includes(t) && r.splice(r.indexOf(t), 1), u
                        }
                    }
                    t.FeaturesManager = a, a.getFeatureKey = t => `${o}${t}`, t.Version = "1.0.0"
                }(t)
        }(P)), P
    }! function(t) {
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
            function(t, e, n) {
                function r(t, e, n, r) {
                    function o(t) {
                        return t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))
                    }
                    return new(n || (n = Promise))((function(n, i) {
                        function s(t) {
                            try {
                                c(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? n(t.value) : o(t.value).then(s, a)
                        }
                        c((r = r.apply(t, e || [])).next())
                    }))
                }

                function o(t, e, n, r) {
                    if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t)
                }

                function i(t, e, n, r, o) {
                    if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return e.set(t, n), n
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Visibility = t.Version = t.Tracer = t.SpanKind = t.Logger = t.LogType = t.Log = t.KnownAttributes = t.InstrumentationFactory = void 0, "function" == typeof SuppressedError && SuppressedError;
                var s = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof E ? E : {},
                    a = "1.9.0",
                    c = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;

                function l(t) {
                    var e = new Set([t]),
                        n = new Set,
                        r = t.match(c);
                    if (!r) return function() {
                        return !1
                    };
                    var o = {
                        major: +r[1],
                        minor: +r[2],
                        patch: +r[3],
                        prerelease: r[4]
                    };
                    if (null != o.prerelease) return function(e) {
                        return e === t
                    };

                    function i(t) {
                        return n.add(t), !1
                    }

                    function s(t) {
                        return e.add(t), !0
                    }
                    return function(t) {
                        if (e.has(t)) return !0;
                        if (n.has(t)) return !1;
                        var r = t.match(c);
                        if (!r) return i(t);
                        var a = {
                            major: +r[1],
                            minor: +r[2],
                            patch: +r[3],
                            prerelease: r[4]
                        };
                        return null != a.prerelease || o.major !== a.major ? i(t) : 0 === o.major ? o.minor === a.minor && o.patch <= a.patch ? s(t) : i(t) : o.minor <= a.minor ? s(t) : i(t)
                    }
                }
                var u = l(a),
                    h = a.split(".")[0],
                    p = Symbol.for("opentelemetry.js.api." + h),
                    f = s;

                function d(t, e, n, r) {
                    var o;
                    void 0 === r && (r = !1);
                    var i = f[p] = null !== (o = f[p]) && void 0 !== o ? o : {
                        version: a
                    };
                    if (!r && i[t]) {
                        var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + t);
                        return n.error(s.stack || s.message), !1
                    }
                    return i.version !== a ? (s = new Error("@opentelemetry/api: Registration of version v" + i.version + " for " + t + " does not match previously registered API v" + a), n.error(s.stack || s.message), !1) : (i[t] = e, n.debug("@opentelemetry/api: Registered a global for " + t + " v" + a + "."), !0)
                }

                function g(t) {
                    var e, n, r = null === (e = f[p]) || void 0 === e ? void 0 : e.version;
                    if (r && u(r)) return null === (n = f[p]) || void 0 === n ? void 0 : n[t]
                }

                function y(t, e) {
                    e.debug("@opentelemetry/api: Unregistering a global for " + t + " v" + a + ".");
                    var n = f[p];
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
                    m = function(t, e, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                        return t.concat(r || Array.prototype.slice.call(e))
                    },
                    b = function() {
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
                    var r = g("diag");
                    if (r) return n.unshift(e), r[t].apply(r, m([], _(n), !1))
                }

                function w(t, e) {
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
                }! function(t) {
                    t[t.NONE = 0] = "NONE", t[t.ERROR = 30] = "ERROR", t[t.WARN = 50] = "WARN", t[t.INFO = 60] = "INFO", t[t.DEBUG = 70] = "DEBUG", t[t.VERBOSE = 80] = "VERBOSE", t[t.ALL = 9999] = "ALL"
                }(v || (v = {}));
                var S = function(t, e) {
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
                    O = function(t, e, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                        return t.concat(r || Array.prototype.slice.call(e))
                    },
                    C = "diag",
                    k = function() {
                        function t() {
                            function t(t) {
                                return function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var r = g("diag");
                                    if (r) return r[t].apply(r, O([], S(e), !1))
                                }
                            }
                            var e = this,
                                n = function(t, n) {
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
                                    var a = g("diag"),
                                        c = w(null !== (o = n.logLevel) && void 0 !== o ? o : v.INFO, t);
                                    if (a && !n.suppressOverrideMessage) {
                                        var l = null !== (i = (new Error).stack) && void 0 !== i ? i : "<failed to generate stacktrace>";
                                        a.warn("Current logger will be overwritten from " + l), c.warn("Current logger will overwrite one already registered from " + l)
                                    }
                                    return d("diag", c, e, !0)
                                };
                            e.setLogger = n, e.disable = function() {
                                y(C, e)
                            }, e.createComponentLogger = function(t) {
                                return new b(t)
                            }, e.verbose = t("verbose"), e.debug = t("debug"), e.info = t("info"), e.warn = t("warn"), e.error = t("error")
                        }
                        return t.instance = function() {
                            return this._instance || (this._instance = new t), this._instance
                        }, t
                    }(),
                    I = function(t, e) {
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
                    P = function(t) {
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
                                var e = I(t, 2);
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
                                for (var s = P(r), a = s.next(); !a.done; a = s.next()) {
                                    var c = a.value;
                                    i._entries.delete(c)
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
                    R = k.instance();

                function j(t) {
                    return void 0 === t && (t = {}), new A(new Map(Object.entries(t)))
                }

                function N(t) {
                    return "string" != typeof t && (R.error("Cannot create baggage metadata from unknown type: " + typeof t), t = ""), {
                        __TYPE__: L,
                        toString: function() {
                            return t
                        }
                    }
                }

                function x(t) {
                    return Symbol.for(t)
                }
                var M, D, U = new(function() {
                        function t(e) {
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
                        }
                        return t
                    }()),
                    W = (D = function(t, e) {
                        return D = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                        }, D(t, e)
                    }, function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                        function n() {
                            this.constructor = t
                        }
                        D(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    }),
                    B = function() {
                        function t() {}
                        return t.prototype.createGauge = function(t, e) {
                            return J
                        }, t.prototype.createHistogram = function(t, e) {
                            return Y
                        }, t.prototype.createCounter = function(t, e) {
                            return Q
                        }, t.prototype.createUpDownCounter = function(t, e) {
                            return tt
                        }, t.prototype.createObservableGauge = function(t, e) {
                            return nt
                        }, t.prototype.createObservableCounter = function(t, e) {
                            return et
                        }, t.prototype.createObservableUpDownCounter = function(t, e) {
                            return rt
                        }, t.prototype.addBatchObservableCallback = function(t, e) {}, t.prototype.removeBatchObservableCallback = function(t) {}, t
                    }(),
                    $ = function() {
                        function t() {}
                        return t
                    }(),
                    F = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e.prototype.add = function(t, e) {}, e
                    }($),
                    H = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e.prototype.add = function(t, e) {}, e
                    }($),
                    z = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e.prototype.record = function(t, e) {}, e
                    }($),
                    q = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e.prototype.record = function(t, e) {}, e
                    }($),
                    V = function() {
                        function t() {}
                        return t.prototype.addCallback = function(t) {}, t.prototype.removeCallback = function(t) {}, t
                    }(),
                    Z = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e
                    }(V),
                    G = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e
                    }(V),
                    X = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e
                    }(V),
                    K = new B,
                    Q = new F,
                    J = new z,
                    Y = new q,
                    tt = new H,
                    et = new Z,
                    nt = new G,
                    rt = new X,
                    ot = {
                        get: function(t, e) {
                            if (null != t) return t[e]
                        },
                        keys: function(t) {
                            return null == t ? [] : Object.keys(t)
                        }
                    },
                    it = {
                        set: function(t, e, n) {
                            null != t && (t[e] = n)
                        }
                    },
                    st = function(t, e) {
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
                    at = function(t, e, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                        return t.concat(r || Array.prototype.slice.call(e))
                    },
                    ct = function() {
                        function t() {}
                        return t.prototype.active = function() {
                            return U
                        }, t.prototype.with = function(t, e, n) {
                            for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
                            return e.call.apply(e, at([n], st(r), !1))
                        }, t.prototype.bind = function(t, e) {
                            return e
                        }, t.prototype.enable = function() {
                            return this
                        }, t.prototype.disable = function() {
                            return this
                        }, t
                    }(),
                    lt = function(t, e) {
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
                    ut = function(t, e, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                        return t.concat(r || Array.prototype.slice.call(e))
                    },
                    ht = "context",
                    pt = new ct,
                    ft = function() {
                        function t() {}
                        return t.getInstance = function() {
                            return this._instance || (this._instance = new t), this._instance
                        }, t.prototype.setGlobalContextManager = function(t) {
                            return d(ht, t, k.instance())
                        }, t.prototype.active = function() {
                            return this._getContextManager().active()
                        }, t.prototype.with = function(t, e, n) {
                            for (var r, o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                            return (r = this._getContextManager()).with.apply(r, ut([t, e, n], lt(o), !1))
                        }, t.prototype.bind = function(t, e) {
                            return this._getContextManager().bind(t, e)
                        }, t.prototype._getContextManager = function() {
                            return g(ht) || pt
                        }, t.prototype.disable = function() {
                            this._getContextManager().disable(), y(ht, k.instance())
                        }, t
                    }();
                ! function(t) {
                    t[t.NONE = 0] = "NONE", t[t.SAMPLED = 1] = "SAMPLED"
                }(M || (M = {}));
                var dt = "0000000000000000",
                    gt = "00000000000000000000000000000000",
                    yt = {
                        traceId: gt,
                        spanId: dt,
                        traceFlags: M.NONE
                    },
                    vt = function() {
                        function t(t) {
                            void 0 === t && (t = yt), this._spanContext = t
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
                    _t = x("OpenTelemetry Context Key SPAN");

                function mt(t) {
                    return t.getValue(_t) || void 0
                }

                function bt() {
                    return mt(ft.getInstance().active())
                }

                function Tt(t, e) {
                    return t.setValue(_t, e)
                }

                function wt(t) {
                    return t.deleteValue(_t)
                }

                function Et(t, e) {
                    return Tt(t, new vt(e))
                }

                function St(t) {
                    var e;
                    return null === (e = mt(t)) || void 0 === e ? void 0 : e.spanContext()
                }
                var Ot = /^([0-9a-f]{32})$/i,
                    Ct = /^[0-9a-f]{16}$/i;

                function kt(t) {
                    return Ot.test(t) && t !== gt
                }

                function It(t) {
                    return Ct.test(t) && t !== dt
                }

                function Pt(t) {
                    return kt(t.traceId) && It(t.spanId)
                }

                function At(t) {
                    return new vt(t)
                }
                var Lt = ft.getInstance(),
                    Rt = function() {
                        function t() {}
                        return t.prototype.startSpan = function(t, e, n) {
                            if (void 0 === n && (n = Lt.active()), Boolean(null == e ? void 0 : e.root)) return new vt;
                            var r = n && St(n);
                            return jt(r) && Pt(r) ? new vt(r) : new vt
                        }, t.prototype.startActiveSpan = function(t, e, n, r) {
                            var o, i, s;
                            if (!(arguments.length < 2)) {
                                2 === arguments.length ? s = e : 3 === arguments.length ? (o = e, s = n) : (o = e, i = n, s = r);
                                var a = null != i ? i : Lt.active(),
                                    c = this.startSpan(t, o, a),
                                    l = Tt(a, c);
                                return Lt.with(l, s, void 0, c)
                            }
                        }, t
                    }();

                function jt(t) {
                    return "object" == typeof t && "string" == typeof t.spanId && "string" == typeof t.traceId && "number" == typeof t.traceFlags
                }
                var Nt, xt, Mt, Dt = new Rt,
                    Ut = function() {
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
                            return t ? (this._delegate = t, this._delegate) : Dt
                        }, t
                    }(),
                    Wt = new(function() {
                        function t() {}
                        return t.prototype.getTracer = function(t, e, n) {
                            return new Rt
                        }, t
                    }()),
                    Bt = function() {
                        function t() {}
                        return t.prototype.getTracer = function(t, e, n) {
                            var r;
                            return null !== (r = this.getDelegateTracer(t, e, n)) && void 0 !== r ? r : new Ut(this, t, e, n)
                        }, t.prototype.getDelegate = function() {
                            var t;
                            return null !== (t = this._delegate) && void 0 !== t ? t : Wt
                        }, t.prototype.setDelegate = function(t) {
                            this._delegate = t
                        }, t.prototype.getDelegateTracer = function(t, e, n) {
                            var r;
                            return null === (r = this._delegate) || void 0 === r ? void 0 : r.getTracer(t, e, n)
                        }, t
                    }();
                (function(t) {
                    t[t.NOT_RECORD = 0] = "NOT_RECORD", t[t.RECORD = 1] = "RECORD", t[t.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
                })(Nt || (Nt = {})),
                function(t) {
                    t[t.INTERNAL = 0] = "INTERNAL", t[t.SERVER = 1] = "SERVER", t[t.CLIENT = 2] = "CLIENT", t[t.PRODUCER = 3] = "PRODUCER", t[t.CONSUMER = 4] = "CONSUMER"
                }(xt || (xt = {})),
                function(t) {
                    t[t.UNSET = 0] = "UNSET", t[t.OK = 1] = "OK", t[t.ERROR = 2] = "ERROR"
                }(Mt || (Mt = {}));
                var $t = ft.getInstance(),
                    Ft = k.instance(),
                    Ht = new(function() {
                        function t() {}
                        return t.prototype.getMeter = function(t, e, n) {
                            return K
                        }, t
                    }()),
                    zt = "metrics",
                    qt = function() {
                        function t() {}
                        return t.getInstance = function() {
                            return this._instance || (this._instance = new t), this._instance
                        }, t.prototype.setGlobalMeterProvider = function(t) {
                            return d(zt, t, k.instance())
                        }, t.prototype.getMeterProvider = function() {
                            return g(zt) || Ht
                        }, t.prototype.getMeter = function(t, e, n) {
                            return this.getMeterProvider().getMeter(t, e, n)
                        }, t.prototype.disable = function() {
                            y(zt, k.instance())
                        }, t
                    }().getInstance(),
                    Vt = function() {
                        function t() {}
                        return t.prototype.inject = function(t, e) {}, t.prototype.extract = function(t, e) {
                            return t
                        }, t.prototype.fields = function() {
                            return []
                        }, t
                    }(),
                    Zt = x("OpenTelemetry Baggage Key");

                function Gt(t) {
                    return t.getValue(Zt) || void 0
                }

                function Xt() {
                    return Gt(ft.getInstance().active())
                }

                function Kt(t, e) {
                    return t.setValue(Zt, e)
                }

                function Qt(t) {
                    return t.deleteValue(Zt)
                }
                var Jt = "propagation",
                    Yt = new Vt,
                    te = function() {
                        function t() {
                            this.createBaggage = j, this.getBaggage = Gt, this.getActiveBaggage = Xt, this.setBaggage = Kt, this.deleteBaggage = Qt
                        }
                        return t.getInstance = function() {
                            return this._instance || (this._instance = new t), this._instance
                        }, t.prototype.setGlobalPropagator = function(t) {
                            return d(Jt, t, k.instance())
                        }, t.prototype.inject = function(t, e, n) {
                            return void 0 === n && (n = it), this._getGlobalPropagator().inject(t, e, n)
                        }, t.prototype.extract = function(t, e, n) {
                            return void 0 === n && (n = ot), this._getGlobalPropagator().extract(t, e, n)
                        }, t.prototype.fields = function() {
                            return this._getGlobalPropagator().fields()
                        }, t.prototype.disable = function() {
                            y(Jt, k.instance())
                        }, t.prototype._getGlobalPropagator = function() {
                            return g(Jt) || Yt
                        }, t
                    }().getInstance(),
                    ee = "trace",
                    ne = function() {
                        function t() {
                            this._proxyTracerProvider = new Bt, this.wrapSpanContext = At, this.isSpanContextValid = Pt, this.deleteSpan = wt, this.getSpan = mt, this.getActiveSpan = bt, this.getSpanContext = St, this.setSpan = Tt, this.setSpanContext = Et
                        }
                        return t.getInstance = function() {
                            return this._instance || (this._instance = new t), this._instance
                        }, t.prototype.setGlobalTracerProvider = function(t) {
                            var e = d(ee, this._proxyTracerProvider, k.instance());
                            return e && this._proxyTracerProvider.setDelegate(t), e
                        }, t.prototype.getTracerProvider = function() {
                            return g(ee) || this._proxyTracerProvider
                        }, t.prototype.getTracer = function(t, e) {
                            return this.getTracerProvider().getTracer(t, e)
                        }, t.prototype.disable = function() {
                            y(ee, k.instance()), this._proxyTracerProvider = new Bt
                        }, t
                    }().getInstance(),
                    re = x("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

                function oe(t) {
                    return t.setValue(re, !0)
                }

                function ie(t) {
                    return !0 === t.getValue(re)
                }
                var se = "=",
                    ae = ";",
                    ce = ",",
                    le = "baggage",
                    ue = 180,
                    he = 4096,
                    pe = 8192,
                    fe = function(t, e) {
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

                function de(t) {
                    return t.reduce((function(t, e) {
                        var n = "" + t + ("" !== t ? ce : "") + e;
                        return n.length > pe ? t : n
                    }), "")
                }

                function ge(t) {
                    return t.getAllEntries().map((function(t) {
                        var e = fe(t, 2),
                            n = e[0],
                            r = e[1],
                            o = encodeURIComponent(n) + "=" + encodeURIComponent(r.value);
                        return void 0 !== r.metadata && (o += ae + r.metadata.toString()), o
                    }))
                }

                function ye(t) {
                    var e = t.split(ae);
                    if (!(e.length <= 0)) {
                        var n = e.shift();
                        if (n) {
                            var r = n.indexOf(se);
                            if (!(r <= 0)) {
                                var o, i = decodeURIComponent(n.substring(0, r).trim()),
                                    s = decodeURIComponent(n.substring(r + 1).trim());
                                return e.length > 0 && (o = N(e.join(ae))), {
                                    key: i,
                                    value: s,
                                    metadata: o
                                }
                            }
                        }
                    }
                }
                var ve = function() {
                        function t() {}
                        return t.prototype.inject = function(t, e, n) {
                            var r = te.getBaggage(t);
                            if (r && !ie(t)) {
                                var o = de(ge(r).filter((function(t) {
                                    return t.length <= he
                                })).slice(0, ue));
                                o.length > 0 && n.set(e, le, o)
                            }
                        }, t.prototype.extract = function(t, e, n) {
                            var r = n.get(e, le),
                                o = Array.isArray(r) ? r.join(ce) : r;
                            if (!o) return t;
                            var i = {};
                            return 0 === o.length ? t : (o.split(ce).forEach((function(t) {
                                var e = ye(t);
                                if (e) {
                                    var n = {
                                        value: e.value
                                    };
                                    e.metadata && (n.metadata = e.metadata), i[e.key] = n
                                }
                            })), 0 === Object.entries(i).length ? t : te.setBaggage(t, te.createBaggage(i)))
                        }, t.prototype.fields = function() {
                            return [le]
                        }, t
                    }(),
                    _e = function(t) {
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
                    me = function(t, e) {
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

                function be(t) {
                    var e, n, r = {};
                    if ("object" != typeof t || null == t) return r;
                    try {
                        for (var o = _e(Object.entries(t)), i = o.next(); !i.done; i = o.next()) {
                            var s = me(i.value, 2),
                                a = s[0],
                                c = s[1];
                            Te(a) ? we(c) ? Array.isArray(c) ? r[a] = c.slice() : r[a] = c : Ft.warn("Invalid attribute value set for key: " + a) : Ft.warn("Invalid attribute key: " + a)
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

                function Te(t) {
                    return "string" == typeof t && t.length > 0
                }

                function we(t) {
                    return null == t || (Array.isArray(t) ? Ee(t) : Se(t))
                }

                function Ee(t) {
                    var e, n, r;
                    try {
                        for (var o = _e(t), i = o.next(); !i.done; i = o.next()) {
                            var s = i.value;
                            if (null != s) {
                                if (!r) {
                                    if (Se(s)) {
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
                }

                function Se(t) {
                    switch (typeof t) {
                        case "number":
                        case "boolean":
                        case "string":
                            return !0
                    }
                    return !1
                }

                function Oe() {
                    return function(t) {
                        Ft.error(Ce(t))
                    }
                }

                function Ce(t) {
                    return "string" == typeof t ? t : JSON.stringify(ke(t))
                }

                function ke(t) {
                    for (var e = {}, n = t; null !== n;) Object.getOwnPropertyNames(n).forEach((function(t) {
                        if (!e[t]) {
                            var r = n[t];
                            r && (e[t] = String(r))
                        }
                    })), n = Object.getPrototypeOf(n);
                    return e
                }
                var Ie, Pe = Oe();

                function Ae(t) {
                    try {
                        Pe(t)
                    } catch (t) {}
                }! function(t) {
                    t.AlwaysOff = "always_off", t.AlwaysOn = "always_on", t.ParentBasedAlwaysOff = "parentbased_always_off", t.ParentBasedAlwaysOn = "parentbased_always_on", t.ParentBasedTraceIdRatio = "parentbased_traceidratio", t.TraceIdRatio = "traceidratio"
                }(Ie || (Ie = {}));
                var Le = ",",
                    Re = ["OTEL_SDK_DISABLED"];

                function je(t) {
                    return Re.indexOf(t) > -1
                }
                var Ne = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_BLRP_EXPORT_TIMEOUT", "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE", "OTEL_BLRP_MAX_QUEUE_SIZE", "OTEL_BLRP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"];

                function xe(t) {
                    return Ne.indexOf(t) > -1
                }
                var Me = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"];

                function De(t) {
                    return Me.indexOf(t) > -1
                }
                var Ue = 1 / 0,
                    We = 128,
                    Be = 128,
                    $e = 128,
                    Fe = {
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
                        OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: Ue,
                        OTEL_ATTRIBUTE_COUNT_LIMIT: We,
                        OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: Ue,
                        OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: We,
                        OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: Ue,
                        OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: We,
                        OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
                        OTEL_SPAN_LINK_COUNT_LIMIT: 128,
                        OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: Be,
                        OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: $e,
                        OTEL_TRACES_EXPORTER: "",
                        OTEL_TRACES_SAMPLER: Ie.ParentBasedAlwaysOn,
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

                function He(t, e, n) {
                    if (void 0 !== n[t]) {
                        var r = String(n[t]);
                        e[t] = "true" === r.toLowerCase()
                    }
                }

                function ze(t, e, n, r, o) {
                    if (void 0 === r && (r = -1 / 0), void 0 === o && (o = 1 / 0), void 0 !== n[t]) {
                        var i = Number(n[t]);
                        isNaN(i) || (e[t] = i < r ? r : i > o ? o : i)
                    }
                }

                function qe(t, e, n, r) {
                    void 0 === r && (r = Le);
                    var o = n[t];
                    "string" == typeof o && (e[t] = o.split(r).map((function(t) {
                        return t.trim()
                    })))
                }
                var Ve = {
                    ALL: v.ALL,
                    VERBOSE: v.VERBOSE,
                    DEBUG: v.DEBUG,
                    INFO: v.INFO,
                    WARN: v.WARN,
                    ERROR: v.ERROR,
                    NONE: v.NONE
                };

                function Ze(t, e, n) {
                    var r = n[t];
                    if ("string" == typeof r) {
                        var o = Ve[r.toUpperCase()];
                        null != o && (e[t] = o)
                    }
                }

                function Ge(t) {
                    var e = {};
                    for (var n in Fe) {
                        var r = n;
                        if ("OTEL_LOG_LEVEL" === r) Ze(r, e, t);
                        else if (je(r)) He(r, e, t);
                        else if (xe(r)) ze(r, e, t);
                        else if (De(r)) qe(r, e, t);
                        else {
                            var o = t[r];
                            null != o && (e[r] = String(o))
                        }
                    }
                    return e
                }
                var Xe = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof E ? E : {};

                function Ke() {
                    var t = Ge(Xe);
                    return Object.assign({}, Fe, t)
                }

                function Qe() {
                    return Ge(Xe)
                }
                var Je, Ye = performance,
                    tn = "1.26.0",
                    en = "exception.type",
                    nn = "exception.message",
                    rn = "exception.stacktrace",
                    on = "http.method",
                    sn = "http.url",
                    an = "http.host",
                    cn = "http.scheme",
                    ln = "http.status_code",
                    un = "http.user_agent",
                    hn = "http.response_content_length",
                    pn = "http.response_content_length_uncompressed",
                    fn = "process.runtime.name",
                    dn = "service.name",
                    gn = "telemetry.sdk.name",
                    yn = "telemetry.sdk.language",
                    vn = "telemetry.sdk.version",
                    _n = "webjs",
                    mn = ((Je = {})[gn] = "opentelemetry", Je[fn] = "browser", Je[yn] = _n, Je[vn] = tn, Je);

                function bn(t) {}
                var Tn, wn = 9,
                    En = 6,
                    Sn = Math.pow(10, En),
                    On = Math.pow(10, wn);

                function Cn(t) {
                    var e = t / 1e3;
                    return [Math.trunc(e), Math.round(t % 1e3 * Sn)]
                }

                function kn() {
                    var t = Ye.timeOrigin;
                    if ("number" != typeof t) {
                        var e = Ye;
                        t = e.timing && e.timing.fetchStart
                    }
                    return t
                }

                function In(t) {
                    return xn(Cn(kn()), Cn("number" == typeof t ? t : Ye.now()))
                }

                function Pn(t) {
                    if (jn(t)) return t;
                    if ("number" == typeof t) return t < kn() ? In(t) : Cn(t);
                    if (t instanceof Date) return Cn(t.getTime());
                    throw TypeError("Invalid input type")
                }

                function An(t, e) {
                    var n = e[0] - t[0],
                        r = e[1] - t[1];
                    return r < 0 && (n -= 1, r += On), [n, r]
                }

                function Ln(t) {
                    var e = wn,
                        n = "" + "0".repeat(e) + t[1] + "Z",
                        r = n.substr(n.length - e - 1);
                    return new Date(1e3 * t[0]).toISOString().replace("000Z", r)
                }

                function Rn(t) {
                    return t[0] * On + t[1]
                }

                function jn(t) {
                    return Array.isArray(t) && 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1]
                }

                function Nn(t) {
                    return jn(t) || "number" == typeof t || t instanceof Date
                }

                function xn(t, e) {
                    var n = [t[0] + e[0], t[1] + e[1]];
                    return n[1] >= On && (n[1] -= On, n[0] += 1), n
                }! function(t) {
                    t[t.SUCCESS = 0] = "SUCCESS", t[t.FAILED = 1] = "FAILED"
                }(Tn || (Tn = {}));
                var Mn = function(t) {
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
                    Dn = function() {
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
                                for (var i = Mn(this._propagators), s = i.next(); !s.done; s = i.next()) {
                                    var a = s.value;
                                    try {
                                        a.inject(t, e, n)
                                    } catch (t) {
                                        Ft.warn("Failed to inject with " + a.constructor.name + ". Err: " + t.message)
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
                                    Ft.warn("Failed to inject with " + r.constructor.name + ". Err: " + t.message)
                                }
                                return t
                            }), t)
                        }, t.prototype.fields = function() {
                            return this._fields.slice()
                        }, t
                    }(),
                    Un = "[_0-9a-z-*/]",
                    Wn = new RegExp("^(?:[a-z]" + Un + "{0,255}|[a-z0-9]" + Un + "{0,240}@[a-z]" + Un + "{0,13})$"),
                    Bn = /^[ -~]{0,255}[!-~]$/,
                    $n = /,|=/;

                function Fn(t) {
                    return Wn.test(t)
                }

                function Hn(t) {
                    return Bn.test(t) && !$n.test(t)
                }
                var zn = 32,
                    qn = 512,
                    Vn = ",",
                    Zn = "=",
                    Gn = function() {
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
                                return e.push(n + Zn + t.get(n)), e
                            }), []).join(Vn)
                        }, t.prototype._parse = function(t) {
                            t.length > qn || (this._internalState = t.split(Vn).reverse().reduce((function(t, e) {
                                var n = e.trim(),
                                    r = n.indexOf(Zn);
                                if (-1 !== r) {
                                    var o = n.slice(0, r),
                                        i = n.slice(r + 1, e.length);
                                    Fn(o) && Hn(i) && t.set(o, i)
                                }
                                return t
                            }), new Map), this._internalState.size > zn && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, zn))))
                        }, t.prototype._keys = function() {
                            return Array.from(this._internalState.keys()).reverse()
                        }, t.prototype._clone = function() {
                            var e = new t;
                            return e._internalState = new Map(this._internalState), e
                        }, t
                    }(),
                    Xn = "traceparent",
                    Kn = "tracestate",
                    Qn = "00",
                    Jn = new RegExp("^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$");

                function Yn(t) {
                    var e = Jn.exec(t);
                    return e ? "00" === e[1] && e[5] ? null : {
                        traceId: e[2],
                        spanId: e[3],
                        traceFlags: parseInt(e[4], 16)
                    } : null
                }
                var tr = function() {
                        function t() {}
                        return t.prototype.inject = function(t, e, n) {
                            var r = ne.getSpanContext(t);
                            if (r && !ie(t) && Pt(r)) {
                                var o = Qn + "-" + r.traceId + "-" + r.spanId + "-0" + Number(r.traceFlags || M.NONE).toString(16);
                                n.set(e, Xn, o), r.traceState && n.set(e, Kn, r.traceState.serialize())
                            }
                        }, t.prototype.extract = function(t, e, n) {
                            var r = n.get(e, Xn);
                            if (!r) return t;
                            var o = Array.isArray(r) ? r[0] : r;
                            if ("string" != typeof o) return t;
                            var i = Yn(o);
                            if (!i) return t;
                            i.isRemote = !0;
                            var s = n.get(e, Kn);
                            if (s) {
                                var a = Array.isArray(s) ? s.join(",") : s;
                                i.traceState = new Gn("string" == typeof a ? a : void 0)
                            }
                            return ne.setSpanContext(t, i)
                        }, t.prototype.fields = function() {
                            return [Xn, Kn]
                        }, t
                    }(),
                    er = "[object Object]",
                    nr = "[object Null]",
                    rr = "[object Undefined]",
                    or = Function.prototype.toString,
                    ir = or.call(Object),
                    sr = hr(Object.getPrototypeOf, Object),
                    ar = Object.prototype,
                    cr = ar.hasOwnProperty,
                    lr = Symbol ? Symbol.toStringTag : void 0,
                    ur = ar.toString;

                function hr(t, e) {
                    return function(n) {
                        return t(e(n))
                    }
                }

                function pr(t) {
                    if (!fr(t) || dr(t) !== er) return !1;
                    var e = sr(t);
                    if (null === e) return !0;
                    var n = cr.call(e, "constructor") && e.constructor;
                    return "function" == typeof n && n instanceof n && or.call(n) === ir
                }

                function fr(t) {
                    return null != t && "object" == typeof t
                }

                function dr(t) {
                    return null == t ? void 0 === t ? rr : nr : lr && lr in Object(t) ? gr(t) : yr(t)
                }

                function gr(t) {
                    var e = cr.call(t, lr),
                        n = t[lr],
                        r = !1;
                    try {
                        t[lr] = void 0, r = !0
                    } catch (t) {}
                    var o = ur.call(t);
                    return r && (e ? t[lr] = n : delete t[lr]), o
                }

                function yr(t) {
                    return ur.call(t)
                }
                var vr = 20;

                function _r() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    for (var n = t.shift(), r = new WeakMap; t.length > 0;) n = br(n, t.shift(), 0, r);
                    return n
                }

                function mr(t) {
                    return wr(t) ? t.slice() : t
                }

                function br(t, e, n, r) {
                    var o;
                    if (void 0 === n && (n = 0), !(n > vr)) {
                        if (n++, Or(t) || Or(e) || Er(e)) o = mr(e);
                        else if (wr(t)) {
                            if (o = t.slice(), wr(e))
                                for (var i = 0, s = e.length; i < s; i++) o.push(mr(e[i]));
                            else if (Sr(e))
                                for (i = 0, s = (a = Object.keys(e)).length; i < s; i++) o[c = a[i]] = mr(e[c])
                        } else if (Sr(t))
                            if (Sr(e)) {
                                if (!Cr(t, e)) return e;
                                var a;
                                for (o = Object.assign({}, t), i = 0, s = (a = Object.keys(e)).length; i < s; i++) {
                                    var c, l = e[c = a[i]];
                                    if (Or(l)) void 0 === l ? delete o[c] : o[c] = l;
                                    else {
                                        var u = o[c],
                                            h = l;
                                        if (Tr(t, c, r) || Tr(e, c, r)) delete o[c];
                                        else {
                                            if (Sr(u) && Sr(h)) {
                                                var p = r.get(u) || [],
                                                    f = r.get(h) || [];
                                                p.push({
                                                    obj: t,
                                                    key: c
                                                }), f.push({
                                                    obj: e,
                                                    key: c
                                                }), r.set(u, p), r.set(h, f)
                                            }
                                            o[c] = br(o[c], l, n, r)
                                        }
                                    }
                                }
                            } else o = e;
                        return o
                    }
                }

                function Tr(t, e, n) {
                    for (var r = n.get(t[e]) || [], o = 0, i = r.length; o < i; o++) {
                        var s = r[o];
                        if (s.key === e && s.obj === t) return !0
                    }
                    return !1
                }

                function wr(t) {
                    return Array.isArray(t)
                }

                function Er(t) {
                    return "function" == typeof t
                }

                function Sr(t) {
                    return !Or(t) && !wr(t) && !Er(t) && "object" == typeof t
                }

                function Or(t) {
                    return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || void 0 === t || t instanceof Date || t instanceof RegExp || null === t
                }

                function Cr(t, e) {
                    return !(!pr(t) || !pr(e))
                }
                var kr = function(t) {
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

                function Ir(t, e) {
                    return "string" == typeof e ? t === e : !!t.match(e)
                }

                function Pr(t, e) {
                    var n, r;
                    if (!e) return !1;
                    try {
                        for (var o = kr(e), i = o.next(); !i.done; i = o.next())
                            if (Ir(t, i.value)) return !0
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
                }
                var Ar = function() {
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
                    Lr = function(t, e) {
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
                    Rr = function(t, e, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                        return t.concat(r || Array.prototype.slice.call(e))
                    },
                    jr = function() {
                        function t(t, e) {
                            this._callback = t, this._that = e, this._isCalled = !1, this._deferred = new Ar
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
                                    Promise.resolve((t = this._callback).call.apply(t, Rr([this._that], Lr(n), !1))).then((function(t) {
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
                class Nr {
                    constructor() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In();
                        this.instant = t
                    }
                    static toISOString(t) {
                        return Ln(t.instant)
                    }
                    static toNanoSeconds(t) {
                        return Rn(t.instant)
                    }
                }
                var xr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== E ? E : "undefined" != typeof self ? self : {};

                function Mr(t) {
                    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
                }
                var Dr, Ur = {
                        exports: {}
                    },
                    Wr = {
                        exports: {}
                    };

                function Br() {
                    return Dr || (Dr = 1, function(t) {
                        ! function(e, n) {
                            t.exports = n()
                        }(0, (function() {
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
                                c = r.concat(o, i, s, a);

                            function l(t) {
                                if (t)
                                    for (var n = 0; n < c.length; n++) void 0 !== t[c[n]] && this["set" + e(c[n])](t[c[n]])
                            }
                            l.prototype = {
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
                                    if (t instanceof l) this.evalOrigin = t;
                                    else {
                                        if (!(t instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                        this.evalOrigin = new l(t)
                                    }
                                },
                                toString: function() {
                                    var t = this.getFileName() || "",
                                        e = this.getLineNumber() || "",
                                        n = this.getColumnNumber() || "",
                                        r = this.getFunctionName() || "";
                                    return this.getIsEval() ? t ? "[eval] (" + t + ":" + e + ":" + n + ")" : "[eval]:" + e + ":" + n : r ? r + " (" + t + ":" + e + ":" + n + ")" : t + ":" + e + ":" + n
                                }
                            }, l.fromString = function(t) {
                                var e = t.indexOf("("),
                                    n = t.lastIndexOf(")"),
                                    r = t.substring(0, e),
                                    o = t.substring(e + 1, n).split(","),
                                    i = t.substring(n + 1);
                                if (0 === i.indexOf("@")) var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, ""),
                                    a = s[1],
                                    c = s[2],
                                    u = s[3];
                                return new l({
                                    functionName: r,
                                    args: o || void 0,
                                    fileName: a,
                                    lineNumber: c || void 0,
                                    columnNumber: u || void 0
                                })
                            };
                            for (var u = 0; u < r.length; u++) l.prototype["get" + e(r[u])] = n(r[u]), l.prototype["set" + e(r[u])] = function(t) {
                                return function(e) {
                                    this[t] = Boolean(e)
                                }
                            }(r[u]);
                            for (var h = 0; h < o.length; h++) l.prototype["get" + e(o[h])] = n(o[h]), l.prototype["set" + e(o[h])] = function(e) {
                                return function(n) {
                                    if (!t(n)) throw new TypeError(e + " must be a Number");
                                    this[e] = Number(n)
                                }
                            }(o[h]);
                            for (var p = 0; p < i.length; p++) l.prototype["get" + e(i[p])] = n(i[p]), l.prototype["set" + e(i[p])] = function(t) {
                                return function(e) {
                                    this[t] = String(e)
                                }
                            }(i[p]);
                            return l
                        }))
                    }(Wr)), Wr.exports
                }! function(t) {
                    ! function(e, n) {
                        t.exports = n(Br())
                    }(0, (function(t) {
                        var e = /(^|@)\S+:\d+/,
                            n = /^\s*at .*(\S+:\d+|\(native\))/m,
                            r = /^(eval@)?(\[native code])?$/;
                        return {
                            parse: function(t) {
                                if (void 0 !== t.stacktrace || void 0 !== t["opera#sourceloc"]) return this.parseOpera(t);
                                if (t.stack && t.stack.match(n)) return this.parseV8OrIE(t);
                                if (t.stack) return this.parseFFOrSafari(t);
                                throw new Error("Cannot parse given Error object")
                            },
                            extractLocation: function(t) {
                                if (-1 === t.indexOf(":")) return [t];
                                var e = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/[()]/g, ""));
                                return [e[1], e[2] || void 0, e[3] || void 0]
                            },
                            parseV8OrIE: function(e) {
                                return e.stack.split("\n").filter((function(t) {
                                    return !!t.match(n)
                                }), this).map((function(e) {
                                    e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                                    var n = e.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                                        r = n.match(/ (\(.+\)$)/);
                                    n = r ? n.replace(r[0], "") : n;
                                    var o = this.extractLocation(r ? r[1] : n),
                                        i = r && n || void 0,
                                        s = ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0];
                                    return new t({
                                        functionName: i,
                                        fileName: s,
                                        lineNumber: o[1],
                                        columnNumber: o[2],
                                        source: e
                                    })
                                }), this)
                            },
                            parseFFOrSafari: function(e) {
                                return e.stack.split("\n").filter((function(t) {
                                    return !t.match(r)
                                }), this).map((function(e) {
                                    if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === e.indexOf("@") && -1 === e.indexOf(":")) return new t({
                                        functionName: e
                                    });
                                    var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                        r = e.match(n),
                                        o = r && r[1] ? r[1] : void 0,
                                        i = this.extractLocation(e.replace(n, ""));
                                    return new t({
                                        functionName: o,
                                        fileName: i[0],
                                        lineNumber: i[1],
                                        columnNumber: i[2],
                                        source: e
                                    })
                                }), this)
                            },
                            parseOpera: function(t) {
                                return !t.stacktrace || t.message.indexOf("\n") > -1 && t.message.split("\n").length > t.stacktrace.split("\n").length ? this.parseOpera9(t) : t.stack ? this.parseOpera11(t) : this.parseOpera10(t)
                            },
                            parseOpera9: function(e) {
                                for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = e.message.split("\n"), o = [], i = 2, s = r.length; i < s; i += 2) {
                                    var a = n.exec(r[i]);
                                    a && o.push(new t({
                                        fileName: a[2],
                                        lineNumber: a[1],
                                        source: r[i]
                                    }))
                                }
                                return o
                            },
                            parseOpera10: function(e) {
                                for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = e.stacktrace.split("\n"), o = [], i = 0, s = r.length; i < s; i += 2) {
                                    var a = n.exec(r[i]);
                                    a && o.push(new t({
                                        functionName: a[3] || void 0,
                                        fileName: a[2],
                                        lineNumber: a[1],
                                        source: r[i]
                                    }))
                                }
                                return o
                            },
                            parseOpera11: function(n) {
                                return n.stack.split("\n").filter((function(t) {
                                    return !!t.match(e) && !t.match(/^Error created at/)
                                }), this).map((function(e) {
                                    var n, r = e.split("@"),
                                        o = this.extractLocation(r.pop()),
                                        i = r.shift() || "",
                                        s = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                                    i.match(/\(([^)]*)\)/) && (n = i.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                                    var a = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                    return new t({
                                        functionName: s,
                                        args: a,
                                        fileName: o[0],
                                        lineNumber: o[1],
                                        columnNumber: o[2],
                                        source: e
                                    })
                                }), this)
                            }
                        }
                    }))
                }(Ur);
                var $r, Fr, Hr, zr, qr, Vr, Zr, Gr = Mr(Ur.exports);
                class Xr {
                    constructor(t) {
                        this.name = t.name, this.message = t.message, t.stack && (this.stack = o($r, $r, "m", Fr).call($r, t))
                    }
                }
                $r = Xr, Fr = function(t) {
                    const e = Gr.parse(t),
                        n = t,
                        r = (null == n ? void 0 : n.extraStack) ? `ExtraStack: ${n.extraStack}` : "",
                        o = e.map((t => t.source)).join("\n");
                    return `${t.name}: ${t.message}\n${o}\n${r}`
                };
                class Kr {
                    constructor(t) {
                        let {
                            type: e,
                            category: n,
                            message: r,
                            error: o,
                            visibility: i,
                            timestamp: s = new Nr,
                            span: a,
                            errorCode: c,
                            attributes: l
                        } = t;
                        this.type = e, this.category = n, this.message = r, o && (this.error = new Xr(o)), this.visibility = i, this.timestamp = s, this.span = a, this.errorCode = c, this.attributes = l
                    }
                }
                t.Log = Kr;
                const Qr = 5,
                    Jr = 10;
                class Yr {
                    constructor() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map;
                        Hr.add(this), zr.set(this, void 0), i(this, zr, t)
                    }
                    closeCircuit(t) {
                        o(this, zr, "f").delete(t)
                    }
                    run(t, e) {
                        return r(this, void 0, void 0, (function*() {
                            const n = o(this, zr, "f").get(t);
                            return void 0 === n ? o(this, Hr, "m", Vr).call(this, t, e) : n.iterationsUntilRetry > 0 ? (n.iterationsUntilRetry--, 2) : o(this, Hr, "m", Zr).call(this, t, n, e)
                        }))
                    }
                }
                zr = new WeakMap, Hr = new WeakSet, qr = function(t) {
                    o(this, zr, "f").set(t, {
                        retriesFailed: 0,
                        iterationsUntilRetry: Qr
                    })
                }, Vr = function(t, e) {
                    return r(this, void 0, void 0, (function*() {
                        try {
                            return yield e(), 0
                        } catch (e) {
                            return o(this, Hr, "m", qr).call(this, t), console.debug(`Circuit breaker ${t} was opened: ${e}`), 1
                        }
                    }))
                }, Zr = function(t, e, n) {
                    return r(this, void 0, void 0, (function*() {
                        try {
                            return yield n(), this.closeCircuit(t), console.debug(`Circuit breaker ${t} was closed`), 0
                        } catch (t) {
                            return e.retriesFailed++, e.iterationsUntilRetry = Math.min(e.retriesFailed * Qr, Jr), 1
                        }
                    }))
                };
                const to = new Error("request for lock canceled");
                var eo = function(t, e, n, r) {
                    function o(t) {
                        return t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))
                    }
                    return new(n || (n = Promise))((function(n, i) {
                        function s(t) {
                            try {
                                c(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? n(t.value) : o(t.value).then(s, a)
                        }
                        c((r = r.apply(t, e || [])).next())
                    }))
                };
                class no {
                    constructor(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : to;
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
                                i = oo(this._queue, (t => e <= t.priority)); - 1 === i && t <= this._value ? this._dispatchItem(o) : this._queue.splice(i + 1, 0, o)
                        }))
                    }
                    runExclusive(t) {
                        return eo(this, arguments, void 0, (function(t) {
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
                            this._weightedWaiters[t - 1] || (this._weightedWaiters[t - 1] = []), ro(this._weightedWaiters[t - 1], {
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

                function ro(t, e) {
                    const n = oo(t, (t => e.priority <= t.priority));
                    t.splice(n + 1, 0, e)
                }

                function oo(t, e) {
                    for (let n = t.length - 1; n >= 0; n--)
                        if (e(t[n])) return n;
                    return -1
                }
                var io, so = function(t, e, n, r) {
                    function o(t) {
                        return t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))
                    }
                    return new(n || (n = Promise))((function(n, i) {
                        function s(t) {
                            try {
                                c(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? n(t.value) : o(t.value).then(s, a)
                        }
                        c((r = r.apply(t, e || [])).next())
                    }))
                };
                class ao {
                    constructor(t) {
                        this._semaphore = new no(1, t)
                    }
                    acquire() {
                        return so(this, arguments, void 0, (function() {
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
                }(io || (io = {}));
                const co = {
                    Debug: io.Debug,
                    Info: io.Info,
                    Warning: io.Warning,
                    Error: io.Error,
                    Trace: io.Trace
                };
                var lo = t.LogType = io;
                class uo {
                    constructor(t, e, n, r) {
                        this.logId = t, this.log = e, this.logType = n, this.transportId = r
                    }
                }
                const ho = "logger-offline-db",
                    po = "logs",
                    fo = "spans",
                    go = "byLogType",
                    yo = "byTransportId",
                    vo = "byAggregateSignature",
                    _o = "byParentId",
                    mo = "logType",
                    bo = "transportId",
                    To = "aggregateSignature",
                    wo = "parentId",
                    Eo = (t, e) => e.some((e => t instanceof e));
                let So, Oo;

                function Co() {
                    return So || (So = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
                }

                function ko() {
                    return Oo || (Oo = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
                }
                const Io = new WeakMap,
                    Po = new WeakMap,
                    Ao = new WeakMap,
                    Lo = new WeakMap,
                    Ro = new WeakMap;

                function jo(t) {
                    const e = new Promise(((e, n) => {
                        const r = () => {
                                t.removeEventListener("success", o), t.removeEventListener("error", i)
                            },
                            o = () => {
                                e(Wo(t.result)), r()
                            },
                            i = () => {
                                n(t.error), r()
                            };
                        t.addEventListener("success", o), t.addEventListener("error", i)
                    }));
                    return e.then((e => {
                        e instanceof IDBCursor && Io.set(e, t)
                    })).catch((() => {})), Ro.set(e, t), e
                }

                function No(t) {
                    if (Po.has(t)) return;
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
                    Po.set(t, e)
                }
                let xo = {
                    get(t, e, n) {
                        if (t instanceof IDBTransaction) {
                            if ("done" === e) return Po.get(t);
                            if ("objectStoreNames" === e) return t.objectStoreNames || Ao.get(t);
                            if ("store" === e) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
                        }
                        return Wo(t[e])
                    },
                    set: (t, e, n) => (t[e] = n, !0),
                    has: (t, e) => t instanceof IDBTransaction && ("done" === e || "store" === e) || e in t
                };

                function Mo(t) {
                    xo = t(xo)
                }

                function Do(t) {
                    return t !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? ko().includes(t) ? function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return t.apply(Bo(this), n), Wo(Io.get(this))
                    } : function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return Wo(t.apply(Bo(this), n))
                    } : function(e) {
                        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                        const i = t.call(Bo(this), e, ...r);
                        return Ao.set(i, e.sort ? e.sort() : [e]), Wo(i)
                    }
                }

                function Uo(t) {
                    return "function" == typeof t ? Do(t) : (t instanceof IDBTransaction && No(t), Eo(t, Co()) ? new Proxy(t, xo) : t)
                }

                function Wo(t) {
                    if (t instanceof IDBRequest) return jo(t);
                    if (Lo.has(t)) return Lo.get(t);
                    const e = Uo(t);
                    return e !== t && (Lo.set(t, e), Ro.set(e, t)), e
                }
                const Bo = t => Ro.get(t);

                function $o(t, e) {
                    let {
                        blocked: n,
                        upgrade: r,
                        blocking: o,
                        terminated: i
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    const s = indexedDB.open(t, e),
                        a = Wo(s);
                    return r && s.addEventListener("upgradeneeded", (t => {
                        r(Wo(s.result), t.oldVersion, t.newVersion, Wo(s.transaction), t)
                    })), n && s.addEventListener("blocked", (t => n(t.oldVersion, t.newVersion, t))), a.then((t => {
                        i && t.addEventListener("close", (() => i())), o && t.addEventListener("versionchange", (t => o(t.oldVersion, t.newVersion, t)))
                    })).catch((() => {})), a
                }
                const Fo = ["get", "getKey", "getAll", "getAllKeys", "count"],
                    Ho = ["put", "add", "delete", "clear"],
                    zo = new Map;

                function qo(t, e) {
                    if (!(t instanceof IDBDatabase) || e in t || "string" != typeof e) return;
                    if (zo.get(e)) return zo.get(e);
                    const n = e.replace(/FromIndex$/, ""),
                        r = e !== n,
                        o = Ho.includes(n);
                    if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !o && !Fo.includes(n)) return;
                    const i = async function(t) {
                        const e = this.transaction(t, o ? "readwrite" : "readonly");
                        let i = e.store;
                        for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) a[c - 1] = arguments[c];
                        return r && (i = i.index(a.shift())), (await Promise.all([i[n](...a), o && e.done]))[0]
                    };
                    return zo.set(e, i), i
                }
                var Vo, Zo, Go, Xo, Ko, Qo, Jo, Yo, ti;
                Mo((t => ({
                    ...t,
                    get: (e, n, r) => qo(e, n) || t.get(e, n, r),
                    has: (e, n) => !!qo(e, n) || t.has(e, n)
                })));
                const ei = 100,
                    ni = "next",
                    ri = "prev";
                class oi {
                    constructor(t) {
                        let {
                            dbName: e,
                            tableName: n,
                            version: r,
                            indices: o,
                            cursorToRecord: s,
                            propertyKey: a
                        } = t;
                        Vo.add(this), Zo.set(this, void 0), Go.set(this, void 0), Xo.set(this, void 0), Ko.set(this, void 0), Qo.set(this, void 0), Jo.set(this, void 0), i(this, Zo, e), i(this, Go, n), i(this, Ko, r), i(this, Qo, o), i(this, Jo, s), i(this, Xo, a)
                    }
                    open() {
                        return r(this, void 0, void 0, (function*() {
                            const t = o(this, Go, "f"),
                                e = o(this, Qo, "f"),
                                n = {
                                    keyPath: o(this, Xo, "f"),
                                    autoIncrement: !o(this, Xo, "f")
                                };
                            return $o(o(this, Zo, "f"), o(this, Ko, "f"), {
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
                                maxRecords: e = ei,
                                sortAsc: n = !0
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return function*() {
                                const r = yield t.open();
                                try {
                                    const i = r.transaction(o(t, Go, "f")).objectStore(o(t, Go, "f"));
                                    return yield o(t, Vo, "m", Yo).call(t, yield i.openCursor(null, n ? ni : ri), e)
                                } finally {
                                    r.close()
                                }
                            }()
                        }))
                    }
                    getByIndex(t, e) {
                        return r(this, arguments, void 0, (function(t, e) {
                            var n = this;
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ei,
                                i = arguments.length > 3 ? arguments[3] : void 0;
                            return function*() {
                                const s = yield n.open();
                                try {
                                    const a = s.transaction(o(n, Go, "f")).objectStore(o(n, Go, "f"));
                                    return yield o(n, Vo, "m", Yo).call(n, yield a.index(t).openCursor(e), r, i)
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
                                const n = e.transaction(o(this, Go, "f"), "readwrite").objectStore(o(this, Go, "f"));
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
                                return yield t.count(o(this, Go, "f"))
                            } finally {
                                t.close()
                            }
                        }))
                    }
                    delete(t) {
                        return r(this, void 0, void 0, (function*() {
                            const e = yield this.open();
                            try {
                                yield e.delete(o(this, Go, "f"), t)
                            } finally {
                                e.close()
                            }
                        }))
                    }
                    deleteMultiple(t) {
                        return r(this, void 0, void 0, (function*() {
                            const e = yield this.open();
                            try {
                                const n = t.map((t => e.delete(o(this, Go, "f"), t)));
                                yield Promise.all(n)
                            } finally {
                                e.close()
                            }
                        }))
                    }
                    deleteByIndex(t, e) {
                        return r(this, arguments, void 0, (function(t, e) {
                            var n = this;
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ei;
                            return function*() {
                                const i = yield n.open();
                                try {
                                    const s = i.transaction(o(n, Go, "f"), "readwrite").objectStore(o(n, Go, "f"));
                                    return yield o(n, Vo, "m", ti).call(n, yield s.index(t).openCursor(e), r)
                                } finally {
                                    i.close()
                                }
                            }()
                        }))
                    }
                    deleteRecords() {
                        return r(this, arguments, void 0, (function() {
                            var t = this;
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ei;
                            return function*() {
                                const n = yield t.open();
                                try {
                                    const r = n.transaction(o(t, Go, "f"), "readwrite").objectStore(o(t, Go, "f"));
                                    return yield o(t, Vo, "m", ti).call(t, yield r.openCursor(null, ni), e)
                                } finally {
                                    n.close()
                                }
                            }()
                        }))
                    }
                }
                Zo = new WeakMap, Go = new WeakMap, Xo = new WeakMap, Ko = new WeakMap, Qo = new WeakMap, Jo = new WeakMap, Vo = new WeakSet, Yo = function(t) {
                    return r(this, arguments, void 0, (function(t) {
                        var e = this;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei,
                            r = arguments.length > 2 ? arguments[2] : void 0;
                        return function*() {
                            const i = [];
                            for (; t && i.length < n;) {
                                const n = o(e, Jo, "f").call(e, t);
                                r && !r(n) || i.push(n), t = yield t.continue()
                            }
                            return i
                        }()
                    }))
                }, ti = function(t, e) {
                    return r(this, void 0, void 0, (function*() {
                        let n = 0;
                        for (; t && n < e;) yield t.delete(), n++, t = yield t.continue();
                        return n
                    }))
                };
                const ii = 1;
                class si extends oi {
                    constructor() {
                        super({
                            dbName: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ho,
                            tableName: po,
                            cursorToRecord: t => new uo(t.primaryKey, t.value.log, t.value.logType, t.value.transportId),
                            indices: [{
                                name: yo,
                                field: bo
                            }, {
                                name: go,
                                field: mo
                            }],
                            version: ii
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
                var ai;
                const ci = 200,
                    li = 1e4;
                class ui {
                    constructor(t) {
                        let {
                            databaseName: e,
                            database: n = new si(e)
                        } = t;
                        ai.set(this, void 0), i(this, ai, n)
                    }
                    readLogs(t) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, ai, "f").getAll({
                                sortAsc: !0,
                                maxRecords: t
                            })
                        }))
                    }
                    readLogsByTransport(t, e) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, ai, "f").getByTransportId(t, e)
                        }))
                    }
                    removeLogs(t) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, ai, "f").deleteMultiple(t)
                        }))
                    }
                    insertLog(t, e) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, ai, "f").putLog(t, e)
                        }))
                    }
                    countLogs() {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, ai, "f").count()
                        }))
                    }
                    isFull() {
                        return r(this, void 0, void 0, (function*() {
                            return (yield o(this, ai, "f").count()) >= li
                        }))
                    }
                    discardLogs() {
                        return r(this, arguments, void 0, (function() {
                            var t = this;
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ci;
                            return function*() {
                                const n = Object.keys(lo).filter((t => isNaN(Number(t))));
                                let r = e;
                                for (const e of n) {
                                    const n = co[e];
                                    if (r -= (yield o(t, ai, "f").deleteByLogType(n, r)), r <= 0) break
                                }
                                return r
                            }()
                        }))
                    }
                }
                var hi;
                ai = new WeakMap,
                    function(t) {
                        t.IsAggregateProxy = "outsystems.aggregation.proxy", t.AggregationSize = "outsystems.aggregation.size", t.IsOutlier = "outsystems.aggregation.outlier", t.AverageDuration = "outsystems.aggregation.duration.average", t.MaxDuration = "outsystems.aggregation.duration.max", t.MinDuration = "outsystems.aggregation.duration.min", t.IsNonAggregable = "osinternal.spanIsNonAggregable", t.ChildrenNames = "osinternal.childrenNames", t.functionKey = "outsystems.function.key"
                    }(hi || (hi = {}));
                const pi = "NonAggregable";

                function fi(t, e) {
                    return t < e ? -1 : e < t ? 1 : 0
                }

                function di(t) {
                    return t.attributes[hi.functionKey]
                }

                function gi(t, e, n) {
                    var r;
                    const o = t.name,
                        i = null == n ? void 0 : n(t),
                        s = null !== (r = t.attributes[hi.ChildrenNames]) && void 0 !== r ? r : [];
                    return s.sort(fi), `${t.attributes[hi.IsNonAggregable]?`${pi}.`:""}${e}.${o}.${i}(${s.join(",")})`
                }

                function yi(t, e) {
                    return !(t.attributes[hi.IsNonAggregable] || e.some((t => t.attributes[hi.IsNonAggregable])))
                }
                const vi = {
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
                        return vi.absolute({
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
                        return vi.relative({
                            min: "number" == typeof r ? Math.min(n * r, null != s ? s : 1 / 0) : void 0,
                            max: "number" == typeof o ? Math.max(n * o, null != i ? i : -1 / 0) : void 0
                        }, e, n)
                    }
                };

                function _i(t, e, n) {
                    return vi[t.type](t, e, n)
                }
                var mi, bi, Ti, wi, Ei, Si, Oi, Ci, ki, Ii, Pi, Ai, Li;
                class Ri {
                    constructor(t) {
                        mi.set(this, void 0), i(this, mi, t)
                    }
                    isOutlier(t, e) {
                        for (const [n, r] of Object.entries(o(this, mi, "f"))) {
                            const o = t.attributes[n],
                                i = e.attributes[n];
                            if ((void 0 !== o || void 0 !== i) && (void 0 === o || void 0 === i || _i(r, o, i))) return !0
                        }
                        return !1
                    }
                }
                mi = new WeakMap;
                class ji {
                    constructor(t) {
                        let {
                            storage: e,
                            outlierDetector: n = new Ri({
                                [hi.AverageDuration]: {
                                    type: "ratio",
                                    upper: .1,
                                    max: 5e7
                                }
                            }),
                            getSpanObjectId: r = di
                        } = t;
                        bi.add(this), Ti.set(this, void 0), wi.set(this, void 0), Ei.set(this, void 0), i(this, Ti, e), i(this, wi, n), i(this, Ei, r)
                    }
                    aggregate(t, e) {
                        return r(this, void 0, void 0, (function*() {
                            const n = yield o(this, Ti, "f").readSpansByParentId(t.spanId), r = o(this, bi, "m", Ci).call(this, t);
                            if (!yi(r, n)) return void(yield o(this, Ti, "f").insertSpans([o(this, bi, "m", Ii).call(this, r)], e));
                            const i = yield o(this, bi, "m", Si).call(this, r, e);
                            if (i)
                                if (o(this, wi, "f").isOutlier(r, i)) yield o(this, Ti, "f").insertSpans([o(this, bi, "m", ki).call(this, r)], e);
                                else {
                                    const r = o(this, bi, "m", Oi).call(this, t, i),
                                        s = o(this, bi, "m", Pi).call(this, n, r);
                                    yield o(this, Ti, "f").insertSpans([r, ...s], e)
                                }
                            else yield o(this, Ti, "f").insertSpans([r], e)
                        }))
                    }
                }
                Ti = new WeakMap, wi = new WeakMap, Ei = new WeakMap, bi = new WeakSet, Si = function(t, e) {
                    return r(this, void 0, void 0, (function*() {
                        const n = gi(t, e, o(this, Ei, "f")),
                            [r] = yield o(this, Ti, "f").readSpansByAggregateSignature(n);
                        return r
                    }))
                }, Oi = function(t, e) {
                    var n;
                    const r = null !== (n = e.attributes[hi.AggregationSize]) && void 0 !== n ? n : 1,
                        o = e.attributes[hi.AverageDuration],
                        i = e.attributes[hi.MaxDuration],
                        s = e.attributes[hi.MinDuration],
                        a = t.endTimeUnixNano - t.startTimeUnixNano;
                    return Object.assign(Object.assign({}, e), {
                        attributes: Object.assign(Object.assign({}, e.attributes), {
                            [hi.IsAggregateProxy]: !0,
                            [hi.AggregationSize]: r + 1,
                            [hi.AverageDuration]: (o * r + a) / (r + 1),
                            [hi.MaxDuration]: Math.max(i, a),
                            [hi.MinDuration]: Math.min(s, a)
                        }),
                        parentSpanId: e.parentSpanId === t.spanId ? t.parentSpanId : e.parentSpanId
                    })
                }, Ci = function(t) {
                    const e = t.endTimeUnixNano - t.startTimeUnixNano;
                    return Object.assign(Object.assign({}, t), {
                        attributes: Object.assign(Object.assign({}, t.attributes), {
                            [hi.IsAggregateProxy]: !1,
                            [hi.AverageDuration]: e,
                            [hi.MaxDuration]: e,
                            [hi.MinDuration]: e
                        })
                    })
                }, ki = function(t) {
                    return Object.assign(Object.assign({}, t), {
                        attributes: Object.assign(Object.assign({}, t.attributes), {
                            [hi.IsOutlier]: !0,
                            [hi.IsNonAggregable]: !0
                        })
                    })
                }, Ii = function(t) {
                    return Object.assign(Object.assign({}, t), {
                        attributes: Object.assign(Object.assign({}, t.attributes), {
                            [hi.IsNonAggregable]: !0
                        })
                    })
                }, Pi = function(t, e) {
                    return t.flatMap((t => t.spanId !== e.spanId ? [Object.assign(Object.assign({}, t), {
                        parentSpanId: e.spanId
                    })] : []))
                };
                class Ni {
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
                const xi = 1;
                class Mi extends oi {
                    constructor() {
                        super({
                            dbName: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ho,
                            tableName: fo,
                            version: xi,
                            propertyKey: arguments.length > 1 ? arguments[1] : void 0,
                            cursorToRecord: t => new Ni({
                                spanId: t.primaryKey,
                                span: t.value.span,
                                transportId: t.value.transportId,
                                aggregateSignature: t.value.aggregateSignature
                            }),
                            indices: [{
                                name: yo,
                                field: bo
                            }, {
                                name: vo,
                                field: To
                            }, {
                                name: _o,
                                field: wo
                            }]
                        }), Ai.add(this)
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
                        return this.put(t.map((t => o(this, Ai, "m", Li).call(this, t, e))))
                    }
                }
                var Di;
                Ai = new WeakSet, Li = function(t, e) {
                    return {
                        span: t,
                        transportId: e,
                        spanId: t.spanId,
                        aggregateSignature: gi(t, e, (t => t.attributes["outsystems.function.key"])),
                        parentId: t.parentSpanId
                    }
                };
                const Ui = 200,
                    Wi = 1e4;
                class Bi {
                    constructor(t) {
                        let {
                            databaseName: e,
                            autoincrement: n = !0,
                            database: r = (n ? new Mi(e) : new Mi(e, "spanId"))
                        } = t;
                        Di.set(this, void 0), i(this, Di, r)
                    }
                    readSpans(t) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, Di, "f").getAll({
                                sortAsc: !0,
                                maxRecords: t
                            })
                        }))
                    }
                    readSpansByTransport(t, e) {
                        return r(this, void 0, void 0, (function*() {
                            const n = yield o(this, Di, "f").getTopLevelByTransportId(t, e);
                            return n.length > 0 ? n : o(this, Di, "f").getByTransportId(t, e)
                        }))
                    }
                    readSpansByParentId(t, e) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, Di, "f").getByParentId(t, e)
                        }))
                    }
                    readSpansByAggregateSignature(t, e) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, Di, "f").getByAggregateSignature(t, e)
                        }))
                    }
                    removeSpans(t) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, Di, "f").deleteMultiple(t)
                        }))
                    }
                    insertSpan(t, e) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, Di, "f").putSpans([t], e)
                        }))
                    }
                    insertSerializableSpans(t, e) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, Di, "f").putSpans(t, e)
                        }))
                    }
                    countSpans() {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, Di, "f").count()
                        }))
                    }
                    isFull() {
                        return r(this, void 0, void 0, (function*() {
                            return (yield o(this, Di, "f").count()) >= Wi
                        }))
                    }
                    discardSpans() {
                        return r(this, arguments, void 0, (function() {
                            var t = this;
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ui;
                            return function*() {
                                return o(t, Di, "f").deleteRecords(e)
                            }()
                        }))
                    }
                }

                function $i(t) {
                    return new ji({
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
                var Fi, Hi, zi, qi, Vi, Zi, Gi, Xi, Ki;
                Di = new WeakMap;
                const Qi = 100,
                    Ji = 1e3,
                    Yi = new ao,
                    ts = new ao,
                    es = "logs",
                    ns = "spans_v2",
                    rs = "spans";
                class os {
                    constructor(t) {
                        let {
                            databaseNameSuffix: e,
                            isOnline: n = () => !0,
                            offlineLogsStorage: r = new ui({
                                databaseName: `${es}-${e}`
                            }),
                            offlineTracesStorage: o = new Bi({
                                databaseName: `${ns}-${e}`,
                                autoincrement: !1
                            }),
                            legacyOfflineTracesStorage: s = new Bi({
                                databaseName: `${rs}-${e}`
                            }),
                            flushLegacyTraces: a = !1,
                            aggregateSpans: c = !1,
                            spanAggregator: l = $i(o),
                            mutexDispatchLogs: u = Yi,
                            mutexDispatchSpans: h = ts
                        } = t;
                        Fi.set(this, void 0), Hi.set(this, void 0), zi.set(this, void 0), qi.set(this, !0), Vi.set(this, void 0), Zi.set(this, void 0), Gi.set(this, void 0), Xi.set(this, void 0), Ki.set(this, void 0), i(this, Fi, r), i(this, Hi, o), i(this, zi, s), i(this, Vi, n), i(this, qi, a), i(this, Zi, c), i(this, Gi, l), i(this, Ki, u), i(this, Xi, h)
                    }
                    setAggregateSpansStatus(t) {
                        i(this, Zi, t)
                    }
                    writeLog(t, e) {
                        return r(this, arguments, void 0, (function(t, e) {
                            var n = this;
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qi;
                            return function*() {
                                try {
                                    (yield o(n, Fi, "f").isFull()) && (yield o(n, Fi, "f").discardLogs()), yield o(n, Fi, "f").insertLog(t, e.getTransportId()), (yield o(n, Fi, "f").countLogs()) >= r && (yield n.flushTransportLogs(e))
                                } catch (t) {
                                    console.debug("Error writing log to storage", t)
                                }
                            }()
                        }))
                    }
                    writeSpan(t, e) {
                        return r(this, arguments, void 0, (function(t, e) {
                            var n = this;
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ji;
                            return function*() {
                                try {
                                    (yield o(n, Hi, "f").isFull()) && (yield o(n, Hi, "f").discardSpans()), yield o(n, Xi, "f").runExclusive((() => r(n, void 0, void 0, (function*() {
                                        o(this, Zi, "f") ? yield o(this, Gi, "f").aggregate(t, e.getTransportId()): yield o(this, Hi, "f").insertSpan(t, e.getTransportId())
                                    })))), (yield o(n, Hi, "f").countSpans()) >= i && (yield n.flushTransportSpans(e))
                                } catch (t) {
                                    console.debug("Error writing trace to storage", t)
                                }
                            }()
                        }))
                    }
                    processTransportLogs(t) {
                        return r(this, arguments, void 0, (function(t) {
                            var e = this;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qi;
                            return function*() {
                                yield o(e, Ki, "f").runExclusive((() => r(e, void 0, void 0, (function*() {
                                    yield this.internalLogProcess(t, n, !0)
                                }))))
                            }()
                        }))
                    }
                    flushTransportLogs(t) {
                        return r(this, arguments, void 0, (function(t) {
                            var e = this;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qi;
                            return function*() {
                                yield o(e, Ki, "f").runExclusive((() => r(e, void 0, void 0, (function*() {
                                    yield this.internalLogProcess(t, n, !1)
                                }))))
                            }()
                        }))
                    }
                    internalLogProcess(t, e, n) {
                        return r(this, void 0, void 0, (function*() {
                            if (!t.requiresConnectivity() || o(this, Vi, "f").call(this)) try {
                                const r = n ? e : 1;
                                let i = yield o(this, Fi, "f").readLogsByTransport(t.getTransportId(), e);
                                for (; i.length >= r;) yield t.writeAll(i.map((t => t.log))), yield o(this, Fi, "f").removeLogs(i.map((t => t.logId))), i = yield o(this, Fi, "f").readLogsByTransport(t.getTransportId(), e)
                            } catch (t) {
                                throw console.debug("Error in internal log processing", t), t
                            }
                        }))
                    }
                    processTransportSpans(t) {
                        return r(this, arguments, void 0, (function(t) {
                            var e = this;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ji;
                            return function*() {
                                yield o(e, Xi, "f").runExclusive((() => r(e, void 0, void 0, (function*() {
                                    yield this.internalSpanProcess(t, n, !0)
                                }))))
                            }()
                        }))
                    }
                    flushTransportSpans(t) {
                        return r(this, arguments, void 0, (function(t) {
                            var e = this;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ji;
                            return function*() {
                                yield o(e, Xi, "f").runExclusive((() => r(e, void 0, void 0, (function*() {
                                    yield this.internalSpanProcess(t, n, !1)
                                }))))
                            }()
                        }))
                    }
                    internalSpanProcess(t, e, n) {
                        return r(this, void 0, void 0, (function*() {
                            if (!t.requiresConnectivity() || o(this, Vi, "f").call(this)) {
                                if (o(this, qi, "f")) try {
                                    const n = yield this.writeSpansToTransport({
                                        transport: t,
                                        spansBatchSize: e,
                                        storage: o(this, zi, "f"),
                                        processCompleteBatchOnly: !1
                                    });
                                    i(this, qi, n > 0, "f")
                                } catch (t) {
                                    console.warn("Error in processing legacy spans", t)
                                }
                                yield this.writeSpansToTransport({
                                    transport: t,
                                    spansBatchSize: e,
                                    processCompleteBatchOnly: n,
                                    storage: o(this, Hi, "f")
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
                Fi = new WeakMap, Hi = new WeakMap, zi = new WeakMap, qi = new WeakMap, Vi = new WeakMap, Zi = new WeakMap, Gi = new WeakMap, Xi = new WeakMap, Ki = new WeakMap;
                const is = 6e4;
                class ss {
                    constructor() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : is;
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
                class as {
                    constructor(t) {
                        let {
                            logTransports: e = [],
                            traceTransports: n = [],
                            databaseNameSuffix: o,
                            isOnline: i,
                            aggregateSpans: s,
                            offlineManager: a = new os({
                                databaseNameSuffix: o,
                                isOnline: i,
                                flushLegacyTraces: !0,
                                aggregateSpans: s
                            }),
                            taskScheduler: c = new ss,
                            circuitBreakerRunner: l = new Yr
                        } = t;
                        this.logTransports = e, this.traceTransports = n, this.offlineManager = a, this.taskScheduler = c, this.circuitBreakerRunner = l, this.taskScheduler.addTask("flush-logs", (() => r(this, void 0, void 0, (function*() {
                            return this.flushLogs()
                        })))), this.taskScheduler.addTask("flush-spans", (() => r(this, void 0, void 0, (function*() {
                            return this.flushSpans()
                        })))), this.taskScheduler.start()
                    }
                    addLogTransport(t) {
                        const e = t.getTransportId(),
                            n = t => t.getTransportId() === e;
                        this.logTransports.some(n) || this.logTransports.push(t)
                    }
                    addTraceTransport(t) {
                        const e = t.getTransportId(),
                            n = t => t.getTransportId() === e;
                        this.traceTransports.some(n) || this.traceTransports.push(t)
                    }
                    removeLogTransport(t) {
                        const e = e => e.getTransportId() === t,
                            n = this.logTransports.findIndex(e); - 1 !== n && (this.logTransports.splice(n, 1), this.circuitBreakerRunner.closeCircuit(t))
                    }
                    removeTraceTransport(t) {
                        const e = e => e.getTransportId() === t,
                            n = this.traceTransports.findIndex(e); - 1 !== n && (this.traceTransports.splice(n, 1), this.circuitBreakerRunner.closeCircuit(t))
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
                var cs;
                ! function(t) {
                    t[t.Internal = 0] = "Internal", t[t.External = 1] = "External", t[t.Client = 2] = "Client"
                }(cs || (cs = {}));
                var ls = t.Visibility = cs,
                    us = "object" == typeof xr && xr && xr.Object === Object && xr,
                    hs = us,
                    ps = "object" == typeof self && self && self.Object === Object && self,
                    fs = hs || ps || Function("return this")(),
                    ds = fs.Symbol,
                    gs = ds,
                    ys = Object.prototype,
                    vs = ys.hasOwnProperty,
                    _s = ys.toString,
                    ms = gs ? gs.toStringTag : void 0;

                function bs(t) {
                    var e = vs.call(t, ms),
                        n = t[ms];
                    try {
                        t[ms] = void 0;
                        var r = !0
                    } catch (t) {}
                    var o = _s.call(t);
                    return r && (e ? t[ms] = n : delete t[ms]), o
                }
                var Ts = bs,
                    ws = Object.prototype.toString;

                function Es(t) {
                    return ws.call(t)
                }
                var Ss = ds,
                    Os = Ts,
                    Cs = Es,
                    ks = "[object Null]",
                    Is = "[object Undefined]",
                    Ps = Ss ? Ss.toStringTag : void 0;

                function As(t) {
                    return null == t ? void 0 === t ? Is : ks : Ps && Ps in Object(t) ? Os(t) : Cs(t)
                }
                var Ls = As;

                function Rs(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }
                var js = Rs,
                    Ns = Ls,
                    xs = js,
                    Ms = "[object AsyncFunction]",
                    Ds = "[object Function]",
                    Us = "[object GeneratorFunction]",
                    Ws = "[object Proxy]";

                function Bs(t) {
                    if (!xs(t)) return !1;
                    var e = Ns(t);
                    return e == Ds || e == Us || e == Ms || e == Ws
                }
                var $s, Fs = Bs,
                    Hs = fs["__core-js_shared__"],
                    zs = ($s = /[^.]+$/.exec(Hs && Hs.keys && Hs.keys.IE_PROTO || "")) ? "Symbol(src)_1." + $s : "";

                function qs(t) {
                    return !!zs && zs in t
                }
                var Vs = qs,
                    Zs = Function.prototype.toString;

                function Gs(t) {
                    if (null != t) {
                        try {
                            return Zs.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                }
                var Xs = Gs,
                    Ks = Fs,
                    Qs = Vs,
                    Js = js,
                    Ys = Xs,
                    ta = /[\\^$.*+?()[\]{}|]/g,
                    ea = /^\[object .+?Constructor\]$/,
                    na = Function.prototype,
                    ra = Object.prototype,
                    oa = na.toString,
                    ia = ra.hasOwnProperty,
                    sa = RegExp("^" + oa.call(ia).replace(ta, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

                function aa(t) {
                    return !(!Js(t) || Qs(t)) && (Ks(t) ? sa : ea).test(Ys(t))
                }

                function ca(t, e) {
                    return null == t ? void 0 : t[e]
                }
                var la = aa,
                    ua = ca;

                function ha(t, e) {
                    var n = ua(t, e);
                    return la(n) ? n : void 0
                }
                var pa = ha,
                    fa = pa,
                    da = function() {
                        try {
                            var t = fa(Object, "defineProperty");
                            return t({}, "", {}), t
                        } catch (t) {}
                    }();

                function ga(t, e, n) {
                    "__proto__" == e && da ? da(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : t[e] = n
                }
                var ya = ga;

                function va(t) {
                    return function(e, n, r) {
                        for (var o = -1, i = Object(e), s = r(e), a = s.length; a--;) {
                            var c = s[t ? a : ++o];
                            if (!1 === n(i[c], c, i)) break
                        }
                        return e
                    }
                }
                var _a = va();

                function ma(t, e) {
                    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                    return r
                }
                var ba = ma;

                function Ta(t) {
                    return null != t && "object" == typeof t
                }
                var wa = Ta,
                    Ea = Ls,
                    Sa = wa,
                    Oa = "[object Arguments]";

                function Ca(t) {
                    return Sa(t) && Ea(t) == Oa
                }
                var ka = Ca,
                    Ia = wa,
                    Pa = Object.prototype,
                    Aa = Pa.hasOwnProperty,
                    La = Pa.propertyIsEnumerable,
                    Ra = ka(function() {
                        return arguments
                    }()) ? ka : function(t) {
                        return Ia(t) && Aa.call(t, "callee") && !La.call(t, "callee")
                    },
                    ja = Ra,
                    Na = Array.isArray,
                    xa = {
                        exports: {}
                    };

                function Ma() {
                    return !1
                }
                var Da = Ma;
                xa.exports,
                    function(t, e) {
                        var n = fs,
                            r = Da,
                            o = e && !e.nodeType && e,
                            i = o && t && !t.nodeType && t,
                            s = i && i.exports === o ? n.Buffer : void 0,
                            a = (s ? s.isBuffer : void 0) || r;
                        t.exports = a
                    }(xa, xa.exports);
                var Ua = xa.exports,
                    Wa = 9007199254740991,
                    Ba = /^(?:0|[1-9]\d*)$/;

                function $a(t, e) {
                    var n = typeof t;
                    return !!(e = null == e ? Wa : e) && ("number" == n || "symbol" != n && Ba.test(t)) && t > -1 && t % 1 == 0 && t < e
                }
                var Fa = $a,
                    Ha = 9007199254740991;

                function za(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= Ha
                }
                var qa = za,
                    Va = Ls,
                    Za = qa,
                    Ga = wa,
                    Xa = "[object Arguments]",
                    Ka = "[object Array]",
                    Qa = "[object Boolean]",
                    Ja = "[object Date]",
                    Ya = "[object Error]",
                    tc = "[object Function]",
                    ec = "[object Map]",
                    nc = "[object Number]",
                    rc = "[object Object]",
                    oc = "[object RegExp]",
                    ic = "[object Set]",
                    sc = "[object String]",
                    ac = "[object WeakMap]",
                    cc = "[object ArrayBuffer]",
                    lc = "[object DataView]",
                    uc = "[object Float64Array]",
                    hc = "[object Int8Array]",
                    pc = "[object Int16Array]",
                    fc = "[object Int32Array]",
                    dc = "[object Uint8Array]",
                    gc = "[object Uint8ClampedArray]",
                    yc = "[object Uint16Array]",
                    vc = "[object Uint32Array]",
                    _c = {};

                function mc(t) {
                    return Ga(t) && Za(t.length) && !!_c[Va(t)]
                }
                _c["[object Float32Array]"] = _c[uc] = _c[hc] = _c[pc] = _c[fc] = _c[dc] = _c[gc] = _c[yc] = _c[vc] = !0, _c[Xa] = _c[Ka] = _c[cc] = _c[Qa] = _c[lc] = _c[Ja] = _c[Ya] = _c[tc] = _c[ec] = _c[nc] = _c[rc] = _c[oc] = _c[ic] = _c[sc] = _c[ac] = !1;
                var bc = mc;

                function Tc(t) {
                    return function(e) {
                        return t(e)
                    }
                }
                var wc = Tc,
                    Ec = {
                        exports: {}
                    };
                Ec.exports,
                    function(t, e) {
                        var n = us,
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
                    }(Ec, Ec.exports);
                var Sc = Ec.exports,
                    Oc = bc,
                    Cc = wc,
                    kc = Sc,
                    Ic = kc && kc.isTypedArray,
                    Pc = Ic ? Cc(Ic) : Oc,
                    Ac = ba,
                    Lc = ja,
                    Rc = Na,
                    jc = Ua,
                    Nc = Fa,
                    xc = Pc,
                    Mc = Object.prototype.hasOwnProperty;

                function Dc(t, e) {
                    var n = Rc(t),
                        r = !n && Lc(t),
                        o = !n && !r && jc(t),
                        i = !n && !r && !o && xc(t),
                        s = n || r || o || i,
                        a = s ? Ac(t.length, String) : [],
                        c = a.length;
                    for (var l in t) !e && !Mc.call(t, l) || s && ("length" == l || o && ("offset" == l || "parent" == l) || i && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Nc(l, c)) || a.push(l);
                    return a
                }
                var Uc = Dc,
                    Wc = Object.prototype;

                function Bc(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || Wc)
                }
                var $c = Bc;

                function Fc(t, e) {
                    return function(n) {
                        return t(e(n))
                    }
                }
                var Hc = Fc,
                    zc = Hc(Object.keys, Object),
                    qc = $c,
                    Vc = zc,
                    Zc = Object.prototype.hasOwnProperty;

                function Gc(t) {
                    if (!qc(t)) return Vc(t);
                    var e = [];
                    for (var n in Object(t)) Zc.call(t, n) && "constructor" != n && e.push(n);
                    return e
                }
                var Xc = Fs,
                    Kc = qa;

                function Qc(t) {
                    return null != t && Kc(t.length) && !Xc(t)
                }
                var Jc = Qc,
                    Yc = Uc,
                    tl = Gc,
                    el = Jc;

                function nl(t) {
                    return el(t) ? Yc(t) : tl(t)
                }
                var rl = nl,
                    ol = _a,
                    il = rl;

                function sl(t, e) {
                    return t && ol(t, e, il)
                }
                var al = sl;

                function cl() {
                    this.__data__ = [], this.size = 0
                }
                var ll = cl;

                function ul(t, e) {
                    return t === e || t != t && e != e
                }
                var hl = ul,
                    pl = hl;

                function fl(t, e) {
                    for (var n = t.length; n--;)
                        if (pl(t[n][0], e)) return n;
                    return -1
                }
                var dl = fl,
                    gl = dl,
                    yl = Array.prototype.splice;

                function vl(t) {
                    var e = this.__data__,
                        n = gl(e, t);
                    return !(n < 0 || (n == e.length - 1 ? e.pop() : yl.call(e, n, 1), --this.size, 0))
                }
                var _l = dl;

                function ml(t) {
                    var e = this.__data__,
                        n = _l(e, t);
                    return n < 0 ? void 0 : e[n][1]
                }
                var bl = dl;

                function Tl(t) {
                    return bl(this.__data__, t) > -1
                }
                var wl = dl;

                function El(t, e) {
                    var n = this.__data__,
                        r = wl(n, t);
                    return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
                }
                var Sl = ll,
                    Ol = vl,
                    Cl = ml,
                    kl = Tl,
                    Il = El;

                function Pl(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }
                Pl.prototype.clear = Sl, Pl.prototype.delete = Ol, Pl.prototype.get = Cl, Pl.prototype.has = kl, Pl.prototype.set = Il;
                var Al = Pl,
                    Ll = Al;

                function Rl() {
                    this.__data__ = new Ll, this.size = 0
                }
                var jl = Rl;

                function Nl(t) {
                    var e = this.__data__,
                        n = e.delete(t);
                    return this.size = e.size, n
                }
                var xl = Nl;

                function Ml(t) {
                    return this.__data__.get(t)
                }
                var Dl = Ml;

                function Ul(t) {
                    return this.__data__.has(t)
                }
                var Wl = Ul,
                    Bl = pa(fs, "Map"),
                    $l = pa(Object, "create"),
                    Fl = $l;

                function Hl() {
                    this.__data__ = Fl ? Fl(null) : {}, this.size = 0
                }
                var zl = Hl;

                function ql(t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= e ? 1 : 0, e
                }
                var Vl = ql,
                    Zl = $l,
                    Gl = "__lodash_hash_undefined__",
                    Xl = Object.prototype.hasOwnProperty;

                function Kl(t) {
                    var e = this.__data__;
                    if (Zl) {
                        var n = e[t];
                        return n === Gl ? void 0 : n
                    }
                    return Xl.call(e, t) ? e[t] : void 0
                }
                var Ql = Kl,
                    Jl = $l,
                    Yl = Object.prototype.hasOwnProperty;

                function tu(t) {
                    var e = this.__data__;
                    return Jl ? void 0 !== e[t] : Yl.call(e, t)
                }
                var eu = $l,
                    nu = "__lodash_hash_undefined__";

                function ru(t, e) {
                    var n = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, n[t] = eu && void 0 === e ? nu : e, this
                }
                var ou = zl,
                    iu = Vl,
                    su = Ql,
                    au = tu,
                    cu = ru;

                function lu(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }
                lu.prototype.clear = ou, lu.prototype.delete = iu, lu.prototype.get = su, lu.prototype.has = au, lu.prototype.set = cu;
                var uu = lu,
                    hu = Al,
                    pu = Bl;

                function fu() {
                    this.size = 0, this.__data__ = {
                        hash: new uu,
                        map: new(pu || hu),
                        string: new uu
                    }
                }

                function du(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                }
                var gu = du;

                function yu(t, e) {
                    var n = t.__data__;
                    return gu(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
                }
                var vu = yu;

                function _u(t) {
                    var e = vu(this, t).delete(t);
                    return this.size -= e ? 1 : 0, e
                }
                var mu = yu;

                function bu(t) {
                    return mu(this, t).get(t)
                }
                var Tu = yu;

                function wu(t) {
                    return Tu(this, t).has(t)
                }
                var Eu = yu;

                function Su(t, e) {
                    var n = Eu(this, t),
                        r = n.size;
                    return n.set(t, e), this.size += n.size == r ? 0 : 1, this
                }
                var Ou = fu,
                    Cu = _u,
                    ku = bu,
                    Iu = wu,
                    Pu = Su;

                function Au(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }
                Au.prototype.clear = Ou, Au.prototype.delete = Cu, Au.prototype.get = ku, Au.prototype.has = Iu, Au.prototype.set = Pu;
                var Lu = Au,
                    Ru = Al,
                    ju = Bl,
                    Nu = Lu,
                    xu = 200;

                function Mu(t, e) {
                    var n = this.__data__;
                    if (n instanceof Ru) {
                        var r = n.__data__;
                        if (!ju || r.length < xu - 1) return r.push([t, e]), this.size = ++n.size, this;
                        n = this.__data__ = new Nu(r)
                    }
                    return n.set(t, e), this.size = n.size, this
                }
                var Du = Al,
                    Uu = jl,
                    Wu = xl,
                    Bu = Dl,
                    $u = Wl,
                    Fu = Mu;

                function Hu(t) {
                    var e = this.__data__ = new Du(t);
                    this.size = e.size
                }
                Hu.prototype.clear = Uu, Hu.prototype.delete = Wu, Hu.prototype.get = Bu, Hu.prototype.has = $u, Hu.prototype.set = Fu;
                var zu = Hu,
                    qu = "__lodash_hash_undefined__";

                function Vu(t) {
                    return this.__data__.set(t, qu), this
                }

                function Zu(t) {
                    return this.__data__.has(t)
                }
                var Gu = Lu,
                    Xu = Vu,
                    Ku = Zu;

                function Qu(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.__data__ = new Gu; ++e < n;) this.add(t[e])
                }

                function Ju(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                        if (e(t[n], n, t)) return !0;
                    return !1
                }

                function Yu(t, e) {
                    return t.has(e)
                }
                Qu.prototype.add = Qu.prototype.push = Xu, Qu.prototype.has = Ku;
                var th = Qu,
                    eh = Ju,
                    nh = Yu,
                    rh = 1,
                    oh = 2;

                function ih(t, e, n, r, o, i) {
                    var s = n & rh,
                        a = t.length,
                        c = e.length;
                    if (a != c && !(s && c > a)) return !1;
                    var l = i.get(t),
                        u = i.get(e);
                    if (l && u) return l == e && u == t;
                    var h = -1,
                        p = !0,
                        f = n & oh ? new th : void 0;
                    for (i.set(t, e), i.set(e, t); ++h < a;) {
                        var d = t[h],
                            g = e[h];
                        if (r) var y = s ? r(g, d, h, e, t, i) : r(d, g, h, t, e, i);
                        if (void 0 !== y) {
                            if (y) continue;
                            p = !1;
                            break
                        }
                        if (f) {
                            if (!eh(e, (function(t, e) {
                                    if (!nh(f, e) && (d === t || o(d, t, n, r, i))) return f.push(e)
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
                }
                var sh = ih,
                    ah = fs.Uint8Array;

                function ch(t) {
                    var e = -1,
                        n = Array(t.size);
                    return t.forEach((function(t, r) {
                        n[++e] = [r, t]
                    })), n
                }

                function lh(t) {
                    var e = -1,
                        n = Array(t.size);
                    return t.forEach((function(t) {
                        n[++e] = t
                    })), n
                }
                var uh = ds,
                    hh = ah,
                    ph = hl,
                    fh = sh,
                    dh = ch,
                    gh = lh,
                    yh = 1,
                    vh = 2,
                    _h = "[object Boolean]",
                    mh = "[object Date]",
                    bh = "[object Error]",
                    Th = "[object Map]",
                    wh = "[object Number]",
                    Eh = "[object RegExp]",
                    Sh = "[object Set]",
                    Oh = "[object String]",
                    Ch = "[object Symbol]",
                    kh = "[object ArrayBuffer]",
                    Ih = "[object DataView]",
                    Ph = uh ? uh.prototype : void 0,
                    Ah = Ph ? Ph.valueOf : void 0;

                function Lh(t, e, n, r, o, i, s) {
                    switch (n) {
                        case Ih:
                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                            t = t.buffer, e = e.buffer;
                        case kh:
                            return !(t.byteLength != e.byteLength || !i(new hh(t), new hh(e)));
                        case _h:
                        case mh:
                        case wh:
                            return ph(+t, +e);
                        case bh:
                            return t.name == e.name && t.message == e.message;
                        case Eh:
                        case Oh:
                            return t == e + "";
                        case Th:
                            var a = dh;
                        case Sh:
                            var c = r & yh;
                            if (a || (a = gh), t.size != e.size && !c) return !1;
                            var l = s.get(t);
                            if (l) return l == e;
                            r |= vh, s.set(t, e);
                            var u = fh(a(t), a(e), r, o, i, s);
                            return s.delete(t), u;
                        case Ch:
                            if (Ah) return Ah.call(t) == Ah.call(e)
                    }
                    return !1
                }
                var Rh = Lh;

                function jh(t, e) {
                    for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
                    return t
                }
                var Nh = jh,
                    xh = Nh,
                    Mh = Na;

                function Dh(t, e, n) {
                    var r = e(t);
                    return Mh(t) ? r : xh(r, n(t))
                }
                var Uh = Dh;

                function Wh(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
                        var s = t[n];
                        e(s, n, t) && (i[o++] = s)
                    }
                    return i
                }

                function Bh() {
                    return []
                }
                var $h = Bh,
                    Fh = Wh,
                    Hh = $h,
                    zh = Object.prototype.propertyIsEnumerable,
                    qh = Object.getOwnPropertySymbols,
                    Vh = qh ? function(t) {
                        return null == t ? [] : (t = Object(t), Fh(qh(t), (function(e) {
                            return zh.call(t, e)
                        })))
                    } : Hh,
                    Zh = Uh,
                    Gh = Vh,
                    Xh = rl;

                function Kh(t) {
                    return Zh(t, Xh, Gh)
                }
                var Qh = Kh,
                    Jh = 1,
                    Yh = Object.prototype.hasOwnProperty;

                function tp(t, e, n, r, o, i) {
                    var s = n & Jh,
                        a = Qh(t),
                        c = a.length;
                    if (c != Qh(e).length && !s) return !1;
                    for (var l = c; l--;) {
                        var u = a[l];
                        if (!(s ? u in e : Yh.call(e, u))) return !1
                    }
                    var h = i.get(t),
                        p = i.get(e);
                    if (h && p) return h == e && p == t;
                    var f = !0;
                    i.set(t, e), i.set(e, t);
                    for (var d = s; ++l < c;) {
                        var g = t[u = a[l]],
                            y = e[u];
                        if (r) var v = s ? r(y, g, u, e, t, i) : r(g, y, u, t, e, i);
                        if (!(void 0 === v ? g === y || o(g, y, n, r, i) : v)) {
                            f = !1;
                            break
                        }
                        d || (d = "constructor" == u)
                    }
                    if (f && !d) {
                        var _ = t.constructor,
                            m = e.constructor;
                        _ == m || !("constructor" in t) || !("constructor" in e) || "function" == typeof _ && _ instanceof _ && "function" == typeof m && m instanceof m || (f = !1)
                    }
                    return i.delete(t), i.delete(e), f
                }
                var ep = tp,
                    np = pa(fs, "DataView"),
                    rp = pa(fs, "Promise"),
                    op = pa(fs, "Set"),
                    ip = pa(fs, "WeakMap"),
                    sp = np,
                    ap = Bl,
                    cp = rp,
                    lp = op,
                    up = ip,
                    hp = Ls,
                    pp = Xs,
                    fp = "[object Map]",
                    dp = "[object Object]",
                    gp = "[object Promise]",
                    yp = "[object Set]",
                    vp = "[object WeakMap]",
                    _p = "[object DataView]",
                    mp = pp(sp),
                    bp = pp(ap),
                    Tp = pp(cp),
                    wp = pp(lp),
                    Ep = pp(up),
                    Sp = hp;
                (sp && Sp(new sp(new ArrayBuffer(1))) != _p || ap && Sp(new ap) != fp || cp && Sp(cp.resolve()) != gp || lp && Sp(new lp) != yp || up && Sp(new up) != vp) && (Sp = function(t) {
                    var e = hp(t),
                        n = e == dp ? t.constructor : void 0,
                        r = n ? pp(n) : "";
                    if (r) switch (r) {
                        case mp:
                            return _p;
                        case bp:
                            return fp;
                        case Tp:
                            return gp;
                        case wp:
                            return yp;
                        case Ep:
                            return vp
                    }
                    return e
                });
                var Op = zu,
                    Cp = sh,
                    kp = Rh,
                    Ip = ep,
                    Pp = Sp,
                    Ap = Na,
                    Lp = Ua,
                    Rp = Pc,
                    jp = 1,
                    Np = "[object Arguments]",
                    xp = "[object Array]",
                    Mp = "[object Object]",
                    Dp = Object.prototype.hasOwnProperty;

                function Up(t, e, n, r, o, i) {
                    var s = Ap(t),
                        a = Ap(e),
                        c = s ? xp : Pp(t),
                        l = a ? xp : Pp(e),
                        u = (c = c == Np ? Mp : c) == Mp,
                        h = (l = l == Np ? Mp : l) == Mp,
                        p = c == l;
                    if (p && Lp(t)) {
                        if (!Lp(e)) return !1;
                        s = !0, u = !1
                    }
                    if (p && !u) return i || (i = new Op), s || Rp(t) ? Cp(t, e, n, r, o, i) : kp(t, e, c, n, r, o, i);
                    if (!(n & jp)) {
                        var f = u && Dp.call(t, "__wrapped__"),
                            d = h && Dp.call(e, "__wrapped__");
                        if (f || d) {
                            var g = f ? t.value() : t,
                                y = d ? e.value() : e;
                            return i || (i = new Op), o(g, y, n, r, i)
                        }
                    }
                    return !!p && (i || (i = new Op), Ip(t, e, n, r, o, i))
                }
                var Wp = Up,
                    Bp = wa;

                function $p(t, e, n, r, o) {
                    return t === e || (null == t || null == e || !Bp(t) && !Bp(e) ? t != t && e != e : Wp(t, e, n, r, $p, o))
                }
                var Fp = $p,
                    Hp = zu,
                    zp = Fp,
                    qp = 1,
                    Vp = 2;

                function Zp(t, e, n, r) {
                    var o = n.length,
                        i = o,
                        s = !r;
                    if (null == t) return !i;
                    for (t = Object(t); o--;) {
                        var a = n[o];
                        if (s && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
                    }
                    for (; ++o < i;) {
                        var c = (a = n[o])[0],
                            l = t[c],
                            u = a[1];
                        if (s && a[2]) {
                            if (void 0 === l && !(c in t)) return !1
                        } else {
                            var h = new Hp;
                            if (r) var p = r(l, u, c, t, e, h);
                            if (!(void 0 === p ? zp(u, l, qp | Vp, r, h) : p)) return !1
                        }
                    }
                    return !0
                }
                var Gp = js;

                function Xp(t) {
                    return t == t && !Gp(t)
                }
                var Kp = Xp,
                    Qp = Kp,
                    Jp = rl;

                function Yp(t) {
                    for (var e = Jp(t), n = e.length; n--;) {
                        var r = e[n],
                            o = t[r];
                        e[n] = [r, o, Qp(o)]
                    }
                    return e
                }

                function tf(t, e) {
                    return function(n) {
                        return null != n && n[t] === e && (void 0 !== e || t in Object(n))
                    }
                }
                var ef = tf,
                    nf = Zp,
                    rf = Yp,
                    of = ef;

                function sf(t) {
                    var e = rf(t);
                    return 1 == e.length && e[0][2] ? of (e[0][0], e[0][1]) : function(n) {
                        return n === t || nf(n, t, e)
                    }
                }
                var af = sf,
                    cf = Ls,
                    lf = wa,
                    uf = "[object Symbol]";

                function hf(t) {
                    return "symbol" == typeof t || lf(t) && cf(t) == uf
                }
                var pf = hf,
                    ff = Na,
                    df = pf,
                    gf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    yf = /^\w*$/;

                function vf(t, e) {
                    if (ff(t)) return !1;
                    var n = typeof t;
                    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !df(t)) || yf.test(t) || !gf.test(t) || null != e && t in Object(e)
                }
                var _f = vf,
                    mf = Lu,
                    bf = "Expected a function";

                function Tf(t, e) {
                    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(bf);
                    var n = function() {
                        var r = arguments,
                            o = e ? e.apply(this, r) : r[0],
                            i = n.cache;
                        if (i.has(o)) return i.get(o);
                        var s = t.apply(this, r);
                        return n.cache = i.set(o, s) || i, s
                    };
                    return n.cache = new(Tf.Cache || mf), n
                }
                Tf.Cache = mf;
                var wf = Tf,
                    Ef = 500;

                function Sf(t) {
                    var e = wf(t, (function(t) {
                            return n.size === Ef && n.clear(), t
                        })),
                        n = e.cache;
                    return e
                }
                var Of = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    Cf = /\\(\\)?/g,
                    kf = Sf((function(t) {
                        var e = [];
                        return 46 === t.charCodeAt(0) && e.push(""), t.replace(Of, (function(t, n, r, o) {
                            e.push(r ? o.replace(Cf, "$1") : n || t)
                        })), e
                    }));

                function If(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
                    return o
                }
                var Pf = If,
                    Af = ds,
                    Lf = Pf,
                    Rf = Na,
                    jf = pf,
                    Nf = 1 / 0,
                    xf = Af ? Af.prototype : void 0,
                    Mf = xf ? xf.toString : void 0;

                function Df(t) {
                    if ("string" == typeof t) return t;
                    if (Rf(t)) return Lf(t, Df) + "";
                    if (jf(t)) return Mf ? Mf.call(t) : "";
                    var e = t + "";
                    return "0" == e && 1 / t == -Nf ? "-0" : e
                }
                var Uf = Df;

                function Wf(t) {
                    return null == t ? "" : Uf(t)
                }
                var Bf = Na,
                    $f = _f,
                    Ff = kf,
                    Hf = Wf;

                function zf(t, e) {
                    return Bf(t) ? t : $f(t, e) ? [t] : Ff(Hf(t))
                }
                var qf = zf,
                    Vf = pf,
                    Zf = 1 / 0;

                function Gf(t) {
                    if ("string" == typeof t || Vf(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -Zf ? "-0" : e
                }
                var Xf = Gf,
                    Kf = qf,
                    Qf = Xf;

                function Jf(t, e) {
                    for (var n = 0, r = (e = Kf(e, t)).length; null != t && n < r;) t = t[Qf(e[n++])];
                    return n && n == r ? t : void 0
                }
                var Yf = Jf,
                    td = Yf;

                function ed(t, e, n) {
                    var r = null == t ? void 0 : td(t, e);
                    return void 0 === r ? n : r
                }

                function nd(t, e) {
                    return null != t && e in Object(t)
                }
                var rd = qf,
                    od = ja,
                    id = Na,
                    sd = Fa,
                    ad = qa,
                    cd = Xf;

                function ld(t, e, n) {
                    for (var r = -1, o = (e = rd(e, t)).length, i = !1; ++r < o;) {
                        var s = cd(e[r]);
                        if (!(i = null != t && n(t, s))) break;
                        t = t[s]
                    }
                    return i || ++r != o ? i : !!(o = null == t ? 0 : t.length) && ad(o) && sd(s, o) && (id(t) || od(t))
                }
                var ud = nd,
                    hd = ld;

                function pd(t, e) {
                    return null != t && hd(t, e, ud)
                }
                var fd = Fp,
                    dd = ed,
                    gd = pd,
                    yd = _f,
                    vd = Kp,
                    _d = ef,
                    md = Xf,
                    bd = 1,
                    Td = 2;

                function wd(t, e) {
                    return yd(t) && vd(e) ? _d(md(t), e) : function(n) {
                        var r = dd(n, t);
                        return void 0 === r && r === e ? gd(n, t) : fd(e, r, bd | Td)
                    }
                }

                function Ed(t) {
                    return t
                }

                function Sd(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                }
                var Od = Yf;

                function Cd(t) {
                    return function(e) {
                        return Od(e, t)
                    }
                }
                var kd = Sd,
                    Id = Cd,
                    Pd = _f,
                    Ad = Xf;

                function Ld(t) {
                    return Pd(t) ? kd(Ad(t)) : Id(t)
                }
                var Rd = af,
                    jd = wd,
                    Nd = Ed,
                    xd = Na,
                    Md = Ld;

                function Dd(t) {
                    return "function" == typeof t ? t : null == t ? Nd : "object" == typeof t ? xd(t) ? jd(t[0], t[1]) : Rd(t) : Md(t)
                }
                var Ud = Dd,
                    Wd = ya,
                    Bd = al,
                    $d = Ud;

                function Fd(t, e) {
                    var n = {};
                    return e = $d(e), Bd(t, (function(t, r, o) {
                        Wd(n, r, e(t, r, o))
                    })), n
                }
                var Hd = Mr(Fd),
                    zd = ya,
                    qd = hl,
                    Vd = Object.prototype.hasOwnProperty;

                function Zd(t, e, n) {
                    var r = t[e];
                    Vd.call(t, e) && qd(r, n) && (void 0 !== n || e in t) || zd(t, e, n)
                }
                var Gd = Zd,
                    Xd = qf,
                    Kd = Fa,
                    Qd = js,
                    Jd = Xf;

                function Yd(t, e, n, r) {
                    if (!Qd(t)) return t;
                    for (var o = -1, i = (e = Xd(e, t)).length, s = i - 1, a = t; null != a && ++o < i;) {
                        var c = Jd(e[o]),
                            l = n;
                        if ("__proto__" === c || "constructor" === c || "prototype" === c) return t;
                        if (o != s) {
                            var u = a[c];
                            void 0 === (l = r ? r(u, c, a) : void 0) && (l = Qd(u) ? u : Kd(e[o + 1]) ? [] : {})
                        }
                        Gd(a, c, l), a = a[c]
                    }
                    return t
                }
                var tg = Yf,
                    eg = Yd,
                    ng = qf;

                function rg(t, e, n) {
                    for (var r = -1, o = e.length, i = {}; ++r < o;) {
                        var s = e[r],
                            a = tg(t, s);
                        n(a, s) && eg(i, ng(s, t), a)
                    }
                    return i
                }
                var og = rg,
                    ig = Hc(Object.getPrototypeOf, Object),
                    sg = Nh,
                    ag = ig,
                    cg = Vh,
                    lg = $h,
                    ug = Object.getOwnPropertySymbols ? function(t) {
                        for (var e = []; t;) sg(e, cg(t)), t = ag(t);
                        return e
                    } : lg;

                function hg(t) {
                    var e = [];
                    if (null != t)
                        for (var n in Object(t)) e.push(n);
                    return e
                }
                var pg = js,
                    fg = $c,
                    dg = hg,
                    gg = Object.prototype.hasOwnProperty;

                function yg(t) {
                    if (!pg(t)) return dg(t);
                    var e = fg(t),
                        n = [];
                    for (var r in t)("constructor" != r || !e && gg.call(t, r)) && n.push(r);
                    return n
                }
                var vg = Uc,
                    _g = yg,
                    mg = Jc;

                function bg(t) {
                    return mg(t) ? vg(t, !0) : _g(t)
                }
                var Tg = Uh,
                    wg = ug,
                    Eg = bg;

                function Sg(t) {
                    return Tg(t, Eg, wg)
                }
                var Og = Pf,
                    Cg = Ud,
                    kg = og,
                    Ig = Sg;

                function Pg(t, e) {
                    if (null == t) return {};
                    var n = Og(Ig(t), (function(t) {
                        return [t]
                    }));
                    return e = Cg(e), kg(t, n, (function(t, n) {
                        return e(t, n[0])
                    }))
                }
                var Ag = Mr(Pg);
                const Lg = "OS-CLRT-00000",
                    Rg = t => {
                        const e = Hd(t, (t => t()));
                        return Ag(e, (t => null != t))
                    },
                    jg = {
                        [ls.Internal]: 1,
                        [ls.External]: 2,
                        [ls.Client]: 3
                    },
                    Ng = t => {
                        var e, n, r;
                        const o = {};
                        return t.type === lo.Error && t.error && (o["exception.type"] = t.error.name, o["exception.message"] = Ug(t.error.message), o["exception.stacktrace"] = null !== (e = t.error.stack) && void 0 !== e ? e : "", o["outsystems.error.code"] = null !== (r = null === (n = t.errorCode) || void 0 === n ? void 0 : n.toString()) && void 0 !== r ? r : Lg.toString()), o
                    },
                    xg = t => {
                        const e = {},
                            n = t.span;
                        return n && (e.traceId = n.traceId, e.spanId = n.spanId), e
                    },
                    Mg = t => {
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
                    Dg = t => (t["http.url"] && (t["http.url"] = Ug(t["http.url"])), t),
                    Ug = t => t.replace(/((outsystems|https|http):\/\/[^ ]*?)\?[^ ]*/g, "$1");
                var Wg, Bg, $g;
                class Fg {
                    constructor(t) {
                        let {
                            baseAttributes: e = {},
                            transportManager: n,
                            getTimestamp: r
                        } = t;
                        Wg.set(this, void 0), Bg.set(this, void 0), $g.set(this, void 0), i(this, Wg, n), i(this, Bg, r), i(this, $g, e)
                    }
                    static build(t) {
                        return r(this, arguments, void 0, (function(t) {
                            let {
                                transports: e = [],
                                baseAttributes: n,
                                databaseNameSuffix: r,
                                transportManager: o = new as({
                                    databaseNameSuffix: r,
                                    logTransports: e
                                }),
                                getTimestamp: i = () => new Nr
                            } = t;
                            return function*() {
                                return new Fg({
                                    baseAttributes: n,
                                    transportManager: o,
                                    getTimestamp: i
                                })
                            }()
                        }))
                    }
                    addTransport(t) {
                        o(this, Wg, "f").addLogTransport(t)
                    }
                    removeTransport(t) {
                        o(this, Wg, "f").removeLogTransport(t)
                    }
                    setLogTypeBaseline() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lo.Error;
                        o(this, Wg, "f").setAllLogTypeBaselines(t)
                    }
                    flush() {
                        return r(this, void 0, void 0, (function*() {
                            o(this, Wg, "f").flushLogs()
                        }))
                    }
                    setSchedulerTimerInterval(t) {
                        o(this, Wg, "f").setSchedulerTimerInterval(t)
                    }
                    error(t) {
                        let {
                            category: e,
                            message: n,
                            error: r,
                            errorCode: i,
                            visibility: s = ls.Internal,
                            span: a,
                            attributes: c
                        } = t;
                        const l = new Kr({
                            type: lo.Error,
                            category: e,
                            message: n,
                            error: r,
                            visibility: s,
                            timestamp: o(this, Bg, "f").call(this),
                            errorCode: i,
                            span: a,
                            attributes: Object.assign(Object.assign({}, Rg(o(this, $g, "f"))), c)
                        });
                        o(this, Wg, "f").processLog(l)
                    }
                    warning(t) {
                        let {
                            category: e,
                            message: n,
                            visibility: r = ls.Internal,
                            span: i,
                            attributes: s
                        } = t;
                        const a = new Kr({
                            type: lo.Warning,
                            category: e,
                            message: n,
                            visibility: r,
                            timestamp: o(this, Bg, "f").call(this),
                            span: i,
                            attributes: Object.assign(Object.assign({}, Rg(o(this, $g, "f"))), s)
                        });
                        o(this, Wg, "f").processLog(a)
                    }
                    info(t) {
                        let {
                            category: e,
                            message: n,
                            visibility: r = ls.External,
                            span: i,
                            attributes: s
                        } = t;
                        const a = new Kr({
                            type: lo.Info,
                            category: e,
                            message: n,
                            visibility: r,
                            timestamp: o(this, Bg, "f").call(this),
                            span: i,
                            attributes: Object.assign(Object.assign({}, Rg(o(this, $g, "f"))), s)
                        });
                        o(this, Wg, "f").processLog(a)
                    }
                    debug(t) {
                        let {
                            category: e,
                            message: n,
                            visibility: r = ls.Internal,
                            span: i,
                            attributes: s
                        } = t;
                        const a = new Kr({
                            type: lo.Debug,
                            category: e,
                            message: n,
                            visibility: r,
                            timestamp: o(this, Bg, "f").call(this),
                            span: i,
                            attributes: Object.assign(Object.assign({}, Rg(o(this, $g, "f"))), s)
                        });
                        o(this, Wg, "f").processLog(a)
                    }
                    log(t) {
                        return r(this, void 0, void 0, (function*() {
                            yield o(this, Wg, "f").processLog(t)
                        }))
                    }
                }

                function Hg(t) {
                    return void 0 === t && (t = {}), "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                }
                t.Logger = Fg, Wg = new WeakMap, Bg = new WeakMap, $g = new WeakMap;
                var zg = "OT_ZONE_CONTEXT",
                    qg = function() {
                        function t() {
                            this._enabled = !1, this._zoneCounter = 0
                        }
                        return t.prototype._activeContextFromZone = function(t) {
                            return t && t.get(zg) || U
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
                                properties: (n = {}, n[zg] = e, n)
                            })
                        }, t.prototype._getActiveZone = function() {
                            return Zone.current
                        }, t.prototype._patchAddEventListener = function(t, e, n) {
                            var r = this;
                            return function(o, i, s) {
                                void 0 === t.__ot_listeners && (t.__ot_listeners = {});
                                var a = t.__ot_listeners[o];
                                void 0 === a && (a = new WeakMap, t.__ot_listeners[o] = a);
                                var c = r.bind(n, i);
                                return a.set(i, c), e.call(this, o, c, s)
                            }
                        }, t.prototype._patchRemoveEventListener = function(t, e) {
                            return function(n, r) {
                                if (void 0 === t.__ot_listeners || void 0 === t.__ot_listeners[n]) return e.call(this, n, r);
                                var o = t.__ot_listeners[n],
                                    i = o.get(r);
                                return o.delete(r), e.call(this, n, i || r)
                            }
                        }, t.prototype.active = function() {
                            if (!this._enabled) return U;
                            var t = this._getActiveZone(),
                                e = this._activeContextFromZone(t);
                            return e || U
                        }, t.prototype.bind = function(t, e) {
                            return void 0 === t && (t = this.active()), "function" == typeof e ? this._bindFunction(t, e) : (Hg(e) && this._bindListener(t, e), e)
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
                const Vg = globalThis;

                function Zg(t) {
                    return (Vg.__Zone_symbol_prefix || "__zone_symbol__") + t
                }

                function Gg() {
                    const t = Vg.performance;

                    function e(e) {
                        t && t.mark && t.mark(e)
                    }

                    function n(e, n) {
                        t && t.measure && t.measure(e, n)
                    }
                    e("Zone");
                    class r {
                        static assertZonePatched() {
                            if (Vg.Promise !== C.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
                        }
                        static get root() {
                            let t = r.current;
                            for (; t.parent;) t = t.parent;
                            return t
                        }
                        static get current() {
                            return I.zone
                        }
                        static get currentTask() {
                            return P
                        }
                        static __load_patch(t, o) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (C.hasOwnProperty(t)) {
                                const e = !0 === Vg[Zg("forceDuplicateZoneCheck")];
                                if (!i && e) throw Error("Already loaded patch: " + t)
                            } else if (!Vg["__Zone_disable_" + t]) {
                                const i = "Zone:" + t;
                                e(i), C[t] = o(Vg, r, k), n(i, i)
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
                            I = {
                                parent: I,
                                zone: this
                            };
                            try {
                                return this._zoneDelegate.invoke(this, t, e, n, r)
                            } finally {
                                I = I.parent
                            }
                        }
                        runGuarded(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = arguments.length > 2 ? arguments[2] : void 0,
                                r = arguments.length > 3 ? arguments[3] : void 0;
                            I = {
                                parent: I,
                                zone: this
                            };
                            try {
                                try {
                                    return this._zoneDelegate.invoke(this, t, e, n, r)
                                } catch (t) {
                                    if (this._zoneDelegate.handleError(this, t)) throw t
                                }
                            } finally {
                                I = I.parent
                            }
                        }
                        runTask(t, e, n) {
                            if (t.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (t.zone || y).name + "; Execution: " + this.name + ")");
                            const r = t,
                                {
                                    type: o,
                                    data: {
                                        isPeriodic: i = !1,
                                        isRefreshable: s = !1
                                    } = {}
                                } = t;
                            if (t.state === v && (o === O || o === S)) return;
                            const a = t.state != b;
                            a && r._transitionTo(b, m);
                            const c = P;
                            P = r, I = {
                                parent: I,
                                zone: this
                            };
                            try {
                                o != S || !t.data || i || s || (t.cancelFn = void 0);
                                try {
                                    return this._zoneDelegate.invokeTask(this, r, e, n)
                                } catch (t) {
                                    if (this._zoneDelegate.handleError(this, t)) throw t
                                }
                            } finally {
                                const e = t.state;
                                if (e !== v && e !== w)
                                    if (o == O || i || s && e === _) a && r._transitionTo(m, b, _);
                                    else {
                                        const t = r._zoneDelegates;
                                        this._updateTaskCount(r, -1), a && r._transitionTo(v, b, v), s && (r._zoneDelegates = t)
                                    } I = I.parent, P = c
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
                            t._transitionTo(_, v);
                            const e = [];
                            t._zoneDelegates = e, t._zone = this;
                            try {
                                t = this._zoneDelegate.scheduleTask(this, t)
                            } catch (e) {
                                throw t._transitionTo(w, _, v), this._zoneDelegate.handleError(this, e), e
                            }
                            return t._zoneDelegates === e && this._updateTaskCount(t, 1), t.state == _ && t._transitionTo(m, _), t
                        }
                        scheduleMicroTask(t, e, n, r) {
                            return this.scheduleTask(new s(E, t, e, n, r, void 0))
                        }
                        scheduleMacroTask(t, e, n, r, o) {
                            return this.scheduleTask(new s(S, t, e, n, r, o))
                        }
                        scheduleEventTask(t, e, n, r, o) {
                            return this.scheduleTask(new s(O, t, e, n, r, o))
                        }
                        cancelTask(t) {
                            if (t.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (t.zone || y).name + "; Execution: " + this.name + ")");
                            if (t.state === m || t.state === b) {
                                t._transitionTo(T, m, b);
                                try {
                                    this._zoneDelegate.cancelTask(this, t)
                                } catch (e) {
                                    throw t._transitionTo(w, T), this._zoneDelegate.handleError(this, e), e
                                }
                                return this._updateTaskCount(t, -1), t._transitionTo(v, T), t.runCount = -1, t
                            }
                        }
                        _updateTaskCount(t, e) {
                            const n = t._zoneDelegates; - 1 == e && (t._zoneDelegates = null);
                            for (let r = 0; r < n.length; r++) n[r]._updateTaskCount(t.type, e)
                        }
                    }
                    r.__symbol__ = Zg;
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
                                if (e.type != E) throw new Error("Task is missing scheduleFn.");
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
                            t === O && r && r.useG ? this.invoke = s.invokeTask : this.invoke = function() {
                                return s.invokeTask.call(Vg, a, this, arguments)
                            }
                        }
                        static invokeTask(t, e, n) {
                            t || (t = this), A++;
                            try {
                                return t.runCount++, t.zone.runTask(t, e, n)
                            } finally {
                                1 == A && g(), A--
                            }
                        }
                        get zone() {
                            return this._zone
                        }
                        get state() {
                            return this._state
                        }
                        cancelScheduleRequest() {
                            this._transitionTo(v, _)
                        }
                        _transitionTo(t, e, n) {
                            if (this._state !== e && this._state !== n) throw new Error(`${this.type} '${this.source}': can not transition to '${t}', expecting state '${e}'${n?" or '"+n+"'":""}, was '${this._state}'.`);
                            this._state = t, t == v && (this._zoneDelegates = null)
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
                    const a = Zg("setTimeout"),
                        c = Zg("Promise"),
                        l = Zg("then");
                    let u, h = [],
                        p = !1;

                    function f(t) {
                        if (u || Vg[c] && (u = Vg[c].resolve(0)), u) {
                            let e = u[l];
                            e || (e = u.then), e.call(u, t)
                        } else Vg[a](t, 0)
                    }

                    function d(t) {
                        0 === A && 0 === h.length && f(g), t && h.push(t)
                    }

                    function g() {
                        if (!p) {
                            for (p = !0; h.length;) {
                                const t = h;
                                h = [];
                                for (let e = 0; e < t.length; e++) {
                                    const n = t[e];
                                    try {
                                        n.zone.runTask(n, null, null)
                                    } catch (t) {
                                        k.onUnhandledError(t)
                                    }
                                }
                            }
                            k.microtaskDrainDone(), p = !1
                        }
                    }
                    const y = {
                            name: "NO ZONE"
                        },
                        v = "notScheduled",
                        _ = "scheduling",
                        m = "scheduled",
                        b = "running",
                        T = "canceling",
                        w = "unknown",
                        E = "microTask",
                        S = "macroTask",
                        O = "eventTask",
                        C = {},
                        k = {
                            symbol: Zg,
                            currentZoneFrame: () => I,
                            onUnhandledError: L,
                            microtaskDrainDone: L,
                            scheduleMicroTask: d,
                            showUncaughtError: () => !r[Zg("ignoreConsoleErrorUncaughtError")],
                            patchEventTarget: () => [],
                            patchOnProperties: L,
                            patchMethod: () => L,
                            bindArguments: () => [],
                            patchThen: () => L,
                            patchMacroTask: () => L,
                            patchEventPrototype: () => L,
                            isIEOrEdge: () => !1,
                            getGlobalObjects: () => {},
                            ObjectDefineProperty: () => L,
                            ObjectGetOwnPropertyDescriptor: () => {},
                            ObjectCreate: () => {},
                            ArraySlice: () => [],
                            patchClass: () => L,
                            wrapWithCurrentZone: () => L,
                            filterProperties: () => [],
                            attachOriginToPatched: () => L,
                            _redefineProperty: () => L,
                            patchCallbacks: () => L,
                            nativeScheduleMicroTask: f
                        };
                    let I = {
                            parent: null,
                            zone: new r(null, null)
                        },
                        P = null,
                        A = 0;

                    function L() {}
                    return n("Zone", "Zone"), r
                }

                function Xg() {
                    var t, e;
                    const n = globalThis,
                        r = !0 === n[Zg("forceDuplicateZoneCheck")];
                    if (n.Zone && (r || "function" != typeof n.Zone.__symbol__)) throw new Error("Zone already loaded.");
                    return null !== (e = n[t = "Zone"]) && void 0 !== e || (n[t] = Gg()), n.Zone
                }
                const Kg = Object.getOwnPropertyDescriptor,
                    Qg = Object.defineProperty,
                    Jg = Object.getPrototypeOf,
                    Yg = Object.create,
                    ty = Array.prototype.slice,
                    ey = "addEventListener",
                    ny = "removeEventListener",
                    ry = Zg(ey),
                    oy = Zg(ny),
                    iy = "true",
                    sy = "false",
                    ay = Zg("");

                function cy(t, e) {
                    return Zone.current.wrap(t, e)
                }

                function ly(t, e, n, r, o) {
                    return Zone.current.scheduleMacroTask(t, e, n, r, o)
                }
                const uy = Zg,
                    hy = "undefined" != typeof window,
                    py = hy ? window : void 0,
                    fy = hy && py || globalThis,
                    dy = "removeAttribute";

                function gy(t, e) {
                    for (let n = t.length - 1; n >= 0; n--) "function" == typeof t[n] && (t[n] = cy(t[n], e + "_" + n));
                    return t
                }

                function yy(t, e) {
                    const n = t.constructor.name;
                    for (let r = 0; r < e.length; r++) {
                        const o = e[r],
                            i = t[o];
                        if (i) {
                            if (!vy(Kg(t, o))) continue;
                            t[o] = (t => {
                                const e = function() {
                                    return t.apply(this, gy(arguments, n + "." + o))
                                };
                                return Ly(e, t), e
                            })(i)
                        }
                    }
                }

                function vy(t) {
                    return !t || !1 !== t.writable && !("function" == typeof t.get && void 0 === t.set)
                }
                const _y = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
                    my = !("nw" in fy) && void 0 !== fy.process && "[object process]" === fy.process.toString(),
                    by = !my && !_y && !(!hy || !py.HTMLElement),
                    Ty = void 0 !== fy.process && "[object process]" === fy.process.toString() && !_y && !(!hy || !py.HTMLElement),
                    wy = {},
                    Ey = uy("enable_beforeunload"),
                    Sy = function(t) {
                        if (!(t = t || fy.event)) return;
                        let e = wy[t.type];
                        e || (e = wy[t.type] = uy("ON_PROPERTY" + t.type));
                        const n = this || t.target || fy,
                            r = n[e];
                        let o;
                        if (by && n === py && "error" === t.type) {
                            const e = t;
                            o = r && r.call(this, e.message, e.filename, e.lineno, e.colno, e.error), !0 === o && t.preventDefault()
                        } else o = r && r.apply(this, arguments), "beforeunload" === t.type && fy[Ey] && "string" == typeof o ? t.returnValue = o : null == o || o || t.preventDefault();
                        return o
                    };

                function Oy(t, e, n) {
                    let r = Kg(t, e);
                    if (!r && n && Kg(n, e) && (r = {
                            enumerable: !0,
                            configurable: !0
                        }), !r || !r.configurable) return;
                    const o = uy("on" + e + "patched");
                    if (t.hasOwnProperty(o) && t[o]) return;
                    delete r.writable, delete r.value;
                    const i = r.get,
                        s = r.set,
                        a = e.slice(2);
                    let c = wy[a];
                    c || (c = wy[a] = uy("ON_PROPERTY" + a)), r.set = function(e) {
                        let n = this;
                        n || t !== fy || (n = fy), n && ("function" == typeof n[c] && n.removeEventListener(a, Sy), s && s.call(n, null), n[c] = e, "function" == typeof e && n.addEventListener(a, Sy, !1))
                    }, r.get = function() {
                        let n = this;
                        if (n || t !== fy || (n = fy), !n) return null;
                        const o = n[c];
                        if (o) return o;
                        if (i) {
                            let t = i.call(this);
                            if (t) return r.set.call(this, t), "function" == typeof n[dy] && n.removeAttribute(e), t
                        }
                        return null
                    }, Qg(t, e, r), t[o] = !0
                }

                function Cy(t, e, n) {
                    if (e)
                        for (let r = 0; r < e.length; r++) Oy(t, "on" + e[r], n);
                    else {
                        const e = [];
                        for (const n in t) "on" == n.slice(0, 2) && e.push(n);
                        for (let r = 0; r < e.length; r++) Oy(t, e[r], n)
                    }
                }
                const ky = uy("originalInstance");

                function Iy(t) {
                    const e = fy[t];
                    if (!e) return;
                    fy[uy(t)] = e, fy[t] = function() {
                        const n = gy(arguments, t);
                        switch (n.length) {
                            case 0:
                                this[ky] = new e;
                                break;
                            case 1:
                                this[ky] = new e(n[0]);
                                break;
                            case 2:
                                this[ky] = new e(n[0], n[1]);
                                break;
                            case 3:
                                this[ky] = new e(n[0], n[1], n[2]);
                                break;
                            case 4:
                                this[ky] = new e(n[0], n[1], n[2], n[3]);
                                break;
                            default:
                                throw new Error("Arg list too long.")
                        }
                    }, Ly(fy[t], e);
                    const n = new e((function() {}));
                    let r;
                    for (r in n) "XMLHttpRequest" === t && "responseBlob" === r || function(e) {
                        "function" == typeof n[e] ? fy[t].prototype[e] = function() {
                            return this[ky][e].apply(this[ky], arguments)
                        } : Qg(fy[t].prototype, e, {
                            set: function(n) {
                                "function" == typeof n ? (this[ky][e] = cy(n, t + "." + e), Ly(this[ky][e], n)) : this[ky][e] = n
                            },
                            get: function() {
                                return this[ky][e]
                            }
                        })
                    }(r);
                    for (r in e) "prototype" !== r && e.hasOwnProperty(r) && (fy[t][r] = e[r])
                }

                function Py(t, e, n) {
                    let r = t;
                    for (; r && !r.hasOwnProperty(e);) r = Jg(r);
                    !r && t[e] && (r = t);
                    const o = uy(e);
                    let i = null;
                    if (r && (!(i = r[o]) || !r.hasOwnProperty(o)) && (i = r[o] = r[e], vy(r && Kg(r, e)))) {
                        const t = n(i, o, e);
                        r[e] = function() {
                            return t(this, arguments)
                        }, Ly(r[e], i)
                    }
                    return i
                }

                function Ay(t, e, n) {
                    let r = null;

                    function o(t) {
                        const e = t.data;
                        return e.args[e.cbIdx] = function() {
                            t.invoke.apply(this, arguments)
                        }, r.apply(e.target, e.args), t
                    }
                    r = Py(t, e, (t => function(e, r) {
                        const i = n(e, r);
                        return i.cbIdx >= 0 && "function" == typeof r[i.cbIdx] ? ly(i.name, r[i.cbIdx], i, o) : t.apply(e, r)
                    }))
                }

                function Ly(t, e) {
                    t[uy("OriginalDelegate")] = e
                }
                let Ry = !1,
                    jy = !1;

                function Ny() {
                    try {
                        const t = py.navigator.userAgent;
                        if (-1 !== t.indexOf("MSIE ") || -1 !== t.indexOf("Trident/")) return !0
                    } catch (t) {}
                    return !1
                }

                function xy() {
                    if (Ry) return jy;
                    Ry = !0;
                    try {
                        const t = py.navigator.userAgent; - 1 === t.indexOf("MSIE ") && -1 === t.indexOf("Trident/") && -1 === t.indexOf("Edge/") || (jy = !0)
                    } catch (t) {}
                    return jy
                }

                function My(t) {
                    return "function" == typeof t
                }

                function Dy(t) {
                    return "number" == typeof t
                }
                let Uy = !1;
                if ("undefined" != typeof window) try {
                    const t = Object.defineProperty({}, "passive", {
                        get: function() {
                            Uy = !0
                        }
                    });
                    window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
                } catch (t) {
                    Uy = !1
                }
                const Wy = {
                        useG: !0
                    },
                    By = {},
                    $y = {},
                    Fy = new RegExp("^" + ay + "(\\w+)(true|false)$"),
                    Hy = uy("propagationStopped");

                function zy(t, e) {
                    const n = (e ? e(t) : t) + sy,
                        r = (e ? e(t) : t) + iy,
                        o = ay + n,
                        i = ay + r;
                    By[t] = {}, By[t][sy] = o, By[t][iy] = i
                }

                function qy(t, e, n, r) {
                    const o = r && r.add || ey,
                        i = r && r.rm || ny,
                        s = r && r.listeners || "eventListeners",
                        a = r && r.rmAll || "removeAllListeners",
                        c = uy(o),
                        l = "." + o + ":",
                        u = "prependListener",
                        h = "." + u + ":",
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

                    function f(n, r, o) {
                        if (!(r = r || t.event)) return;
                        const i = n || r.target || t,
                            s = i[By[r.type][o ? iy : sy]];
                        if (s) {
                            const t = [];
                            if (1 === s.length) {
                                const e = p(s[0], i, r);
                                e && t.push(e)
                            } else {
                                const e = s.slice();
                                for (let n = 0; n < e.length && (!r || !0 !== r[Hy]); n++) {
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
                            return f(this, t, !1)
                        },
                        g = function(t) {
                            return f(this, t, !0)
                        };

                    function y(e, n) {
                        if (!e) return !1;
                        let r = !0;
                        n && void 0 !== n.useG && (r = n.useG);
                        const p = n && n.vh;
                        let f = !0;
                        n && void 0 !== n.chkDup && (f = n.chkDup);
                        let y = !1;
                        n && void 0 !== n.rt && (y = n.rt);
                        let v = e;
                        for (; v && !v.hasOwnProperty(o);) v = Jg(v);
                        if (!v && e[o] && (v = e), !v) return !1;
                        if (v[c]) return !1;
                        const _ = n && n.eventNameToString,
                            m = {},
                            b = v[c] = v[o],
                            T = v[uy(i)] = v[i],
                            w = v[uy(s)] = v[s],
                            E = v[uy(a)] = v[a];
                        let S;

                        function O(t, e) {
                            return !Uy && "object" == typeof t && t ? !!t.capture : Uy && e ? "boolean" == typeof t ? {
                                capture: t,
                                passive: !0
                            } : t ? "object" == typeof t && !1 !== t.passive ? {
                                ...t,
                                passive: !0
                            } : t : {
                                passive: !0
                            } : t
                        }
                        n && n.prepend && (S = v[uy(n.prepend)] = v[n.prepend]);
                        const C = function(t) {
                                return S.call(m.target, m.eventName, t.invoke, m.options)
                            },
                            k = r ? function(t) {
                                if (!m.isExisting) return b.call(m.target, m.eventName, m.capture ? g : d, m.options)
                            } : function(t) {
                                return b.call(m.target, m.eventName, t.invoke, m.options)
                            },
                            I = r ? function(t) {
                                if (!t.isRemoved) {
                                    const e = By[t.eventName];
                                    let n;
                                    e && (n = e[t.capture ? iy : sy]);
                                    const r = n && t.target[n];
                                    if (r)
                                        for (let e = 0; e < r.length; e++)
                                            if (r[e] === t) {
                                                r.splice(e, 1), t.isRemoved = !0, t.removeAbortListener && (t.removeAbortListener(), t.removeAbortListener = null), 0 === r.length && (t.allRemoved = !0, t.target[n] = null);
                                                break
                                            }
                                }
                                if (t.allRemoved) return T.call(t.target, t.eventName, t.capture ? g : d, t.options)
                            } : function(t) {
                                return T.call(t.target, t.eventName, t.invoke, t.options)
                            },
                            P = function(t, e) {
                                const n = typeof e;
                                return "function" === n && t.callback === e || "object" === n && t.originalDelegate === e
                            },
                            A = n && n.diff ? n.diff : P,
                            L = Zone[uy("UNPATCHED_EVENTS")],
                            R = t[uy("PASSIVE_EVENTS")];

                        function j(t) {
                            if ("object" == typeof t && null !== t) {
                                const e = {
                                    ...t
                                };
                                return t.signal && (e.signal = t.signal), e
                            }
                            return t
                        }
                        const N = function(e, o, i, s) {
                            let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                                c = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                            return function() {
                                const l = this || t;
                                let u = arguments[0];
                                n && n.transferEventName && (u = n.transferEventName(u));
                                let h = arguments[1];
                                if (!h) return e.apply(this, arguments);
                                if (my && "uncaughtException" === u) return e.apply(this, arguments);
                                let d = !1;
                                if ("function" != typeof h) {
                                    if (!h.handleEvent) return e.apply(this, arguments);
                                    d = !0
                                }
                                if (p && !p(e, h, l, arguments)) return;
                                const g = Uy && !!R && -1 !== R.indexOf(u),
                                    y = j(O(arguments[2], g)),
                                    v = null == y ? void 0 : y.signal;
                                if (null != v && v.aborted) return;
                                if (L)
                                    for (let t = 0; t < L.length; t++)
                                        if (u === L[t]) return g ? e.call(l, u, h, y) : e.apply(this, arguments);
                                const b = !!y && ("boolean" == typeof y || y.capture),
                                    T = !(!y || "object" != typeof y) && y.once,
                                    w = Zone.current;
                                let E = By[u];
                                E || (zy(u, _), E = By[u]);
                                const S = E[b ? iy : sy];
                                let C, k = l[S],
                                    I = !1;
                                if (k) {
                                    if (I = !0, f)
                                        for (let t = 0; t < k.length; t++)
                                            if (A(k[t], h)) return
                                } else k = l[S] = [];
                                const P = l.constructor.name,
                                    N = $y[P];
                                N && (C = N[u]), C || (C = P + o + (_ ? _(u) : u)), m.options = y, T && (m.options.once = !1), m.target = l, m.capture = b, m.eventName = u, m.isExisting = I;
                                const x = r ? Wy : void 0;
                                x && (x.taskData = m), v && (m.options.signal = void 0);
                                const M = w.scheduleEventTask(C, h, x, i, s);
                                if (v) {
                                    m.options.signal = v;
                                    const t = () => M.zone.cancelTask(M);
                                    e.call(v, "abort", t, {
                                        once: !0
                                    }), M.removeAbortListener = () => v.removeEventListener("abort", t)
                                }
                                return m.target = null, x && (x.taskData = null), T && (m.options.once = !0), (Uy || "boolean" != typeof M.options) && (M.options = y), M.target = l, M.capture = b, M.eventName = u, d && (M.originalDelegate = h), c ? k.unshift(M) : k.push(M), a ? l : void 0
                            }
                        };
                        return v[o] = N(b, l, k, I, y), S && (v[u] = N(S, h, C, I, y, !0)), v[i] = function() {
                            const e = this || t;
                            let r = arguments[0];
                            n && n.transferEventName && (r = n.transferEventName(r));
                            const o = arguments[2],
                                i = !!o && ("boolean" == typeof o || o.capture),
                                s = arguments[1];
                            if (!s) return T.apply(this, arguments);
                            if (p && !p(T, s, e, arguments)) return;
                            const a = By[r];
                            let c;
                            a && (c = a[i ? iy : sy]);
                            const l = c && e[c];
                            if (l)
                                for (let t = 0; t < l.length; t++) {
                                    const n = l[t];
                                    if (A(n, s)) return l.splice(t, 1), n.isRemoved = !0, 0 !== l.length || (n.allRemoved = !0, e[c] = null, i || "string" != typeof r) || (e[ay + "ON_PROPERTY" + r] = null), n.zone.cancelTask(n), y ? e : void 0
                                }
                            return T.apply(this, arguments)
                        }, v[s] = function() {
                            const e = this || t;
                            let r = arguments[0];
                            n && n.transferEventName && (r = n.transferEventName(r));
                            const o = [],
                                i = Vy(e, _ ? _(r) : r);
                            for (let t = 0; t < i.length; t++) {
                                const e = i[t];
                                let n = e.originalDelegate ? e.originalDelegate : e.callback;
                                o.push(n)
                            }
                            return o
                        }, v[a] = function() {
                            const e = this || t;
                            let r = arguments[0];
                            if (r) {
                                n && n.transferEventName && (r = n.transferEventName(r));
                                const t = By[r];
                                if (t) {
                                    const n = t[sy],
                                        o = t[iy],
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
                                        r = Fy.exec(n);
                                    let o = r && r[1];
                                    o && "removeListener" !== o && this[a].call(this, o)
                                }
                                this[a].call(this, "removeListener")
                            }
                            if (y) return this
                        }, Ly(v[o], b), Ly(v[i], T), E && Ly(v[a], E), w && Ly(v[s], w), !0
                    }
                    let v = [];
                    for (let t = 0; t < n.length; t++) v[t] = y(n[t], r);
                    return v
                }

                function Vy(t, e) {
                    if (!e) {
                        const n = [];
                        for (let r in t) {
                            const o = Fy.exec(r);
                            let i = o && o[1];
                            if (i && (!e || i === e)) {
                                const e = t[r];
                                if (e)
                                    for (let t = 0; t < e.length; t++) n.push(e[t])
                            }
                        }
                        return n
                    }
                    let n = By[e];
                    n || (zy(e), n = By[e]);
                    const r = t[n[sy]],
                        o = t[n[iy]];
                    return r ? o ? r.concat(o) : r.slice() : o ? o.slice() : []
                }

                function Zy(t, e) {
                    const n = t.Event;
                    n && n.prototype && e.patchMethod(n.prototype, "stopImmediatePropagation", (t => function(e, n) {
                        e[Hy] = !0, t && t.apply(e, n)
                    }))
                }

                function Gy(t, e) {
                    e.patchMethod(t, "queueMicrotask", (t => function(t, e) {
                        Zone.current.scheduleMicroTask("queueMicrotask", e[0])
                    }))
                }
                const Xy = uy("zoneTask");

                function Ky(t, e, n, r) {
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
                        return Dy(r) ? n.handleId = r : (n.handle = r, n.isRefreshable = My(r.refresh)), e
                    }

                    function c(e) {
                        const {
                            handle: n,
                            handleId: r
                        } = e.data;
                        return i.call(t, null != n ? n : r)
                    }
                    o = Py(t, e += r, (n => function(o, i) {
                        if (My(i[0])) {
                            var l;
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
                                    r || o || (n ? delete s[n] : e && (e[Xy] = null))
                                }
                            };
                            const o = ly(e, i[0], t, a, c);
                            if (!o) return o;
                            const {
                                handleId: u,
                                handle: h,
                                isRefreshable: p,
                                isPeriodic: f
                            } = o.data;
                            if (u) s[u] = o;
                            else if (h && (h[Xy] = o, p && !f)) {
                                const t = h.refresh;
                                h.refresh = function() {
                                    const {
                                        zone: e,
                                        state: n
                                    } = o;
                                    return "notScheduled" === n ? (o._state = "scheduled", e._updateTaskCount(o, 1)) : "running" === n && (o._state = "scheduling"), t.call(this)
                                }
                            }
                            return null !== (l = null != h ? h : u) && void 0 !== l ? l : o
                        }
                        return n.apply(t, i)
                    })), i = Py(t, n, (e => function(n, r) {
                        var o;
                        const i = r[0];
                        let a;
                        Dy(i) ? (a = s[i], delete s[i]) : (a = null == i ? void 0 : i[Xy], a ? i[Xy] = null : a = i), null !== (o = a) && void 0 !== o && o.type ? a.cancelFn && a.zone.cancelTask(a) : e.apply(t, r)
                    }))
                }

                function Qy(t, e) {
                    const {
                        isBrowser: n,
                        isMix: r
                    } = e.getGlobalObjects();
                    if (!n && !r || !t.customElements || !("customElements" in t)) return;
                    const o = ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback", "formAssociatedCallback", "formDisabledCallback", "formResetCallback", "formStateRestoreCallback"];
                    e.patchCallbacks(e, t.customElements, "customElements", "define", o)
                }

                function Jy(t, e) {
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
                            c = s + (e + o);
                        r[e] = {}, r[e][i] = a, r[e][o] = c
                    }
                    const a = t.EventTarget;
                    return a && a.prototype ? (e.patchEventTarget(t, e, [a && a.prototype]), !0) : void 0
                }

                function Yy(t, e) {
                    e.patchEventPrototype(t, e)
                }

                function tv(t, e, n) {
                    if (!n || 0 === n.length) return e;
                    const r = n.filter((e => e.target === t));
                    if (!r || 0 === r.length) return e;
                    const o = r[0].ignoreProperties;
                    return e.filter((t => -1 === o.indexOf(t)))
                }

                function ev(t, e, n, r) {
                    t && Cy(t, tv(t, e, n), r)
                }

                function nv(t) {
                    return Object.getOwnPropertyNames(t).filter((t => t.startsWith("on") && t.length > 2)).map((t => t.substring(2)))
                }

                function rv(t, e) {
                    if (my && !Ty) return;
                    if (Zone[t.symbol("patchEvents")]) return;
                    const n = e.__Zone_ignore_on_properties;
                    let r = [];
                    if (by) {
                        const t = window;
                        r = r.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
                        const e = Ny() ? [{
                            target: t,
                            ignoreProperties: ["error"]
                        }] : [];
                        ev(t, nv(t), n ? n.concat(e) : n, Jg(t))
                    }
                    r = r.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
                    for (let t = 0; t < r.length; t++) {
                        const o = e[r[t]];
                        o && o.prototype && ev(o.prototype, nv(o.prototype), n)
                    }
                }

                function ov(t) {
                    t.__load_patch("legacy", (e => {
                        const n = e[t.__symbol__("legacyPatch")];
                        n && n()
                    })), t.__load_patch("timers", (t => {
                        const e = "set",
                            n = "clear";
                        Ky(t, e, n, "Timeout"), Ky(t, e, n, "Interval"), Ky(t, e, n, "Immediate")
                    })), t.__load_patch("requestAnimationFrame", (t => {
                        Ky(t, "request", "cancel", "AnimationFrame"), Ky(t, "mozRequest", "mozCancel", "AnimationFrame"), Ky(t, "webkitRequest", "webkitCancel", "AnimationFrame")
                    })), t.__load_patch("blocking", ((t, e) => {
                        const n = ["alert", "prompt", "confirm"];
                        for (let r = 0; r < n.length; r++) {
                            const o = n[r];
                            Py(t, o, ((n, r, o) => function(r, i) {
                                return e.current.run(n, t, i, o)
                            }))
                        }
                    })), t.__load_patch("EventTarget", ((t, e, n) => {
                        Yy(t, n), Jy(t, n);
                        const r = t.XMLHttpRequestEventTarget;
                        r && r.prototype && n.patchEventTarget(t, n, [r.prototype])
                    })), t.__load_patch("MutationObserver", ((t, e, n) => {
                        Iy("MutationObserver"), Iy("WebKitMutationObserver")
                    })), t.__load_patch("IntersectionObserver", ((t, e, n) => {
                        Iy("IntersectionObserver")
                    })), t.__load_patch("FileReader", ((t, e, n) => {
                        Iy("FileReader")
                    })), t.__load_patch("on_property", ((t, e, n) => {
                        rv(n, t)
                    })), t.__load_patch("customElements", ((t, e, n) => {
                        Qy(t, n)
                    })), t.__load_patch("XHR", ((t, e) => {
                        c(t);
                        const n = uy("xhrTask"),
                            r = uy("xhrSync"),
                            o = uy("xhrListener"),
                            i = uy("xhrScheduled"),
                            s = uy("xhrURL"),
                            a = uy("xhrErrorBeforeScheduled");

                        function c(t) {
                            const c = t.XMLHttpRequest;
                            if (!c) return;
                            const l = c.prototype;

                            function u(t) {
                                return t[n]
                            }
                            let h = l[ry],
                                p = l[oy];
                            if (!h) {
                                const e = t.XMLHttpRequestEventTarget;
                                if (e) {
                                    const t = e.prototype;
                                    h = t[ry], p = t[oy]
                                }
                            }
                            const f = "readystatechange",
                                d = "scheduled";

                            function g(t) {
                                const r = t.data,
                                    s = r.target;
                                s[i] = !1, s[a] = !1;
                                const c = s[o];
                                h || (h = s[ry], p = s[oy]), c && p.call(s, f, c);
                                const l = s[o] = () => {
                                    if (s.readyState === s.DONE)
                                        if (!r.aborted && s[i] && t.state === d) {
                                            const n = s[e.__symbol__("loadfalse")];
                                            if (0 !== s.status && n && n.length > 0) {
                                                const o = t.invoke;
                                                t.invoke = function() {
                                                    const n = s[e.__symbol__("loadfalse")];
                                                    for (let e = 0; e < n.length; e++) n[e] === t && n.splice(e, 1);
                                                    r.aborted || t.state !== d || o.call(t)
                                                }, n.push(t)
                                            } else t.invoke()
                                        } else r.aborted || !1 !== s[i] || (s[a] = !0)
                                };
                                return h.call(s, f, l), s[n] || (s[n] = t), w.apply(s, r.args), s[i] = !0, t
                            }

                            function y() {}

                            function v(t) {
                                const e = t.data;
                                return e.aborted = !0, E.apply(e.target, e.args)
                            }
                            const _ = Py(l, "open", (() => function(t, e) {
                                    return t[r] = 0 == e[2], t[s] = e[1], _.apply(t, e)
                                })),
                                m = "XMLHttpRequest.send",
                                b = uy("fetchTaskAborting"),
                                T = uy("fetchTaskScheduling"),
                                w = Py(l, "send", (() => function(t, n) {
                                    if (!0 === e.current[T]) return w.apply(t, n);
                                    if (t[r]) return w.apply(t, n); {
                                        const e = {
                                                target: t,
                                                url: t[s],
                                                isPeriodic: !1,
                                                args: n,
                                                aborted: !1
                                            },
                                            r = ly(m, y, e, g, v);
                                        t && !0 === t[a] && !e.aborted && r.state === d && r.invoke()
                                    }
                                })),
                                E = Py(l, "abort", (() => function(t, n) {
                                    const r = u(t);
                                    if (r && "string" == typeof r.type) {
                                        if (null == r.cancelFn || r.data && r.data.aborted) return;
                                        r.zone.cancelTask(r)
                                    } else if (!0 === e.current[b]) return E.apply(t, n)
                                }))
                        }
                    })), t.__load_patch("geolocation", (t => {
                        t.navigator && t.navigator.geolocation && yy(t.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
                    })), t.__load_patch("PromiseRejectionEvent", ((t, e) => {
                        function n(e) {
                            return function(n) {
                                Vy(t, e).forEach((r => {
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
                        t.PromiseRejectionEvent && (e[uy("unhandledPromiseRejectionHandler")] = n("unhandledrejection"), e[uy("rejectionHandledHandler")] = n("rejectionhandled"))
                    })), t.__load_patch("queueMicrotask", ((t, e, n) => {
                        Gy(t, n)
                    }))
                }

                function iv(t) {
                    t.__load_patch("ZoneAwarePromise", ((t, e, n) => {
                        const r = Object.getOwnPropertyDescriptor,
                            o = Object.defineProperty;

                        function i(t) {
                            if (t && t.toString === Object.prototype.toString) {
                                const e = t.constructor && t.constructor.name;
                                return (e || "") + ": " + JSON.stringify(t)
                            }
                            return t ? t.toString() : Object.prototype.toString.call(t)
                        }
                        const s = n.symbol,
                            a = [],
                            c = !1 !== t[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                            l = s("Promise"),
                            u = s("then"),
                            h = "__creationTrace__";
                        n.onUnhandledError = t => {
                            if (n.showUncaughtError()) {
                                const e = t && t.rejection;
                                e ? console.error("Unhandled Promise rejection:", e instanceof Error ? e.message : e, "; Zone:", t.zone.name, "; Task:", t.task && t.task.source, "; Value:", e, e instanceof Error ? e.stack : void 0) : console.error(t)
                            }
                        }, n.microtaskDrainDone = () => {
                            for (; a.length;) {
                                const t = a.shift();
                                try {
                                    t.zone.runGuarded((() => {
                                        if (t.throwOriginal) throw t.rejection;
                                        throw t
                                    }))
                                } catch (t) {
                                    f(t)
                                }
                            }
                        };
                        const p = s("unhandledPromiseRejectionHandler");

                        function f(t) {
                            n.onUnhandledError(t);
                            try {
                                const n = e[p];
                                "function" == typeof n && n.call(this, t)
                            } catch (t) {}
                        }

                        function d(t) {
                            return t && t.then
                        }

                        function g(t) {
                            return t
                        }

                        function y(t) {
                            return U.reject(t)
                        }
                        const v = s("state"),
                            _ = s("value"),
                            m = s("finally"),
                            b = s("parentPromiseValue"),
                            T = s("parentPromiseState"),
                            w = "Promise.then",
                            E = null,
                            S = !0,
                            O = !1,
                            C = 0;

                        function k(t, e) {
                            return n => {
                                try {
                                    L(t, e, n)
                                } catch (e) {
                                    L(t, !1, e)
                                }
                            }
                        }
                        const I = function() {
                                let t = !1;
                                return function(e) {
                                    return function() {
                                        t || (t = !0, e.apply(null, arguments))
                                    }
                                }
                            },
                            P = "Promise resolved with itself",
                            A = s("currentTaskTrace");

                        function L(t, r, s) {
                            const l = I();
                            if (t === s) throw new TypeError(P);
                            if (t[v] === E) {
                                let u = null;
                                try {
                                    "object" != typeof s && "function" != typeof s || (u = s && s.then)
                                } catch (e) {
                                    return l((() => {
                                        L(t, !1, e)
                                    }))(), t
                                }
                                if (r !== O && s instanceof U && s.hasOwnProperty(v) && s.hasOwnProperty(_) && s[v] !== E) j(s), L(t, s[v], s[_]);
                                else if (r !== O && "function" == typeof u) try {
                                    u.call(s, l(k(t, r)), l(k(t, !1)))
                                } catch (e) {
                                    l((() => {
                                        L(t, !1, e)
                                    }))()
                                } else {
                                    t[v] = r;
                                    const l = t[_];
                                    if (t[_] = s, t[m] === m && r === S && (t[v] = t[T], t[_] = t[b]), r === O && s instanceof Error) {
                                        const t = e.currentTask && e.currentTask.data && e.currentTask.data[h];
                                        t && o(s, A, {
                                            configurable: !0,
                                            enumerable: !1,
                                            writable: !0,
                                            value: t
                                        })
                                    }
                                    for (let e = 0; e < l.length;) N(t, l[e++], l[e++], l[e++], l[e++]);
                                    if (0 == l.length && r == O) {
                                        t[v] = C;
                                        let r = s;
                                        try {
                                            throw new Error("Uncaught (in promise): " + i(s) + (s && s.stack ? "\n" + s.stack : ""))
                                        } catch (t) {
                                            r = t
                                        }
                                        c && (r.throwOriginal = !0), r.rejection = s, r.promise = t, r.zone = e.current, r.task = e.currentTask, a.push(r), n.scheduleMicroTask()
                                    }
                                }
                            }
                            return t
                        }
                        const R = s("rejectionHandledHandler");

                        function j(t) {
                            if (t[v] === C) {
                                try {
                                    const n = e[R];
                                    n && "function" == typeof n && n.call(this, {
                                        rejection: t[_],
                                        promise: t
                                    })
                                } catch (t) {}
                                t[v] = O;
                                for (let e = 0; e < a.length; e++) t === a[e].promise && a.splice(e, 1)
                            }
                        }

                        function N(t, e, n, r, o) {
                            j(t);
                            const i = t[v],
                                s = i ? "function" == typeof r ? r : g : "function" == typeof o ? o : y;
                            e.scheduleMicroTask(w, (() => {
                                try {
                                    const r = t[_],
                                        o = !!n && m === n[m];
                                    o && (n[b] = r, n[T] = i);
                                    const a = e.run(s, void 0, o && s !== y && s !== g ? [] : [r]);
                                    L(n, !0, a)
                                } catch (t) {
                                    L(n, !1, t)
                                }
                            }), n)
                        }
                        const x = "function ZoneAwarePromise() { [native code] }",
                            M = function() {},
                            D = t.AggregateError;
                        class U {
                            static toString() {
                                return x
                            }
                            static resolve(t) {
                                return t instanceof U ? t : L(new this(null), S, t)
                            }
                            static reject(t) {
                                return L(new this(null), O, t)
                            }
                            static withResolvers() {
                                const t = {};
                                return t.promise = new U(((e, n) => {
                                    t.resolve = e, t.reject = n
                                })), t
                            }
                            static any(t) {
                                if (!t || "function" != typeof t[Symbol.iterator]) return Promise.reject(new D([], "All promises were rejected"));
                                const e = [];
                                let n = 0;
                                try {
                                    for (let r of t) n++, e.push(U.resolve(r))
                                } catch (t) {
                                    return Promise.reject(new D([], "All promises were rejected"))
                                }
                                if (0 === n) return Promise.reject(new D([], "All promises were rejected"));
                                let r = !1;
                                const o = [];
                                return new U(((t, i) => {
                                    for (let s = 0; s < e.length; s++) e[s].then((e => {
                                        r || (r = !0, t(e))
                                    }), (t => {
                                        o.push(t), n--, 0 === n && (r = !0, i(new D(o, "All promises were rejected")))
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
                                for (let e of t) d(e) || (e = this.resolve(e)), e.then(o, i);
                                return r
                            }
                            static all(t) {
                                return U.allWithCallback(t)
                            }
                            static allSettled(t) {
                                return (this && this.prototype instanceof U ? this : U).allWithCallback(t, {
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
                                    d(o) || (o = this.resolve(o));
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
                                if (!(e instanceof U)) throw new Error("Must be an instanceof Promise.");
                                e[v] = E, e[_] = [];
                                try {
                                    const n = I();
                                    t && t(n(k(e, S)), n(k(e, O)))
                                } catch (t) {
                                    L(e, !1, t)
                                }
                            }
                            get[Symbol.toStringTag]() {
                                return "Promise"
                            }
                            get[Symbol.species]() {
                                return U
                            }
                            then(t, n) {
                                var r;
                                let o = null === (r = this.constructor) || void 0 === r ? void 0 : r[Symbol.species];
                                o && "function" == typeof o || (o = this.constructor || U);
                                const i = new o(M),
                                    s = e.current;
                                return this[v] == E ? this[_].push(s, i, t, n) : N(this, s, i, t, n), i
                            } catch (t) {
                                return this.then(null, t)
                            } finally(t) {
                                var n;
                                let r = null === (n = this.constructor) || void 0 === n ? void 0 : n[Symbol.species];
                                r && "function" == typeof r || (r = U);
                                const o = new r(M);
                                o[m] = m;
                                const i = e.current;
                                return this[v] == E ? this[_].push(i, o, t, t) : N(this, i, o, t, t), o
                            }
                        }
                        U.resolve = U.resolve, U.reject = U.reject, U.race = U.race, U.all = U.all;
                        const W = t[l] = t.Promise;
                        t.Promise = U;
                        const B = s("thenPatched");

                        function $(t) {
                            const e = t.prototype,
                                n = r(e, "then");
                            if (n && (!1 === n.writable || !n.configurable)) return;
                            const o = e.then;
                            e[u] = o, t.prototype.then = function(t, e) {
                                return new U(((t, e) => {
                                    o.call(this, t, e)
                                })).then(t, e)
                            }, t[B] = !0
                        }

                        function F(t) {
                            return function(e, n) {
                                let r = t.apply(e, n);
                                if (r instanceof U) return r;
                                let o = r.constructor;
                                return o[B] || $(o), r
                            }
                        }
                        return n.patchThen = $, W && ($(W), Py(t, "fetch", (t => F(t)))), Promise[e.__symbol__("uncaughtPromiseErrors")] = a, U
                    }))
                }

                function sv(t) {
                    t.__load_patch("toString", (t => {
                        const e = Function.prototype.toString,
                            n = uy("OriginalDelegate"),
                            r = uy("Promise"),
                            o = uy("Error"),
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
                        const s = Object.prototype.toString,
                            a = "[object Promise]";
                        Object.prototype.toString = function() {
                            return "function" == typeof Promise && this instanceof Promise ? a : s.call(this)
                        }
                    }))
                }

                function av(t, e, n, r, o) {
                    const i = Zone.__symbol__(r);
                    if (e[i]) return;
                    const s = e[i] = e[r];
                    e[r] = function(i, a, c) {
                        return a && a.prototype && o.forEach((function(e) {
                            const o = `${n}.${r}::` + e,
                                i = a.prototype;
                            try {
                                if (i.hasOwnProperty(e)) {
                                    const n = t.ObjectGetOwnPropertyDescriptor(i, e);
                                    n && n.value ? (n.value = t.wrapWithCurrentZone(n.value, o), t._redefineProperty(a.prototype, e, n)) : i[e] && (i[e] = t.wrapWithCurrentZone(i[e], o))
                                } else i[e] && (i[e] = t.wrapWithCurrentZone(i[e], o))
                            } catch {}
                        })), s.call(e, i, a, c)
                    }, t.attachOriginToPatched(e[r], s)
                }

                function cv(t) {
                    t.__load_patch("util", ((t, e, n) => {
                        const r = nv(t);
                        n.patchOnProperties = Cy, n.patchMethod = Py, n.bindArguments = gy, n.patchMacroTask = Ay;
                        const o = e.__symbol__("BLACK_LISTED_EVENTS"),
                            i = e.__symbol__("UNPATCHED_EVENTS");
                        t[i] && (t[o] = t[i]), t[o] && (e[o] = e[i] = t[o]), n.patchEventPrototype = Zy, n.patchEventTarget = qy, n.isIEOrEdge = xy, n.ObjectDefineProperty = Qg, n.ObjectGetOwnPropertyDescriptor = Kg, n.ObjectCreate = Yg, n.ArraySlice = ty, n.patchClass = Iy, n.wrapWithCurrentZone = cy, n.filterProperties = tv, n.attachOriginToPatched = Ly, n._redefineProperty = Object.defineProperty, n.patchCallbacks = av, n.getGlobalObjects = () => ({
                            globalSources: $y,
                            zoneSymbolEventNames: By,
                            eventNames: r,
                            isBrowser: by,
                            isMix: Ty,
                            isNode: my,
                            TRUE_STR: iy,
                            FALSE_STR: sy,
                            ZONE_SYMBOL_PREFIX: ay,
                            ADD_EVENT_LISTENER_STR: ey,
                            REMOVE_EVENT_LISTENER_STR: ny
                        })
                    }))
                }

                function lv(t) {
                    iv(t), sv(t), cv(t)
                }
                const uv = Xg();
                lv(uv), ov(uv);
                var hv = function() {
                        function t() {}
                        return t.prototype.emit = function(t) {}, t
                    }(),
                    pv = new(function() {
                        function t() {}
                        return t.prototype.getLogger = function(t, e, n) {
                            return new hv
                        }, t
                    }()),
                    fv = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof E ? E : {},
                    dv = Symbol.for("io.opentelemetry.js.api.logs"),
                    gv = fv;

                function yv(t, e, n) {
                    return function(r) {
                        return r === t ? e : n
                    }
                }
                var vv = 1,
                    _v = function() {
                        function t() {}
                        return t.getInstance = function() {
                            return this._instance || (this._instance = new t), this._instance
                        }, t.prototype.setGlobalLoggerProvider = function(t) {
                            return gv[dv] ? this.getLoggerProvider() : (gv[dv] = yv(vv, t, pv), t)
                        }, t.prototype.getLoggerProvider = function() {
                            var t, e;
                            return null !== (e = null === (t = gv[dv]) || void 0 === t ? void 0 : t.call(gv, vv)) && void 0 !== e ? e : pv
                        }, t.prototype.getLogger = function(t, e, n) {
                            return this.getLoggerProvider().getLogger(t, e, n)
                        }, t.prototype.disable = function() {
                            delete gv[dv]
                        }, t
                    }().getInstance();

                function mv(t) {
                    return "function" == typeof t
                }
                var bv = console.error.bind(console);

                function Tv(t, e, n) {
                    var r = !!t[e] && t.propertyIsEnumerable(e);
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: r,
                        writable: !0,
                        value: n
                    })
                }

                function wv(t) {
                    t && t.logger && (mv(t.logger) ? bv = t.logger : bv("new logger isn't a function, not replacing"))
                }

                function Ev(t, e, n) {
                    if (t && t[e]) {
                        if (!n) return bv("no wrapper function"), void bv((new Error).stack);
                        if (mv(t[e]) && mv(n)) {
                            var r = t[e],
                                o = n(r, e);
                            return Tv(o, "__original", r), Tv(o, "__unwrap", (function() {
                                t[e] === o && Tv(t, e, r)
                            })), Tv(o, "__wrapped", !0), Tv(t, e, o), o
                        }
                        bv("original object and wrapper must be functions")
                    } else bv("no original function " + e + " to wrap")
                }

                function Sv(t, e, n) {
                    if (!t) return bv("must provide one or more modules to patch"), void bv((new Error).stack);
                    Array.isArray(t) || (t = [t]), e && Array.isArray(e) ? t.forEach((function(t) {
                        e.forEach((function(e) {
                            Ev(t, e, n)
                        }))
                    })) : bv("must provide one or more functions to wrap on modules")
                }

                function Ov(t, e) {
                    return t && t[e] ? t[e].__unwrap ? t[e].__unwrap() : void bv("no original to unwrap to -- has " + e + " already been unwrapped?") : (bv("no function to unwrap."), void bv((new Error).stack))
                }

                function Cv(t, e) {
                    if (!t) return bv("must provide one or more modules to patch"), void bv((new Error).stack);
                    Array.isArray(t) || (t = [t]), e && Array.isArray(e) ? t.forEach((function(t) {
                        e.forEach((function(e) {
                            Ov(t, e)
                        }))
                    })) : bv("must provide one or more functions to unwrap on modules")
                }
                wv.wrap = Ev, wv.massWrap = Sv, wv.unwrap = Ov, wv.massUnwrap = Cv;
                var kv = wv,
                    Iv = function() {
                        return Iv = Object.assign || function(t) {
                            for (var e, n = 1, r = arguments.length; n < r; n++)
                                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t
                        }, Iv.apply(this, arguments)
                    },
                    Pv = function() {
                        function t(t, e, n) {
                            this.instrumentationName = t, this.instrumentationVersion = e, this._config = {}, this._wrap = kv.wrap, this._unwrap = kv.unwrap, this._massWrap = kv.massWrap, this._massUnwrap = kv.massUnwrap, this.setConfig(n), this._diag = Ft.createComponentLogger({
                                namespace: t
                            }), this._tracer = ne.getTracer(t, e), this._meter = qt.getMeter(t, e), this._logger = _v.getLogger(t, e), this._updateMetricInstruments()
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
                            this._config = Iv({
                                enabled: !0
                            }, t)
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
                    Av = function() {
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
                    Lv = function(t) {
                        function e(e, n, r) {
                            var o = t.call(this, e, n, r) || this;
                            return o._config.enabled && o.enable(), o
                        }
                        return Av(e, t), e
                    }(Pv);

                function Rv(t, e, n) {
                    var r, o;
                    try {
                        o = t()
                    } catch (t) {
                        r = t
                    } finally {
                        if (e(r, o), r && !n) throw r;
                        return o
                    }
                }

                function jv(t) {
                    return "function" == typeof t && "function" == typeof t.__original && "function" == typeof t.__unwrap && !0 === t.__wrapped
                }
                var Nv, xv = "exception",
                    Mv = function(t) {
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
                    Dv = function(t, e) {
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
                    Uv = function(t, e, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                        return t.concat(r || Array.prototype.slice.call(e))
                    },
                    Wv = function() {
                        function t(t, e, n, r, o, i, s, a, c, l) {
                            void 0 === s && (s = []), this.attributes = {}, this.links = [], this.events = [], this._droppedAttributesCount = 0, this._droppedEventsCount = 0, this._droppedLinksCount = 0, this.status = {
                                code: Mt.UNSET
                            }, this.endTime = [0, 0], this._ended = !1, this._duration = [-1, -1], this.name = n, this._spanContext = r, this.parentSpanId = i, this.kind = o, this.links = s;
                            var u = Date.now();
                            this._performanceStartTime = Ye.now(), this._performanceOffset = u - (this._performanceStartTime + kn()), this._startTimeProvided = null != a, this.startTime = this._getTime(null != a ? a : u), this.resource = t.resource, this.instrumentationLibrary = t.instrumentationLibrary, this._spanLimits = t.getSpanLimits(), this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0, null != l && this.setAttributes(l), this._spanProcessor = t.getActiveSpanProcessor(), this._spanProcessor.onStart(this, e)
                        }
                        return t.prototype.spanContext = function() {
                            return this._spanContext
                        }, t.prototype.setAttribute = function(t, e) {
                            return null == e || this._isSpanEnded() ? this : 0 === t.length ? (Ft.warn("Invalid attribute key: " + t), this) : we(e) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? (this._droppedAttributesCount++, this) : (this.attributes[t] = this._truncateToSize(e), this) : (Ft.warn("Invalid attribute value set for key: " + t), this)
                        }, t.prototype.setAttributes = function(t) {
                            var e, n;
                            try {
                                for (var r = Mv(Object.entries(t)), o = r.next(); !o.done; o = r.next()) {
                                    var i = Dv(o.value, 2),
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
                            if (0 === this._spanLimits.eventCountLimit) return Ft.warn("No events allowed."), this._droppedEventsCount++, this;
                            this.events.length >= this._spanLimits.eventCountLimit && (0 === this._droppedEventsCount && Ft.debug("Dropping extra events."), this.events.shift(), this._droppedEventsCount++), Nn(e) && (Nn(n) || (n = e), e = void 0);
                            var r = be(e);
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
                            return (e = this.links).push.apply(e, Uv([], Dv(t), !1)), this
                        }, t.prototype.setStatus = function(t) {
                            return this._isSpanEnded() || (this.status = t), this
                        }, t.prototype.updateName = function(t) {
                            return this._isSpanEnded() || (this.name = t), this
                        }, t.prototype.end = function(t) {
                            this._isSpanEnded() ? Ft.error(this.name + " " + this._spanContext.traceId + "-" + this._spanContext.spanId + " - You can only call end() on a span once.") : (this._ended = !0, this.endTime = this._getTime(t), this._duration = An(this.startTime, this.endTime), this._duration[0] < 0 && (Ft.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0]), this._droppedEventsCount > 0 && Ft.warn("Dropped " + this._droppedEventsCount + " events because eventCountLimit reached"), this._spanProcessor.onEnd(this))
                        }, t.prototype._getTime = function(t) {
                            if ("number" == typeof t && t < Ye.now()) return In(t + this._performanceOffset);
                            if ("number" == typeof t) return Cn(t);
                            if (t instanceof Date) return Cn(t.getTime());
                            if (jn(t)) return t;
                            if (this._startTimeProvided) return Cn(Date.now());
                            var e = Ye.now() - this._performanceStartTime;
                            return xn(this.startTime, Cn(e))
                        }, t.prototype.isRecording = function() {
                            return !1 === this._ended
                        }, t.prototype.recordException = function(t, e) {
                            var n = {};
                            "string" == typeof t ? n[nn] = t : t && (t.code ? n[en] = t.code.toString() : t.name && (n[en] = t.name), t.message && (n[nn] = t.message), t.stack && (n[rn] = t.stack)), n[en] || n[nn] ? this.addEvent(xv, n, e) : Ft.warn("Failed to record an exception " + t)
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
                            return this._ended && Ft.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}"), this._ended
                        }, t.prototype._truncateToLimitUtil = function(t, e) {
                            return t.length <= e ? t : t.substr(0, e)
                        }, t.prototype._truncateToSize = function(t) {
                            var e = this,
                                n = this._attributeValueLengthLimit;
                            return n <= 0 ? (Ft.warn("Attribute value limit must be positive, got " + n), t) : "string" == typeof t ? this._truncateToLimitUtil(t, n) : Array.isArray(t) ? t.map((function(t) {
                                return "string" == typeof t ? e._truncateToLimitUtil(t, n) : t
                            })) : t
                        }, t
                    }();
                ! function(t) {
                    t[t.NOT_RECORD = 0] = "NOT_RECORD", t[t.RECORD = 1] = "RECORD", t[t.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
                }(Nv || (Nv = {}));
                var Bv = function() {
                        function t() {}
                        return t.prototype.shouldSample = function() {
                            return {
                                decision: Nv.NOT_RECORD
                            }
                        }, t.prototype.toString = function() {
                            return "AlwaysOffSampler"
                        }, t
                    }(),
                    $v = function() {
                        function t() {}
                        return t.prototype.shouldSample = function() {
                            return {
                                decision: Nv.RECORD_AND_SAMPLED
                            }
                        }, t.prototype.toString = function() {
                            return "AlwaysOnSampler"
                        }, t
                    }(),
                    Fv = function() {
                        function t(t) {
                            var e, n, r, o;
                            this._root = t.root, this._root || (Ae(new Error("ParentBasedSampler must have a root sampler configured")), this._root = new $v), this._remoteParentSampled = null !== (e = t.remoteParentSampled) && void 0 !== e ? e : new $v, this._remoteParentNotSampled = null !== (n = t.remoteParentNotSampled) && void 0 !== n ? n : new Bv, this._localParentSampled = null !== (r = t.localParentSampled) && void 0 !== r ? r : new $v, this._localParentNotSampled = null !== (o = t.localParentNotSampled) && void 0 !== o ? o : new Bv
                        }
                        return t.prototype.shouldSample = function(t, e, n, r, o, i) {
                            var s = ne.getSpanContext(t);
                            return s && Pt(s) ? s.isRemote ? s.traceFlags & M.SAMPLED ? this._remoteParentSampled.shouldSample(t, e, n, r, o, i) : this._remoteParentNotSampled.shouldSample(t, e, n, r, o, i) : s.traceFlags & M.SAMPLED ? this._localParentSampled.shouldSample(t, e, n, r, o, i) : this._localParentNotSampled.shouldSample(t, e, n, r, o, i) : this._root.shouldSample(t, e, n, r, o, i)
                        }, t.prototype.toString = function() {
                            return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}"
                        }, t
                    }(),
                    Hv = function() {
                        function t(t) {
                            void 0 === t && (t = 0), this._ratio = t, this._ratio = this._normalize(t), this._upperBound = Math.floor(4294967295 * this._ratio)
                        }
                        return t.prototype.shouldSample = function(t, e) {
                            return {
                                decision: kt(e) && this._accumulate(e) < this._upperBound ? Nv.RECORD_AND_SAMPLED : Nv.NOT_RECORD
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
                    zv = Ke(),
                    qv = Ie.AlwaysOn,
                    Vv = 1;

                function Zv() {
                    var t = Ke();
                    return {
                        sampler: Gv(zv),
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
                    }
                }

                function Gv(t) {
                    switch (void 0 === t && (t = Ke()), t.OTEL_TRACES_SAMPLER) {
                        case Ie.AlwaysOn:
                            return new $v;
                        case Ie.AlwaysOff:
                            return new Bv;
                        case Ie.ParentBasedAlwaysOn:
                            return new Fv({
                                root: new $v
                            });
                        case Ie.ParentBasedAlwaysOff:
                            return new Fv({
                                root: new Bv
                            });
                        case Ie.TraceIdRatio:
                            return new Hv(Xv(t));
                        case Ie.ParentBasedTraceIdRatio:
                            return new Fv({
                                root: new Hv(Xv(t))
                            });
                        default:
                            return Ft.error('OTEL_TRACES_SAMPLER value "' + t.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + qv + '".'), new $v
                    }
                }

                function Xv(t) {
                    if (void 0 === t.OTEL_TRACES_SAMPLER_ARG || "" === t.OTEL_TRACES_SAMPLER_ARG) return Ft.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to " + Vv + "."), Vv;
                    var e = Number(t.OTEL_TRACES_SAMPLER_ARG);
                    return isNaN(e) ? (Ft.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to " + Vv + "."), Vv) : e < 0 || e > 1 ? (Ft.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to " + Vv + "."), Vv) : e
                }

                function Kv(t) {
                    var e = {
                            sampler: Gv()
                        },
                        n = Zv(),
                        r = Object.assign({}, n, e, t);
                    return r.generalLimits = Object.assign({}, n.generalLimits, t.generalLimits || {}), r.spanLimits = Object.assign({}, n.spanLimits, t.spanLimits || {}), r
                }

                function Qv(t) {
                    var e, n, r, o, i, s, a, c, l, u, h, p, f = Object.assign({}, t.spanLimits),
                        d = Qe();
                    return f.attributeCountLimit = null !== (s = null !== (i = null !== (o = null !== (n = null === (e = t.spanLimits) || void 0 === e ? void 0 : e.attributeCountLimit) && void 0 !== n ? n : null === (r = t.generalLimits) || void 0 === r ? void 0 : r.attributeCountLimit) && void 0 !== o ? o : d.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) && void 0 !== i ? i : d.OTEL_ATTRIBUTE_COUNT_LIMIT) && void 0 !== s ? s : We, f.attributeValueLengthLimit = null !== (p = null !== (h = null !== (u = null !== (c = null === (a = t.spanLimits) || void 0 === a ? void 0 : a.attributeValueLengthLimit) && void 0 !== c ? c : null === (l = t.generalLimits) || void 0 === l ? void 0 : l.attributeValueLengthLimit) && void 0 !== u ? u : d.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== h ? h : d.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== p ? p : Ue, Object.assign({}, t, {
                        spanLimits: f
                    })
                }
                var Jv = function() {
                        function t(t, e) {
                            this._exporter = t, this._isExporting = !1, this._finishedSpans = [], this._droppedSpansCount = 0;
                            var n = Ke();
                            this._maxExportBatchSize = "number" == typeof(null == e ? void 0 : e.maxExportBatchSize) ? e.maxExportBatchSize : n.OTEL_BSP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = "number" == typeof(null == e ? void 0 : e.maxQueueSize) ? e.maxQueueSize : n.OTEL_BSP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = "number" == typeof(null == e ? void 0 : e.scheduledDelayMillis) ? e.scheduledDelayMillis : n.OTEL_BSP_SCHEDULE_DELAY, this._exportTimeoutMillis = "number" == typeof(null == e ? void 0 : e.exportTimeoutMillis) ? e.exportTimeoutMillis : n.OTEL_BSP_EXPORT_TIMEOUT, this._shutdownOnce = new jr(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (Ft.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize)
                        }
                        return t.prototype.forceFlush = function() {
                            return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
                        }, t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {
                            this._shutdownOnce.isCalled || t.spanContext().traceFlags & M.SAMPLED && this._addToBuffer(t)
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
                            if (this._finishedSpans.length >= this._maxQueueSize) return 0 === this._droppedSpansCount && Ft.debug("maxQueueSize reached, dropping spans"), void this._droppedSpansCount++;
                            this._droppedSpansCount > 0 && (Ft.warn("Dropped " + this._droppedSpansCount + " spans because maxQueueSize reached"), this._droppedSpansCount = 0), this._finishedSpans.push(t), this._maybeStartTimer()
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
                                $t.with(oe($t.active()), (function() {
                                    var o;
                                    t._finishedSpans.length <= t._maxExportBatchSize ? (o = t._finishedSpans, t._finishedSpans = []) : o = t._finishedSpans.splice(0, t._maxExportBatchSize);
                                    for (var i = function() {
                                            return t._exporter.export(o, (function(t) {
                                                var o;
                                                clearTimeout(r), t.code === Tn.SUCCESS ? e() : n(null !== (o = t.error) && void 0 !== o ? o : new Error("BatchSpanProcessor: span export failed"))
                                            }))
                                        }, s = null, a = 0, c = o.length; a < c; a++) {
                                        var l = o[a];
                                        l.resource.asyncAttributesPending && l.resource.waitForAsyncAttributes && (null != s || (s = []), s.push(l.resource.waitForAsyncAttributes()))
                                    }
                                    null === s ? i() : Promise.all(s).then(i, (function(t) {
                                        Ae(t), n(t)
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
                                        t._isExporting = !1, Ae(e)
                                    }))
                                };
                                if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
                                void 0 === this._timer && (this._timer = setTimeout((function() {
                                    return e()
                                }), this._scheduledDelayMillis), bn(this._timer))
                            }
                        }, t.prototype._clearTimer = function() {
                            void 0 !== this._timer && (clearTimeout(this._timer), this._timer = void 0)
                        }, t
                    }(),
                    Yv = function() {
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
                    t_ = function(t) {
                        function e(e, n) {
                            var r = t.call(this, e, n) || this;
                            return r.onInit(n), r
                        }
                        return Yv(e, t), e.prototype.onInit = function(t) {
                            var e = this;
                            !0 !== (null == t ? void 0 : t.disableAutoFlushOnDocumentHide) && "undefined" != typeof document && (this._visibilityChangeListener = function() {
                                "hidden" === document.visibilityState && e.forceFlush()
                            }, this._pageHideListener = function() {
                                e.forceFlush()
                            }, document.addEventListener("visibilitychange", this._visibilityChangeListener), document.addEventListener("pagehide", this._pageHideListener))
                        }, e.prototype.onShutdown = function() {
                            "undefined" != typeof document && (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener), this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener))
                        }, e
                    }(Jv),
                    e_ = 8,
                    n_ = 16,
                    r_ = function() {
                        function t() {
                            this.generateTraceId = i_(n_), this.generateSpanId = i_(e_)
                        }
                        return t
                    }(),
                    o_ = Array(32);

                function i_(t) {
                    return function() {
                        for (var e = 0; e < 2 * t; e++) o_[e] = Math.floor(16 * Math.random()) + 48, o_[e] >= 58 && (o_[e] += 39);
                        return String.fromCharCode.apply(null, o_.slice(0, 2 * t))
                    }
                }
                var s_ = function() {
                    function t(t, e, n) {
                        this._tracerProvider = n;
                        var r = Kv(e);
                        this._sampler = r.sampler, this._generalLimits = r.generalLimits, this._spanLimits = r.spanLimits, this._idGenerator = e.idGenerator || new r_, this.resource = n.resource, this.instrumentationLibrary = t
                    }
                    return t.prototype.startSpan = function(t, e, n) {
                        var r, o, i;
                        void 0 === e && (e = {}), void 0 === n && (n = $t.active()), e.root && (n = ne.deleteSpan(n));
                        var s = ne.getSpan(n);
                        if (ie(n)) return Ft.debug("Instrumentation suppressed, returning Noop Span"), ne.wrapSpanContext(yt);
                        var a, c, l, u = null == s ? void 0 : s.spanContext(),
                            h = this._idGenerator.generateSpanId();
                        u && ne.isSpanContextValid(u) ? (a = u.traceId, c = u.traceState, l = u.spanId) : a = this._idGenerator.generateTraceId();
                        var p = null !== (r = e.kind) && void 0 !== r ? r : xt.INTERNAL,
                            f = (null !== (o = e.links) && void 0 !== o ? o : []).map((function(t) {
                                return {
                                    context: t.context,
                                    attributes: be(t.attributes)
                                }
                            })),
                            d = be(e.attributes),
                            g = this._sampler.shouldSample(n, a, t, p, d, f);
                        c = null !== (i = g.traceState) && void 0 !== i ? i : c;
                        var y = {
                            traceId: a,
                            spanId: h,
                            traceFlags: g.decision === Nt.RECORD_AND_SAMPLED ? M.SAMPLED : M.NONE,
                            traceState: c
                        };
                        if (g.decision === Nt.NOT_RECORD) return Ft.debug("Recording is off, propagating context in a non-recording span"), ne.wrapSpanContext(y);
                        var v = be(Object.assign(d, g.attributes));
                        return new Wv(this, n, t, y, p, l, f, e.startTime, void 0, v)
                    }, t.prototype.startActiveSpan = function(t, e, n, r) {
                        var o, i, s;
                        if (!(arguments.length < 2)) {
                            2 === arguments.length ? s = e : 3 === arguments.length ? (o = e, s = n) : (o = e, i = n, s = r);
                            var a = null != i ? i : $t.active(),
                                c = this.startSpan(t, o, a),
                                l = ne.setSpan(a, c);
                            return $t.with(l, s, void 0, c)
                        }
                    }, t.prototype.getGeneralLimits = function() {
                        return this._generalLimits
                    }, t.prototype.getSpanLimits = function() {
                        return this._spanLimits
                    }, t.prototype.getActiveSpanProcessor = function() {
                        return this._tracerProvider.getActiveSpanProcessor()
                    }, t
                }();

                function a_() {
                    return "unknown_service"
                }
                var c_, l_ = function() {
                        return l_ = Object.assign || function(t) {
                            for (var e, n = 1, r = arguments.length; n < r; n++)
                                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t
                        }, l_.apply(this, arguments)
                    },
                    u_ = function(t, e, n, r) {
                        function o(t) {
                            return t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))
                        }
                        return new(n || (n = Promise))((function(n, i) {
                            function s(t) {
                                try {
                                    c(r.next(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function a(t) {
                                try {
                                    c(r.throw(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function c(t) {
                                t.done ? n(t.value) : o(t.value).then(s, a)
                            }
                            c((r = r.apply(t, e || [])).next())
                        }))
                    },
                    h_ = function(t, e) {
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

                        function a(t) {
                            return function(e) {
                                return c([t, e])
                            }
                        }

                        function c(i) {
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
                                        if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
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
                        }
                    },
                    p_ = function(t, e) {
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
                    f_ = function() {
                        function t(t, e) {
                            var n, r = this;
                            this._attributes = t, this.asyncAttributesPending = null != e, this._syncAttributes = null !== (n = this._attributes) && void 0 !== n ? n : {}, this._asyncAttributesPromise = null == e ? void 0 : e.then((function(t) {
                                return r._attributes = Object.assign({}, r._attributes, t), r.asyncAttributesPending = !1, t
                            }), (function(t) {
                                return Ft.debug("a resource's async attributes promise rejected: %s", t), r.asyncAttributesPending = !1, {}
                            }))
                        }
                        return t.empty = function() {
                            return t.EMPTY
                        }, t.default = function() {
                            var e;
                            return new t(((e = {})[dn] = a_(), e[yn] = mn[yn], e[gn] = mn[gn], e[vn] = mn[vn], e))
                        }, Object.defineProperty(t.prototype, "attributes", {
                            get: function() {
                                var t;
                                return this.asyncAttributesPending && Ft.error("Accessing resource attributes before async attributes settled"), null !== (t = this._attributes) && void 0 !== t ? t : {}
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.waitForAsyncAttributes = function() {
                            return u_(this, void 0, void 0, (function() {
                                return h_(this, (function(t) {
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
                            var o = l_(l_({}, this._syncAttributes), null !== (n = e._syncAttributes) && void 0 !== n ? n : e.attributes);
                            if (!this._asyncAttributesPromise && !e._asyncAttributesPromise) return new t(o);
                            var i = Promise.all([this._asyncAttributesPromise, e._asyncAttributesPromise]).then((function(t) {
                                var n, o = p_(t, 2),
                                    i = o[0],
                                    s = o[1];
                                return l_(l_(l_(l_({}, r._syncAttributes), i), null !== (n = e._syncAttributes) && void 0 !== n ? n : e.attributes), s)
                            }));
                            return new t(o, i)
                        }, t.EMPTY = new t({}), t
                    }(),
                    d_ = function(t) {
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
                    g_ = function() {
                        function t(t) {
                            this._spanProcessors = t
                        }
                        return t.prototype.forceFlush = function() {
                            var t, e, n = [];
                            try {
                                for (var r = d_(this._spanProcessors), o = r.next(); !o.done; o = r.next()) {
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
                                    Ae(e || new Error("MultiSpanProcessor: forceFlush failed")), t()
                                }))
                            }))
                        }, t.prototype.onStart = function(t, e) {
                            var n, r;
                            try {
                                for (var o = d_(this._spanProcessors), i = o.next(); !i.done; i = o.next()) i.value.onStart(t, e)
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
                                for (var r = d_(this._spanProcessors), o = r.next(); !o.done; o = r.next()) o.value.onEnd(t)
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
                                for (var r = d_(this._spanProcessors), o = r.next(); !o.done; o = r.next()) {
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
                    y_ = function() {
                        function t() {}
                        return t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {}, t.prototype.shutdown = function() {
                            return Promise.resolve()
                        }, t.prototype.forceFlush = function() {
                            return Promise.resolve()
                        }, t
                    }();
                ! function(t) {
                    t[t.resolved = 0] = "resolved", t[t.timeout = 1] = "timeout", t[t.error = 2] = "error", t[t.unresolved = 3] = "unresolved"
                }(c_ || (c_ = {}));
                var v_, __, m_, b_ = function() {
                        function t(t) {
                            var e;
                            void 0 === t && (t = {}), this._registeredSpanProcessors = [], this._tracers = new Map;
                            var n = _r({}, Zv(), Qv(t));
                            this.resource = null !== (e = n.resource) && void 0 !== e ? e : f_.empty(), this.resource = f_.default().merge(this.resource), this._config = Object.assign({}, n, {
                                resource: this.resource
                            });
                            var r = this._buildExporterFromEnv();
                            if (void 0 !== r) {
                                var o = new t_(r);
                                this.activeSpanProcessor = o
                            } else this.activeSpanProcessor = new y_
                        }
                        return t.prototype.getTracer = function(t, e, n) {
                            var r = t + "@" + (e || "") + ":" + ((null == n ? void 0 : n.schemaUrl) || "");
                            return this._tracers.has(r) || this._tracers.set(r, new s_({
                                name: t,
                                version: e,
                                schemaUrl: null == n ? void 0 : n.schemaUrl
                            }, this._config, this)), this._tracers.get(r)
                        }, t.prototype.addSpanProcessor = function(t) {
                            0 === this._registeredSpanProcessors.length && this.activeSpanProcessor.shutdown().catch((function(t) {
                                return Ft.error("Error while trying to shutdown current span processor", t)
                            })), this._registeredSpanProcessors.push(t), this.activeSpanProcessor = new g_(this._registeredSpanProcessors)
                        }, t.prototype.getActiveSpanProcessor = function() {
                            return this.activeSpanProcessor
                        }, t.prototype.register = function(t) {
                            void 0 === t && (t = {}), ne.setGlobalTracerProvider(this), void 0 === t.propagator && (t.propagator = this._buildPropagatorFromEnv()), t.contextManager && $t.setGlobalContextManager(t.contextManager), t.propagator && te.setGlobalPropagator(t.propagator)
                        }, t.prototype.forceFlush = function() {
                            var t = this._config.forceFlushTimeoutMillis,
                                e = this._registeredSpanProcessors.map((function(e) {
                                    return new Promise((function(n) {
                                        var r, o = setTimeout((function() {
                                            n(new Error("Span processor did not completed within timeout period of " + t + " ms")), r = c_.timeout
                                        }), t);
                                        e.forceFlush().then((function() {
                                            clearTimeout(o), r !== c_.timeout && (r = c_.resolved, n(r))
                                        })).catch((function(t) {
                                            clearTimeout(o), r = c_.error, n(t)
                                        }))
                                    }))
                                }));
                            return new Promise((function(t, n) {
                                Promise.all(e).then((function(e) {
                                    var r = e.filter((function(t) {
                                        return t !== c_.resolved
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
                                e = Array.from(new Set(Ke().OTEL_PROPAGATORS)),
                                n = e.map((function(e) {
                                    var n = t._getPropagator(e);
                                    return n || Ft.warn('Propagator "' + e + '" requested through environment variable is unavailable.'), n
                                })).reduce((function(t, e) {
                                    return e && t.push(e), t
                                }), []);
                            return 0 === n.length ? void 0 : 1 === e.length ? n[0] : new Dn({
                                propagators: n
                            })
                        }, t.prototype._buildExporterFromEnv = function() {
                            var t = Ke().OTEL_TRACES_EXPORTER;
                            if ("none" !== t && "" !== t) {
                                var e = this._getSpanExporter(t);
                                return e || Ft.error('Exporter "' + t + '" requested through environment variable is unavailable.'), e
                            }
                        }, t._registeredPropagators = new Map([
                            ["tracecontext", function() {
                                return new tr
                            }],
                            ["baggage", function() {
                                return new ve
                            }]
                        ]), t._registeredExporters = new Map, t
                    }(),
                    T_ = function(t, e) {
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
                    w_ = function(t, e, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                        return t.concat(r || Array.prototype.slice.call(e))
                    },
                    E_ = function() {
                        function t() {
                            this._enabled = !1, this._currentContext = U
                        }
                        return t.prototype._bindFunction = function(t, e) {
                            void 0 === t && (t = U);
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
                            return this._currentContext = U, this._enabled = !1, this
                        }, t.prototype.enable = function() {
                            return this._enabled || (this._enabled = !0, this._currentContext = U), this
                        }, t.prototype.with = function(t, e, n) {
                            for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
                            var i = this._currentContext;
                            this._currentContext = t || U;
                            try {
                                return e.call.apply(e, w_([n], T_(r), !1))
                            } finally {
                                this._currentContext = i
                            }
                        }, t
                    }(),
                    S_ = function() {
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
                    O_ = function(t) {
                        function e(e) {
                            void 0 === e && (e = {});
                            var n = t.call(this, e) || this;
                            if (e.contextManager) throw "contextManager should be defined in register method not in constructor";
                            if (e.propagator) throw "propagator should be defined in register method not in constructor";
                            return n
                        }
                        return S_(e, t), e.prototype.register = function(e) {
                            void 0 === e && (e = {}), void 0 === e.contextManager && (e.contextManager = new E_), e.contextManager && e.contextManager.enable(), t.prototype.register.call(this, e)
                        }, e
                    }(b_);

                function C_() {
                    return __ || (__ = document.createElement("a")), __
                }

                function k_(t, e) {
                    return e in t
                }

                function I_(t, e, n, r) {
                    var o = void 0,
                        i = void 0;
                    k_(n, e) && "number" == typeof n[e] && (o = n[e]);
                    var s = v_.FETCH_START;
                    if (k_(n, s) && "number" == typeof n[s] && (i = n[s]), void 0 !== o && void 0 !== i && o >= i) return t.addEvent(e, o), t
                }

                function P_(t, e) {
                    I_(t, v_.FETCH_START, e), I_(t, v_.DOMAIN_LOOKUP_START, e), I_(t, v_.DOMAIN_LOOKUP_END, e), I_(t, v_.CONNECT_START, e), k_(e, "name") && e.name.startsWith("https:") && I_(t, v_.SECURE_CONNECTION_START, e), I_(t, v_.CONNECT_END, e), I_(t, v_.REQUEST_START, e), I_(t, v_.RESPONSE_START, e), I_(t, v_.RESPONSE_END, e);
                    var n = e[v_.ENCODED_BODY_SIZE];
                    void 0 !== n && t.setAttribute(hn, n);
                    var r = e[v_.DECODED_BODY_SIZE];
                    void 0 !== r && n !== r && t.setAttribute(pn, r)
                }

                function A_(t) {
                    return t.slice().sort((function(t, e) {
                        var n = t[v_.FETCH_START],
                            r = e[v_.FETCH_START];
                        return n > r ? 1 : n < r ? -1 : 0
                    }))
                }

                function L_() {
                    return "undefined" != typeof location ? location.origin : void 0
                }

                function R_(t, e, n, r, o, i) {
                    void 0 === o && (o = new WeakSet);
                    var s = x_(t),
                        a = N_(t = s.toString(), e, n, r, o, i);
                    if (0 === a.length) return {
                        mainRequest: void 0
                    };
                    if (1 === a.length) return {
                        mainRequest: a[0]
                    };
                    var c = A_(a);
                    if (s.origin !== L_() && c.length > 1) {
                        var l = c[0],
                            u = j_(c, l[v_.RESPONSE_END], n),
                            h = l[v_.RESPONSE_END];
                        return u[v_.FETCH_START] < h && (u = l, l = void 0), {
                            corsPreFlightRequest: l,
                            mainRequest: u
                        }
                    }
                    return {
                        mainRequest: a[0]
                    }
                }

                function j_(t, e, n) {
                    for (var r, o = Rn(n), i = Rn(Pn(e)), s = t[1], a = t.length, c = 1; c < a; c++) {
                        var l = t[c],
                            u = Rn(Pn(l[v_.FETCH_START])),
                            h = o - Rn(Pn(l[v_.RESPONSE_END]));
                        u >= i && (!r || h < r) && (r = h, s = l)
                    }
                    return s
                }

                function N_(t, e, n, r, o, i) {
                    var s = Rn(e),
                        a = Rn(n),
                        c = r.filter((function(e) {
                            var n = Rn(Pn(e[v_.FETCH_START])),
                                r = Rn(Pn(e[v_.RESPONSE_END]));
                            return e.initiatorType.toLowerCase() === i && e.name === t && n >= s && r <= a
                        }));
                    return c.length > 0 && (c = c.filter((function(t) {
                        return !o.has(t)
                    }))), c
                }

                function x_(t) {
                    if ("function" == typeof URL) return new URL(t, "undefined" != typeof document ? document.baseURI : "undefined" != typeof location ? location.href : void 0);
                    var e = C_();
                    return e.href = t, e
                }

                function M_(t, e) {
                    var n = e || [];
                    return ("string" == typeof n || n instanceof RegExp) && (n = [n]), x_(t).origin === L_() || n.some((function(e) {
                        return Ir(t, e)
                    }))
                }(function(t) {
                    t.CONNECT_END = "connectEnd", t.CONNECT_START = "connectStart", t.DECODED_BODY_SIZE = "decodedBodySize", t.DOM_COMPLETE = "domComplete", t.DOM_CONTENT_LOADED_EVENT_END = "domContentLoadedEventEnd", t.DOM_CONTENT_LOADED_EVENT_START = "domContentLoadedEventStart", t.DOM_INTERACTIVE = "domInteractive", t.DOMAIN_LOOKUP_END = "domainLookupEnd", t.DOMAIN_LOOKUP_START = "domainLookupStart", t.ENCODED_BODY_SIZE = "encodedBodySize", t.FETCH_START = "fetchStart", t.LOAD_EVENT_END = "loadEventEnd", t.LOAD_EVENT_START = "loadEventStart", t.NAVIGATION_START = "navigationStart", t.REDIRECT_END = "redirectEnd", t.REDIRECT_START = "redirectStart", t.REQUEST_START = "requestStart", t.RESPONSE_END = "responseEnd", t.RESPONSE_START = "responseStart", t.SECURE_CONNECTION_START = "secureConnectionStart", t.UNLOAD_EVENT_END = "unloadEventEnd", t.UNLOAD_EVENT_START = "unloadEventStart"
                })(v_ || (v_ = {})),
                function(t) {
                    t.COMPONENT = "component", t.HTTP_ERROR_NAME = "http.error_name", t.HTTP_STATUS_TEXT = "http.status_text"
                }(m_ || (m_ = {}));
                var D_, U_, W_, B_, $_, F_, H_, z_ = "0.53.0",
                    q_ = function() {
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
                    V_ = 300,
                    Z_ = "object" == typeof process && "node" === (null === (D_ = process.release) || void 0 === D_ ? void 0 : D_.name),
                    G_ = function(t) {
                        function e(e) {
                            void 0 === e && (e = {});
                            var n = t.call(this, "@opentelemetry/instrumentation-fetch", z_, e) || this;
                            return n.component = "fetch", n.version = z_, n.moduleName = n.component, n._usedResources = new WeakSet, n._tasksCount = 0, n
                        }
                        return q_(e, t), e.prototype.init = function() {}, e.prototype._addChildSpan = function(t, e) {
                            var n = this.tracer.startSpan("CORS Preflight", {
                                startTime: e[v_.FETCH_START]
                            }, ne.setSpan($t.active(), t));
                            this.getConfig().ignoreNetworkEvents || P_(n, e), n.end(e[v_.RESPONSE_END])
                        }, e.prototype._addFinalSpanAttributes = function(t, e) {
                            var n = x_(e.url);
                            t.setAttribute(ln, e.status), null != e.statusText && t.setAttribute(m_.HTTP_STATUS_TEXT, e.statusText), t.setAttribute(an, n.host), t.setAttribute(cn, n.protocol.replace(":", "")), "undefined" != typeof navigator && t.setAttribute(un, navigator.userAgent)
                        }, e.prototype._addHeaders = function(t, e) {
                            if (!M_(e, this.getConfig().propagateTraceHeaderCorsUrls)) {
                                var n = {};
                                return te.inject($t.active(), n), void(Object.keys(n).length > 0 && this._diag.debug("headers inject skipped due to CORS policy"))
                            }
                            t instanceof Request || t.headers instanceof Headers || t.headers instanceof Map ? te.inject($t.active(), t.headers, {
                                set: function(t, e, n) {
                                    return t.set(e, "string" == typeof n ? n : String(n))
                                }
                            }) : (n = {}, te.inject($t.active(), n), t.headers = Object.assign({}, n, t.headers || {}))
                        }, e.prototype._clearResources = function() {
                            0 === this._tasksCount && this.getConfig().clearTimingResources && (performance.clearResourceTimings(), this._usedResources = new WeakSet)
                        }, e.prototype._createSpan = function(t, e) {
                            var n;
                            if (void 0 === e && (e = {}), !Pr(t, this.getConfig().ignoreUrls)) {
                                var r = (e.method || "GET").toUpperCase(),
                                    o = "HTTP " + r;
                                return this.tracer.startSpan(o, {
                                    kind: xt.CLIENT,
                                    attributes: (n = {}, n[m_.COMPONENT] = this.moduleName, n[on] = r, n[sn] = t, n)
                                })
                            }
                            this._diag.debug("ignoring span as url matches ignored url")
                        }, e.prototype._findResourceAndAddNetworkEvents = function(t, e, n) {
                            var r = e.entries;
                            if (!r.length) {
                                if (!performance.getEntriesByType) return;
                                r = performance.getEntriesByType("resource")
                            }
                            var o = R_(e.spanUrl, e.startTime, n, r, this._usedResources, "fetch");
                            if (o.mainRequest) {
                                var i = o.mainRequest;
                                this._markResourceAsUsed(i);
                                var s = o.corsPreFlightRequest;
                                s && (this._addChildSpan(t, s), this._markResourceAsUsed(s)), this.getConfig().ignoreNetworkEvents || P_(t, i)
                            }
                        }, e.prototype._markResourceAsUsed = function(t) {
                            this._usedResources.add(t)
                        }, e.prototype._endSpan = function(t, e, n) {
                            var r = this,
                                o = Cn(Date.now()),
                                i = In();
                            this._addFinalSpanAttributes(t, n), setTimeout((function() {
                                var n;
                                null === (n = e.observer) || void 0 === n || n.disconnect(), r._findResourceAndAddNetworkEvents(t, e, i), r._tasksCount--, r._clearResources(), t.end(o)
                            }), V_)
                        }, e.prototype._patchConstructor = function() {
                            var t = this;
                            return function(e) {
                                var n = t;
                                return function() {
                                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                    var o = this,
                                        i = x_(t[0] instanceof Request ? t[0].url : String(t[0])).href,
                                        s = t[0] instanceof Request ? t[0] : t[1] || {},
                                        a = n._createSpan(i, s);
                                    if (!a) return e.apply(this, t);
                                    var c = n._prepareSpanData(i);

                                    function l(t, e) {
                                        n._applyAttributesAfterFetch(t, s, e), n._endSpan(t, c, {
                                            status: e.status || 0,
                                            statusText: e.message,
                                            url: i
                                        })
                                    }

                                    function u(t, e) {
                                        n._applyAttributesAfterFetch(t, s, e), e.status >= 200 && e.status < 400 ? n._endSpan(t, c, e) : n._endSpan(t, c, {
                                            status: e.status,
                                            statusText: e.statusText,
                                            url: i
                                        })
                                    }

                                    function h(t, e, n) {
                                        try {
                                            var r = n.clone(),
                                                o = n.clone(),
                                                i = r.body;
                                            if (i) {
                                                var s = i.getReader(),
                                                    a = function() {
                                                        s.read().then((function(e) {
                                                            e.done ? u(t, o) : a()
                                                        }), (function(e) {
                                                            l(t, e)
                                                        }))
                                                    };
                                                a()
                                            } else u(t, n)
                                        } finally {
                                            e(n)
                                        }
                                    }

                                    function p(t, e, n) {
                                        try {
                                            l(t, n)
                                        } finally {
                                            e(n)
                                        }
                                    }
                                    return new Promise((function(t, r) {
                                        return $t.with(ne.setSpan($t.active(), a), (function() {
                                            return n._addHeaders(s, i), n._tasksCount++, e.apply(o, s instanceof Request ? [s] : [i, s]).then(h.bind(o, a, t), p.bind(o, a, r))
                                        }))
                                    }))
                                }
                            }
                        }, e.prototype._applyAttributesAfterFetch = function(t, e, n) {
                            var r = this,
                                o = this.getConfig().applyCustomAttributesOnSpan;
                            o && Rv((function() {
                                return o(t, e, n)
                            }), (function(t) {
                                t && r._diag.error("applyCustomAttributesOnSpan", t)
                            }), !0)
                        }, e.prototype._prepareSpanData = function(t) {
                            var e = In(),
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
                            Z_ ? this._diag.warn("this instrumentation is intended for web usage only, it does not instrument Node.js's fetch()") : (jv(fetch) && (this._unwrap(Xe, "fetch"), this._diag.debug("removing previous patch for constructor")), this._wrap(Xe, "fetch", this._patchConstructor()))
                        }, e.prototype.disable = function() {
                            Z_ || (this._unwrap(Xe, "fetch"), this._usedResources = new WeakSet)
                        }, e
                    }(Lv);

                function X_(t) {
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
                class K_ {
                    constructor(t) {
                        let {
                            transportManager: e,
                            promiseMap: n = new Map,
                            tracer: r
                        } = t;
                        U_.add(this), W_.set(this, void 0), B_.set(this, void 0), $_.set(this, 0), F_.set(this, void 0), i(this, W_, e), i(this, B_, n), i(this, F_, r)
                    }
                    shutdown() {
                        return r(this, void 0, void 0, (function*() {
                            yield Promise.all(o(this, B_, "f").values())
                        }))
                    }
                    forceFlush() {
                        return r(this, void 0, void 0, (function*() {
                            yield Promise.all(o(this, B_, "f").values())
                        }))
                    }
                    onStart() {}
                    onEnd(t) {
                        const e = o(this, F_, "f").fromOTSpan(t);
                        o(this, U_, "m", H_).call(this, e)
                    }
                }

                function Q_(t, e) {
                    var n, r;
                    if (e) {
                        const o = null !== (r = null === (n = e.getSpanInformation()) || void 0 === n ? void 0 : n.childrenNames) && void 0 !== r ? r : [];
                        o.push(t), e.setAttribute(hi.ChildrenNames, o)
                    }
                }
                W_ = new WeakMap, B_ = new WeakMap, $_ = new WeakMap, F_ = new WeakMap, U_ = new WeakSet, H_ = function(t) {
                    var e, n;
                    const s = (i(this, $_, (n = o(this, $_, "f"), e = n++, n)), e),
                        a = X_(t),
                        c = () => r(this, void 0, void 0, (function*() {
                            yield o(this, W_, "f").processSpan(a), o(this, B_, "f").delete(s)
                        }));
                    o(this, B_, "f").set(s, c())
                };
                const J_ = t.KnownAttributes = {
                        Tag: "outsystems.log.message.tag",
                        Visibility: "outsystems.otel.access.visibility",
                        AccessType: "outsystems.otel.access.type",
                        ChildrenNames: hi.ChildrenNames,
                        IsNonAggregable: hi.IsNonAggregable
                    },
                    Y_ = [J_.IsNonAggregable, J_.ChildrenNames];
                var tm, em, nm, rm, om, im, sm, am, cm, lm, um, hm, pm, fm, dm, gm, ym, vm;
                class _m {
                    constructor(t) {
                        let {
                            visibility: e,
                            attributes: n = {},
                            span: r,
                            activateSpan: s,
                            explicitChildren: a = []
                        } = t;
                        tm.set(this, void 0), em.set(this, void 0), nm.set(this, void 0), rm.set(this, void 0), i(this, tm, r), i(this, em, s), i(this, rm, a), void 0 !== e && o(this, tm, "f").setAttribute(J_.Visibility, jg[e]), o(this, tm, "f").setAttributes(n), this.ended = new Promise((t => {
                            i(this, nm, t)
                        }))
                    }
                    setAttribute(t, e) {
                        o(this, tm, "f").setAttribute(t, e)
                    }
                    setStatus(t, e) {
                        o(this, tm, "f").setStatus({
                            code: t,
                            message: e
                        })
                    }
                    raiseError(t, e) {
                        o(this, tm, "f").recordException(t), this.setStatus(2, e)
                    }
                    getContext() {
                        const t = o(this, tm, "f").spanContext();
                        return {
                            spanId: t.spanId,
                            traceId: t.traceId,
                            attributes: o(this, tm, "f").attributes,
                            sampled: Boolean(1 & t.traceFlags)
                        }
                    }
                    addEvent(t, e) {
                        o(this, tm, "f").addEvent(t, e)
                    }
                    end() {
                        return r(this, void 0, void 0, (function*() {
                            var t;
                            yield Promise.all(o(this, rm, "f").map((t => t.ended))), o(this, tm, "f").end(), null === (t = o(this, nm, "f")) || void 0 === t || t.call(this)
                        }))
                    }
                    fail() {
                        o(this, tm, "f").setStatus({
                            code: Mt.ERROR
                        })
                    }
                    getSpanInformation() {
                        return {
                            name: o(this, tm, "f").name,
                            kind: o(this, tm, "f").kind,
                            status: o(this, tm, "f").status.code,
                            parentSpanId: o(this, tm, "f").parentSpanId,
                            startTime: Nr.toNanoSeconds(new Nr(o(this, tm, "f").startTime)),
                            endTime: Nr.toNanoSeconds(new Nr(o(this, tm, "f").endTime)),
                            childrenNames: o(this, tm, "f").attributes[hi.ChildrenNames]
                        }
                    }
                    activate() {
                        return o(this, em, "f").call(this)
                    }
                    addExplicitChild(t) {
                        o(this, rm, "f").push(t)
                    }
                }
                tm = new WeakMap, em = new WeakMap, nm = new WeakMap, rm = new WeakMap;
                class mm {
                    constructor(t) {
                        let {
                            transports: e,
                            baseAttributes: n = {},
                            staticAttributes: r = [],
                            databaseNameSuffix: s,
                            transportManager: a = new as({
                                traceTransports: e,
                                databaseNameSuffix: s
                            }),
                            tracerProvider: c = new O_,
                            contextManager: l = new qg,
                            tracer: u = c.getTracer("@outsystems/logger-js", "3.1.0"),
                            exporter: h,
                            enabled: p = !0,
                            getActiveSpan: f = () => ne.getActiveSpan(),
                            setSpan: d = (t, e) => ne.setSpan(t, e)
                        } = t;
                        om.add(this), im.set(this, void 0), sm.set(this, void 0), am.set(this, void 0), cm.set(this, void 0), lm.set(this, void 0), um.set(this, void 0), hm.set(this, void 0), pm.set(this, void 0), fm.set(this, void 0), i(this, im, a), i(this, cm, u), i(this, am, p), i(this, um, f), i(this, sm, c), i(this, hm, d), i(this, lm, l), i(this, pm, n), i(this, fm, r);
                        const g = null != h ? h : new K_({
                            transportManager: a,
                            tracer: this
                        });
                        o(this, sm, "f").register({
                            contextManager: l
                        }), o(this, sm, "f").addSpanProcessor(g)
                    }
                    addTransport(t) {
                        o(this, im, "f").addTraceTransport(t)
                    }
                    removeTransport(t) {
                        o(this, im, "f").removeTraceTransport(t)
                    }
                    startSpan(t, e, n, r) {
                        if (o(this, am, "f")) {
                            Q_(t, null != n ? n : o(this, um, "f").call(this) ? this.fromOTSpan(o(this, um, "f").call(this)) : void 0);
                            const i = n ? o(this, cm, "f").startSpan(t, {
                                    attributes: {},
                                    kind: r
                                }, n.activate()) : o(this, cm, "f").startSpan(t, {
                                    kind: r
                                }),
                                s = this.fromOTSpan(i, e);
                            return null == n || n.addExplicitChild(s), s
                        }
                    }
                    startActiveSpan(t, e, n, r, i) {
                        if (o(this, am, "f")) {
                            const s = t => {
                                const o = this.fromOTSpan(t, n);
                                return null == r || r.addExplicitChild(o), e(o)
                            };
                            return r ? o(this, cm, "f").startActiveSpan(t, {
                                attributes: {},
                                kind: i
                            }, r.activate(), s) : o(this, cm, "f").startActiveSpan(t, {
                                kind: i
                            }, s)
                        }
                        return e(void 0)
                    }
                    getActiveSpan() {
                        const t = o(this, um, "f").call(this);
                        return t ? this.fromOTSpan(t) : void 0
                    }
                    setStatus(t) {
                        i(this, am, t)
                    }
                    addBaseSpanAttributes(t) {
                        i(this, pm, Object.assign(Object.assign({}, o(this, pm, "f")), t))
                    }
                    enableFetchInstrumentation() {
                        (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new G_).setTracerProvider(o(this, sm, "f"))
                    }
                    span(t) {
                        return r(this, void 0, void 0, (function*() {
                            yield o(this, im, "f").processSpan(t)
                        }))
                    }
                    flush() {
                        return r(this, void 0, void 0, (function*() {
                            o(this, im, "f").flushSpans()
                        }))
                    }
                    setSchedulerTimerInterval(t) {
                        o(this, im, "f").setSchedulerTimerInterval(t)
                    }
                    fromOTSpan(t, e) {
                        const n = o(this, om, "m", dm).call(this, t);
                        return new _m({
                            span: t,
                            attributes: Rg(n),
                            activateSpan: () => o(this, hm, "f").call(this, o(this, lm, "f").active(), t),
                            visibility: e
                        })
                    }
                }
                t.Tracer = mm, im = new WeakMap, sm = new WeakMap, am = new WeakMap, cm = new WeakMap, lm = new WeakMap, um = new WeakMap, hm = new WeakMap, pm = new WeakMap, fm = new WeakMap, om = new WeakSet, dm = function(t) {
                    const e = Object.assign({}, o(this, pm, "f"));
                    return void 0 === t.parentSpanId || Object.keys(e).forEach((t => {
                        o(this, fm, "f").includes(t) && delete e[t]
                    })), e
                };
                const bm = "Application";
                class Tm {
                    constructor(t) {
                        let {
                            transportId: e,
                            logTypeBaseline: n = lo.Debug,
                            formatter: r,
                            transportConsole: o = console,
                            shouldWriteLogsOnConsoles: s = () => !1
                        } = t;
                        gm.add(this), ym.set(this, void 0), this.formatConsoleLog = t => {
                            var e, n, r, o;
                            const i = {
                                errorCode: t.type === lo.Error ? null !== (e = t.errorCode) && void 0 !== e ? e : Lg : void 0,
                                category: null !== (n = t.category) && void 0 !== n ? n : bm,
                                message: null !== (o = null === (r = null == t ? void 0 : t.error) || void 0 === r ? void 0 : r.message) && void 0 !== o ? o : t.message,
                                timestamp: Nr.toISOString(t.timestamp)
                            };
                            return `${i.timestamp}:${i.errorCode?" "+i.errorCode:""} [${i.category}] ${i.message}`
                        }, this.transportId = e, this.logTypeBaseline = n, this.formatter = r, this.transportConsole = o, i(this, ym, s)
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
                            if (!o(this, gm, "m", vm).call(this, t)) return;
                            const e = this.formatter ? this.formatter.format(t) : this.formatConsoleLog(t);
                            switch (t.type) {
                                case lo.Debug:
                                    this.transportConsole.debug(e);
                                    break;
                                case lo.Info:
                                    this.transportConsole.log(e);
                                    break;
                                case lo.Warning:
                                    this.transportConsole.warn(e);
                                    break;
                                case lo.Error:
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

                function wm(t) {
                    const e = {};
                    return t.category && (e[J_.Tag] = t.category), e
                }
                ym = new WeakMap, gm = new WeakSet, vm = function(t) {
                    return t.visibility === ls.External || o(this, ym, "f").call(this)
                };
                class Em {
                    format(t) {
                        var e, n;
                        const r = null !== (e = t.visibility) && void 0 !== e ? e : ls.External,
                            o = Ng(t),
                            i = wm(t),
                            s = Object.assign(Object.assign(Object.assign({
                                [J_.Visibility]: jg[r]
                            }, o), i), t.attributes),
                            a = Dg(s),
                            c = Nr.toISOString(t.timestamp);
                        return {
                            message: null !== (n = t.message) && void 0 !== n ? n : "",
                            attributes: a,
                            instant: c
                        }
                    }
                }
                const Sm = {
                    [lo.Debug]: "logDebug",
                    [lo.Info]: "logInfo",
                    [lo.Warning]: "logWarning",
                    [lo.Error]: "logError",
                    [lo.Trace]: "logTrace"
                };
                class Om {
                    constructor(t) {
                        let {
                            transportId: e,
                            logTypeBaseline: n,
                            nativeLoggerV2: r,
                            formatter: o = new Em
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
                                n = Sm[t.type];
                            return this.nativeLoggerV2[n](e)
                        }))
                    }
                    writeAll(t) {
                        return r(this, void 0, void 0, (function*() {
                            for (const e of t) yield this.write(e)
                        }))
                    }
                }
                var Cm;
                const km = 2e3,
                    Im = {
                        [lo.Trace]: 1,
                        [lo.Debug]: 5,
                        [lo.Info]: 9,
                        [lo.Warning]: 13,
                        [lo.Error]: 17
                    },
                    Pm = {
                        [lo.Debug]: "Debug",
                        [lo.Info]: "Information",
                        [lo.Warning]: "Warning",
                        [lo.Error]: "Error",
                        [lo.Trace]: "Trace"
                    },
                    Am = t => {
                        const e = {
                            body: {
                                stringValue: ""
                            }
                        };
                        if (t.message) {
                            const n = t.message.length > km ? `${t.message.substring(0,km-3)}...` : t.message;
                            e.body = {
                                stringValue: n
                            }
                        }
                        return e
                    };
                class Lm {
                    constructor() {
                        let {
                            resourceAttributes: t = {}
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Cm.set(this, void 0), i(this, Cm, t)
                    }
                    setResourceAttributes(t) {
                        i(this, Cm, null != t ? t : {})
                    }
                    format(t) {
                        return this.formatAll([t])
                    }
                    formatAll(t) {
                        const e = Object.assign({
                                [J_.AccessType]: 3
                            }, o(this, Cm, "f")),
                            n = Mg(e);
                        return Rm(t.map((t => jm(t))), n)
                    }
                }

                function Rm(t, e) {
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
                    }
                }

                function jm(t) {
                    var e;
                    const n = null !== (e = t.visibility) && void 0 !== e ? e : ls.External,
                        r = Ng(t),
                        o = xg(t),
                        i = wm(t),
                        s = Object.assign(Object.assign(Object.assign({
                            [J_.Visibility]: jg[n]
                        }, r), i), t.attributes),
                        a = Dg(s),
                        c = Mg(a),
                        l = Im[t.type],
                        u = Pm[t.type],
                        h = Nr.toNanoSeconds(t.timestamp),
                        p = Am(t);
                    return Object.assign(Object.assign(Object.assign({}, p), o), {
                        timeUnixNano: h,
                        severityNumber: l,
                        severityText: u,
                        attributes: c
                    })
                }
                var Nm, xm, Mm, Dm;
                Cm = new WeakMap;
                const Um = "/v2/logs";
                class Wm {
                    constructor(t) {
                        let {
                            transportId: e,
                            resourceAttributes: r,
                            logTypeBaseline: o,
                            logsEndpoint: s = Um,
                            logsCollectorBaseUrl: a,
                            tagId: c,
                            enableWriteBuffer: l = !0,
                            httpClient: u = new n.HttpClient({
                                baseUrl: a,
                                headers: c ? {
                                    "api-key": c,
                                    "tag-id": c
                                } : {}
                            }),
                            formatter: h = new Lm({
                                resourceAttributes: r
                            })
                        } = t;
                        Nm.add(this), xm.set(this, void 0), Mm.set(this, void 0), this.transportId = e, this.logTypeBaseline = o, this.logsEndpoint = s, this.enableWriteBuffer = l, this.httpClient = u, this.formatter = h, i(this, xm, c), i(this, Mm, a)
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
                        i(this, xm, t)
                    }
                    setResourceAttributes(t) {
                        var e, n;
                        null === (n = (e = this.formatter).setResourceAttributes) || void 0 === n || n.call(e, t)
                    }
                    write(t) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, Nm, "m", Dm).call(this, this.formatter.format(t))
                        }))
                    }
                    writeAll(t) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, Nm, "m", Dm).call(this, this.formatter.formatAll(t))
                        }))
                    }
                }
                var Bm, $m, Fm, Hm, zm, qm, Vm, Zm;
                xm = new WeakMap, Mm = new WeakMap, Nm = new WeakSet, Dm = function(t) {
                    return r(this, void 0, void 0, (function*() {
                        return this.httpClient.post({
                            url: this.logsEndpoint,
                            payload: t,
                            contentType: n.ContentType.Json,
                            headers: o(this, xm, "f") ? {
                                "api-key": o(this, xm, "f"),
                                "tag-id": o(this, xm, "f")
                            } : {},
                            baseURL: o(this, Mm, "f")
                        })
                    }))
                };
                class Gm {
                    constructor() {
                        let {
                            resourceAttributes: t = {}
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Bm.add(this), $m.set(this, void 0), i(this, $m, t)
                    }
                    setResourceAttributes(t) {
                        i(this, $m, null != t ? t : {})
                    }
                    format(t) {
                        return this.formatAll([t])
                    }
                    formatAll(t) {
                        const e = Object.assign({
                                [J_.AccessType]: 3
                            }, o(this, $m, "f")),
                            n = Mg(e);
                        return Xm(t.map((t => {
                            const e = Object.assign({
                                    [J_.Visibility]: jg[ls.External]
                                }, o(this, Bm, "m", Fm).call(this, t.attributes)),
                                n = Dg(e),
                                r = Mg(n);
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
                        })), n)
                    }
                }

                function Xm(t, e) {
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
                    }
                }
                $m = new WeakMap, Bm = new WeakSet, Fm = function(t) {
                    return Object.entries(t).reduce(((t, e) => {
                        let [n, r] = e;
                        return Y_.includes(n) || (t[n] = r), t
                    }), {})
                };
                const Km = "/v2/traces";
                class Qm {
                    constructor(t) {
                        let {
                            transportId: e,
                            resourceAttributes: r,
                            enabled: o = !0,
                            tracesEndpoint: s = Km,
                            tracesCollectorBaseUrl: a,
                            tagId: c,
                            enableWriteBuffer: l = !0,
                            httpClient: u = new n.HttpClient({
                                baseUrl: a,
                                headers: c ? {
                                    "api-key": c,
                                    "tag-id": c
                                } : {}
                            }),
                            formatter: h = new Gm({
                                resourceAttributes: r
                            })
                        } = t;
                        Hm.add(this), zm.set(this, void 0), qm.set(this, void 0), Vm.set(this, void 0), this.transportId = e, i(this, zm, o), this.tracesEndpoint = s, this.enableWriteBuffer = l, this.httpClient = u, this.formatter = h, i(this, qm, c), i(this, Vm, a)
                    }
                    getTransportId() {
                        return this.transportId
                    }
                    isTracingEnabled() {
                        return o(this, zm, "f")
                    }
                    enableTracing() {
                        i(this, zm, !0)
                    }
                    disableTracing() {
                        i(this, zm, !1)
                    }
                    requiresConnectivity() {
                        return !0
                    }
                    hasWriteBuffer() {
                        return this.enableWriteBuffer
                    }
                    setTagId(t) {
                        i(this, qm, t)
                    }
                    setResourceAttributes(t) {
                        var e, n;
                        null === (n = (e = this.formatter).setResourceAttributes) || void 0 === n || n.call(e, t)
                    }
                    write(t) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, Hm, "m", Zm).call(this, this.formatter.format(t))
                        }))
                    }
                    writeAll(t) {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, Hm, "m", Zm).call(this, this.formatter.formatAll(t))
                        }))
                    }
                }
                var Jm, Ym, tb, eb, nb, rb, ob, ib, sb, ab, cb, lb, ub, hb, pb, fb, db, gb, yb, vb, _b, mb, bb;
                zm = new WeakMap, qm = new WeakMap, Vm = new WeakMap, Hm = new WeakSet, Zm = function(t) {
                    return r(this, void 0, void 0, (function*() {
                        return this.httpClient.post({
                            url: this.tracesEndpoint,
                            payload: t,
                            contentType: n.ContentType.Json,
                            headers: o(this, qm, "f") ? {
                                "api-key": o(this, qm, "f"),
                                "tag-id": o(this, qm, "f")
                            } : {},
                            baseURL: o(this, Vm, "f")
                        })
                    }))
                };
                class Tb {
                    constructor() {
                        let {
                            sw: t,
                            container: e = navigator.serviceWorker
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        var n;
                        if (Jm.set(this, void 0), Ym.set(this, void 0), tb.set(this, []), eb.set(this, !1), !e) throw new Error("No service worker container available");
                        i(this, Jm, null !== (n = null != t ? t : null == e ? void 0 : e.controller) && void 0 !== n ? n : void 0), i(this, Ym, e), this.waitForSW()
                    }
                    get pendingMessages() {
                        return o(this, tb, "f")
                    }
                    isServiceWorkerAvailable() {
                        return !!o(this, Jm, "f") && "activated" === o(this, Jm, "f").state
                    }
                    send(t, e) {
                        this.sendMessage({
                            kind: t,
                            data: e
                        })
                    }
                    sendMessage(t, e) {
                        var n;
                        this.isServiceWorkerAvailable() ? null === (n = o(this, Jm, "f")) || void 0 === n || n.postMessage(t, e) : (o(this, tb, "f").push({
                            message: t,
                            options: e
                        }), this.waitForSW())
                    }
                    waitForSW() {
                        return r(this, void 0, void 0, (function*() {
                            if (this.isServiceWorkerAvailable() || o(this, eb, "f")) return;
                            i(this, eb, !0);
                            const {
                                active: t
                            } = yield o(this, Ym, "f").ready;
                            i(this, Jm, null != t ? t : void 0), i(this, eb, !1), this.flushMessages()
                        }))
                    }
                    flushMessages() {
                        var t;
                        if (this.isServiceWorkerAvailable()) {
                            for (const {
                                    message: e,
                                    options: n
                                } of o(this, tb, "f")) null === (t = o(this, Jm, "f")) || void 0 === t || t.postMessage(e, n);
                            i(this, tb, [])
                        } else this.waitForSW()
                    }
                }
                Jm = new WeakMap, Ym = new WeakMap, tb = new WeakMap, eb = new WeakMap;
                class wb {
                    constructor(t) {
                        let {
                            transportId: e,
                            tagId: n,
                            collectorBaseUrl: r,
                            databaseSuffix: o,
                            swTransport: s = new Tb,
                            enabled: a = !0,
                            attributes: c = {},
                            aggregateSpans: l = !1
                        } = t;
                        nb.set(this, void 0), rb.set(this, void 0), ob.set(this, void 0), ib.set(this, void 0), sb.set(this, void 0), ab.set(this, void 0), cb.set(this, void 0), lb.set(this, void 0), i(this, nb, e), i(this, rb, s), i(this, lb, a), i(this, ob, c), i(this, ib, n), i(this, sb, r), i(this, ab, o), i(this, cb, l)
                    }
                    getTransportId() {
                        return o(this, nb, "f")
                    }
                    requiresConnectivity() {
                        return !1
                    }
                    isTracingEnabled() {
                        return o(this, lb, "f")
                    }
                    enableTracing() {
                        i(this, lb, !0)
                    }
                    disableTracing() {
                        i(this, lb, !1)
                    }
                    hasWriteBuffer() {
                        return !1
                    }
                    write(t) {
                        return o(this, rb, "f").send("Span", t), Promise.resolve()
                    }
                    writeAll(t) {
                        for (const e of t) o(this, rb, "f").send("Span", e);
                        return Promise.resolve()
                    }
                    flush() {
                        return o(this, rb, "f").send("Flush", {
                            kind: "Spans"
                        }), Promise.resolve()
                    }
                    initialize() {
                        o(this, rb, "f").send("SpansInitialization", {
                            databaseSuffix: o(this, ab, "f"),
                            resourceAttributes: o(this, ob, "f"),
                            collectorBaseUrl: o(this, sb, "f"),
                            apiKey: o(this, ib, "f"),
                            aggregateSpans: o(this, cb, "f")
                        })
                    }
                }
                nb = new WeakMap, rb = new WeakMap, ob = new WeakMap, ib = new WeakMap, sb = new WeakMap, ab = new WeakMap, cb = new WeakMap, lb = new WeakMap;
                class Eb {
                    constructor(t) {
                        let {
                            databaseNameSuffix: n,
                            logTransports: r,
                            traceTransports: o,
                            baseLogAttributes: s = {},
                            baseSpanAttributes: a = {},
                            staticSpanAttributes: c = [],
                            isOnline: l,
                            aggregateSpans: u,
                            transportManager: h = new as({
                                databaseNameSuffix: n,
                                logTransports: r,
                                traceTransports: o,
                                isOnline: l,
                                aggregateSpans: u
                            }),
                            tracerInstance: p,
                            loggerInstance: f
                        } = t;
                        ub.add(this), hb.set(this, void 0), pb.set(this, void 0), fb.set(this, void 0), db.set(this, void 0), gb.set(this, void 0), yb.set(this, void 0), vb.set(this, void 0), _b.set(this, void 0), i(this, hb, h), i(this, pb, p), i(this, fb, f), i(this, db, (() => e.FeaturesManager.isEnabled(e.FeatureKeys.WriteLogsOnConsoles))), i(this, gb, s), i(this, yb, a), i(this, vb, c), i(this, _b, n)
                    }
                    init() {
                        return r(this, void 0, void 0, (function*() {
                            yield this.getLogger(), this.getTracer()
                        }))
                    }
                    getLogger() {
                        return r(this, void 0, void 0, (function*() {
                            return o(this, fb, "f") || i(this, fb, yield Fg.build({
                                transportManager: o(this, hb, "f"),
                                baseAttributes: o(this, gb, "f")
                            })), o(this, fb, "f")
                        }))
                    }
                    getTracer() {
                        return o(this, pb, "f") || i(this, pb, new mm({
                            transportManager: o(this, hb, "f"),
                            baseAttributes: o(this, yb, "f"),
                            staticAttributes: o(this, vb, "f")
                        })), o(this, pb, "f")
                    }
                    useNativeLoggerTransport(t) {
                        return r(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                plugin: n,
                                logTypeBaseline: r
                            } = t;
                            return function*() {
                                (yield e.getLogger()).addTransport(new Om({
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
                                httpClient: s
                            } = t;
                            return function*() {
                                (yield e.getLogger()).addTransport(new Wm({
                                    transportId: "otel-logger-transport",
                                    resourceAttributes: n,
                                    logTypeBaseline: r,
                                    logsCollectorBaseUrl: o,
                                    tagId: i,
                                    httpClient: s
                                }))
                            }()
                        }))
                    }
                    useConsoleLoggerTransport(t) {
                        return r(this, void 0, void 0, (function*() {
                            (yield this.getLogger()).addTransport(new Tm({
                                transportId: "console-transport",
                                logTypeBaseline: t,
                                shouldWriteLogsOnConsoles: o(this, db, "f")
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
                            aggregateSpans: a = !1
                        } = t;
                        const c = this.getTracer(),
                            l = new wb({
                                transportId: "sw-tracer-transport",
                                attributes: e,
                                enabled: n,
                                tagId: i,
                                collectorBaseUrl: r,
                                databaseSuffix: o(this, _b, "f"),
                                swTransport: s,
                                aggregateSpans: a
                            });
                        l.initialize(), c.addTransport(l)
                    }
                    useOpenTelemetryTracerTransport(t) {
                        let {
                            resourceAttributes: e,
                            enabled: n = !0,
                            collectorBaseUrl: r,
                            tagId: o,
                            httpClient: i
                        } = t;
                        const s = this.getTracer(),
                            a = new Qm({
                                transportId: "otel-tracer-transport",
                                resourceAttributes: e,
                                enabled: n,
                                tagId: o,
                                tracesCollectorBaseUrl: r,
                                httpClient: i
                            });
                        s.addTransport(a)
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
                        o(this, hb, "f").setAllLogTypeBaselines(t)
                    }
                    setTracerStatus(t) {
                        this.getTracer().setStatus(t)
                    }
                    setTagId(t) {
                        o(this, hb, "f").setTagId(t)
                    }
                    setAggregateSpansStatus(t) {
                        o(this, hb, "f").setAggregateSpansStatus(t)
                    }
                    setResourceAttributes(t) {
                        o(this, hb, "f").setResourceAttributes(t)
                    }
                    setSchedulerTimerInterval(t) {
                        o(this, hb, "f").setSchedulerTimerInterval(t)
                    }
                    flushInstrumentationData() {
                        return r(this, void 0, void 0, (function*() {
                            yield Promise.all([o(this, hb, "f").flushLogs(), o(this, hb, "f").flushSpans()])
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
                                failSpan: c = !0,
                                attributes: l
                            } = t;
                            return function*() {
                                if (c) {
                                    const t = e.getTracer().getActiveSpan();
                                    null == t || t.fail()
                                }(yield e.getLogger()).error({
                                    category: n,
                                    message: r,
                                    error: i,
                                    errorCode: s,
                                    visibility: a,
                                    span: o(e, ub, "m", mb).call(e),
                                    attributes: l
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
                                    span: o(e, ub, "m", mb).call(e),
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
                                    span: o(e, ub, "m", mb).call(e),
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
                                    span: o(e, ub, "m", mb).call(e),
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
                            yield o(this, hb, "f").flushLogs()
                        }))
                    }
                    flushSpans() {
                        return r(this, void 0, void 0, (function*() {
                            yield o(this, hb, "f").flushSpans()
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
                }
                t.InstrumentationFactory = Eb, hb = new WeakMap, pb = new WeakMap, fb = new WeakMap, db = new WeakMap, gb = new WeakMap, yb = new WeakMap, vb = new WeakMap, _b = new WeakMap, ub = new WeakSet, mb = function() {
                        const t = this.getTracer().getActiveSpan();
                        return t ? X_(t) : void 0
                    },
                    function(t) {
                        t[t.Internal = 0] = "Internal", t[t.Client = 2] = "Client"
                    }(bb || (t.SpanKind = bb = {})), t.Version = "3.1.0"
            }(t, A(), O)
    }(I),
    function(t) {
        t.Log = "Log", t.LogsInitialization = "LogsInitialization", t.Span = "Span", t.SpansInitialization = "SpansInitialization", t.Flush = "Flush"
    }(k || (k = {}));
    const L = {};
    var R, j, N;

    function x(t) {
        return L[t]
    }

    function M(t, e) {
        const n = e();
        L[t] = n
    }! function(t) {
        t.InstrumentationFactory = "InstrumentationFactory"
    }(R || (R = {}));
    class D {
        constructor({
            spans: t = [],
            instrumentationConfig: e
        }) {
            j.set(this, void 0), N.set(this, void 0), r(this, j, t, "f"), r(this, N, e, "f")
        }
        processClientMessage(t) {
            return e(this, arguments, void 0, (function*({
                payload: t,
                instrumentationFactory: e = x(R.InstrumentationFactory),
                startSpanInstrumentation: n = t => this.startSpanInstrumentation({
                    payload: t
                }),
                processSpan: r = t => this.processSpan({
                    span: t
                })
            }) {
                t.kind === k.SpansInitialization ? yield n(t.data): t.kind === k.Span ? yield r(t.data): t.kind === k.Flush && (yield null == e ? void 0 : e.flushSpans())
            }))
        }
        processSpan(t) {
            return e(this, arguments, void 0, (function*({
                span: t,
                instrumentationFactory: e = x(R.InstrumentationFactory)
            }) {
                e ? yield e.span(t): n(this, j, "f").push(t)
            }))
        }
        startSpanInstrumentation(t) {
            return e(this, void 0, void 0, (function*() {
                var e, {
                    payload: o,
                    fetchInstance: i = (null === (e = globalThis.fetch) || void 0 === e ? void 0 : e.bind(globalThis)),
                    factoryConfig: s = n(this, N, "f"),
                    createFactoryInstance: a = t => new I.InstrumentationFactory({
                        databaseNameSuffix: t.databaseSuffix,
                        aggregateSpans: t.aggregateSpans
                    }),
                    updateFactoryConfig: c = t => {
                        r(this, N, t, "f")
                    },
                    setFactoryInstance: l = M,
                    setTransport: u = (t, e, n) => this.setTracerTransport(t, e, n),
                    processSpanFunction: h = (t, e) => null == t ? void 0 : t.span(e)
                } = t;
                if (JSON.stringify(o) !== JSON.stringify(s)) {
                    const t = a(o);
                    l(R.InstrumentationFactory, (() => t)), u(t, o, i), c(o);
                    for (const e of n(this, j, "f")) yield h(t, e);
                    n(this, j, "f").length = 0
                }
            }))
        }
        setTracerTransport(t, e, n) {
            t.useOpenTelemetryTracerTransport({
                resourceAttributes: e.resourceAttributes,
                collectorBaseUrl: e.collectorBaseUrl,
                tagId: e.apiKey,
                enabled: !0,
                httpClient: new O.FetchHttpClient({
                    baseUrl: e.collectorBaseUrl,
                    headers: e.apiKey ? {
                        "api-key": e.apiKey,
                        "tag-id": e.apiKey
                    } : {},
                    fetchClient: n
                })
            })
        }
    }
    j = new WeakMap, N = new WeakMap;
    const U = ({
            event: t,
            logger: e,
            traceHandler: n,
            tracerWrapper: r
        }) => {
            try {
                t.waitUntil(n({
                    event: t,
                    logger: e,
                    tracerWrapper: r
                }))
            } catch (t) {
                e.error("Error handling Traces module message", t)
            }
        },
        W = t => e(void 0, [t], void 0, (function*({
            event: t,
            logger: e,
            tracerWrapper: n
        }) {
            yield null == n ? void 0 : n.processClientMessage({
                payload: t.data
            })
        }));
    t.Version = "0.7.4", t.startInstrumentationModule = ({
        workerScope: t,
        logger: e = new l({
            workerScope: t
        }),
        messageHandler: n = U,
        tracerWrapper: r = new D({})
    }) => {
        t.addEventListener("message", (t => {
            n({
                event: t,
                logger: e,
                traceHandler: W,
                tracerWrapper: r
            })
        }))
    }, t.startServiceWorker = ({
        workerScope: t,
        cacheStorage: e,
        appName: n,
        versionToken: r,
        appUrls: o,
        appUrlMappings: i
    }) => {
        const s = new w({
            workerScope: t,
            cacheStorage: e,
            appName: n,
            versionToken: r,
            appUrls: o,
            appUrlMappings: i
        });
        t.addEventListener("install", (t => {
            s.install(t)
        })), t.addEventListener("fetch", (t => {
            s.fetch(t)
        })), t.addEventListener("activate", (t => {
            s.activate(t)
        }))
    }
}));