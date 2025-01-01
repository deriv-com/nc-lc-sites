import {
    a as He,
    b as Ee,
    c as Ae,
    d as we,
    e as Le,
    f as Oe
} from "./_oschunk-QTRZEJSW.js";
import {
    a as G
} from "./_oschunk-WGHHTA53.js";
import {
    a as te
} from "./_oschunk-KURWLJI2.js";
import {
    a as b,
    b as ce
} from "./_oschunk-ZL2HTVZN.js";
import {
    a as le
} from "./_oschunk-N6CDNE7S.js";
import {
    a as ee
} from "./_oschunk-JNIYO5MF.js";
import {
    a as se
} from "./_oschunk-C75U7DRJ.js";
import {
    a as Pe,
    d as f,
    f as A,
    g as ye,
    s as M,
    u as Se
} from "./_oschunk-LWMGEL7F.js";
import {
    a as w
} from "./_oschunk-4GXKK3IG.js";
import {
    a as W,
    g as L,
    i as S
} from "./_oschunk-WZHUAZJP.js";
import {
    a as v,
    o as oe,
    q as y
} from "./_oschunk-BDI2RWOA.js";
import {
    a as be
} from "./_oschunk-P3RPGEI5.js";
import {
    Ac as re,
    Ve as ie,
    a as h,
    yf as ae
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as m
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as n,
    h as B
} from "./_oschunk-QHO7QY6K.js";
var C = B(W());
var Re = {};

