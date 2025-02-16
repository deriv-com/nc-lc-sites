!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Pictorial graph series type for Highcharts
 *
 * (c) 2010-2024 Torstein Honsi, Magdalena Gut
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/pictorial", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function i(t, e, i, r) {
        t.hasOwnProperty(e) || (t[e] = r.apply(null, i), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: e,
                module: t[e]
            }
        })))
    }
    i(e, "Extensions/PatternFill.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Utilities.js"]], function(t, e, i) {
        let {
            animObject: r
        } = t, {
            getOptions: s
        } = e, {
            addEvent: a,
            defined: o,
            erase: n,
            extend: h,
            merge: l,
            pick: d,
            removeEvent: p,
            wrap: c
        } = i, f = function() {
            let t = [],
                e = s().colors,
                i = 0;
            for (let r of ["M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5", "M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5", "M 2 0 L 2 5 M 4 0 L 4 5", "M 0 2 L 5 2 M 0 4 L 5 4", "M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5"]) t.push({
                path: r,
                color: e[i++],
                width: 5,
                height: 5,
                patternTransform: "scale(1.4 1.4)"
            });
            for (let r of (i = 5, ["M 0 0 L 5 10 L 10 0", "M 3 3 L 8 3 L 8 8 L 3 8 Z", "M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0", "M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11", "M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9"])) t.push({
                path: r,
                color: e[i],
                width: 10,
                height: 10
            }), i += 5;
            return t
        }();

        function u(t, e) {
            let i = JSON.stringify(t),
                r = i.length || 0,
                s = 0,
                a = 0,
                o;
            if (e) {
                o = Math.max(Math.floor(r / 500), 1);
                for (let t = 0; t < r; t += o) s += i.charCodeAt(t);
                s &= s
            }
            for (; a < r; ++a) s = (s << 5) - s + i.charCodeAt(a), s &= s;
            return s.toString(16).replace("-", "1")
        }

        function g() {
            if (this.renderer && (this.renderer.defIds || []).filter(t => t && t.indexOf && 0 === t.indexOf("highcharts-pattern-")).length) {
                for (let t of this.series)
                    if (t.visible)
                        for (let e of t.points) {
                            let t = e.options && e.options.color;
                            t && t.pattern && (t.pattern._width = "defer", t.pattern._height = "defer")
                        }
                this.redraw(!1)
            }
        }

        function m() {
            let t = {},
                e = this.renderer,
                i = (e.defIds || []).filter(t => t.indexOf && 0 === t.indexOf("highcharts-pattern-"));
            if (i.length)
                for (let r of ([].forEach.call(this.renderTo.querySelectorAll('[color^="url("], [fill^="url("], [stroke^="url("]'), i => {
                        let r = i.getAttribute("fill") || i.getAttribute("color") || i.getAttribute("stroke");
                        r && (t[r.replace(e.url, "").replace("url(#", "").replace(")", "")] = !0)
                    }), i)) !t[r] && (n(e.defIds, r), e.patternElements[r] && (e.patternElements[r].destroy(), delete e.patternElements[r]))
        }

        function x() {
            let t = this.options.color;
            t && t.pattern && ("string" == typeof t.pattern.path && (t.pattern.path = {
                d: t.pattern.path
            }), this.color = this.options.color = l(this.series.options.color, t))
        }

        function w(t) {
            let e = t.args[0],
                i = t.args[1],
                r = t.args[2],
                s = this.chartIndex || 0,
                a = e.pattern,
                o = "#333333";
            if (void 0 !== e.patternIndex && f && (a = f[e.patternIndex]), !a) return !0;
            if (a.image || "string" == typeof a.path || a.path && a.path.d) {
                let t = r.parentNode && r.parentNode.getAttribute("class");
                t = t && t.indexOf("highcharts-legend") > -1, ("defer" === a._width || "defer" === a._height) && C.call({
                    graphic: {
                        element: r
                    }
                }, a), (t || !a.id) && ((a = l({}, a)).id = "highcharts-pattern-" + s + "-" + u(a) + u(a, !0)), this.addPattern(a, !this.forExport && d(a.animation, this.globalAnimation, {
                    duration: 100
                })), o = `url(${this.url}#${a.id+(this.forExport?"-export":"")})`
            } else o = a.color || o;
            return r.setAttribute(i, o), e.toString = function() {
                return o
            }, !1
        }

        function y() {
            let t = this.chart.isResizing;
            if (this.isDirtyData || t || !this.chart.hasRendered)
                for (let e of this.points) {
                    let i = e.options && e.options.color;
                    i && i.pattern && (t && !(e.shapeArgs && e.shapeArgs.width && e.shapeArgs.height) ? (i.pattern._width = "defer", i.pattern._height = "defer") : e.calculatePatternDimensions(i.pattern))
                }
        }

        function C(t) {
            if (t.width && t.height) return;
            let e = this.graphic && (this.graphic.getBBox && this.graphic.getBBox(!0) || this.graphic.element && this.graphic.element.getBBox()) || {},
                i = this.shapeArgs;
            if (i && (e.width = i.width || e.width, e.height = i.height || e.height, e.x = i.x || e.x, e.y = i.y || e.y), t.image) {
                if (!e.width || !e.height) {
                    t._width = "defer", t._height = "defer";
                    let e = this.series.chart.mapView && this.series.chart.mapView.getSVGTransform().scaleY;
                    o(e) && e < 0 && (t._inverted = !0);
                    return
                }
                t.aspectRatio && (e.aspectRatio = e.width / e.height, t.aspectRatio > e.aspectRatio ? e.aspectWidth = e.height * t.aspectRatio : e.aspectHeight = e.width / t.aspectRatio), t._width = t.width || Math.ceil(e.aspectWidth || e.width), t._height = t.height || Math.ceil(e.aspectHeight || e.height)
            }
            t.width || (t._x = t.x || 0, t._x += e.x - Math.round(e.aspectWidth ? Math.abs(e.aspectWidth - e.width) / 2 : 0)), t.height || (t._y = t.y || 0, t._y += e.y - Math.round(e.aspectHeight ? Math.abs(e.aspectHeight - e.height) / 2 : 0))
        }

        function A(t, e) {
            let s = d(e, !0),
                a = r(s),
                o = t.color || "#333333",
                n = t.height || ("number" == typeof t._height ? t._height : 0) || 32,
                h = t.width || ("number" == typeof t._width ? t._width : 0) || 32,
                l, c = t.id,
                f;
            if (!c && (this.idCounter = this.idCounter || 0, c = "highcharts-pattern-" + this.idCounter + "-" + (this.chartIndex || 0), ++this.idCounter), this.forExport && (c += "-export"), this.defIds = this.defIds || [], this.defIds.indexOf(c) > -1) return;
            this.defIds.push(c);
            let u = {
                id: c,
                patternUnits: "userSpaceOnUse",
                patternContentUnits: t.patternContentUnits || "userSpaceOnUse",
                width: h,
                height: n,
                x: t._x || t.x || 0,
                y: t._y || t.y || 0
            };
            t._inverted && (u.patternTransform = "scale(1, -1)", t.patternTransform && (t.patternTransform += " scale(1, -1)")), t.patternTransform && (u.patternTransform = t.patternTransform);
            let g = this.createElement("pattern").attr(u).add(this.defs);
            if (g.id = c, t.path) {
                if (f = i.isObject(t.path) ? t.path : {
                        d: t.path
                    }, t.backgroundColor) {
                    let e;
                    e = t.backgroundColor, this.rect(0, 0, h, n).attr({
                        fill: e
                    }).add(g)
                }
                l = {
                    d: f.d
                }, this.styledMode || (l.stroke = f.stroke || o, l["stroke-width"] = d(f.strokeWidth, 2), l.fill = f.fill || "none"), f.transform && (l.transform = f.transform), this.createElement("path").attr(l).add(g), g.color = o
            } else t.image && (s ? this.image(t.image, 0, 0, h, n, function() {
                this.animate({
                    opacity: d(t.opacity, 1)
                }, a), p(this.element, "load")
            }).attr({
                opacity: 0
            }).add(g) : this.image(t.image, 0, 0, h, n).add(g));
            return t.image && s || void 0 === t.opacity || [].forEach.call(g.element.childNodes, e => {
                e.setAttribute("opacity", t.opacity)
            }), this.patternElements = this.patternElements || {}, this.patternElements[c] = g, g
        }

        function b(t) {
            let e = this.options.color;
            e && e.pattern && !e.pattern.color ? (delete this.options.color, t.apply(this, [].slice.call(arguments, 1)), e.pattern.color = this.color, this.color = this.options.color = e) : t.apply(this, [].slice.call(arguments, 1))
        }

        function M() {
            if (!this.chart?.mapView) return;
            let t = this.chart.renderer,
                e = t.patternElements;
            t.defIds?.length && e && this.points.filter(function(t) {
                return !!t.graphic && (t.graphic.element.hasAttribute("fill") || t.graphic.element.hasAttribute("color") || t.graphic.element.hasAttribute("stroke")) && !t.options.color?.pattern?.image && !!t.group?.scaleX && !!t.group?.scaleY
            }).map(function(e) {
                return {
                    id: (e.graphic?.element.getAttribute("fill") || e.graphic?.element.getAttribute("color") || e.graphic?.element.getAttribute("stroke") || "").replace(t.url, "").replace("url(#", "").replace(")", ""),
                    x: e.group?.scaleX || 1,
                    y: e.group?.scaleY || 1
                }
            }).filter(function(t, e, i) {
                return "" !== t.id && -1 !== t.id.indexOf("highcharts-pattern-") && !i.some(function(i, r) {
                    return i.id === t.id && r < e
                })
            }).forEach(function(t) {
                let i = t.id;
                e[i].scaleX = 1 / t.x, e[i].scaleY = 1 / t.y, e[i].updateTransform("patternTransform")
            })
        }
        return {
            compose: function(t, e, i) {
                let r = e.prototype.pointClass,
                    s = r.prototype;
                s.calculatePatternDimensions || (a(t, "endResize", g), a(t, "redraw", m), h(s, {
                    calculatePatternDimensions: C
                }), a(r, "afterInit", x), a(e, "render", y), c(e.prototype, "getColor", b), a(e, "afterRender", M), a(e, "mapZoomComplete", M), h(i.prototype, {
                    addPattern: A
                }), a(i, "complexColor", w))
            },
            patterns: f
        }
    }), i(e, "Series/Pictorial/PictorialUtilities.js", [e["Core/Utilities.js"]], function(t) {
        let {
            defined: e
        } = t;
        return {
            rescalePatternFill: function(t, e, i, r, s = 1) {
                let a = t && t.attr("fill"),
                    o = a && a.match(/url\(([^)]+)\)/);
                if (o) {
                    let a = document.querySelector(`${o[1]} path`);
                    if (a) {
                        let o = a.getBBox();
                        if (0 === o.width) {
                            let e = a.parentElement;
                            t.renderer.box.appendChild(a), o = a.getBBox(), e.appendChild(a)
                        }
                        let n = 1 / (o.width + s),
                            h = e / r / o.height,
                            l = o.width / o.height,
                            d = i / e,
                            p = -o.width / 2;
                        l < d && (n = n * l / d), a.setAttribute("stroke-width", s / (i * n)), a.setAttribute("transform", `translate(0.5, 0)scale(${n} ${h}) translate(${p+s*n/2}, ${-o.y})`)
                    }
                }
            },
            invertShadowGroup: function(t, e) {
                let i = e.chart.inverted;
                i && t.attr({
                    rotation: i ? 90 : 0,
                    scaleX: i ? -1 : 1
                })
            },
            getStackMetrics: function(t, i) {
                let r = t.len,
                    s = 0;
                return i && e(i.max) && (s = t.toPixels(i.max, !0), r = t.len - s), {
                    height: r,
                    y: s
                }
            }
        }
    }), i(e, "Series/Pictorial/PictorialPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Series/Pictorial/PictorialUtilities.js"]], function(t, e) {
        let i = t.seriesTypes.column.prototype.pointClass,
            {
                rescalePatternFill: r,
                getStackMetrics: s
            } = e;
        return class extends i {
            setState() {
                super.setState.apply(this, arguments);
                let t = this.series,
                    e = t.options.paths;
                if (this.graphic && this.shapeArgs && e) {
                    let i = e[this.index % e.length];
                    r(this.graphic, s(t.yAxis, i).height, this.shapeArgs.width || 0, this.shapeArgs.height || 1 / 0, this.series.options.borderWidth || 0)
                }
            }
        }
    }), i(e, "Series/Pictorial/PictorialSeries.js", [e["Extensions/PatternFill.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Chart/Chart.js"], e["Series/Pictorial/PictorialPoint.js"], e["Series/Pictorial/PictorialUtilities.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function(t, e, i, r, s, a, o, n, h, l) {
        let d = o.seriesTypes.column;
        t.compose(i, a, h);
        let {
            animObject: p
        } = e, {
            getStackMetrics: c,
            invertShadowGroup: f,
            rescalePatternFill: u
        } = s, {
            addEvent: g,
            defined: m,
            merge: x,
            objectEach: w,
            pick: y
        } = l;
        class C extends d {
            animate(t) {
                let {
                    chart: e,
                    group: i
                } = this, r = p(this.options.animation), s = [this.getSharedClipKey(), r.duration, r.easing, r.defer].join(","), a = e.sharedClips[s];
                if (t && i) {
                    let t = this.getClipBox();
                    a || (t.y = t.height, t.height = 0, a = e.renderer.clipRect(t), e.sharedClips[s] = a), i.clip(a)
                } else if (a && !a.hasClass("highcharts-animating")) {
                    let t = this.getClipBox();
                    a.addClass("highcharts-animating").animate(t, r)
                }
            }
            animateDrilldown() {}
            animateDrillupFrom() {}
            pointAttribs(t) {
                let e = super.pointAttribs.apply(this, arguments),
                    i = this.options.paths;
                if (t && t.shapeArgs && i) {
                    let r = i[t.index % i.length],
                        {
                            y: s,
                            height: a
                        } = c(this.yAxis, r),
                        o = r.definition;
                    o !== t.pathDef ? (t.pathDef = o, e.fill = {
                        pattern: {
                            path: {
                                d: o,
                                fill: e.fill,
                                strokeWidth: e["stroke-width"],
                                stroke: e.stroke
                            },
                            x: t.shapeArgs.x,
                            y: s,
                            width: t.shapeArgs.width || 0,
                            height: a,
                            patternContentUnits: "objectBoundingBox",
                            backgroundColor: "none",
                            color: "#ff0000"
                        }
                    }) : t.pathDef && t.graphic && delete e.fill
                }
                return delete e.stroke, delete e.strokeWidth, e
            }
            getExtremes() {
                let t = super.getExtremes.apply(this, arguments),
                    e = this.options.paths;
                return e && e.forEach(function(e) {
                    m(e.max) && m(t.dataMax) && e.max > t.dataMax && (t.dataMax = e.max)
                }), t
            }
        }

        function A(t) {
            let e = Object.keys(t.points).filter(t => t.split(",").length > 1),
                i = t.axis.chart.series,
                r = e.map(t => parseFloat(t.split(",")[0])),
                s = -1;
            r.forEach(t => {
                i[t] && i[t].visible && (s = t)
            });
            let a = t.axis.chart.series[s];
            if (a && a.is("pictorial") && t.axis.hasData() && a.xAxis.hasData()) {
                let e = a.xAxis,
                    i = t.axis.options,
                    r = t.axis.chart,
                    s = t.shadow,
                    o = e.toPixels(t.x, !0),
                    n = r.inverted ? e.len - o : o,
                    h = a.options.paths || [],
                    l = t.x % h.length,
                    d = h[l],
                    p = a.getColumnMetrics && a.getColumnMetrics().width,
                    {
                        height: g,
                        y: m
                    } = c(a.yAxis, d),
                    x = i.stackShadow,
                    w = y(x && x.borderWidth, a.options.borderWidth, 1);
                if (!s && x && x.enabled && d) t.shadowGroup || (t.shadowGroup = r.renderer.g("shadow-group").add()), t.shadowGroup.attr({
                    translateX: r.inverted ? t.axis.pos : e.pos,
                    translateY: r.inverted ? e.pos : t.axis.pos
                }), t.shadow = r.renderer.rect(n, m, p, g).attr({
                    fill: {
                        pattern: {
                            path: {
                                d: d.definition,
                                fill: x.color || "#dedede",
                                strokeWidth: w,
                                stroke: x.borderColor || "transparent"
                            },
                            x: n,
                            y: m,
                            width: p,
                            height: g,
                            patternContentUnits: "objectBoundingBox",
                            backgroundColor: "none",
                            color: "#dedede"
                        }
                    }
                }).add(t.shadowGroup), f(t.shadowGroup, t.axis), u(t.shadow, g, p, g, w), t.setOffset(a.pointXOffset || 0, a.barW || 0);
                else if (s && t.shadowGroup) {
                    s.animate({
                        x: n,
                        y: m,
                        width: p,
                        height: g
                    });
                    let i = s.attr("fill"),
                        o = i && i.match(/url\(([^)]+)\)/);
                    o && r.renderer.patternElements && r.renderer.patternElements[o[1].slice(1)].animate({
                        x: n,
                        y: m,
                        width: p,
                        height: g
                    }), t.shadowGroup.animate({
                        translateX: r.inverted ? t.axis.pos : e.pos,
                        translateY: r.inverted ? e.pos : t.axis.pos
                    }), f(t.shadowGroup, t.axis), u(s, g, p, g, w), t.setOffset(a.pointXOffset || 0, a.barW || 0)
                }
            } else t.shadow && t.shadowGroup && (t.shadow.destroy(), t.shadow = void 0, t.shadowGroup.destroy(), t.shadowGroup = void 0)
        }

        function b(t, e) {
            t.axes && t.axes.forEach(function(t) {
                t.stacking && w(t.stacking.stacks, function(t) {
                    w(t, function(t) {
                        e(t)
                    })
                })
            })
        }

        function M(t) {
            b(t, function(t) {
                t.shadow && t.shadowGroup && (t.shadow.destroy(), t.shadowGroup.destroy(), delete t.shadow, delete t.shadowGroup)
            })
        }
        return C.defaultOptions = x(d.defaultOptions, {
            borderWidth: 0
        }), g(C, "afterRender", function() {
            let t = this,
                e = t.options.paths,
                i = /url\(([^)]+)\)/;
            t.points.forEach(function(r) {
                if (r.graphic && r.shapeArgs && e) {
                    let s = e[r.index % e.length],
                        a = r.graphic.attr("fill"),
                        o = a && a.match(i),
                        {
                            y: n,
                            height: h
                        } = c(t.yAxis, s);
                    if (o && t.chart.renderer.patternElements) {
                        let e = t.chart.renderer.patternElements[o[1].slice(1)];
                        e && e.animate({
                            x: r.shapeArgs.x,
                            y: n,
                            width: r.shapeArgs.width || 0,
                            height: h
                        })
                    }
                    u(r.graphic, c(t.yAxis, s).height, r.shapeArgs.width || 0, r.shapeArgs.height || 1 / 0, t.options.borderWidth || 0)
                }
            })
        }), g(i, "render", function() {
            b(this, A)
        }), g(n, "afterSetOffset", function(t) {
            if (this.shadow) {
                let {
                    chart: e,
                    len: i
                } = this.axis, {
                    xOffset: r,
                    width: s
                } = t, a = e.inverted ? r - e.xAxis[0].len : r, o = e.inverted ? -i : 0;
                this.shadow.attr({
                    translateX: a,
                    translateY: o
                }), this.shadow.animate({
                    width: s
                })
            }
        }), g(i, "afterDrilldown", function() {
            M(this)
        }), g(i, "afterDrillUp", function() {
            M(this)
        }), C.prototype.pointClass = r, o.registerSeriesType("pictorial", C), C
    }), i(e, "masters/modules/pictorial.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
}); //# sourceMappingURL=pictorial.js.map