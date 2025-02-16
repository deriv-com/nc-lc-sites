!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * (c) 2017-2024 Highsoft AS
 * Authors: Jon Arild Nygard
 *
 * License: www.highcharts.com/license
 */
function(e) {
    "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/venn", ["highcharts"], function(t) {
        return e(t), e.Highcharts = t, e
    }) : e("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(e) {
    "use strict";
    var t = e ? e._modules : {};

    function r(e, t, r, n) {
        e.hasOwnProperty(t) || (e[t] = n.apply(null, r), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: t,
                module: e[t]
            }
        })))
    }
    r(t, "Core/Geometry/GeometryUtilities.js", [], function() {
        var e, t;
        return (t = e || (e = {})).getCenterOfPoints = function(e) {
            let t = e.reduce((e, t) => (e.x += t.x, e.y += t.y, e), {
                x: 0,
                y: 0
            });
            return {
                x: t.x / e.length,
                y: t.y / e.length
            }
        }, t.getDistanceBetweenPoints = function(e, t) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
        }, t.getAngleBetweenPoints = function(e, t) {
            return Math.atan2(t.x - e.x, t.y - e.y)
        }, e
    }), r(t, "Core/Geometry/CircleUtilities.js", [t["Core/Geometry/GeometryUtilities.js"]], function(e) {
        var t;
        let {
            getAngleBetweenPoints: r,
            getCenterOfPoints: n,
            getDistanceBetweenPoints: i
        } = e;
        return function(e) {
            function t(e, t) {
                let r = Math.pow(10, t);
                return Math.round(e * r) / r
            }

            function s(e) {
                if (e <= 0) throw Error("radius of circle must be a positive number.");
                return Math.PI * e * e
            }

            function o(e, t) {
                return e * e * Math.acos(1 - t / e) - (e - t) * Math.sqrt(t * (2 * e - t))
            }

            function l(e, r) {
                let n = i(e, r),
                    s = e.r,
                    o = r.r,
                    l = [];
                if (n < s + o && n > Math.abs(s - o)) {
                    let i = s * s,
                        a = (i - o * o + n * n) / (2 * n),
                        u = Math.sqrt(i - a * a),
                        c = e.x,
                        f = r.x,
                        h = e.y,
                        p = r.y,
                        d = c + a * (f - c) / n,
                        y = h + a * (p - h) / n,
                        g = -(u / n * (p - h)),
                        x = -(u / n * (f - c));
                    l = [{
                        x: t(d + g, 14),
                        y: t(y - x, 14)
                    }, {
                        x: t(d - g, 14),
                        y: t(y + x, 14)
                    }]
                }
                return l
            }

            function a(e) {
                return e.reduce((e, t, r, n) => {
                    let i = n.slice(r + 1).reduce((e, n, i) => {
                        let s = [r, i + r + 1];
                        return e.concat(l(t, n).map(e => (e.indexes = s, e)))
                    }, []);
                    return e.concat(i)
                }, [])
            }

            function u(e, t) {
                return i(e, t) <= t.r + 1e-10
            }

            function c(e, t) {
                return !t.some(function(t) {
                    return !u(e, t)
                })
            }

            function f(e) {
                return a(e).filter(function(t) {
                    return c(t, e)
                })
            }
            e.round = t, e.getAreaOfCircle = s, e.getCircularSegmentArea = o, e.getOverlapBetweenCircles = function(e, r, n) {
                let i = 0;
                if (n < e + r) {
                    if (n <= Math.abs(r - e)) i = s(e < r ? e : r);
                    else {
                        let t = (e * e - r * r + n * n) / (2 * n);
                        i = o(e, e - t) + o(r, r - (n - t))
                    }
                    i = t(i, 14)
                }
                return i
            }, e.getCircleCircleIntersection = l, e.getCirclesIntersectionPoints = a, e.isCircle1CompletelyOverlappingCircle2 = function(e, t) {
                return i(e, t) + t.r < e.r + 1e-10
            }, e.isPointInsideCircle = u, e.isPointInsideAllCircles = c, e.isPointOutsideAllCircles = function(e, t) {
                return !t.some(function(t) {
                    return u(e, t)
                })
            }, e.getCirclesIntersectionPolygon = f, e.getAreaOfIntersectionBetweenCircles = function(e) {
                let t = f(e),
                    s;
                if (t.length > 1) {
                    let o = n(t),
                        l = (t = t.map(function(e) {
                            return e.angle = r(o, e), e
                        }).sort(function(e, t) {
                            return t.angle - e.angle
                        }))[t.length - 1],
                        a = t.reduce(function(t, s) {
                            let {
                                startPoint: o
                            } = t, l = n([o, s]), a = s.indexes.filter(function(e) {
                                return o.indexes.indexOf(e) > -1
                            }).reduce(function(t, n) {
                                let a = e[n],
                                    u = r(a, s),
                                    c = r(a, o),
                                    f = c - (c - u + (c < u ? 2 * Math.PI : 0)) / 2,
                                    h = i(l, {
                                        x: a.x + a.r * Math.sin(f),
                                        y: a.y + a.r * Math.cos(f)
                                    }),
                                    {
                                        r: p
                                    } = a;
                                return h > 2 * p && (h = 2 * p), (!t || t.width > h) && (t = {
                                    r: p,
                                    largeArc: h > p ? 1 : 0,
                                    width: h,
                                    x: s.x,
                                    y: s.y
                                }), t
                            }, null);
                            if (a) {
                                let {
                                    r: e
                                } = a;
                                t.arcs.push(["A", e, e, 0, a.largeArc, 1, a.x, a.y]), t.startPoint = s
                            }
                            return t
                        }, {
                            startPoint: l,
                            arcs: []
                        }).arcs;
                    0 === a.length || 1 === a.length || (a.unshift(["M", l.x, l.y]), s = {
                        center: o,
                        d: a
                    })
                }
                return s
            }
        }(t || (t = {})), t
    }), r(t, "Series/DrawPointUtilities.js", [], function() {
        return {
            draw: function(e, t) {
                let {
                    animatableAttribs: r,
                    onComplete: n,
                    css: i,
                    renderer: s
                } = t, o = e.series && e.series.chart.hasRendered ? void 0 : e.series && e.series.options.animation, l = e.graphic;
                if (t.attribs = {
                        ...t.attribs,
                        class: e.getClassName()
                    }, e.shouldDraw()) l || (l = "text" === t.shapeType ? s.text() : "image" === t.shapeType ? s.image(t.imageUrl || "").attr(t.shapeArgs || {}) : s[t.shapeType](t.shapeArgs || {}), e.graphic = l, l.add(t.group)), i && l.css(i), l.attr(t.attribs).animate(r, !t.isNew && o, n);
                else if (l) {
                    let t = () => {
                        e.graphic = l = l && l.destroy(), "function" == typeof n && n()
                    };
                    Object.keys(r).length ? l.animate(r, void 0, () => t()) : t()
                }
            }
        }
    }), r(t, "Series/Venn/VennPoint.js", [t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t) {
        let {
            scatter: {
                prototype: {
                    pointClass: r
                }
            }
        } = e.seriesTypes, {
            isNumber: n
        } = t;
        return class extends r {
            isValid() {
                return n(this.value)
            }
            shouldDraw() {
                return !!this.shapeArgs
            }
        }
    }), r(t, "Series/Venn/VennSeriesDefaults.js", [], function() {
        return {
            borderColor: "#cccccc",
            borderDashStyle: "solid",
            borderWidth: 1,
            brighten: 0,
            clip: !1,
            colorByPoint: !0,
            dataLabels: {
                enabled: !0,
                verticalAlign: "middle",
                formatter: function() {
                    return this.point.name
                }
            },
            inactiveOtherPoints: !0,
            marker: !1,
            opacity: .75,
            showInLegend: !1,
            legendType: "point",
            states: {
                hover: {
                    opacity: 1,
                    borderColor: "#333333"
                },
                select: {
                    color: "#cccccc",
                    borderColor: "#000000",
                    animation: !1
                },
                inactive: {
                    opacity: .075
                }
            },
            tooltip: {
                pointFormat: "{point.name}: {point.value}"
            },
            legendSymbol: "rectangle"
        }
    }), r(t, "Series/Venn/VennUtils.js", [t["Core/Geometry/CircleUtilities.js"], t["Core/Geometry/GeometryUtilities.js"], t["Core/Utilities.js"]], function(e, t, r) {
        let {
            getAreaOfCircle: n,
            getCircleCircleIntersection: i,
            getOverlapBetweenCircles: s,
            isPointInsideAllCircles: o,
            isPointInsideCircle: l,
            isPointOutsideAllCircles: a
        } = e, {
            getDistanceBetweenPoints: u
        } = t, {
            extend: c,
            isArray: f,
            isNumber: h,
            isObject: p,
            isString: d
        } = r;

        function y(e) {
            let t = {};
            return e.filter(e => 2 === e.sets.length).forEach(e => {
                e.sets.forEach((r, n, i) => {
                    p(t[r]) || (t[r] = {
                        totalOverlap: 0,
                        overlapping: {}
                    }), t[r] = {
                        totalOverlap: (t[r].totalOverlap || 0) + e.value,
                        overlapping: {
                            ...t[r].overlapping || {},
                            [i[1 - n]]: e.value
                        }
                    }
                })
            }), e.filter(b).forEach(e => {
                let r = t[e.sets[0]];
                c(e, r)
            }), e
        }

        function g(e, t, r, n, i) {
            let s = e(t),
                o = e(r),
                l = i || 100,
                a = n || 1e-10,
                u = r - t,
                c = 1,
                f, h;
            if (t >= r) throw Error("a must be smaller than b.");
            if (s * o > 0) throw Error("f(a) and f(b) must have opposite signs.");
            if (0 === s) f = t;
            else if (0 === o) f = r;
            else
                for (; c++ <= l && 0 !== h && u > a;) u = (r - t) / 2, s * (h = e(f = t + u)) > 0 ? t = f : r = f;
            return f
        }

        function x(e) {
            let t = e.slice(0, -1),
                r = t.length,
                n = [],
                i = (e, t) => (e.sum += t[e.i], e);
            for (let e = 0; e < r; e++) n[e] = t.reduce(i, {
                sum: 0,
                i: e
            }).sum / r;
            return n
        }

        function m(e, t, r) {
            let i = e + t;
            return r <= 0 ? i : n(e < t ? e : t) <= r ? 0 : g(n => r - s(e, t, n), 0, i)
        }

        function b(e) {
            return f(e.sets) && 1 === e.sets.length
        }

        function v(e) {
            let t = {};
            return p(e) && h(e.value) && e.value > -1 && f(e.sets) && e.sets.length > 0 && !e.sets.some(function(e) {
                let r = !1;
                return !t[e] && d(e) ? t[e] = !0 : r = !0, r
            })
        }

        function C(e, t) {
            return t.reduce(function(t, r) {
                let n = 0;
                if (r.sets.length > 1) {
                    let t = r.value - function(e) {
                        let t = 0;
                        if (2 === e.length) {
                            let r = e[0],
                                n = e[1];
                            t = s(r.r, n.r, u(r, n))
                        }
                        return t
                    }(r.sets.map(function(t) {
                        return e[t]
                    }));
                    n = Math.round(t * t * 1e11) / 1e11
                }
                return t + n
            }, 0)
        }

        function M(e, t) {
            return void 0 !== t.totalOverlap && void 0 !== e.totalOverlap ? t.totalOverlap - e.totalOverlap : NaN
        }
        return {
            geometry: t,
            geometryCircles: e,
            addOverlapToSets: y,
            getCentroid: x,
            getDistanceBetweenCirclesByOverlap: m,
            getLabelWidth: function(e, t, r) {
                let n = t.reduce((e, t) => Math.min(t.r, e), 1 / 0),
                    i = r.filter(t => !l(e, t)),
                    s = function(r, n) {
                        return g(s => {
                            let l = {
                                x: e.x + n * s,
                                y: e.y
                            };
                            return -(r - s) + (o(l, t) && a(l, i) ? 0 : Number.MAX_VALUE)
                        }, 0, r)
                    };
                return 2 * Math.min(s(n, -1), s(n, 1))
            },
            getMarginFromCircles: function(e, t, r) {
                let n = t.reduce((t, r) => {
                    let n = r.r - u(e, r);
                    return n <= t ? n : t
                }, Number.MAX_VALUE);
                return r.reduce((t, r) => {
                    let n = u(e, r) - r.r;
                    return n <= t ? n : t
                }, n)
            },
            isSet: b,
            layoutGreedyVenn: function(e) {
                let t = [],
                    r = {};
                e.filter(e => 1 === e.sets.length).forEach(e => {
                    r[e.sets[0]] = e.circle = {
                        x: Number.MAX_VALUE,
                        y: Number.MAX_VALUE,
                        r: Math.sqrt(e.value / Math.PI)
                    }
                });
                let n = (e, r) => {
                    let n = e.circle;
                    n && (n.x = r.x, n.y = r.y), t.push(e)
                };
                y(e);
                let s = e.filter(b).sort(M);
                n(s.shift(), {
                    x: 0,
                    y: 0
                });
                let o = e.filter(e => 2 === e.sets.length);
                for (let e of s) {
                    let s = e.circle;
                    if (!s) continue;
                    let l = s.r,
                        a = e.overlapping;
                    n(e, t.reduce((e, n, u) => {
                        let c = n.circle;
                        if (!c || !a) return e;
                        let f = a[n.sets[0]],
                            h = m(l, c.r, f),
                            p = [{
                                x: c.x + h,
                                y: c.y
                            }, {
                                x: c.x - h,
                                y: c.y
                            }, {
                                x: c.x,
                                y: c.y + h
                            }, {
                                x: c.x,
                                y: c.y - h
                            }];
                        for (let e of t.slice(u + 1)) {
                            let t = e.circle,
                                r = a[e.sets[0]];
                            if (!t) continue;
                            let n = m(l, t.r, r);
                            p = p.concat(i({
                                x: c.x,
                                y: c.y,
                                r: h
                            }, {
                                x: t.x,
                                y: t.y,
                                r: n
                            }))
                        }
                        for (let t of p) {
                            s.x = t.x, s.y = t.y;
                            let n = C(r, o);
                            n < e.loss && (e.loss = n, e.coordinates = t)
                        }
                        return e
                    }, {
                        loss: Number.MAX_VALUE,
                        coordinates: void 0
                    }).coordinates)
                }
                return r
            },
            loss: C,
            nelderMead: function(e, t) {
                let r = function(e, t) {
                        return e.fx - t.fx
                    },
                    n = (e, t, r, n) => t.map((t, i) => e * t + r * n[i]),
                    i = (t, r) => (r.fx = e(r), t[t.length - 1] = r, t),
                    s = t => {
                        let r = t[0];
                        return t.map(t => {
                            let i = n(.5, r, .5, t);
                            return i.fx = e(i), i
                        })
                    },
                    o = (t, r, i, s) => {
                        let o = n(i, t, s, r);
                        return o.fx = e(o), o
                    },
                    l = (t => {
                        let r = t.length,
                            n = Array(r + 1);
                        n[0] = t, n[0].fx = e(t);
                        for (let i = 0; i < r; ++i) {
                            let r = t.slice();
                            r[i] = r[i] ? 1.05 * r[i] : .001, r.fx = e(r), n[i + 1] = r
                        }
                        return n
                    })(t);
                for (let e = 0; e < 100; e++) {
                    l.sort(r);
                    let e = l[l.length - 1],
                        t = x(l),
                        n = o(t, e, 2, -1);
                    if (n.fx < l[0].fx) {
                        let r = o(t, e, 3, -2);
                        l = i(l, r.fx < n.fx ? r : n)
                    } else if (n.fx >= l[l.length - 2].fx) {
                        let r;
                        l = n.fx > e.fx ? (r = o(t, e, .5, .5)).fx < e.fx ? i(l, r) : s(l) : (r = o(t, e, 1.5, -.5)).fx < n.fx ? i(l, r) : s(l)
                    } else l = i(l, n)
                }
                return l[0]
            },
            processVennData: function(e, t) {
                let r = f(e) ? e : [],
                    n = r.reduce(function(e, t) {
                        var r;
                        return t.sets && v(r = t) && b(r) && r.value > 0 && -1 === e.indexOf(t.sets[0]) && e.push(t.sets[0]), e
                    }, []).sort(),
                    i = r.reduce(function(e, r) {
                        return r.sets && v(r) && !r.sets.some(function(e) {
                            return -1 === n.indexOf(e)
                        }) && (e[r.sets.sort().join(t)] = {
                            sets: r.sets,
                            value: r.value || 0
                        }), e
                    }, {});
                return n.reduce(function(e, r, n, i) {
                    return i.slice(n + 1).forEach(function(n) {
                        e.push(r + t + n)
                    }), e
                }, []).forEach(function(e) {
                    if (!i[e]) {
                        let r = {
                            sets: e.split(t),
                            value: 0
                        };
                        i[e] = r
                    }
                }), Object.keys(i).map(function(e) {
                    return i[e]
                })
            },
            sortByTotalOverlap: M
        }
    }), r(t, "Series/Venn/VennSeries.js", [t["Core/Animation/AnimationUtilities.js"], t["Core/Color/Color.js"], t["Core/Geometry/CircleUtilities.js"], t["Series/DrawPointUtilities.js"], t["Core/Geometry/GeometryUtilities.js"], t["Core/Series/SeriesRegistry.js"], t["Series/Venn/VennPoint.js"], t["Series/Venn/VennSeriesDefaults.js"], t["Series/Venn/VennUtils.js"], t["Core/Utilities.js"]], function(e, t, r, n, i, s, o, l, a, u) {
        let {
            animObject: c
        } = e, {
            parse: f
        } = t, {
            getAreaOfIntersectionBetweenCircles: h,
            getCirclesIntersectionPolygon: p,
            isCircle1CompletelyOverlappingCircle2: d,
            isPointInsideAllCircles: y,
            isPointOutsideAllCircles: g
        } = r, {
            getCenterOfPoints: x
        } = i, {
            scatter: m
        } = s.seriesTypes, {
            addEvent: b,
            extend: v,
            isArray: C,
            isNumber: M,
            isObject: A,
            merge: j
        } = u;
        class w extends m {
            static getLabelPosition(e, t) {
                let r = e.reduce((r, n) => {
                        let i = n.r / 2;
                        return [{
                            x: n.x,
                            y: n.y
                        }, {
                            x: n.x + i,
                            y: n.y
                        }, {
                            x: n.x - i,
                            y: n.y
                        }, {
                            x: n.x,
                            y: n.y + i
                        }, {
                            x: n.x,
                            y: n.y - i
                        }].reduce((r, n) => {
                            let i = a.getMarginFromCircles(n, e, t);
                            return r.margin < i && (r.point = n, r.margin = i), r
                        }, r)
                    }, {
                        point: void 0,
                        margin: -Number.MAX_VALUE
                    }).point,
                    n = a.nelderMead(r => -a.getMarginFromCircles({
                        x: r[0],
                        y: r[1]
                    }, e, t), [r.x, r.y]);
                return y(r = {
                    x: n[0],
                    y: n[1]
                }, e) && g(r, t) || (r = e.length > 1 ? x(p(e)) : {
                    x: e[0].x,
                    y: e[0].y
                }), r
            }
            static getLabelValues(e, t) {
                let r = e.sets,
                    n = t.reduce((e, t) => {
                        let n = r.indexOf(t.sets[0]) > -1;
                        return t.circle && e[n ? "internal" : "external"].push(t.circle), e
                    }, {
                        internal: [],
                        external: []
                    });
                n.external = n.external.filter(e => n.internal.some(t => !d(e, t)));
                let i = w.getLabelPosition(n.internal, n.external),
                    s = a.getLabelWidth(i, n.internal, n.external);
                return {
                    position: i,
                    width: s
                }
            }
            static layout(e) {
                let t = {},
                    r = {};
                if (e.length > 0) {
                    let n = a.layoutGreedyVenn(e),
                        i = e.filter(a.isSet);
                    for (let s of e) {
                        let e = s.sets,
                            o = e.join(),
                            l = a.isSet(s) ? n[o] : h(e.map(e => n[e]));
                        l && (t[o] = l, r[o] = w.getLabelValues(s, i))
                    }
                }
                return {
                    mapOfIdToShape: t,
                    mapOfIdToLabelValues: r
                }
            }
            static getScale(e, t, r) {
                let n = r.bottom - r.top,
                    i = r.right - r.left,
                    s = (r.right + r.left) / 2,
                    o = (r.top + r.bottom) / 2,
                    l = Math.min(i > 0 ? 1 / i * e : 1, n > 0 ? 1 / n * t : 1);
                return {
                    scale: l,
                    centerX: e / 2 - s * l,
                    centerY: t / 2 - o * l
                }
            }
            static updateFieldBoundaries(e, t) {
                let r = t.x - t.r,
                    n = t.x + t.r,
                    i = t.y + t.r,
                    s = t.y - t.r;
                return (!M(e.left) || e.left > r) && (e.left = r), (!M(e.right) || e.right < n) && (e.right = n), (!M(e.top) || e.top > s) && (e.top = s), (!M(e.bottom) || e.bottom < i) && (e.bottom = i), e
            }
            animate(e) {
                if (!e) {
                    let e = c(this.options.animation);
                    for (let t of this.points) {
                        let r = t.shapeArgs;
                        if (t.graphic && r) {
                            let n = {},
                                i = {};
                            r.d ? n.opacity = .001 : (n.r = 0, i.r = r.r), t.graphic.attr(n).animate(i, e), r.d && setTimeout(() => {
                                t && t.graphic && t.graphic.animate({
                                    opacity: 1
                                })
                            }, e.duration)
                        }
                    }
                }
            }
            drawPoints() {
                let e = this.chart,
                    t = this.group,
                    r = this.points || [],
                    i = e.renderer;
                for (let s of r) {
                    let r = {
                            zIndex: C(s.sets) ? s.sets.length : 0
                        },
                        o = s.shapeArgs;
                    e.styledMode || v(r, this.pointAttribs(s, s.state)), n.draw(s, {
                        isNew: !s.graphic,
                        animatableAttribs: o,
                        attribs: r,
                        group: t,
                        renderer: i,
                        shapeType: o && o.d ? "path" : "circle"
                    })
                }
            }
            init() {
                m.prototype.init.apply(this, arguments), delete this.opacity
            }
            pointAttribs(e, t) {
                let r = this.options || {},
                    n = e && e.options || {},
                    i = t && r.states[t] || {},
                    s = j(r, {
                        color: e && e.color
                    }, n, i);
                return {
                    fill: f(s.color).brighten(s.brightness).get(),
                    opacity: s.opacity,
                    stroke: s.borderColor,
                    "stroke-width": s.borderWidth,
                    dashstyle: s.borderDashStyle
                }
            }
            translate() {
                let e = this.chart;
                this.processedXData = this.xData, this.generatePoints();
                let t = a.processVennData(this.options.data, w.splitter),
                    {
                        mapOfIdToShape: r,
                        mapOfIdToLabelValues: n
                    } = w.layout(t),
                    i = Object.keys(r).filter(e => {
                        let t = r[e];
                        return t && M(t.r)
                    }).reduce((e, t) => w.updateFieldBoundaries(e, r[t]), {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }),
                    s = w.getScale(e.plotWidth, e.plotHeight, i),
                    o = s.scale,
                    l = s.centerX,
                    u = s.centerY;
                for (let e of this.points) {
                    let t = C(e.sets) ? e.sets : [],
                        i = t.join(),
                        s = r[i],
                        a, c = n[i] || {},
                        f = c.width,
                        h = c.position,
                        p = e.options && e.options.dataLabels;
                    if (s) {
                        if (s.r) a = {
                            x: l + s.x * o,
                            y: u + s.y * o,
                            r: s.r * o
                        };
                        else if (s.d) {
                            let e = s.d;
                            e.forEach(e => {
                                "M" === e[0] ? (e[1] = l + e[1] * o, e[2] = u + e[2] * o) : "A" === e[0] && (e[1] = e[1] * o, e[2] = e[2] * o, e[6] = l + e[6] * o, e[7] = u + e[7] * o)
                            }), a = {
                                d: e
                            }
                        }
                        h ? (h.x = l + h.x * o, h.y = u + h.y * o) : h = {}, M(f) && (f = Math.round(f * o))
                    }
                    e.shapeArgs = a, h && a && (e.plotX = h.x, e.plotY = h.y), f && a && (e.dlOptions = j(!0, {
                        style: {
                            width: f
                        }
                    }, A(p, !0) ? p : void 0)), e.name = e.options.name || t.join("∩")
                }
            }
        }
        return w.splitter = "highcharts-split", w.defaultOptions = j(m.defaultOptions, l), v(w.prototype, {
            axisTypes: [],
            directTouch: !0,
            isCartesian: !1,
            pointArrayMap: ["value"],
            pointClass: o,
            utils: a
        }), b(w, "afterSetOptions", function(e) {
            let t = e.options.states || {};
            if (this.is("venn"))
                for (let e of Object.keys(t)) t[e].halo = !1
        }), s.registerSeriesType("venn", w), w
    }), r(t, "masters/modules/venn.src.js", [t["Core/Globals.js"]], function(e) {
        return e
    })
}); //# sourceMappingURL=venn.js.map