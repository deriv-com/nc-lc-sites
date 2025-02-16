!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Annotations module
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/annotations", ["highcharts"], function(i) {
        return t(i), t.Highcharts = i, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var i = t ? t._modules : {};

    function s(t, i, s, e) {
        t.hasOwnProperty(i) || (t[i] = e.apply(null, s), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: i,
                module: t[i]
            }
        })))
    }
    s(i, "Extensions/Annotations/AnnotationChart.js", [i["Core/Utilities.js"]], function(t) {
        var i;
        let {
            addEvent: s,
            erase: e,
            find: o,
            fireEvent: n,
            pick: a,
            wrap: r
        } = t;

        function l(t, i) {
            let s = this.initAnnotation(t);
            return this.options.annotations.push(s.options), a(i, !0) && (s.redraw(), s.graphic.attr({
                opacity: 1
            })), s
        }

        function h() {
            let t = this;
            t.plotBoxClip = this.renderer.clipRect(this.plotBox), t.controlPointsGroup = t.renderer.g("control-points").attr({
                zIndex: 99
            }).clip(t.plotBoxClip).add(), t.options.annotations.forEach((i, s) => {
                if (!t.annotations.some(t => t.options === i)) {
                    let e = t.initAnnotation(i);
                    t.options.annotations[s] = e.options
                }
            }), t.drawAnnotations(), s(t, "redraw", t.drawAnnotations), s(t, "destroy", function() {
                t.plotBoxClip.destroy(), t.controlPointsGroup.destroy()
            }), s(t, "exportData", function(i) {
                let s = t.annotations,
                    e = (this.options.exporting && this.options.exporting.csv || {}).columnHeaderFormatter,
                    o = !i.dataRows[1].xValues,
                    n = t.options.lang && t.options.lang.exportData && t.options.lang.exportData.annotationHeader,
                    a = i.dataRows[0].length,
                    r = t.options.exporting && t.options.exporting.csv && t.options.exporting.csv.annotations && t.options.exporting.csv.annotations.itemDelimiter,
                    l = t.options.exporting && t.options.exporting.csv && t.options.exporting.csv.annotations && t.options.exporting.csv.annotations.join;
                s.forEach(t => {
                    t.options.labelOptions && t.options.labelOptions.includeInDataExport && t.labels.forEach(t => {
                        if (t.options.text) {
                            let s = t.options.text;
                            t.points.forEach(t => {
                                let e = t.x,
                                    o = t.series.xAxis ? t.series.xAxis.index : -1,
                                    n = !1;
                                if (-1 === o) {
                                    let t = i.dataRows[0].length,
                                        a = Array(t);
                                    for (let i = 0; i < t; ++i) a[i] = "";
                                    a.push(s), a.xValues = [], a.xValues[o] = e, i.dataRows.push(a), n = !0
                                }
                                if (n || i.dataRows.forEach(t => {
                                        !n && t.xValues && void 0 !== o && e === t.xValues[o] && (l && t.length > a ? t[t.length - 1] += r + s : t.push(s), n = !0)
                                    }), !n) {
                                    let t = i.dataRows[0].length,
                                        n = Array(t);
                                    for (let i = 0; i < t; ++i) n[i] = "";
                                    n[0] = e, n.push(s), n.xValues = [], void 0 !== o && (n.xValues[o] = e), i.dataRows.push(n)
                                }
                            })
                        }
                    })
                });
                let h = 0;
                i.dataRows.forEach(t => {
                    h = Math.max(h, t.length)
                });
                let c = h - i.dataRows[0].length;
                for (let t = 0; t < c; t++) {
                    let s = function(t) {
                        let i;
                        return e && !1 !== (i = e(t)) ? i : (i = n + " " + t, o) ? {
                            columnTitle: i,
                            topLevelColumnTitle: i
                        } : i
                    }(t + 1);
                    o ? (i.dataRows[0].push(s.topLevelColumnTitle), i.dataRows[1].push(s.columnTitle)) : i.dataRows[0].push(s)
                }
            })
        }

        function c() {
            this.plotBoxClip.attr(this.plotBox), this.annotations.forEach(t => {
                t.redraw(), t.graphic.animate({
                    opacity: 1
                }, t.animationConfig)
            })
        }

        function p(t) {
            let i = this.annotations,
                s = "annotations" === t.coll ? t : o(i, function(i) {
                    return i.options.id === t
                });
            s && (n(s, "remove"), e(this.options.annotations, s.options), e(i, s), s.destroy())
        }

        function d() {
            this.annotations = [], this.options.annotations || (this.options.annotations = [])
        }

        function u(t) {
            this.chart.hasDraggedAnnotation || t.apply(this, Array.prototype.slice.call(arguments, 1))
        }
        return (i || (i = {})).compose = function(t, i, e) {
            let o = i.prototype;
            if (!o.addAnnotation) {
                let n = e.prototype;
                s(i, "afterInit", d), o.addAnnotation = l, o.callbacks.push(h), o.collectionsWithInit.annotations = [l], o.collectionsWithUpdate.push("annotations"), o.drawAnnotations = c, o.removeAnnotation = p, o.initAnnotation = function(i) {
                    let s = new(t.types[i.type] || t)(this, i);
                    return this.annotations.push(s), s
                }, r(n, "onContainerMouseDown", u)
            }
        }, i
    }), s(i, "Extensions/Annotations/AnnotationDefaults.js", [i["Core/Utilities.js"]], function(t) {
        let {
            defined: i
        } = t;
        return {
            visible: !0,
            animation: {},
            crop: !0,
            draggable: "xy",
            labelOptions: {
                align: "center",
                allowOverlap: !1,
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                borderColor: "#000000",
                borderRadius: 3,
                borderWidth: 1,
                className: "highcharts-no-tooltip",
                crop: !1,
                formatter: function() {
                    return i(this.y) ? "" + this.y : "Annotation label"
                },
                includeInDataExport: !0,
                overflow: "justify",
                padding: 5,
                shadow: !1,
                shape: "callout",
                style: {
                    fontSize: "0.7em",
                    fontWeight: "normal",
                    color: "contrast"
                },
                useHTML: !1,
                verticalAlign: "bottom",
                x: 0,
                y: -16
            },
            shapeOptions: {
                stroke: "rgba(0, 0, 0, 0.75)",
                strokeWidth: 1,
                fill: "rgba(0, 0, 0, 0.75)",
                r: 0,
                snap: 2
            },
            controlPointOptions: {
                events: {},
                style: {
                    cursor: "pointer",
                    fill: "#ffffff",
                    stroke: "#000000",
                    "stroke-width": 2
                },
                height: 10,
                symbol: "circle",
                visible: !1,
                width: 10
            },
            events: {},
            zIndex: 6
        }
    }), s(i, "Extensions/Annotations/EventEmitter.js", [i["Core/Globals.js"], i["Core/Utilities.js"]], function(t, i) {
        let {
            doc: s,
            isTouchDevice: e
        } = t, {
            addEvent: o,
            fireEvent: n,
            objectEach: a,
            pick: r,
            removeEvent: l
        } = i;
        return class {
            addEvents() {
                let t = this,
                    i = function(i) {
                        o(i, e ? "touchstart" : "mousedown", i => {
                            t.onMouseDown(i)
                        }, {
                            passive: !1
                        })
                    };
                if (i(this.graphic.element), (t.labels || []).forEach(t => {
                        t.options.useHTML && t.graphic.text && i(t.graphic.text.element)
                    }), a(t.options.events, (i, s) => {
                        let e = function(e) {
                            "click" === s && t.cancelClick || i.call(t, t.chart.pointer?.normalize(e), t.target)
                        }; - 1 === (t.nonDOMEvents || []).indexOf(s) ? (o(t.graphic.element, s, e, {
                            passive: !1
                        }), t.graphic.div && o(t.graphic.div, s, e, {
                            passive: !1
                        })) : o(t, s, e, {
                            passive: !1
                        })
                    }), t.options.draggable && (o(t, "drag", t.onDrag), !t.graphic.renderer.styledMode)) {
                    let i = {
                        cursor: {
                            x: "ew-resize",
                            y: "ns-resize",
                            xy: "move"
                        } [t.options.draggable]
                    };
                    t.graphic.css(i), (t.labels || []).forEach(t => {
                        t.options.useHTML && t.graphic.text && t.graphic.text.css(i)
                    })
                }
                t.isUpdating || n(t, "add")
            }
            destroy() {
                this.removeDocEvents(), l(this), this.hcEvents = null
            }
            mouseMoveToRadians(t, i, s) {
                let e = t.prevChartY - s,
                    o = t.prevChartX - i,
                    n = t.chartY - s,
                    a = t.chartX - i,
                    r;
                return this.chart.inverted && (r = o, o = e, e = r, r = a, a = n, n = r), Math.atan2(n, a) - Math.atan2(e, o)
            }
            mouseMoveToScale(t, i, s) {
                let e = t.prevChartX - i,
                    o = t.prevChartY - s,
                    n = t.chartX - i,
                    a = t.chartY - s,
                    r = (n || 1) / (e || 1),
                    l = (a || 1) / (o || 1);
                if (this.chart.inverted) {
                    let t = l;
                    l = r, r = t
                }
                return {
                    x: r,
                    y: l
                }
            }
            mouseMoveToTranslation(t) {
                let i = t.chartX - t.prevChartX,
                    s = t.chartY - t.prevChartY,
                    e;
                return this.chart.inverted && (e = s, s = i, i = e), {
                    x: i,
                    y: s
                }
            }
            onDrag(t) {
                if (this.chart.isInsidePlot(t.chartX - this.chart.plotLeft, t.chartY - this.chart.plotTop, {
                        visiblePlotOnly: !0
                    })) {
                    let i = this.mouseMoveToTranslation(t);
                    "x" === this.options.draggable && (i.y = 0), "y" === this.options.draggable && (i.x = 0), this.points.length ? this.translate(i.x, i.y) : (this.shapes.forEach(t => t.translate(i.x, i.y)), this.labels.forEach(t => t.translate(i.x, i.y))), this.redraw(!1)
                }
            }
            onMouseDown(t) {
                if (t.preventDefault && t.preventDefault(), 2 === t.button) return;
                let i = this,
                    a = i.chart.pointer,
                    l = t?.sourceCapabilities?.firesTouchEvents || !1,
                    h = (t = a?.normalize(t) || t).chartX,
                    c = t.chartY;
                i.cancelClick = !1, i.chart.hasDraggedAnnotation = !0, i.removeDrag = o(s, e || l ? "touchmove" : "mousemove", function(t) {
                    i.hasDragged = !0, (t = a?.normalize(t) || t).prevChartX = h, t.prevChartY = c, n(i, "drag", t), h = t.chartX, c = t.chartY
                }, e || l ? {
                    passive: !1
                } : void 0), i.removeMouseUp = o(s, e || l ? "touchend" : "mouseup", function() {
                    let t = r(i.target && i.target.annotation, i.target);
                    t && (t.cancelClick = i.hasDragged), i.cancelClick = i.hasDragged, i.hasDragged = !1, i.chart.hasDraggedAnnotation = !1, n(r(t, i), "afterUpdate"), i.onMouseUp()
                }, e || l ? {
                    passive: !1
                } : void 0)
            }
            onMouseUp() {
                let t = this.chart,
                    i = this.target || this,
                    s = t.options.annotations,
                    e = t.annotations.indexOf(i);
                this.removeDocEvents(), s[e] = i.options
            }
            removeDocEvents() {
                this.removeDrag && (this.removeDrag = this.removeDrag()), this.removeMouseUp && (this.removeMouseUp = this.removeMouseUp())
            }
        }
    }), s(i, "Extensions/Annotations/ControlPoint.js", [i["Extensions/Annotations/EventEmitter.js"], i["Core/Utilities.js"]], function(t, i) {
        let {
            merge: s,
            pick: e
        } = i;
        return class extends t {
            constructor(t, i, s, o) {
                super(), this.nonDOMEvents = ["drag"], this.chart = t, this.target = i, this.options = s, this.index = e(s.index, o)
            }
            destroy() {
                super.destroy(), this.graphic && (this.graphic = this.graphic.destroy()), this.chart = null, this.target = null, this.options = null
            }
            redraw(t) {
                this.graphic[t ? "animate" : "attr"](this.options.positioner.call(this, this.target))
            }
            render() {
                let t = this.chart,
                    i = this.options;
                this.graphic = t.renderer.symbol(i.symbol, 0, 0, i.width, i.height).add(t.controlPointsGroup).css(i.style), this.setVisibility(i.visible), this.addEvents()
            }
            setVisibility(t) {
                this.graphic[t ? "show" : "hide"](), this.options.visible = t
            }
            update(t) {
                let i = this.chart,
                    e = this.target,
                    o = this.index,
                    n = s(!0, this.options, t);
                this.destroy(), this.constructor(i, e, n, o), this.render(i.controlPointsGroup), this.redraw()
            }
        }
    }), s(i, "Extensions/Annotations/MockPoint.js", [i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(t, i) {
        let {
            series: {
                prototype: s
            }
        } = t, {
            defined: e,
            fireEvent: o
        } = i;
        class n {
            static fromPoint(t) {
                return new n(t.series.chart, null, {
                    x: t.x,
                    y: t.y,
                    xAxis: t.series.xAxis,
                    yAxis: t.series.yAxis
                })
            }
            static pointToPixels(t, i) {
                let s = t.series,
                    e = s.chart,
                    o = t.plotX || 0,
                    n = t.plotY || 0,
                    a;
                return e.inverted && (t.mock ? (o = t.plotY, n = t.plotX) : (o = e.plotWidth - (t.plotY || 0), n = e.plotHeight - (t.plotX || 0))), s && !i && (o += (a = s.getPlotBox()).translateX, n += a.translateY), {
                    x: o,
                    y: n
                }
            }
            static pointToOptions(t) {
                return {
                    x: t.x,
                    y: t.y,
                    xAxis: t.series.xAxis,
                    yAxis: t.series.yAxis
                }
            }
            constructor(t, i, e) {
                this.mock = !0, this.series = {
                    visible: !0,
                    chart: t,
                    getPlotBox: s.getPlotBox
                }, this.target = i || null, this.options = e, this.applyOptions(this.getOptions())
            }
            applyOptions(t) {
                this.command = t.command, this.setAxis(t, "x"), this.setAxis(t, "y"), this.refresh()
            }
            getLabelConfig() {
                return {
                    x: this.x,
                    y: this.y,
                    point: this
                }
            }
            getOptions() {
                return this.hasDynamicOptions() ? this.options(this.target) : this.options
            }
            hasDynamicOptions() {
                return "function" == typeof this.options
            }
            isInsidePlot() {
                let t = this.plotX,
                    i = this.plotY,
                    s = this.series.xAxis,
                    n = this.series.yAxis,
                    a = {
                        x: t,
                        y: i,
                        isInsidePlot: !0,
                        options: {}
                    };
                return s && (a.isInsidePlot = e(t) && t >= 0 && t <= s.len), n && (a.isInsidePlot = a.isInsidePlot && e(i) && i >= 0 && i <= n.len), o(this.series.chart, "afterIsInsidePlot", a), a.isInsidePlot
            }
            refresh() {
                let t = this.series,
                    i = t.xAxis,
                    s = t.yAxis,
                    e = this.getOptions();
                i ? (this.x = e.x, this.plotX = i.toPixels(e.x, !0)) : (this.x = void 0, this.plotX = e.x), s ? (this.y = e.y, this.plotY = s.toPixels(e.y, !0)) : (this.y = null, this.plotY = e.y), this.isInside = this.isInsidePlot()
            }
            refreshOptions() {
                let t = this.series,
                    i = t.xAxis,
                    s = t.yAxis;
                this.x = this.options.x = i ? this.options.x = i.toValue(this.plotX, !0) : this.plotX, this.y = this.options.y = s ? s.toValue(this.plotY, !0) : this.plotY
            }
            rotate(t, i, s) {
                if (!this.hasDynamicOptions()) {
                    let e = Math.cos(s),
                        o = Math.sin(s),
                        n = this.plotX - t,
                        a = this.plotY - i;
                    this.plotX = n * e - a * o + t, this.plotY = n * o + a * e + i, this.refreshOptions()
                }
            }
            scale(t, i, s, e) {
                if (!this.hasDynamicOptions()) {
                    let o = this.plotX * s,
                        n = this.plotY * e;
                    this.plotX = (1 - s) * t + o, this.plotY = (1 - e) * i + n, this.refreshOptions()
                }
            }
            setAxis(t, i) {
                let s = i + "Axis",
                    o = t[s],
                    n = this.series.chart;
                this.series[s] = "object" == typeof o ? o : e(o) ? n[s][o] || n.get(o) : null
            }
            toAnchor() {
                let t = [this.plotX, this.plotY, 0, 0];
                return this.series.chart.inverted && (t[0] = this.plotY, t[1] = this.plotX), t
            }
            translate(t, i, s, e) {
                this.hasDynamicOptions() || (this.plotX += s, this.plotY += e, this.refreshOptions())
            }
        }
        return n
    }), s(i, "Extensions/Annotations/ControlTarget.js", [i["Extensions/Annotations/ControlPoint.js"], i["Extensions/Annotations/MockPoint.js"], i["Core/Utilities.js"]], function(t, i, s) {
        var e;
        return function(e) {
            function o() {
                let i = this.controlPoints,
                    e = this.options.controlPoints || [];
                e.forEach((o, n) => {
                    let a = s.merge(this.options.controlPointOptions, o);
                    a.index || (a.index = n), e[n] = a, i.push(new t(this.chart, this, a))
                })
            }

            function n(t) {
                let i = t.series.getPlotBox(),
                    e = t.series.chart,
                    o = t.mock ? t.toAnchor() : e.tooltip && e.tooltip.getAnchor.call({
                        chart: t.series.chart
                    }, t) || [0, 0, 0, 0],
                    n = {
                        x: o[0] + (this.options.x || 0),
                        y: o[1] + (this.options.y || 0),
                        height: o[2] || 0,
                        width: o[3] || 0
                    };
                return {
                    relativePosition: n,
                    absolutePosition: s.merge(n, {
                        x: n.x + (t.mock ? i.translateX : e.plotLeft),
                        y: n.y + (t.mock ? i.translateY : e.plotTop)
                    })
                }
            }

            function a() {
                this.controlPoints.forEach(t => t.destroy()), this.chart = null, this.controlPoints = null, this.points = null, this.options = null, this.annotation && (this.annotation = null)
            }

            function r() {
                let t = this.options;
                return t.points || t.point && s.splat(t.point)
            }

            function l() {
                let t, i;
                let s = this.getPointsOptions(),
                    e = this.points,
                    o = s && s.length || 0;
                for (t = 0; t < o; t++) {
                    if (!(i = this.point(s[t], e[t]))) {
                        e.length = 0;
                        return
                    }
                    i.mock && i.refresh(), e[t] = i
                }
                return e
            }

            function h(t, e) {
                if (t && t.series) return t;
                if (!e || null === e.series) {
                    if (s.isObject(t)) e = new i(this.chart, this, t);
                    else if (s.isString(t)) e = this.chart.get(t) || null;
                    else if ("function" == typeof t) {
                        let s = t.call(e, this);
                        e = s.series ? s : new i(this.chart, this, t)
                    }
                }
                return e
            }

            function c(t) {
                this.controlPoints.forEach(i => i.redraw(t))
            }

            function p() {
                this.controlPoints.forEach(t => t.render())
            }

            function d(t, i, s, e, o) {
                if (this.chart.inverted) {
                    let t = i;
                    i = s, s = t
                }
                this.points.forEach((n, a) => this.transformPoint(t, i, s, e, o, a), this)
            }

            function u(t, s, e, o, n, a) {
                let r = this.points[a];
                r.mock || (r = this.points[a] = i.fromPoint(r)), r[t](s, e, o, n)
            }

            function g(t, i) {
                this.transform("translate", null, null, t, i)
            }

            function m(t, i, s) {
                this.transformPoint("translate", null, null, t, i, s)
            }
            e.compose = function(t) {
                let i = t.prototype;
                i.addControlPoints || s.merge(!0, i, {
                    addControlPoints: o,
                    anchor: n,
                    destroyControlTarget: a,
                    getPointsOptions: r,
                    linkPoints: l,
                    point: h,
                    redrawControlPoints: c,
                    renderControlPoints: p,
                    transform: d,
                    transformPoint: u,
                    translate: g,
                    translatePoint: m
                })
            }
        }(e || (e = {})), e
    }), s(i, "Extensions/Annotations/Controllables/Controllable.js", [i["Extensions/Annotations/ControlTarget.js"], i["Core/Utilities.js"]], function(t, i) {
        let {
            merge: s
        } = i;
        class e {
            constructor(t, i, s, e) {
                this.annotation = t, this.chart = t.chart, this.collection = "label" === e ? "labels" : "shapes", this.controlPoints = [], this.options = i, this.points = [], this.index = s, this.itemType = e, this.init(t, i, s)
            }
            attr(...t) {
                this.graphic.attr.apply(this.graphic, arguments)
            }
            attrsFromOptions(t) {
                let i, s;
                let e = this.constructor.attrsMap,
                    o = {},
                    n = this.chart.styledMode;
                for (i in t) s = e[i], void 0 === e[i] || n && -1 !== ["fill", "stroke", "stroke-width"].indexOf(s) || (o[s] = t[i]);
                return o
            }
            destroy() {
                this.graphic && (this.graphic = this.graphic.destroy()), this.tracker && (this.tracker = this.tracker.destroy()), this.destroyControlTarget()
            }
            init(t, i, s) {
                this.annotation = t, this.chart = t.chart, this.options = i, this.points = [], this.controlPoints = [], this.index = s, this.linkPoints(), this.addControlPoints()
            }
            redraw(t) {
                this.redrawControlPoints(t)
            }
            render(t) {
                this.renderControlPoints()
            }
            rotate(t, i, s) {
                this.transform("rotate", t, i, s)
            }
            scale(t, i, s, e) {
                this.transform("scale", t, i, s, e)
            }
            setControlPointsVisibility(t) {
                this.controlPoints.forEach(i => {
                    i.setVisibility(t)
                })
            }
            shouldBeDrawn() {
                return !!this.points.length
            }
            translateShape(t, i, s) {
                let e = this.annotation.chart,
                    o = this.annotation.userOptions,
                    n = e.annotations.indexOf(this.annotation),
                    a = e.options.annotations[n];
                this.translatePoint(t, i, 0), s && this.translatePoint(t, i, 1), a[this.collection][this.index].point = this.options.point, o[this.collection][this.index].point = this.options.point
            }
            update(t) {
                let i = this.annotation,
                    e = s(!0, this.options, t),
                    o = this.graphic.parentGroup,
                    n = this.constructor;
                this.destroy(), s(!0, this, new n(i, e, this.index, this.itemType)), this.render(o), this.redraw()
            }
        }
        return t.compose(e), e
    }), s(i, "Extensions/Annotations/Controllables/ControllableDefaults.js", [], function() {
        return {
            defaultMarkers: {
                arrow: {
                    tagName: "marker",
                    attributes: {
                        id: "arrow",
                        refY: 5,
                        refX: 9,
                        markerWidth: 10,
                        markerHeight: 10
                    },
                    children: [{
                        tagName: "path",
                        attributes: {
                            d: "M 0 0 L 10 5 L 0 10 Z",
                            "stroke-width": 0
                        }
                    }]
                },
                "reverse-arrow": {
                    tagName: "marker",
                    attributes: {
                        id: "reverse-arrow",
                        refY: 5,
                        refX: 1,
                        markerWidth: 10,
                        markerHeight: 10
                    },
                    children: [{
                        tagName: "path",
                        attributes: {
                            d: "M 0 5 L 10 0 L 10 10 Z",
                            "stroke-width": 0
                        }
                    }]
                }
            }
        }
    }), s(i, "Extensions/Annotations/Controllables/ControllablePath.js", [i["Extensions/Annotations/Controllables/Controllable.js"], i["Extensions/Annotations/Controllables/ControllableDefaults.js"], i["Core/Globals.js"], i["Core/Utilities.js"]], function(t, i, s, e) {
        let {
            defaultMarkers: o
        } = i, {
            addEvent: n,
            defined: a,
            extend: r,
            merge: l,
            uniqueKey: h
        } = e, c = u("marker-end"), p = u("marker-start"), d = "rgba(192,192,192," + (s.svg ? 1e-4 : .002) + ")";

        function u(t) {
            return function(i) {
                this.attr(t, "url(#" + i + ")")
            }
        }

        function g() {
            this.options.defs = l(o, this.options.defs || {})
        }

        function m(t, i) {
            let s = {
                    attributes: {
                        id: t
                    }
                },
                e = {
                    stroke: i.color || "none",
                    fill: i.color || "rgba(0, 0, 0, 0.75)"
                };
            s.children = i.children && i.children.map(function(t) {
                return l(e, t)
            });
            let o = l(!0, {
                    attributes: {
                        markerWidth: 20,
                        markerHeight: 20,
                        refX: 0,
                        refY: 0,
                        orient: "auto"
                    }
                }, i, s),
                n = this.definition(o);
            return n.id = t, n
        }
        class x extends t {
            static compose(t, i) {
                let s = i.prototype;
                s.addMarker || (n(t, "afterGetContainer", g), s.addMarker = m)
            }
            constructor(t, i, s) {
                super(t, i, s, "shape"), this.type = "path"
            }
            toD() {
                let t = this.options.d;
                if (t) return "function" == typeof t ? t.call(this) : t;
                let i = this.points,
                    s = i.length,
                    e = [],
                    o = s,
                    n = i[0],
                    a = o && this.anchor(n).absolutePosition,
                    r = 0,
                    l;
                if (a)
                    for (e.push(["M", a.x, a.y]); ++r < s && o;) l = (n = i[r]).command || "L", a = this.anchor(n).absolutePosition, "M" === l ? e.push([l, a.x, a.y]) : "L" === l ? e.push([l, a.x, a.y]) : "Z" === l && e.push([l]), o = n.series.visible;
                return o && this.graphic ? this.chart.renderer.crispLine(e, this.graphic.strokeWidth()) : null
            }
            shouldBeDrawn() {
                return super.shouldBeDrawn() || !!this.options.d
            }
            render(t) {
                let i = this.options,
                    s = this.attrsFromOptions(i);
                this.graphic = this.annotation.chart.renderer.path([
                    ["M", 0, 0]
                ]).attr(s).add(t), i.className && this.graphic.addClass(i.className), this.tracker = this.annotation.chart.renderer.path([
                    ["M", 0, 0]
                ]).addClass("highcharts-tracker-line").attr({
                    zIndex: 2
                }).add(t), this.annotation.chart.styledMode || this.tracker.attr({
                    "stroke-linejoin": "round",
                    stroke: d,
                    fill: d,
                    "stroke-width": this.graphic.strokeWidth() + 2 * i.snap
                }), super.render(), r(this.graphic, {
                    markerStartSetter: p,
                    markerEndSetter: c
                }), this.setMarkers(this)
            }
            redraw(t) {
                if (this.graphic) {
                    let i = this.toD(),
                        s = t ? "animate" : "attr";
                    i ? (this.graphic[s]({
                        d: i
                    }), this.tracker[s]({
                        d: i
                    })) : (this.graphic.attr({
                        d: "M 0 -9000000000"
                    }), this.tracker.attr({
                        d: "M 0 -9000000000"
                    })), this.graphic.placed = this.tracker.placed = !!i
                }
                super.redraw(t)
            }
            setMarkers(t) {
                let i = t.options,
                    s = t.chart,
                    e = s.options.defs,
                    o = i.fill,
                    n = a(o) && "none" !== o ? o : i.stroke;
                ["markerStart", "markerEnd"].forEach(function(o) {
                    let a = i[o],
                        r, c, p, d;
                    if (a) {
                        for (p in e)
                            if ((a === ((r = e[p]).attributes && r.attributes.id) || a === r.id) && "marker" === r.tagName) {
                                c = r;
                                break
                            } c && (d = t[o] = s.renderer.addMarker((i.id || h()) + "-" + a, l(c, {
                            color: n
                        })), t.attr(o, d.getAttribute("id")))
                    }
                })
            }
        }
        return x.attrsMap = {
            dashStyle: "dashstyle",
            strokeWidth: "stroke-width",
            stroke: "stroke",
            fill: "fill",
            zIndex: "zIndex"
        }, x
    }), s(i, "Extensions/Annotations/Controllables/ControllableRect.js", [i["Extensions/Annotations/Controllables/Controllable.js"], i["Extensions/Annotations/Controllables/ControllablePath.js"], i["Core/Utilities.js"]], function(t, i, s) {
        let {
            merge: e
        } = s;
        class o extends t {
            constructor(t, i, s) {
                super(t, i, s, "shape"), this.type = "rect", this.translate = super.translateShape
            }
            render(t) {
                let i = this.attrsFromOptions(this.options);
                this.graphic = this.annotation.chart.renderer.rect(0, -9e9, 0, 0).attr(i).add(t), super.render()
            }
            redraw(t) {
                if (this.graphic) {
                    let i = this.anchor(this.points[0]).absolutePosition;
                    i ? this.graphic[t ? "animate" : "attr"]({
                        x: i.x,
                        y: i.y,
                        width: this.options.width,
                        height: this.options.height
                    }) : this.attr({
                        x: 0,
                        y: -9e9
                    }), this.graphic.placed = !!i
                }
                super.redraw(t)
            }
        }
        return o.attrsMap = e(i.attrsMap, {
            width: "width",
            height: "height"
        }), o
    }), s(i, "Extensions/Annotations/Controllables/ControllableCircle.js", [i["Extensions/Annotations/Controllables/Controllable.js"], i["Extensions/Annotations/Controllables/ControllablePath.js"], i["Core/Utilities.js"]], function(t, i, s) {
        let {
            merge: e
        } = s;
        class o extends t {
            constructor(t, i, s) {
                super(t, i, s, "shape"), this.type = "circle", this.translate = super.translateShape
            }
            redraw(t) {
                if (this.graphic) {
                    let i = this.anchor(this.points[0]).absolutePosition;
                    i ? this.graphic[t ? "animate" : "attr"]({
                        x: i.x,
                        y: i.y,
                        r: this.options.r
                    }) : this.graphic.attr({
                        x: 0,
                        y: -9e9
                    }), this.graphic.placed = !!i
                }
                super.redraw.call(this, t)
            }
            render(t) {
                let i = this.attrsFromOptions(this.options);
                this.graphic = this.annotation.chart.renderer.circle(0, -9e9, 0).attr(i).add(t), super.render()
            }
            setRadius(t) {
                this.options.r = t
            }
        }
        return o.attrsMap = e(i.attrsMap, {
            r: "r"
        }), o
    }), s(i, "Extensions/Annotations/Controllables/ControllableEllipse.js", [i["Extensions/Annotations/Controllables/Controllable.js"], i["Extensions/Annotations/Controllables/ControllablePath.js"], i["Core/Utilities.js"]], function(t, i, s) {
        let {
            merge: e,
            defined: o
        } = s;
        class n extends t {
            constructor(t, i, s) {
                super(t, i, s, "shape"), this.type = "ellipse"
            }
            init(t, i, s) {
                o(i.yAxis) && i.points.forEach(t => {
                    t.yAxis = i.yAxis
                }), o(i.xAxis) && i.points.forEach(t => {
                    t.xAxis = i.xAxis
                }), super.init(t, i, s)
            }
            render(t) {
                this.graphic = this.annotation.chart.renderer.createElement("ellipse").attr(this.attrsFromOptions(this.options)).add(t), super.render()
            }
            translate(t, i) {
                super.translateShape(t, i, !0)
            }
            getDistanceFromLine(t, i, s, e) {
                return Math.abs((i.y - t.y) * s - (i.x - t.x) * e + i.x * t.y - i.y * t.x) / Math.sqrt((i.y - t.y) * (i.y - t.y) + (i.x - t.x) * (i.x - t.x))
            }
            getAttrs(t, i) {
                let s = t.x,
                    e = t.y,
                    o = i.x,
                    n = i.y,
                    a = (s + o) / 2,
                    r = 180 * Math.atan((n - e) / (o - s)) / Math.PI;
                return a < s && (r += 180), {
                    cx: a,
                    cy: (e + n) / 2,
                    rx: Math.sqrt((s - o) * (s - o) / 4 + (e - n) * (e - n) / 4),
                    ry: this.getRY(),
                    angle: r
                }
            }
            getRY() {
                let t = this.getYAxis();
                return o(t) ? Math.abs(t.toPixels(this.options.ry) - t.toPixels(0)) : this.options.ry
            }
            getYAxis() {
                let t = this.options.yAxis;
                return this.chart.yAxis[t]
            }
            getAbsolutePosition(t) {
                return this.anchor(t).absolutePosition
            }
            redraw(t) {
                if (this.graphic) {
                    let i = this.getAbsolutePosition(this.points[0]),
                        s = this.getAbsolutePosition(this.points[1]),
                        e = this.getAttrs(i, s);
                    i ? this.graphic[t ? "animate" : "attr"]({
                        cx: e.cx,
                        cy: e.cy,
                        rx: e.rx,
                        ry: e.ry,
                        rotation: e.angle,
                        rotationOriginX: e.cx,
                        rotationOriginY: e.cy
                    }) : this.graphic.attr({
                        x: 0,
                        y: -9e9
                    }), this.graphic.placed = !!i
                }
                super.redraw(t)
            }
            setYRadius(t) {
                let i = this.annotation.userOptions.shapes;
                this.options.ry = t, i && i[0] && (i[0].ry = t, i[0].ry = t)
            }
        }
        return n.attrsMap = e(i.attrsMap, {
            ry: "ry"
        }), n
    }), s(i, "Extensions/Annotations/Controllables/ControllableLabel.js", [i["Extensions/Annotations/Controllables/Controllable.js"], i["Core/Templating.js"], i["Extensions/Annotations/MockPoint.js"], i["Core/Utilities.js"]], function(t, i, s, e) {
        let {
            format: o
        } = i, {
            extend: n,
            isNumber: a,
            pick: r
        } = e;

        function l(t, i, s, e, o) {
            let n = o && o.anchorX,
                r = o && o.anchorY,
                l, h, c = s / 2;
            return a(n) && a(r) && (l = [
                ["M", n, r]
            ], (h = i - r) < 0 && (h = -e - h), h < s && (c = n < t + s / 2 ? h : s - h), r > i + e ? l.push(["L", t + c, i + e]) : r < i ? l.push(["L", t + c, i]) : n < t ? l.push(["L", t, i + e / 2]) : n > t + s && l.push(["L", t + s, i + e / 2])), l || []
        }
        class h extends t {
            static alignedPosition(t, i) {
                let s = t.align,
                    e = t.verticalAlign,
                    o = (i.x || 0) + (t.x || 0),
                    n = (i.y || 0) + (t.y || 0),
                    a, r;
                return "right" === s ? a = 1 : "center" === s && (a = 2), a && (o += (i.width - (t.width || 0)) / a), "bottom" === e ? r = 1 : "middle" === e && (r = 2), r && (n += (i.height - (t.height || 0)) / r), {
                    x: Math.round(o),
                    y: Math.round(n)
                }
            }
            static compose(t) {
                t.prototype.symbols.connector = l
            }
            static justifiedOptions(t, i, s, e) {
                let o;
                let n = s.align,
                    a = s.verticalAlign,
                    r = i.box ? 0 : i.padding || 0,
                    l = i.getBBox(),
                    h = {
                        align: n,
                        verticalAlign: a,
                        x: s.x,
                        y: s.y,
                        width: i.width,
                        height: i.height
                    },
                    c = (e.x || 0) - t.plotLeft,
                    p = (e.y || 0) - t.plotTop;
                return (o = c + r) < 0 && ("right" === n ? h.align = "left" : h.x = (h.x || 0) - o), (o = c + l.width - r) > t.plotWidth && ("left" === n ? h.align = "right" : h.x = (h.x || 0) + t.plotWidth - o), (o = p + r) < 0 && ("bottom" === a ? h.verticalAlign = "top" : h.y = (h.y || 0) - o), (o = p + l.height - r) > t.plotHeight && ("top" === a ? h.verticalAlign = "bottom" : h.y = (h.y || 0) + t.plotHeight - o), h
            }
            constructor(t, i, s) {
                super(t, i, s, "label")
            }
            translatePoint(t, i) {
                super.translatePoint(t, i, 0)
            }
            translate(t, i) {
                let s = this.annotation.chart,
                    e = this.annotation.userOptions,
                    o = s.annotations.indexOf(this.annotation),
                    n = s.options.annotations[o];
                if (s.inverted) {
                    let s = t;
                    t = i, i = s
                }
                this.options.x += t, this.options.y += i, n[this.collection][this.index].x = this.options.x, n[this.collection][this.index].y = this.options.y, e[this.collection][this.index].x = this.options.x, e[this.collection][this.index].y = this.options.y
            }
            render(t) {
                let i = this.options,
                    s = this.attrsFromOptions(i),
                    e = i.style;
                this.graphic = this.annotation.chart.renderer.label("", 0, -9999, i.shape, null, null, i.useHTML, null, "annotation-label").attr(s).add(t), this.annotation.chart.styledMode || ("contrast" === e.color && (e.color = this.annotation.chart.renderer.getContrast(h.shapesWithoutBackground.indexOf(i.shape) > -1 ? "#FFFFFF" : i.backgroundColor)), this.graphic.css(i.style).shadow(i.shadow)), i.className && this.graphic.addClass(i.className), this.graphic.labelrank = i.labelrank, super.render()
            }
            redraw(t) {
                let i = this.options,
                    s = this.text || i.format || i.text,
                    e = this.graphic,
                    n = this.points[0];
                if (!e) {
                    this.redraw(t);
                    return
                }
                e.attr({
                    text: s ? o(String(s), n.getLabelConfig(), this.annotation.chart) : i.formatter.call(n, this)
                });
                let a = this.anchor(n),
                    r = this.position(a);
                r ? (e.alignAttr = r, r.anchorX = a.absolutePosition.x, r.anchorY = a.absolutePosition.y, e[t ? "animate" : "attr"](r)) : e.attr({
                    x: 0,
                    y: -9999
                }), e.placed = !!r, super.redraw(t)
            }
            anchor(t) {
                let i = super.anchor.apply(this, arguments),
                    s = this.options.x || 0,
                    e = this.options.y || 0;
                return i.absolutePosition.x -= s, i.absolutePosition.y -= e, i.relativePosition.x -= s, i.relativePosition.y -= e, i
            }
            position(t) {
                let i = this.graphic,
                    e = this.annotation.chart,
                    o = e.tooltip,
                    a = this.points[0],
                    l = this.options,
                    c = t.absolutePosition,
                    p = t.relativePosition,
                    d, u, g, m, x = a.series.visible && s.prototype.isInsidePlot.call(a);
                if (i && x) {
                    let {
                        width: t = 0,
                        height: s = 0
                    } = i;
                    l.distance && o ? d = o.getPosition.call({
                        chart: e,
                        distance: r(l.distance, 16),
                        getPlayingField: o.getPlayingField,
                        pointer: o.pointer
                    }, t, s, {
                        plotX: p.x,
                        plotY: p.y,
                        negative: a.negative,
                        ttBelow: a.ttBelow,
                        h: p.height || p.width
                    }) : l.positioner ? d = l.positioner.call(this) : (u = {
                        x: c.x,
                        y: c.y,
                        width: 0,
                        height: 0
                    }, d = h.alignedPosition(n(l, {
                        width: t,
                        height: s
                    }), u), "justify" === this.options.overflow && (d = h.alignedPosition(h.justifiedOptions(e, i, l, d), u))), l.crop && (g = d.x - e.plotLeft, m = d.y - e.plotTop, x = e.isInsidePlot(g, m) && e.isInsidePlot(g + t, m + s))
                }
                return x ? d : null
            }
        }
        return h.attrsMap = {
            backgroundColor: "fill",
            borderColor: "stroke",
            borderWidth: "stroke-width",
            zIndex: "zIndex",
            borderRadius: "r",
            padding: "padding"
        }, h.shapesWithoutBackground = ["connector"], h
    }), s(i, "Extensions/Annotations/Controllables/ControllableImage.js", [i["Extensions/Annotations/Controllables/Controllable.js"], i["Extensions/Annotations/Controllables/ControllableLabel.js"]], function(t, i) {
        class s extends t {
            constructor(t, i, s) {
                super(t, i, s, "shape"), this.type = "image", this.translate = super.translateShape
            }
            render(t) {
                let i = this.attrsFromOptions(this.options),
                    s = this.options;
                this.graphic = this.annotation.chart.renderer.image(s.src, 0, -9e9, s.width, s.height).attr(i).add(t), this.graphic.width = s.width, this.graphic.height = s.height, super.render()
            }
            redraw(t) {
                if (this.graphic) {
                    let s = this.anchor(this.points[0]),
                        e = i.prototype.position.call(this, s);
                    e ? this.graphic[t ? "animate" : "attr"]({
                        x: e.x,
                        y: e.y
                    }) : this.graphic.attr({
                        x: 0,
                        y: -9e9
                    }), this.graphic.placed = !!e
                }
                super.redraw(t)
            }
        }
        return s.attrsMap = {
            width: "width",
            height: "height",
            zIndex: "zIndex"
        }, s
    }), s(i, "Shared/BaseForm.js", [i["Core/Renderer/HTML/AST.js"], i["Core/Utilities.js"]], function(t, i) {
        let {
            addEvent: s,
            createElement: e
        } = i;
        return class {
            constructor(t, i) {
                this.iconsURL = i, this.container = this.createPopupContainer(t), this.closeButton = this.addCloseButton()
            }
            createPopupContainer(t, i = "highcharts-popup highcharts-no-tooltip") {
                return e("div", {
                    className: i
                }, void 0, t)
            }
            addCloseButton(t = "highcharts-popup-close") {
                let i = this,
                    o = this.iconsURL,
                    n = e("button", {
                        className: t
                    }, void 0, this.container);
                return n.style["background-image"] = "url(" + (o.match(/png|svg|jpeg|jpg|gif/ig) ? o : o + "close.svg") + ")", ["click", "touchstart"].forEach(t => {
                    s(n, t, i.closeButtonEvents.bind(i))
                }), s(document, "keydown", function(t) {
                    "Escape" === t.code && i.closeButtonEvents()
                }), n
            }
            closeButtonEvents() {
                this.closePopup()
            }
            showPopup(i = "highcharts-annotation-toolbar") {
                let s = this.container,
                    e = this.closeButton;
                this.type = void 0, s.innerHTML = t.emptyHTML, s.className.indexOf(i) >= 0 && (s.classList.remove(i), s.removeAttribute("style")), s.appendChild(e), s.style.display = "block", s.style.height = ""
            }
            closePopup() {
                this.container.style.display = "none"
            }
        }
    }), s(i, "Extensions/Annotations/Popup/PopupAnnotations.js", [i["Core/Globals.js"], i["Core/Utilities.js"]], function(t, i) {
        let {
            doc: s,
            isFirefox: e
        } = t, {
            createElement: o,
            isArray: n,
            isObject: a,
            objectEach: r,
            pick: l,
            stableSort: h
        } = i;

        function c(t, i, l, p, d, u) {
            let g, m;
            if (!i) return;
            let x = this.addInput,
                f = this.lang;
            r(p, (s, e) => {
                g = "" !== l ? l + "." + e : e, a(s) && (!n(s) || n(s) && a(s[0]) ? ((m = f[e] || e).match(/\d/g) || d.push([!0, m, t]), c.call(this, t, i, g, s, d, !1)) : d.push([this, g, "annotation", t, s]))
            }), u && (h(d, t => t[1].match(/format/g) ? -1 : 1), e && d.reverse(), d.forEach(t => {
                !0 === t[0] ? o("span", {
                    className: "highcharts-annotation-title"
                }, void 0, t[2]).appendChild(s.createTextNode(t[1])) : (t[4] = {
                    value: t[4][0],
                    type: t[4][1]
                }, x.apply(t[0], t.splice(1)))
            }))
        }
        return {
            addForm: function(t, i, e, n) {
                if (!t) return;
                let a = this.container,
                    r = this.lang,
                    l = o("h2", {
                        className: "highcharts-popup-main-title"
                    }, void 0, a);
                l.appendChild(s.createTextNode(r[i.langKey] || i.langKey || "")), l = o("div", {
                    className: "highcharts-popup-lhs-col highcharts-popup-lhs-full"
                }, void 0, a);
                let h = o("div", {
                    className: "highcharts-popup-bottom-row"
                }, void 0, a);
                c.call(this, l, t, "", i, [], !0), this.addButton(h, n ? r.addButton || "Add" : r.saveButton || "Save", n ? "add" : "save", a, e)
            },
            addToolbar: function(t, i, e) {
                let n = this.lang,
                    a = this.container,
                    r = this.showForm,
                    h = "highcharts-annotation-toolbar"; - 1 === a.className.indexOf(h) && (a.className += " " + h + " highcharts-no-mousewheel"), t && (a.style.top = t.plotTop + 10 + "px");
                let c = o("p", {
                    className: "highcharts-annotation-label"
                }, void 0, a);
                c.setAttribute("aria-label", "Annotation type"), c.appendChild(s.createTextNode(l(n[i.langKey] || i.langKey, i.shapes && i.shapes[0].type, "")));
                let p = this.addButton(a, n.editButton || "Edit", "edit", a, () => {
                    r.call(this, "annotation-edit", t, i, e)
                });
                p.className += " highcharts-annotation-edit-button", p.style["background-image"] = "url(" + this.iconsURL + "edit.svg)", p = this.addButton(a, n.removeButton || "Remove", "remove", a, e), p.className += " highcharts-annotation-remove-button", p.style["background-image"] = "url(" + this.iconsURL + "destroy.svg)"
            }
        }
    }), s(i, "Extensions/Annotations/Popup/PopupIndicators.js", [i["Core/Renderer/HTML/AST.js"], i["Core/Globals.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(t, i, s, e) {
        var o, n;
        let {
            doc: a
        } = i, {
            seriesTypes: r
        } = s, {
            addEvent: l,
            createElement: h,
            defined: c,
            isArray: p,
            isObject: d,
            objectEach: u,
            stableSort: g
        } = e;
        (n = o || (o = {}))[n["params.algorithm"] = 0] = "params.algorithm", n[n["params.average"] = 1] = "params.average";
        let m = {
            "algorithm-pivotpoints": ["standard", "fibonacci", "camarilla"],
            "average-disparityindex": ["sma", "ema", "dema", "tema", "wma"]
        };

        function x(t) {
            let i = h("div", {
                    className: "highcharts-popup-lhs-col"
                }, void 0, t),
                s = h("div", {
                    className: "highcharts-popup-rhs-col"
                }, void 0, t);
            return h("div", {
                className: "highcharts-popup-rhs-col-wrapper"
            }, void 0, s), {
                lhsCol: i,
                rhsCol: s
            }
        }

        function f(i, s, e, o) {
            let n = s.params || s.options.params;
            o.innerHTML = t.emptyHTML, h("h3", {
                className: "highcharts-indicator-title"
            }, void 0, o).appendChild(a.createTextNode(k(s, e).indicatorFullName)), h("input", {
                type: "hidden",
                name: "highcharts-type-" + e,
                value: e
            }, void 0, o), w.call(this, e, "series", i, o, s, s.linkedParent && s.linkedParent.options.id), n.volumeSeriesID && w.call(this, e, "volume", i, o, s, s.linkedParent && n.volumeSeriesID), v.call(this, i, "params", n, e, o)
        }

        function b(i, s, e, o) {
            function n(t, s) {
                let e = y.parentNode.children[1];
                f.call(a, i, t, s, y), e && (e.style.display = "block"), u && t.options && h("input", {
                    type: "hidden",
                    name: "highcharts-id-" + s,
                    value: t.options.id
                }, void 0, y).setAttribute("highcharts-data-series-id", t.options.id)
            }
            let a = this,
                r = a.lang,
                c = s.querySelectorAll(".highcharts-popup-lhs-col")[0],
                d = s.querySelectorAll(".highcharts-popup-rhs-col")[0],
                u = "edit" === e,
                m = u ? i.series : i.options.plotOptions || {};
            if (!i && m) return;
            let x, b = [];
            u || p(m) ? p(m) && (b = P.call(this, m)) : b = E.call(this, m, o), g(b, (t, i) => {
                let s = t.indicatorFullName.toLowerCase(),
                    e = i.indicatorFullName.toLowerCase();
                return s < e ? -1 : s > e ? 1 : 0
            }), c.children[1] && c.children[1].remove();
            let v = h("ul", {
                    className: "highcharts-indicator-list"
                }, void 0, c),
                y = d.querySelectorAll(".highcharts-popup-rhs-col-wrapper")[0];
            if (b.forEach(t => {
                    let {
                        indicatorFullName: i,
                        indicatorType: s,
                        series: e
                    } = t;
                    x = h("li", {
                        className: "highcharts-indicator-list"
                    }, void 0, v);
                    let o = h("button", {
                        className: "highcharts-indicator-list-item",
                        textContent: i
                    }, void 0, x);
                    ["click", "touchstart"].forEach(t => {
                        l(o, t, function() {
                            n(e, s)
                        })
                    })
                }), b.length > 0) {
                let {
                    series: t,
                    indicatorType: i
                } = b[0];
                n(t, i)
            } else u || (t.setElementHTML(y.parentNode.children[0], r.noFilterMatch || ""), y.parentNode.children[1].style.display = "none")
        }

        function v(t, i, s, e, n) {
            if (!t) return;
            let a = this.addInput;
            u(s, (s, r) => {
                let l = i + "." + r;
                if (c(s) && l) {
                    if (d(s) && (a.call(this, l, e, n, {}), v.call(this, t, l, s, e, n)), l in o) {
                        let o = A.call(this, e, l, n);
                        C.call(this, t, i, o, e, r, s)
                    } else "params.volumeSeriesID" === l || p(s) || a.call(this, l, e, n, {
                        value: s,
                        type: "number"
                    })
                }
            })
        }

        function y(t, i) {
            let s = this,
                e = i.querySelectorAll(".highcharts-popup-lhs-col")[0],
                o = this.lang.clearFilter,
                n = h("div", {
                    className: "highcharts-input-wrapper"
                }, void 0, e),
                a = function(i) {
                    b.call(s, t, s.container, "add", i)
                },
                r = this.addInput("searchIndicators", "input", n, {
                    value: "",
                    type: "text",
                    htmlFor: "search-indicators",
                    labelClassName: "highcharts-input-search-indicators-label"
                }),
                c = h("a", {
                    textContent: o
                }, void 0, n);
            r.classList.add("highcharts-input-search-indicators"), c.classList.add("clear-filter-button"), l(r, "input", function() {
                a(this.value), this.value.length ? c.style.display = "inline-block" : c.style.display = "none"
            }), ["click", "touchstart"].forEach(t => {
                l(c, t, function() {
                    r.value = "", a(""), c.style.display = "none"
                })
            })
        }

        function A(t, i, s) {
            let e = i.split("."),
                o = e[e.length - 1],
                n = "highcharts-" + i + "-type-" + t,
                r = this.lang;
            h("label", {
                htmlFor: n
            }, null, s).appendChild(a.createTextNode(r[o] || i));
            let l = h("select", {
                name: n,
                className: "highcharts-popup-field",
                id: "highcharts-select-" + i
            }, null, s);
            return l.setAttribute("id", "highcharts-select-" + i), l
        }

        function C(t, i, s, e, o, n, r) {
            "series" === i || "volume" === i ? t.series.forEach(t => {
                let e = t.options,
                    o = e.name || e.params ? t.name : e.id || "";
                "highcharts-navigator-series" !== e.id && e.id !== (r && r.options && r.options.id) && (c(n) || "volume" !== i || "column" !== t.type || (n = e.id), h("option", {
                    value: e.id
                }, void 0, s).appendChild(a.createTextNode(o)))
            }) : e && o && m[o + "-" + e].forEach(t => {
                h("option", {
                    value: t
                }, void 0, s).appendChild(a.createTextNode(t))
            }), c(n) && (s.value = n)
        }

        function E(t, i) {
            let s;
            let e = this.chart && this.chart.options.lang,
                o = e && e.navigation && e.navigation.popup && e.navigation.popup.indicatorAliases,
                n = [];
            return u(t, (t, e) => {
                let a = t && t.options;
                if (t.params || a && a.params) {
                    let {
                        indicatorFullName: a,
                        indicatorType: r
                    } = k(t, e);
                    if (i) {
                        let e = RegExp(i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"),
                            l = o && o[r] && o[r].join(" ") || "";
                        (a.match(e) || l.match(e)) && (s = {
                            indicatorFullName: a,
                            indicatorType: r,
                            series: t
                        }, n.push(s))
                    } else s = {
                        indicatorFullName: a,
                        indicatorType: r,
                        series: t
                    }, n.push(s)
                }
            }), n
        }

        function P(t) {
            let i = [];
            return t.forEach(t => {
                t.is("sma") && i.push({
                    indicatorFullName: t.name,
                    indicatorType: t.type,
                    series: t
                })
            }), i
        }

        function k(t, i) {
            let s = t.options,
                e = r[i] && r[i].prototype.nameBase || i.toUpperCase(),
                o = i;
            return s && s.type && (o = t.options.type, e = t.name), {
                indicatorFullName: e,
                indicatorType: o
            }
        }

        function w(t, i, s, e, o, n) {
            if (!s) return;
            let a = A.call(this, t, i, e);
            C.call(this, s, i, a, void 0, void 0, void 0, o), c(n) && (a.value = n)
        }
        return {
            addForm: function(t, i, s) {
                let e;
                let o = this.lang;
                if (!t) return;
                this.tabs.init.call(this, t);
                let n = this.container.querySelectorAll(".highcharts-tab-item-content");
                x(n[0]), y.call(this, t, n[0]), b.call(this, t, n[0], "add"), e = n[0].querySelectorAll(".highcharts-popup-rhs-col")[0], this.addButton(e, o.addButton || "add", "add", e, s), x(n[1]), b.call(this, t, n[1], "edit"), e = n[1].querySelectorAll(".highcharts-popup-rhs-col")[0], this.addButton(e, o.saveButton || "save", "edit", e, s), this.addButton(e, o.removeButton || "remove", "remove", e, s)
            },
            getAmount: function() {
                let t = 0;
                return this.series.forEach(i => {
                    (i.params || i.options.params) && t++
                }), t
            }
        }
    }), s(i, "Extensions/Annotations/Popup/PopupTabs.js", [i["Core/Globals.js"], i["Core/Utilities.js"]], function(t, i) {
        let {
            doc: s
        } = t, {
            addEvent: e,
            createElement: o
        } = i;

        function n() {
            return o("div", {
                className: "highcharts-tab-item-content highcharts-no-mousewheel"
            }, void 0, this.container)
        }

        function a(t, i) {
            let e = this.container,
                n = this.lang,
                a = "highcharts-tab-item";
            0 === i && (a += " highcharts-tab-disabled");
            let r = o("button", {
                className: a
            }, void 0, e);
            return r.appendChild(s.createTextNode(n[t + "Button"] || t)), r.setAttribute("highcharts-data-tab-type", t), r
        }

        function r() {
            let t = this.container,
                i = t.querySelectorAll(".highcharts-tab-item"),
                s = t.querySelectorAll(".highcharts-tab-item-content");
            for (let t = 0; t < i.length; t++) i[t].classList.remove("highcharts-tab-item-active"), s[t].classList.remove("highcharts-tab-item-show")
        }

        function l(t, i) {
            let s = this.container.querySelectorAll(".highcharts-tab-item-content");
            t.className += " highcharts-tab-item-active", s[i].className += " highcharts-tab-item-show"
        }

        function h(t) {
            let i = this;
            this.container.querySelectorAll(".highcharts-tab-item").forEach((s, o) => {
                (0 !== t || "edit" !== s.getAttribute("highcharts-data-tab-type")) && ["click", "touchstart"].forEach(t => {
                    e(s, t, function() {
                        r.call(i), l.call(i, this, o)
                    })
                })
            })
        }
        return {
            init: function(t) {
                if (!t) return;
                let i = this.indicators.getAmount.call(t),
                    s = a.call(this, "add");
                a.call(this, "edit", i), n.call(this), n.call(this), h.call(this, i), l.call(this, s, 0)
            }
        }
    }), s(i, "Extensions/Annotations/Popup/Popup.js", [i["Shared/BaseForm.js"], i["Core/Globals.js"], i["Core/Defaults.js"], i["Extensions/Annotations/Popup/PopupAnnotations.js"], i["Extensions/Annotations/Popup/PopupIndicators.js"], i["Extensions/Annotations/Popup/PopupTabs.js"], i["Core/Utilities.js"]], function(t, i, s, e, o, n, a) {
        let {
            doc: r
        } = i, {
            getOptions: l
        } = s, {
            addEvent: h,
            createElement: c,
            extend: p,
            fireEvent: d,
            pick: u
        } = a;
        class g extends t {
            constructor(t, i, s) {
                super(t, i), this.chart = s, this.lang = (l().lang.navigation || {}).popup || {}, h(this.container, "mousedown", () => {
                    let t = s && s.navigationBindings && s.navigationBindings.activeAnnotation;
                    if (t) {
                        t.cancelClick = !0;
                        let i = h(r, "click", () => {
                            setTimeout(() => {
                                t.cancelClick = !1
                            }, 0), i()
                        })
                    }
                })
            }
            addInput(t, i, s, e) {
                let o = t.split("."),
                    n = o[o.length - 1],
                    a = this.lang,
                    l = "highcharts-" + i + "-" + u(e.htmlFor, n);
                n.match(/^\d+$/) || c("label", {
                    htmlFor: l,
                    className: e.labelClassName
                }, void 0, s).appendChild(r.createTextNode(a[n] || n));
                let h = c("input", {
                    name: l,
                    value: e.value,
                    type: e.type,
                    className: "highcharts-popup-field"
                }, void 0, s);
                return h.setAttribute("highcharts-data-name", t), h
            }
            closeButtonEvents() {
                if (this.chart) {
                    let t = this.chart.navigationBindings;
                    d(t, "closePopup"), t && t.selectedButtonElement && d(t, "deselectButton", {
                        button: t.selectedButtonElement
                    })
                } else super.closeButtonEvents()
            }
            addButton(t, i, s, e, o) {
                let n = c("button", void 0, void 0, t);
                return n.appendChild(r.createTextNode(i)), o && ["click", "touchstart"].forEach(t => {
                    h(n, t, () => (this.closePopup(), o(function(t, i) {
                        let s = Array.prototype.slice.call(t.querySelectorAll("input")),
                            e = Array.prototype.slice.call(t.querySelectorAll("select")),
                            o = t.querySelectorAll("#highcharts-select-series > option:checked")[0],
                            n = t.querySelectorAll("#highcharts-select-volume > option:checked")[0],
                            a = {
                                actionType: i,
                                linkedTo: o && o.getAttribute("value") || "",
                                fields: {}
                            };
                        return s.forEach(t => {
                            let i = t.getAttribute("highcharts-data-name");
                            t.getAttribute("highcharts-data-series-id") ? a.seriesId = t.value : i ? a.fields[i] = t.value : a.type = t.value
                        }), e.forEach(t => {
                            let i = t.id;
                            if ("highcharts-select-series" !== i && "highcharts-select-volume" !== i) {
                                let s = i.split("highcharts-select-")[1];
                                a.fields[s] = t.value
                            }
                        }), n && (a.fields["params.volumeSeriesID"] = n.getAttribute("value") || ""), a
                    }(e, s))))
                }), n
            }
            showForm(t, i, s, e) {
                i && (this.showPopup(), "indicators" === t && this.indicators.addForm.call(this, i, s, e), "annotation-toolbar" === t && this.annotations.addToolbar.call(this, i, s, e), "annotation-edit" === t && this.annotations.addForm.call(this, i, s, e), "flag" === t && this.annotations.addForm.call(this, i, s, e, !0), this.type = t, this.container.style.height = this.container.offsetHeight + "px")
            }
        }
        return p(g.prototype, {
            annotations: e,
            indicators: o,
            tabs: n
        }), g
    }), s(i, "Extensions/Annotations/Popup/PopupComposition.js", [i["Core/Globals.js"], i["Extensions/Annotations/Popup/Popup.js"], i["Core/Utilities.js"]], function(t, i, s) {
        let {
            composed: e
        } = t, {
            addEvent: o,
            pushUnique: n,
            wrap: a
        } = s;

        function r() {
            this.popup && this.popup.closePopup()
        }

        function l(t) {
            this.popup || (this.popup = new i(this.chart.container, this.chart.options.navigation.iconsURL || this.chart.options.stockTools && this.chart.options.stockTools.gui.iconsURL || "https://code.highcharts.com/11.4.0/gfx/stock-icons/", this.chart)), this.popup.showForm(t.formType, this.chart, t.options, t.onSubmit)
        }

        function h(t, i) {
            this.inClass(i.target, "highcharts-popup") || t.apply(this, Array.prototype.slice.call(arguments, 1))
        }
        return {
            compose: function(t, i) {
                n(e, "Popup") && (o(t, "closePopup", r), o(t, "showPopup", l), a(i.prototype, "onContainerMouseDown", h))
            }
        }
    }), s(i, "Extensions/Annotations/Annotation.js", [i["Core/Animation/AnimationUtilities.js"], i["Extensions/Annotations/AnnotationChart.js"], i["Extensions/Annotations/AnnotationDefaults.js"], i["Extensions/Annotations/Controllables/ControllableRect.js"], i["Extensions/Annotations/Controllables/ControllableCircle.js"], i["Extensions/Annotations/Controllables/ControllableEllipse.js"], i["Extensions/Annotations/Controllables/ControllablePath.js"], i["Extensions/Annotations/Controllables/ControllableImage.js"], i["Extensions/Annotations/Controllables/ControllableLabel.js"], i["Extensions/Annotations/ControlPoint.js"], i["Extensions/Annotations/ControlTarget.js"], i["Extensions/Annotations/EventEmitter.js"], i["Extensions/Annotations/MockPoint.js"], i["Extensions/Annotations/Popup/PopupComposition.js"], i["Core/Utilities.js"]], function(t, i, s, e, o, n, a, r, l, h, c, p, d, u, g) {
        let {
            getDeferredAnimation: m
        } = t, {
            destroyObjectProperties: x,
            erase: f,
            fireEvent: b,
            merge: v,
            pick: y,
            splat: A
        } = g;

        function C(t, i) {
            let s = {};
            return ["labels", "shapes"].forEach(e => {
                let o = t[e];
                o && (i[e] ? s[e] = A(i[e]).map(function(t, i) {
                    return v(o[i], t)
                }) : s[e] = t[e])
            }), s
        }
        class E extends p {
            static compose(t, s, e, o) {
                i.compose(E, t, e), l.compose(o), a.compose(t, o), s.compose(E, t), u.compose(s, e)
            }
            constructor(t, i) {
                super(), this.coll = "annotations", this.chart = t, this.points = [], this.controlPoints = [], this.coll = "annotations", this.index = -1, this.labels = [], this.shapes = [], this.options = v(this.defaultOptions, i), this.userOptions = i;
                let s = C(this.options, i);
                this.options.labels = s.labels, this.options.shapes = s.shapes, this.init(t, this.options)
            }
            addClipPaths() {
                this.setClipAxes(), this.clipXAxis && this.clipYAxis && this.options.crop && (this.clipRect = this.chart.renderer.clipRect(this.getClipBox()))
            }
            addLabels() {
                let t = this.options.labels || [];
                t.forEach((i, s) => {
                    let e = this.initLabel(i, s);
                    v(!0, t[s], e.options)
                })
            }
            addShapes() {
                let t = this.options.shapes || [];
                t.forEach((i, s) => {
                    let e = this.initShape(i, s);
                    v(!0, t[s], e.options)
                })
            }
            destroy() {
                let t = this.chart,
                    i = function(t) {
                        t.destroy()
                    };
                this.labels.forEach(i), this.shapes.forEach(i), this.clipXAxis = null, this.clipYAxis = null, f(t.labelCollectors, this.labelCollector), super.destroy(), this.destroyControlTarget(), x(this, t)
            }
            destroyItem(t) {
                f(this[t.itemType + "s"], t), t.destroy()
            }
            getClipBox() {
                if (this.clipXAxis && this.clipYAxis) return {
                    x: this.clipXAxis.left,
                    y: this.clipYAxis.top,
                    width: this.clipXAxis.width,
                    height: this.clipYAxis.height
                }
            }
            initProperties(t, i) {
                this.setOptions(i);
                let s = C(this.options, i);
                this.options.labels = s.labels, this.options.shapes = s.shapes, this.chart = t, this.points = [], this.controlPoints = [], this.coll = "annotations", this.userOptions = i, this.labels = [], this.shapes = []
            }
            init(t, i, s = this.index) {
                let e = this.chart,
                    o = this.options.animation;
                this.index = s, this.linkPoints(), this.addControlPoints(), this.addShapes(), this.addLabels(), this.setLabelCollector(), this.animationConfig = m(e, o)
            }
            initLabel(t, i) {
                let s = new l(this, v(this.options.labelOptions, {
                    controlPointOptions: this.options.controlPointOptions
                }, t), i);
                return s.itemType = "label", this.labels.push(s), s
            }
            initShape(t, i) {
                let s = v(this.options.shapeOptions, {
                        controlPointOptions: this.options.controlPointOptions
                    }, t),
                    e = new E.shapesMap[s.type](this, s, i);
                return e.itemType = "shape", this.shapes.push(e), e
            }
            redraw(t) {
                this.linkPoints(), this.graphic || this.render(), this.clipRect && this.clipRect.animate(this.getClipBox()), this.redrawItems(this.shapes, t), this.redrawItems(this.labels, t), this.redrawControlPoints(t)
            }
            redrawItem(t, i) {
                t.linkPoints(), t.shouldBeDrawn() ? (t.graphic || this.renderItem(t), t.redraw(y(i, !0) && t.graphic.placed), t.points.length && function(t) {
                    let i = t.graphic,
                        s = t.points.some(t => !1 !== t.series.visible && !1 !== t.visible);
                    i && (s ? "hidden" === i.visibility && i.show() : i.hide())
                }(t)) : this.destroyItem(t)
            }
            redrawItems(t, i) {
                let s = t.length;
                for (; s--;) this.redrawItem(t[s], i)
            }
            remove() {
                return this.chart.removeAnnotation(this)
            }
            render() {
                let t = this.chart.renderer;
                this.graphic = t.g("annotation").attr({
                    opacity: 0,
                    zIndex: this.options.zIndex,
                    visibility: this.options.visible ? "inherit" : "hidden"
                }).add(), this.shapesGroup = t.g("annotation-shapes").add(this.graphic), this.options.crop && this.shapesGroup.clip(this.chart.plotBoxClip), this.labelsGroup = t.g("annotation-labels").attr({
                    translateX: 0,
                    translateY: 0
                }).add(this.graphic), this.addClipPaths(), this.clipRect && this.graphic.clip(this.clipRect), this.renderItems(this.shapes), this.renderItems(this.labels), this.addEvents(), this.renderControlPoints()
            }
            renderItem(t) {
                t.render("label" === t.itemType ? this.labelsGroup : this.shapesGroup)
            }
            renderItems(t) {
                let i = t.length;
                for (; i--;) this.renderItem(t[i])
            }
            setClipAxes() {
                let t = this.chart.xAxis,
                    i = this.chart.yAxis,
                    s = (this.options.labels || []).concat(this.options.shapes || []).reduce((s, e) => {
                        let o = e && (e.point || e.points && e.points[0]);
                        return [t[o && o.xAxis] || s[0], i[o && o.yAxis] || s[1]]
                    }, []);
                this.clipXAxis = s[0], this.clipYAxis = s[1]
            }
            setControlPointsVisibility(t) {
                let i = function(i) {
                    i.setControlPointsVisibility(t)
                };
                this.controlPoints.forEach(i => {
                    i.setVisibility(t)
                }), this.shapes.forEach(i), this.labels.forEach(i)
            }
            setLabelCollector() {
                let t = this;
                t.labelCollector = function() {
                    return t.labels.reduce(function(t, i) {
                        return i.options.allowOverlap || t.push(i.graphic), t
                    }, [])
                }, t.chart.labelCollectors.push(t.labelCollector)
            }
            setOptions(t) {
                this.options = v(this.defaultOptions, t)
            }
            setVisibility(t) {
                let i = this.options,
                    s = this.chart.navigationBindings,
                    e = y(t, !i.visible);
                if (this.graphic.attr("visibility", e ? "inherit" : "hidden"), !e) {
                    let t = function(t) {
                        t.setControlPointsVisibility(e)
                    };
                    this.shapes.forEach(t), this.labels.forEach(t), s.activeAnnotation === this && s.popup && "annotation-toolbar" === s.popup.type && b(s, "closePopup")
                }
                i.visible = e
            }
            update(t, i) {
                let s = this.chart,
                    e = C(this.userOptions, t),
                    o = s.annotations.indexOf(this),
                    n = v(!0, this.userOptions, t);
                n.labels = e.labels, n.shapes = e.shapes, this.destroy(), this.initProperties(s, n), this.init(s, n), s.options.annotations[o] = n, this.isUpdating = !0, y(i, !0) && s.drawAnnotations(), b(this, "afterUpdate"), this.isUpdating = !1
            }
        }
        return E.ControlPoint = h, E.MockPoint = d, E.shapesMap = {
            rect: e,
            circle: o,
            ellipse: n,
            path: a,
            image: r
        }, E.types = {}, E.prototype.defaultOptions = s, E.prototype.nonDOMEvents = ["add", "afterUpdate", "drag", "remove"], c.compose(E), E
    }), s(i, "Core/Chart/ChartNavigationComposition.js", [], function() {
        var t;
        return function(t) {
            t.compose = function(t) {
                return t.navigation || (t.navigation = new i(t)), t
            };
            class i {
                constructor(t) {
                    this.updates = [], this.chart = t
                }
                addUpdate(t) {
                    this.chart.navigation.updates.push(t)
                }
                update(t, i) {
                    this.updates.forEach(s => {
                        s.call(this.chart, t, i)
                    })
                }
            }
            t.Additions = i
        }(t || (t = {})), t
    }), s(i, "Extensions/Annotations/NavigationBindingsUtilities.js", [i["Core/Utilities.js"]], function(t) {
        let {
            defined: i,
            isNumber: s,
            pick: e
        } = t, o = {
            backgroundColor: "string",
            borderColor: "string",
            borderRadius: "string",
            color: "string",
            fill: "string",
            fontSize: "string",
            labels: "string",
            name: "string",
            stroke: "string",
            title: "string"
        };
        return {
            annotationsFieldsTypes: o,
            getAssignedAxis: function(t) {
                return t.filter(t => {
                    let i = t.axis.getExtremes(),
                        o = i.min,
                        n = i.max,
                        a = e(t.axis.minPointOffset, 0);
                    return s(o) && s(n) && t.value >= o - a && t.value <= n + a && !t.axis.options.isInternal
                })[0]
            },
            getFieldType: function(t, s) {
                let e = o[t],
                    n = typeof s;
                return i(e) && (n = e), ({
                    string: "text",
                    number: "number",
                    boolean: "checkbox"
                })[n]
            }
        }
    }), s(i, "Extensions/Annotations/NavigationBindingsDefaults.js", [i["Extensions/Annotations/NavigationBindingsUtilities.js"], i["Core/Utilities.js"]], function(t, i) {
        let {
            getAssignedAxis: s
        } = t, {
            isNumber: e,
            merge: o
        } = i;
        return {
            lang: {
                navigation: {
                    popup: {
                        simpleShapes: "Simple shapes",
                        lines: "Lines",
                        circle: "Circle",
                        ellipse: "Ellipse",
                        rectangle: "Rectangle",
                        label: "Label",
                        shapeOptions: "Shape options",
                        typeOptions: "Details",
                        fill: "Fill",
                        format: "Text",
                        strokeWidth: "Line width",
                        stroke: "Line color",
                        title: "Title",
                        name: "Name",
                        labelOptions: "Label options",
                        labels: "Labels",
                        backgroundColor: "Background color",
                        backgroundColors: "Background colors",
                        borderColor: "Border color",
                        borderRadius: "Border radius",
                        borderWidth: "Border width",
                        style: "Style",
                        padding: "Padding",
                        fontSize: "Font size",
                        color: "Color",
                        height: "Height",
                        shapes: "Shape options"
                    }
                }
            },
            navigation: {
                bindingsClassName: "highcharts-bindings-container",
                bindings: {
                    circleAnnotation: {
                        className: "highcharts-circle-annotation",
                        start: function(t) {
                            let i = this.chart.pointer?.getCoordinates(t),
                                e = i && s(i.xAxis),
                                n = i && s(i.yAxis),
                                a = this.chart.options.navigation;
                            if (e && n) return this.chart.addAnnotation(o({
                                langKey: "circle",
                                type: "basicAnnotation",
                                shapes: [{
                                    type: "circle",
                                    point: {
                                        x: e.value,
                                        y: n.value,
                                        xAxis: e.axis.index,
                                        yAxis: n.axis.index
                                    },
                                    r: 5
                                }]
                            }, a.annotationsOptions, a.bindings.circleAnnotation.annotationsOptions))
                        },
                        steps: [function(t, i) {
                            let s;
                            let o = i.options.shapes,
                                n = o && o[0] && o[0].point || {};
                            if (e(n.xAxis) && e(n.yAxis)) {
                                let i = this.chart.inverted,
                                    e = this.chart.xAxis[n.xAxis].toPixels(n.x),
                                    o = this.chart.yAxis[n.yAxis].toPixels(n.y);
                                s = Math.max(Math.sqrt(Math.pow(i ? o - t.chartX : e - t.chartX, 2) + Math.pow(i ? e - t.chartY : o - t.chartY, 2)), 5)
                            }
                            i.update({
                                shapes: [{
                                    r: s
                                }]
                            })
                        }]
                    },
                    ellipseAnnotation: {
                        className: "highcharts-ellipse-annotation",
                        start: function(t) {
                            let i = this.chart.pointer?.getCoordinates(t),
                                e = i && s(i.xAxis),
                                n = i && s(i.yAxis),
                                a = this.chart.options.navigation;
                            if (e && n) return this.chart.addAnnotation(o({
                                langKey: "ellipse",
                                type: "basicAnnotation",
                                shapes: [{
                                    type: "ellipse",
                                    xAxis: e.axis.index,
                                    yAxis: n.axis.index,
                                    points: [{
                                        x: e.value,
                                        y: n.value
                                    }, {
                                        x: e.value,
                                        y: n.value
                                    }],
                                    ry: 1
                                }]
                            }, a.annotationsOptions, a.bindings.ellipseAnnotation.annotationOptions))
                        },
                        steps: [function(t, i) {
                            let s = i.shapes[0],
                                e = s.getAbsolutePosition(s.points[1]);
                            s.translatePoint(t.chartX - e.x, t.chartY - e.y, 1), s.redraw(!1)
                        }, function(t, i) {
                            let s = i.shapes[0],
                                e = s.getAbsolutePosition(s.points[0]),
                                o = s.getAbsolutePosition(s.points[1]),
                                n = s.getDistanceFromLine(e, o, t.chartX, t.chartY),
                                a = s.getYAxis(),
                                r = Math.abs(a.toValue(0) - a.toValue(n));
                            s.setYRadius(r), s.redraw(!1)
                        }]
                    },
                    rectangleAnnotation: {
                        className: "highcharts-rectangle-annotation",
                        start: function(t) {
                            let i = this.chart.pointer?.getCoordinates(t),
                                e = i && s(i.xAxis),
                                n = i && s(i.yAxis);
                            if (!e || !n) return;
                            let a = e.value,
                                r = n.value,
                                l = e.axis.index,
                                h = n.axis.index,
                                c = this.chart.options.navigation;
                            return this.chart.addAnnotation(o({
                                langKey: "rectangle",
                                type: "basicAnnotation",
                                shapes: [{
                                    type: "path",
                                    points: [{
                                        xAxis: l,
                                        yAxis: h,
                                        x: a,
                                        y: r
                                    }, {
                                        xAxis: l,
                                        yAxis: h,
                                        x: a,
                                        y: r
                                    }, {
                                        xAxis: l,
                                        yAxis: h,
                                        x: a,
                                        y: r
                                    }, {
                                        xAxis: l,
                                        yAxis: h,
                                        x: a,
                                        y: r
                                    }, {
                                        command: "Z"
                                    }]
                                }]
                            }, c.annotationsOptions, c.bindings.rectangleAnnotation.annotationsOptions))
                        },
                        steps: [function(t, i) {
                            let e = i.options.shapes,
                                o = e && e[0] && e[0].points || [],
                                n = this.chart.pointer?.getCoordinates(t),
                                a = n && s(n.xAxis),
                                r = n && s(n.yAxis);
                            if (a && r) {
                                let t = a.value,
                                    s = r.value;
                                o[1].x = t, o[2].x = t, o[2].y = s, o[3].y = s, i.update({
                                    shapes: [{
                                        points: o
                                    }]
                                })
                            }
                        }]
                    },
                    labelAnnotation: {
                        className: "highcharts-label-annotation",
                        start: function(t) {
                            let i = this.chart.pointer?.getCoordinates(t),
                                e = i && s(i.xAxis),
                                n = i && s(i.yAxis),
                                a = this.chart.options.navigation;
                            if (e && n) return this.chart.addAnnotation(o({
                                langKey: "label",
                                type: "basicAnnotation",
                                labelOptions: {
                                    format: "{y:.2f}",
                                    overflow: "none",
                                    crop: !0
                                },
                                labels: [{
                                    point: {
                                        xAxis: e.axis.index,
                                        yAxis: n.axis.index,
                                        x: e.value,
                                        y: n.value
                                    }
                                }]
                            }, a.annotationsOptions, a.bindings.labelAnnotation.annotationsOptions))
                        }
                    }
                },
                events: {},
                annotationsOptions: {
                    animation: {
                        defer: 0
                    }
                }
            }
        }
    }), s(i, "Extensions/Annotations/NavigationBindings.js", [i["Core/Chart/ChartNavigationComposition.js"], i["Core/Defaults.js"], i["Core/Templating.js"], i["Core/Globals.js"], i["Extensions/Annotations/NavigationBindingsDefaults.js"], i["Extensions/Annotations/NavigationBindingsUtilities.js"], i["Core/Utilities.js"]], function(t, i, s, e, o, n, a) {
        let {
            setOptions: r
        } = i, {
            format: l
        } = s, {
            composed: h,
            doc: c,
            win: p
        } = e, {
            getAssignedAxis: d,
            getFieldType: u
        } = n, {
            addEvent: g,
            attr: m,
            defined: x,
            fireEvent: f,
            isArray: b,
            isFunction: v,
            isNumber: y,
            isObject: A,
            merge: C,
            objectEach: E,
            pick: P,
            pushUnique: k
        } = a;

        function w() {
            this.chart.navigationBindings && this.chart.navigationBindings.deselectAnnotation()
        }

        function j() {
            this.navigationBindings && this.navigationBindings.destroy()
        }

        function B() {
            let t = this.options;
            t && t.navigation && t.navigation.bindings && (this.navigationBindings = new D(this, t.navigation), this.navigationBindings.initEvents(), this.navigationBindings.initUpdate())
        }

        function O() {
            let t = this.navigationBindings,
                i = "highcharts-disabled-btn";
            if (this && t) {
                let s = !1;
                if (this.series.forEach(t => {
                        !t.options.isInternal && t.visible && (s = !0)
                    }), this.navigationBindings && this.navigationBindings.container && this.navigationBindings.container[0]) {
                    let e = this.navigationBindings.container[0];
                    E(t.boundClassNames, (t, o) => {
                        let n = e.querySelectorAll("." + o);
                        if (n)
                            for (let e = 0; e < n.length; e++) {
                                let o = n[e],
                                    a = o.className;
                                "normal" === t.noDataState ? -1 !== a.indexOf(i) && o.classList.remove(i) : s ? -1 !== a.indexOf(i) && o.classList.remove(i) : -1 === a.indexOf(i) && (o.className += " " + i)
                            }
                    })
                }
            }
        }

        function M() {
            this.deselectAnnotation()
        }

        function N() {
            this.selectedButtonElement = null
        }

        function T(t) {
            let i, s;
            let e = t.prototype.defaultOptions.events && t.prototype.defaultOptions.events.click;

            function o(t) {
                let i = this,
                    s = i.chart.navigationBindings,
                    o = s.activeAnnotation;
                e && e.call(i, t), o !== i ? (s.deselectAnnotation(), s.activeAnnotation = i, i.setControlPointsVisibility(!0), f(s, "showPopup", {
                    annotation: i,
                    formType: "annotation-toolbar",
                    options: s.annotationToFields(i),
                    onSubmit: function(t) {
                        if ("remove" === t.actionType) s.activeAnnotation = !1, s.chart.removeAnnotation(i);
                        else {
                            let e = {};
                            s.fieldsToOptions(t.fields, e), s.deselectAnnotation();
                            let o = e.typeOptions;
                            "measure" === i.options.type && (o.crosshairY.enabled = 0 !== o.crosshairY.strokeWidth, o.crosshairX.enabled = 0 !== o.crosshairX.strokeWidth), i.update(e)
                        }
                    }
                })) : f(s, "closePopup"), t.activeAnnotation = !0
            }
            C(!0, t.prototype.defaultOptions.events, {
                click: o,
                touchstart: function(t) {
                    i = t.touches[0].clientX, s = t.touches[0].clientY
                },
                touchend: function(t) {
                    i && Math.sqrt(Math.pow(i - t.changedTouches[0].clientX, 2) + Math.pow(s - t.changedTouches[0].clientY, 2)) >= 4 || o.call(this, t)
                }
            })
        }
        class D {
            static compose(t, i) {
                k(h, "NavigationBindings") && (g(t, "remove", w), T(t), E(t.types, t => {
                    T(t)
                }), g(i, "destroy", j), g(i, "load", B), g(i, "render", O), g(D, "closePopup", M), g(D, "deselectButton", N), r(o))
            }
            constructor(t, i) {
                this.boundClassNames = void 0, this.chart = t, this.options = i, this.eventsToUnbind = [], this.container = this.chart.container.getElementsByClassName(this.options.bindingsClassName || ""), this.container.length || (this.container = c.getElementsByClassName(this.options.bindingsClassName || ""))
            }
            getCoords(t) {
                let i = this.chart.pointer?.getCoordinates(t);
                return [i && d(i.xAxis), i && d(i.yAxis)]
            }
            initEvents() {
                let t = this,
                    i = t.chart,
                    s = t.container,
                    o = t.options;
                t.boundClassNames = {}, E(o.bindings || {}, i => {
                    t.boundClassNames[i.className] = i
                }), [].forEach.call(s, i => {
                    t.eventsToUnbind.push(g(i, "click", s => {
                        let e = t.getButtonEvents(i, s);
                        e && !e.button.classList.contains("highcharts-disabled-btn") && t.bindingsButtonClick(e.button, e.events, s)
                    }))
                }), E(o.events || {}, (i, s) => {
                    v(i) && t.eventsToUnbind.push(g(t, s, i, {
                        passive: !1
                    }))
                }), t.eventsToUnbind.push(g(i.container, "click", function(s) {
                    !i.cancelClick && i.isInsidePlot(s.chartX - i.plotLeft, s.chartY - i.plotTop, {
                        visiblePlotOnly: !0
                    }) && t.bindingsChartClick(this, s)
                })), t.eventsToUnbind.push(g(i.container, e.isTouchDevice ? "touchmove" : "mousemove", function(i) {
                    t.bindingsContainerMouseMove(this, i)
                }, e.isTouchDevice ? {
                    passive: !1
                } : void 0))
            }
            initUpdate() {
                let i = this;
                t.compose(this.chart).navigation.addUpdate(t => {
                    i.update(t)
                })
            }
            bindingsButtonClick(t, i, s) {
                let e = this.chart,
                    o = e.renderer.boxWrapper,
                    n = !0;
                this.selectedButtonElement && (this.selectedButtonElement.classList === t.classList && (n = !1), f(this, "deselectButton", {
                    button: this.selectedButtonElement
                }), this.nextEvent && (this.currentUserDetails && "annotations" === this.currentUserDetails.coll && e.removeAnnotation(this.currentUserDetails), this.mouseMoveEvent = this.nextEvent = !1)), n ? (this.selectedButton = i, this.selectedButtonElement = t, f(this, "selectButton", {
                    button: t
                }), i.init && i.init.call(this, t, s), (i.start || i.steps) && e.renderer.boxWrapper.addClass("highcharts-draw-mode")) : (e.stockTools && e.stockTools.toggleButtonActiveClass(t), o.removeClass("highcharts-draw-mode"), this.nextEvent = !1, this.mouseMoveEvent = !1, this.selectedButton = null)
            }
            bindingsChartClick(t, i) {
                t = this.chart;
                let s = this.activeAnnotation,
                    e = this.selectedButton,
                    o = t.renderer.boxWrapper;
                s && (s.cancelClick || i.activeAnnotation || !i.target.parentNode || function(t, i) {
                    let s = p.Element.prototype,
                        e = s.matches || s.msMatchesSelector || s.webkitMatchesSelector,
                        o = null;
                    if (s.closest) o = s.closest.call(t, i);
                    else
                        do {
                            if (e.call(t, i)) return t;
                            t = t.parentElement || t.parentNode
                        } while (null !== t && 1 === t.nodeType);
                    return o
                }(i.target, ".highcharts-popup") ? s.cancelClick && setTimeout(() => {
                    s.cancelClick = !1
                }, 0) : f(this, "closePopup")), e && e.start && (this.nextEvent ? (this.nextEvent(i, this.currentUserDetails), this.steps && (this.stepIndex++, e.steps[this.stepIndex] ? this.mouseMoveEvent = this.nextEvent = e.steps[this.stepIndex] : (f(this, "deselectButton", {
                    button: this.selectedButtonElement
                }), o.removeClass("highcharts-draw-mode"), e.end && e.end.call(this, i, this.currentUserDetails), this.nextEvent = !1, this.mouseMoveEvent = !1, this.selectedButton = null))) : (this.currentUserDetails = e.start.call(this, i), this.currentUserDetails && e.steps ? (this.stepIndex = 0, this.steps = !0, this.mouseMoveEvent = this.nextEvent = e.steps[this.stepIndex]) : (f(this, "deselectButton", {
                    button: this.selectedButtonElement
                }), o.removeClass("highcharts-draw-mode"), this.steps = !1, this.selectedButton = null, e.end && e.end.call(this, i, this.currentUserDetails))))
            }
            bindingsContainerMouseMove(t, i) {
                this.mouseMoveEvent && this.mouseMoveEvent(i, this.currentUserDetails)
            }
            fieldsToOptions(t, i) {
                return E(t, (t, s) => {
                    let e = parseFloat(t),
                        o = s.split("."),
                        n = o.length - 1;
                    if (!y(e) || t.match(/px|em/g) || s.match(/format/g) || (t = e), "undefined" !== t) {
                        let s = i;
                        o.forEach((i, e) => {
                            if ("__proto__" !== i && "constructor" !== i) {
                                let a = P(o[e + 1], "");
                                n === e ? s[i] = t : (s[i] || (s[i] = a.match(/\d/g) ? [] : {}), s = s[i])
                            }
                        })
                    }
                }), i
            }
            deselectAnnotation() {
                this.activeAnnotation && (this.activeAnnotation.setControlPointsVisibility(!1), this.activeAnnotation = !1)
            }
            annotationToFields(t) {
                let i = t.options,
                    s = D.annotationsEditable,
                    e = s.nestedOptions,
                    o = P(i.type, i.shapes && i.shapes[0] && i.shapes[0].type, i.labels && i.labels[0] && i.labels[0].type, "label"),
                    n = D.annotationsNonEditable[i.langKey] || [],
                    a = {
                        langKey: i.langKey,
                        type: o
                    };

                function r(i, s, o, a, h) {
                    let c;
                    o && x(i) && -1 === n.indexOf(s) && ((o.indexOf && o.indexOf(s)) >= 0 || o[s] || !0 === o) && (b(i) ? (a[s] = [], i.forEach((t, i) => {
                        A(t) ? (a[s][i] = {}, E(t, (t, o) => {
                            r(t, o, e[s], a[s][i], s)
                        })) : r(t, 0, e[s], a[s], s)
                    })) : A(i) ? (c = {}, b(a) ? (a.push(c), c[s] = {}, c = c[s]) : a[s] = c, E(i, (t, i) => {
                        r(t, i, 0 === s ? o : e[s], c, s)
                    })) : "format" === s ? a[s] = [l(i, t.labels[0].points[0]).toString(), "text"] : b(a) ? a.push([i, u(h, i)]) : a[s] = [i, u(s, i)])
                }
                return E(i, (t, n) => {
                    "typeOptions" === n ? (a[n] = {}, E(i[n], (t, i) => {
                        r(t, i, e, a[n], i)
                    })) : r(t, n, s[o], a, n)
                }), a
            }
            getClickedClassNames(t, i) {
                let s = i.target,
                    e = [],
                    o;
                for (; s && s.tagName && ((o = m(s, "class")) && (e = e.concat(o.split(" ").map(t => [t, s]))), (s = s.parentNode) !== t););
                return e
            }
            getButtonEvents(t, i) {
                let s;
                let e = this;
                return this.getClickedClassNames(t, i).forEach(t => {
                    e.boundClassNames[t[0]] && !s && (s = {
                        events: e.boundClassNames[t[0]],
                        button: t[1]
                    })
                }), s
            }
            update(t) {
                this.options = C(!0, this.options, t), this.removeEvents(), this.initEvents()
            }
            removeEvents() {
                this.eventsToUnbind.forEach(t => t())
            }
            destroy() {
                this.removeEvents()
            }
        }
        return D.annotationsEditable = {
            nestedOptions: {
                labelOptions: ["style", "format", "backgroundColor"],
                labels: ["style"],
                label: ["style"],
                style: ["fontSize", "color"],
                background: ["fill", "strokeWidth", "stroke"],
                innerBackground: ["fill", "strokeWidth", "stroke"],
                outerBackground: ["fill", "strokeWidth", "stroke"],
                shapeOptions: ["fill", "strokeWidth", "stroke"],
                shapes: ["fill", "strokeWidth", "stroke"],
                line: ["strokeWidth", "stroke"],
                backgroundColors: [!0],
                connector: ["fill", "strokeWidth", "stroke"],
                crosshairX: ["strokeWidth", "stroke"],
                crosshairY: ["strokeWidth", "stroke"]
            },
            circle: ["shapes"],
            ellipse: ["shapes"],
            verticalLine: [],
            label: ["labelOptions"],
            measure: ["background", "crosshairY", "crosshairX"],
            fibonacci: [],
            tunnel: ["background", "line", "height"],
            pitchfork: ["innerBackground", "outerBackground"],
            rect: ["shapes"],
            crookedLine: [],
            basicAnnotation: ["shapes", "labelOptions"]
        }, D.annotationsNonEditable = {
            rectangle: ["crosshairX", "crosshairY", "labelOptions"],
            ellipse: ["labelOptions"],
            circle: ["labelOptions"]
        }, D
    }), s(i, "masters/modules/annotations.src.js", [i["Core/Globals.js"], i["Extensions/Annotations/Annotation.js"], i["Extensions/Annotations/NavigationBindings.js"]], function(t, i, s) {
        return t.Annotation = t.Annotation || i, t.NavigationBindings = t.NavigationBindings || s, t.Annotation.compose(t.Chart, t.NavigationBindings, t.Pointer, t.SVGRenderer), t
    })
}); //# sourceMappingURL=annotations.js.map