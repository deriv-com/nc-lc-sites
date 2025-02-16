!
/**
 * Highcharts JS v11.4.8 (2024-08-29)
 *
 * Highcharts funnel module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(e) {
    "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/funnel", ["highcharts"], function(t) {
        return e(t), e.Highcharts = t, e
    }) : e("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(e) {
    "use strict";
    var t = e ? e._modules : {};

    function i(t, i, s, n) {
        t.hasOwnProperty(i) || (t[i] = n.apply(null, s), "function" == typeof CustomEvent && e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: i,
                module: t[i]
            }
        })))
    }
    i(t, "Series/Funnel/FunnelSeriesDefaults.js", [], function() {
        return {
            animation: !1,
            borderRadius: 0,
            center: ["50%", "50%"],
            width: "90%",
            neckWidth: "30%",
            height: "100%",
            neckHeight: "25%",
            reversed: !1,
            size: !0,
            dataLabels: {
                connectorWidth: 1,
                verticalAlign: "middle"
            },
            states: {
                select: {
                    color: "#cccccc",
                    borderColor: "#000000"
                }
            }
        }
    }), i(t, "Series/Funnel/FunnelSeries.js", [t["Series/Funnel/FunnelSeriesDefaults.js"], t["Core/Globals.js"], t["Extensions/BorderRadius.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t, i, s, n) {
        let {
            composed: a,
            noop: d
        } = t, {
            column: o,
            pie: l
        } = s.seriesTypes, {
            addEvent: r,
            correctFloat: h,
            extend: u,
            fireEvent: c,
            isArray: p,
            merge: y,
            pick: f,
            pushUnique: g,
            relativeLength: x,
            splat: b
        } = n, m = s.series.prototype.alignDataLabel;

        function L(e, t) {
            return /%$/.test(e) ? t * parseInt(e, 10) / 100 : parseInt(e, 10)
        }
        class S extends l {
            alignDataLabel(e, t, i, s, n) {
                let a = e.series,
                    d = a.options.reversed,
                    o = e.dlBox || e.shapeArgs,
                    {
                        align: l,
                        padding: r = 0,
                        verticalAlign: h
                    } = i,
                    u = ((a.options || {}).dataLabels || {}).inside,
                    c = a.center[1],
                    p = e.plotY || 0,
                    y = t.height ?? t.getBBox().height,
                    f = a.getWidthAt((d ? 2 * c - p : p) - o.height / 2 + y),
                    g = "middle" === h ? (o.topWidth - o.bottomWidth) / 4 : (f - o.bottomWidth) / 2,
                    x = o.y,
                    b = o.x;
                "middle" === h ? x = o.y - o.height / 2 + y / 2 : "top" === h && (x = o.y - o.height + y + r), ("top" === h && !d || "bottom" === h && d || "middle" === h) && ("right" === l ? b = o.x - r + g : "left" === l && (b = o.x + r - g)), s = {
                    x: b,
                    y: d ? x - o.height : x,
                    width: o.bottomWidth,
                    height: o.height
                }, i.verticalAlign = "bottom", u && (i.distance = void 0), u && e.visible && m.call(a, e, t, i, s, n), u && (!e.visible && e.dataLabel && (e.dataLabel.placed = !1), e.contrastColor && t.css({
                    color: e.contrastColor
                }))
            }
            drawDataLabels() {
                (b(this.options.dataLabels)[0].inside ? o : l).prototype.drawDataLabels.call(this)
            }
            getDataLabelPosition(e, t) {
                let i = e.plotY || 0,
                    s = e.half ? 1 : -1,
                    n = this.getX(i, !!e.half, e);
                return {
                    distance: t,
                    natural: {
                        x: 0,
                        y: i
                    },
                    computed: {},
                    alignment: e.half ? "right" : "left",
                    connectorPosition: {
                        breakAt: {
                            x: n + (t - 5) * s,
                            y: i
                        },
                        touchingSliceAt: {
                            x: n + t * s,
                            y: i
                        }
                    }
                }
            }
            translate() {
                let e = this,
                    t = e.chart,
                    s = e.options,
                    n = s.reversed,
                    a = s.ignoreHiddenPoint,
                    o = i.optionsToObject(s.borderRadius),
                    l = t.plotWidth,
                    r = t.plotHeight,
                    u = s.center,
                    p = L(u[0], l),
                    y = L(u[1], r),
                    g = L(s.width, l),
                    b = L(s.height, r),
                    m = L(s.neckWidth, l),
                    S = L(s.neckHeight, r),
                    C = y - b / 2 + b - S,
                    M = e.points,
                    j = x(o.radius, g),
                    v = o.scope,
                    P = "left" === s.dataLabels.position ? 1 : 0,
                    W = e => {
                        let t = Math.tan(e / 2),
                            i = Math.cos(w),
                            s = Math.sin(w),
                            a = j,
                            d = a / t,
                            o = Math.tan((Math.PI - e) / 3.2104);
                        return d > I && (a = (d = I) * t), {
                            dx: [d * i, (d - (o *= a)) * i, d - o, d],
                            dy: [d * s, (d - o) * s, d - o, d].map(e => n ? -e : e)
                        }
                    },
                    A = 0,
                    D = 0,
                    F, k, H, w, I, O, B, T, Y, R, E, X;
                for (let t of (e.getWidthAt = function(e) {
                        let t = y - b / 2;
                        return e > C || b === S ? m : m + (g - m) * (1 - (e - t) / (b - S))
                    }, e.getX = function(t, i, s) {
                        return p + (i ? -1 : 1) * (e.getWidthAt(n ? 2 * y - t : t) / 2 + (s.dataLabel?.dataLabelPosition?.distance ?? x(this.options.dataLabels?.distance || 0, g)))
                    }, e.center = [p, y, b], e.centerX = p, M)) t.y && t.isValid() && (!a || !1 !== t.visible) && (A += t.y);
                for (let t of M) {
                    if (X = null, H = A ? t.y / A : 0, R = (B = y - b / 2 + D * b) + H * b, T = (O = p - (F = e.getWidthAt(B)) / 2) + F, E = (Y = p - (F = e.getWidthAt(R)) / 2) + F, h(B) >= C ? (O = Y = p - m / 2, T = E = p + m / 2) : R > C && (X = R, E = (Y = p - (F = e.getWidthAt(C)) / 2) + F, R = C), n && (B = 2 * y - B, R = 2 * y - R, null !== X && (X = 2 * y - X)), j && ("point" === v || 0 === t.index || t.index === M.length - 1 || null !== X)) {
                        let e = Math.abs(R - B),
                            i = T - E,
                            s = E - Y,
                            n = Math.sqrt(i * i + e * e);
                        w = Math.atan(0 !== i ? e / i : 1 / 0), I = n / 2, null !== X && (I = Math.min(I, Math.abs(X - R) / 2)), s >= 1 && (I = Math.min(I, s / 2));
                        let a = W(w);
                        if (k = "stack" === v && 0 !== t.index ? [
                                ["M", O, B],
                                ["L", T, B]
                            ] : [
                                ["M", O + a.dx[0], B + a.dy[0]],
                                ["C", O + a.dx[1], B + a.dy[1], O + a.dx[2], B, O + a.dx[3], B],
                                ["L", T - a.dx[3], B],
                                ["C", T - a.dx[2], B, T - a.dx[1], B + a.dy[1], T - a.dx[0], B + a.dy[0]]
                            ], null !== X) {
                            let e = W(Math.PI / 2);
                            a = W(Math.PI / 2 + w), k.push(["L", E + a.dx[0], R - a.dy[0]], ["C", E + a.dx[1], R - a.dy[1], E, R + a.dy[2], E, R + a.dy[3]]), "stack" === v && t.index !== M.length - 1 ? k.push(["L", E, X], ["L", Y, X]) : k.push(["L", E, X - e.dy[3]], ["C", E, X - e.dy[2], E - e.dx[2], X, E - e.dx[3], X], ["L", Y + e.dx[3], X], ["C", Y + e.dx[2], X, Y, X - e.dy[2], Y, X - e.dy[3]]), k.push(["L", Y, R + a.dy[3]], ["C", Y, R + a.dy[2], Y - a.dx[1], R - a.dy[1], Y - a.dx[0], R - a.dy[0]])
                        } else s >= 1 ? (a = W(Math.PI - w), "stack" === v && 0 === t.index ? k.push(["L", E, R], ["L", Y, R]) : k.push(["L", E + a.dx[0], R - a.dy[0]], ["C", E + a.dx[1], R - a.dy[1], E - a.dx[2], R, E - a.dx[3], R], ["L", Y + a.dx[3], R], ["C", Y + a.dx[2], R, Y - a.dx[1], R - a.dy[1], Y - a.dx[0], R - a.dy[0]])) : (a = W(Math.PI - 2 * w), k.push(["L", Y + a.dx[0], R - a.dy[0]], ["C", Y + a.dx[1], R - a.dy[1], Y - a.dx[1], R - a.dy[1], Y - a.dx[0], R - a.dy[0]]))
                    } else k = [
                        ["M", O, B],
                        ["L", T, B],
                        ["L", E, R]
                    ], null !== X && k.push(["L", E, X], ["L", Y, X]), k.push(["L", Y, R]);
                    k.push(["Z"]), t.shapeType = "path", t.shapeArgs = {
                        d: k
                    }, t.percentage = 100 * H, t.plotX = p, t.plotY = (B + (X || R)) / 2, t.tooltipPos = [p, t.plotY], t.dlBox = {
                        x: Y,
                        y: B,
                        topWidth: T - O,
                        bottomWidth: E - Y,
                        height: Math.abs(f(X, R) - B),
                        width: NaN
                    }, t.slice = d, t.half = P, t.isValid() && (!a || !1 !== t.visible) && (D += H)
                }
                c(e, "afterTranslate")
            }
            sortByAngle(e) {
                e.sort((e, t) => e.plotY - t.plotY)
            }
        }
        return S.defaultOptions = y(l.defaultOptions, e), u(S.prototype, {
                animate: d
            }),
            function(e) {
                function t() {
                    for (let e of this.series) {
                        let t = e.options && e.options.dataLabels;
                        p(t) && (t = t[0]), e.is("pie") && e.placeDataLabels && t && !t.inside && e.placeDataLabels()
                    }
                }
                e.compose = function(e) {
                    g(a, "FunnelSeries") && r(e, "afterHideAllOverlappingLabels", t)
                }
            }(S || (S = {})), s.registerSeriesType("funnel", S), S
    }), i(t, "Series/Pyramid/PyramidSeriesDefaults.js", [], function() {
        return {
            neckHeight: "0%",
            neckWidth: "0%",
            reversed: !0
        }
    }), i(t, "Series/Pyramid/PyramidSeries.js", [t["Series/Funnel/FunnelSeries.js"], t["Series/Pyramid/PyramidSeriesDefaults.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t, i, s) {
        let {
            merge: n
        } = s;
        class a extends e {}
        return a.defaultOptions = n(e.defaultOptions, t), i.registerSeriesType("pyramid", a), a
    }), i(t, "masters/modules/funnel.src.js", [t["Core/Globals.js"], t["Series/Funnel/FunnelSeries.js"]], function(e, t) {
        return t.compose(e.Chart), e
    })
});