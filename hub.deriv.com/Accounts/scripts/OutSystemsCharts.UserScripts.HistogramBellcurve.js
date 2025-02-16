!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Sebastian Domas
 *
 * License: www.highcharts.com/license
 */
function(e) {
    "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/histogram-bellcurve", ["highcharts"], function(t) {
        return e(t), e.Highcharts = t, e
    }) : e("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(e) {
    "use strict";
    var t = e ? e._modules : {};

    function s(e, t, s, i) {
        e.hasOwnProperty(t) || (e[t] = i.apply(null, s), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: t,
                module: e[t]
            }
        })))
    }
    s(t, "Series/DerivedComposition.js", [t["Core/Globals.js"], t["Core/Series/Series.js"], t["Core/Utilities.js"]], function(e, t, s) {
        var i;
        let {
            noop: r
        } = e, {
            addEvent: a,
            defined: n
        } = s;
        return function(e) {
            function s() {
                t.prototype.init.apply(this, arguments), this.initialised = !1, this.baseSeries = null, this.eventRemovers = [], this.addEvents()
            }

            function i() {
                let e = this.chart,
                    t = this.options.baseSeries,
                    s = n(t) && (e.series[t] || e.get(t));
                this.baseSeries = s || null
            }

            function o() {
                this.eventRemovers.push(a(this.chart, "afterLinkSeries", () => {
                    this.setBaseSeries(), this.baseSeries && !this.initialised && (this.setDerivedData(), this.addBaseSeriesEvents(), this.initialised = !0)
                }))
            }

            function l() {
                this.eventRemovers.push(a(this.baseSeries, "updatedData", () => {
                    this.setDerivedData()
                }), a(this.baseSeries, "destroy", () => {
                    this.baseSeries = null, this.initialised = !1
                }))
            }

            function h() {
                this.eventRemovers.forEach(e => {
                    e()
                }), t.prototype.destroy.apply(this, arguments)
            }
            e.hasDerivedData = !0, e.setDerivedData = r, e.compose = function(e) {
                let t = e.prototype;
                return t.addBaseSeriesEvents = l, t.addEvents = o, t.destroy = h, t.init = s, t.setBaseSeries = i, e
            }, e.init = s, e.setBaseSeries = i, e.addEvents = o, e.addBaseSeriesEvents = l, e.destroy = h
        }(i || (i = {})), i
    }), s(t, "Series/Histogram/HistogramSeriesDefaults.js", [], function() {
        return {
            binsNumber: "square-root",
            binWidth: void 0,
            pointPadding: 0,
            groupPadding: 0,
            grouping: !1,
            pointPlacement: "between",
            tooltip: {
                headerFormat: "",
                pointFormat: '<span style="font-size: 0.8em">{point.x} - {point.x2}</span><br/><span style="color:{point.color}">●</span> {series.name} <b>{point.y}</b><br/>'
            }
        }
    }), s(t, "Series/Histogram/HistogramSeries.js", [t["Series/DerivedComposition.js"], t["Series/Histogram/HistogramSeriesDefaults.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t, s, i) {
        let {
            column: r
        } = s.seriesTypes, {
            arrayMax: a,
            arrayMin: n,
            correctFloat: o,
            extend: l,
            isNumber: h,
            merge: u
        } = i, d = {
            "square-root": function(e) {
                return Math.ceil(Math.sqrt(e.options.data.length))
            },
            sturges: function(e) {
                return Math.ceil(Math.log(e.options.data.length) * Math.LOG2E)
            },
            rice: function(e) {
                return Math.ceil(2 * Math.pow(e.options.data.length, 1 / 3))
            }
        };
        class p extends r {
            binsNumber() {
                let e = this.options.binsNumber,
                    t = d[e] || "function" == typeof e && e;
                return Math.ceil(t && t(this.baseSeries) || (h(e) ? e : d["square-root"](this.baseSeries)))
            }
            derivedData(e, t, s) {
                var i;
                let r;
                let l = o(a(e)),
                    u = o(n(e)),
                    d = [],
                    p = {},
                    c = [];
                for (s = this.binWidth = o(h(s) ? s || 1 : (l - u) / t), this.options.pointRange = Math.max(s, 0), r = u; r < l && (this.userOptions.binWidth || o(l - r) >= s || 0 >= o(o(u + d.length * s) - r)); r = o(r + s)) d.push(r), p[r] = 0;
                0 !== p[u] && (d.push(u), p[u] = 0);
                let v = (i = d.map(e => parseFloat(e)), function(e) {
                    let t = 1;
                    for (; i[t] <= e;) t++;
                    return i[--t]
                });
                for (let t of e) p[o(v(t))]++;
                for (let e of Object.keys(p)) c.push({
                    x: Number(e),
                    y: p[e],
                    x2: o(Number(e) + s)
                });
                return c.sort((e, t) => e.x - t.x), c[c.length - 1].x2 = l, c
            }
            setDerivedData() {
                let e = this.baseSeries.yData;
                if (!e.length) {
                    this.setData([]);
                    return
                }
                let t = this.derivedData(e, this.binsNumber(), this.options.binWidth);
                this.setData(t, !1)
            }
        }
        return p.defaultOptions = u(r.defaultOptions, t), l(p.prototype, {
            hasDerivedData: e.hasDerivedData
        }), e.compose(p), s.registerSeriesType("histogram", p), p
    }), s(t, "Series/Bellcurve/BellcurveSeriesDefaults.js", [], function() {
        return {
            intervals: 3,
            pointsInInterval: 3,
            marker: {
                enabled: !1
            }
        }
    }), s(t, "Series/Bellcurve/BellcurveSeries.js", [t["Series/Bellcurve/BellcurveSeriesDefaults.js"], t["Series/DerivedComposition.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t, s, i) {
        let {
            areaspline: r
        } = s.seriesTypes, {
            correctFloat: a,
            isNumber: n,
            merge: o
        } = i;
        class l extends r {
            static mean(e) {
                let t = e.length,
                    s = e.reduce(function(e, t) {
                        return e + t
                    }, 0);
                return t > 0 && s / t
            }
            static standardDeviation(e, t) {
                let s = e.length;
                t = n(t) ? t : l.mean(e);
                let i = e.reduce((e, s) => {
                    let i = s - t;
                    return e + i * i
                }, 0);
                return s > 1 && Math.sqrt(i / (s - 1))
            }
            static normalDensity(e, t, s) {
                let i = e - t;
                return Math.exp(-(i * i) / (2 * s * s)) / (s * Math.sqrt(2 * Math.PI))
            }
            derivedData(e, t) {
                let s = this.options,
                    i = s.intervals,
                    r = s.pointsInInterval,
                    a = i * r * 2 + 1,
                    n = t / r,
                    o = [],
                    h = e - i * t;
                for (let s = 0; s < a; s++) o.push([h, l.normalDensity(h, e, t)]), h += n;
                return o
            }
            setDerivedData() {
                this.baseSeries?.yData?.length && (this.setMean(), this.setStandardDeviation(), this.setData(this.derivedData(this.mean || 0, this.standardDeviation || 0), !1, void 0, !1))
            }
            setMean() {
                this.mean = a(l.mean(this.baseSeries.yData))
            }
            setStandardDeviation() {
                this.standardDeviation = a(l.standardDeviation(this.baseSeries.yData, this.mean))
            }
        }
        return l.defaultOptions = o(r.defaultOptions, e), t.compose(l), s.registerSeriesType("bellcurve", l), l
    }), s(t, "masters/modules/histogram-bellcurve.src.js", [t["Core/Globals.js"]], function(e) {
        return e
    })
}); //# sourceMappingURL=histogram-bellcurve.js.map