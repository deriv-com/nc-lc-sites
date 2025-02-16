!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * (c) 2009-2024 Sebastian Bochan, Rafal Sebestjanski
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/dumbbell", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function o(t, e, o, i) {
        t.hasOwnProperty(e) || (t[e] = i.apply(null, o), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: e,
                module: t[e]
            }
        })))
    }
    o(e, "Series/AreaRange/AreaRangePoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            area: {
                prototype: {
                    pointClass: o,
                    pointClass: {
                        prototype: i
                    }
                }
            }
        } = t.seriesTypes, {
            defined: s,
            isNumber: r
        } = e;
        return class extends o {
            setState() {
                let t = this.state,
                    e = this.series,
                    o = e.chart.polar;
                s(this.plotHigh) || (this.plotHigh = e.yAxis.toPixels(this.high, !0)), s(this.plotLow) || (this.plotLow = this.plotY = e.yAxis.toPixels(this.low, !0)), e.lowerStateMarkerGraphic = e.stateMarkerGraphic, e.stateMarkerGraphic = e.upperStateMarkerGraphic, this.graphic = this.graphics && this.graphics[1], this.plotY = this.plotHigh, o && r(this.plotHighX) && (this.plotX = this.plotHighX), i.setState.apply(this, arguments), this.state = t, this.plotY = this.plotLow, this.graphic = this.graphics && this.graphics[0], o && r(this.plotLowX) && (this.plotX = this.plotLowX), e.upperStateMarkerGraphic = e.stateMarkerGraphic, e.stateMarkerGraphic = e.lowerStateMarkerGraphic, e.lowerStateMarkerGraphic = void 0;
                let l = e.modifyMarkerSettings();
                i.setState.apply(this, arguments), e.restoreMarkerSettings(l)
            }
            haloPath() {
                let t = this.series.chart.polar,
                    e = [];
                return this.plotY = this.plotLow, t && r(this.plotLowX) && (this.plotX = this.plotLowX), this.isInside && (e = i.haloPath.apply(this, arguments)), this.plotY = this.plotHigh, t && r(this.plotHighX) && (this.plotX = this.plotHighX), this.isTopInside && (e = e.concat(i.haloPath.apply(this, arguments))), e
            }
            isValid() {
                return r(this.low) && r(this.high)
            }
        }
    }), o(e, "Series/Dumbbell/DumbbellPoint.js", [e["Series/AreaRange/AreaRangePoint.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            extend: o,
            pick: i
        } = e;
        class s extends t {
            setState() {
                let t = this.series,
                    e = t.chart,
                    s = t.options.lowColor,
                    r = t.options.marker,
                    l = t.options.lowMarker,
                    h = this.options,
                    n = h.lowColor,
                    a = this.zone && this.zone.color,
                    p = i(n, l?.fillColor, s, h.color, a, this.color, t.color),
                    c = "attr",
                    d, u;
                if (this.pointSetState.apply(this, arguments), !this.state) {
                    c = "animate";
                    let [t, s] = this.graphics || [];
                    t && !e.styledMode && (t.attr({
                        fill: p
                    }), s && (u = {
                        y: this.y,
                        zone: this.zone
                    }, this.y = this.high, this.zone = this.zone ? this.getZone() : void 0, d = i(this.marker ? this.marker.fillColor : void 0, r ? r.fillColor : void 0, h.color, this.zone ? this.zone.color : void 0, this.color), s.attr({
                        fill: d
                    }), o(this, u)))
                }
                this.connector?.[c](t.getConnectorAttribs(this))
            }
            destroy() {
                return this.graphic || (this.graphic = this.connector, this.connector = void 0), super.destroy()
            }
        }
        return o(s.prototype, {
            pointSetState: t.prototype.setState
        }), s
    }), o(e, "Series/Dumbbell/DumbbellSeriesDefaults.js", [], function() {
        return {
            trackByArea: !1,
            fillColor: "none",
            lineWidth: 0,
            pointRange: 1,
            connectorWidth: 1,
            stickyTracking: !1,
            groupPadding: .2,
            crisp: !1,
            pointPadding: .1,
            legendSymbol: "rectangle",
            lowColor: "#333333",
            states: {
                hover: {
                    lineWidthPlus: 0,
                    connectorWidthPlus: 1,
                    halo: !1
                }
            }
        }
    }), o(e, "Series/Dumbbell/DumbbellSeries.js", [e["Series/Dumbbell/DumbbellPoint.js"], e["Series/Dumbbell/DumbbellSeriesDefaults.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function(t, e, o, i, s, r) {
        let {
            noop: l
        } = o, {
            arearange: h,
            column: n,
            columnrange: a
        } = i.seriesTypes, {
            extend: p,
            merge: c,
            pick: d
        } = r;
        class u extends h {
            getConnectorAttribs(t) {
                let e = this.chart,
                    o = t.options,
                    i = this.options,
                    r = this.xAxis,
                    l = this.yAxis,
                    h = d(i.states && i.states.hover && i.states.hover.connectorWidthPlus, 1),
                    n = d(o.dashStyle, i.dashStyle),
                    a = l.toPixels(i.threshold || 0, !0),
                    c = e.inverted ? l.len - a : a,
                    u = d(o.connectorWidth, i.connectorWidth),
                    g = d(o.connectorColor, i.connectorColor, o.color, t.zone ? t.zone.color : void 0, t.color),
                    y = d(t.plotLow, t.plotY),
                    f = d(t.plotHigh, c),
                    m;
                if ("number" != typeof y) return {};
                t.state && (u += h), y < 0 ? y = 0 : y >= l.len && (y = l.len), f < 0 ? f = 0 : f >= l.len && (f = l.len), (t.plotX < 0 || t.plotX > r.len) && (u = 0), t.graphics && t.graphics[1] && (m = {
                    y: t.y,
                    zone: t.zone
                }, t.y = t.high, t.zone = t.zone ? t.getZone() : void 0, g = d(o.connectorColor, i.connectorColor, o.color, t.zone ? t.zone.color : void 0, t.color), p(t, m));
                let C = {
                    d: s.prototype.crispLine([
                        ["M", t.plotX, y],
                        ["L", t.plotX, f]
                    ], u, "ceil")
                };
                return !e.styledMode && (C.stroke = g, C["stroke-width"] = u, n && (C.dashstyle = n)), C
            }
            drawConnector(t) {
                let e = d(this.options.animationLimit, 250),
                    o = t.connector && this.chart.pointCount < e ? "animate" : "attr";
                t.connector || (t.connector = this.chart.renderer.path().addClass("highcharts-lollipop-stem").attr({
                    zIndex: -1
                }).add(this.group)), t.connector[o](this.getConnectorAttribs(t))
            }
            getColumnMetrics() {
                let t = n.prototype.getColumnMetrics.apply(this, arguments);
                return t.offset += t.width / 2, t
            }
            translate() {
                let t = this.chart.inverted;
                for (let e of (this.setShapeArgs.apply(this), this.translatePoint.apply(this, arguments), this.points)) {
                    let {
                        pointWidth: o,
                        shapeArgs: i = {},
                        tooltipPos: s
                    } = e;
                    e.plotX = i.x || 0, i.x = e.plotX - o / 2, s && (t ? s[1] = this.xAxis.len - e.plotX : s[0] = e.plotX)
                }
                this.columnMetrics.offset -= this.columnMetrics.width / 2
            }
            drawPoints() {
                let t = this.chart,
                    e = this.points.length,
                    o = this.lowColor = this.options.lowColor,
                    i = this.options.lowMarker,
                    s = 0,
                    r, l, h;
                for (this.seriesDrawPoints.apply(this, arguments); s < e;) {
                    let [e, n] = (l = this.points[s]).graphics || [];
                    this.drawConnector(l), n && (n.element.point = l, n.addClass("highcharts-lollipop-high")), (l.connector?.element).point = l, e && (h = l.zone && l.zone.color, r = d(l.options.lowColor, i?.fillColor, o, l.options.color, h, l.color, this.color), t.styledMode || e.attr({
                        fill: r
                    }), e.addClass("highcharts-lollipop-low")), s++
                }
            }
            markerAttribs() {
                let t = super.markerAttribs.apply(this, arguments);
                return t.x = Math.floor(t.x || 0), t.y = Math.floor(t.y || 0), t
            }
            pointAttribs(t, e) {
                let o = super.pointAttribs.apply(this, arguments);
                return "hover" === e && delete o.fill, o
            }
            setShapeArgs() {
                n.prototype.translate.apply(this), a.prototype.afterColumnTranslate.apply(this)
            }
        }
        return u.defaultOptions = c(h.defaultOptions, e), p(u.prototype, {
            crispCol: n.prototype.crispCol,
            drawGraph: l,
            drawTracker: n.prototype.drawTracker,
            pointClass: t,
            seriesDrawPoints: h.prototype.drawPoints,
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
            translatePoint: h.prototype.translate
        }), i.registerSeriesType("dumbbell", u), u
    }), o(e, "masters/modules/dumbbell.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
}); //# sourceMappingURL=dumbbell.js.map