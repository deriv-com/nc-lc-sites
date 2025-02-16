!
/**
 * Highcharts JS v11.4.8 (2024-08-29)
 * Treegraph chart series type
 *
 *  (c) 2010-2024 Pawel Lysy Grzegorz Blachlinski
 *
 * License: www.highcharts.com/license
 */
function(e) {
    "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/treegraph", ["highcharts", "highcharts/modules/treemap"], function(t) {
        return e(t), e.Highcharts = t, e
    }) : e("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(e) {
    "use strict";
    var t = e ? e._modules : {};

    function i(t, i, s, o) {
        t.hasOwnProperty(i) || (t[i] = o.apply(null, s), "function" == typeof CustomEvent && e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: i,
                module: t[i]
            }
        })))
    }
    i(t, "Series/PathUtilities.js", [], function() {
        function e(e, t) {
            let i = [];
            for (let s = 0; s < e.length; s++) {
                let o = e[s][1],
                    r = e[s][2];
                if ("number" == typeof o && "number" == typeof r) {
                    if (0 === s) i.push(["M", o, r]);
                    else if (s === e.length - 1) i.push(["L", o, r]);
                    else if (t) {
                        let l = e[s - 1],
                            n = e[s + 1];
                        if (l && n) {
                            let e = l[1],
                                s = l[2],
                                a = n[1],
                                h = n[2];
                            if ("number" == typeof e && "number" == typeof a && "number" == typeof s && "number" == typeof h && e !== a && s !== h) {
                                let l = e < a ? 1 : -1,
                                    n = s < h ? 1 : -1;
                                i.push(["L", o - l * Math.min(Math.abs(o - e), t), r - n * Math.min(Math.abs(r - s), t)], ["C", o, r, o, r, o + l * Math.min(Math.abs(o - a), t), r + n * Math.min(Math.abs(r - h), t)])
                            }
                        }
                    } else i.push(["L", o, r])
                }
            }
            return i
        }
        return {
            applyRadius: e,
            getLinkPath: {
                default: function(t) {
                    let {
                        x1: i,
                        y1: s,
                        x2: o,
                        y2: r,
                        width: l = 0,
                        inverted: n = !1,
                        radius: a,
                        parentVisible: h
                    } = t, d = [
                        ["M", i, s],
                        ["L", i, s],
                        ["C", i, s, i, r, i, r],
                        ["L", i, r],
                        ["C", i, s, i, r, i, r],
                        ["L", i, r]
                    ];
                    return h ? e([
                        ["M", i, s],
                        ["L", i + l * (n ? -.5 : .5), s],
                        ["L", i + l * (n ? -.5 : .5), r],
                        ["L", o, r]
                    ], a) : d
                },
                straight: function(e) {
                    let {
                        x1: t,
                        y1: i,
                        x2: s,
                        y2: o,
                        width: r = 0,
                        inverted: l = !1,
                        parentVisible: n
                    } = e;
                    return n ? [
                        ["M", t, i],
                        ["L", t + r * (l ? -1 : 1), o],
                        ["L", s, o]
                    ] : [
                        ["M", t, i],
                        ["L", t, o],
                        ["L", t, o]
                    ]
                },
                curved: function(e) {
                    let {
                        x1: t,
                        y1: i,
                        x2: s,
                        y2: o,
                        offset: r = 0,
                        width: l = 0,
                        inverted: n = !1,
                        parentVisible: a
                    } = e;
                    return a ? [
                        ["M", t, i],
                        ["C", t + r, i, t - r + l * (n ? -1 : 1), o, t + l * (n ? -1 : 1), o],
                        ["L", s, o]
                    ] : [
                        ["M", t, i],
                        ["C", t, i, t, o, t, o],
                        ["L", s, o]
                    ]
                }
            }
        }
    }), i(t, "Series/Treegraph/TreegraphNode.js", [t["Core/Series/SeriesRegistry.js"]], function(e) {
        let {
            seriesTypes: {
                treemap: {
                    prototype: {
                        NodeClass: t
                    }
                }
            }
        } = e;
        return class extends t {
            constructor() {
                super(...arguments), this.mod = 0, this.shift = 0, this.change = 0, this.children = [], this.preX = 0, this.hidden = !1, this.wasVisited = !1, this.collapsed = !1
            }
            nextLeft() {
                return this.getLeftMostChild() || this.thread
            }
            nextRight() {
                return this.getRightMostChild() || this.thread
            }
            getAncestor(e, t) {
                return e.ancestor.children[0] === this.children[0] ? e.ancestor : t
            }
            getLeftMostSibling() {
                let e = this.getParent();
                if (e) {
                    for (let t of e.children)
                        if (t && t.point.visible) return t
                }
            }
            hasChildren() {
                let e = this.children;
                for (let t = 0; t < e.length; t++)
                    if (e[t].point.visible) return !0;
                return !1
            }
            getLeftSibling() {
                let e = this.getParent();
                if (e) {
                    let t = e.children;
                    for (let e = this.relativeXPosition - 1; e >= 0; e--)
                        if (t[e] && t[e].point.visible) return t[e]
                }
            }
            getLeftMostChild() {
                let e = this.children;
                for (let t = 0; t < e.length; t++)
                    if (e[t].point.visible) return e[t]
            }
            getRightMostChild() {
                let e = this.children;
                for (let t = e.length - 1; t >= 0; t--)
                    if (e[t].point.visible) return e[t]
            }
            getParent() {
                return this.parentNode
            }
            getFirstChild() {
                let e = this.children;
                for (let t = 0; t < e.length; t++)
                    if (e[t].point.visible) return e[t]
            }
        }
    }), i(t, "Series/Treegraph/TreegraphPoint.js", [t["Core/Series/Point.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t, i) {
        let {
            seriesTypes: {
                treemap: {
                    prototype: {
                        pointClass: s
                    }
                }
            }
        } = t, {
            addEvent: o,
            fireEvent: r,
            merge: l
        } = i;
        class n extends s {
            constructor() {
                super(...arguments), this.dataLabelOnHidden = !0, this.isLink = !1, this.setState = e.prototype.setState
            }
            draw() {
                super.draw.apply(this, arguments);
                let e = this.graphic;
                e && e.animate({
                    visibility: this.visible ? "inherit" : "hidden"
                }), this.renderCollapseButton()
            }
            renderCollapseButton() {
                let e = this.series,
                    t = this.graphic && this.graphic.parentGroup,
                    i = e.mapOptionsToLevel[this.node.level || 0] || {},
                    s = l(e.options.collapseButton, i.collapseButton, this.options.collapseButton),
                    {
                        width: o,
                        height: r,
                        shape: n,
                        style: a
                    } = s,
                    h = this.series.chart,
                    d = this.visible && (this.collapsed || !s.onlyOnHover || "hover" === this.state) ? 1 : 0;
                if (this.shapeArgs) {
                    if (this.collapseButtonOptions = s, this.collapseButton) {
                        if (this.node.children.length && s.enabled) {
                            let {
                                x: e,
                                y: t
                            } = this.getCollapseBtnPosition(s);
                            this.collapseButton.attr({
                                text: this.collapsed ? "+" : "-",
                                rotation: h.inverted ? 90 : 0,
                                rotationOriginX: o / 2,
                                rotationOriginY: r / 2,
                                visibility: this.visible ? "inherit" : "hidden"
                            }).animate({
                                x: e,
                                y: t,
                                opacity: d
                            })
                        } else this.collapseButton.destroy(), delete this.collapseButton
                    } else {
                        if (!this.node.children.length || !s.enabled) return;
                        let {
                            x: e,
                            y: i
                        } = this.getCollapseBtnPosition(s), p = s.fillColor || this.color || "#cccccc";
                        this.collapseButton = h.renderer.label(this.collapsed ? "+" : "-", e, i, n).attr({
                            height: r - 4,
                            width: o - 4,
                            padding: 2,
                            fill: p,
                            rotation: h.inverted ? 90 : 0,
                            rotationOriginX: o / 2,
                            rotationOriginY: r / 2,
                            stroke: s.lineColor || "#ffffff",
                            "stroke-width": s.lineWidth,
                            "text-align": "center",
                            align: "center",
                            zIndex: 1,
                            opacity: d,
                            visibility: this.visible ? "inherit" : "hidden"
                        }).addClass("highcharts-tracker").addClass("highcharts-collapse-button").removeClass("highcharts-no-tooltip").css(l({
                            color: "string" == typeof p ? h.renderer.getContrast(p) : "#333333"
                        }, a)).add(t), this.collapseButton.element.point = this
                    }
                }
            }
            toggleCollapse(e) {
                let t = this.series;
                this.update({
                    collapsed: e ?? !this.collapsed
                }, !1, void 0, !1), r(t, "toggleCollapse"), t.redraw()
            }
            destroy() {
                this.collapseButton && (this.collapseButton.destroy(), delete this.collapseButton, this.collapseButton = void 0), this.linkToParent && (this.linkToParent.destroy(), delete this.linkToParent), super.destroy.apply(this, arguments)
            }
            getCollapseBtnPosition(e) {
                let t = this.series.chart.inverted,
                    i = e.width,
                    s = e.height,
                    {
                        x: o = 0,
                        y: r = 0,
                        width: l = 0,
                        height: n = 0
                    } = this.shapeArgs || {};
                return {
                    x: o + e.x + (t ? -(.3 * s) : l + -.3 * i),
                    y: r + n / 2 - s / 2 + e.y
                }
            }
        }
        return o(n, "mouseOut", function() {
            let e = this.collapseButton,
                t = this.collapseButtonOptions;
            e && t?.onlyOnHover && !this.collapsed && e.animate({
                opacity: 0
            })
        }), o(n, "mouseOver", function() {
            this.collapseButton && this.visible && this.collapseButton.animate({
                opacity: 1
            }, this.series.options.states?.hover?.animation)
        }), o(n, "click", function() {
            this.toggleCollapse()
        }), n
    }), i(t, "Series/Treegraph/TreegraphLink.js", [t["Core/Series/Point.js"], t["Core/Utilities.js"], t["Core/Series/SeriesRegistry.js"]], function(e, t, i) {
        let {
            pick: s,
            extend: o
        } = t, {
            seriesTypes: {
                column: {
                    prototype: {
                        pointClass: r
                    }
                }
            }
        } = i;
        return class extends r {
            constructor(e, t, i, s) {
                super(e, t, i), this.dataLabelOnNull = !0, this.formatPrefix = "link", this.isLink = !0, this.node = {}, this.formatPrefix = "link", this.dataLabelOnNull = !0, s && (this.fromNode = s.node.parentNode.point, this.visible = s.visible, this.toNode = s, this.id = this.toNode.id + "-" + this.fromNode.id)
            }
            update(t, i, r, l) {
                let n = {
                    id: this.id,
                    formatPrefix: this.formatPrefix
                };
                e.prototype.update.call(this, t, !this.isLink && i, r, l), this.visible = this.toNode.visible, o(this, n), s(i, !0) && this.series.chart.redraw(r)
            }
        }
    }), i(t, "Series/Treegraph/TreegraphLayout.js", [t["Series/Treegraph/TreegraphNode.js"]], function(e) {
        class t {
            static createDummyNode(t, i, s) {
                let o = new e;
                return o.id = t.id + "-" + s, o.ancestor = t, o.children.push(i), o.parent = t.id, o.parentNode = t, o.point = i.point, o.level = i.level - s, o.relativeXPosition = i.relativeXPosition, o.visible = i.visible, t.children[i.relativeXPosition] = o, i.oldParentNode = t, i.relativeXPosition = 0, i.parentNode = o, i.parent = o.id, o
            }
            calculatePositions(e) {
                let t = e.nodeList;
                this.resetValues(t);
                let i = e.tree;
                i && (this.calculateRelativeX(i, 0), this.beforeLayout(t), this.firstWalk(i), this.secondWalk(i, -i.preX), this.afterLayout(t))
            }
            beforeLayout(e) {
                for (let i of e)
                    for (let e of i.children)
                        if (e && e.level - i.level > 1) {
                            let s = e.level - i.level - 1;
                            for (; s > 0;) e = t.createDummyNode(i, e, s), s--
                        }
            }
            resetValues(e) {
                for (let t of e) t.mod = 0, t.ancestor = t, t.shift = 0, t.thread = void 0, t.change = 0, t.preX = 0
            }
            calculateRelativeX(e, t) {
                let i = e.children;
                for (let e = 0, t = i.length; e < t; ++e) this.calculateRelativeX(i[e], e);
                e.relativeXPosition = t
            }
            firstWalk(e) {
                let t;
                if (e.hasChildren()) {
                    let i = e.getLeftMostChild();
                    for (let t of e.children) this.firstWalk(t), i = this.apportion(t, i);
                    this.executeShifts(e);
                    let s = e.getLeftMostChild(),
                        o = e.getRightMostChild(),
                        r = (s.preX + o.preX) / 2;
                    (t = e.getLeftSibling()) ? (e.preX = t.preX + 1, e.mod = e.preX - r) : e.preX = r
                } else(t = e.getLeftSibling()) ? (e.preX = t.preX + 1, e.mod = e.preX) : e.preX = 0
            }
            secondWalk(e, t) {
                for (let i of (e.yPosition = e.preX + t, e.xPosition = e.level, e.children)) this.secondWalk(i, t + e.mod)
            }
            executeShifts(e) {
                let t = 0,
                    i = 0;
                for (let s = e.children.length - 1; s >= 0; s--) {
                    let o = e.children[s];
                    o.preX += t, o.mod += t, i += o.change, t += o.shift + i
                }
            }
            apportion(e, t) {
                let i = e.getLeftSibling();
                if (i) {
                    let s = e,
                        o = e,
                        r = i,
                        l = s.getLeftMostSibling(),
                        n = s.mod,
                        a = o.mod,
                        h = r.mod,
                        d = l.mod;
                    for (; r && r.nextRight() && s && s.nextLeft();) {
                        r = r.nextRight(), l = l.nextLeft(), s = s.nextLeft(), (o = o.nextRight()).ancestor = e;
                        let i = r.preX + h - (s.preX + n) + 1;
                        i > 0 && (this.moveSubtree(e.getAncestor(r, t), e, i), n += i, a += i), h += r.mod, n += s.mod, d += l.mod, a += o.mod
                    }
                    r && r.nextRight() && !o.nextRight() && (o.thread = r.nextRight(), o.mod += h - a), s && s.nextLeft() && !l.nextLeft() && (l.thread = s.nextLeft(), l.mod += n - d), t = e
                }
                return t
            }
            moveSubtree(e, t, i) {
                let s = t.relativeXPosition - e.relativeXPosition;
                t.change -= i / s, t.shift += i, t.preX += i, t.mod += i, e.change += i / s
            }
            afterLayout(e) {
                for (let t of e) t.oldParentNode && (t.relativeXPosition = t.parentNode.relativeXPosition, t.parent = t.oldParentNode.parent, t.parentNode = t.oldParentNode, delete t.oldParentNode.children[t.relativeXPosition], t.oldParentNode.children[t.relativeXPosition] = t, t.oldParentNode = void 0)
            }
        }
        return t
    }), i(t, "Series/Treegraph/TreegraphSeriesDefaults.js", [], function() {
        return {
            reversed: !1,
            marker: {
                radius: 10,
                lineWidth: 0,
                symbol: "circle",
                fillOpacity: 1,
                states: {}
            },
            link: {
                color: "#666666",
                lineWidth: 1,
                radius: 10,
                cursor: "default",
                type: "curved"
            },
            collapseButton: {
                onlyOnHover: !0,
                enabled: !0,
                lineWidth: 1,
                x: 0,
                y: 0,
                height: 18,
                width: 18,
                shape: "circle",
                style: {
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "1em"
                }
            },
            fillSpace: !1,
            tooltip: {
                linkFormat: "{point.fromNode.id} → {point.toNode.id}",
                pointFormat: "{point.id}"
            },
            dataLabels: {
                defer: !0,
                linkTextPath: {
                    attributes: {
                        startOffset: "50%"
                    }
                },
                enabled: !0,
                linkFormatter: () => "",
                style: {
                    textOverflow: "none"
                }
            },
            nodeDistance: 30,
            nodeWidth: void 0
        }
    }), i(t, "Extensions/TextPath.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], function(e, t) {
        let {
            deg2rad: i
        } = e, {
            addEvent: s,
            merge: o,
            uniqueKey: r,
            defined: l,
            extend: n
        } = t;

        function a(e, t) {
            t = o(!0, {
                enabled: !0,
                attributes: {
                    dy: -5,
                    startOffset: "50%",
                    textAnchor: "middle"
                }
            }, t);
            let i = this.renderer.url,
                a = this.text || this,
                h = a.textPath,
                {
                    attributes: d,
                    enabled: p
                } = t;
            if (e = e || h && h.path, h && h.undo(), e && p) {
                let t = s(a, "afterModifyTree", t => {
                    if (e && p) {
                        let s = e.attr("id");
                        s || e.attr("id", s = r());
                        let o = {
                            x: 0,
                            y: 0
                        };
                        l(d.dx) && (o.dx = d.dx, delete d.dx), l(d.dy) && (o.dy = d.dy, delete d.dy), a.attr(o), this.attr({
                            transform: ""
                        }), this.box && (this.box = this.box.destroy());
                        let h = t.nodes.slice(0);
                        t.nodes.length = 0, t.nodes[0] = {
                            tagName: "textPath",
                            attributes: n(d, {
                                "text-anchor": d.textAnchor,
                                href: `${i}#${s}`
                            }),
                            children: h
                        }
                    }
                });
                a.textPath = {
                    path: e,
                    undo: t
                }
            } else a.attr({
                dx: 0,
                dy: 0
            }), delete a.textPath;
            return this.added && (a.textCache = "", this.renderer.buildText(a)), this
        }

        function h(e) {
            let t = e.bBox,
                s = this.element?.querySelector("textPath");
            if (s) {
                let e = [],
                    {
                        b: o,
                        h: r
                    } = this.renderer.fontMetrics(this.element),
                    l = r - o,
                    n = RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)', "g"),
                    a = s.innerHTML.replace(n, "").split(/<tspan class="highcharts-br"[^>]*>/),
                    h = a.length,
                    d = (e, t) => {
                        let {
                            x: r,
                            y: n
                        } = t, a = (s.getRotationOfChar(e) - 90) * i, h = Math.cos(a), d = Math.sin(a);
                        return [
                            [r - l * h, n - l * d],
                            [r + o * h, n + o * d]
                        ]
                    };
                for (let t = 0, i = 0; i < h; i++) {
                    let o = a[i].length;
                    for (let r = 0; r < o; r += 5) try {
                        let o = t + r + i,
                            [l, n] = d(o, s.getStartPositionOfChar(o));
                        0 === r ? (e.push(n), e.push(l)) : (0 === i && e.unshift(n), i === h - 1 && e.push(l))
                    } catch (e) {
                        break
                    }
                    t += o - 1;
                    try {
                        let o = t + i,
                            r = s.getEndPositionOfChar(o),
                            [l, n] = d(o, r);
                        e.unshift(n), e.unshift(l)
                    } catch (e) {
                        break
                    }
                }
                e.length && e.push(e[0].slice()), t.polygon = e
            }
            return t
        }

        function d(e) {
            let t = e.labelOptions,
                i = e.point,
                s = t[i.formatPrefix + "TextPath"] || t.textPath;
            s && !t.useHTML && (this.setTextPath(i.getDataLabelPath?.(this) || i.graphic, s), i.dataLabelPath && !s.enabled && (i.dataLabelPath = i.dataLabelPath.destroy()))
        }
        return {
            compose: function(e) {
                s(e, "afterGetBBox", h), s(e, "beforeAddingDataLabel", d);
                let t = e.prototype;
                t.setTextPath || (t.setTextPath = a)
            }
        }
    }), i(t, "Series/Treegraph/TreegraphSeries.js", [t["Series/PathUtilities.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Renderer/SVG/SVGRenderer.js"], t["Series/Treegraph/TreegraphNode.js"], t["Series/Treegraph/TreegraphPoint.js"], t["Series/TreeUtilities.js"], t["Core/Utilities.js"], t["Series/Treegraph/TreegraphLink.js"], t["Series/Treegraph/TreegraphLayout.js"], t["Series/Treegraph/TreegraphSeriesDefaults.js"], t["Core/Renderer/SVG/SVGElement.js"], t["Extensions/TextPath.js"]], function(e, t, i, s, o, r, l, n, a, h, d, p) {
        let {
            getLinkPath: c
        } = e, {
            series: {
                prototype: u
            },
            seriesTypes: {
                treemap: f,
                column: g
            }
        } = t, {
            prototype: {
                symbols: y
            }
        } = i, {
            getLevelOptions: m,
            getNodeWidth: b
        } = r, {
            arrayMax: v,
            crisp: P,
            extend: k,
            merge: L,
            pick: x,
            relativeLength: T,
            splat: C
        } = l;
        p.compose(d);
        class S extends f {
            constructor() {
                super(...arguments), this.nodeList = [], this.links = []
            }
            init() {
                super.init.apply(this, arguments), this.layoutAlgorythm = new a;
                let e = this,
                    t = this.chart.labelCollectors;
                t.some(e => "collectorFunc" === e.name) || t.push(function() {
                    let t = [];
                    if (!C(e.options.dataLabels)[0].allowOverlap)
                        for (let i of e.links || []) i.dataLabel && t.push(i.dataLabel);
                    return t
                })
            }
            getLayoutModifiers() {
                let e = this.chart,
                    t = this,
                    i = e.plotSizeX,
                    s = e.plotSizeY,
                    o = v(this.points.map(e => e.node.xPosition)),
                    r = 1 / 0,
                    l = -1 / 0,
                    n = 1 / 0,
                    a = -1 / 0,
                    h = 0,
                    d = 0,
                    p = 0,
                    c = 0;
                this.points.forEach(e => {
                    if (this.options.fillSpace && !e.visible) return;
                    let u = e.node,
                        f = t.mapOptionsToLevel[e.node.level] || {},
                        g = L(this.options.marker, f.marker, e.options.marker),
                        y = g.width ?? b(this, o),
                        m = T(g.radius || 0, Math.min(i, s)),
                        v = g.symbol,
                        P = "circle" !== v && g.height ? T(g.height, s) : 2 * m,
                        k = "circle" !== v && y ? T(y, i) : 2 * m;
                    u.nodeSizeX = k, u.nodeSizeY = P, u.xPosition <= r && (r = u.xPosition, d = Math.max(k + (g.lineWidth || 0), d)), u.xPosition >= l && (l = u.xPosition, h = Math.max(k + (g.lineWidth || 0), h)), u.yPosition <= n && (n = u.yPosition, c = Math.max(P + (g.lineWidth || 0), c)), u.yPosition >= a && (a = u.yPosition, p = Math.max(P + (g.lineWidth || 0), p))
                });
                let u = a === n ? 1 : (s - (c + p) / 2) / (a - n),
                    f = a === n ? s / 2 : -u * n + c / 2,
                    g = l === r ? 1 : (i - (h + h) / 2) / (l - r),
                    y = l === r ? i / 2 : -g * r + d / 2;
                return {
                    ax: g,
                    bx: y,
                    ay: u,
                    by: f
                }
            }
            getLinks() {
                let e = this,
                    t = [];
                return this.data.forEach(i => {
                    let s = e.mapOptionsToLevel[i.node.level || 0] || {};
                    if (i.node.parent) {
                        let o = L(s, i.options);
                        if (!i.linkToParent || i.linkToParent.destroyed) {
                            let t = new e.LinkClass(e, o, void 0, i);
                            i.linkToParent = t
                        } else i.collapsed = x(i.collapsed, (this.mapOptionsToLevel[i.node.level] || {}).collapsed), i.linkToParent.visible = i.linkToParent.toNode.visible;
                        i.linkToParent.index = t.push(i.linkToParent) - 1
                    } else i.linkToParent && (e.links.splice(i.linkToParent.index), i.linkToParent.destroy(), delete i.linkToParent)
                }), t
            }
            buildTree(e, t, i, s, o) {
                let r = this.points[t];
                return i = r && r.level || i, super.buildTree.call(this, e, t, i, s, o)
            }
            markerAttribs() {
                return {}
            }
            setCollapsedStatus(e, t) {
                let i = e.point;
                i && (i.collapsed = x(i.collapsed, (this.mapOptionsToLevel[e.level] || {}).collapsed), i.visible = t, t = !1 !== t && !i.collapsed), e.children.forEach(e => {
                    this.setCollapsedStatus(e, t)
                })
            }
            drawTracker() {
                g.prototype.drawTracker.apply(this, arguments), g.prototype.drawTracker.call(this, this.links)
            }
            translate() {
                let e = this.options,
                    t = r.updateRootId(this),
                    i;
                u.translate.call(this);
                let s = this.tree = this.getTree();
                i = this.nodeMap[t], "" === t || i && i.children.length || (this.setRootNode("", !1), t = this.rootNode, i = this.nodeMap[t]), this.mapOptionsToLevel = m({
                    from: i.level + 1,
                    levels: e.levels,
                    to: s.height,
                    defaults: {
                        levelIsConstant: this.options.levelIsConstant,
                        colorByPoint: e.colorByPoint
                    }
                }), this.setCollapsedStatus(s, !0), this.links = this.getLinks(), this.setTreeValues(s), this.layoutAlgorythm.calculatePositions(this), this.layoutModifier = this.getLayoutModifiers(), this.points.forEach(e => {
                    this.translateNode(e)
                }), this.points.forEach(e => {
                    e.linkToParent && this.translateLink(e.linkToParent)
                }), e.colorByPoint || this.setColorRecursive(this.tree)
            }
            translateLink(e) {
                let t = e.fromNode,
                    i = e.toNode,
                    s = this.options.link?.lineWidth || 0,
                    o = x(this.options.link?.curveFactor, .5),
                    r = x(e.options.link?.type, this.options.link?.type, "default");
                if (t.shapeArgs && i.shapeArgs) {
                    let l = t.shapeArgs.width || 0,
                        n = this.chart.inverted,
                        a = P((t.shapeArgs.y || 0) + (t.shapeArgs.height || 0) / 2, s),
                        h = P((i.shapeArgs.y || 0) + (i.shapeArgs.height || 0) / 2, s),
                        d = P((t.shapeArgs.x || 0) + l, s),
                        p = P(i.shapeArgs.x || 0, s);
                    n && (d -= l, p += i.shapeArgs.width || 0);
                    let u = i.node.xPosition - t.node.xPosition;
                    e.shapeType = "path";
                    let f = (Math.abs(p - d) + l) / u - l,
                        g = P((p + d) / 2, s);
                    e.plotX = g, e.plotY = h, e.shapeArgs = {
                        d: c[r]({
                            x1: d,
                            y1: a,
                            x2: p,
                            y2: h,
                            width: f,
                            offset: f * o * (n ? -1 : 1),
                            inverted: n,
                            parentVisible: i.visible,
                            radius: this.options.link?.radius
                        })
                    }, e.dlBox = {
                        x: (d + p) / 2,
                        y: (a + h) / 2,
                        height: s,
                        width: 0
                    }, e.tooltipPos = n ? [(this.chart.plotSizeY || 0) - e.dlBox.y, (this.chart.plotSizeX || 0) - e.dlBox.x] : [e.dlBox.x, e.dlBox.y]
                }
            }
            drawNodeLabels(e) {
                let t, i;
                let s = this.mapOptionsToLevel;
                for (let o of e) i = s[o.node.level], t = {
                    style: {}
                }, i && i.dataLabels && (t = L(t, i.dataLabels), this.hasDataLabels = () => !0), o.shapeArgs && !C(this.options.dataLabels)[0].style.width && (t.style.width = o.shapeArgs.width, o.dataLabel && o.dataLabel.css({
                    width: o.shapeArgs.width + "px"
                })), o.dlOptions = L(t, o.options.dataLabels);
                u.drawDataLabels.call(this, e)
            }
            alignDataLabel(e, t) {
                let i = e.visible;
                e.visible = !0, super.alignDataLabel.apply(this, arguments), t.animate({
                    opacity: !1 === i ? 0 : 1
                }, void 0, function() {
                    i || t.hide()
                }), e.visible = i
            }
            drawDataLabels() {
                this.options.dataLabels && (this.options.dataLabels = C(this.options.dataLabels), this.drawNodeLabels(this.points), u.drawDataLabels.call(this, this.links))
            }
            destroy() {
                if (this.links) {
                    for (let e of this.links) e.destroy();
                    this.links.length = 0
                }
                return u.destroy.apply(this, arguments)
            }
            pointAttribs(e, t) {
                let i = e && this.mapOptionsToLevel[e.node.level || 0] || {},
                    s = e && e.options,
                    o = i.states && i.states[t] || {};
                e && (e.options.marker = L(this.options.marker, i.marker, e.options.marker));
                let r = x(o && o.link && o.link.color, s && s.link && s.link.color, i && i.link && i.link.color, this.options.link && this.options.link.color),
                    l = x(o && o.link && o.link.lineWidth, s && s.link && s.link.lineWidth, i && i.link && i.link.lineWidth, this.options.link && this.options.link.lineWidth),
                    n = u.pointAttribs.call(this, e, t);
                return e && (e.isLink && (n.stroke = r, n["stroke-width"] = l, delete n.fill), e.visible || (n.opacity = 0)), n
            }
            drawPoints() {
                f.prototype.drawPoints.apply(this, arguments), g.prototype.drawPoints.call(this, this.links)
            }
            translateNode(e) {
                let t = this.chart,
                    i = e.node,
                    s = t.plotSizeY,
                    o = t.plotSizeX,
                    {
                        ax: r,
                        bx: l,
                        ay: n,
                        by: a
                    } = this.layoutModifier,
                    h = r * i.xPosition + l,
                    d = n * i.yPosition + a,
                    p = this.mapOptionsToLevel[i.level] || {},
                    c = L(this.options.marker, p.marker, e.options.marker).symbol,
                    u = i.nodeSizeY,
                    f = i.nodeSizeX,
                    g = this.options.reversed,
                    m = i.x = t.inverted ? o - f / 2 - h : h - f / 2,
                    b = i.y = g ? d - u / 2 : s - d - u / 2,
                    v = x(e.options.borderRadius, p.borderRadius, this.options.borderRadius),
                    P = y[c || "circle"];
                if (void 0 === P ? (e.hasImage = !0, e.shapeType = "image", e.imageUrl = c.match(/^url\((.*?)\)$/)[1]) : e.shapeType = "path", !e.visible && e.linkToParent) {
                    let t = e.linkToParent.fromNode;
                    if (t) {
                        let {
                            x: i = 0,
                            y: s = 0,
                            width: o = 0,
                            height: r = 0
                        } = t.shapeArgs || {};
                        e.shapeArgs || (e.shapeArgs = {}), e.hasImage || k(e.shapeArgs, {
                            d: P(i, s, o, r, v ? {
                                r: v
                            } : void 0)
                        }), k(e.shapeArgs, {
                            x: i,
                            y: s
                        }), e.plotX = t.plotX, e.plotY = t.plotY
                    }
                } else e.plotX = m, e.plotY = b, e.shapeArgs = {
                    x: m,
                    y: b,
                    width: f,
                    height: u,
                    cursor: e.node.isLeaf ? "default" : "pointer"
                }, e.hasImage || (e.shapeArgs.d = P(m, b, f, u, v ? {
                    r: v
                } : void 0));
                e.tooltipPos = t.inverted ? [s - b - u / 2, o - m - f / 2] : [m + f / 2, b]
            }
        }
        return S.defaultOptions = L(f.defaultOptions, h), k(S.prototype, {
            pointClass: o,
            NodeClass: s,
            LinkClass: n
        }), t.registerSeriesType("treegraph", S), S
    }), i(t, "masters/modules/treegraph.src.js", [t["Core/Globals.js"]], function(e) {
        return e
    })
});