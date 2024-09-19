!
/**
 * Highcharts JS v11.4.6 (2024-07-08)
 * Organization chart series type
 *
 * (c) 2019-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/organization", ["highcharts", "highcharts/modules/sankey"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function i(e, i, n, s) {
        e.hasOwnProperty(i) || (e[i] = s.apply(null, n), "function" == typeof CustomEvent && t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: i,
                module: e[i]
            }
        })))
    }
    i(e, "Series/Organization/OrganizationPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            sankey: {
                prototype: {
                    pointClass: i
                }
            }
        } = t.seriesTypes, {
            defined: n,
            find: s,
            pick: o
        } = e;
        return class extends i {
            constructor(t, e, i) {
                super(t, e, i), this.isNode || (this.dataLabelOnNull = !0, this.formatPrefix = "link")
            }
            getSum() {
                return 1
            }
            setNodeColumn() {
                super.setNodeColumn();
                let t = this,
                    e = t.getFromNode().fromNode;
                if (!n(t.options.column) && 0 !== t.linksTo.length && e && "hanging" === e.options.layout) {
                    let i = -1,
                        n;
                    t.options.layout = o(t.options.layout, "hanging"), t.hangsFrom = e, s(e.linksFrom, (e, n) => {
                        let s = e.toNode === t;
                        return s && (i = n), s
                    });
                    for (let s = 0; s < e.linksFrom.length; ++s)(n = e.linksFrom[s]).toNode.id === t.id ? s = e.linksFrom.length : i += function t(e) {
                        let i = e.linksFrom.length;
                        return e.linksFrom.forEach(e => {
                            e.id === e.toNode.linksTo[0].id ? i += t(e.toNode) : i--
                        }), i
                    }(n.toNode);
                    t.column = (t.column || 0) + i
                }
            }
        }
    }), i(e, "Series/Organization/OrganizationSeriesDefaults.js", [], function() {
        return {
            borderColor: "#666666",
            borderRadius: 3,
            link: {
                color: "#666666",
                lineWidth: 1,
                radius: 10,
                type: "default"
            },
            borderWidth: 1,
            dataLabels: {
                nodeFormatter: function() {
                    let t = {
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            "flex-direction": "row",
                            "align-items": "center",
                            "justify-content": "center"
                        },
                        e = {
                            "max-height": "100%",
                            "border-radius": "50%"
                        },
                        i = {
                            width: "100%",
                            padding: 0,
                            "text-align": "center",
                            "white-space": "normal"
                        };

                    function n(t) {
                        return Object.keys(t).reduce(function(e, i) {
                            return e + i + ":" + t[i] + ";"
                        }, 'style="') + '"'
                    }
                    let {
                        description: s,
                        image: o,
                        title: r
                    } = this.point;
                    o && (e["max-width"] = "30%", i.width = "70%"), this.series.chart.renderer.forExport && (t.display = "block", i.position = "absolute", i.left = o ? "30%" : 0, i.top = 0);
                    let a = "<div " + n(t) + ">";
                    return o && (a += '<img src="' + o + '" ' + n(e) + ">"), a += "<div " + n(i) + ">", this.point.name && (a += "<h4 " + n({
                        margin: 0
                    }) + ">" + this.point.name + "</h4>"), r && (a += "<p " + n({
                        margin: 0
                    }) + ">" + (r || "") + "</p>"), s && (a += "<p " + n({
                        opacity: .75,
                        margin: "5px"
                    }) + ">" + s + "</p>"), a += "</div></div>"
                },
                style: {
                    fontWeight: "normal",
                    fontSize: "0.9em"
                },
                useHTML: !0,
                linkTextPath: {
                    attributes: {
                        startOffset: "95%",
                        textAnchor: "end"
                    }
                }
            },
            hangingIndent: 20,
            hangingIndentTranslation: "inherit",
            hangingSide: "left",
            minNodeLength: 10,
            nodeWidth: 50,
            tooltip: {
                nodeFormat: "{point.name}<br>{point.title}<br>{point.description}"
            }
        }
    }), i(e, "Series/PathUtilities.js", [], function() {
        function t(t, e) {
            let i = [];
            for (let n = 0; n < t.length; n++) {
                let s = t[n][1],
                    o = t[n][2];
                if ("number" == typeof s && "number" == typeof o) {
                    if (0 === n) i.push(["M", s, o]);
                    else if (n === t.length - 1) i.push(["L", s, o]);
                    else if (e) {
                        let r = t[n - 1],
                            a = t[n + 1];
                        if (r && a) {
                            let t = r[1],
                                n = r[2],
                                h = a[1],
                                l = a[2];
                            if ("number" == typeof t && "number" == typeof h && "number" == typeof n && "number" == typeof l && t !== h && n !== l) {
                                let r = t < h ? 1 : -1,
                                    a = n < l ? 1 : -1;
                                i.push(["L", s - r * Math.min(Math.abs(s - t), e), o - a * Math.min(Math.abs(o - n), e)], ["C", s, o, s, o, s + r * Math.min(Math.abs(s - h), e), o + a * Math.min(Math.abs(o - l), e)])
                            }
                        }
                    } else i.push(["L", s, o])
                }
            }
            return i
        }
        return {
            applyRadius: t,
            getLinkPath: {
                default: function(e) {
                    let {
                        x1: i,
                        y1: n,
                        x2: s,
                        y2: o,
                        width: r = 0,
                        inverted: a = !1,
                        radius: h,
                        parentVisible: l
                    } = e, d = [
                        ["M", i, n],
                        ["L", i, n],
                        ["C", i, n, i, o, i, o],
                        ["L", i, o],
                        ["C", i, n, i, o, i, o],
                        ["L", i, o]
                    ];
                    return l ? t([
                        ["M", i, n],
                        ["L", i + r * (a ? -.5 : .5), n],
                        ["L", i + r * (a ? -.5 : .5), o],
                        ["L", s, o]
                    ], h) : d
                },
                straight: function(t) {
                    let {
                        x1: e,
                        y1: i,
                        x2: n,
                        y2: s,
                        width: o = 0,
                        inverted: r = !1,
                        parentVisible: a
                    } = t;
                    return a ? [
                        ["M", e, i],
                        ["L", e + o * (r ? -1 : 1), s],
                        ["L", n, s]
                    ] : [
                        ["M", e, i],
                        ["L", e, s],
                        ["L", e, s]
                    ]
                },
                curved: function(t) {
                    let {
                        x1: e,
                        y1: i,
                        x2: n,
                        y2: s,
                        offset: o = 0,
                        width: r = 0,
                        inverted: a = !1,
                        parentVisible: h
                    } = t;
                    return h ? [
                        ["M", e, i],
                        ["C", e + o, i, e - o + r * (a ? -1 : 1), s, e + r * (a ? -1 : 1), s],
                        ["L", n, s]
                    ] : [
                        ["M", e, i],
                        ["C", e, i, e, s, e, s],
                        ["L", n, s]
                    ]
                }
            }
        }
    }), i(e, "Series/Organization/OrganizationSeries.js", [e["Series/Organization/OrganizationPoint.js"], e["Series/Organization/OrganizationSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Series/PathUtilities.js"], e["Core/Utilities.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Extensions/TextPath.js"]], function(t, e, i, n, s, o, r) {
        let {
            sankey: a
        } = i.seriesTypes, {
            css: h,
            crisp: l,
            extend: d,
            isNumber: p,
            merge: g,
            pick: u
        } = s;
        r.compose(o);
        class f extends a {
            alignDataLabel(t, e, i) {
                let n = t.shapeArgs;
                if (i.useHTML && n) {
                    let t = this.options.borderWidth + 2 * this.options.dataLabels.padding,
                        i = n.width || 0,
                        s = n.height || 0;
                    this.chart.inverted && (i = s, s = n.width || 0), s -= t, i -= t;
                    let o = e.text;
                    o && (h(o.element.parentNode, {
                        width: i + "px",
                        height: s + "px"
                    }), h(o.element, {
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    })), e.getBBox = () => ({
                        width: i,
                        height: s,
                        x: 0,
                        y: 0
                    }), e.width = i, e.height = s
                }
                super.alignDataLabel.apply(this, arguments)
            }
            createNode(t) {
                let e = super.createNode.call(this, t);
                return e.getSum = () => 1, e
            }
            pointAttribs(t, e) {
                let i = a.prototype.pointAttribs.call(this, t, e),
                    n = t.isNode ? t.level : t.fromNode.level,
                    s = this.mapOptionsToLevel[n || 0] || {},
                    o = t.options,
                    r = s.states && s.states[e] || {},
                    h = u(r.borderRadius, o.borderRadius, s.borderRadius, this.options.borderRadius),
                    l = u(r.linkColor, o.linkColor, s.linkColor, this.options.linkColor, r.link && r.link.color, o.link && o.link.color, s.link && s.link.color, this.options.link && this.options.link.color),
                    d = u(r.linkLineWidth, o.linkLineWidth, s.linkLineWidth, this.options.linkLineWidth, r.link && r.link.lineWidth, o.link && o.link.lineWidth, s.link && s.link.lineWidth, this.options.link && this.options.link.lineWidth),
                    g = u(r.linkOpacity, o.linkOpacity, s.linkOpacity, this.options.linkOpacity, r.link && r.link.linkOpacity, o.link && o.link.linkOpacity, s.link && s.link.linkOpacity, this.options.link && this.options.link.linkOpacity);
                return t.isNode ? p(h) && (i.r = h) : (i.stroke = l, i["stroke-width"] = d, i.opacity = g, delete i.fill), i
            }
            translateLink(t) {
                let e = this.chart,
                    i = this.options,
                    s = t.fromNode,
                    o = t.toNode,
                    r = u(i.linkLineWidth, i.link.lineWidth, 0),
                    a = u(i.link.offset, .5),
                    h = u(t.options.link && t.options.link.type, i.link.type);
                if (s.shapeArgs && o.shapeArgs) {
                    let d = i.hangingIndent,
                        p = "right" === i.hangingSide,
                        g = o.options.offset,
                        f = /%$/.test(g) && parseInt(g, 10),
                        c = e.inverted,
                        k = l((s.shapeArgs.x || 0) + (s.shapeArgs.width || 0), r),
                        m = l((s.shapeArgs.y || 0) + (s.shapeArgs.height || 0) / 2, r),
                        y = l(o.shapeArgs.x || 0, r),
                        L = l((o.shapeArgs.y || 0) + (o.shapeArgs.height || 0) / 2, r),
                        b;
                    if (c && (k -= s.shapeArgs.width || 0, y += o.shapeArgs.width || 0), b = this.colDistance ? l(y + (c ? 1 : -1) * (this.colDistance - this.nodeWidth) / 2, r) : l((y + k) / 2, r), f && (f >= 50 || f <= -50) && (b = y = l(y + (c ? -.5 : .5) * (o.shapeArgs.width || 0), r), L = o.shapeArgs.y || 0, f > 0 && (L += o.shapeArgs.height || 0)), o.hangsFrom === s && (e.inverted ? (m = p ? l((s.shapeArgs.y || 0) + d / 2, r) : l((s.shapeArgs.y || 0) + (s.shapeArgs.height || 0) - d / 2, r), L = p ? (o.shapeArgs.y || 0) + d / 2 : (o.shapeArgs.y || 0) + (o.shapeArgs.height || 0)) : m = l((s.shapeArgs.y || 0) + d / 2, r), b = y = l((o.shapeArgs.x || 0) + (o.shapeArgs.width || 0) / 2, r)), t.plotX = b, t.plotY = (m + L) / 2, t.shapeType = "path", "straight" === h) t.shapeArgs = {
                        d: [
                            ["M", k, m],
                            ["L", y, L]
                        ]
                    };
                    else if ("curved" === h) {
                        let e = Math.abs(y - k) * a * (c ? -1 : 1);
                        t.shapeArgs = {
                            d: [
                                ["M", k, m],
                                ["C", k + e, m, y - e, L, y, L]
                            ]
                        }
                    } else t.shapeArgs = {
                        d: n.applyRadius([
                            ["M", k, m],
                            ["L", b, m],
                            ["L", b, L],
                            ["L", y, L]
                        ], u(i.linkRadius, i.link.radius))
                    };
                    t.dlBox = {
                        x: (k + y) / 2,
                        y: (m + L) / 2,
                        height: r,
                        width: 0
                    }
                }
            }
            translateNode(t, e) {
                super.translateNode(t, e);
                let i = this.chart,
                    n = this.options,
                    s = Math.max(Math.round(t.getSum() * this.translationFactor), n.minLinkWidth || 0),
                    o = "right" === n.hangingSide,
                    r = n.hangingIndent || 0,
                    a = n.hangingIndentTranslation,
                    h = n.minNodeLength || 10,
                    l = Math.round(this.nodeWidth),
                    d = t.shapeArgs,
                    p = i.inverted ? -1 : 1,
                    u = t.hangsFrom;
                if (u) {
                    if ("cumulative" === a)
                        for (d.height -= r, i.inverted && !o && (d.y -= p * r); u;) d.y += (o ? 1 : p) * r, u = u.hangsFrom;
                    else if ("shrink" === a)
                        for (; u && d.height > r + h;) d.height -= r, (!i.inverted || o) && (d.y += r), u = u.hangsFrom;
                    else d.height -= r, (!i.inverted || o) && (d.y += r)
                }
                t.nodeHeight = i.inverted ? d.width : d.height, t.shapeArgs && !t.hangsFrom && (t.shapeArgs = g(t.shapeArgs, {
                    x: (t.shapeArgs.x || 0) + l / 2 - (t.shapeArgs.width || 0) / 2,
                    y: (t.shapeArgs.y || 0) + s / 2 - (t.shapeArgs.height || 0) / 2
                }))
            }
            drawDataLabels() {
                let t = this.options.dataLabels;
                if (t.linkTextPath && t.linkTextPath.enabled)
                    for (let t of this.points) t.options.dataLabels = g(t.options.dataLabels, {
                        useHTML: !1
                    });
                super.drawDataLabels()
            }
        }
        return f.defaultOptions = g(a.defaultOptions, e), d(f.prototype, {
            pointClass: t
        }), i.registerSeriesType("organization", f), f
    }), i(e, "masters/modules/organization.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
});