function de(p, a, o, e) {
    let r = localStorage.getItem("token");
    p.Token = r != null ? r : ""
}
n(de, "default");
var d = m; {
    let a = class a extends d.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Re);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getLanguages$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getLanguages$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getLanguages$AggrRefresh() {
            return this.hasOwnProperty("_getLanguages$AggrRefresh") || (this._getLanguages$AggrRefresh = function() {
                var e = function(r, t, g) {
                    var c = this.model,
                        u = this.controller,
                        g = u.callContext(g);
                    return u.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetLanguages", "screenservices/PartnersHub/PhNavigation/Navigation/ScreenDataSetGetLanguages", "6xtTVuHDhE9ZwPdoRp_bjQ", r, t, function(_) {
                        c.variables.getLanguagesAggr.dataFetchStatusAttr = _
                    }, function(_) {
                        c.variables.getLanguagesAggr.replaceWith(d.DataConversion.ServerDataConverter.from(_, c.variables.getLanguagesAggr.constructor))
                    }, void 0, void 0, void 0, g, v, !0)
                }.bind(this);
                return d.Logger.startActiveSpan("GetLanguages", function(r) {
                    return r && (r.setAttribute("code.function", "GetLanguages"), r.setAttribute("outsystems.function.key", "00c40463-d5ab-429f-ac94-ab888375b634"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), d.Flow.tryFinally(function() {
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
                    s = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(c) {
                    return c && (c.setAttribute("code.function", "OnReady"), c.setAttribute("outsystems.function.key", "056c9350-89ec-4255-81cd-79e4e74bdd62"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var u = new d.DataTypes.VariableHolder,
                            g = new d.DataTypes.VariableHolder;
                        return d.Flow.executeAsyncFlow(function() {
                            return y.useDevice$Action(e), g.value = d.Logger.startActiveSpan("GetAuthToken", function(_) {
                                _ && (_.setAttribute("code.function", "GetAuthToken"), _.setAttribute("outsystems.function.key", "c86f8bde-111e-4502-ab5b-44ac627e7f38"), _.setAttribute("outsystems.function.owner.name", "PartnersHub"), _.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), _.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(de, "GetAuthToken", "OnReady", {
                                        Token: d.DataConversion.JSNodeParamConverter.to("", d.DataTypes.DataTypes.Text)
                                    }, function(l) {
                                        var i = new(t.constructor.getVariableGroupType("PartnersHub.PhNavigation.Navigation.OnReady$getAuthTokenJSResult"));
                                        return i.tokenOut = d.DataConversion.JSNodeParamConverter.from(l.Token, d.DataTypes.DataTypes.Text), i
                                    }, {}, {})
                                } finally {
                                    _ && _.end()
                                }
                            }, 1), d.Flow.executeSequence(function() {
                                if (g.value.tokenOut !== d.BuiltinFunctions.nullTextIdentifier()) return r.flush(), be.getSettings$Action(v.getServer(), g.value.tokenOut, v.getAppId(), "EN", e).then(function(_) {
                                    u.value = _
                                }).then(function() {
                                    y.mountLiveChat$Action(u.value.responseOut, e)
                                })
                            })
                        })
                    }, function() {
                        c && c.end()
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
                    s = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("SetLanguageModalId", function(u) {
                    u && (u.setAttribute("code.function", "SetLanguageModalId"), u.setAttribute("outsystems.function.key", "0f2b93ac-69c3-4d87-b76f-d1a7b4d3f7c2"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("SetLanguageModalId"), r = s.callContext(r);
                        var g = new d.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("PartnersHub.PhNavigation.Navigation.SetLanguageModalId$vars")));
                        g.value.modaIdInLocal = e, t.variables.languageModalVar.modalIdAttr = g.value.modaIdInLocal
                    } finally {
                        u && u.end()
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
                    s = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("OnClickLanguage", function(u) {
                    u && (u.setAttribute("code.function", "OnClickLanguage"), u.setAttribute("outsystems.function.key", "167d3f64-ef46-4a05-b35d-062f6426bd26"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("OnClickLanguage"), r = s.callContext(r);
                        var g = new d.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("PartnersHub.PhNavigation.Navigation.OnClickLanguage$vars")));
                        g.value.setLanguageInLocal = e, d.SystemActions.setCurrentLocale(g.value.setLanguageInLocal, r), v.setLanguage(g.value.setLanguageInLocal), v.setLanguageShortCode(t.variables.getLanguagesAggr.listOut.getCurrent(r.iterationContext).languagesAttr.shortCodeAttr)
                    } finally {
                        u && u.end()
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
                    s = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("NavigationOnClick", function(u) {
                    u && (u.setAttribute("code.function", "NavigationOnClick"), u.setAttribute("outsystems.function.key", "266b2b17-e6bd-4f19-9907-05a4c80fbdae"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("NavigationOnClick"), r = s.callContext(r);
                        var g = new d.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("PartnersHub.PhNavigation.Navigation.NavigationOnClick$vars")));
                        if (g.value.screenInLocal = e, t.variables.currentScreenIn !== g.value.screenInLocal) {
                            if (g.value.screenInLocal === h.navigation.hub) return d.Navigation.navigateTo(d.Navigation.generateScreenURL("PartnersHub", "Hub", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.None), r, !0);
                            if (g.value.screenInLocal === h.navigation.events) return d.Navigation.navigateTo(d.Navigation.generateScreenURL("PartnersHub", "AllEvents", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.None), r, !0);
                            if (g.value.screenInLocal === h.navigation.education) return d.Navigation.navigateTo(d.Navigation.generateScreenURL("PartnersHub", "Education", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.None), r, !0)
                        }
                    } finally {
                        u && u.end()
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
                    s = this.idService;
                return d.Logger.startActiveSpan("OnClickCopyIdButton", function(c) {
                    return c && (c.setAttribute("code.function", "OnClickCopyIdButton"), c.setAttribute("outsystems.function.key", "4c1ba426-5f5b-4c2e-83e7-92154228a24e"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickCopyIdButton"), e = t.callContext(e);
                        var u = new d.DataTypes.VariableHolder;
                        return d.Flow.executeAsyncFlow(function() {
                            return r.flush(), y.copyToClipboard$Action(v.getUserId(), e).then(function(g) {
                                u.value = g
                            }).then(function() {
                                r.variables.messageVar = u.value.successOut ? "Copied!" : u.value.errorMessageOut
                            })
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__onClickCopyIdButton$Action
        }
        set _onClickCopyIdButton$Action(e) {
            this.__onClickCopyIdButton$Action = e
        }
        get _toggleModal$Action() {
            return this.hasOwnProperty("__toggleModal$Action") || (this.__toggleModal$Action = function(e, r) {
                var t = this.model,
                    s = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("ToggleModal", function(u) {
                    u && (u.setAttribute("code.function", "ToggleModal"), u.setAttribute("outsystems.function.key", "633d2f94-3493-4846-8a00-3857f11c1806"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("ToggleModal"), r = s.callContext(r);
                        var g = new d.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("PartnersHub.PhNavigation.Navigation.ToggleModal$vars")));
                        g.value.modalInLocal = e.clone();
                        var _ = new d.DataTypes.VariableHolder,
                            l = new d.DataTypes.VariableHolder;
                        g.value.modalInLocal.isModalOpenAttr ? l.value = oe.sidebarClose$Action(g.value.modalInLocal.modalIdAttr, r) : _.value = oe.sidebarOpen$Action(g.value.modalInLocal.modalIdAttr, r)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__toggleModal$Action
        }
        set _toggleModal$Action(e) {
            this.__toggleModal$Action = e
        }
        get _onToggleProfileModal$Action() {
            return this.hasOwnProperty("__onToggleProfileModal$Action") || (this.__onToggleProfileModal$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return d.Logger.startActiveSpan("OnToggleProfileModal", function(c) {
                    c && (c.setAttribute("code.function", "OnToggleProfileModal"), c.setAttribute("outsystems.function.key", "823aaca1-d139-457c-bfc0-c69e70bbc1ec"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnToggleProfileModal"), e = t.callContext(e), r.variables.profileModalVar.isModalOpenAttr = !r.variables.profileModalVar.isModalOpenAttr
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__onToggleProfileModal$Action
        }
        set _onToggleProfileModal$Action(e) {
            this.__onToggleProfileModal$Action = e
        }
        get _onClickOpenLiveChat$Action() {
            return this.hasOwnProperty("__onClickOpenLiveChat$Action") || (this.__onClickOpenLiveChat$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return d.Logger.startActiveSpan("OnClickOpenLiveChat", function(c) {
                    c && (c.setAttribute("code.function", "OnClickOpenLiveChat"), c.setAttribute("outsystems.function.key", "8cf7238f-b8e0-42ea-9291-592d2bbc6f99"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickOpenLiveChat"), e = t.callContext(e), y.showLiveChat$Action(e), y.rudderstackTrackEvent$Action(function() {
                            var u = new re;
                            return u.actionAttr = "click_cta", u.cta_nameAttr = "Open livechat", u.cta_placementAttr = "header", u
                        }(), "ce_partnershub_form", e)
                    } finally {
                        c && c.end()
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
                    s = this.idService;
                return d.Logger.startActiveSpan("TooltipOnToggle", function(c) {
                    c && (c.setAttribute("code.function", "TooltipOnToggle"), c.setAttribute("outsystems.function.key", "9d77b4e8-f98b-41e4-999d-bf9640dca888"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("TooltipOnToggle"), e = t.callContext(e), r.variables.messageVar = "Click to copy ID"
                    } finally {
                        c && c.end()
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
                    s = this.idService;
                return d.Logger.startActiveSpan("OnClickLogout", function(c) {
                    return c && (c.setAttribute("code.function", "OnClickLogout"), c.setAttribute("outsystems.function.key", "b36891a0-d4c6-48be-85e1-8c38421bee9c"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickLogout"), e = t.callContext(e), d.Flow.executeAsyncFlow(function() {
                            return r.variables.isLoggingOutVar = !0, y.rudderstackTrackEvent$Action(function() {
                                var u = new re;
                                return u.actionAttr = "click_cta", u.cta_nameAttr = "Logout", u.cta_placementAttr = "header", u
                            }(), "ce_partnershub_form", e), r.flush(), y.handleLogout$Action(v.getAppId(), v.getServer(), e)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__onClickLogout$Action
        }
        set _onClickLogout$Action(e) {
            this.__onClickLogout$Action = e
        }
        get _setProfileModalId$Action() {
            return this.hasOwnProperty("__setProfileModalId$Action") || (this.__setProfileModalId$Action = function(e, r) {
                var t = this.model,
                    s = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("SetProfileModalId", function(u) {
                    u && (u.setAttribute("code.function", "SetProfileModalId"), u.setAttribute("outsystems.function.key", "cfaaf7d4-c0c2-4277-a259-e8424000cc57"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("SetProfileModalId"), r = s.callContext(r);
                        var g = new d.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("PartnersHub.PhNavigation.Navigation.SetProfileModalId$vars")));
                        g.value.modaIdInLocal = e, t.variables.profileModalVar.modalIdAttr = g.value.modaIdInLocal
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__setProfileModalId$Action
        }
        set _setProfileModalId$Action(e) {
            this.__setProfileModalId$Action = e
        }
        get _onToggleLanguageModal$Action() {
            return this.hasOwnProperty("__onToggleLanguageModal$Action") || (this.__onToggleLanguageModal$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return d.Logger.startActiveSpan("OnToggleLanguageModal", function(c) {
                    c && (c.setAttribute("code.function", "OnToggleLanguageModal"), c.setAttribute("outsystems.function.key", "f0636f03-831e-4b71-8431-d7e2360e9327"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnToggleLanguageModal"), e = t.callContext(e), r.variables.languageModalVar.isModalOpenAttr = !r.variables.languageModalVar.isModalOpenAttr
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__onToggleLanguageModal$Action
        }
        set _onToggleLanguageModal$Action(e) {
            this.__onToggleLanguageModal$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "056c9350-89ec-4255-81cd-79e4e74bdd62"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        setLanguageModalId$Action(e, r) {
            var t = this.controller;
            return d.Logger.startActiveSpan("SetLanguageModalId__proxy", function(s) {
                s && (s.setAttribute("code.function", "SetLanguageModalId"), s.setAttribute("outsystems.function.key", "0f2b93ac-69c3-4d87-b76f-d1a7b4d3f7c2"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setLanguageModalId$Action, r, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        onClickLanguage$Action(e, r) {
            var t = this.controller;
            return d.Logger.startActiveSpan("OnClickLanguage__proxy", function(s) {
                s && (s.setAttribute("code.function", "OnClickLanguage"), s.setAttribute("outsystems.function.key", "167d3f64-ef46-4a05-b35d-062f6426bd26"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickLanguage$Action, r, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        navigationOnClick$Action(e, r) {
            var t = this.controller;
            return d.Logger.startActiveSpan("NavigationOnClick__proxy", function(s) {
                s && (s.setAttribute("code.function", "NavigationOnClick"), s.setAttribute("outsystems.function.key", "266b2b17-e6bd-4f19-9907-05a4c80fbdae"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._navigationOnClick$Action, r, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        onClickCopyIdButton$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("OnClickCopyIdButton__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickCopyIdButton"), t.setAttribute("outsystems.function.key", "4c1ba426-5f5b-4c2e-83e7-92154228a24e"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClickCopyIdButton$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        toggleModal$Action(e, r) {
            var t = this.controller;
            return d.Logger.startActiveSpan("ToggleModal__proxy", function(s) {
                s && (s.setAttribute("code.function", "ToggleModal"), s.setAttribute("outsystems.function.key", "633d2f94-3493-4846-8a00-3857f11c1806"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._toggleModal$Action, r, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        onToggleProfileModal$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("OnToggleProfileModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnToggleProfileModal"), t.setAttribute("outsystems.function.key", "823aaca1-d139-457c-bfc0-c69e70bbc1ec"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onToggleProfileModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickOpenLiveChat$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("OnClickOpenLiveChat__proxy", function(t) {
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
            return d.Logger.startActiveSpan("TooltipOnToggle__proxy", function(t) {
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
            return d.Logger.startActiveSpan("OnClickLogout__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickLogout"), t.setAttribute("outsystems.function.key", "b36891a0-d4c6-48be-85e1-8c38421bee9c"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClickLogout$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        setProfileModalId$Action(e, r) {
            var t = this.controller;
            return d.Logger.startActiveSpan("SetProfileModalId__proxy", function(s) {
                s && (s.setAttribute("code.function", "SetProfileModalId"), s.setAttribute("outsystems.function.key", "cfaaf7d4-c0c2-4277-a259-e8424000cc57"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setProfileModalId$Action, r, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        onToggleLanguageModal$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("OnToggleLanguageModal__proxy", function(t) {
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
                    s = this.idService;
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
    let p = a;
    k = p, k.registerVariableGroupType("PartnersHub.PhNavigation.Navigation.OnReady$getAuthTokenJSResult", [{
        name: "Token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }]), k.registerVariableGroupType("PartnersHub.PhNavigation.Navigation.SetLanguageModalId$vars", [{
        name: "ModaId",
        attrName: "modaIdInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }]), k.registerVariableGroupType("PartnersHub.PhNavigation.Navigation.OnClickLanguage$vars", [{
        name: "SetLanguage",
        attrName: "setLanguageInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }]), k.registerVariableGroupType("PartnersHub.PhNavigation.Navigation.NavigationOnClick$vars", [{
        name: "Screen",
        attrName: "screenInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Integer,
        defaultValue: n(function() {
            return 0
        }, "defaultValue")
    }]), k.registerVariableGroupType("PartnersHub.PhNavigation.Navigation.ToggleModal$vars", [{
        name: "Modal",
        attrName: "modalInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Record,
        defaultValue: n(function() {
            return new ie
        }, "defaultValue"),
        complexType: ie
    }]), k.registerVariableGroupType("PartnersHub.PhNavigation.Navigation.SetProfileModalId$vars", [{
        name: "ModaId",
        attrName: "modaIdInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }])
}
var k, Ie = new d.Controller.ControllerFactory(k, w);
var V = B(W());
var Me = {};
var ke = m; {
    let a = class a extends ke.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Me);
            var s = this.controller;
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
    let p = a;
    Ve = p
}
var Ve, xe = new ke.Controller.ControllerFactory(Ve, w);
var O = m,
    Rt = S.PlaceholderContent,
    It = S.IteratorPlaceholderContent,
    x = class x extends L.BaseWebBlock {
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
            return [b]
        }
        get modelFactory() {
            return He
        }
        get controllerFactory() {
            return xe
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
                s = o.callContext(),
                c = x.ifWidget,
                u = x.textWidget,
                g = x.asPrimitiveValue,
                _ = x.getTranslation,
                l = this;
            return V.createElement("div", this.getRootNodeProperties(), V.createElement(f, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: n(function() {
                        var i = s.clone();
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
            }, c(a.variables.leftIconIn !== O.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [V.createElement(b, {
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
            }), V.createElement(f, {
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
            }, c(a.variables.labelIn !== O.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [V.createElement(A, {
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
            }), V.createElement(M, {
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
            })), c(a.variables.rightIconIn !== O.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [V.createElement(b, {
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
n(x, "View");
var ue = x,
    H = ue;
var Q = B(W());
var Te = {};
var ne = m; {
    let a = class a extends ne.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Te);
            var s = this.controller;
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
                    s = this.idService;
                return ne.Logger.startActiveSpan("ProfileOnClickLink", function(c) {
                    c && (c.setAttribute("code.function", "ProfileOnClickLink"), c.setAttribute("outsystems.function.key", "d544e950-b1ef-4782-a165-2bc15f84e14f"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ProfileOnClickLink"), e = t.callContext(e), v.setIsAccountSettingsExpanded(!v.getIsAccountSettingsExpanded())
                    } finally {
                        c && c.end()
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
    let p = a;
    Ne = p
}
var Ne, De = new ne.Controller.ControllerFactory(Ne, w);
var $e = m,
    Ye = S.PlaceholderContent,
    Jt = S.IteratorPlaceholderContent,
    T = class T extends L.BaseWebBlock {
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
            return Ee
        }
        get controllerFactory() {
            return De
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
                s = o.callContext(),
                c = T.ifWidget,
                u = T.textWidget,
                g = T.asPrimitiveValue,
                _ = T.getTranslation,
                l = this;
            return Q.createElement("div", this.getRootNodeProperties(), Q.createElement(H, {
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
                    _labelInDataFetchStatus: $e.Model.calculateDataFetchStatus(a.variables._labelInDataFetchStatus),
                    IsActive: !1,
                    LeftIcon: a.variables.leftIconIn,
                    _leftIconInDataFetchStatus: $e.Model.calculateDataFetchStatus(a.variables._leftIconInDataFetchStatus)
                },
                events: {
                    _handleError: n(function(i) {
                        o.handleError(i)
                    }, "_handleError"),
                    onClickLink$Action: n(function() {
                        var i = s.clone();
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
                    body: Ye.Empty
                },
                _dependencies: []
            }), Q.createElement(f, {
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
            }, Q.createElement(M, {
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
n(T, "View");
var Ce = T,
    ge = Ce;
var N = B(W());
var Fe = {};
var Ze = m; {
    let a = class a extends Ze.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Fe);
            var s = this.controller;
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
    let p = a;
    Be = p
}
var Be, We = new Ze.Controller.ControllerFactory(Be, w);
var d1 = S.PlaceholderContent,
    u1 = S.IteratorPlaceholderContent,
    D = class D extends L.BaseWebBlock {
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
            return Ae
        }
        get controllerFactory() {
            return We
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
                s = o.callContext(),
                c = D.ifWidget,
                u = D.textWidget,
                g = D.asPrimitiveValue,
                _ = D.getTranslation,
                l = this;
            return N.createElement("div", this.getRootNodeProperties(), N.createElement(f, {
                align: 0,
                animate: !1,
                style: "lds-ring",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, N.createElement(f, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), N.createElement(f, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), N.createElement(f, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }), N.createElement(f, {
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
n(D, "View");
var ve = D,
    he = ve;
var X = B(W());
var Ge = {};
var ze = m; {
    let a = class a extends ze.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Ge);
            var s = this.controller;
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
    let p = a;
    Ue = p
}
var Ue, Je = new ze.Controller.ControllerFactory(Ue, w);
var fe = m,
    O1 = S.PlaceholderContent,
    R1 = S.IteratorPlaceholderContent,
    $ = class $ extends L.BaseWebBlock {
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
            return [b]
        }
        get modelFactory() {
            return we
        }
        get controllerFactory() {
            return Je
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
                s = o.callContext(),
                c = $.ifWidget,
                u = $.textWidget,
                g = $.asPrimitiveValue,
                _ = $.getTranslation,
                l = this;
            return X.createElement("div", this.getRootNodeProperties(), X.createElement(f, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: n(function() {
                        var i = s.clone();
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
                style_dataFetchStatus: fe.Model.calculateDataFetchStatus(a.variables._isActiveInDataFetchStatus)
            }, X.createElement(b, {
                getOwnerSpan: n(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "display-flex",
                    SVGCode: a.variables.iconIn,
                    _sVGCodeInDataFetchStatus: fe.Model.calculateDataFetchStatus(a.variables._iconInDataFetchStatus)
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
            }), X.createElement(A, {
                style: "ph-section-text",
                value: a.variables.labelIn,
                _idProps: {
                    service: e,
                    name: "LinkLabel"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: fe.Model.calculateDataFetchStatus(a.variables._labelInDataFetchStatus)
            })))
        }
    };
n($, "View");
var pe = $,
    Y = pe;
var U = B(W());
var Ke = {};
var je = m; {
    let a = class a extends je.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Ke);
            var s = this.controller;
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
    let p = a;
    qe = p
}
var qe, Qe = new je.Controller.ControllerFactory(qe, w);
var z = m,
    K1 = S.PlaceholderContent,
    j1 = S.IteratorPlaceholderContent,
    F = class F extends L.BaseWebBlock {
        static get displayName() {
            return "PhNavigation.CustomModalLinkSection"
        }
        static getAttributes() {
            return {
                codeFunction: "CustomModalLinkSection",
                functionKey: "c39d9f99-796b-428e-b40a-7c9e0edc39ca",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.PhNavigation.CustomModalLinkSection.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b]
        }
        get modelFactory() {
            return Le
        }
        get controllerFactory() {
            return Qe
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
                s = o.callContext(),
                c = F.ifWidget,
                u = F.textWidget,
                g = F.asPrimitiveValue,
                _ = F.getTranslation,
                l = this;
            return U.createElement("div", this.getRootNodeProperties(), U.createElement(f, {
                align: 0,
                animate: !1,
                style: "ph-custom-modal-link-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, c(a.variables.leftIconIn !== z.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [U.createElement(b, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: a.variables.leftIconIn,
                        _sVGCodeInDataFetchStatus: z.Model.calculateDataFetchStatus(a.variables._leftIconInDataFetchStatus)
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
            }), U.createElement(A, {
                style: "ph-custom-modal-link-container-label ph-section-16-sub-title " + a.variables.extendedClassIn,
                value: a.variables.labelIn,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: z.Model.calculateDataFetchStatus(a.variables._extendedClassInDataFetchStatus),
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(a.variables._labelInDataFetchStatus)
            }), c(a.variables.rightIconIn !== z.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [U.createElement(b, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: a.variables.rightIconIn,
                        _sVGCodeInDataFetchStatus: z.Model.calculateDataFetchStatus(a.variables._rightIconInDataFetchStatus)
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
                        uuid: "3",
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
n(F, "View");
var me = F,
    J = me;
var R = m,
    P = S.PlaceholderContent,
    et = S.IteratorPlaceholderContent,
    Z = class Z extends L.BaseWebBlock {
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
            return [se, te, b, H, ge, ee, he, G, le, Y, ce, J]
        }
        get modelFactory() {
            return Oe
        }
        get controllerFactory() {
            return Ie
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
                s = o.callContext(),
                c = Z.ifWidget,
                u = Z.textWidget,
                g = Z.asPrimitiveValue,
                _ = Z.getTranslation,
                l = this;
            return C.createElement("div", this.getRootNodeProperties(), c(v.getIsCheckingAuthentication(), !1, this, function() {
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
                return [C.createElement(te, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ContentClassName: "",
                        IsSidebarOpen: a.variables.languageModalVar.isModalOpenAttr,
                        HeaderInfo: a.getCachedValue(e.getId("LanguageSidebar.HeaderInfo"), function() {
                            return function() {
                                var i = new ae;
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
                            var i = s.clone();
                            o.toggleModal$Action(a.variables.languageModalVar, o.callContext(i))
                        }, "headerLeftButtonAction$Action"),
                        setModalId$Action: n(function(i) {
                            var E = s.clone();
                            o.setLanguageModalId$Action(i, o.callContext(E))
                        }, "setModalId$Action"),
                        toggleSidebar$Action: n(function(i, E) {
                            var I = s.clone();
                            o.onToggleLanguageModal$Action(o.callContext(I))
                        }, "toggleSidebar$Action"),
                        headerRightButtonAction$Action: n(function() {
                            var i = s.clone();
                            o.toggleModal$Action(a.variables.languageModalVar, o.callContext(i))
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
                        customHeader: P.Empty,
                        bodyContent: new P(function() {
                            return [C.createElement(ye, {
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
                                source_dataFetchStatus: R.Model.calculateDataFetchStatus(a.variables.getLanguagesAggr.dataFetchStatusAttr),
                                placeholders: {
                                    content: new et(function(i, E) {
                                        return [C.createElement(f, {
                                            align: 0,
                                            animate: !1,
                                            extendedEvents: {
                                                onClick: n(function() {
                                                    var I = E.clone();
                                                    o.onClickLanguage$Action(a.variables.getLanguagesAggr.listOut.getCurrent(E.iterationContext).languagesAttr.codeAttr, o.callContext(I))
                                                }, "onClick")
                                            },
                                            style: "ph-language-switch",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "3"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: [g(v.getLanguage()), g(a.variables.getLanguagesAggr.dataFetchStatusAttr), g(a.variables.getLanguagesAggr.listOut.getCurrent(E.iterationContext).languagesAttr.codeAttr), g(a.variables.getLanguagesAggr.listOut.getCurrent(E.iterationContext).languagesAttr.nameAttr)]
                                        }, C.createElement(A, {
                                            value: a.variables.getLanguagesAggr.listOut.getCurrent(E.iterationContext).languagesAttr.nameAttr,
                                            _idProps: {
                                                service: i,
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: t,
                                            value_dataFetchStatus: R.Model.calculateDataFetchStatus(a.variables.getLanguagesAggr.dataFetchStatusAttr)
                                        }), c(a.variables.getLanguagesAggr.listOut.getCurrent(E.iterationContext).languagesAttr.codeAttr === v.getLanguage(), !1, this, function() {
                                            return [C.createElement(b, {
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
                                    }, s, e, "1")
                                },
                                _dependencies: [g(v.getLanguage()), g(a.variables.getLanguagesAggr.dataFetchStatusAttr)]
                            })]
                        }),
                        customButton: P.Empty
                    },
                    _dependencies: [g(v.getLanguage()), g(a.variables.getLanguagesAggr.dataFetchStatusAttr), g(a.variables.getLanguagesAggr.listOut)]
                }), C.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "ph-navigation-main-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "MainContainer"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(f, {
                    align: 0,
                    animate: !0,
                    style: "ph-side-navigation-container",
                    visible: v.getIsDesktop(),
                    _idProps: {
                        service: e,
                        name: "SideNavigation"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "ph-side-navigation-header",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "NavigationHeader"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(b, {
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
                }), C.createElement(b, {
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
                })), C.createElement(f, {
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
                        IsActive: a.variables.currentScreenIn === h.navigation.hub,
                        _isActiveInDataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus),
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
                            var i = s.clone();
                            o.navigationOnClick$Action(h.navigation.hub, o.callContext(i))
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
                        body: P.Empty
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
                        IsActive: a.variables.currentScreenIn === h.navigation.events,
                        _isActiveInDataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus),
                        Label: "Events"
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        onClickLink$Action: n(function() {
                            var i = s.clone();
                            o.navigationOnClick$Action(h.navigation.events, o.callContext(i))
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
                        body: P.Empty
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
                        IsActive: a.variables.currentScreenIn === h.navigation.education,
                        _isActiveInDataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus)
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        onClickLink$Action: n(function() {
                            var i = s.clone();
                            o.navigationOnClick$Action(h.navigation.education, o.callContext(i))
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
                        body: P.Empty
                    },
                    _dependencies: []
                }), C.createElement(ge, {
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
                        content: new P(function() {
                            return [C.createElement(H, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Label: "Profile",
                                    IsActive: a.variables.currentScreenIn === h.navigation.profile,
                                    _isActiveInDataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus)
                                },
                                events: {
                                    _handleError: n(function(i) {
                                        o.handleError(i)
                                    }, "_handleError"),
                                    onClickLink$Action: n(function() {
                                        var i = s.clone();
                                        o.navigationOnClick$Action(h.navigation.profile, o.callContext(i))
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
                                    body: P.Empty
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
                                    IsActive: a.variables.currentScreenIn === h.navigation.verification,
                                    _isActiveInDataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus)
                                },
                                events: {
                                    _handleError: n(function(i) {
                                        o.handleError(i)
                                    }, "_handleError"),
                                    onClickLink$Action: n(function() {
                                        var i = s.clone();
                                        o.navigationOnClick$Action(h.navigation.verification, o.callContext(i))
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
                                    body: P.Empty
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
                                    IsActive: a.variables.currentScreenIn === h.navigation.security,
                                    _isActiveInDataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus)
                                },
                                events: {
                                    _handleError: n(function(i) {
                                        o.handleError(i)
                                    }, "_handleError"),
                                    onClickLink$Action: n(function() {
                                        var i = s.clone();
                                        o.navigationOnClick$Action(h.navigation.security, o.callContext(i))
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
                                    body: P.Empty
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
                                    content: new P(function() {
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
                                                    var i = s.clone();
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
                                                body: P.Empty
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
                                        var i = s.clone();
                                        o.toggleModal$Action(a.variables.languageModalVar, o.callContext(i))
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
                                    body: P.Empty
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
                                            var i = s.clone();
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
                                    body: new P(function() {
                                        return [c(a.variables.isLoggingOutVar, !1, this, function() {
                                            return [C.createElement(he, {
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
                                            return [C.createElement(b, {
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
                                        }), C.createElement(Se, {
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
                    _dependencies: [g(a.variables.isLoggingOutVar), g(a.variables.languageModalVar), g(v.getIsLiveChatReady()), g(a.variables._currentScreenInDataFetchStatus), g(a.variables.currentScreenIn)]
                }), C.createElement(G, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Space: h.space.none,
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
                })), C.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "ph-side-navigation-footer",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "NavigationFooter"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(A, {
                    style: "ph-mobile-heading-h4",
                    value: v.getname(),
                    _idProps: {
                        service: e,
                        uuid: "28"
                    },
                    _widgetRecordProvider: t
                }), C.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "display-flex gap-s align-items-center ph-text",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "29"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(A, {
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
                        Position: h.position.right,
                        Trigger: h.trigger.onHover
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        onToggle$Action: n(function(i, E) {
                            var I = s.clone();
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
                        content: new P(function() {
                            return [C.createElement(Pe, {
                                extendedEvents: {
                                    onClick: n(function() {
                                        return Promise.resolve().then(function() {
                                            var i = s.clone();
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
                            }, C.createElement(b, {
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
                        tooltip: new P(function() {
                            return [C.createElement(A, {
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
                })))), c(a.variables.hasCustomMobileHeaderIn, !1, this, function() {
                    return [C.createElement(M, {
                        align: 0,
                        content: l.props.placeholders.customMobileHeader,
                        style: "ph-mobile-navigation-header ph-mobile-custom-navigation-header",
                        _idProps: {
                            service: e,
                            name: "CustomMobileHeader"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [C.createElement(f, {
                        align: 0,
                        animate: !0,
                        style: "ph-mobile-navigation-header ph-mobile-original-navigation-header",
                        visible: !v.getIsDesktop(),
                        _idProps: {
                            service: e,
                            name: "NavigationHeaderMobile"
                        },
                        _widgetRecordProvider: t
                    }, C.createElement(f, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "PartnersHubLogo"
                        },
                        _widgetRecordProvider: t
                    }, C.createElement(b, {
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
                            uuid: "38",
                            alias: "22"
                        },
                        _widgetRecordProvider: t,
                        _dependencies: []
                    })), C.createElement(f, {
                        align: 0,
                        animate: !1,
                        extendedEvents: {
                            onClick: n(function() {
                                var i = s.clone();
                                o.toggleModal$Action(a.variables.profileModalVar, o.callContext(i))
                            }, "onClick")
                        },
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "ProfileIcon"
                        },
                        _widgetRecordProvider: t
                    }, C.createElement(b, {
                        getOwnerSpan: n(function() {
                            return l.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: n(function() {
                            return l.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            ExtendedClass: "display-flex cursor-pointer",
                            SVGCode: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<rect width="32" height="32" rx="16" fill="#E9ECEF"/>\r
<g clip-path="url(#clip0_24586_56120)">\r
<path d="M18.1875 12.25C18.1875 11.4844 17.75 10.7734 17.0938 10.3633C16.4102 9.98047 15.5625 9.98047 14.9062 10.3633C14.2227 10.7734 13.8125 11.4844 13.8125 12.25C13.8125 13.043 14.2227 13.7539 14.9062 14.1641C15.5625 14.5469 16.4102 14.5469 17.0938 14.1641C17.75 13.7539 18.1875 13.043 18.1875 12.25ZM12.5 12.25C12.5 11.0195 13.1562 9.87109 14.25 9.24219C15.3164 8.61328 16.6562 8.61328 17.75 9.24219C18.8164 9.87109 19.5 11.0195 19.5 12.25C19.5 13.5078 18.8164 14.6562 17.75 15.2852C16.6562 15.9141 15.3164 15.9141 14.25 15.2852C13.1562 14.6562 12.5 13.5078 12.5 12.25ZM11.2148 21.4375H20.7578C20.5117 19.7148 19.0352 18.375 17.2305 18.375H14.7422C12.9375 18.375 11.4609 19.7148 11.2148 21.4375ZM9.875 21.957C9.875 19.25 12.0352 17.0625 14.7422 17.0625H17.2305C19.9375 17.0625 22.125 19.25 22.125 21.957C22.125 22.3945 21.7422 22.75 21.3047 22.75H10.668C10.2305 22.75 9.875 22.3945 9.875 21.957Z" fill="#101213"/>\r
</g>\r
<defs>\r
<clipPath id="clip0_24586_56120">\r
<rect width="13" height="22" fill="white" transform="translate(9.5 5)"/>\r
</clipPath>\r
</defs>\r
</svg>\r
`
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
                            uuid: "40",
                            alias: "23"
                        },
                        _widgetRecordProvider: t,
                        _dependencies: []
                    })))]
                }), C.createElement(f, {
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
                        uuid: "42",
                        alias: "24"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        content: new P(function() {
                            return [C.createElement(M, {
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
                })), c(a.variables.hasCustomMobileFooterIn, !1, this, function() {
                    return [C.createElement(M, {
                        align: 0,
                        content: l.props.placeholders.customMobileFooter,
                        style: "ph-bottom-navigation-footer",
                        _idProps: {
                            service: e,
                            name: "CustomMobileFooter"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [C.createElement(f, {
                        align: 0,
                        animate: !0,
                        style: "ph-bottom-navigation-footer ph-bottom-original-navigation-footer",
                        visible: !v.getIsDesktop(),
                        _idProps: {
                            service: e,
                            name: "NavigationFooterMobile"
                        },
                        _widgetRecordProvider: t
                    }, C.createElement(Y, {
                        getOwnerSpan: n(function() {
                            return l.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: n(function() {
                            return l.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            Label: "Hub",
                            IsActive: a.variables.currentScreenIn === h.navigation.hub,
                            _isActiveInDataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus),
                            Icon: `<svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.16669 6C6.88544 6 6.66669 6.25 6.66669 6.5V9.5C6.66669 9.78125 6.88544 10 7.16669 10H10.1667C10.4167 10 10.6667 9.78125 10.6667 9.5V6.5C10.6667 6.25 10.4167 6 10.1667 6H7.16669ZM5.66669 6.5C5.66669 5.6875 6.32294 5 7.16669 5H10.1667C10.9792 5 11.6667 5.6875 11.6667 6.5V9.5C11.6667 10.3438 10.9792 11 10.1667 11H7.16669C6.32294 11 5.66669 10.3438 5.66669 9.5V6.5ZM7.16669 14C6.88544 14 6.66669 14.25 6.66669 14.5V17.5C6.66669 17.7812 6.88544 18 7.16669 18H10.1667C10.4167 18 10.6667 17.7812 10.6667 17.5V14.5C10.6667 14.25 10.4167 14 10.1667 14H7.16669ZM5.66669 14.5C5.66669 13.6875 6.32294 13 7.16669 13H10.1667C10.9792 13 11.6667 13.6875 11.6667 14.5V17.5C11.6667 18.3438 10.9792 19 10.1667 19H7.16669C6.32294 19 5.66669 18.3438 5.66669 17.5V14.5ZM18.1667 6H15.1667C14.8854 6 14.6667 6.25 14.6667 6.5V9.5C14.6667 9.78125 14.8854 10 15.1667 10H18.1667C18.4167 10 18.6667 9.78125 18.6667 9.5V6.5C18.6667 6.25 18.4167 6 18.1667 6ZM15.1667 5H18.1667C18.9792 5 19.6667 5.6875 19.6667 6.5V9.5C19.6667 10.3438 18.9792 11 18.1667 11H15.1667C14.3229 11 13.6667 10.3438 13.6667 9.5V6.5C13.6667 5.6875 14.3229 5 15.1667 5ZM15.1667 14C14.8854 14 14.6667 14.25 14.6667 14.5V17.5C14.6667 17.7812 14.8854 18 15.1667 18H18.1667C18.4167 18 18.6667 17.7812 18.6667 17.5V14.5C18.6667 14.25 18.4167 14 18.1667 14H15.1667ZM13.6667 14.5C13.6667 13.6875 14.3229 13 15.1667 13H18.1667C18.9792 13 19.6667 13.6875 19.6667 14.5V17.5C19.6667 18.3438 18.9792 19 18.1667 19H15.1667C14.3229 19 13.6667 18.3438 13.6667 17.5V14.5Z" />\r
</svg>`
                        },
                        events: {
                            _handleError: n(function(i) {
                                o.handleError(i)
                            }, "_handleError"),
                            onClickLink$Action: n(function() {
                                var i = s.clone();
                                o.navigationOnClick$Action(h.navigation.hub, o.callContext(i))
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
                    }), C.createElement(Y, {
                        getOwnerSpan: n(function() {
                            return l.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: n(function() {
                            return l.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            IsActive: a.variables.currentScreenIn === h.navigation.events,
                            _isActiveInDataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus),
                            Label: "Events",
                            Icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8.5 4C8.75 4 9 4.25 9 4.5V6H15V4.5C15 4.25 15.2188 4 15.5 4C15.75 4 16 4.25 16 4.5V6H17C18.0938 6 19 6.90625 19 8V9V10V18C19 19.125 18.0938 20 17 20H7C5.875 20 5 19.125 5 18V10V9V8C5 6.90625 5.875 6 7 6H8V4.5C8 4.25 8.21875 4 8.5 4ZM18 10H6V18C6 18.5625 6.4375 19 7 19H17C17.5312 19 18 18.5625 18 18V10ZM17 7H7C6.4375 7 6 7.46875 6 8V9H18V8C18 7.46875 17.5312 7 17 7Z"/>\r
</svg>\r
`
                        },
                        events: {
                            _handleError: n(function(i) {
                                o.handleError(i)
                            }, "_handleError"),
                            onClickLink$Action: n(function() {
                                var i = s.clone();
                                o.navigationOnClick$Action(h.navigation.events, o.callContext(i))
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
                    }), C.createElement(Y, {
                        getOwnerSpan: n(function() {
                            return l.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: n(function() {
                            return l.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            IsActive: a.variables.currentScreenIn === h.navigation.education,
                            _isActiveInDataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._currentScreenInDataFetchStatus),
                            Icon: `<svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">\r
<path d="M16.0208 12.0938C16.5208 11.3438 16.8333 10.4688 16.8333 9.5C16.8333 7.03125 14.8021 5 12.3333 5C9.83331 5 7.83331 7.03125 7.83331 9.5C7.83331 10.4688 8.11456 11.3438 8.61456 12.0938C8.73956 12.25 8.89581 12.4688 9.05206 12.6875C9.45831 13.2188 9.89581 13.8438 10.2396 14.4688C10.5208 14.9688 10.6771 15.5 10.7396 16.0312L9.73956 16C9.64581 15.625 9.55206 15.2812 9.36456 14.9375C9.05206 14.375 8.67706 13.8438 8.27081 13.3125C8.11456 13.0938 7.95831 12.875 7.80206 12.6562C7.17706 11.75 6.83331 10.6875 6.83331 9.5C6.83331 6.46875 9.27081 4 12.3333 4C15.3646 4 17.8333 6.46875 17.8333 9.5C17.8333 10.6875 17.4583 11.75 16.8333 12.6562C16.6771 12.875 16.5208 13.0938 16.3646 13.3125C15.9583 13.8438 15.5833 14.375 15.2708 14.9375C15.0833 15.2812 14.9896 15.625 14.8958 16H13.8958C13.9896 15.5 14.1146 14.9688 14.3958 14.4688C14.7396 13.8438 15.2083 13.2188 15.5833 12.6562C15.7396 12.4688 15.8958 12.25 16.0208 12.0625V12.0938ZM12.3333 7C10.9271 7 9.83331 8.125 9.83331 9.5C9.83331 9.78125 9.58331 10 9.33331 10C9.05206 10 8.83331 9.78125 8.83331 9.5C8.83331 7.59375 10.3958 6 12.3333 6C12.5833 6 12.8333 6.25 12.8333 6.5C12.8333 6.78125 12.5833 7 12.3333 7ZM10.8958 18C11.1146 18.5938 11.6771 19 12.3333 19C12.9583 19 13.5208 18.5938 13.7396 18H10.8958ZM9.83331 17.5V17.3438C9.83331 17.1562 9.95831 17 10.1458 17H14.4896C14.6771 17 14.8333 17.1562 14.8333 17.3438V17.5C14.8333 18.9062 13.7083 20 12.3333 20C10.9271 20 9.83331 18.9062 9.83331 17.5Z"/>\r
</svg>`,
                            Label: "Education"
                        },
                        events: {
                            _handleError: n(function(i) {
                                o.handleError(i)
                            }, "_handleError"),
                            onClickLink$Action: n(function() {
                                var i = s.clone();
                                o.navigationOnClick$Action(h.navigation.education, o.callContext(i))
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
                    }))]
                })), C.createElement(te, {
                    getOwnerSpan: n(function() {
                        return l.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return l.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        HasCustomHeader: !0,
                        CustomExtendedClass: "ph-profile-sidebar",
                        ContentClassName: "",
                        HasFooter: !1,
                        IsSidebarOpen: a.variables.profileModalVar.isModalOpenAttr,
                        HeaderInfo: a.getCachedValue(e.getId("MobileProfileModal.HeaderInfo"), function() {
                            return function() {
                                var i = new ae;
                                return i.showLeftButtonAttr = !1, i.showRightButtonAttr = !1, i.titleAttr = "", i
                            }()
                        })
                    },
                    events: {
                        _handleError: n(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        toggleSidebar$Action: n(function(i, E) {
                            var I = s.clone();
                            o.onToggleProfileModal$Action(o.callContext(I))
                        }, "toggleSidebar$Action"),
                        headerLeftButtonAction$Action: n(function() {
                            var i = s.clone();
                            o.toggleModal$Action(a.variables.profileModalVar, o.callContext(i))
                        }, "headerLeftButtonAction$Action"),
                        setModalId$Action: n(function(i) {
                            var E = s.clone();
                            o.setProfileModalId$Action(i, o.callContext(E))
                        }, "setModalId$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        name: "MobileProfileModal",
                        alias: "28"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        customHeader: new P(function() {
                            return [C.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "ph-custom-sidebar-header",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "50"
                                },
                                _widgetRecordProvider: t
                            }, C.createElement(ce, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    ShowLeftButton: !0,
                                    CustomRightIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M11.5 4.5C11.5 4.25 11.7188 4 12 4C12.25 4 12.5 4.25 12.5 4.5V5.03125C15 5.28125 17 7.40625 17 10V10.9375C17 12.2812 17.5312 13.5938 18.5 14.5625L18.5938 14.6562C18.8438 14.9062 19 15.2812 19 15.625C19 16.4062 18.375 17.0312 17.5938 17.0312L6.375 17C5.59375 17 5 16.4062 5 15.625C5 15.25 5.125 14.9062 5.40625 14.6562L5.46875 14.5625C6.4375 13.5938 7 12.2812 7 10.9375V10C7 7.40625 8.96875 5.28125 11.5 5.03125V4.5ZM12 6C9.78125 6 8 7.8125 8 10V10.9375C8 12.5625 7.34375 14.125 6.1875 15.2812L6.09375 15.3438C6.03125 15.4375 6 15.5312 6 15.625C6 15.8438 6.15625 16 6.375 16H17.5938C17.8125 16 18 15.8438 18 15.625C18 15.5312 17.9375 15.4375 17.875 15.3438L17.7812 15.2812C16.625 14.125 15.9688 12.5625 15.9688 10.9062V10C15.9688 7.8125 14.1875 6 11.9688 6H12ZM11.0312 18.3438C11.1875 18.75 11.5625 19 12 19C12.4062 19 12.7812 18.75 12.9375 18.3438C13.0312 18.0938 13.3125 17.9375 13.5625 18.0312C13.8125 18.125 13.9688 18.4062 13.875 18.6875C13.5938 19.4688 12.8438 20 12 20C11.125 20 10.375 19.4688 10.0938 18.6875C10 18.4062 10.1562 18.125 10.4062 18.0312C10.6562 17.9375 10.9375 18.0938 11.0312 18.3438Z" fill="#101213"/>\r
</svg>\r
`,
                                    Title: "",
                                    IsSidebarTitle: !0,
                                    ShowRightButton: !1
                                },
                                events: {
                                    _handleError: n(function(i) {
                                        o.handleError(i)
                                    }, "_handleError"),
                                    leftButtonAction$Action: n(function() {
                                        var i = s.clone();
                                        o.toggleModal$Action(a.variables.profileModalVar, o.callContext(i))
                                    }, "leftButtonAction$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "Head",
                                    alias: "29"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), C.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "ph-profile-sidebar-head-details",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "ProfileDetails"
                                },
                                _widgetRecordProvider: t
                            }, C.createElement(b, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<rect width="48" height="48" rx="24" fill="#E9ECEF"/>\r
<g clip-path="url(#clip0_2591_18375)">\r
<path d="M27.125 19.5C27.125 18.4062 26.5 17.3906 25.5625 16.8047C24.5859 16.2578 23.375 16.2578 22.4375 16.8047C21.4609 17.3906 20.875 18.4062 20.875 19.5C20.875 20.6328 21.4609 21.6484 22.4375 22.2344C23.375 22.7812 24.5859 22.7812 25.5625 22.2344C26.5 21.6484 27.125 20.6328 27.125 19.5ZM19 19.5C19 17.7422 19.9375 16.1016 21.5 15.2031C23.0234 14.3047 24.9375 14.3047 26.5 15.2031C28.0234 16.1016 29 17.7422 29 19.5C29 21.2969 28.0234 22.9375 26.5 23.8359C24.9375 24.7344 23.0234 24.7344 21.5 23.8359C19.9375 22.9375 19 21.2969 19 19.5ZM17.1641 32.625H30.7969C30.4453 30.1641 28.3359 28.25 25.7578 28.25H22.2031C19.625 28.25 17.5156 30.1641 17.1641 32.625ZM15.25 33.3672C15.25 29.5 18.3359 26.375 22.2031 26.375H25.7578C29.625 26.375 32.75 29.5 32.75 33.3672C32.75 33.9922 32.2031 34.5 31.5781 34.5H16.3828C15.7578 34.5 15.25 33.9922 15.25 33.3672Z" fill="#272B30"/>\r
</g>\r
<defs>\r
<clipPath id="clip0_2591_18375">\r
<rect width="18" height="30" fill="white" transform="translate(15 9)"/>\r
</clipPath>\r
</defs>\r
</svg>\r
`
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
                                    uuid: "53",
                                    alias: "30"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), C.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "Details"
                                },
                                _widgetRecordProvider: t
                            }, C.createElement(A, {
                                style: "ph-section-title",
                                value: v.getname(),
                                _idProps: {
                                    service: e,
                                    name: "Name"
                                },
                                _widgetRecordProvider: t
                            }), C.createElement(A, {
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                style: "ph-section-description",
                                value: v.getemail(),
                                _idProps: {
                                    service: e,
                                    name: "Email"
                                },
                                _widgetRecordProvider: t
                            }))))]
                        }),
                        bodyContent: new P(function() {
                            return [C.createElement(J, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Label: "Account settings",
                                    LeftIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.9688 5.1875L10.5312 6.6875C10.4375 7.0625 10.1562 7.34375 9.84375 7.5C9.59375 7.625 9.375 7.75 9.15625 7.875C8.875 8.09375 8.46875 8.1875 8.09375 8.09375L6.59375 7.71875C6.53125 7.71875 6.5 7.71875 6.46875 7.71875C6.28125 7.9375 6.125 8.15625 6 8.40625L5.84375 8.625C5.71875 8.875 5.59375 9.125 5.5 9.375C5.5 9.40625 5.53125 9.46875 5.5625 9.5L6.65625 10.5938C6.90625 10.875 7.03125 11.2812 7 11.625C7 11.75 7 11.875 7 12C7 12.1562 7 12.2812 7 12.4062C7.03125 12.75 6.90625 13.125 6.65625 13.4062L5.5625 14.5312C5.53125 14.5625 5.5 14.625 5.5 14.6562C5.59375 14.9062 5.71875 15.1562 5.84375 15.4062L5.96875 15.625C6.125 15.8438 6.28125 16.0938 6.4375 16.3125C6.5 16.3125 6.53125 16.3125 6.59375 16.3125L8.09375 15.9375C8.46875 15.8438 8.875 15.9375 9.15625 16.125C9.375 16.2812 9.59375 16.4062 9.84375 16.5312C10.1562 16.6875 10.4375 16.9688 10.5312 17.3438L10.9688 18.8438C10.9688 18.875 11 18.9062 11.0312 18.9375C11.3438 19 11.6562 19 12 19C12.3125 19 12.625 19 12.9375 18.9375C12.9688 18.9062 13 18.875 13 18.8438L13.4375 17.3438C13.5312 16.9688 13.8125 16.6875 14.125 16.5312C14.375 16.4062 14.5938 16.2812 14.8125 16.125C15.125 15.9375 15.5 15.8438 15.875 15.9375L17.375 16.3125C17.4375 16.3125 17.4688 16.3125 17.5312 16.3125C17.6875 16.0938 17.8438 15.8438 18 15.625L18.125 15.4062C18.25 15.1562 18.375 14.9062 18.4688 14.6562C18.4688 14.625 18.4375 14.5625 18.4062 14.5312L17.3125 13.4062C17.0625 13.125 16.9375 12.75 16.9688 12.4062C16.9688 12.2812 17 12.1562 17 12C17 11.875 16.9688 11.75 16.9688 11.625C16.9375 11.2812 17.0625 10.875 17.3125 10.5938L18.4062 9.5C18.4375 9.46875 18.4688 9.40625 18.4688 9.375C18.375 9.125 18.25 8.875 18.125 8.625L18 8.40625C17.8438 8.15625 17.6875 7.9375 17.5312 7.71875C17.4688 7.71875 17.4375 7.71875 17.375 7.71875L15.875 8.09375C15.5 8.1875 15.125 8.09375 14.8125 7.90625C14.5938 7.75 14.375 7.625 14.125 7.5C13.8125 7.34375 13.5312 7.0625 13.4375 6.6875L13 5.1875C13 5.15625 12.9688 5.09375 12.9375 5.0625C12.625 5.03125 12.3125 5 12 5C11.6562 5 11.3438 5.03125 11.0312 5.0625C11 5.09375 10.9688 5.15625 10.9688 5.1875ZM12 4C12.4062 4 12.7812 4.03125 13.1875 4.09375C13.25 4.125 13.2812 4.125 13.3438 4.15625C13.625 4.3125 13.875 4.59375 13.9688 4.90625L14.4062 6.40625C14.4062 6.46875 14.4688 6.5625 14.5625 6.59375C14.8438 6.71875 15.125 6.875 15.375 7.0625C15.4688 7.125 15.5625 7.15625 15.625 7.125L17.125 6.75C17.4688 6.65625 17.8438 6.71875 18.125 6.90625C18.1562 6.9375 18.1875 6.96875 18.2188 7.03125C18.4688 7.28125 18.6562 7.59375 18.8438 7.90625L19 8.125V8.15625C19.1562 8.46875 19.3125 8.78125 19.4375 9.09375C19.4688 9.15625 19.4688 9.1875 19.4688 9.25C19.5 9.59375 19.375 9.9375 19.125 10.1875L18.0312 11.3125C18 11.3438 17.9688 11.4375 17.9688 11.5312C17.9688 11.6875 18 11.8438 18 12C18 12.1562 17.9688 12.3125 17.9688 12.4688C17.9688 12.5938 18 12.6875 18.0312 12.7188L19.125 13.8438C19.375 14.0938 19.5 14.4375 19.4688 14.7812C19.4688 14.8125 19.4688 14.875 19.4375 14.9375C19.3125 15.25 19.1562 15.5625 19 15.875L18.8438 16.125C18.6562 16.4375 18.4688 16.7188 18.2188 17C18.1875 17.0625 18.1562 17.0938 18.125 17.125C17.8438 17.3125 17.4688 17.375 17.125 17.2812L15.625 16.9062C15.5625 16.875 15.4688 16.9062 15.375 16.9688C15.125 17.125 14.8438 17.2812 14.5625 17.4375C14.4688 17.4688 14.4062 17.5625 14.4062 17.625L13.9688 19.0938C13.875 19.4375 13.625 19.7188 13.3438 19.875C13.2812 19.9062 13.25 19.9062 13.1875 19.9375C12.7812 19.9688 12.4062 20 12 20C11.5938 20 11.1875 19.9688 10.7812 19.9375C10.7188 19.9062 10.6875 19.9062 10.625 19.875C10.3438 19.7188 10.0938 19.4375 10 19.0938L9.5625 17.625C9.5625 17.5625 9.5 17.4688 9.40625 17.4375C9.125 17.3125 8.84375 17.1562 8.59375 16.9688C8.5 16.9062 8.40625 16.9062 8.34375 16.9062L6.84375 17.2812C6.5 17.375 6.15625 17.3125 5.875 17.125C5.8125 17.0938 5.78125 17.0625 5.75 17.0312C5.5 16.75 5.3125 16.4375 5.125 16.125L5 15.9062L4.96875 15.875C4.8125 15.5625 4.65625 15.25 4.53125 14.9375C4.53125 14.875 4.5 14.8438 4.5 14.7812C4.5 14.4375 4.59375 14.0938 4.84375 13.8438L5.9375 12.7188C5.96875 12.6875 6 12.5938 6 12.4688C6 12.3438 6 12.1562 6 12C6 11.8438 6 11.6875 6 11.5312C6 11.4375 5.96875 11.3438 5.9375 11.3125L4.84375 10.1875C4.59375 9.9375 4.5 9.59375 4.5 9.25C4.5 9.1875 4.53125 9.15625 4.53125 9.09375C4.65625 8.78125 4.8125 8.46875 4.96875 8.15625L5 8.125L5.125 7.90625C5.3125 7.59375 5.53125 7.28125 5.75 7.03125C5.78125 6.96875 5.8125 6.9375 5.875 6.90625C6.15625 6.71875 6.5 6.65625 6.84375 6.75L8.34375 7.125C8.40625 7.15625 8.5 7.125 8.59375 7.0625C8.84375 6.90625 9.125 6.71875 9.40625 6.59375C9.5 6.5625 9.5625 6.46875 9.5625 6.40625L10 4.90625C10.0938 4.59375 10.3438 4.3125 10.625 4.15625C10.6875 4.125 10.7188 4.125 10.7812 4.09375C11.1875 4.03125 11.5938 4 12 4ZM10.25 12C10.25 12.6562 10.5625 13.2188 11.125 13.5312C11.6562 13.8438 12.3125 13.8438 12.875 13.5312C13.4062 13.2188 13.75 12.6562 13.75 12C13.75 11.375 13.4062 10.8125 12.875 10.5C12.3125 10.1875 11.6562 10.1875 11.125 10.5C10.5625 10.8125 10.25 11.375 10.25 12ZM14.75 12C14.75 13 14.2188 13.9062 13.375 14.4062C12.5 14.875 11.4688 14.875 10.625 14.4062C9.75 13.9062 9.25 13 9.25 12C9.25 11.0312 9.75 10.125 10.625 9.625C11.4688 9.15625 12.5 9.15625 13.375 9.625C14.2188 10.125 14.75 11.0312 14.75 12Z" fill="#272B30"/>\r
</svg>`,
                                    RightIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M16.3438 11.6562C16.5312 11.8438 16.5312 12.1875 16.3438 12.375L10.3438 18.375C10.1562 18.5625 9.8125 18.5625 9.625 18.375C9.4375 18.1875 9.4375 17.8438 9.625 17.6562L15.2812 12L9.625 6.375C9.4375 6.1875 9.4375 5.84375 9.625 5.65625C9.8125 5.46875 10.1562 5.46875 10.3438 5.65625L16.3438 11.6562Z" fill="#ADB5BD"/>\r
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
                                    name: "MobileAccountSettings",
                                    alias: "31"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), C.createElement(G, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Space: h.space.none,
                                    Color: h.color.neutral3
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
                                    uuid: "58",
                                    alias: "32"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), C.createElement(J, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    RightIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M16.3438 11.6562C16.5312 11.8438 16.5312 12.1875 16.3438 12.375L10.3438 18.375C10.1562 18.5625 9.8125 18.5625 9.625 18.375C9.4375 18.1875 9.4375 17.8438 9.625 17.6562L15.2812 12L9.625 6.375C9.4375 6.1875 9.4375 5.84375 9.625 5.65625C9.8125 5.46875 10.1562 5.46875 10.3438 5.65625L16.3438 11.6562Z" fill="#ADB5BD"/>\r
</svg>`,
                                    Label: "Live chat",
                                    LeftIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8.3125 13H13C13.5312 13 14 12.5625 14 12V6C14 5.46875 13.5312 5 13 5H4C3.4375 5 3 5.46875 3 6V12C3 12.5625 3.4375 13 4 13H5C5.53125 13 6 13.4688 6 14V14.5L7.71875 13.2188C7.90625 13.0938 8.09375 13 8.3125 13ZM13 14H8.3125L5.78125 15.9062C5.625 16.0312 5.4375 16.0312 5.25 15.9688C5.09375 15.875 5 15.7188 5 15.5V15V14H4C2.875 14 2 13.125 2 12V6C2 4.90625 2.875 4 4 4H13C14.0938 4 15 4.90625 15 6V12C15 13.125 14.0938 14 13 14ZM12 18C10.875 18 10 17.125 10 16V15H11V16C11 16.5625 11.4375 17 12 17H15.6562C15.875 17 16.0938 17.0938 16.25 17.2188L18 18.5V18C18 17.4688 18.4375 17 19 17H20C20.5312 17 21 16.5625 21 16V10C21 9.46875 20.5312 9 20 9H16V8H20C21.0938 8 22 8.90625 22 10V16C22 17.125 21.0938 18 20 18H19V19V19.5C19 19.7188 18.875 19.875 18.7188 19.9688C18.5312 20.0312 18.3438 20.0312 18.1875 19.9062L15.6562 18H12ZM7.75 6.21875C7.21875 6.21875 6.78125 6.53125 6.59375 7V7.03125C6.5 7.3125 6.65625 7.59375 6.90625 7.6875C7.15625 7.78125 7.4375 7.625 7.53125 7.375L7.5625 7.34375C7.5625 7.25 7.65625 7.21875 7.75 7.21875H9.03125C9.25 7.21875 9.40625 7.375 9.40625 7.5625C9.40625 7.71875 9.34375 7.84375 9.21875 7.90625L8.25 8.46875C8.09375 8.5625 8 8.71875 8 8.90625V9.1875C8 9.46875 8.21875 9.6875 8.5 9.6875C8.75 9.6875 9 9.46875 9 9.1875L9.71875 8.75C10.1562 8.53125 10.4062 8.0625 10.4062 7.59375C10.4062 6.8125 9.78125 6.21875 9.03125 6.21875H7.75ZM8.5 11.8438C8.75 11.875 9 11.75 9.125 11.5C9.28125 11.2812 9.28125 11 9.125 10.7812C9 10.5625 8.75 10.4062 8.5 10.4375C8.21875 10.4062 7.96875 10.5625 7.84375 10.7812C7.6875 11 7.6875 11.2812 7.84375 11.5C7.96875 11.75 8.21875 11.875 8.5 11.8438Z" fill="#272B30"/>\r
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
                                    name: "MobileLiveChat",
                                    alias: "33"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), C.createElement(G, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Space: h.space.none,
                                    Color: h.color.neutral3
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
                                    uuid: "60",
                                    alias: "34"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), C.createElement(J, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Label: "Language (" + v.getLanguageShortCode() + ")",
                                    RightIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M16.3438 11.6562C16.5312 11.8438 16.5312 12.1875 16.3438 12.375L10.3438 18.375C10.1562 18.5625 9.8125 18.5625 9.625 18.375C9.4375 18.1875 9.4375 17.8438 9.625 17.6562L15.2812 12L9.625 6.375C9.4375 6.1875 9.4375 5.84375 9.625 5.65625C9.8125 5.46875 10.1562 5.46875 10.3438 5.65625L16.3438 11.6562Z" fill="#ADB5BD"/>\r
</svg>`,
                                    LeftIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12 19C12.5 19 13.25 18.5625 13.9062 17.2188C14.2188 16.5938 14.5 15.8438 14.6875 15H9.3125C9.46875 15.8438 9.75 16.5938 10.0625 17.2188C10.7188 18.5625 11.4688 19 12 19ZM9.125 14H14.8438C14.9375 13.375 15 12.7188 15 12C15 11.3125 14.9375 10.6562 14.8438 10H9.125C9.03125 10.6562 9 11.3125 9 12C9 12.7188 9.03125 13.375 9.125 14ZM9.3125 9H14.6875C14.5 8.15625 14.2188 7.4375 13.9062 6.8125C13.25 5.46875 12.5 5 12 5C11.4688 5 10.7188 5.46875 10.0625 6.8125C9.75 7.4375 9.46875 8.15625 9.3125 9ZM15.875 10C15.9375 10.6562 16 11.3125 16 12C16 12.7188 15.9375 13.375 15.875 14H18.6875C18.875 13.375 19 12.7188 19 12C19 11.3125 18.875 10.6562 18.6875 10H15.875ZM18.3125 9C17.5 7.3125 16.0312 6 14.2188 5.375C14.875 6.25 15.4062 7.53125 15.6875 9H18.3125ZM8.28125 9C8.59375 7.53125 9.09375 6.25 9.75 5.375C7.9375 6 6.46875 7.3125 5.65625 9H8.28125ZM5.28125 10C5.09375 10.6562 5 11.3125 5 12C5 12.7188 5.09375 13.375 5.28125 14H8.125C8.03125 13.375 8 12.7188 8 12C8 11.3125 8.03125 10.6562 8.125 10H5.28125ZM14.2188 18.6562C16.0312 18.0312 17.5 16.7188 18.3125 15H15.6875C15.4062 16.5 14.875 17.75 14.2188 18.6562ZM9.75 18.6562C9.09375 17.75 8.59375 16.5 8.28125 15H5.65625C6.46875 16.7188 7.9375 18.0312 9.75 18.6562ZM12 20C9.125 20 6.5 18.5 5.0625 16C3.625 13.5312 3.625 10.5 5.0625 8C6.5 5.53125 9.125 4 12 4C14.8438 4 17.4688 5.53125 18.9062 8C20.3438 10.5 20.3438 13.5312 18.9062 16C17.4688 18.5 14.8438 20 12 20Z" fill="#272B30"/>\r
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
                                    name: "MobileLanguage",
                                    alias: "35"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), C.createElement(G, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Color: h.color.neutral3,
                                    Space: h.space.none
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
                                    uuid: "62",
                                    alias: "36"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), C.createElement(J, {
                                getOwnerSpan: n(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    LeftIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M18.9688 11.9688L14.8438 8.0625C14.8125 8.03125 14.75 8 14.6875 8C14.5938 8 14.5 8.09375 14.5 8.21875V10C14.5 10.2812 14.25 10.5 14 10.5H10.25C10.0938 10.5 10 10.625 10 10.75V13.25C10 13.4062 10.0938 13.5 10.25 13.5H14C14.25 13.5 14.5 13.75 14.5 14V15.8125C14.5 15.9062 14.5938 16 14.6875 16C14.75 16 14.8125 16 14.8438 15.9688L18.9688 12.0625C18.9688 12.0625 19 12.0312 19 12L18.9688 11.9688ZM20 12C20 12.3125 19.875 12.5938 19.6562 12.8125L15.5312 16.6875C15.3125 16.9062 15 17 14.6875 17C14.0312 17 13.5 16.4688 13.5 15.8125V14.5H10.25C9.53125 14.5 9 13.9688 9 13.25V10.75C9 10.0625 9.53125 9.5 10.25 9.5H13.5V8.21875C13.5 7.5625 14.0312 7 14.6875 7C15 7 15.3125 7.125 15.5312 7.34375L19.6562 11.2188C19.875 11.4375 20 11.7188 20 12ZM9.5 6H6.5C5.65625 6 5 6.6875 5 7.5V16.5C5 17.3438 5.65625 18 6.5 18H9.5C9.75 18 10 18.25 10 18.5C10 18.7812 9.75 19 9.5 19H6.5C5.09375 19 4 17.9062 4 16.5V7.5C4 6.125 5.09375 5 6.5 5H9.5C9.75 5 10 5.25 10 5.5C10 5.78125 9.75 6 9.5 6Z" fill="#DC2020"/>\r
</svg>`,
                                    ExtendedClass: "ph-modal-logout-label",
                                    Label: "Log out"
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
                                    name: "MobileLogout",
                                    alias: "37"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }),
                        customButton: P.Empty
                    },
                    _dependencies: [g(v.getLanguageShortCode()), g(v.getemail()), g(v.getname()), g(a.variables.profileModalVar)]
                })]
            }))
        }
    };
n(Z, "View");
var _e = Z,
    _n = _e;
export {
    _n as a
};