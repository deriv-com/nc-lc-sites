!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Highcharts Drilldown module
 *
 * Author: Torstein Honsi
 * License: www.highcharts.com/license
 *
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/drilldown", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function i(t, e, i, o) {
        t.hasOwnProperty(e) || (t[e] = o.apply(null, i), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
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
    }), i(e, "Extensions/Breadcrumbs/Breadcrumbs.js", [e["Extensions/Breadcrumbs/BreadcrumbsDefaults.js"], e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e, i, o) {
        let {
            format: l
        } = e, {
            composed: s
        } = i, {
            addEvent: r,
            defined: n,
            extend: a,
            fireEvent: d,
            isString: p,
            merge: h,
            objectEach: u,
            pick: c,
            pushUnique: m
        } = o;

        function w() {
            if (this.breadcrumbs) {
                let t = this.resetZoomButton && this.resetZoomButton.getBBox(),
                    e = this.breadcrumbs.options;
                t && "right" === e.position.align && "plotBox" === e.relativeTo && this.breadcrumbs.alignBreadcrumbsGroup(-t.width - e.buttonSpacing)
            }
        }

        function f() {
            this.breadcrumbs && (this.breadcrumbs.destroy(), this.breadcrumbs = void 0)
        }

        function g() {
            let t = this.breadcrumbs;
            if (t && !t.options.floating && t.level) {
                let e = t.options,
                    i = e.buttonTheme,
                    o = (i.height || 0) + 2 * (i.padding || 0) + e.buttonSpacing,
                    l = e.position.verticalAlign;
                "bottom" === l ? (this.marginBottom = (this.marginBottom || 0) + o, t.yOffset = o) : "middle" !== l ? (this.plotTop += o, t.yOffset = -o) : t.yOffset = void 0
            }
        }

        function b() {
            this.breadcrumbs && this.breadcrumbs.redraw()
        }

        function v(t) {
            !0 === t.resetSelection && this.breadcrumbs && this.breadcrumbs.alignBreadcrumbsGroup()
        }
        class y {
            static compose(e, i) {
                m(s, "Breadcrumbs") && (r(e, "destroy", f), r(e, "afterShowResetZoom", w), r(e, "getMargins", g), r(e, "redraw", b), r(e, "selection", v), a(i.lang, t.lang))
            }
            constructor(t, e) {
                this.elementList = {}, this.isDirty = !0, this.level = 0, this.list = [];
                let i = h(t.options.drilldown && t.options.drilldown.drillUpButton, y.defaultOptions, t.options.navigation && t.options.navigation.breadcrumbs, e);
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
                    o = e.options.lang,
                    s = c(i.format, i.showFullPath ? "{level.name}" : "← {level.name}"),
                    r = o && c(o.drillUpText, o.mainBreadcrumb),
                    a = i.formatter && i.formatter(t) || l(s, {
                        level: t.levelOptions
                    }, e) || "";
                return (p(a) && !a.length || "← " === a) && n(r) && (a = i.showFullPath ? r : "← " + r), a
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
                let o = this.group ? this.group.getBBox().width : i,
                    l = e[e.length - 2];
                !t.drillUpButton && this.level > 0 ? t.drillUpButton = this.renderButton(l, o, i) : t.drillUpButton && (this.level > 0 ? this.updateSingleButton() : this.destroySingleButton())
            }
            alignBreadcrumbsGroup(t) {
                if (this.group) {
                    let e = this.options,
                        i = e.buttonTheme,
                        o = e.position,
                        l = "chart" === e.relativeTo || "spacingBox" === e.relativeTo ? void 0 : "plotBox",
                        s = this.group.getBBox(),
                        r = 2 * (i.padding || 0) + e.buttonSpacing;
                    o.width = s.width + r, o.height = s.height + r;
                    let n = h(o);
                    t && (n.x += t), this.options.rtl && (n.x += o.width), n.y = c(n.y, this.yOffset, 0), this.group.align(n, !0, l)
                }
            }
            renderButton(t, e, i) {
                let o = this,
                    l = this.chart,
                    s = o.options,
                    r = h(s.buttonTheme),
                    n = l.renderer.button(o.getButtonText(t), e, i, function(e) {
                        let i;
                        let l = s.events && s.events.click;
                        l && (i = l.call(o, e, t)), !1 !== i && (s.showFullPath ? e.newLevel = t.level : e.newLevel = o.level - 1, d(o, "up", e))
                    }, r).addClass("highcharts-breadcrumbs-button").add(o.group);
                return l.styledMode || n.attr(s.style), n
            }
            renderSeparator(t, e) {
                let i = this.chart,
                    o = this.options.separator,
                    l = i.renderer.label(o.text, t, e, void 0, void 0, void 0, !1).addClass("highcharts-breadcrumbs-separator").add(this.group);
                return i.styledMode || l.css(o.style), l
            }
            update(t) {
                h(!0, this.options, t), this.destroy(), this.isDirty = !0
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
                u(e, (i, o) => {
                    (t || !e[o].updated) && ((i = e[o]).button && i.button.destroy(), i.separator && i.separator.destroy(), delete i.button, delete i.separator, delete e[o])
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
                    o = this.options.rtl,
                    l = o ? -1 : 1,
                    s = function(t, e) {
                        return l * t.getBBox().width + l * e
                    },
                    r = function(t, e, i) {
                        t.translate(e - t.getBBox().width, i)
                    },
                    n = this.group ? s(this.group, e) : e,
                    a, d;
                for (let p = 0, h = i.length; p < h; ++p) {
                    let u, c;
                    let m = p === h - 1;
                    t[(d = i[p]).level] ? (u = (a = t[d.level]).button, a.separator || m ? a.separator && m && (a.separator.destroy(), delete a.separator) : (n += l * e, a.separator = this.renderSeparator(n, e), o && r(a.separator, n, e), n += s(a.separator, e)), t[d.level].updated = !0) : (u = this.renderButton(d, n, e), o && r(u, n, e), n += s(u, e), m || (c = this.renderSeparator(n, e), o && r(c, n, e), n += s(c, e)), t[d.level] = {
                        button: u,
                        separator: c,
                        updated: !0
                    }), u && u.setState(m ? 2 : 0)
                }
            }
        }
        return y.defaultOptions = t.options, y
    }), i(e, "Extensions/Drilldown/DrilldownDefaults.js", [], function() {
        return {
            activeAxisLabelStyle: {
                cursor: "pointer",
                color: "#0022ff",
                fontWeight: "bold",
                textDecoration: "underline"
            },
            activeDataLabelStyle: {
                cursor: "pointer",
                color: "#0022ff",
                fontWeight: "bold",
                textDecoration: "underline"
            },
            animation: {
                duration: 500
            },
            drillUpButton: {
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            },
            mapZooming: !0
        }
    }), i(e, "Extensions/Drilldown/DrilldownSeries.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            animObject: i
        } = t, {
            addEvent: o,
            extend: l,
            fireEvent: s,
            merge: r,
            pick: n,
            syncTimeout: a
        } = e;

        function d(t, e, i, o) {
            t[i ? "addClass" : "removeClass"]("highcharts-drilldown-point"), o || t.css({
                cursor: e
            })
        }

        function p(t) {
            let e = this,
                o = e.chart,
                s = o.drilldownLevels,
                r = i((o.options.drilldown || {}).animation),
                a = this.xAxis,
                d = o.styledMode;
            if (!t) {
                let t;
                (s || []).forEach(i => {
                    e.options._ddSeriesId === i.lowerSeriesOptions._ddSeriesId && (t = i.shapeArgs, !d && t && (t.fill = i.color))
                }), t.x += n(a.oldPos, a.pos) - a.pos, e.points.forEach(i => {
                    let o = i.shapeArgs;
                    d || (o.fill = i.color), i.graphic && i.graphic.attr(t).animate(l(i.shapeArgs, {
                        fill: i.color || e.color
                    }), r)
                }), o.drilldown && o.drilldown.fadeInGroup(this.dataLabelsGroup), delete this.animate
            }
        }

        function h(t) {
            let e = this,
                o = i((e.chart.options.drilldown || {}).animation);
            (e.trackerGroups || []).forEach(t => {
                e[t] && e[t].on("mouseover")
            });
            let l = e.group,
                s = l !== e.chart.columnGroup;
            s && delete e.group, this.points.forEach(i => {
                let n = i.graphic,
                    a = t.shapeArgs;
                if (n && a) {
                    let d = () => {
                        n.destroy(), l && s && (l = l.destroy())
                    };
                    delete i.graphic, e.chart.styledMode || (a.fill = t.color), o.duration ? n.animate(a, r(o, {
                        complete: d
                    })) : (n.attr(a), d())
                }
            })
        }

        function u(t) {
            let e = this,
                i = e.drilldownLevel;
            t || (e.points.forEach(t => {
                let e = t.dataLabel;
                t.graphic && t.graphic.hide(), e && (e.hidden = "hidden" === e.attr("visibility"), e.hidden || (e.hide(), e.connector?.hide()))
            }), a(() => {
                if (e.points) {
                    let t = [];
                    e.data.forEach(e => {
                        t.push(e)
                    }), e.nodes && (t = t.concat(e.nodes)), t.forEach((t, e) => {
                        let o = e === (i && i.pointIndex) ? "show" : "fadeIn",
                            l = t.dataLabel;
                        t.graphic && t.visible && t.graphic[o]("show" === o || void 0), l && !l.hidden && (l.fadeIn(), l.connector?.fadeIn())
                    })
                }
            }, Math.max(e.chart.options.drilldown.animation.duration - 50, 0)), delete this.animate)
        }

        function c(t) {
            let e = this,
                i = e.chart,
                o = e.group;
            i && o && e.options && i.options.drilldown && i.options.drilldown.animation && (t && i.mapView ? (o.attr({
                opacity: .01
            }), i.mapView.allowTransformAnimation = !1, e.options.inactiveOtherPoints = !0, e.options.enableMouseTracking = !1) : (o.animate({
                opacity: 1
            }, i.options.drilldown.animation, () => {
                e.options && (e.options.inactiveOtherPoints = !1, e.options.enableMouseTracking = n(e.userOptions && e.userOptions.enableMouseTracking, !0), e.isDirty = !0, i.redraw())
            }), i.drilldown && i.drilldown.fadeInGroup(this.dataLabelsGroup)))
        }

        function m() {
            let t = this.chart;
            t && t.mapView && (t.mapView.allowTransformAnimation = !1), this.options && (this.options.inactiveOtherPoints = !0)
        }

        function w(t) {
            let e = this.chart,
                i = this.group;
            e && i && (t ? (i.attr({
                opacity: .01
            }), this.options && (this.options.inactiveOtherPoints = !0)) : (i.animate({
                opacity: 1
            }, (e.options.drilldown || {}).animation), e.drilldown && e.drilldown.fadeInGroup(this.dataLabelsGroup)))
        }

        function f() {
            return this.drilldown && !this.unbindDrilldownClick && (this.unbindDrilldownClick = o(this, "click", b)), this
        }

        function g() {
            let t = this.series,
                e = t.chart.styledMode;
            this.drilldown && t.halo && "hover" === this.state ? d(t.halo, "pointer", !0, e) : t.halo && d(t.halo, "auto", !1, e)
        }

        function b(t) {
            let e = this.series;
            e.xAxis && !1 === (e.chart.options.drilldown || {}).allowPointDrilldown ? e.xAxis.drilldownCategory(this.x, t) : this.runDrilldown(void 0, void 0, t)
        }

        function v(t) {
            let e = t.options || {};
            e.drilldown && !this.unbindDrilldownClick ? this.unbindDrilldownClick = o(this, "click", b) : !e.drilldown && void 0 !== e.drilldown && this.unbindDrilldownClick && (this.unbindDrilldownClick = this.unbindDrilldownClick())
        }

        function y() {
            let t = this.chart,
                e = t.options.drilldown.activeDataLabelStyle,
                i = t.renderer,
                o = t.styledMode;
            for (let t of this.points) {
                let l = t.options.dataLabels,
                    s = n(t.dlOptions, l && l.style, {});
                t.drilldown && t.dataLabel && ("contrast" !== e.color || o || (s.color = i.getContrast(t.color || this.color)), l && l.color && (s.color = l.color), t.dataLabel.addClass("highcharts-drilldown-data-label"), o || t.dataLabel.css(e).css(s))
            }
        }

        function D() {
            let t = this.chart.styledMode;
            for (let e of this.points) e.drilldown && e.graphic && d(e.graphic, "pointer", !0, t)
        }

        function x(t) {
            let e = this.chart,
                i = this.points,
                o = e.drilldownLevels[e.drilldownLevels.length - 1],
                l = e.options.drilldown.animation;
            if (this.is("item") && (l.duration = 0), this.center) {
                let s = o.shapeArgs,
                    n = s.start,
                    a = (s.end - n) / this.points.length,
                    d = e.styledMode;
                if (!t) {
                    let t, p;
                    for (let e = 0, h = i.length; e < h; ++e) t = (p = i[e]).shapeArgs, d || (s.fill = o.color, t.fill = p.color), p.graphic && p.graphic.attr(r(s, {
                        start: n + e * a,
                        end: n + (e + 1) * a
                    }))[l ? "animate" : "attr"](t, l);
                    e.drilldown && e.drilldown.fadeInGroup(this.dataLabelsGroup), delete this.animate
                }
            }
        }

        function S() {
            this.runDrilldown()
        }

        function B(t, e, i) {
            let o = this.series,
                l = o.chart,
                r = l.options.drilldown || {},
                n = (r.series || []).length,
                a;
            for (l.ddDupes || (l.ddDupes = []), l.colorCounter = l.symbolCounter = 0; n-- && !a;) r.series && r.series[n].id === this.drilldown && this.drilldown && -1 === l.ddDupes.indexOf(this.drilldown) && (a = r.series[n], l.ddDupes.push(this.drilldown));
            s(l, "drilldown", {
                point: this,
                seriesOptions: a,
                category: e,
                originalEvent: i,
                points: void 0 !== e && o.xAxis.getDDPoints(e).slice(0)
            }, e => {
                let i = e.point.series && e.point.series.chart,
                    o = e.seriesOptions;
                i && o && (t ? i.addSingleSeriesAsDrilldown(e.point, o) : i.addSeriesAsDrilldown(e.point, o))
            })
        }
        return {
            compose: function(t, e) {
                let i = t.prototype.pointClass,
                    l = i.prototype;
                if (!l.doDrilldown) {
                    let {
                        column: s,
                        map: r,
                        pie: n
                    } = e;
                    if (o(i, "afterInit", f), o(i, "afterSetState", g), o(i, "update", v), l.doDrilldown = S, l.runDrilldown = B, o(t, "afterDrawDataLabels", y), o(t, "afterDrawTracker", D), s) {
                        let t = s.prototype;
                        t.animateDrilldown = p, t.animateDrillupFrom = h, t.animateDrillupTo = u
                    }
                    if (r) {
                        let t = r.prototype;
                        t.animateDrilldown = c, t.animateDrillupFrom = m, t.animateDrillupTo = w
                    }
                    if (n) {
                        let t = n.prototype;
                        t.animateDrilldown = x, t.animateDrillupFrom = h, t.animateDrillupTo = u
                    }
                }
            }
        }
    }), i(e, "Extensions/Drilldown/Drilldown.js", [e["Core/Animation/AnimationUtilities.js"], e["Extensions/Breadcrumbs/Breadcrumbs.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Extensions/Drilldown/DrilldownDefaults.js"], e["Extensions/Drilldown/DrilldownSeries.js"], e["Core/Utilities.js"]], function(t, e, i, o, l, s, r) {
        var n;
        let {
            animObject: a
        } = t, {
            noop: d
        } = o, {
            addEvent: p,
            defined: h,
            diffObjects: u,
            extend: c,
            fireEvent: m,
            merge: w,
            objectEach: f,
            pick: g,
            removeEvent: b,
            syncTimeout: v
        } = r, y = 1;

        function D(t, e) {
            this.getDDPoints(t).forEach(function(i) {
                i && i.series && i.series.visible && i.runDrilldown && i.runDrilldown(!0, t, e)
            }), this.chart.applyDrilldown()
        }

        function x(t) {
            return this.ddPoints && this.ddPoints[t] || []
        }

        function S(t) {
            let e = [],
                i = t.drilldownLevels;
            return i && i.length && (e[0] || e.push({
                level: 0,
                levelOptions: i[0].seriesOptions
            }), i.forEach(function(t) {
                let i = e[e.length - 1];
                t.levelNumber + 1 > i.level && e.push({
                    level: t.levelNumber + 1,
                    levelOptions: w({
                        name: t.lowerSeries.name
                    }, t.pointOptions)
                })
            })), e
        }
        class B {
            constructor(t) {
                this.chart = t
            }
            addSeriesAsDrilldown(t, e) {
                let i = this.chart || this;
                if (m(this, "addSeriesAsDrilldown", {
                        seriesOptions: e
                    }), i.mapView) {
                    if (t.series.isDrilling = !0, i.series.forEach(t => {
                            t.options.inactiveOtherPoints = !0, t.dataLabelsGroup?.destroy(), delete t.dataLabelsGroup
                        }), i.options.drilldown && !i.mapView.projection.hasGeoProjection && l && !h(u(i.options.drilldown, l).mapZooming) && (i.options.drilldown.mapZooming = !1), i.options.drilldown && i.options.drilldown.animation && i.options.drilldown.mapZooming) {
                        i.mapView.allowTransformAnimation = !0;
                        let o = a(i.options.drilldown.animation);
                        if ("boolean" != typeof o) {
                            let l = o.complete,
                                s = function(o) {
                                    o && o.applyDrilldown && i.mapView && (i.addSingleSeriesAsDrilldown(t, e), i.applyDrilldown(), i.mapView.allowTransformAnimation = !1)
                                };
                            o.complete = function() {
                                l && l.apply(this, arguments), s.apply(this, arguments)
                            }
                        }
                        t.zoomTo(o)
                    } else i.addSingleSeriesAsDrilldown(t, e), i.applyDrilldown()
                } else i.addSingleSeriesAsDrilldown(t, e), i.applyDrilldown()
            }
            addSingleSeriesAsDrilldown(t, e) {
                let o = this.chart || this,
                    l = t.series,
                    s = l.xAxis,
                    r = l.yAxis,
                    n = o.styledMode ? {
                        colorIndex: g(t.colorIndex, l.colorIndex)
                    } : {
                        color: t.color || l.color
                    },
                    a = l.options._levelNumber || 0,
                    p = l.points.indexOf(t);
                o.drilldownLevels || (o.drilldownLevels = []), e = c(c({
                    _ddSeriesId: y++
                }, n), e);
                let h = [],
                    u = [],
                    m;
                (m = o.drilldownLevels[o.drilldownLevels.length - 1]) && m.levelNumber !== a && (m = void 0), l.chart.series.forEach(t => {
                    t.xAxis === s && (t.options._ddSeriesId = t.options._ddSeriesId || y++, t.options.colorIndex = t.colorIndex, t.options._levelNumber = t.options._levelNumber || a, m ? (h = m.levelSeries, u = m.levelSeriesOptions) : (h.push(t), t.purgedOptions = w({
                        _ddSeriesId: t.options._ddSeriesId,
                        _levelNumber: t.options._levelNumber,
                        selected: t.options.selected
                    }, t.userOptions), u.push(t.purgedOptions)))
                });
                let f = c({
                    levelNumber: a,
                    seriesOptions: l.options,
                    seriesPurgedOptions: l.purgedOptions,
                    levelSeriesOptions: u,
                    levelSeries: h,
                    shapeArgs: t.shapeArgs,
                    bBox: t.graphic ? t.graphic.getBBox() : {},
                    color: t.isNull ? i.parse(n.color).setOpacity(0).get() : n.color,
                    lowerSeriesOptions: e,
                    pointOptions: l.options.data[p],
                    pointIndex: p,
                    oldExtremes: {
                        xMin: s && s.userMin,
                        xMax: s && s.userMax,
                        yMin: r && r.userMin,
                        yMax: r && r.userMax
                    },
                    resetZoomButton: m && m.levelNumber === a ? void 0 : o.resetZoomButton
                }, n);
                o.drilldownLevels.push(f), s && s.names && (s.names.length = 0);
                let b = f.lowerSeries = o.addSeries(e, !1);
                b.options._levelNumber = a + 1, s && (s.oldPos = s.pos, s.userMin = s.userMax = null, r.userMin = r.userMax = null), b.isDrilling = !0, l.type === b.type && (b.animate = b.animateDrilldown || d, b.options.animation = !0)
            }
            applyDrilldown() {
                let t;
                let e = this.chart || this,
                    i = e.drilldownLevels;
                i && i.length > 0 && (t = i[i.length - 1].levelNumber, e.hasCartesianSeries = i.some(t => t.lowerSeries.isCartesian), (e.drilldownLevels || []).forEach(i => {
                    e.mapView && e.options.drilldown && e.options.drilldown.mapZooming && (e.redraw(), i.lowerSeries.isDrilling = !1, e.mapView.fitToBounds(i.lowerSeries.bounds), i.lowerSeries.isDrilling = !0), i.levelNumber === t && i.levelSeries.forEach(o => {
                        if (e.mapView) {
                            if (o.options && o.options._levelNumber === t && o.group) {
                                let t = {};
                                e.options.drilldown && (t = e.options.drilldown.animation), o.group.animate({
                                    opacity: 0
                                }, t, () => {
                                    o.remove(!1), i.levelSeries.filter(t => Object.keys(t).length).length || (e.resetZoomButton && (e.resetZoomButton.hide(), delete e.resetZoomButton), e.pointer?.reset(), m(e, "afterDrilldown"), e.mapView && (e.series.forEach(t => {
                                        t.isDirtyData = !0, t.isDrilling = !1
                                    }), e.mapView.fitToBounds(void 0, void 0)), m(e, "afterApplyDrilldown"))
                                })
                            }
                        } else o.options && o.options._levelNumber === t && o.remove(!1)
                    })
                })), e.mapView || (e.resetZoomButton && (e.resetZoomButton.hide(), delete e.resetZoomButton), e.pointer?.reset(), m(e, "afterDrilldown"), e.hasCartesianSeries || e.axes.forEach(t => {
                    t.destroy(!0), t.init(e, w(t.userOptions, t.options))
                }), e.redraw(), m(e, "afterApplyDrilldown"))
            }
            drillUp(t) {
                let e = this.chart || this;
                if (!e.drilldownLevels || 0 === e.drilldownLevels.length) return;
                m(e, "beforeDrillUp");
                let i = e.drilldownLevels,
                    o = i[i.length - 1].levelNumber,
                    l = e.series,
                    s = e.drilldownLevels.length,
                    r = (t, i) => {
                        let o;
                        if (l.forEach(e => {
                                e.options._ddSeriesId === t._ddSeriesId && (o = e)
                            }), (o = o || e.addSeries(t, !1)).type === i.type && o.animateDrillupTo && (o.animate = o.animateDrillupTo), t === p.seriesPurgedOptions) return o
                    },
                    n = t => {
                        t.remove(!1), e.series.forEach(t => {
                            t.colorAxis && (t.isDirtyData = !0), t.options.inactiveOtherPoints = !1
                        }), e.redraw()
                    },
                    a = i.length,
                    d, p, h;
                for (e.symbolCounter = e.colorCounter = 0; a--;) {
                    let u, c;
                    if ((p = i[a]).levelNumber === o) {
                        if (i.pop(), !(u = p.lowerSeries).chart) {
                            for (d = l.length; d--;)
                                if (l[d].options.id === p.lowerSeriesOptions.id && l[d].options._levelNumber === o + 1) {
                                    u = l[d];
                                    break
                                }
                        }
                        u.xData = [], u.xAxis && u.xAxis.names && (0 === s || a === s) && (u.xAxis.names.length = 0), p.levelSeriesOptions.forEach(t => {
                            let e = r(t, u);
                            e && (c = e)
                        }), m(e, "drillup", {
                            seriesOptions: p.seriesPurgedOptions || p.seriesOptions
                        }), c && (c.type === u.type && (c.drilldownLevel = p, c.options.animation = e.options.drilldown.animation, u.animateDrillupFrom && u.chart && u.animateDrillupFrom(p)), c.options._levelNumber = o);
                        let w = u;
                        if (e.mapView || w.remove(!1), c && c.xAxis && (h = p.oldExtremes, c.xAxis.setExtremes(h.xMin, h.xMax, !1), c.yAxis.setExtremes(h.yMin, h.yMax, !1)), p.resetZoomButton && (e.resetZoomButton = p.resetZoomButton), e.mapView) {
                            let i = p.levelNumber === o && t,
                                l = e.options.drilldown && e.options.drilldown.animation && e.options.drilldown.mapZooming;
                            i ? u.remove(!1) : (u.dataLabelsGroup && (u.dataLabelsGroup.destroy(), delete u.dataLabelsGroup), e.mapView && c && (l && (u.isDrilling = !0, c.isDrilling = !0, e.redraw(!1), e.mapView.fitToBounds(u.bounds, void 0, !0, !1)), e.mapView.allowTransformAnimation = !0, m(e, "afterDrillUp", {
                                seriesOptions: c ? c.userOptions : void 0
                            }), l ? e.mapView.setView(void 0, g(e.mapView.minZoom, 1), !0, {
                                complete: function() {
                                    Object.prototype.hasOwnProperty.call(this, "complete") && n(u)
                                }
                            }) : (e.mapView.allowTransformAnimation = !1, u.group ? u.group.animate({
                                opacity: 0
                            }, e.options.drilldown.animation, () => {
                                n(u), e.mapView && (e.mapView.allowTransformAnimation = !0)
                            }) : (n(u), e.mapView.allowTransformAnimation = !0)), c.isDrilling = !1, e.ddDupes && (e.ddDupes.length = 0), m(e, "drillupall")))
                        } else m(e, "afterDrillUp"), e.redraw(), e.ddDupes && (e.ddDupes.length = 0), m(e, "drillupall")
                    }
                }
            }
            fadeInGroup(t) {
                let e = a(this.chart.options.drilldown.animation);
                t && (t.hide(), v(() => {
                    t && t.added && t.fadeIn()
                }, Math.max(e.duration - 50, 0)))
            }
            update(t, e) {
                let i = this.chart;
                w(!0, i.options.drilldown, t), g(e, !0) && i.redraw()
            }
        }
        return function(t) {
            function i(t) {
                let e = this.chart,
                    i = this.getLevel() - t.newLevel,
                    o = i > 1;
                for (let t = 0; t < i; t++) t === i - 1 && (o = !1), e.drillUp(o)
            }

            function o() {
                let t = this.options.drilldown,
                    i = t && t.breadcrumbs;
                this.breadcrumbs || (this.breadcrumbs = new e(this, i)), this.breadcrumbs.updateProperties(S(this))
            }

            function r() {
                this.breadcrumbs && this.breadcrumbs.updateProperties(S(this))
            }

            function n() {
                this.drilldown = new B(this)
            }

            function a() {
                this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy())
            }

            function d() {
                this.resetZoomButton && this.showResetZoom()
            }

            function h() {
                (this.xAxis || []).forEach(t => {
                    t.ddPoints = {}, t.series.forEach(e => {
                        let i = e.xData || [],
                            o = e.points;
                        for (let l = 0, s = i.length, r; l < s; l++)
                            if ("number" != typeof(r = e.options.data[l]) && (r = e.pointClass.prototype.optionsToObject.call({
                                    series: e
                                }, r)).drilldown) {
                                t.ddPoints[i[l]] || (t.ddPoints[i[l]] = []);
                                let s = l - (e.cropStart || 0);
                                t.ddPoints[i[l]].push(!o || !(s >= 0) || !(s < o.length) || o[s])
                            }
                    }), f(t.ticks, t => t.drillable())
                })
            }

            function u(t) {
                let e = this.breadcrumbs,
                    i = t.options.drilldown && t.options.drilldown.breadcrumbs;
                e && i && e.update(i)
            }

            function c(t) {
                this.attr({
                    opacity: .1,
                    visibility: "inherit"
                }).animate({
                    opacity: g(this.newOpacity, 1)
                }, t || {
                    duration: 250
                })
            }

            function m() {
                let t = this.pos,
                    e = this.label,
                    i = this.axis,
                    o = "xAxis" === i.coll && i.getDDPoints,
                    l = o && i.getDDPoints(t),
                    s = i.chart.styledMode;
                o && (e && l && l.length ? (e.drillable = !0, e.basicStyles || s || (e.basicStyles = w(e.styles)), e.addClass("highcharts-drilldown-axis-label"), e.removeOnDrillableClick && b(e.element, "click"), e.removeOnDrillableClick = p(e.element, "click", function(e) {
                    e.preventDefault(), i.drilldownCategory(t, e)
                }), !s && i.chart.options.drilldown && e.css(i.chart.options.drilldown.activeAxisLabelStyle || {})) : e && e.drillable && e.removeOnDrillableClick && (s || (e.styles = {}, e.element.removeAttribute("style"), e.css(e.basicStyles)), e.removeOnDrillableClick(), e.removeClass("highcharts-drilldown-axis-label")))
            }
            t.compose = function(t, w, f, g, b, v, y) {
                s.compose(g, b);
                let S = w.prototype;
                if (!S.drillUp) {
                    let s = v.prototype.Element,
                        g = B.prototype,
                        b = t.prototype,
                        L = s.prototype,
                        O = y.prototype;
                    b.drilldownCategory = D, b.getDDPoints = x, e.compose(w, f), p(e, "up", i), S.addSeriesAsDrilldown = g.addSeriesAsDrilldown, S.addSingleSeriesAsDrilldown = g.addSingleSeriesAsDrilldown, S.applyDrilldown = g.applyDrilldown, S.drillUp = g.drillUp, p(w, "afterDrilldown", o), p(w, "afterDrillUp", r), p(w, "afterInit", n), p(w, "drillup", a), p(w, "drillupall", d), p(w, "render", h), p(w, "update", u), f.drilldown = l, L.fadeIn = c, O.drillable = m
                }
            }
        }(n || (n = {})), n
    }), i(e, "masters/modules/drilldown.src.js", [e["Core/Globals.js"], e["Extensions/Drilldown/Drilldown.js"], e["Extensions/Breadcrumbs/Breadcrumbs.js"]], function(t, e, i) {
        return t.Breadcrumbs = t.Breadcrumbs || i, e.compose(t.Axis, t.Chart, t.defaultOptions, t.Series, t.seriesTypes, t.SVGRenderer, t.Tick), t
    })
}); //# sourceMappingURL=drilldown.js.map