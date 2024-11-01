!
/**
 * Highcharts JS v11.4.8 (2024-08-29)
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

    function s(t, s, i, a) {
        t.hasOwnProperty(s) || (t[s] = a.apply(null, i), "function" == typeof CustomEvent && e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: s,
                module: t[s]
            }
        })))
    }
    s(t, "Core/HttpUtilities.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], function(e, t) {
        let {
            win: s
        } = e, {
            discardElement: i,
            objectEach: a
        } = t, n = {
            ajax: function(e) {
                let t = {
                        json: "application/json",
                        xml: "application/xml",
                        text: "text/plain",
                        octet: "application/octet-stream"
                    },
                    s = new XMLHttpRequest;

                function i(t, s) {
                    e.error && e.error(t, s)
                }
                if (!e.url) return !1;
                s.open((e.type || "get").toUpperCase(), e.url, !0), e.headers && e.headers["Content-Type"] || s.setRequestHeader("Content-Type", t[e.dataType || "json"] || t.text), a(e.headers, function(e, t) {
                    s.setRequestHeader(t, e)
                }), e.responseType && (s.responseType = e.responseType), s.onreadystatechange = function() {
                    let t;
                    if (4 === s.readyState) {
                        if (200 === s.status) {
                            if ("blob" !== e.responseType && (t = s.responseText, "json" === e.dataType)) try {
                                t = JSON.parse(t)
                            } catch (e) {
                                if (e instanceof Error) return i(s, e)
                            }
                            return e.success && e.success(t, s)
                        }
                        i(s, s.responseText)
                    }
                }, e.data && "string" != typeof e.data && (e.data = JSON.stringify(e.data)), s.send(e.data)
            },
            getJSON: function(e, t) {
                n.ajax({
                    url: e,
                    success: t,
                    dataType: "json",
                    headers: {
                        "Content-Type": "text/plain"
                    }
                })
            },
            post: function(e, t, n) {
                let r = new s.FormData;
                a(t, function(e, t) {
                    r.append(t, e)
                }), r.append("b64", "true");
                let {
                    filename: o,
                    type: l
                } = t;
                return s.fetch(e, {
                    method: "POST",
                    body: r,
                    ...n
                }).then(e => {
                    e.ok && e.text().then(e => {
                        let t = document.createElement("a");
                        t.href = `data:${l};base64,${e}`, t.download = o, t.click(), i(t)
                    })
                })
            }
        };
        return n
    }), s(t, "Extensions/Data.js", [t["Core/Axis/Axis.js"], t["Core/Chart/Chart.js"], t["Core/Defaults.js"], t["Core/Globals.js"], t["Core/HttpUtilities.js"], t["Core/Series/Point.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], function(e, t, s, i, a, n, r, o) {
        let {
            getOptions: l
        } = s, {
            doc: u
        } = i, {
            ajax: h
        } = a, {
            seriesTypes: d
        } = r, {
            addEvent: p,
            defined: m,
            extend: c,
            fireEvent: f,
            isNumber: g,
            merge: x,
            objectEach: C,
            pick: y,
            splat: v
        } = o;

        function T(e) {
            return !!(e && (e.rowsURL || e.csvURL || e.columnsURL))
        }
        class N {
            static data(e, t = {}, s) {
                return new N(e, t, s)
            }
            static rowsToColumns(e) {
                let t, s, i, a, n;
                if (e)
                    for (t = 0, n = [], s = e.length; t < s; t++)
                        for (i = 0, a = e[t].length; i < a; i++) n[i] || (n[i] = []), n[i][t] = e[t][i];
                return n
            }
            constructor(e, t = {}, s) {
                this.rowsToColumns = N.rowsToColumns, this.dateFormats = {
                    "YYYY/mm/dd": {
                        regex: /^(\d{4})[\-\/\.](\d{1,2})[\-\/\.](\d{1,2})$/,
                        parser: function(e) {
                            return e ? Date.UTC(+e[1], +e[2] - 1, +e[3]) : NaN
                        }
                    },
                    "dd/mm/YYYY": {
                        regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{4})$/,
                        parser: function(e) {
                            return e ? Date.UTC(+e[3], +e[2] - 1, +e[1]) : NaN
                        },
                        alternative: "mm/dd/YYYY"
                    },
                    "mm/dd/YYYY": {
                        regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{4})$/,
                        parser: function(e) {
                            return e ? Date.UTC(+e[3], +e[1] - 1, +e[2]) : NaN
                        }
                    },
                    "dd/mm/YY": {
                        regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{2})$/,
                        parser: function(e) {
                            if (!e) return NaN;
                            let t = new Date,
                                s = +e[3];
                            return s > t.getFullYear() - 2e3 ? s += 1900 : s += 2e3, Date.UTC(s, +e[2] - 1, +e[1])
                        },
                        alternative: "mm/dd/YY"
                    },
                    "mm/dd/YY": {
                        regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{2})$/,
                        parser: function(e) {
                            return e ? Date.UTC(+e[3] + 2e3, +e[1] - 1, +e[2]) : NaN
                        }
                    }
                }, this.chart = s, this.chartOptions = t, this.options = e, this.rawColumns = [], this.init(e, t, s)
            }
            init(e, t, s) {
                let i = e.decimalPoint,
                    a;
                t && (this.chartOptions = t), s && (this.chart = s), "." !== i && "," !== i && (i = void 0), this.options = e, this.columns = e.columns || this.rowsToColumns(e.rows) || [], this.firstRowAsNames = y(e.firstRowAsNames, this.firstRowAsNames, !0), this.decimalRegex = i && RegExp("^(-?[0-9]+)" + i + "([0-9]+)$"), void 0 !== this.liveDataTimeout && clearTimeout(this.liveDataTimeout), this.rawColumns = [], this.columns.length && (this.dataFound(), a = !T(e)), a || (a = this.fetchLiveData()), a || (a = !!this.parseCSV().length), a || (a = !!this.parseTable().length), a || (a = this.parseGoogleSpreadsheet()), !a && e.afterComplete && e.afterComplete(this)
            }
            getColumnDistribution() {
                let e = this.chartOptions,
                    t = this.options,
                    s = [],
                    i = function(e = "line") {
                        return (d[e].prototype.pointArrayMap || [0]).length
                    },
                    a = function(e = "line") {
                        return d[e].prototype.pointArrayMap
                    },
                    n = e?.chart?.type,
                    r = [],
                    o = [],
                    l = t?.seriesMapping || e?.series?.map(function() {
                        return {
                            x: 0
                        }
                    }) || [],
                    u = 0;
                (e?.series || []).forEach(e => {
                    r.push(i(e.type || n))
                }), l.forEach(e => {
                    s.push(e.x || 0)
                }), 0 === s.length && s.push(0), l.forEach(t => {
                    let s = new R,
                        l = r[u] || i(n),
                        h = (e?.series ?? [])[u] ?? {},
                        d = a(h.type || n),
                        p = d ?? ["y"];
                    (m(t.x) || h.isCartesian || !d) && s.addColumnReader(t.x, "x"), C(t, function(e, t) {
                        "x" !== t && s.addColumnReader(e, t)
                    });
                    for (let e = 0; e < l; e++) s.hasReader(p[e]) || s.addColumnReader(void 0, p[e]);
                    o.push(s), u++
                });
                let h = a(n);
                void 0 === h && (h = ["y"]), this.valueCount = {
                    global: i(n),
                    xColumns: s,
                    individual: r,
                    seriesBuilders: o,
                    globalPointArrayMap: h
                }
            }
            dataFound() {
                this.options.switchRowsAndColumns && (this.columns = this.rowsToColumns(this.columns)), this.getColumnDistribution(), this.parseTypes(), !1 !== this.parsed() && this.complete()
            }
            parseCSV(e) {
                let t = this,
                    s = this.columns = [],
                    i = e || this.options,
                    a = i.startColumn || 0,
                    n = i.endColumn || Number.MAX_VALUE,
                    r = [],
                    o = {
                        ",": 0,
                        ";": 0,
                        "    ": 0
                    },
                    l = i.csv,
                    u = i.startRow || 0,
                    h = i.endRow || Number.MAX_VALUE,
                    d, p, m = 0;
                if (l && i.beforeParse && (l = i.beforeParse.call(this, l)), l) {
                    if (p = l.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split(i.lineDelimiter || "\n"), (!u || u < 0) && (u = 0), (!h || h >= p.length) && (h = p.length - 1), i.itemDelimiter) d = i.itemDelimiter;
                    else {
                        let e, s, a;
                        e = 0, s = 0, a = !1, p.some(function(t, i) {
                            let a = !1,
                                n, r, l, u = "";
                            if (i > 13) return !0;
                            for (let i = 0; i < t.length; i++) {
                                if (n = t[i], r = t[i + 1], l = t[i - 1], "#" === n) return;
                                if ('"' === n) {
                                    if (a) {
                                        if ('"' !== l && '"' !== r) {
                                            for (;
                                                " " === r && i < t.length;) r = t[++i];
                                            void 0 !== o[r] && o[r]++, a = !1
                                        }
                                    } else a = !0
                                } else void 0 !== o[n] ? (isNaN(Date.parse(u = u.trim())) ? (isNaN(u) || !isFinite(u)) && o[n]++ : o[n]++, u = "") : u += n;
                                "," === n && s++, "." === n && e++
                            }
                        }), o[";"] > o[","] ? a = ";" : (o[","], o[";"], a = ","), i.decimalPoint || (e > s ? i.decimalPoint = "." : i.decimalPoint = ",", t.decimalRegex = RegExp("^(-?[0-9]+)" + i.decimalPoint + "([0-9]+)$")), d = a
                    }
                    let e = 0;
                    for (m = u; m <= h; m++) "#" === p[m][0] ? e++ : function(e, t, o, l) {
                        let u = 0,
                            h = "",
                            p = "",
                            m = "",
                            c = "",
                            f = 0,
                            g = 0;

                        function x(t) {
                            h = e[t], p = e[t - 1], m = e[t + 1]
                        }

                        function C(e) {
                            r.length < g + 1 && r.push([e]), r[g][r[g].length - 1] !== e && r[g].push(e)
                        }

                        function y() {
                            if (a > f || f > n) {
                                ++f, c = "";
                                return
                            }
                            i.columnTypes || (!isNaN(parseFloat(c)) && isFinite(c) ? (c = parseFloat(c), C("number")) : isNaN(Date.parse(c)) ? C("string") : (c = c.replace(/\//g, "-"), C("date"))), s.length < g + 1 && s.push([]), s[g][t] = c, c = "", ++g, ++f
                        }
                        if (e.trim().length && "#" !== e.trim()[0]) {
                            for (; u < e.length; u++)
                                if (x(u), '"' === h)
                                    for (x(++u); u < e.length && ('"' !== h || '"' === p || '"' === m);)('"' !== h || '"' === h && '"' !== p) && (c += h), x(++u);
                                else h === d ? y() : c += h;
                            y()
                        }
                    }(p[m], m - u - e);
                    (!i.columnTypes || 0 === i.columnTypes.length) && r.length && r[0].length && "date" === r[0][1] && !i.dateFormat && (i.dateFormat = function(e, s) {
                        let a = "YYYY/mm/dd",
                            n = [],
                            r = [],
                            o, l = [],
                            u, h = 0,
                            d = !1,
                            p;
                        for ((!s || s > e.length) && (s = e.length); h < s; h++)
                            if (void 0 !== e[h] && e[h]?.length)
                                for (p = 0, o = e[h].trim().replace(/\//g, " ").replace(/\-/g, " ").replace(/\./g, " ").split(" "), l = ["", "", ""]; p < o.length; p++) p < l.length && (o[p] = parseInt(o[p], 10), o[p] && (r[p] = !r[p] || r[p] < o[p] ? o[p] : r[p], void 0 !== n[p] ? n[p] !== o[p] && (n[p] = !1) : n[p] = o[p], o[p] > 31 ? o[p] < 100 ? l[p] = "YY" : l[p] = "YYYY" : o[p] > 12 && o[p] <= 31 ? (l[p] = "dd", d = !0) : l[p].length || (l[p] = "mm")));
                        if (d) {
                            for (p = 0; p < n.length; p++) !1 !== n[p] ? r[p] > 12 && "YY" !== l[p] && "YYYY" !== l[p] && (l[p] = "YY") : r[p] > 12 && "mm" === l[p] && (l[p] = "dd");
                            return (3 === l.length && "dd" === l[1] && "dd" === l[2] && (l[2] = "YY"), u = l.join("/"), (i.dateFormats || t.dateFormats)[u]) ? u : (f(t, "deduceDateFailed"), a)
                        }
                        return a
                    }(s[0])), this.dataFound()
                }
                return s
            }
            parseTable() {
                let e = this.options,
                    t = this.columns || [],
                    s = e.startRow || 0,
                    i = e.endRow || Number.MAX_VALUE,
                    a = e.startColumn || 0,
                    n = e.endColumn || Number.MAX_VALUE;
                if (e.table) {
                    let r = e.table;
                    "string" == typeof r && (r = u.getElementById(r)), [].forEach.call(r.getElementsByTagName("tr"), (e, r) => {
                        r >= s && r <= i && [].forEach.call(e.children, (e, i) => {
                            let o = t[i - a],
                                l = 1;
                            if (("TD" === e.tagName || "TH" === e.tagName) && i >= a && i <= n)
                                for (t[i - a] || (t[i - a] = []), t[i - a][r - s] = e.innerHTML; r - s >= l && void 0 === o[r - s - l];) o[r - s - l] = null, l++
                        })
                    }), this.dataFound()
                }
                return t
            }
            fetchLiveData() {
                let e = this,
                    t = this.chart,
                    s = this.options,
                    i = s.enablePolling,
                    a = x(s),
                    n = 0,
                    r = 1e3 * (s.dataRefreshRate || 2);
                return !!T(s) && (r < 1e3 && (r = 1e3), delete s.csvURL, delete s.rowsURL, delete s.columnsURL, function o(l) {
                    function u(a, u, d) {
                        if (!a || !/^(http|\/|\.\/|\.\.\/)/.test(a)) return a && s.error && s.error("Invalid URL"), !1;

                        function p() {
                            i && t.liveDataURL === a && (e.liveDataTimeout = setTimeout(o, r))
                        }
                        return l && (clearTimeout(e.liveDataTimeout), t.liveDataURL = a), h({
                            url: a,
                            dataType: d || "json",
                            success: function(e) {
                                t?.series && u(e), p()
                            },
                            error: function(e, t) {
                                return ++n < 3 && p(), s.error?.(t, e)
                            }
                        }), !0
                    }
                    u(a.csvURL, function(e) {
                        t.update({
                            data: {
                                csv: e
                            }
                        })
                    }, "text") || u(a.rowsURL, function(e) {
                        t.update({
                            data: {
                                rows: e
                            }
                        })
                    }) || u(a.columnsURL, function(e) {
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
                    i = this.chart,
                    a = Math.max(1e3 * (t.dataRefreshRate || 2), 4e3),
                    n = () => {
                        if (t.googleSpreadsheetRange) return t.googleSpreadsheetRange;
                        let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                            s = (e.charAt(t.startColumn || 0) || "A") + ((t.startRow || 0) + 1),
                            i = e.charAt(y(t.endColumn, -1)) || "ZZ";
                        return m(t.endRow) && (i += t.endRow + 1), `${s}:${i}`
                    };
                return s && (delete t.googleSpreadsheetKey, function i(r) {
                    h({
                        url: ["https://sheets.googleapis.com/v4/spreadsheets", s, "values", n(), "?alt=json&majorDimension=COLUMNS&valueRenderOption=UNFORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING&key=" + t.googleAPIKey].join("/"),
                        dataType: "json",
                        success: function(s) {
                            r(s), t.enablePolling && (e.liveDataTimeout = setTimeout(function() {
                                i(r)
                            }, a))
                        },
                        error: function(e, s) {
                            return t.error?.(s, e)
                        }
                    })
                }(function(t) {
                    let s = t.values;
                    if (!s || 0 === s.length) return !1;
                    let a = s.reduce((e, t) => Math.max(e, t.length), 0);
                    s.forEach(e => {
                        for (let t = 0; t < a; t++) void 0 === e[t] && (e[t] = null)
                    }), i?.series ? i.update({
                        data: {
                            columns: s
                        }
                    }) : (e.columns = s, e.dataFound())
                })), !1
            }
            trim(e, t) {
                return "string" == typeof e && (e = e.replace(/^\s+|\s+$/g, ""), t && /[\d\s]+/.test(e) && (e = e.replace(/\s/g, "")), this.decimalRegex && (e = e.replace(this.decimalRegex, "$1.$2"))), e
            }
            parseTypes() {
                let e = this.columns || [],
                    t = e.length;
                for (; t--;) this.parseColumn(e[t], t)
            }
            parseColumn(e, t) {
                let s = this.rawColumns,
                    i = this.columns = this.columns || [],
                    a = this.firstRowAsNames,
                    n = this.valueCount?.xColumns.indexOf(t) !== -1,
                    r = [],
                    o = this.chartOptions,
                    l = (this.options.columnTypes || [])[t],
                    u = n && o?.xAxis && "category" === v(o.xAxis)[0].type || "string" === l,
                    h = m(e.name),
                    d = e.length,
                    p, c, f, x, C, y, T;
                for (s[t] || (s[t] = []); d--;) p = r[d] || e[d], f = this.trim(p), c = parseFloat(x = this.trim(p, !0)), void 0 === s[t][d] && (s[t][d] = f), u || 0 === d && a && !h ? e[d] = "" + f : +x === c ? (e[d] = c, c > 31536e6 && "float" !== l ? e.isDatetime = !0 : e.isNumeric = !0, void 0 !== e[d + 1] && (T = c > e[d + 1])) : (f?.length && (C = this.parseDate(p)), n && g(C) && "float" !== l ? (r[d] = p, e[d] = C, e.isDatetime = !0, void 0 !== e[d + 1] && ((y = C > e[d + 1]) !== T && void 0 !== T && (this.alternativeFormat ? (this.dateFormat = this.alternativeFormat, d = e.length, this.alternativeFormat = this.dateFormats[this.dateFormat].alternative) : e.unsorted = !0), T = y)) : (e[d] = "" === f ? null : f, 0 !== d && (e.isDatetime || e.isNumeric) && (e.mixed = !0)));
                if (n && e.mixed && (i[t] = s[t]), n && T && this.options.sort) {
                    for (t = 0; t < i.length; t++)
                        if (i[t].reverse(), a) {
                            let e = i[t].pop();
                            e && i[t].unshift(e)
                        }
                }
            }
            parseDate(e) {
                let t = this.options.parseDate,
                    s, i, a, n = this.options.dateFormat || this.dateFormat,
                    r;
                if (t) s = t(e);
                else if ("string" == typeof e) {
                    if (n)(a = this.dateFormats[n]) || (a = this.dateFormats["YYYY/mm/dd"]), (r = e.match(a.regex)) && (s = a.parser(r));
                    else
                        for (i in this.dateFormats)
                            if (a = this.dateFormats[i], r = e.match(a.regex)) {
                                this.dateFormat = n = i, this.alternativeFormat = a.alternative, s = a.parser(r);
                                break
                            }! r && (e.match(/:.+(GMT|UTC|[Z+\-])/) && (e = e.replace(/\s*(?:GMT|UTC)?([+\-])(\d\d)(\d\d)$/, "$1$2:$3").replace(/(?:\s+|GMT|UTC)([+\-])/, "$1").replace(/(\d)\s*(?:GMT|UTC|Z)$/, "$1+00:00")), "object" == typeof(r = Date.parse(e)) && null !== r && r.getTime ? s = r.getTime() - 6e4 * r.getTimezoneOffset() : g(r) && (s = r - 6e4 * new Date(r).getTimezoneOffset()))
                }
                return s
            }
            getData() {
                if (this.columns) return this.rowsToColumns(this.columns)?.slice(1)
            }
            parsed() {
                if (this.options.parsed) return this.options.parsed.call(this, this.columns)
            }
            complete() {
                let e = this.columns = this.columns || [],
                    t = this.options,
                    s = [],
                    i = "linear",
                    a, n, r, o, l, u, h, d, p, c, f;
                if ([].length = e.length, t.complete || t.afterComplete) {
                    if (this.firstRowAsNames)
                        for (r = 0; r < e.length; r++) {
                            let t = e[r];
                            m(t.name) || (t.name = y(t.shift(), "").toString())
                        }
                    for (u = 0, a = [], p = function(e, t) {
                            let s, i, a;
                            let n = [],
                                r = [];
                            for (i = 0; i < e; i += 1) n.push(!0);
                            for (s = 0; s < t.length; s += 1)
                                for (i = 0, a = t[s].getReferencedColumnIndexes(); i < a.length; i += 1) n[a[i]] = !1;
                            for (i = 0; i < n.length; i += 1) n[i] && r.push(i);
                            return r
                        }(e?.length || 0, this.valueCount.seriesBuilders); u < this.valueCount.seriesBuilders.length; u++)(d = this.valueCount.seriesBuilders[u]).populateColumns(p) && s.push(d);
                    for (; p.length > 0;) {
                        for ((d = new R).addColumnReader(0, "x"), -1 !== (f = p.indexOf(0)) && p.splice(f, 1), r = 0; r < this.valueCount.global; r++) d.addColumnReader(void 0, this.valueCount.globalPointArrayMap[r]);
                        d.populateColumns(p) && s.push(d)
                    }
                    if (s.length > 0 && s[0].readers.length > 0 && void 0 !== (c = e?.[s[0].readers[0].columnIndex ?? -1]) && (c.isDatetime ? i = "datetime" : c.isNumeric || (i = "category")), "category" === i)
                        for (u = 0; u < s.length; u++)
                            for (l = 0, d = s[u]; l < d.readers.length; l++) "x" === d.readers[l].configName && (d.readers[l].configName = "name");
                    for (u = 0; u < s.length; u++) {
                        for (o = 0, d = s[u], n = []; o < e[0].length; o++) n[o] = d.read(e, o);
                        a[u] = {
                            data: n,
                            pointStart: n[0] && (d.pointIsArray ? n[0]?.[0] : n[0]?.x) || void 0
                        }, d.name && (a[u].name = d.name), "category" === i && (a[u].turboThreshold = 0, a[u].pointStart = 0)
                    }
                    h = {
                        series: a
                    }, "linear" !== i || this.xAxisOptions && this.xAxisOptions.type !== i ? (this.xAxisOptions = {
                        type: i
                    }, "category" === i && (this.xAxisOptions.uniqueNames = !1)) : i = this.xAxisOptions = void 0, this.chart || x(!0, h, {
                        xAxis: this.xAxisOptions || {}
                    }), t.complete?.(h), t.afterComplete?.(this, h)
                }
            }
            xAxisUpdateHandler(e) {
                let t = this.xAxisOptions;
                t && (!e.options.type && t.type && (e.type = t.type), e.options.uniqueNames || !1 !== t.uniqueNames || (e.uniqueNames = t.uniqueNames))
            }
            update(e, t) {
                let s = this.chart,
                    i = s.options;
                e && (e.afterComplete = function(e, i) {
                    if (!i) return;
                    let a = s.xAxis[0],
                        n = e.xAxisOptions;
                    n && a && (a.type !== n.type && !a.options.type || a.uniqueNames && !1 === n.uniqueNames && void 0 === a.options.uniqueNames) ? a.update({}, !1) : (i?.series || []).forEach(function(e) {
                        delete e.pointStart
                    }), s.update(i, t, !0)
                }, x(!0, i.data, e), i.data?.googleSpreadsheetKey && !e.columns && delete i.data.columns, this.init(i.data || {}, i))
            }
        }
        p(e, "afterSetOptions", function() {
            this.isXAxis && (!this.chart.xAxis.length || this.chart.xAxis[0] === this) && this.chart.data?.xAxisUpdateHandler(this)
        }), p(t, "init", function(e) {
            let t = this,
                s = e.args[1],
                i = l().data,
                a = e.args[0] || {};
            if ((i || a && a.data) && !t.hasDataDef) {
                t.hasDataDef = !0;
                let n = x(i, a.data);
                t.data = new N(c(n, {
                    afterComplete: function(e, i) {
                        let n, r;
                        if (Object.hasOwnProperty.call(a, "series")) {
                            if ("object" == typeof a.series)
                                for (n = Math.max(a.series.length, i?.series?.length ?? 0); n--;) r = a.series[n] || {}, a.series[n] = x(r, i?.series?.[n] ?? {});
                            else delete a.series
                        }
                        a = x(i, a), t.data = e, t.init(a, s)
                    }
                }), a, t), e.preventDefault()
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
                    i = s ? [] : {};
                if (this.readers.forEach(a => {
                        let r = e[a.columnIndex][t];
                        s ? i.push(r) : a.configName.indexOf(".") > 0 ? n.prototype.setNestedProperty(i, r, a.configName) : i[a.configName] = r
                    }), void 0 === this.name && this.readers.length >= 2) {
                    let t = [];
                    this.readers.forEach(function(e) {
                        ("x" === e.configName || "name" === e.configName || "y" === e.configName) && void 0 !== e.columnIndex && t.push(e.columnIndex)
                    }), t.length >= 2 && (t.shift(), t.sort(function(e, t) {
                        return e - t
                    })), this.name = e[y(t.shift(), 0)].name
                }
                return i
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
        return N
    }), s(t, "masters/modules/data.src.js", [t["Core/Globals.js"], t["Core/HttpUtilities.js"], t["Extensions/Data.js"]], function(e, t, s) {
        return e.Data = e.Data || s, e.HttpUtilities = e.HttpUtilities || t, e.ajax = e.HttpUtilities.ajax, e.data = e.Data.data, e.getJSON = e.HttpUtilities.getJSON, e.post = e.HttpUtilities.post, e
    })
});