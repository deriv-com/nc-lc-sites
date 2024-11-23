var p = Object.create;
var g = Object.defineProperty,
    q = Object.defineProperties,
    r = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyDescriptors,
    t = Object.getOwnPropertyNames,
    h = Object.getOwnPropertySymbols,
    u = Object.getPrototypeOf,
    k = Object.prototype.hasOwnProperty,
    m = Object.prototype.propertyIsEnumerable;
var l = (a, b, c) => b in a ? g(a, b, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: c
    }) : a[b] = c,
    w = (a, b) => {
        for (var c in b || (b = {})) k.call(b, c) && l(a, c, b[c]);
        if (h)
            for (var c of h(b)) m.call(b, c) && l(a, c, b[c]);
        return a
    },
    x = (a, b) => q(a, s(b)),
    y = (a, b) => g(a, "name", {
        value: b,
        configurable: !0
    }),
    z = (a => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(a, {
        get: (b, c) => (typeof require != "undefined" ? require : b)[c]
    }) : a)(function(a) {
        if (typeof require != "undefined") return require.apply(this, arguments);
        throw Error('Dynamic require of "' + a + '" is not supported')
    });
var A = (a, b) => {
    var c = {};
    for (var d in a) k.call(a, d) && b.indexOf(d) < 0 && (c[d] = a[d]);
    if (a != null && h)
        for (var d of h(a)) b.indexOf(d) < 0 && m.call(a, d) && (c[d] = a[d]);
    return c
};
var B = (a, b) => () => (b || a((b = {
        exports: {}
    }).exports, b), b.exports),
    C = (a, b) => {
        for (var c in b) g(a, c, {
            get: b[c],
            enumerable: !0
        })
    },
    v = (a, b, c, d) => {
        if (b && typeof b == "object" || typeof b == "function")
            for (let e of t(b)) !k.call(a, e) && e !== c && g(a, e, {
                get: () => b[e],
                enumerable: !(d = r(b, e)) || d.enumerable
            });
        return a
    };
var D = (a, b, c) => (c = a != null ? p(u(a)) : {}, v(b || !a || !a.__esModule ? g(c, "default", {
    value: a,
    enumerable: !0
}) : c, a));
var E = (a, b, c) => new Promise((d, e) => {
    var n = f => {
            try {
                i(c.next(f))
            } catch (j) {
                e(j)
            }
        },
        o = f => {
            try {
                i(c.throw(f))
            } catch (j) {
                e(j)
            }
        },
        i = f => f.done ? d(f.value) : Promise.resolve(f.value).then(n, o);
    i((c = c.apply(a, b)).next())
});
export {
    w as a, x as b, y as c, z as d, A as e, B as f, C as g, D as h, E as i
};