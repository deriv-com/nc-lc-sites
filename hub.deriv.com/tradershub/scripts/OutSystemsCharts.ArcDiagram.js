!
/**
 * Highcharts JS v11.4.8 (2024-08-29)
 *
 * Arc diagram module
 *
 * (c) 2021 Piotr Madej
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("modules/arc-diagram", ["highcharts/modules/sankey"], function(e) {
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
    i(e, "Series/ArcDiagram/ArcDiagramPoint.js", [e["Series/NodesComposition.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i) {
        let {
            seriesTypes: {
                sankey: {
                    prototype: {
                        pointClass: s
                    }
                }
            }
        } = e, {
            extend: r
        } = i;
        class o extends s {
            isValid() {
                return !0
            }
        }
        return r(o.prototype, {
            setState: t.setNodeState
        }), o
    }), i(e, "Series/ArcDiagram/ArcDiagramSeriesDefaults.js", [], function() {
        return {
            centeredLinks: !1,
            equalNodes: !1,
            dataLabels: {
                linkTextPath: {
                    attributes: {
                        startOffset: "25%"
                    }
                }
            },
            marker: {
                fillOpacity: 1,
                lineWidth: 0,
                states: {},
                symbol: "circle"
            },
            offset: "100%",
            reversed: !1
        }
    }), i(e, "Core/Foundation.js", [e["Core/Utilities.js"]], function(t) {
        var e;
        let {
            addEvent: i,
            isFunction: s,
            objectEach: r,
            removeEvent: o
        } = t;
        return (e || (e = {})).registerEventOptions = function(t, e) {
            t.eventOptions = t.eventOptions || {}, r(e.events, function(e, r) {
                t.eventOptions[r] !== e && (t.eventOptions[r] && (o(t, r, t.eventOptions[r]), delete t.eventOptions[r]), s(e) && (t.eventOptions[r] = e, i(t, r, e, {
                    order: 0
                })))
            })
        }, e
    }), i(e, "Core/Legend/LegendSymbol.js", [e["Core/Utilities.js"]], function(t) {
        var e;
        let {
            extend: i,
            merge: s,
            pick: r
        } = t;
        return function(t) {
            function e(t, e, o) {
                let a = this.legendItem = this.legendItem || {},
                    {
                        chart: n,
                        options: h
                    } = this,
                    {
                        baseline: l = 0,
                        symbolWidth: d,
                        symbolHeight: p
                    } = t,
                    c = this.symbol || "circle",
                    u = p / 2,
                    g = n.renderer,
                    f = a.group,
                    m = l - Math.round((t.fontMetrics?.b || p) * (o ? .4 : .3)),
                    y = {},
                    x, b = h.marker,
                    S = 0;
                if (n.styledMode || (y["stroke-width"] = Math.min(h.lineWidth || 0, 24), h.dashStyle ? y.dashstyle = h.dashStyle : "square" === h.linecap || (y["stroke-linecap"] = "round")), a.line = g.path().addClass("highcharts-graph").attr(y).add(f), o && (a.area = g.path().addClass("highcharts-area").add(f)), y["stroke-linecap"] && (S = Math.min(a.line.strokeWidth(), d) / 2), d) {
                    let t = [
                        ["M", S, m],
                        ["L", d - S, m]
                    ];
                    a.line.attr({
                        d: t
                    }), a.area?.attr({
                        d: [...t, ["L", d - S, l],
                            ["L", S, l]
                        ]
                    })
                }
                if (b && !1 !== b.enabled && d) {
                    let t = Math.min(r(b.radius, u), u);
                    0 === c.indexOf("url") && (b = s(b, {
                        width: p,
                        height: p
                    }), t = 0), a.symbol = x = g.symbol(c, d / 2 - t, m - t, 2 * t, 2 * t, i({
                        context: "legend"
                    }, b)).addClass("highcharts-point").add(f), x.isMarker = !0
                }
            }
            t.areaMarker = function(t, i) {
                e.call(this, t, i, !0)
            }, t.lineMarker = e, t.rectangle = function(t, e) {
                let i = e.legendItem || {},
                    s = t.options,
                    o = t.symbolHeight,
                    a = s.squareSymbol,
                    n = a ? o : t.symbolWidth;
                i.symbol = this.chart.renderer.rect(a ? (t.symbolWidth - o) / 2 : 0, t.baseline - o + 1, n, o, r(t.options.symbolRadius, o / 2)).addClass("highcharts-point").attr({
                    zIndex: 3
                }).add(i.group)
            }
        }(e || (e = {})), e
    }), i(e, "Core/Series/SeriesDefaults.js", [], function() {
        return {
            lineWidth: 2,
            allowPointSelect: !1,
            crisp: !0,
            showCheckbox: !1,
            animation: {
                duration: 1e3
            },
            enableMouseTracking: !0,
            events: {},
            marker: {
                enabledThreshold: 2,
                lineColor: "#ffffff",
                lineWidth: 0,
                radius: 4,
                states: {
                    normal: {
                        animation: !0
                    },
                    hover: {
                        animation: {
                            duration: 150
                        },
                        enabled: !0,
                        radiusPlus: 2,
                        lineWidthPlus: 1
                    },
                    select: {
                        fillColor: "#cccccc",
                        lineColor: "#000000",
                        lineWidth: 2
                    }
                }
            },
            point: {
                events: {}
            },
            dataLabels: {
                animation: {},
                align: "center",
                borderWidth: 0,
                defer: !0,
                formatter: function() {
                    let {
                        numberFormatter: t
                    } = this.series.chart;
                    return "number" != typeof this.y ? "" : t(this.y, -1)
                },
                padding: 5,
                style: {
                    fontSize: "0.7em",
                    fontWeight: "bold",
                    color: "contrast",
                    textOutline: "1px contrast"
                },
                verticalAlign: "bottom",
                x: 0,
                y: 0
            },
            cropThreshold: 300,
            opacity: 1,
            pointRange: 0,
            softThreshold: !0,
            states: {
                normal: {
                    animation: !0
                },
                hover: {
                    animation: {
                        duration: 150
                    },
                    lineWidthPlus: 1,
                    marker: {},
                    halo: {
                        size: 10,
                        opacity: .25
                    }
                },
                select: {
                    animation: {
                        duration: 0
                    }
                },
                inactive: {
                    animation: {
                        duration: 150
                    },
                    opacity: .2
                }
            },
            stickyTracking: !0,
            turboThreshold: 1e3,
            findNearestPointBy: "x"
        }
    }), i(e, "Core/Series/Series.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/Point.js"], e["Core/Series/SeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t, e, i, s, r, o, a, n, h, l) {
        let {
            animObject: d,
            setAnimation: p
        } = t, {
            defaultOptions: c
        } = e, {
            registerEventOptions: u
        } = i, {
            svg: g,
            win: f
        } = s, {
            seriesTypes: m
        } = n, {
            arrayMax: y,
            arrayMin: x,
            clamp: b,
            correctFloat: S,
            crisp: v,
            defined: C,
            destroyObjectProperties: k,
            diffObjects: A,
            erase: D,
            error: w,
            extend: M,
            find: L,
            fireEvent: O,
            getClosestDistance: T,
            getNestedProperty: P,
            insertItem: E,
            isArray: B,
            isNumber: j,
            isString: R,
            merge: I,
            objectEach: W,
            pick: G,
            removeEvent: N,
            splat: X,
            syncTimeout: z
        } = l;
        class V {
            constructor() {
                this.zoneAxis = "y"
            }
            init(t, e) {
                let i;
                O(this, "init", {
                    options: e
                });
                let s = this,
                    r = t.series;
                this.eventsToUnbind = [], s.chart = t, s.options = s.setOptions(e);
                let o = s.options,
                    a = !1 !== o.visible;
                s.linkedSeries = [], s.bindAxes(), M(s, {
                    name: o.name,
                    state: "",
                    visible: a,
                    selected: !0 === o.selected
                }), u(this, o);
                let n = o.events;
                (n && n.click || o.point && o.point.events && o.point.events.click || o.allowPointSelect) && (t.runTrackerClick = !0), s.getColor(), s.getSymbol(), s.parallelArrays.forEach(function(t) {
                    s[t + "Data"] || (s[t + "Data"] = [])
                }), s.isCartesian && (t.hasCartesianSeries = !0), r.length && (i = r[r.length - 1]), s._i = G(i && i._i, -1) + 1, s.opacity = s.options.opacity, t.orderItems("series", E(this, r)), o.dataSorting && o.dataSorting.enabled ? s.setDataSortingOptions() : s.points || s.data || s.setData(o.data, !1), O(this, "afterInit")
            }
            is(t) {
                return m[t] && this instanceof m[t]
            }
            bindAxes() {
                let t;
                let e = this,
                    i = e.options,
                    s = e.chart;
                O(this, "bindAxes", null, function() {
                    (e.axisTypes || []).forEach(function(r) {
                        (s[r] || []).forEach(function(s) {
                            t = s.options, (G(i[r], 0) === s.index || void 0 !== i[r] && i[r] === t.id) && (E(e, s.series), e[r] = s, s.isDirty = !0)
                        }), e[r] || e.optionalAxis === r || w(18, !0, s)
                    })
                }), O(this, "afterBindAxes")
            }
            updateParallelArrays(t, e, i) {
                let s = t.series,
                    r = j(e) ? function(i) {
                        let r = "y" === i && s.toYData ? s.toYData(t) : t[i];
                        s[i + "Data"][e] = r
                    } : function(t) {
                        Array.prototype[e].apply(s[t + "Data"], i)
                    };
                s.parallelArrays.forEach(r)
            }
            hasData() {
                return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.yData && this.yData.length > 0
            }
            hasMarkerChanged(t, e) {
                let i = t.marker,
                    s = e.marker || {};
                return i && (s.enabled && !i.enabled || s.symbol !== i.symbol || s.height !== i.height || s.width !== i.width)
            }
            autoIncrement(t) {
                let e = this.options,
                    i = e.pointIntervalUnit,
                    s = e.relativeXValue,
                    r = this.chart.time,
                    o = this.xIncrement,
                    a, n;
                return (o = G(o, e.pointStart, 0), this.pointInterval = n = G(this.pointInterval, e.pointInterval, 1), s && j(t) && (n *= t), i && (a = new r.Date(o), "day" === i ? r.set("Date", a, r.get("Date", a) + n) : "month" === i ? r.set("Month", a, r.get("Month", a) + n) : "year" === i && r.set("FullYear", a, r.get("FullYear", a) + n), n = a.getTime() - o), s && j(t)) ? o + n : (this.xIncrement = o + n, o)
            }
            setDataSortingOptions() {
                let t = this.options;
                M(this, {
                    requireSorting: !1,
                    sorted: !1,
                    enabledDataSorting: !0,
                    allowDG: !1
                }), C(t.pointRange) || (t.pointRange = 1)
            }
            setOptions(t) {
                let e;
                let i = this.chart,
                    s = i.options.plotOptions,
                    r = i.userOptions || {},
                    o = I(t),
                    a = i.styledMode,
                    n = {
                        plotOptions: s,
                        userOptions: o
                    };
                O(this, "setOptions", n);
                let h = n.plotOptions[this.type],
                    l = r.plotOptions || {},
                    d = l.series || {},
                    p = c.plotOptions[this.type] || {},
                    u = l[this.type] || {};
                this.userOptions = n.userOptions;
                let g = I(h, s.series, u, o);
                this.tooltipOptions = I(c.tooltip, c.plotOptions.series?.tooltip, p?.tooltip, i.userOptions.tooltip, l.series?.tooltip, u.tooltip, o.tooltip), this.stickyTracking = G(o.stickyTracking, u.stickyTracking, d.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || g.stickyTracking), null === h.marker && delete g.marker, this.zoneAxis = g.zoneAxis || "y";
                let f = this.zones = (g.zones || []).map(t => ({
                    ...t
                }));
                return (g.negativeColor || g.negativeFillColor) && !g.zones && (e = {
                    value: g[this.zoneAxis + "Threshold"] || g.threshold || 0,
                    className: "highcharts-negative"
                }, a || (e.color = g.negativeColor, e.fillColor = g.negativeFillColor), f.push(e)), f.length && C(f[f.length - 1].value) && f.push(a ? {} : {
                    color: this.color,
                    fillColor: this.fillColor
                }), O(this, "afterSetOptions", {
                    options: g
                }), g
            }
            getName() {
                return G(this.options.name, "Series " + (this.index + 1))
            }
            getCyclic(t, e, i) {
                let s, r;
                let o = this.chart,
                    a = `${t}Index`,
                    n = `${t}Counter`,
                    h = i?.length || o.options.chart.colorCount;
                !e && (C(r = G("color" === t ? this.options.colorIndex : void 0, this[a])) ? s = r : (o.series.length || (o[n] = 0), s = o[n] % h, o[n] += 1), i && (e = i[s])), void 0 !== s && (this[a] = s), this[t] = e
            }
            getColor() {
                this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || c.plotOptions[this.type].color, this.chart.options.colors)
            }
            getPointsCollection() {
                return (this.hasGroupedData ? this.points : this.data) || []
            }
            getSymbol() {
                let t = this.options.marker;
                this.getCyclic("symbol", t.symbol, this.chart.options.symbols)
            }
            findPointIndex(t, e) {
                let i, s, r;
                let a = t.id,
                    n = t.x,
                    h = this.points,
                    l = this.options.dataSorting;
                if (a) {
                    let t = this.chart.get(a);
                    t instanceof o && (i = t)
                } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
                    let e = e => !e.touched && e.index === t.index;
                    if (l && l.matchByName ? e = e => !e.touched && e.name === t.name : this.options.relativeXValue && (e = e => !e.touched && e.options.x === t.x), !(i = L(h, e))) return
                }
                return i && void 0 !== (r = i && i.index) && (s = !0), void 0 === r && j(n) && (r = this.xData.indexOf(n, e)), -1 !== r && void 0 !== r && this.cropped && (r = r >= this.cropStart ? r - this.cropStart : r), !s && j(r) && h[r] && h[r].touched && (r = void 0), r
            }
            updateData(t, e) {
                let i = this.options,
                    s = i.dataSorting,
                    r = this.points,
                    o = [],
                    a = this.requireSorting,
                    n = t.length === r.length,
                    h, l, d, p, c = !0;
                if (this.xIncrement = null, t.forEach(function(t, e) {
                        let l;
                        let d = C(t) && this.pointClass.prototype.optionsToObject.call({
                                series: this
                            }, t) || {},
                            c = d.x;
                        d.id || j(c) ? (-1 === (l = this.findPointIndex(d, p)) || void 0 === l ? o.push(t) : r[l] && t !== i.data[l] ? (r[l].update(t, !1, null, !1), r[l].touched = !0, a && (p = l + 1)) : r[l] && (r[l].touched = !0), (!n || e !== l || s && s.enabled || this.hasDerivedData) && (h = !0)) : o.push(t)
                    }, this), h)
                    for (l = r.length; l--;)(d = r[l]) && !d.touched && d.remove && d.remove(!1, e);
                else !n || s && s.enabled ? c = !1 : (t.forEach(function(t, e) {
                    t === r[e].y || r[e].destroyed || r[e].update(t, !1, null, !1)
                }), o.length = 0);
                return r.forEach(function(t) {
                    t && (t.touched = !1)
                }), !!c && (o.forEach(function(t) {
                    this.addPoint(t, !1, null, null, !1)
                }, this), null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = y(this.xData), this.autoIncrement()), !0)
            }
            setData(t, e = !0, i, s) {
                let r = this,
                    o = r.points,
                    a = o && o.length || 0,
                    n = r.options,
                    h = r.chart,
                    l = n.dataSorting,
                    d = r.xAxis,
                    p = n.turboThreshold,
                    c = this.xData,
                    u = this.yData,
                    g = r.pointArrayMap,
                    f = g && g.length,
                    m = n.keys,
                    y, x, b, S = 0,
                    v = 1,
                    C;
                h.options.chart.allowMutatingData || (n.data && delete r.options.data, r.userOptions.data && delete r.userOptions.data, C = I(!0, t));
                let k = (t = C || t || []).length;
                if (l && l.enabled && (t = this.sortData(t)), h.options.chart.allowMutatingData && !1 !== s && k && a && !r.cropped && !r.hasGroupedData && r.visible && !r.boosted && (b = this.updateData(t, i)), !b) {
                    r.xIncrement = null, r.colorCounter = 0, this.parallelArrays.forEach(function(t) {
                        r[t + "Data"].length = 0
                    });
                    let e = p && k > p;
                    if (e) {
                        let i = r.getFirstValidPoint(t),
                            s = r.getFirstValidPoint(t, k - 1, -1),
                            o = t => !!(B(t) && (m || j(t[0])));
                        if (j(i) && j(s))
                            for (y = 0; y < k; y++) c[y] = this.autoIncrement(), u[y] = t[y];
                        else if (o(i) && o(s)) {
                            if (f) {
                                if (i.length === f)
                                    for (y = 0; y < k; y++) c[y] = this.autoIncrement(), u[y] = t[y];
                                else
                                    for (y = 0; y < k; y++) x = t[y], c[y] = x[0], u[y] = x.slice(1, f + 1)
                            } else if (m && (S = m.indexOf("x"), v = m.indexOf("y"), S = S >= 0 ? S : 0, v = v >= 0 ? v : 1), 1 === i.length && (v = 0), S === v)
                                for (y = 0; y < k; y++) c[y] = this.autoIncrement(), u[y] = t[y][v];
                            else
                                for (y = 0; y < k; y++) x = t[y], c[y] = x[S], u[y] = x[v]
                        } else e = !1
                    }
                    if (!e)
                        for (y = 0; y < k; y++) x = {
                            series: r
                        }, r.pointClass.prototype.applyOptions.apply(x, [t[y]]), r.updateParallelArrays(x, y);
                    for (u && R(u[0]) && w(14, !0, h), r.data = [], r.options.data = r.userOptions.data = t, y = a; y--;) o[y]?.destroy();
                    d && (d.minRange = d.userMinRange), r.isDirty = h.isDirtyBox = !0, r.isDirtyData = !!o, i = !1
                }
                "point" === n.legendType && (this.processData(), this.generatePoints()), e && h.redraw(i)
            }
            sortData(t) {
                let e = this,
                    i = e.options.dataSorting.sortKey || "y",
                    s = function(t, e) {
                        return C(e) && t.pointClass.prototype.optionsToObject.call({
                            series: t
                        }, e) || {}
                    };
                return t.forEach(function(i, r) {
                    t[r] = s(e, i), t[r].index = r
                }, this), t.concat().sort((t, e) => {
                    let s = P(i, t),
                        r = P(i, e);
                    return r < s ? -1 : r > s ? 1 : 0
                }).forEach(function(t, e) {
                    t.x = e
                }, this), e.linkedSeries && e.linkedSeries.forEach(function(e) {
                    let i = e.options,
                        r = i.data;
                    i.dataSorting && i.dataSorting.enabled || !r || (r.forEach(function(i, o) {
                        r[o] = s(e, i), t[o] && (r[o].x = t[o].x, r[o].index = o)
                    }), e.setData(r, !1))
                }), t
            }
            getProcessedData(t) {
                let e = this,
                    i = e.xAxis,
                    s = e.options.cropThreshold,
                    r = i?.logarithmic,
                    o = e.isCartesian,
                    a, n, h = 0,
                    l, d, p, c = e.xData,
                    u = e.yData,
                    g = !1,
                    f = c.length;
                i && (d = (l = i.getExtremes()).min, p = l.max, g = !!(i.categories && !i.names.length)), o && e.sorted && !t && (!s || f > s || e.forceCrop) && (c[f - 1] < d || c[0] > p ? (c = [], u = []) : e.yData && (c[0] < d || c[f - 1] > p) && (c = (a = this.cropData(e.xData, e.yData, d, p)).xData, u = a.yData, h = a.start, n = !0));
                let m = T([r ? c.map(r.log2lin) : c], () => e.requireSorting && !g && w(15, !1, e.chart));
                return {
                    xData: c,
                    yData: u,
                    cropped: n,
                    cropStart: h,
                    closestPointRange: m
                }
            }
            processData(t) {
                let e = this.xAxis;
                if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t) return !1;
                let i = this.getProcessedData();
                this.cropped = i.cropped, this.cropStart = i.cropStart, this.processedXData = i.xData, this.processedYData = i.yData, this.closestPointRange = this.basePointRange = i.closestPointRange, O(this, "afterProcessData")
            }
            cropData(t, e, i, s) {
                let r = t.length,
                    o, a, n = 0,
                    h = r;
                for (o = 0; o < r; o++)
                    if (t[o] >= i) {
                        n = Math.max(0, o - 1);
                        break
                    } for (a = o; a < r; a++)
                    if (t[a] > s) {
                        h = a + 1;
                        break
                    } return {
                    xData: t.slice(n, h),
                    yData: e.slice(n, h),
                    start: n,
                    end: h
                }
            }
            generatePoints() {
                let t = this.options,
                    e = this.processedData || t.data,
                    i = this.processedXData,
                    s = this.processedYData,
                    r = this.pointClass,
                    o = i.length,
                    a = this.cropStart || 0,
                    n = this.hasGroupedData,
                    h = t.keys,
                    l = [],
                    d = t.dataGrouping && t.dataGrouping.groupAll ? a : 0,
                    p, c, u, g, f = this.data;
                if (!f && !n) {
                    let t = [];
                    t.length = e.length, f = this.data = t
                }
                for (h && n && (this.options.keys = !1), g = 0; g < o; g++) c = a + g, n ? ((u = new r(this, [i[g]].concat(X(s[g])))).dataGroup = this.groupMap[d + g], u.dataGroup.options && (u.options = u.dataGroup.options, M(u, u.dataGroup.options), delete u.dataLabels)) : (u = f[c]) || void 0 === e[c] || (f[c] = u = new r(this, e[c], i[g])), u && (u.index = n ? d + g : c, l[g] = u);
                if (this.options.keys = h, f && (o !== (p = f.length) || n))
                    for (g = 0; g < p; g++) g !== a || n || (g += o), f[g] && (f[g].destroyElements(), f[g].plotX = void 0);
                this.data = f, this.points = l, O(this, "afterGeneratePoints")
            }
            getXExtremes(t) {
                return {
                    min: x(t),
                    max: y(t)
                }
            }
            getExtremes(t, e) {
                let i = this.xAxis,
                    s = this.yAxis,
                    r = [],
                    o = this.requireSorting && !this.is("column") ? 1 : 0,
                    a = !!s && s.positiveValuesOnly,
                    n = e || this.getExtremesFromAll || this.options.getExtremesFromAll,
                    {
                        processedXData: h,
                        processedYData: l
                    } = this,
                    d, p, c, u, g, f, m, b = 0,
                    S = 0,
                    v = 0;
                if (this.cropped && n) {
                    let t = this.getProcessedData(!0);
                    h = t.xData, l = t.yData
                }
                let C = (t = t || this.stackedYData || l || []).length,
                    k = h || this.xData;
                for (i && (b = (d = i.getExtremes()).min, S = d.max), f = 0; f < C; f++)
                    if (u = k[f], p = (j(g = t[f]) || B(g)) && ((j(g) ? g > 0 : g.length) || !a), c = e || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !i || (k[f + o] || u) >= b && (k[f - o] || u) <= S, p && c) {
                        if (m = g.length)
                            for (; m--;) j(g[m]) && (r[v++] = g[m]);
                        else r[v++] = g
                    } let A = {
                    activeYData: r,
                    dataMin: x(r),
                    dataMax: y(r)
                };
                return O(this, "afterGetExtremes", {
                    dataExtremes: A
                }), A
            }
            applyExtremes() {
                let t = this.getExtremes();
                return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t
            }
            getFirstValidPoint(t, e = 0, i = 1) {
                let s = t.length,
                    r = e;
                for (; r >= 0 && r < s;) {
                    if (C(t[r])) return t[r];
                    r += i
                }
            }
            translate() {
                this.processedXData || this.processData(), this.generatePoints();
                let t = this.options,
                    e = t.stacking,
                    i = this.xAxis,
                    s = i.categories,
                    r = this.enabledDataSorting,
                    o = this.yAxis,
                    a = this.points,
                    n = a.length,
                    h = this.pointPlacementToXValue(),
                    l = !!h,
                    d = t.threshold,
                    p = t.startFromThreshold ? d : 0,
                    c, u, g, f, m = Number.MAX_VALUE;

                function y(t) {
                    return b(t, -1e9, 1e9)
                }
                for (c = 0; c < n; c++) {
                    let t;
                    let n = a[c],
                        x = n.x,
                        b, v, k = n.y,
                        A = n.low,
                        D = e && o.stacking?.stacks[(this.negStacks && k < (p ? 0 : d) ? "-" : "") + this.stackKey];
                    u = i.translate(x, !1, !1, !1, !0, h), n.plotX = j(u) ? S(y(u)) : void 0, e && this.visible && D && D[x] && (f = this.getStackIndicator(f, x, this.index), !n.isNull && f.key && (v = (b = D[x]).points[f.key]), b && B(v) && (A = v[0], k = v[1], A === p && f.key === D[x].base && (A = G(j(d) ? d : o.min)), o.positiveValuesOnly && C(A) && A <= 0 && (A = void 0), n.total = n.stackTotal = G(b.total), n.percentage = C(n.y) && b.total ? n.y / b.total * 100 : void 0, n.stackY = k, this.irregularWidths || b.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), n.yBottom = C(A) ? y(o.translate(A, !1, !0, !1, !0)) : void 0, this.dataModify && (k = this.dataModify.modifyValue(k, c)), j(k) && void 0 !== n.plotX && (t = j(t = o.translate(k, !1, !0, !1, !0)) ? y(t) : void 0), n.plotY = t, n.isInside = this.isPointInside(n), n.clientX = l ? S(i.translate(x, !1, !1, !1, !0, h)) : u, n.negative = (n.y || 0) < (d || 0), n.category = G(s && s[n.x], n.x), n.isNull || !1 === n.visible || (void 0 !== g && (m = Math.min(m, Math.abs(u - g))), g = u), n.zone = this.zones.length ? n.getZone() : void 0, !n.graphic && this.group && r && (n.isNew = !0)
                }
                this.closestPointRangePx = m, O(this, "afterTranslate")
            }
            getValidPoints(t, e, i) {
                let s = this.chart;
                return (t || this.points || []).filter(function(t) {
                    let {
                        plotX: r,
                        plotY: o
                    } = t;
                    return !!((i || !t.isNull && j(o)) && (!e || s.isInsidePlot(r, o, {
                        inverted: s.inverted
                    }))) && !1 !== t.visible
                })
            }
            getClipBox() {
                let {
                    chart: t,
                    xAxis: e,
                    yAxis: i
                } = this, {
                    x: s,
                    y: r,
                    width: o,
                    height: a
                } = I(t.clipBox);
                return e && e.len !== t.plotSizeX && (o = e.len), i && i.len !== t.plotSizeY && (a = i.len), t.inverted && !this.invertible && ([o, a] = [a, o]), {
                    x: s,
                    y: r,
                    width: o,
                    height: a
                }
            }
            getSharedClipKey() {
                return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey
            }
            setClip() {
                let {
                    chart: t,
                    group: e,
                    markerGroup: i
                } = this, s = t.sharedClips, r = t.renderer, o = this.getClipBox(), a = this.getSharedClipKey(), n = s[a];
                n ? n.animate(o) : s[a] = n = r.clipRect(o), e && e.clip(!1 === this.options.clip ? void 0 : n), i && i.clip()
            }
            animate(t) {
                let {
                    chart: e,
                    group: i,
                    markerGroup: s
                } = this, r = e.inverted, o = d(this.options.animation), a = [this.getSharedClipKey(), o.duration, o.easing, o.defer].join(","), n = e.sharedClips[a], h = e.sharedClips[a + "m"];
                if (t && i) {
                    let t = this.getClipBox();
                    if (n) n.attr("height", t.height);
                    else {
                        t.width = 0, r && (t.x = e.plotHeight), n = e.renderer.clipRect(t), e.sharedClips[a] = n;
                        let i = {
                            x: -99,
                            y: -99,
                            width: r ? e.plotWidth + 199 : 99,
                            height: r ? 99 : e.plotHeight + 199
                        };
                        h = e.renderer.clipRect(i), e.sharedClips[a + "m"] = h
                    }
                    i.clip(n), s?.clip(h)
                } else if (n && !n.hasClass("highcharts-animating")) {
                    let t = this.getClipBox(),
                        i = o.step;
                    (s?.element.childNodes.length || e.series.length > 1) && (o.step = function(t, e) {
                        i && i.apply(e, arguments), "width" === e.prop && h?.element && h.attr(r ? "height" : "width", t + 99)
                    }), n.addClass("highcharts-animating").animate(t, o)
                }
            }
            afterAnimate() {
                this.setClip(), W(this.chart.sharedClips, (t, e, i) => {
                    t && !this.chart.container.querySelector(`[clip-path="url(#${t.id})"]`) && (t.destroy(), delete i[e])
                }), this.finishedAnimating = !0, O(this, "afterAnimate")
            }
            drawPoints(t = this.points) {
                let e, i, s, r, o, a, n;
                let h = this.chart,
                    l = h.styledMode,
                    {
                        colorAxis: d,
                        options: p
                    } = this,
                    c = p.marker,
                    u = this[this.specialGroup || "markerGroup"],
                    g = this.xAxis,
                    f = G(c.enabled, !g || !!g.isRadial || null, this.closestPointRangePx >= c.enabledThreshold * c.radius);
                if (!1 !== c.enabled || this._hasPointMarkers)
                    for (e = 0; e < t.length; e++)
                        if (r = (s = (i = t[e]).graphic) ? "animate" : "attr", o = i.marker || {}, a = !!i.marker, (f && void 0 === o.enabled || o.enabled) && !i.isNull && !1 !== i.visible) {
                            let t = G(o.symbol, this.symbol, "rect");
                            n = this.markerAttribs(i, i.selected && "select"), this.enabledDataSorting && (i.startXPos = g.reversed ? -(n.width || 0) : g.width);
                            let e = !1 !== i.isInside;
                            if (!s && e && ((n.width || 0) > 0 || i.hasImage) && (i.graphic = s = h.renderer.symbol(t, n.x, n.y, n.width, n.height, a ? o : c).add(u), this.enabledDataSorting && h.hasRendered && (s.attr({
                                    x: i.startXPos
                                }), r = "animate")), s && "animate" === r && s[e ? "show" : "hide"](e).animate(n), s) {
                                let t = this.pointAttribs(i, l || !i.selected ? void 0 : "select");
                                l ? d && s.css({
                                    fill: t.fill
                                }) : s[r](t)
                            }
                            s && s.addClass(i.getClassName(), !0)
                        } else s && (i.graphic = s.destroy())
            }
            markerAttribs(t, e) {
                let i = this.options,
                    s = i.marker,
                    r = t.marker || {},
                    o = r.symbol || s.symbol,
                    a = {},
                    n, h, l = G(r.radius, s && s.radius);
                e && (n = s.states[e], l = G((h = r.states && r.states[e]) && h.radius, n && n.radius, l && l + (n && n.radiusPlus || 0))), t.hasImage = o && 0 === o.indexOf("url"), t.hasImage && (l = 0);
                let d = t.pos();
                return j(l) && d && (i.crisp && (d[0] = v(d[0], t.hasImage ? 0 : "rect" === o ? s?.lineWidth || 0 : 1)), a.x = d[0] - l, a.y = d[1] - l), l && (a.width = a.height = 2 * l), a
            }
            pointAttribs(t, e) {
                let i = this.options.marker,
                    s = t && t.options,
                    r = s && s.marker || {},
                    o = s && s.color,
                    a = t && t.color,
                    n = t && t.zone && t.zone.color,
                    h, l, d = this.color,
                    p, c, u = G(r.lineWidth, i.lineWidth),
                    g = 1;
                return d = o || n || a || d, p = r.fillColor || i.fillColor || d, c = r.lineColor || i.lineColor || d, e = e || "normal", h = i.states[e] || {}, u = G((l = r.states && r.states[e] || {}).lineWidth, h.lineWidth, u + G(l.lineWidthPlus, h.lineWidthPlus, 0)), p = l.fillColor || h.fillColor || p, {
                    stroke: c = l.lineColor || h.lineColor || c,
                    "stroke-width": u,
                    fill: p,
                    opacity: g = G(l.opacity, h.opacity, g)
                }
            }
            destroy(t) {
                let e, i, s;
                let r = this,
                    o = r.chart,
                    a = /AppleWebKit\/533/.test(f.navigator.userAgent),
                    n = r.data || [];
                for (O(r, "destroy", {
                        keepEventsForUpdate: t
                    }), this.removeEvents(t), (r.axisTypes || []).forEach(function(t) {
                        (s = r[t]) && s.series && (D(s.series, r), s.isDirty = s.forceRedraw = !0)
                    }), r.legendItem && r.chart.legend.destroyItem(r), e = n.length; e--;)(i = n[e]) && i.destroy && i.destroy();
                for (let t of r.zones) k(t, void 0, !0);
                l.clearTimeout(r.animationTimeout), W(r, function(t, e) {
                    t instanceof h && !t.survive && t[a && "group" === e ? "hide" : "destroy"]()
                }), o.hoverSeries === r && (o.hoverSeries = void 0), D(o.series, r), o.orderItems("series"), W(r, function(e, i) {
                    t && "hcEvents" === i || delete r[i]
                })
            }
            applyZones() {
                let {
                    area: t,
                    chart: e,
                    graph: i,
                    zones: s,
                    points: r,
                    xAxis: o,
                    yAxis: a,
                    zoneAxis: n
                } = this, {
                    inverted: h,
                    renderer: l
                } = e, d = this[`${n}Axis`], {
                    isXAxis: p,
                    len: c = 0
                } = d || {}, u = (i?.strokeWidth() || 0) / 2 + 1, g = (t, e = 0, i = 0) => {
                    h && (i = c - i);
                    let {
                        translated: s = 0,
                        lineClip: r
                    } = t, o = i - s;
                    r?.push(["L", e, Math.abs(o) < u ? i - u * (o <= 0 ? -1 : 1) : s])
                };
                if (s.length && (i || t) && d && j(d.min)) {
                    let e = d.getExtremes().max,
                        u = t => {
                            t.forEach((e, i) => {
                                ("M" === e[0] || "L" === e[0]) && (t[i] = [e[0], p ? c - e[1] : e[1], p ? e[2] : c - e[2]])
                            })
                        };
                    if (s.forEach(t => {
                            t.lineClip = [], t.translated = b(d.toPixels(G(t.value, e), !0) || 0, 0, c)
                        }), i && !this.showLine && i.hide(), t && t.hide(), "y" === n && r.length < o.len)
                        for (let t of r) {
                            let {
                                plotX: e,
                                plotY: i,
                                zone: r
                            } = t, o = r && s[s.indexOf(r) - 1];
                            r && g(r, e, i), o && g(o, e, i)
                        }
                    let f = [],
                        m = d.toPixels(d.getExtremes().min, !0);
                    s.forEach(e => {
                        let s = e.lineClip || [],
                            r = Math.round(e.translated || 0);
                        o.reversed && s.reverse();
                        let {
                            clip: n,
                            simpleClip: d
                        } = e, c = 0, g = 0, y = o.len, x = a.len;
                        p ? (c = r, y = m) : (g = r, x = m);
                        let b = [
                                ["M", c, g],
                                ["L", y, g],
                                ["L", y, x],
                                ["L", c, x],
                                ["Z"]
                            ],
                            S = [b[0], ...s, b[1], b[2], ...f, b[3], b[4]];
                        f = s.reverse(), m = r, h && (u(S), t && u(b)), n ? (n.animate({
                            d: S
                        }), d?.animate({
                            d: b
                        })) : (n = e.clip = l.path(S), t && (d = e.simpleClip = l.path(b))), i && e.graph?.clip(n), t && e.area?.clip(d)
                    })
                } else this.visible && (i && i.show(), t && t.show())
            }
            plotGroup(t, e, i, s, r) {
                let o = this[t],
                    a = !o,
                    n = {
                        visibility: i,
                        zIndex: s || .1
                    };
                return C(this.opacity) && !this.chart.styledMode && "inactive" !== this.state && (n.opacity = this.opacity), o || (this[t] = o = this.chart.renderer.g().add(r)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (C(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (o.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), o.attr(n)[a ? "attr" : "animate"](this.getPlotBox(e)), o
            }
            getPlotBox(t) {
                let e = this.xAxis,
                    i = this.yAxis,
                    s = this.chart,
                    r = s.inverted && !s.polar && e && this.invertible && "series" === t;
                return s.inverted && (e = i, i = this.xAxis), {
                    translateX: e ? e.left : s.plotLeft,
                    translateY: i ? i.top : s.plotTop,
                    rotation: r ? 90 : 0,
                    rotationOriginX: r ? (e.len - i.len) / 2 : 0,
                    rotationOriginY: r ? (e.len + i.len) / 2 : 0,
                    scaleX: r ? -1 : 1,
                    scaleY: 1
                }
            }
            removeEvents(t) {
                let {
                    eventsToUnbind: e
                } = this;
                t || N(this), e.length && (e.forEach(t => {
                    t()
                }), e.length = 0)
            }
            render() {
                let t = this,
                    {
                        chart: e,
                        options: i,
                        hasRendered: s
                    } = t,
                    r = d(i.animation),
                    o = t.visible ? "inherit" : "hidden",
                    a = i.zIndex,
                    n = e.seriesGroup,
                    h = t.finishedAnimating ? 0 : r.duration;
                O(this, "render"), t.plotGroup("group", "series", o, a, n), t.markerGroup = t.plotGroup("markerGroup", "markers", o, a, n), !1 !== i.clip && t.setClip(), h && t.animate?.(!0), t.drawGraph && (t.drawGraph(), t.applyZones()), t.visible && t.drawPoints(), t.drawDataLabels?.(), t.redrawPoints?.(), i.enableMouseTracking && t.drawTracker?.(), h && t.animate?.(), s || (h && r.defer && (h += r.defer), t.animationTimeout = z(() => {
                    t.afterAnimate()
                }, h || 0)), t.isDirty = !1, t.hasRendered = !0, O(t, "afterRender")
            }
            redraw() {
                let t = this.isDirty || this.isDirtyData;
                this.translate(), this.render(), t && delete this.kdTree
            }
            reserveSpace() {
                return this.visible || !this.chart.options.chart.ignoreHiddenSeries
            }
            searchPoint(t, e) {
                let {
                    xAxis: i,
                    yAxis: s
                } = this, r = this.chart.inverted;
                return this.searchKDTree({
                    clientX: r ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                    plotY: r ? s.len - t.chartX + s.pos : t.chartY - s.pos
                }, e, t)
            }
            buildKDTree(t) {
                this.buildingKdTree = !0;
                let e = this,
                    i = e.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
                delete e.kdTree, z(function() {
                    e.kdTree = function t(i, s, r) {
                        let o, a;
                        let n = i?.length;
                        if (n) return o = e.kdAxisArray[s % r], i.sort((t, e) => (t[o] || 0) - (e[o] || 0)), {
                            point: i[a = Math.floor(n / 2)],
                            left: t(i.slice(0, a), s + 1, r),
                            right: t(i.slice(a + 1), s + 1, r)
                        }
                    }(e.getValidPoints(void 0, !e.directTouch), i, i), e.buildingKdTree = !1
                }, e.options.kdNow || t?.type === "touchstart" ? 0 : 1)
            }
            searchKDTree(t, e, i) {
                let s = this,
                    [r, o] = this.kdAxisArray,
                    a = e ? "distX" : "dist",
                    n = (s.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1,
                    h = !!s.isBubble;
                if (this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return function t(e, i, n, l) {
                    let d = i.point,
                        p = s.kdAxisArray[n % l],
                        c, u, g = d;
                    ! function(t, e) {
                        let i = t[r],
                            s = e[r],
                            a = C(i) && C(s) ? i - s : null,
                            n = t[o],
                            l = e[o],
                            d = C(n) && C(l) ? n - l : 0,
                            p = h && e.marker?.radius || 0;
                        e.dist = Math.sqrt((a && a * a || 0) + d * d) - p, e.distX = C(a) ? Math.abs(a) - p : Number.MAX_VALUE
                    }(e, d);
                    let f = (e[p] || 0) - (d[p] || 0) + (h && d.marker?.radius || 0),
                        m = f < 0 ? "left" : "right",
                        y = f < 0 ? "right" : "left";
                    return i[m] && (g = (c = t(e, i[m], n + 1, l))[a] < g[a] ? c : d), i[y] && Math.sqrt(f * f) < g[a] && (g = (u = t(e, i[y], n + 1, l))[a] < g[a] ? u : g), g
                }(t, this.kdTree, n, n)
            }
            pointPlacementToXValue() {
                let {
                    options: t,
                    xAxis: e
                } = this, i = t.pointPlacement;
                return "between" === i && (i = e.reversed ? -.5 : .5), j(i) ? i * (t.pointRange || e.pointRange) : 0
            }
            isPointInside(t) {
                let {
                    chart: e,
                    xAxis: i,
                    yAxis: s
                } = this, {
                    plotX: r = -1,
                    plotY: o = -1
                } = t;
                return o >= 0 && o <= (s ? s.len : e.plotHeight) && r >= 0 && r <= (i ? i.len : e.plotWidth)
            }
            drawTracker() {
                let t = this,
                    e = t.options,
                    i = e.trackByArea,
                    s = [].concat((i ? t.areaPath : t.graphPath) || []),
                    r = t.chart,
                    o = r.pointer,
                    a = r.renderer,
                    n = r.options.tooltip?.snap || 0,
                    h = () => {
                        e.enableMouseTracking && r.hoverSeries !== t && t.onMouseOver()
                    },
                    l = "rgba(192,192,192," + (g ? 1e-4 : .002) + ")",
                    d = t.tracker;
                d ? d.attr({
                    d: s
                }) : t.graph && (t.tracker = d = a.path(s).attr({
                    visibility: t.visible ? "inherit" : "hidden",
                    zIndex: 2
                }).addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t.group), r.styledMode || d.attr({
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    stroke: l,
                    fill: i ? l : "none",
                    "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * n)
                }), [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach(t => {
                    t && (t.addClass("highcharts-tracker").on("mouseover", h).on("mouseout", t => {
                        o?.onTrackerMouseOut(t)
                    }), e.cursor && !r.styledMode && t.css({
                        cursor: e.cursor
                    }), t.on("touchstart", h))
                })), O(this, "afterDrawTracker")
            }
            addPoint(t, e, i, s, r) {
                let o, a;
                let n = this.options,
                    h = this.data,
                    l = this.chart,
                    d = this.xAxis,
                    p = d && d.hasNames && d.names,
                    c = n.data,
                    u = this.xData;
                e = G(e, !0);
                let g = {
                    series: this
                };
                this.pointClass.prototype.applyOptions.apply(g, [t]);
                let f = g.x;
                if (a = u.length, this.requireSorting && f < u[a - 1])
                    for (o = !0; a && u[a - 1] > f;) a--;
                this.updateParallelArrays(g, "splice", [a, 0, 0]), this.updateParallelArrays(g, a), p && g.name && (p[f] = g.name), c.splice(a, 0, t), (o || this.processedData) && (this.data.splice(a, 0, null), this.processData()), "point" === n.legendType && this.generatePoints(), i && (h[0] && h[0].remove ? h[0].remove(!1) : (h.shift(), this.updateParallelArrays(g, "shift"), c.shift())), !1 !== r && O(this, "addPoint", {
                    point: g
                }), this.isDirty = !0, this.isDirtyData = !0, e && l.redraw(s)
            }
            removePoint(t, e, i) {
                let s = this,
                    r = s.data,
                    o = r[t],
                    a = s.points,
                    n = s.chart,
                    h = function() {
                        a && a.length === r.length && a.splice(t, 1), r.splice(t, 1), s.options.data.splice(t, 1), s.updateParallelArrays(o || {
                            series: s
                        }, "splice", [t, 1]), o && o.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && n.redraw()
                    };
                p(i, n), e = G(e, !0), o ? o.firePointEvent("remove", null, h) : h()
            }
            remove(t, e, i, s) {
                let r = this,
                    o = r.chart;

                function a() {
                    r.destroy(s), o.isDirtyLegend = o.isDirtyBox = !0, o.linkSeries(s), G(t, !0) && o.redraw(e)
                }!1 !== i ? O(r, "remove", null, a) : a()
            }
            update(t, e) {
                O(this, "update", {
                    options: t = A(t, this.userOptions)
                });
                let i = this,
                    s = i.chart,
                    r = i.userOptions,
                    o = i.initialType || i.type,
                    a = s.options.plotOptions,
                    n = m[o].prototype,
                    h = i.finishedAnimating && {
                        animation: !1
                    },
                    l = {},
                    d, p, c = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"],
                    u = t.type || r.type || s.options.chart.type,
                    g = !(this.hasDerivedData || u && u !== this.type || void 0 !== t.pointStart || void 0 !== t.pointInterval || void 0 !== t.relativeXValue || t.joinBy || t.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some(t => i.hasOptionChanged(t)));
                u = u || o, g && (c.push("data", "isDirtyData", "isDirtyCanvas", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"), !1 !== t.visible && c.push("area", "graph"), i.parallelArrays.forEach(function(t) {
                    c.push(t + "Data")
                }), t.data && (t.dataSorting && M(i.options.dataSorting, t.dataSorting), this.setData(t.data, !1))), t = I(r, {
                    index: void 0 === r.index ? i.index : r.index,
                    pointStart: a?.series?.pointStart ?? r.pointStart ?? i.xData?.[0]
                }, !g && {
                    data: i.options.data
                }, t, h), g && t.data && (t.data = i.options.data), (c = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(c)).forEach(function(t) {
                    c[t] = i[t], delete i[t]
                });
                let f = !1;
                if (m[u]) {
                    if (f = u !== i.type, i.remove(!1, !1, !1, !0), f) {
                        if (s.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(i, m[u].prototype);
                        else {
                            let t = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
                            for (p in n) i[p] = void 0;
                            M(i, m[u].prototype), t ? i.hcEvents = t : delete i.hcEvents
                        }
                    }
                } else w(17, !0, s, {
                    missingModuleFor: u
                });
                if (c.forEach(function(t) {
                        i[t] = c[t]
                    }), i.init(s, t), g && this.points)
                    for (let t of (!1 === (d = i.options).visible ? (l.graphic = 1, l.dataLabel = 1) : (this.hasMarkerChanged(d, r) && (l.graphic = 1), i.hasDataLabels?.() || (l.dataLabel = 1)), this.points)) t && t.series && (t.resolveColor(), Object.keys(l).length && t.destroyElements(l), !1 === d.showInLegend && t.legendItem && s.legend.destroyItem(t));
                i.initialType = o, s.linkSeries(), s.setSortedData(), f && i.linkedSeries.length && (i.isDirtyData = !0), O(this, "afterUpdate"), G(e, !0) && s.redraw(!!g && void 0)
            }
            setName(t) {
                this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0
            }
            hasOptionChanged(t) {
                let e = this.chart,
                    i = this.options[t],
                    s = e.options.plotOptions,
                    r = this.userOptions[t],
                    o = G(s?.[this.type]?.[t], s?.series?.[t]);
                return r && !C(o) ? i !== r : i !== G(o, i)
            }
            onMouseOver() {
                let t = this.chart,
                    e = t.hoverSeries,
                    i = t.pointer;
                i?.setHoverChartIndex(), e && e !== this && e.onMouseOut(), this.options.events.mouseOver && O(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
            }
            onMouseOut() {
                let t = this.options,
                    e = this.chart,
                    i = e.tooltip,
                    s = e.hoverPoint;
                e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && O(this, "mouseOut"), i && !this.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), e.series.forEach(function(t) {
                    t.setState("", !0)
                })
            }
            setState(t, e) {
                let i = this,
                    s = i.options,
                    r = i.graph,
                    o = s.inactiveOtherPoints,
                    a = s.states,
                    n = G(a[t || "normal"] && a[t || "normal"].animation, i.chart.options.chart.animation),
                    h = s.lineWidth,
                    l = s.opacity;
                if (t = t || "", i.state !== t && ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function(e) {
                        e && (i.state && e.removeClass("highcharts-series-" + i.state), t && e.addClass("highcharts-series-" + t))
                    }), i.state = t, !i.chart.styledMode)) {
                    if (a[t] && !1 === a[t].enabled) return;
                    if (t && (h = a[t].lineWidth || h + (a[t].lineWidthPlus || 0), l = G(a[t].opacity, l)), r && !r.dashstyle && j(h))
                        for (let t of [r, ...this.zones.map(t => t.graph)]) t?.animate({
                            "stroke-width": h
                        }, n);
                    o || [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach(function(t) {
                        t && t.animate({
                            opacity: l
                        }, n)
                    })
                }
                e && o && i.points && i.setAllPointsToState(t || void 0)
            }
            setAllPointsToState(t) {
                this.points.forEach(function(e) {
                    e.setState && e.setState(t)
                })
            }
            setVisible(t, e) {
                let i = this,
                    s = i.chart,
                    r = s.options.chart.ignoreHiddenSeries,
                    o = i.visible;
                i.visible = t = i.options.visible = i.userOptions.visible = void 0 === t ? !o : t;
                let a = t ? "show" : "hide";
                ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(t => {
                    i[t]?.[a]()
                }), (s.hoverSeries === i || s.hoverPoint?.series === i) && i.onMouseOut(), i.legendItem && s.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && s.series.forEach(t => {
                    t.options.stacking && t.visible && (t.isDirty = !0)
                }), i.linkedSeries.forEach(e => {
                    e.setVisible(t, !1)
                }), r && (s.isDirtyBox = !0), O(i, a), !1 !== e && s.redraw()
            }
            show() {
                this.setVisible(!0)
            }
            hide() {
                this.setVisible(!1)
            }
            select(t) {
                this.selected = t = this.options.selected = void 0 === t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), O(this, t ? "select" : "unselect")
            }
            shouldShowTooltip(t, e, i = {}) {
                return i.series = this, i.visiblePlotOnly = !0, this.chart.isInsidePlot(t, e, i)
            }
            drawLegendSymbol(t, e) {
                r[this.options.legendSymbol || "rectangle"]?.call(this, t, e)
            }
        }
        return V.defaultOptions = a, V.types = n.seriesTypes, V.registerType = n.registerSeriesType, M(V.prototype, {
            axisTypes: ["xAxis", "yAxis"],
            coll: "series",
            colorCounter: 0,
            directTouch: !1,
            invertible: !0,
            isCartesian: !0,
            kdAxisArray: ["clientX", "plotY"],
            parallelArrays: ["x", "y"],
            pointClass: o,
            requireSorting: !0,
            sorted: !0
        }), n.series = V, V
    }), i(e, "Core/Renderer/RendererRegistry.js", [e["Core/Globals.js"]], function(t) {
        var e, i;
        let s;
        return (i = e || (e = {})).rendererTypes = {}, i.getRendererType = function(t = s) {
            return i.rendererTypes[t] || i.rendererTypes[s]
        }, i.registerRendererType = function(e, r, o) {
            i.rendererTypes[e] = r, (!s || o) && (s = e, t.Renderer = r)
        }, e
    }), i(e, "Core/Renderer/SVG/SVGLabel.js", [e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            defined: i,
            extend: s,
            isNumber: r,
            merge: o,
            pick: a,
            removeEvent: n
        } = e;
        class h extends t {
            constructor(t, e, i, s, r, o, a, n, l, d) {
                let p;
                super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = e, this.x = i, this.y = s, this.anchorX = o, this.anchorY = a, this.baseline = l, this.className = d, this.addClass("button" === d ? "highcharts-no-tooltip" : "highcharts-label"), d && this.addClass("highcharts-" + d), this.text = t.text(void 0, 0, 0, n).attr({
                    zIndex: 1
                }), "string" == typeof r && ((p = /^url\((.*?)\)$/.test(r)) || this.renderer.symbols[r]) && (this.symbolKey = r), this.bBox = h.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || p, this.deferredAttr = {}, this.alignFactor = 0
            }
            alignSetter(t) {
                let e = {
                    left: 0,
                    center: .5,
                    right: 1
                } [t];
                e !== this.alignFactor && (this.alignFactor = e, this.bBox && r(this.xSetting) && this.attr({
                    x: this.xSetting
                }))
            }
            anchorXSetter(t, e) {
                this.anchorX = t, this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting)
            }
            anchorYSetter(t, e) {
                this.anchorY = t, this.boxAttr(e, t - this.ySetting)
            }
            boxAttr(t, e) {
                this.box ? this.box.attr(t, e) : this.deferredAttr[t] = e
            }
            css(e) {
                if (e) {
                    let t = {};
                    e = o(e), h.textProps.forEach(i => {
                        void 0 !== e[i] && (t[i] = e[i], delete e[i])
                    }), this.text.css(t), "fontSize" in t || "fontWeight" in t ? this.updateTextPadding() : ("width" in t || "textOverflow" in t) && this.updateBoxSize()
                }
                return t.prototype.css.call(this, e)
            }
            destroy() {
                n(this.element, "mouseenter"), n(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), t.prototype.destroy.call(this)
            }
            fillSetter(t, e) {
                t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t)
            }
            getBBox(t, e) {
                this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
                let {
                    padding: i,
                    height: s = 0,
                    translateX: r = 0,
                    translateY: o = 0,
                    width: n = 0
                } = this, h = a(this.paddingLeft, i), l = e ?? (this.rotation || 0), d = {
                    width: n,
                    height: s,
                    x: r + this.bBox.x - h,
                    y: o + this.bBox.y - i + this.baselineOffset
                };
                return l && (d = this.getRotatedBox(d, l)), d
            }
            getCrispAdjust() {
                return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2
            }
            heightSetter(t) {
                this.heightSetting = t, this.doUpdate = !0
            }
            afterSetters() {
                super.afterSetters(), this.doUpdate && (this.updateBoxSize(), this.doUpdate = !1)
            }
            onAdd() {
                this.text.add(this), this.attr({
                    text: a(this.textStr, ""),
                    x: this.x || 0,
                    y: this.y || 0
                }), this.box && i(this.anchorX) && this.attr({
                    anchorX: this.anchorX,
                    anchorY: this.anchorY
                })
            }
            paddingSetter(t, e) {
                r(t) ? t !== this[e] && (this[e] = t, this.updateTextPadding()) : this[e] = void 0
            }
            rSetter(t, e) {
                this.boxAttr(e, t)
            }
            strokeSetter(t, e) {
                this.stroke = t, this.boxAttr(e, t)
            }
            "stroke-widthSetter"(t, e) {
                t && (this.needsBox = !0), this["stroke-width"] = t, this.boxAttr(e, t)
            }
            "text-alignSetter"(t) {
                this.textAlign = t
            }
            textSetter(t) {
                void 0 !== t && this.text.attr({
                    text: t
                }), this.updateTextPadding(), this.reAlign()
            }
            updateBoxSize() {
                let t;
                let e = this.text,
                    o = {},
                    a = this.padding,
                    n = this.bBox = (!r(this.widthSetting) || !r(this.heightSetting) || this.textAlign) && i(e.textStr) ? e.getBBox(void 0, 0) : h.emptyBBox;
                this.width = this.getPaddedWidth(), this.height = (this.heightSetting || n.height || 0) + 2 * a;
                let l = this.renderer.fontMetrics(e);
                if (this.baselineOffset = a + Math.min((this.text.firstLineMetrics || l).b, n.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - l.h) / 2), this.needsBox && !e.textPath) {
                    if (!this.box) {
                        let t = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
                        t.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), t.add(this)
                    }
                    t = this.getCrispAdjust(), o.x = t, o.y = (this.baseline ? -this.baselineOffset : 0) + t, o.width = Math.round(this.width), o.height = Math.round(this.height), this.box.attr(s(o, this.deferredAttr)), this.deferredAttr = {}
                }
            }
            updateTextPadding() {
                let t = this.text;
                if (!t.textPath) {
                    this.updateBoxSize();
                    let e = this.baseline ? 0 : this.baselineOffset,
                        s = a(this.paddingLeft, this.padding);
                    i(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (s += ({
                        center: .5,
                        right: 1
                    })[this.textAlign] * (this.widthSetting - this.bBox.width)), (s !== t.x || e !== t.y) && (t.attr("x", s), t.hasBoxWidthChanged && (this.bBox = t.getBBox(!0)), void 0 !== e && t.attr("y", e)), t.x = s, t.y = e
                }
            }
            widthSetter(t) {
                this.widthSetting = r(t) ? t : void 0, this.doUpdate = !0
            }
            getPaddedWidth() {
                let t = this.padding,
                    e = a(this.paddingLeft, t),
                    i = a(this.paddingRight, t);
                return (this.widthSetting || this.bBox.width || 0) + e + i
            }
            xSetter(t) {
                this.x = t, this.alignFactor && (t -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting)
            }
            ySetter(t) {
                this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting)
            }
        }
        return h.emptyBBox = {
            width: 0,
            height: 0,
            x: 0,
            y: 0
        }, h.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"], h
    }), i(e, "Core/Renderer/SVG/Symbols.js", [e["Core/Utilities.js"]], function(t) {
        let {
            defined: e,
            isNumber: i,
            pick: s
        } = t;

        function r(t, i, r, o, a) {
            let n = [];
            if (a) {
                let h = a.start || 0,
                    l = s(a.r, r),
                    d = s(a.r, o || r),
                    p = 2e-4 / (a.borderRadius ? 1 : Math.max(l, 1)),
                    c = Math.abs((a.end || 0) - h - 2 * Math.PI) < p,
                    u = (a.end || 0) - (c ? p : 0),
                    g = a.innerR,
                    f = s(a.open, c),
                    m = Math.cos(h),
                    y = Math.sin(h),
                    x = Math.cos(u),
                    b = Math.sin(u),
                    S = s(a.longArc, u - h - Math.PI < p ? 0 : 1),
                    v = ["A", l, d, 0, S, s(a.clockwise, 1), t + l * x, i + d * b];
                v.params = {
                    start: h,
                    end: u,
                    cx: t,
                    cy: i
                }, n.push(["M", t + l * m, i + d * y], v), e(g) && ((v = ["A", g, g, 0, S, e(a.clockwise) ? 1 - a.clockwise : 0, t + g * m, i + g * y]).params = {
                    start: u,
                    end: h,
                    cx: t,
                    cy: i
                }, n.push(f ? ["M", t + g * x, i + g * b] : ["L", t + g * x, i + g * b], v)), f || n.push(["Z"])
            }
            return n
        }

        function o(t, e, i, s, r) {
            return r && r.r ? a(t, e, i, s, r) : [
                ["M", t, e],
                ["L", t + i, e],
                ["L", t + i, e + s],
                ["L", t, e + s],
                ["Z"]
            ]
        }

        function a(t, e, i, s, r) {
            let o = r?.r || 0;
            return [
                ["M", t + o, e],
                ["L", t + i - o, e],
                ["A", o, o, 0, 0, 1, t + i, e + o],
                ["L", t + i, e + s - o],
                ["A", o, o, 0, 0, 1, t + i - o, e + s],
                ["L", t + o, e + s],
                ["A", o, o, 0, 0, 1, t, e + s - o],
                ["L", t, e + o],
                ["A", o, o, 0, 0, 1, t + o, e],
                ["Z"]
            ]
        }
        return {
            arc: r,
            callout: function(t, e, s, r, o) {
                let n = Math.min(o && o.r || 0, s, r),
                    h = n + 6,
                    l = o && o.anchorX,
                    d = o && o.anchorY || 0,
                    p = a(t, e, s, r, {
                        r: n
                    });
                if (!i(l) || l < s && l > 0 && d < r && d > 0) return p;
                if (t + l > s - h) {
                    if (d > e + h && d < e + r - h) p.splice(3, 1, ["L", t + s, d - 6], ["L", t + s + 6, d], ["L", t + s, d + 6], ["L", t + s, e + r - n]);
                    else if (l < s) {
                        let i = d < e + h,
                            o = i ? e : e + r;
                        p.splice(i ? 2 : 5, 0, ["L", l, d], ["L", t + s - n, o])
                    } else p.splice(3, 1, ["L", t + s, r / 2], ["L", l, d], ["L", t + s, r / 2], ["L", t + s, e + r - n])
                } else if (t + l < h) {
                    if (d > e + h && d < e + r - h) p.splice(7, 1, ["L", t, d + 6], ["L", t - 6, d], ["L", t, d - 6], ["L", t, e + n]);
                    else if (l > 0) {
                        let i = d < e + h,
                            s = i ? e : e + r;
                        p.splice(i ? 1 : 6, 0, ["L", l, d], ["L", t + n, s])
                    } else p.splice(7, 1, ["L", t, r / 2], ["L", l, d], ["L", t, r / 2], ["L", t, e + n])
                } else d > r && l < s - h ? p.splice(5, 1, ["L", l + 6, e + r], ["L", l, e + r + 6], ["L", l - 6, e + r], ["L", t + n, e + r]) : d < 0 && l > h && p.splice(1, 1, ["L", l - 6, e], ["L", l, e - 6], ["L", l + 6, e], ["L", s - n, e]);
                return p
            },
            circle: function(t, e, i, s) {
                return r(t + i / 2, e + s / 2, i / 2, s / 2, {
                    start: .5 * Math.PI,
                    end: 2.5 * Math.PI,
                    open: !1
                })
            },
            diamond: function(t, e, i, s) {
                return [
                    ["M", t + i / 2, e],
                    ["L", t + i, e + s / 2],
                    ["L", t + i / 2, e + s],
                    ["L", t, e + s / 2],
                    ["Z"]
                ]
            },
            rect: o,
            roundedRect: a,
            square: o,
            triangle: function(t, e, i, s) {
                return [
                    ["M", t + i / 2, e],
                    ["L", t + i, e + s],
                    ["L", t, e + s],
                    ["Z"]
                ]
            },
            "triangle-down": function(t, e, i, s) {
                return [
                    ["M", t, e],
                    ["L", t + i, e],
                    ["L", t + i / 2, e + s],
                    ["Z"]
                ]
            }
        }
    }), i(e, "Core/Renderer/SVG/TextBuilder.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e, i) {
        let {
            doc: s,
            SVG_NS: r,
            win: o
        } = e, {
            attr: a,
            extend: n,
            fireEvent: h,
            isString: l,
            objectEach: d,
            pick: p
        } = i;
        return class {
            constructor(t) {
                let e = t.styles;
                this.renderer = t.renderer, this.svgElement = t, this.width = t.textWidth, this.textLineHeight = e && e.lineHeight, this.textOutline = e && e.textOutline, this.ellipsis = !!(e && "ellipsis" === e.textOverflow), this.noWrap = !!(e && "nowrap" === e.whiteSpace)
            }
            buildSVG() {
                let e = this.svgElement,
                    i = e.element,
                    r = e.renderer,
                    o = p(e.textStr, "").toString(),
                    a = -1 !== o.indexOf("<"),
                    n = i.childNodes,
                    h = !e.added && r.box,
                    d = [o, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, e.getStyle("font-size"), this.width].join(",");
                if (d !== e.textCache) {
                    e.textCache = d, delete e.actualWidth;
                    for (let t = n.length; t--;) i.removeChild(n[t]);
                    if (a || this.ellipsis || this.width || e.textPath || -1 !== o.indexOf(" ") && (!this.noWrap || /<br.*?>/g.test(o))) {
                        if ("" !== o) {
                            h && h.appendChild(i);
                            let s = new t(o);
                            this.modifyTree(s.nodes), s.addToDOM(i), this.modifyDOM(), this.ellipsis && -1 !== (i.textContent || "").indexOf("…") && e.attr("title", this.unescapeEntities(e.textStr || "", ["&lt;", "&gt;"])), h && h.removeChild(i)
                        }
                    } else i.appendChild(s.createTextNode(this.unescapeEntities(o)));
                    l(this.textOutline) && e.applyTextOutline && e.applyTextOutline(this.textOutline)
                }
            }
            modifyDOM() {
                let t;
                let e = this.svgElement,
                    i = a(e.element, "x");
                for (e.firstLineMetrics = void 0; t = e.element.firstChild;)
                    if (/^[\s\u200B]*$/.test(t.textContent || " ")) e.element.removeChild(t);
                    else break;
                [].forEach.call(e.element.querySelectorAll("tspan.highcharts-br"), (t, s) => {
                    t.nextSibling && t.previousSibling && (0 === s && 1 === t.previousSibling.nodeType && (e.firstLineMetrics = e.renderer.fontMetrics(t.previousSibling)), a(t, {
                        dy: this.getLineHeight(t.nextSibling),
                        x: i
                    }))
                });
                let n = this.width || 0;
                if (!n) return;
                let h = (t, o) => {
                        let h = t.textContent || "",
                            l = h.replace(/([^\^])-/g, "$1- ").split(" "),
                            d = !this.noWrap && (l.length > 1 || e.element.childNodes.length > 1),
                            p = this.getLineHeight(o),
                            c = 0,
                            u = e.actualWidth;
                        if (this.ellipsis) h && this.truncate(t, h, void 0, 0, Math.max(0, n - .8 * p), (t, e) => t.substring(0, e) + "…");
                        else if (d) {
                            let h = [],
                                d = [];
                            for (; o.firstChild && o.firstChild !== t;) d.push(o.firstChild), o.removeChild(o.firstChild);
                            for (; l.length;) l.length && !this.noWrap && c > 0 && (h.push(t.textContent || ""), t.textContent = l.join(" ").replace(/- /g, "-")), this.truncate(t, void 0, l, 0 === c && u || 0, n, (t, e) => l.slice(0, e).join(" ").replace(/- /g, "-")), u = e.actualWidth, c++;
                            d.forEach(e => {
                                o.insertBefore(e, t)
                            }), h.forEach(e => {
                                o.insertBefore(s.createTextNode(e), t);
                                let n = s.createElementNS(r, "tspan");
                                n.textContent = "​", a(n, {
                                    dy: p,
                                    x: i
                                }), o.insertBefore(n, t)
                            })
                        }
                    },
                    l = t => {
                        [].slice.call(t.childNodes).forEach(i => {
                            i.nodeType === o.Node.TEXT_NODE ? h(i, t) : (-1 !== i.className.baseVal.indexOf("highcharts-br") && (e.actualWidth = 0), l(i))
                        })
                    };
                l(e.element)
            }
            getLineHeight(t) {
                let e = t.nodeType === o.Node.TEXT_NODE ? t.parentElement : t;
                return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(e || this.svgElement.element).h
            }
            modifyTree(t) {
                let e = (i, s) => {
                    let {
                        attributes: r = {},
                        children: o,
                        style: a = {},
                        tagName: h
                    } = i, l = this.renderer.styledMode;
                    if ("b" === h || "strong" === h ? l ? r.class = "highcharts-strong" : a.fontWeight = "bold" : ("i" === h || "em" === h) && (l ? r.class = "highcharts-emphasized" : a.fontStyle = "italic"), a && a.color && (a.fill = a.color), "br" === h) {
                        r.class = "highcharts-br", i.textContent = "​";
                        let e = t[s + 1];
                        e && e.textContent && (e.textContent = e.textContent.replace(/^ +/gm, ""))
                    } else "a" === h && o && o.some(t => "#text" === t.tagName) && (i.children = [{
                        children: o,
                        tagName: "tspan"
                    }]);
                    "#text" !== h && "a" !== h && (i.tagName = "tspan"), n(i, {
                        attributes: r,
                        style: a
                    }), o && o.filter(t => "#text" !== t.tagName).forEach(e)
                };
                t.forEach(e), h(this.svgElement, "afterModifyTree", {
                    nodes: t
                })
            }
            truncate(t, e, i, s, r, o) {
                let a, n;
                let h = this.svgElement,
                    {
                        rotation: l
                    } = h,
                    d = [],
                    p = i ? 1 : 0,
                    c = (e || i || "").length,
                    u = c,
                    g = function(e, r) {
                        let o = r || e,
                            a = t.parentNode;
                        if (a && void 0 === d[o] && a.getSubStringLength) try {
                            d[o] = s + a.getSubStringLength(0, i ? o + 1 : o)
                        } catch (t) {}
                        return d[o]
                    };
                if (h.rotation = 0, s + (n = g(t.textContent.length)) > r) {
                    for (; p <= c;) u = Math.ceil((p + c) / 2), i && (a = o(i, u)), n = g(u, a && a.length - 1), p === c ? p = c + 1 : n > r ? c = u - 1 : p = u;
                    0 === c ? t.textContent = "" : e && c === e.length - 1 || (t.textContent = a || o(e || i, u))
                }
                i && i.splice(0, u), h.actualWidth = n, h.rotation = l
            }
            unescapeEntities(t, e) {
                return d(this.renderer.escapes, function(i, s) {
                    e && -1 !== e.indexOf(i) || (t = t.toString().replace(RegExp(i, "g"), s))
                }), t
            }
        }
    }), i(e, "Core/Renderer/SVG/SVGRenderer.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Defaults.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGLabel.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Renderer/SVG/TextBuilder.js"], e["Core/Utilities.js"]], function(t, e, i, s, r, o, a, n, h, l) {
        let d;
        let {
            defaultOptions: p
        } = e, {
            charts: c,
            deg2rad: u,
            doc: g,
            isFirefox: f,
            isMS: m,
            isWebKit: y,
            noop: x,
            SVG_NS: b,
            symbolSizes: S,
            win: v
        } = s, {
            addEvent: C,
            attr: k,
            createElement: A,
            crisp: D,
            css: w,
            defined: M,
            destroyObjectProperties: L,
            extend: O,
            isArray: T,
            isNumber: P,
            isObject: E,
            isString: B,
            merge: j,
            pick: R,
            pInt: I,
            replaceNested: W,
            uniqueKey: G
        } = l;
        class N {
            constructor(t, e, i, s, r, o, a) {
                let n, h;
                let l = this.createElement("svg").attr({
                        version: "1.1",
                        class: "highcharts-root"
                    }),
                    d = l.element;
                a || l.css(this.getStyle(s || {})), t.appendChild(d), k(t, "dir", "ltr"), -1 === t.innerHTML.indexOf("xmlns") && k(d, "xmlns", this.SVG_NS), this.box = d, this.boxWrapper = l, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(g.createTextNode("Created with Highcharts 11.4.8")), this.defs = this.createElement("defs").add(), this.allowHTML = o, this.forExport = r, this.styledMode = a, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = l.getStyle("font-size"), this.setSize(e, i, !1), f && t.getBoundingClientRect && ((n = function() {
                    w(t, {
                        left: 0,
                        top: 0
                    }), h = t.getBoundingClientRect(), w(t, {
                        left: Math.ceil(h.left) - h.left + "px",
                        top: Math.ceil(h.top) - h.top + "px"
                    })
                })(), this.unSubPixelFix = C(v, "resize", n))
            }
            definition(e) {
                return new t([e]).addToDOM(this.defs.element)
            }
            getReferenceURL() {
                if ((f || y) && g.getElementsByTagName("base").length) {
                    if (!M(d)) {
                        let e = G(),
                            i = new t([{
                                tagName: "svg",
                                attributes: {
                                    width: 8,
                                    height: 8
                                },
                                children: [{
                                    tagName: "defs",
                                    children: [{
                                        tagName: "clipPath",
                                        attributes: {
                                            id: e
                                        },
                                        children: [{
                                            tagName: "rect",
                                            attributes: {
                                                width: 4,
                                                height: 4
                                            }
                                        }]
                                    }]
                                }, {
                                    tagName: "rect",
                                    attributes: {
                                        id: "hitme",
                                        width: 8,
                                        height: 8,
                                        "clip-path": `url(#${e})`,
                                        fill: "rgba(0,0,0,0.001)"
                                    }
                                }]
                            }]).addToDOM(g.body);
                        w(i, {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 9e5
                        });
                        let s = g.elementFromPoint(6, 6);
                        d = "hitme" === (s && s.id), g.body.removeChild(i)
                    }
                    if (d) return W(v.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"])
                }
                return ""
            }
            getStyle(t) {
                return this.style = O({
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: "1rem"
                }, t), this.style
            }
            setStyle(t) {
                this.boxWrapper.css(this.getStyle(t))
            }
            isHidden() {
                return !this.boxWrapper.getBBox().width
            }
            destroy() {
                let t = this.defs;
                return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), L(this.gradients || {}), this.gradients = null, this.defs = t.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null
            }
            createElement(t) {
                return new this.Element(this, t)
            }
            getRadialAttr(t, e) {
                return {
                    cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
                    cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
                    r: (e.r || 0) * t[2]
                }
            }
            shadowDefinition(t) {
                let e = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t).map(e => `${e}-${t[e]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""),
                    i = j({
                        color: "#000000",
                        offsetX: 1,
                        offsetY: 1,
                        opacity: .15,
                        width: 5
                    }, t);
                return this.defs.element.querySelector(`#${e}`) || this.definition({
                    tagName: "filter",
                    attributes: {
                        id: e,
                        filterUnits: i.filterUnits
                    },
                    children: this.getShadowFilterContent(i)
                }), e
            }
            getShadowFilterContent(t) {
                return [{
                    tagName: "feDropShadow",
                    attributes: {
                        dx: t.offsetX,
                        dy: t.offsetY,
                        "flood-color": t.color,
                        "flood-opacity": Math.min(5 * t.opacity, 1),
                        stdDeviation: t.width / 2
                    }
                }]
            }
            buildText(t) {
                new h(t).buildSVG()
            }
            getContrast(t) {
                let e = i.parse(t).rgba.map(t => {
                        let e = t / 255;
                        return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                    }),
                    s = .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
                return 1.05 / (s + .05) > (s + .05) / .05 ? "#FFFFFF" : "#000000"
            }
            button(e, i, s, r, o = {}, a, n, h, l, d) {
                let c = this.label(e, i, s, l, void 0, void 0, d, void 0, "button"),
                    u = this.styledMode,
                    g = arguments,
                    f = 0;
                o = j(p.global.buttonTheme, o), u && (delete o.fill, delete o.stroke, delete o["stroke-width"]);
                let y = o.states || {},
                    x = o.style || {};
                delete o.states, delete o.style;
                let b = [t.filterUserAttributes(o)],
                    S = [x];
                return u || ["hover", "select", "disabled"].forEach((e, i) => {
                    b.push(j(b[0], t.filterUserAttributes(g[i + 5] || y[e] || {}))), S.push(b[i + 1].style), delete b[i + 1].style
                }), C(c.element, m ? "mouseover" : "mouseenter", function() {
                    3 !== f && c.setState(1)
                }), C(c.element, m ? "mouseout" : "mouseleave", function() {
                    3 !== f && c.setState(f)
                }), c.setState = (t = 0) => {
                    if (1 !== t && (c.state = f = t), c.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t]), !u) {
                        c.attr(b[t]);
                        let e = S[t];
                        E(e) && c.css(e)
                    }
                }, c.attr(b[0]), !u && (c.css(O({
                    cursor: "default"
                }, x)), d && c.text.css({
                    pointerEvents: "none"
                })), c.on("touchstart", t => t.stopPropagation()).on("click", function(t) {
                    3 !== f && r.call(c, t)
                })
            }
            crispLine(t, e) {
                let [i, s] = t;
                return M(i[1]) && i[1] === s[1] && (i[1] = s[1] = D(i[1], e)), M(i[2]) && i[2] === s[2] && (i[2] = s[2] = D(i[2], e)), t
            }
            path(t) {
                let e = this.styledMode ? {} : {
                    fill: "none"
                };
                return T(t) ? e.d = t : E(t) && O(e, t), this.createElement("path").attr(e)
            }
            circle(t, e, i) {
                let s = E(t) ? t : void 0 === t ? {} : {
                        x: t,
                        y: e,
                        r: i
                    },
                    r = this.createElement("circle");
                return r.xSetter = r.ySetter = function(t, e, i) {
                    i.setAttribute("c" + e, t)
                }, r.attr(s)
            }
            arc(t, e, i, s, r, o) {
                let a;
                E(t) ? (e = (a = t).y, i = a.r, s = a.innerR, r = a.start, o = a.end, t = a.x) : a = {
                    innerR: s,
                    start: r,
                    end: o
                };
                let n = this.symbol("arc", t, e, i, i, a);
                return n.r = i, n
            }
            rect(t, e, i, s, r, o) {
                let a = E(t) ? t : void 0 === t ? {} : {
                        x: t,
                        y: e,
                        r,
                        width: Math.max(i || 0, 0),
                        height: Math.max(s || 0, 0)
                    },
                    n = this.createElement("rect");
                return this.styledMode || (void 0 !== o && (a["stroke-width"] = o, O(a, n.crisp(a))), a.fill = "none"), n.rSetter = function(t, e, i) {
                    n.r = t, k(i, {
                        rx: t,
                        ry: t
                    })
                }, n.rGetter = function() {
                    return n.r || 0
                }, n.attr(a)
            }
            roundedRect(t) {
                return this.symbol("roundedRect").attr(t)
            }
            setSize(t, e, i) {
                this.width = t, this.height = e, this.boxWrapper.animate({
                    width: t,
                    height: e
                }, {
                    step: function() {
                        this.attr({
                            viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                        })
                    },
                    duration: R(i, !0) ? void 0 : 0
                }), this.alignElements()
            }
            g(t) {
                let e = this.createElement("g");
                return t ? e.attr({
                    class: "highcharts-" + t
                }) : e
            }
            image(t, e, i, s, r, o) {
                let a = {
                    preserveAspectRatio: "none"
                };
                P(e) && (a.x = e), P(i) && (a.y = i), P(s) && (a.width = s), P(r) && (a.height = r);
                let n = this.createElement("image").attr(a),
                    h = function(e) {
                        n.attr({
                            href: t
                        }), o.call(n, e)
                    };
                if (o) {
                    n.attr({
                        href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    });
                    let e = new v.Image;
                    C(e, "load", h), e.src = t, e.complete && h({})
                } else n.attr({
                    href: t
                });
                return n
            }
            symbol(t, e, i, s, r, o) {
                let a, n, h, l;
                let d = this,
                    p = /^url\((.*?)\)$/,
                    u = p.test(t),
                    f = !u && (this.symbols[t] ? t : "circle"),
                    m = f && this.symbols[f];
                if (m) "number" == typeof e && (n = m.call(this.symbols, e || 0, i || 0, s || 0, r || 0, o)), a = this.path(n), d.styledMode || a.attr("fill", "none"), O(a, {
                    symbolName: f || void 0,
                    x: e,
                    y: i,
                    width: s,
                    height: r
                }), o && O(a, o);
                else if (u) {
                    h = t.match(p)[1];
                    let s = a = this.image(h);
                    s.imgwidth = R(o && o.width, S[h] && S[h].width), s.imgheight = R(o && o.height, S[h] && S[h].height), l = t => t.attr({
                        width: t.width,
                        height: t.height
                    }), ["width", "height"].forEach(t => {
                        s[`${t}Setter`] = function(t, e) {
                            this[e] = t;
                            let {
                                alignByTranslate: i,
                                element: s,
                                width: r,
                                height: a,
                                imgwidth: n,
                                imgheight: h
                            } = this, l = "width" === e ? n : h, d = 1;
                            o && "within" === o.backgroundSize && r && a && n && h ? (d = Math.min(r / n, a / h), k(s, {
                                width: Math.round(n * d),
                                height: Math.round(h * d)
                            })) : s && l && s.setAttribute(e, l), !i && n && h && this.translate(((r || 0) - n * d) / 2, ((a || 0) - h * d) / 2)
                        }
                    }), M(e) && s.attr({
                        x: e,
                        y: i
                    }), s.isImg = !0, s.symbolUrl = t, M(s.imgwidth) && M(s.imgheight) ? l(s) : (s.attr({
                        width: 0,
                        height: 0
                    }), A("img", {
                        onload: function() {
                            let t = c[d.chartIndex];
                            0 === this.width && (w(this, {
                                position: "absolute",
                                top: "-999em"
                            }), g.body.appendChild(this)), S[h] = {
                                width: this.width,
                                height: this.height
                            }, s.imgwidth = this.width, s.imgheight = this.height, s.element && l(s), this.parentNode && this.parentNode.removeChild(this), d.imgCount--, d.imgCount || !t || t.hasLoaded || t.onload()
                        },
                        src: h
                    }), this.imgCount++)
                }
                return a
            }
            clipRect(t, e, i, s) {
                return this.rect(t, e, i, s, 0)
            }
            text(t, e, i, s) {
                let r = {};
                if (s && (this.allowHTML || !this.forExport)) return this.html(t, e, i);
                r.x = Math.round(e || 0), i && (r.y = Math.round(i)), M(t) && (r.text = t);
                let o = this.createElement("text").attr(r);
                return s && (!this.forExport || this.allowHTML) || (o.xSetter = function(t, e, i) {
                    let s = i.getElementsByTagName("tspan"),
                        r = i.getAttribute(e);
                    for (let i = 0, o; i < s.length; i++)(o = s[i]).getAttribute(e) === r && o.setAttribute(e, t);
                    i.setAttribute(e, t)
                }), o
            }
            fontMetrics(t) {
                let e = I(o.prototype.getStyle.call(t, "font-size") || 0),
                    i = e < 24 ? e + 3 : Math.round(1.2 * e),
                    s = Math.round(.8 * i);
                return {
                    h: i,
                    b: s,
                    f: e
                }
            }
            rotCorr(t, e, i) {
                let s = t;
                return e && i && (s = Math.max(s * Math.cos(e * u), 4)), {
                    x: -t / 3 * Math.sin(e * u),
                    y: s
                }
            }
            pathToSegments(t) {
                let e = [],
                    i = [],
                    s = {
                        A: 8,
                        C: 7,
                        H: 2,
                        L: 3,
                        M: 3,
                        Q: 5,
                        S: 5,
                        T: 3,
                        V: 2
                    };
                for (let r = 0; r < t.length; r++) B(i[0]) && P(t[r]) && i.length === s[i[0].toUpperCase()] && t.splice(r, 0, i[0].replace("M", "L").replace("m", "l")), "string" == typeof t[r] && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[r]);
                return e.push(i.slice(0)), e
            }
            label(t, e, i, s, r, o, n, h, l) {
                return new a(this, t, e, i, s, r, o, n, h, l)
            }
            alignElements() {
                this.alignedObjects.forEach(t => t.align())
            }
        }
        return O(N.prototype, {
            Element: o,
            SVG_NS: b,
            escapes: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            },
            symbols: n,
            draw: x
        }), r.registerRendererType("svg", N, !0), N
    }), i(e, "Series/ArcDiagram/ArcDiagramSeries.js", [e["Series/ArcDiagram/ArcDiagramPoint.js"], e["Series/ArcDiagram/ArcDiagramSeriesDefaults.js"], e["Series/Sankey/SankeyColumnComposition.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Extensions/TextPath.js"]], function(t, e, i, s, r, o, a, n, h) {
        h.compose(n);
        let {
            prototype: {
                symbols: l
            }
        } = o, {
            seriesTypes: {
                column: d,
                sankey: p
            }
        } = r, {
            crisp: c,
            extend: u,
            merge: g,
            pick: f,
            relativeLength: m
        } = a;
        class y extends p {
            createNodeColumns() {
                let t = this,
                    e = t.chart,
                    s = i.compose([], t);
                return s.sankeyColumn.maxLength = e.inverted ? e.plotHeight : e.plotWidth, s.sankeyColumn.getTranslationFactor = t => {
                    let i = s.slice(),
                        r = this.options.minLinkWidth || 0,
                        o, a = 0,
                        n, h, l = 0,
                        d = 1,
                        p = 0,
                        c = (e.plotSizeX || 0) - (t.options.marker && t.options.marker.lineWidth || 0) - (s.length - 1) * t.nodePadding;
                    for (; s.length;) {
                        for (a = c / s.sankeyColumn.sum(), o = !1, n = s.length; n--;) {
                            h = s[n].getSum() * a * d;
                            let t = Math.min(e.plotHeight, e.plotWidth);
                            h > t ? d = Math.min(t / h, d) : h < r && (s.splice(n, 1), c -= r, h = r, o = !0), p += h * (1 - d) / 2, l = Math.max(l, h)
                        }
                        if (!o) break
                    }
                    return s.length = 0, i.forEach(t => {
                        t.scale = d, s.push(t)
                    }), s.sankeyColumn.maxRadius = l, s.sankeyColumn.scale = d, s.sankeyColumn.additionalSpace = p, a
                }, s.sankeyColumn.offset = function(i, r) {
                    let o = i.series.options.equalNodes,
                        a = t.nodePadding,
                        n = Math.min(e.plotWidth, e.plotHeight, (s.sankeyColumn.maxLength || 0) / t.nodes.length - a),
                        h = s.sankeyColumn.additionalSpace || 0,
                        l;
                    for (let e = 0; e < s.length; e++) {
                        let d = s[e].getSum() * (s.sankeyColumn.scale || 0),
                            p = o ? n : Math.max(d * r, t.options.minLinkWidth || 0);
                        if (l = d ? p + a : 0, s[e] === i) return {
                            relativeLeft: h + m(i.options.offset || 0, l)
                        };
                        h += l
                    }
                }, t.nodes.forEach(function(t) {
                    t.column = 0, s.push(t)
                }), [s]
            }
            translateLink(t) {
                let e = t.fromNode,
                    i = t.toNode,
                    s = this.chart,
                    r = this.translationFactor,
                    o = t.options,
                    a = this.options,
                    n = f(o.linkWeight, a.linkWeight, Math.max((t.weight || 0) * r * e.scale, this.options.minLinkWidth || 0)),
                    h = t.series.options.centeredLinks,
                    l = e.nodeY,
                    d = (e, i) => {
                        let s = (e.offset(t, i) || 0) * r;
                        return Math.min(e.nodeX + s, e.nodeX + (e.shapeArgs && e.shapeArgs.height || 0) - n)
                    },
                    p = h ? e.nodeX + ((e.shapeArgs.height || 0) - n) / 2 : d(e, "linksFrom"),
                    c = h ? i.nodeX + ((i.shapeArgs.height || 0) - n) / 2 : d(i, "linksTo"),
                    u = l;
                p > c && ([p, c] = [c, p]), a.reversed && ([p, c] = [c, p], u = (s.plotSizeY || 0) - u), t.shapeType = "path", t.linkBase = [p, p + n, c, c + n];
                let g = (c + n - p) / Math.abs(c + n - p) * f(a.linkRadius, Math.min(Math.abs(c + n - p) / 2, e.nodeY - Math.abs(n)));
                t.shapeArgs = {
                    d: [
                        ["M", p, u],
                        ["A", (c + n - p) / 2, g, 0, 0, 1, c + n, u],
                        ["L", c, u],
                        ["A", (c - p - n) / 2, g - n, 0, 0, 0, p + n, u],
                        ["Z"]
                    ]
                }, t.dlBox = {
                    x: p + (c - p) / 2,
                    y: u - g,
                    height: n,
                    width: 0
                }, t.tooltipPos = s.inverted ? [(s.plotSizeY || 0) - t.dlBox.y - n / 2, (s.plotSizeX || 0) - t.dlBox.x] : [t.dlBox.x, t.dlBox.y + n / 2], t.y = t.plotY = 1, t.x = t.plotX = 1, t.color || (t.color = e.color)
            }
            translateNode(t, e) {
                let i = this.translationFactor,
                    s = this.chart,
                    r = s.inverted ? s.plotWidth : s.plotHeight,
                    o = this.options,
                    a = Math.min(s.plotWidth, s.plotHeight, r / t.series.nodes.length - this.nodePadding),
                    n = t.getSum() * (e.sankeyColumn.scale || 0),
                    h = o.equalNodes ? a : Math.max(n * i, this.options.minLinkWidth || 0),
                    d = o.marker?.lineWidth || 0,
                    u = e.sankeyColumn.offset(t, i),
                    m = c(f(u && u.absoluteLeft, (e.sankeyColumn.left(i) || 0) + (u && u.relativeLeft || 0)), d),
                    y = g(o.marker, t.options.marker),
                    x = y.symbol,
                    b = y.radius,
                    S = parseInt(o.offset, 10) * ((s.inverted ? s.plotWidth : s.plotHeight) - (c(this.colDistance * (t.column || 0) + (y.lineWidth || 0) / 2, d) + (e.sankeyColumn.scale || 0) * (e.sankeyColumn.maxRadius || 0) / 2)) / 100;
                if (t.sum = n, n) {
                    t.nodeX = m, t.nodeY = S;
                    let e = t.options.width || o.width || h,
                        i = t.options.height || o.height || h,
                        r = S;
                    o.reversed && (r = (s.plotSizeY || 0) - S, s.inverted && (r = (s.plotSizeY || 0) - S)), this.mapOptionsToLevel && (t.dlOptions = p.getDLOptions({
                        level: this.mapOptionsToLevel[t.level],
                        optionsPoint: t.options
                    })), t.plotX = 1, t.plotY = 1, t.tooltipPos = s.inverted ? [(s.plotSizeY || 0) - r - i / 2, (s.plotSizeX || 0) - m - e / 2] : [m + e / 2, r + i / 2], t.shapeType = "path", t.shapeArgs = {
                        d: l[x || "circle"](m, r - (b || i) / 2, b || e, b || i),
                        width: b || e,
                        height: b || i
                    }, t.dlBox = {
                        x: m + e / 2,
                        y: r,
                        height: 0,
                        width: 0
                    }
                } else t.dlOptions = {
                    enabled: !1
                }
            }
            drawDataLabels() {
                if (this.options.dataLabels) {
                    let t = this.options.dataLabels.textPath;
                    d.prototype.drawDataLabels.call(this, this.nodes), this.options.dataLabels.textPath = this.options.dataLabels.linkTextPath, d.prototype.drawDataLabels.call(this, this.data), this.options.dataLabels.textPath = t
                }
            }
            pointAttribs(t, e) {
                if (t && t.isNode) {
                    let {
                        ...t
                    } = s.prototype.pointAttribs.apply(this, arguments);
                    return t
                }
                return super.pointAttribs.apply(this, arguments)
            }
            markerAttribs(t) {
                return t.isNode ? super.markerAttribs.apply(this, arguments) : {}
            }
        }
        return y.defaultOptions = g(p.defaultOptions, e), u(y.prototype, {
            orderNodes: !1
        }), y.prototype.pointClass = t, r.registerSeriesType("arcdiagram", y), y
    }), i(e, "masters/modules/arc-diagram.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
});