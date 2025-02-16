!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Highcharts funnel module
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/funnel3d", ["highcharts", "highcharts/highcharts-3d", "highcharts/modules/cylinder"], function(e) {
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
    i(e, "Series/Funnel3D/SVGElement3DFunnel.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function(t, e, i, r) {
        let {
            parse: n
        } = t, {
            charts: o
        } = e, {
            Element3D: s
        } = i.getRendererType().prototype, {
            merge: d
        } = r;
        return class extends s {
            constructor() {
                super(...arguments), this.mainParts = ["top", "bottom"], this.parts = ["top", "bottom", "frontUpper", "backUpper", "frontLower", "backLower", "rightUpper", "rightLower"], this.sideGroups = ["upperGroup", "lowerGroup"], this.sideParts = {
                    upperGroup: ["frontUpper", "backUpper", "rightUpper"],
                    lowerGroup: ["frontLower", "backLower", "rightLower"]
                }, this.pathType = "funnel3d"
            }
            opacitySetter(t) {
                let e = parseFloat(t),
                    i = this.parts,
                    r = o[this.renderer.chartIndex],
                    n = "group-opacity-" + e + "-" + r.index;
                if (this.parts = this.mainParts, this.singleSetterForParts("opacity", e), this.parts = i, !r.renderer.filterId) {
                    for (let t of (r.renderer.definition({
                            tagName: "filter",
                            attributes: {
                                id: n
                            },
                            children: [{
                                tagName: "feComponentTransfer",
                                children: [{
                                    tagName: "feFuncA",
                                    attributes: {
                                        type: "table",
                                        tableValues: "0 " + e
                                    }
                                }]
                            }]
                        }), this.sideGroups)) this[t].attr({
                        filter: "url(#" + n + ")"
                    });
                    if (this.renderer.styledMode)
                        for (let t of (r.renderer.definition({
                                tagName: "style",
                                textContent: ".highcharts-" + n + " {filter:url(#" + n + ")}"
                            }), this.sideGroups)) this[t].addClass("highcharts-" + n)
                }
                return this
            }
            fillSetter(t) {
                let e = n(t),
                    i = e.rgba[3],
                    r = {
                        top: n(t).brighten(.1).get(),
                        bottom: n(t).brighten(-.2).get()
                    };
                if (i < 1 ? (e.rgba[3] = 1, e = e.get("rgb"), this.attr({
                        opacity: i
                    })) : e = t, e.linearGradient || e.radialGradient || !this.gradientForSides || (e = {
                        linearGradient: {
                            x1: 0,
                            x2: 1,
                            y1: 1,
                            y2: 1
                        },
                        stops: [
                            [0, n(t).brighten(-.2).get()],
                            [.5, t],
                            [1, n(t).brighten(-.2).get()]
                        ]
                    }), e.linearGradient)
                    for (let t of this.sideGroups) {
                        let i = this[t].gradientBox,
                            n = e.linearGradient,
                            o = d(e, {
                                linearGradient: {
                                    x1: i.x + n.x1 * i.width,
                                    y1: i.y + n.y1 * i.height,
                                    x2: i.x + n.x2 * i.width,
                                    y2: i.y + n.y2 * i.height
                                }
                            });
                        for (let e of this.sideParts[t]) r[e] = o
                    } else if (d(!0, r, {
                            frontUpper: e,
                            backUpper: e,
                            rightUpper: e,
                            frontLower: e,
                            backLower: e,
                            rightLower: e
                        }), e.radialGradient)
                        for (let t of this.sideGroups) {
                            let e = this[t].gradientBox,
                                i = e.x + e.width / 2,
                                r = e.y + e.height / 2,
                                n = Math.min(e.width, e.height);
                            for (let e of this.sideParts[t]) this[e].setRadialReference([i, r, n])
                        }
                if (this.singleSetterForParts("fill", null, r), this.color = this.fill = t, e.linearGradient)
                    for (let t of [this.frontLower, this.frontUpper]) {
                        let e = t.element,
                            i = e && this.renderer.gradients[e.gradient];
                        i && "userSpaceOnUse" !== i.attr("gradientUnits") && i.attr({
                            gradientUnits: "userSpaceOnUse"
                        })
                    }
                return this
            }
            adjustForGradient() {
                let t;
                for (let e of this.sideGroups) {
                    let i = {
                            x: Number.MAX_VALUE,
                            y: Number.MAX_VALUE
                        },
                        r = {
                            x: -Number.MAX_VALUE,
                            y: -Number.MAX_VALUE
                        };
                    for (let n of this.sideParts[e]) t = this[n].getBBox(!0), i = {
                        x: Math.min(i.x, t.x),
                        y: Math.min(i.y, t.y)
                    }, r = {
                        x: Math.max(r.x, t.x + t.width),
                        y: Math.max(r.y, t.y + t.height)
                    };
                    this[e].gradientBox = {
                        x: i.x,
                        width: r.x - i.x,
                        y: i.y,
                        height: r.y - i.y
                    }
                }
            }
            zIndexSetter() {
                return this.finishedOnAdd && this.adjustForGradient(), this.renderer.Element.prototype.zIndexSetter.apply(this, arguments)
            }
            onAdd() {
                this.adjustForGradient(), this.finishedOnAdd = !0
            }
        }
    }), i(e, "Series/Funnel3D/Funnel3DComposition.js", [e["Series/Funnel3D/SVGElement3DFunnel.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e, i) {
        let {
            charts: r
        } = e, {
            error: n,
            extend: o,
            merge: s
        } = i;

        function d(t) {
            let e = this.element3d("funnel3d", t),
                i = this.styledMode,
                r = {
                    "stroke-width": 1,
                    stroke: "none"
                };
            for (let t of (e.upperGroup = this.g("funnel3d-upper-group").attr({
                    zIndex: e.frontUpper.zIndex
                }).add(e), [e.frontUpper, e.backUpper, e.rightUpper])) i || t.attr(r), t.add(e.upperGroup);
            for (let t of (e.lowerGroup = this.g("funnel3d-lower-group").attr({
                    zIndex: e.frontLower.zIndex
                }).add(e), [e.frontLower, e.backLower, e.rightLower])) i || t.attr(r), t.add(e.lowerGroup);
            return e.gradientForSides = t.gradientForSides, e
        }

        function h(t) {
            this.getCylinderEnd || n("A required Highcharts module is missing: cylinder.js", !0, r[this.chartIndex]);
            let e = r[this.chartIndex],
                i = t.alphaCorrection = 90 - Math.abs(e.options.chart.options3d.alpha % 180 - 90),
                o = this.cuboidPath.call(this, s(t, {
                    depth: t.width,
                    width: (t.width + t.bottom.width) / 2
                })),
                d = o.isTop,
                h = !o.isFront,
                l = !!t.middle,
                a = this.getCylinderEnd(e, s(t, {
                    x: t.x - t.width / 2,
                    z: t.z - t.width / 2,
                    alphaCorrection: i
                })),
                p = t.bottom.width,
                g = s(t, {
                    width: p,
                    x: t.x - p / 2,
                    z: t.z - p / 2,
                    alphaCorrection: i
                }),
                u = this.getCylinderEnd(e, g, !0),
                f = p,
                c = g,
                y = u,
                x = u,
                w;
            l && (f = t.middle.width, c = s(t, {
                y: t.y + t.middle.fraction * t.height,
                width: f,
                x: t.x - f / 2,
                z: t.z - f / 2
            }), y = this.getCylinderEnd(e, c, !1), x = this.getCylinderEnd(e, c, !1));
            let m = {
                top: a,
                bottom: u,
                frontUpper: this.getCylinderFront(a, y),
                zIndexes: {
                    group: o.zIndexes.group,
                    top: 0 !== d ? 0 : 3,
                    bottom: 1 !== d ? 0 : 3,
                    frontUpper: h ? 2 : 1,
                    backUpper: h ? 1 : 2,
                    rightUpper: h ? 2 : 1
                }
            };
            return m.backUpper = this.getCylinderBack(a, y), w = Math.min(f, t.width) / Math.max(f, t.width) != 1, m.rightUpper = this.getCylinderFront(this.getCylinderEnd(e, s(t, {
                x: t.x - t.width / 2,
                z: t.z - t.width / 2,
                alphaCorrection: w ? -i : 0
            }), !1), this.getCylinderEnd(e, s(c, {
                alphaCorrection: w ? -i : 0
            }), !l)), l && (w = Math.min(f, p) / Math.max(f, p) != 1, s(!0, m, {
                frontLower: this.getCylinderFront(x, u),
                backLower: this.getCylinderBack(x, u),
                rightLower: this.getCylinderFront(this.getCylinderEnd(e, s(g, {
                    alphaCorrection: w ? -i : 0
                }), !0), this.getCylinderEnd(e, s(c, {
                    alphaCorrection: w ? -i : 0
                }), !1)),
                zIndexes: {
                    frontLower: h ? 2 : 1,
                    backLower: h ? 1 : 2,
                    rightLower: h ? 1 : 2
                }
            })), m
        }
        return {
            compose: function(e) {
                let i = e.prototype;
                i.funnel3d || (i.Element3D.types.funnel3d = t, o(i, {
                    funnel3d: d,
                    funnel3dPath: h
                }))
            }
        }
    }), i(e, "Series/Funnel3D/Funnel3DSeriesDefaults.js", [], function() {
        return {
            center: ["50%", "50%"],
            width: "90%",
            neckWidth: "30%",
            height: "100%",
            neckHeight: "25%",
            reversed: !1,
            gradientForSides: !0,
            animation: !1,
            edgeWidth: 0,
            colorByPoint: !0,
            showInLegend: !1,
            dataLabels: {
                align: "right",
                crop: !1,
                inside: !1,
                overflow: "allow"
            }
        }
    }), i(e, "Series/Funnel3D/Funnel3DPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            seriesTypes: {
                column: i
            }
        } = t, {
            extend: r
        } = e;
        class n extends i.prototype.pointClass {}
        return r(n.prototype, {
            shapeType: "funnel3d"
        }), n
    }), i(e, "Series/Funnel3D/Funnel3DSeries.js", [e["Series/Funnel3D/Funnel3DComposition.js"], e["Series/Funnel3D/Funnel3DSeriesDefaults.js"], e["Series/Funnel3D/Funnel3DPoint.js"], e["Core/Globals.js"], e["Core/Math3D.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i, r, n, o, s) {
        let {
            noop: d
        } = r, {
            perspective: h
        } = n, {
            series: l,
            seriesTypes: {
                column: a
            }
        } = o, {
            extend: p,
            merge: g,
            pick: u,
            relativeLength: f
        } = s;
        class c extends a {
            alignDataLabel(t, e, i) {
                let r = t.dlBoxRaw,
                    n = this.chart.inverted,
                    o = t.plotY > u(this.translatedThreshold, this.yAxis.len),
                    s = u(i.inside, !!this.options.stacking),
                    d = {
                        x: r.x,
                        y: r.y,
                        height: 0
                    };
                i.align = u(i.align, !n || s ? "center" : o ? "right" : "left"), i.verticalAlign = u(i.verticalAlign, n || s ? "middle" : o ? "top" : "bottom"), "top" !== i.verticalAlign && (d.y += r.bottom / ("bottom" === i.verticalAlign ? 1 : 2)), d.width = this.getWidthAt(d.y), this.options.reversed && (d.width = r.fullWidth - d.width), s ? d.x -= d.width / 2 : "left" === i.align ? (i.align = "right", d.x -= 1.5 * d.width) : "right" === i.align ? (i.align = "left", d.x += d.width / 2) : d.x -= d.width / 2, t.dlBox = d, a.prototype.alignDataLabel.apply(this, arguments)
            }
            bindAxes() {
                l.prototype.bindAxes.apply(this, arguments), p(this.xAxis.options, {
                    gridLineWidth: 0,
                    lineWidth: 0,
                    title: void 0,
                    tickPositions: []
                }), g(!0, this.yAxis.options, {
                    gridLineWidth: 0,
                    title: void 0,
                    labels: {
                        enabled: !1
                    }
                })
            }
            translate() {
                l.prototype.translate.apply(this, arguments);
                let t = this.chart,
                    e = this.options,
                    i = e.reversed,
                    r = e.ignoreHiddenPoint,
                    n = t.plotWidth,
                    o = t.plotHeight,
                    s = e.center,
                    d = f(s[0], n),
                    a = f(s[1], o),
                    g = f(e.width, n),
                    c = f(e.height, o),
                    y = f(e.neckWidth, n),
                    x = f(e.neckHeight, o),
                    w = a - c / 2 + c - x,
                    m = this.points,
                    b = 0,
                    C = 0,
                    F, S, U, G, L, j, D, A, k;
                for (let t of (this.getWidthAt = S = function(t) {
                        return t > w || c === x ? y : y + (g - y) * (1 - (t - (a - c / 2)) / (c - x))
                    }, this.center = [d, a, c], this.centerX = d, m)) r && !1 === t.visible || (b += t.y);
                for (let n of m) D = null, U = b ? n.y / b : 0, j = (L = a - c / 2 + C * c) + U * c, F = S(L), A = j - L, k = {
                    gradientForSides: u(n.options.gradientForSides, e.gradientForSides),
                    x: d,
                    y: L,
                    height: A,
                    width: F,
                    z: 1,
                    top: {
                        width: F
                    }
                }, F = S(j), k.bottom = {
                    fraction: U,
                    width: F
                }, L >= w ? k.isCylinder = !0 : j > w && (D = j, F = S(w), j = w, k.bottom.width = F, k.middle = {
                    fraction: A ? (w - L) / A : 0,
                    width: F
                }), i && (k.y = L = a + c / 2 - (C + U) * c, k.middle && (k.middle.fraction = 1 - (A ? k.middle.fraction : 0)), F = k.width, k.width = k.bottom.width, k.bottom.width = F), n.shapeArgs = p(n.shapeArgs, k), n.percentage = 100 * U, n.plotX = d, i ? n.plotY = a + c / 2 - (C + U / 2) * c : n.plotY = (L + (D || j)) / 2, G = h([{
                    x: d,
                    y: n.plotY,
                    z: i ? -(g - S(n.plotY)) / 2 : -S(n.plotY) / 2
                }], t, !0)[0], n.tooltipPos = [G.x, G.y], n.dlBoxRaw = {
                    x: d,
                    width: S(n.plotY),
                    y: L,
                    bottom: k.height || 0,
                    fullWidth: g
                }, r && !1 === n.visible || (C += U)
            }
        }
        return c.compose = t.compose, c.defaultOptions = g(a.defaultOptions, e), p(c.prototype, {
            pointClass: i,
            translate3dShapes: d
        }), o.registerSeriesType("funnel3d", c), c
    }), i(e, "masters/modules/funnel3d.src.js", [e["Core/Globals.js"], e["Series/Funnel3D/Funnel3DSeries.js"], e["Core/Renderer/RendererRegistry.js"]], function(t, e, i) {
        return e.compose(i.getRendererType()), t
    })
}); //# sourceMappingURL=funnel3d.js.map