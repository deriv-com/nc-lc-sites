!
/**
 * Highcharts JS v11.4.8 (2024-08-29)
 *
 * Variable Pie module for Highcharts
 *
 * (c) 2010-2024 Grzegorz Blachliński
 *
 * License: www.highcharts.com/license
 */
function(e) {
    "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/variable-pie", ["highcharts"], function(t) {
        return e(t), e.Highcharts = t, e
    }) : e("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(e) {
    "use strict";
    var t = e ? e._modules : {};

    function i(t, i, a, s) {
        t.hasOwnProperty(i) || (t[i] = s.apply(null, a), "function" == typeof CustomEvent && e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: i,
                module: t[i]
            }
        })))
    }
    i(t, "Series/VariablePie/VariablePieSeriesDefaults.js", [], function() {
        return {
            minPointSize: "10%",
            maxPointSize: "100%",
            zMin: void 0,
            zMax: void 0,
            sizeBy: "area",
            tooltip: {
                pointFormat: '<span style="color:{point.color}">●</span> {series.name}<br/>Value: {point.y}<br/>Size: {point.z}<br/>'
            }
        }
    }), i(t, "Series/VariablePie/VariablePieSeries.js", [t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"], t["Series/VariablePie/VariablePieSeriesDefaults.js"]], function(e, t, i) {
        let {
            pie: a
        } = e.seriesTypes, {
            arrayMax: s,
            arrayMin: n,
            clamp: r,
            extend: l,
            fireEvent: o,
            merge: h,
            pick: d
        } = t;
        class u extends a {
            calculateExtremes() {
                let e, t;
                let i = this.chart,
                    a = i.plotWidth,
                    l = i.plotHeight,
                    o = this.options,
                    h = 2 * (o.slicedOffset || 0),
                    u = this.zData,
                    c = Math.min(a, l) - h,
                    p = {},
                    f = this.center || this.getCenter();
                for (let e of ["minPointSize", "maxPointSize"]) {
                    let t = o[e],
                        i = /%$/.test(t);
                    t = parseInt(t, 10), p[e] = i ? c * t / 100 : 2 * t
                }
                this.minPxSize = f[3] + p.minPointSize, this.maxPxSize = r(f[2], f[3] + p.minPointSize, p.maxPointSize), u.length && (e = d(o.zMin, n(u.filter(this.zValEval))), t = d(o.zMax, s(u.filter(this.zValEval))), this.getRadii(e, t, this.minPxSize, this.maxPxSize))
            }
            getRadii(e, t, i, a) {
                let s, n, r;
                let l = this.zData,
                    o = [],
                    h = "radius" !== this.options.sizeBy,
                    d = t - e;
                for (let u = 0; u < l.length; u++)(n = this.zValEval(l[u]) ? l[u] : e) <= e ? r = i / 2 : n >= t ? r = a / 2 : (s = d > 0 ? (n - e) / d : .5, h && (s = Math.sqrt(s)), r = Math.ceil(i + s * (a - i)) / 2), o.push(r);
                this.radii = o
            }
            redraw() {
                this.center = null, super.redraw()
            }
            getDataLabelPosition(e, t) {
                let {
                    center: i,
                    options: a
                } = this, s = e.angle || 0, n = this.radii[e.index], r = i[0] + Math.cos(s) * n, l = i[1] + Math.sin(s) * n, o = Math.min((a.slicedOffset || 0) + (a.borderWidth || 0), t / 5);
                return {
                    distance: t,
                    natural: {
                        x: r + Math.cos(s) * t,
                        y: l + Math.sin(s) * t
                    },
                    computed: {},
                    alignment: e.half ? "right" : "left",
                    connectorPosition: {
                        breakAt: {
                            x: r + Math.cos(s) * o,
                            y: l + Math.sin(s) * o
                        },
                        touchingSliceAt: {
                            x: r,
                            y: l
                        }
                    }
                }
            }
            translate(e) {
                this.generatePoints();
                let t = this.options,
                    i = t.slicedOffset,
                    a = t.startAngle || 0,
                    s = Math.PI / 180 * (a - 90),
                    n = Math.PI / 180 * (d(t.endAngle, a + 360) - 90),
                    r = n - s,
                    l = this.points,
                    h = t.ignoreHiddenPoint,
                    u = 0,
                    c, p, f, M, m, P, g;
                this.startAngleRad = s, this.endAngleRad = n, this.calculateExtremes(), e || (this.center = e = this.getCenter());
                for (let t = 0; t < l.length; t++) P = l[t], g = this.radii[t], c = s + u * r, (!h || P.visible) && (u += P.percentage / 100), p = s + u * r, P.shapeType = "arc", P.shapeArgs = {
                    x: e[0],
                    y: e[1],
                    r: g,
                    innerR: e[3] / 2,
                    start: Math.round(1e3 * c) / 1e3,
                    end: Math.round(1e3 * p) / 1e3
                }, (f = (p + c) / 2) > 1.5 * Math.PI ? f -= 2 * Math.PI : f < -Math.PI / 2 && (f += 2 * Math.PI), P.slicedTranslation = {
                    translateX: Math.round(Math.cos(f) * i),
                    translateY: Math.round(Math.sin(f) * i)
                }, M = Math.cos(f) * e[2] / 2, m = Math.sin(f) * e[2] / 2, P.tooltipPos = [e[0] + .7 * M, e[1] + .7 * m], P.half = f < -Math.PI / 2 || f > Math.PI / 2 ? 1 : 0, P.angle = f;
                o(this, "afterTranslate")
            }
            zValEval(e) {
                return !("number" != typeof e || isNaN(e)) || null
            }
        }
        return u.defaultOptions = h(a.defaultOptions, i), l(u.prototype, {
            pointArrayMap: ["y", "z"],
            parallelArrays: ["x", "y", "z"]
        }), e.registerSeriesType("variablepie", u), u
    }), i(t, "masters/modules/variable-pie.src.js", [t["Core/Globals.js"]], function(e) {
        return e
    })
});