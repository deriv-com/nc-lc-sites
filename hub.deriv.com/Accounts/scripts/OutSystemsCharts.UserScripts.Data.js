!
/**
 * Highcharts JS v11.4.0 (2024-03-04)
 *
 * Data module
 *
 * (c) 2012-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(e) {
    "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/data", ["highcharts"], function(t) {
        return e(t), e.Highcharts = t, e
    }) : e("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(e) {
    "use strict";
    var t = e ? e._modules : {};

    function s(e, t, s, r) {
        e.hasOwnProperty(t) || (e[t] = r.apply(null, s), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: t,
                module: e[t]
            }
        })))
    }
    s(t, "Core/HttpUtilities.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], function(e, t) {
        let {
            win: s
        } = e, {
            discardElement: r,
            objectEach: i
        } = t, a = {
            ajax: function(e) {
                let t = {
                        json: "application/json",
                        xml: "application/xml",
                        text: "text/plain",
                        octet: "application/octet-stream"
                    },
                    s = new XMLHttpRequest;

                function r(t, s) {
                    e.error && e.error(t, s)
                }
                if (!e.url) return !1;
                s.open((e.type || "get").toUpperCase(), e.url, !0), e.headers && e.headers["Content-Type"] || s.setRequestHeader("Content-Type", t[e.dataType || "json"] || t.text), i(e.headers, function(e, t) {
                    s.setRequestHeader(t, e)
                }), e.responseType && (s.responseType = e.responseType), s.onreadystatechange = function() {
                    let t;
                    if (4 === s.readyState) {
                        if (200 === s.status) {
                            if ("blob" !== e.responseType && (t = s.responseText, "json" === e.dataType)) try {
                                t = JSON.parse(t)
                            } catch (e) {
                                if (e instanceof Error) return r(s, e)
                            }
                            return e.success && e.success(t, s)
                        }
                        r(s, s.responseText)
                    }
                }, e.data && "string" != typeof e.data && (e.data = JSON.stringify(e.data)), s.send(e.data)
            },
            getJSON: function(e, t) {
                a.ajax({
                    url: e,
                    success: t,
                    dataType: "json",
                    headers: {
                        "Content-Type": "text/plain"
                    }
                })
            },
            post: function(e, t, a) {
                let n = new s.FormData;
                i(t, function(e, t) {
                    n.append(t, e)
                }), n.append("b64", "true");
                let {
                    filename: o,
                    type: l
                } = t;
                return s.fetch(e, {
                    method: "POST",
                    body: n,
                    ...a
                }).then(e => {
                    e.ok && e.text().then(e => {
                        let t = document.createElement("a");
                        t.href = `data:${l};base64,${e}`, t.download = o, t.click(), r(t)
                    })
                })
            }
        };
        return a
    }), s(t, "Extensions/Data.js", [t["Core/Chart/Chart.js"], t["Core/Defaults.js"], t["Core/Globals.js"], t["Core/HttpUtilities.js"], t["Core/Series/Point.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t, s, r, i, a, n) {
        let {
            getOptions: o
        } = t, {
            doc: l
        } = s, {
            ajax: u
        } = r, {
            seriesTypes: h
        } = a, {
            addEvent: d,
            defined: m,
            extend: c,
            fireEvent: p,
            isNumber: f,
            merge: g,
            objectEach: C,
            pick: x,
            splat: y
        } = n;

        function T(e) {
            return !!(e && (e.rowsURL || e.csvURL || e.columnsURL))
        }
        class v {
            static data(e, t = {}, s) {
                return new v(e, t, s)
            }
            static rowsToColumns(e) {
                let t, s, r, i, a;
                if (e)
                    for (t = 0, a = [], s = e.length; t < s; t++)
                        for (r = 0, i = e[t].length; r < i; r++) a[r] || (a[r] = []), a[r][t] = e[t][r];
                return a
            }
            constructor(e, t = {}, s) {
                this.rowsToColumns = v.rowsToColumns, this.dateFormats = {
                    "YYYY/mm/dd": {
                        regex: /^([0-9]{4})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{1,2})$/,
                        parser: function(e) {
                            return e ? Date.UTC(+e[1], e[2] - 1, +e[3]) : NaN
                        }
                    },
                    "dd/mm/YYYY": {
                        regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,
                        parser: function(e) {
                            return e ? Date.UTC(+e[3], e[2] - 1, +e[1]) : NaN
                        },
                        alternative: "mm/dd/YYYY"
                    },
                    "mm/dd/YYYY": {
                        regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,
                        parser: function(e) {
                            return e ? Date.UTC(+e[3], e[1] - 1, +e[2]) : NaN
                        }
                    },
                    "dd/mm/YY": {
                        regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,
                        parser: function(e) {
                            if (!e) return NaN;
                            let t = new Date,
                                s = +e[3];
                            return s > t.getFullYear() - 2e3 ? s += 1900 : s += 2e3, Date.UTC(s, e[2] - 1, +e[1])
                        },
                        alternative: "mm/dd/YY"
                    },
                    "mm/dd/YY": {
                        regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,
                        parser: function(e) {
                            return e ? Date.UTC(+e[3] + 2e3, e[1] - 1, +e[2]) : NaN
                        }
                    }
                }, this.chart = s, this.chartOptions = t, this.options = e, this.rawColumns = [], this.init(e, t, s)
            }
            init(e, t, s) {
                let r = e.decimalPoint,
                    i;
                t && (this.chartOptions = t), s && (this.chart = s), "." !== r && "," !== r && (r = void 0), this.options = e, this.columns = e.columns || this.rowsToColumns(e.rows) || [], this.firstRowAsNames = x(e.firstRowAsNames, this.firstRowAsNames, !0), this.decimalRegex = r && RegExp("^(-?[0-9]+)" + r + "([0-9]+)$"), void 0 !== this.liveDataTimeout && clearTimeout(this.liveDataTimeout), this.rawColumns = [], this.columns.length && (this.dataFound(), i = !T(e)), i || (i = this.fetchLiveData()), i || (i = !!this.parseCSV().length), i || (i = !!this.parseTable().length), i || (i = this.parseGoogleSpreadsheet()), !i && e.afterComplete && e.afterComplete()
            }
            getColumnDistribution() {
                let e = this.chartOptions,
                    t = this.options,
                    s = [],
                    r = function(e) {
                        return (h[e || "line"].prototype.pointArrayMap || [0]).length
                    },
                    i = function(e) {
                        return h[e || "line"].prototype.pointArrayMap
                    },
                    a = e && e.chart && e.chart.type,
                    n = [],
                    o = [],
                    l = t && t.seriesMapping || e && e.series && e.series.map(function() {
                        return {
                            x: 0
                        }
                    }) || [],
                    u = 0,
                    d;
                (e && e.series || []).forEach(e => {
                    n.push(r(e.type || a))
                }), l.forEach(e => {
                    s.push(e.x || 0)
                }), 0 === s.length && s.push(0), l.forEach(t => {
                    let s = new R,
                        l = n[u] || r(a),
                        h = (e && e.series || [])[u] || {},
                        c = i(h.type || a),
                        p = c || ["y"];
                    for ((m(t.x) || h.isCartesian || !c) && s.addColumnReader(t.x, "x"), C(t, function(e, t) {
                            "x" !== t && s.addColumnReader(e, t)
                        }), d = 0; d < l; d++) s.hasReader(p[d]) || s.addColumnReader(void 0, p[d]);
                    o.push(s), u++
                });
                let c = i(a);
                void 0 === c && (c = ["y"]), this.valueCount = {
                    global: r(a),
                    xColumns: s,
                    individual: n,
                    seriesBuilders: o,
                    globalPointArrayMap: c
                }
            }
            dataFound() {
                this.options.switchRowsAndColumns && (this.columns = this.rowsToColumns(this.columns)), this.getColumnDistribution(), this.parseTypes(), !1 !== this.parsed() && this.complete()
            }
            parseCSV(e) {
                let t = this,
                    s = this.columns = [],
                    r = e || this.options,
                    i = void 0 !== r.startColumn && r.startColumn ? r.startColumn : 0,
                    a = r.endColumn || Number.MAX_VALUE,
                    n = [],
                    o = {
                        ",": 0,
                        ";": 0,
                        "    ": 0
                    },
                    l = r.csv,
                    u = void 0 !== r.startRow && r.startRow ? r.startRow : 0,
                    h = r.endRow || Number.MAX_VALUE,
                    d, m, c = 0;
                if (l && r.beforeParse && (l = r.beforeParse.call(this, l)), l) {
                    if (m = l.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split(r.lineDelimiter || "\n"), (!u || u < 0) && (u = 0), (!h || h >= m.length) && (h = m.length - 1), r.itemDelimiter) d = r.itemDelimiter;
                    else {
                        let e, s, i;
                        d = null, e = 0, s = 0, i = !1, m.some(function(t, r) {
                            let i = !1,
                                a, n, l, u = "";
                            if (r > 13) return !0;
                            for (let r = 0; r < t.length; r++) {
                                if (a = t[r], n = t[r + 1], l = t[r - 1], "#" === a) return;
                                if ('"' === a) {
                                    if (i) {
                                        if ('"' !== l && '"' !== n) {
                                            for (;
                                                " " === n && r < t.length;) n = t[++r];
                                            void 0 !== o[n] && o[n]++, i = !1
                                        }
                                    } else i = !0
                                } else void 0 !== o[a] ? (isNaN(Date.parse(u = u.trim())) ? (isNaN(u) || !isFinite(u)) && o[a]++ : o[a]++, u = "") : u += a;
                                "," === a && s++, "." === a && e++
                            }
                        }), o[";"] > o[","] ? i = ";" : (o[","], o[";"], i = ","), r.decimalPoint || (e > s ? r.decimalPoint = "." : r.decimalPoint = ",", t.decimalRegex = RegExp("^(-?[0-9]+)" + r.decimalPoint + "([0-9]+)$")), d = i
                    }
                    let e = 0;
                    for (c = u; c <= h; c++) "#" === m[c][0] ? e++ : function(e, t, o, l) {
                        let u = 0,
                            h = "",
                            m = "",
                            c = "",
                            p = "",
                            f = 0,
                            g = 0;

                        function C(t) {
                            h = e[t], m = e[t - 1], c = e[t + 1]
                        }

                        function x(e) {
                            n.length < g + 1 && n.push([e]), n[g][n[g].length - 1] !== e && n[g].push(e)
                        }

                        function y() {
                            if (i > f || f > a) {
                                ++f, p = "";
                                return
                            }
                            r.columnTypes || (!isNaN(parseFloat(p)) && isFinite(p) ? (p = parseFloat(p), x("number")) : isNaN(Date.parse(p)) ? x("string") : (p = p.replace(/\//g, "-"), x("date"))), s.length < g + 1 && s.push([]), s[g][t] = p, p = "", ++g, ++f
                        }
                        if (e.trim().length && "#" !== e.trim()[0]) {
                            for (; u < e.length; u++)
                                if (C(u), '"' === h)
                                    for (C(++u); u < e.length && ('"' !== h || '"' === m || '"' === c);)('"' !== h || '"' === h && '"' !== m) && (p += h), C(++u);
                                else h === d ? y() : p += h;
                            y()
                        }
                    }(m[c], c - u - e);
                    (!r.columnTypes || 0 === r.columnTypes.length) && n.length && n[0].length && "date" === n[0][1] && !r.dateFormat && (r.dateFormat = function(e, s) {
                        let i = "YYYY/mm/dd",
                            a = [],
                            n = [],
                            o, l = [],
                            u, h = 0,
                            d = !1,
                            m;
                        for ((!s || s > e.length) && (s = e.length); h < s; h++)
                            if (void 0 !== e[h] && e[h] && e[h].length)
                                for (m = 0, o = e[h].trim().replace(/\//g, " ").replace(/\-/g, " ").replace(/\./g, " ").split(" "), l = ["", "", ""]; m < o.length; m++) m < l.length && (o[m] = parseInt(o[m], 10), o[m] && (n[m] = !n[m] || n[m] < o[m] ? o[m] : n[m], void 0 !== a[m] ? a[m] !== o[m] && (a[m] = !1) : a[m] = o[m], o[m] > 31 ? o[m] < 100 ? l[m] = "YY" : l[m] = "YYYY" : o[m] > 12 && o[m] <= 31 ? (l[m] = "dd", d = !0) : l[m].length || (l[m] = "mm")));
                        if (d) {
                            for (m = 0; m < a.length; m++) !1 !== a[m] ? n[m] > 12 && "YY" !== l[m] && "YYYY" !== l[m] && (l[m] = "YY") : n[m] > 12 && "mm" === l[m] && (l[m] = "dd");
                            return (3 === l.length && "dd" === l[1] && "dd" === l[2] && (l[2] = "YY"), u = l.join("/"), (r.dateFormats || t.dateFormats)[u]) ? u : (p("deduceDateFailed"), i)
                        }
                        return i
                    }(s[0])), this.dataFound()
                }
                return s
            }
            parseTable() {
                let e = this.options,
                    t = this.columns || [],
                    s = e.startRow || 0,
                    r = e.endRow || Number.MAX_VALUE,
                    i = e.startColumn || 0,
                    a = e.endColumn || Number.MAX_VALUE;
                if (e.table) {
                    let n = e.table;
                    "string" == typeof n && (n = l.getElementById(n)), [].forEach.call(n.getElementsByTagName("tr"), (e, n) => {
                        n >= s && n <= r && [].forEach.call(e.children, (e, r) => {
                            let o = t[r - i],
                                l = 1;
                            if (("TD" === e.tagName || "TH" === e.tagName) && r >= i && r <= a)
                                for (t[r - i] || (t[r - i] = []), t[r - i][n - s] = e.innerHTML; n - s >= l && void 0 === o[n - s - l];) o[n - s - l] = null, l++
                        })
                    }), this.dataFound()
                }
                return t
            }
            fetchLiveData() {
                let e = this,
                    t = this.chart,
                    s = this.options,
                    r = s.enablePolling,
                    i = g(s),
                    a = 0,
                    n = 1e3 * (s.dataRefreshRate || 2);
                return !!T(s) && (n < 1e3 && (n = 1e3), delete s.csvURL, delete s.rowsURL, delete s.columnsURL, function o(l) {
                    function h(i, h, d) {
                        if (!i || !/^(http|\/|\.\/|\.\.\/)/.test(i)) return i && s.error && s.error("Invalid URL"), !1;

                        function m() {
                            r && t.liveDataURL === i && (e.liveDataTimeout = setTimeout(o, n))
                        }
                        return l && (clearTimeout(e.liveDataTimeout), t.liveDataURL = i), u({
                            url: i,
                            dataType: d || "json",
                            success: function(e) {
                                t && t.series && h(e), m()
                            },
                            error: function(e, t) {
                                return ++a < 3 && m(), s.error && s.error(t, e)
                            }
                        }), !0
                    }
                    h(i.csvURL, function(e) {
                        t.update({
                            data: {
                                csv: e
                            }
                        })
                    }, "text") || h(i.rowsURL, function(e) {
                        t.update({
                            data: {
                                rows: e
                            }
                        })
                    }) || h(i.columnsURL, function(e) {
                        t.update({
                            data: {
                                columns: e
                            }
                        })
                    })
                }(!0), T(s))
            }
            parseGoogleSpreadsheet() {
                let e = this,
                    t = this.options,
                    s = t.googleSpreadsheetKey,
                    r = this.chart,
                    i = Math.max(1e3 * (t.dataRefreshRate || 2), 4e3),
                    a = () => {
                        if (t.googleSpreadsheetRange) return t.googleSpreadsheetRange;
                        let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                            s = (e.charAt(t.startColumn || 0) || "A") + ((t.startRow || 0) + 1),
                            r = e.charAt(x(t.endColumn, -1)) || "ZZ";
                        return m(t.endRow) && (r += t.endRow + 1), `${s}:${r}`
                    };
                return s && (delete t.googleSpreadsheetKey, function r(n) {
                    u({
                        url: ["https://sheets.googleapis.com/v4/spreadsheets", s, "values", a(), "?alt=json&majorDimension=COLUMNS&valueRenderOption=UNFORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING&key=" + t.googleAPIKey].join("/"),
                        dataType: "json",
                        success: function(s) {
                            n(s), t.enablePolling && (e.liveDataTimeout = setTimeout(function() {
                                r(n)
                            }, i))
                        },
                        error: function(e, s) {
                            return t.error && t.error(s, e)
                        }
                    })
                }(function(t) {
                    let s = t.values;
                    if (!s || 0 === s.length) return !1;
                    let i = s.reduce((e, t) => Math.max(e, t.length), 0);
                    s.forEach(e => {
                        for (let t = 0; t < i; t++) void 0 === e[t] && (e[t] = null)
                    }), r && r.series ? r.update({
                        data: {
                            columns: s
                        }
                    }) : (e.columns = s, e.dataFound())
                })), !1
            }
            trim(e, t) {
                return "string" == typeof e && (e = e.replace(/^\s+|\s+$/g, ""), t && /^-?[0-9\s]+$/.test(e) && (e = e.replace(/\s/g, "")), this.decimalRegex && (e = e.replace(this.decimalRegex, "$1.$2"))), e
            }
            parseTypes() {
                let e = this.columns || [],
                    t = e.length;
                for (; t--;) this.parseColumn(e[t], t)
            }
            parseColumn(e, t) {
                let s = this.rawColumns,
                    r = this.columns,
                    i = this.firstRowAsNames,
                    a = -1 !== this.valueCount.xColumns.indexOf(t),
                    n = [],
                    o = this.chartOptions,
                    l = (this.options.columnTypes || [])[t],
                    u = a && o && o.xAxis && "category" === y(o.xAxis)[0].type || "string" === l,
                    h = m(e.name),
                    d = e.length,
                    c, p, g, C, x, T, v;
                for (s[t] || (s[t] = []); d--;) c = n[d] || e[d], g = this.trim(c), p = parseFloat(C = this.trim(c, !0)), void 0 === s[t][d] && (s[t][d] = g), u || 0 === d && i && !h ? e[d] = "" + g : +C === p ? (e[d] = p, p > 31536e6 && "float" !== l ? e.isDatetime = !0 : e.isNumeric = !0, void 0 !== e[d + 1] && (v = p > e[d + 1])) : (g && g.length && (x = this.parseDate(c)), a && f(x) && "float" !== l ? (n[d] = c, e[d] = x, e.isDatetime = !0, void 0 !== e[d + 1] && ((T = x > e[d + 1]) !== v && void 0 !== v && (this.alternativeFormat ? (this.dateFormat = this.alternativeFormat, d = e.length, this.alternativeFormat = this.dateFormats[this.dateFormat].alternative) : e.unsorted = !0), v = T)) : (e[d] = "" === g ? null : g, 0 !== d && (e.isDatetime || e.isNumeric) && (e.mixed = !0)));
                if (a && e.mixed && (r[t] = s[t]), a && v && this.options.sort)
                    for (t = 0; t < r.length; t++) r[t].reverse(), i && r[t].unshift(r[t].pop())
            }
            parseDate(e) {
                let t = this.options.parseDate,
                    s, r, i, a = this.options.dateFormat || this.dateFormat,
                    n;
                if (t) s = t(e);
                else if ("string" == typeof e) {
                    if (a)(i = this.dateFormats[a]) || (i = this.dateFormats["YYYY/mm/dd"]), (n = e.match(i.regex)) && (s = i.parser(n));
                    else
                        for (r in this.dateFormats)
                            if (i = this.dateFormats[r], n = e.match(i.regex)) {
                                this.dateFormat = a = r, this.alternativeFormat = i.alternative, s = i.parser(n);
                                break
                            }! n && (e.match(/:.+(GMT|UTC|[Z+-])/) && (e = e.replace(/\s*(?:GMT|UTC)?([+-])(\d\d)(\d\d)$/, "$1$2:$3").replace(/(?:\s+|GMT|UTC)([+-])/, "$1").replace(/(\d)\s*(?:GMT|UTC|Z)$/, "$1+00:00")), "object" == typeof(n = Date.parse(e)) && null !== n && n.getTime ? s = n.getTime() - 6e4 * n.getTimezoneOffset() : f(n) && (s = n - 6e4 * new Date(n).getTimezoneOffset()))
                }
                return s
            }
            getData() {
                if (this.columns) return this.rowsToColumns(this.columns).slice(1)
            }
            parsed() {
                if (this.options.parsed) return this.options.parsed.call(this, this.columns)
            }
            complete() {
                let e, t, s, r, i, a, n, o, l, u, h, d;
                let c = this.columns,
                    p = this.options,
                    f = [];
                if ([].length = c.length, p.complete || p.afterComplete) {
                    if (this.firstRowAsNames)
                        for (r = 0; r < c.length; r++) {
                            let e = c[r];
                            m(e.name) || (e.name = x(e.shift(), "").toString())
                        }
                    for (n = 0, t = [], u = function(e, t) {
                            let s, r, i;
                            let a = [],
                                n = [];
                            for (r = 0; r < e; r += 1) a.push(!0);
                            for (s = 0; s < t.length; s += 1)
                                for (r = 0, i = t[s].getReferencedColumnIndexes(); r < i.length; r += 1) a[i[r]] = !1;
                            for (r = 0; r < a.length; r += 1) a[r] && n.push(r);
                            return n
                        }(c.length, this.valueCount.seriesBuilders); n < this.valueCount.seriesBuilders.length; n++)(l = this.valueCount.seriesBuilders[n]).populateColumns(u) && f.push(l);
                    for (; u.length > 0;) {
                        for ((l = new R).addColumnReader(0, "x"), -1 !== (d = u.indexOf(0)) && u.splice(d, 1), r = 0; r < this.valueCount.global; r++) l.addColumnReader(void 0, this.valueCount.globalPointArrayMap[r]);
                        l.populateColumns(u) && f.push(l)
                    }
                    if (f.length > 0 && f[0].readers.length > 0 && void 0 !== (h = c[f[0].readers[0].columnIndex]) && (h.isDatetime ? e = "datetime" : h.isNumeric || (e = "category")), "category" === e)
                        for (n = 0; n < f.length; n++)
                            for (a = 0, l = f[n]; a < l.readers.length; a++) "x" === l.readers[a].configName && (l.readers[a].configName = "name");
                    for (n = 0; n < f.length; n++) {
                        for (i = 0, l = f[n], s = []; i < c[0].length; i++) s[i] = l.read(c, i);
                        t[n] = {
                            data: s
                        }, l.name && (t[n].name = l.name), "category" === e && (t[n].turboThreshold = 0)
                    }
                    o = {
                        series: t
                    }, e && (o.xAxis = {
                        type: e
                    }, "category" === e && (o.xAxis.uniqueNames = !1)), p.complete && p.complete(o), p.afterComplete && p.afterComplete(o)
                }
            }
            update(e, t) {
                let s = this.chart,
                    r = s.options;
                e && (e.afterComplete = function(e) {
                    e && (e.xAxis && s.xAxis[0] && e.xAxis.type === s.xAxis[0].options.type && delete e.xAxis, s.update(e, t, !0))
                }, g(!0, r.data, e), r.data && r.data.googleSpreadsheetKey && !e.columns && delete r.data.columns, this.init(r.data))
            }
        }
        d(e, "init", function(e) {
            let t = this,
                s = e.args[1],
                r = o().data,
                i = e.args[0] || {};
            if ((r || i && i.data) && !t.hasDataDef) {
                t.hasDataDef = !0;
                let a = g(r, i.data);
                t.data = new v(c(a, {
                    afterComplete: function(e) {
                        let r, a;
                        if (Object.hasOwnProperty.call(i, "series")) {
                            if ("object" == typeof i.series)
                                for (r = Math.max(i.series.length, e && e.series ? e.series.length : 0); r--;) a = i.series[r] || {}, i.series[r] = g(a, e && e.series ? e.series[r] : {});
                            else delete i.series
                        }
                        i = g(e, i), t.init(i, s)
                    }
                }), i, t), e.preventDefault()
            }
        });
        class R {
            constructor() {
                this.readers = [], this.pointIsArray = !0
            }
            populateColumns(e) {
                let t = !0;
                return this.readers.forEach(t => {
                    void 0 === t.columnIndex && (t.columnIndex = e.shift())
                }), this.readers.forEach(e => {
                    void 0 === e.columnIndex && (t = !1)
                }), t
            }
            read(e, t) {
                let s = this.pointIsArray,
                    r = s ? [] : {};
                if (this.readers.forEach(a => {
                        let n = e[a.columnIndex][t];
                        s ? r.push(n) : a.configName.indexOf(".") > 0 ? i.prototype.setNestedProperty(r, n, a.configName) : r[a.configName] = n
                    }), void 0 === this.name && this.readers.length >= 2) {
                    let t = [];
                    this.readers.forEach(function(e) {
                        ("x" === e.configName || "name" === e.configName || "y" === e.configName) && void 0 !== e.columnIndex && t.push(e.columnIndex)
                    }), t.length >= 2 && (t.shift(), t.sort(function(e, t) {
                        return e - t
                    })), this.name = e[x(t.shift(), 0)].name
                }
                return r
            }
            addColumnReader(e, t) {
                this.readers.push({
                    columnIndex: e,
                    configName: t
                }), "x" === t || "y" === t || void 0 === t || (this.pointIsArray = !1)
            }
            getReferencedColumnIndexes() {
                let e, t;
                let s = [];
                for (e = 0; e < this.readers.length; e += 1) void 0 !== (t = this.readers[e]).columnIndex && s.push(t.columnIndex);
                return s
            }
            hasReader(e) {
                let t;
                for (t = 0; t < this.readers.length; t += 1)
                    if (this.readers[t].configName === e) return !0
            }
        }
        return v
    }), s(t, "masters/modules/data.src.js", [t["Core/Globals.js"], t["Core/HttpUtilities.js"], t["Extensions/Data.js"]], function(e, t, s) {
        return e.Data = e.Data || s, e.HttpUtilities = e.HttpUtilities || t, e.ajax = e.HttpUtilities.ajax, e.data = e.Data.data, e.getJSON = e.HttpUtilities.getJSON, e.post = e.HttpUtilities.post, e
    })
}); //# sourceMappingURL=data.js.map