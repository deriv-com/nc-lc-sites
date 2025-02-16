!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Sankey diagram module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/sankey", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function o(t, e, o, i) {
        t.hasOwnProperty(e) || (t[e] = i.apply(null, o), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: e,
                module: t[e]
            }
        })))
    }
    o(e, "Series/NodesComposition.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        var o;
        let {
            series: {
                prototype: i,
                prototype: {
                    pointClass: {
                        prototype: s
                    }
                }
            }
        } = t, {
            defined: n,
            extend: r,
            find: l,
            merge: a,
            pick: d
        } = e;
        return function(t) {
            function e() {
                return this.data = [].concat(this.points || [], this.nodes), i.destroy.apply(this, arguments)
            }

            function o() {
                this.nodes && (this.nodes.forEach(t => {
                    t.destroy()
                }), this.nodes.length = 0), i.setData.apply(this, arguments)
            }

            function h(t) {
                let e = arguments,
                    o = this.isNode ? this.linksTo.concat(this.linksFrom) : [this.fromNode, this.toNode];
                "select" !== t && o.forEach(t => {
                    t && t.series && (s.setState.apply(t, e), !t.isNode && (t.fromNode.graphic && s.setState.apply(t.fromNode, e), t.toNode && t.toNode.graphic && s.setState.apply(t.toNode, e)))
                }), s.setState.apply(this, e)
            }

            function p(t, e, o, i) {
                let n = this.series.options.nodes,
                    r = this.series.options.data,
                    l = r && r.length || 0,
                    h = r && r[this.index];
                if (s.update.call(this, t, !this.isNode && e, o, i), this.isNode) {
                    let t = (n || []).reduce((t, e, o) => this.id === e.id ? o : t, -1),
                        i = a(n && n[t] || {}, r && r[this.index] || {});
                    r && (h ? r[this.index] = h : r.length = l), n ? t >= 0 ? n[t] = i : n.push(i) : this.series.options.nodes = [i], d(e, !0) && this.series.chart.redraw(o)
                }
            }
            t.compose = function(t, i) {
                let s = t.prototype,
                    n = i.prototype;
                return s.setNodeState = h, s.setState = h, s.update = p, n.destroy = e, n.setData = o, i
            }, t.createNode = function(t) {
                let e = this.pointClass,
                    o = (t, e) => l(t, t => t.id === e),
                    i = o(this.nodes, t),
                    s;
                if (!i) {
                    s = this.options.nodes && o(this.options.nodes, t);
                    let n = new e(this, r({
                        className: "highcharts-node",
                        isNode: !0,
                        id: t,
                        y: 1
                    }, s));
                    n.linksTo = [], n.linksFrom = [], n.getSum = function() {
                        let t = 0,
                            e = 0;
                        return n.linksTo.forEach(e => {
                            t += e.weight || 0
                        }), n.linksFrom.forEach(t => {
                            e += t.weight || 0
                        }), Math.max(t, e)
                    }, n.offset = function(t, e) {
                        let o = 0;
                        for (let i = 0; i < n[e].length; i++) {
                            if (n[e][i] === t) return o;
                            o += n[e][i].weight
                        }
                    }, n.hasShape = function() {
                        let t = 0;
                        return n.linksTo.forEach(e => {
                            e.outgoing && t++
                        }), !n.linksTo.length || t !== n.linksTo.length
                    }, n.index = this.nodes.push(n) - 1, i = n
                }
                return i.formatPrefix = "node", i.name = i.name || i.options.id || "", i.mass = d(i.options.mass, i.options.marker && i.options.marker.radius, this.options.marker && this.options.marker.radius, 4), i
            }, t.destroy = e, t.generatePoints = function() {
                let t = this.chart,
                    e = {};
                i.generatePoints.call(this), this.nodes || (this.nodes = []), this.colorCounter = 0, this.nodes.forEach(t => {
                    t.linksFrom.length = 0, t.linksTo.length = 0, t.level = t.options.level
                }), this.points.forEach(o => {
                    n(o.from) && (e[o.from] || (e[o.from] = this.createNode(o.from)), e[o.from].linksFrom.push(o), o.fromNode = e[o.from], t.styledMode ? o.colorIndex = d(o.options.colorIndex, e[o.from].colorIndex) : o.color = o.options.color || e[o.from].color), n(o.to) && (e[o.to] || (e[o.to] = this.createNode(o.to)), e[o.to].linksTo.push(o), o.toNode = e[o.to]), o.name = o.name || o.id
                }, this), this.nodeLookup = e
            }, t.setNodeState = h, t.updateNode = p
        }(o || (o = {})), o
    }), o(e, "Series/Sankey/SankeyPoint.js", [e["Core/Series/Point.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, o) {
        let {
            column: i
        } = e.seriesTypes, {
            defined: s
        } = o;
        class n extends i.prototype.pointClass {
            applyOptions(e, o) {
                return t.prototype.applyOptions.call(this, e, o), s(this.options.level) && (this.options.column = this.column = this.options.level), this
            }
            getClassName() {
                return (this.isNode ? "highcharts-node " : "highcharts-link ") + t.prototype.getClassName.call(this)
            }
            getFromNode() {
                let t = -1,
                    e;
                for (let o = 0; o < this.linksTo.length; o++) {
                    let i = this.linksTo[o];
                    i.fromNode.column > t && i.fromNode !== this && (t = (e = i.fromNode).column)
                }
                return {
                    fromNode: e,
                    fromColumn: t
                }
            }
            setNodeColumn() {
                s(this.options.column) || (0 === this.linksTo.length ? this.column = 0 : this.column = this.getFromNode().fromColumn + 1)
            }
            isValid() {
                return this.isNode || "number" == typeof this.weight
            }
        }
        return n
    }), o(e, "Series/Sankey/SankeySeriesDefaults.js", [], function() {
        return {
            borderWidth: 0,
            colorByPoint: !0,
            curveFactor: .33,
            dataLabels: {
                enabled: !0,
                backgroundColor: "none",
                crop: !1,
                nodeFormat: void 0,
                nodeFormatter: function() {
                    return this.point.name
                },
                format: void 0,
                formatter: function() {},
                inside: !0
            },
            inactiveOtherPoints: !0,
            linkColorMode: "from",
            linkOpacity: .5,
            opacity: 1,
            minLinkWidth: 0,
            nodeAlignment: "center",
            nodeWidth: 20,
            nodePadding: 10,
            nodeDistance: 30,
            showInLegend: !1,
            states: {
                hover: {
                    linkOpacity: 1,
                    opacity: 1
                },
                inactive: {
                    linkOpacity: .1,
                    opacity: .1,
                    animation: {
                        duration: 50
                    }
                }
            },
            tooltip: {
                followPointer: !0,
                headerFormat: '<span style="font-size: 0.8em">{series.name}</span><br/>',
                pointFormat: "{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>",
                nodeFormat: "{point.name}: <b>{point.sum}</b><br/>"
            }
        }
    }), o(e, "Series/Sankey/SankeyColumnComposition.js", [e["Core/Utilities.js"]], function(t) {
        var e;
        let {
            defined: o,
            relativeLength: i
        } = t;
        return function(t) {
            t.compose = function(t, o) {
                return t.sankeyColumn = new e(t, o), t
            };
            class e {
                constructor(t, e) {
                    this.points = t, this.series = e
                }
                getTranslationFactor(t) {
                    let e = this.points,
                        o = e.slice(),
                        i = t.chart,
                        s = t.options.minLinkWidth || 0,
                        n, r = 0,
                        l, a = (i.plotSizeY || 0) - (t.options.borderWidth || 0) - (e.length - 1) * t.nodePadding;
                    for (; e.length;) {
                        for (r = a / e.sankeyColumn.sum(), n = !1, l = e.length; l--;) e[l].getSum() * r < s && (e.splice(l, 1), a = Math.max(0, a - s), n = !0);
                        if (!n) break
                    }
                    for (let t of (e.length = 0, o)) e.push(t);
                    return r
                }
                top(t) {
                    let e = this.series,
                        o = e.nodePadding,
                        i = this.points.reduce((i, s) => (i > 0 && (i += o), i += Math.max(s.getSum() * t, e.options.minLinkWidth || 0)), 0);
                    return ({
                        top: 0,
                        center: .5,
                        bottom: 1
                    })[e.options.nodeAlignment || "center"] * ((e.chart.plotSizeY || 0) - i)
                }
                left(t) {
                    let e = this.series,
                        o = e.chart,
                        i = e.options.equalNodes,
                        s = o.inverted ? o.plotHeight : o.plotWidth,
                        n = e.nodePadding,
                        r = this.points.reduce((o, r) => (o > 0 && (o += n), o += i ? s / r.series.nodes.length - n : Math.max(r.getSum() * t, e.options.minLinkWidth || 0)), 0);
                    return ((o.plotSizeX || 0) - Math.round(r)) / 2
                }
                sum() {
                    return this.points.reduce((t, e) => t + e.getSum(), 0)
                }
                offset(t, e) {
                    let s = this.points,
                        n = this.series,
                        r = n.nodePadding,
                        l = 0,
                        a;
                    if (n.is("organization") && t.hangsFrom) return {
                        absoluteTop: t.hangsFrom.nodeY
                    };
                    for (let d = 0; d < s.length; d++) {
                        let h = s[d].getSum(),
                            p = Math.max(h * e, n.options.minLinkWidth || 0),
                            c = t.options[n.chart.inverted ? "offsetHorizontal" : "offsetVertical"],
                            u = t.options.offset || 0;
                        if (a = h ? p + r : 0, s[d] === t) return {
                            relativeTop: l + (o(c) ? i(c, p) : i(u, a))
                        };
                        l += a
                    }
                }
            }
            t.SankeyColumnAdditions = e
        }(e || (e = {})), e
    }), o(e, "Series/TreeUtilities.js", [e["Core/Color/Color.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            extend: o,
            isArray: i,
            isNumber: s,
            isObject: n,
            merge: r,
            pick: l,
            relativeLength: a
        } = e;
        return {
            getColor: function(e, o) {
                let i, s, n, r, a, d;
                let h = o.index,
                    p = o.mapOptionsToLevel,
                    c = o.parentColor,
                    u = o.parentColorIndex,
                    f = o.series,
                    m = o.colors,
                    g = o.siblings,
                    y = f.points,
                    k = f.chart.options.chart;
                return e && (i = y[e.i], s = p[e.level] || {}, i && s.colorByPoint && (r = i.index % (m ? m.length : k.colorCount), n = m && m[r]), f.chart.styledMode || (a = l(i && i.options.color, s && s.color, n, c && (e => {
                    let o = s && s.colorVariation;
                    return o && "brightness" === o.key && h && g ? t.parse(e).brighten(o.to * (h / g)).get() : e
                })(c), f.color)), d = l(i && i.options.colorIndex, s && s.colorIndex, r, u, o.colorIndex)), {
                    color: a,
                    colorIndex: d
                }
            },
            getLevelOptions: function(t) {
                let e = {},
                    o, a, d, h, p, c;
                if (n(t))
                    for (h = s(t.from) ? t.from : 1, c = t.levels, a = {}, o = n(t.defaults) ? t.defaults : {}, i(c) && (a = c.reduce((t, e) => {
                            let i, a, d;
                            return n(e) && s(e.level) && (a = l((d = r({}, e)).levelIsConstant, o.levelIsConstant), delete d.levelIsConstant, delete d.level, n(t[i = e.level + (a ? 0 : h - 1)]) ? r(!0, t[i], d) : t[i] = d), t
                        }, {})), p = s(t.to) ? t.to : 1, d = 0; d <= p; d++) e[d] = r({}, o, n(a[d]) ? a[d] : {});
                return e
            },
            getNodeWidth: function(t, e) {
                let {
                    chart: o,
                    options: i
                } = t, {
                    nodeDistance: s = 0,
                    nodeWidth: n = 0
                } = i, {
                    plotSizeX: r = 1
                } = o;
                if ("auto" === n) {
                    if ("string" == typeof s && /%$/.test(s)) return r / (e + parseFloat(s) / 100 * (e - 1));
                    let t = Number(s);
                    return (r + t) / (e || 1) - t
                }
                return a(n, r)
            },
            setTreeValues: function t(e, i) {
                let s = i.before,
                    n = i.idRoot,
                    r = i.mapIdToNode[n],
                    a = !1 !== i.levelIsConstant,
                    d = i.points[e.i],
                    h = d && d.options || {},
                    p = [],
                    c = 0;
                e.levelDynamic = e.level - (a ? 0 : r.level), e.name = l(d && d.name, ""), e.visible = n === e.id || !0 === i.visible, "function" == typeof s && (e = s(e, i)), e.children.forEach((s, n) => {
                    let r = o({}, i);
                    o(r, {
                        index: n,
                        siblings: e.children.length,
                        visible: e.visible
                    }), s = t(s, r), p.push(s), s.visible && (c += s.val)
                });
                let u = l(h.value, c);
                return e.visible = u >= 0 && (c > 0 || e.visible), e.children = p, e.childrenTotal = c, e.isLeaf = e.visible && !c, e.val = u, e
            },
            updateRootId: function(t) {
                let e, o;
                return n(t) && (o = n(t.options) ? t.options : {}, e = l(t.rootNode, o.rootId, ""), n(t.userOptions) && (t.userOptions.rootId = e), t.rootNode = e), e
            }
        }
    }), o(e, "Series/Sankey/SankeySeries.js", [e["Core/Globals.js"], e["Series/NodesComposition.js"], e["Series/Sankey/SankeyPoint.js"], e["Series/Sankey/SankeySeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Series/Sankey/SankeyColumnComposition.js"], e["Core/Color/Color.js"], e["Series/TreeUtilities.js"], e["Core/Utilities.js"]], function(t, e, o, i, s, n, r, l, a) {
        let {
            column: d,
            line: h
        } = s.seriesTypes, {
            parse: p
        } = r, {
            getLevelOptions: c,
            getNodeWidth: u
        } = l, {
            clamp: f,
            extend: m,
            isObject: g,
            merge: y,
            pick: k,
            relativeLength: C,
            stableSort: v
        } = a;
        class S extends d {
            static getDLOptions(t) {
                let e = g(t.optionsPoint) ? t.optionsPoint.dataLabels : {};
                return y({
                    style: {}
                }, g(t.level) ? t.level.dataLabels : {}, e)
            }
            createNodeColumns() {
                let t = [];
                for (let e of this.nodes) e.setNodeColumn(), t[e.column] || (t[e.column] = n.compose([], this)), t[e.column].push(e);
                for (let e = 0; e < t.length; e++) void 0 === t[e] && (t[e] = n.compose([], this));
                return t
            }
            order(t, e) {
                if (void 0 === t.level)
                    for (let o of (t.level = e, t.linksFrom)) o.toNode && this.order(o.toNode, e + 1)
            }
            generatePoints() {
                if (e.generatePoints.apply(this, arguments), this.orderNodes) {
                    for (let t of this.nodes) 0 === t.linksTo.length && this.order(t, 0);
                    v(this.nodes, (t, e) => t.level - e.level)
                }
            }
            getNodePadding() {
                let t = this.options.nodePadding || 0;
                if (this.nodeColumns) {
                    let e = this.nodeColumns.reduce((t, e) => Math.max(t, e.length), 0);
                    e * t > this.chart.plotSizeY && (t = this.chart.plotSizeY / e)
                }
                return t
            }
            hasData() {
                return !!this.processedXData.length
            }
            pointAttribs(t, e) {
                if (!t) return {};
                let o = this,
                    i = t.isNode ? t.level : t.fromNode.level,
                    s = o.mapOptionsToLevel[i || 0] || {},
                    n = t.options,
                    l = s.states && s.states[e || ""] || {},
                    a = ["colorByPoint", "borderColor", "borderWidth", "linkOpacity", "opacity"].reduce((t, e) => (t[e] = k(l[e], n[e], s[e], o.options[e]), t), {}),
                    d = k(l.color, n.color, a.colorByPoint ? t.color : s.color);
                return t.isNode ? {
                    fill: d,
                    stroke: a.borderColor,
                    "stroke-width": a.borderWidth,
                    opacity: a.opacity
                } : {
                    fill: r.parse(d).setOpacity(a.linkOpacity).get()
                }
            }
            drawTracker() {
                d.prototype.drawTracker.call(this, this.points), d.prototype.drawTracker.call(this, this.nodes)
            }
            drawPoints() {
                d.prototype.drawPoints.call(this, this.points), d.prototype.drawPoints.call(this, this.nodes)
            }
            drawDataLabels() {
                d.prototype.drawDataLabels.call(this, this.points), d.prototype.drawDataLabels.call(this, this.nodes)
            }
            translate() {
                this.processedXData || this.processData(), this.generatePoints(), this.nodeColumns = this.createNodeColumns();
                let t = this,
                    e = this.chart,
                    o = this.options,
                    i = this.nodeColumns,
                    s = i.length;
                for (let n of (this.nodeWidth = u(this, s), this.nodePadding = this.getNodePadding(), this.translationFactor = i.reduce((e, o) => Math.min(e, o.sankeyColumn.getTranslationFactor(t)), 1 / 0), this.colDistance = (e.plotSizeX - this.nodeWidth - o.borderWidth) / Math.max(1, i.length - 1), t.mapOptionsToLevel = c({
                        from: 1,
                        levels: o.levels,
                        to: i.length - 1,
                        defaults: {
                            borderColor: o.borderColor,
                            borderRadius: o.borderRadius,
                            borderWidth: o.borderWidth,
                            color: t.color,
                            colorByPoint: o.colorByPoint,
                            levelIsConstant: !0,
                            linkColor: o.linkColor,
                            linkLineWidth: o.linkLineWidth,
                            linkOpacity: o.linkOpacity,
                            states: o.states
                        }
                    }), i))
                    for (let e of n) t.translateNode(e, n);
                for (let e of this.nodes)
                    for (let o of e.linksFrom)(o.weight || o.isNull) && o.to && (t.translateLink(o), o.allowShadow = !1)
            }
            translateLink(t) {
                let e = (e, o) => {
                        let i = e.offset(t, o) * r;
                        return Math.min(e.nodeY + i, e.nodeY + (e.shapeArgs && e.shapeArgs.height || 0) - f)
                    },
                    o = t.fromNode,
                    i = t.toNode,
                    s = this.chart,
                    {
                        inverted: n
                    } = s,
                    r = this.translationFactor,
                    l = this.options,
                    a = k(t.linkColorMode, l.linkColorMode),
                    d = (s.inverted ? -this.colDistance : this.colDistance) * l.curveFactor,
                    h = o.nodeX,
                    c = i.nodeX,
                    u = t.outgoing,
                    f = Math.max(t.weight * r, this.options.minLinkWidth),
                    m = e(o, "linksFrom"),
                    g = e(i, "linksTo"),
                    y = this.nodeWidth,
                    C = c > h + y;
                if (s.inverted && (m = s.plotSizeY - m, g = (s.plotSizeY || 0) - g, y = -y, f = -f, C = h > c), t.shapeType = "path", t.linkBase = [m, m + f, g, g + f], C && "number" == typeof g) t.shapeArgs = {
                    d: [
                        ["M", h + y, m],
                        ["C", h + y + d, m, c - d, g, c, g],
                        ["L", c + (u ? y : 0), g + f / 2],
                        ["L", c, g + f],
                        ["C", c - d, g + f, h + y + d, m + f, h + y, m + f],
                        ["Z"]
                    ]
                };
                else if ("number" == typeof g) {
                    let e = s.plotHeight - m - f,
                        o = c - 20 - f,
                        i = c - 20,
                        n = h + y,
                        r = n + 20,
                        l = r + f,
                        a = m,
                        d = m + f,
                        p = d + 20,
                        u = p + e,
                        k = u + 20,
                        C = k + f,
                        v = g,
                        S = v + f,
                        N = S + 20,
                        b = d - .7 * f,
                        x = k + .7 * f,
                        L = S - .7 * f,
                        T = c - .7 * f,
                        P = n + .7 * f;
                    t.shapeArgs = {
                        d: [
                            ["M", n, a],
                            ["C", P, a, l, b, l, p],
                            ["L", l, u],
                            ["C", l, x, P, C, n, C],
                            ["L", c, C],
                            ["C", T, C, o, x, o, u],
                            ["L", o, N],
                            ["C", o, L, T, v, c, v],
                            ["L", c, S],
                            ["C", i, S, i, S, i, N],
                            ["L", i, u],
                            ["C", i, k, i, k, c, k],
                            ["L", n, k],
                            ["C", r, k, r, k, r, u],
                            ["L", r, p],
                            ["C", r, d, r, d, n, d],
                            ["Z"]
                        ]
                    }
                }
                if (t.dlBox = {
                        x: h + (c - h + y) / 2,
                        y: m + (g - m) / 2,
                        height: f,
                        width: 0
                    }, t.tooltipPos = s.inverted ? [s.plotSizeY - t.dlBox.y - f / 2, s.plotSizeX - t.dlBox.x] : [t.dlBox.x, t.dlBox.y + f / 2], t.y = t.plotY = 1, t.x = t.plotX = 1, !t.options.color) {
                    if ("from" === a) t.color = o.color;
                    else if ("to" === a) t.color = i.color;
                    else if ("gradient" === a) {
                        let e = p(o.color).get(),
                            s = p(i.color).get();
                        t.color = {
                            linearGradient: {
                                x1: 1,
                                x2: 0,
                                y1: 0,
                                y2: 0
                            },
                            stops: [
                                [0, n ? e : s],
                                [1, n ? s : e]
                            ]
                        }
                    }
                }
            }
            translateNode(t, e) {
                let o = this.translationFactor,
                    i = this.chart,
                    s = this.options,
                    {
                        borderRadius: n,
                        borderWidth: r = 0
                    } = s,
                    l = t.getSum(),
                    a = Math.max(Math.round(l * o), this.options.minLinkWidth),
                    d = Math.round(this.nodeWidth),
                    h = Math.round(r) % 2 / 2,
                    p = e.sankeyColumn.offset(t, o),
                    c = Math.floor(k(p.absoluteTop, e.sankeyColumn.top(o) + p.relativeTop)) + h,
                    u = Math.floor(this.colDistance * t.column + r / 2) + C(t.options[i.inverted ? "offsetVertical" : "offsetHorizontal"] || 0, d) + h,
                    m = i.inverted ? i.plotSizeX - u : u;
                if (t.sum = l, l) {
                    t.shapeType = "roundedRect", t.nodeX = m, t.nodeY = c;
                    let e = m,
                        o = c,
                        r = t.options.width || s.width || d,
                        l = t.options.height || s.height || a,
                        h = f(C("object" == typeof n ? n.radius : n || 0, r), 0, a / 2);
                    i.inverted && (e = m - d, o = i.plotSizeY - c - a, r = t.options.height || s.height || d, l = t.options.width || s.width || a), t.dlOptions = S.getDLOptions({
                        level: this.mapOptionsToLevel[t.level],
                        optionsPoint: t.options
                    }), t.plotX = 1, t.plotY = 1, t.tooltipPos = i.inverted ? [i.plotSizeY - o - l / 2, i.plotSizeX - e - r / 2] : [e + r / 2, o + l / 2], t.shapeArgs = {
                        x: e,
                        y: o,
                        width: r,
                        height: l,
                        r: h,
                        display: t.hasShape() ? "" : "none"
                    }
                } else t.dlOptions = {
                    enabled: !1
                }
            }
        }
        return S.defaultOptions = y(d.defaultOptions, i), e.compose(o, S), m(S.prototype, {
            animate: h.prototype.animate,
            createNode: e.createNode,
            forceDL: !0,
            invertible: !0,
            isCartesian: !1,
            orderNodes: !0,
            noSharedTooltip: !0,
            pointArrayMap: ["from", "to", "weight"],
            pointClass: o,
            searchPoint: t.noop
        }), s.registerSeriesType("sankey", S), S
    }), o(e, "masters/modules/sankey.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
}); //# sourceMappingURL=sankey.js.map