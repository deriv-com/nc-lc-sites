!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * (c) 2014-2024 Highsoft AS
 * Authors: Jon Arild Nygard / Oystein Moseng
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/treemap", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function i(t, e, i, s) {
        t.hasOwnProperty(e) || (t[e] = s.apply(null, i), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: e,
                module: t[e]
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
            defined: n,
            extend: a,
            fireEvent: h,
            isString: d,
            merge: p,
            objectEach: u,
            pick: c,
            pushUnique: g
        } = s;

        function m() {
            if (this.breadcrumbs) {
                let t = this.resetZoomButton && this.resetZoomButton.getBBox(),
                    e = this.breadcrumbs.options;
                t && "right" === e.position.align && "plotBox" === e.relativeTo && this.breadcrumbs.alignBreadcrumbsGroup(-t.width - e.buttonSpacing)
            }
        }

        function v() {
            this.breadcrumbs && (this.breadcrumbs.destroy(), this.breadcrumbs = void 0)
        }

        function b() {
            let t = this.breadcrumbs;
            if (t && !t.options.floating && t.level) {
                let e = t.options,
                    i = e.buttonTheme,
                    s = (i.height || 0) + 2 * (i.padding || 0) + e.buttonSpacing,
                    r = e.position.verticalAlign;
                "bottom" === r ? (this.marginBottom = (this.marginBottom || 0) + s, t.yOffset = s) : "middle" !== r ? (this.plotTop += s, t.yOffset = -s) : t.yOffset = void 0
            }
        }

        function f() {
            this.breadcrumbs && this.breadcrumbs.redraw()
        }

        function y(t) {
            !0 === t.resetSelection && this.breadcrumbs && this.breadcrumbs.alignBreadcrumbsGroup()
        }
        class x {
            static compose(e, i) {
                g(o, "Breadcrumbs") && (l(e, "destroy", v), l(e, "afterShowResetZoom", m), l(e, "getMargins", b), l(e, "redraw", f), l(e, "selection", y), a(i.lang, t.lang))
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
                    a = i.formatter && i.formatter(t) || r(o, {
                        level: t.levelOptions
                    }, e) || "";
                return (d(a) && !a.length || "← " === a) && n(l) && (a = i.showFullPath ? l : "← " + l), a
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
                    let n = p(s);
                    t && (n.x += t), this.options.rtl && (n.x += s.width), n.y = c(n.y, this.yOffset, 0), this.group.align(n, !0, r)
                }
            }
            renderButton(t, e, i) {
                let s = this,
                    r = this.chart,
                    o = s.options,
                    l = p(o.buttonTheme),
                    n = r.renderer.button(s.getButtonText(t), e, i, function(e) {
                        let i;
                        let r = o.events && o.events.click;
                        r && (i = r.call(s, e, t)), !1 !== i && (o.showFullPath ? e.newLevel = t.level : e.newLevel = s.level - 1, h(s, "up", e))
                    }, l).addClass("highcharts-breadcrumbs-button").add(s.group);
                return r.styledMode || n.attr(o.style), n
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
                    n = this.group ? o(this.group, e) : e,
                    a, h;
                for (let d = 0, p = i.length; d < p; ++d) {
                    let u, c;
                    let g = d === p - 1;
                    t[(h = i[d]).level] ? (u = (a = t[h.level]).button, a.separator || g ? a.separator && g && (a.separator.destroy(), delete a.separator) : (n += r * e, a.separator = this.renderSeparator(n, e), s && l(a.separator, n, e), n += o(a.separator, e)), t[h.level].updated = !0) : (u = this.renderButton(h, n, e), s && l(u, n, e), n += o(u, e), g || (c = this.renderSeparator(n, e), s && l(c, n, e), n += o(c, e)), t[h.level] = {
                        button: u,
                        separator: c,
                        updated: !0
                    }), u && u.setState(g ? 2 : 0)
                }
            }
        }
        return x.defaultOptions = t.options, x
    }), i(e, "Series/ColorMapComposition.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        var i;
        let {
            column: {
                prototype: s
            }
        } = t.seriesTypes, {
            addEvent: r,
            defined: o
        } = e;
        return function(t) {
            function e(t) {
                this.moveToTopOnHover && this.graphic && this.graphic.attr({
                    zIndex: t && "hover" === t.state ? 1 : 0
                })
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
                    return o(t.color) && (!t.state || "normal" === t.state) && (e[this.colorProp || "fill"] = t.color), e
                },
                pointAttribs: s.pointAttribs
            }, t.compose = function(t) {
                return r(t.prototype.pointClass, "afterSetState", e), t
            }
        }(i || (i = {})), i
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
                } = e, l = t.series && t.series.chart.hasRendered ? void 0 : t.series && t.series.options.animation, n = t.graphic;
                if (e.attribs = {
                        ...e.attribs,
                        class: t.getClassName()
                    }, t.shouldDraw()) n || (n = "text" === e.shapeType ? o.text() : "image" === e.shapeType ? o.image(e.imageUrl || "").attr(e.shapeArgs || {}) : o[e.shapeType](e.shapeArgs || {}), t.graphic = n, n.add(e.group)), r && n.css(r), n.attr(e.attribs).animate(i, !e.isNew && l, s);
                else if (n) {
                    let e = () => {
                        t.graphic = n = n && n.destroy(), "function" == typeof s && s()
                    };
                    Object.keys(i).length ? n.animate(i, void 0, () => e()) : e()
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
            pick: n
        } = i;
        class a extends r {
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
                return this.node.level <= t.nodeMap[t.rootNode].level ? i += " highcharts-above-level" : this.node.isLeaf || n(e.interactByLeaf, !e.allowTraversingTree) ? this.node.isLeaf || (i += " highcharts-internal-node") : i += " highcharts-internal-node-interactive", i
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
        return o(a.prototype, {
            setVisible: s.prototype.setVisible
        }), a
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
            legendSymbol: "rectangle"
        }
    }), i(e, "Series/Treemap/TreemapUtilities.js", [], function() {
        var t;
        return (t || (t = {})).recursive = function t(e, i, s) {
            let r;
            !1 !== (r = i.call(s || this, e)) && t(r, i, s)
        }, t
    }), i(e, "Series/TreeUtilities.js", [e["Core/Color/Color.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            extend: i,
            isArray: s,
            isNumber: r,
            isObject: o,
            merge: l,
            pick: n,
            relativeLength: a
        } = e;
        return {
            getColor: function(e, i) {
                let s, r, o, l, a, h;
                let d = i.index,
                    p = i.mapOptionsToLevel,
                    u = i.parentColor,
                    c = i.parentColorIndex,
                    g = i.series,
                    m = i.colors,
                    v = i.siblings,
                    b = g.points,
                    f = g.chart.options.chart;
                return e && (s = b[e.i], r = p[e.level] || {}, s && r.colorByPoint && (l = s.index % (m ? m.length : f.colorCount), o = m && m[l]), g.chart.styledMode || (a = n(s && s.options.color, r && r.color, o, u && (e => {
                    let i = r && r.colorVariation;
                    return i && "brightness" === i.key && d && v ? t.parse(e).brighten(i.to * (d / v)).get() : e
                })(u), g.color)), h = n(s && s.options.colorIndex, r && r.colorIndex, l, c, i.colorIndex)), {
                    color: a,
                    colorIndex: h
                }
            },
            getLevelOptions: function(t) {
                let e = {},
                    i, a, h, d, p, u;
                if (o(t))
                    for (d = r(t.from) ? t.from : 1, u = t.levels, a = {}, i = o(t.defaults) ? t.defaults : {}, s(u) && (a = u.reduce((t, e) => {
                            let s, a, h;
                            return o(e) && r(e.level) && (a = n((h = l({}, e)).levelIsConstant, i.levelIsConstant), delete h.levelIsConstant, delete h.level, o(t[s = e.level + (a ? 0 : d - 1)]) ? l(!0, t[s], h) : t[s] = h), t
                        }, {})), p = r(t.to) ? t.to : 1, h = 0; h <= p; h++) e[h] = l({}, i, o(a[h]) ? a[h] : {});
                return e
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
                return a(o, l)
            },
            setTreeValues: function t(e, s) {
                let r = s.before,
                    o = s.idRoot,
                    l = s.mapIdToNode[o],
                    a = !1 !== s.levelIsConstant,
                    h = s.points[e.i],
                    d = h && h.options || {},
                    p = [],
                    u = 0;
                e.levelDynamic = e.level - (a ? 0 : l.level), e.name = n(h && h.name, ""), e.visible = o === e.id || !0 === s.visible, "function" == typeof r && (e = r(e, s)), e.children.forEach((r, o) => {
                    let l = i({}, s);
                    i(l, {
                        index: o,
                        siblings: e.children.length,
                        visible: e.visible
                    }), r = t(r, l), p.push(r), r.visible && (u += r.val)
                });
                let c = n(d.value, u);
                return e.visible = c >= 0 && (u > 0 || e.visible), e.children = p, e.childrenTotal = u, e.isLeaf = e.visible && !u, e.val = c, e
            },
            updateRootId: function(t) {
                let e, i;
                return o(t) && (i = o(t.options) ? t.options : {}, e = n(t.rootNode, i.rootId, ""), o(t.userOptions) && (t.userOptions.rootId = e), t.rootNode = e), e
            }
        }
    }), i(e, "Series/Treemap/TreemapSeries.js", [e["Extensions/Breadcrumbs/Breadcrumbs.js"], e["Core/Color/Color.js"], e["Series/ColorMapComposition.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Series/Treemap/TreemapAlgorithmGroup.js"], e["Series/Treemap/TreemapNode.js"], e["Series/Treemap/TreemapPoint.js"], e["Series/Treemap/TreemapSeriesDefaults.js"], e["Series/Treemap/TreemapUtilities.js"], e["Series/TreeUtilities.js"], e["Core/Utilities.js"]], function(t, e, i, s, r, o, l, n, a, h, d, p) {
        let {
            parse: u
        } = e, {
            composed: c,
            noop: g
        } = s, {
            column: m,
            scatter: v
        } = r.seriesTypes, {
            getColor: b,
            getLevelOptions: f,
            updateRootId: y
        } = d, {
            addEvent: x,
            correctFloat: T,
            defined: w,
            error: B,
            extend: S,
            fireEvent: C,
            isArray: L,
            isObject: P,
            isString: A,
            merge: O,
            pick: R,
            pushUnique: D,
            stableSort: I
        } = p, M = !1;

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
            }, S(i.options, t), S(e.options, t), M = !0) : M && (i.setOptions(i.userOptions), e.setOptions(e.userOptions), M = !1))
        }
        class j extends v {
            static compose(t) {
                D(c, "TreemapSeries") && x(t, "afterBindAxes", N)
            }
            algorithmCalcPoints(t, e, i, s) {
                let r = i.plot,
                    o = i.elArr.length - 1,
                    l, n, a, h, d = i.lW,
                    p = i.lH,
                    u, c = 0;
                for (let t of (e ? (d = i.nW, p = i.nH) : u = i.elArr[o], i.elArr))(e || c < o) && (0 === i.direction ? (l = r.x, n = r.y, h = t / (a = d)) : (l = r.x, n = r.y, a = t / (h = p)), s.push({
                    x: l,
                    y: n,
                    width: a,
                    height: T(h)
                }), 0 === i.direction ? r.y = r.y + h : r.x = r.x + a), c += 1;
                i.reset(), 0 === i.direction ? i.width = i.width - d : i.height = i.height - p, r.y = r.parent.y + (r.parent.height - i.height), r.x = r.parent.x + (r.parent.width - i.width), t && (i.direction = 1 - i.direction), e || i.addElement(u)
            }
            algorithmFill(t, e, i) {
                let s = [],
                    r, o = e.direction,
                    l = e.x,
                    n = e.y,
                    a = e.width,
                    h = e.height,
                    d, p, u, c;
                for (let g of i) r = e.width * e.height * (g.val / e.val), d = l, p = n, 0 === o ? (a -= u = r / (c = h), l += u) : (h -= c = r / (u = a), n += c), s.push({
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
                    n = i.length - 1,
                    a = new o(e.height, e.width, l, r),
                    h, d = 0;
                for (let o of i) h = e.width * e.height * (o.val / e.val), a.addElement(h), a.lP.nR > a.lP.lR && this.algorithmCalcPoints(t, !1, a, s, r), d === n && this.algorithmCalcPoints(t, !0, a, s, r), ++d;
                return s
            }
            alignDataLabel(t, e, i) {
                let s = i.style;
                s && !w(s.textOverflow) && e.text && e.getBBox().width > (e.text.textWidth || 0) && e.css({
                    textOverflow: "ellipsis",
                    width: s.width += "px"
                }), m.prototype.alignDataLabel.apply(this, arguments), t.dataLabel && t.dataLabel.attr({
                    zIndex: (t.node.zIndex || 0) + 1
                })
            }
            calculateChildrenAreas(t, e) {
                let i = this.options,
                    s = this.mapOptionsToLevel[t.level + 1],
                    r = R(this[s && s.layoutAlgorithm] && s.layoutAlgorithm, i.layoutAlgorithm),
                    o = i.alternateStartingDirection,
                    l = t.children.filter(t => !t.ignore),
                    n = [];
                s && s.layoutStartingDirection && (e.direction = "vertical" === s.layoutStartingDirection ? 0 : 1), n = this[r](e, l);
                let a = -1;
                for (let t of l) {
                    let i = n[++a];
                    t.values = O(i, {
                        val: t.childrenTotal,
                        direction: o ? 1 - e.direction : e.direction
                    }), t.pointValues = O(i, {
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
                }, s.node.isLeaf || (t.enabled = !1), e && e.dataLabels && (t = O(t, e.dataLabels), this.hasDataLabels = () => !0), s.shapeArgs && (t.style.width = s.shapeArgs.width, s.dataLabel && s.dataLabel.css({
                    width: s.shapeArgs.width + "px"
                })), s.dlOptions = O(t, s.options.dataLabels);
                super.drawDataLabels()
            }
            drawPoints(t = this.points) {
                let e = this.chart,
                    i = e.renderer,
                    s = e.styledMode,
                    r = this.options,
                    o = s ? {} : r.shadow,
                    l = r.borderRadius,
                    n = e.pointCount < r.animationLimit,
                    a = r.allowTraversingTree;
                for (let e of t) {
                    let t = e.node.levelDynamic,
                        h = {},
                        d = {},
                        p = {},
                        u = "level-group-" + e.node.level,
                        c = !!e.graphic,
                        g = n && c,
                        m = e.shapeArgs;
                    e.shouldDraw() && (e.isInside = !0, l && (d.r = l), O(!0, g ? h : d, c ? m : {}, s ? {} : this.pointAttribs(e, e.selected ? "select" : void 0)), this.colorAttribs && s && S(p, this.colorAttribs(e)), this[u] || (this[u] = i.g(u).attr({
                        zIndex: 1e3 - (t || 0)
                    }).add(this.group), this[u].survive = !0)), e.draw({
                        animatableAttribs: h,
                        attribs: d,
                        css: p,
                        group: this[u],
                        imageUrl: e.imageUrl,
                        renderer: i,
                        shadow: o,
                        shapeArgs: m,
                        shapeType: e.shapeType
                    }), a && e.graphic && (e.drillId = r.interactByLeaf ? this.drillToByLeaf(e) : this.drillToByGroup(e))
                }
            }
            drillToByGroup(t) {
                let e = !1;
                return t.node.isLeaf || t.node.level - this.nodeMap[this.rootNode].level != 1 || (e = t.id), e
            }
            drillToByLeaf(t) {
                let e = !1,
                    i;
                if (t.node.parent !== this.rootNode && t.node.isLeaf)
                    for (i = t.node; !e;)(i = this.nodeMap[i.parent]).parent === this.rootNode && (e = i.id);
                return e
            }
            drillToNode(t, e) {
                B(32, !1, void 0, {
                    "treemap.drillToNode": "use treemap.setRootNode"
                }), this.setRootNode(t, e)
            }
            drillUp() {
                let t = this.nodeMap[this.rootNode];
                t && A(t.parent) && this.setRootNode(t.parent, !0, {
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
                let i = L(t) ? t : [],
                    s = L(e) ? e : [],
                    r = i.reduce(function(t, e, i) {
                        let s = R(e.parent, "");
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
                    n = 0,
                    a;
                for (let e of s[t] || []) n = Math.max((a = this.buildTree(this.points[e].id, e, i + 1, s, t)).height + 1, n), o.push(a);
                let h = new this.NodeClass().init(t, e, o, n, i, this, r);
                for (let t of o) t.parentNode = h;
                return this.nodeMap[h.id] = h, this.nodeList.push(h), l && (l.node = h, h.point = l), h
            }
            hasData() {
                return !!this.processedXData.length
            }
            init(e, i) {
                let s = this,
                    r = O(i.drillUpButton, i.breadcrumbs),
                    o = x(s, "setOptions", t => {
                        let e = t.userOptions;
                        w(e.allowDrillToNode) && !w(e.allowTraversingTree) && (e.allowTraversingTree = e.allowDrillToNode, delete e.allowDrillToNode), w(e.drillUpButton) && !w(e.traverseUpButton) && (e.traverseUpButton = e.drillUpButton, delete e.drillUpButton)
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
                A(i) && (e.setState(""), this.setRootNode(i, !0, {
                    trigger: "click"
                }))
            }
            pointAttribs(t, e) {
                let i;
                let s = P(this.mapOptionsToLevel) ? this.mapOptionsToLevel : {},
                    r = t && s[t.node.level] || {},
                    o = this.options,
                    l = e && o.states && o.states[e] || {},
                    n = t && t.getClassName() || "",
                    a = {
                        stroke: t && t.borderColor || r.borderColor || l.borderColor || o.borderColor,
                        "stroke-width": R(t && t.borderWidth, r.borderWidth, l.borderWidth, o.borderWidth),
                        dashstyle: t && t.borderDashStyle || r.borderDashStyle || l.borderDashStyle || o.borderDashStyle,
                        fill: t && t.color || this.color
                    };
                return -1 !== n.indexOf("highcharts-above-level") ? (a.fill = "none", a["stroke-width"] = 0) : -1 !== n.indexOf("highcharts-internal-node-interactive") ? (i = R(l.opacity, o.opacity), a.fill = u(a.fill).setOpacity(i).get(), a.cursor = "pointer") : -1 !== n.indexOf("highcharts-internal-node") ? a.fill = "none" : e && (a.fill = u(a.fill).brighten(l.brightness).get()), a
            }
            setColorRecursive(t, e, i, s, r) {
                let o = this && this.chart,
                    l = o && o.options && o.options.colors;
                if (t) {
                    let o = b(t, {
                            colors: l,
                            index: s,
                            mapOptionsToLevel: this.mapOptionsToLevel,
                            parentColor: e,
                            parentColorIndex: i,
                            series: this,
                            siblings: r
                        }),
                        n = this.points[t.i];
                    n && (n.color = o.color, n.colorIndex = o.colorIndex);
                    let a = -1;
                    for (let e of t.children || []) this.setColorRecursive(e, o.color, o.colorIndex, ++a, t.children.length)
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
                    o = e => r ? 0 : (t.pointAttribs(e)["stroke-width"] || 0) % 2 / 2;
                for (let t of e) {
                    let {
                        pointValues: e,
                        visible: r
                    } = t.node;
                    if (e && r) {
                        let {
                            height: r,
                            width: l,
                            x: n,
                            y: a
                        } = e, h = o(t), d = Math.round(i.toPixels(n, !0)) - h, p = Math.round(i.toPixels(n + l, !0)) - h, u = Math.round(s.toPixels(a, !0)) - h, c = Math.round(s.toPixels(a + r, !0)) - h, g = {
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
                C(this, "setRootNode", S({
                    newRootId: t,
                    previousRootId: this.rootNode,
                    redraw: R(e, !0),
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
                    n = 0;
                for (let e of t.children) e = this.setTreeValues(e), o.push(e), e.ignore || (n += e.val);
                I(o, (t, e) => (t.sortIndex || 0) - (e.sortIndex || 0));
                let a = R(l && l.options.value, n);
                return l && (l.value = a), S(t, {
                    children: o,
                    childrenTotal: n,
                    ignore: !(R(l && l.visible, !0) && a > 0),
                    isLeaf: t.visible && !n,
                    levelDynamic: t.level - (r ? 0 : s.level),
                    name: R(l && l.name, ""),
                    sortIndex: R(l && l.sortIndex, -a),
                    val: a
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
                let n = t.tree = t.getTree();
                s = t.nodeMap[i], "" === i || s && s.children.length || (t.setRootNode("", !1), i = t.rootNode, s = t.nodeMap[i]), t.mapOptionsToLevel = f({
                    from: s.level + 1,
                    levels: e.levels,
                    to: n.height,
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
                }), t.setTreeValues(n), t.axisRatio = t.xAxis.len / t.yAxis.len, t.nodeMap[""].pointValues = r = {
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100
                }, t.nodeMap[""].values = o = O(r, {
                    width: r.width * t.axisRatio,
                    direction: "vertical" === e.layoutStartingDirection ? 0 : 1,
                    val: n.val
                }), t.calculateChildrenAreas(n, o), t.colorAxis || e.colorByPoint || t.setColorRecursive(t.tree), e.allowTraversingTree && (l = s.pointValues, t.xAxis.setExtremes(l.x, l.x + l.width, !1), t.yAxis.setExtremes(l.y, l.y + l.height, !1), t.xAxis.setScale(), t.yAxis.setScale()), t.setPointValues()
            }
        }
        return j.defaultOptions = O(v.defaultOptions, a), S(j.prototype, {
            buildKDTree: g,
            colorAttribs: i.seriesMembers.colorAttribs,
            colorKey: "colorValue",
            directTouch: !0,
            getExtremesFromAll: !0,
            getSymbol: g,
            optionalAxis: "colorAxis",
            parallelArrays: ["x", "y", "value", "colorValue"],
            pointArrayMap: ["value"],
            pointClass: n,
            NodeClass: l,
            trackerGroups: ["group", "dataLabelsGroup"],
            utils: h
        }), i.compose(j), r.registerSeriesType("treemap", j), j
    }), i(e, "masters/modules/treemap.src.js", [e["Core/Globals.js"], e["Extensions/Breadcrumbs/Breadcrumbs.js"], e["Series/Treemap/TreemapSeries.js"]], function(t, e, i) {
        return t.Breadcrumbs = t.Breadcrumbs || e, t.Breadcrumbs.compose(t.Chart, t.defaultOptions), i.compose(t.Series), t
    })
}); //# sourceMappingURL=treemap.js.map