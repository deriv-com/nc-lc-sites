!
/**
 * Highcharts JS v11.4.8 (2024-08-29)
 *
 * Boost module
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Torstein Honsi
 *
 * License: www.highcharts.com/license
 *
 * */
function(e) {
    "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/boost", ["highcharts"], function(t) {
        return e(t), e.Highcharts = t, e
    }) : e("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(e) {
    "use strict";
    var t = e ? e._modules : {};

    function i(t, i, s, r) {
        t.hasOwnProperty(i) || (t[i] = r.apply(null, s), "function" == typeof CustomEvent && e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: i,
                module: t[i]
            }
        })))
    }
    i(t, "Extensions/Boost/Boostables.js", [], function() {
        return ["area", "areaspline", "arearange", "column", "columnrange", "bar", "line", "scatter", "heatmap", "bubble", "treemap"]
    }), i(t, "Extensions/Boost/BoostableMap.js", [t["Extensions/Boost/Boostables.js"]], function(e) {
        let t = {};
        return e.forEach(e => {
            t[e] = !0
        }), t
    }), i(t, "Extensions/Boost/BoostChart.js", [t["Extensions/Boost/BoostableMap.js"], t["Core/Globals.js"], t["Core/Utilities.js"]], function(e, t, i) {
        let {
            composed: s
        } = t, {
            addEvent: r,
            pick: o,
            pushUnique: n
        } = i;

        function a(t) {
            let i = t.series,
                s = t.boost = t.boost || {},
                r = t.options.boost || {},
                n = o(r.seriesThreshold, 50);
            if (i.length >= n) return !0;
            if (1 === i.length) return !1;
            let a = r.allowForce;
            if (void 0 === a) {
                for (let e of (a = !0, t.xAxis))
                    if (o(e.min, -1 / 0) > o(e.dataMin, -1 / 0) || o(e.max, 1 / 0) < o(e.dataMax, 1 / 0)) {
                        a = !1;
                        break
                    }
            }
            if (void 0 !== s.forceChartBoost) {
                if (a) return s.forceChartBoost;
                s.forceChartBoost = void 0
            }
            let l = 0,
                h = 0,
                d;
            for (let t of i) 0 !== (d = t.options).boostThreshold && !1 !== t.visible && "heatmap" !== t.type && (e[t.type] && ++l, function(...e) {
                let t = -Number.MAX_VALUE;
                return e.forEach(function(e) {
                    if (null != e && void 0 !== e.length && e.length > 0) return t = e.length, !0
                }), t
            }(t.processedXData, d.data, t.points) >= (d.boostThreshold || Number.MAX_VALUE) && ++h);
            return s.forceChartBoost = a && (l === i.length && h === l || h > 5), s.forceChartBoost
        }

        function l(e) {
            function t() {
                e.boost && e.boost.wgl && a(e) && e.boost.wgl.render(e)
            }
            r(e, "predraw", function() {
                e.boost = e.boost || {}, e.boost.forceChartBoost = void 0, e.boosted = !1, e.axes.some(e => e.isPanning) || e.boost.clear?.(), e.boost.canvas && e.boost.wgl && a(e) && e.boost.wgl.allocateBuffer(e), e.boost.markerGroup && e.xAxis && e.xAxis.length > 0 && e.yAxis && e.yAxis.length > 0 && e.boost.markerGroup.translate(e.xAxis[0].pos, e.yAxis[0].pos)
            }), r(e, "load", t, {
                order: -1
            }), r(e, "redraw", t);
            let i = -1,
                s = -1;
            r(e.pointer, "afterGetHoverData", t => {
                let r = t.hoverPoint?.series;
                if (e.boost = e.boost || {}, e.boost.markerGroup && r) {
                    let t = e.inverted ? r.yAxis : r.xAxis,
                        o = e.inverted ? r.xAxis : r.yAxis;
                    (t && t.pos !== i || o && o.pos !== s) && (e.series.forEach(e => {
                        e.halo?.hide()
                    }), e.boost.markerGroup.translate(t.pos, o.pos), i = t.pos, s = o.pos)
                }
            })
        }
        return {
            compose: function(e, t) {
                return t && n(s, "Boost.Chart") && e.prototype.callbacks.push(l), e
            },
            getBoostClipRect: function(e, t) {
                let i = e.navigator,
                    s = {
                        x: e.plotLeft,
                        y: e.plotTop,
                        width: e.plotWidth,
                        height: e.plotHeight
                    };
                if (i && e.inverted ? (s.width += i.top + i.height, i.opposite || (s.x = i.left)) : i && !e.inverted && (s.height = i.top + i.height - e.plotTop), t.getClipBox) {
                    let {
                        xAxis: i,
                        yAxis: r
                    } = t;
                    if (s = t.getClipBox(), e.inverted) {
                        let e = s.width;
                        s.width = s.height, s.height = e, s.x = r.pos, s.y = i.pos
                    } else s.x = i.pos, s.y = r.pos
                }
                if (t === e) {
                    let t = e.inverted ? e.xAxis : e.yAxis;
                    t.length <= 1 && (s.y = Math.min(t[0].pos, s.y), s.height = t[0].pos - e.plotTop + t[0].len)
                }
                return s
            },
            isChartSeriesBoosting: a
        }
    }), i(t, "Extensions/Boost/WGLDrawMode.js", [], function() {
        return {
            area: "LINES",
            arearange: "LINES",
            areaspline: "LINES",
            column: "LINES",
            columnrange: "LINES",
            bar: "LINES",
            line: "LINE_STRIP",
            scatter: "POINTS",
            heatmap: "TRIANGLES",
            treemap: "TRIANGLES",
            bubble: "POINTS"
        }
    }), i(t, "Extensions/Boost/WGLShader.js", [t["Core/Utilities.js"]], function(e) {
        let {
            clamp: t,
            error: i,
            pick: s
        } = e;
        return class {
            constructor(e) {
                if (this.errors = [], this.uLocations = {}, this.gl = e, e && !this.createShader()) return
            }
            bind() {
                this.gl && this.shaderProgram && this.gl.useProgram(this.shaderProgram)
            }
            createShader() {
                let e = this.stringToProgram("#version 100\n#define LN10 2.302585092994046\nprecision highp float;\nattribute vec4 aVertexPosition;\nattribute vec4 aColor;\nvarying highp vec2 position;\nvarying highp vec4 vColor;\nuniform mat4 uPMatrix;\nuniform float pSize;\nuniform float translatedThreshold;\nuniform bool hasThreshold;\nuniform bool skipTranslation;\nuniform float xAxisTrans;\nuniform float xAxisMin;\nuniform float xAxisMinPad;\nuniform float xAxisPointRange;\nuniform float xAxisLen;\nuniform bool  xAxisPostTranslate;\nuniform float xAxisOrdinalSlope;\nuniform float xAxisOrdinalOffset;\nuniform float xAxisPos;\nuniform bool  xAxisCVSCoord;\nuniform bool  xAxisIsLog;\nuniform bool  xAxisReversed;\nuniform float yAxisTrans;\nuniform float yAxisMin;\nuniform float yAxisMinPad;\nuniform float yAxisPointRange;\nuniform float yAxisLen;\nuniform bool  yAxisPostTranslate;\nuniform float yAxisOrdinalSlope;\nuniform float yAxisOrdinalOffset;\nuniform float yAxisPos;\nuniform bool  yAxisCVSCoord;\nuniform bool  yAxisIsLog;\nuniform bool  yAxisReversed;\nuniform bool  isBubble;\nuniform bool  bubbleSizeByArea;\nuniform float bubbleZMin;\nuniform float bubbleZMax;\nuniform float bubbleZThreshold;\nuniform float bubbleMinSize;\nuniform float bubbleMaxSize;\nuniform bool  bubbleSizeAbs;\nuniform bool  isInverted;\nfloat bubbleRadius(){\nfloat value = aVertexPosition.w;\nfloat zMax = bubbleZMax;\nfloat zMin = bubbleZMin;\nfloat radius = 0.0;\nfloat pos = 0.0;\nfloat zRange = zMax - zMin;\nif (bubbleSizeAbs){\nvalue = value - bubbleZThreshold;\nzMax = max(zMax - bubbleZThreshold, zMin - bubbleZThreshold);\nzMin = 0.0;\n}\nif (value < zMin){\nradius = bubbleZMin / 2.0 - 1.0;\n} else {\npos = zRange > 0.0 ? (value - zMin) / zRange : 0.5;\nif (bubbleSizeByArea && pos > 0.0){\npos = sqrt(pos);\n}\nradius = ceil(bubbleMinSize + pos * (bubbleMaxSize - bubbleMinSize)) / 2.0;\n}\nreturn radius * 2.0;\n}\nfloat translate(float val,\nfloat pointPlacement,\nfloat localA,\nfloat localMin,\nfloat minPixelPadding,\nfloat pointRange,\nfloat len,\nbool  cvsCoord,\nbool  isLog,\nbool  reversed\n){\nfloat sign = 1.0;\nfloat cvsOffset = 0.0;\nif (cvsCoord) {\nsign *= -1.0;\ncvsOffset = len;\n}\nif (isLog) {\nval = log(val) / LN10;\n}\nif (reversed) {\nsign *= -1.0;\ncvsOffset -= sign * len;\n}\nreturn sign * (val - localMin) * localA + cvsOffset + \n(sign * minPixelPadding);\n}\nfloat xToPixels(float value) {\nif (skipTranslation){\nreturn value;// + xAxisPos;\n}\nreturn translate(value, 0.0, xAxisTrans, xAxisMin, xAxisMinPad, xAxisPointRange, xAxisLen, xAxisCVSCoord, xAxisIsLog, xAxisReversed);// + xAxisPos;\n}\nfloat yToPixels(float value, float checkTreshold) {\nfloat v;\nif (skipTranslation){\nv = value;// + yAxisPos;\n} else {\nv = translate(value, 0.0, yAxisTrans, yAxisMin, yAxisMinPad, yAxisPointRange, yAxisLen, yAxisCVSCoord, yAxisIsLog, yAxisReversed);// + yAxisPos;\nif (v > yAxisLen) {\nv = yAxisLen;\n}\n}\nif (checkTreshold > 0.0 && hasThreshold) {\nv = min(v, translatedThreshold);\n}\nreturn v;\n}\nvoid main(void) {\nif (isBubble){\ngl_PointSize = bubbleRadius();\n} else {\ngl_PointSize = pSize;\n}\nvColor = aColor;\nif (skipTranslation && isInverted) {\ngl_Position = uPMatrix * vec4(aVertexPosition.y + yAxisPos, aVertexPosition.x + xAxisPos, 0.0, 1.0);\n} else if (isInverted) {\ngl_Position = uPMatrix * vec4(yToPixels(aVertexPosition.y, aVertexPosition.z) + yAxisPos, xToPixels(aVertexPosition.x) + xAxisPos, 0.0, 1.0);\n} else {\ngl_Position = uPMatrix * vec4(xToPixels(aVertexPosition.x) + xAxisPos, yToPixels(aVertexPosition.y, aVertexPosition.z) + yAxisPos, 0.0, 1.0);\n}\n}", "vertex"),
                    t = this.stringToProgram("precision highp float;\nuniform vec4 fillColor;\nvarying highp vec2 position;\nvarying highp vec4 vColor;\nuniform sampler2D uSampler;\nuniform bool isCircle;\nuniform bool hasColor;\nvoid main(void) {\nvec4 col = fillColor;\nvec4 tcol = texture2D(uSampler, gl_PointCoord.st);\nif (hasColor) {\ncol = vColor;\n}\nif (isCircle) {\ncol *= tcol;\nif (tcol.r < 0.0) {\ndiscard;\n} else {\ngl_FragColor = col;\n}\n} else {\ngl_FragColor = col;\n}\n}", "fragment"),
                    i = e => this.gl.getUniformLocation(this.shaderProgram, e);
                return e && t ? (this.shaderProgram = this.gl.createProgram(), this.gl.attachShader(this.shaderProgram, e), this.gl.attachShader(this.shaderProgram, t), this.gl.linkProgram(this.shaderProgram), this.gl.getProgramParameter(this.shaderProgram, this.gl.LINK_STATUS)) ? (this.gl.useProgram(this.shaderProgram), this.gl.bindAttribLocation(this.shaderProgram, 0, "aVertexPosition"), this.pUniform = i("uPMatrix"), this.psUniform = i("pSize"), this.fcUniform = i("fillColor"), this.isBubbleUniform = i("isBubble"), this.bubbleSizeAbsUniform = i("bubbleSizeAbs"), this.bubbleSizeAreaUniform = i("bubbleSizeByArea"), this.uSamplerUniform = i("uSampler"), this.skipTranslationUniform = i("skipTranslation"), this.isCircleUniform = i("isCircle"), this.isInverted = i("isInverted"), !0) : (this.errors.push(this.gl.getProgramInfoLog(this.shaderProgram)), this.handleErrors(), this.shaderProgram = !1, !1) : (this.shaderProgram = !1, this.handleErrors(), !1)
            }
            handleErrors() {
                this.errors.length && i("[highcharts boost] shader error - " + this.errors.join("\n"))
            }
            stringToProgram(e, t) {
                let i = this.gl.createShader("vertex" === t ? this.gl.VERTEX_SHADER : this.gl.FRAGMENT_SHADER);
                return (this.gl.shaderSource(i, e), this.gl.compileShader(i), this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS)) ? i : (this.errors.push("when compiling " + t + " shader:\n" + this.gl.getShaderInfoLog(i)), !1)
            }
            destroy() {
                this.gl && this.shaderProgram && (this.gl.deleteProgram(this.shaderProgram), this.shaderProgram = !1)
            }
            fillColorUniform() {
                return this.fcUniform
            }
            getProgram() {
                return this.shaderProgram
            }
            pointSizeUniform() {
                return this.psUniform
            }
            perspectiveUniform() {
                return this.pUniform
            }
            reset() {
                this.gl && this.shaderProgram && (this.gl.uniform1i(this.isBubbleUniform, 0), this.gl.uniform1i(this.isCircleUniform, 0))
            }
            setBubbleUniforms(e, i, r, o = 1) {
                let n = e.options,
                    a = Number.MAX_VALUE,
                    l = -Number.MAX_VALUE;
                if (this.gl && this.shaderProgram && e.is("bubble")) {
                    let h = e.getPxExtremes();
                    a = s(n.zMin, t(i, !1 === n.displayNegative ? n.zThreshold : -Number.MAX_VALUE, a)), l = s(n.zMax, Math.max(l, r)), this.gl.uniform1i(this.isBubbleUniform, 1), this.gl.uniform1i(this.isCircleUniform, 1), this.gl.uniform1i(this.bubbleSizeAreaUniform, "width" !== e.options.sizeBy), this.gl.uniform1i(this.bubbleSizeAbsUniform, e.options.sizeByAbsoluteValue), this.setUniform("bubbleMinSize", h.minPxSize * o), this.setUniform("bubbleMaxSize", h.maxPxSize * o), this.setUniform("bubbleZMin", a), this.setUniform("bubbleZMax", l), this.setUniform("bubbleZThreshold", e.options.zThreshold)
                }
            }
            setColor(e) {
                this.gl && this.shaderProgram && this.gl.uniform4f(this.fcUniform, e[0] / 255, e[1] / 255, e[2] / 255, e[3])
            }
            setDrawAsCircle(e) {
                this.gl && this.shaderProgram && this.gl.uniform1i(this.isCircleUniform, e ? 1 : 0)
            }
            setInverted(e) {
                this.gl && this.shaderProgram && this.gl.uniform1i(this.isInverted, e)
            }
            setPMatrix(e) {
                this.gl && this.shaderProgram && this.gl.uniformMatrix4fv(this.pUniform, !1, e)
            }
            setPointSize(e) {
                this.gl && this.shaderProgram && this.gl.uniform1f(this.psUniform, e)
            }
            setSkipTranslation(e) {
                this.gl && this.shaderProgram && this.gl.uniform1i(this.skipTranslationUniform, !0 === e ? 1 : 0)
            }
            setTexture(e) {
                this.gl && this.shaderProgram && this.gl.uniform1i(this.uSamplerUniform, e)
            }
            setUniform(e, t) {
                if (this.gl && this.shaderProgram) {
                    let i = this.uLocations[e] = this.uLocations[e] || this.gl.getUniformLocation(this.shaderProgram, e);
                    this.gl.uniform1f(i, t)
                }
            }
        }
    }), i(t, "Extensions/Boost/WGLVertexBuffer.js", [], function() {
        return class {
            constructor(e, t, i) {
                this.buffer = !1, this.iterator = 0, this.preAllocated = !1, this.vertAttribute = !1, this.components = i || 2, this.dataComponents = i, this.gl = e, this.shader = t
            }
            allocate(e) {
                this.iterator = -1, this.preAllocated = new Float32Array(4 * e)
            }
            bind() {
                if (!this.buffer) return !1;
                this.gl.vertexAttribPointer(this.vertAttribute, this.components, this.gl.FLOAT, !1, 0, 0)
            }
            build(e, t, i) {
                let s;
                return (this.data = e || [], this.data && 0 !== this.data.length || this.preAllocated) ? (this.components = i || this.components, this.buffer && this.gl.deleteBuffer(this.buffer), this.preAllocated || (s = new Float32Array(this.data)), this.buffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.preAllocated || s, this.gl.STATIC_DRAW), this.vertAttribute = this.gl.getAttribLocation(this.shader.getProgram(), t), this.gl.enableVertexAttribArray(this.vertAttribute), s = !1, !0) : (this.destroy(), !1)
            }
            destroy() {
                this.buffer && (this.gl.deleteBuffer(this.buffer), this.buffer = !1, this.vertAttribute = !1), this.iterator = 0, this.components = this.dataComponents || 2, this.data = []
            }
            push(e, t, i, s) {
                this.preAllocated && (this.preAllocated[++this.iterator] = e, this.preAllocated[++this.iterator] = t, this.preAllocated[++this.iterator] = i, this.preAllocated[++this.iterator] = s)
            }
            render(e, t, i) {
                let s = this.preAllocated ? this.preAllocated.length : this.data.length;
                return !!this.buffer && !!s && ((!e || e > s || e < 0) && (e = 0), (!t || t > s) && (t = s), !(e >= t) && (i = i || "POINTS", this.gl.drawArrays(this.gl[i], e / this.components, (t - e) / this.components), !0))
            }
        }
    }), i(t, "Extensions/Boost/WGLRenderer.js", [t["Core/Color/Color.js"], t["Core/Globals.js"], t["Core/Utilities.js"], t["Extensions/Boost/WGLDrawMode.js"], t["Extensions/Boost/WGLShader.js"], t["Extensions/Boost/WGLVertexBuffer.js"]], function(e, t, i, s, r, o) {
        let {
            parse: n
        } = e, {
            doc: a,
            win: l
        } = t, {
            isNumber: h,
            isObject: d,
            merge: f,
            objectEach: u,
            pick: g
        } = i, c = {
            column: !0,
            columnrange: !0,
            bar: !0,
            area: !0,
            areaspline: !0,
            arearange: !0
        }, m = {
            scatter: !0,
            bubble: !0
        }, p = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
        class b {
            static orthoMatrix(e, t) {
                return [2 / e, 0, 0, 0, 0, -(2 / t), 0, 0, 0, 0, -2, 0, -1, 1, -1, 1]
            }
            static seriesPointCount(e) {
                let t, i, s;
                return e.boosted ? (t = !!e.options.stacking, i = e.xData || e.options.xData || e.processedXData, s = (t ? e.data : i || e.options.data).length, "treemap" === e.type ? s *= 12 : "heatmap" === e.type ? s *= 6 : c[e.type] && (s *= 2), s) : 0
            }
            constructor(e) {
                this.data = [], this.height = 0, this.isInited = !1, this.markerData = [], this.series = [], this.textureHandles = {}, this.width = 0, this.postRenderCallback = e, this.settings = {
                    pointSize: 1,
                    lineWidth: 1,
                    fillColor: "#AA00AA",
                    useAlpha: !0,
                    usePreallocated: !1,
                    useGPUTranslations: !1,
                    debug: {
                        timeRendering: !1,
                        timeSeriesProcessing: !1,
                        timeSetup: !1,
                        timeBufferCopy: !1,
                        timeKDTree: !1,
                        showSkipSummary: !1
                    }
                }
            }
            getPixelRatio() {
                return this.settings.pixelRatio || l.devicePixelRatio || 1
            }
            setOptions(e) {
                "pixelRatio" in e || (e.pixelRatio = 1), f(!0, this.settings, e)
            }
            allocateBuffer(e) {
                let t = this.vbuffer,
                    i = 0;
                this.settings.usePreallocated && (e.series.forEach(e => {
                    e.boosted && (i += b.seriesPointCount(e))
                }), t && t.allocate(i))
            }
            allocateBufferForSingleSeries(e) {
                let t = this.vbuffer,
                    i = 0;
                this.settings.usePreallocated && (e.boosted && (i = b.seriesPointCount(e)), t && t.allocate(i))
            }
            clear() {
                let e = this.gl;
                e && e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT)
            }
            pushSeriesData(e, t) {
                let i = this.data,
                    s = this.settings,
                    r = this.vbuffer,
                    o = e.pointArrayMap && "low,high" === e.pointArrayMap.join(","),
                    {
                        chart: a,
                        options: l,
                        sorted: h,
                        xAxis: f,
                        yAxis: u
                    } = e,
                    g = !!l.stacking,
                    m = l.data,
                    p = e.xAxis.getExtremes(),
                    b = p.min - (e.xAxis.minPointOffset || 0),
                    x = p.max + (e.xAxis.minPointOffset || 0),
                    A = e.yAxis.getExtremes(),
                    y = A.min - (e.yAxis.minPointOffset || 0),
                    P = A.max + (e.yAxis.minPointOffset || 0),
                    v = e.xData || l.xData || e.processedXData,
                    T = e.yData || l.yData || e.processedYData,
                    E = e.zData || l.zData || e.processedZData,
                    k = !v || 0 === v.length,
                    S = l.connectNulls,
                    M = e.points || !1,
                    C = g ? e.data : v || m,
                    U = {
                        x: Number.MAX_VALUE,
                        y: 0
                    },
                    w = {
                        x: -Number.MAX_VALUE,
                        y: 0
                    },
                    R = void 0 === a.index,
                    B = c[e.type],
                    D = l.zoneAxis || "y",
                    L = l.zones || !1,
                    z = l.threshold,
                    G = this.getPixelRatio(),
                    _ = e.chart.plotWidth,
                    N = !1,
                    I = !1,
                    O, X, V = 0,
                    j = !1,
                    F, W, H, Y, q = -1,
                    Z = !1,
                    K = !1,
                    Q, J = !1,
                    $ = !1,
                    ee = !1,
                    et = !1,
                    ei = !0,
                    es = !0,
                    er, eo = !1,
                    en = !1,
                    ea = 0;
                if (l.boostData && l.boostData.length > 0) return;
                l.gapSize && (en = "value" !== l.gapUnit ? l.gapSize * e.closestPointRange : l.gapSize), L && (er = [], L.forEach((e, t) => {
                    if (e.color) {
                        let i = n(e.color).rgba;
                        i[0] /= 255, i[1] /= 255, i[2] /= 255, er[t] = i, eo || void 0 !== e.value || (eo = i)
                    }
                }), eo || (eo = n(e.pointAttribs && e.pointAttribs().fill || e.color).rgba, eo[0] /= 255, eo[1] /= 255, eo[2] /= 255)), a.inverted && (_ = e.chart.plotHeight), e.closestPointRangePx = Number.MAX_VALUE;
                let el = e => {
                        e && (t.colorData.push(e[0]), t.colorData.push(e[1]), t.colorData.push(e[2]), t.colorData.push(e[3]))
                    },
                    eh = (e, o, n, a = 1, l) => {
                        el(l), 1 !== G && (!s.useGPUTranslations || t.skipTranslation) && (e *= G, o *= G, a *= G), s.usePreallocated && r ? (r.push(e, o, n ? 1 : 0, a), ea += 4) : (i.push(e), i.push(o), i.push(n ? G : 0), i.push(a))
                    },
                    ed = () => {
                        t.segments.length && (t.segments[t.segments.length - 1].to = i.length || ea)
                    },
                    ef = () => {
                        t.segments.length && t.segments[t.segments.length - 1].from === (i.length || ea) || (ed(), t.segments.push({
                            from: i.length || ea
                        }))
                    },
                    eu = (e, t, i, s, r) => {
                        el(r), eh(e + i, t), el(r), eh(e, t), el(r), eh(e, t + s), el(r), eh(e, t + s), el(r), eh(e + i, t + s), el(r), eh(e + i, t)
                    };
                if (ef(), M && M.length > 0) {
                    t.skipTranslation = !0, t.drawMode = "TRIANGLES", M[0].node && M[0].node.levelDynamic && M.sort((e, t) => {
                        if (e.node) {
                            if (e.node.levelDynamic > t.node.levelDynamic) return 1;
                            if (e.node.levelDynamic < t.node.levelDynamic) return -1
                        }
                        return 0
                    }), M.forEach(t => {
                        let i, s;
                        let r = t.plotY;
                        if (void 0 !== r && !isNaN(r) && null !== t.y && t.shapeArgs) {
                            let {
                                x: r = 0,
                                y: o = 0,
                                width: l = 0,
                                height: h = 0
                            } = t.shapeArgs;
                            i = (s = a.styledMode ? t.series.colorAttribs(t) : s = t.series.pointAttribs(t))["stroke-width"] || 0, ee = n(s.fill).rgba, ee[0] /= 255, ee[1] /= 255, ee[2] /= 255, e.is("treemap") && (i = i || 1, X = n(s.stroke).rgba, X[0] /= 255, X[1] /= 255, X[2] /= 255, eu(r, o, l, h, X), i /= 2), e.is("heatmap") && a.inverted && (r = f.len - r, o = u.len - o, l = -l, h = -h), eu(r + i, o + i, l - 2 * i, h - 2 * i, ee)
                        }
                    }), ed();
                    return
                }
                for (; q < C.length - 1;) {
                    if (void 0 === (H = C[++q])) continue;
                    if (R) break;
                    let i = m && m[q];
                    if (!k && d(i, !0) && i.color && (ee = n(i.color).rgba, ee[0] /= 255, ee[1] /= 255, ee[2] /= 255), k ? (F = H[0], W = H[1], C[q + 1] && (K = C[q + 1][0]), C[q - 1] && (Z = C[q - 1][0]), H.length >= 3 && (Y = H[2], H[2] > t.zMax && (t.zMax = H[2]), H[2] < t.zMin && (t.zMin = H[2]))) : (F = H, W = T[q], C[q + 1] && (K = C[q + 1]), C[q - 1] && (Z = C[q - 1]), E && E.length && (Y = E[q], E[q] > t.zMax && (t.zMax = E[q]), E[q] < t.zMin && (t.zMin = E[q]))), !S && (null === F || null === W)) {
                        ef();
                        continue
                    }
                    if (K && K >= b && K <= x && (J = !0), Z && Z >= b && Z <= x && ($ = !0), o ? (k && (W = H.slice(1, 3)), Q = W[0], W = W[1]) : g && (F = H.x, Q = (W = H.stackY) - H.y), null != y && null != P && (ei = W >= y && W <= P), F > x && w.x < x && (w.x = F, w.y = W), F < b && U.x > b && (U.x = F, U.y = W), null !== W || !S) {
                        if (null === W || !ei && !J && !$) {
                            ef();
                            continue
                        }
                        if (h && (K >= b || F >= b) && (Z <= x || F <= x) && (et = !0), et || J || $) {
                            if (en && F - Z > en && ef(), L) {
                                let e;
                                L.some((t, i) => {
                                    let s = L[i - 1];
                                    return "x" === D ? void 0 !== t.value && F <= t.value && (er[i] && (!s || F >= s.value) && (e = er[i]), !0) : void 0 !== t.value && W <= t.value && (er[i] && (!s || W >= s.value) && (e = er[i]), !0)
                                }), ee = e || eo || ee
                            }
                            if (s.useGPUTranslations || (t.skipTranslation = !0, F = f.toPixels(F, !0), W = u.toPixels(W, !0), !(F > _) || "POINTS" !== t.drawMode)) {
                                if (t.hasMarkers && et && !1 !== N && (e.closestPointRangePx = Math.min(e.closestPointRangePx, Math.abs(F - N))), !s.useGPUTranslations && !s.usePreallocated && N && 1 > Math.abs(F - N) && I && 1 > Math.abs(W - I)) {
                                    s.debug.showSkipSummary && ++V;
                                    continue
                                }
                                B && (O = Q, (!1 === Q || void 0 === Q) && (O = W < 0 ? W : 0), (o || g) && !u.logarithmic || (O = Math.max(null === z ? y : z, y)), s.useGPUTranslations || (O = u.toPixels(O, !0)), eh(F, O, 0, 0, ee)), l.step && !es && eh(F, I, 0, 2, ee), eh(F, W, 0, "bubble" === e.type ? Y || 1 : 2, ee), N = F, I = W, j = !0, es = !1
                            }
                        }
                    }
                }
                s.debug.showSkipSummary && console.log("skipped points:", V);
                let eg = (e, i) => {
                    if (s.useGPUTranslations || (t.skipTranslation = !0, e.x = f.toPixels(e.x, !0), e.y = u.toPixels(e.y, !0)), i) {
                        this.data = [e.x, e.y, 0, 2].concat(this.data);
                        return
                    }
                    eh(e.x, e.y, 0, 2)
                };
                !j && !1 !== S && "line_strip" === e.drawMode && (U.x < Number.MAX_VALUE && eg(U, !0), w.x > -Number.MAX_VALUE && eg(w)), ed()
            }
            pushSeries(e) {
                let t = this.markerData,
                    i = this.series,
                    r = this.settings;
                i.length > 0 && i[i.length - 1].hasMarkers && (i[i.length - 1].markerTo = t.length), r.debug.timeSeriesProcessing && console.time("building " + e.type + " series");
                let o = {
                    segments: [],
                    markerFrom: t.length,
                    colorData: [],
                    series: e,
                    zMin: Number.MAX_VALUE,
                    zMax: -Number.MAX_VALUE,
                    hasMarkers: !!e.options.marker && !1 !== e.options.marker.enabled,
                    showMarkers: !0,
                    drawMode: s[e.type] || "LINE_STRIP"
                };
                e.index >= i.length ? i.push(o) : i[e.index] = o, this.pushSeriesData(e, o), r.debug.timeSeriesProcessing && console.timeEnd("building " + e.type + " series")
            }
            flush() {
                let e = this.vbuffer;
                this.data = [], this.markerData = [], this.series = [], e && e.destroy()
            }
            setXAxis(e) {
                let t = this.shader;
                if (!t) return;
                let i = this.getPixelRatio();
                t.setUniform("xAxisTrans", e.transA * i), t.setUniform("xAxisMin", e.min), t.setUniform("xAxisMinPad", e.minPixelPadding * i), t.setUniform("xAxisPointRange", e.pointRange), t.setUniform("xAxisLen", e.len * i), t.setUniform("xAxisPos", e.pos * i), t.setUniform("xAxisCVSCoord", !e.horiz), t.setUniform("xAxisIsLog", !!e.logarithmic), t.setUniform("xAxisReversed", !!e.reversed)
            }
            setYAxis(e) {
                let t = this.shader;
                if (!t) return;
                let i = this.getPixelRatio();
                t.setUniform("yAxisTrans", e.transA * i), t.setUniform("yAxisMin", e.min), t.setUniform("yAxisMinPad", e.minPixelPadding * i), t.setUniform("yAxisPointRange", e.pointRange), t.setUniform("yAxisLen", e.len * i), t.setUniform("yAxisPos", e.pos * i), t.setUniform("yAxisCVSCoord", !e.horiz), t.setUniform("yAxisIsLog", !!e.logarithmic), t.setUniform("yAxisReversed", !!e.reversed)
            }
            setThreshold(e, t) {
                let i = this.shader;
                i && (i.setUniform("hasThreshold", e), i.setUniform("translatedThreshold", t))
            }
            renderChart(i) {
                let s = this.gl,
                    r = this.settings,
                    a = this.shader,
                    l = this.vbuffer,
                    d = this.getPixelRatio();
                if (!i) return !1;
                this.width = i.chartWidth * d, this.height = i.chartHeight * d;
                let f = this.height,
                    u = this.width;
                if (!s || !a || !u || !f) return !1;
                r.debug.timeRendering && console.time("gl rendering"), s.canvas.width = u, s.canvas.height = f, a.bind(), s.viewport(0, 0, u, f), a.setPMatrix(b.orthoMatrix(u, f)), r.lineWidth > 1 && !t.isMS && s.lineWidth(r.lineWidth), l && (l.build(this.data, "aVertexPosition", 4), l.bind()), a.setInverted(i.inverted), this.series.forEach((t, f) => {
                    let u = t.series.options,
                        c = u.marker,
                        p = void 0 !== u.lineWidth ? u.lineWidth : 1,
                        b = u.threshold,
                        x = h(b),
                        A = t.series.yAxis.getThreshold(b),
                        y = g(u.marker ? u.marker.enabled : null, !!t.series.xAxis.isRadial || null, t.series.closestPointRangePx > 2 * ((u.marker ? u.marker.radius : 10) || 10)),
                        P = this.textureHandles[c && c.symbol || t.series.symbol] || this.textureHandles.circle,
                        v, T, E, k = [];
                    if (0 !== t.segments.length && t.segments[0].from !== t.segments[0].to && (P.isReady && (s.bindTexture(s.TEXTURE_2D, P.handle), a.setTexture(P.handle)), i.styledMode ? t.series.markerGroup === t.series.chart.boost?.markerGroup ? (delete t.series.markerGroup, t.series.markerGroup = t.series.plotGroup("markerGroup", "markers", "visible", 1, i.seriesGroup).addClass("highcharts-tracker"), E = t.series.markerGroup.getStyle("fill"), t.series.markerGroup.destroy(), t.series.markerGroup = t.series.chart.boost?.markerGroup) : E = t.series.markerGroup?.getStyle("fill") : (E = "POINTS" === t.drawMode && t.series.pointAttribs && t.series.pointAttribs().fill || t.series.color, u.colorByPoint && (E = t.series.chart.options.colors[f])), t.series.fillOpacity && u.fillOpacity && (E = new e(E).setOpacity(g(u.fillOpacity, 1)).get()), k = n(E).rgba, r.useAlpha || (k[3] = 1), "add" === u.boostBlending ? (s.blendFunc(s.SRC_ALPHA, s.ONE), s.blendEquation(s.FUNC_ADD)) : "mult" === u.boostBlending || "multiply" === u.boostBlending ? s.blendFunc(s.DST_COLOR, s.ZERO) : "darken" === u.boostBlending ? (s.blendFunc(s.ONE, s.ONE), s.blendEquation(s.FUNC_MIN)) : s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA), a.reset(), t.colorData.length > 0 ? (a.setUniform("hasColor", 1), (T = new o(s, a)).build(Array(t.segments[0].from).concat(t.colorData), "aColor", 4), T.bind()) : (a.setUniform("hasColor", 0), s.disableVertexAttribArray(s.getAttribLocation(a.getProgram(), "aColor"))), a.setColor(k), this.setXAxis(t.series.xAxis), this.setYAxis(t.series.yAxis), this.setThreshold(x, A), "POINTS" === t.drawMode && a.setPointSize(2 * g(u.marker && u.marker.radius, .5) * d), a.setSkipTranslation(t.skipTranslation), "bubble" === t.series.type && a.setBubbleUniforms(t.series, t.zMin, t.zMax, d), a.setDrawAsCircle(m[t.series.type] || !1), l)) {
                        if (p > 0 || "LINE_STRIP" !== t.drawMode)
                            for (v = 0; v < t.segments.length; v++) l.render(t.segments[v].from, t.segments[v].to, t.drawMode);
                        if (t.hasMarkers && y)
                            for (a.setPointSize(2 * g(u.marker && u.marker.radius, 5) * d), a.setDrawAsCircle(!0), v = 0; v < t.segments.length; v++) l.render(t.segments[v].from, t.segments[v].to, "POINTS")
                    }
                }), r.debug.timeRendering && console.timeEnd("gl rendering"), this.postRenderCallback && this.postRenderCallback(this), this.flush()
            }
            render(e) {
                if (this.clear(), e.renderer.forExport) return this.renderChart(e);
                this.isInited ? this.renderChart(e) : setTimeout(() => {
                    this.render(e)
                }, 1)
            }
            setSize(e, t) {
                let i = this.shader;
                i && (this.width !== e || this.height !== t) && (this.width = e, this.height = t, i.bind(), i.setPMatrix(b.orthoMatrix(e, t)))
            }
            init(e, t) {
                let i = this.settings;
                if (this.isInited = !1, !e) return !1;
                i.debug.timeSetup && console.time("gl setup");
                for (let t = 0; t < p.length && (this.gl = e.getContext(p[t], {}), !this.gl); ++t);
                let s = this.gl;
                if (!s) return !1;
                t || this.flush(), s.enable(s.BLEND), s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA), s.disable(s.DEPTH_TEST), s.depthFunc(s.LESS);
                let n = this.shader = new r(s);
                if (!n) return !1;
                this.vbuffer = new o(s, n);
                let l = (e, t) => {
                    let i = {
                            isReady: !1,
                            texture: a.createElement("canvas"),
                            handle: s.createTexture()
                        },
                        r = i.texture.getContext("2d");
                    this.textureHandles[e] = i, i.texture.width = 512, i.texture.height = 512, r.mozImageSmoothingEnabled = !1, r.webkitImageSmoothingEnabled = !1, r.msImageSmoothingEnabled = !1, r.imageSmoothingEnabled = !1, r.strokeStyle = "rgba(255, 255, 255, 0)", r.fillStyle = "#FFF", t(r);
                    try {
                        s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, i.handle), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, s.UNSIGNED_BYTE, i.texture), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR), s.bindTexture(s.TEXTURE_2D, null), i.isReady = !0
                    } catch (e) {}
                };
                return l("circle", e => {
                    e.beginPath(), e.arc(256, 256, 256, 0, 2 * Math.PI), e.stroke(), e.fill()
                }), l("square", e => {
                    e.fillRect(0, 0, 512, 512)
                }), l("diamond", e => {
                    e.beginPath(), e.moveTo(256, 0), e.lineTo(512, 256), e.lineTo(256, 512), e.lineTo(0, 256), e.lineTo(256, 0), e.fill()
                }), l("triangle", e => {
                    e.beginPath(), e.moveTo(0, 512), e.lineTo(256, 0), e.lineTo(512, 512), e.lineTo(0, 512), e.fill()
                }), l("triangle-down", e => {
                    e.beginPath(), e.moveTo(0, 0), e.lineTo(256, 512), e.lineTo(512, 0), e.lineTo(0, 0), e.fill()
                }), this.isInited = !0, i.debug.timeSetup && console.timeEnd("gl setup"), !0
            }
            destroy() {
                let e = this.gl,
                    t = this.shader,
                    i = this.vbuffer;
                this.flush(), i && i.destroy(), t && t.destroy(), e && (u(this.textureHandles, t => {
                    t.handle && e.deleteTexture(t.handle)
                }), e.canvas.width = 1, e.canvas.height = 1)
            }
        }
        return b
    }), i(t, "Extensions/Boost/BoostSeries.js", [t["Extensions/Boost/BoostableMap.js"], t["Extensions/Boost/Boostables.js"], t["Extensions/Boost/BoostChart.js"], t["Core/Defaults.js"], t["Core/Globals.js"], t["Core/Utilities.js"], t["Extensions/Boost/WGLRenderer.js"]], function(e, t, i, s, r, o, n) {
        let a, l;
        let {
            getBoostClipRect: h,
            isChartSeriesBoosting: d
        } = i, {
            getOptions: f
        } = s, {
            composed: u,
            doc: g,
            noop: c,
            win: m
        } = r, {
            addEvent: p,
            destroyObjectProperties: b,
            error: x,
            extend: A,
            fireEvent: y,
            isArray: P,
            isNumber: v,
            pick: T,
            pushUnique: E,
            wrap: k,
            defined: S
        } = o;

        function M(e, t) {
            let i = t.boost;
            e && i && i.target && i.canvas && !d(t.chart) && e.allocateBufferForSingleSeries(t)
        }

        function C(e) {
            return T(e && e.options && e.options.boost && e.options.boost.enabled, !0)
        }

        function U(e, t) {
            let i = e.constructor,
                s = e.seriesGroup || t.group,
                r = e.chartWidth,
                o = e.chartHeight,
                a = e,
                f = "undefined" != typeof SVGForeignObjectElement,
                u = !1;
            d(e) ? a = e : (a = t, u = !!(t.options.events?.click || t.options.point?.events?.click));
            let c = a.boost = a.boost || {};
            if (f = !1, l || (l = g.createElement("canvas")), !c.target && (c.canvas = l, e.renderer.forExport || !f ? (a.renderTarget = c.target = e.renderer.image("", 0, 0, r, o).addClass("highcharts-boost-canvas").add(s), c.clear = function() {
                    c.target.attr({
                        href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    })
                }, c.copy = function() {
                    c.resize(), c.target.attr({
                        href: c.canvas.toDataURL("image/png")
                    })
                }) : (c.targetFo = e.renderer.createElement("foreignObject").add(s), a.renderTarget = c.target = g.createElement("canvas"), c.targetCtx = c.target.getContext("2d"), c.targetFo.element.appendChild(c.target), c.clear = function() {
                    c.target.width = c.canvas.width, c.target.height = c.canvas.height
                }, c.copy = function() {
                    c.target.width = c.canvas.width, c.target.height = c.canvas.height, c.targetCtx.drawImage(c.canvas, 0, 0)
                }), c.resize = function() {
                    r = e.chartWidth, o = e.chartHeight, (c.targetFo || c.target).attr({
                        x: 0,
                        y: 0,
                        width: r,
                        height: o
                    }).css({
                        pointerEvents: u ? void 0 : "none",
                        mixedBlendMode: "normal",
                        opacity: 1
                    }).addClass(u ? "highcharts-tracker" : ""), a instanceof i && a.boost?.markerGroup?.translate(e.plotLeft, e.plotTop)
                }, c.clipRect = e.renderer.clipRect(), (c.targetFo || c.target).attr({
                    zIndex: t.options.zIndex
                }), a instanceof i && (a.boost.markerGroup = a.renderer.g().add(s).translate(t.xAxis.pos, t.yAxis.pos))), c.canvas.width = r, c.canvas.height = o, c.clipRect) {
                let t = h(e, a),
                    i = t.width === e.clipBox.width && t.height === e.clipBox.height ? s : c.targetFo || c.target;
                c.clipRect.attr(t), i?.clip(c.clipRect)
            }
            return c.resize(), c.clear(), !c.wgl && (c.wgl = new n(e => {
                e.settings.debug.timeBufferCopy && console.time("buffer copy"), c.copy(), e.settings.debug.timeBufferCopy && console.timeEnd("buffer copy")
            }), c.wgl.init(c.canvas) || x("[highcharts boost] - unable to init WebGL renderer"), c.wgl.setOptions(e.options.boost || {}), a instanceof i && c.wgl.allocateBuffer(e)), c.wgl.setSize(r, o), c.wgl
        }

        function w(e) {
            let t = e.points;
            if (t) {
                let e, i;
                for (i = 0; i < t.length; i += 1)(e = t[i]) && e.destroyElements && e.destroyElements()
            }
            for (let t of (["graph", "area", "tracker"].forEach(t => {
                    let i = e[t];
                    i && (e[t] = i.destroy())
                }), e.zones)) b(t, void 0, !0)
        }

        function R(e, t, i, s, r, o) {
            let n = (r = r || 0) + (s = s || 3e3),
                a = !0;
            for (; a && r < n && r < e.length;) a = t(e[r], r), ++r;
            a && (r < e.length ? o ? R(e, t, i, s, r, o) : m.requestAnimationFrame ? m.requestAnimationFrame(function() {
                R(e, t, i, s, r)
            }) : setTimeout(R, 0, e, t, i, s, r) : i && i())
        }

        function B(e, t) {
            let i = e.options,
                s = i.data,
                r = e.xAxis && e.xAxis.options,
                o = e.yAxis && e.yAxis.options,
                n = e.colorAxis && e.colorAxis.options;
            return s.length > (i.boostThreshold || Number.MAX_VALUE) && v(o.min) && v(o.max) && (!t || v(r.min) && v(r.max)) && (!n || v(n.min) && v(n.max))
        }
        let D = (e, t) => !e.forceCrop && (d(e.chart) || (t ? t.length : 0) >= (e.options.boostThreshold || Number.MAX_VALUE));

        function L() {
            let e = this,
                t = e.chart;
            t.boost && t.boost.markerGroup === e.markerGroup && (e.markerGroup = null), t.hoverPoints && (t.hoverPoints = t.hoverPoints.filter(function(t) {
                return t.series === e
            })), t.hoverPoint && t.hoverPoint.series === e && (t.hoverPoint = null)
        }

        function z() {
            let e = this.boost;
            e && e.canvas && e.target && (e.wgl && e.wgl.clear(), e.clear && e.clear())
        }

        function G(e) {
            let t = e.boost;
            t && t.canvas && t.target && t.wgl && !d(e.chart) && t.wgl.render(e.chart)
        }

        function _(e, t) {
            let i = e.options,
                s = e.xAxis,
                r = e.pointClass;
            if (t instanceof r) return t;
            let o = e.xData || i.xData || e.processedXData || !1,
                n = new r(e, (e.options.data || [])[t.i], o ? o[t.i] : void 0);
            return n.category = T(s.categories ? s.categories[n.x] : n.x, n.x), n.dist = t.dist, n.distX = t.distX, n.plotX = t.plotX, n.plotY = t.plotY, n.index = t.i, n.percentage = t.percentage, n.isInside = e.isPointInside(n), n
        }

        function N(e) {
            var t, i, s, r;
            let {
                options: o,
                xAxis: n,
                yAxis: a
            } = this;
            if (!this.isDirty && !n.isDirty && !a.isDirty && !e) return !1;
            this.yAxis.setTickInterval();
            let l = o.boostThreshold || 0,
                h = o.cropThreshold,
                d = o.data || this.data,
                f = this.xData,
                u = n.getExtremes(),
                g = u.max ?? Number.MAX_VALUE,
                c = u.min ?? -Number.MAX_VALUE,
                m = this.yData,
                p = a.getExtremes(),
                b = p.max ?? Number.MAX_VALUE,
                x = p.min ?? -Number.MAX_VALUE;
            if (!this.boosted && n.old && a.old && c >= (n.old.min ?? -Number.MAX_VALUE) && g <= (n.old.max ?? Number.MAX_VALUE) && x >= (a.old.min ?? -Number.MAX_VALUE) && b <= (a.old.max ?? Number.MAX_VALUE)) return this.processedXData ?? (this.processedXData = f), this.processedYData ?? (this.processedYData = m), !0;
            if (!l || d.length < l || h && !this.forceCrop && !this.getExtremesFromAll && !o.getExtremesFromAll && d.length < h) return this.processedXData = f, this.processedYData = m, !0;
            let A = [],
                y = [],
                P = [],
                T = !(v(u.max) || v(u.min)),
                E = !(v(p.max) || v(p.min)),
                k = !1,
                S, M = f[0],
                C = f[0],
                U, w = m[0],
                R = m[0];
            for (let e = 0, t = f.length; e < t; ++e) S = f[e], U = m[e], S >= c && S <= g && U >= x && U <= b ? (A.push({
                x: S,
                y: U
            }), y.push(S), P.push(U), T && (M = Math.max(M, S), C = Math.min(C, S)), E && (w = Math.max(w, U), R = Math.min(R, U))) : k = !0;
            return T && ((t = n.options).max ?? (t.max = M), (i = n.options).min ?? (i.min = C)), E && ((s = a.options).max ?? (s.max = w), (r = a.options).min ?? (r.min = R)), this.cropped = k, this.cropStart = 0, this.processedXData = y, this.processedYData = P, D(this, y) || (this.processedData = A), !0
        }

        function I() {
            let e = this.options || {},
                t = this.chart,
                i = t.boost,
                s = this.boost,
                r = this.xAxis,
                o = this.yAxis,
                n = e.xData || this.processedXData,
                l = e.yData || this.processedYData,
                h = this.processedData || e.data,
                f = r.getExtremes(),
                u = f.min - (r.minPointOffset || 0),
                g = f.max + (r.minPointOffset || 0),
                m = o.getExtremes(),
                p = m.min - (o.minPointOffset || 0),
                b = m.max + (o.minPointOffset || 0),
                x = {},
                A = !!this.sampling,
                P = e.enableMouseTracking,
                v = e.threshold,
                E = this.pointArrayMap && "low,high" === this.pointArrayMap.join(","),
                k = !!e.stacking,
                C = this.cropStart || 0,
                B = this.requireSorting,
                D = !n,
                L = "x" === e.findNearestPointBy,
                z = this.xData || this.options.xData || this.processedXData || !1,
                _ = T(e.lineWidth, 1),
                N = !1,
                I, O = o.getThreshold(v),
                X, V, j, F;
            if (r.isPanning || o.isPanning || (N = U(t, this), t.boosted = !0, !this.visible)) return;
            (this.points || this.graph) && w(this), d(t) ? (this.markerGroup && this.markerGroup !== i?.markerGroup && this.markerGroup.destroy(), this.markerGroup = i?.markerGroup, s && s.target && (this.renderTarget = s.target = s.target.destroy())) : (this.markerGroup === i?.markerGroup && (this.markerGroup = void 0), this.markerGroup = this.plotGroup("markerGroup", "markers", "visible", 1, t.seriesGroup).addClass("highcharts-tracker"));
            let W = this.points = [],
                H = (e, i, s, n) => {
                    let l = !!z && z[C + s],
                        h = e => {
                            t.inverted && (e = r.len - e, i = o.len - i), W.push({
                                destroy: c,
                                x: l,
                                clientX: e,
                                plotX: e,
                                plotY: i,
                                i: C + s,
                                percentage: n
                            })
                        };
                    e = Math.ceil(e), a = L ? e : e + "," + i, P && (x[a] ? l === z[z.length - 1] && (W.length--, h(e)) : (x[a] = !0, h(e)))
                };
            this.buildKDTree = c, y(this, "renderCanvas"), this.is("line") && _ > 1 && s?.target && i && !i.lineWidthFilter && (i.lineWidthFilter = t.renderer.definition({
                tagName: "filter",
                children: [{
                    tagName: "feMorphology",
                    attributes: {
                        operator: "dilate",
                        radius: .25 * _
                    }
                }],
                attributes: {
                    id: "linewidth"
                }
            }), s.target.attr({
                filter: "url(#linewidth)"
            })), N && (M(N, this), N.pushSeries(this), G(this));
            let Y = N.settings;
            t.renderer.forExport || (Y.debug.timeKDTree && console.time("kd tree building"), R(k ? this.data.slice(C) : n || h, function(e, i) {
                let s = void 0 === t.index,
                    n, a, h, d, f, c = !1,
                    m = !0;
                return !S(e) || (!s && (D ? (n = e[0], a = e[1]) : (n = e, a = l[i]), E ? (D && (a = e.slice(1, 3)), c = a[0], a = a[1]) : k && (n = e.x, c = (a = e.stackY) - e.y, f = e.percentage), B || (m = (a || 0) >= p && a <= b), null !== a && n >= u && n <= g && m && (h = r.toPixels(n, !0), A ? ((void 0 === j || h === I) && (E || (c = a), (void 0 === F || a > V) && (V = a, F = i), (void 0 === j || c < X) && (X = c, j = i)), L && h === I || (void 0 !== j && (d = o.toPixels(V, !0), O = o.toPixels(X, !0), H(h, d, F, f), O !== d && H(h, O, j, f)), j = F = void 0, I = h)) : H(h, d = Math.ceil(o.toPixels(a, !0)), i, f))), !s)
            }, () => {
                y(this, "renderedCanvas"), delete this.buildKDTree, this.options && this.buildKDTree(), Y.debug.timeKDTree && console.timeEnd("kd tree building")
            }))
        }

        function O(e) {
            let t = !0;
            if (this.chart.options && this.chart.options.boost && (t = void 0 === this.chart.options.boost.enabled || this.chart.options.boost.enabled), !t || !this.boosted) return e.call(this);
            this.chart.boosted = !0;
            let i = U(this.chart, this);
            i && (M(i, this), i.pushSeries(this)), G(this)
        }

        function X(e) {
            if (this.boosted) {
                if (B(this)) return {};
                if (this.xAxis.isPanning || this.yAxis.isPanning) return this
            }
            return e.apply(this, [].slice.call(arguments, 1))
        }

        function V(t) {
            let i = this.options.data;
            if (C(this.chart) && e[this.type]) {
                let e = this.is("scatter") && !this.is("bubble") && !this.is("heatmap");
                if (!D(this, i) || e || this.options.stacking || !B(this, !0)) {
                    if (this.boosted && (this.xAxis?.isPanning || this.yAxis?.isPanning)) return;
                    e && !this.yAxis.treeGrid ? N.call(this, arguments[1]) : t.apply(this, [].slice.call(arguments, 1)), i = this.processedXData
                }
                if (this.boosted = D(this, i), this.boosted) {
                    let e;
                    this.options.data && this.options.data.length && !v(e = this.getFirstValidPoint(this.options.data)) && !P(e) && x(12, !1, this.chart),
                        function(e) {
                            e.boost = e.boost || {
                                getPoint: t => _(e, t)
                            };
                            let t = e.boost.altered = [];
                            if (["allowDG", "directTouch", "stickyTracking"].forEach(i => {
                                    t.push({
                                        prop: i,
                                        val: e[i],
                                        own: Object.hasOwnProperty.call(e, i)
                                    })
                                }), e.allowDG = !1, e.directTouch = !1, e.stickyTracking = !0, e.finishedAnimating = !0, e.labelBySeries && (e.labelBySeries = e.labelBySeries.destroy()), e.is("scatter") && e.data.length) {
                                for (let t of e.data) t?.destroy?.();
                                e.data.length = 0, e.points.length = 0, delete e.processedData
                            }
                        }(this)
                } else ! function(e) {
                    let t = e.boost,
                        i = e.chart,
                        s = i.boost;
                    if (s?.markerGroup)
                        for (let e of (s.markerGroup.destroy(), s.markerGroup = void 0, i.series)) e.markerGroup = void 0, e.markerGroup = e.plotGroup("markerGroup", "markers", "visible", 1, i.seriesGroup).addClass("highcharts-tracker");
                    t && ((t.altered || []).forEach(t => {
                        t.own ? e[t.prop] = t.val : delete e[t.prop]
                    }), t.clear && t.clear()), (i.seriesGroup || e.group)?.clip()
                }(this)
            } else t.apply(this, [].slice.call(arguments, 1))
        }

        function j(e) {
            let t = e.apply(this, [].slice.call(arguments, 1));
            return this.boost && t ? this.boost.getPoint(t) : t
        }
        return {
            compose: function(i, s, r) {
                if (E(u, "Boost.Series")) {
                    let o = f().plotOptions,
                        n = i.prototype;
                    if (p(i, "destroy", L), p(i, "hide", z), r && (n.renderCanvas = I), k(n, "getExtremes", X), k(n, "processData", V), k(n, "searchPoint", j), ["translate", "generatePoints", "drawTracker", "drawPoints", "render"].forEach(t => (function(t, i, s) {
                            function r(t) {
                                let i = this.options.stacking && ("translate" === s || "generatePoints" === s);
                                this.boosted && !i && C(this.chart) && "heatmap" !== this.type && "treemap" !== this.type && e[this.type] && 0 !== this.options.boostThreshold ? "render" === s && this.renderCanvas && this.renderCanvas() : t.call(this)
                            }
                            if (k(t, s, r), "translate" === s)
                                for (let e of ["column", "arearange", "columnrange", "heatmap", "treemap"]) i[e] && k(i[e].prototype, s, r)
                        })(n, s, t)), t.forEach(e => {
                            let t = o[e];
                            t && (t.boostThreshold = 5e3, t.boostData = [], s[e].prototype.fillOpacity = !0)
                        }), r) {
                        let {
                            area: e,
                            areaspline: t,
                            bubble: i,
                            column: r,
                            heatmap: o,
                            scatter: n,
                            treemap: a
                        } = s;
                        if (e && A(e.prototype, {
                                fill: !0,
                                fillOpacity: !0,
                                sampling: !0
                            }), t && A(t.prototype, {
                                fill: !0,
                                fillOpacity: !0,
                                sampling: !0
                            }), i) {
                            let e = i.prototype;
                            delete e.buildKDTree, k(e, "markerAttribs", function(e) {
                                return !this.boosted && e.apply(this, [].slice.call(arguments, 1))
                            })
                        }
                        r && A(r.prototype, {
                            fill: !0,
                            sampling: !0
                        }), n && (n.prototype.fill = !0), [o, a].forEach(e => {
                            e && k(e.prototype, "drawPoints", O)
                        })
                    }
                }
                return i
            },
            destroyGraphics: w,
            eachAsync: R,
            getPoint: _
        }
    }), i(t, "Extensions/Boost/NamedColors.js", [], function() {
        return {
            defaultHTMLColorMap: {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                feldspar: "#d19275",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                grey: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgrey: "#d3d3d3",
                lightgreen: "#90ee90",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslateblue: "#8470ff",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                violetred: "#d02090",
                wheat: "#f5deb3",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            }
        }
    }), i(t, "Extensions/Boost/Boost.js", [t["Extensions/Boost/BoostChart.js"], t["Extensions/Boost/BoostSeries.js"], t["Core/Globals.js"], t["Extensions/Boost/NamedColors.js"], t["Core/Utilities.js"]], function(e, t, i, s, r) {
        let {
            doc: o,
            win: n
        } = i, {
            addEvent: a,
            error: l
        } = r, h = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];

        function d() {
            let e;
            if (void 0 !== n.WebGLRenderingContext) {
                e = o.createElement("canvas");
                for (let t = 0; t < h.length; ++t) try {
                    if (null != e.getContext(h[t])) return !0
                } catch (e) {}
            }
            return !1
        }
        return {
            compose: function(r, o, n, h, f) {
                let u = d();
                u || (void 0 !== i.initCanvasBoost ? i.initCanvasBoost() : l(26)), f && !f.names.lightgoldenrodyellow && (f.names = {
                    ...f.names,
                    ...s.defaultHTMLColorMap
                }), e.compose(r, u), t.compose(n, h, u), a(o, "setExtremes", function(e) {
                    for (let t of [this.chart, ...this.series].map(e => e.renderTarget).filter(Boolean)) {
                        let {
                            horiz: i,
                            pos: s
                        } = this, r = i ? "scaleX" : "scaleY", o = i ? "translateX" : "translateY", n = t?.[r] ?? 1, a = 1, l = 0, h = 1, d = "none";
                        this.isPanning && (a = (e.scale ?? 1) * n, l = (t?.[o] || 0) - a * (e.move || 0) + n * s - a * s, h = .7, d = "blur(3px)"), t?.attr({
                            [r]: a,
                            [o]: l
                        }).css({
                            transition: "250ms filter, 250ms opacity",
                            filter: d,
                            opacity: h
                        })
                    }
                })
            },
            hasWebGLSupport: d
        }
    }), i(t, "masters/modules/boost.src.js", [t["Core/Globals.js"], t["Extensions/Boost/Boost.js"]], function(e, t) {
        return e.hasWebGLSupport = t.hasWebGLSupport, t.compose(e.Chart, e.Axis, e.Series, e.seriesTypes, e.Color), e
    })
});