(function(e, t) {
    'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports.DocumentUploader = t() : e.DocumentUploader = t()
})(this, function() {
    var e = Math.sqrt,
        t = String.fromCharCode,
        r = Math.LN2,
        n = Math.log,
        o = Math.pow,
        l = Math.abs,
        a = Math.exp,
        s = Math.expm1,
        i = Math.max,
        c = Math.ceil,
        p = Math.floor,
        d = Math.min;
    return function(e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.d = function(e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e['default']
            } : function() {
                return e
            };
            return t.d(r, 'a', r), r
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = '', t(t.s = 100)
    }([function(e, t, r) {
        var n = r(3),
            o = r(20),
            l = r(9),
            a = r(17),
            s = r(14),
            i = 'prototype',
            c = function(e, t, r) {
                var p, d, u, g, h = e & c.F,
                    y = e & c.G,
                    f = e & c.S,
                    m = e & c.P,
                    E = e & c.B,
                    _ = y ? n : f ? n[t] || (n[t] = {}) : (n[t] || {})[i],
                    x = y ? o : o[t] || (o[t] = {}),
                    S = x[i] || (x[i] = {});
                for (p in y && (r = t), r) d = !h && _ && void 0 !== _[p], u = (d ? _ : r)[p], g = E && d ? s(u, n) : m && 'function' == typeof u ? s(Function.call, u) : u, _ && a(_, p, u, e & c.U), x[p] != u && l(x, p, g), m && S[p] != u && (S[p] = u)
            };
        n.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
    }, function(e) {
        e.exports = function(e) {
            return 'object' == typeof e ? null !== e : 'function' == typeof e
        }
    }, function(e, t, r) {
        var n = r(1);
        e.exports = function(e) {
            if (!n(e)) throw TypeError(e + ' is not an object!');
            return e
        }
    }, function(e) {
        var t = e.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this')();
        'number' == typeof __g && (__g = t)
    }, function(e, t, r) {
        var n = r(41)('wks'),
            o = r(22),
            l = r(3).Symbol,
            a = 'function' == typeof l,
            s = e.exports = function(e) {
                return n[e] || (n[e] = a && l[e] || (a ? l : o)('Symbol.' + e))
            };
        s.store = n
    }, function(e) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }, function(e, t, r) {
        var n = r(18);
        e.exports = function(e) {
            return 0 < e ? d(n(e), 9007199254740991) : 0
        }
    }, function(e, t, r) {
        var n = r(2),
            o = r(70),
            l = r(36),
            a = Object.defineProperty;
        t.f = r(8) ? Object.defineProperty : function(e, t, r) {
            if (n(e), t = l(t, !0), n(r), o) try {
                return a(e, t, r)
            } catch (t) {}
            if ('get' in r || 'set' in r) throw TypeError('Accessors not supported!');
            return 'value' in r && (e[t] = r.value), e
        }
    }, function(e, t, r) {
        e.exports = !r(5)(function() {
            return 7 != Object.defineProperty({}, 'a', {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, r) {
        var n = r(7),
            o = r(21);
        e.exports = r(8) ? function(e, t, r) {
            return n.f(e, t, o(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    }, function(e) {
        var t = {}.hasOwnProperty;
        e.exports = function(e, r) {
            return t.call(e, r)
        }
    }, function(e, t, r) {
        var n = r(54),
            o = r(25);
        e.exports = function(e) {
            return n(o(e))
        }
    }, function(e, t, r) {
        var n = r(25);
        e.exports = function(e) {
            return Object(n(e))
        }
    }, function(e, t, r) {
        var n = r(0),
            o = r(20),
            l = r(5);
        e.exports = function(e, t) {
            var r = (o.Object || {})[e] || Object[e],
                a = {};
            a[e] = t(r), n(n.S + n.F * l(function() {
                r(1)
            }), 'Object', a)
        }
    }, function(e, t, r) {
        var n = r(24);
        e.exports = function(e, t, r) {
            return (n(e), void 0 === t) ? e : 1 === r ? function(r) {
                return e.call(t, r)
            } : 2 === r ? function(r, n) {
                return e.call(t, r, n)
            } : 3 === r ? function(r, n, o) {
                return e.call(t, r, n, o)
            } : function() {
                return e.apply(t, arguments)
            }
        }
    }, function(e, t, r) {
        'use strict';
        if (r(8)) {
            var n = r(23),
                o = r(3),
                l = r(5),
                a = r(0),
                s = r(53),
                i = r(71),
                c = r(14),
                d = r(29),
                u = r(21),
                g = r(9),
                h = r(28),
                y = r(18),
                f = r(6),
                m = r(72),
                E = r(31),
                _ = r(36),
                x = r(10),
                S = r(44),
                T = r(1),
                b = r(12),
                P = r(59),
                v = r(38),
                I = r(34),
                A = r(37).f,
                R = r(60),
                O = r(22),
                k = r(4),
                L = r(39),
                F = r(55),
                N = r(42),
                w = r(61),
                M = r(33),
                D = r(45),
                C = r(43),
                j = r(58),
                Y = r(78),
                B = r(7),
                G = r(16),
                U = B.f,
                H = G.f,
                W = o.RangeError,
                V = o.TypeError,
                z = o.Uint8Array,
                $ = 'ArrayBuffer',
                K = 'Shared' + $,
                q = 'BYTES_PER_ELEMENT',
                X = 'prototype',
                Z = Array[X],
                J = i.ArrayBuffer,
                Q = i.DataView,
                ee = L(0),
                te = L(2),
                re = L(3),
                ne = L(4),
                oe = L(5),
                le = L(6),
                ae = F(!0),
                se = F(!1),
                ie = w.values,
                ce = w.keys,
                pe = w.entries,
                de = Z.lastIndexOf,
                ue = Z.reduce,
                ge = Z.reduceRight,
                he = Z.join,
                ye = Z.sort,
                fe = Z.slice,
                me = Z.toString,
                Ee = Z.toLocaleString,
                _e = k('iterator'),
                xe = k('toStringTag'),
                Se = O('typed_constructor'),
                Te = O('def_constructor'),
                be = s.CONSTR,
                Pe = s.TYPED,
                Oe = s.VIEW,
                ve = 'Wrong length!',
                Ie = L(1, function(e, t) {
                    return Fe(N(e, e[Te]), t)
                }),
                Ae = l(function() {
                    return 1 === new z(new Uint16Array([1]).buffer)[0]
                }),
                Re = !!z && !!z[X].set && l(function() {
                    new z(1).set({})
                }),
                ke = function(e, t) {
                    var r = y(e);
                    if (0 > r || r % t) throw W('Wrong offset!');
                    return r
                },
                Le = function(e) {
                    if (T(e) && Pe in e) return e;
                    throw V(e + ' is not a typed array!')
                },
                Fe = function(e, t) {
                    if (!(T(e) && Se in e)) throw V('It is not a typed array constructor!');
                    return new e(t)
                },
                Ne = function(e, t) {
                    return we(N(e, e[Te]), t)
                },
                we = function(e, t) {
                    for (var r = 0, n = t.length, o = Fe(e, n); n > r;) o[r] = t[r++];
                    return o
                },
                Me = function(e, t, r) {
                    U(e, t, {
                        get: function() {
                            return this._d[r]
                        }
                    })
                },
                De = function(e) {
                    var t, r, n, o, l, a, s = b(e),
                        i = arguments.length,
                        p = 1 < i ? arguments[1] : void 0,
                        d = p !== void 0,
                        u = R(s);
                    if (u != void 0 && !P(u)) {
                        for (a = u.call(s), n = [], t = 0; !(l = a.next()).done; t++) n.push(l.value);
                        s = n
                    }
                    for (d && 2 < i && (p = c(p, arguments[2], 2)), t = 0, r = f(s.length), o = Fe(this, r); r > t; t++) o[t] = d ? p(s[t], t) : s[t];
                    return o
                },
                Ce = function() {
                    for (var e = 0, t = arguments.length, r = Fe(this, t); t > e;) r[e] = arguments[e++];
                    return r
                },
                je = !!z && l(function() {
                    Ee.call(new z(1))
                }),
                Ye = function() {
                    return Ee.apply(je ? fe.call(Le(this)) : Le(this), arguments)
                },
                Be = {
                    copyWithin: function(e, t) {
                        return Y.call(Le(this), e, t, 2 < arguments.length ? arguments[2] : void 0)
                    },
                    every: function(e) {
                        return ne(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    fill: function() {
                        return j.apply(Le(this), arguments)
                    },
                    filter: function(e) {
                        return Ne(this, te(Le(this), e, 1 < arguments.length ? arguments[1] : void 0))
                    },
                    find: function(e) {
                        return oe(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    findIndex: function(e) {
                        return le(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    forEach: function(e) {
                        ee(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    indexOf: function(e) {
                        return se(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    includes: function(e) {
                        return ae(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    join: function() {
                        return he.apply(Le(this), arguments)
                    },
                    lastIndexOf: function() {
                        return de.apply(Le(this), arguments)
                    },
                    map: function(e) {
                        return Ie(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    reduce: function() {
                        return ue.apply(Le(this), arguments)
                    },
                    reduceRight: function() {
                        return ge.apply(Le(this), arguments)
                    },
                    reverse: function() {
                        for (var e, t = this, r = Le(t).length, n = p(r / 2), o = 0; o < n;) e = t[o], t[o++] = t[--r], t[r] = e;
                        return t
                    },
                    some: function(e) {
                        return re(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    sort: function(e) {
                        return ye.call(Le(this), e)
                    },
                    subarray: function(e, t) {
                        var r = Le(this),
                            n = r.length,
                            o = E(e, n);
                        return new(N(r, r[Te]))(r.buffer, r.byteOffset + o * r.BYTES_PER_ELEMENT, f((t === void 0 ? n : E(t, n)) - o))
                    }
                },
                Ge = function(e, t) {
                    return Ne(this, fe.call(Le(this), e, t))
                },
                Ue = function(e) {
                    Le(this);
                    var t = ke(arguments[1], 1),
                        r = this.length,
                        n = b(e),
                        o = f(n.length),
                        l = 0;
                    if (o + t > r) throw W(ve);
                    for (; l < o;) this[t + l] = n[l++]
                },
                He = {
                    entries: function() {
                        return pe.call(Le(this))
                    },
                    keys: function() {
                        return ce.call(Le(this))
                    },
                    values: function() {
                        return ie.call(Le(this))
                    }
                },
                We = function(e, t) {
                    return T(e) && e[Pe] && 'symbol' != typeof t && t in e && +t + '' == t + ''
                },
                Ve = function(e, t) {
                    return We(e, t = _(t, !0)) ? u(2, e[t]) : H(e, t)
                },
                ze = function(e, t, r) {
                    return We(e, t = _(t, !0)) && T(r) && x(r, 'value') && !x(r, 'get') && !x(r, 'set') && !r.configurable && (!x(r, 'writable') || r.writable) && (!x(r, 'enumerable') || r.enumerable) ? (e[t] = r.value, e) : U(e, t, r)
                };
            be || (G.f = Ve, B.f = ze), a(a.S + a.F * !be, 'Object', {
                getOwnPropertyDescriptor: Ve,
                defineProperty: ze
            }), l(function() {
                me.call({})
            }) && (me = Ee = function() {
                return he.call(this)
            });
            var $e = h({}, Be);
            h($e, He), g($e, _e, He.values), h($e, {
                slice: Ge,
                set: Ue,
                constructor: function() {},
                toString: me,
                toLocaleString: Ye
            }), Me($e, 'buffer', 'b'), Me($e, 'byteOffset', 'o'), Me($e, 'byteLength', 'l'), Me($e, 'length', 'e'), U($e, xe, {
                get: function() {
                    return this[Pe]
                }
            }), e.exports = function(e, t, r, i) {
                i = !!i;
                var c = e + (i ? 'Clamped' : '') + 'Array',
                    p = o[c],
                    u = p || {},
                    h = p && I(p),
                    y = !p || !s.ABV,
                    E = {},
                    _ = p && p[X],
                    x = function(r, n) {
                        var o = r._d;
                        return o.v['get' + e](n * t + o.o, Ae)
                    },
                    b = function(r, n, o) {
                        var l = r._d;
                        i && (o = 0 > (o = Math.round(o)) ? 0 : 255 < o ? 255 : 255 & o), l.v['set' + e](n * t + l.o, o, Ae)
                    },
                    P = function(e, t) {
                        U(e, t, {
                            get: function() {
                                return x(this, t)
                            },
                            set: function(e) {
                                return b(this, t, e)
                            },
                            enumerable: !0
                        })
                    };
                y ? (p = r(function(e, r, n, o) {
                    d(e, p, c, '_d');
                    var l, a, s, i, u = 0,
                        h = 0;
                    if (!T(r)) s = m(r), a = s * t, l = new J(a);
                    else if (r instanceof J || (i = S(r)) == $ || i == K) {
                        l = r, h = ke(n, t);
                        var y = r.byteLength;
                        if (void 0 === o) {
                            if (y % t) throw W(ve);
                            if (a = y - h, 0 > a) throw W(ve)
                        } else if (a = f(o) * t, a + h > y) throw W(ve);
                        s = a / t
                    } else return Pe in r ? we(p, r) : De.call(p, r);
                    for (g(e, '_d', {
                            b: l,
                            o: h,
                            l: a,
                            e: s,
                            v: new Q(l)
                        }); u < s;) P(e, u++)
                }), _ = p[X] = v($e), g(_, 'constructor', p)) : (!l(function() {
                    p(1)
                }) || !l(function() {
                    new p(-1)
                }) || !D(function(e) {
                    new p, new p(null), new p(1.5), new p(e)
                }, !0)) && (p = r(function(e, r, n, o) {
                    d(e, p, c);
                    var l;
                    return T(r) ? r instanceof J || (l = S(r)) == $ || l == K ? void 0 === o ? void 0 === n ? new u(r) : new u(r, ke(n, t)) : new u(r, ke(n, t), o) : Pe in r ? we(p, r) : De.call(p, r) : new u(m(r))
                }), ee(h === Function.prototype ? A(u) : A(u).concat(A(h)), function(e) {
                    e in p || g(p, e, u[e])
                }), p[X] = _, !n && (_.constructor = p));
                var O = _[_e],
                    R = !!O && ('values' == O.name || O.name == void 0),
                    k = He.values;
                g(p, Se, !0), g(_, Pe, c), g(_, Oe, !0), g(_, Te, p), (i ? new p(1)[xe] != c : !(xe in _)) && U(_, xe, {
                    get: function() {
                        return c
                    }
                }), E[c] = p, a(a.G + a.W + a.F * (p != u), E), a(a.S, c, {
                    BYTES_PER_ELEMENT: t
                }), a(a.S + a.F * l(function() {
                    u.of.call(p, 1)
                }), c, {
                    from: De,
                    of: Ce
                }), q in _ || g(_, q, t), a(a.P, c, Be), C(c), a(a.P + a.F * Re, c, {
                    set: Ue
                }), a(a.P + a.F * !R, c, He), n || _.toString == me || (_.toString = me), a(a.P + a.F * l(function() {
                    new p(1).slice()
                }), c, {
                    slice: Ge
                }), a(a.P + a.F * (l(function() {
                    return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
                }) || !l(function() {
                    _.toLocaleString.call([1, 2])
                })), c, {
                    toLocaleString: Ye
                }), M[c] = R ? O : k, n || R || g(_, _e, k)
            }
        } else e.exports = function() {}
    }, function(e, t, r) {
        var n = r(40),
            o = r(21),
            l = r(11),
            a = r(36),
            s = r(10),
            i = r(70),
            c = Object.getOwnPropertyDescriptor;
        t.f = r(8) ? c : function(e, t) {
            if (e = l(e), t = a(t, !0), i) try {
                return c(e, t)
            } catch (t) {}
            return s(e, t) ? o(!n.f.call(e, t), e[t]) : void 0
        }
    }, function(e, t, r) {
        var n = r(3),
            o = r(9),
            l = r(10),
            a = r(22)('src'),
            s = r(102),
            i = 'toString',
            c = ('' + s).split(i);
        r(20).inspectSource = function(e) {
            return s.call(e)
        }, (e.exports = function(e, t, r, s) {
            var i = 'function' == typeof r;
            i && (l(r, 'name') || o(r, 'name', t));
            e[t] === r || (i && (l(r, a) || o(r, a, e[t] ? '' + e[t] : c.join(t + ''))), e === n ? e[t] = r : s ? e[t] ? e[t] = r : o(e, t, r) : (delete e[t], o(e, t, r)))
        })(Function.prototype, i, function() {
            return 'function' == typeof this && this[a] || s.call(this)
        })
    }, function(e) {
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? p : c)(e)
        }
    }, function(e, t, r) {
        var n = r(22)('meta'),
            o = r(1),
            l = r(10),
            a = r(7).f,
            s = 0,
            i = Object.isExtensible || function() {
                return !0
            },
            c = !r(5)(function() {
                return i(Object.preventExtensions({}))
            }),
            p = function(e) {
                a(e, n, {
                    value: {
                        i: 'O' + ++s,
                        w: {}
                    }
                })
            },
            d = e.exports = {
                KEY: n,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!o(e)) return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e;
                    if (!l(e, n)) {
                        if (!i(e)) return 'F';
                        if (!t) return 'E';
                        p(e)
                    }
                    return e[n].i
                },
                getWeak: function(e, t) {
                    if (!l(e, n)) {
                        if (!i(e)) return !0;
                        if (!t) return !1;
                        p(e)
                    }
                    return e[n].w
                },
                onFreeze: function(e) {
                    return c && d.NEED && i(e) && !l(e, n) && p(e), e
                }
            }
    }, function(e) {
        var t = e.exports = {
            version: '2.6.5'
        };
        'number' == typeof __e && (__e = t)
    }, function(e) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function(e) {
        var t = 0,
            r = Math.random();
        e.exports = function(e) {
            return 'Symbol('.concat(e === void 0 ? '' : e, ')_', (++t + r).toString(36))
        }
    }, function(e) {
        e.exports = !1
    }, function(e) {
        e.exports = function(e) {
            if ('function' != typeof e) throw TypeError(e + ' is not a function!');
            return e
        }
    }, function(e) {
        e.exports = function(e) {
            if (e == void 0) throw TypeError('Can\'t call method on  ' + e);
            return e
        }
    }, function(e, t, r) {
        var n = r(73),
            o = r(57);
        e.exports = Object.keys || function(e) {
            return n(e, o)
        }
    }, function(e, t, r) {
        var n = r(1);
        e.exports = function(e, t) {
            if (!n(e) || e._t !== t) throw TypeError('Incompatible receiver, ' + t + ' required!');
            return e
        }
    }, function(e, t, r) {
        var n = r(17);
        e.exports = function(e, t, r) {
            for (var o in t) n(e, o, t[o], r);
            return e
        }
    }, function(e) {
        e.exports = function(e, t, r, n) {
            if (!(e instanceof t) || n !== void 0 && n in e) throw TypeError(r + ': incorrect invocation!');
            return e
        }
    }, function(e) {
        var t = {}.toString;
        e.exports = function(e) {
            return t.call(e).slice(8, -1)
        }
    }, function(e, t, r) {
        var n = r(18);
        e.exports = function(e, t) {
            return e = n(e), 0 > e ? i(e + t, 0) : d(e, t)
        }
    }, function(e, t, r) {
        var n = r(7).f,
            o = r(10),
            l = r(4)('toStringTag');
        e.exports = function(e, t, r) {
            e && !o(e = r ? e : e.prototype, l) && n(e, l, {
                configurable: !0,
                value: t
            })
        }
    }, function(e) {
        e.exports = {}
    }, function(e, t, r) {
        var n = r(10),
            o = r(12),
            l = r(56)('IE_PROTO'),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = o(e), n(e, l) ? e[l] : 'function' == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    }, function(e, t, r) {
        var n = r(4)('unscopables'),
            o = Array.prototype;
        o[n] == void 0 && r(9)(o, n, {}), e.exports = function(e) {
            o[n][e] = !0
        }
    }, function(e, t, r) {
        var n = r(1);
        e.exports = function(e, t) {
            if (!n(e)) return e;
            var r, o;
            if (t && 'function' == typeof(r = e.toString) && !n(o = r.call(e))) return o;
            if ('function' == typeof(r = e.valueOf) && !n(o = r.call(e))) return o;
            if (!t && 'function' == typeof(r = e.toString) && !n(o = r.call(e))) return o;
            throw TypeError('Can\'t convert object to primitive value')
        }
    }, function(e, t, r) {
        var n = r(73),
            o = r(57).concat('length', 'prototype');
        t.f = Object.getOwnPropertyNames || function(e) {
            return n(e, o)
        }
    }, function(e, t, r) {
        var n = r(2),
            o = r(104),
            l = r(57),
            a = r(56)('IE_PROTO'),
            s = function() {},
            c = 'prototype',
            p = function() {
                var e, t = r(52)('iframe'),
                    n = l.length,
                    o = '<',
                    a = '>';
                for (t.style.display = 'none', r(74).appendChild(t), t.src = 'javascript:', e = t.contentWindow.document, e.open(), e.write(o + 'script' + a + 'document.F=Object' + o + '/script' + a), e.close(), p = e.F; n--;) delete p[c][l[n]];
                return p()
            };
        e.exports = Object.create || function(e, t) {
            var r;
            return null === e ? r = p() : (s[c] = n(e), r = new s, s[c] = null, r[a] = e), void 0 === t ? r : o(r, t)
        }
    }, function(e, t, r) {
        var n = r(14),
            o = r(54),
            l = r(12),
            a = r(6),
            s = r(105);
        e.exports = function(e, t) {
            var r = 1 == e,
                i = 4 == e,
                c = 6 == e,
                p = t || s;
            return function(t, s, d) {
                for (var u, g, h = l(t), y = o(h), m = n(s, d, 3), f = a(y.length), E = 0, _ = r ? p(t, f) : 2 == e ? p(t, 0) : void 0; f > E; E++)
                    if ((5 == e || c || E in y) && (u = y[E], g = m(u, E, h), e))
                        if (r) _[E] = g;
                        else if (g) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return u;
                    case 6:
                        return E;
                    case 2:
                        _.push(u);
                } else if (i) return !1;
                return c ? -1 : 3 == e || i ? i : _
            }
        }
    }, function(e, t) {
        t.f = {}.propertyIsEnumerable
    }, function(e, t, r) {
        var n = r(20),
            o = r(3),
            l = '__core-js_shared__',
            a = o[l] || (o[l] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = t === void 0 ? {} : t)
        })('versions', []).push({
            version: n.version,
            mode: r(23) ? 'pure' : 'global',
            copyright: '\xA9 2019 Denis Pushkarev (zloirock.ru)'
        })
    }, function(e, t, r) {
        var n = r(2),
            o = r(24),
            l = r(4)('species');
        e.exports = function(e, t) {
            var r, a = n(e).constructor;
            return a === void 0 || (r = n(a)[l]) == void 0 ? t : o(r)
        }
    }, function(e, t, r) {
        'use strict';
        var n = r(3),
            o = r(7),
            l = r(8),
            a = r(4)('species');
        e.exports = function(e) {
            var t = n[e];
            l && t && !t[a] && o.f(t, a, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(e, t, r) {
        var n = r(30),
            o = r(4)('toStringTag'),
            l = 'Arguments' == n(function() {
                return arguments
            }()),
            a = function(e, t) {
                try {
                    return e[t]
                } catch (t) {}
            };
        e.exports = function(e) {
            var t, r, s;
            return e === void 0 ? 'Undefined' : null === e ? 'Null' : 'string' == typeof(r = a(t = Object(e), o)) ? r : l ? n(t) : 'Object' == (s = n(t)) && 'function' == typeof t.callee ? 'Arguments' : s
        }
    }, function(e, t, r) {
        var n = r(4)('iterator'),
            o = !1;
        try {
            var l = [7][n]();
            l['return'] = function() {
                o = !0
            }, Array.from(l, function() {
                throw 2
            })
        } catch (t) {}
        e.exports = function(e, t) {
            if (!t && !o) return !1;
            var r = !1;
            try {
                var l = [7],
                    a = l[n]();
                a.next = function() {
                    return {
                        done: r = !0
                    }
                }, l[n] = function() {
                    return a
                }, e(l)
            } catch (t) {}
            return r
        }
    }, function(e, t, r) {
        var n = r(14),
            o = r(80),
            l = r(59),
            a = r(2),
            s = r(6),
            i = r(60),
            c = {},
            p = {},
            t = e.exports = function(e, t, r, d, u) {
                var g, h, y, m, E = u ? function() {
                        return e
                    } : i(e),
                    _ = n(r, d, t ? 2 : 1),
                    f = 0;
                if ('function' != typeof E) throw TypeError(e + ' is not iterable!');
                if (l(E)) {
                    for (g = s(e.length); g > f; f++)
                        if (m = t ? _(a(h = e[f])[0], h[1]) : _(e[f]), m === c || m === p) return m;
                } else
                    for (y = E.call(e); !(h = y.next()).done;)
                        if (m = o(y, _, h.value, t), m === c || m === p) return m
            };
        t.BREAK = c, t.RETURN = p
    }, function(e, t, r) {
        'use strict';
        var n = r(3),
            o = r(0),
            l = r(17),
            a = r(28),
            s = r(19),
            i = r(46),
            c = r(29),
            p = r(1),
            d = r(5),
            u = r(45),
            g = r(32),
            h = r(117);
        e.exports = function(e, t, r, y, f, m) {
            var E = n[e],
                _ = E,
                x = f ? 'set' : 'add',
                S = _ && _.prototype,
                T = {},
                b = function(e) {
                    var t = S[e];
                    l(S, e, 'delete' == e ? function(e) {
                        return m && !p(e) ? !1 : t.call(this, 0 === e ? 0 : e)
                    } : 'has' == e ? function(e) {
                        return m && !p(e) ? !1 : t.call(this, 0 === e ? 0 : e)
                    } : 'get' == e ? function(e) {
                        return m && !p(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                    } : 'add' == e ? function(e) {
                        return t.call(this, 0 === e ? 0 : e), this
                    } : function(e, r) {
                        return t.call(this, 0 === e ? 0 : e, r), this
                    })
                };
            if ('function' != typeof _ || !(m || S.forEach && !d(function() {
                    new _().entries().next()
                }))) _ = y.getConstructor(t, e, f, x), a(_.prototype, r), s.NEED = !0;
            else {
                var P = new _,
                    O = P[x](m ? {} : -0, 1) != P,
                    v = d(function() {
                        P.has(1)
                    }),
                    I = u(function(e) {
                        new _(e)
                    }),
                    A = !m && d(function() {
                        for (var e = new _, t = 5; t--;) e[x](t, t);
                        return !e.has(-0)
                    });
                I || (_ = t(function(t, r) {
                    c(t, _, e);
                    var n = h(new E, t, _);
                    return void 0 != r && i(r, f, n[x], n), n
                }), _.prototype = S, S.constructor = _), (v || A) && (b('delete'), b('has'), f && b('get')), (A || O) && b(x), m && S.clear && delete S.clear
            }
            return g(_, e), T[e] = _, o(o.G + o.W + o.F * (_ != E), T), m || y.setStrong(_, e, f), _
        }
    }, function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function(e, t, r) {
        var n = r(3),
            o = n.navigator;
        e.exports = o && o.userAgent || ''
    }, function(e, t, r) {
        'use strict';
        var n = r(44),
            o = RegExp.prototype.exec;
        e.exports = function(e, t) {
            var r = e.exec;
            if ('function' == typeof r) {
                var l = r.call(e, t);
                if ('object' != typeof l) throw new TypeError('RegExp exec method returned something other than an Object or null');
                return l
            }
            if ('RegExp' !== n(e)) throw new TypeError('RegExp#exec called on incompatible receiver');
            return o.call(e, t)
        }
    }, function(e, t, r) {
        'use strict';
        r(164);
        var n = r(17),
            o = r(9),
            l = r(5),
            a = r(25),
            s = r(4),
            i = r(66),
            c = s('species'),
            p = !l(function() {
                var e = /./;
                return e.exec = function() {
                    var e = [];
                    return e.groups = {
                        a: '7'
                    }, e
                }, '7' !== ''.replace(e, '$<a>')
            }),
            d = function() {
                var e = /(?:)/,
                    t = e.exec;
                e.exec = function() {
                    return t.apply(this, arguments)
                };
                var r = 'ab'.split(e);
                return 2 === r.length && 'a' === r[0] && 'b' === r[1]
            }();
        e.exports = function(e, t, r) {
            var u = s(e),
                g = !l(function() {
                    var t = {};
                    return t[u] = function() {
                        return 7
                    }, 7 != '' [e](t)
                }),
                h = g ? !l(function() {
                    var t = !1,
                        r = /a/;
                    return r.exec = function() {
                        return t = !0, null
                    }, 'split' === e && (r.constructor = {}, r.constructor[c] = function() {
                        return r
                    }), r[u](''), !t
                }) : void 0;
            if (!g || !h || 'replace' === e && !p || 'split' === e && !d) {
                var y = /./ [u],
                    f = r(a, u, '' [e], function(e, t, r, n, o) {
                        return t.exec === i ? g && !o ? {
                            done: !0,
                            value: y.call(t, r, n)
                        } : {
                            done: !0,
                            value: e.call(r, t, n)
                        } : {
                            done: !1
                        }
                    }),
                    m = f[0],
                    E = f[1];
                n(String.prototype, e, m), o(RegExp.prototype, u, 2 == t ? function(e, t) {
                    return E.call(e, this, t)
                } : function(e) {
                    return E.call(e, this)
                })
            }
        }
    }, function(e, t, r) {
        var n = r(1),
            o = r(3).document,
            l = n(o) && n(o.createElement);
        e.exports = function(e) {
            return l ? o.createElement(e) : {}
        }
    }, function(e, t, r) {
        for (var n, o = r(3), l = r(9), a = r(22), s = a('typed_array'), c = a('view'), p = !!(o.ArrayBuffer && o.DataView), d = p, u = 0, i = ['Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array']; u < 9;)(n = o[i[u++]]) ? (l(n.prototype, s, !0), l(n.prototype, c, !0)) : d = !1;
        e.exports = {
            ABV: p,
            CONSTR: d,
            TYPED: s,
            VIEW: c
        }
    }, function(e, t, r) {
        var n = r(30);
        e.exports = Object('z').propertyIsEnumerable(0) ? Object : function(e) {
            return 'String' == n(e) ? e.split('') : Object(e)
        }
    }, function(e, t, r) {
        var n = r(11),
            o = r(6),
            l = r(31);
        e.exports = function(e) {
            return function(t, r, a) {
                var s, i = n(t),
                    c = o(i.length),
                    p = l(a, c);
                if (e && r != r) {
                    for (; c > p;)
                        if (s = i[p++], s != s) return !0;
                } else
                    for (; c > p; p++)
                        if ((e || p in i) && i[p] === r) return e || p || 0;
                return !e && -1
            }
        }
    }, function(e, t, r) {
        var n = r(41)('keys'),
            o = r(22);
        e.exports = function(e) {
            return n[e] || (n[e] = o(e))
        }
    }, function(e) {
        e.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf']
    }, function(e, t, r) {
        'use strict';
        var n = r(12),
            o = r(31),
            l = r(6);
        e.exports = function(e) {
            for (var t = n(this), r = l(t.length), a = arguments.length, s = o(1 < a ? arguments[1] : void 0, r), i = 2 < a ? arguments[2] : void 0, c = void 0 === i ? r : o(i, r); c > s;) t[s++] = e;
            return t
        }
    }, function(e, t, r) {
        var n = r(33),
            o = r(4)('iterator'),
            l = Array.prototype;
        e.exports = function(e) {
            return e !== void 0 && (n.Array === e || l[o] === e)
        }
    }, function(e, t, r) {
        var n = r(44),
            o = r(4)('iterator'),
            l = r(33);
        e.exports = r(20).getIteratorMethod = function(e) {
            if (e != void 0) return e[o] || e['@@iterator'] || l[n(e)]
        }
    }, function(e, t, r) {
        'use strict';
        var n = r(35),
            o = r(76),
            l = r(33),
            a = r(11);
        e.exports = r(77)(Array, 'Array', function(e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }, function() {
            var e = this._t,
                t = this._k,
                r = this._i++;
            return !e || r >= e.length ? (this._t = void 0, o(1)) : 'keys' == t ? o(0, r) : 'values' == t ? o(0, e[r]) : o(0, [r, e[r]])
        }, 'values'), l.Arguments = l.Array, n('keys'), n('values'), n('entries')
    }, function(e, t, r) {
        var n, o, l, a = r(14),
            s = r(84),
            i = r(74),
            c = r(52),
            p = r(3),
            d = p.process,
            u = p.setImmediate,
            g = p.clearImmediate,
            h = p.MessageChannel,
            y = p.Dispatch,
            f = 0,
            m = {},
            E = 'onreadystatechange',
            _ = function() {
                var e = +this;
                if (m.hasOwnProperty(e)) {
                    var t = m[e];
                    delete m[e], t()
                }
            },
            x = function(e) {
                _.call(e.data)
            };
        u && g || (u = function(e) {
            for (var t = [], r = 1; arguments.length > r;) t.push(arguments[r++]);
            return m[++f] = function() {
                s('function' == typeof e ? e : Function(e), t)
            }, n(f), f
        }, g = function(e) {
            delete m[e]
        }, 'process' == r(30)(d) ? n = function(e) {
            d.nextTick(a(_, e, 1))
        } : y && y.now ? n = function(e) {
            y.now(a(_, e, 1))
        } : h ? (o = new h, l = o.port2, o.port1.onmessage = x, n = a(l.postMessage, l, 1)) : p.addEventListener && 'function' == typeof postMessage && !p.importScripts ? (n = function(e) {
            p.postMessage(e + '', '*')
        }, p.addEventListener('message', x, !1)) : E in c('script') ? n = function(e) {
            i.appendChild(c('script'))[E] = function() {
                i.removeChild(this), _.call(e)
            }
        } : n = function(e) {
            setTimeout(a(_, e, 1), 0)
        }), e.exports = {
            set: u,
            clear: g
        }
    }, function(e, t, r) {
        var n = r(92),
            o = r(25);
        e.exports = function(e, t, r) {
            if (n(t)) throw TypeError('String#' + r + ' doesn\'t accept regex!');
            return o(e) + ''
        }
    }, function(e, t, r) {
        var n = r(4)('match');
        e.exports = function(e) {
            var t = /./;
            try {
                '/./' [e](t)
            } catch (r) {
                try {
                    return t[n] = !1, !'/./' [e](t)
                } catch (e) {}
            }
            return !0
        }
    }, function(e, t, r) {
        'use strict';
        var n = r(90)(!0);
        e.exports = function(e, t, r) {
            return t + (r ? n(e, t).length : 1)
        }
    }, function(e, t, r) {
        'use strict';
        var n = r(93),
            o = RegExp.prototype.exec,
            l = String.prototype.replace,
            a = o,
            s = 'lastIndex',
            c = function() {
                var e = /a/,
                    t = /b*/g;
                return o.call(e, 'a'), o.call(t, 'a'), 0 !== e[s] || 0 !== t[s]
            }(),
            p = /()??/.exec('')[1] !== void 0;
        (c || p) && (a = function(e) {
            var t, r, a, d, i = this;
            return p && (r = new RegExp('^' + i.source + '$(?!\\s)', n.call(i))), c && (t = i[s]), a = o.call(i, e), c && a && (i[s] = i.global ? a.index + a[0].length : t), p && a && 1 < a.length && l.call(a[0], r, function() {
                for (d = 1; d < arguments.length - 2; d++) void 0 === arguments[d] && (a[d] = void 0)
            }), a
        }), e.exports = a
    }, function(e, t, r) {
        'use strict';
        var n = r(7),
            o = r(21);
        e.exports = function(e, t, r) {
            t in e ? n.f(e, t, o(0, r)) : e[t] = r
        }
    }, function(e) {
        e.exports = Math.sign || function(e) {
            return 0 == (e = +e) || e != e ? e : 0 > e ? -1 : 1
        }
    }, function(e) {
        var t = s;
        e.exports = !t || 22025.465794806718 < t(10) || 22025.465794806718 > t(10) || -2e-17 != t(-2e-17) ? function(e) {
            return 0 == (e = +e) ? e : -1e-6 < e && 1e-6 > e ? e + e * e / 2 : a(e) - 1
        } : t
    }, function(e, t, r) {
        e.exports = !r(8) && !r(5)(function() {
            return 7 != Object.defineProperty(r(52)('div'), 'a', {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, a) {
        'use strict';

        function s(t, r, n) {
            var o, l, a, c = Array(n),
                p = 8 * n - r - 1,
                d = (1 << p) - 1,
                u = d >> 1,
                g = 23 === r ? z(2, -24) - z(2, -77) : 0,
                h = 0,
                i = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
            for (t = V(t), t != t || t === H ? (l = t == t ? 0 : 1, o = d) : (o = $(K(t) / q), 1 > t * (a = z(2, -o)) && (o--, a *= 2), t += 1 <= o + u ? g / a : g * z(2, 1 - u), 2 <= t * a && (o++, a /= 2), o + u >= d ? (l = 0, o = d) : 1 <= o + u ? (l = (t * a - 1) * z(2, r), o += u) : (l = t * z(2, u - 1) * z(2, r), o = 0)); 8 <= r; c[h++] = 255 & l, l /= 256, r -= 8);
            for (o = o << r | l, p += r; 0 < p; c[h++] = 255 & o, o /= 256, p -= 8);
            return c[--h] |= 128 * i, c
        }

        function i(t, r, n) {
            var o, l = 8 * n - r - 1,
                a = (1 << l) - 1,
                c = a >> 1,
                p = l - 7,
                d = n - 1,
                i = t[d--],
                s = 127 & i;
            for (i >>= 7; 0 < p; s = 256 * s + t[d], d--, p -= 8);
            for (o = s & (1 << -p) - 1, s >>= -p, p += r; 0 < p; o = 256 * o + t[d], d--, p -= 8);
            if (0 === s) s = 1 - c;
            else {
                if (s === a) return o ? NaN : i ? -H : H;
                o += z(2, r), s -= c
            }
            return (i ? -1 : 1) * o * z(2, s - r)
        }

        function c(e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
        }

        function d(e) {
            return [255 & e]
        }

        function u(e) {
            return [255 & e, 255 & e >> 8]
        }

        function g(e) {
            return [255 & e, 255 & e >> 8, 255 & e >> 16, 255 & e >> 24]
        }

        function h(e) {
            return s(e, 52, 8)
        }

        function y(e) {
            return s(e, 23, 4)
        }

        function f(e, t, r) {
            L(e[D], t, {
                get: function() {
                    return this[r]
                }
            })
        }

        function m(e, t, r, n) {
            var o = R(+r);
            if (o + t > e[ee]) throw U(C);
            var l = e[Q]._b,
                a = o + e[te],
                s = l.slice(a, a + t);
            return n ? s : s.reverse()
        }

        function E(e, t, r, n, o, l) {
            var a = R(+r);
            if (a + t > e[ee]) throw U(C);
            for (var s = e[Q]._b, c = a + e[te], p = n(+o), d = 0; d < t; d++) s[c + d] = p[l ? d : t - d - 1]
        }
        var _ = a(3),
            x = a(8),
            S = a(23),
            T = a(53),
            b = a(9),
            P = a(28),
            O = a(5),
            v = a(29),
            I = a(18),
            A = a(6),
            R = a(72),
            k = a(37).f,
            L = a(7).f,
            F = a(58),
            N = a(32),
            w = 'ArrayBuffer',
            M = 'DataView',
            D = 'prototype',
            C = 'Wrong index!',
            Y = _[w],
            B = _[M],
            G = _.Math,
            U = _.RangeError,
            H = _.Infinity,
            W = Y,
            V = l,
            z = o,
            $ = p,
            K = n,
            q = r,
            X = 'buffer',
            Z = 'byteLength',
            J = 'byteOffset',
            Q = x ? '_b' : X,
            ee = x ? '_l' : Z,
            te = x ? '_o' : J;
        if (!T.ABV) Y = function(e) {
            v(this, Y, w);
            var t = R(e);
            this._b = F.call(Array(t), 0), this[ee] = t
        }, B = function(e, t, r) {
            v(this, B, M), v(e, Y, M);
            var n = e[ee],
                o = I(t);
            if (0 > o || o > n) throw U('Wrong offset!');
            if (r = void 0 === r ? n - o : A(r), o + r > n) throw U('Wrong length!');
            this[Q] = e, this[te] = o, this[ee] = r
        }, x && (f(Y, Z, '_l'), f(B, X, '_b'), f(B, Z, '_l'), f(B, J, '_o')), P(B[D], {
            getInt8: function(e) {
                return m(this, 1, e)[0] << 24 >> 24
            },
            getUint8: function(e) {
                return m(this, 1, e)[0]
            },
            getInt16: function(e) {
                var t = m(this, 2, e, arguments[1]);
                return (t[1] << 8 | t[0]) << 16 >> 16
            },
            getUint16: function(e) {
                var t = m(this, 2, e, arguments[1]);
                return t[1] << 8 | t[0]
            },
            getInt32: function(e) {
                return c(m(this, 4, e, arguments[1]))
            },
            getUint32: function(e) {
                return c(m(this, 4, e, arguments[1])) >>> 0
            },
            getFloat32: function(e) {
                return i(m(this, 4, e, arguments[1]), 23, 4)
            },
            getFloat64: function(e) {
                return i(m(this, 8, e, arguments[1]), 52, 8)
            },
            setInt8: function(e, t) {
                E(this, 1, e, d, t)
            },
            setUint8: function(e, t) {
                E(this, 1, e, d, t)
            },
            setInt16: function(e, t) {
                E(this, 2, e, u, t, arguments[2])
            },
            setUint16: function(e, t) {
                E(this, 2, e, u, t, arguments[2])
            },
            setInt32: function(e, t) {
                E(this, 4, e, g, t, arguments[2])
            },
            setUint32: function(e, t) {
                E(this, 4, e, g, t, arguments[2])
            },
            setFloat32: function(e, t) {
                E(this, 4, e, y, t, arguments[2])
            },
            setFloat64: function(e, t) {
                E(this, 8, e, h, t, arguments[2])
            }
        });
        else {
            if (!O(function() {
                    Y(1)
                }) || !O(function() {
                    new Y(-1)
                }) || O(function() {
                    return new Y, new Y(1.5), new Y(NaN), Y.name != w
                })) {
                Y = function(e) {
                    return v(this, Y), new W(R(e))
                };
                for (var re, ne = Y[D] = W[D], oe = k(W), le = 0; oe.length > le;)(re = oe[le++]) in Y || b(Y, re, W[re]);
                S || (ne.constructor = Y)
            }
            var j = new B(new Y(2)),
                ae = B[D].setInt8;
            j.setInt8(0, 2147483648), j.setInt8(1, 2147483649), (j.getInt8(0) || !j.getInt8(1)) && P(B[D], {
                setInt8: function(e, t) {
                    ae.call(this, e, t << 24 >> 24)
                },
                setUint8: function(e, t) {
                    ae.call(this, e, t << 24 >> 24)
                }
            }, !0)
        }
        N(Y, w), N(B, M), b(B[D], T.VIEW, !0), t[w] = Y, t[M] = B
    }, function(e, t, r) {
        var n = r(18),
            o = r(6);
        e.exports = function(e) {
            if (e === void 0) return 0;
            var t = n(e),
                r = o(t);
            if (t !== r) throw RangeError('Wrong length!');
            return r
        }
    }, function(e, t, r) {
        var n = r(10),
            o = r(11),
            l = r(55)(!1),
            a = r(56)('IE_PROTO');
        e.exports = function(e, t) {
            var r, s = o(e),
                c = 0,
                i = [];
            for (r in s) r != a && n(s, r) && i.push(r);
            for (; t.length > c;) n(s, r = t[c++]) && (~l(i, r) || i.push(r));
            return i
        }
    }, function(e, t, r) {
        var n = r(3).document;
        e.exports = n && n.documentElement
    }, function(e, t, r) {
        var n = r(30);
        e.exports = Array.isArray || function(e) {
            return 'Array' == n(e)
        }
    }, function(e) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }, function(e, t, r) {
        'use strict';
        var n = r(23),
            o = r(0),
            l = r(17),
            a = r(9),
            s = r(33),
            i = r(107),
            c = r(32),
            p = r(34),
            d = r(4)('iterator'),
            u = !([].keys && 'next' in [].keys()),
            g = 'keys',
            h = 'values',
            y = function() {
                return this
            };
        e.exports = function(e, t, r, f, m, E, _) {
            i(r, t, f);
            var x, S, T, b = function(e) {
                    return !u && e in I ? I[e] : e === g ? function() {
                        return new r(this, e)
                    } : e === h ? function() {
                        return new r(this, e)
                    } : function() {
                        return new r(this, e)
                    }
                },
                P = t + ' Iterator',
                O = m == h,
                v = !1,
                I = e.prototype,
                A = I[d] || I['@@iterator'] || m && I[m],
                R = A || b(m),
                k = m ? O ? b('entries') : R : void 0,
                L = 'Array' == t ? I.entries || A : A;
            if (L && (T = p(L.call(new e)), T !== Object.prototype && T.next && (c(T, P, !0), !n && 'function' != typeof T[d] && a(T, d, y))), O && A && A.name !== h && (v = !0, R = function() {
                    return A.call(this)
                }), (!n || _) && (u || v || !I[d]) && a(I, d, R), s[t] = R, s[P] = y, m)
                if (x = {
                        values: O ? R : b(h),
                        keys: E ? R : b(g),
                        entries: k
                    }, _)
                    for (S in x) S in I || l(I, S, x[S]);
                else o(o.P + o.F * (u || v), t, x);
            return x
        }
    }, function(e, t, r) {
        'use strict';
        var n = r(12),
            o = r(31),
            l = r(6);
        e.exports = [].copyWithin || function(e, t) {
            var r = n(this),
                a = l(r.length),
                s = o(e, a),
                i = o(t, a),
                c = 2 < arguments.length ? arguments[2] : void 0,
                p = d((c === void 0 ? a : o(c, a)) - i, a - s),
                u = 1;
            for (i < s && s < i + p && (u = -1, i += p - 1, s += p - 1); 0 < p--;) i in r ? r[s] = r[i] : delete r[s], s += u, i += u;
            return r
        }
    }, function(e, t, r) {
        'use strict';
        var n = r(7).f,
            o = r(38),
            l = r(28),
            a = r(14),
            s = r(29),
            i = r(46),
            c = r(77),
            p = r(76),
            d = r(43),
            u = r(8),
            g = r(19).fastKey,
            h = r(27),
            y = u ? '_s' : 'size',
            f = function(e, t) {
                var r, n = g(t);
                if ('F' !== n) return e._i[n];
                for (r = e._f; r; r = r.n)
                    if (r.k == t) return r
            };
        e.exports = {
            getConstructor: function(e, t, r, c) {
                var p = e(function(e, n) {
                    s(e, p, t, '_i'), e._t = t, e._i = o(null), e._f = void 0, e._l = void 0, e[y] = 0, void 0 != n && i(n, r, e[c], e)
                });
                return l(p.prototype, {
                    clear: function() {
                        for (var e = h(this, t), r = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete r[n.i];
                        e._f = e._l = void 0, e[y] = 0
                    },
                    delete: function(e) {
                        var r = h(this, t),
                            n = f(r, e);
                        if (n) {
                            var o = n.n,
                                l = n.p;
                            delete r._i[n.i], n.r = !0, l && (l.n = o), o && (o.p = l), r._f == n && (r._f = o), r._l == n && (r._l = l), r[y]--
                        }
                        return !!n
                    },
                    forEach: function(e) {
                        h(this, t);
                        for (var r, n = a(e, 1 < arguments.length ? arguments[1] : void 0, 3); r = r ? r.n : this._f;)
                            for (n(r.v, r.k, this); r && r.r;) r = r.p
                    },
                    has: function(e) {
                        return !!f(h(this, t), e)
                    }
                }), u && n(p.prototype, 'size', {
                    get: function() {
                        return h(this, t)[y]
                    }
                }), p
            },
            def: function(e, t, r) {
                var n, o, l = f(e, t);
                return l ? l.v = r : (e._l = l = {
                    i: o = g(t, !0),
                    k: t,
                    v: r,
                    p: n = e._l,
                    n: void 0,
                    r: !1
                }, !e._f && (e._f = l), n && (n.n = l), e[y]++, 'F' !== o && (e._i[o] = l)), e
            },
            getEntry: f,
            setStrong: function(e, t, r) {
                c(e, t, function(e, r) {
                    this._t = h(e, t), this._k = r, this._l = void 0
                }, function() {
                    for (var e = this, t = e._k, r = e._l; r && r.r;) r = r.p;
                    return e._t && (e._l = r = r ? r.n : e._t._f) ? 'keys' == t ? p(0, r.k) : 'values' == t ? p(0, r.v) : p(0, [r.k, r.v]) : (e._t = void 0, p(1))
                }, r ? 'entries' : 'values', !r, !0), d(t)
            }
        }
    }, function(e, t, r) {
        var n = r(2);
        e.exports = function(t, e, r, o) {
            try {
                return o ? e(n(r)[0], r[1]) : e(r)
            } catch (r) {
                var l = t['return'];
                throw void 0 !== l && n(l.call(t)), r
            }
        }
    }, function(e, t, r) {
        var n = r(1),
            o = r(2),
            l = function(e, t) {
                if (o(e), !n(t) && null !== t) throw TypeError(t + ': can\'t set as prototype!')
            };
        e.exports = {
            set: Object.setPrototypeOf || ('__proto__' in {} ? function(e, t, n) {
                try {
                    n = r(14)(Function.call, r(16).f(Object.prototype, '__proto__').set, 2), n(e, []), t = !(e instanceof Array)
                } catch (r) {
                    t = !0
                }
                return function(e, r) {
                    return l(e, r), t ? e.__proto__ = r : n(e, r), e
                }
            }({}, !1) : void 0),
            check: l
        }
    }, function(e, t, r) {
        'use strict';
        var n = r(26),
            o = r(48),
            l = r(40),
            a = r(12),
            s = r(54),
            i = Object.assign;
        e.exports = !i || r(5)(function() {
            var e = {},
                t = {},
                r = Symbol(),
                n = 'abcdefghijklmnopqrst';
            return e[r] = 7, n.split('').forEach(function(e) {
                t[e] = e
            }), 7 != i({}, e)[r] || Object.keys(i({}, t)).join('') != n
        }) ? function(e) {
            for (var t = a(e), r = arguments.length, i = 1, c = o.f, p = l.f; r > i;)
                for (var d, u = s(arguments[i++]), g = c ? n(u).concat(c(u)) : n(u), h = g.length, y = 0; h > y;) p.call(u, d = g[y++]) && (t[d] = u[d]);
            return t
        } : i
    }, function(e, t, r) {
        'use strict';
        var n = r(28),
            o = r(19).getWeak,
            l = r(2),
            a = r(1),
            s = r(29),
            i = r(46),
            c = r(39),
            p = r(10),
            d = r(27),
            u = c(5),
            g = c(6),
            h = 0,
            y = function(e) {
                return e._l || (e._l = new f)
            },
            f = function() {
                this.a = []
            },
            m = function(e, t) {
                return u(e.a, function(e) {
                    return e[0] === t
                })
            };
        f.prototype = {
            get: function(e) {
                var t = m(this, e);
                if (t) return t[1]
            },
            has: function(e) {
                return !!m(this, e)
            },
            set: function(e, t) {
                var r = m(this, e);
                r ? r[1] = t : this.a.push([e, t])
            },
            delete: function(e) {
                var t = g(this.a, function(t) {
                    return t[0] === e
                });
                return ~t && this.a.splice(t, 1), !!~t
            }
        }, e.exports = {
            getConstructor: function(e, t, r, l) {
                var c = e(function(e, n) {
                    s(e, c, t, '_i'), e._t = t, e._i = h++, e._l = void 0, void 0 != n && i(n, r, e[l], e)
                });
                return n(c.prototype, {
                    delete: function(e) {
                        if (!a(e)) return !1;
                        var r = o(e);
                        return !0 === r ? y(d(this, t))['delete'](e) : r && p(r, this._i) && delete r[this._i]
                    },
                    has: function(e) {
                        if (!a(e)) return !1;
                        var r = o(e);
                        return !0 === r ? y(d(this, t)).has(e) : r && p(r, this._i)
                    }
                }), c
            },
            def: function(e, t, r) {
                var n = o(l(t), !0);
                return !0 === n ? y(e).set(t, r) : n[e._i] = r, e
            },
            ufstore: y
        }
    }, function(e) {
        e.exports = function(e, t, r) {
            var n = r === void 0;
            switch (t.length) {
                case 0:
                    return n ? e() : e.call(r);
                case 1:
                    return n ? e(t[0]) : e.call(r, t[0]);
                case 2:
                    return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
                case 3:
                    return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
                case 4:
                    return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3]);
            }
            return e.apply(r, t)
        }
    }, function(e, t, r) {
        var n = r(37),
            o = r(48),
            l = r(2),
            a = r(3).Reflect;
        e.exports = a && a.ownKeys || function(e) {
            var t = n.f(l(e)),
                r = o.f;
            return r ? t.concat(r(e)) : t
        }
    }, function(e, t, r) {
        'use strict';

        function n(e) {
            var t, r;
            this.promise = new e(function(e, n) {
                if (t != void 0 || r != void 0) throw TypeError('Bad Promise constructor');
                t = e, r = n
            }), this.resolve = o(t), this.reject = o(r)
        }
        var o = r(24);
        e.exports.f = function(e) {
            return new n(e)
        }
    }, function(e, t, r) {
        t.f = r(4)
    }, function(e, t, r) {
        var n = r(11),
            o = r(37).f,
            l = {}.toString,
            a = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            s = function(e) {
                try {
                    return o(e)
                } catch (t) {
                    return a.slice()
                }
            };
        e.exports.f = function(e) {
            return a && '[object Window]' == l.call(e) ? s(e) : o(n(e))
        }
    }, function(e) {
        e.exports = Object.is || function(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }
    }, function(e, t, r) {
        var n = r(18),
            o = r(25);
        e.exports = function(e) {
            return function(t, r) {
                var c, a, p = o(t) + '',
                    s = n(r),
                    i = p.length;
                return 0 > s || s >= i ? e ? '' : void 0 : (c = p.charCodeAt(s), 55296 > c || 56319 < c || s + 1 === i || 56320 > (a = p.charCodeAt(s + 1)) || 57343 < a ? e ? p.charAt(s) : c : e ? p.slice(s, s + 2) : (c - 55296 << 10) + (a - 56320) + 65536)
            }
        }
    }, function(e, t, r) {
        'use strict';
        var o = r(18),
            l = r(25);
        e.exports = function(e) {
            var t = l(this) + '',
                r = '',
                a = o(e);
            if (0 > a || a == Infinity) throw RangeError('Count can\'t be negative');
            for (; 0 < a;
                (a >>>= 1) && (t += t)) 1 & a && (r += t);
            return r
        }
    }, function(e, t, r) {
        var n = r(1),
            o = r(30),
            l = r(4)('match');
        e.exports = function(e) {
            var t;
            return n(e) && ((t = e[l]) === void 0 ? 'RegExp' == o(e) : !!t)
        }
    }, function(e, t, r) {
        'use strict';
        var n = r(2);
        e.exports = function() {
            var e = n(this),
                t = '';
            return e.global && (t += 'g'), e.ignoreCase && (t += 'i'), e.multiline && (t += 'm'), e.unicode && (t += 'u'), e.sticky && (t += 'y'), t
        }
    }, function(e, t, r) {
        var n = r(1);
        e.exports = function(e) {
            return !n(e) && isFinite(e) && p(e) === e
        }
    }, function(e) {
        e.exports = Math.log1p || function(e) {
            return -1e-8 < (e = +e) && 1e-8 > e ? e - e * e / 2 : n(1 + e)
        }
    }, function(e, t, r) {
        var n = r(26),
            o = r(11),
            l = r(40).f;
        e.exports = function(e) {
            return function(t) {
                for (var r, a = o(t), s = n(a), c = s.length, p = 0, i = []; c > p;) l.call(a, r = s[p++]) && i.push(e ? [r, a[r]] : a[r]);
                return i
            }
        }
    }, function(e, t, r) {
        var n = r(6),
            o = r(91),
            l = r(25);
        e.exports = function(e, t, r, a) {
            var s = l(e) + '',
                i = s.length,
                p = void 0 === r ? ' ' : r + '',
                d = n(t);
            if (d <= i || '' == p) return s;
            var u = d - i,
                g = o.call(p, c(u / p.length));
            return g.length > u && (g = g.slice(0, u)), a ? g + s : s + g
        }
    }, function(e, t) {
        'use strict';

        function r(e, t, r) {
            var n = new Error(t.message || t.message_to_client || t);
            return n.name = t.code || e, n.passthrough = r, n
        }

        function n(e, t) {
            for (var r = new Uint8Array(e.length + t.length), n = 0; n < e.length; n++) r[n] = e[n];
            for (var o = 0; o < t.length; o++) r[o + e.length] = t[o];
            return r
        }

        function o(e) {
            var t = new Uint8Array(l),
                r = new DataView(t.buffer);
            return r.setUint32(0, e), t
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        }), t.addMetadata = function(e, t) {
            for (var r = t.uploadId, l = t.callType, a = o(r), s = o(l), i = e, c = function(e) {
                    var t = o(e.length),
                        r = new Uint8Array([]);
                    return r = n(r, s), r = n(r, a), r = n(r, t), r = n(r, e), r
                }, p = [], d = 0; d < i.length; d++) p.push(c(i[d], d, i));
            return p
        }, t.log = function(e) {
            var t;
            if (e) {
                for (var r = arguments.length, n = Array(1 < r ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                (t = console).log.apply(t, [new Date + ':'].concat(n))
            }
        }, t.createError = r, t.pushToBuffer = n, t.getFile = function(e) {
            var t = Object.assign({}, e);
            return t.buffer = new Uint8Array(e.buffer), t
        }, t.checkOptions = function(e) {
            if (!e) throw Error('Options is required');
            for (var t = ['filename', 'buffer', 'documentType', 'documentFormat'], n = t, o = function(t) {
                    if (!(t in e)) throw r('InvocationError', 'Required option <' + t + '> is not found in the given options')
                }, l = 0; l < n.length; l++) o(n[l], l, n);
            if (e.buffer.length > a) throw r('FileSizeError', 'The maximum acceptable file size is ' + s)
        };
        var l = 4,
            a = t.MAX_SIZE = 8388608,
            s = t.HUMAN_READABLE_MAX_SIZE = '8 MB',
            i = t.generateChunks = function(e, t) {
                for (var r, n = t.chunkSize, o = n === void 0 ? 16384 : n, l = [], a = 0; a < e.length; a++) r = e[a], 0 == a % o ? l.push([r]) : l[l.length - 1].push(r);
                for (var s = l, i = function(e) {
                        return new Uint8Array(e)
                    }, c = [], p = 0; p < s.length; p++) c.push(i(s[p], p, s));
                return c.concat(new Uint8Array([]))
            }
    }, function(e) {
        var r = {
            utf8: {
                stringToBytes: function(e) {
                    return r.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(r.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], r = 0; r < e.length; r++) t.push(255 & e.charCodeAt(r));
                    return t
                },
                bytesToString: function(e) {
                    for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n]));
                    return r.join('')
                }
            }
        };
        e.exports = r
    }, function(e, t, r) {
        'use strict';

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var r, n = 0; n < t.length; n++) r = t[n], r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }();
        r(101), r(103), r(108), r(109), r(110), r(111), r(112), r(113), r(114), r(115), r(116), r(118), r(119), r(120), r(121), r(122), r(124), r(125), r(126), r(127), r(128), r(129), r(130), r(131), r(132), r(133), r(134), r(135), r(139), r(142), r(143), r(144), r(145), r(146), r(147), r(148), r(149), r(150), r(151), r(152), r(153), r(154), r(155), r(156), r(157), r(158), r(159), r(160), r(161), r(162), r(163), r(165), r(166), r(167), r(168), r(169), r(170), r(171), r(172), r(173), r(61), r(174), r(175), r(176), r(177), r(178), r(179), r(180), r(181), r(182), r(183), r(184), r(185), r(186), r(187), r(188), r(190), r(191), r(192), r(193), r(194), r(195), r(196), r(197), r(198), r(199), r(200), r(201), r(202), r(203), r(204), r(205), r(206), r(207), r(208);
        var l = r(98),
            a = r(209),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            i = 0,
            c = function() {
                function e(t) {
                    n(this, e), this.config = t, this.clients = {}, this.wrapConnection()
                }
                return o(e, [{
                    key: 'upload',
                    value: function(e) {
                        var t = this,
                            r = this.config.debug,
                            n = (0, l.getFile)(e);
                        (0, l.checkOptions)(n), i += 1;
                        var o = new s.default({
                            send: this.send,
                            file: n,
                            reqId: i
                        });
                        return this.clients[i] = {
                            client: o
                        }, new Promise(function(e, a) {
                            t.clients[i].promise = {
                                resolve: e,
                                reject: a
                            }, (0, l.log)(void 0 !== r && r, 'Uploading started, File options:', n), o.requestUpload()
                        })
                    }
                }, {
                    key: 'wrapConnection',
                    value: function() {
                        var e = this,
                            t = this.config,
                            r = t.connection,
                            n = t.debug,
                            o = void 0 !== n && n;
                        if (!r || 1 !== r.readyState) throw (0, l.createError)('ConnectionError', 'Connection is not ready!');
                        this.connection = r, this.send = function(e) {
                            (0, l.log)(o, '<Sent>:', e), r.send(e)
                        };
                        var a = r.onmessage;
                        r.onmessage = function(t) {
                            var n = t.data;
                            (0, l.log)(o, '<Received>:', n);
                            var s = JSON.parse(n);
                            if (a && (!s.passthrough || !s.passthrough.document_upload)) return void a.call(r, t);
                            var i = s.passthrough.document_upload;
                            if (a && !i) return void a.call(r, t);
                            if (s.req_id in e.clients) {
                                var c = e.clients[s.req_id],
                                    p = c.client,
                                    d = c.promise;
                                try {
                                    var u = p.handleMessage(s);
                                    u && ((0, l.log)(o, 'Upload successful, upload info:', u), d.resolve(u))
                                } catch (t) {
                                    d.reject(t), (0, l.log)(o, t)
                                }
                            }
                        }
                    }
                }]), e
            }();
        t.default = c
    }, function(e, t, r) {
        'use strict';
        var n = r(0),
            o = r(53),
            l = r(71),
            a = r(2),
            s = r(31),
            i = r(6),
            c = r(1),
            p = r(3).ArrayBuffer,
            d = r(42),
            u = l.ArrayBuffer,
            g = l.DataView,
            h = o.ABV && p.isView,
            y = u.prototype.slice,
            f = o.VIEW,
            m = 'ArrayBuffer';
        n(n.G + n.W + n.F * (p !== u), {
            ArrayBuffer: u
        }), n(n.S + n.F * !o.CONSTR, m, {
            isView: function(e) {
                return h && h(e) || c(e) && f in e
            }
        }), n(n.P + n.U + n.F * r(5)(function() {
            return !new u(2).slice(1, void 0).byteLength
        }), m, {
            slice: function(e, t) {
                if (y !== void 0 && t === void 0) return y.call(a(this), e);
                for (var r = a(this).byteLength, n = s(e, r), o = s(void 0 === t ? r : t, r), l = new(d(this, u))(i(o - n)), c = new g(this), p = new g(l), h = 0; n < o;) p.setUint8(h++, c.getUint8(n++));
                return l
            }
        }), r(43)(m)
    }, function(e, t, r) {
        e.exports = r(41)('native-function-to-string', Function.toString)
    }, function(e, t, r) {
        r(15)('Int8', 1, function(e) {
            return function(t, r, n) {
                return e(this, t, r, n)
            }
        })
    }, function(e, t, r) {
        var n = r(7),
            o = r(2),
            l = r(26);
        e.exports = r(8) ? Object.defineProperties : function(e, t) {
            o(e);
            for (var r, a = l(t), s = a.length, c = 0; s > c;) n.f(e, r = a[c++], t[r]);
            return e
        }
    }, function(e, t, r) {
        var n = r(106);
        e.exports = function(e, t) {
            return new(n(e))(t)
        }
    }, function(e, t, r) {
        var n = r(1),
            o = r(75),
            l = r(4)('species');
        e.exports = function(e) {
            var t;
            return o(e) && (t = e.constructor, 'function' == typeof t && (t === Array || o(t.prototype)) && (t = void 0), n(t) && (t = t[l], null === t && (t = void 0))), void 0 === t ? Array : t
        }
    }, function(e, t, r) {
        'use strict';
        var n = r(38),
            o = r(21),
            l = r(32),
            a = {};
        r(9)(a, r(4)('iterator'), function() {
            return this
        }), e.exports = function(e, t, r) {
            e.prototype = n(a, {
                next: o(1, r)
            }), l(e, t + ' Iterator')
        }
    }, function(e, t, r) {
        r(15)('Uint8', 1, function(e) {
            return function(t, r, n) {
                return e(this, t, r, n)
            }
        })
    }, function(e, t, r) {
        r(15)('Uint8', 1, function(e) {
            return function(t, r, n) {
                return e(this, t, r, n)
            }
        }, !0)
    }, function(e, t, r) {
        r(15)('Int16', 2, function(e) {
            return function(t, r, n) {
                return e(this, t, r, n)
            }
        })
    }, function(e, t, r) {
        r(15)('Uint16', 2, function(e) {
            return function(t, r, n) {
                return e(this, t, r, n)
            }
        })
    }, function(e, t, r) {
        r(15)('Int32', 4, function(e) {
            return function(t, r, n) {
                return e(this, t, r, n)
            }
        })
    }, function(e, t, r) {
        r(15)('Uint32', 4, function(e) {
            return function(t, r, n) {
                return e(this, t, r, n)
            }
        })
    }, function(e, t, r) {
        r(15)('Float32', 4, function(e) {
            return function(t, r, n) {
                return e(this, t, r, n)
            }
        })
    }, function(e, t, r) {
        r(15)('Float64', 8, function(e) {
            return function(t, r, n) {
                return e(this, t, r, n)
            }
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(79),
            o = r(27),
            l = 'Map';
        e.exports = r(47)(l, function(e) {
            return function() {
                return e(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }, {
            get: function(e) {
                var t = n.getEntry(o(this, l), e);
                return t && t.v
            },
            set: function(e, t) {
                return n.def(o(this, l), 0 === e ? 0 : e, t)
            }
        }, n, !0)
    }, function(e, t, r) {
        var n = r(1),
            o = r(81).set;
        e.exports = function(e, t, r) {
            var l, a = t.constructor;
            return a !== r && 'function' == typeof a && (l = a.prototype) !== r.prototype && n(l) && o && o(e, l), e
        }
    }, function(e, t, r) {
        'use strict';
        var n = r(79),
            o = r(27),
            l = 'Set';
        e.exports = r(47)(l, function(e) {
            return function() {
                return e(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }, {
            add: function(e) {
                return n.def(o(this, l), e = 0 === e ? 0 : e, e)
            }
        }, n)
    }, function(e, t, r) {
        'use strict';
        var n, o = r(3),
            l = r(39)(0),
            a = r(17),
            s = r(19),
            i = r(82),
            c = r(83),
            p = r(1),
            d = r(27),
            u = r(27),
            g = !o.ActiveXObject && 'ActiveXObject' in o,
            h = 'WeakMap',
            y = s.getWeak,
            f = Object.isExtensible,
            m = c.ufstore,
            E = function(e) {
                return function() {
                    return e(this, 0 < arguments.length ? arguments[0] : void 0)
                }
            },
            _ = {
                get: function(e) {
                    if (p(e)) {
                        var t = y(e);
                        return !0 === t ? m(d(this, h)).get(e) : t ? t[this._i] : void 0
                    }
                },
                set: function(e, t) {
                    return c.def(d(this, h), e, t)
                }
            },
            x = e.exports = r(47)(h, E, _, c, !0, !0);
        u && g && (n = c.getConstructor(E, h), i(n.prototype, _), s.NEED = !0, l(['delete', 'has', 'get', 'set'], function(e) {
            var t = x.prototype,
                r = t[e];
            a(t, e, function(t, o) {
                if (p(t) && !f(t)) {
                    this._f || (this._f = new n);
                    var l = this._f[e](t, o);
                    return 'set' == e ? this : l
                }
                return r.call(this, t, o)
            })
        }))
    }, function(e, t, r) {
        'use strict';
        var n = r(83),
            o = r(27),
            l = 'WeakSet';
        r(47)(l, function(e) {
            return function() {
                return e(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }, {
            add: function(e) {
                return n.def(o(this, l), e, !0)
            }
        }, n, !1, !0)
    }, function(e, t, r) {
        var n = r(0),
            o = r(24),
            l = r(2),
            a = (r(3).Reflect || {}).apply,
            s = Function.apply;
        n(n.S + n.F * !r(5)(function() {
            a(function() {})
        }), 'Reflect', {
            apply: function(e, t, r) {
                var n = o(e),
                    i = l(r);
                return a ? a(n, t, i) : s.call(n, t, i)
            }
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(38),
            l = r(24),
            a = r(2),
            s = r(1),
            i = r(5),
            c = r(123),
            p = (r(3).Reflect || {}).construct,
            d = i(function() {
                function e() {}
                return !(p(function() {}, [], e) instanceof e)
            }),
            u = !i(function() {
                p(function() {})
            });
        n(n.S + n.F * (d || u), 'Reflect', {
            construct: function(e, t) {
                l(e), a(t);
                var r = 3 > arguments.length ? e : l(arguments[2]);
                if (u && !d) return p(e, t, r);
                if (e == r) {
                    switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3]);
                    }
                    var n = [null];
                    return n.push.apply(n, t), new(c.apply(e, n))
                }
                var i = r.prototype,
                    g = o(s(i) ? i : Object.prototype),
                    h = Function.apply.call(e, g, t);
                return s(h) ? h : g
            }
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(24),
            o = r(1),
            l = r(84),
            a = [].slice,
            s = {},
            i = function(e, t, r) {
                if (!(t in s)) {
                    for (var o = [], n = 0; n < t; n++) o[n] = 'a[' + n + ']';
                    s[t] = Function('F,a', 'return new F(' + o.join(',') + ')')
                }
                return s[t](e, r)
            };
        e.exports = Function.bind || function(e) {
            var t = n(this),
                r = a.call(arguments, 1),
                s = function() {
                    var n = r.concat(a.call(arguments));
                    return this instanceof s ? i(t, n.length, n) : l(t, n, e)
                };
            return o(t.prototype) && (s.prototype = t.prototype), s
        }
    }, function(e, t, r) {
        var n = r(7),
            o = r(0),
            l = r(2),
            a = r(36);
        o(o.S + o.F * r(5)(function() {
            Reflect.defineProperty(n.f({}, 1, {
                value: 1
            }), 1, {
                value: 2
            })
        }), 'Reflect', {
            defineProperty: function(e, t, r) {
                l(e), t = a(t, !0), l(r);
                try {
                    return n.f(e, t, r), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(16).f,
            l = r(2);
        n(n.S, 'Reflect', {
            deleteProperty: function(e, t) {
                var r = o(l(e), t);
                return r && !r.configurable ? !1 : delete e[t]
            }
        })
    }, function(e, t, r) {
        function n(e, t) {
            var r, s, p = 3 > arguments.length ? e : arguments[2];
            return c(e) === p ? e[t] : (r = o.f(e, t)) ? a(r, 'value') ? r.value : void 0 === r.get ? void 0 : r.get.call(p) : i(s = l(e)) ? n(s, t, p) : void 0
        }
        var o = r(16),
            l = r(34),
            a = r(10),
            s = r(0),
            i = r(1),
            c = r(2);
        s(s.S, 'Reflect', {
            get: n
        })
    }, function(e, t, r) {
        var n = r(16),
            o = r(0),
            l = r(2);
        o(o.S, 'Reflect', {
            getOwnPropertyDescriptor: function(e, t) {
                return n.f(l(e), t)
            }
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(34),
            l = r(2);
        n(n.S, 'Reflect', {
            getPrototypeOf: function(e) {
                return o(l(e))
            }
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S, 'Reflect', {
            has: function(e, t) {
                return t in e
            }
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(2),
            l = Object.isExtensible;
        n(n.S, 'Reflect', {
            isExtensible: function(e) {
                return o(e), !l || l(e)
            }
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S, 'Reflect', {
            ownKeys: r(85)
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(2),
            l = Object.preventExtensions;
        n(n.S, 'Reflect', {
            preventExtensions: function(e) {
                o(e);
                try {
                    return l && l(e), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function(e, t, r) {
        function n(e, t, r) {
            var i, u, g = 4 > arguments.length ? e : arguments[3],
                h = l.f(p(e), t);
            if (!h) {
                if (d(u = a(e))) return n(u, t, r, g);
                h = c(0)
            }
            if (s(h, 'value')) {
                if (!1 === h.writable || !d(g)) return !1;
                if (i = l.f(g, t)) {
                    if (i.get || i.set || !1 === i.writable) return !1;
                    i.value = r, o.f(g, t, i)
                } else o.f(g, t, c(0, r));
                return !0
            }
            return h.set !== void 0 && (h.set.call(g, r), !0)
        }
        var o = r(7),
            l = r(16),
            a = r(34),
            s = r(10),
            i = r(0),
            c = r(21),
            p = r(2),
            d = r(1);
        i(i.S, 'Reflect', {
            set: n
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(81);
        o && n(n.S, 'Reflect', {
            setPrototypeOf: function(e, t) {
                o.check(e, t);
                try {
                    return o.set(e, t), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function(e, t, r) {
        'use strict';
        var n, o, l, a, s = r(23),
            i = r(3),
            c = r(14),
            p = r(44),
            d = r(0),
            u = r(1),
            g = r(24),
            h = r(29),
            y = r(46),
            f = r(42),
            m = r(62).set,
            E = r(136)(),
            _ = r(86),
            x = r(137),
            S = r(49),
            T = r(138),
            b = 'Promise',
            P = i.TypeError,
            O = i.process,
            v = O && O.versions,
            I = v && v.v8 || '',
            A = i[b],
            R = 'process' == p(O),
            k = function() {},
            L = o = _.f,
            F = !! function() {
                try {
                    var e = A.resolve(1),
                        t = (e.constructor = {})[r(4)('species')] = function(e) {
                            e(k, k)
                        };
                    return (R || 'function' == typeof PromiseRejectionEvent) && e.then(k) instanceof t && 0 !== I.indexOf('6.6') && -1 === S.indexOf('Chrome/66')
                } catch (t) {}
            }(),
            N = function(e) {
                var t;
                return u(e) && 'function' == typeof(t = e.then) && t
            },
            w = function(e, t) {
                if (!e._n) {
                    e._n = !0;
                    var r = e._c;
                    E(function() {
                        for (var n = e._v, o = 1 == e._s, l = 0, a = function(t) {
                                var r, l, a, s = o ? t.ok : t.fail,
                                    i = t.resolve,
                                    c = t.reject,
                                    p = t.domain;
                                try {
                                    s ? (!o && (2 == e._h && C(e), e._h = 1), !0 === s ? r = n : (p && p.enter(), r = s(n), p && (p.exit(), a = !0)), r === t.promise ? c(P('Promise-chain cycle')) : (l = N(r)) ? l.call(r, i, c) : i(r)) : c(n)
                                } catch (t) {
                                    p && !a && p.exit(), c(t)
                                }
                            }; r.length > l;) a(r[l++]);
                        e._c = [], e._n = !1, t && !e._h && M(e)
                    })
                }
            },
            M = function(e) {
                m.call(i, function() {
                    var t, r, n, o = e._v,
                        l = D(e);
                    if (l && (t = x(function() {
                            R ? O.emit('unhandledRejection', o, e) : (r = i.onunhandledrejection) ? r({
                                promise: e,
                                reason: o
                            }) : (n = i.console) && n.error && n.error('Unhandled promise rejection', o)
                        }), e._h = R || D(e) ? 2 : 1), e._a = void 0, l && t.e) throw t.v
                })
            },
            D = function(e) {
                return 1 !== e._h && 0 === (e._a || e._c).length
            },
            C = function(e) {
                m.call(i, function() {
                    var t;
                    R ? O.emit('rejectionHandled', e) : (t = i.onrejectionhandled) && t({
                        promise: e,
                        reason: e._v
                    })
                })
            },
            j = function(e) {
                var t = this;
                t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, !t._a && (t._a = t._c.slice()), w(t, !0))
            },
            Y = function(e) {
                var t, r = this;
                if (!r._d) {
                    r._d = !0, r = r._w || r;
                    try {
                        if (r === e) throw P('Promise can\'t be resolved itself');
                        (t = N(e)) ? E(function() {
                            var n = {
                                _w: r,
                                _d: !1
                            };
                            try {
                                t.call(e, c(Y, n, 1), c(j, n, 1))
                            } catch (t) {
                                j.call(n, t)
                            }
                        }): (r._v = e, r._s = 1, w(r, !1))
                    } catch (t) {
                        j.call({
                            _w: r,
                            _d: !1
                        }, t)
                    }
                }
            };
        F || (A = function(e) {
            h(this, A, b, '_h'), g(e), n.call(this);
            try {
                e(c(Y, this, 1), c(j, this, 1))
            } catch (e) {
                j.call(this, e)
            }
        }, n = function() {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, n.prototype = r(28)(A.prototype, {
            then: function(e, t) {
                var r = L(f(this, A));
                return r.ok = 'function' != typeof e || e, r.fail = 'function' == typeof t && t, r.domain = R ? O.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && w(this, !1), r.promise
            },
            catch: function(e) {
                return this.then(void 0, e)
            }
        }), l = function() {
            var e = new n;
            this.promise = e, this.resolve = c(Y, e, 1), this.reject = c(j, e, 1)
        }, _.f = L = function(e) {
            return e === A || e === a ? new l(e) : o(e)
        }), d(d.G + d.W + d.F * !F, {
            Promise: A
        }), r(32)(A, b), r(43)(b), a = r(20)[b], d(d.S + d.F * !F, b, {
            reject: function(e) {
                var t = L(this),
                    r = t.reject;
                return r(e), t.promise
            }
        }), d(d.S + d.F * (s || !F), b, {
            resolve: function(e) {
                return T(s && this === a ? A : this, e)
            }
        }), d(d.S + d.F * !(F && r(45)(function(e) {
            A.all(e)['catch'](k)
        })), b, {
            all: function(e) {
                var t = this,
                    r = L(t),
                    n = r.resolve,
                    o = r.reject,
                    l = x(function() {
                        var r = [],
                            l = 0,
                            a = 1;
                        y(e, !1, function(e) {
                            var s = l++,
                                i = !1;
                            r.push(void 0), a++, t.resolve(e).then(function(e) {
                                i || (i = !0, r[s] = e, --a || n(r))
                            }, o)
                        }), --a || n(r)
                    });
                return l.e && o(l.v), r.promise
            },
            race: function(e) {
                var t = this,
                    r = L(t),
                    n = r.reject,
                    o = x(function() {
                        y(e, !1, function(e) {
                            t.resolve(e).then(r.resolve, n)
                        })
                    });
                return o.e && n(o.v), r.promise
            }
        })
    }, function(e, t, r) {
        var n = r(3),
            o = r(62).set,
            l = n.MutationObserver || n.WebKitMutationObserver,
            a = n.process,
            s = n.Promise,
            i = 'process' == r(30)(a);
        e.exports = function() {
            var t, r, c, e = function() {
                var e, n;
                for (i && (e = a.domain) && e.exit(); t;) {
                    n = t.fn, t = t.next;
                    try {
                        n()
                    } catch (n) {
                        throw t ? c() : r = void 0, n
                    }
                }
                r = void 0, e && e.enter()
            };
            if (i) c = function() {
                a.nextTick(e)
            };
            else if (l && !(n.navigator && n.navigator.standalone)) {
                var p = !0,
                    d = document.createTextNode('');
                new l(e).observe(d, {
                    characterData: !0
                }), c = function() {
                    d.data = p = !p
                }
            } else if (s && s.resolve) {
                var u = s.resolve(void 0);
                c = function() {
                    u.then(e)
                }
            } else c = function() {
                o.call(n, e)
            };
            return function(e) {
                var n = {
                    fn: e,
                    next: void 0
                };
                r && (r.next = n), t || (t = n, c()), r = n
            }
        }
    }, function(e) {
        e.exports = function(e) {
            try {
                return {
                    e: !1,
                    v: e()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    }, function(e, t, r) {
        var n = r(2),
            o = r(1),
            l = r(86);
        e.exports = function(e, t) {
            if (n(e), o(t) && t.constructor === e) return t;
            var r = l.f(e),
                a = r.resolve;
            return a(t), r.promise
        }
    }, function(e, t, r) {
        'use strict';
        var n = r(3),
            o = r(10),
            l = r(8),
            a = r(0),
            s = r(17),
            c = r(19).KEY,
            i = r(5),
            p = r(41),
            d = r(32),
            u = r(22),
            g = r(4),
            h = r(87),
            y = r(140),
            f = r(141),
            m = r(75),
            E = r(2),
            _ = r(1),
            x = r(11),
            S = r(36),
            T = r(21),
            b = r(38),
            P = r(88),
            O = r(16),
            v = r(7),
            I = r(26),
            A = O.f,
            R = v.f,
            L = P.f,
            F = n.Symbol,
            N = n.JSON,
            w = N && N.stringify,
            M = 'prototype',
            C = g('_hidden'),
            D = g('toPrimitive'),
            Y = {}.propertyIsEnumerable,
            B = p('symbol-registry'),
            G = p('symbols'),
            U = p('op-symbols'),
            H = Object[M],
            W = 'function' == typeof F,
            V = n.QObject,
            z = !V || !V[M] || !V[M].findChild,
            $ = l && i(function() {
                return 7 != b(R({}, 'a', {
                    get: function() {
                        return R(this, 'a', {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(e, t, r) {
                var n = A(H, t);
                n && delete H[t], R(e, t, r), n && e !== H && R(H, t, n)
            } : R,
            K = function(e) {
                var t = G[e] = b(F[M]);
                return t._k = e, t
            },
            q = W && 'symbol' == typeof F.iterator ? function(e) {
                return 'symbol' == typeof e
            } : function(e) {
                return e instanceof F
            },
            X = function(e, t, r) {
                return e === H && X(U, t, r), E(e), t = S(t, !0), E(r), o(G, t) ? (r.enumerable ? (o(e, C) && e[C][t] && (e[C][t] = !1), r = b(r, {
                    enumerable: T(0, !1)
                })) : (!o(e, C) && R(e, C, T(1, {})), e[C][t] = !0), $(e, t, r)) : R(e, t, r)
            },
            Z = function(e, t) {
                E(e);
                for (var r, n = f(t = x(t)), o = 0, a = n.length; a > o;) X(e, r = n[o++], t[r]);
                return e
            },
            J = function(e) {
                var t = Y.call(this, e = S(e, !0));
                return this === H && o(G, e) && !o(U, e) ? !1 : t || !o(this, e) || !o(G, e) || o(this, C) && this[C][e] ? t : !0
            },
            Q = function(e, t) {
                if (e = x(e), t = S(t, !0), e !== H || !o(G, t) || o(U, t)) {
                    var r = A(e, t);
                    return r && o(G, t) && !(o(e, C) && e[C][t]) && (r.enumerable = !0), r
                }
            },
            ee = function(e) {
                for (var t, r = L(x(e)), n = [], l = 0; r.length > l;) o(G, t = r[l++]) || t == C || t == c || n.push(t);
                return n
            },
            te = function(e) {
                for (var t, r = e === H, n = L(r ? U : x(e)), l = [], a = 0; n.length > a;) o(G, t = n[a++]) && (!r || o(H, t)) && l.push(G[t]);
                return l
            };
        W || (F = function() {
            if (this instanceof F) throw TypeError('Symbol is not a constructor!');
            var e = u(0 < arguments.length ? arguments[0] : void 0),
                t = function(r) {
                    this === H && t.call(U, r), o(this, C) && o(this[C], e) && (this[C][e] = !1), $(this, e, T(1, r))
                };
            return l && z && $(H, e, {
                configurable: !0,
                set: t
            }), K(e)
        }, s(F[M], 'toString', function() {
            return this._k
        }), O.f = Q, v.f = X, r(37).f = P.f = ee, r(40).f = J, r(48).f = te, l && !r(23) && s(H, 'propertyIsEnumerable', J, !0), h.f = function(e) {
            return K(g(e))
        }), a(a.G + a.W + a.F * !W, {
            Symbol: F
        });
        for (var re = ['hasInstance', 'isConcatSpreadable', 'iterator', 'match', 'replace', 'search', 'species', 'split', 'toPrimitive', 'toStringTag', 'unscopables'], ne = 0; re.length > ne;) g(re[ne++]);
        for (var j = I(g.store), oe = 0; j.length > oe;) y(j[oe++]);
        a(a.S + a.F * !W, 'Symbol', {
            for: function(e) {
                return o(B, e += '') ? B[e] : B[e] = F(e)
            },
            keyFor: function(e) {
                if (!q(e)) throw TypeError(e + ' is not a symbol!');
                for (var t in B)
                    if (B[t] === e) return t
            },
            useSetter: function() {
                z = !0
            },
            useSimple: function() {
                z = !1
            }
        }), a(a.S + a.F * !W, 'Object', {
            create: function(e, t) {
                return t === void 0 ? b(e) : Z(b(e), t)
            },
            defineProperty: X,
            defineProperties: Z,
            getOwnPropertyDescriptor: Q,
            getOwnPropertyNames: ee,
            getOwnPropertySymbols: te
        }), N && a(a.S + a.F * (!W || i(function() {
            var e = F();
            return '[null]' != w([e]) || '{}' != w({
                a: e
            }) || '{}' != w(Object(e))
        })), 'JSON', {
            stringify: function(e) {
                for (var t, r, n = [e], o = 1; arguments.length > o;) n.push(arguments[o++]);
                if (r = t = n[1], (_(t) || void 0 !== e) && !q(e)) return m(t) || (t = function(e, t) {
                    if ('function' == typeof r && (t = r.call(this, e, t)), !q(t)) return t
                }), n[1] = t, w.apply(N, n)
            }
        }), F[M][D] || r(9)(F[M], D, F[M].valueOf), d(F, 'Symbol'), d(Math, 'Math', !0), d(n.JSON, 'JSON', !0)
    }, function(e, t, r) {
        var n = r(3),
            o = r(20),
            l = r(23),
            a = r(87),
            s = r(7).f;
        e.exports = function(e) {
            var t = o.Symbol || (o.Symbol = l ? {} : n.Symbol || {});
            '_' == e.charAt(0) || e in t || s(t, e, {
                value: a.f(e)
            })
        }
    }, function(e, t, r) {
        var n = r(26),
            o = r(48),
            l = r(40);
        e.exports = function(e) {
            var t = n(e),
                r = o.f;
            if (r)
                for (var a, s = r(e), c = l.f, p = 0; s.length > p;) c.call(e, a = s[p++]) && t.push(a);
            return t
        }
    }, function(e, t, r) {
        var n = r(1),
            o = r(19).onFreeze;
        r(13)('freeze', function(e) {
            return function(t) {
                return e && n(t) ? e(o(t)) : t
            }
        })
    }, function(e, t, r) {
        var n = r(1),
            o = r(19).onFreeze;
        r(13)('seal', function(e) {
            return function(t) {
                return e && n(t) ? e(o(t)) : t
            }
        })
    }, function(e, t, r) {
        var n = r(1),
            o = r(19).onFreeze;
        r(13)('preventExtensions', function(e) {
            return function(t) {
                return e && n(t) ? e(o(t)) : t
            }
        })
    }, function(e, t, r) {
        var n = r(1);
        r(13)('isFrozen', function(e) {
            return function(t) {
                return !n(t) || !!e && e(t)
            }
        })
    }, function(e, t, r) {
        var n = r(1);
        r(13)('isSealed', function(e) {
            return function(t) {
                return !n(t) || !!e && e(t)
            }
        })
    }, function(e, t, r) {
        var n = r(1);
        r(13)('isExtensible', function(e) {
            return function(t) {
                return !!n(t) && (!e || e(t))
            }
        })
    }, function(e, t, r) {
        var n = r(11),
            o = r(16).f;
        r(13)('getOwnPropertyDescriptor', function() {
            return function(e, t) {
                return o(n(e), t)
            }
        })
    }, function(e, t, r) {
        var n = r(12),
            o = r(34);
        r(13)('getPrototypeOf', function() {
            return function(e) {
                return o(n(e))
            }
        })
    }, function(e, t, r) {
        var n = r(12),
            o = r(26);
        r(13)('keys', function() {
            return function(e) {
                return o(n(e))
            }
        })
    }, function(e, t, r) {
        r(13)('getOwnPropertyNames', function() {
            return r(88).f
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S + n.F, 'Object', {
            assign: r(82)
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S, 'Object', {
            is: r(89)
        })
    }, function(e, t, r) {
        var n = r(7).f,
            o = Function.prototype,
            l = /^\s*function ([^ (]*)/,
            a = 'name';
        a in o || r(8) && n(o, a, {
            configurable: !0,
            get: function() {
                try {
                    return ('' + this).match(l)[1]
                } catch (t) {
                    return ''
                }
            }
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(11),
            l = r(6);
        n(n.S, 'String', {
            raw: function(e) {
                for (var t = o(e.raw), r = l(t.length), n = arguments.length, a = [], s = 0; r > s;) a.push(t[s++] + ''), s < n && a.push(arguments[s] + '');
                return a.join('')
            }
        })
    }, function(e, r, n) {
        var o = n(0),
            l = n(31),
            a = t,
            s = String.fromCodePoint;
        o(o.S + o.F * (!!s && 1 != s.length), 'String', {
            fromCodePoint: function() {
                for (var e, t = [], r = arguments.length, n = 0; r > n;) {
                    if (e = +arguments[n++], l(e, 1114111) !== e) throw RangeError(e + ' is not a valid code point');
                    t.push(65536 > e ? a(e) : a(((e -= 65536) >> 10) + 55296, e % 1024 + 56320))
                }
                return t.join('')
            }
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(0),
            o = r(90)(!1);
        n(n.P, 'String', {
            codePointAt: function(e) {
                return o(this, e)
            }
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.P, 'String', {
            repeat: r(91)
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(0),
            o = r(6),
            l = r(63),
            a = 'startsWith',
            s = '' [a];
        n(n.P + n.F * r(64)(a), 'String', {
            startsWith: function(e) {
                var t = l(this, e, a),
                    r = o(d(1 < arguments.length ? arguments[1] : void 0, t.length)),
                    n = e + '';
                return t.slice(r, r + n.length) === n
            }
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(0),
            o = r(6),
            l = r(63),
            a = 'endsWith',
            s = '' [a];
        n(n.P + n.F * r(64)(a), 'String', {
            endsWith: function(e) {
                var t = l(this, e, a),
                    r = 1 < arguments.length ? arguments[1] : void 0,
                    n = o(t.length),
                    s = r === void 0 ? n : d(o(r), n),
                    i = e + '';
                return t.slice(s - i.length, s) === i
            }
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(0),
            o = r(63),
            l = 'includes';
        n(n.P + n.F * r(64)(l), 'String', {
            includes: function(e) {
                return !!~o(this, e, l).indexOf(e, 1 < arguments.length ? arguments[1] : void 0)
            }
        })
    }, function(e, t, r) {
        r(8) && 'g' != /./g.flags && r(7).f(RegExp.prototype, 'flags', {
            configurable: !0,
            get: r(93)
        })
    }, function(e, t, r) {
        'use strict';
        var o = r(2),
            l = r(6),
            a = r(65),
            s = r(50);
        r(51)('match', 1, function(e, t, r, i) {
            return [function(r) {
                var n = e(this),
                    o = r == void 0 ? void 0 : r[t];
                return o === void 0 ? new RegExp(r)[t](n + '') : o.call(r, n)
            }, function(e) {
                var t = i(r, e, this);
                if (t.done) return t.value;
                var c = o(e),
                    p = this + '';
                if (!c.global) return s(c, p);
                var d = c.unicode;
                c.lastIndex = 0;
                for (var u, g = [], h = 0; null !== (u = s(c, p));) {
                    var n = u[0] + '';
                    g[h] = n, '' === n && (c.lastIndex = a(p, l(c.lastIndex), d)), h++
                }
                return 0 == h ? null : g
            }]
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(66);
        r(0)({
            target: 'RegExp',
            proto: !0,
            forced: n !== /./.exec
        }, {
            exec: n
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(2),
            o = r(12),
            l = r(6),
            a = r(18),
            s = r(65),
            c = r(50),
            u = /\$([$&`']|\d\d?|<[^>]*>)/g,
            g = /\$([$&`']|\d\d?)/g,
            h = function(e) {
                return e === void 0 ? e : e + ''
            };
        r(51)('replace', 2, function(e, t, r, y) {
            function f(e, t, l, a, s, n) {
                var i = l + e.length,
                    c = a.length,
                    d = g;
                return void 0 !== s && (s = o(s), d = u), r.call(n, d, function(r, o) {
                    var d;
                    switch (o.charAt(0)) {
                        case '$':
                            return '$';
                        case '&':
                            return e;
                        case '`':
                            return t.slice(0, l);
                        case '\'':
                            return t.slice(i);
                        case '<':
                            d = s[o.slice(1, -1)];
                            break;
                        default:
                            var u = +o;
                            if (0 == u) return r;
                            if (u > c) {
                                var n = p(u / 10);
                                return 0 === n ? r : n <= c ? void 0 === a[n - 1] ? o.charAt(1) : a[n - 1] + o.charAt(1) : r
                            }
                            d = a[u - 1];
                    }
                    return void 0 === d ? '' : d
                })
            }
            return [function(n, o) {
                var l = e(this),
                    a = n == void 0 ? void 0 : n[t];
                return a === void 0 ? r.call(l + '', n, o) : a.call(n, l, o)
            }, function(e, t) {
                var o = y(r, e, this, t);
                if (o.done) return o.value;
                var p = n(e),
                    u = this + '',
                    g = 'function' == typeof t;
                g || (t = t + '');
                var m = p.global;
                if (m) {
                    var E = p.unicode;
                    p.lastIndex = 0
                }
                for (var _, x = [];
                    (_ = c(p, u), null !== _) && !(x.push(_), !m);) {
                    var S = _[0] + '';
                    '' === S && (p.lastIndex = s(u, l(p.lastIndex), E))
                }
                for (var T = '', b = 0, P = 0; P < x.length; P++) {
                    _ = x[P];
                    for (var O = _[0] + '', v = i(d(a(_.index), u.length), 0), I = [], A = 1; A < _.length; A++) I.push(h(_[A]));
                    var R = _.groups;
                    if (g) {
                        var k = [O].concat(I, v, u);
                        R !== void 0 && k.push(R);
                        var L = t.apply(void 0, k) + ''
                    } else L = f(O, u, v, I, R, t);
                    v >= b && (T += u.slice(b, v) + L, b = v + O.length)
                }
                return T + u.slice(b)
            }]
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(92),
            o = r(2),
            l = r(42),
            a = r(65),
            s = r(6),
            c = r(50),
            i = r(66),
            p = r(5),
            u = [].push,
            g = 'split',
            h = 'length',
            y = 'lastIndex',
            f = 4294967295,
            m = !p(function() {
                RegExp(f, 'y')
            });
        r(51)('split', 2, function(e, t, r, E) {
            var _;
            return _ = 'c' == 'abbc' [g](/(b)*/)[1] || 4 != 'test' [g](/(?:)/, -1)[h] || 2 != 'ab' [g](/(?:ab)*/)[h] || 4 != '.' [g](/(.?)(.?)/)[h] || 1 < '.' [g](/()()/)[h] || '' [g](/.?/)[h] ? function(e, t) {
                var o = this + '';
                if (void 0 === e && 0 === t) return [];
                if (!n(e)) return r.call(o, e, t);
                for (var l, a, s, c = [], p = (e.ignoreCase ? 'i' : '') + (e.multiline ? 'm' : '') + (e.unicode ? 'u' : '') + (e.sticky ? 'y' : ''), d = 0, g = void 0 === t ? f : t >>> 0, m = new RegExp(e.source, p + 'g');
                    (l = i.call(m, o)) && (a = m[y], !(a > d && (c.push(o.slice(d, l.index)), 1 < l[h] && l.index < o[h] && u.apply(c, l.slice(1)), s = l[0][h], d = a, c[h] >= g)));) m[y] === l.index && m[y]++;
                return d === o[h] ? (s || !m.test('')) && c.push('') : c.push(o.slice(d)), c[h] > g ? c.slice(0, g) : c
            } : '0' [g](void 0, 0)[h] ? function(e, t) {
                return void 0 === e && 0 === t ? [] : r.call(this, e, t)
            } : r, [function(r, n) {
                var o = e(this),
                    l = void 0 == r ? void 0 : r[t];
                return void 0 === l ? _.call(o + '', r, n) : l.call(r, o, n)
            }, function(t, n) {
                var u = E(_, t, this, n, _ !== r);
                if (u.done) return u.value;
                var g = o(t),
                    h = this + '',
                    y = l(g, RegExp),
                    x = g.unicode,
                    S = (g.ignoreCase ? 'i' : '') + (g.multiline ? 'm' : '') + (g.unicode ? 'u' : '') + (m ? 'y' : 'g'),
                    T = new y(m ? g : '^(?:' + g.source + ')', S),
                    b = void 0 === n ? f : n >>> 0;
                if (0 == b) return [];
                if (0 === h.length) return null === c(T, h) ? [h] : [];
                for (var P = 0, p = 0, O = []; p < h.length;) {
                    T.lastIndex = m ? p : 0;
                    var v, e = c(T, m ? h : h.slice(p));
                    if (null === e || (v = d(s(T.lastIndex + (m ? 0 : p)), h.length)) === P) p = a(h, p, x);
                    else {
                        if (O.push(h.slice(P, p)), O.length === b) return O;
                        for (var I = 1; I <= e.length - 1; I++)
                            if (O.push(e[I]), O.length === b) return O;
                        p = P = v
                    }
                }
                return O.push(h.slice(P)), O
            }]
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(2),
            o = r(89),
            l = r(50);
        r(51)('search', 1, function(e, t, r, a) {
            return [function(r) {
                var n = e(this),
                    o = r == void 0 ? void 0 : r[t];
                return o === void 0 ? new RegExp(r)[t](n + '') : o.call(r, n)
            }, function(e) {
                var t = a(r, e, this);
                if (t.done) return t.value;
                var s = n(e),
                    i = this + '',
                    c = s.lastIndex;
                o(c, 0) || (s.lastIndex = 0);
                var p = l(s, i);
                return o(s.lastIndex, c) || (s.lastIndex = c), null === p ? -1 : p.index
            }]
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(14),
            o = r(0),
            l = r(12),
            a = r(80),
            s = r(59),
            i = r(6),
            c = r(67),
            p = r(60);
        o(o.S + o.F * !r(45)(function(e) {
            Array.from(e)
        }), 'Array', {
            from: function(e) {
                var t, r, o, d, u = l(e),
                    g = 'function' == typeof this ? this : Array,
                    h = arguments.length,
                    y = 1 < h ? arguments[1] : void 0,
                    f = void 0 !== y,
                    m = 0,
                    E = p(u);
                if (f && (y = n(y, 2 < h ? arguments[2] : void 0, 2)), void 0 != E && !(g == Array && s(E)))
                    for (d = E.call(u), r = new g; !(o = d.next()).done; m++) c(r, m, f ? a(d, y, [o.value, m], !0) : o.value);
                else
                    for (t = i(u.length), r = new g(t); t > m; m++) c(r, m, f ? y(u[m], m) : u[m]);
                return r.length = m, r
            }
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(0),
            o = r(67);
        n(n.S + n.F * r(5)(function() {
            function e() {}
            return !(Array.of.call(e) instanceof e)
        }), 'Array', {
            of: function() {
                for (var e = 0, t = arguments.length, r = new('function' == typeof this ? this : Array)(t); t > e;) o(r, e, arguments[e++]);
                return r.length = t, r
            }
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.P, 'Array', {
            copyWithin: r(78)
        }), r(35)('copyWithin')
    }, function(e, t, r) {
        'use strict';
        var n = r(0),
            o = r(39)(5),
            l = 'find',
            a = !0;
        l in [] && [, ][l](function() {
            a = !1
        }), n(n.P + n.F * a, 'Array', {
            find: function(e) {
                return o(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), r(35)(l)
    }, function(e, t, r) {
        'use strict';
        var n = r(0),
            o = r(39)(6),
            l = 'findIndex',
            a = !0;
        l in [] && [, ][l](function() {
            a = !1
        }), n(n.P + n.F * a, 'Array', {
            findIndex: function(e) {
                return o(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), r(35)(l)
    }, function(e, t, r) {
        var n = r(0);
        n(n.P, 'Array', {
            fill: r(58)
        }), r(35)('fill')
    }, function(e, t, r) {
        var n = r(0),
            o = r(3).isFinite;
        n(n.S, 'Number', {
            isFinite: function(e) {
                return 'number' == typeof e && o(e)
            }
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S, 'Number', {
            isInteger: r(94)
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(94);
        n(n.S, 'Number', {
            isSafeInteger: function(e) {
                return o(e) && 9007199254740991 >= l(e)
            }
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S, 'Number', {
            isNaN: function(e) {
                return e != e
            }
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S, 'Number', {
            EPSILON: 2.220446049250313e-16
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S, 'Number', {
            MIN_SAFE_INTEGER: -9007199254740991
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S, 'Number', {
            MAX_SAFE_INTEGER: 9007199254740991
        })
    }, function(t, o, l) {
        var a = l(0),
            s = l(95),
            i = e,
            c = Math.acosh;
        a(a.S + a.F * !(c && 710 == p(c(Number.MAX_VALUE)) && c(Infinity) == Infinity), 'Math', {
            acosh: function(e) {
                return 1 > (e = +e) ? NaN : 94906265.62425156 < e ? n(e) + r : s(e - 1 + i(e - 1) * i(e + 1))
            }
        })
    }, function(t, r, o) {
        function l(t) {
            return isFinite(t = +t) && 0 != t ? 0 > t ? -l(-t) : n(t + e(t * t + 1)) : t
        }
        var a = o(0),
            s = Math.asinh;
        a(a.S + a.F * !(s && 0 < 1 / s(0)), 'Math', {
            asinh: l
        })
    }, function(e, t, r) {
        var o = r(0),
            l = Math.atanh;
        o(o.S + o.F * !(l && 0 > 1 / l(-0)), 'Math', {
            atanh: function(e) {
                return 0 == (e = +e) ? e : n((1 + e) / (1 - e)) / 2
            }
        })
    }, function(e, t, r) {
        var n = r(0),
            a = r(68);
        n(n.S, 'Math', {
            cbrt: function(e) {
                return a(e = +e) * o(l(e), 1 / 3)
            }
        })
    }, function(e, t, r) {
        var o = r(0);
        o(o.S, 'Math', {
            clz32: function(e) {
                return (e >>>= 0) ? 31 - p(n(e + 0.5) * Math.LOG2E) : 32
            }
        })
    }, function(e, t, r) {
        var n = r(0),
            o = a;
        n(n.S, 'Math', {
            cosh: function(e) {
                return (o(e = +e) + o(-e)) / 2
            }
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(69);
        n(n.S + n.F * (o != s), 'Math', {
            expm1: o
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S, 'Math', {
            fround: r(189)
        })
    }, function(e, t, r) {
        var n = r(68),
            a = o,
            s = a(2, -52),
            i = a(2, -23),
            c = a(2, 127) * (2 - i),
            p = a(2, -126),
            d = function(e) {
                return e + 1 / s - 1 / s
            };
        e.exports = Math.fround || function(e) {
            var t, r, o = l(e),
                a = n(e);
            return o < p ? a * d(o / p / i) * p * i : (t = (1 + i / s) * o, r = t - (t - o), r > c || r != r ? a * Infinity : a * r)
        }
    }, function(t, r, n) {
        var o = n(0);
        o(o.S, 'Math', {
            hypot: function() {
                for (var t, r, n = 0, o = 0, a = arguments.length, s = 0; o < a;) t = l(arguments[o++]), s < t ? (r = s / t, n = n * r * r + 1, s = t) : 0 < t ? (r = t / s, n += r * r) : n += t;
                return s == Infinity ? Infinity : s * e(n)
            }
        })
    }, function(e, t, r) {
        var n = r(0),
            o = Math.imul;
        n(n.S + n.F * r(5)(function() {
            return -5 != o(4294967295, 5) || 2 != o.length
        }), 'Math', {
            imul: function(e, t) {
                var r = 65535,
                    n = +e,
                    o = +t,
                    l = r & n,
                    a = r & o;
                return 0 | l * a + ((r & n >>> 16) * a + l * (r & o >>> 16) << 16 >>> 0)
            }
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S, 'Math', {
            log1p: r(95)
        })
    }, function(e, t, r) {
        var o = r(0);
        o(o.S, 'Math', {
            log10: function(e) {
                return n(e) * Math.LOG10E
            }
        })
    }, function(e, t, o) {
        var l = o(0);
        l(l.S, 'Math', {
            log2: function(e) {
                return n(e) / r
            }
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S, 'Math', {
            sign: r(68)
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(69),
            s = a;
        n(n.S + n.F * r(5)(function() {
            return !0
        }), 'Math', {
            sinh: function(e) {
                return 1 > l(e = +e) ? (o(e) - o(-e)) / 2 : (s(e - 1) - s(-e - 1)) * (Math.E / 2)
            }
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(69),
            l = a;
        n(n.S, 'Math', {
            tanh: function(e) {
                var t = o(e = +e),
                    r = o(-e);
                return t == Infinity ? 1 : r == Infinity ? -1 : (t - r) / (l(e) + l(-e))
            }
        })
    }, function(e, t, r) {
        var n = r(0);
        n(n.S, 'Math', {
            trunc: function(e) {
                return (0 < e ? p : c)(e)
            }
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(0),
            o = r(55)(!0);
        n(n.P, 'Array', {
            includes: function(e) {
                return o(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), r(35)('includes')
    }, function(e, t, r) {
        var n = r(0),
            o = r(96)(!1);
        n(n.S, 'Object', {
            values: function(e) {
                return o(e)
            }
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(96)(!0);
        n(n.S, 'Object', {
            entries: function(e) {
                return o(e)
            }
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(85),
            l = r(11),
            a = r(16),
            s = r(67);
        n(n.S, 'Object', {
            getOwnPropertyDescriptors: function(e) {
                for (var t, r, n = l(e), c = a.f, p = o(n), d = {}, u = 0; p.length > u;) r = c(n, t = p[u++]), void 0 !== r && s(d, t, r);
                return d
            }
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(0),
            o = r(97),
            l = r(49),
            a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);
        n(n.P + n.F * a, 'String', {
            padStart: function(e) {
                return o(this, e, 1 < arguments.length ? arguments[1] : void 0, !0)
            }
        })
    }, function(e, t, r) {
        'use strict';
        var n = r(0),
            o = r(97),
            l = r(49),
            a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);
        n(n.P + n.F * a, 'String', {
            padEnd: function(e) {
                return o(this, e, 1 < arguments.length ? arguments[1] : void 0, !1)
            }
        })
    }, function(e, t, r) {
        var n = r(3),
            o = r(0),
            l = r(49),
            a = [].slice,
            s = /MSIE .\./.test(l),
            i = function(e) {
                return function(t, r) {
                    var n = 2 < arguments.length,
                        o = !!n && a.call(arguments, 2);
                    return e(n ? function() {
                        ('function' == typeof t ? t : Function(t)).apply(this, o)
                    } : t, r)
                }
            };
        o(o.G + o.B + o.F * s, {
            setTimeout: i(n.setTimeout),
            setInterval: i(n.setInterval)
        })
    }, function(e, t, r) {
        var n = r(0),
            o = r(62);
        n(n.G + n.B, {
            setImmediate: o.set,
            clearImmediate: o.clear
        })
    }, function(e, t, r) {
        for (var n = r(61), o = r(26), l = r(17), a = r(3), s = r(9), c = r(33), p = r(4), d = p('iterator'), u = p('toStringTag'), g = c.Array, h = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, y = o(h), f = 0; f < y.length; f++) {
            var i, m = y[f],
                E = h[m],
                _ = a[m],
                x = _ && _.prototype;
            if (x && (x[d] || s(x, d, g), x[u] || s(x, u, m), c[m] = g, E))
                for (i in n) x[i] || l(x, i, n[i], !0)
        }
    }, function(e) {
        ! function(t) {
            'use strict';

            function r(e, t, r, n) {
                var l = t && t.prototype instanceof o ? t : o,
                    a = Object.create(l.prototype),
                    s = new g(n || []);
                return a._invoke = c(e, r, s), a
            }

            function n(e, t, r) {
                try {
                    return {
                        type: 'normal',
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: 'throw',
                        arg: e
                    }
                }
            }

            function o() {}

            function l() {}

            function a() {}

            function s(e) {
                ['next', 'throw', 'return'].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function i(e) {
                function t(r, o, l, a) {
                    var s = n(e[r], e, o);
                    if ('throw' === s.type) a(s.arg);
                    else {
                        var i = s.arg,
                            c = i.value;
                        return c && 'object' == typeof c && m.call(c, '__await') ? Promise.resolve(c.__await).then(function(e) {
                            t('next', e, l, a)
                        }, function(e) {
                            t('throw', e, l, a)
                        }) : Promise.resolve(c).then(function(e) {
                            i.value = e, l(i)
                        }, a)
                    }
                }
                var r;
                this._invoke = function(e, n) {
                    function o() {
                        return new Promise(function(r, o) {
                            t(e, n, r, o)
                        })
                    }
                    return r = r ? r.then(o, o) : o()
                }
            }

            function c(e, t, r) {
                var o = P;
                return function(l, a) {
                    if (o == v) throw new Error('Generator is already running');
                    if (o == I) {
                        if ('throw' === l) throw a;
                        return y()
                    }
                    for (r.method = l, r.arg = a;;) {
                        var s = r.delegate;
                        if (s) {
                            var i = p(s, r);
                            if (i) {
                                if (i === A) continue;
                                return i
                            }
                        }
                        if ('next' === r.method) r.sent = r._sent = r.arg;
                        else if ('throw' === r.method) {
                            if (o == P) throw o = I, r.arg;
                            r.dispatchException(r.arg)
                        } else 'return' === r.method && r.abrupt('return', r.arg);
                        o = v;
                        var c = n(e, t, r);
                        if ('normal' === c.type) {
                            if (o = r.done ? I : O, c.arg === A) continue;
                            return {
                                value: c.arg,
                                done: r.done
                            }
                        }
                        'throw' === c.type && (o = I, r.method = 'throw', r.arg = c.arg)
                    }
                }
            }

            function p(e, t) {
                var r = e.iterator[t.method];
                if (void 0 === r) {
                    if (t.delegate = null, 'throw' === t.method) {
                        if (e.iterator.return && (t.method = 'return', t.arg = void 0, p(e, t), 'throw' === t.method)) return A;
                        t.method = 'throw', t.arg = new TypeError('The iterator does not provide a \'throw\' method')
                    }
                    return A
                }
                var o = n(r, e.iterator, t.arg);
                if ('throw' === o.type) return t.method = 'throw', t.arg = o.arg, t.delegate = null, A;
                var l = o.arg;
                if (!l) return t.method = 'throw', t.arg = new TypeError('iterator result is not an object'), t.delegate = null, A;
                if (l.done) t[e.resultName] = l.value, t.next = e.nextLoc, 'return' !== t.method && (t.method = 'next', t.arg = void 0);
                else return l;
                return t.delegate = null, A
            }

            function d(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function u(e) {
                var t = e.completion || {};
                t.type = 'normal', delete t.arg, e.completion = t
            }

            function g(e) {
                this.tryEntries = [{
                    tryLoc: 'root'
                }], e.forEach(d, this), this.reset(!0)
            }

            function h(e) {
                if (e) {
                    var t = e[_];
                    if (t) return t.call(e);
                    if ('function' == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1,
                            n = function t() {
                                for (; ++r < e.length;)
                                    if (m.call(e, r)) return t.value = e[r], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t
                            };
                        return n.next = n
                    }
                }
                return {
                    next: y
                }
            }

            function y() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            var f = Object.prototype,
                m = f.hasOwnProperty,
                E = 'function' == typeof Symbol ? Symbol : {},
                _ = E.iterator || '@@iterator',
                x = E.asyncIterator || '@@asyncIterator',
                S = E.toStringTag || '@@toStringTag',
                T = 'object' == typeof e,
                b = t.regeneratorRuntime;
            if (b) return void(T && (e.exports = b));
            b = t.regeneratorRuntime = T ? e.exports : {}, b.wrap = r;
            var P = 'suspendedStart',
                O = 'suspendedYield',
                v = 'executing',
                I = 'completed',
                A = {},
                R = {};
            R[_] = function() {
                return this
            };
            var k = Object.getPrototypeOf,
                L = k && k(k(h([])));
            L && L !== f && m.call(L, _) && (R = L);
            var F = a.prototype = o.prototype = Object.create(R);
            l.prototype = F.constructor = a, a.constructor = l, a[S] = l.displayName = 'GeneratorFunction', b.isGeneratorFunction = function(e) {
                var t = 'function' == typeof e && e.constructor;
                return !!t && (t === l || 'GeneratorFunction' === (t.displayName || t.name))
            }, b.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, !(S in e) && (e[S] = 'GeneratorFunction')), e.prototype = Object.create(F), e
            }, b.awrap = function(e) {
                return {
                    __await: e
                }
            }, s(i.prototype), i.prototype[x] = function() {
                return this
            }, b.AsyncIterator = i, b.async = function(e, t, n, o) {
                var l = new i(r(e, t, n, o));
                return b.isGeneratorFunction(t) ? l : l.next().then(function(e) {
                    return e.done ? e.value : l.next()
                })
            }, s(F), F[S] = 'Generator', F[_] = function() {
                return this
            }, F.toString = function() {
                return '[object Generator]'
            }, b.keys = function(e) {
                var t = [];
                for (var r in e) t.push(r);
                return t.reverse(),
                    function r() {
                        for (; t.length;) {
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
            }, b.values = h, g.prototype = {
                constructor: g,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = 'next', this.arg = void 0, this.tryEntries.forEach(u), !e)
                        for (var t in this) 't' === t.charAt(0) && m.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0],
                        t = e.completion;
                    if ('throw' === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    function t(t, n) {
                        return l.type = 'throw', l.arg = e, r.next = t, n && (r.method = 'next', r.arg = void 0), !!n
                    }
                    if (this.done) throw e;
                    for (var r = this, n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var o = this.tryEntries[n],
                            l = o.completion;
                        if ('root' === o.tryLoc) return t('end');
                        if (o.tryLoc <= this.prev) {
                            var a = m.call(o, 'catchLoc'),
                                s = m.call(o, 'finallyLoc');
                            if (a && s) {
                                if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                            } else if (!s) throw new Error('try statement without catch or finally');
                            else if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r, n = this.tryEntries.length - 1; 0 <= n; --n)
                        if (r = this.tryEntries[n], r.tryLoc <= this.prev && m.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                            var o = r;
                            break
                        } o && ('break' === e || 'continue' === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var l = o ? o.completion : {};
                    return l.type = e, l.arg = t, o ? (this.method = 'next', this.next = o.finallyLoc, A) : this.complete(l)
                },
                complete: function(e, t) {
                    if ('throw' === e.type) throw e.arg;
                    return 'break' === e.type || 'continue' === e.type ? this.next = e.arg : 'return' === e.type ? (this.rval = this.arg = e.arg, this.method = 'return', this.next = 'end') : 'normal' === e.type && t && (this.next = t), A
                },
                finish: function(e) {
                    for (var t, r = this.tryEntries.length - 1; 0 <= r; --r)
                        if (t = this.tryEntries[r], t.finallyLoc === e) return this.complete(t.completion, t.afterLoc), u(t), A
                },
                catch: function(e) {
                    for (var t, r = this.tryEntries.length - 1; 0 <= r; --r)
                        if (t = this.tryEntries[r], t.tryLoc === e) {
                            var n = t.completion;
                            if ('throw' === n.type) {
                                var o = n.arg;
                                u(t)
                            }
                            return o
                        } throw new Error('illegal catch attempt')
                },
                delegateYield: function(e, t, r) {
                    return this.delegate = {
                        iterator: h(e),
                        resultName: t,
                        nextLoc: r
                    }, 'next' === this.method && (this.arg = void 0), A
                }
            }
        }(function() {
            return this
        }() || Function('return this')())
    }, function(e, t, r) {
        'use strict';

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var r, n = 0; n < t.length; n++) r = t[n], r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            l = r(210),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(l),
            s = r(98),
            i = function() {
                function e(t) {
                    var r = t.send,
                        o = t.file,
                        l = t.reqId;
                    n(this, e), this.send = r, this.file = o, this.reqId = l;
                    var s = o.buffer;
                    this.checksum = (0, a.default)(Array.from(s)), this.size = s.length
                }
                return o(e, [{
                    key: 'requestUpload',
                    value: function() {
                        var e = this.file,
                            t = e.documentType,
                            r = e.documentFormat,
                            n = e.documentId,
                            o = e.expirationDate,
                            l = e.lifetimeValid,
                            a = e.pageType,
                            s = e.buffer,
                            i = e.proof_of_ownership,
                            c = e.document_issuing_country,
                            p = Object.assign(this.file.passthrough || {}, {
                                document_upload: !0
                            }),
                            d = {
                                req_id: this.reqId,
                                passthrough: p,
                                document_upload: 1,
                                document_type: t,
                                document_format: r.toUpperCase(),
                                expiration_date: o,
                                document_id: n,
                                file_size: s.length,
                                expected_checksum: this.checksum
                            };
                        a && (d.page_type = a), l && (d.lifetime_valid = l), i && (d.proof_of_ownership = i), c && (d.document_issuing_country = c), this.send(JSON.stringify(d))
                    }
                }, {
                    key: 'handleMessage',
                    value: function(e) {
                        var t = e.error,
                            r = e.document_upload,
                            n = e.passthrough;
                        if (t) return {
                            warning: t.code,
                            message: t.message,
                            passthrough: n
                        };
                        var o = r.checksum,
                            l = r.size,
                            a = r.upload_id,
                            i = r.call_type;
                        if (!o) return void this.startBinaryUpload(Object.assign({}, this.file, {
                            uploadId: a,
                            callType: i
                        }));
                        if (l !== this.size) throw (0, s.createError)('SizeMismatch', 'File size does not match', n);
                        if (o !== this.checksum) throw (0, s.createError)('ChecksumMismatch', 'Checksum does not match', n);
                        return {
                            document_upload: r,
                            passthrough: n
                        }
                    }
                }, {
                    key: 'startBinaryUpload',
                    value: function(e) {
                        for (var t = this, r = (0, s.addMetadata)((0, s.generateChunks)(e.buffer, e), e), n = function(e) {
                                return t.send(e)
                            }, o = 0; o < r.length; o++) n(r[o], o, r)
                    }
                }]), e
            }();
        t.default = i
    }, function(e, t, r) {
        (function() {
            var t = r(211),
                n = r(99).utf8,
                o = r(212),
                s = r(99).bin,
                l = function(e, r) {
                    e.constructor == String ? r && 'binary' === r.encoding ? e = s.stringToBytes(e) : e = n.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : !Array.isArray(e) && (e = e.toString());
                    for (var p = t.bytesToWords(e), u = 8 * e.length, g = 1732584193, a = -271733879, h = -1732584194, c = 271733878, d = 0; d < p.length; d++) p[d] = 16711935 & (p[d] << 8 | p[d] >>> 24) | 4278255360 & (p[d] << 24 | p[d] >>> 8);
                    p[u >>> 5] |= 128 << u % 32, p[(u + 64 >>> 9 << 4) + 14] = u;
                    for (var i = l._ff, y = l._gg, f = l._hh, m = l._ii, d = 0; d < p.length; d += 16) {
                        var E = g,
                            _ = a,
                            x = h,
                            S = c;
                        g = i(g, a, h, c, p[d + 0], 7, -680876936), c = i(c, g, a, h, p[d + 1], 12, -389564586), h = i(h, c, g, a, p[d + 2], 17, 606105819), a = i(a, h, c, g, p[d + 3], 22, -1044525330), g = i(g, a, h, c, p[d + 4], 7, -176418897), c = i(c, g, a, h, p[d + 5], 12, 1200080426), h = i(h, c, g, a, p[d + 6], 17, -1473231341), a = i(a, h, c, g, p[d + 7], 22, -45705983), g = i(g, a, h, c, p[d + 8], 7, 1770035416), c = i(c, g, a, h, p[d + 9], 12, -1958414417), h = i(h, c, g, a, p[d + 10], 17, -42063), a = i(a, h, c, g, p[d + 11], 22, -1990404162), g = i(g, a, h, c, p[d + 12], 7, 1804603682), c = i(c, g, a, h, p[d + 13], 12, -40341101), h = i(h, c, g, a, p[d + 14], 17, -1502002290), a = i(a, h, c, g, p[d + 15], 22, 1236535329), g = y(g, a, h, c, p[d + 1], 5, -165796510), c = y(c, g, a, h, p[d + 6], 9, -1069501632), h = y(h, c, g, a, p[d + 11], 14, 643717713), a = y(a, h, c, g, p[d + 0], 20, -373897302), g = y(g, a, h, c, p[d + 5], 5, -701558691), c = y(c, g, a, h, p[d + 10], 9, 38016083), h = y(h, c, g, a, p[d + 15], 14, -660478335), a = y(a, h, c, g, p[d + 4], 20, -405537848), g = y(g, a, h, c, p[d + 9], 5, 568446438), c = y(c, g, a, h, p[d + 14], 9, -1019803690), h = y(h, c, g, a, p[d + 3], 14, -187363961), a = y(a, h, c, g, p[d + 8], 20, 1163531501), g = y(g, a, h, c, p[d + 13], 5, -1444681467), c = y(c, g, a, h, p[d + 2], 9, -51403784), h = y(h, c, g, a, p[d + 7], 14, 1735328473), a = y(a, h, c, g, p[d + 12], 20, -1926607734), g = f(g, a, h, c, p[d + 5], 4, -378558), c = f(c, g, a, h, p[d + 8], 11, -2022574463), h = f(h, c, g, a, p[d + 11], 16, 1839030562), a = f(a, h, c, g, p[d + 14], 23, -35309556), g = f(g, a, h, c, p[d + 1], 4, -1530992060), c = f(c, g, a, h, p[d + 4], 11, 1272893353), h = f(h, c, g, a, p[d + 7], 16, -155497632), a = f(a, h, c, g, p[d + 10], 23, -1094730640), g = f(g, a, h, c, p[d + 13], 4, 681279174), c = f(c, g, a, h, p[d + 0], 11, -358537222), h = f(h, c, g, a, p[d + 3], 16, -722521979), a = f(a, h, c, g, p[d + 6], 23, 76029189), g = f(g, a, h, c, p[d + 9], 4, -640364487), c = f(c, g, a, h, p[d + 12], 11, -421815835), h = f(h, c, g, a, p[d + 15], 16, 530742520), a = f(a, h, c, g, p[d + 2], 23, -995338651), g = m(g, a, h, c, p[d + 0], 6, -198630844), c = m(c, g, a, h, p[d + 7], 10, 1126891415), h = m(h, c, g, a, p[d + 14], 15, -1416354905), a = m(a, h, c, g, p[d + 5], 21, -57434055), g = m(g, a, h, c, p[d + 12], 6, 1700485571), c = m(c, g, a, h, p[d + 3], 10, -1894986606), h = m(h, c, g, a, p[d + 10], 15, -1051523), a = m(a, h, c, g, p[d + 1], 21, -2054922799), g = m(g, a, h, c, p[d + 8], 6, 1873313359), c = m(c, g, a, h, p[d + 15], 10, -30611744), h = m(h, c, g, a, p[d + 6], 15, -1560198380), a = m(a, h, c, g, p[d + 13], 21, 1309151649), g = m(g, a, h, c, p[d + 4], 6, -145523070), c = m(c, g, a, h, p[d + 11], 10, -1120210379), h = m(h, c, g, a, p[d + 2], 15, 718787259), a = m(a, h, c, g, p[d + 9], 21, -343485551), g = g + E >>> 0, a = a + _ >>> 0, h = h + x >>> 0, c = c + S >>> 0
                    }
                    return t.endian([g, a, h, c])
                };
            l._ff = function(e, r, o, l, a, i, s) {
                var t = e + (r & o | ~r & l) + (a >>> 0) + s;
                return (t << i | t >>> 32 - i) + r
            }, l._gg = function(e, r, o, l, a, i, s) {
                var t = e + (r & l | o & ~l) + (a >>> 0) + s;
                return (t << i | t >>> 32 - i) + r
            }, l._hh = function(e, r, o, l, a, i, s) {
                var t = e + (r ^ o ^ l) + (a >>> 0) + s;
                return (t << i | t >>> 32 - i) + r
            }, l._ii = function(e, r, o, l, a, i, s) {
                var t = e + (o ^ (r | ~l)) + (a >>> 0) + s;
                return (t << i | t >>> 32 - i) + r
            }, l._blocksize = 16, l._digestsize = 16, e.exports = function(e, r) {
                if (e === void 0 || null === e) throw new Error('Illegal argument ' + e);
                var n = t.wordsToBytes(l(e, r));
                return r && r.asBytes ? n : r && r.asString ? s.bytesToString(n) : t.bytesToHex(n)
            }
        })()
    }, function(e) {
        (function() {
            var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                r = {
                    rotl: function(e, t) {
                        return e << t | e >>> 32 - t
                    },
                    rotr: function(e, t) {
                        return e << 32 - t | e >>> t
                    },
                    endian: function(e) {
                        if (e.constructor == Number) return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
                        for (var t = 0; t < e.length; t++) e[t] = r.endian(e[t]);
                        return e
                    },
                    randomBytes: function(e) {
                        for (var t = []; 0 < e; e--) t.push(p(256 * Math.random()));
                        return t
                    },
                    bytesToWords: function(e) {
                        for (var t = [], r = 0, n = 0; r < e.length; r++, n += 8) t[n >>> 5] |= e[r] << 24 - n % 32;
                        return t
                    },
                    wordsToBytes: function(e) {
                        for (var t = [], r = 0; r < 32 * e.length; r += 8) t.push(255 & e[r >>> 5] >>> 24 - r % 32);
                        return t
                    },
                    bytesToHex: function(e) {
                        for (var t = [], r = 0; r < e.length; r++) t.push((e[r] >>> 4).toString(16)), t.push((15 & e[r]).toString(16));
                        return t.join('')
                    },
                    hexToBytes: function(e) {
                        for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
                        return t
                    },
                    bytesToBase64: function(e) {
                        for (var r, n = [], o = 0; o < e.length; o += 3) {
                            r = e[o] << 16 | e[o + 1] << 8 | e[o + 2];
                            for (var l = 0; 4 > l; l++) 8 * o + 6 * l <= 8 * e.length ? n.push(t.charAt(63 & r >>> 6 * (3 - l))) : n.push('=')
                        }
                        return n.join('')
                    },
                    base64ToBytes: function(e) {
                        e = e.replace(/[^A-Z0-9+\/]/ig, '');
                        for (var r = [], n = 0, l = 0; n < e.length; l = ++n % 4) 0 != l && r.push((t.indexOf(e.charAt(n - 1)) & o(2, -2 * l + 8) - 1) << 2 * l | t.indexOf(e.charAt(n)) >>> 6 - 2 * l);
                        return r
                    }
                };
            e.exports = r
        })()
    }, function(e) {
        function t(e) {
            return !!e.constructor && 'function' == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }

        function r(e) {
            return 'function' == typeof e.readFloatLE && 'function' == typeof e.slice && t(e.slice(0, 0))
        }
        e.exports = function(e) {
            return null != e && (t(e) || r(e) || !!e._isBuffer)
        }
    }])['default']
});