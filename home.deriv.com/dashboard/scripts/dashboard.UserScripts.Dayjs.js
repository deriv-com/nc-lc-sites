! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e()
}(this, (function() {
    "use strict";

    function t(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    var e, n = {
        exports: {}
    };
    var r, s = (e || (e = 1, function(t) {
            t.exports = function() {
                var t = 1e3,
                    e = 6e4,
                    n = 36e5,
                    r = "millisecond",
                    s = "second",
                    i = "minute",
                    u = "hour",
                    a = "day",
                    o = "week",
                    f = "month",
                    c = "quarter",
                    h = "year",
                    l = "date",
                    d = "Invalid Date",
                    $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    g = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        ordinal: function(t) {
                            var e = ["th", "st", "nd", "rd"],
                                n = t % 100;
                            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]"
                        }
                    },
                    m = function(t, e, n) {
                        var r = String(t);
                        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t
                    },
                    D = {
                        s: m,
                        z: function(t) {
                            var e = -t.utcOffset(),
                                n = Math.abs(e),
                                r = Math.floor(n / 60),
                                s = n % 60;
                            return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(s, 2, "0")
                        },
                        m: function t(e, n) {
                            if (e.date() < n.date()) return -t(n, e);
                            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                                s = e.clone().add(r, f),
                                i = n - s < 0,
                                u = e.clone().add(r + (i ? -1 : 1), f);
                            return +(-(r + (n - s) / (i ? s - u : u - s)) || 0)
                        },
                        a: function(t) {
                            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                        },
                        p: function(t) {
                            return {
                                M: f,
                                y: h,
                                w: o,
                                d: a,
                                D: l,
                                h: u,
                                m: i,
                                s: s,
                                ms: r,
                                Q: c
                            } [t] || String(t || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(t) {
                            return void 0 === t
                        }
                    },
                    M = "en",
                    y = {};
                y[M] = g;
                var p = "$isDayjsObject",
                    S = function(t) {
                        return t instanceof b || !(!t || !t[p])
                    },
                    O = function t(e, n, r) {
                        var s;
                        if (!e) return M;
                        if ("string" == typeof e) {
                            var i = e.toLowerCase();
                            y[i] && (s = i), n && (y[i] = n, s = i);
                            var u = e.split("-");
                            if (!s && u.length > 1) return t(u[0])
                        } else {
                            var a = e.name;
                            y[a] = e, s = a
                        }
                        return !r && s && (M = s), s || !r && M
                    },
                    w = function(t, e) {
                        if (S(t)) return t.clone();
                        var n = "object" == typeof e ? e : {};
                        return n.date = t, n.args = arguments, new b(n)
                    },
                    T = D;
                T.l = O, T.i = S, T.w = function(t, e) {
                    return w(t, {
                        locale: e.$L,
                        utc: e.$u,
                        x: e.$x,
                        $offset: e.$offset
                    })
                };
                var b = function() {
                        function g(t) {
                            this.$L = O(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0
                        }
                        var m = g.prototype;
                        return m.parse = function(t) {
                            this.$d = function(t) {
                                var e = t.date,
                                    n = t.utc;
                                if (null === e) return new Date(NaN);
                                if (T.u(e)) return new Date;
                                if (e instanceof Date) return new Date(e);
                                if ("string" == typeof e && !/Z$/i.test(e)) {
                                    var r = e.match($);
                                    if (r) {
                                        var s = r[2] - 1 || 0,
                                            i = (r[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(r[1], s, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], s, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)
                                    }
                                }
                                return new Date(e)
                            }(t), this.init()
                        }, m.init = function() {
                            var t = this.$d;
                            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                        }, m.$utils = function() {
                            return T
                        }, m.isValid = function() {
                            return !(this.$d.toString() === d)
                        }, m.isSame = function(t, e) {
                            var n = w(t);
                            return this.startOf(e) <= n && n <= this.endOf(e)
                        }, m.isAfter = function(t, e) {
                            return w(t) < this.startOf(e)
                        }, m.isBefore = function(t, e) {
                            return this.endOf(e) < w(t)
                        }, m.$g = function(t, e, n) {
                            return T.u(t) ? this[e] : this.set(n, t)
                        }, m.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, m.valueOf = function() {
                            return this.$d.getTime()
                        }, m.startOf = function(t, e) {
                            var n = this,
                                r = !!T.u(e) || e,
                                c = T.p(t),
                                d = function(t, e) {
                                    var s = T.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                                    return r ? s : s.endOf(a)
                                },
                                $ = function(t, e) {
                                    return T.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
                                },
                                v = this.$W,
                                g = this.$M,
                                m = this.$D,
                                D = "set" + (this.$u ? "UTC" : "");
                            switch (c) {
                                case h:
                                    return r ? d(1, 0) : d(31, 11);
                                case f:
                                    return r ? d(1, g) : d(0, g + 1);
                                case o:
                                    var M = this.$locale().weekStart || 0,
                                        y = (v < M ? v + 7 : v) - M;
                                    return d(r ? m - y : m + (6 - y), g);
                                case a:
                                case l:
                                    return $(D + "Hours", 0);
                                case u:
                                    return $(D + "Minutes", 1);
                                case i:
                                    return $(D + "Seconds", 2);
                                case s:
                                    return $(D + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, m.endOf = function(t) {
                            return this.startOf(t, !1)
                        }, m.$set = function(t, e) {
                            var n, o = T.p(t),
                                c = "set" + (this.$u ? "UTC" : ""),
                                d = (n = {}, n[a] = c + "Date", n[l] = c + "Date", n[f] = c + "Month", n[h] = c + "FullYear", n[u] = c + "Hours", n[i] = c + "Minutes", n[s] = c + "Seconds", n[r] = c + "Milliseconds", n)[o],
                                $ = o === a ? this.$D + (e - this.$W) : e;
                            if (o === f || o === h) {
                                var v = this.clone().set(l, 1);
                                v.$d[d]($), v.init(), this.$d = v.set(l, Math.min(this.$D, v.daysInMonth())).$d
                            } else d && this.$d[d]($);
                            return this.init(), this
                        }, m.set = function(t, e) {
                            return this.clone().$set(t, e)
                        }, m.get = function(t) {
                            return this[T.p(t)]()
                        }, m.add = function(r, c) {
                            var l, d = this;
                            r = Number(r);
                            var $ = T.p(c),
                                v = function(t) {
                                    var e = w(d);
                                    return T.w(e.date(e.date() + Math.round(t * r)), d)
                                };
                            if ($ === f) return this.set(f, this.$M + r);
                            if ($ === h) return this.set(h, this.$y + r);
                            if ($ === a) return v(1);
                            if ($ === o) return v(7);
                            var g = (l = {}, l[i] = e, l[u] = n, l[s] = t, l)[$] || 1,
                                m = this.$d.getTime() + r * g;
                            return T.w(m, this)
                        }, m.subtract = function(t, e) {
                            return this.add(-1 * t, e)
                        }, m.format = function(t) {
                            var e = this,
                                n = this.$locale();
                            if (!this.isValid()) return n.invalidDate || d;
                            var r = t || "YYYY-MM-DDTHH:mm:ssZ",
                                s = T.z(this),
                                i = this.$H,
                                u = this.$m,
                                a = this.$M,
                                o = n.weekdays,
                                f = n.months,
                                c = n.meridiem,
                                h = function(t, n, s, i) {
                                    return t && (t[n] || t(e, r)) || s[n].slice(0, i)
                                },
                                l = function(t) {
                                    return T.s(i % 12 || 12, t, "0")
                                },
                                $ = c || function(t, e, n) {
                                    var r = t < 12 ? "AM" : "PM";
                                    return n ? r.toLowerCase() : r
                                };
                            return r.replace(v, (function(t, r) {
                                return r || function(t) {
                                    switch (t) {
                                        case "YY":
                                            return String(e.$y).slice(-2);
                                        case "YYYY":
                                            return T.s(e.$y, 4, "0");
                                        case "M":
                                            return a + 1;
                                        case "MM":
                                            return T.s(a + 1, 2, "0");
                                        case "MMM":
                                            return h(n.monthsShort, a, f, 3);
                                        case "MMMM":
                                            return h(f, a);
                                        case "D":
                                            return e.$D;
                                        case "DD":
                                            return T.s(e.$D, 2, "0");
                                        case "d":
                                            return String(e.$W);
                                        case "dd":
                                            return h(n.weekdaysMin, e.$W, o, 2);
                                        case "ddd":
                                            return h(n.weekdaysShort, e.$W, o, 3);
                                        case "dddd":
                                            return o[e.$W];
                                        case "H":
                                            return String(i);
                                        case "HH":
                                            return T.s(i, 2, "0");
                                        case "h":
                                            return l(1);
                                        case "hh":
                                            return l(2);
                                        case "a":
                                            return $(i, u, !0);
                                        case "A":
                                            return $(i, u, !1);
                                        case "m":
                                            return String(u);
                                        case "mm":
                                            return T.s(u, 2, "0");
                                        case "s":
                                            return String(e.$s);
                                        case "ss":
                                            return T.s(e.$s, 2, "0");
                                        case "SSS":
                                            return T.s(e.$ms, 3, "0");
                                        case "Z":
                                            return s
                                    }
                                    return null
                                }(t) || s.replace(":", "")
                            }))
                        }, m.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, m.diff = function(r, l, d) {
                            var $, v = this,
                                g = T.p(l),
                                m = w(r),
                                D = (m.utcOffset() - this.utcOffset()) * e,
                                M = this - m,
                                y = function() {
                                    return T.m(v, m)
                                };
                            switch (g) {
                                case h:
                                    $ = y() / 12;
                                    break;
                                case f:
                                    $ = y();
                                    break;
                                case c:
                                    $ = y() / 3;
                                    break;
                                case o:
                                    $ = (M - D) / 6048e5;
                                    break;
                                case a:
                                    $ = (M - D) / 864e5;
                                    break;
                                case u:
                                    $ = M / n;
                                    break;
                                case i:
                                    $ = M / e;
                                    break;
                                case s:
                                    $ = M / t;
                                    break;
                                default:
                                    $ = M
                            }
                            return d ? $ : T.a($)
                        }, m.daysInMonth = function() {
                            return this.endOf(f).$D
                        }, m.$locale = function() {
                            return y[this.$L]
                        }, m.locale = function(t, e) {
                            if (!t) return this.$L;
                            var n = this.clone(),
                                r = O(t, e, !0);
                            return r && (n.$L = r), n
                        }, m.clone = function() {
                            return T.w(this.$d, this)
                        }, m.toDate = function() {
                            return new Date(this.valueOf())
                        }, m.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, m.toISOString = function() {
                            return this.$d.toISOString()
                        }, m.toString = function() {
                            return this.$d.toUTCString()
                        }, g
                    }(),
                    Y = b.prototype;
                return w.prototype = Y, [
                    ["$ms", r],
                    ["$s", s],
                    ["$m", i],
                    ["$H", u],
                    ["$W", a],
                    ["$M", f],
                    ["$y", h],
                    ["$D", l]
                ].forEach((function(t) {
                    Y[t[1]] = function(e) {
                        return this.$g(e, t[0], t[1])
                    }
                })), w.extend = function(t, e) {
                    return t.$i || (t(e, b, w), t.$i = !0), w
                }, w.locale = O, w.isDayjs = S, w.unix = function(t) {
                    return w(1e3 * t)
                }, w.en = y[M], w.Ls = y, w.p = {}, w
            }()
        }(n)), n.exports),
        i = t(s),
        u = {
            exports: {}
        };
    var a = (r || (r = 1, function(t) {
            var e, n, r;
            t.exports = (e = "minute", n = /[+-]\d\d(?::?\d\d)?/g, r = /([+-]|\d\d)/g, function(t, s, i) {
                var u = s.prototype;
                i.utc = function(t) {
                    return new s({
                        date: t,
                        utc: !0,
                        args: arguments
                    })
                }, u.utc = function(t) {
                    var n = i(this.toDate(), {
                        locale: this.$L,
                        utc: !0
                    });
                    return t ? n.add(this.utcOffset(), e) : n
                }, u.local = function() {
                    return i(this.toDate(), {
                        locale: this.$L,
                        utc: !1
                    })
                };
                var a = u.parse;
                u.parse = function(t) {
                    t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), a.call(this, t)
                };
                var o = u.init;
                u.init = function() {
                    if (this.$u) {
                        var t = this.$d;
                        this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds()
                    } else o.call(this)
                };
                var f = u.utcOffset;
                u.utcOffset = function(t, s) {
                    var i = this.$utils().u;
                    if (i(t)) return this.$u ? 0 : i(this.$offset) ? f.call(this) : this.$offset;
                    if ("string" == typeof t && (t = function(t) {
                            void 0 === t && (t = "");
                            var e = t.match(n);
                            if (!e) return null;
                            var s = ("" + e[0]).match(r) || ["-", 0, 0],
                                i = s[0],
                                u = 60 * +s[1] + +s[2];
                            return 0 === u ? 0 : "+" === i ? u : -u
                        }(t), null === t)) return this;
                    var u = Math.abs(t) <= 16 ? 60 * t : t,
                        a = this;
                    if (s) return a.$offset = u, a.$u = 0 === t, a;
                    if (0 !== t) {
                        var o = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                        (a = this.local().add(u + o, e)).$offset = u, a.$x.$localOffset = o
                    } else a = this.utc();
                    return a
                };
                var c = u.format;
                u.format = function(t) {
                    var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                    return c.call(this, e)
                }, u.valueOf = function() {
                    var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                    return this.$d.valueOf() - 6e4 * t
                }, u.isUTC = function() {
                    return !!this.$u
                }, u.toISOString = function() {
                    return this.toDate().toISOString()
                }, u.toString = function() {
                    return this.toDate().toUTCString()
                };
                var h = u.toDate;
                u.toDate = function(t) {
                    return "s" === t && this.$offset ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : h.call(this)
                };
                var l = u.diff;
                u.diff = function(t, e, n) {
                    if (t && this.$u === t.$u) return l.call(this, t, e, n);
                    var r = this.local(),
                        s = i(t).local();
                    return l.call(r, s, e, n)
                }
            })
        }(u)), u.exports),
        o = t(a);
    return i.extend(o), i
}));