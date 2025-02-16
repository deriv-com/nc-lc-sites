!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Dependency wheel module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(e) {
    "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/dependency-wheel", ["highcharts", "highcharts/modules/sankey"], function(t) {
        return e(t), e.Highcharts = t, e
    }) : e("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(e) {
    "use strict";
    var t = e ? e._modules : {};

    function s(e, t, s, a) {
        e.hasOwnProperty(t) || (e[t] = a.apply(null, s), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: t,
                module: e[t]
            }
        })))
    }
    s(t, "Series/DependencyWheel/DependencyWheelPoint.js", [t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t) {
        let {
            sankey: {
                prototype: {
                    pointClass: s
                }
            }
        } = e.seriesTypes, {
            pInt: a,
            wrap: n
        } = t;
        return class extends s {
            getDataLabelPath(e) {
                let t = this,
                    s = t.series.chart.renderer,
                    i = t.shapeArgs,
                    r = t.angle < 0 || t.angle > Math.PI,
                    o = i.start || 0,
                    l = i.end || 0;
                return t.dataLabelPath ? (t.dataLabelPath = t.dataLabelPath.destroy(), delete t.dataLabelPath) : n(e, "destroy", function(e) {
                    return t.dataLabelPath && (t.dataLabelPath = t.dataLabelPath.destroy()), e.call(this)
                }), t.dataLabelPath = s.arc({
                    open: !0,
                    longArc: Math.abs(Math.abs(o) - Math.abs(l)) < Math.PI ? 0 : 1
                }).attr({
                    x: i.x,
                    y: i.y,
                    r: (i.r || 0) + a(e.options?.distance || 0),
                    start: r ? o : l,
                    end: r ? l : o,
                    clockwise: +r
                }).add(s.defs), t.dataLabelPath
            }
            isValid() {
                return !0
            }
        }
    }), s(t, "Series/DependencyWheel/DependencyWheelSeriesDefaults.js", [], function() {
        return {
            center: [null, null],
            curveFactor: .6,
            startAngle: 0,
            dataLabels: {
                textPath: {
                    enabled: !1,
                    attributes: {
                        dy: 5
                    }
                }
            }
        }
    }), s(t, "Series/DependencyWheel/DependencyWheelSeries.js", [t["Core/Animation/AnimationUtilities.js"], t["Series/DependencyWheel/DependencyWheelPoint.js"], t["Series/DependencyWheel/DependencyWheelSeriesDefaults.js"], t["Core/Globals.js"], t["Series/Sankey/SankeyColumnComposition.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t, s, a, n, i, r) {
        let {
            animObject: o
        } = e, {
            deg2rad: l
        } = a, {
            pie: d,
            sankey: h
        } = i.seriesTypes, {
            extend: c,
            merge: p,
            relativeLength: u
        } = r;
        class y extends h {
            animate(e) {
                if (!e) {
                    let e = o(this.options.animation).duration / 2 / this.nodes.length,
                        t = 0;
                    for (let s of this.nodes) {
                        let a = s.graphic;
                        a && (a.attr({
                            opacity: 0
                        }), setTimeout(() => {
                            s.graphic && s.graphic.animate({
                                opacity: 1
                            }, {
                                duration: e
                            })
                        }, e * t++))
                    }
                    for (let e of this.points) {
                        let t = e.graphic;
                        !e.isNode && t && t.attr({
                            opacity: 0
                        }).animate({
                            opacity: 1
                        }, this.options.animation)
                    }
                }
            }
            createNode(e) {
                let t = super.createNode(e);
                return t.getSum = () => t.linksFrom.concat(t.linksTo).reduce((e, t) => e + t.weight, 0), t.offset = e => {
                    let s = e => e.fromNode === t ? e.toNode : e.fromNode,
                        a = 0,
                        n = t.linksFrom.concat(t.linksTo),
                        i;
                    n.sort((e, t) => s(e).index - s(t).index);
                    for (let e = 0; e < n.length; e++)
                        if (s(n[e]).index > t.index) {
                            n = n.slice(0, e).reverse().concat(n.slice(e).reverse()), i = !0;
                            break
                        } i || n.reverse();
                    for (let t = 0; t < n.length; t++) {
                        if (n[t] === e) return a;
                        a += n[t].weight
                    }
                }, t
            }
            createNodeColumns() {
                let e = [n.compose([], this)];
                for (let t of this.nodes) t.column = 0, e[0].push(t);
                return e
            }
            getNodePadding() {
                return this.options.nodePadding / Math.PI
            }
            translate() {
                let e = this.options,
                    t = 2 * Math.PI / (this.chart.plotHeight + this.getNodePadding()),
                    s = this.getCenter(),
                    a = (e.startAngle - 90) * l,
                    n = e.borderRadius,
                    i = "object" == typeof n ? n.radius : n;
                for (let n of (super.translate(), this.nodeColumns[0]))
                    if (n.sum) {
                        let r = n.shapeArgs,
                            o = s[0],
                            l = s[1],
                            d = s[2] / 2,
                            h = d - u(("auto" === e.nodeWidth ? 20 : e.nodeWidth) || 0, d),
                            c = a + t * (r.y || 0),
                            p = a + t * ((r.y || 0) + (r.height || 0));
                        for (let s of (n.angle = c + (p - c) / 2, n.shapeType = "arc", n.shapeArgs = {
                                x: o,
                                y: l,
                                r: d,
                                innerR: h,
                                start: c,
                                end: p,
                                borderRadius: i
                            }, n.dlBox = {
                                x: o + Math.cos((c + p) / 2) * (d + h) / 2,
                                y: l + Math.sin((c + p) / 2) * (d + h) / 2,
                                width: 1,
                                height: 1
                            }, n.linksFrom))
                            if (s.linkBase) {
                                let n, i;
                                let r = s.linkBase.map((r, d) => {
                                    let c = t * r,
                                        p = Math.cos(a + c) * (h + 1),
                                        u = Math.sin(a + c) * (h + 1);
                                    return n = e.curveFactor || 0, (i = Math.abs(s.linkBase[3 - d] * t - c)) > Math.PI && (i = 2 * Math.PI - i), (i *= h) < h && (n *= i / h), {
                                        x: o + p,
                                        y: l + u,
                                        cpX: o + (1 - n) * p,
                                        cpY: l + (1 - n) * u
                                    }
                                });
                                s.shapeArgs = {
                                    d: [
                                        ["M", r[0].x, r[0].y],
                                        ["A", h, h, 0, 0, 1, r[1].x, r[1].y],
                                        ["C", r[1].cpX, r[1].cpY, r[2].cpX, r[2].cpY, r[2].x, r[2].y],
                                        ["A", h, h, 0, 0, 1, r[3].x, r[3].y],
                                        ["C", r[3].cpX, r[3].cpY, r[0].cpX, r[0].cpY, r[0].x, r[0].y]
                                    ]
                                }
                            }
                    }
            }
        }
        return y.defaultOptions = p(h.defaultOptions, s), c(y.prototype, {
            orderNodes: !1,
            getCenter: d.prototype.getCenter
        }), y.prototype.pointClass = t, i.registerSeriesType("dependencywheel", y), y
    }), s(t, "masters/modules/dependency-wheel.src.js", [t["Core/Globals.js"]], function(e) {
        return e
    })
}); //# sourceMappingURL=dependency-wheel.js.map