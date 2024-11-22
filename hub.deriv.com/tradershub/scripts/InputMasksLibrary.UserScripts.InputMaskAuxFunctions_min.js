function beforeMaskNum(e, n, t, r) {
    return "" === (e = "string" == typeof e || e instanceof String ? e.replaceAll(/[^0-9.,-]+/g, "") : e.toString()) ? 0 : ("." !== n && (e = e.replace(".", n)), t && (e = numParse(e, r, n)), e)
}

function numParse(e, n, t) {
    var r = e.split(t);
    if (2 === r.length) {
        var o = n - r[1].length;
        return e.concat("0".repeat(o < 0 ? 0 : o))
    }
    return e.concat("0".repeat(n))
}

function unmaskNum(e, n, t, r) {
    return "" === r ? r : (("string" == typeof e || e instanceof String) && (e = (e = e.replaceAll(/[^0-9.,-]+/g, "")).endsWith(".") ? e.replace(".", "") : e), e = e.replaceAll(t, ""), "." === n ? e : e.replace(n, "."))
}

function beforePasteNum(e) {
    return e = e.replaceAll(/[^0-9.,-]+/g, "")
}

function blurFocus() {
    var e = document.activeElement;
    e.blur(), e.focus()
}

function getTextMask(e, n, t) {
    return {
        jitMasking: e,
        autoUnmask: n,
        numericInput: t,
        oncleared: blurFocus
    }
}

function getCurrencyConf(e, n, t, r, o, a, u) {
    var i = {
        radixPoint: r,
        groupSeparator: o,
        prefix: n,
        suffix: t,
        autoUnmask: !0,
        digitsOptional: a,
        numericInput: u,
        showMaskOnFocus: !0,
        onBeforeMask: function(n, t) {
            return beforeMaskNum(n, r, u, e)
        },
        onUnMask: function(e, n) {
            return unmaskNum(e, r, o, n)
        },
        oncleared: blurFocus,
        onBeforePaste: function(e, n) {
            return beforePasteNum(e.toLowerCase())
        }
    };
    return 0 !== e && (i.digits = e), i
}

function getPercentageConf(e, n, t, r) {
    return {
        digitsOptional: t,
        radixPoint: n,
        autoUnmask: !0,
        numericInput: r,
        digits: e,
        oncleared: blurFocus
    }
}

function getNumConf(e, n, t, r, o) {
    return {
        autoUnmask: !0,
        groupSeparator: t,
        autoGroup: !0,
        radixPoint: n,
        digitsOptional: r,
        nullable: !0,
        numericInput: o,
        digits: e,
        onBeforeMask: function(t, r) {
            return beforeMaskNum(t, n, o, e)
        },
        onUnMask: function(e, r) {
            return unmaskNum(e, n, t, r)
        },
        oncleared: blurFocus,
        onBeforePaste: function(e, n) {
            return beforePasteNum(e.toLowerCase())
        }
    }
}

function beforeDatePaste(e) {
    return e = e.replaceAll(/[^0-9\/-]+/g, "")
}

function unmaskDate(e, n, t) {
    if (e == n) return "";
    var r = [],
        o = t.toLowerCase().split("-"),
        a = "-";
    1 == o.length && (o = t.toLowerCase().split("/"), a = "/");
    var u = o.indexOf("dd"),
        i = o.indexOf("mm"),
        s = o.indexOf("yyyy"),
        f = e.toLowerCase().split("-"),
        l = n.toLowerCase().split("-");
    1 == f.length && (f = e.toLowerCase().split("/"), l = n.toLowerCase().split("/"));
    var c = l.indexOf("dd"),
        m = l.indexOf("mm"),
        d = l.indexOf("yyyy");
    return d < 0 && (d = l.indexOf("yy")), -1 != c && (r[u] = f[c]), -1 != m && (r[i] = f[m]), -1 != d && (r[s] = f[d]), r.filter(Boolean).join(a)
}

function maskDate(e, n, t) {
    if (Inputmask.isValid(e, {
            alias: n
        }) || "" === e) return e;
    var r = n.toLowerCase().split("-"),
        o = "-";
    if (1 == r.length && (r = n.toLowerCase().split("/"), o = "/"), 2 == r.length) return e;
    var a = [],
        u = t.toLowerCase().split("-"),
        i = e.toLowerCase().split("-");
    1 == u.length && (u = t.toLowerCase().split("/"), i = e.toLowerCase().split("/"));
    var s = u.indexOf("dd"),
        f = u.indexOf("mm"),
        l = u.indexOf("yyyy"),
        c = r.indexOf("dd"),
        m = r.indexOf("mm"),
        d = r.indexOf("yyyy");
    return d < 0 && (d = r.indexOf("yy")), -1 != c && (a[c] = i[s]), -1 != m && (a[m] = i[f]), -1 != d && (a[d] = i[l]), a.filter(Boolean).join(o)
}

function getDateConf(e, n) {
    return {
        autoUnmask: !0,
        removeMaskOnSubmit: !0,
        inputFormat: e,
        onUnMask: function(t, r) {
            return unmaskDate(t, e, n)
        },
        onBeforePaste: function(e, n) {
            return beforeDatePaste(e.toLowerCase())
        },
        oncleared: blurFocus,
        onBeforeMask: function(n) {
            return maskDate(n, e, "yyyy-mm-dd")
        }
    }
}