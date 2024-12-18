!
/**
 * Highcharts JS v11.4.8 (2024-08-29)
 *
 * (c) 2016-2024 Highsoft AS
 * Authors: Jon Arild Nygard
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/sunburst", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function i(e, i, s, r) {
        e.hasOwnProperty(i) || (e[i] = r.apply(null, s), "function" == typeof CustomEvent && t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: i,
                module: e[i]
            }
        })))
    }
    i(e, "Extensions/Breadcrumbs/BreadcrumbsDefaults.js", [], function() {
        return {
            lang: {
                mainBreadcrumb: "Main"
            },
            options: {
                buttonTheme: {
                    fill: "none",
                    height: 18,
                    padding: 2,
                    "stroke-width": 0,
                    zIndex: 7,
                    states: {
                        select: {
                            fill: "none"
                        }
                    },
                    style: {
                        color: "#334eff"
                    }
                },
                buttonSpacing: 5,
                floating: !1,
                format: void 0,
                relativeTo: "plotBox",
                rtl: !1,
                position: {
                    align: "left",
                    verticalAlign: "top",
                    x: 0,
                    y: void 0
                },
                separator: {
                    text: "/",
                    style: {
                        color: "#666666",
                        fontSize: "0.8em"
                    }
                },
                showFullPath: !0,
                style: {},
                useHTML: !1,
                zIndex: 7
            }
        }
    }), i(e, "Extensions/Breadcrumbs/Breadcrumbs.js", [e["Extensions/Breadcrumbs/BreadcrumbsDefaults.js"], e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e, i, s) {
        let {
            format: r
        } = e, {
            composed: o
        } = i, {
            addEvent: l,
            defined: a,
            extend: n,
            fireEvent: h,
            isString: d,
            merge: p,
            objectEach: u,
            pick: c,
            pushUnique: g
        } = s;

        function b() {
            if (this.breadcrumbs) {
                let t = this.resetZoomButton && this.resetZoomButton.getBBox(),
                    e = this.breadcrumbs.options;
                t && "right" === e.position.align && "plotBox" === e.relativeTo && this.breadcrumbs.alignBreadcrumbsGroup(-t.width - e.buttonSpacing)
            }
        }

        function f() {
            this.breadcrumbs && (this.breadcrumbs.destroy(), this.breadcrumbs = void 0)
        }

        function v() {
            let t = this.breadcrumbs;
            if (t && !t.options.floating && t.level) {
                let e = t.options,
                    i = e.buttonTheme,
                    s = (i.height || 0) + 2 * (i.padding || 0) + e.buttonSpacing,
                    r = e.position.verticalAlign;
                "bottom" === r ? (this.marginBottom = (this.marginBottom || 0) + s, t.yOffset = s) : "middle" !== r ? (this.plotTop += s, t.yOffset = -s) : t.yOffset = void 0
            }
        }

        function m() {
            this.breadcrumbs && this.breadcrumbs.redraw()
        }

        function y(t) {
            !0 === t.resetSelection && this.breadcrumbs && this.breadcrumbs.alignBreadcrumbsGroup()
        }
        class x {
            static compose(e, i) {
                g(o, "Breadcrumbs") && (l(e, "destroy", f), l(e, "afterShowResetZoom", b), l(e, "getMargins", v), l(e, "redraw", m), l(e, "selection", y), n(i.lang, t.lang))
            }
            constructor(t, e) {
                this.elementList = {}, this.isDirty = !0, this.level = 0, this.list = [];
                let i = p(t.options.drilldown && t.options.drilldown.drillUpButton, x.defaultOptions, t.options.navigation && t.options.navigation.breadcrumbs, e);
                this.chart = t, this.options = i || {}
            }
            updateProperties(t) {
                this.setList(t), this.setLevel(), this.isDirty = !0
            }
            setList(t) {
                this.list = t
            }
            setLevel() {
                this.level = this.list.length && this.list.length - 1
            }
            getLevel() {
                return this.level
            }
            getButtonText(t) {
                let e = this.chart,
                    i = this.options,
                    s = e.options.lang,
                    o = c(i.format, i.showFullPath ? "{level.name}" : "← {level.name}"),
                    l = s && c(s.drillUpText, s.mainBreadcrumb),
                    n = i.formatter && i.formatter(t) || r(o, {
                        level: t.levelOptions
                    }, e) || "";
                return (d(n) && !n.length || "← " === n) && a(l) && (n = i.showFullPath ? l : "← " + l), n
            }
            redraw() {
                this.isDirty && this.render(), this.group && this.group.align(), this.isDirty = !1
            }
            render() {
                let t = this.chart,
                    e = this.options;
                !this.group && e && (this.group = t.renderer.g("breadcrumbs-group").addClass("highcharts-no-tooltip highcharts-breadcrumbs").attr({
                    zIndex: e.zIndex
                }).add()), e.showFullPath ? this.renderFullPathButtons() : this.renderSingleButton(), this.alignBreadcrumbsGroup()
            }
            renderFullPathButtons() {
                this.destroySingleButton(), this.resetElementListState(), this.updateListElements(), this.destroyListElements()
            }
            renderSingleButton() {
                let t = this.chart,
                    e = this.list,
                    i = this.options.buttonSpacing;
                this.destroyListElements();
                let s = this.group ? this.group.getBBox().width : i,
                    r = e[e.length - 2];
                !t.drillUpButton && this.level > 0 ? t.drillUpButton = this.renderButton(r, s, i) : t.drillUpButton && (this.level > 0 ? this.updateSingleButton() : this.destroySingleButton())
            }
            alignBreadcrumbsGroup(t) {
                if (this.group) {
                    let e = this.options,
                        i = e.buttonTheme,
                        s = e.position,
                        r = "chart" === e.relativeTo || "spacingBox" === e.relativeTo ? void 0 : "plotBox",
                        o = this.group.getBBox(),
                        l = 2 * (i.padding || 0) + e.buttonSpacing;
                    s.width = o.width + l, s.height = o.height + l;
                    let a = p(s);
                    t && (a.x += t), this.options.rtl && (a.x += s.width), a.y = c(a.y, this.yOffset, 0), this.group.align(a, !0, r)
                }
            }
            renderButton(t, e, i) {
                let s = this,
                    r = this.chart,
                    o = s.options,
                    l = p(o.buttonTheme),
                    a = r.renderer.button(s.getButtonText(t), e, i, function(e) {
                        let i;
                        let r = o.events && o.events.click;
                        r && (i = r.call(s, e, t)), !1 !== i && (o.showFullPath ? e.newLevel = t.level : e.newLevel = s.level - 1, h(s, "up", e))
                    }, l).addClass("highcharts-breadcrumbs-button").add(s.group);
                return r.styledMode || a.attr(o.style), a
            }
            renderSeparator(t, e) {
                let i = this.chart,
                    s = this.options.separator,
                    r = i.renderer.label(s.text, t, e, void 0, void 0, void 0, !1).addClass("highcharts-breadcrumbs-separator").add(this.group);
                return i.styledMode || r.css(s.style), r
            }
            update(t) {
                p(!0, this.options, t), this.destroy(), this.isDirty = !0
            }
            updateSingleButton() {
                let t = this.chart,
                    e = this.list[this.level - 1];
                t.drillUpButton && t.drillUpButton.attr({
                    text: this.getButtonText(e)
                })
            }
            destroy() {
                this.destroySingleButton(), this.destroyListElements(!0), this.group && this.group.destroy(), this.group = void 0
            }
            destroyListElements(t) {
                let e = this.elementList;
                u(e, (i, s) => {
                    (t || !e[s].updated) && ((i = e[s]).button && i.button.destroy(), i.separator && i.separator.destroy(), delete i.button, delete i.separator, delete e[s])
                }), t && (this.elementList = {})
            }
            destroySingleButton() {
                this.chart.drillUpButton && (this.chart.drillUpButton.destroy(), this.chart.drillUpButton = void 0)
            }
            resetElementListState() {
                u(this.elementList, t => {
                    t.updated = !1
                })
            }
            updateListElements() {
                let t = this.elementList,
                    e = this.options.buttonSpacing,
                    i = this.list,
                    s = this.options.rtl,
                    r = s ? -1 : 1,
                    o = function(t, e) {
                        return r * t.getBBox().width + r * e
                    },
                    l = function(t, e, i) {
                        t.translate(e - t.getBBox().width, i)
                    },
                    a = this.group ? o(this.group, e) : e,
                    n, h;
                for (let d = 0, p = i.length; d < p; ++d) {
                    let u, c;
                    let g = d === p - 1;
                    t[(h = i[d]).level] ? (u = (n = t[h.level]).button, n.separator || g ? n.separator && g && (n.separator.destroy(), delete n.separator) : (a += r * e, n.separator = this.renderSeparator(a, e), s && l(n.separator, a, e), a += o(n.separator, e)), t[h.level].updated = !0) : (u = this.renderButton(h, a, e), s && l(u, a, e), a += o(u, e), g || (c = this.renderSeparator(a, e), s && l(c, a, e), a += o(c, e)), t[h.level] = {
                        button: u,
                        separator: c,
                        updated: !0
                    }), u && u.setState(g ? 2 : 0)
                }
            }
        }
        return x.defaultOptions = t.options, x
    }), i(e, "Series/ColorMapComposition.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t, e, i) {
        var s;
        let {
            column: {
                prototype: r
            }
        } = t.seriesTypes, {
            addEvent: o,
            defined: l
        } = i;
        return function(t) {
            function i(t) {
                let i = this.series,
                    s = i.chart.renderer;
                this.moveToTopOnHover && this.graphic && (i.stateMarkerGraphic || (i.stateMarkerGraphic = new e(s, "use").css({
                    pointerEvents: "none"
                }).add(this.graphic.parentGroup)), t?.state === "hover" ? (this.graphic.attr({
                    id: this.id
                }), i.stateMarkerGraphic.attr({
                    href: `${s.url}#${this.id}`,
                    visibility: "visible"
                })) : i.stateMarkerGraphic.attr({
                    href: ""
                }))
            }
            t.pointMembers = {
                dataLabelOnNull: !0,
                moveToTopOnHover: !0,
                isValid: function() {
                    return null !== this.value && this.value !== 1 / 0 && this.value !== -1 / 0 && (void 0 === this.value || !isNaN(this.value))
                }
            }, t.seriesMembers = {
                colorKey: "value",
                axisTypes: ["xAxis", "yAxis", "colorAxis"],
                parallelArrays: ["x", "y", "value"],
                pointArrayMap: ["value"],
                trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
                colorAttribs: function(t) {
                    let e = {};
                    return l(t.color) && (!t.state || "normal" === t.state) && (e[this.colorProp || "fill"] = t.color), e
                },
                pointAttribs: r.pointAttribs
            }, t.compose = function(t) {
                return o(t.prototype.pointClass, "afterSetState", i), t
            }
        }(s || (s = {})), s
    }), i(e, "Series/Treemap/TreemapAlgorithmGroup.js", [], function() {
        return class {
            constructor(t, e, i, s) {
                this.height = t, this.width = e, this.plot = s, this.direction = i, this.startDirection = i, this.total = 0, this.nW = 0, this.lW = 0, this.nH = 0, this.lH = 0, this.elArr = [], this.lP = {
                    total: 0,
                    lH: 0,
                    nH: 0,
                    lW: 0,
                    nW: 0,
                    nR: 0,
                    lR: 0,
                    aspectRatio: function(t, e) {
                        return Math.max(t / e, e / t)
                    }
                }
            }
            addElement(t) {
                this.lP.total = this.elArr[this.elArr.length - 1], this.total = this.total + t, 0 === this.direction ? (this.lW = this.nW, this.lP.lH = this.lP.total / this.lW, this.lP.lR = this.lP.aspectRatio(this.lW, this.lP.lH), this.nW = this.total / this.height, this.lP.nH = this.lP.total / this.nW, this.lP.nR = this.lP.aspectRatio(this.nW, this.lP.nH)) : (this.lH = this.nH, this.lP.lW = this.lP.total / this.lH, this.lP.lR = this.lP.aspectRatio(this.lP.lW, this.lH), this.nH = this.total / this.width, this.lP.nW = this.lP.total / this.nH, this.lP.nR = this.lP.aspectRatio(this.lP.nW, this.nH)), this.elArr.push(t)
            }
            reset() {
                this.nW = 0, this.lW = 0, this.elArr = [], this.total = 0
            }
        }
    }), i(e, "Series/Treemap/TreemapNode.js", [], function() {
        return class {
            constructor() {
                this.childrenTotal = 0, this.visible = !1
            }
            init(t, e, i, s, r, o, l) {
                return this.id = t, this.i = e, this.children = i, this.height = s, this.level = r, this.series = o, this.parent = l, this
            }
        }
    }), i(e, "Series/DrawPointUtilities.js", [], function() {
        return {
            draw: function(t, e) {
                let {
                    animatableAttribs: i,
                    onComplete: s,
                    css: r,
                    renderer: o
                } = e, l = t.series && t.series.chart.hasRendered ? void 0 : t.series && t.series.options.animation, a = t.graphic;
                if (e.attribs = {
                        ...e.attribs,
                        class: t.getClassName()
                    }, t.shouldDraw()) a || (a = "text" === e.shapeType ? o.text() : "image" === e.shapeType ? o.image(e.imageUrl || "").attr(e.shapeArgs || {}) : o[e.shapeType](e.shapeArgs || {}), t.graphic = a, a.add(e.group)), r && a.css(r), a.attr(e.attribs).animate(i, !e.isNew && l, s);
                else if (a) {
                    let e = () => {
                        t.graphic = a = a && a.destroy(), "function" == typeof s && s()
                    };
                    Object.keys(i).length ? a.animate(i, void 0, () => e()) : e()
                }
            }
        }
    }), i(e, "Series/Treemap/TreemapPoint.js", [e["Series/DrawPointUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i) {
        let {
            pie: {
                prototype: {
                    pointClass: s
                }
            },
            scatter: {
                prototype: {
                    pointClass: r
                }
            }
        } = e.seriesTypes, {
            extend: o,
            isNumber: l,
            pick: a
        } = i;
        class n extends r {
            constructor() {
                super(...arguments), this.shapeType = "rect"
            }
            draw(e) {
                t.draw(this, e)
            }
            getClassName() {
                let t = this.series,
                    e = t.options,
                    i = super.getClassName();
                return this.node.level <= t.nodeMap[t.rootNode].level && this.node.children.length ? i += " highcharts-above-level" : this.node.isLeaf || a(e.interactByLeaf, !e.allowTraversingTree) ? this.node.isLeaf || (i += " highcharts-internal-node") : i += " highcharts-internal-node-interactive", i
            }
            isValid() {
                return !!(this.id || l(this.value))
            }
            setState(t) {
                super.setState.apply(this, arguments), this.graphic && this.graphic.attr({
                    zIndex: "hover" === t ? 1 : 0
                })
            }
            shouldDraw() {
                return l(this.plotY) && null !== this.y
            }
        }
        return o(n.prototype, {
            setVisible: s.prototype.setVisible
        }), n
    }), i(e, "Series/Treemap/TreemapSeriesDefaults.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            isString: i
        } = e;
        return {
            allowTraversingTree: !1,
            animationLimit: 250,
            borderRadius: 0,
            showInLegend: !1,
            marker: void 0,
            colorByPoint: !1,
            dataLabels: {
                defer: !1,
                enabled: !0,
                formatter: function() {
                    let t = this && this.point ? this.point : {};
                    return i(t.name) ? t.name : ""
                },
                inside: !0,
                verticalAlign: "middle"
            },
            tooltip: {
                headerFormat: "",
                pointFormat: "<b>{point.name}</b>: {point.value}<br/>"
            },
            ignoreHiddenPoint: !0,
            layoutAlgorithm: "sliceAndDice",
            layoutStartingDirection: "vertical",
            alternateStartingDirection: !1,
            levelIsConstant: !0,
            traverseUpButton: {
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            },
            borderColor: "#e6e6e6",
            borderWidth: 1,
            colorKey: "colorValue",
            opacity: .15,
            states: {
                hover: {
                    borderColor: "#999999",
                    brightness: t.seriesTypes.heatmap ? 0 : .1,
                    halo: !1,
                    opacity: .75,
                    shadow: !1
                }
            },
            legendSymbol: "rectangle",
            traverseToLeaf: !1
        }
    }), i(e, "Series/Treemap/TreemapUtilities.js", [], function() {
        var t;
        return (t || (t = {})).recursive = function t(e, i, s) {
            let r = i.call(s || this, e);
            !1 !== r && t(r, i, s)
        }, t
    }), i(e, "Series/TreeUtilities.js", [e["Core/Color/Color.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            extend: i,
            isArray: s,
            isNumber: r,
            isObject: o,
            merge: l,
            pick: a,
            relativeLength: n
        } = e;
        return {
            getColor: function(e, i) {
                let s, r, o, l, n, h;
                let d = i.index,
                    p = i.mapOptionsToLevel,
                    u = i.parentColor,
                    c = i.parentColorIndex,
                    g = i.series,
                    b = i.colors,
                    f = i.siblings,
                    v = g.points,
                    m = g.chart.options.chart;
                return e && (s = v[e.i], r = p[e.level] || {}, s && r.colorByPoint && (l = s.index % (b ? b.length : m.colorCount), o = b && b[l]), g.chart.styledMode || (n = a(s && s.options.color, r && r.color, o, u && (e => {
                    let i = r && r.colorVariation;
                    return i && "brightness" === i.key && d && f ? t.parse(e).brighten(i.to * (d / f)).get() : e
                })(u), g.color)), h = a(s && s.options.colorIndex, r && r.colorIndex, l, c, i.colorIndex)), {
                    color: n,
                    colorIndex: h
                }
            },
            getLevelOptions: function(t) {
                let e, i, n, h, d, p;
                let u = {};
                if (o(t))
                    for (h = r(t.from) ? t.from : 1, p = t.levels, i = {}, e = o(t.defaults) ? t.defaults : {}, s(p) && (i = p.reduce((t, i) => {
                            let s, n, d;
                            return o(i) && r(i.level) && (n = a((d = l({}, i)).levelIsConstant, e.levelIsConstant), delete d.levelIsConstant, delete d.level, o(t[s = i.level + (n ? 0 : h - 1)]) ? l(!0, t[s], d) : t[s] = d), t
                        }, {})), d = r(t.to) ? t.to : 1, n = 0; n <= d; n++) u[n] = l({}, e, o(i[n]) ? i[n] : {});
                return u
            },
            getNodeWidth: function(t, e) {
                let {
                    chart: i,
                    options: s
                } = t, {
                    nodeDistance: r = 0,
                    nodeWidth: o = 0
                } = s, {
                    plotSizeX: l = 1
                } = i;
                if ("auto" === o) {
                    if ("string" == typeof r && /%$/.test(r)) return l / (e + parseFloat(r) / 100 * (e - 1));
                    let t = Number(r);
                    return (l + t) / (e || 1) - t
                }
                return n(o, l)
            },
            setTreeValues: function t(e, s) {
                let r = s.before,
                    o = s.idRoot,
                    l = s.mapIdToNode[o],
                    n = !1 !== s.levelIsConstant,
                    h = s.points[e.i],
                    d = h && h.options || {},
                    p = [],
                    u = 0;
                e.levelDynamic = e.level - (n ? 0 : l.level), e.name = a(h && h.name, ""), e.visible = o === e.id || !0 === s.visible, "function" == typeof r && (e = r(e, s)), e.children.forEach((r, o) => {
                    let l = i({}, s);
                    i(l, {
                        index: o,
                        siblings: e.children.length,
                        visible: e.visible
                    }), r = t(r, l), p.push(r), r.visible && (u += r.val)
                });
                let c = a(d.value, u);
                return e.visible = c >= 0 && (u > 0 || e.visible), e.children = p, e.childrenTotal = u, e.isLeaf = e.visible && !u, e.val = c, e
            },
            updateRootId: function(t) {
                let e, i;
                return o(t) && (i = o(t.options) ? t.options : {}, e = a(t.rootNode, i.rootId, ""), o(t.userOptions) && (t.userOptions.rootId = e), t.rootNode = e), e
            }
        }
    }), i(e, "Series/Treemap/TreemapSeries.js", [e["Extensions/Breadcrumbs/Breadcrumbs.js"], e["Core/Color/Color.js"], e["Series/ColorMapComposition.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Series/Treemap/TreemapAlgorithmGroup.js"], e["Series/Treemap/TreemapNode.js"], e["Series/Treemap/TreemapPoint.js"], e["Series/Treemap/TreemapSeriesDefaults.js"], e["Series/Treemap/TreemapUtilities.js"], e["Series/TreeUtilities.js"], e["Core/Utilities.js"]], function(t, e, i, s, r, o, l, a, n, h, d, p) {
        let {
            parse: u
        } = e, {
            composed: c,
            noop: g
        } = s, {
            column: b,
            scatter: f
        } = r.seriesTypes, {
            getColor: v,
            getLevelOptions: m,
            updateRootId: y
        } = d, {
            addEvent: x,
            correctFloat: T,
            crisp: S,
            defined: P,
            error: L,
            extend: w,
            fireEvent: C,
            isArray: A,
            isObject: R,
            isString: B,
            merge: M,
            pick: O,
            pushUnique: I,
            stableSort: j
        } = p, D = !1;

        function N() {
            let t;
            let e = this.xAxis,
                i = this.yAxis;
            e && i && (this.is("treemap") ? (t = {
                endOnTick: !1,
                gridLineWidth: 0,
                lineWidth: 0,
                min: 0,
                minPadding: 0,
                max: 100,
                maxPadding: 0,
                startOnTick: !1,
                title: void 0,
                tickPositions: []
            }, w(i.options, t), w(e.options, t), D = !0) : D && (i.setOptions(i.userOptions), e.setOptions(e.userOptions), D = !1))
        }
        class U extends f {
            static compose(t) {
                I(c, "TreemapSeries") && x(t, "afterBindAxes", N)
            }
            algorithmCalcPoints(t, e, i, s) {
                let r = i.plot,
                    o = i.elArr.length - 1,
                    l, a, n, h, d = i.lW,
                    p = i.lH,
                    u, c = 0;
                for (let t of (e ? (d = i.nW, p = i.nH) : u = i.elArr[o], i.elArr))(e || c < o) && (0 === i.direction ? (l = r.x, a = r.y, h = t / (n = d)) : (l = r.x, a = r.y, n = t / (h = p)), s.push({
                    x: l,
                    y: a,
                    width: n,
                    height: T(h)
                }), 0 === i.direction ? r.y = r.y + h : r.x = r.x + n), c += 1;
                i.reset(), 0 === i.direction ? i.width = i.width - d : i.height = i.height - p, r.y = r.parent.y + (r.parent.height - i.height), r.x = r.parent.x + (r.parent.width - i.width), t && (i.direction = 1 - i.direction), e || i.addElement(u)
            }
            algorithmFill(t, e, i) {
                let s = [],
                    r, o = e.direction,
                    l = e.x,
                    a = e.y,
                    n = e.width,
                    h = e.height,
                    d, p, u, c;
                for (let g of i) r = e.width * e.height * (g.val / e.val), d = l, p = a, 0 === o ? (n -= u = r / (c = h), l += u) : (h -= c = r / (u = n), a += c), s.push({
                    x: d,
                    y: p,
                    width: u,
                    height: c
                }), t && (o = 1 - o);
                return s
            }
            algorithmLowAspectRatio(t, e, i) {
                let s = [],
                    r = {
                        x: e.x,
                        y: e.y,
                        parent: e
                    },
                    l = e.direction,
                    a = i.length - 1,
                    n = new o(e.height, e.width, l, r),
                    h, d = 0;
                for (let o of i) h = e.width * e.height * (o.val / e.val), n.addElement(h), n.lP.nR > n.lP.lR && this.algorithmCalcPoints(t, !1, n, s, r), d === a && this.algorithmCalcPoints(t, !0, n, s, r), ++d;
                return s
            }
            alignDataLabel(t, e, i) {
                let s = i.style;
                s && !P(s.textOverflow) && e.text && e.getBBox().width > (e.text.textWidth || 0) && e.css({
                    textOverflow: "ellipsis",
                    width: s.width += "px"
                }), b.prototype.alignDataLabel.apply(this, arguments), t.dataLabel && t.dataLabel.attr({
                    zIndex: (t.node.zIndex || 0) + 1
                })
            }
            calculateChildrenAreas(t, e) {
                let i = this.options,
                    s = this.mapOptionsToLevel[t.level + 1],
                    r = O(this[s && s.layoutAlgorithm] && s.layoutAlgorithm, i.layoutAlgorithm),
                    o = i.alternateStartingDirection,
                    l = t.children.filter(t => !t.ignore),
                    a = [];
                s && s.layoutStartingDirection && (e.direction = "vertical" === s.layoutStartingDirection ? 0 : 1), a = this[r](e, l);
                let n = -1;
                for (let t of l) {
                    let i = a[++n];
                    t.values = M(i, {
                        val: t.childrenTotal,
                        direction: o ? 1 - e.direction : e.direction
                    }), t.pointValues = M(i, {
                        x: i.x / this.axisRatio,
                        y: 100 - i.y - i.height,
                        width: i.width / this.axisRatio
                    }), t.children.length && this.calculateChildrenAreas(t, t.values)
                }
            }
            createList(t) {
                let e = this.chart,
                    i = e.breadcrumbs,
                    s = [];
                if (i) {
                    let i = 0;
                    s.push({
                        level: i,
                        levelOptions: e.series[0]
                    });
                    let r = t.target.nodeMap[t.newRootId],
                        o = [];
                    for (; r.parent || "" === r.parent;) o.push(r), r = t.target.nodeMap[r.parent];
                    for (let t of o.reverse()) s.push({
                        level: ++i,
                        levelOptions: t
                    });
                    s.length <= 1 && (s.length = 0)
                }
                return s
            }
            drawDataLabels() {
                let t, e;
                let i = this.mapOptionsToLevel;
                for (let s of this.points.filter(function(t) {
                        return t.node.visible
                    })) e = i[s.node.level], t = {
                    style: {}
                }, s.node.isLeaf || (t.enabled = !1), e && e.dataLabels && (t = M(t, e.dataLabels), this.hasDataLabels = () => !0), s.shapeArgs && (t.style.width = s.shapeArgs.width, s.dataLabel && s.dataLabel.css({
                    width: s.shapeArgs.width + "px"
                })), s.dlOptions = M(t, s.options.dataLabels);
                super.drawDataLabels()
            }
            drawPoints(t = this.points) {
                let e = this.chart,
                    i = e.renderer,
                    s = e.styledMode,
                    r = this.options,
                    o = s ? {} : r.shadow,
                    l = r.borderRadius,
                    a = e.pointCount < r.animationLimit,
                    n = r.allowTraversingTree;
                for (let e of t) {
                    let t = e.node.levelDynamic,
                        h = {},
                        d = {},
                        p = {},
                        u = "level-group-" + e.node.level,
                        c = !!e.graphic,
                        g = a && c,
                        b = e.shapeArgs;
                    e.shouldDraw() && (e.isInside = !0, l && (d.r = l), M(!0, g ? h : d, c ? b : {}, s ? {} : this.pointAttribs(e, e.selected ? "select" : void 0)), this.colorAttribs && s && w(p, this.colorAttribs(e)), this[u] || (this[u] = i.g(u).attr({
                        zIndex: 1e3 - (t || 0)
                    }).add(this.group), this[u].survive = !0)), e.draw({
                        animatableAttribs: h,
                        attribs: d,
                        css: p,
                        group: this[u],
                        imageUrl: e.imageUrl,
                        renderer: i,
                        shadow: o,
                        shapeArgs: b,
                        shapeType: e.shapeType
                    }), n && e.graphic && (e.drillId = r.interactByLeaf ? this.drillToByLeaf(e) : this.drillToByGroup(e))
                }
            }
            drillToByGroup(t) {
                let e = !1;
                return t.node.isLeaf || t.node.level - this.nodeMap[this.rootNode].level != 1 || (e = t.id), e
            }
            drillToByLeaf(t) {
                let {
                    traverseToLeaf: e
                } = t.series.options, i = !1, s;
                if (t.node.parent !== this.rootNode && t.node.isLeaf) {
                    if (e) i = t.id;
                    else
                        for (s = t.node; !i;) void 0 !== s.parent && (s = this.nodeMap[s.parent]), s.parent === this.rootNode && (i = s.id)
                }
                return i
            }
            drillToNode(t, e) {
                L(32, !1, void 0, {
                    "treemap.drillToNode": "use treemap.setRootNode"
                }), this.setRootNode(t, e)
            }
            drillUp() {
                let t = this.nodeMap[this.rootNode];
                t && B(t.parent) && this.setRootNode(t.parent, !0, {
                    trigger: "traverseUpButton"
                })
            }
            getExtremes() {
                let {
                    dataMin: t,
                    dataMax: e
                } = super.getExtremes(this.colorValueData);
                return this.valueMin = t, this.valueMax = e, super.getExtremes()
            }
            getListOfParents(t, e) {
                let i = A(t) ? t : [],
                    s = A(e) ? e : [],
                    r = i.reduce(function(t, e, i) {
                        let s = O(e.parent, "");
                        return void 0 === t[s] && (t[s] = []), t[s].push(i), t
                    }, {
                        "": []
                    });
                for (let t of Object.keys(r)) {
                    let e = r[t];
                    if ("" !== t && -1 === s.indexOf(t)) {
                        for (let t of e) r[""].push(t);
                        delete r[t]
                    }
                }
                return r
            }
            getTree() {
                let t = this.data.map(function(t) {
                        return t.id
                    }),
                    e = this.getListOfParents(this.data, t);
                return this.nodeMap = {}, this.nodeList = [], this.buildTree("", -1, 0, e)
            }
            buildTree(t, e, i, s, r) {
                let o = [],
                    l = this.points[e],
                    a = 0,
                    n;
                for (let e of s[t] || []) a = Math.max((n = this.buildTree(this.points[e].id, e, i + 1, s, t)).height + 1, a), o.push(n);
                let h = new this.NodeClass().init(t, e, o, a, i, this, r);
                for (let t of o) t.parentNode = h;
                return this.nodeMap[h.id] = h, this.nodeList.push(h), l && (l.node = h, h.point = l), h
            }
            hasData() {
                return !!this.processedXData.length
            }
            init(e, i) {
                let s = this,
                    r = M(i.drillUpButton, i.breadcrumbs),
                    o = x(s, "setOptions", t => {
                        let e = t.userOptions;
                        P(e.allowDrillToNode) && !P(e.allowTraversingTree) && (e.allowTraversingTree = e.allowDrillToNode, delete e.allowDrillToNode), P(e.drillUpButton) && !P(e.traverseUpButton) && (e.traverseUpButton = e.drillUpButton, delete e.drillUpButton)
                    });
                super.init(e, i), delete s.opacity, s.eventsToUnbind.push(o), s.options.allowTraversingTree && (s.eventsToUnbind.push(x(s, "click", s.onClickDrillToNode)), s.eventsToUnbind.push(x(s, "setRootNode", function(t) {
                    let e = s.chart;
                    e.breadcrumbs && e.breadcrumbs.updateProperties(s.createList(t))
                })), s.eventsToUnbind.push(x(s, "update", function(t, e) {
                    let i = this.chart.breadcrumbs;
                    i && t.options.breadcrumbs && i.update(t.options.breadcrumbs)
                })), s.eventsToUnbind.push(x(s, "destroy", function(t) {
                    let e = this.chart;
                    e.breadcrumbs && !t.keepEventsForUpdate && (e.breadcrumbs.destroy(), e.breadcrumbs = void 0)
                }))), e.breadcrumbs || (e.breadcrumbs = new t(e, r)), s.eventsToUnbind.push(x(e.breadcrumbs, "up", function(t) {
                    let e = this.level - t.newLevel;
                    for (let t = 0; t < e; t++) s.drillUp()
                }))
            }
            onClickDrillToNode(t) {
                let e = t.point,
                    i = e && e.drillId;
                B(i) && (e.setState(""), this.setRootNode(i, !0, {
                    trigger: "click"
                }))
            }
            pointAttribs(t, e) {
                let i;
                let s = R(this.mapOptionsToLevel) ? this.mapOptionsToLevel : {},
                    r = t && s[t.node.level] || {},
                    o = this.options,
                    l = e && o.states && o.states[e] || {},
                    a = t && t.getClassName() || "",
                    n = {
                        stroke: t && t.borderColor || r.borderColor || l.borderColor || o.borderColor,
                        "stroke-width": O(t && t.borderWidth, r.borderWidth, l.borderWidth, o.borderWidth),
                        dashstyle: t && t.borderDashStyle || r.borderDashStyle || l.borderDashStyle || o.borderDashStyle,
                        fill: t && t.color || this.color
                    };
                return -1 !== a.indexOf("highcharts-above-level") ? (n.fill = "none", n["stroke-width"] = 0) : -1 !== a.indexOf("highcharts-internal-node-interactive") ? (i = O(l.opacity, o.opacity), n.fill = u(n.fill).setOpacity(i).get(), n.cursor = "pointer") : -1 !== a.indexOf("highcharts-internal-node") ? n.fill = "none" : e && (n.fill = u(n.fill).brighten(l.brightness).get()), n
            }
            setColorRecursive(t, e, i, s, r) {
                let o = this && this.chart,
                    l = o && o.options && o.options.colors;
                if (t) {
                    let o = v(t, {
                            colors: l,
                            index: s,
                            mapOptionsToLevel: this.mapOptionsToLevel,
                            parentColor: e,
                            parentColorIndex: i,
                            series: this,
                            siblings: r
                        }),
                        a = this.points[t.i];
                    a && (a.color = o.color, a.colorIndex = o.colorIndex);
                    let n = -1;
                    for (let e of t.children || []) this.setColorRecursive(e, o.color, o.colorIndex, ++n, t.children.length)
                }
            }
            setPointValues() {
                let t = this,
                    {
                        points: e,
                        xAxis: i,
                        yAxis: s
                    } = t,
                    r = t.chart.styledMode,
                    o = e => r ? 0 : t.pointAttribs(e)["stroke-width"] || 0;
                for (let t of e) {
                    let {
                        pointValues: e,
                        visible: r
                    } = t.node;
                    if (e && r) {
                        let {
                            height: r,
                            width: l,
                            x: a,
                            y: n
                        } = e, h = o(t), d = S(i.toPixels(a, !0), h, !0), p = S(i.toPixels(a + l, !0), h, !0), u = S(s.toPixels(n, !0), h, !0), c = S(s.toPixels(n + r, !0), h, !0), g = {
                            x: Math.min(d, p),
                            y: Math.min(u, c),
                            width: Math.abs(p - d),
                            height: Math.abs(c - u)
                        };
                        t.plotX = g.x + g.width / 2, t.plotY = g.y + g.height / 2, t.shapeArgs = g
                    } else delete t.plotX, delete t.plotY
                }
            }
            setRootNode(t, e, i) {
                C(this, "setRootNode", w({
                    newRootId: t,
                    previousRootId: this.rootNode,
                    redraw: O(e, !0),
                    series: this
                }, i), function(t) {
                    let e = t.series;
                    e.idPreviousRoot = t.previousRootId, e.rootNode = t.newRootId, e.isDirty = !0, t.redraw && e.chart.redraw()
                })
            }
            setState(t) {
                this.options.inactiveOtherPoints = !0, super.setState(t, !1), this.options.inactiveOtherPoints = !1
            }
            setTreeValues(t) {
                let e = this.options,
                    i = this.rootNode,
                    s = this.nodeMap[i],
                    r = "boolean" != typeof e.levelIsConstant || e.levelIsConstant,
                    o = [],
                    l = this.points[t.i],
                    a = 0;
                for (let e of t.children) e = this.setTreeValues(e), o.push(e), e.ignore || (a += e.val);
                j(o, (t, e) => (t.sortIndex || 0) - (e.sortIndex || 0));
                let n = O(l && l.options.value, a);
                return l && (l.value = n), w(t, {
                    children: o,
                    childrenTotal: a,
                    ignore: !(O(l && l.visible, !0) && n > 0),
                    isLeaf: t.visible && !a,
                    levelDynamic: t.level - (r ? 0 : s.level),
                    name: O(l && l.name, ""),
                    sortIndex: O(l && l.sortIndex, -n),
                    val: n
                }), t
            }
            sliceAndDice(t, e) {
                return this.algorithmFill(!0, t, e)
            }
            squarified(t, e) {
                return this.algorithmLowAspectRatio(!0, t, e)
            }
            strip(t, e) {
                return this.algorithmLowAspectRatio(!1, t, e)
            }
            stripes(t, e) {
                return this.algorithmFill(!1, t, e)
            }
            translate() {
                let t = this,
                    e = t.options,
                    i = y(t),
                    s, r, o, l;
                super.translate();
                let a = t.tree = t.getTree();
                s = t.nodeMap[i], "" === i || s || (t.setRootNode("", !1), i = t.rootNode, s = t.nodeMap[i]), t.mapOptionsToLevel = m({
                    from: s.level + 1,
                    levels: e.levels,
                    to: a.height,
                    defaults: {
                        levelIsConstant: t.options.levelIsConstant,
                        colorByPoint: e.colorByPoint
                    }
                }), h.recursive(t.nodeMap[t.rootNode], e => {
                    let i = e.parent,
                        s = !1;
                    return e.visible = !0, (i || "" === i) && (s = t.nodeMap[i]), s
                }), h.recursive(t.nodeMap[t.rootNode].children, t => {
                    let e = !1;
                    for (let i of t) i.visible = !0, i.children.length && (e = (e || []).concat(i.children));
                    return e
                }), t.setTreeValues(a), t.axisRatio = t.xAxis.len / t.yAxis.len, t.nodeMap[""].pointValues = r = {
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100
                }, t.nodeMap[""].values = o = M(r, {
                    width: r.width * t.axisRatio,
                    direction: "vertical" === e.layoutStartingDirection ? 0 : 1,
                    val: a.val
                }), t.calculateChildrenAreas(a, o), t.colorAxis || e.colorByPoint || t.setColorRecursive(t.tree), e.allowTraversingTree && (l = s.pointValues, t.xAxis.setExtremes(l.x, l.x + l.width, !1), t.yAxis.setExtremes(l.y, l.y + l.height, !1), t.xAxis.setScale(), t.yAxis.setScale()), t.setPointValues()
            }
        }
        return U.defaultOptions = M(f.defaultOptions, n), w(U.prototype, {
            buildKDTree: g,
            colorAttribs: i.seriesMembers.colorAttribs,
            colorKey: "colorValue",
            directTouch: !0,
            getExtremesFromAll: !0,
            getSymbol: g,
            optionalAxis: "colorAxis",
            parallelArrays: ["x", "y", "value", "colorValue"],
            pointArrayMap: ["value"],
            pointClass: a,
            NodeClass: l,
            trackerGroups: ["group", "dataLabelsGroup"],
            utils: h
        }), i.compose(U), r.registerSeriesType("treemap", U), U
    }), i(e, "Series/Sunburst/SunburstPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            series: {
                prototype: {
                    pointClass: i
                }
            },
            seriesTypes: {
                treemap: {
                    prototype: {
                        pointClass: s
                    }
                }
            }
        } = t, {
            correctFloat: r,
            extend: o,
            pInt: l
        } = e;
        class a extends s {
            getDataLabelPath(t) {
                let e = this.series.chart.renderer,
                    i = this.shapeExisting,
                    s = i.r + l(t.options?.distance || 0),
                    o = i.start,
                    a = i.end,
                    n = o + (a - o) / 2,
                    h = n < 0 && n > -Math.PI || n > Math.PI,
                    d;
                return o === -Math.PI / 2 && r(a) === r(1.5 * Math.PI) && (o = -Math.PI + Math.PI / 360, a = -Math.PI / 360, h = !0), a - o > Math.PI && (h = !1, d = !0, a - o > 2 * Math.PI - .01 && (o += .01, a -= .01)), this.dataLabelPath && (this.dataLabelPath = this.dataLabelPath.destroy()), this.dataLabelPath = e.arc({
                    open: !0,
                    longArc: d ? 1 : 0
                }).attr({
                    start: h ? o : a,
                    end: h ? a : o,
                    clockwise: +h,
                    x: i.x,
                    y: i.y,
                    r: (s + i.innerR) / 2
                }).add(e.defs), this.dataLabelPath
            }
            isValid() {
                return !0
            }
        }
        return o(a.prototype, {
            getClassName: i.prototype.getClassName,
            haloPath: i.prototype.haloPath,
            setState: i.prototype.setState
        }), a
    }), i(e, "Series/Sunburst/SunburstUtilities.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            seriesTypes: {
                treemap: i
            }
        } = t, {
            isNumber: s,
            isObject: r,
            merge: o
        } = e;

        function l(t, e) {
            let i = [];
            if (s(t) && s(e) && t <= e)
                for (let s = t; s <= e; s++) i.push(s);
            return i
        }
        return {
            calculateLevelSizes: function(t, e) {
                let i = r(e) ? e : {},
                    a, n = 0,
                    h, d, p, u;
                if (r(t)) {
                    for (let e of (a = o({}, t), d = l(s(i.from) ? i.from : 0, s(i.to) ? i.to : 0), p = Object.keys(a).filter(t => -1 === d.indexOf(+t)), h = u = s(i.diffRadius) ? i.diffRadius : 0, d)) {
                        let t = a[e],
                            i = t.levelSize.unit,
                            s = t.levelSize.value;
                        "weight" === i ? n += s : "percentage" === i ? (t.levelSize = {
                            unit: "pixels",
                            value: s / 100 * h
                        }, u -= t.levelSize.value) : "pixels" === i && (u -= s)
                    }
                    for (let t of d) {
                        let e = a[t];
                        if ("weight" === e.levelSize.unit) {
                            let i = e.levelSize.value;
                            a[t].levelSize = {
                                unit: "pixels",
                                value: i / n * u
                            }
                        }
                    }
                    for (let t of p) a[t].levelSize = {
                        value: 0,
                        unit: "pixels"
                    }
                }
                return a
            },
            getLevelFromAndTo: function({
                level: t,
                height: e
            }) {
                return {
                    from: t > 0 ? t : 1,
                    to: t + e
                }
            },
            range: l,
            recursive: i.prototype.utils.recursive
        }
    }), i(e, "Series/Sunburst/SunburstNode.js", [e["Series/Treemap/TreemapNode.js"]], function(t) {
        return class extends t {}
    }), i(e, "Series/Sunburst/SunburstSeriesDefaults.js", [], function() {
        return {
            center: ["50%", "50%"],
            clip: !1,
            colorByPoint: !1,
            opacity: 1,
            dataLabels: {
                allowOverlap: !0,
                defer: !0,
                rotationMode: "circular",
                style: {
                    textOverflow: "ellipsis"
                }
            },
            rootId: void 0,
            levelIsConstant: !0,
            levelSize: {
                value: 1,
                unit: "weight"
            },
            slicedOffset: 10
        }
    }), i(e, "Extensions/TextPath.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            deg2rad: i
        } = t, {
            addEvent: s,
            merge: r,
            uniqueKey: o,
            defined: l,
            extend: a
        } = e;

        function n(t, e) {
            e = r(!0, {
                enabled: !0,
                attributes: {
                    dy: -5,
                    startOffset: "50%",
                    textAnchor: "middle"
                }
            }, e);
            let i = this.renderer.url,
                n = this.text || this,
                h = n.textPath,
                {
                    attributes: d,
                    enabled: p
                } = e;
            if (t = t || h && h.path, h && h.undo(), t && p) {
                let e = s(n, "afterModifyTree", e => {
                    if (t && p) {
                        let s = t.attr("id");
                        s || t.attr("id", s = o());
                        let r = {
                            x: 0,
                            y: 0
                        };
                        l(d.dx) && (r.dx = d.dx, delete d.dx), l(d.dy) && (r.dy = d.dy, delete d.dy), n.attr(r), this.attr({
                            transform: ""
                        }), this.box && (this.box = this.box.destroy());
                        let h = e.nodes.slice(0);
                        e.nodes.length = 0, e.nodes[0] = {
                            tagName: "textPath",
                            attributes: a(d, {
                                "text-anchor": d.textAnchor,
                                href: `${i}#${s}`
                            }),
                            children: h
                        }
                    }
                });
                n.textPath = {
                    path: t,
                    undo: e
                }
            } else n.attr({
                dx: 0,
                dy: 0
            }), delete n.textPath;
            return this.added && (n.textCache = "", this.renderer.buildText(n)), this
        }

        function h(t) {
            let e = t.bBox,
                s = this.element?.querySelector("textPath");
            if (s) {
                let t = [],
                    {
                        b: r,
                        h: o
                    } = this.renderer.fontMetrics(this.element),
                    l = o - r,
                    a = RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)', "g"),
                    n = s.innerHTML.replace(a, "").split(/<tspan class="highcharts-br"[^>]*>/),
                    h = n.length,
                    d = (t, e) => {
                        let {
                            x: o,
                            y: a
                        } = e, n = (s.getRotationOfChar(t) - 90) * i, h = Math.cos(n), d = Math.sin(n);
                        return [
                            [o - l * h, a - l * d],
                            [o + r * h, a + r * d]
                        ]
                    };
                for (let e = 0, i = 0; i < h; i++) {
                    let r = n[i].length;
                    for (let o = 0; o < r; o += 5) try {
                        let r = e + o + i,
                            [l, a] = d(r, s.getStartPositionOfChar(r));
                        0 === o ? (t.push(a), t.push(l)) : (0 === i && t.unshift(a), i === h - 1 && t.push(l))
                    } catch (t) {
                        break
                    }
                    e += r - 1;
                    try {
                        let r = e + i,
                            o = s.getEndPositionOfChar(r),
                            [l, a] = d(r, o);
                        t.unshift(a), t.unshift(l)
                    } catch (t) {
                        break
                    }
                }
                t.length && t.push(t[0].slice()), e.polygon = t
            }
            return e
        }

        function d(t) {
            let e = t.labelOptions,
                i = t.point,
                s = e[i.formatPrefix + "TextPath"] || e.textPath;
            s && !e.useHTML && (this.setTextPath(i.getDataLabelPath?.(this) || i.graphic, s), i.dataLabelPath && !s.enabled && (i.dataLabelPath = i.dataLabelPath.destroy()))
        }
        return {
            compose: function(t) {
                s(t, "afterGetBBox", h), s(t, "beforeAddingDataLabel", d);
                let e = t.prototype;
                e.setTextPath || (e.setTextPath = n)
            }
        }
    }), i(e, "Series/Sunburst/SunburstSeries.js", [e["Series/CenteredUtilities.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Series/Sunburst/SunburstPoint.js"], e["Series/Sunburst/SunburstUtilities.js"], e["Series/TreeUtilities.js"], e["Core/Utilities.js"], e["Series/Sunburst/SunburstNode.js"], e["Series/Sunburst/SunburstSeriesDefaults.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Extensions/TextPath.js"]], function(t, e, i, s, r, o, l, a, n, h, d) {
        let {
            getCenter: p,
            getStartAndEndRadians: u
        } = t, {
            noop: c
        } = e, {
            column: g,
            treemap: b
        } = i.seriesTypes, {
            getColor: f,
            getLevelOptions: v,
            setTreeValues: m,
            updateRootId: y
        } = o, {
            defined: x,
            error: T,
            extend: S,
            fireEvent: P,
            isNumber: L,
            isObject: w,
            isString: C,
            merge: A,
            splat: R
        } = l;
        d.compose(h);
        let B = 180 / Math.PI,
            M = function(t, e, i, s) {
                return {
                    x: t + Math.cos(i) * s,
                    y: e + Math.sin(i) * s
                }
            };

        function O(t, e) {
            let i = e.mapIdToNode,
                s = t.parent,
                r = s ? i[s] : void 0,
                o = e.series,
                l = o.chart,
                a = o.points[t.i],
                n = f(t, {
                    colors: o.options.colors || l && l.options.colors,
                    colorIndex: o.colorIndex,
                    index: e.index,
                    mapOptionsToLevel: e.mapOptionsToLevel,
                    parentColor: r && r.color,
                    parentColorIndex: r && r.colorIndex,
                    series: e.series,
                    siblings: e.siblings
                });
            return t.color = n.color, t.colorIndex = n.colorIndex, a && (a.color = t.color, a.colorIndex = t.colorIndex, t.sliced = t.id !== e.idRoot && a.sliced), t
        }
        class I extends b {
            alignDataLabel(t, e, i) {
                if (!i.textPath || !i.textPath.enabled) return super.alignDataLabel.apply(this, arguments)
            }
            animate(t) {
                let e;
                let i = this.chart,
                    s = [i.plotWidth / 2, i.plotHeight / 2],
                    r = i.plotLeft,
                    o = i.plotTop,
                    l = this.group;
                t ? (e = {
                    translateX: s[0] + r,
                    translateY: s[1] + o,
                    scaleX: .001,
                    scaleY: .001,
                    rotation: 10,
                    opacity: .01
                }, l.attr(e)) : (e = {
                    translateX: r,
                    translateY: o,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0,
                    opacity: 1
                }, l.animate(e, this.options.animation))
            }
            drawPoints() {
                let t = this,
                    e = t.mapOptionsToLevel,
                    i = t.shapeRoot,
                    s = t.group,
                    r = t.hasRendered,
                    o = t.rootNode,
                    l = t.idPreviousRoot,
                    a = t.nodeMap,
                    n = a[l],
                    h = n && n.shapeArgs,
                    d = t.points,
                    p = t.startAndEndRadians,
                    u = t.chart,
                    c = u && u.options && u.options.chart || {},
                    b = "boolean" != typeof c.animation || c.animation,
                    f = t.center,
                    v = {
                        x: f[0],
                        y: f[1]
                    },
                    m = f[3] / 2,
                    y = t.chart.renderer,
                    T = !!(b && r && o !== l && t.dataLabelsGroup),
                    P, C = !1,
                    M = !1;
                for (let n of (T && (t.dataLabelsGroup.attr({
                        opacity: 0
                    }), P = function() {
                        C = !0, t.dataLabelsGroup && t.dataLabelsGroup.animate({
                            opacity: 1,
                            visibility: "inherit"
                        })
                    }), d)) {
                    let d, c;
                    let g = n.node,
                        f = e[g.level],
                        T = n.shapeExisting || {},
                        C = g.shapeArgs || {},
                        O = !!(g.visible && g.shapeArgs);
                    C.borderRadius = t.options.borderRadius, d = r && b ? function(t, e) {
                        let i = e.point,
                            s = e.radians,
                            r = e.innerR,
                            o = e.idRoot,
                            l = e.idPreviousRoot,
                            a = e.shapeExisting,
                            n = e.shapeRoot,
                            h = e.shapePreviousRoot,
                            d = e.visible,
                            p = {},
                            u = {
                                end: t.end,
                                start: t.start,
                                innerR: t.innerR,
                                r: t.r,
                                x: t.x,
                                y: t.y
                            };
                        return d ? !i.graphic && h && ((p = o === i.id ? {
                            start: s.start,
                            end: s.end
                        } : h.end <= t.start ? {
                            start: s.end,
                            end: s.end
                        } : {
                            start: s.start,
                            end: s.start
                        }).innerR = p.r = r) : i.graphic && (l === i.id ? u = {
                            innerR: r,
                            r: r
                        } : n && (u = n.end <= a.start ? {
                            innerR: r,
                            r: r,
                            start: s.end,
                            end: s.end
                        } : {
                            innerR: r,
                            r: r,
                            start: s.start,
                            end: s.start
                        })), {
                            from: p,
                            to: u
                        }
                    }(C, {
                        center: v,
                        point: n,
                        radians: p,
                        innerR: m,
                        idRoot: o,
                        idPreviousRoot: l,
                        shapeExisting: T,
                        shapeRoot: i,
                        shapePreviousRoot: h,
                        visible: O
                    }) : {
                        to: C,
                        from: {}
                    }, S(n, {
                        shapeExisting: C,
                        tooltipPos: [C.plotX, C.plotY],
                        drillId: function(t, e, i) {
                            let s;
                            return t.node.isLeaf || (s = e === t.id ? i[e].parent : t.id), s
                        }(n, o, a),
                        name: "" + (n.name || n.id || n.index),
                        plotX: C.plotX,
                        plotY: C.plotY,
                        value: g.val,
                        isInside: O,
                        isNull: !O
                    }), n.dlOptions = function(t) {
                        let e = t.point,
                            i = w(t.shapeArgs) ? t.shapeArgs : {},
                            s = w(t.optionsPoint) ? t.optionsPoint.dataLabels : {},
                            r = A({
                                style: {}
                            }, R(w(t.level) ? t.level.dataLabels : {})[0], s),
                            o, l, a = r.rotationMode;
                        return L(r.rotation) || (("auto" === a || "circular" === a) && (r.useHTML && "circular" === a && (a = "auto"), e.innerArcLength < 1 && e.outerArcLength > i.radius ? (o = 0, e.dataLabelPath && "circular" === a && (r.textPath = {
                            enabled: !0
                        })) : e.innerArcLength > 1 && e.outerArcLength > 1.5 * i.radius ? "circular" === a ? r.textPath = {
                            enabled: !0,
                            attributes: {
                                dy: 5
                            }
                        } : a = "parallel" : (e.dataLabel && e.dataLabel.textPath && "circular" === a && (r.textPath = {
                            enabled: !1
                        }), a = "perpendicular")), "auto" !== a && "circular" !== a && (e.dataLabel && e.dataLabel.textPath && (r.textPath = {
                            enabled: !1
                        }), o = i.end - (i.end - i.start) / 2), "parallel" === a ? r.style.width = Math.min(2.5 * i.radius, (e.outerArcLength + e.innerArcLength) / 2) : !x(r.style.width) && i.radius && (r.style.width = 1 === e.node.level ? 2 * i.radius : i.radius), "perpendicular" === a && e.outerArcLength < 16 && (r.style.width = 1), r.style.width = Math.max(r.style.width - 2 * (r.padding || 0), 1), l = o * B % 180, "parallel" === a && (l -= 90), l > 90 ? l -= 180 : l < -90 && (l += 180), r.rotation = l), r.textPath && (0 === e.shapeExisting.innerR && r.textPath.enabled ? (r.rotation = 0, r.textPath.enabled = !1, r.style.width = Math.max(2 * e.shapeExisting.r - 2 * (r.padding || 0), 1)) : e.dlOptions && e.dlOptions.textPath && !e.dlOptions.textPath.enabled && "circular" === a && (r.textPath.enabled = !0), r.textPath.enabled && (r.rotation = 0, r.style.width = Math.max((e.outerArcLength + e.innerArcLength) / 2 - 2 * (r.padding || 0), 1))), r
                    }({
                        point: n,
                        level: f,
                        optionsPoint: n.options,
                        shapeArgs: C
                    }), !M && O && (M = !0, c = P), n.draw({
                        animatableAttribs: d.to,
                        attribs: S(d.from, !u.styledMode && t.pointAttribs(n, n.selected && "select")),
                        onComplete: c,
                        group: s,
                        renderer: y,
                        shapeType: "arc",
                        shapeArgs: C
                    })
                }
                T && M ? (t.hasRendered = !1, t.options.dataLabels.defer = !0, g.prototype.drawDataLabels.call(t), t.hasRendered = !0, C && P()) : g.prototype.drawDataLabels.call(t), t.idPreviousRoot = o
            }
            layoutAlgorithm(t, e, i) {
                let s = t.start,
                    r = t.end - s,
                    o = t.val,
                    l = t.x,
                    a = t.y,
                    n = i && w(i.levelSize) && L(i.levelSize.value) ? i.levelSize.value : 0,
                    h = t.r,
                    d = h + n,
                    p = i && L(i.slicedOffset) ? i.slicedOffset : 0;
                return (e || []).reduce((t, e) => {
                    let i = 1 / o * e.val * r,
                        u = M(l, a, s + i / 2, p),
                        c = {
                            x: e.sliced ? u.x : l,
                            y: e.sliced ? u.y : a,
                            innerR: h,
                            r: d,
                            radius: n,
                            start: s,
                            end: s + i
                        };
                    return t.push(c), s = c.end, t
                }, [])
            }
            setRootNode(t, e, i) {
                if (1 === this.nodeMap[t].level && 1 === this.nodeList.filter(t => 1 === t.level).length) {
                    if ("" === this.idPreviousRoot) return;
                    t = ""
                }
                super.setRootNode(t, e, i)
            }
            setShapeArgs(t, e, i) {
                let s = i[t.level + 1],
                    r = t.children.filter(function(t) {
                        return t.visible
                    }),
                    o = [];
                o = this.layoutAlgorithm(e, r, s);
                let l = -1;
                for (let t of r) {
                    let e = o[++l],
                        s = e.start + (e.end - e.start) / 2,
                        r = e.innerR + (e.r - e.innerR) / 2,
                        a = e.end - e.start,
                        n = 0 === e.innerR && a > 6.28 ? {
                            x: e.x,
                            y: e.y
                        } : M(e.x, e.y, s, r),
                        h = t.val ? t.childrenTotal > t.val ? t.childrenTotal : t.val : t.childrenTotal;
                    this.points[t.i] && (this.points[t.i].innerArcLength = a * e.innerR, this.points[t.i].outerArcLength = a * e.r), t.shapeArgs = A(e, {
                        plotX: n.x,
                        plotY: n.y
                    }), t.values = A(e, {
                        val: h
                    }), t.children.length && this.setShapeArgs(t, t.values, i)
                }
            }
            translate() {
                let t = this.options,
                    e = this.center = this.getCenter(),
                    i = this.startAndEndRadians = u(t.startAngle, t.endAngle),
                    s = e[3] / 2,
                    o = e[2] / 2,
                    l = y(this),
                    a = this.nodeMap,
                    n, h = a && a[l],
                    d = {};
                this.shapeRoot = h && h.shapeArgs, this.processedXData || this.processData(), this.generatePoints(), P(this, "afterTranslate");
                let p = this.tree = this.getTree(),
                    c = C((h = (a = this.nodeMap)[l]).parent) ? h.parent : "",
                    g = a[c],
                    {
                        from: b,
                        to: f
                    } = r.getLevelFromAndTo(h);
                n = v({
                    from: b,
                    levels: this.options.levels,
                    to: f,
                    defaults: {
                        colorByPoint: t.colorByPoint,
                        dataLabels: t.dataLabels,
                        levelIsConstant: t.levelIsConstant,
                        levelSize: t.levelSize,
                        slicedOffset: t.slicedOffset
                    }
                }), n = r.calculateLevelSizes(n, {
                    diffRadius: o - s,
                    from: b,
                    to: f
                }), m(p, {
                    before: O,
                    idRoot: l,
                    levelIsConstant: t.levelIsConstant,
                    mapOptionsToLevel: n,
                    mapIdToNode: a,
                    points: this.points,
                    series: this
                });
                let x = a[""].shapeArgs = {
                    end: i.end,
                    r: s,
                    start: i.start,
                    val: h.val,
                    x: e[0],
                    y: e[1]
                };
                for (let t of (this.setShapeArgs(g, x, n), this.mapOptionsToLevel = n, this.points)) d[t.id] && T(31, !1, this.chart), d[t.id] = !0
            }
        }
        return I.defaultOptions = A(b.defaultOptions, n), S(I.prototype, {
            axisTypes: [],
            drawDataLabels: c,
            getCenter: p,
            isCartesian: !1,
            onPointSupported: !0,
            pointAttribs: g.prototype.pointAttribs,
            pointClass: s,
            NodeClass: a,
            utils: r
        }), i.registerSeriesType("sunburst", I), I
    }), i(e, "masters/modules/sunburst.src.js", [e["Core/Globals.js"], e["Extensions/Breadcrumbs/Breadcrumbs.js"]], function(t, e) {
        return t.Breadcrumbs = t.Breadcrumbs || e, t.Breadcrumbs.compose(t.Chart, t.defaultOptions), t
    })
});