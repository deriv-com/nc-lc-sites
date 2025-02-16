!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Client side exporting module
 *
 * (c) 2015-2024 Torstein Honsi / Oystein Moseng
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/offline-exporting", ["highcharts", "highcharts/modules/exporting"], function(e) {
        return t(e), t.Highcharts = e, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var e = t ? t._modules : {};

    function o(t, e, o, n) {
        t.hasOwnProperty(e) || (t[e] = n.apply(null, o), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: e,
                module: t[e]
            }
        })))
    }
    o(e, "Extensions/DownloadURL.js", [e["Core/Globals.js"]], function(t) {
        let {
            isSafari: e,
            win: o,
            win: {
                document: n
            }
        } = t, i = o.URL || o.webkitURL || o;

        function r(t) {
            let e = t.replace(/filename=.*;/, "").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/);
            if (e && e.length > 3 && o.atob && o.ArrayBuffer && o.Uint8Array && o.Blob && i.createObjectURL) {
                let t = o.atob(e[3]),
                    n = new o.ArrayBuffer(t.length),
                    r = new o.Uint8Array(n);
                for (let e = 0; e < r.length; ++e) r[e] = t.charCodeAt(e);
                return i.createObjectURL(new o.Blob([r], {
                    type: e[1]
                }))
            }
        }
        return {
            dataURLtoBlob: r,
            downloadURL: function(t, i) {
                let l = o.navigator,
                    a = n.createElement("a");
                if ("string" != typeof t && !(t instanceof String) && l.msSaveOrOpenBlob) {
                    l.msSaveOrOpenBlob(t, i);
                    return
                }
                t = "" + t;
                let s = /Edge\/\d+/.test(l.userAgent);
                if ((e && "string" == typeof t && 0 === t.indexOf("data:application/pdf") || s || t.length > 2e6) && !(t = r(t) || "")) throw Error("Failed to convert to blob");
                if (void 0 !== a.download) a.href = t, a.download = i, n.body.appendChild(a), a.click(), n.body.removeChild(a);
                else try {
                    if (!o.open(t, "chart")) throw Error("Failed to open window")
                } catch {
                    o.location.href = t
                }
            }
        }
    }), o(e, "Extensions/OfflineExporting/OfflineExportingDefaults.js", [], function() {
        return {
            libURL: "https://code.highcharts.com/11.4.0/lib/",
            menuItemDefinitions: {
                downloadPNG: {
                    textKey: "downloadPNG",
                    onclick: function() {
                        this.exportChartLocal()
                    }
                },
                downloadJPEG: {
                    textKey: "downloadJPEG",
                    onclick: function() {
                        this.exportChartLocal({
                            type: "image/jpeg"
                        })
                    }
                },
                downloadSVG: {
                    textKey: "downloadSVG",
                    onclick: function() {
                        this.exportChartLocal({
                            type: "image/svg+xml"
                        })
                    }
                },
                downloadPDF: {
                    textKey: "downloadPDF",
                    onclick: function() {
                        this.exportChartLocal({
                            type: "application/pdf"
                        })
                    }
                }
            }
        }
    }), o(e, "Extensions/OfflineExporting/OfflineExporting.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Chart/Chart.js"], e["Core/Defaults.js"], e["Extensions/DownloadURL.js"], e["Extensions/Exporting/Exporting.js"], e["Core/Globals.js"], e["Core/HttpUtilities.js"], e["Extensions/OfflineExporting/OfflineExportingDefaults.js"], e["Core/Utilities.js"]], function(t, e, o, n, i, r, l, a, s) {
        var c;
        let {
            defaultOptions: d
        } = o, {
            downloadURL: f
        } = n, {
            doc: g,
            win: h
        } = r, {
            ajax: p
        } = l, {
            addEvent: u,
            error: m,
            extend: y,
            fireEvent: x,
            merge: b
        } = s;
        return t.allowedAttributes.push("data-z-index", "fill-opacity", "filter", "rx", "ry", "stroke-dasharray", "stroke-linejoin", "stroke-opacity", "text-anchor", "transform", "version", "viewBox", "visibility", "xmlns", "xmlns:xlink"), t.allowedTags.push("desc", "clippath", "g"),
            function(e) {
                function o(t, o) {
                    let n = this,
                        l = b(n.options.exporting, t),
                        a = function(t) {
                            !1 === l.fallbackToExportServer ? l.error ? l.error(l, t) : m(28, !0) : n.exportChart(l)
                        };
                    if (r.isMS && n.styledMode && !i.inlineAllowlist.length && i.inlineAllowlist.push(/^blockSize/, /^border/, /^caretColor/, /^color/, /^columnRule/, /^columnRuleColor/, /^cssFloat/, /^cursor/, /^fill$/, /^fillOpacity/, /^font/, /^inlineSize/, /^length/, /^lineHeight/, /^opacity/, /^outline/, /^parentRule/, /^rx$/, /^ry$/, /^stroke/, /^textAlign/, /^textAnchor/, /^textDecoration/, /^transform/, /^vectorEffect/, /^visibility/, /^x$/, /^y$/), r.isMS && ("application/pdf" === l.type || n.container.getElementsByTagName("image").length && "image/svg+xml" !== l.type) || "application/pdf" === l.type && [].some.call(n.container.getElementsByTagName("image"), function(t) {
                            let e = t.getAttribute("href");
                            return "" !== e && "string" == typeof e && 0 !== e.indexOf("data:")
                        })) {
                        a(Error("Image type not supported for this chart/browser."));
                        return
                    }
                    n.getSVGForLocalExport(l, o || {}, a, function(t) {
                        t.indexOf("<foreignObject") > -1 && "image/svg+xml" !== l.type && (r.isMS || "application/pdf" === l.type) ? a(Error("Image type not supported for charts with embedded HTML")) : e.downloadSVGLocal(t, y({
                            filename: n.getFilename()
                        }, l), a, () => x(n, "exportChartLocalSuccess"))
                    })
                }

                function n(t, e) {
                    let o = g.getElementsByTagName("head")[0],
                        n = g.createElement("script");
                    n.type = "text/javascript", n.src = t, n.onload = e, n.onerror = function() {
                        m("Error loading script " + t)
                    }, o.appendChild(n)
                }

                function l(t, o, n, i) {
                    let r = this,
                        l = t => r.sanitizeSVG(t, f),
                        a = () => {
                            h && m === p && i(l(d.innerHTML))
                        },
                        s = (t, e, o) => {
                            ++m, o.imageElement.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), a()
                        },
                        c, d, f, g = null,
                        h, p = 0,
                        m = 0;
                    r.unbindGetSVG = u(r, "getSVG", t => {
                        f = t.chartCopy.options, p = (h = (d = t.chartCopy.container.cloneNode(!0)) && d.getElementsByTagName("image") || []).length
                    }), r.getSVGForExport(t, o);
                    try {
                        if (!h || !h.length) {
                            i(l(d.innerHTML));
                            return
                        }
                        for (let o = 0; o < h.length; o++)(g = (c = h[o]).getAttributeNS("http://www.w3.org/1999/xlink", "href")) ? e.imageToDataUrl(g, "image/png", {
                            imageElement: c
                        }, t.scale, s, n, n, n) : (m++, c.parentNode.removeChild(c), o--, a())
                    } catch (t) {
                        n(t)
                    }
                    r.unbindGetSVG()
                }

                function s(t, o, n, i, r, l, a, s, c) {
                    let d = new h.Image,
                        f, p = () => {
                            setTimeout(function() {
                                let e;
                                let l = g.createElement("canvas"),
                                    s = l.getContext && l.getContext("2d");
                                try {
                                    if (s) {
                                        l.height = d.height * i, l.width = d.width * i, s.drawImage(d, 0, 0, l.width, l.height);
                                        try {
                                            e = l.toDataURL(o), r(e, o, n, i)
                                        } catch (e) {
                                            f(t, o, n, i)
                                        }
                                    } else a(t, o, n, i)
                                } finally {
                                    c && c(t, o, n, i)
                                }
                            }, e.loadEventDeferDelay)
                        },
                        u = () => {
                            s(t, o, n, i), c && c(t, o, n, i)
                        };
                    f = () => {
                        d = new h.Image, f = l, d.crossOrigin = "Anonymous", d.onload = p, d.onerror = u, d.src = t
                    }, d.onload = p, d.onerror = u, d.src = t
                }

                function c(t) {
                    let o = h.navigator.userAgent,
                        n = o.indexOf("WebKit") > -1 && 0 > o.indexOf("Chrome");
                    try {
                        if (!n && -1 === t.indexOf("<foreignObject")) return e.domurl.createObjectURL(new h.Blob([t], {
                            type: "image/svg+xml;charset-utf-16"
                        }))
                    } catch (t) {}
                    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(t)
                }

                function w(t, e, o, n) {
                    let i = (Number(t.getAttribute("width")) + 2 * e) * o,
                        r = (Number(t.getAttribute("height")) + 2 * e) * o,
                        l = new h.jspdf.jsPDF(r > i ? "p" : "l", "pt", [i, r]);
                    [].forEach.call(t.querySelectorAll('*[visibility="hidden"]'), function(t) {
                        t.parentNode.removeChild(t)
                    });
                    let a = t.querySelectorAll("linearGradient");
                    for (let t = 0; t < a.length; t++) {
                        let e = a[t].querySelectorAll("stop"),
                            o = 0;
                        for (; o < e.length && "0" === e[o].getAttribute("offset") && "0" === e[o + 1].getAttribute("offset");) e[o].remove(), o++
                    } [].forEach.call(t.querySelectorAll("tspan"), t => {
                        "​" === t.textContent && (t.textContent = " ", t.setAttribute("dx", -5))
                    }), l.svg(t, {
                        x: 0,
                        y: 0,
                        width: i,
                        height: r,
                        removeInvalid: !0
                    }).then(() => n(l.output("datauristring")))
                }
                e.CanVGRenderer = {}, e.domurl = h.URL || h.webkitURL || h, e.loadEventDeferDelay = r.isMS ? 150 : 0, e.compose = function(t) {
                    let e = t.prototype;
                    return e.exportChartLocal || (e.getSVGForLocalExport = l, e.exportChartLocal = o, b(!0, d.exporting, a)), t
                }, e.downloadSVGLocal = function(o, i, r, l) {
                    let a = g.createElement("div"),
                        u = i.type || "image/png",
                        m = (i.filename || "chart") + "." + ("image/svg+xml" === u ? "svg" : u.split("/")[1]),
                        y = i.scale || 1,
                        x, b, v, E = i.libURL || d.exporting.libURL,
                        C = !0,
                        L = i.pdfFont;
                    E = "/" !== E.slice(-1) ? E + "/" : E;
                    let S = (t, e) => {
                            let o, n;
                            let i = (t, e) => {
                                h.jspdf.jsPDF.API.events.push(["initialized", function() {
                                    this.addFileToVFS(t, e), this.addFont(t, "HighchartsFont", t), this.getFontList().HighchartsFont || this.setFont("HighchartsFont")
                                }])
                            };
                            L && (n = t.textContent || "", !/[^\u0000-\u007F\u200B]+/.test(n)) && (L = void 0);
                            let r = ["normal", "italic", "bold", "bolditalic"],
                                l = () => {
                                    let t = r.shift();
                                    if (!t) return e();
                                    let n = L && L[t];
                                    n ? p({
                                        url: n,
                                        responseType: "blob",
                                        success: (e, n) => {
                                            let r = new FileReader;
                                            r.onloadend = function() {
                                                if ("string" == typeof this.result) {
                                                    let e = this.result.split(",")[1];
                                                    i(t, e), "normal" === t && (o = e)
                                                }
                                                l()
                                            }, r.readAsDataURL(n.response)
                                        },
                                        error: l
                                    }) : (o && i(t, o), l())
                                };
                            l()
                        },
                        j = () => {
                            let e, n;
                            t.setElementHTML(a, o);
                            let i = a.getElementsByTagName("text"),
                                s = function(t, e) {
                                    let o = t;
                                    for (; o && o !== a;) {
                                        if (o.style[e]) {
                                            let n = o.style[e];
                                            "fontSize" === e && /em$/.test(n) && (n = Math.round(16 * parseFloat(n)) + "px"), t.style[e] = n;
                                            break
                                        }
                                        o = o.parentNode
                                    }
                                };
                            [].forEach.call(i, function(t) {
                                for (["fontFamily", "fontSize"].forEach(e => {
                                        s(t, e)
                                    }), t.style.fontFamily = L && L.normal ? "HighchartsFont" : String(t.style.fontFamily && t.style.fontFamily.split(" ").splice(-1)), e = t.getElementsByTagName("title"), [].forEach.call(e, function(e) {
                                        t.removeChild(e)
                                    }), n = t.getElementsByClassName("highcharts-text-outline"); n.length > 0;) t.removeChild(n[0])
                            });
                            let c = a.querySelector("svg");
                            c && S(c, () => {
                                w(c, 0, y, t => {
                                    try {
                                        f(t, m), l && l()
                                    } catch (t) {
                                        r(t)
                                    }
                                })
                            })
                        };
                    if ("image/svg+xml" === u) try {
                        void 0 !== h.MSBlobBuilder ? ((b = new h.MSBlobBuilder).append(o), x = b.getBlob("image/svg+xml")) : x = c(o), f(x, m), l && l()
                    } catch (t) {
                        r(t)
                    } else "application/pdf" === u ? h.jspdf && h.jspdf.jsPDF ? j() : (C = !0, n(E + "jspdf.js", function() {
                        n(E + "svg2pdf.js", j)
                    })) : (x = c(o), v = function() {
                        try {
                            e.domurl.revokeObjectURL(x)
                        } catch (t) {}
                    }, s(x, u, {}, y, function(t) {
                        try {
                            f(t, m), l && l()
                        } catch (t) {
                            r(t)
                        }
                    }, function() {
                        let t = g.createElement("canvas"),
                            e = t.getContext("2d"),
                            i = o.match(/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1] * y,
                            a = o.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1] * y,
                            s = function() {
                                h.canvg.Canvg.fromString(e, o).start();
                                try {
                                    f(h.navigator.msSaveOrOpenBlob ? t.msToBlob() : t.toDataURL(u), m), l && l()
                                } catch (t) {
                                    r(t)
                                } finally {
                                    v()
                                }
                            };
                        t.width = i, t.height = a, h.canvg ? s() : (C = !0, n(E + "canvg.js", function() {
                            s()
                        }))
                    }, r, r, function() {
                        C && v()
                    }))
                }, e.getScript = n, e.imageToDataUrl = s, e.svgToDataUrl = c, e.svgToPdf = w
            }(c || (c = {})), c
    }), o(e, "masters/modules/offline-exporting.src.js", [e["Core/Globals.js"], e["Extensions/DownloadURL.js"], e["Extensions/OfflineExporting/OfflineExporting.js"]], function(t, e, o) {
        return t.dataURLtoBlob = t.dataURLtoBlob || e.dataURLtoBlob, t.downloadSVGLocal = o.downloadSVGLocal, t.downloadURL = t.downloadURL || e.downloadURL, o.compose(t.Chart), t
    })
}); //# sourceMappingURL=offline-exporting.js.map