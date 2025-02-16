!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * X-range series
 *
 * (c) 2010-2024 Torstein Honsi, Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/xrange", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function i(t, e, i, s) {
        t.hasOwnProperty(e) || (t[e] = s.apply(null, i), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: e,
                module: t[e]
            }
        })))
    }
    i(e, "Series/XRange/XRangeSeriesDefaults.js", [e["Core/Utilities.js"]], function(t) {
        let {
            correctFloat: e,
            isNumber: i,
            isObject: s
        } = t;
        return {
            colorByPoint: !0,
            dataLabels: {
                formatter: function() {
                    let t = this.point.partialFill;
                    if (s(t) && (t = t.amount), i(t) && t > 0) return e(100 * t) + "%"
                },
                inside: !0,
                verticalAlign: "middle",
                style: {
                    whiteSpace: "nowrap"
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size: 0.8em">{point.x} - {point.x2}</span><br/>',
                pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.yCategory}</b><br/>'
            },
            borderRadius: 3,
            pointRange: 0
        }
    }), i(e, "Series/XRange/XRangePoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            column: {
                prototype: {
                    pointClass: i
                }
            }
        } = t.seriesTypes, {
            extend: s
        } = e;
        class o extends i {
            static getColorByCategory(t, e) {
                let i = t.options.colors || t.chart.options.colors,
                    s = i ? i.length : t.chart.options.chart.colorCount,
                    o = e.y % s,
                    r = i && i[o];
                return {
                    colorIndex: o,
                    color: r
                }
            }
            resolveColor() {
                let t = this.series;
                if (t.options.colorByPoint && !this.options.color) {
                    let e = o.getColorByCategory(t, this);
                    t.chart.styledMode || (this.color = e.color), this.options.colorIndex || (this.colorIndex = e.colorIndex)
                } else this.color = this.options.color || t.color
            }
            constructor(t, e) {
                super(t, e), this.y || (this.y = 0)
            }
            setState() {
                super.setState.apply(this, arguments), this.series.drawPoint(this, this.series.getAnimationVerb())
            }
            getLabelConfig() {
                let t = super.getLabelConfig.call(this),
                    e = this.series.yAxis.categories;
                return t.x2 = this.x2, t.yCategory = this.yCategory = e && e[this.y], t.key = this.category || this.name, t
            }
            isValid() {
                return "number" == typeof this.x && "number" == typeof this.x2
            }
        }
        return s(o.prototype, {
            ttBelow: !1,
            tooltipDateKeys: ["x", "x2"]
        }), o
    }), i(e, "Series/XRange/XRangeSeries.js", [e["Core/Globals.js"], e["Core/Color/Color.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"], e["Series/XRange/XRangeSeriesDefaults.js"], e["Series/XRange/XRangePoint.js"]], function(t, e, i, s, o, r) {
        let {
            composed: a,
            noop: l
        } = t, {
            parse: n
        } = e, {
            column: h
        } = i.seriesTypes, {
            addEvent: p,
            clamp: d,
            defined: c,
            extend: g,
            find: u,
            isNumber: f,
            isObject: x,
            merge: y,
            pick: m,
            pushUnique: C,
            relativeLength: A
        } = s;

        function b() {
            let t, e;
            if (this.isXAxis) {
                for (let i of (t = m(this.dataMax, -Number.MAX_VALUE), this.series))
                    if (i.x2Data)
                        for (let s of i.x2Data) s && s > t && (t = s, e = !0);
                e && (this.dataMax = t)
            }
        }
        class w extends h {
            static compose(t) {
                C(a, "Series.XRange") && p(t, "afterGetSeriesExtremes", b)
            }
            init() {
                super.init.apply(this, arguments), this.options.stacking = void 0
            }
            getColumnMetrics() {
                let t = () => {
                    for (let t of this.chart.series) {
                        let e = t.xAxis;
                        t.xAxis = t.yAxis, t.yAxis = e
                    }
                };
                t();
                let e = super.getColumnMetrics();
                return t(), e
            }
            cropData(t, e, i, s) {
                let o = super.cropData(this.x2Data, e, i, s);
                return o.xData = t.slice(o.start, o.end), o
            }
            findPointIndex(t) {
                let e;
                let {
                    cropStart: i,
                    points: s
                } = this, {
                    id: o
                } = t;
                if (o) {
                    let t = u(s, t => t.id === o);
                    e = t ? t.index : void 0
                }
                if (void 0 === e) {
                    let i = u(s, e => e.x === t.x && e.x2 === t.x2 && !e.touched);
                    e = i ? i.index : void 0
                }
                return this.cropped && f(e) && f(i) && e >= i && (e -= i), e
            }
            alignDataLabel(t) {
                let e = t.plotX;
                t.plotX = m(t.dlBox && t.dlBox.centerX, t.plotX), t.dataLabel && t.shapeArgs?.width && t.dataLabel.css({
                    width: `${t.shapeArgs.width}px`
                }), super.alignDataLabel.apply(this, arguments), t.plotX = e
            }
            translatePoint(t) {
                let e = this.xAxis,
                    i = this.yAxis,
                    s = this.columnMetrics,
                    o = this.options,
                    r = o.minPointLength || 0,
                    a = (t.shapeArgs && t.shapeArgs.width || 0) / 2,
                    l = this.pointXOffset = s.offset,
                    n = m(t.x2, t.x + (t.len || 0)),
                    h = o.borderRadius,
                    p = this.chart.plotTop,
                    g = this.chart.plotLeft,
                    u = t.plotX,
                    C = e.translate(n, 0, 0, 0, 1),
                    b = Math.abs(C - u),
                    w = this.chart.inverted,
                    R = m(o.borderWidth, 1) % 2 / 2,
                    M, X, S = s.offset,
                    P = Math.round(s.width),
                    v, j, D, L;
                r && ((M = r - b) < 0 && (M = 0), u -= M / 2, C += M / 2), u = Math.max(u, -10), C = d(C, -10, e.len + 10), c(t.options.pointWidth) && (S -= (Math.ceil(t.options.pointWidth) - P) / 2, P = Math.ceil(t.options.pointWidth)), o.pointPlacement && f(t.plotY) && i.categories && (t.plotY = i.translate(t.y, 0, 1, 0, 1, o.pointPlacement));
                let B = Math.floor(Math.min(u, C)) + R,
                    F = Math.floor(Math.max(u, C)) + R - B,
                    I = Math.min(A("object" == typeof h ? h.radius : h || 0, P), Math.min(F, P) / 2),
                    E = {
                        x: B,
                        y: Math.floor(t.plotY + S) + R,
                        width: F,
                        height: P,
                        r: I
                    };
                t.shapeArgs = E, w ? t.tooltipPos[1] += l + a : t.tooltipPos[0] -= a + l - E.width / 2, j = (v = E.x) + E.width, v < 0 || j > e.len ? (v = d(v, 0, e.len), D = (j = d(j, 0, e.len)) - v, t.dlBox = y(E, {
                    x: v,
                    width: j - v,
                    centerX: D ? D / 2 : null
                })) : t.dlBox = null;
                let T = t.tooltipPos,
                    V = w ? 1 : 0,
                    H = w ? 0 : 1,
                    N = this.columnMetrics ? this.columnMetrics.offset : -s.width / 2;
                w ? T[V] += E.width / 2 : T[V] = d(T[V] + (e.reversed ? -1 : 0) * E.width, e.left - g, e.left + e.len - g - 1), T[H] = d(T[H] + (w ? -1 : 1) * N, i.top - p, i.top + i.len - p - 1), (X = t.partialFill) && (x(X) && (X = X.amount), f(X) || (X = 0), t.partShapeArgs = y(E), L = Math.max(Math.round(b * X + t.plotX - u), 0), t.clipRectArgs = {
                    x: e.reversed ? E.x + b - L : E.x,
                    y: E.y,
                    width: L,
                    height: E.height
                })
            }
            translate() {
                for (let t of (super.translate.apply(this, arguments), this.points)) this.translatePoint(t)
            }
            drawPoint(t, e) {
                let i = this.options,
                    s = this.chart.renderer,
                    o = t.shapeType,
                    r = t.shapeArgs,
                    a = t.partShapeArgs,
                    l = t.clipRectArgs,
                    h = t.state,
                    p = i.states[h || "normal"] || {},
                    d = void 0 === h ? "attr" : e,
                    c = this.pointAttribs(t, h),
                    g = m(this.chart.options.chart.animation, p.animation),
                    u = t.graphic,
                    f = t.partialFill;
                if (t.isNull || !1 === t.visible) u && (t.graphic = u.destroy());
                else if (u ? u.rect[e](r) : (t.graphic = u = s.g("point").addClass(t.getClassName()).add(t.group || this.group), u.rect = s[o](y(r)).addClass(t.getClassName()).addClass("highcharts-partfill-original").add(u)), a && (u.partRect ? (u.partRect[e](y(a)), u.partialClipRect[e](y(l))) : (u.partialClipRect = s.clipRect(l.x, l.y, l.width, l.height), u.partRect = s[o](a).addClass("highcharts-partfill-overlay").add(u).clip(u.partialClipRect))), !this.chart.styledMode && (u.rect[e](c, g).shadow(i.shadow), a)) {
                    x(f) || (f = {}), x(i.partialFill) && (f = y(i.partialFill, f));
                    let e = f.fill || n(c.fill).brighten(-.3).get() || n(t.color || this.color).brighten(-.3).get();
                    c.fill = e, u.partRect[d](c, g).shadow(i.shadow)
                }
            }
            drawPoints() {
                let t = this.getAnimationVerb();
                for (let e of this.points) this.drawPoint(e, t)
            }
            getAnimationVerb() {
                return this.chart.pointCount < (this.options.animationLimit || 250) ? "animate" : "attr"
            }
            isPointInside(t) {
                let e = t.shapeArgs,
                    i = t.plotX,
                    s = t.plotY;
                return e ? void 0 !== i && void 0 !== s && s >= 0 && s <= this.yAxis.len && (e.x || 0) + (e.width || 0) >= 0 && i <= this.xAxis.len : super.isPointInside.apply(this, arguments)
            }
        }
        return w.defaultOptions = y(h.defaultOptions, o), g(w.prototype, {
            pointClass: r,
            pointArrayMap: ["x2", "y"],
            getExtremesFromAll: !0,
            parallelArrays: ["x", "x2", "y"],
            requireSorting: !1,
            type: "xrange",
            animate: i.series.prototype.animate,
            autoIncrement: l,
            buildKDTree: l
        }), i.registerSeriesType("xrange", w), w
    }), i(e, "masters/modules/xrange.src.js", [e["Core/Globals.js"], e["Series/XRange/XRangeSeries.js"]], function(t, e) {
        return e.compose(t.Axis), t
    })
}); //# sourceMappingURL=xrange.js.map