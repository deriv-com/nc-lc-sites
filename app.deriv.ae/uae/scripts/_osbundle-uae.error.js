import {
    a as i
} from "./_oschunk-7TQRI4EL.js";
import {
    G as o,
    H as a,
    P as s,
    Q as u,
    R as m,
    S as c,
    T as f,
    U as p,
    V as l,
    c as r,
    m as n,
    u as t
} from "./_oschunk-M5BUVJ72.js";
s(n, {
    applicationDefinition: i
}).then(function() {
    return Promise.all([p(n, {
        dateTimeFormat: new t.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"),
        numberFormat: new t.NumberFormatInfo(".", "")
    }), m(n), c(n, {
        onSettingsUpdated: l
    }), f()])
}).then(function() {
    return u({
        initType: a.Application.InitializationType.Minimal
    }).then(function() {
        function e() {
            o.renderErrorScreen(i)
        }
        return r(e, "initView"), e()
    })
}).catch(function(e) {
    console.error(e)
});