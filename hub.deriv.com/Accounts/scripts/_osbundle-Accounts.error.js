try {
    Promise.all([import("./_oschunk-7KS6UKKW.js")]).then(function(r) {
        var n = r[0];
        Promise.all([import("./_oschunk-UTJ73HYK.js"), import("./_oschunk-W5J25MJM.js")]).then(function(i) {
            var e = i[0],
                o = i[1].default,
                t = e;
            t.ErrorScreen.initializeErrorPage(o, t.Application.default)
        })
    })
} catch (r) {
    console.error(r)
}