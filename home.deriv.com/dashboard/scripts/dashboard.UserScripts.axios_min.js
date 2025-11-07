(function(k, $) {
    typeof exports == "object" && typeof module < "u" ? module.exports = $() : typeof define == "function" && define.amd ? define($) : (k = typeof globalThis < "u" ? globalThis : k || self, k.axiosCacheInterceptorSimple = $())
})(this, (function() {
    "use strict";

    function k(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    const {
        toString: $
    } = Object.prototype, {
        getPrototypeOf: de
    } = Object, {
        iterator: Y,
        toStringTag: xe
    } = Symbol, Z = (e => t => {
        const r = $.call(t);
        return e[r] || (e[r] = r.slice(8, -1).toLowerCase())
    })(Object.create(null)), x = e => (e = e.toLowerCase(), t => Z(t) === e), Q = e => t => typeof t === e, {
        isArray: B
    } = Array, J = Q("undefined");

    function z(e) {
        return e !== null && !J(e) && e.constructor !== null && !J(e.constructor) && C(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    }
    const Le = x("ArrayBuffer");

    function _t(e) {
        let t;
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Le(e.buffer), t
    }
    const Nt = Q("string"),
        C = Q("function"),
        De = Q("number"),
        V = e => e !== null && typeof e == "object",
        xt = e => e === !0 || e === !1,
        ee = e => {
            if (Z(e) !== "object") return !1;
            const t = de(e);
            return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(xe in e) && !(Y in e)
        },
        Lt = e => {
            if (!V(e) || z(e)) return !1;
            try {
                return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype
            } catch {
                return !1
            }
        },
        Dt = x("Date"),
        Pt = x("File"),
        It = x("Blob"),
        Ut = x("FileList"),
        Ft = e => V(e) && C(e.pipe),
        jt = e => {
            let t;
            return e && (typeof FormData == "function" && e instanceof FormData || C(e.append) && ((t = Z(e)) === "formdata" || t === "object" && C(e.toString) && e.toString() === "[object FormData]"))
        },
        vt = x("URLSearchParams"),
        [kt, Bt, qt, Mt] = ["ReadableStream", "Request", "Response", "Headers"].map(x),
        Ht = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

    function W(e, t, {
        allOwnKeys: r = !1
    } = {}) {
        if (e === null || typeof e > "u") return;
        let n, s;
        if (typeof e != "object" && (e = [e]), B(e))
            for (n = 0, s = e.length; n < s; n++) t.call(null, e[n], n, e);
        else {
            if (z(e)) return;
            const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
                o = a.length;
            let i;
            for (n = 0; n < o; n++) i = a[n], t.call(null, e[i], i, e)
        }
    }

    function Pe(e, t) {
        if (z(e)) return null;
        t = t.toLowerCase();
        const r = Object.keys(e);
        let n = r.length,
            s;
        for (; n-- > 0;)
            if (s = r[n], t === s.toLowerCase()) return s;
        return null
    }
    const U = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
        Ie = e => !J(e) && e !== U;

    function fe() {
        const {
            caseless: e
        } = Ie(this) && this || {}, t = {}, r = (n, s) => {
            const a = e && Pe(t, s) || s;
            ee(t[a]) && ee(n) ? t[a] = fe(t[a], n) : ee(n) ? t[a] = fe({}, n) : B(n) ? t[a] = n.slice() : t[a] = n
        };
        for (let n = 0, s = arguments.length; n < s; n++) arguments[n] && W(arguments[n], r);
        return t
    }
    const $t = (e, t, r, {
            allOwnKeys: n
        } = {}) => (W(t, (s, a) => {
            r && C(s) ? e[a] = k(s, r) : e[a] = s
        }, {
            allOwnKeys: n
        }), e),
        Jt = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
        zt = (e, t, r, n) => {
            e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                value: t.prototype
            }), r && Object.assign(e.prototype, r)
        },
        Vt = (e, t, r, n) => {
            let s, a, o;
            const i = {};
            if (t = t || {}, e == null) return t;
            do {
                for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0;) o = s[a], (!n || n(o, e, t)) && !i[o] && (t[o] = e[o], i[o] = !0);
                e = r !== !1 && de(e)
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t
        },
        Wt = (e, t, r) => {
            e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
            const n = e.indexOf(t, r);
            return n !== -1 && n === r
        },
        Kt = e => {
            if (!e) return null;
            if (B(e)) return e;
            let t = e.length;
            if (!De(t)) return null;
            const r = new Array(t);
            for (; t-- > 0;) r[t] = e[t];
            return r
        },
        Xt = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && de(Uint8Array)),
        Gt = (e, t) => {
            const n = (e && e[Y]).call(e);
            let s;
            for (;
                (s = n.next()) && !s.done;) {
                const a = s.value;
                t.call(e, a[0], a[1])
            }
        },
        Yt = (e, t) => {
            let r;
            const n = [];
            for (;
                (r = e.exec(t)) !== null;) n.push(r);
            return n
        },
        Zt = x("HTMLFormElement"),
        Qt = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, s) {
            return n.toUpperCase() + s
        }),
        Ue = (({
            hasOwnProperty: e
        }) => (t, r) => e.call(t, r))(Object.prototype),
        er = x("RegExp"),
        Fe = (e, t) => {
            const r = Object.getOwnPropertyDescriptors(e),
                n = {};
            W(r, (s, a) => {
                let o;
                (o = t(s, a, e)) !== !1 && (n[a] = o || s)
            }), Object.defineProperties(e, n)
        },
        tr = e => {
            Fe(e, (t, r) => {
                if (C(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1;
                const n = e[r];
                if (C(n)) {
                    if (t.enumerable = !1, "writable" in t) {
                        t.writable = !1;
                        return
                    }
                    t.set || (t.set = () => {
                        throw Error("Can not rewrite read-only method '" + r + "'")
                    })
                }
            })
        },
        rr = (e, t) => {
            const r = {},
                n = s => {
                    s.forEach(a => {
                        r[a] = !0
                    })
                };
            return B(e) ? n(e) : n(String(e).split(t)), r
        },
        nr = () => {},
        sr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;

    function or(e) {
        return !!(e && C(e.append) && e[xe] === "FormData" && e[Y])
    }
    const ar = e => {
            const t = new Array(10),
                r = (n, s) => {
                    if (V(n)) {
                        if (t.indexOf(n) >= 0) return;
                        if (z(n)) return n;
                        if (!("toJSON" in n)) {
                            t[s] = n;
                            const a = B(n) ? [] : {};
                            return W(n, (o, i) => {
                                const d = r(o, s + 1);
                                !J(d) && (a[i] = d)
                            }), t[s] = void 0, a
                        }
                    }
                    return n
                };
            return r(e, 0)
        },
        ir = x("AsyncFunction"),
        cr = e => e && (V(e) || C(e)) && C(e.then) && C(e.catch),
        je = ((e, t) => e ? setImmediate : t ? ((r, n) => (U.addEventListener("message", ({
            source: s,
            data: a
        }) => {
            s === U && a === r && n.length && n.shift()()
        }, !1), s => {
            n.push(s), U.postMessage(r, "*")
        }))(`axios@${Math.random()}`, []) : r => setTimeout(r))(typeof setImmediate == "function", C(U.postMessage)),
        ur = typeof queueMicrotask < "u" ? queueMicrotask.bind(U) : typeof process < "u" && process.nextTick || je,
        c = {
            isArray: B,
            isArrayBuffer: Le,
            isBuffer: z,
            isFormData: jt,
            isArrayBufferView: _t,
            isString: Nt,
            isNumber: De,
            isBoolean: xt,
            isObject: V,
            isPlainObject: ee,
            isEmptyObject: Lt,
            isReadableStream: kt,
            isRequest: Bt,
            isResponse: qt,
            isHeaders: Mt,
            isUndefined: J,
            isDate: Dt,
            isFile: Pt,
            isBlob: It,
            isRegExp: er,
            isFunction: C,
            isStream: Ft,
            isURLSearchParams: vt,
            isTypedArray: Xt,
            isFileList: Ut,
            forEach: W,
            merge: fe,
            extend: $t,
            trim: Ht,
            stripBOM: Jt,
            inherits: zt,
            toFlatObject: Vt,
            kindOf: Z,
            kindOfTest: x,
            endsWith: Wt,
            toArray: Kt,
            forEachEntry: Gt,
            matchAll: Yt,
            isHTMLForm: Zt,
            hasOwnProperty: Ue,
            hasOwnProp: Ue,
            reduceDescriptors: Fe,
            freezeMethods: tr,
            toObjectSet: rr,
            toCamelCase: Qt,
            noop: nr,
            toFiniteNumber: sr,
            findKey: Pe,
            global: U,
            isContextDefined: Ie,
            isSpecCompliantForm: or,
            toJSONObject: ar,
            isAsyncFn: ir,
            isThenable: cr,
            setImmediate: je,
            asap: ur,
            isIterable: e => e != null && C(e[Y])
        };

    function E(e, t, r, n, s) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null)
    }
    c.inherits(E, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: c.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    const ve = E.prototype,
        ke = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
        ke[e] = {
            value: e
        }
    }), Object.defineProperties(E, ke), Object.defineProperty(ve, "isAxiosError", {
        value: !0
    }), E.from = (e, t, r, n, s, a) => {
        const o = Object.create(ve);
        return c.toFlatObject(e, o, function(d) {
            return d !== Error.prototype
        }, i => i !== "isAxiosError"), E.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, a && Object.assign(o, a), o
    };
    const lr = null;

    function he(e) {
        return c.isPlainObject(e) || c.isArray(e)
    }

    function Be(e) {
        return c.endsWith(e, "[]") ? e.slice(0, -2) : e
    }

    function qe(e, t, r) {
        return e ? e.concat(t).map(function(s, a) {
            return s = Be(s), !r && a ? "[" + s + "]" : s
        }).join(r ? "." : "") : t
    }

    function dr(e) {
        return c.isArray(e) && !e.some(he)
    }
    const fr = c.toFlatObject(c, {}, null, function(t) {
        return /^is[A-Z]/.test(t)
    });

    function te(e, t, r) {
        if (!c.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData, r = c.toFlatObject(r, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(m, y) {
            return !c.isUndefined(y[m])
        });
        const n = r.metaTokens,
            s = r.visitor || l,
            a = r.dots,
            o = r.indexes,
            d = (r.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
        if (!c.isFunction(s)) throw new TypeError("visitor must be a function");

        function u(f) {
            if (f === null) return "";
            if (c.isDate(f)) return f.toISOString();
            if (c.isBoolean(f)) return f.toString();
            if (!d && c.isBlob(f)) throw new E("Blob is not supported. Use a Buffer instead.");
            return c.isArrayBuffer(f) || c.isTypedArray(f) ? d && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f
        }

        function l(f, m, y) {
            let R = f;
            if (f && !y && typeof f == "object") {
                if (c.endsWith(m, "{}")) m = n ? m : m.slice(0, -2), f = JSON.stringify(f);
                else if (c.isArray(f) && dr(f) || (c.isFileList(f) || c.endsWith(m, "[]")) && (R = c.toArray(f))) return m = Be(m), R.forEach(function(b, N) {
                    !(c.isUndefined(b) || b === null) && t.append(o === !0 ? qe([m], N, a) : o === null ? m : m + "[]", u(b))
                }), !1
            }
            return he(f) ? !0 : (t.append(qe(y, m, a), u(f)), !1)
        }
        const h = [],
            p = Object.assign(fr, {
                defaultVisitor: l,
                convertValue: u,
                isVisitable: he
            });

        function w(f, m) {
            if (!c.isUndefined(f)) {
                if (h.indexOf(f) !== -1) throw Error("Circular reference detected in " + m.join("."));
                h.push(f), c.forEach(f, function(R, S) {
                    (!(c.isUndefined(R) || R === null) && s.call(t, R, c.isString(S) ? S.trim() : S, m, p)) === !0 && w(R, m ? m.concat(S) : [S])
                }), h.pop()
            }
        }
        if (!c.isObject(e)) throw new TypeError("data must be an object");
        return w(e), t
    }

    function Me(e) {
        const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
            return t[n]
        })
    }

    function pe(e, t) {
        this._pairs = [], e && te(e, this, t)
    }
    const He = pe.prototype;
    He.append = function(t, r) {
        this._pairs.push([t, r])
    }, He.toString = function(t) {
        const r = t ? function(n) {
            return t.call(this, n, Me)
        } : Me;
        return this._pairs.map(function(s) {
            return r(s[0]) + "=" + r(s[1])
        }, "").join("&")
    };

    function hr(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    function $e(e, t, r) {
        if (!t) return e;
        const n = r && r.encode || hr;
        c.isFunction(r) && (r = {
            serialize: r
        });
        const s = r && r.serialize;
        let a;
        if (s ? a = s(t, r) : a = c.isURLSearchParams(t) ? t.toString() : new pe(t, r).toString(n), a) {
            const o = e.indexOf("#");
            o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a
        }
        return e
    }
    class Je {
        constructor() {
            this.handlers = []
        }
        use(t, r, n) {
            return this.handlers.push({
                fulfilled: t,
                rejected: r,
                synchronous: n ? n.synchronous : !1,
                runWhen: n ? n.runWhen : null
            }), this.handlers.length - 1
        }
        eject(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }
        clear() {
            this.handlers && (this.handlers = [])
        }
        forEach(t) {
            c.forEach(this.handlers, function(n) {
                n !== null && t(n)
            })
        }
    }
    const ze = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        pr = {
            isBrowser: !0,
            classes: {
                URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : pe,
                FormData: typeof FormData < "u" ? FormData : null,
                Blob: typeof Blob < "u" ? Blob : null
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        },
        me = typeof window < "u" && typeof document < "u",
        ye = typeof navigator == "object" && navigator || void 0,
        mr = me && (!ye || ["ReactNative", "NativeScript", "NS"].indexOf(ye.product) < 0),
        yr = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
        Er = me && window.location.href || "http://localhost",
        O = {
            ...Object.freeze(Object.defineProperty({
                __proto__: null,
                hasBrowserEnv: me,
                hasStandardBrowserEnv: mr,
                hasStandardBrowserWebWorkerEnv: yr,
                navigator: ye,
                origin: Er
            }, Symbol.toStringTag, {
                value: "Module"
            })),
            ...pr
        };

    function wr(e, t) {
        return te(e, new O.classes.URLSearchParams, {
            visitor: function(r, n, s, a) {
                return O.isNode && c.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments)
            },
            ...t
        })
    }

    function Rr(e) {
        return c.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
    }

    function br(e) {
        const t = {},
            r = Object.keys(e);
        let n;
        const s = r.length;
        let a;
        for (n = 0; n < s; n++) a = r[n], t[a] = e[a];
        return t
    }

    function Ve(e) {
        function t(r, n, s, a) {
            let o = r[a++];
            if (o === "__proto__") return !0;
            const i = Number.isFinite(+o),
                d = a >= r.length;
            return o = !o && c.isArray(s) ? s.length : o, d ? (c.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !i) : ((!s[o] || !c.isObject(s[o])) && (s[o] = []), t(r, n, s[o], a) && c.isArray(s[o]) && (s[o] = br(s[o])), !i)
        }
        if (c.isFormData(e) && c.isFunction(e.entries)) {
            const r = {};
            return c.forEachEntry(e, (n, s) => {
                t(Rr(n), s, r, 0)
            }), r
        }
        return null
    }

    function Sr(e, t, r) {
        if (c.isString(e)) try {
            return (t || JSON.parse)(e), c.trim(e)
        } catch (n) {
            if (n.name !== "SyntaxError") throw n
        }
        return (r || JSON.stringify)(e)
    }
    const K = {
        transitional: ze,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function(t, r) {
            const n = r.getContentType() || "",
                s = n.indexOf("application/json") > -1,
                a = c.isObject(t);
            if (a && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t)) return s ? JSON.stringify(Ve(t)) : t;
            if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t)) return t;
            if (c.isArrayBufferView(t)) return t.buffer;
            if (c.isURLSearchParams(t)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
            let i;
            if (a) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1) return wr(t, this.formSerializer).toString();
                if ((i = c.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
                    const d = this.env && this.env.FormData;
                    return te(i ? {
                        "files[]": t
                    } : t, d && new d, this.formSerializer)
                }
            }
            return a || s ? (r.setContentType("application/json", !1), Sr(t)) : t
        }],
        transformResponse: [function(t) {
            const r = this.transitional || K.transitional,
                n = r && r.forcedJSONParsing,
                s = this.responseType === "json";
            if (c.isResponse(t) || c.isReadableStream(t)) return t;
            if (t && c.isString(t) && (n && !this.responseType || s)) {
                const o = !(r && r.silentJSONParsing) && s;
                try {
                    return JSON.parse(t)
                } catch (i) {
                    if (o) throw i.name === "SyntaxError" ? E.from(i, E.ERR_BAD_RESPONSE, this, null, this.response) : i
                }
            }
            return t
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: O.classes.FormData,
            Blob: O.classes.Blob
        },
        validateStatus: function(t) {
            return t >= 200 && t < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    c.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
        K.headers[e] = {}
    });
    const gr = c.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
        Tr = e => {
            const t = {};
            let r, n, s;
            return e && e.split(`
`).forEach(function(o) {
                s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && gr[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n)
            }), t
        },
        We = Symbol("internals");

    function X(e) {
        return e && String(e).trim().toLowerCase()
    }

    function re(e) {
        return e === !1 || e == null ? e : c.isArray(e) ? e.map(re) : String(e)
    }

    function Ar(e) {
        const t = Object.create(null),
            r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let n;
        for (; n = r.exec(e);) t[n[1]] = n[2];
        return t
    }
    const Or = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

    function Ee(e, t, r, n, s) {
        if (c.isFunction(n)) return n.call(this, t, r);
        if (s && (t = r), !!c.isString(t)) {
            if (c.isString(n)) return t.indexOf(n) !== -1;
            if (c.isRegExp(n)) return n.test(t)
        }
    }

    function Cr(e) {
        return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n)
    }

    function _r(e, t) {
        const r = c.toCamelCase(" " + t);
        ["get", "set", "has"].forEach(n => {
            Object.defineProperty(e, n + r, {
                value: function(s, a, o) {
                    return this[n].call(this, t, s, a, o)
                },
                configurable: !0
            })
        })
    }
    let _ = class {
        constructor(t) {
            t && this.set(t)
        }
        set(t, r, n) {
            const s = this;

            function a(i, d, u) {
                const l = X(d);
                if (!l) throw new Error("header name must be a non-empty string");
                const h = c.findKey(s, l);
                (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || d] = re(i))
            }
            const o = (i, d) => c.forEach(i, (u, l) => a(u, l, d));
            if (c.isPlainObject(t) || t instanceof this.constructor) o(t, r);
            else if (c.isString(t) && (t = t.trim()) && !Or(t)) o(Tr(t), r);
            else if (c.isObject(t) && c.isIterable(t)) {
                let i = {},
                    d, u;
                for (const l of t) {
                    if (!c.isArray(l)) throw TypeError("Object iterator must return a key-value pair");
                    i[u = l[0]] = (d = i[u]) ? c.isArray(d) ? [...d, l[1]] : [d, l[1]] : l[1]
                }
                o(i, r)
            } else t != null && a(r, t, n);
            return this
        }
        get(t, r) {
            if (t = X(t), t) {
                const n = c.findKey(this, t);
                if (n) {
                    const s = this[n];
                    if (!r) return s;
                    if (r === !0) return Ar(s);
                    if (c.isFunction(r)) return r.call(this, s, n);
                    if (c.isRegExp(r)) return r.exec(s);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(t, r) {
            if (t = X(t), t) {
                const n = c.findKey(this, t);
                return !!(n && this[n] !== void 0 && (!r || Ee(this, this[n], n, r)))
            }
            return !1
        }
        delete(t, r) {
            const n = this;
            let s = !1;

            function a(o) {
                if (o = X(o), o) {
                    const i = c.findKey(n, o);
                    i && (!r || Ee(n, n[i], i, r)) && (delete n[i], s = !0)
                }
            }
            return c.isArray(t) ? t.forEach(a) : a(t), s
        }
        clear(t) {
            const r = Object.keys(this);
            let n = r.length,
                s = !1;
            for (; n--;) {
                const a = r[n];
                (!t || Ee(this, this[a], a, t, !0)) && (delete this[a], s = !0)
            }
            return s
        }
        normalize(t) {
            const r = this,
                n = {};
            return c.forEach(this, (s, a) => {
                const o = c.findKey(n, a);
                if (o) {
                    r[o] = re(s), delete r[a];
                    return
                }
                const i = t ? Cr(a) : String(a).trim();
                i !== a && delete r[a], r[i] = re(s), n[i] = !0
            }), this
        }
        concat(...t) {
            return this.constructor.concat(this, ...t)
        }
        toJSON(t) {
            const r = Object.create(null);
            return c.forEach(this, (n, s) => {
                n != null && n !== !1 && (r[s] = t && c.isArray(n) ? n.join(", ") : n)
            }), r
        } [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`)
        }
        getSetCookie() {
            return this.get("set-cookie") || []
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(t) {
            return t instanceof this ? t : new this(t)
        }
        static concat(t, ...r) {
            const n = new this(t);
            return r.forEach(s => n.set(s)), n
        }
        static accessor(t) {
            const n = (this[We] = this[We] = {
                    accessors: {}
                }).accessors,
                s = this.prototype;

            function a(o) {
                const i = X(o);
                n[i] || (_r(s, o), n[i] = !0)
            }
            return c.isArray(t) ? t.forEach(a) : a(t), this
        }
    };
    _.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), c.reduceDescriptors(_.prototype, ({
        value: e
    }, t) => {
        let r = t[0].toUpperCase() + t.slice(1);
        return {
            get: () => e,
            set(n) {
                this[r] = n
            }
        }
    }), c.freezeMethods(_);

    function we(e, t) {
        const r = this || K,
            n = t || r,
            s = _.from(n.headers);
        let a = n.data;
        return c.forEach(e, function(i) {
            a = i.call(r, a, s.normalize(), t ? t.status : void 0)
        }), s.normalize(), a
    }

    function Ke(e) {
        return !!(e && e.__CANCEL__)
    }

    function q(e, t, r) {
        E.call(this, e ?? "canceled", E.ERR_CANCELED, t, r), this.name = "CanceledError"
    }
    c.inherits(q, E, {
        __CANCEL__: !0
    });

    function Xe(e, t, r) {
        const n = r.config.validateStatus;
        !r.status || !n || n(r.status) ? e(r) : t(new E("Request failed with status code " + r.status, [E.ERR_BAD_REQUEST, E.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
    }

    function Nr(e) {
        const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return t && t[1] || ""
    }

    function xr(e, t) {
        e = e || 10;
        const r = new Array(e),
            n = new Array(e);
        let s = 0,
            a = 0,
            o;
        return t = t !== void 0 ? t : 1e3,
            function(d) {
                const u = Date.now(),
                    l = n[a];
                o || (o = u), r[s] = d, n[s] = u;
                let h = a,
                    p = 0;
                for (; h !== s;) p += r[h++], h = h % e;
                if (s = (s + 1) % e, s === a && (a = (a + 1) % e), u - o < t) return;
                const w = l && u - l;
                return w ? Math.round(p * 1e3 / w) : void 0
            }
    }

    function Lr(e, t) {
        let r = 0,
            n = 1e3 / t,
            s, a;
        const o = (u, l = Date.now()) => {
            r = l, s = null, a && (clearTimeout(a), a = null), e(...u)
        };
        return [(...u) => {
            const l = Date.now(),
                h = l - r;
            h >= n ? o(u, l) : (s = u, a || (a = setTimeout(() => {
                a = null, o(s)
            }, n - h)))
        }, () => s && o(s)]
    }
    const ne = (e, t, r = 3) => {
            let n = 0;
            const s = xr(50, 250);
            return Lr(a => {
                const o = a.loaded,
                    i = a.lengthComputable ? a.total : void 0,
                    d = o - n,
                    u = s(d),
                    l = o <= i;
                n = o;
                const h = {
                    loaded: o,
                    total: i,
                    progress: i ? o / i : void 0,
                    bytes: d,
                    rate: u || void 0,
                    estimated: u && i && l ? (i - o) / u : void 0,
                    event: a,
                    lengthComputable: i != null,
                    [t ? "download" : "upload"]: !0
                };
                e(h)
            }, r)
        },
        Ge = (e, t) => {
            const r = e != null;
            return [n => t[0]({
                lengthComputable: r,
                total: e,
                loaded: n
            }), t[1]]
        },
        Ye = e => (...t) => c.asap(() => e(...t)),
        Dr = O.hasStandardBrowserEnv ? ((e, t) => r => (r = new URL(r, O.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(new URL(O.origin), O.navigator && /(msie|trident)/i.test(O.navigator.userAgent)) : () => !0,
        Pr = O.hasStandardBrowserEnv ? {
            write(e, t, r, n, s, a) {
                const o = [e + "=" + encodeURIComponent(t)];
                c.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), c.isString(n) && o.push("path=" + n), c.isString(s) && o.push("domain=" + s), a === !0 && o.push("secure"), document.cookie = o.join("; ")
            },
            read(e) {
                const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read() {
                return null
            },
            remove() {}
        };

    function Ir(e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    }

    function Ur(e, t) {
        return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
    }

    function Ze(e, t, r) {
        let n = !Ir(t);
        return e && (n || r == !1) ? Ur(e, t) : t
    }
    const Qe = e => e instanceof _ ? {
        ...e
    } : e;

    function F(e, t) {
        t = t || {};
        const r = {};

        function n(u, l, h, p) {
            return c.isPlainObject(u) && c.isPlainObject(l) ? c.merge.call({
                caseless: p
            }, u, l) : c.isPlainObject(l) ? c.merge({}, l) : c.isArray(l) ? l.slice() : l
        }

        function s(u, l, h, p) {
            if (c.isUndefined(l)) {
                if (!c.isUndefined(u)) return n(void 0, u, h, p)
            } else return n(u, l, h, p)
        }

        function a(u, l) {
            if (!c.isUndefined(l)) return n(void 0, l)
        }

        function o(u, l) {
            if (c.isUndefined(l)) {
                if (!c.isUndefined(u)) return n(void 0, u)
            } else return n(void 0, l)
        }

        function i(u, l, h) {
            if (h in t) return n(u, l);
            if (h in e) return n(void 0, u)
        }
        const d = {
            url: a,
            method: a,
            data: a,
            baseURL: o,
            transformRequest: o,
            transformResponse: o,
            paramsSerializer: o,
            timeout: o,
            timeoutMessage: o,
            withCredentials: o,
            withXSRFToken: o,
            adapter: o,
            responseType: o,
            xsrfCookieName: o,
            xsrfHeaderName: o,
            onUploadProgress: o,
            onDownloadProgress: o,
            decompress: o,
            maxContentLength: o,
            maxBodyLength: o,
            beforeRedirect: o,
            transport: o,
            httpAgent: o,
            httpsAgent: o,
            cancelToken: o,
            socketPath: o,
            responseEncoding: o,
            validateStatus: i,
            headers: (u, l, h) => s(Qe(u), Qe(l), h, !0)
        };
        return c.forEach(Object.keys({
            ...e,
            ...t
        }), function(l) {
            const h = d[l] || s,
                p = h(e[l], t[l], l);
            c.isUndefined(p) && h !== i || (r[l] = p)
        }), r
    }
    const et = e => {
            const t = F({}, e);
            let {
                data: r,
                withXSRFToken: n,
                xsrfHeaderName: s,
                xsrfCookieName: a,
                headers: o,
                auth: i
            } = t;
            t.headers = o = _.from(o), t.url = $e(Ze(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), i && o.set("Authorization", "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : "")));
            let d;
            if (c.isFormData(r)) {
                if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
                else if ((d = o.getContentType()) !== !1) {
                    const [u, ...l] = d ? d.split(";").map(h => h.trim()).filter(Boolean) : [];
                    o.setContentType([u || "multipart/form-data", ...l].join("; "))
                }
            }
            if (O.hasStandardBrowserEnv && (n && c.isFunction(n) && (n = n(t)), n || n !== !1 && Dr(t.url))) {
                const u = s && a && Pr.read(a);
                u && o.set(s, u)
            }
            return t
        },
        Fr = typeof XMLHttpRequest < "u" && function(e) {
            return new Promise(function(r, n) {
                const s = et(e);
                let a = s.data;
                const o = _.from(s.headers).normalize();
                let {
                    responseType: i,
                    onUploadProgress: d,
                    onDownloadProgress: u
                } = s, l, h, p, w, f;

                function m() {
                    w && w(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l)
                }
                let y = new XMLHttpRequest;
                y.open(s.method.toUpperCase(), s.url, !0), y.timeout = s.timeout;

                function R() {
                    if (!y) return;
                    const b = _.from("getAllResponseHeaders" in y && y.getAllResponseHeaders()),
                        T = {
                            data: !i || i === "text" || i === "json" ? y.responseText : y.response,
                            status: y.status,
                            statusText: y.statusText,
                            headers: b,
                            config: e,
                            request: y
                        };
                    Xe(function(v) {
                        r(v), m()
                    }, function(v) {
                        n(v), m()
                    }, T), y = null
                }
                "onloadend" in y ? y.onloadend = R : y.onreadystatechange = function() {
                    !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(R)
                }, y.onabort = function() {
                    y && (n(new E("Request aborted", E.ECONNABORTED, e, y)), y = null)
                }, y.onerror = function() {
                    n(new E("Network Error", E.ERR_NETWORK, e, y)), y = null
                }, y.ontimeout = function() {
                    let N = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
                    const T = s.transitional || ze;
                    s.timeoutErrorMessage && (N = s.timeoutErrorMessage), n(new E(N, T.clarifyTimeoutError ? E.ETIMEDOUT : E.ECONNABORTED, e, y)), y = null
                }, a === void 0 && o.setContentType(null), "setRequestHeader" in y && c.forEach(o.toJSON(), function(N, T) {
                    y.setRequestHeader(T, N)
                }), c.isUndefined(s.withCredentials) || (y.withCredentials = !!s.withCredentials), i && i !== "json" && (y.responseType = s.responseType), u && ([p, f] = ne(u, !0), y.addEventListener("progress", p)), d && y.upload && ([h, w] = ne(d), y.upload.addEventListener("progress", h), y.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (l = b => {
                    y && (n(!b || b.type ? new q(null, e, y) : b), y.abort(), y = null)
                }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
                const S = Nr(s.url);
                if (S && O.protocols.indexOf(S) === -1) {
                    n(new E("Unsupported protocol " + S + ":", E.ERR_BAD_REQUEST, e));
                    return
                }
                y.send(a || null)
            })
        },
        jr = (e, t) => {
            const {
                length: r
            } = e = e ? e.filter(Boolean) : [];
            if (t || r) {
                let n = new AbortController,
                    s;
                const a = function(u) {
                    if (!s) {
                        s = !0, i();
                        const l = u instanceof Error ? u : this.reason;
                        n.abort(l instanceof E ? l : new q(l instanceof Error ? l.message : l))
                    }
                };
                let o = t && setTimeout(() => {
                    o = null, a(new E(`timeout ${t} of ms exceeded`, E.ETIMEDOUT))
                }, t);
                const i = () => {
                    e && (o && clearTimeout(o), o = null, e.forEach(u => {
                        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a)
                    }), e = null)
                };
                e.forEach(u => u.addEventListener("abort", a));
                const {
                    signal: d
                } = n;
                return d.unsubscribe = () => c.asap(i), d
            }
        },
        vr = function*(e, t) {
            let r = e.byteLength;
            if (r < t) {
                yield e;
                return
            }
            let n = 0,
                s;
            for (; n < r;) s = n + t, yield e.slice(n, s), n = s
        },
        kr = async function*(e, t) {
            for await (const r of Br(e)) yield* vr(r, t)
        }, Br = async function*(e) {
            if (e[Symbol.asyncIterator]) {
                yield* e;
                return
            }
            const t = e.getReader();
            try {
                for (;;) {
                    const {
                        done: r,
                        value: n
                    } = await t.read();
                    if (r) break;
                    yield n
                }
            } finally {
                await t.cancel()
            }
        }, tt = (e, t, r, n) => {
            const s = kr(e, t);
            let a = 0,
                o, i = d => {
                    o || (o = !0, n && n(d))
                };
            return new ReadableStream({
                async pull(d) {
                    try {
                        const {
                            done: u,
                            value: l
                        } = await s.next();
                        if (u) {
                            i(), d.close();
                            return
                        }
                        let h = l.byteLength;
                        if (r) {
                            let p = a += h;
                            r(p)
                        }
                        d.enqueue(new Uint8Array(l))
                    } catch (u) {
                        throw i(u), u
                    }
                },
                cancel(d) {
                    return i(d), s.return()
                }
            }, {
                highWaterMark: 2
            })
        }, se = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", rt = se && typeof ReadableStream == "function", qr = se && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer())), nt = (e, ...t) => {
            try {
                return !!e(...t)
            } catch {
                return !1
            }
        }, Mr = rt && nt(() => {
            let e = !1;
            const t = new Request(O.origin, {
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return e = !0, "half"
                }
            }).headers.has("Content-Type");
            return e && !t
        }), st = 64 * 1024, Re = rt && nt(() => c.isReadableStream(new Response("").body)), oe = {
            stream: Re && (e => e.body)
        };
    se && (e => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
            !oe[t] && (oe[t] = c.isFunction(e[t]) ? r => r[t]() : (r, n) => {
                throw new E(`Response type '${t}' is not supported`, E.ERR_NOT_SUPPORT, n)
            })
        })
    })(new Response);
    const Hr = async e => {
        if (e == null) return 0;
        if (c.isBlob(e)) return e.size;
        if (c.isSpecCompliantForm(e)) return (await new Request(O.origin, {
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
        if (c.isArrayBufferView(e) || c.isArrayBuffer(e)) return e.byteLength;
        if (c.isURLSearchParams(e) && (e = e + ""), c.isString(e)) return (await qr(e)).byteLength
    }, $r = async (e, t) => {
        const r = c.toFiniteNumber(e.getContentLength());
        return r ?? Hr(t)
    }, be = {
        http: lr,
        xhr: Fr,
        fetch: se && (async e => {
            let {
                url: t,
                method: r,
                data: n,
                signal: s,
                cancelToken: a,
                timeout: o,
                onDownloadProgress: i,
                onUploadProgress: d,
                responseType: u,
                headers: l,
                withCredentials: h = "same-origin",
                fetchOptions: p
            } = et(e);
            u = u ? (u + "").toLowerCase() : "text";
            let w = jr([s, a && a.toAbortSignal()], o),
                f;
            const m = w && w.unsubscribe && (() => {
                w.unsubscribe()
            });
            let y;
            try {
                if (d && Mr && r !== "get" && r !== "head" && (y = await $r(l, n)) !== 0) {
                    let T = new Request(t, {
                            method: "POST",
                            body: n,
                            duplex: "half"
                        }),
                        I;
                    if (c.isFormData(n) && (I = T.headers.get("content-type")) && l.setContentType(I), T.body) {
                        const [v, le] = Ge(y, ne(Ye(d)));
                        n = tt(T.body, st, v, le)
                    }
                }
                c.isString(h) || (h = h ? "include" : "omit");
                const R = "credentials" in Request.prototype;
                f = new Request(t, {
                    ...p,
                    signal: w,
                    method: r.toUpperCase(),
                    headers: l.normalize().toJSON(),
                    body: n,
                    duplex: "half",
                    credentials: R ? h : void 0
                });
                let S = await fetch(f, p);
                const b = Re && (u === "stream" || u === "response");
                if (Re && (i || b && m)) {
                    const T = {};
                    ["status", "statusText", "headers"].forEach(Ot => {
                        T[Ot] = S[Ot]
                    });
                    const I = c.toFiniteNumber(S.headers.get("content-length")),
                        [v, le] = i && Ge(I, ne(Ye(i), !0)) || [];
                    S = new Response(tt(S.body, st, v, () => {
                        le && le(), m && m()
                    }), T)
                }
                u = u || "text";
                let N = await oe[c.findKey(oe, u) || "text"](S, e);
                return !b && m && m(), await new Promise((T, I) => {
                    Xe(T, I, {
                        data: N,
                        headers: _.from(S.headers),
                        status: S.status,
                        statusText: S.statusText,
                        config: e,
                        request: f
                    })
                })
            } catch (R) {
                throw m && m(), R && R.name === "TypeError" && /Load failed|fetch/i.test(R.message) ? Object.assign(new E("Network Error", E.ERR_NETWORK, e, f), {
                    cause: R.cause || R
                }) : E.from(R, R && R.code, e, f)
            }
        })
    };
    c.forEach(be, (e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    });
    const ot = e => `- ${e}`,
        Jr = e => c.isFunction(e) || e === null || e === !1,
        at = {
            getAdapter: e => {
                e = c.isArray(e) ? e : [e];
                const {
                    length: t
                } = e;
                let r, n;
                const s = {};
                for (let a = 0; a < t; a++) {
                    r = e[a];
                    let o;
                    if (n = r, !Jr(r) && (n = be[(o = String(r)).toLowerCase()], n === void 0)) throw new E(`Unknown adapter '${o}'`);
                    if (n) break;
                    s[o || "#" + a] = n
                }
                if (!n) {
                    const a = Object.entries(s).map(([i, d]) => `adapter ${i} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build"));
                    let o = t ? a.length > 1 ? `since :
` + a.map(ot).join(`
`) : " " + ot(a[0]) : "as no adapter specified";
                    throw new E("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT")
                }
                return n
            },
            adapters: be
        };

    function Se(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new q(null, e)
    }

    function it(e) {
        return Se(e), e.headers = _.from(e.headers), e.data = we.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), at.getAdapter(e.adapter || K.adapter)(e).then(function(n) {
            return Se(e), n.data = we.call(e, e.transformResponse, n), n.headers = _.from(n.headers), n
        }, function(n) {
            return Ke(n) || (Se(e), n && n.response && (n.response.data = we.call(e, e.transformResponse, n.response), n.response.headers = _.from(n.response.headers))), Promise.reject(n)
        })
    }
    const ct = "1.11.0",
        ae = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
        ae[e] = function(n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
        }
    });
    const ut = {};
    ae.transitional = function(t, r, n) {
        function s(a, o) {
            return "[Axios v" + ct + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "")
        }
        return (a, o, i) => {
            if (t === !1) throw new E(s(o, " has been removed" + (r ? " in " + r : "")), E.ERR_DEPRECATED);
            return r && !ut[o] && (ut[o] = !0, console.warn(s(o, " has been deprecated since v" + r + " and will be removed in the near future"))), t ? t(a, o, i) : !0
        }
    }, ae.spelling = function(t) {
        return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0)
    };

    function zr(e, t, r) {
        if (typeof e != "object") throw new E("options must be an object", E.ERR_BAD_OPTION_VALUE);
        const n = Object.keys(e);
        let s = n.length;
        for (; s-- > 0;) {
            const a = n[s],
                o = t[a];
            if (o) {
                const i = e[a],
                    d = i === void 0 || o(i, a, e);
                if (d !== !0) throw new E("option " + a + " must be " + d, E.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (r !== !0) throw new E("Unknown option " + a, E.ERR_BAD_OPTION)
        }
    }
    const ie = {
            assertOptions: zr,
            validators: ae
        },
        L = ie.validators;
    let j = class {
        constructor(t) {
            this.defaults = t || {}, this.interceptors = {
                request: new Je,
                response: new Je
            }
        }
        async request(t, r) {
            try {
                return await this._request(t, r)
            } catch (n) {
                if (n instanceof Error) {
                    let s = {};
                    Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error;
                    const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
                    try {
                        n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a
                    } catch {}
                }
                throw n
            }
        }
        _request(t, r) {
            typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = F(this.defaults, r);
            const {
                transitional: n,
                paramsSerializer: s,
                headers: a
            } = r;
            n !== void 0 && ie.assertOptions(n, {
                silentJSONParsing: L.transitional(L.boolean),
                forcedJSONParsing: L.transitional(L.boolean),
                clarifyTimeoutError: L.transitional(L.boolean)
            }, !1), s != null && (c.isFunction(s) ? r.paramsSerializer = {
                serialize: s
            } : ie.assertOptions(s, {
                encode: L.function,
                serialize: L.function
            }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ie.assertOptions(r, {
                baseUrl: L.spelling("baseURL"),
                withXsrfToken: L.spelling("withXSRFToken")
            }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
            let o = a && c.merge(a.common, a[r.method]);
            a && c.forEach(["delete", "get", "head", "post", "put", "patch", "common"], f => {
                delete a[f]
            }), r.headers = _.concat(o, a);
            const i = [];
            let d = !0;
            this.interceptors.request.forEach(function(m) {
                typeof m.runWhen == "function" && m.runWhen(r) === !1 || (d = d && m.synchronous, i.unshift(m.fulfilled, m.rejected))
            });
            const u = [];
            this.interceptors.response.forEach(function(m) {
                u.push(m.fulfilled, m.rejected)
            });
            let l, h = 0,
                p;
            if (!d) {
                const f = [it.bind(this), void 0];
                for (f.unshift(...i), f.push(...u), p = f.length, l = Promise.resolve(r); h < p;) l = l.then(f[h++], f[h++]);
                return l
            }
            p = i.length;
            let w = r;
            for (h = 0; h < p;) {
                const f = i[h++],
                    m = i[h++];
                try {
                    w = f(w)
                } catch (y) {
                    m.call(this, y);
                    break
                }
            }
            try {
                l = it.call(this, w)
            } catch (f) {
                return Promise.reject(f)
            }
            for (h = 0, p = u.length; h < p;) l = l.then(u[h++], u[h++]);
            return l
        }
        getUri(t) {
            t = F(this.defaults, t);
            const r = Ze(t.baseURL, t.url, t.allowAbsoluteUrls);
            return $e(r, t.params, t.paramsSerializer)
        }
    };
    c.forEach(["delete", "get", "head", "options"], function(t) {
        j.prototype[t] = function(r, n) {
            return this.request(F(n || {}, {
                method: t,
                url: r,
                data: (n || {}).data
            }))
        }
    }), c.forEach(["post", "put", "patch"], function(t) {
        function r(n) {
            return function(a, o, i) {
                return this.request(F(i || {}, {
                    method: t,
                    headers: n ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: a,
                    data: o
                }))
            }
        }
        j.prototype[t] = r(), j.prototype[t + "Form"] = r(!0)
    });
    let Vr = class Ct {
        constructor(t) {
            if (typeof t != "function") throw new TypeError("executor must be a function.");
            let r;
            this.promise = new Promise(function(a) {
                r = a
            });
            const n = this;
            this.promise.then(s => {
                if (!n._listeners) return;
                let a = n._listeners.length;
                for (; a-- > 0;) n._listeners[a](s);
                n._listeners = null
            }), this.promise.then = s => {
                let a;
                const o = new Promise(i => {
                    n.subscribe(i), a = i
                }).then(s);
                return o.cancel = function() {
                    n.unsubscribe(a)
                }, o
            }, t(function(a, o, i) {
                n.reason || (n.reason = new q(a, o, i), r(n.reason))
            })
        }
        throwIfRequested() {
            if (this.reason) throw this.reason
        }
        subscribe(t) {
            if (this.reason) {
                t(this.reason);
                return
            }
            this._listeners ? this._listeners.push(t) : this._listeners = [t]
        }
        unsubscribe(t) {
            if (!this._listeners) return;
            const r = this._listeners.indexOf(t);
            r !== -1 && this._listeners.splice(r, 1)
        }
        toAbortSignal() {
            const t = new AbortController,
                r = n => {
                    t.abort(n)
                };
            return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal
        }
        static source() {
            let t;
            return {
                token: new Ct(function(s) {
                    t = s
                }),
                cancel: t
            }
        }
    };

    function Wr(e) {
        return function(r) {
            return e.apply(null, r)
        }
    }

    function Kr(e) {
        return c.isObject(e) && e.isAxiosError === !0
    }
    const ge = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(ge).forEach(([e, t]) => {
        ge[t] = e
    });

    function lt(e) {
        const t = new j(e),
            r = k(j.prototype.request, t);
        return c.extend(r, j.prototype, t, {
            allOwnKeys: !0
        }), c.extend(r, t, null, {
            allOwnKeys: !0
        }), r.create = function(s) {
            return lt(F(e, s))
        }, r
    }
    const g = lt(K);
    g.Axios = j, g.CanceledError = q, g.CancelToken = Vr, g.isCancel = Ke, g.VERSION = ct, g.toFormData = te, g.AxiosError = E, g.Cancel = g.CanceledError, g.all = function(t) {
        return Promise.all(t)
    }, g.spread = Wr, g.isAxiosError = Kr, g.mergeConfig = F, g.AxiosHeaders = _, g.formToJSON = e => Ve(c.isHTMLForm(e) ? new FormData(e) : e), g.getAdapter = at.getAdapter, g.HttpStatusCode = ge, g.default = g;
    const {
        Axios: vn,
        AxiosError: kn,
        CanceledError: Bn,
        isCancel: qn,
        CancelToken: Mn,
        VERSION: Hn,
        all: $n,
        Cancel: Jn,
        isAxiosError: zn,
        spread: Vn,
        toFormData: Wn,
        AxiosHeaders: Kn,
        HttpStatusCode: Xn,
        formToJSON: Gn,
        getAdapter: Yn,
        mergeConfig: Zn
    } = g;
    var Xr = Symbol("cache-parser");

    function dt(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function M(e) {
        return (typeof e == "string" || typeof e == "number") && (e = Number(e)) >= 0 && e < 1 / 0
    }

    function D(e) {
        return e === !0 || typeof e == "number" || typeof e == "string" && e !== "false"
    }
    var H = Number;

    function ft(e) {
        var t = Object.defineProperty({}, Xr, {
            enumerable: !1,
            value: 1
        });
        if (!e || typeof e != "string") return t;
        var r = (function(u) {
                for (var l, h = {}, p = (function(m, y) {
                        var R = typeof Symbol < "u" && m[Symbol.iterator] || m["@@iterator"];
                        if (R) return (R = R.call(m)).next.bind(R);
                        if (Array.isArray(m) || (R = (function(b, N) {
                                if (b) {
                                    if (typeof b == "string") return dt(b, N);
                                    var T = Object.prototype.toString.call(b).slice(8, -1);
                                    return T === "Object" && b.constructor && (T = b.constructor.name), T === "Map" || T === "Set" ? Array.from(b) : T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T) ? dt(b, N) : void 0
                                }
                            })(m))) {
                            R && (m = R);
                            var S = 0;
                            return function() {
                                return S >= m.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: m[S++]
                                }
                            }
                        }
                        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                    })(u.toLowerCase().replace(/\s+/g, "").split(",")); !(l = p()).done;) {
                    var w, f = l.value.split("=", 2);
                    h[f[0]] = (w = f[1]) == null || w
                }
                return h
            })(e),
            n = r["max-age"],
            s = r["max-stale"],
            a = r["min-fresh"],
            o = r["s-maxage"],
            i = r["stale-if-error"],
            d = r["stale-while-revalidate"];
        return D(r.immutable) && (t.immutable = !0), M(n) && (t.maxAge = H(n)), M(s) && (t.maxStale = H(s)), M(a) && (t.minFresh = H(a)), D(r["must-revalidate"]) && (t.mustRevalidate = !0), D(r["must-understand"]) && (t.mustUnderstand = !0), D(r["no-cache"]) && (t.noCache = !0), D(r["no-store"]) && (t.noStore = !0), D(r["no-transform"]) && (t.noTransform = !0), D(r["only-if-cached"]) && (t.onlyIfCached = !0), D(r.private) && (t.private = !0), D(r["proxy-revalidate"]) && (t.proxyRevalidate = !0), D(r.public) && (t.public = !0), M(o) && (t.sMaxAge = H(o)), M(i) && (t.staleIfError = H(i)), M(d) && (t.staleWhileRevalidate = H(d)), t
    }
    var Gr = Symbol();

    function Yr() {
        var e, t, r = new Promise(function(n, s) {
            e = n, t = s
        });
        return r.resolve = e, r.reject = t, r[Gr] = 1, r
    }

    function Zr(e, t) {
        return e > t ? 1 : -1
    }

    function ce(e, t) {
        var r = 5381;
        if (typeof e == "object" && e !== null && (e.toString === Object.prototype.toString || e.toString === Array.prototype.toString)) {
            t || (t = new WeakSet);
            for (var n = Object.keys(e).sort(Zr), s = 0; s < n.length; s++) {
                var a = n[s],
                    o = e[a];
                if (r = 33 * r ^ ce(a, t), typeof o == "object" && o !== null && (e.toString === Object.prototype.toString || e.toString === Array.prototype.toString)) {
                    if (t.has(o)) continue;
                    t.add(o)
                }
                r = 33 * r ^ ce(o, t)
            }
            return 33 * r ^ ce(e.constructor, t)
        }
        var i = typeof e;
        try {
            e instanceof Date ? i += e.getTime() : i += String(e)
        } catch {
            i += String(Object.assign({}, e))
        }
        for (var d = 0; d < i.length; d++) r = 33 * r ^ i.charCodeAt(d);
        return r
    }
    /*!
     * Axios Cache Interceptor 1.8.2
     * (c) 2021-present Arthur Fiorette & Contributors
     * Released under the MIT License.
     */
    const A = Object.freeze({
            IfModifiedSince: "if-modified-since",
            LastModified: "last-modified",
            IfNoneMatch: "if-none-match",
            CacheControl: "cache-control",
            Pragma: "pragma",
            ETag: "etag",
            Expires: "expires",
            Age: "age",
            XAxiosCacheEtag: "x-axios-cache-etag",
            XAxiosCacheLastModified: "x-axios-cache-last-modified",
            XAxiosCacheStaleIfError: "x-axios-cache-stale-if-error"
        }),
        Qr = (e, t) => {
            if (!e) return "not enough headers";
            const r = e[A.CacheControl];
            if (r) {
                const s = ft(String(r));
                if (s.noCache || s.noStore || t === "server" && s.private) return "dont cache";
                if (s.immutable) return {
                    cache: 1e3 * 60 * 60 * 24 * 365
                };
                if (s.maxAge !== void 0) {
                    const a = e[A.Age];
                    return {
                        cache: a ? (s.maxAge - Number(a)) * 1e3 : s.maxAge * 1e3,
                        stale: s.maxStale !== void 0 ? s.maxStale * 1e3 : s.staleWhileRevalidate !== void 0 ? s.staleWhileRevalidate * 1e3 : void 0
                    }
                }
            }
            const n = e[A.Expires];
            if (n) {
                const s = Date.parse(String(n)) - Date.now();
                return s >= 0 ? {
                    cache: s
                } : "dont cache"
            }
            return "not enough headers"
        };

    function G() {
        return G = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, G.apply(null, arguments)
    }
    async function en(e, t) {
        if (typeof t == "function") return t(e);
        const {
            statusCheck: r,
            responseMatch: n,
            containsHeaders: s
        } = t;
        if (r && !await r(e.status) || n && !await n(e)) return !1;
        if (s)
            for (const [o, i] of Object.entries(s)) {
                var a;
                if (!await i((a = e.headers[o.toLowerCase()]) != null ? a : e.headers[o])) return !1
            }
        return !0
    }

    function ht(e, t) {
        return e instanceof RegExp ? (e.lastIndex = 0, e.test(t)) : t.includes(e)
    }

    function tn(e) {
        return e ? t => e(t) || t === 304 : t => t >= 200 && t < 300 || t === 304
    }

    function Te(e = "get", t = []) {
        return e = e.toLowerCase(), t.some(r => r === e)
    }

    function rn(e, t) {
        t.headers || (t.headers = {});
        const {
            etag: r,
            modifiedSince: n
        } = t.cache;
        if (r) {
            var s;
            const a = r === !0 ? (s = e.data) == null ? void 0 : s.headers[A.ETag] : r;
            a && (t.headers[A.IfNoneMatch] = a)
        }
        n && (t.headers[A.IfModifiedSince] = n === !0 ? e.data.headers[A.LastModified] || new Date(e.createdAt).toUTCString() : n.toUTCString())
    }

    function nn(e, t) {
        return e.status === 304 && t ? (e.cached = !0, e.data = t.data, e.status = t.status, e.statusText = t.statusText, e.headers = G({}, t.headers, e.headers), t) : {
            data: e.data,
            status: e.status,
            statusText: e.statusText,
            headers: e.headers
        }
    }

    function sn(e) {
        const t = async r => {
            if (r.id = e.generateKey(r), r.cache === !1) return r;
            if (r.cache = G({}, e.defaults.cache, r.cache), typeof r.cache.cachePredicate == "object" && r.cache.cachePredicate.ignoreUrls && r.url) {
                for (const m of r.cache.cachePredicate.ignoreUrls)
                    if (ht(m, r.url)) return r
            }
            if (typeof r.cache.cachePredicate == "object" && r.cache.cachePredicate.allowUrls && r.url) {
                let m = !1;
                for (const y of r.cache.cachePredicate.allowUrls)
                    if (ht(y, r.url)) {
                        m = !0;
                        break
                    } if (!m) return r
            }
            if (r.cache.cacheTakeover) {
                var n, s, a, o, i, d, u, l, h;
                (a = (n = r.headers)[s = A.CacheControl]) != null || (n[s] = "no-cache"), (d = (o = r.headers)[i = A.Pragma]) != null || (o[i] = "no-cache"), (h = (u = r.headers)[l = A.Expires]) != null || (u[l] = "0")
            }
            if (!Te(r.method, r.cache.methods)) return r;
            let p = await e.storage.get(r.id, r);
            const w = r.cache.override;
            e: if (p.state === "empty" || p.state === "stale" || p.state === "must-revalidate" || w) {
                if (e.waiting.has(r.id) && !w && (p = await e.storage.get(r.id, r), p.state !== "empty" && p.state !== "must-revalidate")) break e;
                const m = Yr();
                return e.waiting.set(r.id, m), m.catch(() => {}), await e.storage.set(r.id, {
                    state: "loading",
                    previous: w ? p.data ? "stale" : "empty" : p.state,
                    data: p.data,
                    createdAt: w && !p.createdAt ? Date.now() : p.createdAt
                }, r), (p.state === "stale" || p.state === "must-revalidate") && rn(p, r), r.validateStatus = tn(r.validateStatus), (p.state === "stale" || p.data && p.state !== "must-revalidate") && await (r.cache.hydrate == null ? void 0 : r.cache.hydrate(p)), r
            }
            let f;
            if (p.state === "loading") {
                const m = e.waiting.get(r.id);
                if (!m) return p.data && await (r.cache.hydrate == null ? void 0 : r.cache.hydrate(p)), r;
                try {
                    await m;
                    const y = await e.storage.get(r.id, r);
                    if (!y.data) return t(r);
                    f = y.data
                } catch {
                    return p.data && await (r.cache.hydrate == null ? void 0 : r.cache.hydrate(p)), t(r)
                }
            } else f = p.data;
            return r.transformResponse = void 0, r.adapter = function() {
                return Promise.resolve({
                    config: r,
                    data: f.data,
                    headers: f.headers,
                    status: f.status,
                    statusText: f.statusText,
                    cached: !0,
                    stale: p.previous === "stale",
                    id: r.id
                })
            }, r
        };
        return {
            onFulfilled: t
        }
    }
    async function on(e, t, r) {
        if (typeof r == "function") return r(t);
        for (const [n, s] of Object.entries(r)) {
            if (s === "delete") {
                await e.remove(n, t.config);
                continue
            }
            const a = await e.get(n, t.config);
            if (a.state === "loading") continue;
            const o = await s(a, t);
            if (o === "delete") {
                await e.remove(n, t.config);
                continue
            }
            o !== "ignore" && await e.set(n, o, t.config)
        }
    }

    function an(e) {
        const t = async (s, a, o) => {
            o && await e.storage.remove(s, a);
            const i = e.waiting.get(s);
            i && (i.reject(), e.waiting.delete(s))
        };
        return {
            onFulfilled: async s => {
                var a;
                if (!(s != null && s.config)) throw s;
                s.id = s.config.id, (a = s.cached) != null || (s.cached = !1);
                const o = s.config,
                    i = o.cache;
                if (s.cached) return s;
                if (!i) return s.cached = !1, s;
                if (i.update && await on(e.storage, s, i.update), !Te(o.method, i.methods)) return s;
                const d = await e.storage.get(s.id, o);
                if (d.state !== "loading") return s;
                if (!d.data && !await en(s, i.cachePredicate)) return await t(s.id, o, !0), s;
                for (const f of Object.keys(s.headers)) f.startsWith("x-axios-cache") && delete s.headers[f];
                i.etag && i.etag !== !0 && (s.headers[A.XAxiosCacheEtag] = i.etag), i.modifiedSince && (s.headers[A.XAxiosCacheLastModified] = i.modifiedSince === !0 ? "use-cache-timestamp" : i.modifiedSince.toUTCString());
                let u = i.ttl || -1,
                    l;
                if (i.interpretHeader) {
                    const f = e.headerInterpreter(s.headers, e.location);
                    if (f === "dont cache") return await t(s.id, o, !0), s;
                    f !== "not enough headers" && (typeof f == "number" ? u = f : (u = f.cache, l = f.stale))
                }
                const h = nn(s, d.data);
                typeof u == "function" && (u = await u(s)), i.staleIfError && (s.headers[A.XAxiosCacheStaleIfError] = String(u));
                const p = {
                    state: "cached",
                    ttl: u,
                    staleTtl: l,
                    createdAt: Date.now(),
                    data: h
                };
                await e.storage.set(s.id, p, o);
                const w = e.waiting.get(s.id);
                return w && (w.resolve(), e.waiting.delete(s.id)), s
            },
            onRejected: async s => {
                if (!s.isAxiosError || !s.config) throw s;
                const a = s.config,
                    o = a.id,
                    i = a.cache,
                    d = s.response;
                if (!i || !o) throw s;
                if (!Te(a.method, i.methods)) throw await t(o, a, !0), s;
                const u = await e.storage.get(o, a);
                if (u.state !== "loading" || u.previous !== "stale") throw await t(o, a, s.code !== "ERR_CANCELED" || s.code === "ERR_CANCELED" && u.state !== "cached"), s;
                if (i.staleIfError) {
                    const l = String(d?.headers[A.CacheControl]),
                        h = l && ft(l).staleIfError,
                        p = typeof i.staleIfError == "function" ? await i.staleIfError(d, u, s) : i.staleIfError === !0 && h ? h * 1e3 : i.staleIfError;
                    if (p === !0 || typeof p == "number" && u.createdAt + p > Date.now()) {
                        await e.storage.set(o, {
                            state: "stale",
                            createdAt: Date.now(),
                            data: u.data
                        }, a);
                        const w = e.waiting.get(o);
                        return w && (w.resolve(), e.waiting.delete(o)), {
                            cached: !0,
                            stale: !0,
                            config: a,
                            id: o,
                            data: u.data.data,
                            headers: u.data.headers,
                            status: u.data.status,
                            statusText: u.data.statusText
                        }
                    }
                }
                throw await t(o, a, !0), s
            }
        }
    }
    const cn = e => !!e && !!e["is-storage"];

    function pt(e) {
        const t = e.data.headers;
        return A.ETag in t || A.LastModified in t || A.XAxiosCacheEtag in t || A.XAxiosCacheLastModified in t
    }

    function un(e) {
        return String(e.data.headers[A.CacheControl]).includes("must-revalidate")
    }

    function Ae(e) {
        return pt(e) ? !0 : e.state === "cached" && e.staleTtl !== void 0 && Math.abs(Date.now() - (e.createdAt + e.ttl)) <= e.staleTtl
    }

    function ue(e) {
        return e.ttl !== void 0 && e.createdAt + e.ttl <= Date.now()
    }

    function mt({
        set: e,
        find: t,
        remove: r,
        clear: n
    }) {
        return {
            "is-storage": 1,
            set: e,
            remove: r,
            clear: n,
            get: async (s, a) => {
                let o = await t(s, a);
                if (!o) return {
                    state: "empty"
                };
                if (o.state === "empty" || o.state === "loading" || o.state === "must-revalidate") return o;
                if (o.state === "cached") {
                    if (!ue(o)) return o;
                    if (!Ae(o)) return await r(s, a), {
                        state: "empty"
                    };
                    if (o = {
                            state: "stale",
                            createdAt: o.createdAt,
                            data: o.data,
                            ttl: o.staleTtl !== void 0 ? o.staleTtl + o.ttl : void 0
                        }, await e(s, o, a), un(o)) return G({}, o, {
                        state: "must-revalidate"
                    })
                }
                return !ue(o) || pt(o) ? o : (await r(s, a), {
                    state: "empty"
                })
            }
        }
    }
    const yt = typeof structuredClone == "function" ? structuredClone : e => JSON.parse(JSON.stringify(e));

    function ln(e = !1, t = !1, r = !1) {
        const n = mt({
            set: (s, a) => {
                if (r) {
                    let o = Object.keys(n.data);
                    if (o.length >= r)
                        for (n.cleanup(), o = Object.keys(n.data); o.length >= r;) delete n.data[o.shift()]
                }
                n.data[s] = e === "double" ? yt(a) : a
            },
            remove: s => {
                delete n.data[s]
            },
            find: s => {
                const a = n.data[s];
                return e && a !== void 0 ? yt(a) : a
            },
            clear: () => {
                n.data = Object.create(null)
            }
        });
        return n.data = Object.create(null), n.cleanup = () => {
            const s = Object.keys(n.data);
            let a = -1,
                o, i;
            for (; ++a < s.length;) {
                if (i = s[a], o = n.data[i], o.state === "empty") {
                    n.remove(i);
                    continue
                }
                o.state === "cached" && ue(o) && !Ae(o) && n.remove(i)
            }
        }, t && (n.cleaner = setInterval(n.cleanup, t)), n
    }
    const Et = /^\/|\/$/g;

    function dn(e) {
        return t => {
            if (t.id) return t.id;
            const r = e(t);
            return typeof r == "string" || typeof r == "number" ? `${r}` : `${ce(r)}`
        }
    }
    const fn = dn(({
        baseURL: e,
        url: t,
        method: r,
        params: n,
        data: s
    }) => (e !== void 0 ? e = e.replace(Et, "") : e = "", t !== void 0 ? t = t.replace(Et, "") : t = "", r !== void 0 ? r = r.toLowerCase() : r = "get", {
        url: e + (e && t ? "/" : "") + t,
        params: n,
        method: r,
        data: s
    }));

    function hn(e, t = {}) {
        var r, n, s, a, o, i, d, u;
        const l = e;
        if (l.defaults.cache) throw new Error("setupCache() should be called only once");
        if (l.location = typeof window > "u" ? "server" : "client", l.storage = t.storage || ln(), !cn(l.storage)) throw new Error("Use buildStorage() function");
        return l.waiting = t.waiting || new Map, l.generateKey = t.generateKey || fn, l.headerInterpreter = t.headerInterpreter || Qr, l.requestInterceptor = t.requestInterceptor || sn(l), l.responseInterceptor = t.responseInterceptor || an(l), l.debug = t.debug || function() {}, l.defaults.cache = {
            update: t.update || {},
            ttl: (r = t.ttl) != null ? r : 1e3 * 60 * 5,
            methods: t.methods || ["get", "head"],
            cachePredicate: t.cachePredicate || {
                statusCheck: h => [200, 203, 300, 301, 302, 404, 405, 410, 414, 501].includes(h)
            },
            etag: (n = t.etag) != null ? n : !0,
            modifiedSince: (s = t.modifiedSince) != null ? s : t.etag === !1,
            interpretHeader: (a = t.interpretHeader) != null ? a : !0,
            cacheTakeover: (o = t.cacheTakeover) != null ? o : !0,
            staleIfError: (i = t.staleIfError) != null ? i : !0,
            override: (d = t.override) != null ? d : !1,
            hydrate: (u = t.hydrate) != null ? u : void 0
        }, l.interceptors.request.use(l.requestInterceptor.onFulfilled, l.requestInterceptor.onRejected), l.interceptors.response.use(l.responseInterceptor.onFulfilled, l.responseInterceptor.onRejected), l
    }

    function pn(e, t = "axios-cache-") {
        return mt({
            clear: () => {
                for (const r in e) r.startsWith(t) && e.removeItem(r)
            },
            find: r => {
                const n = e.getItem(t + r);
                return n ? JSON.parse(n) : void 0
            },
            remove: r => {
                e.removeItem(t + r)
            },
            set: (r, n) => {
                const s = () => e.setItem(t + r, JSON.stringify(n));
                try {
                    return s()
                } catch {
                    const o = Object.entries(e).filter(i => i[0].startsWith(t)).map(i => [i[0], JSON.parse(i[1])]);
                    for (const i of o) i[1].state === "cached" && ue(i[1]) && !Ae(i[1]) && e.removeItem(i[0]);
                    try {
                        return s()
                    } catch {
                        const d = o.sort((u, l) => (u[1].createdAt || 0) - (l[1].createdAt || 0));
                        for (const u of d) {
                            e.removeItem(u[0]);
                            try {
                                return s()
                            } catch {}
                        }
                    }
                    e.removeItem(t + r)
                }
            }
        })
    }

    function mn(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var Oe, wt;

    function yn() {
        if (wt) return Oe;
        wt = 1;
        const e = new Set(["ENOTFOUND", "ENETUNREACH", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_CRL", "UNABLE_TO_DECRYPT_CERT_SIGNATURE", "UNABLE_TO_DECRYPT_CRL_SIGNATURE", "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY", "CERT_SIGNATURE_FAILURE", "CRL_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CRL_NOT_YET_VALID", "CRL_HAS_EXPIRED", "ERROR_IN_CERT_NOT_BEFORE_FIELD", "ERROR_IN_CERT_NOT_AFTER_FIELD", "ERROR_IN_CRL_LAST_UPDATE_FIELD", "ERROR_IN_CRL_NEXT_UPDATE_FIELD", "OUT_OF_MEM", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_CHAIN_TOO_LONG", "CERT_REVOKED", "INVALID_CA", "PATH_LENGTH_EXCEEDED", "INVALID_PURPOSE", "CERT_UNTRUSTED", "CERT_REJECTED", "HOSTNAME_MISMATCH"]);
        return Oe = t => !e.has(t && t.code), Oe
    }
    var En = yn();
    const wn = mn(En),
        Ce = "axios-retry";

    function Rt(e) {
        const t = ["ERR_CANCELED", "ECONNABORTED"];
        return e.response || !e.code || t.includes(e.code) ? !1 : wn(e)
    }
    const bt = ["get", "head", "options"],
        Rn = bt.concat(["put", "delete"]);

    function _e(e) {
        return e.code !== "ECONNABORTED" && (!e.response || e.response.status === 429 || e.response.status >= 500 && e.response.status <= 599)
    }

    function bn(e) {
        return e.config?.method ? _e(e) && bt.indexOf(e.config.method) !== -1 : !1
    }

    function St(e) {
        return e.config?.method ? _e(e) && Rn.indexOf(e.config.method) !== -1 : !1
    }

    function gt(e) {
        return Rt(e) || St(e)
    }

    function Ne(e = void 0) {
        const t = e?.response?.headers["retry-after"];
        if (!t) return 0;
        let r = (Number(t) || 0) * 1e3;
        return r === 0 && (r = (new Date(t).valueOf() || 0) - Date.now()), Math.max(0, r)
    }

    function Sn(e = 0, t = void 0) {
        return Math.max(0, Ne(t))
    }

    function gn(e = 0, t = void 0, r = 100) {
        const n = 2 ** e * r,
            s = Math.max(n, Ne(t)),
            a = s * .2 * Math.random();
        return s + a
    }

    function Tn(e = 100) {
        return (t = 0, r = void 0) => {
            const n = t * e;
            return Math.max(n, Ne(r))
        }
    }
    const An = {
        retries: 3,
        retryCondition: gt,
        retryDelay: Sn,
        shouldResetTimeout: !1,
        onRetry: () => {},
        onMaxRetryTimesExceeded: () => {},
        validateResponse: null
    };

    function On(e, t) {
        return {
            ...An,
            ...t,
            ...e[Ce]
        }
    }

    function Tt(e, t, r = !1) {
        const n = On(e, t || {});
        return n.retryCount = n.retryCount || 0, (!n.lastRequestTime || r) && (n.lastRequestTime = Date.now()), e[Ce] = n, n
    }

    function Cn(e, t) {
        e.defaults.agent === t.agent && delete t.agent, e.defaults.httpAgent === t.httpAgent && delete t.httpAgent, e.defaults.httpsAgent === t.httpsAgent && delete t.httpsAgent
    }
    async function _n(e, t) {
        const {
            retries: r,
            retryCondition: n
        } = e, s = (e.retryCount || 0) < r && n(t);
        if (typeof s == "object") try {
            return await s !== !1
        } catch {
            return !1
        }
        return s
    }
    async function Nn(e, t, r, n) {
        t.retryCount += 1;
        const {
            retryDelay: s,
            shouldResetTimeout: a,
            onRetry: o
        } = t, i = s(t.retryCount, r);
        if (Cn(e, n), !a && n.timeout && t.lastRequestTime) {
            const d = Date.now() - t.lastRequestTime,
                u = n.timeout - d - i;
            if (u <= 0) return Promise.reject(r);
            n.timeout = u
        }
        return n.transformRequest = [d => d], await o(t.retryCount, r, n), n.signal?.aborted ? Promise.resolve(e(n)) : new Promise(d => {
            const u = () => {
                    clearTimeout(l), d(e(n))
                },
                l = setTimeout(() => {
                    d(e(n)), n.signal?.removeEventListener && n.signal.removeEventListener("abort", u)
                }, i);
            n.signal?.addEventListener && n.signal.addEventListener("abort", u, {
                once: !0
            })
        })
    }
    async function xn(e, t) {
        e.retryCount >= e.retries && await e.onMaxRetryTimesExceeded(t, e.retryCount)
    }
    const P = (e, t) => {
        const r = e.interceptors.request.use(s => (Tt(s, t, !0), s[Ce]?.validateResponse && (s.validateStatus = () => !1), s)),
            n = e.interceptors.response.use(null, async s => {
                const {
                    config: a
                } = s;
                if (!a) return Promise.reject(s);
                const o = Tt(a, t);
                return s.response && o.validateResponse?.(s.response) ? s.response : await _n(o, s) ? Nn(e, o, s, a) : (await xn(o, s), Promise.reject(s))
            });
        return {
            requestInterceptorId: r,
            responseInterceptorId: n
        }
    };
    P.isNetworkError = Rt, P.isSafeRequestError = bn, P.isIdempotentRequestError = St, P.isNetworkOrIdempotentRequestError = gt, P.exponentialDelay = gn, P.linearDelay = Tn, P.isRetryableError = _e;

    function At(e) {
        const t = g.create({
            baseURL: e.baseURL
        });
        e.retries && e.retries > 0 && P(t, {
            retries: e.retries,
            retryDelay: o => P.exponentialDelay(o),
            retryCondition: o => P.isNetworkOrIdempotentRequestError(o) || o.response?.status >= 500
        });
        const n = (() => {
            if (e.storageName) return e.storageName;
            if (e.initials) return `axios-${e.initials}`;
            if (e.baseURL) try {
                const i = new URL(e.baseURL).hostname,
                    d = i.split(".");
                if (d.length >= 2) {
                    const u = d[0] === "www" ? 1 : 0;
                    return `axios-${d.slice(u, u + 2).map(h => h.charAt(0)).join("")}`
                }
                return `axios-${i.substring(0, 2)}`
            } catch {
                return `axios-${e.baseURL.split("").reduce((d, u) => d * 31 + u.charCodeAt(0) & 4294967295, 0).toString(16).substring(0, 4)}`
            }
            return "axios-simple"
        })();
        console.log(`Using simple localStorage with prefix: ${n}:`);
        const s = pn(localStorage, `${n}:`);
        return hn(t, {
            storage: s,
            ttl: e.ttl ?? 1e3 * 60 * 10,
            cacheTakeover: !1
        })
    }
    return window.createConfiguredAxios = At, At
}));



/**
 * Axios initialization
 */

var __isDevEnv = location.host.includes('dev-home') || location.host.includes('staging-home')
window.axios = createConfiguredAxios({
    baseURL: __isDevEnv ? "https://staging-api-core.deriv.com" : "https://api-core.deriv.com",
    storageName: 'dashboard', // prefix for cache storage
    // retries: 2
})

window.axios.interceptors.request.use(
    (config) => {
        const isORYEnabled = globalThis?._getFeatureFlagValueByName("ORY_AUTHENTHICATION") || false;

        const excludeAuthEndpoints = [
            '/lookup',
            '/login',
            '/signup',
            '/password-login',
            '/verify',
            '/countries',
            '/session'
        ]

        // Exclusion logic
        const shouldExclude = excludeAuthEndpoints.some(
            endpoint => config.url.includes(endpoint)
        );

        if (shouldExclude) {
            return config;
        }

        const auth = !!localStorage.getItem(isORYEnabled ? "$OS_Users$dashboard$ClientVars$AuthInfo_ORY" : "$OS_Users$dashboard$ClientVars$AuthInfo")

        if (auth) {
            return config;
        } else {
            if (window.location.href.includes('/dev/flags')) return;

            window.location = '/dashboard/login';
            throw new Error('Redirecting to signup: No auth token found.');
        }

    },
    (error) => Promise.reject(error)
);

window.axios.defaults.withCredentials = true;