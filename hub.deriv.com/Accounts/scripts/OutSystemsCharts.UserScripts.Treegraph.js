!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
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

    function i(e, t, i, s) {
        e.hasOwnProperty(t) || (e[t] = s.apply(null, i), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: t,
                module: e[t]
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
                super(e, t, i), this.isLink = !0, this.node = {}, this.formatPrefix = "link", this.dataLabelOnNull = !0, this.formatPrefix = "link", this.dataLabelOnNull = !0, s && (this.fromNode = s.node.parentNode.point, this.visible = s.visible, this.toNode = s, this.id = this.toNode.id + "-" + this.fromNode.id)
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
    }), i(t, "Series/Treegraph/TreegraphSeries.js", [t["Series/PathUtilities.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Renderer/SVG/SVGRenderer.js"], t["Series/Treegraph/TreegraphNode.js"], t["Series/Treegraph/TreegraphPoint.js"], t["Series/TreeUtilities.js"], t["Core/Utilities.js"], t["Series/Treegraph/TreegraphLink.js"], t["Series/Treegraph/TreegraphLayout.js"], t["Series/Treegraph/TreegraphSeriesDefaults.js"]], function(e, t, i, s, o, r, l, n, a, h) {
        let {
            getLinkPath: d
        } = e, {
            series: {
                prototype: p
            },
            seriesTypes: {
                treemap: c,
                column: u
            }
        } = t, {
            prototype: {
                symbols: f
            }
        } = i, {
            getLevelOptions: g,
            getNodeWidth: m
        } = r, {
            arrayMax: y,
            extend: v,
            merge: k,
            pick: b,
            relativeLength: L,
            splat: P
        } = l;
        class T extends c {
            constructor() {
                super(...arguments), this.nodeList = [], this.links = []
            }
            init() {
                super.init.apply(this, arguments), this.layoutAlgorythm = new a
            }
            getLayoutModifiers() {
                let e = this.chart,
                    t = this,
                    i = e.plotSizeX,
                    s = e.plotSizeY,
                    o = y(this.points.map(e => e.node.xPosition)),
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
                        g = k(this.options.marker, f.marker, e.options.marker),
                        y = g.width ?? m(this, o),
                        v = L(g.radius || 0, Math.min(i, s)),
                        b = g.symbol,
                        P = "circle" !== b && g.height ? L(g.height, s) : 2 * v,
                        T = "circle" !== b && y ? L(y, i) : 2 * v;
                    u.nodeSizeX = T, u.nodeSizeY = P, u.xPosition <= r && (r = u.xPosition, d = Math.max(T + (g.lineWidth || 0), d)), u.xPosition >= l && (l = u.xPosition, h = Math.max(T + (g.lineWidth || 0), h)), u.yPosition <= n && (n = u.yPosition, c = Math.max(P + (g.lineWidth || 0), c)), u.yPosition >= a && (a = u.yPosition, p = Math.max(P + (g.lineWidth || 0), p))
                });
                let u = a === n ? 1 : (s - (c + p) / 2) / (a - n),
                    f = a === n ? s / 2 : -u * n + c / 2,
                    g = l === r ? 1 : (i - (h + h) / 2) / (l - r),
                    v = l === r ? i / 2 : -g * r + d / 2;
                return {
                    ax: g,
                    bx: v,
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
                        let o = k(s, i.options);
                        if (!i.linkToParent || i.linkToParent.destroyed) {
                            let t = new e.LinkClass(e, o, void 0, i);
                            i.linkToParent = t
                        } else i.collapsed = b(i.collapsed, (this.mapOptionsToLevel[i.node.level] || {}).collapsed), i.linkToParent.visible = i.linkToParent.toNode.visible;
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
                i && (i.collapsed = b(i.collapsed, (this.mapOptionsToLevel[e.level] || {}).collapsed), i.visible = t, t = !1 !== t && !i.collapsed), e.children.forEach(e => {
                    this.setCollapsedStatus(e, t)
                })
            }
            drawTracker() {
                u.prototype.drawTracker.apply(this, arguments), u.prototype.drawTracker.call(this, this.links)
            }
            translate() {
                let e = this.options,
                    t = r.updateRootId(this),
                    i;
                p.translate.call(this);
                let s = this.tree = this.getTree();
                i = this.nodeMap[t], "" === t || i && i.children.length || (this.setRootNode("", !1), t = this.rootNode, i = this.nodeMap[t]), this.mapOptionsToLevel = g({
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
                    s = this.options.link.lineWidth,
                    o = Math.round(s) % 2 / 2,
                    r = b(this.options.link.curveFactor, .5),
                    l = b(e.options.link && e.options.link.type, this.options.link.type);
                if (t.shapeArgs && i.shapeArgs) {
                    let n = t.shapeArgs.width || 0,
                        a = this.chart.inverted,
                        h = Math.floor((t.shapeArgs.y || 0) + (t.shapeArgs.height || 0) / 2) + o,
                        p = Math.floor((i.shapeArgs.y || 0) + (i.shapeArgs.height || 0) / 2) + o,
                        c = Math.floor((t.shapeArgs.x || 0) + n) + o,
                        u = Math.floor(i.shapeArgs.x || 0) + o;
                    a && (c -= n, u += i.shapeArgs.width || 0);
                    let f = i.node.xPosition - t.node.xPosition;
                    e.shapeType = "path";
                    let g = (Math.abs(u - c) + n) / f - n,
                        m = Math.floor((u + c) / 2) + o;
                    e.plotX = m, e.plotY = p, e.shapeArgs = {
                        d: d[l]({
                            x1: c,
                            y1: h,
                            x2: u,
                            y2: p,
                            width: g,
                            offset: g * r * (a ? -1 : 1),
                            inverted: a,
                            parentVisible: i.visible,
                            radius: this.options.link.radius
                        })
                    }, e.dlBox = {
                        x: (c + u) / 2,
                        y: (h + p) / 2,
                        height: s,
                        width: 0
                    }, e.tooltipPos = a ? [(this.chart.plotSizeY || 0) - e.dlBox.y, (this.chart.plotSizeX || 0) - e.dlBox.x] : [e.dlBox.x, e.dlBox.y]
                }
            }
            drawNodeLabels(e) {
                let t, i;
                let s = this.mapOptionsToLevel;
                for (let o of e) i = s[o.node.level], t = {
                    style: {}
                }, i && i.dataLabels && (t = k(t, i.dataLabels), this.hasDataLabels = () => !0), o.shapeArgs && !P(this.options.dataLabels)[0].style.width && (t.style.width = o.shapeArgs.width, o.dataLabel && o.dataLabel.css({
                    width: o.shapeArgs.width + "px"
                })), o.dlOptions = k(t, o.options.dataLabels);
                p.drawDataLabels.call(this, e)
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
                this.options.dataLabels && (this.options.dataLabels = P(this.options.dataLabels), this.drawNodeLabels(this.points), p.drawDataLabels.call(this, this.links))
            }
            destroy() {
                if (this.links) {
                    for (let e of this.links) e.destroy();
                    this.links.length = 0
                }
                return p.destroy.apply(this, arguments)
            }
            pointAttribs(e, t) {
                let i = e && this.mapOptionsToLevel[e.node.level || 0] || {},
                    s = e && e.options,
                    o = i.states && i.states[t] || {};
                e && (e.options.marker = k(this.options.marker, i.marker, e.options.marker));
                let r = b(o && o.link && o.link.color, s && s.link && s.link.color, i && i.link && i.link.color, this.options.link && this.options.link.color),
                    l = b(o && o.link && o.link.lineWidth, s && s.link && s.link.lineWidth, i && i.link && i.link.lineWidth, this.options.link && this.options.link.lineWidth),
                    n = p.pointAttribs.call(this, e, t);
                return e && (e.isLink && (n.stroke = r, n["stroke-width"] = l, delete n.fill), e.visible || (n.opacity = 0)), n
            }
            drawPoints() {
                c.prototype.drawPoints.apply(this, arguments), u.prototype.drawPoints.call(this, this.links)
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
                    c = k(this.options.marker, p.marker, e.options.marker).symbol,
                    u = i.nodeSizeY,
                    g = i.nodeSizeX,
                    m = this.options.reversed,
                    y = i.x = t.inverted ? o - g / 2 - h : h - g / 2,
                    L = i.y = m ? d - u / 2 : s - d - u / 2,
                    P = b(e.options.borderRadius, p.borderRadius, this.options.borderRadius),
                    T = f[c || "circle"];
                if (void 0 === T ? (e.hasImage = !0, e.shapeType = "image", e.imageUrl = c.match(/^url\((.*?)\)$/)[1]) : e.shapeType = "path", !e.visible && e.linkToParent) {
                    let t = e.linkToParent.fromNode;
                    if (t) {
                        let {
                            x: i = 0,
                            y: s = 0,
                            width: o = 0,
                            height: r = 0
                        } = t.shapeArgs || {};
                        e.shapeArgs || (e.shapeArgs = {}), e.hasImage || v(e.shapeArgs, {
                            d: T(i, s, o, r, P ? {
                                r: P
                            } : void 0)
                        }), v(e.shapeArgs, {
                            x: i,
                            y: s
                        }), e.plotX = t.plotX, e.plotY = t.plotY
                    }
                } else e.plotX = y, e.plotY = L, e.shapeArgs = {
                    x: y,
                    y: L,
                    width: g,
                    height: u,
                    cursor: e.node.isLeaf ? "default" : "pointer"
                }, e.hasImage || (e.shapeArgs.d = T(y, L, g, u, P ? {
                    r: P
                } : void 0));
                e.tooltipPos = t.inverted ? [s - L - u / 2, o - y - g / 2] : [y + g / 2, L]
            }
        }
        return T.defaultOptions = k(c.defaultOptions, h), v(T.prototype, {
            pointClass: o,
            NodeClass: s,
            LinkClass: n
        }), t.registerSeriesType("treegraph", T), T
    }), i(t, "masters/modules/treegraph.src.js", [t["Core/Globals.js"]], function(e) {
        return e
    })
}); //# sourceMappingURL=treegraph.js.map