import {
    ia as b
} from "./_oschunk-2JKANR6M.js";
import {
    c as a,
    h as g
} from "./_oschunk-DVBKI63I.js";
var O = {
        staticEntities: {}
    },
    x = O.staticEntities;

function w(o, r, n, u) {
    return new Promise(function(t, p) {
        function T() {
            return g(this, null, function*() {
                let i = `https://${o.ServerUrl}/.well-known/openid-configuration`;
                try {
                    let c = yield fetch(i);
                    if (!c.ok) throw new Error(`HTTP error! Status: ${c.status}`);
                    let s = yield c.json();
                    return localStorage.setItem("config.oidc_endpoints", JSON.stringify(s)), t(), s
                } catch (c) {
                    return t(), console.error("Error fetching OIDC configuration:", c), {
                        error: c.message
                    }
                }
            })
        }
        return a(T, "fetchOIDCConfiguration"), T()
    })
}
a(w, "default");

function S(o, r, n, u) {
    return new Promise(function(t, p) {
        function T() {
            return g(this, null, function*() {
                let c = new URLSearchParams(window.location.search),
                    s = c.get("code"),
                    h = c.get("state"),
                    D = localStorage.getItem("oauth_state"),
                    m = localStorage.getItem("pkce_code_verifier");
                if (!h || h !== D) return o.isError = !0, console.error("Invalid state parameter"), t(), {
                    error: "State validation failed"
                };
                if (!s) return o.isError = !0, console.error("Authorization code is missing"), t(), {
                    error: "Authorization code is missing"
                };
                try {
                    let y = JSON.parse(localStorage.getItem("config.oidc_endpoints"));
                    if (!y || !y.token_endpoint) throw o.isError = !0, t(), new Error("Token endpoint not found in OIDC configuration.");
                    let C = y.token_endpoint,
                        f = new URLSearchParams;
                    f.append("grant_type", "authorization_code"), f.append("redirect_uri", `${window.location.origin}/PartnersHub/callback`), f.append("code", s), f.append("code_verifier", m), f.append("client_id", o.AppID);
                    let A = yield fetch(C, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            Accept: "application/json"
                        },
                        body: f
                    });
                    if (!A.ok) throw o.isError = !0, console.log(o.isError), new Error(`Token exchange failed: ${A.status}`);
                    let v = yield A.json();
                    return localStorage.setItem("id_token", v.id_token), yield i(v.access_token), t(), v
                } catch (y) {
                    return console.error("Error during token exchange:", y), t(), o.isError = !0, {
                        error: y.message
                    }
                }
            })
        }
        a(T, "handleCallback");

        function i(c) {
            return g(this, null, function*() {
                var C;
                let s = (C = o.ServerUrl) != null ? C : "",
                    y = `https://${["green.derivws.com","red.derivws.com","blue.derivws.com"].includes(s)?"oauth.deriv.com":s}/oauth2/legacy/tokens`;
                try {
                    let f = yield fetch(y, {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${c}`,
                            "Content-Type": "application/json"
                        }
                    });
                    if (!f.ok) throw o.isError = !0, new Error(`Fetching legacy tokens failed: ${f.status}`);
                    let A = yield f.json();
                    o.isError = !1, o.LegacyTokens = JSON.stringify(A), localStorage.removeItem("pkce_code_verifier"), localStorage.removeItem("oauth_state"), document.cookie = "logged_state=true; path=/; Secure; domain=.deriv.com", t()
                } catch (f) {
                    o.isError = !0, console.error("Error fetching legacy tokens:", f), t()
                }
            })
        }
        a(i, "fetchLegacyTokens"), T()
    })
}
a(S, "default");

function k(o, r, n, u) {
    function t(i = 32) {
        let c = new Uint8Array(i);
        return window.crypto.getRandomValues(c), Array.from(c, s => s.toString(16).padStart(2, "0")).join("")
    }
    a(t, "generateRandomString");

    function p(i) {
        return g(this, null, function*() {
            let s = new TextEncoder().encode(i),
                h = yield crypto.subtle.digest("SHA-256", s);
            return btoa(String.fromCharCode(...new Uint8Array(h))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
        })
    }
    a(p, "generateCodeChallenge");

    function T() {
        return g(this, null, function*() {
            var D;
            let i = (D = o.AppId) != null ? D : "",
                c = `${window.location.origin}/PartnersHub/callback`,
                s = "code",
                h = "openid";
            try {
                let m = t(32),
                    y = yield p(m), C = t(32);
                localStorage.setItem("pkce_code_verifier", m), localStorage.setItem("oauth_state", C);
                let f = JSON.parse(localStorage.getItem("config.oidc_endpoints"));
                (!f || !f.authorization_endpoint) && r.FetchWellKnownConfiguration(ServerUrl);
                let A = `${f.authorization_endpoint}?client_id=${encodeURIComponent(i)}&redirect_uri=${encodeURIComponent(c)}&response_type=${encodeURIComponent(s)}&scope=${encodeURIComponent(h)}&state=${encodeURIComponent(C)}&code_challenge=${encodeURIComponent(y)}&code_challenge_method=S256`;
                window.location.href = A
            } catch (m) {
                console.error("Error redirecting to authorization endpoint:", m)
            }
        })
    }
    a(T, "redirectToAuthorizationEndpoint"), T()
}
a(k, "default");
var e = b,
    I = class I extends e.Controller.BaseModuleController {
        constructor(r, n, u, t) {
            super(r, n, u, t)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(r) {
            this._clientActionProxies = r
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(r) {
            this._roles = r
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(r) {
            this._defaultTimeout = r
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
a(I, "Controller");
var E = I,
    d = new E,
    l = d;
d.fetchWellKnownConfiguration$Action = function(o, r) {
    return e.Logger.startActiveSpan("FetchWellKnownConfiguration", function(n) {
        return n && (n.setAttribute("code.function", "FetchWellKnownConfiguration"), n.setAttribute("outsystems.function.key", "d1d9b71a-cfa0-4ae6-a08b-7a10bfc3802e"), n.setAttribute("outsystems.function.owner.name", "OIDCAuthentication"), n.setAttribute("outsystems.function.owner.key", "0b60f851-41c4-4dce-ac7e-b1079241a5a3"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            r = l.callContext(r);
            var u = new e.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("OIDCAuthentication.FetchWellKnownConfiguration$vars")));
            return u.value.serverUrlInLocal = o, e.Flow.executeAsyncFlow(function() {
                return e.Logger.startActiveSpan("FetchOpenIDConfiguration", function(t) {
                    t && (t.setAttribute("code.function", "FetchOpenIDConfiguration"), t.setAttribute("outsystems.function.key", "1b495a9c-e93d-4d76-953c-36a688f94e31"), t.setAttribute("outsystems.function.owner.name", "OIDCAuthentication"), t.setAttribute("outsystems.function.owner.key", "0b60f851-41c4-4dce-ac7e-b1079241a5a3"), t.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteAsyncJSNode(w, "FetchOpenIDConfiguration", "FetchWellKnownConfiguration", {
                            ServerUrl: e.DataConversion.JSNodeParamConverter.to(u.value.serverUrlInLocal, e.DataTypes.DataTypes.Text)
                        }, function(p) {}, {}, {})
                    } finally {
                        t && t.end()
                    }
                }, 1)
            }).then(function() {})
        }, function() {
            n && n.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("OIDCAuthentication.FetchWellKnownConfiguration$vars", [{
    name: "ServerUrl",
    attrName: "serverUrlInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}]);
d.clientActionProxies.fetchWellKnownConfiguration$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(d.default.fetchWellKnownConfiguration$Action.bind(l, e.DataConversion.JSNodeParamConverter.from(o, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(r) {
        return {}
    })
};
d.handleCallbackPage$Action = function(o, r, n) {
    return e.Logger.startActiveSpan("HandleCallbackPage", function(u) {
        return u && (u.setAttribute("code.function", "HandleCallbackPage"), u.setAttribute("outsystems.function.key", "76f02a3d-a683-4f4b-a1f0-64346c72d221"), u.setAttribute("outsystems.function.owner.name", "OIDCAuthentication"), u.setAttribute("outsystems.function.owner.key", "0b60f851-41c4-4dce-ac7e-b1079241a5a3"), u.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            n = l.callContext(n);
            var t = new e.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("OIDCAuthentication.HandleCallbackPage$vars")));
            t.value.appIdInLocal = o, t.value.serverUrlInLocal = r;
            var p = new e.DataTypes.VariableHolder,
                T = new e.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("OIDCAuthentication.HandleCallbackPage$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return e.Logger.startActiveSpan("HandleTokenEndpointExchange", function(i) {
                    i && (i.setAttribute("code.function", "HandleTokenEndpointExchange"), i.setAttribute("outsystems.function.key", "f56fe61f-32f2-4f46-a159-76487f4c1c52"), i.setAttribute("outsystems.function.owner.name", "OIDCAuthentication"), i.setAttribute("outsystems.function.owner.key", "0b60f851-41c4-4dce-ac7e-b1079241a5a3"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteAsyncJSNode(S, "HandleTokenEndpointExchange", "HandleCallbackPage", {
                            ServerUrl: e.DataConversion.JSNodeParamConverter.to(t.value.serverUrlInLocal, e.DataTypes.DataTypes.Text),
                            AppID: e.DataConversion.JSNodeParamConverter.to(t.value.appIdInLocal, e.DataTypes.DataTypes.Text),
                            isError: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                            LegacyTokens: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                        }, function(c) {
                            var s = new(l.constructor.getVariableGroupType("OIDCAuthentication.HandleCallbackPage$handleTokenEndpointExchangeJSResult"));
                            return s.isErrorOut = e.DataConversion.JSNodeParamConverter.from(c.isError, e.DataTypes.DataTypes.Boolean), s.legacyTokensOut = e.DataConversion.JSNodeParamConverter.from(c.LegacyTokens, e.DataTypes.DataTypes.Text), s
                        }, {}, {})
                    } finally {
                        i && i.end()
                    }
                }, 1).then(function(i) {
                    p.value = i
                }).then(function() {
                    T.value.isErrorOut = p.value.isErrorOut, T.value.legacyTokensOut = p.value.legacyTokensOut
                })
            }).then(function() {
                return T.value
            })
        }, function() {
            u && u.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("OIDCAuthentication.HandleCallbackPage$vars", [{
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ServerUrl",
    attrName: "serverUrlInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("OIDCAuthentication.HandleCallbackPage$handleTokenEndpointExchangeJSResult", [{
    name: "isError",
    attrName: "isErrorOut",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: a(function() {
        return !1
    }, "defaultValue")
}, {
    name: "LegacyTokens",
    attrName: "legacyTokensOut",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("OIDCAuthentication.HandleCallbackPage$outVars", [{
    name: "isError",
    attrName: "isErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: a(function() {
        return !1
    }, "defaultValue")
}, {
    name: "LegacyTokens",
    attrName: "legacyTokensOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}]);
d.clientActionProxies.handleCallbackPage$Action = function(o, r) {
    return o = o === void 0 ? "" : o, r = r === void 0 ? "" : r, l.executeActionInsideJSNode(d.default.handleCallbackPage$Action.bind(l, e.DataConversion.JSNodeParamConverter.from(o, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(r, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {
            isError: e.DataConversion.JSNodeParamConverter.to(n.isErrorOut, e.DataTypes.DataTypes.Boolean),
            LegacyTokens: e.DataConversion.JSNodeParamConverter.to(n.legacyTokensOut, e.DataTypes.DataTypes.Text)
        }
    })
};
d.redirectToAuthorizationEndpoint$Action = function(o, r) {
    return e.Logger.startActiveSpan("RedirectToAuthorizationEndpoint", function(n) {
        n && (n.setAttribute("code.function", "RedirectToAuthorizationEndpoint"), n.setAttribute("outsystems.function.key", "98d05d12-535b-43ef-8e04-2eb4f5c40358"), n.setAttribute("outsystems.function.owner.name", "OIDCAuthentication"), n.setAttribute("outsystems.function.owner.key", "0b60f851-41c4-4dce-ac7e-b1079241a5a3"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            r = l.callContext(r);
            var u = new e.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("OIDCAuthentication.RedirectToAuthorizationEndpoint$vars")));
            u.value.appiDInLocal = o, e.Logger.startActiveSpan("RedirectToAuthorizationEndpoint", function(t) {
                t && (t.setAttribute("code.function", "RedirectToAuthorizationEndpoint"), t.setAttribute("outsystems.function.key", "254f1147-b0a6-448e-991a-7aa7652f46da"), t.setAttribute("outsystems.function.owner.name", "OIDCAuthentication"), t.setAttribute("outsystems.function.owner.key", "0b60f851-41c4-4dce-ac7e-b1079241a5a3"), t.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(k, "RedirectToAuthorizationEndpoint", "RedirectToAuthorizationEndpoint", {
                        AppId: e.DataConversion.JSNodeParamConverter.to(u.value.appiDInLocal, e.DataTypes.DataTypes.Text)
                    }, function(p) {}, {
                        FetchWellKnownConfiguration: d.default.clientActionProxies.fetchWellKnownConfiguration$Action
                    }, {})
                } finally {
                    t && t.end()
                }
            }, 1);
            return
        } finally {
            n && n.end()
        }
    }, 1)
};
d.constructor.registerVariableGroupType("OIDCAuthentication.RedirectToAuthorizationEndpoint$vars", [{
    name: "AppiD",
    attrName: "appiDInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}]);
d.clientActionProxies.redirectToAuthorizationEndpoint$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(d.default.redirectToAuthorizationEndpoint$Action.bind(l, e.DataConversion.JSNodeParamConverter.from(o, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(r) {
        return {}
    })
};
var Q = d;
export {
    Q as a
};