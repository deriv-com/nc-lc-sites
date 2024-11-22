!
/**
 * Highcharts JS v11.4.8 (2024-08-29)
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

    function o(e, o, i, s) {
        e.hasOwnProperty(o) || (e[o] = s.apply(null, i), "function" == typeof CustomEvent && t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: o,
                module: e[o]
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
            pick: h
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

            function d(t) {
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
                    d = r && r[this.index];
                if (s.update.call(this, t, !this.isNode && e, o, i), this.isNode) {
                    let t = (n || []).reduce((t, e, o) => this.id === e.id ? o : t, -1),
                        i = a(n && n[t] || {}, r && r[this.index] || {});
                    r && (d ? r[this.index] = d : r.length = l), n ? t >= 0 ? n[t] = i : n.push(i) : this.series.options.nodes = [i], h(e, !0) && this.series.chart.redraw(o)
                }
            }
            t.compose = function(t, i) {
                let s = t.prototype,
                    n = i.prototype;
                return s.setNodeState = d, s.setState = d, s.update = p, n.destroy = e, n.setData = o, i
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
                return i.formatPrefix = "node", i.name = i.name || i.options.id || "", i.mass = h(i.options.mass, i.options.marker && i.options.marker.radius, this.options.marker && this.options.marker.radius, 4), i
            }, t.destroy = e, t.generatePoints = function() {
                let t = this.chart,
                    e = {};
                i.generatePoints.call(this), this.nodes || (this.nodes = []), this.colorCounter = 0, this.nodes.forEach(t => {
                    t.linksFrom.length = 0, t.linksTo.length = 0, t.level = t.options.level
                }), this.points.forEach(o => {
                    n(o.from) && (e[o.from] || (e[o.from] = this.createNode(o.from)), e[o.from].linksFrom.push(o), o.fromNode = e[o.from], t.styledMode ? o.colorIndex = h(o.options.colorIndex, e[o.from].colorIndex) : o.color = o.options.color || e[o.from].color), n(o.to) && (e[o.to] || (e[o.to] = this.createNode(o.to)), e[o.to].linksTo.push(o), o.toNode = e[o.to]), o.name = o.name || o.id
                }, this), this.nodeLookup = e
            }, t.setNodeState = d, t.updateNode = p
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
                    for (let h = 0; h < s.length; h++) {
                        let d = s[h].getSum(),
                            p = Math.max(d * e, n.options.minLinkWidth || 0),
                            c = t.options[n.chart.inverted ? "offsetHorizontal" : "offsetVertical"],
                            u = t.options.offset || 0;
                        if (a = d ? p + r : 0, s[h] === t) return {
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
                let i, s, n, r, a, h;
                let d = o.index,
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
                    return o && "brightness" === o.key && d && g ? t.parse(e).brighten(o.to * (d / g)).get() : e
                })(c), f.color)), h = l(i && i.options.colorIndex, s && s.colorIndex, r, u, o.colorIndex)), {
                    color: a,
                    colorIndex: h
                }
            },
            getLevelOptions: function(t) {
                let e, o, a, h, d, p;
                let c = {};
                if (n(t))
                    for (h = s(t.from) ? t.from : 1, p = t.levels, o = {}, e = n(t.defaults) ? t.defaults : {}, i(p) && (o = p.reduce((t, o) => {
                            let i, a, d;
                            return n(o) && s(o.level) && (a = l((d = r({}, o)).levelIsConstant, e.levelIsConstant), delete d.levelIsConstant, delete d.level, n(t[i = o.level + (a ? 0 : h - 1)]) ? r(!0, t[i], d) : t[i] = d), t
                        }, {})), d = s(t.to) ? t.to : 1, a = 0; a <= d; a++) c[a] = r({}, e, n(o[a]) ? o[a] : {});
                return c
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
                    h = i.points[e.i],
                    d = h && h.options || {},
                    p = [],
                    c = 0;
                e.levelDynamic = e.level - (a ? 0 : r.level), e.name = l(h && h.name, ""), e.visible = n === e.id || !0 === i.visible, "function" == typeof s && (e = s(e, i)), e.children.forEach((s, n) => {
                    let r = o({}, i);
                    o(r, {
                        index: n,
                        siblings: e.children.length,
                        visible: e.visible
                    }), s = t(s, r), p.push(s), s.visible && (c += s.val)
                });
                let u = l(d.value, c);
                return e.visible = u >= 0 && (c > 0 || e.visible), e.children = p, e.childrenTotal = c, e.isLeaf = e.visible && !c, e.val = u, e
            },
            updateRootId: function(t) {
                let e, o;
                return n(t) && (o = n(t.options) ? t.options : {}, e = l(t.rootNode, o.rootId, ""), n(t.userOptions) && (t.userOptions.rootId = e), t.rootNode = e), e
            }
        }
    }), o(e, "Extensions/TextPath.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            deg2rad: o
        } = t, {
            addEvent: i,
            merge: s,
            uniqueKey: n,
            defined: r,
            extend: l
        } = e;

        function a(t, e) {
            e = s(!0, {
                enabled: !0,
                attributes: {
                    dy: -5,
                    startOffset: "50%",
                    textAnchor: "middle"
                }
            }, e);
            let o = this.renderer.url,
                a = this.text || this,
                h = a.textPath,
                {
                    attributes: d,
                    enabled: p
                } = e;
            if (t = t || h && h.path, h && h.undo(), t && p) {
                let e = i(a, "afterModifyTree", e => {
                    if (t && p) {
                        let i = t.attr("id");
                        i || t.attr("id", i = n());
                        let s = {
                            x: 0,
                            y: 0
                        };
                        r(d.dx) && (s.dx = d.dx, delete d.dx), r(d.dy) && (s.dy = d.dy, delete d.dy), a.attr(s), this.attr({
                            transform: ""
                        }), this.box && (this.box = this.box.destroy());
                        let h = e.nodes.slice(0);
                        e.nodes.length = 0, e.nodes[0] = {
                            tagName: "textPath",
                            attributes: l(d, {
                                "text-anchor": d.textAnchor,
                                href: `${o}#${i}`
                            }),
                            children: h
                        }
                    }
                });
                a.textPath = {
                    path: t,
                    undo: e
                }
            } else a.attr({
                dx: 0,
                dy: 0
            }), delete a.textPath;
            return this.added && (a.textCache = "", this.renderer.buildText(a)), this
        }

        function h(t) {
            let e = t.bBox,
                i = this.element?.querySelector("textPath");
            if (i) {
                let t = [],
                    {
                        b: s,
                        h: n
                    } = this.renderer.fontMetrics(this.element),
                    r = n - s,
                    l = RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)', "g"),
                    a = i.innerHTML.replace(l, "").split(/<tspan class="highcharts-br"[^>]*>/),
                    h = a.length,
                    d = (t, e) => {
                        let {
                            x: n,
                            y: l
                        } = e, a = (i.getRotationOfChar(t) - 90) * o, h = Math.cos(a), d = Math.sin(a);
                        return [
                            [n - r * h, l - r * d],
                            [n + s * h, l + s * d]
                        ]
                    };
                for (let e = 0, o = 0; o < h; o++) {
                    let s = a[o].length;
                    for (let n = 0; n < s; n += 5) try {
                        let s = e + n + o,
                            [r, l] = d(s, i.getStartPositionOfChar(s));
                        0 === n ? (t.push(l), t.push(r)) : (0 === o && t.unshift(l), o === h - 1 && t.push(r))
                    } catch (t) {
                        break
                    }
                    e += s - 1;
                    try {
                        let s = e + o,
                            n = i.getEndPositionOfChar(s),
                            [r, l] = d(s, n);
                        t.unshift(l), t.unshift(r)
                    } catch (t) {
                        break
                    }
                }
                t.length && t.push(t[0].slice()), e.polygon = t
            }
            return e
        }

        function d(t) {
            let e = t.labelOptions,
                o = t.point,
                i = e[o.formatPrefix + "TextPath"] || e.textPath;
            i && !e.useHTML && (this.setTextPath(o.getDataLabelPath?.(this) || o.graphic, i), o.dataLabelPath && !i.enabled && (o.dataLabelPath = o.dataLabelPath.destroy()))
        }
        return {
            compose: function(t) {
                i(t, "afterGetBBox", h), i(t, "beforeAddingDataLabel", d);
                let e = t.prototype;
                e.setTextPath || (e.setTextPath = a)
            }
        }
    }), o(e, "Series/Sankey/SankeySeries.js", [e["Core/Globals.js"], e["Series/NodesComposition.js"], e["Series/Sankey/SankeyPoint.js"], e["Series/Sankey/SankeySeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Series/Sankey/SankeyColumnComposition.js"], e["Core/Color/Color.js"], e["Series/TreeUtilities.js"], e["Core/Utilities.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Extensions/TextPath.js"]], function(t, e, o, i, s, n, r, l, a, h, d) {
        let {
            column: p,
            line: c
        } = s.seriesTypes, {
            parse: u
        } = r, {
            getLevelOptions: f,
            getNodeWidth: m
        } = l, {
            clamp: g,
            crisp: y,
            extend: k,
            isObject: C,
            merge: b,
            pick: v,
            relativeLength: x,
            stableSort: S
        } = a;
        d.compose(h);
        class N extends p {
            static getDLOptions(t) {
                let e = C(t.optionsPoint) ? t.optionsPoint.dataLabels : {};
                return b({
                    style: {}
                }, C(t.level) ? t.level.dataLabels : {}, e)
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
                    S(this.nodes, (t, e) => t.level - e.level)
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
                    a = ["colorByPoint", "borderColor", "borderWidth", "linkOpacity", "opacity"].reduce((t, e) => (t[e] = v(l[e], n[e], s[e], o.options[e]), t), {}),
                    h = v(l.color, n.color, a.colorByPoint ? t.color : s.color);
                return t.isNode ? {
                    fill: h,
                    stroke: a.borderColor,
                    "stroke-width": a.borderWidth,
                    opacity: a.opacity
                } : {
                    fill: r.parse(h).setOpacity(a.linkOpacity).get()
                }
            }
            drawTracker() {
                p.prototype.drawTracker.call(this, this.points), p.prototype.drawTracker.call(this, this.nodes)
            }
            drawPoints() {
                p.prototype.drawPoints.call(this, this.points), p.prototype.drawPoints.call(this, this.nodes)
            }
            drawDataLabels() {
                p.prototype.drawDataLabels.call(this, this.points), p.prototype.drawDataLabels.call(this, this.nodes)
            }
            translate() {
                this.processedXData || this.processData(), this.generatePoints(), this.nodeColumns = this.createNodeColumns();
                let t = this,
                    e = this.chart,
                    o = this.options,
                    i = this.nodeColumns,
                    s = i.length;
                for (let n of (this.nodeWidth = m(this, s), this.nodePadding = this.getNodePadding(), this.translationFactor = i.reduce((e, o) => Math.min(e, o.sankeyColumn.getTranslationFactor(t)), 1 / 0), this.colDistance = (e.plotSizeX - this.nodeWidth - o.borderWidth) / Math.max(1, i.length - 1), t.mapOptionsToLevel = f({
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
                    a = v(t.linkColorMode, l.linkColorMode),
                    h = (s.inverted ? -this.colDistance : this.colDistance) * l.curveFactor,
                    d = o.nodeX,
                    p = i.nodeX,
                    c = t.outgoing,
                    f = Math.max(t.weight * r, this.options.minLinkWidth),
                    m = e(o, "linksFrom"),
                    g = e(i, "linksTo"),
                    y = this.nodeWidth,
                    k = p > d + y;
                if (s.inverted && (m = s.plotSizeY - m, g = (s.plotSizeY || 0) - g, y = -y, f = -f, k = d > p), t.shapeType = "path", t.linkBase = [m, m + f, g, g + f], k && "number" == typeof g) t.shapeArgs = {
                    d: [
                        ["M", d + y, m],
                        ["C", d + y + h, m, p - h, g, p, g],
                        ["L", p + (c ? y : 0), g + f / 2],
                        ["L", p, g + f],
                        ["C", p - h, g + f, d + y + h, m + f, d + y, m + f],
                        ["Z"]
                    ]
                };
                else if ("number" == typeof g) {
                    let e = s.plotHeight - m - f,
                        o = p - 20 - f,
                        i = p - 20,
                        n = d + y,
                        r = n + 20,
                        l = r + f,
                        a = m,
                        h = m + f,
                        c = h + 20,
                        u = c + e,
                        k = u + 20,
                        C = k + f,
                        b = g,
                        v = b + f,
                        x = v + 20,
                        S = h - .7 * f,
                        N = k + .7 * f,
                        P = v - .7 * f,
                        T = p - .7 * f,
                        L = n + .7 * f;
                    t.shapeArgs = {
                        d: [
                            ["M", n, a],
                            ["C", L, a, l, S, l, c],
                            ["L", l, u],
                            ["C", l, N, L, C, n, C],
                            ["L", p, C],
                            ["C", T, C, o, N, o, u],
                            ["L", o, x],
                            ["C", o, P, T, b, p, b],
                            ["L", p, v],
                            ["C", i, v, i, v, i, x],
                            ["L", i, u],
                            ["C", i, k, i, k, p, k],
                            ["L", n, k],
                            ["C", r, k, r, k, r, u],
                            ["L", r, c],
                            ["C", r, h, r, h, n, h],
                            ["Z"]
                        ]
                    }
                }
                if (t.dlBox = {
                        x: d + (p - d + y) / 2,
                        y: m + (g - m) / 2,
                        height: f,
                        width: 0
                    }, t.tooltipPos = s.inverted ? [s.plotSizeY - t.dlBox.y - f / 2, s.plotSizeX - t.dlBox.x] : [t.dlBox.x, t.dlBox.y + f / 2], t.y = t.plotY = 1, t.x = t.plotX = 1, !t.options.color) {
                    if ("from" === a) t.color = o.color;
                    else if ("to" === a) t.color = i.color;
                    else if ("gradient" === a) {
                        let e = u(o.color).get(),
                            s = u(i.color).get();
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
                    h = Math.round(this.nodeWidth),
                    d = e.sankeyColumn.offset(t, o),
                    p = y(v(d.absoluteTop, e.sankeyColumn.top(o) + d.relativeTop), r),
                    c = y(this.colDistance * t.column + r / 2, r) + x(t.options[i.inverted ? "offsetVertical" : "offsetHorizontal"] || 0, h),
                    u = i.inverted ? i.plotSizeX - c : c;
                if (t.sum = l, l) {
                    t.shapeType = "roundedRect", t.nodeX = u, t.nodeY = p;
                    let e = u,
                        o = p,
                        r = t.options.width || s.width || h,
                        l = t.options.height || s.height || a,
                        d = g(x("object" == typeof n ? n.radius : n || 0, r), 0, a / 2);
                    i.inverted && (e = u - h, o = i.plotSizeY - p - a, r = t.options.height || s.height || h, l = t.options.width || s.width || a), t.dlOptions = N.getDLOptions({
                        level: this.mapOptionsToLevel[t.level],
                        optionsPoint: t.options
                    }), t.plotX = 1, t.plotY = 1, t.tooltipPos = i.inverted ? [i.plotSizeY - o - l / 2, i.plotSizeX - e - r / 2] : [e + r / 2, o + l / 2], t.shapeArgs = {
                        x: e,
                        y: o,
                        width: r,
                        height: l,
                        r: d,
                        display: t.hasShape() ? "" : "none"
                    }
                } else t.dlOptions = {
                    enabled: !1
                }
            }
        }
        return N.defaultOptions = b(p.defaultOptions, i), e.compose(o, N), k(N.prototype, {
            animate: c.prototype.animate,
            createNode: e.createNode,
            forceDL: !0,
            invertible: !0,
            isCartesian: !1,
            orderNodes: !0,
            noSharedTooltip: !0,
            pointArrayMap: ["from", "to", "weight"],
            pointClass: o,
            searchPoint: t.noop
        }), s.registerSeriesType("sankey", N), N
    }), o(e, "masters/modules/sankey.src.js", [e["Core/Globals.js"]], function(t) {
        return t
    })
});