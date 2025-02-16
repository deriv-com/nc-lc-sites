!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Item series type for Highcharts
 *
 * (c) 2019 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/item-series", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function s(t, e, s, i) {
        t.hasOwnProperty(e) || (t[e] = i.apply(null, s), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: e,
                module: t[e]
            }
        })))
    }
    s(e, "Series/Item/ItemPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            series: {
                prototype: {
                    pointClass: s
                }
            },
            seriesTypes: {
                pie: {
                    prototype: {
                        pointClass: i
                    }
                }
            }
        } = t, {
            extend: o
        } = e;
        class r extends i {}
        return o(r.prototype, {
            haloPath: s.prototype.haloPath
        }), r
    }), s(e, "Series/Item/ItemSeriesDefaults.js", [e["Core/Series/SeriesDefaults.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            merge: s
        } = e;
        return {
            endAngle: void 0,
            innerSize: "40%",
            itemPadding: .1,
            layout: "vertical",
            marker: s(t.marker, {
                radius: null
            }),
            rows: void 0,
            crisp: !1,
            showInLegend: !0,
            startAngle: void 0
        }
    }), s(e, "Series/Item/ItemSeries.js", [e["Series/Item/ItemPoint.js"], e["Series/Item/ItemSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, s, i) {
        let {
            pie: o
        } = s.seriesTypes, {
            defined: r,
            extend: a,
            fireEvent: l,
            isNumber: n,
            merge: h,
            pick: d
        } = i;
        class p extends o {
            animate(t) {
                let e = this.group;
                e && (t ? e.attr({
                    opacity: 0
                }) : e.animate({
                    opacity: 1
                }, this.options.animation))
            }
            drawDataLabels() {
                if (this.center && this.slots) super.drawDataLabels();
                else
                    for (let t of this.points) t.destroyElements({
                        dataLabel: 1
                    })
            }
            drawPoints() {
                let t = this.options,
                    e = this.chart.renderer,
                    s = t.marker,
                    i = this.borderWidth % 2 ? .5 : 1,
                    o = this.getRows(),
                    l = Math.ceil(this.total / o),
                    n = this.chart.plotWidth / l,
                    h = this.chart.plotHeight / o,
                    p = this.itemSize || Math.min(n, h),
                    u = 0;
                for (let c of this.points) {
                    let f, g, m, y, w, S;
                    let M = c.marker || {},
                        v = M.symbol || s.symbol,
                        C = d(M.radius, s.radius),
                        A = r(C) ? 2 * C : p,
                        b = A * t.itemPadding;
                    if (c.graphics = g = c.graphics || [], this.chart.styledMode || (m = this.pointAttribs(c, c.selected && "select")), !c.isNull && c.visible) {
                        c.graphic || (c.graphic = e.g("point").add(this.group));
                        for (let s = 0; s < (c.y || 0); ++s) {
                            if (this.center && this.slots) {
                                let t = this.slots.shift();
                                y = t.x - p / 2, w = t.y - p / 2
                            } else "horizontal" === t.layout ? (y = u % l * n, w = h * Math.floor(u / l)) : (y = n * Math.floor(u / o), w = u % o * h);
                            y += b, w += b, S = Math.round(A - 2 * b), this.options.crisp && (y = Math.round(y) - i, w = Math.round(w) + i), f = {
                                x: y,
                                y: w,
                                width: S,
                                height: S
                            }, void 0 !== C && (f.r = C), m && a(f, m);
                            let r = g[s];
                            r ? r.animate(f) : r = e.symbol(v, void 0, void 0, void 0, void 0, {
                                backgroundSize: "within"
                            }).attr(f).add(c.graphic), r.isActive = !0, g[s] = r, ++u
                        }
                    }
                    for (let t = 0; t < g.length; t++) {
                        let e = g[t];
                        if (!e) return;
                        e.isActive ? e.isActive = !1 : (e.destroy(), g.splice(t, 1), t--)
                    }
                }
            }
            getRows() {
                let t = this.chart,
                    e = this.total || 0,
                    s = this.options.rows,
                    i;
                if (!s) {
                    if (i = t.plotWidth / t.plotHeight, s = Math.sqrt(e), i > 1)
                        for (s = Math.ceil(s); s > 0 && !(e / s / s > i);) s--;
                    else
                        for (s = Math.floor(s); s < e && !(e / s / s < i);) s++
                }
                return s
            }
            getSlots() {
                let t = this.center,
                    e = t[2],
                    s = this.slots = this.slots || [],
                    i = this.endAngleRad - this.startAngleRad,
                    o = this.options.rows,
                    r = i % (2 * Math.PI) == 0,
                    a = this.total || 0,
                    l = t[3],
                    n, h, d, p, u, c, f, g, m = 0,
                    y, w = Number.MAX_VALUE,
                    S, M, v, C = (e - l) / e;
                for (; w > a + (M && r ? M.length : 0);) {
                    S = w, s.length = 0, w = 0, M = v, v = [], y = e / ++m / 2, o ? (l = (y - o) / y * e) >= 0 ? y = o : (l = 0, C = 1) : y = Math.floor(y * C);
                    for (let t = y; t > 0; t--) u = Math.ceil((p = i * (d = (l + t / y * (e - l - m)) / 2)) / m), v.push({
                        rowRadius: d,
                        rowLength: p,
                        colCount: u
                    }), w += u + 1
                }
                if (!M) return;
                let A = S - this.total - (r ? M.length : 0),
                    b = t => {
                        A > 0 && (t.row.colCount--, A--)
                    };
                for (; A > 0;) M.map(t => ({
                    angle: t.colCount / t.rowLength,
                    row: t
                })).sort((t, e) => e.angle - t.angle).slice(0, Math.min(A, Math.ceil(M.length / 2))).forEach(b);
                for (let e of M) {
                    let o = e.rowRadius,
                        r = e.colCount;
                    for (g = 0, c = r ? i / r : 0; g <= r; g += 1) f = this.startAngleRad + g * c, n = t[0] + Math.cos(f) * o, h = t[1] + Math.sin(f) * o, s.push({
                        x: n,
                        y: h,
                        angle: f
                    })
                }
                return s.sort((t, e) => t.angle - e.angle), this.itemSize = m, s
            }
            translate(t) {
                0 === this.total && n(this.options.startAngle) && n(this.options.endAngle) && (this.center = this.getCenter()), this.slots || (this.slots = []), n(this.options.startAngle) && n(this.options.endAngle) ? (super.translate(t), this.slots = this.getSlots()) : (this.generatePoints(), l(this, "afterTranslate"))
            }
        }
        return p.defaultOptions = h(o.defaultOptions, e), a(p.prototype, {
            markerAttribs: void 0,
            pointClass: t
        }), s.registerSeriesType("item", p), p
    }), s(e, "masters/modules/item-series.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
}); //# sourceMappingURL=item-series.js.map