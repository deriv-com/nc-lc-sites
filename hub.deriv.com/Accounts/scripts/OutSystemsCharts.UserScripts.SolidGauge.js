!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Solid angular gauge module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/solid-gauge", ["highcharts", "highcharts/highcharts-more"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function o(t, e, o, s) {
        t.hasOwnProperty(e) || (t[e] = s.apply(null, o), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: e,
                module: t[e]
            }
        })))
    }
    o(e, "Core/Axis/Color/ColorAxisLike.js", [e["Core/Color/Color.js"], e["Core/Utilities.js"]], function(t, e) {
        var o, s;
        let {
            parse: i
        } = t, {
            merge: r
        } = e;
        return (s = o || (o = {})).initDataClasses = function(t) {
            let e = this.chart,
                o = this.legendItem = this.legendItem || {},
                s = this.options,
                a = t.dataClasses || [],
                l, n, d = e.options.chart.colorCount,
                h = 0,
                u;
            this.dataClasses = n = [], o.labels = [];
            for (let t = 0, o = a.length; t < o; ++t) l = r(l = a[t]), n.push(l), (e.styledMode || !l.color) && ("category" === s.dataClassColor ? (e.styledMode || (d = (u = e.options.colors || []).length, l.color = u[h]), l.colorIndex = h, ++h === d && (h = 0)) : l.color = i(s.minColor).tweenTo(i(s.maxColor), o < 2 ? .5 : t / (o - 1)))
        }, s.initStops = function() {
            let t = this.options,
                e = this.stops = t.stops || [
                    [0, t.minColor || ""],
                    [1, t.maxColor || ""]
                ];
            for (let t = 0, o = e.length; t < o; ++t) e[t].color = i(e[t][1])
        }, s.normalizedValue = function(t) {
            let e = this.max || 0,
                o = this.min || 0;
            return this.logarithmic && (t = this.logarithmic.log2lin(t)), 1 - (e - t) / (e - o || 1)
        }, s.toColor = function(t, e) {
            let o, s, i, r, a, l;
            let n = this.dataClasses,
                d = this.stops;
            if (n) {
                for (l = n.length; l--;)
                    if (s = (a = n[l]).from, i = a.to, (void 0 === s || t >= s) && (void 0 === i || t <= i)) {
                        r = a.color, e && (e.dataClass = l, e.colorIndex = a.colorIndex);
                        break
                    }
            } else {
                for (o = this.normalizedValue(t), l = d.length; l-- && !(o > d[l][0]););
                s = d[l] || d[l + 1], o = 1 - ((i = d[l + 1] || s)[0] - o) / (i[0] - s[0] || 1), r = s.color.tweenTo(i.color, o)
            }
            return r
        }, o
    }), o(e, "Core/Axis/SolidGaugeAxis.js", [e["Core/Axis/Color/ColorAxisLike.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            extend: o
        } = e;
        return {
            init: function(e) {
                o(e, t)
            }
        }
    }), o(e, "Series/SolidGauge/SolidGaugeSeriesDefaults.js", [], function() {
        return {
            colorByPoint: !0,
            dataLabels: {
                y: 0
            }
        }
    }), o(e, "Series/SolidGauge/SolidGaugeSeries.js", [e["Extensions/BorderRadius.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Axis/SolidGaugeAxis.js"], e["Series/SolidGauge/SolidGaugeSeriesDefaults.js"], e["Core/Utilities.js"]], function(t, e, o, s, i) {
        let {
            gauge: r,
            pie: a
        } = e.seriesTypes, {
            clamp: l,
            extend: n,
            isNumber: d,
            merge: h,
            pick: u,
            pInt: c
        } = i;
        class g extends r {
            translate() {
                let t = this.yAxis;
                o.init(t), !t.dataClasses && t.options.dataClasses && t.initDataClasses(t.options), t.initStops(), r.prototype.translate.call(this)
            }
            drawPoints() {
                let e;
                let o = this.yAxis,
                    s = o.center,
                    i = this.options,
                    r = this.chart.renderer,
                    a = i.overshoot,
                    h = i.rounded && void 0 === i.borderRadius,
                    g = d(a) ? a / 180 * Math.PI : 0;
                for (let a of (d(i.threshold) && (e = o.startAngleRad + o.translate(i.threshold, void 0, void 0, void 0, !0)), this.thresholdAngleRad = u(e, o.startAngleRad), this.points))
                    if (!a.isNull) {
                        let e = c(u(a.options.radius, i.radius, 100)) * s[2] / 200,
                            d = c(u(a.options.innerRadius, i.innerRadius, 60)) * s[2] / 200,
                            p = Math.min(o.startAngleRad, o.endAngleRad),
                            f = Math.max(o.startAngleRad, o.endAngleRad),
                            C = a.graphic,
                            m = o.startAngleRad + o.translate(a.y, void 0, void 0, void 0, !0),
                            x, A, y = o.toColor(a.y, a);
                        "none" === y && (y = a.color || this.color || "none"), "none" !== y && (a.color = y), m = l(m, p - g, f + g), !1 === i.wrap && (m = l(m, p, f));
                        let R = h ? (e - d) / 2 / e : 0,
                            S = Math.min(m, this.thresholdAngleRad) - R,
                            j = Math.max(m, this.thresholdAngleRad) + R;
                        j - S > 2 * Math.PI && (j = S + 2 * Math.PI);
                        let v = h ? "50%" : 0;
                        i.borderRadius && (v = t.optionsToObject(i.borderRadius).radius), a.shapeArgs = x = {
                            x: s[0],
                            y: s[1],
                            r: e,
                            innerR: d,
                            start: S,
                            end: j,
                            borderRadius: v
                        }, a.startR = e, C ? (A = x.d, C.animate(n({
                            fill: y
                        }, x)), A && (x.d = A)) : a.graphic = C = r.arc(x).attr({
                            fill: y,
                            "sweep-flag": 0
                        }).add(this.group), this.chart.styledMode || ("square" !== i.linecap && C.attr({
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }), C.attr({
                            stroke: i.borderColor || "none",
                            "stroke-width": i.borderWidth || 0
                        })), C && C.addClass(a.getClassName(), !0)
                    }
            }
            animate(t) {
                t || (this.startAngleRad = this.thresholdAngleRad, a.prototype.animate.call(this, t))
            }
        }
        return g.defaultOptions = h(r.defaultOptions, s), e.registerSeriesType("solidgauge", g), g
    }), o(e, "masters/modules/solid-gauge.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
}); //# sourceMappingURL=solid-gauge.js.map