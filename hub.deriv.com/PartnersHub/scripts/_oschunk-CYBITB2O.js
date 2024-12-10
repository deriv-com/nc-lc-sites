import {
    a as De,
    b as Me,
    c as Te,
    d as Fe,
    e as $e,
    f as We
} from "./_oschunk-PRYV33EO.js";
import {
    a as Be
} from "./_oschunk-LO5D6MGP.js";
import "./_oschunk-SPFURBIL.js";
import {
    a as de,
    b as ue,
    c as ge,
    d as Ce,
    e as ve,
    f as he,
    g as fe,
    h as me,
    i as pe,
    j as _e
} from "./_oschunk-XPXDBGKQ.js";
import "./_oschunk-6ORR26LH.js";
import {
    a as ce
} from "./_oschunk-AAU3KO3J.js";
import "./_oschunk-7VEVREKX.js";
import "./_oschunk-M6PGXRNF.js";
import {
    a as P
} from "./_oschunk-JIDGT34X.js";
import "./_oschunk-LRO77GHL.js";
import "./_oschunk-D47O3LMJ.js";
import {
    a as le
} from "./_oschunk-UCNPNPZ6.js";
import "./_oschunk-6GUPLSMV.js";
import "./_oschunk-CPXZZQHI.js";
import "./_oschunk-DO3AOXOM.js";
import {
    a as ee
} from "./_oschunk-6Y6HK4H4.js";
import "./_oschunk-QM6TPNLS.js";
import {
    a as se
} from "./_oschunk-B5VQOPQY.js";
import "./_oschunk-PISKEOZB.js";
import "./_oschunk-MQYFLHOB.js";
import "./_oschunk-ND5NIK2B.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    a as xe,
    d as h,
    f as k,
    g as Ne,
    s as G,
    u as Y
} from "./_oschunk-5HXBKFJV.js";
import "./_oschunk-D7X2Q6KG.js";
import {
    a as R
} from "./_oschunk-6WALBPGV.js";
import {
    a as Z,
    g as w,
    i as S
} from "./_oschunk-2Q3BG5XZ.js";
import "./_oschunk-UVWOQOAC.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-GP4JCHX2.js";
import {
    a as v,
    o as ae,
    p as y
} from "./_oschunk-FZ6FUHBV.js";
import {
    a as oe
} from "./_oschunk-S5DOOZ7G.js";
import {
    Ac as ie,
    a as m,
    tf as Ve
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as b
} from "./_oschunk-5KJVGEL7.js";
import {
    c as n,
    h as B
} from "./_oschunk-QHO7QY6K.js";
var p = B(Z());
var C = B(Z());
var Ze = {};

function be(f, a, o, e) {
    let r = localStorage.getItem("token");
    f.Token = r
}
n(be, "default");

