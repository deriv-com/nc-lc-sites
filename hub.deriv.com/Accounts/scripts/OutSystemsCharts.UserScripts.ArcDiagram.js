!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Arc diagram module
 *
 * (c) 2021 Piotr Madej
 *
 * License: www.highcharts.com/license
 */
function(e) {
    "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/arc-diagram", ["highcharts", "highcharts/modules/sankey"], function(t) {
        return e(t), e.Highcharts = t, e
    }) : e("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(e) {
    "use strict";
    var t = e ? e._modules : {};

    function i(e, t, i, o) {
        e.hasOwnProperty(t) || (e[t] = o.apply(null, i), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: t,
                module: e[t]
            }
        })))
    }
    i(t, "Series/ArcDiagram/ArcDiagramPoint.js", [t["Series/NodesComposition.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t, i) {
        let {
            seriesTypes: {
                sankey: {
                    prototype: {
                        pointClass: o
                    }
                }
            }
        } = t, {
            extend: s
        } = i;
        class a extends o {
            isValid() {
                return !0
            }
        }
        return s(a.prototype, {
            setState: e.setNodeState
        }), a
    }), i(t, "Series/ArcDiagram/ArcDiagramSeries.js", [t["Series/ArcDiagram/ArcDiagramPoint.js"], t["Series/Sankey/SankeyColumnComposition.js"], t["Core/Series/Series.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Renderer/SVG/SVGRenderer.js"], t["Core/Utilities.js"]], function(e, t, i, o, s, a) {
        let {
            prototype: {
                symbols: n
            }
        } = s, {
            seriesTypes: {
                column: r,
                sankey: l
            }
        } = o, {
            extend: h,
            merge: d,
            pick: p,
            relativeLength: m
        } = a;
        class u extends l {
            createNodeColumns() {
                let e = this,
                    i = e.chart,
                    o = t.compose([], e);
                return o.sankeyColumn.maxLength = i.inverted ? i.plotHeight : i.plotWidth, o.sankeyColumn.getTranslationFactor = e => {
                    let t = o.slice(),
                        s = this.options.minLinkWidth || 0,
                        a, n = 0,
                        r, l, h = 0,
                        d = 1,
                        p = 0,
                        m = (i.plotSizeX || 0) - (e.options.marker && e.options.marker.lineWidth || 0) - (o.length - 1) * e.nodePadding;
                    for (; o.length;) {
                        for (n = m / o.sankeyColumn.sum(), a = !1, r = o.length; r--;) {
                            l = o[r].getSum() * n * d;
                            let e = Math.min(i.plotHeight, i.plotWidth);
                            l > e ? d = Math.min(e / l, d) : l < s && (o.splice(r, 1), m -= s, l = s, a = !0), p += l * (1 - d) / 2, h = Math.max(h, l)
                        }
                        if (!a) break
                    }
                    return o.length = 0, t.forEach(e => {
                        e.scale = d, o.push(e)
                    }), o.sankeyColumn.maxRadius = h, o.sankeyColumn.scale = d, o.sankeyColumn.additionalSpace = p, n
                }, o.sankeyColumn.offset = function(t, s) {
                    let a = t.series.options.equalNodes,
                        n = o.sankeyColumn.additionalSpace || 0,
                        r, l = e.nodePadding,
                        h = Math.min(i.plotWidth, i.plotHeight, (o.sankeyColumn.maxLength || 0) / e.nodes.length - l);
                    for (let i = 0; i < o.length; i++) {
                        let d = o[i].getSum() * (o.sankeyColumn.scale || 0),
                            p = a ? h : Math.max(d * s, e.options.minLinkWidth || 0);
                        if (r = d ? p + l : 0, o[i] === t) return {
                            relativeLeft: n + m(t.options.offset || 0, r)
                        };
                        n += r
                    }
                }, e.nodes.forEach(function(e) {
                    e.column = 0, o.push(e)
                }), [o]
            }
            translateLink(e) {
                let t = e.fromNode,
                    i = e.toNode,
                    o = this.chart,
                    s = this.translationFactor,
                    a = e.options,
                    n = this.options,
                    r = p(a.linkWeight, n.linkWeight, Math.max((e.weight || 0) * s * t.scale, this.options.minLinkWidth || 0)),
                    l = e.series.options.centeredLinks,
                    h = t.nodeY,
                    d = (t, i) => {
                        let o = (t.offset(e, i) || 0) * s;
                        return Math.min(t.nodeX + o, t.nodeX + (t.shapeArgs && t.shapeArgs.height || 0) - r)
                    },
                    m = l ? t.nodeX + ((t.shapeArgs.height || 0) - r) / 2 : d(t, "linksFrom"),
                    u = l ? i.nodeX + ((i.shapeArgs.height || 0) - r) / 2 : d(i, "linksTo"),
                    c = h;
                m > u && ([m, u] = [u, m]), n.reversed && ([m, u] = [u, m], c = (o.plotSizeY || 0) - c), e.shapeType = "path", e.linkBase = [m, m + r, u, u + r];
                let g = (u + r - m) / Math.abs(u + r - m) * p(n.linkRadius, Math.min(Math.abs(u + r - m) / 2, t.nodeY - Math.abs(r)));
                e.shapeArgs = {
                    d: [
                        ["M", m, c],
                        ["A", (u + r - m) / 2, g, 0, 0, 1, u + r, c],
                        ["L", u, c],
                        ["A", (u - m - r) / 2, g - r, 0, 0, 0, m + r, c],
                        ["Z"]
                    ]
                }, e.dlBox = {
                    x: m + (u - m) / 2,
                    y: c - g,
                    height: r,
                    width: 0
                }, e.tooltipPos = o.inverted ? [(o.plotSizeY || 0) - e.dlBox.y - r / 2, (o.plotSizeX || 0) - e.dlBox.x] : [e.dlBox.x, e.dlBox.y + r / 2], e.y = e.plotY = 1, e.x = e.plotX = 1, e.color || (e.color = t.color)
            }
            translateNode(e, t) {
                let i = this.translationFactor,
                    o = this.chart,
                    s = o.inverted ? o.plotWidth : o.plotHeight,
                    a = this.options,
                    r = Math.min(o.plotWidth, o.plotHeight, s / e.series.nodes.length - this.nodePadding),
                    h = e.getSum() * (t.sankeyColumn.scale || 0),
                    m = a.equalNodes ? r : Math.max(h * i, this.options.minLinkWidth || 0),
                    u = Math.round(a.marker && a.marker.lineWidth || 0) % 2 / 2,
                    c = t.sankeyColumn.offset(e, i),
                    g = Math.floor(p(c && c.absoluteLeft, (t.sankeyColumn.left(i) || 0) + (c && c.relativeLeft || 0))) + u,
                    f = d(a.marker, e.options.marker),
                    y = f.symbol,
                    k = f.radius,
                    S = parseInt(a.offset, 10) * ((o.inverted ? o.plotWidth : o.plotHeight) - (Math.floor(this.colDistance * (e.column || 0) + (f.lineWidth || 0) / 2) + u + (t.sankeyColumn.scale || 0) * (t.sankeyColumn.maxRadius || 0) / 2)) / 100;
                if (e.sum = h, h) {
                    e.nodeX = g, e.nodeY = S;
                    let t = e.options.width || a.width || m,
                        i = e.options.height || a.height || m,
                        s = S;
                    a.reversed && (s = (o.plotSizeY || 0) - S, o.inverted && (s = (o.plotSizeY || 0) - S)), this.mapOptionsToLevel && (e.dlOptions = l.getDLOptions({
                        level: this.mapOptionsToLevel[e.level],
                        optionsPoint: e.options
                    })), e.plotX = 1, e.plotY = 1, e.tooltipPos = o.inverted ? [(o.plotSizeY || 0) - s - i / 2, (o.plotSizeX || 0) - g - t / 2] : [g + t / 2, s + i / 2], e.shapeType = "path", e.shapeArgs = {
                        d: n[y || "circle"](g, s - (k || i) / 2, k || t, k || i),
                        width: k || t,
                        height: k || i
                    }, e.dlBox = {
                        x: g + t / 2,
                        y: s,
                        height: 0,
                        width: 0
                    }
                } else e.dlOptions = {
                    enabled: !1
                }
            }
            drawDataLabels() {
                if (this.options.dataLabels) {
                    let e = this.options.dataLabels.textPath;
                    r.prototype.drawDataLabels.call(this, this.nodes), this.options.dataLabels.textPath = this.options.dataLabels.linkTextPath, r.prototype.drawDataLabels.call(this, this.data), this.options.dataLabels.textPath = e
                }
            }
            pointAttribs(e, t) {
                if (e && e.isNode) {
                    let {
                        ...e
                    } = i.prototype.pointAttribs.apply(this, arguments);
                    return e
                }
                return super.pointAttribs.apply(this, arguments)
            }
            markerAttribs(e) {
                return e.isNode ? super.markerAttribs.apply(this, arguments) : {}
            }
        }
        return u.defaultOptions = d(l.defaultOptions, {
            centeredLinks: !1,
            offset: "100%",
            equalNodes: !1,
            reversed: !1,
            dataLabels: {
                linkTextPath: {
                    attributes: {
                        startOffset: "25%"
                    }
                }
            },
            marker: {
                symbol: "circle",
                fillOpacity: 1,
                lineWidth: 0,
                states: {}
            }
        }), h(u.prototype, {
            orderNodes: !1
        }), u.prototype.pointClass = e, o.registerSeriesType("arcdiagram", u), u
    }), i(t, "masters/modules/arc-diagram.src.js", [t["Core/Globals.js"]], function(e) {
        return e
    })
}); //# sourceMappingURL=arc-diagram.js.map