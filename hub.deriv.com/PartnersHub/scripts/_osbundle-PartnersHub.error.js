try {
    Promise.all([import("./_oschunk-7KS6UKKW.js")]).then(function(r) {
        var o = r[0];
        Promise.all([import("./_oschunk-7GWZ6HW5.js"), import("./_oschunk-JVSAMRW4.js")]).then(function(i) {
            var e = i[0],
                n = i[1].default,
                t = e;
            t.ErrorScreen.initializeErrorPage(n, t.Application.default)
        })
    })
} catch (r) {
    console.error(r)
}