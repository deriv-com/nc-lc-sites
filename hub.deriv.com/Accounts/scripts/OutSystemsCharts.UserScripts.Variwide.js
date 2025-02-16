!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Highcharts variwide module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/variwide", ["highcharts"], function(i) {
        return t(i), t.Highcharts = i, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var i = t ? t._modules : {};

    function s(t, i, s, e) {
        t.hasOwnProperty(i) || (t[i] = e.apply(null, s), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: i,
                module: t[i]
            }
        })))
    }
    s(i, "Series/Variwide/VariwideComposition.js", [i["Core/Globals.js"], i["Core/Utilities.js"]], function(t, i) {
        let {
            composed: s
        } = t, {
            addEvent: e,
            pushUnique: r,
            wrap: o
        } = i;

        function a(t) {
            this.variwide && this.cross && this.cross.attr("stroke-width", t.point && t.point.crosshairWidth)
        }

        function n() {
            let t = this;
            !this.horiz && this.variwide && this.chart.labelCollectors.push(function() {
                return t.tickPositions.filter(i => !!t.ticks[i].label).map((i, s) => {
                    let e = t.ticks[i].label;
                    return e.labelrank = t.zData[s], e
                })
            })
        }

        function h(t) {
            let i = this.axis,
                s = i.horiz ? "x" : "y";
            i.variwide && (this[s + "Orig"] = t.pos[s], this.postTranslate(t.pos, s, this.pos))
        }

        function l(t, i, s) {
            let e = this.axis,
                r = t[i] - e.pos;
            e.horiz || (r = e.len - r), r = e.series[0].postTranslate(s, r), e.horiz || (r = e.len - r), t[i] = e.pos + r
        }

        function d(t, i, s, e, r, o, a, n) {
            let h = Array.prototype.slice.call(arguments, 1),
                l = r ? "x" : "y";
            this.axis.variwide && "number" == typeof this[l + "Orig"] && (h[r ? 0 : 1] = this[l + "Orig"]);
            let d = t.apply(this, h);
            return this.axis.variwide && this.axis.categories && this.postTranslate(d, l, this.pos), d
        }
        return {
            compose: function(t, i) {
                if (r(s, "Variwide")) {
                    let s = i.prototype;
                    e(t, "afterDrawCrosshair", a), e(t, "afterRender", n), e(i, "afterGetPosition", h), s.postTranslate = l, o(s, "getLabelPosition", d)
                }
            }
        }
    }), s(i, "Series/Variwide/VariwidePoint.js", [i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(t, i) {
        let {
            column: {
                prototype: {
                    pointClass: s
                }
            }
        } = t.seriesTypes, {
            isNumber: e
        } = i;
        return class extends s {
            isValid() {
                return e(this.y) && e(this.z)
            }
        }
    }), s(i, "Series/Variwide/VariwideSeriesDefaults.js", [], function() {
        return {
            pointPadding: 0,
            groupPadding: 0
        }
    }), s(i, "Series/Variwide/VariwideSeries.js", [i["Core/Series/SeriesRegistry.js"], i["Series/Variwide/VariwideComposition.js"], i["Series/Variwide/VariwidePoint.js"], i["Series/Variwide/VariwideSeriesDefaults.js"], i["Core/Utilities.js"]], function(t, i, s, e, r) {
        let {
            column: o
        } = t.seriesTypes, {
            addEvent: a,
            extend: n,
            merge: h,
            pick: l
        } = r;
        class d extends o {
            processData(i) {
                this.totalZ = 0, this.relZ = [], t.seriesTypes.column.prototype.processData.call(this, i), (this.xAxis.reversed ? this.zData.slice().reverse() : this.zData).forEach(function(t, i) {
                    this.relZ[i] = this.totalZ, this.totalZ += t
                }, this), this.xAxis.categories && (this.xAxis.variwide = !0, this.xAxis.zData = this.zData)
            }
            postTranslate(t, i, s) {
                let e = this.xAxis,
                    r = this.relZ,
                    o = e.reversed ? r.length - t : t,
                    a = e.reversed ? -1 : 1,
                    n = e.toPixels(e.reversed ? (e.dataMax || 0) + e.pointRange : e.dataMin || 0),
                    h = e.toPixels(e.reversed ? e.dataMin || 0 : (e.dataMax || 0) + e.pointRange),
                    d = Math.abs(h - n),
                    p = this.totalZ,
                    c = this.chart.inverted ? h - (this.chart.plotTop - a * e.minPixelPadding) : n - this.chart.plotLeft - a * e.minPixelPadding,
                    u = o / r.length * d,
                    f = (o + a) / r.length * d,
                    x = l(r[o], p) / p * d,
                    w = l(r[o + a], p) / p * d;
                return s && (s.crosshairWidth = w - x), c + x + (i - (c + u)) * (w - x) / (f - u)
            }
            translate() {
                this.crispOption = this.options.crisp, this.options.crisp = !1, super.translate(), this.options.crisp = this.crispOption
            }
            correctStackLabels() {
                let t, i, s, e;
                let r = this.options,
                    o = this.yAxis;
                for (let a of this.points) e = a.x, i = a.shapeArgs.width, (s = o.stacking.stacks[(this.negStacks && a.y < (r.startFromThreshold ? 0 : r.threshold) ? "-" : "") + this.stackKey]) && (t = s[e]) && !a.isNull && t.setOffset(-(i / 2) || 0, i || 0, void 0, void 0, a.plotX, this.xAxis)
            }
        }
        return d.compose = i.compose, d.defaultOptions = h(o.defaultOptions, e), a(d, "afterColumnTranslate", function() {
            let t = this.xAxis,
                i = this.chart.inverted,
                s = this.borderWidth % 2 / 2,
                e = -1;
            for (let r of this.points) {
                let o, a;
                ++e;
                let n = r.shapeArgs || {},
                    {
                        x: h = 0,
                        width: l = 0
                    } = n,
                    {
                        plotX: d = 0,
                        tooltipPos: p,
                        z: c = 0
                    } = r;
                t.variwide ? (o = this.postTranslate(e, h, r), a = this.postTranslate(e, h + l)) : (o = d, a = t.translate(r.x + c, !1, !1, !1, !0)), this.crispOption && (o = Math.round(o) - s, a = Math.round(a) - s), n.x = o, n.width = Math.max(a - o, 1), r.plotX = (o + a) / 2, p && (i ? p[1] = t.len - n.x - n.width / 2 : p[0] = n.x + n.width / 2)
            }
            this.options.stacking && this.correctStackLabels()
        }, {
            order: 2
        }), n(d.prototype, {
            irregularWidths: !0,
            pointArrayMap: ["y", "z"],
            parallelArrays: ["x", "y", "z"],
            pointClass: s
        }), t.registerSeriesType("variwide", d), d
    }), s(i, "masters/modules/variwide.src.js", [i["Core/Globals.js"], i["Series/Variwide/VariwideSeries.js"]], function(t, i) {
        return i.compose(t.Axis, t.Tick), t
    })
}); //# sourceMappingURL=variwide.js.map