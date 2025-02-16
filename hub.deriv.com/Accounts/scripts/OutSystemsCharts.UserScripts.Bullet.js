!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Bullet graph series type for Highcharts
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/bullet", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function r(t, e, r, i) {
        t.hasOwnProperty(e) || (t[e] = i.apply(null, r), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: e,
                module: t[e]
            }
        })))
    }
    r(e, "Series/Bullet/BulletPoint.js", [e["Series/Column/ColumnSeries.js"]], function(t) {
        class e extends t.prototype.pointClass {
            destroy() {
                this.targetGraphic && (this.targetGraphic = this.targetGraphic.destroy()), super.destroy.apply(this, arguments)
            }
        }
        return e
    }), r(e, "Series/Bullet/BulletSeriesDefaults.js", [], function() {
        return {
            targetOptions: {
                width: "140%",
                height: 3,
                borderWidth: 0,
                borderRadius: 0
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b>. Target: <b>{point.target}</b><br/>'
            }
        }
    }), r(e, "Series/Bullet/BulletSeries.js", [e["Series/Bullet/BulletPoint.js"], e["Series/Bullet/BulletSeriesDefaults.js"], e["Series/Column/ColumnSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, r, i, s) {
        let {
            extend: o,
            isNumber: a,
            merge: l,
            pick: n,
            relativeLength: d
        } = s;
        class h extends r {
            drawPoints() {
                let t = this.chart,
                    e = this.options,
                    r = e.animationLimit || 250;
                for (let i of (super.drawPoints.apply(this, arguments), this.points)) {
                    let s = i.options,
                        o = i.target,
                        h = i.y,
                        p, u = i.targetGraphic,
                        c, g, m, f;
                    if (a(o) && null !== o) {
                        g = (m = l(e.targetOptions, s.targetOptions)).height;
                        let y = i.shapeArgs;
                        i.dlBox && y && !a(y.width) && (y = i.dlBox), c = d(m.width, y.width), f = this.yAxis.translate(o, !1, !0, !1, !0) - m.height / 2 - .5, p = this.crispCol.apply({
                            chart: t,
                            borderWidth: m.borderWidth,
                            options: {
                                crisp: e.crisp
                            }
                        }, [y.x + y.width / 2 - c / 2, f, c, g]), u ? (u[t.pointCount < r ? "animate" : "attr"](p), a(h) && null !== h ? u.element.point = i : u.element.point = void 0) : i.targetGraphic = u = t.renderer.rect().attr(p).add(this.group), t.styledMode || u.attr({
                            fill: n(m.color, s.color, this.zones.length && (i.getZone.call({
                                series: this,
                                x: i.x,
                                y: o,
                                options: {}
                            }).color || this.color) || void 0, i.color, this.color),
                            stroke: n(m.borderColor, i.borderColor, this.options.borderColor),
                            "stroke-width": m.borderWidth,
                            r: m.borderRadius
                        }), a(h) && null !== h && (u.element.point = i), u.addClass(i.getClassName() + " highcharts-bullet-target", !0)
                    } else u && (i.targetGraphic = u.destroy())
                }
            }
            getExtremes(t) {
                let e = super.getExtremes.call(this, t),
                    r = this.targetData;
                if (r && r.length) {
                    let t = super.getExtremes.call(this, r);
                    a(t.dataMin) && (e.dataMin = Math.min(n(e.dataMin, 1 / 0), t.dataMin)), a(t.dataMax) && (e.dataMax = Math.max(n(e.dataMax, -1 / 0), t.dataMax))
                }
                return e
            }
        }
        return h.defaultOptions = l(r.defaultOptions, e), o(h.prototype, {
            parallelArrays: ["x", "y", "target"],
            pointArrayMap: ["y", "target"]
        }), h.prototype.pointClass = t, i.registerSeriesType("bullet", h), h
    }), r(e, "masters/modules/bullet.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
}); //# sourceMappingURL=bullet.js.map