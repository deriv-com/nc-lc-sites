!
/**
 * Highmaps JS v11.4.0 (2024-03-04)
 *
 * Tilemap module
 *
 * (c) 2010-2024 Highsoft AS
 *
 * License: www.highcharts.com/license
 */
function(e) {
    "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/tilemap", ["highcharts", "highcharts/modules/map"], function(t) {
        return e(t), e.Highcharts = t, e
    }) : e("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(e) {
    "use strict";
    var t = e ? e._modules : {};

    function a(e, t, a, i) {
        e.hasOwnProperty(t) || (e[t] = i.apply(null, a), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: t,
                module: e[t]
            }
        })))
    }
    a(t, "Series/Tilemap/TilemapPoint.js", [t["Core/Axis/Color/ColorAxisComposition.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t, a) {
        let {
            series: {
                prototype: {
                    pointClass: i
                }
            },
            seriesTypes: {
                heatmap: {
                    prototype: {
                        pointClass: s
                    }
                }
            }
        } = t, {
            extend: n
        } = a;
        class r extends s {
            haloPath() {
                return this.series.tileShape.haloPath.apply(this, arguments)
            }
        }
        return n(r.prototype, {
            setState: i.prototype.setState,
            setVisible: e.pointSetVisible
        }), r
    }), a(t, "Series/Tilemap/TilemapSeriesDefaults.js", [], function() {
        return {
            marker: null,
            states: {
                hover: {
                    halo: {
                        enabled: !0,
                        size: 2,
                        opacity: .5,
                        attributes: {
                            zIndex: 3
                        }
                    }
                }
            },
            pointPadding: 2,
            tileShape: "hexagon"
        }
    }), a(t, "Series/Tilemap/TilemapShapes.js", [t["Core/Globals.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t, a) {
        let {
            noop: i
        } = e, {
            heatmap: s,
            scatter: n
        } = t.seriesTypes, {
            clamp: r,
            pick: l
        } = a;

        function o(e, t, a) {
            let i = e.options;
            return {
                xPad: -((i.colsize || 1) / t),
                yPad: -((i.rowsize || 1) / a)
            }
        }
        return {
            hexagon: {
                alignDataLabel: n.prototype.alignDataLabel,
                getSeriesPadding: function(e) {
                    return o(e, 3, 2)
                },
                haloPath: function(e) {
                    if (!e) return [];
                    let t = this.tileEdges;
                    return [
                        ["M", t.x2 - e, t.y1 + e],
                        ["L", t.x3 + e, t.y1 + e],
                        ["L", t.x4 + 1.5 * e, t.y2],
                        ["L", t.x3 + e, t.y3 - e],
                        ["L", t.x2 - e, t.y3 - e],
                        ["L", t.x1 - 1.5 * e, t.y2],
                        ["Z"]
                    ]
                },
                translate: function() {
                    let e;
                    let t = this.options,
                        a = this.xAxis,
                        i = this.yAxis,
                        s = t.pointPadding || 0,
                        n = (t.colsize || 1) / 3,
                        o = (t.rowsize || 1) / 2;
                    for (let t of (this.generatePoints(), this.points)) {
                        let p = r(Math.floor(a.len - a.translate(t.x - 2 * n, 0, 1, 0, 1)), -a.len, 2 * a.len),
                            h = r(Math.floor(a.len - a.translate(t.x - n, 0, 1, 0, 1)), -a.len, 2 * a.len),
                            d = r(Math.floor(a.len - a.translate(t.x + n, 0, 1, 0, 1)), -a.len, 2 * a.len),
                            u = r(Math.floor(a.len - a.translate(t.x + 2 * n, 0, 1, 0, 1)), -a.len, 2 * a.len),
                            g = r(Math.floor(i.translate(t.y - o, 0, 1, 0, 1)), -i.len, 2 * i.len),
                            c = r(Math.floor(i.translate(t.y, 0, 1, 0, 1)), -i.len, 2 * i.len),
                            y = r(Math.floor(i.translate(t.y + o, 0, 1, 0, 1)), -i.len, 2 * i.len),
                            x = l(t.pointPadding, s),
                            f = x * Math.abs(h - p) / Math.abs(y - c),
                            m = a.reversed ? -f : f,
                            P = a.reversed ? -x : x,
                            S = i.reversed ? -x : x;
                        t.x % 2 && (e = e || Math.round(Math.abs(y - g) / 2) * (i.reversed ? -1 : 1), g += e, c += e, y += e), t.plotX = t.clientX = (h + d) / 2, t.plotY = c, p += m + P, h += P, d -= P, u -= m + P, g -= S, y += S, t.tileEdges = {
                            x1: p,
                            x2: h,
                            x3: d,
                            x4: u,
                            y1: g,
                            y2: c,
                            y3: y
                        }, t.shapeType = "path", t.shapeArgs = {
                            d: [
                                ["M", h, g],
                                ["L", d, g],
                                ["L", u, c],
                                ["L", d, y],
                                ["L", h, y],
                                ["L", p, c],
                                ["Z"]
                            ]
                        }
                    }
                    this.translateColors()
                }
            },
            diamond: {
                alignDataLabel: n.prototype.alignDataLabel,
                getSeriesPadding: function(e) {
                    return o(e, 2, 2)
                },
                haloPath: function(e) {
                    if (!e) return [];
                    let t = this.tileEdges;
                    return [
                        ["M", t.x2, t.y1 + e],
                        ["L", t.x3 + e, t.y2],
                        ["L", t.x2, t.y3 - e],
                        ["L", t.x1 - e, t.y2],
                        ["Z"]
                    ]
                },
                translate: function() {
                    let e;
                    let t = this.options,
                        a = this.xAxis,
                        i = this.yAxis,
                        s = t.pointPadding || 0,
                        n = t.colsize || 1,
                        o = (t.rowsize || 1) / 2;
                    for (let t of (this.generatePoints(), this.points)) {
                        let p = r(Math.round(a.len - a.translate(t.x - n, 0, 1, 0, 0)), -a.len, 2 * a.len),
                            h = r(Math.round(a.len - a.translate(t.x + n, 0, 1, 0, 0)), -a.len, 2 * a.len),
                            d = r(Math.round(i.translate(t.y - o, 0, 1, 0, 0)), -i.len, 2 * i.len),
                            u = r(Math.round(i.translate(t.y, 0, 1, 0, 0)), -i.len, 2 * i.len),
                            g = r(Math.round(i.translate(t.y + o, 0, 1, 0, 0)), -i.len, 2 * i.len),
                            c = r(Math.round(a.len - a.translate(t.x, 0, 1, 0, 0)), -a.len, 2 * a.len),
                            y = l(t.pointPadding, s),
                            x = y * Math.abs(c - p) / Math.abs(g - u),
                            f = a.reversed ? -x : x,
                            m = i.reversed ? -y : y;
                        t.x % 2 && (e = Math.abs(g - d) / 2 * (i.reversed ? -1 : 1), d += e, u += e, g += e), t.plotX = t.clientX = c, t.plotY = u, p += f, h -= f, d -= m, g += m, t.tileEdges = {
                            x1: p,
                            x2: c,
                            x3: h,
                            y1: d,
                            y2: u,
                            y3: g
                        }, t.shapeType = "path", t.shapeArgs = {
                            d: [
                                ["M", c, d],
                                ["L", h, u],
                                ["L", c, g],
                                ["L", p, u],
                                ["Z"]
                            ]
                        }
                    }
                    this.translateColors()
                }
            },
            circle: {
                alignDataLabel: n.prototype.alignDataLabel,
                getSeriesPadding: function(e) {
                    return o(e, 2, 2)
                },
                haloPath: function(e) {
                    return n.prototype.pointClass.prototype.haloPath.call(this, e + (e && this.radius))
                },
                translate: function() {
                    let e = this.options,
                        t = this.xAxis,
                        a = this.yAxis,
                        i = e.pointPadding || 0,
                        s = (e.rowsize || 1) / 2,
                        n = e.colsize || 1,
                        l, o, p, h, d = !1;
                    for (let e of (this.generatePoints(), this.points)) {
                        let u = r(Math.round(t.len - t.translate(e.x, 0, 1, 0, 0)), -t.len, 2 * t.len),
                            g = r(Math.round(a.translate(e.y, 0, 1, 0, 0)), -a.len, 2 * a.len),
                            c = i,
                            y = !1;
                        void 0 !== e.pointPadding && (c = e.pointPadding, y = !0, d = !0), (!h || d) && (p = Math.floor(Math.sqrt((l = Math.abs(r(Math.floor(t.len - t.translate(e.x + n, 0, 1, 0, 0)), -t.len, 2 * t.len) - u)) * l + (o = Math.abs(r(Math.floor(a.translate(e.y + s, 0, 1, 0, 0)), -a.len, 2 * a.len) - g)) * o) / 2), h = Math.min(l, p, o) - c, d && !y && (d = !1)), e.x % 2 && (g += o * (a.reversed ? -1 : 1)), e.plotX = e.clientX = u, e.plotY = g, e.radius = h, e.shapeType = "circle", e.shapeArgs = {
                            x: u,
                            y: g,
                            r: h
                        }
                    }
                    this.translateColors()
                }
            },
            square: {
                alignDataLabel: s.prototype.alignDataLabel,
                translate: s.prototype.translate,
                getSeriesPadding: i,
                haloPath: s.prototype.pointClass.prototype.haloPath
            }
        }
    }), a(t, "Series/Tilemap/TilemapSeries.js", [t["Core/Globals.js"], t["Core/Series/SeriesRegistry.js"], t["Series/Tilemap/TilemapPoint.js"], t["Series/Tilemap/TilemapSeriesDefaults.js"], t["Series/Tilemap/TilemapShapes.js"], t["Core/Utilities.js"]], function(e, t, a, i, s, n) {
        let {
            composed: r,
            noop: l
        } = e, {
            column: o,
            heatmap: p,
            scatter: h
        } = t.seriesTypes, {
            addEvent: d,
            extend: u,
            merge: g,
            pushUnique: c
        } = n;

        function y() {
            if (this.recomputingForTilemap || "colorAxis" === this.coll) return;
            let e = this,
                t = e.series.map(function(t) {
                    return t.getSeriesPixelPadding && t.getSeriesPixelPadding(e)
                }).reduce(function(e, t) {
                    return (e && e.padding) > (t && t.padding) ? e : t
                }, void 0) || {
                    padding: 0,
                    axisLengthFactor: 1
                },
                a = Math.round(t.padding * t.axisLengthFactor);
            t.padding && (e.len -= a, e.recomputingForTilemap = !0, e.setAxisTranslation(), delete e.recomputingForTilemap, e.minPixelPadding += t.padding, e.len += a)
        }
        class x extends p {
            static compose(e) {
                c(r, "TilemapSeries") && d(e, "afterSetAxisTranslation", y)
            }
            alignDataLabel() {
                return this.tileShape.alignDataLabel.apply(this, arguments)
            }
            drawPoints() {
                for (let e of (o.prototype.drawPoints.call(this), this.points)) e.graphic && e.graphic[this.chart.styledMode ? "css" : "animate"](this.colorAttribs(e))
            }
            getSeriesPixelPadding(e) {
                let t = e.isXAxis,
                    a = this.tileShape.getSeriesPadding(this);
                if (!a) return {
                    padding: 0,
                    axisLengthFactor: 1
                };
                let i = Math.round(e.translate(t ? 2 * a.xPad : a.yPad, 0, 1, 0, 1)),
                    s = Math.round(e.translate(t ? a.xPad : 0, 0, 1, 0, 1));
                return {
                    padding: (e.single ? Math.abs(i - s) / 2 : Math.abs(i - s)) || 0,
                    axisLengthFactor: t ? 2 : 1.1
                }
            }
            setOptions() {
                let e = super.setOptions.apply(this, arguments);
                return this.tileShape = s[e.tileShape], e
            }
            translate() {
                return this.tileShape.translate.apply(this, arguments)
            }
        }
        return x.defaultOptions = g(p.defaultOptions, i), u(x.prototype, {
            getSymbol: l,
            markerAttribs: h.prototype.markerAttribs,
            pointAttribs: o.prototype.pointAttribs,
            pointClass: a
        }), t.registerSeriesType("tilemap", x), x
    }), a(t, "masters/modules/tilemap.src.js", [t["Core/Globals.js"], t["Series/Tilemap/TilemapSeries.js"]], function(e, t) {
        return t.compose(e.Axis), e
    })
}); //# sourceMappingURL=tilemap.js.map