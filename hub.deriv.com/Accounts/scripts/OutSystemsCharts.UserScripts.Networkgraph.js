!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Force directed graph module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/networkgraph", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function i(t, e, i, s) {
        t.hasOwnProperty(e) || (t[e] = s.apply(null, i), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: e,
                module: t[e]
            }
        })))
    }
    i(e, "Series/DragNodesComposition.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e) {
        let {
            composed: i
        } = t, {
            addEvent: s,
            pushUnique: o
        } = e;

        function r() {
            let t, e, i;
            let o = this;
            o.container && (t = s(o.container, "mousedown", t => {
                let r = o.hoverPoint;
                r && r.series && r.series.hasDraggableNodes && r.series.options.draggable && (r.series.onMouseDown(r, t), e = s(o.container, "mousemove", t => r && r.series && r.series.onMouseMove(r, t)), i = s(o.container.ownerDocument, "mouseup", t => (e(), i(), r && r.series && r.series.onMouseUp(r, t))))
            })), s(o, "destroy", function() {
                t()
            })
        }
        return {
            compose: function(t) {
                o(i, "DragNodes") && s(t, "load", r)
            },
            onMouseDown: function(t, e) {
                let i = this.chart.pointer?.normalize(e) || e;
                t.fixedPosition = {
                    chartX: i.chartX,
                    chartY: i.chartY,
                    plotX: t.plotX,
                    plotY: t.plotY
                }, t.inDragMode = !0
            },
            onMouseMove: function(t, e) {
                if (t.fixedPosition && t.inDragMode) {
                    let i, s;
                    let o = this.chart,
                        r = o.pointer?.normalize(e) || e,
                        n = t.fixedPosition.chartX - r.chartX,
                        a = t.fixedPosition.chartY - r.chartY,
                        h = o.graphLayoutsLookup;
                    (Math.abs(n) > 5 || Math.abs(a) > 5) && (i = t.fixedPosition.plotX - n, s = t.fixedPosition.plotY - a, o.isInsidePlot(i, s) && (t.plotX = i, t.plotY = s, t.hasDragged = !0, this.redrawHalo(t), h.forEach(t => {
                        t.restartSimulation()
                    })))
                }
            },
            onMouseUp: function(t) {
                t.fixedPosition && (t.hasDragged && (this.layout.enableSimulation ? this.layout.start() : this.chart.redraw()), t.inDragMode = t.hasDragged = !1, this.options.fixedDraggable || delete t.fixedPosition)
            },
            redrawHalo: function(t) {
                t && this.halo && this.halo.attr({
                    d: t.haloPath(this.options.states.hover.halo.size)
                })
            }
        }
    }), i(e, "Series/GraphLayoutComposition.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e, i) {
        let {
            setAnimation: s
        } = t, {
            composed: o
        } = e, {
            addEvent: r,
            pushUnique: n
        } = i;

        function a() {
            this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach(t => {
                t.updateSimulation()
            }), this.redraw())
        }

        function h() {
            this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach(t => {
                t.updateSimulation(!1)
            }), this.redraw())
        }

        function l() {
            this.graphLayoutsLookup && this.graphLayoutsLookup.forEach(t => {
                t.stop()
            })
        }

        function d() {
            let t, e = !1,
                i = i => {
                    i.maxIterations-- && isFinite(i.temperature) && !i.isStable() && !i.enableSimulation && (i.beforeStep && i.beforeStep(), i.step(), t = !1, e = !0)
                };
            if (this.graphLayoutsLookup) {
                for (s(!1, this), this.graphLayoutsLookup.forEach(t => t.start()); !t;) t = !0, this.graphLayoutsLookup.forEach(i);
                e && this.series.forEach(t => {
                    t && t.layout && t.render()
                })
            }
        }
        return {
            compose: function(t) {
                n(o, "GraphLayout") && (r(t, "afterPrint", a), r(t, "beforePrint", h), r(t, "predraw", l), r(t, "render", d))
            },
            integrations: {},
            layouts: {}
        }
    }), i(e, "Series/NodesComposition.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
        var i;
        let {
            series: {
                prototype: s,
                prototype: {
                    pointClass: {
                        prototype: o
                    }
                }
            }
        } = t, {
            defined: r,
            extend: n,
            find: a,
            merge: h,
            pick: l
        } = e;
        return function(t) {
            function e() {
                return this.data = [].concat(this.points || [], this.nodes), s.destroy.apply(this, arguments)
            }

            function i() {
                this.nodes && (this.nodes.forEach(t => {
                    t.destroy()
                }), this.nodes.length = 0), s.setData.apply(this, arguments)
            }

            function d(t) {
                let e = arguments,
                    i = this.isNode ? this.linksTo.concat(this.linksFrom) : [this.fromNode, this.toNode];
                "select" !== t && i.forEach(t => {
                    t && t.series && (o.setState.apply(t, e), !t.isNode && (t.fromNode.graphic && o.setState.apply(t.fromNode, e), t.toNode && t.toNode.graphic && o.setState.apply(t.toNode, e)))
                }), o.setState.apply(this, e)
            }

            function p(t, e, i, s) {
                let r = this.series.options.nodes,
                    n = this.series.options.data,
                    a = n && n.length || 0,
                    d = n && n[this.index];
                if (o.update.call(this, t, !this.isNode && e, i, s), this.isNode) {
                    let t = (r || []).reduce((t, e, i) => this.id === e.id ? i : t, -1),
                        s = h(r && r[t] || {}, n && n[this.index] || {});
                    n && (d ? n[this.index] = d : n.length = a), r ? t >= 0 ? r[t] = s : r.push(s) : this.series.options.nodes = [s], l(e, !0) && this.series.chart.redraw(i)
                }
            }
            t.compose = function(t, s) {
                let o = t.prototype,
                    r = s.prototype;
                return o.setNodeState = d, o.setState = d, o.update = p, r.destroy = e, r.setData = i, s
            }, t.createNode = function(t) {
                let e = this.pointClass,
                    i = (t, e) => a(t, t => t.id === e),
                    s = i(this.nodes, t),
                    o;
                if (!s) {
                    o = this.options.nodes && i(this.options.nodes, t);
                    let r = new e(this, n({
                        className: "highcharts-node",
                        isNode: !0,
                        id: t,
                        y: 1
                    }, o));
                    r.linksTo = [], r.linksFrom = [], r.getSum = function() {
                        let t = 0,
                            e = 0;
                        return r.linksTo.forEach(e => {
                            t += e.weight || 0
                        }), r.linksFrom.forEach(t => {
                            e += t.weight || 0
                        }), Math.max(t, e)
                    }, r.offset = function(t, e) {
                        let i = 0;
                        for (let s = 0; s < r[e].length; s++) {
                            if (r[e][s] === t) return i;
                            i += r[e][s].weight
                        }
                    }, r.hasShape = function() {
                        let t = 0;
                        return r.linksTo.forEach(e => {
                            e.outgoing && t++
                        }), !r.linksTo.length || t !== r.linksTo.length
                    }, r.index = this.nodes.push(r) - 1, s = r
                }
                return s.formatPrefix = "node", s.name = s.name || s.options.id || "", s.mass = l(s.options.mass, s.options.marker && s.options.marker.radius, this.options.marker && this.options.marker.radius, 4), s
            }, t.destroy = e, t.generatePoints = function() {
                let t = this.chart,
                    e = {};
                s.generatePoints.call(this), this.nodes || (this.nodes = []), this.colorCounter = 0, this.nodes.forEach(t => {
                    t.linksFrom.length = 0, t.linksTo.length = 0, t.level = t.options.level
                }), this.points.forEach(i => {
                    r(i.from) && (e[i.from] || (e[i.from] = this.createNode(i.from)), e[i.from].linksFrom.push(i), i.fromNode = e[i.from], t.styledMode ? i.colorIndex = l(i.options.colorIndex, e[i.from].colorIndex) : i.color = i.options.color || e[i.from].color), r(i.to) && (e[i.to] || (e[i.to] = this.createNode(i.to)), e[i.to].linksTo.push(i), i.toNode = e[i.to]), i.name = i.name || i.id
                }, this), this.nodeLookup = e
            }, t.setNodeState = d, t.updateNode = p
        }(i || (i = {})), i
    }), i(e, "Series/Networkgraph/NetworkgraphPoint.js", [e["Series/NodesComposition.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i) {
        let {
            series: {
                prototype: s,
                prototype: {
                    pointClass: o
                }
            }
        } = e, {
            addEvent: r,
            css: n,
            defined: a,
            extend: h,
            pick: l
        } = i;
        class d extends o {
            destroy() {
                return this.isNode && this.linksFrom.concat(this.linksTo).forEach(function(t) {
                    t.destroyElements && t.destroyElements()
                }), this.series.layout.removeElementFromCollection(this, this.series.layout[this.isNode ? "nodes" : "links"]), o.prototype.destroy.apply(this, arguments)
            }
            getDegree() {
                let t = this.isNode ? this.linksFrom.length + this.linksTo.length : 0;
                return 0 === t ? 1 : t
            }
            getLinkAttributes() {
                let t = this.series.options.link,
                    e = this.options;
                return {
                    "stroke-width": l(e.width, t.width),
                    stroke: e.color || t.color,
                    dashstyle: e.dashStyle || t.dashStyle,
                    opacity: l(e.opacity, t.opacity, 1)
                }
            }
            getLinkPath() {
                let t = this.fromNode,
                    e = this.toNode;
                return t.plotX > e.plotX && (t = this.toNode, e = this.fromNode), [
                    ["M", t.plotX || 0, t.plotY || 0],
                    ["L", e.plotX || 0, e.plotY || 0]
                ]
            }
            getMass() {
                let t = this.fromNode.mass,
                    e = this.toNode.mass,
                    i = t + e;
                return {
                    fromNode: 1 - t / i,
                    toNode: 1 - e / i
                }
            }
            constructor(t, e, i) {
                super(t, e, i), this.series.options.draggable && !this.series.chart.styledMode && (r(this, "mouseOver", function() {
                    n(this.series.chart.container, {
                        cursor: "move"
                    })
                }), r(this, "mouseOut", function() {
                    n(this.series.chart.container, {
                        cursor: "default"
                    })
                }))
            }
            isValid() {
                return !this.isNode || a(this.id)
            }
            redrawLink() {
                let t = this.getLinkPath(),
                    e;
                if (this.graphic) {
                    this.shapeArgs = {
                        d: t
                    }, this.series.chart.styledMode || (e = this.series.pointAttribs(this), this.graphic.attr(e), (this.dataLabels || []).forEach(function(t) {
                        t && t.attr({
                            opacity: e.opacity
                        })
                    })), this.graphic.animate(this.shapeArgs);
                    let i = t[0],
                        s = t[1];
                    "M" === i[0] && "L" === s[0] && (this.plotX = (i[1] + s[1]) / 2, this.plotY = (i[2] + s[2]) / 2)
                }
            }
            remove(t, e) {
                let i = this.series,
                    o = i.options.nodes || [],
                    r, n = o.length;
                if (this.isNode) {
                    for (i.points = [], [].concat(this.linksFrom).concat(this.linksTo).forEach(function(t) {
                            (r = t.fromNode.linksFrom.indexOf(t)) > -1 && t.fromNode.linksFrom.splice(r, 1), (r = t.toNode.linksTo.indexOf(t)) > -1 && t.toNode.linksTo.splice(r, 1), s.removePoint.call(i, i.data.indexOf(t), !1, !1)
                        }), i.points = i.data.slice(), i.nodes.splice(i.nodes.indexOf(this), 1); n--;)
                        if (o[n].id === this.options.id) {
                            i.options.nodes.splice(n, 1);
                            break
                        } this && this.destroy(), i.isDirty = !0, i.isDirtyData = !0, t && i.chart.redraw(t)
                } else i.removePoint(i.data.indexOf(this), t, e)
            }
            renderLink() {
                let t;
                this.graphic || (this.graphic = this.series.chart.renderer.path(this.getLinkPath()).addClass(this.getClassName(), !0).add(this.series.group), this.series.chart.styledMode || (t = this.series.pointAttribs(this), this.graphic.attr(t), (this.dataLabels || []).forEach(function(e) {
                    e && e.attr({
                        opacity: t.opacity
                    })
                })))
            }
        }
        return h(d.prototype, {
            setState: t.setNodeState
        }), d
    }), i(e, "Series/Networkgraph/NetworkgraphSeriesDefaults.js", [], function() {
        return {
            stickyTracking: !1,
            inactiveOtherPoints: !0,
            marker: {
                enabled: !0,
                states: {
                    inactive: {
                        opacity: .3,
                        animation: {
                            duration: 50
                        }
                    }
                }
            },
            states: {
                inactive: {
                    linkOpacity: .3,
                    animation: {
                        duration: 50
                    }
                }
            },
            dataLabels: {
                formatter: function() {
                    return this.key
                },
                linkFormatter: function() {
                    return this.point.fromNode.name + "<br>" + this.point.toNode.name
                },
                linkTextPath: {
                    enabled: !0
                },
                textPath: {
                    enabled: !1
                },
                style: {
                    transition: "opacity 2000ms"
                },
                defer: !0,
                animation: {
                    defer: 1e3
                }
            },
            link: {
                color: "rgba(100, 100, 100, 0.5)",
                width: 1
            },
            draggable: !0,
            layoutAlgorithm: {
                initialPositions: "circle",
                initialPositionRadius: 1,
                enableSimulation: !1,
                theta: .5,
                maxSpeed: 10,
                approximation: "none",
                type: "reingold-fruchterman",
                integration: "euler",
                maxIterations: 1e3,
                gravitationalConstant: .0625,
                friction: -.981
            },
            showInLegend: !1
        }
    }), i(e, "Series/Networkgraph/EulerIntegration.js", [], function() {
        return {
            attractive: function(t, e, i, s) {
                let o = t.getMass(),
                    r = i.x / s * e,
                    n = i.y / s * e;
                t.fromNode.fixedPosition || (t.fromNode.dispX -= r * o.fromNode / t.fromNode.degree, t.fromNode.dispY -= n * o.fromNode / t.fromNode.degree), t.toNode.fixedPosition || (t.toNode.dispX += r * o.toNode / t.toNode.degree, t.toNode.dispY += n * o.toNode / t.toNode.degree)
            },
            attractiveForceFunction: function(t, e) {
                return t * t / e
            },
            barycenter: function() {
                let t = this.options.gravitationalConstant,
                    e = this.barycenter.xFactor,
                    i = this.barycenter.yFactor;
                this.nodes.forEach(function(s) {
                    if (!s.fixedPosition) {
                        let o = s.getDegree(),
                            r = o * (1 + o / 2);
                        s.dispX += (e - s.plotX) * t * r / s.degree, s.dispY += (i - s.plotY) * t * r / s.degree
                    }
                })
            },
            getK: function(t) {
                return Math.pow(t.box.width * t.box.height / t.nodes.length, .3)
            },
            integrate: function(t, e) {
                let i;
                e.dispX += e.dispX * t.options.friction, e.dispY += e.dispY * t.options.friction, 0 !== (i = e.temperature = t.vectorLength({
                    x: e.dispX,
                    y: e.dispY
                })) && (e.plotX += e.dispX / i * Math.min(Math.abs(e.dispX), t.temperature), e.plotY += e.dispY / i * Math.min(Math.abs(e.dispY), t.temperature))
            },
            repulsive: function(t, e, i, s) {
                t.dispX += i.x / s * e / t.degree, t.dispY += i.y / s * e / t.degree
            },
            repulsiveForceFunction: function(t, e) {
                return e * e / t
            }
        }
    }), i(e, "Series/Networkgraph/QuadTreeNode.js", [], function() {
        class t {
            constructor(t) {
                this.body = !1, this.isEmpty = !1, this.isInternal = !1, this.nodes = [], this.box = t, this.boxSize = Math.min(t.width, t.height)
            }
            divideBox() {
                let e = this.box.width / 2,
                    i = this.box.height / 2;
                this.nodes[0] = new t({
                    left: this.box.left,
                    top: this.box.top,
                    width: e,
                    height: i
                }), this.nodes[1] = new t({
                    left: this.box.left + e,
                    top: this.box.top,
                    width: e,
                    height: i
                }), this.nodes[2] = new t({
                    left: this.box.left + e,
                    top: this.box.top + i,
                    width: e,
                    height: i
                }), this.nodes[3] = new t({
                    left: this.box.left,
                    top: this.box.top + i,
                    width: e,
                    height: i
                })
            }
            getBoxPosition(t) {
                let e = t.plotX < this.box.left + this.box.width / 2,
                    i = t.plotY < this.box.top + this.box.height / 2;
                return e ? i ? 0 : 3 : i ? 1 : 2
            }
            insert(e, i) {
                let s;
                this.isInternal ? this.nodes[this.getBoxPosition(e)].insert(e, i - 1) : (this.isEmpty = !1, this.body ? i ? (this.isInternal = !0, this.divideBox(), !0 !== this.body && (this.nodes[this.getBoxPosition(this.body)].insert(this.body, i - 1), this.body = !0), this.nodes[this.getBoxPosition(e)].insert(e, i - 1)) : ((s = new t({
                    top: e.plotX || NaN,
                    left: e.plotY || NaN,
                    width: .1,
                    height: .1
                })).body = e, s.isInternal = !1, this.nodes.push(s)) : (this.isInternal = !1, this.body = e))
            }
            updateMassAndCenter() {
                let t = 0,
                    e = 0,
                    i = 0;
                if (this.isInternal) {
                    for (let s of this.nodes) s.isEmpty || (t += s.mass, e += s.plotX * s.mass, i += s.plotY * s.mass);
                    e /= t, i /= t
                } else this.body && (t = this.body.mass, e = this.body.plotX, i = this.body.plotY);
                this.mass = t, this.plotX = e, this.plotY = i
            }
        }
        return t
    }), i(e, "Series/Networkgraph/QuadTree.js", [e["Series/Networkgraph/QuadTreeNode.js"]], function(t) {
        return class {
            constructor(e, i, s, o) {
                this.box = {
                    left: e,
                    top: i,
                    width: s,
                    height: o
                }, this.maxDepth = 25, this.root = new t(this.box), this.root.isInternal = !0, this.root.isRoot = !0, this.root.divideBox()
            }
            calculateMassAndCenter() {
                this.visitNodeRecursive(null, null, function(t) {
                    t.updateMassAndCenter()
                })
            }
            insertNodes(t) {
                for (let e of t) this.root.insert(e, this.maxDepth)
            }
            visitNodeRecursive(t, e, i) {
                let s;
                if (t || (t = this.root), t === this.root && e && (s = e(t)), !1 !== s) {
                    for (let o of t.nodes) {
                        if (o.isInternal) {
                            if (e && (s = e(o)), !1 === s) continue;
                            this.visitNodeRecursive(o, e, i)
                        } else o.body && e && e(o.body);
                        i && i(o)
                    }
                    t === this.root && i && i(t)
                }
            }
        }
    }), i(e, "Series/Networkgraph/VerletIntegration.js", [], function() {
        return {
            attractive: function(t, e, i) {
                let s = t.getMass(),
                    o = -i.x * e * this.diffTemperature,
                    r = -i.y * e * this.diffTemperature;
                t.fromNode.fixedPosition || (t.fromNode.plotX -= o * s.fromNode / t.fromNode.degree, t.fromNode.plotY -= r * s.fromNode / t.fromNode.degree), t.toNode.fixedPosition || (t.toNode.plotX += o * s.toNode / t.toNode.degree, t.toNode.plotY += r * s.toNode / t.toNode.degree)
            },
            attractiveForceFunction: function(t, e) {
                return (e - t) / t
            },
            barycenter: function() {
                let t = this.options.gravitationalConstant,
                    e = this.barycenter.xFactor,
                    i = this.barycenter.yFactor;
                e = (e - (this.box.left + this.box.width) / 2) * t, i = (i - (this.box.top + this.box.height) / 2) * t, this.nodes.forEach(function(t) {
                    t.fixedPosition || (t.plotX -= e / t.mass / t.degree, t.plotY -= i / t.mass / t.degree)
                })
            },
            getK: function(t) {
                return Math.pow(t.box.width * t.box.height / t.nodes.length, .5)
            },
            integrate: function(t, e) {
                let i = -t.options.friction,
                    s = t.options.maxSpeed,
                    o = e.prevX,
                    r = e.prevY,
                    n = (e.plotX + e.dispX - o) * i,
                    a = (e.plotY + e.dispY - r) * i,
                    h = Math.abs,
                    l = h(n) / (n || 1),
                    d = h(a) / (a || 1);
                n = l * Math.min(s, Math.abs(n)), a = d * Math.min(s, Math.abs(a)), e.prevX = e.plotX + e.dispX, e.prevY = e.plotY + e.dispY, e.plotX += n, e.plotY += a, e.temperature = t.vectorLength({
                    x: n,
                    y: a
                })
            },
            repulsive: function(t, e, i) {
                let s = e * this.diffTemperature / t.mass / t.degree;
                t.fixedPosition || (t.plotX += i.x * s, t.plotY += i.y * s)
            },
            repulsiveForceFunction: function(t, e) {
                return (e - t) / t * (e > t ? 1 : 0)
            }
        }
    }), i(e, "Series/Networkgraph/ReingoldFruchtermanLayout.js", [e["Series/Networkgraph/EulerIntegration.js"], e["Core/Globals.js"], e["Series/GraphLayoutComposition.js"], e["Series/Networkgraph/QuadTree.js"], e["Core/Utilities.js"], e["Series/Networkgraph/VerletIntegration.js"]], function(t, e, i, s, o, r) {
        let {
            win: n
        } = e, {
            clamp: a,
            defined: h,
            isFunction: l,
            fireEvent: d,
            pick: p
        } = o;
        class u {
            constructor() {
                this.box = {}, this.currentStep = 0, this.initialRendering = !0, this.links = [], this.nodes = [], this.series = [], this.simulation = !1
            }
            static compose(e) {
                i.compose(e), i.integrations.euler = t, i.integrations.verlet = r, i.layouts["reingold-fruchterman"] = u
            }
            init(t) {
                this.options = t, this.nodes = [], this.links = [], this.series = [], this.box = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }, this.setInitialRendering(!0), this.integration = i.integrations[t.integration], this.enableSimulation = t.enableSimulation, this.attractiveForce = p(t.attractiveForce, this.integration.attractiveForceFunction), this.repulsiveForce = p(t.repulsiveForce, this.integration.repulsiveForceFunction), this.approximation = t.approximation
            }
            updateSimulation(t) {
                this.enableSimulation = p(t, this.options.enableSimulation)
            }
            start() {
                let t = this.series,
                    e = this.options;
                this.currentStep = 0, this.forces = t[0] && t[0].forces || [], this.chart = t[0] && t[0].chart, this.initialRendering && (this.initPositions(), t.forEach(function(t) {
                    t.finishedAnimating = !0, t.render()
                })), this.setK(), this.resetSimulation(e), this.enableSimulation && this.step()
            }
            step() {
                let t = this.series;
                for (let t of (this.currentStep++, "barnes-hut" === this.approximation && (this.createQuadTree(), this.quadTree.calculateMassAndCenter()), this.forces || [])) this[t + "Forces"](this.temperature);
                if (this.applyLimits(), this.temperature = this.coolDown(this.startTemperature, this.diffTemperature, this.currentStep), this.prevSystemTemperature = this.systemTemperature, this.systemTemperature = this.getSystemTemperature(), this.enableSimulation) {
                    for (let e of t) e.chart && e.render();
                    this.maxIterations-- && isFinite(this.temperature) && !this.isStable() ? (this.simulation && n.cancelAnimationFrame(this.simulation), this.simulation = n.requestAnimationFrame(() => this.step())) : (this.simulation = !1, this.series.forEach(t => {
                        d(t, "afterSimulation")
                    }))
                }
            }
            stop() {
                this.simulation && n.cancelAnimationFrame(this.simulation)
            }
            setArea(t, e, i, s) {
                this.box = {
                    left: t,
                    top: e,
                    width: i,
                    height: s
                }
            }
            setK() {
                this.k = this.options.linkLength || this.integration.getK(this)
            }
            addElementsToCollection(t, e) {
                for (let i of t) - 1 === e.indexOf(i) && e.push(i)
            }
            removeElementFromCollection(t, e) {
                let i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
            }
            clear() {
                this.nodes.length = 0, this.links.length = 0, this.series.length = 0, this.resetSimulation()
            }
            resetSimulation() {
                this.forcedStop = !1, this.systemTemperature = 0, this.setMaxIterations(), this.setTemperature(), this.setDiffTemperature()
            }
            restartSimulation() {
                this.simulation ? this.resetSimulation() : (this.setInitialRendering(!1), this.enableSimulation ? this.start() : this.setMaxIterations(1), this.chart && this.chart.redraw(), this.setInitialRendering(!0))
            }
            setMaxIterations(t) {
                this.maxIterations = p(t, this.options.maxIterations)
            }
            setTemperature() {
                this.temperature = this.startTemperature = Math.sqrt(this.nodes.length)
            }
            setDiffTemperature() {
                this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1)
            }
            setInitialRendering(t) {
                this.initialRendering = t
            }
            createQuadTree() {
                this.quadTree = new s(this.box.left, this.box.top, this.box.width, this.box.height), this.quadTree.insertNodes(this.nodes)
            }
            initPositions() {
                let t = this.options.initialPositions;
                if (l(t))
                    for (let e of (t.call(this), this.nodes)) h(e.prevX) || (e.prevX = e.plotX), h(e.prevY) || (e.prevY = e.plotY), e.dispX = 0, e.dispY = 0;
                else "circle" === t ? this.setCircularPositions() : this.setRandomPositions()
            }
            setCircularPositions() {
                let t;
                let e = this.box,
                    i = this.nodes,
                    s = 2 * Math.PI / (i.length + 1),
                    o = i.filter(function(t) {
                        return 0 === t.linksTo.length
                    }),
                    r = {},
                    n = this.options.initialPositionRadius,
                    a = t => {
                        for (let e of t.linksFrom || []) r[e.toNode.id] || (r[e.toNode.id] = !0, h.push(e.toNode), a(e.toNode))
                    },
                    h = [];
                for (let t of o) h.push(t), a(t);
                if (h.length)
                    for (let t of i) - 1 === h.indexOf(t) && h.push(t);
                else h = i;
                for (let i = 0, o = h.length; i < o; ++i)(t = h[i]).plotX = t.prevX = p(t.plotX, e.width / 2 + n * Math.cos(i * s)), t.plotY = t.prevY = p(t.plotY, e.height / 2 + n * Math.sin(i * s)), t.dispX = 0, t.dispY = 0
            }
            setRandomPositions() {
                let t;
                let e = this.box,
                    i = this.nodes,
                    s = i.length + 1,
                    o = t => {
                        let e = t * t / Math.PI;
                        return e - Math.floor(e)
                    };
                for (let r = 0, n = i.length; r < n; ++r)(t = i[r]).plotX = t.prevX = p(t.plotX, e.width * o(r)), t.plotY = t.prevY = p(t.plotY, e.height * o(s + r)), t.dispX = 0, t.dispY = 0
            }
            force(t, ...e) {
                this.integration[t].apply(this, e)
            }
            barycenterForces() {
                this.getBarycenter(), this.force("barycenter")
            }
            getBarycenter() {
                let t = 0,
                    e = 0,
                    i = 0;
                for (let s of this.nodes) e += s.plotX * s.mass, i += s.plotY * s.mass, t += s.mass;
                return this.barycenter = {
                    x: e,
                    y: i,
                    xFactor: e / t,
                    yFactor: i / t
                }, this.barycenter
            }
            barnesHutApproximation(t, e) {
                let i, s;
                let o = this.getDistXY(t, e),
                    r = this.vectorLength(o);
                return t !== e && 0 !== r && (e.isInternal ? e.boxSize / r < this.options.theta && 0 !== r ? (s = this.repulsiveForce(r, this.k), this.force("repulsive", t, s * e.mass, o, r), i = !1) : i = !0 : (s = this.repulsiveForce(r, this.k), this.force("repulsive", t, s * e.mass, o, r))), i
            }
            repulsiveForces() {
                if ("barnes-hut" === this.approximation)
                    for (let t of this.nodes) this.quadTree.visitNodeRecursive(null, e => this.barnesHutApproximation(t, e));
                else {
                    let t, e, i;
                    for (let s of this.nodes)
                        for (let o of this.nodes) s === o || s.fixedPosition || (i = this.getDistXY(s, o), 0 !== (e = this.vectorLength(i)) && (t = this.repulsiveForce(e, this.k), this.force("repulsive", s, t * o.mass, i, e)))
                }
            }
            attractiveForces() {
                let t, e, i;
                for (let s of this.links) s.fromNode && s.toNode && (t = this.getDistXY(s.fromNode, s.toNode), 0 !== (e = this.vectorLength(t)) && (i = this.attractiveForce(e, this.k), this.force("attractive", s, i, t, e)))
            }
            applyLimits() {
                for (let t of this.nodes) {
                    if (t.fixedPosition) return;
                    this.integration.integrate(this, t), this.applyLimitBox(t, this.box), t.dispX = 0, t.dispY = 0
                }
            }
            applyLimitBox(t, e) {
                let i = t.radius;
                t.plotX = a(t.plotX, e.left + i, e.width - i), t.plotY = a(t.plotY, e.top + i, e.height - i)
            }
            coolDown(t, e, i) {
                return t - e * i
            }
            isStable() {
                return 1e-5 > Math.abs(this.systemTemperature - this.prevSystemTemperature) || this.temperature <= 0
            }
            getSystemTemperature() {
                let t = 0;
                for (let e of this.nodes) t += e.temperature;
                return t
            }
            vectorLength(t) {
                return Math.sqrt(t.x * t.x + t.y * t.y)
            }
            getDistR(t, e) {
                let i = this.getDistXY(t, e);
                return this.vectorLength(i)
            }
            getDistXY(t, e) {
                let i = t.plotX - e.plotX,
                    s = t.plotY - e.plotY;
                return {
                    x: i,
                    y: s,
                    absX: Math.abs(i),
                    absY: Math.abs(s)
                }
            }
        }
        return u
    }), i(e, "Series/SimulationSeriesUtilities.js", [e["Core/Utilities.js"], e["Core/Animation/AnimationUtilities.js"]], function(t, e) {
        let {
            merge: i,
            syncTimeout: s
        } = t, {
            animObject: o
        } = e;
        return {
            initDataLabels: function() {
                let t = this.options.dataLabels;
                if (!this.dataLabelsGroup) {
                    let e = this.initDataLabelsGroup();
                    return !this.chart.styledMode && t?.style && e.css(t.style), e.attr({
                        opacity: 0
                    }), this.visible && e.show(), e
                }
                return this.dataLabelsGroup.attr(i({
                    opacity: 1
                }, this.getPlotBox("data-labels"))), this.dataLabelsGroup
            },
            initDataLabelsDefer: function() {
                let t = this.options.dataLabels;
                t?.defer && this.options.layoutAlgorithm?.enableSimulation ? s(() => {
                    this.deferDataLabels = !1
                }, t ? o(t.animation).defer : 0) : this.deferDataLabels = !1
            }
        }
    }), i(e, "Series/Networkgraph/NetworkgraphSeries.js", [e["Series/DragNodesComposition.js"], e["Series/GraphLayoutComposition.js"], e["Core/Globals.js"], e["Series/Networkgraph/NetworkgraphPoint.js"], e["Series/Networkgraph/NetworkgraphSeriesDefaults.js"], e["Series/NodesComposition.js"], e["Series/Networkgraph/ReingoldFruchtermanLayout.js"], e["Core/Series/SeriesRegistry.js"], e["Series/SimulationSeriesUtilities.js"], e["Core/Utilities.js"]], function(t, e, i, s, o, r, n, a, h, l) {
        let {
            noop: d
        } = i, {
            series: p,
            seriesTypes: {
                column: {
                    prototype: u
                },
                line: {
                    prototype: c
                }
            }
        } = a, {
            initDataLabels: f,
            initDataLabelsDefer: m
        } = h, {
            addEvent: g,
            defined: y,
            extend: b,
            merge: x,
            pick: N
        } = l;
        class k extends p {
            constructor() {
                super(...arguments), this.deferDataLabels = !0
            }
            static compose(e) {
                t.compose(e), n.compose(e)
            }
            deferLayout() {
                let t = this.options.layoutAlgorithm,
                    i = this.chart.graphLayoutsStorage,
                    s = this.chart.graphLayoutsLookup,
                    o = this.chart.options.chart,
                    r;
                this.visible && (i || (this.chart.graphLayoutsStorage = i = {}, this.chart.graphLayoutsLookup = s = []), (r = i[t.type]) || (t.enableSimulation = y(o.forExport) ? !o.forExport : t.enableSimulation, i[t.type] = r = new e.layouts[t.type], r.init(t), s.splice(r.index, 0, r)), this.layout = r, r.setArea(0, 0, this.chart.plotWidth, this.chart.plotHeight), r.addElementsToCollection([this], r.series), r.addElementsToCollection(this.nodes, r.nodes), r.addElementsToCollection(this.points, r.links))
            }
            destroy() {
                this.layout && this.layout.removeElementFromCollection(this, this.layout.series), r.destroy.call(this)
            }
            drawDataLabels() {
                let t;
                if (this.deferDataLabels) return;
                let e = this.options.dataLabels;
                e?.textPath && (t = e.textPath), p.prototype.drawDataLabels.call(this, this.nodes), e?.linkTextPath && (e.textPath = e.linkTextPath), p.prototype.drawDataLabels.call(this, this.data), e?.textPath && (e.textPath = t)
            }
            generatePoints() {
                let t, e;
                for (r.generatePoints.apply(this, arguments), this.options.nodes && this.options.nodes.forEach(function(t) {
                        this.nodeLookup[t.id] || (this.nodeLookup[t.id] = this.createNode(t.id))
                    }, this), e = this.nodes.length - 1; e >= 0; e--)(t = this.nodes[e]).degree = t.getDegree(), t.radius = N(t.marker && t.marker.radius, this.options.marker && this.options.marker.radius, 0), this.nodeLookup[t.id] || t.remove();
                this.data.forEach(function(t) {
                    t.formatPrefix = "link"
                }), this.indexateNodes()
            }
            getPointsCollection() {
                return this.nodes || []
            }
            indexateNodes() {
                this.nodes.forEach(function(t, e) {
                    t.index = e
                })
            }
            init(t, e) {
                return super.init(t, e), m.call(this), g(this, "updatedData", () => {
                    this.layout && this.layout.stop()
                }), g(this, "afterUpdate", () => {
                    this.nodes.forEach(t => {
                        t && t.series && t.resolveColor()
                    })
                }), g(this, "afterSimulation", function() {
                    this.deferDataLabels = !1, this.drawDataLabels()
                }), this
            }
            markerAttribs(t, e) {
                let i = p.prototype.markerAttribs.call(this, t, e);
                return y(t.plotY) || (i.y = 0), i.x = (t.plotX || 0) - (i.width || 0) / 2, i
            }
            pointAttribs(t, e) {
                let i = e || t && t.state || "normal",
                    s = p.prototype.pointAttribs.call(this, t, i),
                    o = this.options.states[i];
                return t && !t.isNode && (s = t.getLinkAttributes(), o && (s = {
                    stroke: o.linkColor || s.stroke,
                    dashstyle: o.linkDashStyle || s.dashstyle,
                    opacity: N(o.linkOpacity, s.opacity),
                    "stroke-width": o.linkColor || s["stroke-width"]
                })), s
            }
            render() {
                let t = this.points,
                    e = this.chart.hoverPoint,
                    i = [];
                this.points = this.nodes, c.render.call(this), this.points = t, t.forEach(function(t) {
                    t.fromNode && t.toNode && (t.renderLink(), t.redrawLink())
                }), e && e.series === this && this.redrawHalo(e), this.chart.hasRendered && !this.options.dataLabels.allowOverlap && (this.nodes.concat(this.points).forEach(function(t) {
                    t.dataLabel && i.push(t.dataLabel)
                }), this.chart.hideOverlappingLabels(i))
            }
            setState(t, e) {
                e ? (this.points = this.nodes.concat(this.data), p.prototype.setState.apply(this, arguments), this.points = this.data) : p.prototype.setState.apply(this, arguments), this.layout.simulation || t || this.render()
            }
            translate() {
                this.processedXData || this.processData(), this.generatePoints(), this.deferLayout(), this.nodes.forEach(function(t) {
                    t.isInside = !0, t.linksFrom.forEach(function(t) {
                        t.shapeType = "path", t.y = 1
                    })
                })
            }
        }
        return k.defaultOptions = x(p.defaultOptions, o), b(k.prototype, {
            pointClass: s,
            animate: void 0,
            directTouch: !0,
            drawGraph: void 0,
            forces: ["barycenter", "repulsive", "attractive"],
            hasDraggableNodes: !0,
            isCartesian: !1,
            noSharedTooltip: !0,
            pointArrayMap: ["from", "to"],
            requireSorting: !1,
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
            initDataLabels: f,
            buildKDTree: d,
            createNode: r.createNode,
            drawTracker: u.drawTracker,
            onMouseDown: t.onMouseDown,
            onMouseMove: t.onMouseMove,
            onMouseUp: t.onMouseUp,
            redrawHalo: t.redrawHalo
        }), a.registerSeriesType("networkgraph", k), k
    }), i(e, "masters/modules/networkgraph.src.js", [e["Core/Globals.js"], e["Series/Networkgraph/NetworkgraphSeries.js"]], function(t, e) {
        return e.compose(t.Chart), t
    })
}); //# sourceMappingURL=networkgraph.js.map