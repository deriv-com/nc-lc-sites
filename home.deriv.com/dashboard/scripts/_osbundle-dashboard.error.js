import {
    a as i
} from "./_oschunk-Y6DPS6WF.js";
import {
    H as o,
    I as a,
    Q as s,
    R as u,
    S as m,
    T as c,
    U as f,
    V as p,
    W as d,
    c as r,
    n,
    v as t
} from "./_oschunk-DFKJJKI4.js";
s(n, {
    applicationDefinition: i
}).then(function() {
    return Promise.all([p(n, {
        dateTimeFormat: new t.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"),
        numberFormat: new t.NumberFormatInfo(".", "")
    }), m(n), c(n, {
        onSettingsUpdated: d
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