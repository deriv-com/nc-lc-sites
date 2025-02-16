!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Timeline series
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Daniel Studencki
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/timeline", ["highcharts"], function(e) {
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
    i(e, "Series/Timeline/TimelinePoint.js", [e["Core/Series/Point.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i) {
        let {
            line: {
                prototype: {
                    pointClass: s
                }
            },
            pie: {
                prototype: {
                    pointClass: n
                }
            }
        } = e.seriesTypes, {
            defined: o,
            isNumber: r,
            merge: a,
            objectEach: l,
            pick: h
        } = i;
        return class extends s {
            alignConnector() {
                let t = this.series,
                    e = this.dataLabel,
                    i = e.connector,
                    s = e.options || {},
                    n = s.connectorWidth || 0,
                    r = this.series.chart,
                    a = i.getBBox(),
                    l = {
                        x: a.x + (e.translateX || 0),
                        y: a.y + (e.translateY || 0)
                    };
                r.inverted ? l.y -= n / 2 : l.x += n / 2, i[r.isInsidePlot(l.x, l.y) ? "animate" : "attr"]({
                    d: this.getConnectorPath()
                }), i.addClass("highcharts-color-" + this.colorIndex), t.chart.styledMode || i.attr({
                    stroke: s.connectorColor || this.color,
                    "stroke-width": s.connectorWidth,
                    opacity: e[o(e.newOpacity) ? "newOpacity" : "opacity"]
                })
            }
            drawConnector() {
                let {
                    dataLabel: t,
                    series: e
                } = this;
                t && (t.connector || (t.connector = e.chart.renderer.path(this.getConnectorPath()).attr({
                    zIndex: -1
                }).add(t)), this.series.chart.isInsidePlot(t.x || 0, t.y || 0) && this.alignConnector())
            }
            getConnectorPath() {
                let {
                    plotX: t = 0,
                    plotY: e = 0,
                    series: i,
                    dataLabel: s
                } = this, n = i.chart, o = i.xAxis.len, a = n.inverted, h = a ? "x2" : "y2";
                if (s) {
                    let d = s.targetPosition,
                        p = (s.alignAttr || s)[h[0]] < i.yAxis.len / 2,
                        c = {
                            x1: t,
                            y1: e,
                            x2: t,
                            y2: r(d.y) ? d.y : s.y
                        };
                    return a && (c = {
                        x1: e,
                        y1: o - t,
                        x2: d.x || s.x,
                        y2: o - t
                    }), p && (c[h] += s[a ? "width" : "height"] || 0), l(c, (t, e) => {
                        c[e] -= (s.alignAttr || s)[e[0]]
                    }), n.renderer.crispLine([
                        ["M", c.x1, c.y1],
                        ["L", c.x2, c.y2]
                    ], s.options?.connectorWidth || 0)
                }
                return []
            }
            constructor(t, e) {
                super(t, e), this.name ?? (this.name = "Event"), this.y = 1
            }
            isValid() {
                return null !== this.options.y
            }
            setState() {
                let t = super.setState;
                this.isNull || t.apply(this, arguments)
            }
            setVisible(t, e) {
                let i = this.series;
                e = h(e, i.options.ignoreHiddenPoint), n.prototype.setVisible.call(this, t, !1), i.processData(), e && i.chart.redraw()
            }
            applyOptions(e, i) {
                return e = t.prototype.optionsToObject.call(this, e), this.userDLOptions = a(this.userDLOptions, e.dataLabels), super.applyOptions(e, i)
            }
        }
    }), i(e, "Series/Timeline/TimelineSeriesDefaults.js", [], function() {
        return {
            colorByPoint: !0,
            stickyTracking: !1,
            ignoreHiddenPoint: !0,
            legendType: "point",
            lineWidth: 4,
            tooltip: {
                headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {point.key}</span><br/>',
                pointFormat: "{point.description}"
            },
            states: {
                hover: {
                    lineWidthPlus: 0
                }
            },
            dataLabels: {
                enabled: !0,
                allowOverlap: !0,
                alternate: !0,
                backgroundColor: "#ffffff",
                borderWidth: 1,
                borderColor: "#999999",
                borderRadius: 3,
                color: "#333333",
                connectorWidth: 1,
                distance: void 0,
                formatter: function() {
                    return (this.series.chart.styledMode ? '<span class="highcharts-color-' + this.point.colorIndex + '">● </span>' : '<span style="color:' + this.point.color + '">● </span>') + ('<span class="highcharts-strong">' + (this.key || "")) + "</span><br/>" + (this.point.label || "")
                },
                style: {
                    textOutline: "none",
                    fontWeight: "normal",
                    fontSize: "0.8em"
                },
                shadow: !1,
                verticalAlign: "middle"
            },
            marker: {
                enabledThreshold: 0,
                symbol: "square",
                radius: 6,
                lineWidth: 2,
                height: 15
            },
            showInLegend: !1,
            colorKey: "x",
            legendSymbol: "rectangle"
        }
    }), i(e, "Series/Timeline/TimelineSeries.js", [e["Core/Series/SeriesRegistry.js"], e["Series/Timeline/TimelinePoint.js"], e["Series/Timeline/TimelineSeriesDefaults.js"], e["Core/Utilities.js"]], function(t, e, i, s) {
        let {
            column: n,
            line: o
        } = t.seriesTypes, {
            addEvent: r,
            arrayMax: a,
            arrayMin: l,
            defined: h,
            extend: d,
            merge: p,
            pick: c
        } = s;
        class u extends o {
            alignDataLabel(t, e, i, s) {
                let n, o, r;
                let a = this.chart.inverted,
                    l = this.visibilityMap.filter(t => !!t),
                    h = this.visiblePointsCount || 0,
                    d = l.indexOf(t),
                    p = this.options.dataLabels,
                    u = t.userDLOptions || {},
                    y = p.alternate ? d && d !== h - 1 ? 2 : 1.5 : 1,
                    f = Math.floor(this.xAxis.len / h),
                    g = e.padding;
                t.visible && (n = Math.abs(u.x || t.options.dataLabels.x), a ? (o = (n - g) * 2 - (t.itemHeight || 0) / 2, r = {
                    width: c(p.style?.width, `${.4*this.yAxis.len}px`),
                    textOverflow: (e.width || 0) / o * (e.height || 0) / 2 > f * y ? "ellipsis" : "none"
                }) : r = {
                    width: (u.width || p.width || f * y - 2 * g) + "px"
                }, e.css(r), this.chart.styledMode || e.shadow(p.shadow)), super.alignDataLabel.apply(this, arguments)
            }
            bindAxes() {
                super.bindAxes(), this.xAxis.userOptions.type || (this.xAxis.categories = this.xAxis.hasNames = !0)
            }
            distributeDL() {
                let t = this.options.dataLabels,
                    e = this.chart.inverted,
                    i = 1;
                if (t) {
                    let s = c(t.distance, e ? 20 : 100);
                    for (let n of this.points) {
                        let o = {
                            [e ? "x" : "y"]: t.alternate && i % 2 ? -s : s
                        };
                        e && (o.align = t.alternate && i % 2 ? "right" : "left"), n.options.dataLabels = p(o, n.userDLOptions), i++
                    }
                }
            }
            generatePoints() {
                super.generatePoints();
                let t = this.points;
                for (let e = 0, i = t.length; e < i; ++e) t[e].applyOptions({
                    x: this.xData[e]
                }, this.xData[e])
            }
            getVisibilityMap() {
                return (this.data.length ? this.data : this.userOptions.data || []).map(t => !!t && !1 !== t.visible && !t.isNull && t)
            }
            getXExtremes(t) {
                let e = this,
                    i = t.filter((t, i) => e.points[i].isValid() && e.points[i].visible);
                return {
                    min: l(i),
                    max: a(i)
                }
            }
            init() {
                let t = this;
                super.init.apply(t, arguments), t.eventsToUnbind.push(r(t, "afterTranslate", function() {
                    let e, i = Number.MAX_VALUE;
                    for (let s of t.points) s.isInside = s.isInside && s.visible, s.visible && !s.isNull && (h(e) && (i = Math.min(i, Math.abs(s.plotX - e))), e = s.plotX);
                    t.closestPointRangePx = i
                })), t.eventsToUnbind.push(r(t, "drawDataLabels", function() {
                    t.distributeDL()
                })), t.eventsToUnbind.push(r(t, "afterDrawDataLabels", function() {
                    let e;
                    for (let i of t.points)(e = i.dataLabel) && (e.animate = function(t) {
                        return this.targetPosition && (this.targetPosition = t), this.renderer.Element.prototype.animate.apply(this, arguments)
                    }, e.targetPosition || (e.targetPosition = {}), i.drawConnector())
                })), t.eventsToUnbind.push(r(t.chart, "afterHideOverlappingLabel", function() {
                    for (let e of t.points) e.dataLabel && e.dataLabel.connector && e.dataLabel.oldOpacity !== e.dataLabel.newOpacity && e.alignConnector()
                }))
            }
            markerAttribs(t, e) {
                let i = this.options.marker,
                    s = t.marker || {},
                    n = s.symbol || i.symbol,
                    o = c(s.width, i.width, this.closestPointRangePx),
                    r = c(s.height, i.height),
                    a, l = 0;
                if (this.xAxis.dateTime) return super.markerAttribs(t, e);
                e && (a = i.states[e] || {}, l = c((s.states && s.states[e] || {}).radius, a.radius, l + (a.radiusPlus || 0))), t.hasImage = n && 0 === n.indexOf("url");
                let h = {
                    x: Math.floor(t.plotX) - o / 2 - l / 2,
                    y: t.plotY - r / 2 - l / 2,
                    width: o + l,
                    height: r + l
                };
                return this.chart.inverted ? {
                    y: h.x && h.width && this.xAxis.len - h.x - h.width,
                    x: h.y && h.y,
                    width: h.height,
                    height: h.width
                } : h
            }
            processData() {
                let t = 0,
                    e;
                for (let e of (this.visibilityMap = this.getVisibilityMap(), this.visibilityMap)) e && t++;
                for (e = 0, this.visiblePointsCount = t; e < this.xData.length; e++) this.yData[e] = 1;
                super.processData.call(this, arguments)
            }
        }
        return u.defaultOptions = p(o.defaultOptions, i), d(u.prototype, {
            drawTracker: n.prototype.drawTracker,
            pointClass: e,
            trackerGroups: ["markerGroup", "dataLabelsGroup"]
        }), t.registerSeriesType("timeline", u), u
    }), i(e, "masters/modules/timeline.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
}); //# sourceMappingURL=timeline.js.map