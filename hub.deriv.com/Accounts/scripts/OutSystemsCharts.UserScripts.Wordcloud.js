!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * (c) 2016-2024 Highsoft AS
 * Authors: Jon Arild Nygard
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/wordcloud", ["highcharts"], function(e) {
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
    i(e, "Series/DrawPointUtilities.js", [], function() {
        return {
            draw: function(t, e) {
                let {
                    animatableAttribs: i,
                    onComplete: o,
                    css: n,
                    renderer: r
                } = e, a = t.series && t.series.chart.hasRendered ? void 0 : t.series && t.series.options.animation, l = t.graphic;
                if (e.attribs = {
                        ...e.attribs,
                        class: t.getClassName()
                    }, t.shouldDraw()) l || (l = "text" === e.shapeType ? r.text() : "image" === e.shapeType ? r.image(e.imageUrl || "").attr(e.shapeArgs || {}) : r[e.shapeType](e.shapeArgs || {}), t.graphic = l, l.add(e.group)), n && l.css(n), l.attr(e.attribs).animate(i, !e.isNew && a, o);
                else if (l) {
                    let e = () => {
                        t.graphic = l = l && l.destroy(), "function" == typeof o && o()
                    };
                    Object.keys(i).length ? l.animate(i, void 0, () => e()) : e()
                }
            }
        }
    }), i(e, "Series/Wordcloud/WordcloudPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            column: {
                prototype: {
                    pointClass: i
                }
            }
        } = t.seriesTypes, {
            extend: o
        } = e;
        class n extends i {
            isValid() {
                return !0
            }
        }
        return o(n.prototype, {
            weight: 1
        }), n
    }), i(e, "Series/Wordcloud/WordcloudSeriesDefaults.js", [], function() {
        return {
            allowExtendPlayingField: !0,
            animation: {
                duration: 500
            },
            borderWidth: 0,
            clip: !1,
            colorByPoint: !0,
            cropThreshold: 1 / 0,
            minFontSize: 1,
            maxFontSize: 25,
            placementStrategy: "center",
            rotation: {
                from: 0,
                orientations: 2,
                to: 90
            },
            showInLegend: !1,
            spiral: "rectangular",
            style: {
                fontFamily: "sans-serif",
                fontWeight: "900",
                whiteSpace: "nowrap"
            },
            tooltip: {
                followPointer: !0,
                pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.weight}</b><br/>'
            }
        }
    }), i(e, "Series/Wordcloud/WordcloudUtils.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            deg2rad: i
        } = t, {
            extend: o,
            find: n,
            isNumber: r,
            isObject: a,
            merge: l
        } = e;

        function s(t, e) {
            return !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)
        }

        function h(t) {
            let e, i = t.axes || [];
            return i.length || (i = [], t.concat([t[0]]).reduce((t, e) => {
                let o = function(t, e) {
                    let i = e[0] - t[0],
                        o = e[1] - t[1];
                    return [
                        [-o, i],
                        [o, -i]
                    ]
                }(t, e)[0];
                return n(i, t => t[0] === o[0] && t[1] === o[1]) || i.push(o), e
            }), t.axes = i), i
        }

        function d(t, e) {
            let i = t.map(t => {
                let i = t[0],
                    o = t[1];
                return i * e[0] + o * e[1]
            });
            return {
                min: Math.min.apply(this, i),
                max: Math.max.apply(this, i)
            }
        }

        function u(t, e) {
            let i = h(t),
                o = h(e);
            return !n(i.concat(o), i => (function(t, e, i) {
                let o = d(e, t),
                    n = d(i, t);
                return !!(n.min > o.max || n.max < o.min)
            })(i, t, e))
        }

        function c(t, e) {
            let i = 4 * t,
                o = Math.ceil((Math.sqrt(i) - 1) / 2),
                n = 2 * o + 1,
                r = Math.pow(n, 2),
                a = !1;
            return n -= 1, t <= 1e4 && ("boolean" == typeof a && i >= r - n && (a = {
                x: o - (r - i),
                y: -o
            }), r -= n, "boolean" == typeof a && i >= r - n && (a = {
                x: -o,
                y: -o + (r - i)
            }), r -= n, "boolean" == typeof a && (a = i >= r - n ? {
                x: -o + (r - i),
                y: o
            } : {
                x: o,
                y: o - (r - i - n)
            }), a.x *= 5, a.y *= 5), a
        }

        function p(t, e) {
            let i = Math.pow(10, r(e) ? e : 14);
            return Math.round(t * i) / i
        }

        function m(t, e) {
            let o = t[0],
                n = t[1],
                r = -(i * e),
                a = Math.cos(r),
                l = Math.sin(r);
            return [p(o * a - n * l), p(o * l + n * a)]
        }

        function g(t, e, i) {
            let o = m([t[0] - e[0], t[1] - e[1]], i);
            return [o[0] + e[0], o[1] + e[1]]
        }
        return {
            archimedeanSpiral: function(t, e) {
                let i = e.field,
                    o = i.width * i.width + i.height * i.height,
                    n = .8 * t,
                    r = !1;
                return t <= 1e4 && !(Math.min(Math.abs((r = {
                    x: n * Math.cos(n),
                    y: n * Math.sin(n)
                }).x), Math.abs(r.y)) < o) && (r = !1), r
            },
            extendPlayingField: function(t, e) {
                let i, o, n, r, s, h, d, u;
                return a(t) && a(e) ? (i = e.bottom - e.top, h = (s = (o = e.right - e.left) * (n = t.ratioX) > i * (r = t.ratioY) ? o : i) * n, d = s * r, u = l(t, {
                    width: t.width + 2 * h,
                    height: t.height + 2 * d
                })) : u = t, u
            },
            getBoundingBoxFromPolygon: function(t) {
                return t.reduce(function(t, e) {
                    let i = e[0],
                        o = e[1];
                    return t.left = Math.min(i, t.left), t.right = Math.max(i, t.right), t.bottom = Math.max(o, t.bottom), t.top = Math.min(o, t.top), t
                }, {
                    left: Number.MAX_VALUE,
                    right: -Number.MAX_VALUE,
                    bottom: -Number.MAX_VALUE,
                    top: Number.MAX_VALUE
                })
            },
            getPlayingField: function(t, e, i) {
                let o = i.reduce(function(t, e) {
                        let i = e.dimensions,
                            o = Math.max(i.width, i.height);
                        return t.maxHeight = Math.max(t.maxHeight, i.height), t.maxWidth = Math.max(t.maxWidth, i.width), t.area += o * o, t
                    }, {
                        maxHeight: 0,
                        maxWidth: 0,
                        area: 0
                    }),
                    n = Math.max(o.maxHeight, o.maxWidth, .85 * Math.sqrt(o.area)),
                    r = t > e ? t / e : 1,
                    a = e > t ? e / t : 1;
                return {
                    width: n * r,
                    height: n * a,
                    ratioX: r,
                    ratioY: a
                }
            },
            getPolygon: function(t, e, i, o, n) {
                let r = [t, e],
                    a = t - i / 2,
                    l = t + i / 2,
                    s = e - o / 2,
                    h = e + o / 2;
                return [
                    [a, s],
                    [l, s],
                    [l, h],
                    [a, h]
                ].map(function(t) {
                    return g(t, r, -n)
                })
            },
            getRandomPosition: function(t) {
                return Math.round(t * (Math.random() + .5) / 2)
            },
            getRotation: function(t, e, i, o) {
                let n = !1,
                    a;
                return r(t) && r(e) && r(i) && r(o) && t > 0 && e > -1 && o > i && (a = (o - i) / (t - 1 || 1), n = i + e % t * a), n
            },
            getScale: function(t, e, i) {
                let o = 2 * Math.max(Math.abs(i.top), Math.abs(i.bottom)),
                    n = 2 * Math.max(Math.abs(i.left), Math.abs(i.right));
                return Math.min(n > 0 ? 1 / n * t : 1, o > 0 ? 1 / o * e : 1)
            },
            getSpiral: function(t, e) {
                let i = [];
                for (let o = 1; o < 1e4; o++) i.push(t(o, e));
                return t => t <= 1e4 && i[t - 1]
            },
            intersectionTesting: function(t, e) {
                let i = e.placed,
                    r = e.field,
                    l = e.rectangle,
                    h = e.polygon,
                    d = e.spiral,
                    c = t.rect = o({}, l),
                    p = 1,
                    m = {
                        x: 0,
                        y: 0
                    };
                for (t.polygon = h, t.rotation = e.rotation; !1 !== m && (function(t, e) {
                        let i = t.rect,
                            o = t.polygon,
                            r = t.lastCollidedWith,
                            a = function(e) {
                                let n = s(i, e.rect);
                                return n && (t.rotation % 90 || e.rotation % 90) && (n = u(o, e.polygon)), n
                            },
                            l = !1;
                        return !r || (l = a(r)) || delete t.lastCollidedWith, l || (l = !!n(e, function(e) {
                            let i = a(e);
                            return i && (t.lastCollidedWith = e), i
                        })), l
                    }(t, i) || function(t, e) {
                        let i = {
                            left: -(e.width / 2),
                            right: e.width / 2,
                            top: -(e.height / 2),
                            bottom: e.height / 2
                        };
                        return !(i.left < t.left && i.right > t.right && i.top < t.top && i.bottom > t.bottom)
                    }(c, r));) a(m = d(p)) && (c.left = l.left + m.x, c.right = l.right + m.x, c.top = l.top + m.y, c.bottom = l.bottom + m.y, t.polygon = function(t, e, i) {
                    return i.map(function(i) {
                        return [i[0] + t, i[1] + e]
                    })
                }(m.x, m.y, h)), p++;
                return m
            },
            isPolygonsColliding: u,
            isRectanglesIntersecting: s,
            rectangularSpiral: function(t, e) {
                let i = c(t, e),
                    o = e.field;
                return i && (i.x *= o.ratioX, i.y *= o.ratioY), i
            },
            rotate2DToOrigin: m,
            rotate2DToPoint: g,
            squareSpiral: c,
            updateFieldBoundaries: function(t, e) {
                return (!r(t.left) || t.left > e.left) && (t.left = e.left), (!r(t.right) || t.right < e.right) && (t.right = e.right), (!r(t.top) || t.top > e.top) && (t.top = e.top), (!r(t.bottom) || t.bottom < e.bottom) && (t.bottom = e.bottom), t
            }
        }
    }), i(e, "Series/Wordcloud/WordcloudSeries.js", [e["Series/DrawPointUtilities.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"], e["Series/Wordcloud/WordcloudPoint.js"], e["Series/Wordcloud/WordcloudSeriesDefaults.js"], e["Series/Wordcloud/WordcloudUtils.js"]], function(t, e, i, o, n, r, a) {
        let {
            noop: l
        } = e, {
            column: s
        } = i.seriesTypes, {
            extend: h,
            isArray: d,
            isNumber: u,
            isObject: c,
            merge: p
        } = o, {
            archimedeanSpiral: m,
            extendPlayingField: g,
            getBoundingBoxFromPolygon: f,
            getPlayingField: y,
            getPolygon: x,
            getRandomPosition: b,
            getRotation: w,
            getScale: M,
            getSpiral: S,
            intersectionTesting: W,
            isPolygonsColliding: A,
            rectangularSpiral: j,
            rotate2DToOrigin: C,
            rotate2DToPoint: F,
            squareSpiral: P,
            updateFieldBoundaries: v
        } = a;
        class T extends s {
            pointAttribs(t, i) {
                let o = e.seriesTypes.column.prototype.pointAttribs.call(this, t, i);
                return delete o.stroke, delete o["stroke-width"], o
            }
            deriveFontSize(t, e, i) {
                let o = u(t) ? t : 0,
                    n = u(e) ? e : 1;
                return Math.floor(Math.max(u(i) ? i : 1, o * n))
            }
            drawPoints() {
                let e = this.hasRendered,
                    i = this.xAxis,
                    o = this.yAxis,
                    n = this.chart,
                    r = this.group,
                    a = this.options,
                    l = a.animation,
                    s = a.allowExtendPlayingField,
                    d = n.renderer,
                    p = [],
                    m = this.placementStrategy[a.placementStrategy],
                    b = a.rotation,
                    w = this.points.map(function(t) {
                        return t.weight
                    }),
                    A = Math.max.apply(null, w),
                    j = this.points.concat().sort((t, e) => e.weight - t.weight),
                    C = d.text().add(r),
                    F;
                for (let t of (this.group.attr({
                        scaleX: 1,
                        scaleY: 1
                    }), j)) {
                    let e = 1 / A * t.weight,
                        i = h({
                            fontSize: this.deriveFontSize(e, a.maxFontSize, a.minFontSize) + "px"
                        }, a.style);
                    C.css(i).attr({
                        x: 0,
                        y: 0,
                        text: t.name
                    });
                    let o = C.getBBox(!0);
                    t.dimensions = {
                        height: o.height,
                        width: o.width
                    }
                }
                F = y(i.len, o.len, j);
                let P = S(this.spirals[a.spiral], {
                    field: F
                });
                for (let i of j) {
                    let o = 1 / A * i.weight,
                        n = h({
                            fontSize: this.deriveFontSize(o, a.maxFontSize, a.minFontSize) + "px"
                        }, a.style),
                        y = m(i, {
                            data: j,
                            field: F,
                            placed: p,
                            rotation: b
                        }),
                        w = h(this.pointAttribs(i, i.selected && "select"), {
                            align: "center",
                            "alignment-baseline": "middle",
                            "dominant-baseline": "middle",
                            x: y.x,
                            y: y.y,
                            text: i.name,
                            rotation: u(y.rotation) ? y.rotation : void 0
                        }),
                        M = x(y.x, y.y, i.dimensions.width, i.dimensions.height, y.rotation),
                        S = f(M),
                        C = W(i, {
                            rectangle: S,
                            polygon: M,
                            field: F,
                            placed: p,
                            spiral: P,
                            rotation: y.rotation
                        }),
                        T;
                    !C && s && (F = g(F, S), C = W(i, {
                        rectangle: S,
                        polygon: M,
                        field: F,
                        placed: p,
                        spiral: P,
                        rotation: y.rotation
                    })), c(C) ? (w.x = (w.x || 0) + C.x, w.y = (w.y || 0) + C.y, S.left += C.x, S.right += C.x, S.top += C.y, S.bottom += C.y, F = v(F, S), p.push(i), i.isNull = !1, i.isInside = !0) : i.isNull = !0, l && (T = {
                        x: w.x,
                        y: w.y
                    }, e ? (delete w.x, delete w.y) : (w.x = 0, w.y = 0)), t.draw(i, {
                        animatableAttribs: T,
                        attribs: w,
                        css: n,
                        group: r,
                        renderer: d,
                        shapeArgs: void 0,
                        shapeType: "text"
                    })
                }
                C = C.destroy();
                let T = M(i.len, o.len, F);
                this.group.attr({
                    scaleX: T,
                    scaleY: T
                })
            }
            hasData() {
                return c(this) && !0 === this.visible && d(this.points) && this.points.length > 0
            }
            getPlotBox() {
                let t = this.chart,
                    e = t.inverted,
                    i = this[e ? "yAxis" : "xAxis"],
                    o = this[e ? "xAxis" : "yAxis"],
                    n = i ? i.len : t.plotWidth,
                    r = o ? o.len : t.plotHeight;
                return {
                    translateX: (i ? i.left : t.plotLeft) + n / 2,
                    translateY: (o ? o.top : t.plotTop) + r / 2,
                    scaleX: 1,
                    scaleY: 1
                }
            }
        }
        return T.defaultOptions = p(s.defaultOptions, r), h(T.prototype, {
            animate: l,
            animateDrilldown: l,
            animateDrillupFrom: l,
            isCartesian: !1,
            pointClass: n,
            setClip: l,
            placementStrategy: {
                random: function(t, e) {
                    let i = e.field,
                        o = e.rotation;
                    return {
                        x: b(i.width) - i.width / 2,
                        y: b(i.height) - i.height / 2,
                        rotation: w(o.orientations, t.index, o.from, o.to)
                    }
                },
                center: function(t, e) {
                    let i = e.rotation;
                    return {
                        x: 0,
                        y: 0,
                        rotation: w(i.orientations, t.index, i.from, i.to)
                    }
                }
            },
            pointArrayMap: ["weight"],
            spirals: {
                archimedean: m,
                rectangular: j,
                square: P
            },
            utils: {
                extendPlayingField: g,
                getRotation: w,
                isPolygonsColliding: A,
                rotate2DToOrigin: C,
                rotate2DToPoint: F
            }
        }), i.registerSeriesType("wordcloud", T), T
    }), i(e, "masters/modules/wordcloud.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
}); //# sourceMappingURL=wordcloud.js.map