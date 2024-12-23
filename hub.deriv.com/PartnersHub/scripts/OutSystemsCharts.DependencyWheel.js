!
/**
 * Highcharts JS v11.4.8 (2024-08-29)
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

    function s(t, s, n, a) {
        t.hasOwnProperty(s) || (t[s] = a.apply(null, n), "function" == typeof CustomEvent && e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: s,
                module: t[s]
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
            pInt: n,
            wrap: a
        } = t;
        return class extends s {
            getDataLabelPath(e) {
                let t = this,
                    s = t.series.chart.renderer,
                    r = t.shapeArgs,
                    i = t.angle < 0 || t.angle > Math.PI,
                    o = r.start || 0,
                    l = r.end || 0;
                return t.dataLabelPath ? (t.dataLabelPath = t.dataLabelPath.destroy(), delete t.dataLabelPath) : a(e, "destroy", function(e) {
                    return t.dataLabelPath && (t.dataLabelPath = t.dataLabelPath.destroy()), e.call(this)
                }), t.dataLabelPath = s.arc({
                    open: !0,
                    longArc: Math.abs(Math.abs(o) - Math.abs(l)) < Math.PI ? 0 : 1
                }).attr({
                    x: r.x,
                    y: r.y,
                    r: (r.r || 0) + n(e.options?.distance || 0),
                    start: i ? o : l,
                    end: i ? l : o,
                    clockwise: +i
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
    }), s(t, "Series/DependencyWheel/DependencyWheelSeries.js", [t["Core/Animation/AnimationUtilities.js"], t["Series/DependencyWheel/DependencyWheelPoint.js"], t["Series/DependencyWheel/DependencyWheelSeriesDefaults.js"], t["Core/Globals.js"], t["Series/Sankey/SankeyColumnComposition.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"], t["Core/Renderer/SVG/SVGElement.js"], t["Extensions/TextPath.js"]], function(e, t, s, n, a, r, i, o, l) {
        let {
            animObject: d
        } = e, {
            deg2rad: h
        } = n, {
            pie: c,
            sankey: p
        } = r.seriesTypes, {
            extend: u,
            merge: y,
            relativeLength: f
        } = i;
        l.compose(o);
        class g extends p {
            animate(e) {
                if (!e) {
                    let e = d(this.options.animation).duration / 2 / this.nodes.length,
                        t = 0;
                    for (let s of this.nodes) {
                        let n = s.graphic;
                        n && (n.attr({
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
                        n = 0,
                        a = t.linksFrom.concat(t.linksTo),
                        r;
                    a.sort((e, t) => s(e).index - s(t).index);
                    for (let e = 0; e < a.length; e++)
                        if (s(a[e]).index > t.index) {
                            a = a.slice(0, e).reverse().concat(a.slice(e).reverse()), r = !0;
                            break
                        } r || a.reverse();
                    for (let t = 0; t < a.length; t++) {
                        if (a[t] === e) return n;
                        n += a[t].weight
                    }
                }, t
            }
            createNodeColumns() {
                let e = [a.compose([], this)];
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
                    n = (e.startAngle - 90) * h,
                    a = e.borderRadius,
                    r = "object" == typeof a ? a.radius : a;
                for (let a of (super.translate(), this.nodeColumns[0]))
                    if (a.sum) {
                        let i = a.shapeArgs,
                            o = s[0],
                            l = s[1],
                            d = s[2] / 2,
                            h = d - f(("auto" === e.nodeWidth ? 20 : e.nodeWidth) || 0, d),
                            c = n + t * (i.y || 0),
                            p = n + t * ((i.y || 0) + (i.height || 0));
                        for (let s of (a.angle = c + (p - c) / 2, a.shapeType = "arc", a.shapeArgs = {
                                x: o,
                                y: l,
                                r: d,
                                innerR: h,
                                start: c,
                                end: p,
                                borderRadius: r
                            }, a.dlBox = {
                                x: o + Math.cos((c + p) / 2) * (d + h) / 2,
                                y: l + Math.sin((c + p) / 2) * (d + h) / 2,
                                width: 1,
                                height: 1
                            }, a.linksFrom))
                            if (s.linkBase) {
                                let a, r;
                                let i = s.linkBase.map((i, d) => {
                                    let c = t * i,
                                        p = Math.cos(n + c) * (h + 1),
                                        u = Math.sin(n + c) * (h + 1);
                                    return a = e.curveFactor || 0, (r = Math.abs(s.linkBase[3 - d] * t - c)) > Math.PI && (r = 2 * Math.PI - r), (r *= h) < h && (a *= r / h), {
                                        x: o + p,
                                        y: l + u,
                                        cpX: o + (1 - a) * p,
                                        cpY: l + (1 - a) * u
                                    }
                                });
                                s.shapeArgs = {
                                    d: [
                                        ["M", i[0].x, i[0].y],
                                        ["A", h, h, 0, 0, 1, i[1].x, i[1].y],
                                        ["C", i[1].cpX, i[1].cpY, i[2].cpX, i[2].cpY, i[2].x, i[2].y],
                                        ["A", h, h, 0, 0, 1, i[3].x, i[3].y],
                                        ["C", i[3].cpX, i[3].cpY, i[0].cpX, i[0].cpY, i[0].x, i[0].y]
                                    ]
                                }
                            }
                    }
            }
        }
        return g.defaultOptions = y(p.defaultOptions, s), u(g.prototype, {
            orderNodes: !1,
            getCenter: c.prototype.getCenter
        }), g.prototype.pointClass = t, r.registerSeriesType("dependencywheel", g), g
    }), s(t, "masters/modules/dependency-wheel.src.js", [t["Core/Globals.js"]], function(e) {
        return e
    })
});