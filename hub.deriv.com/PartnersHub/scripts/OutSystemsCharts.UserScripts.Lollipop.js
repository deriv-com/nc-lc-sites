!
/**
 * Highcharts JS v11.4.8 (2024-08-29)
 *
 * (c) 2009-2024 Sebastian Bochan, Rafal Sebestjanski
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/lollipop", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function o(e, o, s, i) {
        e.hasOwnProperty(o) || (e[o] = i.apply(null, s), "function" == typeof CustomEvent && t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: o,
                module: e[o]
            }
        })))
    }
    o(e, "Series/Lollipop/LollipopPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            series: {
                prototype: {
                    pointClass: o
                }
            },
            seriesTypes: {
                scatter: {
                    prototype: {
                        pointClass: s
                    }
                },
                dumbbell: {
                    prototype: {
                        pointClass: i
                    }
                }
            }
        } = t, {
            extend: r
        } = e;
        class l extends o {}
        return r(l.prototype, {
            destroy: i.prototype.destroy,
            pointSetState: s.prototype.setState,
            setState: i.prototype.setState
        }), l
    }), o(e, "Series/Lollipop/LollipopSeries.js", [e["Series/Lollipop/LollipopPoint.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t, e, o, s) {
        let {
            seriesTypes: {
                column: {
                    prototype: i
                },
                dumbbell: {
                    prototype: r
                },
                scatter: l
            }
        } = e, {
            extend: n,
            merge: p
        } = s;
        class a extends o {
            drawPoints() {
                let t = this.points.length,
                    e = 0,
                    o;
                for (super.drawPoints.apply(this, arguments); e < t;) o = this.points[e], this.drawConnector(o), e++
            }
            translate() {
                for (let t of (i.translate.apply(this, arguments), this.points)) {
                    let {
                        pointWidth: e,
                        shapeArgs: o
                    } = t;
                    o?.x && (o.x += e / 2, t.plotX = o.x || 0)
                }
            }
        }
        return a.defaultOptions = p(o.defaultOptions, {
            threshold: 0,
            connectorWidth: 1,
            groupPadding: .2,
            pointPadding: .1,
            states: {
                hover: {
                    lineWidthPlus: 0,
                    connectorWidthPlus: 1,
                    halo: !1
                }
            },
            lineWidth: 0,
            dataLabels: {
                align: void 0,
                verticalAlign: void 0
            },
            pointRange: 1
        }), n(a.prototype, {
            alignDataLabel: i.alignDataLabel,
            crispCol: i.crispCol,
            drawConnector: r.drawConnector,
            drawDataLabels: i.drawDataLabels,
            getColumnMetrics: i.getColumnMetrics,
            getConnectorAttribs: r.getConnectorAttribs,
            pointClass: t
        }), e.registerSeriesType("lollipop", a), a
    }), o(e, "masters/modules/lollipop.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
});