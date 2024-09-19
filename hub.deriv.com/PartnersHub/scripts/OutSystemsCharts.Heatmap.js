!
/**
 * Highmaps JS v11.4.6 (2024-07-08)
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/heatmap", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function s(e, s, i, o) {
        e.hasOwnProperty(s) || (e[s] = o.apply(null, i), "function" == typeof CustomEvent && t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: s,
                module: e[s]
            }
        })))
    }
    s(e, "Core/Axis/Color/ColorAxisComposition.js", [e["Core/Color/Color.js"], e["Core/Utilities.js"]], function(t, e) {
        var s;
        let {
            parse: i
        } = t, {
            addEvent: o,
            extend: r,
            merge: l,
            pick: a,
            splat: n
        } = e;
        return function(t) {
            let e;

            function s() {
                let {
                    userOptions: t
                } = this;
                this.colorAxis = [], t.colorAxis && (t.colorAxis = n(t.colorAxis), t.colorAxis.map(t => new e(this, t)))
            }

            function h(t) {
                let e = this.chart.colorAxis || [],
                    s = e => {
                        let s = t.allItems.indexOf(e); - 1 !== s && (this.destroyItem(t.allItems[s]), t.allItems.splice(s, 1))
                    },
                    i = [],
                    o, r;
                for (e.forEach(function(t) {
                        (o = t.options) && o.showInLegend && (o.dataClasses && o.visible ? i = i.concat(t.getDataClassLegendSymbols()) : o.visible && i.push(t), t.series.forEach(function(t) {
                            (!t.options.showInLegend || o.dataClasses) && ("point" === t.options.legendType ? t.points.forEach(function(t) {
                                s(t)
                            }) : s(t))
                        }))
                    }), r = i.length; r--;) t.allItems.unshift(i[r])
            }

            function d(t) {
                t.visible && t.item.legendColor && t.item.legendItem.symbol.attr({
                    fill: t.item.legendColor
                })
            }

            function p(t) {
                this.chart.colorAxis?.forEach(e => {
                    e.update({}, t.redraw)
                })
            }

            function c() {
                (this.chart.colorAxis && this.chart.colorAxis.length || this.colorAttribs) && this.translateColors()
            }

            function u() {
                let t = this.axisTypes;
                t ? -1 === t.indexOf("colorAxis") && t.push("colorAxis") : this.axisTypes = ["colorAxis"]
            }

            function m(t) {
                let e = this,
                    s = t ? "show" : "hide";
                e.visible = e.options.visible = !!t, ["graphic", "dataLabel"].forEach(function(t) {
                    e[t] && e[t][s]()
                }), this.series.buildKDTree()
            }

            function g() {
                let t = this,
                    e = this.getPointsCollection(),
                    s = this.options.nullColor,
                    i = this.colorAxis,
                    o = this.colorKey;
                e.forEach(e => {
                    let r = e.getNestedProperty(o),
                        l = e.options.color || (e.isNull || null === e.value ? s : i && void 0 !== r ? i.toColor(r, e) : e.color || t.color);
                    l && e.color !== l && (e.color = l, "point" === t.options.legendType && e.legendItem && e.legendItem.label && t.chart.legend.colorizeItem(e, e.visible))
                })
            }

            function f() {
                this.elem.attr("fill", i(this.start).tweenTo(i(this.end), this.pos), void 0, !0)
            }

            function x() {
                this.elem.attr("stroke", i(this.start).tweenTo(i(this.end), this.pos), void 0, !0)
            }
            t.compose = function(t, i, n, y, C) {
                let b = i.prototype,
                    v = n.prototype,
                    A = C.prototype;
                b.collectionsWithUpdate.includes("colorAxis") || (e = t, b.collectionsWithUpdate.push("colorAxis"), b.collectionsWithInit.colorAxis = [b.addColorAxis], o(i, "afterGetAxes", s), function(t) {
                    let s = t.prototype.createAxis;
                    t.prototype.createAxis = function(t, i) {
                        if ("colorAxis" !== t) return s.apply(this, arguments);
                        let o = new e(this, l(i.axis, {
                            index: this[t].length,
                            isX: !1
                        }));
                        return this.isDirtyLegend = !0, this.axes.forEach(t => {
                            t.series = []
                        }), this.series.forEach(t => {
                            t.bindAxes(), t.isDirtyData = !0
                        }), a(i.redraw, !0) && this.redraw(i.animation), o
                    }
                }(i), v.fillSetter = f, v.strokeSetter = x, o(y, "afterGetAllItems", h), o(y, "afterColorizeItem", d), o(y, "afterUpdate", p), r(A, {
                    optionalAxis: "colorAxis",
                    translateColors: g
                }), r(A.pointClass.prototype, {
                    setVisible: m
                }), o(C, "afterTranslate", c, {
                    order: 1
                }), o(C, "bindAxes", u))
            }, t.pointSetVisible = m
        }(s || (s = {})), s
    }), s(e, "Core/Axis/Color/ColorAxisDefaults.js", [], function() {
        return {
            lineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
            gridLineColor: "#ffffff",
            gridLineWidth: 1,
            tickPixelInterval: 72,
            startOnTick: !0,
            endOnTick: !0,
            offset: 0,
            marker: {
                animation: {
                    duration: 50
                },
                width: .01,
                color: "#999999"
            },
            labels: {
                distance: 8,
                overflow: "justify",
                rotation: 0
            },
            minColor: "#e6e9ff",
            maxColor: "#0022ff",
            tickLength: 5,
            showInLegend: !0
        }
    }), s(e, "Core/Axis/Color/ColorAxisLike.js", [e["Core/Color/Color.js"], e["Core/Utilities.js"]], function(t, e) {
        var s, i;
        let {
            parse: o
        } = t, {
            merge: r
        } = e;
        return (i = s || (s = {})).initDataClasses = function(t) {
            let e = this.chart,
                s = this.legendItem = this.legendItem || {},
                i = this.options,
                l = t.dataClasses || [],
                a, n, h = e.options.chart.colorCount,
                d = 0,
                p;
            this.dataClasses = n = [], s.labels = [];
            for (let t = 0, s = l.length; t < s; ++t) a = r(a = l[t]), n.push(a), (e.styledMode || !a.color) && ("category" === i.dataClassColor ? (e.styledMode || (h = (p = e.options.colors || []).length, a.color = p[d]), a.colorIndex = d, ++d === h && (d = 0)) : a.color = o(i.minColor).tweenTo(o(i.maxColor), s < 2 ? .5 : t / (s - 1)))
        }, i.initStops = function() {
            let t = this.options,
                e = this.stops = t.stops || [
                    [0, t.minColor || ""],
                    [1, t.maxColor || ""]
                ];
            for (let t = 0, s = e.length; t < s; ++t) e[t].color = o(e[t][1])
        }, i.normalizedValue = function(t) {
            let e = this.max || 0,
                s = this.min || 0;
            return this.logarithmic && (t = this.logarithmic.log2lin(t)), 1 - (e - t) / (e - s || 1)
        }, i.toColor = function(t, e) {
            let s, i, o, r, l, a;
            let n = this.dataClasses,
                h = this.stops;
            if (n) {
                for (a = n.length; a--;)
                    if (i = (l = n[a]).from, o = l.to, (void 0 === i || t >= i) && (void 0 === o || t <= o)) {
                        r = l.color, e && (e.dataClass = a, e.colorIndex = l.colorIndex);
                        break
                    }
            } else {
                for (s = this.normalizedValue(t), a = h.length; a-- && !(s > h[a][0]););
                i = h[a] || h[a + 1], s = 1 - ((o = h[a + 1] || i)[0] - s) / (o[0] - i[0] || 1), r = i.color.tweenTo(o.color, s)
            }
            return r
        }, s
    }), s(e, "Core/Axis/Color/ColorAxis.js", [e["Core/Axis/Axis.js"], e["Core/Axis/Color/ColorAxisComposition.js"], e["Core/Axis/Color/ColorAxisDefaults.js"], e["Core/Axis/Color/ColorAxisLike.js"], e["Core/Defaults.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, s, i, o, r, l, a) {
        let {
            defaultOptions: n
        } = o, {
            series: h
        } = l, {
            defined: d,
            extend: p,
            fireEvent: c,
            isArray: u,
            isNumber: m,
            merge: g,
            pick: f,
            relativeLength: x
        } = a;
        n.colorAxis = g(n.xAxis, s);
        class y extends t {
            static compose(t, s, i, o) {
                e.compose(y, t, s, i, o)
            }
            constructor(t, e) {
                super(t, e), this.coll = "colorAxis", this.visible = !0, this.init(t, e)
            }
            init(t, e) {
                let s = t.options.legend || {},
                    i = e.layout ? "vertical" !== e.layout : "vertical" !== s.layout;
                this.side = e.side || i ? 2 : 1, this.reversed = e.reversed || !i, this.opposite = !i, super.init(t, e, "colorAxis"), this.userOptions = e, u(t.userOptions.colorAxis) && (t.userOptions.colorAxis[this.index] = e), e.dataClasses && this.initDataClasses(e), this.initStops(), this.horiz = i, this.zoomEnabled = !1
            }
            hasData() {
                return !!(this.tickPositions || []).length
            }
            setTickPositions() {
                if (!this.dataClasses) return super.setTickPositions()
            }
            setOptions(t) {
                let e = g(n.colorAxis, t, {
                    showEmpty: !1,
                    title: null,
                    visible: this.chart.options.legend.enabled && !1 !== t.visible
                });
                super.setOptions(e), this.options.crosshair = this.options.marker
            }
            setAxisSize() {
                let t = this.chart,
                    e = this.legendItem?.symbol,
                    {
                        width: s,
                        height: i
                    } = this.getSize();
                e && (this.left = +e.attr("x"), this.top = +e.attr("y"), this.width = s = +e.attr("width"), this.height = i = +e.attr("height"), this.right = t.chartWidth - this.left - s, this.bottom = t.chartHeight - this.top - i, this.pos = this.horiz ? this.left : this.top), this.len = (this.horiz ? s : i) || y.defaultLegendLength
            }
            getOffset() {
                let t = this.legendItem?.group,
                    e = this.chart.axisOffset[this.side];
                if (t) {
                    this.axisParent = t, super.getOffset();
                    let s = this.chart.legend;
                    s.allItems.forEach(function(t) {
                        t instanceof y && t.drawLegendSymbol(s, t)
                    }), s.render(), this.chart.getMargins(!0), this.chart.series.some(t => t.isDrilling) || (this.isDirty = !0), this.added || (this.added = !0, this.labelLeft = 0, this.labelRight = this.width), this.chart.axisOffset[this.side] = e
                }
            }
            setLegendColor() {
                let t = this.horiz,
                    e = this.reversed,
                    s = e ? 1 : 0,
                    i = e ? 0 : 1,
                    o = t ? [s, 0, i, 0] : [0, i, 0, s];
                this.legendColor = {
                    linearGradient: {
                        x1: o[0],
                        y1: o[1],
                        x2: o[2],
                        y2: o[3]
                    },
                    stops: this.stops
                }
            }
            drawLegendSymbol(t, e) {
                let s = e.legendItem || {},
                    i = t.padding,
                    o = t.options,
                    r = this.options.labels,
                    l = f(o.itemDistance, 10),
                    a = this.horiz,
                    {
                        width: n,
                        height: h
                    } = this.getSize(),
                    d = f(o.labelPadding, a ? 16 : 30);
                this.setLegendColor(), s.symbol || (s.symbol = this.chart.renderer.symbol("roundedRect").attr({
                    r: o.symbolRadius ?? 3,
                    zIndex: 1
                }).add(s.group)), s.symbol.attr({
                    x: 0,
                    y: (t.baseline || 0) - 11,
                    width: n,
                    height: h
                }), s.labelWidth = n + i + (a ? l : f(r.x, r.distance) + (this.maxLabelLength || 0)), s.labelHeight = h + i + (a ? d : 0)
            }
            setState(t) {
                this.series.forEach(function(e) {
                    e.setState(t)
                })
            }
            setVisible() {}
            getSeriesExtremes() {
                let t = this.series,
                    e, s, i, o, r, l, a = t.length,
                    n, p;
                for (this.dataMin = 1 / 0, this.dataMax = -1 / 0; a--;) {
                    if (s = (l = t[a]).colorKey = f(l.options.colorKey, l.colorKey, l.pointValKey, l.zoneAxis, "y"), o = l.pointArrayMap, r = l[s + "Min"] && l[s + "Max"], l[s + "Data"]) e = l[s + "Data"];
                    else if (o) {
                        if (e = [], i = o.indexOf(s), n = l.yData, i >= 0 && n)
                            for (p = 0; p < n.length; p++) e.push(f(n[p][i], n[p]))
                    } else e = l.yData;
                    if (r) l.minColorValue = l[s + "Min"], l.maxColorValue = l[s + "Max"];
                    else {
                        let t = h.prototype.getExtremes.call(l, e);
                        l.minColorValue = t.dataMin, l.maxColorValue = t.dataMax
                    }
                    d(l.minColorValue) && d(l.maxColorValue) && (this.dataMin = Math.min(this.dataMin, l.minColorValue), this.dataMax = Math.max(this.dataMax, l.maxColorValue)), r || h.prototype.applyExtremes.call(l)
                }
            }
            drawCrosshair(t, e) {
                let s;
                let i = this.legendItem || {},
                    o = e && e.plotX,
                    r = e && e.plotY,
                    l = this.pos,
                    a = this.len;
                e && ((s = this.toPixels(e.getNestedProperty(e.series.colorKey))) < l ? s = l - 2 : s > l + a && (s = l + a + 2), e.plotX = s, e.plotY = this.len - s, super.drawCrosshair(t, e), e.plotX = o, e.plotY = r, this.cross && !this.cross.addedToColorAxis && i.group && (this.cross.addClass("highcharts-coloraxis-marker").add(i.group), this.cross.addedToColorAxis = !0, this.chart.styledMode || "object" != typeof this.crosshair || this.cross.attr({
                    fill: this.crosshair.color
                })))
            }
            getPlotLinePath(t) {
                let e = this.left,
                    s = t.translatedValue,
                    i = this.top;
                return m(s) ? this.horiz ? [
                    ["M", s - 4, i - 6],
                    ["L", s + 4, i - 6],
                    ["L", s, i],
                    ["Z"]
                ] : [
                    ["M", e, s],
                    ["L", e - 6, s + 6],
                    ["L", e - 6, s - 6],
                    ["Z"]
                ] : super.getPlotLinePath(t)
            }
            update(t, e) {
                let s = this.chart.legend;
                this.series.forEach(t => {
                    t.isDirtyData = !0
                }), (t.dataClasses && s.allItems || this.dataClasses) && this.destroyItems(), super.update(t, e), this.legendItem && this.legendItem.label && (this.setLegendColor(), s.colorizeItem(this, !0))
            }
            destroyItems() {
                let t = this.chart,
                    e = this.legendItem || {};
                if (e.label) t.legend.destroyItem(this);
                else if (e.labels)
                    for (let s of e.labels) t.legend.destroyItem(s);
                t.isDirtyLegend = !0
            }
            destroy() {
                this.chart.isDirtyLegend = !0, this.destroyItems(), super.destroy(...[].slice.call(arguments))
            }
            remove(t) {
                this.destroyItems(), super.remove(t)
            }
            getDataClassLegendSymbols() {
                let t;
                let e = this,
                    s = e.chart,
                    i = e.legendItem && e.legendItem.labels || [],
                    o = s.options.legend,
                    l = f(o.valueDecimals, -1),
                    a = f(o.valueSuffix, ""),
                    n = t => e.series.reduce((e, s) => (e.push(...s.points.filter(e => e.dataClass === t)), e), []);
                return i.length || e.dataClasses.forEach((o, h) => {
                    let d = o.from,
                        u = o.to,
                        {
                            numberFormatter: m
                        } = s,
                        g = !0;
                    t = "", void 0 === d ? t = "< " : void 0 === u && (t = "> "), void 0 !== d && (t += m(d, l) + a), void 0 !== d && void 0 !== u && (t += " - "), void 0 !== u && (t += m(u, l) + a), i.push(p({
                        chart: s,
                        name: t,
                        options: {},
                        drawLegendSymbol: r.rectangle,
                        visible: !0,
                        isDataClass: !0,
                        setState: t => {
                            for (let e of n(h)) e.setState(t)
                        },
                        setVisible: function() {
                            this.visible = g = e.visible = !g;
                            let t = [];
                            for (let e of n(h)) e.setVisible(g), e.hiddenInDataClass = !g, -1 === t.indexOf(e.series) && t.push(e.series);
                            s.legend.colorizeItem(this, g), t.forEach(t => {
                                c(t, "afterDataClassLegendClick")
                            })
                        }
                    }, o))
                }), i
            }
            getSize() {
                let {
                    chart: t,
                    horiz: e
                } = this, {
                    height: s,
                    width: i
                } = this.options, {
                    legend: o
                } = t.options;
                return {
                    width: f(d(i) ? x(i, t.chartWidth) : void 0, o?.symbolWidth, e ? y.defaultLegendLength : 12),
                    height: f(d(s) ? x(s, t.chartHeight) : void 0, o?.symbolHeight, e ? 12 : y.defaultLegendLength)
                }
            }
        }
        return y.defaultLegendLength = 200, y.keepProps = ["legendItem"], p(y.prototype, i), Array.prototype.push.apply(t.keepProps, y.keepProps), y
    }), s(e, "masters/modules/coloraxis.src.js", [e["Core/Globals.js"], e["Core/Axis/Color/ColorAxis.js"]], function(t, e) {
        return t.ColorAxis = t.ColorAxis || e, t.ColorAxis.compose(t.Chart, t.Fx, t.Legend, t.Series), t
    }), s(e, "Series/ColorMapComposition.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t, e, s) {
        var i;
        let {
            column: {
                prototype: o
            }
        } = t.seriesTypes, {
            addEvent: r,
            defined: l
        } = s;
        return function(t) {
            function s(t) {
                let s = this.series,
                    i = s.chart.renderer;
                this.moveToTopOnHover && this.graphic && (s.stateMarkerGraphic || (s.stateMarkerGraphic = new e(i, "use").css({
                    pointerEvents: "none"
                }).add(this.graphic.parentGroup)), t?.state === "hover" ? (this.graphic.attr({
                    id: this.id
                }), s.stateMarkerGraphic.attr({
                    href: `${i.url}#${this.id}`,
                    visibility: "visible"
                })) : s.stateMarkerGraphic.attr({
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
                pointAttribs: o.pointAttribs
            }, t.compose = function(t) {
                return r(t.prototype.pointClass, "afterSetState", s), t
            }
        }(i || (i = {})), i
    }), s(e, "Series/Heatmap/HeatmapPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            scatter: {
                prototype: {
                    pointClass: s
                }
            }
        } = t.seriesTypes, {
            clamp: i,
            defined: o,
            extend: r,
            pick: l
        } = e;
        class a extends s {
            applyOptions(t, e) {
                return (this.isNull || null === this.value) && delete this.color, super.applyOptions(t, e), this.formatPrefix = this.isNull || null === this.value ? "null" : "point", this
            }
            getCellAttributes() {
                let t = this.series,
                    e = t.options,
                    s = (e.colsize || 1) / 2,
                    r = (e.rowsize || 1) / 2,
                    a = t.xAxis,
                    n = t.yAxis,
                    h = this.options.marker || t.options.marker,
                    d = t.pointPlacementToXValue(),
                    p = l(this.pointPadding, e.pointPadding, 0),
                    c = {
                        x1: i(Math.round(a.len - a.translate(this.x - s, !1, !0, !1, !0, -d)), -a.len, 2 * a.len),
                        x2: i(Math.round(a.len - a.translate(this.x + s, !1, !0, !1, !0, -d)), -a.len, 2 * a.len),
                        y1: i(Math.round(n.translate(this.y - r, !1, !0, !1, !0)), -n.len, 2 * n.len),
                        y2: i(Math.round(n.translate(this.y + r, !1, !0, !1, !0)), -n.len, 2 * n.len)
                    };
                for (let t of [
                        ["width", "x"],
                        ["height", "y"]
                    ]) {
                    let e = t[0],
                        s = t[1],
                        i = s + "1",
                        r = s + "2",
                        l = Math.abs(c[i] - c[r]),
                        d = h && h.lineWidth || 0,
                        u = Math.abs(c[i] + c[r]) / 2,
                        m = h && h[e];
                    if (o(m) && m < l) {
                        let t = m / 2 + d / 2;
                        c[i] = u - t, c[r] = u + t
                    }
                    p && (("x" === s && a.reversed || "y" === s && !n.reversed) && (i = r, r = s + "1"), c[i] += p, c[r] -= p)
                }
                return c
            }
            haloPath(t) {
                if (!t) return [];
                let {
                    x: e = 0,
                    y: s = 0,
                    width: i = 0,
                    height: o = 0
                } = this.shapeArgs || {};
                return [
                    ["M", e - t, s - t],
                    ["L", e - t, s + o + t],
                    ["L", e + i + t, s + o + t],
                    ["L", e + i + t, s - t],
                    ["Z"]
                ]
            }
            isValid() {
                return this.value !== 1 / 0 && this.value !== -1 / 0
            }
        }
        return r(a.prototype, {
            dataLabelOnNull: !0,
            moveToTopOnHover: !0,
            ttBelow: !1
        }), a
    }), s(e, "Series/Heatmap/HeatmapSeriesDefaults.js", [e["Core/Utilities.js"]], function(t) {
        let {
            isNumber: e
        } = t;
        return {
            animation: !1,
            borderRadius: 0,
            borderWidth: 0,
            interpolation: !1,
            nullColor: "#f7f7f7",
            dataLabels: {
                formatter: function() {
                    let {
                        numberFormatter: t
                    } = this.series.chart, {
                        value: s
                    } = this.point;
                    return e(s) ? t(s, -1) : ""
                },
                inside: !0,
                verticalAlign: "middle",
                crop: !1,
                overflow: "allow",
                padding: 0
            },
            marker: {
                symbol: "rect",
                radius: 0,
                lineColor: void 0,
                states: {
                    hover: {
                        lineWidthPlus: 0
                    },
                    select: {}
                }
            },
            clip: !0,
            pointRange: null,
            tooltip: {
                pointFormat: "{point.x}, {point.y}: {point.value}<br/>"
            },
            states: {
                hover: {
                    halo: !1,
                    brightness: .2
                }
            },
            legendSymbol: "rectangle"
        }
    }), s(e, "Series/InterpolationUtilities.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            doc: s
        } = t, {
            defined: i,
            pick: o
        } = e;
        return {
            colorFromPoint: function(t, e) {
                let s = e.series.colorAxis;
                if (s) {
                    let r = s.toColor(t || 0, e).split(")")[0].split("(")[1].split(",").map(t => o(parseFloat(t), parseInt(t, 10)));
                    return r[3] = 255 * o(r[3], 1), i(t) && e.visible || (r[3] = 0), r
                }
                return [0, 0, 0, 0]
            },
            getContext: function(t) {
                let {
                    canvas: e,
                    context: i
                } = t;
                return e && i ? (i.clearRect(0, 0, e.width, e.height), i) : (t.canvas = s.createElement("canvas"), t.context = t.canvas.getContext("2d", {
                    willReadFrequently: !0
                }) || void 0, t.context)
            }
        }
    }), s(e, "Series/Heatmap/HeatmapSeries.js", [e["Core/Color/Color.js"], e["Series/ColorMapComposition.js"], e["Series/Heatmap/HeatmapPoint.js"], e["Series/Heatmap/HeatmapSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"], e["Series/InterpolationUtilities.js"]], function(t, e, s, i, o, r, l, a) {
        let {
            series: n,
            seriesTypes: {
                column: h,
                scatter: d
            }
        } = o, {
            prototype: {
                symbols: p
            }
        } = r, {
            addEvent: c,
            extend: u,
            fireEvent: m,
            isNumber: g,
            merge: f,
            pick: x
        } = l, {
            colorFromPoint: y,
            getContext: C
        } = a;
        class b extends d {
            constructor() {
                super(...arguments), this.valueMax = NaN, this.valueMin = NaN, this.isDirtyCanvas = !0
            }
            drawPoints() {
                let t = this,
                    e = t.options,
                    s = e.interpolation,
                    i = e.marker || {};
                if (s) {
                    let {
                        image: e,
                        chart: s,
                        xAxis: i,
                        yAxis: o
                    } = t, {
                        reversed: r = !1,
                        len: l
                    } = i, {
                        reversed: a = !1,
                        len: n
                    } = o, h = {
                        width: l,
                        height: n
                    };
                    if (!e || t.isDirtyData || t.isDirtyCanvas) {
                        let l = C(t),
                            {
                                canvas: n,
                                options: {
                                    colsize: d = 1,
                                    rowsize: p = 1
                                },
                                points: c,
                                points: {
                                    length: u
                                }
                            } = t,
                            m = s.colorAxis && s.colorAxis[0];
                        if (n && l && m) {
                            let {
                                min: m,
                                max: g
                            } = i.getExtremes(), {
                                min: f,
                                max: x
                            } = o.getExtremes(), C = g - m, b = x - f, v = Math.round(C / d / 8 * 8), A = Math.round(b / p / 8 * 8), [M, w] = [
                                [v, v / C, r, "ceil"],
                                [A, A / b, !a, "floor"]
                            ].map(([t, e, s, i]) => s ? s => Math[i](t - e * s) : t => Math[i](e * t)), L = n.width = v + 1, k = L * (n.height = A + 1), S = (u - 1) / k, I = new Uint8ClampedArray(4 * k), D = (t, e) => 4 * Math.ceil(L * w(e - f) + M(t - m));
                            t.buildKDTree();
                            for (let t = 0; t < k; t++) {
                                let e = c[Math.ceil(S * t)],
                                    {
                                        x: s,
                                        y: i
                                    } = e;
                                I.set(y(e.value, e), D(s, i))
                            }
                            l.putImageData(new ImageData(I, L), 0, 0), e ? e.attr({
                                ...h,
                                href: n.toDataURL("image/png", 1)
                            }) : (t.directTouch = !1, t.image = s.renderer.image(n.toDataURL("image/png", 1)).attr(h).add(t.group))
                        }
                        t.isDirtyCanvas = !1
                    } else(e.width !== l || e.height !== n) && e.attr(h)
                } else(i.enabled || t._hasPointMarkers) && (n.prototype.drawPoints.call(t), t.points.forEach(e => {
                    e.graphic && (e.graphic[t.chart.styledMode ? "css" : "animate"](t.colorAttribs(e)), null === e.value && e.graphic.addClass("highcharts-null-point"))
                }))
            }
            getExtremes() {
                let {
                    dataMin: t,
                    dataMax: e
                } = n.prototype.getExtremes.call(this, this.valueData);
                return g(t) && (this.valueMin = t), g(e) && (this.valueMax = e), n.prototype.getExtremes.call(this)
            }
            getValidPoints(t, e) {
                return n.prototype.getValidPoints.call(this, t, e, !0)
            }
            hasData() {
                return !!this.processedXData.length
            }
            init() {
                super.init.apply(this, arguments);
                let t = this.options;
                t.pointRange = x(t.pointRange, t.colsize || 1), this.yAxis.axisPointRange = t.rowsize || 1, p.ellipse = p.circle, t.marker && g(t.borderRadius) && (t.marker.r = t.borderRadius)
            }
            markerAttribs(t, e) {
                let s = t.shapeArgs || {};
                if (t.hasImage) return {
                    x: t.plotX,
                    y: t.plotY
                };
                if (e && "normal" !== e) {
                    let i = t.options.marker || {},
                        o = this.options.marker || {},
                        r = o.states && o.states[e] || {},
                        l = i.states && i.states[e] || {},
                        a = (l.width || r.width || s.width || 0) + (l.widthPlus || r.widthPlus || 0),
                        n = (l.height || r.height || s.height || 0) + (l.heightPlus || r.heightPlus || 0);
                    return {
                        x: (s.x || 0) + ((s.width || 0) - a) / 2,
                        y: (s.y || 0) + ((s.height || 0) - n) / 2,
                        width: a,
                        height: n
                    }
                }
                return s
            }
            pointAttribs(e, s) {
                let i = n.prototype.pointAttribs.call(this, e, s),
                    o = this.options || {},
                    r = this.chart.options.plotOptions || {},
                    l = r.series || {},
                    a = r.heatmap || {},
                    h = e && e.options.borderColor || o.borderColor || a.borderColor || l.borderColor,
                    d = e && e.options.borderWidth || o.borderWidth || a.borderWidth || l.borderWidth || i["stroke-width"];
                if (i.stroke = e && e.marker && e.marker.lineColor || o.marker && o.marker.lineColor || h || this.color, i["stroke-width"] = d, s && "normal" !== s) {
                    let r = f(o.states && o.states[s], o.marker && o.marker.states && o.marker.states[s], e && e.options.states && e.options.states[s] || {});
                    i.fill = r.color || t.parse(i.fill).brighten(r.brightness || 0).get(), i.stroke = r.lineColor || i.stroke
                }
                return i
            }
            translate() {
                let {
                    borderRadius: t,
                    marker: e
                } = this.options, s = e && e.symbol || "rect", i = p[s] ? s : "rect", o = -1 !== ["circle", "square"].indexOf(i);
                for (let e of (this.generatePoints(), this.points)) {
                    let r = e.getCellAttributes(),
                        l = Math.min(r.x1, r.x2),
                        a = Math.min(r.y1, r.y2),
                        n = Math.max(Math.abs(r.x2 - r.x1), 0),
                        h = Math.max(Math.abs(r.y2 - r.y1), 0);
                    if (e.hasImage = 0 === (e.marker && e.marker.symbol || s || "").indexOf("url"), o) {
                        let t = Math.abs(n - h);
                        l = Math.min(r.x1, r.x2) + (n < h ? 0 : t / 2), a = Math.min(r.y1, r.y2) + (n < h ? t / 2 : 0), n = h = Math.min(n, h)
                    }
                    e.hasImage && (e.marker = {
                        width: n,
                        height: h
                    }), e.plotX = e.clientX = (r.x1 + r.x2) / 2, e.plotY = (r.y1 + r.y2) / 2, e.shapeType = "path", e.shapeArgs = f(!0, {
                        x: l,
                        y: a,
                        width: n,
                        height: h
                    }, {
                        d: p[i](l, a, n, h, {
                            r: g(t) ? t : 0
                        })
                    })
                }
                m(this, "afterTranslate")
            }
        }
        return b.defaultOptions = f(d.defaultOptions, i), c(b, "afterDataClassLegendClick", function() {
            this.isDirtyCanvas = !0, this.drawPoints()
        }), u(b.prototype, {
            axisTypes: e.seriesMembers.axisTypes,
            colorKey: e.seriesMembers.colorKey,
            directTouch: !0,
            getExtremesFromAll: !0,
            parallelArrays: e.seriesMembers.parallelArrays,
            pointArrayMap: ["y", "value"],
            pointClass: s,
            specialGroup: "group",
            trackerGroups: e.seriesMembers.trackerGroups,
            alignDataLabel: h.prototype.alignDataLabel,
            colorAttribs: e.seriesMembers.colorAttribs,
            getSymbol: n.prototype.getSymbol
        }), e.compose(b), o.registerSeriesType("heatmap", b), b
    }), s(e, "masters/modules/heatmap.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
});