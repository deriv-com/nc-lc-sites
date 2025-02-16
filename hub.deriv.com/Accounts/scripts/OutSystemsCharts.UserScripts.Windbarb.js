!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Wind barb series module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/windbarb", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function o(t, e, o, i) {
        t.hasOwnProperty(e) || (t[e] = i.apply(null, o), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: e,
                module: t[e]
            }
        })))
    }
    o(e, "Extensions/DataGrouping/ApproximationRegistry.js", [], function() {
        return {}
    }), o(e, "Series/OnSeriesComposition.js", [e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t, e, o, i) {
        var r;
        let {
            composed: s
        } = e, {
            prototype: n
        } = t, {
            prototype: a
        } = o, {
            defined: l,
            pushUnique: p,
            stableSort: h
        } = i;
        return function(t) {
            function e(t) {
                return a.getPlotBox.call(this.options.onSeries && this.chart.get(this.options.onSeries) || this, t)
            }

            function o() {
                n.translate.apply(this);
                let t = this,
                    e = t.options,
                    o = t.chart,
                    i = t.points,
                    r = e.onSeries,
                    s = r && o.get(r),
                    a = s && s.options.step,
                    p = s && s.points,
                    u = o.inverted,
                    d = t.xAxis,
                    c = t.yAxis,
                    f = i.length - 1,
                    b, g, m = e.onKey || "y",
                    x = p && p.length,
                    y = 0,
                    S, v, j, C, w;
                if (s && s.visible && x) {
                    for (y = (s.pointXOffset || 0) + (s.barW || 0) / 2, C = s.currentDataGrouping, v = p[x - 1].x + (C ? C.totalRange : 0), h(i, (t, e) => t.x - e.x), m = "plot" + m[0].toUpperCase() + m.substr(1); x-- && i[f];)
                        if (S = p[x], (b = i[f]).y = S.y, S.x <= b.x && void 0 !== S[m]) {
                            if (b.x <= v && (b.plotY = S[m], S.x < b.x && !a && (j = p[x + 1]) && void 0 !== j[m])) {
                                if (l(b.plotX) && s.is("spline")) {
                                    let t = [S.plotX || 0, S.plotY || 0],
                                        e = [j.plotX || 0, j.plotY || 0],
                                        o = S.controlPoints?.high || t,
                                        i = j.controlPoints?.low || e,
                                        r = (r, s) => Math.pow(1 - r, 3) * t[s] + 3 * (1 - r) * (1 - r) * r * o[s] + 3 * (1 - r) * r * r * i[s] + r * r * r * e[s],
                                        s = 0,
                                        n = 1,
                                        a;
                                    for (let t = 0; t < 100; t++) {
                                        let t = (s + n) / 2,
                                            e = r(t, 0);
                                        if (null === e) break;
                                        if (.25 > Math.abs(e - b.plotX)) {
                                            a = t;
                                            break
                                        }
                                        e < b.plotX ? s = t : n = t
                                    }
                                    l(a) && (b.plotY = r(a, 1), b.y = c.toValue(b.plotY, !0))
                                } else w = (b.x - S.x) / (j.x - S.x), b.plotY += w * (j[m] - S[m]), b.y += w * (j.y - S.y)
                            }
                            if (f--, x++, f < 0) break
                        }
                }
                i.forEach((e, o) => {
                    let r;
                    e.plotX += y, (void 0 === e.plotY || u) && (e.plotX >= 0 && e.plotX <= d.len ? u ? (e.plotY = d.translate(e.x, 0, 1, 0, 1), e.plotX = l(e.y) ? c.translate(e.y, 0, 0, 0, 1) : 0) : e.plotY = (d.opposite ? 0 : t.yAxis.len) + d.offset : e.shapeArgs = {}), (g = i[o - 1]) && g.plotX === e.plotX && (void 0 === g.stackIndex && (g.stackIndex = 0), r = g.stackIndex + 1), e.stackIndex = r
                }), this.onSeries = s
            }
            t.compose = function(t) {
                if (p(s, "OnSeries")) {
                    let i = t.prototype;
                    i.getPlotBox = e, i.translate = o
                }
                return t
            }, t.getPlotBox = e, t.translate = o
        }(r || (r = {})), r
    }), o(e, "Series/Windbarb/WindbarbPoint.js", [e["Series/Column/ColumnSeries.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            isNumber: o
        } = e;
        class i extends t.prototype.pointClass {
            isValid() {
                return o(this.value) && this.value >= 0
            }
        }
        return i
    }), o(e, "Series/Windbarb/WindbarbSeriesDefaults.js", [], function() {
        return {
            dataGrouping: {
                enabled: !0,
                approximation: "windbarb",
                groupPixelWidth: 30
            },
            lineWidth: 2,
            onSeries: null,
            states: {
                hover: {
                    lineWidthPlus: 0
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.value}</b> ({point.beaufort})<br/>'
            },
            vectorLength: 20,
            colorKey: "value",
            yOffset: -20,
            xOffset: 0
        }
    }), o(e, "Series/Windbarb/WindbarbSeries.js", [e["Core/Animation/AnimationUtilities.js"], e["Extensions/DataGrouping/ApproximationRegistry.js"], e["Core/Globals.js"], e["Series/OnSeriesComposition.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"], e["Series/Windbarb/WindbarbPoint.js"], e["Series/Windbarb/WindbarbSeriesDefaults.js"]], function(t, e, o, i, r, s, n, a) {
        let {
            animObject: l
        } = t, {
            column: p
        } = r.seriesTypes, {
            extend: h,
            merge: u,
            pick: d
        } = s;
        class c extends p {
            init(t, e) {
                super.init(t, e)
            }
            pointAttribs(t, e) {
                let o = this.options,
                    i = t.color || this.color,
                    r = this.options.lineWidth;
                return e && (i = o.states[e].color || i, r = (o.states[e].lineWidth || r) + (o.states[e].lineWidthPlus || 0)), {
                    stroke: i,
                    "stroke-width": r
                }
            }
            windArrow(t) {
                let e = t.beaufortLevel,
                    o = this.options.vectorLength / 20,
                    i = 1.943844 * t.value,
                    r, s = -10;
                if (t.isNull) return [];
                if (0 === e) return this.chart.renderer.symbols.circle(-10 * o, -10 * o, 20 * o, 20 * o);
                let n = [
                    ["M", 0, 7 * o],
                    ["L", -1.5 * o, 7 * o],
                    ["L", 0, 10 * o],
                    ["L", 1.5 * o, 7 * o],
                    ["L", 0, 7 * o],
                    ["L", 0, -10 * o]
                ];
                if ((r = (i - i % 50) / 50) > 0)
                    for (; r--;) n.push(-10 === s ? ["L", 0, s * o] : ["M", 0, s * o], ["L", 5 * o, s * o + 2], ["L", 0, s * o + 4]), i -= 50, s += 7;
                if ((r = (i - i % 10) / 10) > 0)
                    for (; r--;) n.push(-10 === s ? ["L", 0, s * o] : ["M", 0, s * o], ["L", 7 * o, s * o]), i -= 10, s += 3;
                if ((r = (i - i % 5) / 5) > 0)
                    for (; r--;) n.push(-10 === s ? ["L", 0, s * o] : ["M", 0, s * o], ["L", 4 * o, s * o]), i -= 5, s += 3;
                return n
            }
            drawPoints() {
                let t = this.chart,
                    e = this.yAxis,
                    o = t.inverted,
                    i = this.options.vectorLength / 2;
                for (let r of this.points) {
                    let s = r.plotX,
                        n = r.plotY;
                    !1 === this.options.clip || t.isInsidePlot(s, 0) ? (r.graphic || (r.graphic = this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-" + d(r.colorIndex, r.series.colorIndex))), r.graphic.attr({
                        d: this.windArrow(r),
                        translateX: s + this.options.xOffset,
                        translateY: n + this.options.yOffset,
                        rotation: r.direction
                    }), this.chart.styledMode || r.graphic.attr(this.pointAttribs(r))) : r.graphic && (r.graphic = r.graphic.destroy()), r.tooltipPos = [s + this.options.xOffset + (o && !this.onSeries ? i : 0), n + this.options.yOffset - (o ? 0 : i + e.pos - t.plotTop)]
                }
            }
            animate(t) {
                t ? this.markerGroup.attr({
                    opacity: .01
                }) : this.markerGroup.animate({
                    opacity: 1
                }, l(this.options.animation))
            }
            markerAttribs() {
                return {}
            }
            getExtremes() {
                return {}
            }
            shouldShowTooltip(t, e, o = {}) {
                return o.ignoreX = this.chart.inverted, o.ignoreY = !o.ignoreX, super.shouldShowTooltip(t, e, o)
            }
        }
        return c.defaultOptions = u(p.defaultOptions, a), i.compose(c), h(c.prototype, {
            beaufortFloor: [0, .3, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7],
            beaufortName: ["Calm", "Light air", "Light breeze", "Gentle breeze", "Moderate breeze", "Fresh breeze", "Strong breeze", "Near gale", "Gale", "Strong gale", "Storm", "Violent storm", "Hurricane"],
            invertible: !1,
            parallelArrays: ["x", "value", "direction"],
            pointArrayMap: ["value", "direction"],
            pointClass: n,
            trackerGroups: ["markerGroup"],
            translate: function() {
                let t = this.beaufortFloor,
                    e = this.beaufortName;
                for (let o of (i.translate.call(this), this.points)) {
                    let i = 0;
                    for (; i < t.length && !(t[i] > o.value); i++);
                    o.beaufortLevel = i - 1, o.beaufort = e[i - 1]
                }
            }
        }), r.registerSeriesType("windbarb", c), e.windbarb || (e.windbarb = (t, e) => {
            let i = 0,
                r = 0;
            for (let s = 0, n = t.length; s < n; s++) i += t[s] * Math.cos(e[s] * o.deg2rad), r += t[s] * Math.sin(e[s] * o.deg2rad);
            return [t.reduce((t, e) => t + e, 0) / t.length, Math.atan2(r, i) / o.deg2rad]
        }), c
    }), o(e, "masters/modules/windbarb.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
}); //# sourceMappingURL=windbarb.js.map