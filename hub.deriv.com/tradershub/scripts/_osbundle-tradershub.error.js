try {
    Promise.all([import("./_oschunk-HWB34NZO.js")]).then(function(r) {
        var a = r[0];
        Promise.all([import("./_oschunk-WAQQH523.js"), import("./_oschunk-CVX56YKZ.js")]).then(function(i) {
            var e = i[0],
                o = i[1].default,
                t = e;
            t.ErrorScreen.initializeErrorPage(o, t.Application.default)
        })
    })
} catch (r) {
    console.error(r)
}