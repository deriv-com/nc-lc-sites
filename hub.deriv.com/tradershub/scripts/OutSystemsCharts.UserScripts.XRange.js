!
/**
 * Highcharts JS v11.4.8 (2024-08-29)
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

    function i(e, i, s, o) {
        e.hasOwnProperty(i) || (e[i] = o.apply(null, s), "function" == typeof CustomEvent && t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: i,
                module: e[i]
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
            crisp: c,
            defined: g,
            extend: u,
            find: x,
            isNumber: f,
            isObject: y,
            merge: m,
            pick: C,
            pushUnique: A,
            relativeLength: b
        } = s;

        function w() {
            let t, e;
            if (this.isXAxis) {
                for (let i of (t = C(this.dataMax, -Number.MAX_VALUE), this.series))
                    if (i.x2Data)
                        for (let s of i.x2Data) s && s > t && (t = s, e = !0);
                e && (this.dataMax = t)
            }
        }
        class R extends h {
            static compose(t) {
                A(a, "Series.XRange") && p(t, "afterGetSeriesExtremes", w)
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
                    let t = x(s, t => t.id === o);
                    e = t ? t.index : void 0
                }
                if (void 0 === e) {
                    let i = x(s, e => e.x === t.x && e.x2 === t.x2 && !e.touched);
                    e = i ? i.index : void 0
                }
                return this.cropped && f(e) && f(i) && e >= i && (e -= i), e
            }
            alignDataLabel(t) {
                let e = t.plotX;
                t.plotX = C(t.dlBox && t.dlBox.centerX, t.plotX), t.dataLabel && t.shapeArgs?.width && t.dataLabel.css({
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
                    n = C(t.x2, t.x + (t.len || 0)),
                    h = o.borderRadius,
                    p = this.chart.plotTop,
                    u = this.chart.plotLeft,
                    x = t.plotX,
                    A = e.translate(n, 0, 0, 0, 1),
                    w = Math.abs(A - x),
                    R = this.chart.inverted,
                    X = C(o.borderWidth, 1),
                    M, S, P = s.offset,
                    v = Math.round(s.width),
                    j, D, L, B;
                r && ((M = r - w) < 0 && (M = 0), x -= M / 2, A += M / 2), x = Math.max(x, -10), A = d(A, -10, e.len + 10), g(t.options.pointWidth) && (P -= (Math.ceil(t.options.pointWidth) - v) / 2, v = Math.ceil(t.options.pointWidth)), o.pointPlacement && f(t.plotY) && i.categories && (t.plotY = i.translate(t.y, 0, 1, 0, 1, o.pointPlacement));
                let F = c(Math.min(x, A), X),
                    I = c(Math.max(x, A), X) - F,
                    E = Math.min(b("object" == typeof h ? h.radius : h || 0, v), Math.min(I, v) / 2),
                    T = {
                        x: F,
                        y: c((t.plotY || 0) + P, X),
                        width: I,
                        height: v,
                        r: E
                    };
                t.shapeArgs = T, R ? t.tooltipPos[1] += l + a : t.tooltipPos[0] -= a + l - T.width / 2, D = (j = T.x) + T.width, j < 0 || D > e.len ? (j = d(j, 0, e.len), L = (D = d(D, 0, e.len)) - j, t.dlBox = m(T, {
                    x: j,
                    width: D - j,
                    centerX: L ? L / 2 : null
                })) : t.dlBox = null;
                let V = t.tooltipPos,
                    H = R ? 1 : 0,
                    N = R ? 0 : 1,
                    O = this.columnMetrics ? this.columnMetrics.offset : -s.width / 2;
                R ? V[H] += T.width / 2 : V[H] = d(V[H] + (e.reversed ? -1 : 0) * T.width, e.left - u, e.left + e.len - u - 1), V[N] = d(V[N] + (R ? -1 : 1) * O, i.top - p, i.top + i.len - p - 1), (S = t.partialFill) && (y(S) && (S = S.amount), f(S) || (S = 0), t.partShapeArgs = m(T), B = Math.max(Math.round(w * S + t.plotX - x), 0), t.clipRectArgs = {
                    x: e.reversed ? T.x + w - B : T.x,
                    y: T.y,
                    width: B,
                    height: T.height
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
                    g = C(this.chart.options.chart.animation, p.animation),
                    u = t.graphic,
                    x = t.partialFill;
                if (t.isNull || !1 === t.visible) u && (t.graphic = u.destroy());
                else if (u ? u.rect[e](r) : (t.graphic = u = s.g("point").addClass(t.getClassName()).add(t.group || this.group), u.rect = s[o](m(r)).addClass(t.getClassName()).addClass("highcharts-partfill-original").add(u)), a && (u.partRect ? (u.partRect[e](m(a)), u.partialClipRect[e](m(l))) : (u.partialClipRect = s.clipRect(l.x, l.y, l.width, l.height), u.partRect = s[o](a).addClass("highcharts-partfill-overlay").add(u).clip(u.partialClipRect))), !this.chart.styledMode && (u.rect[e](c, g).shadow(i.shadow), a)) {
                    y(x) || (x = {}), y(i.partialFill) && (x = m(i.partialFill, x));
                    let e = x.fill || n(c.fill).brighten(-.3).get() || n(t.color || this.color).brighten(-.3).get();
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
        return R.defaultOptions = m(h.defaultOptions, o), u(R.prototype, {
            pointClass: r,
            pointArrayMap: ["x2", "y"],
            getExtremesFromAll: !0,
            parallelArrays: ["x", "x2", "y"],
            requireSorting: !1,
            type: "xrange",
            animate: i.series.prototype.animate,
            autoIncrement: l,
            buildKDTree: l
        }), i.registerSeriesType("xrange", R), R
    }), i(e, "masters/modules/xrange.src.js", [e["Core/Globals.js"], e["Series/XRange/XRangeSeries.js"]], function(t, e) {
        return e.compose(t.Axis), t
    })
});