!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Highcharts cylinder module
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */
function(e) {
    "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/cylinder", ["highcharts", "highcharts/highcharts-3d"], function(t) {
        return e(t), e.Highcharts = t, e
    }) : e("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(e) {
    "use strict";
    var t = e ? e._modules : {};

    function r(e, t, r, s) {
        e.hasOwnProperty(t) || (e[t] = s.apply(null, r), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: t,
                module: e[t]
            }
        })))
    }
    r(t, "Series/Cylinder/SVGElement3DCylinder.js", [t["Core/Color/Color.js"], t["Core/Renderer/RendererRegistry.js"]], function(e, t) {
        let {
            parse: r
        } = e, {
            Element3D: s
        } = t.getRendererType().prototype;
        return class extends s {
            constructor() {
                super(...arguments), this.parts = ["top", "bottom", "front", "back"], this.pathType = "cylinder"
            }
            fillSetter(e) {
                return this.singleSetterForParts("fill", null, {
                    front: e,
                    back: e,
                    top: r(e).brighten(.1).get(),
                    bottom: r(e).brighten(-.1).get()
                }), this.color = this.fill = e, this
            }
        }
    }), r(t, "Series/Cylinder/CylinderComposition.js", [t["Core/Globals.js"], t["Core/Math3D.js"], t["Series/Cylinder/SVGElement3DCylinder.js"], t["Core/Utilities.js"]], function(e, t, r, s) {
        let {
            charts: i,
            deg2rad: n
        } = e, {
            perspective: o
        } = t, {
            extend: l,
            pick: u
        } = s;

        function d(e) {
            return !e.some(e => "C" === e[0])
        }

        function y(e) {
            return this.element3d("cylinder", e)
        }

        function h(e) {
            let t = i[this.chartIndex],
                r = this.cuboidPath(e),
                s = !r.isTop,
                n = !r.isFront,
                o = this.getCylinderEnd(t, e),
                l = this.getCylinderEnd(t, e, !0);
            return {
                front: this.getCylinderFront(o, l),
                back: this.getCylinderBack(o, l),
                top: o,
                bottom: l,
                zIndexes: {
                    top: s ? 3 : 0,
                    bottom: s ? 0 : 3,
                    front: n ? 2 : 1,
                    back: n ? 1 : 2,
                    group: r.zIndexes.group
                }
            }
        }

        function p(e) {
            let t = [
                    ["M", e[0].x, e[0].y]
                ],
                r = e.length - 2;
            for (let s = 1; s < r; s += 3) t.push(["C", e[s].x, e[s].y, e[s + 1].x, e[s + 1].y, e[s + 2].x, e[s + 2].y]);
            return t
        }

        function c(e, t) {
            let r = [];
            if (d(e)) {
                let t = e[0],
                    s = e[2];
                "M" === t[0] && "L" === s[0] && (r.push(["M", s[1], s[2]]), r.push(e[3]), r.push(["L", t[1], t[2]]))
            } else "C" === e[2][0] && r.push(["M", e[2][5], e[2][6]]), r.push(e[3], e[4]);
            if (d(t)) {
                let e = t[0];
                "M" === e[0] && (r.push(["L", e[1], e[2]]), r.push(t[3]), r.push(t[2]))
            } else {
                let e = t[2],
                    s = t[3],
                    i = t[4];
                "C" === e[0] && "C" === s[0] && "C" === i[0] && (r.push(["L", i[5], i[6]]), r.push(["C", i[3], i[4], i[1], i[2], s[5], s[6]]), r.push(["C", s[3], s[4], s[1], s[2], e[5], e[6]]))
            }
            return r.push(["Z"]), r
        }

        function C(e, t, r) {
            let s, i;
            let {
                width: l = 0,
                height: d = 0,
                alphaCorrection: y = 0
            } = t, h = u(t.depth, l, 0), p = Math.min(l, h) / 2, c = n * (e.options.chart.options3d.beta - 90 + y), C = (t.y || 0) + (r ? d : 0), a = .5519 * p, f = l / 2 + (t.x || 0), g = h / 2 + (t.z || 0), m = [{
                x: 0,
                y: C,
                z: p
            }, {
                x: a,
                y: C,
                z: p
            }, {
                x: p,
                y: C,
                z: a
            }, {
                x: p,
                y: C,
                z: 0
            }, {
                x: p,
                y: C,
                z: -a
            }, {
                x: a,
                y: C,
                z: -p
            }, {
                x: 0,
                y: C,
                z: -p
            }, {
                x: -a,
                y: C,
                z: -p
            }, {
                x: -p,
                y: C,
                z: -a
            }, {
                x: -p,
                y: C,
                z: 0
            }, {
                x: -p,
                y: C,
                z: a
            }, {
                x: -a,
                y: C,
                z: p
            }, {
                x: 0,
                y: C,
                z: p
            }], x = Math.cos(c), j = Math.sin(c);
            for (let e of m) s = e.x, i = e.z, e.x = s * x - i * j + f, e.z = i * x + s * j + g;
            let S = o(m, e, !0);
            return 2.5 > Math.abs(S[3].y - S[9].y) && 2.5 > Math.abs(S[0].y - S[6].y) ? this.toLinePath([S[0], S[3], S[6], S[9]], !0) : this.getCurvedPath(S)
        }

        function a(e, t) {
            let r = e.slice(0, 3);
            if (d(t)) {
                let e = t[0];
                "M" === e[0] && (r.push(t[2]), r.push(t[1]), r.push(["L", e[1], e[2]]))
            } else {
                let e = t[0],
                    s = t[1],
                    i = t[2];
                "M" === e[0] && "C" === s[0] && "C" === i[0] && (r.push(["L", i[5], i[6]]), r.push(["C", i[3], i[4], i[1], i[2], s[5], s[6]]), r.push(["C", s[3], s[4], s[1], s[2], e[1], e[2]]))
            }
            return r.push(["Z"]), r
        }
        return {
            compose: function(e) {
                let t = e.prototype;
                t.cylinder || (t.Element3D.types.cylinder = r, l(t, {
                    cylinder: y,
                    cylinderPath: h,
                    getCurvedPath: p,
                    getCylinderBack: c,
                    getCylinderEnd: C,
                    getCylinderFront: a
                }))
            }
        }
    }), r(t, "Series/Cylinder/CylinderPoint.js", [t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t) {
        let {
            column: {
                prototype: {
                    pointClass: r
                }
            }
        } = e.seriesTypes, {
            extend: s
        } = t;
        class i extends r {}
        return s(i.prototype, {
            shapeType: "cylinder"
        }), i
    }), r(t, "Series/Cylinder/CylinderSeriesDefaults.js", [], function() {
        return {}
    }), r(t, "Series/Cylinder/CylinderSeries.js", [t["Series/Cylinder/CylinderComposition.js"], t["Series/Cylinder/CylinderPoint.js"], t["Series/Cylinder/CylinderSeriesDefaults.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t, r, s, i) {
        let {
            column: n
        } = s.seriesTypes, {
            extend: o,
            merge: l
        } = i;
        class u extends n {}
        return u.compose = e.compose, u.defaultOptions = l(n.defaultOptions, r), o(u.prototype, {
            pointClass: t
        }), s.registerSeriesType("cylinder", u), u
    }), r(t, "masters/modules/cylinder.src.js", [t["Core/Globals.js"], t["Series/Cylinder/CylinderSeries.js"], t["Core/Renderer/RendererRegistry.js"]], function(e, t, r) {
        return t.compose(r.getRendererType()), e
    })
}); //# sourceMappingURL=cylinder.js.map