function Se(f, a, o, e) {
    return new Promise(function(r, t) {
        let c = localStorage.getItem("loginId"),
            s = localStorage.getItem("token"),
            d = Number(f.CurrentAppId),
            g = f.ServerUrl,
            i = ["green.derivws.com", "red.derivws.com", "blue.derivws.com"].includes(g) ? "oauth.deriv.com" : g;

        function A() {
            c && s && (localStorage.removeItem("loginId"), localStorage.removeItem("token"), localStorage.removeItem("active_user_id"))
        }
        n(A, "removeLocalStorage");

        function I() {
            var ke;
            a.WebsocketLogout(f.ServerUrl, f.CurrentAppId, "EN", s);
            try {
                let Q = window.Analytics.Analytics.getFeatureValue("hydra_be");
                if (!Array.isArray(Q) || !((ke = Q[1]) != null && ke.enabled_for)) throw new Error("Invalid feature value structure");
                if (Q[1].enabled_for.includes(d)) {
                    let re = function(X) {
                        X.data === "logout_complete" && (console.log("Logout process completed."), console.log("Redirecting to oauth..."), window.removeEventListener("message", re), r(), A(), a.RedirectToOauth())
                    };
                    n(re, "onMessage"), console.log("Using OAuth2");
                    let x = document.getElementById("logout-iframe");
                    x || (x = document.createElement("iframe"), x.id = "logout-iframe", x.style.display = "none", document.body.appendChild(x), setTimeout(() => {
                        r(), A(), a.RedirectToOauth()
                    }, 1e4)), x.src = `https://${i}/oauth2/sessions/logout`, window.addEventListener("message", re), x.onerror = X => {
                        console.error("There has been a problem with the iframe operation:", X), window.removeEventListener("message", re), t(X)
                    }
                } else r(), A(), a.RedirectToOauth()
            } catch (Q) {
                r(), A(), a.RedirectToOauth()
            }
        }
        n(I, "performLogout"), I()
    })
}
n(Se, "default");
var u = b; {
    let a = class a extends u.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Ze);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getLanguages$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getLanguages$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getLanguages$AggrRefresh() {
            return this.hasOwnProperty("_getLanguages$AggrRefresh") || (this._getLanguages$AggrRefresh = function() {
                var e = function(r, t, g) {
                    var s = this.model,
                        d = this.controller,
                        g = d.callContext(g);
                    return d.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetLanguages", "screenservices/PartnersHub/PhNavigation/Navigation/ScreenDataSetGetLanguages", "ju9oTEttF0Osw7__y7F6eA", r, t, function(_) {
                        s.variables.getLanguagesAggr.dataFetchStatusAttr = _
                    }, function(_) {
                        s.variables.getLanguagesAggr.replaceWith(u.DataConversion.ServerDataConverter.from(_, s.variables.getLanguagesAggr.constructor))
                    }, void 0, void 0, void 0, g, v, !0)
                }.bind(this);
                return u.Logger.startActiveSpan("GetLanguages", function(r) {
                    return r && (r.setAttribute("code.function", "GetLanguages"), r.setAttribute("outsystems.function.key", "00c40463-d5ab-429f-ac94-ab888375b634"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), u.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._getLanguages$AggrRefresh
        }
        set getLanguages$AggrRefresh(e) {
            this._getLanguages$AggrRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getLanguages$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(s) {
                    return s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "056c9350-89ec-4255-81cd-79e4e74bdd62"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var d = new u.DataTypes.VariableHolder,
                            g = new u.DataTypes.VariableHolder;
                        return u.Flow.executeAsyncFlow(function() {
                            return y.useDevice$Action(e), g.value = u.Logger.startActiveSpan("GetAuthToken", function(_) {
                                _ && (_.setAttribute("code.function", "GetAuthToken"), _.setAttribute("outsystems.function.key", "c86f8bde-111e-4502-ab5b-44ac627e7f38"), _.setAttribute("outsystems.function.owner.name", "PartnersHub"), _.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), _.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(be, "GetAuthToken", "OnReady", {
                                        Token: u.DataConversion.JSNodeParamConverter.to("", u.DataTypes.DataTypes.Text)
                                    }, function(l) {
                                        var i = new(t.constructor.getVariableGroupType("PartnersHub.PhNavigation.Navigation.OnReady$getAuthTokenJSResult"));
                                        return i.tokenOut = u.DataConversion.JSNodeParamConverter.from(l.Token, u.DataTypes.DataTypes.Text), i
                                    }, {}, {})
                                } finally {
                                    _ && _.end()
                                }
                            }, 1), r.flush(), oe.getSettings$Action(v.getServer(), g.value.tokenOut, v.getAppId(), "EN", e).then(function(_) {
                                d.value = _
                            }).then(function() {
                                y.mountLiveChat$Action(d.value.responseOut, e)
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _setLanguageModalId$Action() {
            return this.hasOwnProperty("__setLanguageModalId$Action") || (this.__setLanguageModalId$Action = function(e, r) {
                var t = this.model,
                    c = this.controller,
                    s = this.idService;
                return u.Logger.startActiveSpan("SetLanguageModalId", function(d) {
                    d && (d.setAttribute("code.function", "SetLanguageModalId"), d.setAttribute("outsystems.function.key", "0f2b93ac-69c3-4d87-b76f-d1a7b4d3f7c2"), d.setAttribute("outsystems.function.owner.name", "PartnersHub"), d.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        c.ensureControllerAlive("SetLanguageModalId"), r = c.callContext(r);
                        var g = new u.DataTypes.VariableHolder(new(c.constructor.getVariableGroupType("PartnersHub.PhNavigation.Navigation.SetLanguageModalId$vars")));
                        g.value.modaIdInLocal = e, t.variables.languageModalVar.modalIdAttr = g.value.modaIdInLocal
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__setLanguageModalId$Action
        }
        set _setLanguageModalId$Action(e) {
            this.__setLanguageModalId$Action = e
        }
        get _onClickLanguage$Action() {
            return this.hasOwnProperty("__onClickLanguage$Action") || (this.__onClickLanguage$Action = function(e, r) {
                var t = this.model,
                    c = this.controller,
                    s = this.idService;
                return u.Logger.startActiveSpan("OnClickLanguage", function(d) {
                    d && (d.setAttribute("code.function", "OnClickLanguage"), d.setAttribute("outsystems.function.key", "167d3f64-ef46-4a05-b35d-062f6426bd26"), d.setAttribute("outsystems.function.owner.name", "PartnersHub"), d.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        c.ensureControllerAlive("OnClickLanguage"), r = c.callContext(r);
                        var g = new u.DataTypes.VariableHolder(new(c.constructor.getVariableGroupType("PartnersHub.PhNavigation.Navigation.OnClickLanguage$vars")));
                        g.value.setLanguageInLocal = e, u.SystemActions.setCurrentLocale(g.value.setLanguageInLocal, r), v.setLanguage(g.value.setLanguageInLocal)
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__onClickLanguage$Action
        }
        set _onClickLanguage$Action(e) {
            this.__onClickLanguage$Action = e
        }
        get _navigationOnClick$Action() {
            return this.hasOwnProperty("__navigationOnClick$Action") || (this.__navigationOnClick$Action = function(e, r) {
                var t = this.model,
                    c = this.controller,
                    s = this.idService;
                return u.Logger.startActiveSpan("NavigationOnClick", function(d) {
                    d && (d.setAttribute("code.function", "NavigationOnClick"), d.setAttribute("outsystems.function.key", "266b2b17-e6bd-4f19-9907-05a4c80fbdae"), d.setAttribute("outsystems.function.owner.name", "PartnersHub"), d.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        c.ensureControllerAlive("NavigationOnClick"), r = c.callContext(r);
                        var g = new u.DataTypes.VariableHolder(new(c.constructor.getVariableGroupType("PartnersHub.PhNavigation.Navigation.NavigationOnClick$vars")));
                        if (g.value.screenInLocal = e, g.value.screenInLocal === m.navigation.hub) return u.Navigation.navigateTo(u.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__navigationOnClick$Action
        }
        set _navigationOnClick$Action(e) {
            this.__navigationOnClick$Action = e
        }
        get _onClickCopyIdButton$Action() {
            return this.hasOwnProperty("__onClickCopyIdButton$Action") || (this.__onClickCopyIdButton$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return u.Logger.startActiveSpan("OnClickCopyIdButton", function(s) {
                    return s && (s.setAttribute("code.function", "OnClickCopyIdButton"), s.setAttribute("outsystems.function.key", "4c1ba426-5f5b-4c2e-83e7-92154228a24e"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickCopyIdButton"), e = t.callContext(e);
                        var d = new u.DataTypes.VariableHolder;
                        return u.Flow.executeAsyncFlow(function() {
                            return r.flush(), y.copyToClipboard$Action(v.getUserId(), e).then(function(g) {
                                d.value = g
                            }).then(function() {
                                r.variables.messageVar = d.value.successOut ? "Copied!" : d.value.errorMessageOut
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onClickCopyIdButton$Action
        }
        set _onClickCopyIdButton$Action(e) {
            this.__onClickCopyIdButton$Action = e
        }
        get _toggleLanguageModal$Action() {
            return this.hasOwnProperty("__toggleLanguageModal$Action") || (this.__toggleLanguageModal$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return u.Logger.startActiveSpan("ToggleLanguageModal", function(s) {
                    s && (s.setAttribute("code.function", "ToggleLanguageModal"), s.setAttribute("outsystems.function.key", "633d2f94-3493-4846-8a00-3857f11c1806"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ToggleLanguageModal"), e = t.callContext(e);
                        var d = new u.DataTypes.VariableHolder,
                            g = new u.DataTypes.VariableHolder;
                        r.variables.languageModalVar.isLanguageModalOpenAttr ? g.value = ae.sidebarClose$Action(r.variables.languageModalVar.modalIdAttr, e) : d.value = ae.sidebarOpen$Action(r.variables.languageModalVar.modalIdAttr, e)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__toggleLanguageModal$Action
        }
        set _toggleLanguageModal$Action(e) {
            this.__toggleLanguageModal$Action = e
        }
        get _onClickOpenLiveChat$Action() {
            return this.hasOwnProperty("__onClickOpenLiveChat$Action") || (this.__onClickOpenLiveChat$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return u.Logger.startActiveSpan("OnClickOpenLiveChat", function(s) {
                    s && (s.setAttribute("code.function", "OnClickOpenLiveChat"), s.setAttribute("outsystems.function.key", "8cf7238f-b8e0-42ea-9291-592d2bbc6f99"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickOpenLiveChat"), e = t.callContext(e), y.showLiveChat$Action(e), y.rudderstackTrackEvent$Action(function() {
                            var d = new ie;
                            return d.actionAttr = "click_cta", d.cta_nameAttr = "Open livechat", d.cta_placementAttr = "header", d
                        }(), "ce_partnershub_form", e)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onClickOpenLiveChat$Action
        }
        set _onClickOpenLiveChat$Action(e) {
            this.__onClickOpenLiveChat$Action = e
        }
        get _tooltipOnToggle$Action() {
            return this.hasOwnProperty("__tooltipOnToggle$Action") || (this.__tooltipOnToggle$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return u.Logger.startActiveSpan("TooltipOnToggle", function(s) {
                    s && (s.setAttribute("code.function", "TooltipOnToggle"), s.setAttribute("outsystems.function.key", "9d77b4e8-f98b-41e4-999d-bf9640dca888"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("TooltipOnToggle"), e = t.callContext(e), r.variables.messageVar = "Click to copy ID"
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__tooltipOnToggle$Action
        }
        set _tooltipOnToggle$Action(e) {
            this.__tooltipOnToggle$Action = e
        }
        get _onClickLogout$Action() {
            return this.hasOwnProperty("__onClickLogout$Action") || (this.__onClickLogout$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return u.Logger.startActiveSpan("OnClickLogout", function(s) {
                    return s && (s.setAttribute("code.function", "OnClickLogout"), s.setAttribute("outsystems.function.key", "b36891a0-d4c6-48be-85e1-8c38421bee9c"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickLogout"), e = t.callContext(e), u.Flow.executeAsyncFlow(function() {
                            return r.variables.isLoggingOutVar = !0, y.rudderstackTrackEvent$Action(function() {
                                var d = new ie;
                                return d.actionAttr = "click_cta", d.cta_nameAttr = "Logout", d.cta_placementAttr = "header", d
                            }(), "ce_partnershub_form", e), u.Logger.startActiveSpan("HandleLogout", function(d) {
                                d && (d.setAttribute("code.function", "HandleLogout"), d.setAttribute("outsystems.function.key", "ac9a6bea-b8e0-44f1-86d0-2223c8a853e6"), d.setAttribute("outsystems.function.owner.name", "PartnersHub"), d.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteAsyncJSNode(Se, "HandleLogout", "OnClickLogout", {
                                        ServerUrl: u.DataConversion.JSNodeParamConverter.to(v.getServer(), u.DataTypes.DataTypes.Text),
                                        CurrentAppId: u.DataConversion.JSNodeParamConverter.to(v.getAppId(), u.DataTypes.DataTypes.Text)
                                    }, function(g) {}, {
                                        WebsocketLogout: oe.clientActionProxies.websocketLogout$Action,
                                        RedirectToOauth: y.clientActionProxies.redirectToOauth$Action
                                    }, {})
                                } finally {
                                    d && d.end()
                                }
                            }, 1)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onClickLogout$Action
        }
        set _onClickLogout$Action(e) {
            this.__onClickLogout$Action = e
        }
        get _onToggleLanguageModal$Action() {
            return this.hasOwnProperty("__onToggleLanguageModal$Action") || (this.__onToggleLanguageModal$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return u.Logger.startActiveSpan("OnToggleLanguageModal", function(s) {
                    s && (s.setAttribute("code.function", "OnToggleLanguageModal"), s.setAttribute("outsystems.function.key", "f0636f03-831e-4b71-8431-d7e2360e9327"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnToggleLanguageModal"), e = t.callContext(e), r.variables.languageModalVar.isLanguageModalOpenAttr = !r.variables.languageModalVar.isLanguageModalOpenAttr
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onToggleLanguageModal$Action
        }
        set _onToggleLanguageModal$Action(e) {
            this.__onToggleLanguageModal$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "056c9350-89ec-4255-81cd-79e4e74bdd62"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        setLanguageModalId$Action(e, r) {
            var t = this.controller;
            return u.Logger.startActiveSpan("SetLanguageModalId__proxy", function(c) {
                c && (c.setAttribute("code.function", "SetLanguageModalId"), c.setAttribute("outsystems.function.key", "0f2b93ac-69c3-4d87-b76f-d1a7b4d3f7c2"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setLanguageModalId$Action, r, e)
                } finally {
                    c && c.end()
                }
            }, 0)
        }
        onClickLanguage$Action(e, r) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnClickLanguage__proxy", function(c) {
                c && (c.setAttribute("code.function", "OnClickLanguage"), c.setAttribute("outsystems.function.key", "167d3f64-ef46-4a05-b35d-062f6426bd26"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickLanguage$Action, r, e)
                } finally {
                    c && c.end()
                }
            }, 0)
        }
        navigationOnClick$Action(e, r) {
            var t = this.controller;
            return u.Logger.startActiveSpan("NavigationOnClick__proxy", function(c) {
                c && (c.setAttribute("code.function", "NavigationOnClick"), c.setAttribute("outsystems.function.key", "266b2b17-e6bd-4f19-9907-05a4c80fbdae"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._navigationOnClick$Action, r, e)
                } finally {
                    c && c.end()
                }
            }, 0)
        }
        onClickCopyIdButton$Action(e) {
            var r = this.controller;
            return u.Logger.startActiveSpan("OnClickCopyIdButton__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickCopyIdButton"), t.setAttribute("outsystems.function.key", "4c1ba426-5f5b-4c2e-83e7-92154228a24e"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClickCopyIdButton$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        toggleLanguageModal$Action(e) {
            var r = this.controller;
            return u.Logger.startActiveSpan("ToggleLanguageModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "ToggleLanguageModal"), t.setAttribute("outsystems.function.key", "633d2f94-3493-4846-8a00-3857f11c1806"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._toggleLanguageModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickOpenLiveChat$Action(e) {
            var r = this.controller;
            return u.Logger.startActiveSpan("OnClickOpenLiveChat__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickOpenLiveChat"), t.setAttribute("outsystems.function.key", "8cf7238f-b8e0-42ea-9291-592d2bbc6f99"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickOpenLiveChat$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        tooltipOnToggle$Action(e) {
            var r = this.controller;
            return u.Logger.startActiveSpan("TooltipOnToggle__proxy", function(t) {
                t && (t.setAttribute("code.function", "TooltipOnToggle"), t.setAttribute("outsystems.function.key", "9d77b4e8-f98b-41e4-999d-bf9640dca888"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._tooltipOnToggle$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickLogout$Action(e) {
            var r = this.controller;
            return u.Logger.startActiveSpan("OnClickLogout__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickLogout"), t.setAttribute("outsystems.function.key", "b36891a0-d4c6-48be-85e1-8c38421bee9c"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClickLogout$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onToggleLanguageModal$Action(e) {
            var r = this.controller;
            return u.Logger.startActiveSpan("OnToggleLanguageModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnToggleLanguageModal"), t.setAttribute("outsystems.function.key", "f0636f03-831e-4b71-8431-d7e2360e9327"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onToggleLanguageModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    c = this.idService;
                return r.onReady$Action(e)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    n(a, "ControllerInner");
    let f = a;
    z = f, z.registerVariableGroupType("PartnersHub.PhNavigation.Navigation.OnReady$getAuthTokenJSResult", [{
        name: "Token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }]), z.registerVariableGroupType("PartnersHub.PhNavigation.Navigation.SetLanguageModalId$vars", [{
        name: "ModaId",
        attrName: "modaIdInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }]), z.registerVariableGroupType("PartnersHub.PhNavigation.Navigation.OnClickLanguage$vars", [{
        name: "SetLanguage",
        attrName: "setLanguageInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }]), z.registerVariableGroupType("PartnersHub.PhNavigation.Navigation.NavigationOnClick$vars", [{
        name: "Screen",
        attrName: "screenInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Integer,
        defaultValue: n(function() {
            return 0
        }, "defaultValue")
    }])
}
var z, ze = new u.Controller.ControllerFactory(z, R);
var V = B(Z());
var Ue = {};
var Je = b; {
    let a = class a extends Je.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Ue);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onClickLink$Action() {
            return this.hasOwnProperty("_onClickLink$Action") || (this._onClickLink$Action = function() {
                return Promise.resolve()
            }), this._onClickLink$Action
        }
        set onClickLink$Action(e) {
            this._onClickLink$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    n(a, "ControllerInner");
    let f = a;
    Ke = f
}
var Ke, je = new Je.Controller.ControllerFactory(Ke, R);
var O = b,
    zt = S.PlaceholderContent,
    Ut = S.IteratorPlaceholderContent,
    N = class N extends w.BaseWebBlock {
        static get displayName() {
            return "PhNavigation.Link"
        }
        static getAttributes() {
            return {
                codeFunction: "Link",
                functionKey: "bd443d0e-73a4-4a7c-a5df-ea73cb1118bf",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.PhNavigation.Link.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [P]
        }
        get modelFactory() {
            return De
        }
        get controllerFactory() {
            return je
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                r = o.validationService,
                t = this.widgetsRecordProvider,
                c = o.callContext(),
                s = N.ifWidget,
                d = N.textWidget,
                g = N.asPrimitiveValue,
                _ = N.getTranslation,
                l = this;
            return V.createElement("div", this.getRootNodeProperties(), V.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: n(function() {
                        var i = c.clone();
                        o.onClickLink$Action(o.callContext(i))
                    }, "onClick")
                },
                style: a.getCachedValue(e.getId("DjUvettJcEu2GLWbCurI6A.Style"), function() {
                    return "ph-navigation-link " + (a.variables.isActiveIn ? "active " : "") + (a.variables.leftIconIn === O.BuiltinFunctions.nullTextIdentifier() && a.variables.rightIconIn === O.BuiltinFunctions.nullTextIdentifier() ? "ph-no-icon-link" : "ph-icon-link")
                }, function() {
                    return a.variables.isActiveIn
                }, function() {
                    return a.variables.leftIconIn
                }, function() {
                    return a.variables.rightIconIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: O.Model.calculateDataFetchStatus(a.variables._isActiveInDataFetchStatus, a.variables._leftIconInDataFetchStatus, a.variables._rightIconInDataFetchStatus)
            }, s(a.variables.leftIconIn !== O.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [V.createElement(P, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: a.variables.leftIconIn,
                        _sVGCodeInDataFetchStatus: O.Model.calculateDataFetchStatus(a.variables._leftIconInDataFetchStatus),
                        ExtendedClass: "display-flex"
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "1",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return []
            }), V.createElement(h, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "ThemeGrid_Width1 ThemeGrid_MarginGutter"
                },
                style: "ph-navigation-link-label",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, s(a.variables.labelIn !== O.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [V.createElement(k, {
                    value: a.variables.labelIn,
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t,
                    value_dataFetchStatus: O.Model.calculateDataFetchStatus(a.variables._labelInDataFetchStatus)
                })]
            }, function() {
                return []
            }), V.createElement(G, {
                align: 0,
                content: l.props.placeholders.body,
                gridProperties: {
                    classes: "ThemeGrid_Width1 ThemeGrid_MarginGutter"
                },
                style: a.variables.bodyClassNameIn,
                _idProps: {
                    service: e,
                    name: "Body"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: O.Model.calculateDataFetchStatus(a.variables._bodyClassNameInDataFetchStatus)
            })), s(a.variables.rightIconIn !== O.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [V.createElement(P, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ExtendedClass: "display-flex ph-link-right-icon " + a.variables.rightIconClassNameIn,
                        _extendedClassInDataFetchStatus: O.Model.calculateDataFetchStatus(a.variables._rightIconClassNameInDataFetchStatus),
                        SVGCode: a.variables.rightIconIn,
                        _sVGCodeInDataFetchStatus: O.Model.calculateDataFetchStatus(a.variables._rightIconInDataFetchStatus)
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "5",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return []
            })))
        }
    };
n(N, "View");
var ye = N,
    H = ye;
var K = B(Z());
var qe = {};
var ne = b; {
    let a = class a extends ne.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, qe);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _profileOnClickLink$Action() {
            return this.hasOwnProperty("__profileOnClickLink$Action") || (this.__profileOnClickLink$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return ne.Logger.startActiveSpan("ProfileOnClickLink", function(s) {
                    s && (s.setAttribute("code.function", "ProfileOnClickLink"), s.setAttribute("outsystems.function.key", "d544e950-b1ef-4782-a165-2bc15f84e14f"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ProfileOnClickLink"), e = t.callContext(e), v.setIsAccountSettingsExpanded(!v.getIsAccountSettingsExpanded())
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__profileOnClickLink$Action
        }
        set _profileOnClickLink$Action(e) {
            this.__profileOnClickLink$Action = e
        }
        profileOnClickLink$Action(e) {
            var r = this.controller;
            return ne.Logger.startActiveSpan("ProfileOnClickLink__proxy", function(t) {
                t && (t.setAttribute("code.function", "ProfileOnClickLink"), t.setAttribute("outsystems.function.key", "d544e950-b1ef-4782-a165-2bc15f84e14f"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._profileOnClickLink$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    n(a, "ControllerInner");
    let f = a;
    Qe = f
}
var Qe, Xe = new ne.Controller.ControllerFactory(Qe, R);
var Ye = b,
    lt = S.PlaceholderContent,
    cn = S.IteratorPlaceholderContent,
    D = class D extends w.BaseWebBlock {
        static get displayName() {
            return "PhNavigation.CollapsibleNavigation"
        }
        static getAttributes() {
            return {
                codeFunction: "CollapsibleNavigation",
                functionKey: "b8e17ac7-89f1-4c4e-8f44-07a46ffe5439",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.PhNavigation.CollapsibleNavigation.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [H]
        }
        get modelFactory() {
            return Me
        }
        get controllerFactory() {
            return Xe
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                r = o.validationService,
                t = this.widgetsRecordProvider,
                c = o.callContext(),
                s = D.ifWidget,
                d = D.textWidget,
                g = D.asPrimitiveValue,
                _ = D.getTranslation,
                l = this;
            return K.createElement("div", this.getRootNodeProperties(), K.createElement(H, {
                getOwnerSpan: n(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    RightIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M11.625 7.65625C11.8125 7.46875 12.1562 7.46875 12.3438 7.65625L18.3438 13.6562C18.5312 13.8438 18.5312 14.1875 18.3438 14.375C18.1562 14.5625 17.8125 14.5625 17.625 14.375L12 8.71875L6.34375 14.375C6.15625 14.5625 5.8125 14.5625 5.625 14.375C5.4375 14.1875 5.4375 13.8438 5.625 13.6562L11.625 7.65625Z" fill="#272B30"/>\r
</svg>`,
                    RightIconClassName: a.getCachedValue(e.getId("Profile.RightIconClassName"), function() {
                        return v.getIsAccountSettingsExpanded() ? "" : "ph-collapse-link-icon"
                    }, function() {
                        return v.getIsAccountSettingsExpanded()
                    }),
                    Label: a.variables.labelIn,
                    _labelInDataFetchStatus: Ye.Model.calculateDataFetchStatus(a.variables._labelInDataFetchStatus),
                    IsActive: !1,
                    LeftIcon: a.variables.leftIconIn,
                    _leftIconInDataFetchStatus: Ye.Model.calculateDataFetchStatus(a.variables._leftIconInDataFetchStatus)
                },
                events: {
                    _handleError: n(function(i) {
                        o.handleError(i)
                    }, "_handleError"),
                    onClickLink$Action: n(function() {
                        var i = c.clone();
                        o.profileOnClickLink$Action(o.callContext(i))
                    }, "onClickLink$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    name: "Profile",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    body: lt.Empty
                },
                _dependencies: []
            }), K.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    "data-state": a.getCachedValue(e.getId("CollapsibleContent.data-state"), function() {
                        return v.getIsAccountSettingsExpanded() ? "expanded" : "collapsed"
                    }, function() {
                        return v.getIsAccountSettingsExpanded()
                    })
                },
                style: "ph-collapsible-navigation-content",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CollapsibleContent"
                },
                _widgetRecordProvider: t
            }, K.createElement(G, {
                align: 0,
                content: l.props.placeholders.content,
                style: "ph-collapsible-content-body",
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            })))
        }
    };
n(D, "View");
var Pe = D,
    Ee = Pe;
var M = B(Z());
var et = {};
var tt = b; {
    let a = class a extends tt.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, et);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    n(a, "ControllerInner");
    let f = a;
    nt = f
}
var nt, rt = new tt.Controller.ControllerFactory(nt, R);
var Hn = S.PlaceholderContent,
    wn = S.IteratorPlaceholderContent,
    T = class T extends w.BaseWebBlock {
        static get displayName() {
            return "Common.Spinner"
        }
        static getAttributes() {
            return {
                codeFunction: "Spinner",
                functionKey: "190442e6-f5b7-4330-b465-03242175a002",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.Spinner.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Te
        }
        get controllerFactory() {
            return rt
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                r = o.validationService,
                t = this.widgetsRecordProvider,
                c = o.callContext(),
                s = T.ifWidget,
                d = T.textWidget,
                g = T.asPrimitiveValue,
                _ = T.getTranslation,
                l = this;
            return M.createElement("div", this.getRootNodeProperties(), M.createElement(h, {
                align: 0,
                animate: !1,
                style: "lds-ring",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, M.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), M.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), M.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }), M.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            })))
        }
    };
n(T, "View");
var Ae = T,
    He = Ae;
var j = B(Z());
var it = {};
var at = b; {
    let a = class a extends at.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, it);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onClickLink$Action() {
            return this.hasOwnProperty("_onClickLink$Action") || (this._onClickLink$Action = function() {
                return Promise.resolve()
            }), this._onClickLink$Action
        }
        set onClickLink$Action(e) {
            this._onClickLink$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    n(a, "ControllerInner");
    let f = a;
    ot = f
}
var ot, st = new at.Controller.ControllerFactory(ot, R);
var we = b,
    zn = S.PlaceholderContent,
    Un = S.IteratorPlaceholderContent,
    F = class F extends w.BaseWebBlock {
        static get displayName() {
            return "PhNavigation.BottomNavigationLink"
        }
        static getAttributes() {
            return {
                codeFunction: "BottomNavigationLink",
                functionKey: "9214fd45-956a-4808-831e-6029a8b4adcc",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.PhNavigation.BottomNavigationLink.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [P]
        }
        get modelFactory() {
            return Fe
        }
        get controllerFactory() {
            return st
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                r = o.validationService,
                t = this.widgetsRecordProvider,
                c = o.callContext(),
                s = F.ifWidget,
                d = F.textWidget,
                g = F.asPrimitiveValue,
                _ = F.getTranslation,
                l = this;
            return j.createElement("div", this.getRootNodeProperties(), j.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: n(function() {
                        var i = c.clone();
                        o.onClickLink$Action(o.callContext(i))
                    }, "onClick")
                },
                style: a.getCachedValue(e.getId("8qXkZv5190G1zm7hhM9vhg.Style"), function() {
                    return "ph-bottom-navigation-link" + (a.variables.isActiveIn ? " bootom-link-active" : "")
                }, function() {
                    return a.variables.isActiveIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: we.Model.calculateDataFetchStatus(a.variables._isActiveInDataFetchStatus)
            }, j.createElement(P, {
                getOwnerSpan: n(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "display-flex",
                    SVGCode: a.variables.iconIn,
                    _sVGCodeInDataFetchStatus: we.Model.calculateDataFetchStatus(a.variables._iconInDataFetchStatus)
                },
                events: {
                    _handleError: n(function(i) {
                        o.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), j.createElement(k, {
                style: "ph-section-text",
                value: a.variables.labelIn,
                _idProps: {
                    service: e,
                    name: "LinkLabel"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: we.Model.calculateDataFetchStatus(a.variables._labelInDataFetchStatus)
            })))
        }
    };
n(F, "View");
var Oe = F,
    q = Oe;
var L = b,
    E = S.PlaceholderContent,
    ct = S.IteratorPlaceholderContent,
    $ = class $ extends w.BaseWebBlock {
        static get displayName() {
            return "PhNavigation.Navigation"
        }
        static getAttributes() {
            return {
                codeFunction: "Navigation",
                functionKey: "876b56e9-536e-4954-8480-d8dbcab8cc85",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.PhNavigation.Navigation.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [se, ce, P, H, Ee, ee, He, Ce, le, q]
        }
        get modelFactory() {
            return $e
        }
        get controllerFactory() {
            return ze
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                r = o.validationService,
                t = this.widgetsRecordProvider,
                c = o.callContext(),
                s = $.ifWidget,
                d = $.textWidget,
                g = $.asPrimitiveValue,
                _ = $.getTranslation,
                l = this;
            return C.createElement("div", this.getRootNodeProperties(), s(v.getIsCheckingAuthentication(), !1, this, function() {
                return [C.createElement(se, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return [C.createElement(ce, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ContentClassName: "",
                        IsSidebarOpen: a.variables.languageModalVar.isLanguageModalOpenAttr,
                        HeaderInfo: a.getCachedValue(e.getId("LanguageSidebar.HeaderInfo"), function() {
                            return function() {
                                var i = new Ve;
                                return i.showLeftButtonAttr = !v.getIsDesktop(), i.showRightButtonAttr = v.getIsDesktop(), i.titleAttr = "Language", i
                            }()
                        }, function() {
                            return v.getIsDesktop()
                        }),
                        HasFooter: !1
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        headerLeftButtonAction$Action: n(function() {
                            var i = c.clone();
                            o.toggleLanguageModal$Action(o.callContext(i))
                        }, "headerLeftButtonAction$Action"),
                        setModalId$Action: n(function(i) {
                            var A = c.clone();
                            o.setLanguageModalId$Action(i, o.callContext(A))
                        }, "setModalId$Action"),
                        toggleSidebar$Action: n(function(i, A) {
                            var I = c.clone();
                            o.onToggleLanguageModal$Action(o.callContext(I))
                        }, "toggleSidebar$Action"),
                        headerRightButtonAction$Action: n(function() {
                            var i = c.clone();
                            o.toggleLanguageModal$Action(o.callContext(i))
                        }, "headerRightButtonAction$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        name: "LanguageSidebar",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        bodyContent: new E(function() {
                            return [C.createElement(Ne, {
                                animateItems: !0,
                                extendedProperties: {
                                    "disable-virtualization": "True"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: a.variables.getLanguagesAggr.listOut,
                                style: '"list list-group"',
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: t,
                                source_dataFetchStatus: L.Model.calculateDataFetchStatus(a.variables.getLanguagesAggr.dataFetchStatusAttr),
                                placeholders: {
                                    content: new ct(function(i, A) {
                                        return [C.createElement(h, {
                                            align: 0,
                                            animate: !1,
                                            extendedEvents: {
                                                onClick: n(function() {
                                                    var I = A.clone();
                                                    o.onClickLanguage$Action(a.variables.getLanguagesAggr.listOut.getCurrent(A.iterationContext).languagesAttr.codeAttr, o.callContext(I))
                                                }, "onClick")
                                            },
                                            style: "ph-language-switch",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "3"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: [g(v.getLanguage()), g(a.variables.getLanguagesAggr.dataFetchStatusAttr), g(a.variables.getLanguagesAggr.listOut.getCurrent(A.iterationContext).languagesAttr.codeAttr), g(a.variables.getLanguagesAggr.listOut.getCurrent(A.iterationContext).languagesAttr.nameAttr)]
                                        }, C.createElement(k, {
                                            value: a.variables.getLanguagesAggr.listOut.getCurrent(A.iterationContext).languagesAttr.nameAttr,
                                            _idProps: {
                                                service: i,
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: t,
                                            value_dataFetchStatus: L.Model.calculateDataFetchStatus(a.variables.getLanguagesAggr.dataFetchStatusAttr)
                                        }), s(a.variables.getLanguagesAggr.listOut.getCurrent(A.iterationContext).languagesAttr.codeAttr === v.getLanguage(), !1, this, function() {
                                            return [C.createElement(P, {
                                                getOwnerSpan: n(function() {
                                                    return l.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return l.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    ExtendedClass: "display-flex",
                                                    SVGCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12 20C9.125 20 6.5 18.5 5.0625 16C3.625 13.5312 3.625 10.5 5.0625 8C6.5 5.53125 9.125 4 12 4C14.8438 4 17.4688 5.53125 18.9062 8C20.3438 10.5 20.3438 13.5312 18.9062 16C17.4688 18.5 14.8438 20 12 20ZM15.5312 10.5312H15.5C15.8125 10.25 15.8125 9.78125 15.5 9.46875C15.2188 9.1875 14.75 9.1875 14.4688 9.46875L11 12.9688L9.53125 11.5C9.21875 11.1875 8.75 11.1875 8.46875 11.5C8.15625 11.7812 8.15625 12.25 8.46875 12.5312L10.4688 14.5312C10.75 14.8438 11.2188 14.8438 11.5312 14.5312L15.5312 10.5312Z" fill="#29823B"/>\r
</svg>\r
`
                                                },
                                                events: {
                                                    _handleError: n(function(I) {
                                                        o.handleError(I)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: r
                                                },
                                                _idProps: {
                                                    service: i,
                                                    uuid: "5",
                                                    alias: "3"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            })]
                                        }, function() {
                                            return []
                                        }))]
                                    }, c, e, "1")
                                },
                                _dependencies: [g(v.getLanguage()), g(a.variables.getLanguagesAggr.dataFetchStatusAttr)]
                            })]
                        }),
                        customButton: E.Empty
                    },
                    _dependencies: [g(v.getLanguage()), g(a.variables.getLanguagesAggr.dataFetchStatusAttr), g(a.variables.getLanguagesAggr.listOut)]
                }), C.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "ph-navigation-main-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "MainContainer"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(h, {
                    align: 0,
                    animate: !0,
                    style: "ph-side-navigation-container",
                    visible: v.getIsDesktop(),
                    _idProps: {
                        service: e,
                        name: "SideNavigation"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "ph-side-navigation-header",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "NavigationHeader"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(P, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ExtendedClass: "display-flex cursor-pointer",
                        SVGCode: `<svg width="133" height="18" viewBox="0 0 133 18" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g clip-path="url(#clip0_22386_5491)">\r
<path d="M10.5994 0.557856L9.69364 5.73068H6.5494C3.61602 5.73068 0.820035 8.12394 0.301817 11.0779L0.0824715 12.3352C-0.433332 15.2891 1.52385 17.6824 4.45723 17.6824H7.07967C9.21763 17.6824 11.2544 15.9396 11.6304 13.7867L14.0455 0L10.5994 0.557856ZM8.36842 13.2988C8.25272 13.9639 7.65814 14.5052 6.99772 14.5052H5.40449C4.08604 14.5052 3.20386 13.4274 3.43524 12.0973L3.57264 11.3133C3.80643 9.98561 5.06463 8.90549 6.38308 8.90549H9.13771L8.36842 13.2988ZM34.8144 17.6821L36.8776 5.89547H40.1412L38.078 17.6821H34.8119H34.8144ZM35.1674 6.03138C35.0038 6.96627 34.8395 7.90118 34.6759 8.83608C33.1298 8.35224 31.5346 8.50632 31.0445 8.60473C30.5152 11.6313 29.9852 14.6585 29.4553 17.6851H26.1895C26.633 15.1527 28.1481 6.50432 28.1481 6.50432C29.2103 6.06139 31.8186 5.16247 35.1674 6.03138ZM21.9351 5.72868H19.3946C16.9192 5.72868 14.5596 7.74812 14.1232 10.2409L13.6099 13.1706C13.1736 15.6633 14.8247 17.6828 17.3001 17.6828H22.7041L23.2584 14.5153H18.1798C17.3555 14.5153 16.8035 13.8429 16.9506 13.0104L16.9675 12.9108H25.1553L25.6229 10.2409C26.0591 7.74812 24.4081 5.72868 21.9327 5.72868H21.9351ZM22.3473 9.98846L22.328 10.1584H17.4592L17.4857 10.0079C17.6327 9.17776 18.3848 8.44717 19.2114 8.44717H21.1132C21.9303 8.44717 22.4823 9.16563 22.3473 9.98846ZM52.8749 5.89547C51.7624 8.87407 49.2128 13.9409 46.743 17.6821H43.4771C42.3434 14.1214 41.6113 9.16011 41.4716 5.89547H44.7377C44.7966 6.96038 45.27 10.9103 45.8103 13.6698C47.2921 10.9853 48.9258 7.46309 49.6065 5.89547H52.8749Z" fill="#FF444F"/>\r
<path d="M61.3315 2.31864C63.4546 2.31864 65.0834 2.72868 66.2176 3.54874C67.3665 4.35417 67.9409 5.5623 67.9409 7.17315C67.9409 8.0518 67.7809 8.80597 67.461 9.43566C67.1556 10.0507 66.7048 10.5559 66.1086 10.9513C65.5269 11.3321 64.8143 11.6103 63.9709 11.786C63.1274 11.9618 62.1749 12.0496 61.1133 12.0496H59.4337V17.6949H57.3178V2.69207C57.9141 2.54563 58.5757 2.45044 59.3028 2.40651C60.0445 2.34793 60.7207 2.31864 61.3315 2.31864ZM61.506 4.18576C60.6044 4.18576 59.9136 4.20773 59.4337 4.25166V10.2264H61.0261C61.7532 10.2264 62.4076 10.1825 62.9893 10.0946C63.571 9.99213 64.0581 9.83105 64.4508 9.61139C64.8579 9.37708 65.1706 9.06224 65.3887 8.66685C65.6069 8.27146 65.7159 7.76624 65.7159 7.15119C65.7159 6.56542 65.5996 6.08217 65.3669 5.70142C65.1488 5.32068 64.8434 5.02047 64.4508 4.80081C64.0727 4.56651 63.6291 4.40542 63.1202 4.31756C62.6112 4.22969 62.0731 4.18576 61.506 4.18576Z" fill="#414652"/>\r
<path d="M73.02 16.2232C73.4998 16.2232 73.9216 16.2159 74.2851 16.2012C74.6632 16.1719 74.9759 16.128 75.2231 16.0694V12.6647C75.0777 12.5915 74.8377 12.5329 74.5033 12.4889C74.1833 12.4304 73.7907 12.4011 73.3253 12.4011C73.02 12.4011 72.6927 12.423 72.3437 12.467C72.0093 12.5109 71.6966 12.6061 71.4058 12.7525C71.1295 12.8843 70.8968 13.0747 70.7077 13.3237C70.5187 13.558 70.4242 13.8728 70.4242 14.2682C70.4242 15.0004 70.6569 15.5129 71.1222 15.8058C71.5875 16.0841 72.2201 16.2232 73.02 16.2232ZM72.8454 5.98698C73.6598 5.98698 74.3433 6.09681 74.8959 6.31647C75.463 6.52149 75.9138 6.82169 76.2483 7.21708C76.5973 7.59783 76.8445 8.05912 76.99 8.60095C77.1354 9.12813 77.2081 9.7139 77.2081 10.3582V17.4972C77.0336 17.5265 76.7864 17.5704 76.4664 17.629C76.1611 17.6729 75.812 17.7169 75.4194 17.7608C75.0268 17.8047 74.5978 17.8414 74.1324 17.8706C73.6816 17.9146 73.2308 17.9365 72.78 17.9365C72.1402 17.9365 71.5512 17.8706 71.0131 17.7388C70.4751 17.607 70.0097 17.402 69.6171 17.1238C69.2244 16.8309 68.9191 16.4502 68.7009 15.9816C68.4828 15.5129 68.3737 14.9492 68.3737 14.2902C68.3737 13.6605 68.4973 13.1186 68.7446 12.6647C69.0063 12.2107 69.3553 11.8446 69.7916 11.5664C70.2279 11.2881 70.7368 11.0831 71.3185 10.9513C71.9002 10.8195 72.511 10.7536 73.1508 10.7536C73.3544 10.7536 73.5653 10.7683 73.7834 10.7976C74.0015 10.8122 74.2051 10.8415 74.3942 10.8854C74.5978 10.9147 74.7723 10.944 74.9177 10.9733C75.0631 11.0026 75.1649 11.0245 75.2231 11.0392V10.4681C75.2231 10.1313 75.1867 9.80176 75.114 9.47959C75.0413 9.14278 74.9104 8.8499 74.7214 8.60095C74.5323 8.33736 74.2706 8.13234 73.9361 7.9859C73.6162 7.82481 73.1945 7.74427 72.6709 7.74427C72.002 7.74427 71.413 7.79552 70.9041 7.89803C70.4096 7.9859 70.0388 8.08108 69.7916 8.18359L69.5517 6.4922C69.8134 6.37505 70.2497 6.26522 70.8604 6.16271C71.4712 6.04556 72.1329 5.98698 72.8454 5.98698Z" fill="#414652"/>\r
<path d="M83.893 6.03091C84.0675 6.03091 84.2638 6.04556 84.4819 6.07485C84.7146 6.08949 84.94 6.11878 85.1581 6.16271C85.3763 6.192 85.5726 6.22861 85.7471 6.27254C85.9362 6.30183 86.0743 6.33112 86.1616 6.36041L85.8125 8.13966C85.6526 8.08108 85.3836 8.01519 85.0055 7.94197C84.6419 7.8541 84.1693 7.81017 83.5876 7.81017C83.2095 7.81017 82.8314 7.8541 82.4533 7.94197C82.0898 8.01519 81.8498 8.06644 81.7335 8.09573V17.6949H79.7048V6.7558C80.1847 6.58007 80.781 6.41898 81.4935 6.27254C82.2061 6.11146 83.0059 6.03091 83.893 6.03091Z" fill="#414652"/>\r
<path d="M89.1443 6.27254H93.4415V7.9859H89.1443V13.2578C89.1443 13.8289 89.188 14.3048 89.2752 14.6856C89.3625 15.0517 89.4934 15.3445 89.6679 15.5642C89.8424 15.7692 90.0605 15.9157 90.3223 16.0035C90.584 16.0914 90.8894 16.1353 91.2384 16.1353C91.8492 16.1353 92.3363 16.0694 92.6999 15.9376C93.078 15.7912 93.3398 15.6887 93.4852 15.6301L93.8778 17.3215C93.6742 17.424 93.3179 17.5485 92.809 17.6949C92.3 17.856 91.7183 17.9365 91.0639 17.9365C90.2932 17.9365 89.6533 17.8414 89.1443 17.651C88.6499 17.446 88.25 17.1458 87.9446 16.7504C87.6392 16.355 87.4211 15.8717 87.2902 15.3006C87.1739 14.7148 87.1157 14.0412 87.1157 13.2797V3.08746L89.1443 2.736V6.27254Z" fill="#414652"/>\r
<path d="M95.1505 6.60203C95.6158 6.48488 96.2339 6.36041 97.0046 6.22861C97.7753 6.09681 98.6624 6.03091 99.6658 6.03091C100.567 6.03091 101.316 6.16271 101.913 6.4263C102.509 6.67525 102.981 7.03403 103.33 7.50264C103.694 7.95661 103.948 8.50576 104.094 9.1501C104.239 9.79444 104.312 10.5047 104.312 11.2808V17.6949H102.283V11.7201C102.283 11.0172 102.232 10.4168 102.131 9.91891C102.043 9.42102 101.891 9.0183 101.673 8.71078C101.454 8.40325 101.164 8.18359 100.8 8.0518C100.437 7.90535 99.9857 7.83213 99.4477 7.83213C99.2295 7.83213 99.0041 7.83946 98.7715 7.8541C98.5388 7.86875 98.3134 7.89071 98.0953 7.92C97.8917 7.93464 97.7026 7.95661 97.5281 7.9859C97.3681 8.01519 97.2518 8.03715 97.1791 8.0518V17.6949H95.1505V6.60203Z" fill="#414652"/>\r
<path d="M106.171 12.0057C106.171 10.9953 106.316 10.1166 106.607 9.36976C106.898 8.60827 107.283 7.97858 107.763 7.48068C108.243 6.98278 108.796 6.60936 109.421 6.36041C110.046 6.11146 110.686 5.98698 111.341 5.98698C112.868 5.98698 114.038 6.47024 114.853 7.43675C115.667 8.38861 116.074 9.84569 116.074 11.808C116.074 11.8959 116.074 12.013 116.074 12.1595C116.074 12.2913 116.067 12.4157 116.052 12.5329H108.287C108.374 13.719 108.716 14.6197 109.312 15.2347C109.908 15.8498 110.839 16.1573 112.104 16.1573C112.817 16.1573 113.413 16.0987 113.893 15.9816C114.387 15.8498 114.758 15.7253 115.005 15.6081L115.289 17.3215C115.042 17.4533 114.605 17.5924 113.98 17.7388C113.369 17.8853 112.671 17.9585 111.886 17.9585C110.897 17.9585 110.039 17.8121 109.312 17.5192C108.599 17.2117 108.011 16.7943 107.545 16.2671C107.08 15.7399 106.731 15.1176 106.498 14.4C106.28 13.6678 106.171 12.8697 106.171 12.0057ZM113.958 10.8854C113.973 9.96285 113.74 9.20868 113.26 8.62291C112.795 8.02251 112.148 7.7223 111.319 7.7223C110.853 7.7223 110.439 7.81749 110.075 8.00786C109.726 8.18359 109.428 8.4179 109.181 8.71078C108.934 9.00366 108.738 9.34047 108.592 9.72122C108.461 10.102 108.374 10.49 108.33 10.8854H113.958Z" fill="#414652"/>\r
<path d="M122.304 6.03091C122.478 6.03091 122.675 6.04556 122.893 6.07485C123.125 6.08949 123.351 6.11878 123.569 6.16271C123.787 6.192 123.983 6.22861 124.158 6.27254C124.347 6.30183 124.485 6.33112 124.572 6.36041L124.223 8.13966C124.063 8.08108 123.794 8.01519 123.416 7.94197C123.053 7.8541 122.58 7.81017 121.998 7.81017C121.62 7.81017 121.242 7.8541 120.864 7.94197C120.501 8.01519 120.261 8.06644 120.144 8.09573V17.6949H118.116V6.7558C118.596 6.58007 119.192 6.41898 119.904 6.27254C120.617 6.11146 121.417 6.03091 122.304 6.03091Z" fill="#414652"/>\r
<path d="M128.297 16.2232C129.126 16.2232 129.737 16.1134 130.129 15.8937C130.536 15.674 130.74 15.3226 130.74 14.8393C130.74 14.3414 130.544 13.946 130.151 13.6532C129.758 13.3603 129.111 13.0308 128.21 12.6647C127.773 12.4889 127.352 12.3132 126.944 12.1375C126.552 11.9471 126.21 11.7275 125.919 11.4785C125.628 11.2296 125.396 10.9294 125.221 10.5779C125.047 10.2264 124.959 9.79444 124.959 9.2819C124.959 8.27146 125.33 7.47335 126.072 6.88759C126.814 6.28719 127.824 5.98698 129.104 5.98698C129.424 5.98698 129.744 6.00895 130.064 6.05288C130.384 6.08217 130.682 6.1261 130.958 6.18468C131.234 6.22861 131.474 6.27986 131.678 6.33844C131.896 6.39702 132.063 6.44827 132.18 6.4922L131.809 8.24949C131.591 8.13234 131.249 8.01519 130.784 7.89803C130.318 7.76624 129.758 7.70034 129.104 7.70034C128.537 7.70034 128.042 7.81749 127.621 8.0518C127.199 8.27146 126.988 8.62291 126.988 9.10617C126.988 9.35512 127.032 9.57478 127.119 9.76515C127.221 9.95553 127.366 10.1313 127.555 10.2923C127.759 10.4388 128.006 10.5779 128.297 10.7097C128.588 10.8415 128.937 10.9806 129.344 11.1271C129.882 11.3321 130.362 11.5371 130.784 11.7421C131.205 11.9325 131.562 12.1595 131.852 12.4231C132.158 12.6866 132.39 13.0088 132.55 13.3896C132.71 13.7557 132.79 14.2096 132.79 14.7515C132.79 15.8058 132.398 16.6039 131.612 17.1458C130.842 17.6876 129.737 17.9585 128.297 17.9585C127.293 17.9585 126.508 17.8706 125.941 17.6949C125.374 17.5338 124.989 17.4094 124.785 17.3215L125.156 15.5642C125.388 15.6521 125.759 15.7839 126.268 15.9596C126.777 16.1353 127.453 16.2232 128.297 16.2232Z" fill="#414652"/>\r
</g>\r
<defs>\r
<clipPath id="clip0_22386_5491">\r
<rect width="133" height="18" fill="white"/>\r
</clipPath>\r
</defs>\r
</svg>`
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "9",
                        alias: "4"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), C.createElement(P, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ExtendedClass: "display-flex cursor-pointer",
                        SVGCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M11.5 4.5C11.5 4.25 11.7188 4 12 4C12.25 4 12.5 4.25 12.5 4.5V5.03125C15 5.28125 17 7.40625 17 10V10.9375C17 12.2812 17.5312 13.5938 18.5 14.5625L18.5938 14.6562C18.8438 14.9062 19 15.2812 19 15.625C19 16.4062 18.375 17.0312 17.5938 17.0312L6.375 17C5.59375 17 5 16.4062 5 15.625C5 15.25 5.125 14.9062 5.40625 14.6562L5.46875 14.5625C6.4375 13.5938 7 12.2812 7 10.9375V10C7 7.40625 8.96875 5.28125 11.5 5.03125V4.5ZM12 6C9.78125 6 8 7.8125 8 10V10.9375C8 12.5625 7.34375 14.125 6.1875 15.2812L6.09375 15.3438C6.03125 15.4375 6 15.5312 6 15.625C6 15.8438 6.15625 16 6.375 16H17.5938C17.8125 16 18 15.8438 18 15.625C18 15.5312 17.9375 15.4375 17.875 15.3438L17.7812 15.2812C16.625 14.125 15.9688 12.5625 15.9688 10.9062V10C15.9688 7.8125 14.1875 6 11.9688 6H12ZM11.0312 18.3438C11.1875 18.75 11.5625 19 12 19C12.4062 19 12.7812 18.75 12.9375 18.3438C13.0312 18.0938 13.3125 17.9375 13.5625 18.0312C13.8125 18.125 13.9688 18.4062 13.875 18.6875C13.5938 19.4688 12.8438 20 12 20C11.125 20 10.375 19.4688 10.0938 18.6875C10 18.4062 10.1562 18.125 10.4062 18.0312C10.6562 17.9375 10.9375 18.0938 11.0312 18.3438Z" fill="#101213"/>\r
</svg>`
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "10",
                        alias: "5"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })), C.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "ph-side-navigation-body",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "NavigationBody"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(H, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        IsActive: a.variables.currentScreenIn === m.navigation.hub,
                        _isActiveInDataFetchStatus: L.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus),
                        Label: "Hub",
                        LeftIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6.5 6C6.21875 6 6 6.25 6 6.5V9.5C6 9.78125 6.21875 10 6.5 10H9.5C9.75 10 10 9.78125 10 9.5V6.5C10 6.25 9.75 6 9.5 6H6.5ZM5 6.5C5 5.6875 5.65625 5 6.5 5H9.5C10.3125 5 11 5.6875 11 6.5V9.5C11 10.3438 10.3125 11 9.5 11H6.5C5.65625 11 5 10.3438 5 9.5V6.5ZM6.5 14C6.21875 14 6 14.25 6 14.5V17.5C6 17.7812 6.21875 18 6.5 18H9.5C9.75 18 10 17.7812 10 17.5V14.5C10 14.25 9.75 14 9.5 14H6.5ZM5 14.5C5 13.6875 5.65625 13 6.5 13H9.5C10.3125 13 11 13.6875 11 14.5V17.5C11 18.3438 10.3125 19 9.5 19H6.5C5.65625 19 5 18.3438 5 17.5V14.5ZM17.5 6H14.5C14.2188 6 14 6.25 14 6.5V9.5C14 9.78125 14.2188 10 14.5 10H17.5C17.75 10 18 9.78125 18 9.5V6.5C18 6.25 17.75 6 17.5 6ZM14.5 5H17.5C18.3125 5 19 5.6875 19 6.5V9.5C19 10.3438 18.3125 11 17.5 11H14.5C13.6562 11 13 10.3438 13 9.5V6.5C13 5.6875 13.6562 5 14.5 5ZM14.5 14C14.2188 14 14 14.25 14 14.5V17.5C14 17.7812 14.2188 18 14.5 18H17.5C17.75 18 18 17.7812 18 17.5V14.5C18 14.25 17.75 14 17.5 14H14.5ZM13 14.5C13 13.6875 13.6562 13 14.5 13H17.5C18.3125 13 19 13.6875 19 14.5V17.5C19 18.3438 18.3125 19 17.5 19H14.5C13.6562 19 13 18.3438 13 17.5V14.5Z" fill="#272B30"/>\r
</svg>`
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        onClickLink$Action: n(function() {
                            var i = c.clone();
                            o.navigationOnClick$Action(m.navigation.hub, o.callContext(i))
                        }, "onClickLink$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        name: "Hub",
                        alias: "6"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        body: E.Empty
                    },
                    _dependencies: []
                }), C.createElement(H, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        LeftIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8.5 4C8.75 4 9 4.25 9 4.5V6H15V4.5C15 4.25 15.2188 4 15.5 4C15.75 4 16 4.25 16 4.5V6H17C18.0938 6 19 6.90625 19 8V9V10V18C19 19.125 18.0938 20 17 20H7C5.875 20 5 19.125 5 18V10V9V8C5 6.90625 5.875 6 7 6H8V4.5C8 4.25 8.21875 4 8.5 4ZM18 10H6V18C6 18.5625 6.4375 19 7 19H17C17.5312 19 18 18.5625 18 18V10ZM17 7H7C6.4375 7 6 7.46875 6 8V9H18V8C18 7.46875 17.5312 7 17 7Z" fill="#272B30"/>\r
</svg>`,
                        IsActive: a.variables.currentScreenIn === m.navigation.events,
                        _isActiveInDataFetchStatus: L.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus),
                        Label: "Events"
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        onClickLink$Action: n(function() {
                            var i = c.clone();
                            o.navigationOnClick$Action(m.navigation.events, o.callContext(i))
                        }, "onClickLink$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        name: "Events",
                        alias: "7"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        body: E.Empty
                    },
                    _dependencies: []
                }), C.createElement(H, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        LeftIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M15.6875 12.0938C16.1875 11.3438 16.5 10.4688 16.5 9.5C16.5 7.03125 14.4688 5 12 5C9.5 5 7.5 7.03125 7.5 9.5C7.5 10.4688 7.78125 11.3438 8.28125 12.0938C8.40625 12.25 8.5625 12.4688 8.71875 12.6875C9.125 13.2188 9.5625 13.8438 9.90625 14.4688C10.1875 14.9688 10.3438 15.5 10.4062 16.0312L9.40625 16C9.3125 15.625 9.21875 15.2812 9.03125 14.9375C8.71875 14.375 8.34375 13.8438 7.9375 13.3125C7.78125 13.0938 7.625 12.875 7.46875 12.6562C6.84375 11.75 6.5 10.6875 6.5 9.5C6.5 6.46875 8.9375 4 12 4C15.0312 4 17.5 6.46875 17.5 9.5C17.5 10.6875 17.125 11.75 16.5 12.6562C16.3438 12.875 16.1875 13.0938 16.0312 13.3125C15.625 13.8438 15.25 14.375 14.9375 14.9375C14.75 15.2812 14.6562 15.625 14.5625 16H13.5625C13.6562 15.5 13.7812 14.9688 14.0625 14.4688C14.4062 13.8438 14.875 13.2188 15.25 12.6562C15.4062 12.4688 15.5625 12.25 15.6875 12.0625V12.0938ZM12 7C10.5938 7 9.5 8.125 9.5 9.5C9.5 9.78125 9.25 10 9 10C8.71875 10 8.5 9.78125 8.5 9.5C8.5 7.59375 10.0625 6 12 6C12.25 6 12.5 6.25 12.5 6.5C12.5 6.78125 12.25 7 12 7ZM10.5625 18C10.7812 18.5938 11.3438 19 12 19C12.625 19 13.1875 18.5938 13.4062 18H10.5625ZM9.5 17.5V17.3438C9.5 17.1562 9.625 17 9.8125 17H14.1562C14.3438 17 14.5 17.1562 14.5 17.3438V17.5C14.5 18.9062 13.375 20 12 20C10.5938 20 9.5 18.9062 9.5 17.5Z" fill="#272B30"/>\r
</svg>`,
                        Label: "Education",
                        IsActive: a.variables.currentScreenIn === m.navigation.education,
                        _isActiveInDataFetchStatus: L.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus)
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        onClickLink$Action: n(function() {
                            var i = c.clone();
                            o.navigationOnClick$Action(m.navigation.education, o.callContext(i))
                        }, "onClickLink$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        name: "Education",
                        alias: "8"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        body: E.Empty
                    },
                    _dependencies: []
                }), C.createElement(Ee, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Label: "Account settings",
                        LeftIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M16.875 17.0312C18.1875 15.75 19 13.9688 19 12C19 8.15625 15.8438 5 12 5C8.125 5 5 8.15625 5 12C5 13.9688 5.8125 15.75 7.09375 17.0312C7.53125 15.3125 9.125 14 11 14H13C14.8438 14 16.4375 15.3125 16.875 17.0312ZM15.9688 17.75V17.7812C15.8438 16.2188 14.5625 15 13 15H11C9.40625 15 8.125 16.2188 8 17.7812C9.125 18.5625 10.5 19 12 19C13.4688 19 14.8438 18.5625 15.9688 17.75ZM12 20C9.125 20 6.5 18.5 5.0625 16C3.625 13.5312 3.625 10.5 5.0625 8C6.5 5.53125 9.125 4 12 4C14.8438 4 17.4688 5.53125 18.9062 8C20.3438 10.5 20.3438 13.5312 18.9062 16C17.4688 18.5 14.8438 20 12 20ZM12 12C12.5312 12 13 11.7188 13.2812 11.25C13.5625 10.8125 13.5625 10.2188 13.2812 9.75C13 9.3125 12.5312 9 12 9C11.4375 9 10.9688 9.3125 10.6875 9.75C10.4062 10.2188 10.4062 10.8125 10.6875 11.25C10.9688 11.7188 11.4375 12 12 12ZM9.5 10.5C9.5 9.625 9.96875 8.8125 10.75 8.34375C11.5 7.90625 12.4688 7.90625 13.25 8.34375C14 8.8125 14.5 9.625 14.5 10.5C14.5 11.4062 14 12.2188 13.25 12.6875C12.4688 13.125 11.5 13.125 10.75 12.6875C9.96875 12.2188 9.5 11.4062 9.5 10.5Z" fill="#272B30"/>\r
</svg>`
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        name: "AccountSettings",
                        alias: "9"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        content: new E(function() {
                            return [C.createElement(H, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Label: "Profile",
                                    IsActive: a.variables.currentScreenIn === m.navigation.profile,
                                    _isActiveInDataFetchStatus: L.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus)
                                },
                                events: {
                                    _handleError: n(function(i) {
                                        o.handleError(i)
                                    }, "_handleError"),
                                    onClickLink$Action: n(function() {
                                        var i = c.clone();
                                        o.navigationOnClick$Action(m.navigation.profile, o.callContext(i))
                                    }, "onClickLink$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "Profile",
                                    alias: "10"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    body: E.Empty
                                },
                                _dependencies: []
                            }), C.createElement(H, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Label: "Verification",
                                    IsActive: a.variables.currentScreenIn === m.navigation.verification,
                                    _isActiveInDataFetchStatus: L.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus)
                                },
                                events: {
                                    _handleError: n(function(i) {
                                        o.handleError(i)
                                    }, "_handleError"),
                                    onClickLink$Action: n(function() {
                                        var i = c.clone();
                                        o.navigationOnClick$Action(m.navigation.verification, o.callContext(i))
                                    }, "onClickLink$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "Verification",
                                    alias: "11"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    body: E.Empty
                                },
                                _dependencies: []
                            }), C.createElement(H, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Label: "Security",
                                    IsActive: a.variables.currentScreenIn === m.navigation.security,
                                    _isActiveInDataFetchStatus: L.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus)
                                },
                                events: {
                                    _handleError: n(function(i) {
                                        o.handleError(i)
                                    }, "_handleError"),
                                    onClickLink$Action: n(function() {
                                        var i = c.clone();
                                        o.navigationOnClick$Action(m.navigation.security, o.callContext(i))
                                    }, "onClickLink$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "Security",
                                    alias: "12"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    body: E.Empty
                                },
                                _dependencies: []
                            }), C.createElement(ee, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsLoading: !v.getIsLiveChatReady(),
                                    SkeletonHeight: "40px"
                                },
                                events: {
                                    _handleError: n(function(i) {
                                        o.handleError(i)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "LiveChat",
                                    alias: "13"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new E(function() {
                                        return [C.createElement(H, {
                                            getOwnerSpan: n(function() {
                                                return l.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: n(function() {
                                                return l.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Label: "LiveChat",
                                                IsActive: !1
                                            },
                                            events: {
                                                _handleError: n(function(i) {
                                                    o.handleError(i)
                                                }, "_handleError"),
                                                onClickLink$Action: n(function() {
                                                    var i = c.clone();
                                                    o.onClickOpenLiveChat$Action(o.callContext(i))
                                                }, "onClickLink$Action")
                                            },
                                            _validationProps: {
                                                validationService: r
                                            },
                                            _idProps: {
                                                service: e,
                                                name: "LiveChatComponent",
                                                alias: "14"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                body: E.Empty
                                            },
                                            _dependencies: []
                                        })]
                                    })
                                },
                                _dependencies: []
                            }), C.createElement(H, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsActive: !1,
                                    Label: "Language"
                                },
                                events: {
                                    _handleError: n(function(i) {
                                        o.handleError(i)
                                    }, "_handleError"),
                                    onClickLink$Action: n(function() {
                                        var i = c.clone();
                                        o.toggleLanguageModal$Action(o.callContext(i))
                                    }, "onClickLink$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "Language",
                                    alias: "15"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    body: E.Empty
                                },
                                _dependencies: []
                            }), C.createElement(H, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    BodyClassName: "ph-logout-button",
                                    IsActive: !1
                                },
                                events: {
                                    _handleError: n(function(i) {
                                        o.handleError(i)
                                    }, "_handleError"),
                                    onClickLink$Action: n(function() {
                                        return Promise.resolve().then(function() {
                                            var i = c.clone();
                                            return o.onClickLogout$Action(o.callContext(i))
                                        })
                                    }, "onClickLink$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "Logout",
                                    alias: "16"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    body: new E(function() {
                                        return [s(a.variables.isLoggingOutVar, !1, this, function() {
                                            return [C.createElement(He, {
                                                getOwnerSpan: n(function() {
                                                    return l.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return l.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {},
                                                events: {
                                                    _handleError: n(function(i) {
                                                        o.handleError(i)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: r
                                                },
                                                _idProps: {
                                                    service: e,
                                                    uuid: "23",
                                                    alias: "17"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            })]
                                        }, function() {
                                            return [C.createElement(P, {
                                                getOwnerSpan: n(function() {
                                                    return l.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return l.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    SVGCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M18.9688 11.9688L14.8438 8.0625C14.8125 8.03125 14.75 8 14.6875 8C14.5938 8 14.5 8.09375 14.5 8.21875V10C14.5 10.2812 14.25 10.5 14 10.5H10.25C10.0938 10.5 10 10.625 10 10.75V13.25C10 13.4062 10.0938 13.5 10.25 13.5H14C14.25 13.5 14.5 13.75 14.5 14V15.8125C14.5 15.9062 14.5938 16 14.6875 16C14.75 16 14.8125 16 14.8438 15.9688L18.9688 12.0625C18.9688 12.0625 19 12.0312 19 12L18.9688 11.9688ZM20 12C20 12.3125 19.875 12.5938 19.6562 12.8125L15.5312 16.6875C15.3125 16.9062 15 17 14.6875 17C14.0312 17 13.5 16.4688 13.5 15.8125V14.5H10.25C9.53125 14.5 9 13.9688 9 13.25V10.75C9 10.0625 9.53125 9.5 10.25 9.5H13.5V8.21875C13.5 7.5625 14.0312 7 14.6875 7C15 7 15.3125 7.125 15.5312 7.34375L19.6562 11.2188C19.875 11.4375 20 11.7188 20 12ZM9.5 6H6.5C5.65625 6 5 6.6875 5 7.5V16.5C5 17.3438 5.65625 18 6.5 18H9.5C9.75 18 10 18.25 10 18.5C10 18.7812 9.75 19 9.5 19H6.5C5.09375 19 4 17.9062 4 16.5V7.5C4 6.125 5.09375 5 6.5 5H9.5C9.75 5 10 5.25 10 5.5C10 5.78125 9.75 6 9.5 6Z" fill="#DC2020"/>\r
</svg>`
                                                },
                                                events: {
                                                    _handleError: n(function(i) {
                                                        o.handleError(i)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: r
                                                },
                                                _idProps: {
                                                    service: e,
                                                    uuid: "24",
                                                    alias: "18"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            })]
                                        }), C.createElement(Y, {
                                            extendedProperties: {
                                                style: "color: #FF444F;"
                                            },
                                            text: ["Log out"],
                                            _idProps: {
                                                service: e,
                                                uuid: "25"
                                            },
                                            _widgetRecordProvider: t
                                        })]
                                    })
                                },
                                _dependencies: [g(a.variables.isLoggingOutVar)]
                            })]
                        })
                    },
                    _dependencies: [g(a.variables.isLoggingOutVar), g(v.getIsLiveChatReady()), g(a.variables._currentScreenInDataFetchStatus), g(a.variables.currentScreenIn)]
                }), C.createElement(Ce, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Space: m.space.none,
                        ExtendedClass: "ph-divider ph-navigation-body-divider"
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "26",
                        alias: "19"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })), C.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "ph-side-navigation-footer",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "NavigationFooter"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(k, {
                    style: "ph-mobile-heading-h4",
                    value: v.getname(),
                    _idProps: {
                        service: e,
                        uuid: "28"
                    },
                    _widgetRecordProvider: t
                }), C.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "display-flex gap-s align-items-center ph-text",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "29"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(k, {
                    style: "ph-text",
                    value: "ID: " + v.getUserId(),
                    _idProps: {
                        service: e,
                        uuid: "30"
                    },
                    _widgetRecordProvider: t
                }), C.createElement(le, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        StartsOpen: !1,
                        Position: m.position.right,
                        Trigger: m.trigger.onHover
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        onToggle$Action: n(function(i, A) {
                            var I = c.clone();
                            o.tooltipOnToggle$Action(o.callContext(I))
                        }, "onToggle$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "31",
                        alias: "20"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        content: new E(function() {
                            return [C.createElement(xe, {
                                extendedEvents: {
                                    onClick: n(function() {
                                        return Promise.resolve().then(function() {
                                            var i = c.clone();
                                            return o.onClickCopyIdButton$Action(o.callContext(i))
                                        })
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    className: "ph-copy-button"
                                },
                                tag: "button",
                                _idProps: {
                                    service: e,
                                    name: "ButtonCopyId"
                                },
                                _widgetRecordProvider: t
                            }, C.createElement(P, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M17 15C17.5312 15 18 14.5625 18 14V7.625C18 7.5 17.9375 7.375 17.8438 7.28125L15.7188 5.15625C15.625 5.0625 15.5 5 15.375 5H12C11.4375 5 11 5.46875 11 6V14C11 14.5625 11.4375 15 12 15H17ZM18.5312 6.5625C18.8125 6.84375 19 7.25 19 7.625V14C19 15.125 18.0938 16 17 16H12C10.875 16 10 15.125 10 14V6C10 4.90625 10.875 4 12 4H15.375C15.75 4 16.1562 4.1875 16.4375 4.46875L18.5312 6.5625ZM7 8H9V9H7C6.4375 9 6 9.46875 6 10V18C6 18.5625 6.4375 19 7 19H12C12.5312 19 13 18.5625 13 18V17H14V18C14 19.125 13.0938 20 12 20H7C5.875 20 5 19.125 5 18V10C5 8.90625 5.875 8 7 8Z" fill="#272B30"/>\r
</svg>`
                                },
                                events: {
                                    _handleError: n(function(i) {
                                        o.handleError(i)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "33",
                                    alias: "21"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }))]
                        }),
                        tooltip: new E(function() {
                            return [C.createElement(k, {
                                style: "ph-text",
                                value: a.variables.messageVar,
                                _idProps: {
                                    service: e,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: t
                            })]
                        })
                    },
                    _dependencies: [g(a.variables.messageVar)]
                })))), C.createElement(h, {
                    align: 0,
                    animate: !0,
                    style: "ph-mobile-navigation-header",
                    visible: !v.getIsDesktop(),
                    _idProps: {
                        service: e,
                        name: "NavigationHeaderMobile"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(P, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: `<svg width="133" height="18" viewBox="0 0 133 18" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g clip-path="url(#clip0_22386_5491)">\r
<path d="M10.5994 0.557856L9.69364 5.73068H6.5494C3.61602 5.73068 0.820035 8.12394 0.301817 11.0779L0.0824715 12.3352C-0.433332 15.2891 1.52385 17.6824 4.45723 17.6824H7.07967C9.21763 17.6824 11.2544 15.9396 11.6304 13.7867L14.0455 0L10.5994 0.557856ZM8.36842 13.2988C8.25272 13.9639 7.65814 14.5052 6.99772 14.5052H5.40449C4.08604 14.5052 3.20386 13.4274 3.43524 12.0973L3.57264 11.3133C3.80643 9.98561 5.06463 8.90549 6.38308 8.90549H9.13771L8.36842 13.2988ZM34.8144 17.6821L36.8776 5.89547H40.1412L38.078 17.6821H34.8119H34.8144ZM35.1674 6.03138C35.0038 6.96627 34.8395 7.90118 34.6759 8.83608C33.1298 8.35224 31.5346 8.50632 31.0445 8.60473C30.5152 11.6313 29.9852 14.6585 29.4553 17.6851H26.1895C26.633 15.1527 28.1481 6.50432 28.1481 6.50432C29.2103 6.06139 31.8186 5.16247 35.1674 6.03138ZM21.9351 5.72868H19.3946C16.9192 5.72868 14.5596 7.74812 14.1232 10.2409L13.6099 13.1706C13.1736 15.6633 14.8247 17.6828 17.3001 17.6828H22.7041L23.2584 14.5153H18.1798C17.3555 14.5153 16.8035 13.8429 16.9506 13.0104L16.9675 12.9108H25.1553L25.6229 10.2409C26.0591 7.74812 24.4081 5.72868 21.9327 5.72868H21.9351ZM22.3473 9.98846L22.328 10.1584H17.4592L17.4857 10.0079C17.6327 9.17776 18.3848 8.44717 19.2114 8.44717H21.1132C21.9303 8.44717 22.4823 9.16563 22.3473 9.98846ZM52.8749 5.89547C51.7624 8.87407 49.2128 13.9409 46.743 17.6821H43.4771C42.3434 14.1214 41.6113 9.16011 41.4716 5.89547H44.7377C44.7966 6.96038 45.27 10.9103 45.8103 13.6698C47.2921 10.9853 48.9258 7.46309 49.6065 5.89547H52.8749Z" fill="#FF444F"/>\r
<path d="M61.3315 2.31864C63.4546 2.31864 65.0834 2.72868 66.2176 3.54874C67.3665 4.35417 67.9409 5.5623 67.9409 7.17315C67.9409 8.0518 67.7809 8.80597 67.461 9.43566C67.1556 10.0507 66.7048 10.5559 66.1086 10.9513C65.5269 11.3321 64.8143 11.6103 63.9709 11.786C63.1274 11.9618 62.1749 12.0496 61.1133 12.0496H59.4337V17.6949H57.3178V2.69207C57.9141 2.54563 58.5757 2.45044 59.3028 2.40651C60.0445 2.34793 60.7207 2.31864 61.3315 2.31864ZM61.506 4.18576C60.6044 4.18576 59.9136 4.20773 59.4337 4.25166V10.2264H61.0261C61.7532 10.2264 62.4076 10.1825 62.9893 10.0946C63.571 9.99213 64.0581 9.83105 64.4508 9.61139C64.8579 9.37708 65.1706 9.06224 65.3887 8.66685C65.6069 8.27146 65.7159 7.76624 65.7159 7.15119C65.7159 6.56542 65.5996 6.08217 65.3669 5.70142C65.1488 5.32068 64.8434 5.02047 64.4508 4.80081C64.0727 4.56651 63.6291 4.40542 63.1202 4.31756C62.6112 4.22969 62.0731 4.18576 61.506 4.18576Z" fill="#414652"/>\r
<path d="M73.02 16.2232C73.4998 16.2232 73.9216 16.2159 74.2851 16.2012C74.6632 16.1719 74.9759 16.128 75.2231 16.0694V12.6647C75.0777 12.5915 74.8377 12.5329 74.5033 12.4889C74.1833 12.4304 73.7907 12.4011 73.3253 12.4011C73.02 12.4011 72.6927 12.423 72.3437 12.467C72.0093 12.5109 71.6966 12.6061 71.4058 12.7525C71.1295 12.8843 70.8968 13.0747 70.7077 13.3237C70.5187 13.558 70.4242 13.8728 70.4242 14.2682C70.4242 15.0004 70.6569 15.5129 71.1222 15.8058C71.5875 16.0841 72.2201 16.2232 73.02 16.2232ZM72.8454 5.98698C73.6598 5.98698 74.3433 6.09681 74.8959 6.31647C75.463 6.52149 75.9138 6.82169 76.2483 7.21708C76.5973 7.59783 76.8445 8.05912 76.99 8.60095C77.1354 9.12813 77.2081 9.7139 77.2081 10.3582V17.4972C77.0336 17.5265 76.7864 17.5704 76.4664 17.629C76.1611 17.6729 75.812 17.7169 75.4194 17.7608C75.0268 17.8047 74.5978 17.8414 74.1324 17.8706C73.6816 17.9146 73.2308 17.9365 72.78 17.9365C72.1402 17.9365 71.5512 17.8706 71.0131 17.7388C70.4751 17.607 70.0097 17.402 69.6171 17.1238C69.2244 16.8309 68.9191 16.4502 68.7009 15.9816C68.4828 15.5129 68.3737 14.9492 68.3737 14.2902C68.3737 13.6605 68.4973 13.1186 68.7446 12.6647C69.0063 12.2107 69.3553 11.8446 69.7916 11.5664C70.2279 11.2881 70.7368 11.0831 71.3185 10.9513C71.9002 10.8195 72.511 10.7536 73.1508 10.7536C73.3544 10.7536 73.5653 10.7683 73.7834 10.7976C74.0015 10.8122 74.2051 10.8415 74.3942 10.8854C74.5978 10.9147 74.7723 10.944 74.9177 10.9733C75.0631 11.0026 75.1649 11.0245 75.2231 11.0392V10.4681C75.2231 10.1313 75.1867 9.80176 75.114 9.47959C75.0413 9.14278 74.9104 8.8499 74.7214 8.60095C74.5323 8.33736 74.2706 8.13234 73.9361 7.9859C73.6162 7.82481 73.1945 7.74427 72.6709 7.74427C72.002 7.74427 71.413 7.79552 70.9041 7.89803C70.4096 7.9859 70.0388 8.08108 69.7916 8.18359L69.5517 6.4922C69.8134 6.37505 70.2497 6.26522 70.8604 6.16271C71.4712 6.04556 72.1329 5.98698 72.8454 5.98698Z" fill="#414652"/>\r
<path d="M83.893 6.03091C84.0675 6.03091 84.2638 6.04556 84.4819 6.07485C84.7146 6.08949 84.94 6.11878 85.1581 6.16271C85.3763 6.192 85.5726 6.22861 85.7471 6.27254C85.9362 6.30183 86.0743 6.33112 86.1616 6.36041L85.8125 8.13966C85.6526 8.08108 85.3836 8.01519 85.0055 7.94197C84.6419 7.8541 84.1693 7.81017 83.5876 7.81017C83.2095 7.81017 82.8314 7.8541 82.4533 7.94197C82.0898 8.01519 81.8498 8.06644 81.7335 8.09573V17.6949H79.7048V6.7558C80.1847 6.58007 80.781 6.41898 81.4935 6.27254C82.2061 6.11146 83.0059 6.03091 83.893 6.03091Z" fill="#414652"/>\r
<path d="M89.1443 6.27254H93.4415V7.9859H89.1443V13.2578C89.1443 13.8289 89.188 14.3048 89.2752 14.6856C89.3625 15.0517 89.4934 15.3445 89.6679 15.5642C89.8424 15.7692 90.0605 15.9157 90.3223 16.0035C90.584 16.0914 90.8894 16.1353 91.2384 16.1353C91.8492 16.1353 92.3363 16.0694 92.6999 15.9376C93.078 15.7912 93.3398 15.6887 93.4852 15.6301L93.8778 17.3215C93.6742 17.424 93.3179 17.5485 92.809 17.6949C92.3 17.856 91.7183 17.9365 91.0639 17.9365C90.2932 17.9365 89.6533 17.8414 89.1443 17.651C88.6499 17.446 88.25 17.1458 87.9446 16.7504C87.6392 16.355 87.4211 15.8717 87.2902 15.3006C87.1739 14.7148 87.1157 14.0412 87.1157 13.2797V3.08746L89.1443 2.736V6.27254Z" fill="#414652"/>\r
<path d="M95.1505 6.60203C95.6158 6.48488 96.2339 6.36041 97.0046 6.22861C97.7753 6.09681 98.6624 6.03091 99.6658 6.03091C100.567 6.03091 101.316 6.16271 101.913 6.4263C102.509 6.67525 102.981 7.03403 103.33 7.50264C103.694 7.95661 103.948 8.50576 104.094 9.1501C104.239 9.79444 104.312 10.5047 104.312 11.2808V17.6949H102.283V11.7201C102.283 11.0172 102.232 10.4168 102.131 9.91891C102.043 9.42102 101.891 9.0183 101.673 8.71078C101.454 8.40325 101.164 8.18359 100.8 8.0518C100.437 7.90535 99.9857 7.83213 99.4477 7.83213C99.2295 7.83213 99.0041 7.83946 98.7715 7.8541C98.5388 7.86875 98.3134 7.89071 98.0953 7.92C97.8917 7.93464 97.7026 7.95661 97.5281 7.9859C97.3681 8.01519 97.2518 8.03715 97.1791 8.0518V17.6949H95.1505V6.60203Z" fill="#414652"/>\r
<path d="M106.171 12.0057C106.171 10.9953 106.316 10.1166 106.607 9.36976C106.898 8.60827 107.283 7.97858 107.763 7.48068C108.243 6.98278 108.796 6.60936 109.421 6.36041C110.046 6.11146 110.686 5.98698 111.341 5.98698C112.868 5.98698 114.038 6.47024 114.853 7.43675C115.667 8.38861 116.074 9.84569 116.074 11.808C116.074 11.8959 116.074 12.013 116.074 12.1595C116.074 12.2913 116.067 12.4157 116.052 12.5329H108.287C108.374 13.719 108.716 14.6197 109.312 15.2347C109.908 15.8498 110.839 16.1573 112.104 16.1573C112.817 16.1573 113.413 16.0987 113.893 15.9816C114.387 15.8498 114.758 15.7253 115.005 15.6081L115.289 17.3215C115.042 17.4533 114.605 17.5924 113.98 17.7388C113.369 17.8853 112.671 17.9585 111.886 17.9585C110.897 17.9585 110.039 17.8121 109.312 17.5192C108.599 17.2117 108.011 16.7943 107.545 16.2671C107.08 15.7399 106.731 15.1176 106.498 14.4C106.28 13.6678 106.171 12.8697 106.171 12.0057ZM113.958 10.8854C113.973 9.96285 113.74 9.20868 113.26 8.62291C112.795 8.02251 112.148 7.7223 111.319 7.7223C110.853 7.7223 110.439 7.81749 110.075 8.00786C109.726 8.18359 109.428 8.4179 109.181 8.71078C108.934 9.00366 108.738 9.34047 108.592 9.72122C108.461 10.102 108.374 10.49 108.33 10.8854H113.958Z" fill="#414652"/>\r
<path d="M122.304 6.03091C122.478 6.03091 122.675 6.04556 122.893 6.07485C123.125 6.08949 123.351 6.11878 123.569 6.16271C123.787 6.192 123.983 6.22861 124.158 6.27254C124.347 6.30183 124.485 6.33112 124.572 6.36041L124.223 8.13966C124.063 8.08108 123.794 8.01519 123.416 7.94197C123.053 7.8541 122.58 7.81017 121.998 7.81017C121.62 7.81017 121.242 7.8541 120.864 7.94197C120.501 8.01519 120.261 8.06644 120.144 8.09573V17.6949H118.116V6.7558C118.596 6.58007 119.192 6.41898 119.904 6.27254C120.617 6.11146 121.417 6.03091 122.304 6.03091Z" fill="#414652"/>\r
<path d="M128.297 16.2232C129.126 16.2232 129.737 16.1134 130.129 15.8937C130.536 15.674 130.74 15.3226 130.74 14.8393C130.74 14.3414 130.544 13.946 130.151 13.6532C129.758 13.3603 129.111 13.0308 128.21 12.6647C127.773 12.4889 127.352 12.3132 126.944 12.1375C126.552 11.9471 126.21 11.7275 125.919 11.4785C125.628 11.2296 125.396 10.9294 125.221 10.5779C125.047 10.2264 124.959 9.79444 124.959 9.2819C124.959 8.27146 125.33 7.47335 126.072 6.88759C126.814 6.28719 127.824 5.98698 129.104 5.98698C129.424 5.98698 129.744 6.00895 130.064 6.05288C130.384 6.08217 130.682 6.1261 130.958 6.18468C131.234 6.22861 131.474 6.27986 131.678 6.33844C131.896 6.39702 132.063 6.44827 132.18 6.4922L131.809 8.24949C131.591 8.13234 131.249 8.01519 130.784 7.89803C130.318 7.76624 129.758 7.70034 129.104 7.70034C128.537 7.70034 128.042 7.81749 127.621 8.0518C127.199 8.27146 126.988 8.62291 126.988 9.10617C126.988 9.35512 127.032 9.57478 127.119 9.76515C127.221 9.95553 127.366 10.1313 127.555 10.2923C127.759 10.4388 128.006 10.5779 128.297 10.7097C128.588 10.8415 128.937 10.9806 129.344 11.1271C129.882 11.3321 130.362 11.5371 130.784 11.7421C131.205 11.9325 131.562 12.1595 131.852 12.4231C132.158 12.6866 132.39 13.0088 132.55 13.3896C132.71 13.7557 132.79 14.2096 132.79 14.7515C132.79 15.8058 132.398 16.6039 131.612 17.1458C130.842 17.6876 129.737 17.9585 128.297 17.9585C127.293 17.9585 126.508 17.8706 125.941 17.6949C125.374 17.5338 124.989 17.4094 124.785 17.3215L125.156 15.5642C125.388 15.6521 125.759 15.7839 126.268 15.9596C126.777 16.1353 127.453 16.2232 128.297 16.2232Z" fill="#414652"/>\r
</g>\r
<defs>\r
<clipPath id="clip0_22386_5491">\r
<rect width="133" height="18" fill="white"/>\r
</clipPath>\r
</defs>\r
</svg>`,
                        ExtendedClass: "display-flex cursor-pointer"
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "36",
                        alias: "22"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), C.createElement(P, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M22.0938 22.7891C23.7344 21.1875 24.75 18.9609 24.75 16.5C24.75 11.6953 20.8047 7.75 16 7.75C11.1562 7.75 7.25 11.6953 7.25 16.5C7.25 18.9609 8.26562 21.1875 9.86719 22.7891C10.4141 20.6406 12.4062 19 14.75 19H17.25C19.5547 19 21.5469 20.6406 22.0938 22.7891ZM20.9609 23.6875V23.7266C20.8047 21.7734 19.2031 20.25 17.25 20.25H14.75C12.7578 20.25 11.1562 21.7734 11 23.7266C12.4062 24.7031 14.125 25.25 16 25.25C17.8359 25.25 19.5547 24.7031 20.9609 23.6875ZM16 26.5C12.4062 26.5 9.125 24.625 7.32812 21.5C5.53125 18.4141 5.53125 14.625 7.32812 11.5C9.125 8.41406 12.4062 6.5 16 6.5C19.5547 6.5 22.8359 8.41406 24.6328 11.5C26.4297 14.625 26.4297 18.4141 24.6328 21.5C22.8359 24.625 19.5547 26.5 16 26.5ZM16 16.5C16.6641 16.5 17.25 16.1484 17.6016 15.5625C17.9531 15.0156 17.9531 14.2734 17.6016 13.6875C17.25 13.1406 16.6641 12.75 16 12.75C15.2969 12.75 14.7109 13.1406 14.3594 13.6875C14.0078 14.2734 14.0078 15.0156 14.3594 15.5625C14.7109 16.1484 15.2969 16.5 16 16.5ZM12.875 14.625C12.875 13.5312 13.4609 12.5156 14.4375 11.9297C15.375 11.3828 16.5859 11.3828 17.5625 11.9297C18.5 12.5156 19.125 13.5312 19.125 14.625C19.125 15.7578 18.5 16.7734 17.5625 17.3594C16.5859 17.9062 15.375 17.9062 14.4375 17.3594C13.4609 16.7734 12.875 15.7578 12.875 14.625Z" fill="black" fill-opacity="0.88"/>\r
</svg>`,
                        ExtendedClass: "display-flex cursor-pointer"
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "37",
                        alias: "23"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })), C.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "ph-content-with-nav",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "MainContent"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(ee, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        IsLoading: !v.getIsAppReady()
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "39",
                        alias: "24"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        content: new E(function() {
                            return [C.createElement(G, {
                                align: 0,
                                content: l.props.placeholders.placeholder,
                                _idProps: {
                                    service: e,
                                    name: "Placeholder"
                                },
                                _widgetRecordProvider: t
                            })]
                        })
                    }
                })), C.createElement(h, {
                    align: 0,
                    animate: !0,
                    style: "ph-bottom-navigation-footer",
                    visible: !v.getIsDesktop(),
                    _idProps: {
                        service: e,
                        name: "NavigationFooterMobile"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(q, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Icon: `<svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.16669 6C6.88544 6 6.66669 6.25 6.66669 6.5V9.5C6.66669 9.78125 6.88544 10 7.16669 10H10.1667C10.4167 10 10.6667 9.78125 10.6667 9.5V6.5C10.6667 6.25 10.4167 6 10.1667 6H7.16669ZM5.66669 6.5C5.66669 5.6875 6.32294 5 7.16669 5H10.1667C10.9792 5 11.6667 5.6875 11.6667 6.5V9.5C11.6667 10.3438 10.9792 11 10.1667 11H7.16669C6.32294 11 5.66669 10.3438 5.66669 9.5V6.5ZM7.16669 14C6.88544 14 6.66669 14.25 6.66669 14.5V17.5C6.66669 17.7812 6.88544 18 7.16669 18H10.1667C10.4167 18 10.6667 17.7812 10.6667 17.5V14.5C10.6667 14.25 10.4167 14 10.1667 14H7.16669ZM5.66669 14.5C5.66669 13.6875 6.32294 13 7.16669 13H10.1667C10.9792 13 11.6667 13.6875 11.6667 14.5V17.5C11.6667 18.3438 10.9792 19 10.1667 19H7.16669C6.32294 19 5.66669 18.3438 5.66669 17.5V14.5ZM18.1667 6H15.1667C14.8854 6 14.6667 6.25 14.6667 6.5V9.5C14.6667 9.78125 14.8854 10 15.1667 10H18.1667C18.4167 10 18.6667 9.78125 18.6667 9.5V6.5C18.6667 6.25 18.4167 6 18.1667 6ZM15.1667 5H18.1667C18.9792 5 19.6667 5.6875 19.6667 6.5V9.5C19.6667 10.3438 18.9792 11 18.1667 11H15.1667C14.3229 11 13.6667 10.3438 13.6667 9.5V6.5C13.6667 5.6875 14.3229 5 15.1667 5ZM15.1667 14C14.8854 14 14.6667 14.25 14.6667 14.5V17.5C14.6667 17.7812 14.8854 18 15.1667 18H18.1667C18.4167 18 18.6667 17.7812 18.6667 17.5V14.5C18.6667 14.25 18.4167 14 18.1667 14H15.1667ZM13.6667 14.5C13.6667 13.6875 14.3229 13 15.1667 13H18.1667C18.9792 13 19.6667 13.6875 19.6667 14.5V17.5C19.6667 18.3438 18.9792 19 18.1667 19H15.1667C14.3229 19 13.6667 18.3438 13.6667 17.5V14.5Z" />\r
</svg>`,
                        Label: "Hub",
                        IsActive: a.variables.currentScreenIn === m.navigation.hub,
                        _isActiveInDataFetchStatus: L.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus)
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        onClickLink$Action: n(function() {
                            var i = c.clone();
                            o.navigationOnClick$Action(m.navigation.hub, o.callContext(i))
                        }, "onClickLink$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        name: "Hub2",
                        alias: "25"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), C.createElement(q, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8.5 4C8.75 4 9 4.25 9 4.5V6H15V4.5C15 4.25 15.2188 4 15.5 4C15.75 4 16 4.25 16 4.5V6H17C18.0938 6 19 6.90625 19 8V9V10V18C19 19.125 18.0938 20 17 20H7C5.875 20 5 19.125 5 18V10V9V8C5 6.90625 5.875 6 7 6H8V4.5C8 4.25 8.21875 4 8.5 4ZM18 10H6V18C6 18.5625 6.4375 19 7 19H17C17.5312 19 18 18.5625 18 18V10ZM17 7H7C6.4375 7 6 7.46875 6 8V9H18V8C18 7.46875 17.5312 7 17 7Z"/>\r
</svg>\r
`,
                        Label: "Events",
                        IsActive: a.variables.currentScreenIn === m.navigation.events,
                        _isActiveInDataFetchStatus: L.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus)
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        onClickLink$Action: n(function() {
                            var i = c.clone();
                            o.navigationOnClick$Action(m.navigation.events, o.callContext(i))
                        }, "onClickLink$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        name: "Events2",
                        alias: "26"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), C.createElement(q, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Icon: `<svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">\r
<path d="M16.0208 12.0938C16.5208 11.3438 16.8333 10.4688 16.8333 9.5C16.8333 7.03125 14.8021 5 12.3333 5C9.83331 5 7.83331 7.03125 7.83331 9.5C7.83331 10.4688 8.11456 11.3438 8.61456 12.0938C8.73956 12.25 8.89581 12.4688 9.05206 12.6875C9.45831 13.2188 9.89581 13.8438 10.2396 14.4688C10.5208 14.9688 10.6771 15.5 10.7396 16.0312L9.73956 16C9.64581 15.625 9.55206 15.2812 9.36456 14.9375C9.05206 14.375 8.67706 13.8438 8.27081 13.3125C8.11456 13.0938 7.95831 12.875 7.80206 12.6562C7.17706 11.75 6.83331 10.6875 6.83331 9.5C6.83331 6.46875 9.27081 4 12.3333 4C15.3646 4 17.8333 6.46875 17.8333 9.5C17.8333 10.6875 17.4583 11.75 16.8333 12.6562C16.6771 12.875 16.5208 13.0938 16.3646 13.3125C15.9583 13.8438 15.5833 14.375 15.2708 14.9375C15.0833 15.2812 14.9896 15.625 14.8958 16H13.8958C13.9896 15.5 14.1146 14.9688 14.3958 14.4688C14.7396 13.8438 15.2083 13.2188 15.5833 12.6562C15.7396 12.4688 15.8958 12.25 16.0208 12.0625V12.0938ZM12.3333 7C10.9271 7 9.83331 8.125 9.83331 9.5C9.83331 9.78125 9.58331 10 9.33331 10C9.05206 10 8.83331 9.78125 8.83331 9.5C8.83331 7.59375 10.3958 6 12.3333 6C12.5833 6 12.8333 6.25 12.8333 6.5C12.8333 6.78125 12.5833 7 12.3333 7ZM10.8958 18C11.1146 18.5938 11.6771 19 12.3333 19C12.9583 19 13.5208 18.5938 13.7396 18H10.8958ZM9.83331 17.5V17.3438C9.83331 17.1562 9.95831 17 10.1458 17H14.4896C14.6771 17 14.8333 17.1562 14.8333 17.3438V17.5C14.8333 18.9062 13.7083 20 12.3333 20C10.9271 20 9.83331 18.9062 9.83331 17.5Z"/>\r
</svg>`,
                        Label: "Education",
                        IsActive: a.variables.currentScreenIn === m.navigation.education,
                        _isActiveInDataFetchStatus: L.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus)
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        onClickLink$Action: n(function() {
                            var i = c.clone();
                            o.navigationOnClick$Action(m.navigation.education, o.callContext(i))
                        }, "onClickLink$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        name: "Education2",
                        alias: "27"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })))]
            }))
        }
    };
n($, "View");
var Le = $,
    Re = Le;
var dt = S.PlaceholderContent,
    Lr = S.IteratorPlaceholderContent,
    W = class W extends w.BaseWebScreen {
        static get displayName() {
            return "PhNavigation.Hub"
        }
        static getAttributes() {
            return {
                codeFunction: "Hub",
                functionKey: "75c86091-ad66-4e26-8e80-e4f194fabee1",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PhNavigation.Hub.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/PartnersHub.UserScripts.DerivAnalytics.js"]
        }
        static getBlocks() {
            return [Re, de, ue, ge, ve, he, fe, me, pe, _e]
        }
        get modelFactory() {
            return We
        }
        get controllerFactory() {
            return Be
        }
        get title() {
            return w.BaseWebScreen.getTranslation("kWDIdWatJk6OgOTxlPq+4Q#Title", "Hub")
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                r = o.validationService,
                t = this.widgetsRecordProvider,
                c = o.callContext(),
                s = W.ifWidget,
                d = W.textWidget,
                g = W.asPrimitiveValue,
                _ = W.getTranslation,
                l = this;
            return p.createElement("div", this.getRootNodeProperties(), p.createElement(Re, {
                getOwnerSpan: n(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    CurrentScreen: m.navigation.hub
                },
                events: {
                    _handleError: n(function(i) {
                        o.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    name: "Navigation",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    placeholder: new dt(function() {
                        return [p.createElement(h, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "partners-hub-dashboard",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(h, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex;"
                            },
                            style: "partners-hub-title-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "PartnersHubTitle"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(h, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 24px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(Y, {
                            extendedProperties: {
                                style: "color: #222; font-size: 24px; font-weight: bold;"
                            },
                            text: ["Partner's Hub"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }))), p.createElement(h, {
                            align: 0,
                            animate: !0,
                            visible: v.getisCFDCommissionsFormEndabledFF() && v.getshowCFDCommisionBanner(),
                            _idProps: {
                                service: e,
                                name: "CFDBanner"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(de, {
                            getOwnerSpan: n(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(i) {
                                    o.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                name: "EnableCFDCommissionBanner",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), p.createElement(h, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; gap: 16px;"
                            },
                            style: "referral-links-reports-whatsapp",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "DashboarSection"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(h, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(ue, {
                            getOwnerSpan: n(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(i) {
                                    o.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "9",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }))), p.createElement(h, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            style: "complete-profile-commission-banner",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LesgoBanner"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(h, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: !1,
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(ge, {
                            getOwnerSpan: n(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(i) {
                                    o.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "12",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), p.createElement(ve, {
                            getOwnerSpan: n(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(i) {
                                    o.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "13",
                                alias: "5"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), p.createElement(h, {
                            align: 0,
                            animate: !0,
                            visible: v.getisEventSectionEnabledFF(),
                            _idProps: {
                                service: e,
                                name: "EventSection"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(he, {
                            getOwnerSpan: n(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(i) {
                                    o.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "15",
                                alias: "6"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), p.createElement(fe, {
                            getOwnerSpan: n(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(i) {
                                    o.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "16",
                                alias: "7"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), p.createElement(h, {
                            align: 0,
                            animate: !1,
                            style: "affiliate-programme-block",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "AffiliateProgramme"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(me, {
                            getOwnerSpan: n(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(i) {
                                    o.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "18",
                                alias: "8"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), p.createElement(pe, {
                            getOwnerSpan: n(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(i) {
                                    o.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "19",
                                alias: "9"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), s(v.getisCFDCommissionsFormEndabledFF(), !0, this, function() {
                            return [p.createElement(_e, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: n(function(i) {
                                        o.handleError(i)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "CFDCommissionsModal",
                                    alias: "10"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }, function() {
                            return []
                        })]
                    })
                },
                _dependencies: [g(v.getisEventSectionEnabledFF()), g(v.getshowCFDCommisionBanner()), g(v.getisCFDCommissionsFormEndabledFF())]
            }))
        }
    };
n(W, "View");
var Ie = W,
    Rr = Ie;
export {
    Rr as
    default
};