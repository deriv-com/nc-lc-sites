!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/broken-axis", ["highcharts"], function(i) {
        return t(i), t.Highcharts = i, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var i = t ? t._modules : {};

    function e(t, i, e, s) {
        t.hasOwnProperty(i) || (t[i] = s.apply(null, e), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: i,
                module: t[i]
            }
        })))
    }
    e(i, "Core/Axis/BrokenAxis.js", [i["Core/Axis/Stacking/StackItem.js"], i["Core/Utilities.js"]], function(t, i) {
        var e;
        let {
            addEvent: s,
            find: n,
            fireEvent: o,
            isArray: r,
            isNumber: a,
            pick: l
        } = i;
        return function(i) {
            function e() {
                void 0 !== this.brokenAxis && this.brokenAxis.setBreaks(this.options.breaks, !1)
            }

            function f() {
                this.brokenAxis?.hasBreaks && (this.options.ordinal = !1)
            }

            function h() {
                let t = this.brokenAxis;
                if (t?.hasBreaks) {
                    let i = this.tickPositions,
                        e = this.tickPositions.info,
                        s = [];
                    for (let e = 0; e < i.length; e++) t.isInAnyBreak(i[e]) || s.push(i[e]);
                    this.tickPositions = s, this.tickPositions.info = e
                }
            }

            function u() {
                this.brokenAxis || (this.brokenAxis = new x(this))
            }

            function c() {
                let {
                    isDirty: t,
                    options: {
                        connectNulls: i
                    },
                    points: e,
                    xAxis: s,
                    yAxis: n
                } = this;
                if (t) {
                    let t = e.length;
                    for (; t--;) {
                        let o = e[t],
                            r = !(null === o.y && !1 === i) && (s?.brokenAxis?.isInAnyBreak(o.x, !0) || n?.brokenAxis?.isInAnyBreak(o.y, !0));
                        o.visible = !r && !1 !== o.options.visible
                    }
                }
            }

            function k() {
                this.drawBreaks(this.xAxis, ["x"]), this.drawBreaks(this.yAxis, l(this.pointArrayMap, ["y"]))
            }

            function p(t, i) {
                let e, s, n;
                let r = this,
                    f = r.points;
                if (t?.brokenAxis?.hasBreaks) {
                    let h = t.brokenAxis;
                    i.forEach(function(i) {
                        e = h?.breakArray || [], s = t.isXAxis ? t.min : l(r.options.threshold, t.min);
                        let u = t?.options?.breaks?.filter(function(t) {
                            let i = !0;
                            for (let s = 0; s < e.length; s++) {
                                let n = e[s];
                                if (n.from === t.from && n.to === t.to) {
                                    i = !1;
                                    break
                                }
                            }
                            return i
                        });
                        f.forEach(function(r) {
                            n = l(r["stack" + i.toUpperCase()], r[i]), e.forEach(function(i) {
                                if (a(s) && a(n)) {
                                    let e = "";
                                    s < i.from && n > i.to || s > i.from && n < i.from ? e = "pointBreak" : (s < i.from && n > i.from && n < i.to || s > i.from && n > i.to && n < i.from) && (e = "pointInBreak"), e && o(t, e, {
                                        point: r,
                                        brk: i
                                    })
                                }
                            }), u?.forEach(function(i) {
                                o(t, "pointOutsideOfBreak", {
                                    point: r,
                                    brk: i
                                })
                            })
                        })
                    })
                }
            }

            function m() {
                let i = this.currentDataGrouping,
                    e = i?.gapSize,
                    s = this.points.slice(),
                    n = this.yAxis,
                    o = this.options.gapSize,
                    r = s.length - 1;
                if (o && r > 0) {
                    let i, a;
                    for ("value" !== this.options.gapUnit && (o *= this.basePointRange), e && e > o && e >= this.basePointRange && (o = e); r--;)
                        if (a && !1 !== a.visible || (a = s[r + 1]), i = s[r], !1 !== a.visible && !1 !== i.visible) {
                            if (a.x - i.x > o) {
                                let e = (i.x + a.x) / 2;
                                s.splice(r + 1, 0, {
                                    isNull: !0,
                                    x: e
                                }), n.stacking && this.options.stacking && ((n.stacking.stacks[this.stackKey][e] = new t(n, n.options.stackLabels, !1, e, this.stack)).total = 0)
                            }
                            a = i
                        }
                }
                return this.getGraphPath(s)
            }
            i.compose = function(t, i) {
                if (!t.keepProps.includes("brokenAxis")) {
                    t.keepProps.push("brokenAxis"), s(t, "init", u), s(t, "afterInit", e), s(t, "afterSetTickPositions", h), s(t, "afterSetOptions", f);
                    let n = i.prototype;
                    n.drawBreaks = p, n.gappedPath = m, s(i, "afterGeneratePoints", c), s(i, "afterRender", k)
                }
                return t
            };
            class x {
                static isInBreak(t, i) {
                    let e = t.repeat || 1 / 0,
                        s = t.from,
                        n = t.to - t.from,
                        o = i >= s ? (i - s) % e : e - (s - i) % e;
                    return t.inclusive ? o <= n : o < n && 0 !== o
                }
                static lin2Val(t) {
                    let i = this.brokenAxis,
                        e = i && i.breakArray;
                    if (!e || !a(t)) return t;
                    let s = t,
                        n, o;
                    for (o = 0; o < e.length && !((n = e[o]).from >= s); o++) n.to < s ? s += n.len : x.isInBreak(n, s) && (s += n.len);
                    return s
                }
                static val2Lin(t) {
                    let i = this.brokenAxis,
                        e = i && i.breakArray;
                    if (!e || !a(t)) return t;
                    let s = t,
                        n, o;
                    for (o = 0; o < e.length; o++)
                        if ((n = e[o]).to <= t) s -= n.len;
                        else if (n.from >= t) break;
                    else if (x.isInBreak(n, t)) {
                        s -= t - n.from;
                        break
                    }
                    return s
                }
                constructor(t) {
                    this.hasBreaks = !1, this.axis = t
                }
                findBreakAt(t, i) {
                    return n(i, function(i) {
                        return i.from < t && t < i.to
                    })
                }
                isInAnyBreak(t, i) {
                    let e = this.axis,
                        s = e.options.breaks || [],
                        n = s.length,
                        o, r, f;
                    if (n && a(t)) {
                        for (; n--;) x.isInBreak(s[n], t) && (o = !0, r || (r = l(s[n].showPoints, !e.isXAxis)));
                        f = o && i ? o && !r : o
                    }
                    return f
                }
                setBreaks(t, i) {
                    let e = this,
                        s = e.axis,
                        n = r(t) && !!t.length && !!Object.keys(t[0]).length;
                    s.isDirty = e.hasBreaks !== n, e.hasBreaks = n, t !== s.options.breaks && (s.options.breaks = s.userOptions.breaks = t), s.forceRedraw = !0, s.series.forEach(function(t) {
                        t.isDirty = !0
                    }), n || s.val2lin !== x.val2Lin || (delete s.val2lin, delete s.lin2val), n && (s.userOptions.ordinal = !1, s.lin2val = x.lin2Val, s.val2lin = x.val2Lin, s.setExtremes = function(t, i, n, o, r) {
                        if (e.hasBreaks) {
                            let s;
                            let n = this.options.breaks || [];
                            for (; s = e.findBreakAt(t, n);) t = s.to;
                            for (; s = e.findBreakAt(i, n);) i = s.from;
                            i < t && (i = t)
                        }
                        s.constructor.prototype.setExtremes.call(this, t, i, n, o, r)
                    }, s.setAxisTranslation = function() {
                        if (s.constructor.prototype.setAxisTranslation.call(this), e.unitLength = void 0, e.hasBreaks) {
                            let t = s.options.breaks || [],
                                i = [],
                                n = [],
                                r = l(s.pointRangePadding, 0),
                                f = 0,
                                h, u, c = s.userMin || s.min,
                                k = s.userMax || s.max,
                                p, m;
                            t.forEach(function(t) {
                                u = t.repeat || 1 / 0, a(c) && a(k) && (x.isInBreak(t, c) && (c += t.to % u - c % u), x.isInBreak(t, k) && (k -= k % u - t.from % u))
                            }), t.forEach(function(t) {
                                if (p = t.from, u = t.repeat || 1 / 0, a(c) && a(k)) {
                                    for (; p - u > c;) p -= u;
                                    for (; p < c;) p += u;
                                    for (m = p; m < k; m += u) i.push({
                                        value: m,
                                        move: "in"
                                    }), i.push({
                                        value: m + t.to - t.from,
                                        move: "out",
                                        size: t.breakSize
                                    })
                                }
                            }), i.sort(function(t, i) {
                                return t.value === i.value ? ("in" === t.move ? 0 : 1) - ("in" === i.move ? 0 : 1) : t.value - i.value
                            }), h = 0, p = c, i.forEach(function(t) {
                                1 === (h += "in" === t.move ? 1 : -1) && "in" === t.move && (p = t.value), 0 === h && a(p) && (n.push({
                                    from: p,
                                    to: t.value,
                                    len: t.value - p - (t.size || 0)
                                }), f += t.value - p - (t.size || 0))
                            }), e.breakArray = n, a(c) && a(k) && a(s.min) && (e.unitLength = k - c - f + r, o(s, "afterBreaks"), s.staticScale ? s.transA = s.staticScale : e.unitLength && (s.transA *= (k - s.min + r) / e.unitLength), r && (s.minPixelPadding = s.transA * (s.minPointOffset || 0)), s.min = c, s.max = k)
                        }
                    }), l(i, !0) && s.chart.redraw()
                }
            }
            i.Additions = x
        }(e || (e = {})), e
    }), e(i, "masters/modules/broken-axis.src.js", [i["Core/Globals.js"], i["Core/Axis/BrokenAxis.js"]], function(t, i) {
        return t.BrokenAxis = t.BrokenAxis || i, t.BrokenAxis.compose(t.Axis, t.Series), t
    })
}); //# sourceMappingURL=broken-axis.js.map