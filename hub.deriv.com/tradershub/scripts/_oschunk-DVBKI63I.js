var o = Object.create;
var f = Object.defineProperty,
    p = Object.defineProperties,
    q = Object.getOwnPropertyDescriptor,
    r = Object.getOwnPropertyDescriptors,
    s = Object.getOwnPropertyNames,
    j = Object.getOwnPropertySymbols,
    t = Object.getPrototypeOf,
    l = Object.prototype.hasOwnProperty,
    u = Object.prototype.propertyIsEnumerable;
var k = (b, a, c) => a in b ? f(b, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: c
    }) : b[a] = c,
    w = (b, a) => {
        for (var c in a || (a = {})) l.call(a, c) && k(b, c, a[c]);
        if (j)
            for (var c of j(a)) u.call(a, c) && k(b, c, a[c]);
        return b
    },
    x = (b, a) => p(b, r(a)),
    y = (b, a) => f(b, "name", {
        value: a,
        configurable: !0
    }),
    z = (b => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(b, {
        get: (a, c) => (typeof require != "undefined" ? require : a)[c]
    }) : b)(function(b) {
        if (typeof require != "undefined") return require.apply(this, arguments);
        throw Error('Dynamic require of "' + b + '" is not supported')
    });
var A = (b, a) => () => (a || b((a = {
        exports: {}
    }).exports, a), a.exports),
    B = (b, a) => {
        for (var c in a) f(b, c, {
            get: a[c],
            enumerable: !0
        })
    },
    v = (b, a, c, g) => {
        if (a && typeof a == "object" || typeof a == "function")
            for (let d of s(a)) !l.call(b, d) && d !== c && f(b, d, {
                get: () => a[d],
                enumerable: !(g = q(a, d)) || g.enumerable
            });
        return b
    };
var C = (b, a, c) => (c = b != null ? o(t(b)) : {}, v(a || !b || !b.__esModule ? f(c, "default", {
    value: b,
    enumerable: !0
}) : c, b));
var D = (b, a, c) => new Promise((g, d) => {
    var m = e => {
            try {
                h(c.next(e))
            } catch (i) {
                d(i)
            }
        },
        n = e => {
            try {
                h(c.throw(e))
            } catch (i) {
                d(i)
            }
        },
        h = e => e.done ? g(e.value) : Promise.resolve(e.value).then(m, n);
    h((c = c.apply(b, a)).next())
});
export {
    w as a, x as b, y as c, z as d, A as e, B as f, C as g, D as h
};