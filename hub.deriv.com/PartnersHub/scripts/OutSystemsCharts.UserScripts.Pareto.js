!
/**
 * Highcharts JS v11.4.8 (2024-08-29)
 *
 * Pareto series type for Highcharts
 *
 * (c) 2010-2024 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */
function(e) {
    "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/pareto", ["highcharts"], function(s) {
        return e(s), e.Highcharts = s, e
    }) : e("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(e) {
    "use strict";
    var s = e ? e._modules : {};

    function t(s, t, i, r) {
        s.hasOwnProperty(t) || (s[t] = r.apply(null, i), "function" == typeof CustomEvent && e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: t,
                module: s[t]
            }
        })))
    }
    t(s, "Series/DerivedComposition.js", [s["Core/Globals.js"], s["Core/Series/Series.js"], s["Core/Utilities.js"]], function(e, s, t) {
        var i;
        let {
            noop: r
        } = e, {
            addEvent: a,
            defined: n
        } = t;
        return function(e) {
            function t() {
                s.prototype.init.apply(this, arguments), this.initialised = !1, this.baseSeries = null, this.eventRemovers = [], this.addEvents()
            }

            function i() {
                let e = this.chart,
                    s = this.options.baseSeries,
                    t = n(s) && (e.series[s] || e.get(s));
                this.baseSeries = t || null
            }

            function o() {
                this.eventRemovers.push(a(this.chart, "afterLinkSeries", () => {
                    this.setBaseSeries(), this.baseSeries && !this.initialised && (this.setDerivedData(), this.addBaseSeriesEvents(), this.initialised = !0)
                }))
            }

            function d() {
                this.eventRemovers.push(a(this.baseSeries, "updatedData", () => {
                    this.setDerivedData()
                }), a(this.baseSeries, "destroy", () => {
                    this.baseSeries = null, this.initialised = !1
                }))
            }

            function h() {
                this.eventRemovers.forEach(e => {
                    e()
                }), s.prototype.destroy.apply(this, arguments)
            }
            e.hasDerivedData = !0, e.setDerivedData = r, e.compose = function(e) {
                let s = e.prototype;
                return s.addBaseSeriesEvents = d, s.addEvents = o, s.destroy = h, s.init = t, s.setBaseSeries = i, e
            }, e.init = t, e.setBaseSeries = i, e.addEvents = o, e.addBaseSeriesEvents = d, e.destroy = h
        }(i || (i = {})), i
    }), t(s, "Series/ParetoSeries/ParetoSeriesDefaults.js", [], function() {
        return {
            zIndex: 3
        }
    }), t(s, "Series/ParetoSeries/ParetoSeries.js", [s["Series/DerivedComposition.js"], s["Series/ParetoSeries/ParetoSeriesDefaults.js"], s["Core/Series/SeriesRegistry.js"], s["Core/Utilities.js"]], function(e, s, t, i) {
        let {
            line: r
        } = t.seriesTypes, {
            correctFloat: a,
            merge: n,
            extend: o
        } = i;
        class d extends r {
            sumPointsPercents(e, s, t, i) {
                let r = [],
                    n = 0,
                    o = 0,
                    d = 0,
                    h;
                for (let u of e) null !== u && (i ? o += u : (h = u / t * 100, r.push([s[n], a(d + h)]), d += h)), ++n;
                return i ? o : r
            }
            setDerivedData() {
                let e = this.baseSeries.xData,
                    s = this.baseSeries.yData,
                    t = this.sumPointsPercents(s, e, null, !0);
                this.setData(this.sumPointsPercents(s, e, t, !1), !1)
            }
        }
        return d.defaultOptions = n(r.defaultOptions, s), o(d.prototype, {
            hasDerivedData: e.hasDerivedData
        }), e.compose(d), t.registerSeriesType("pareto", d), d
    }), t(s, "masters/modules/pareto.src.js", [s["Core/Globals.js"]], function(e) {
        return e
    })
});