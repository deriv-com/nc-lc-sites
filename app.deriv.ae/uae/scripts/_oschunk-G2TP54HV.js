import {
    a as J
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as H
} from "./_oschunk-VFQBFBVA.js";
import {
    a as F
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import {
    a as B
} from "./_oschunk-UZGD3HJ2.js";
import {
    a as I
} from "./_oschunk-KQUJMKWN.js";
import "./_oschunk-N5BINZCQ.js";
import "./_oschunk-GONH5KKX.js";
import "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as $
} from "./_oschunk-TLJXDQWQ.js";
import "./_oschunk-4ZYYVQOE.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as oe,
    f as S,
    l as ie,
    u as x
} from "./_oschunk-VR5BNL2K.js";
import {
    a as le,
    g as k,
    m as ee,
    n as te,
    q as ne,
    r as re,
    s as V,
    t as R
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Z
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    C as w,
    Qb as A,
    Sb as P,
    ub as C
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as T,
    c as a,
    e as ue,
    m as O,
    n as E,
    w as N
} from "./_oschunk-M5BUVJ72.js";
var ce = {
        "5sOc+dYoaE6EsM+oqCcnKQ#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "WOPgKeR8jUyOKnfJiEha2w#Value.-526187941.1": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
        "CrBcg8UKaE2sdbqhuHh6Sg#Value.67066748.1": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
        "_Lhb4D5zG0GT7+uj87g2iQ#Value": "\u062A\u0641\u0627\u0635\u064A\u0644\u0643 \u0627\u0644\u0645\u0648\u062B\u0651\u064E\u0642\u0629",
        "_+wINaDjA0qy4QEL2plI7w#Value.1891809410.1": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A",
        "X6s3iGVwHESJrHoJTSsk_g#Title": "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A | Deriv",
        "X6s3iGVwHESJrHoJTSsk_g#TitleExpression.957528541.1": "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A | Deriv"
    },
    ae = {
        "ar-001": {
            translations: ce,
            isRTL: !0
        }
    };

function M(f, m, c) {
    c.Navigation.registerBackNavigationHandler(f.DesktopProcessLayoutBackBtnEvent)
}
a(M, "default");

function W(f, m, c, e) {
    var s, h, l, y, u, g, X;
    let r = !1,
        t = !1,
        i = (s = window.localStorage.getItem("auth")) != null ? s : null;
    if (!i) {
        f.is_email_verified = t, f.is_phone_verified = r, f.phone = "", f.email = "";
        return
    }
    let o = JSON.parse(i),
        v = (l = (h = o.user) == null ? void 0 : h.phone) != null ? l : "",
        d = (u = (y = o.user) == null ? void 0 : y.email) != null ? u : "";
    r = !!((g = o.user) != null && g.phone), t = !!((X = o.user) != null && X.email), f.phone = v, f.email = d, f.is_email_verified = t, f.is_phone_verified = r
}
a(W, "default");

function G(f, m, c, e) {
    function r(i, o) {
        i = i.replace(/\s+/g, "").trim(), i = i.replace(/^\+/, "");
        let v;
        try {
            v = JSON.parse(o)
        } catch (y) {
            return {
                alpha2: "",
                nationalNumber: i
            }
        }
        let d = "",
            s = "",
            h = 0;
        v.forEach(y => {
            y.country_calling_codes && y.country_calling_codes.forEach(u => {
                if (!u || typeof u != "string") return;
                let g = u.replace(/\s+/g, "").replace(/^\+/, "").trim();
                i.startsWith(g) && g.length > h && (d = y.alpha2, s = g, h = g.length)
            })
        });
        let l = s ? i.substring(s.length) : i;
        return l = l.replace(/^0+/, ""), {
            alpha2: d,
            nationalNumber: l
        }
    }
    a(r, "getCountryByPhoneNumber");
    let t = r(f.PhoneNumber, f.CountryList);
    f.SelectedCountry = t.alpha2, f.Number = t.nationalNumber
}
a(G, "default");

function U(f, m, c, e) {
    function r() {
        if (window.Intercom) {
            window.Intercom("show"), f.is_already_loaded = !0;
            return
        }
        f.is_already_loaded = !1
    }
    a(r, "showIntercom")
}
a(U, "default");
var n = T; {
    let m = class m extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, ae);
            var i = this.controller;
            this.clientActionProxies = {
                desktopProcessLayoutBackBtnEvent$Action: a(function() {
                    return i.executeActionInsideJSNode(i._desktopProcessLayoutBackBtnEvent$Action.bind(i), i.callContext(), function(o) {
                        return {}
                    }, function() {}, "DesktopProcessLayoutBackBtnEvent")
                }, "desktopProcessLayoutBackBtnEvent$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _layoutOnboardingcloseEvent$Action() {
            return this.hasOwnProperty("__layoutOnboardingcloseEvent$Action") || (this.__layoutOnboardingcloseEvent$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("LayoutOnboardingcloseEvent", function(o) {
                    o && (o.setAttribute("code.function", "LayoutOnboardingcloseEvent"), o.setAttribute("outsystems.function.key", "0a56a89e-49e6-452e-b540-bad86d53bc6b"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("LayoutOnboardingcloseEvent"), e = t.callContext(e), t._stopOnboardingOnContinue$Action(e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__layoutOnboardingcloseEvent$Action
        }
        set _layoutOnboardingcloseEvent$Action(e) {
            this.__layoutOnboardingcloseEvent$Action = e
        }
        get _buttonOnClick$Action() {
            return this.hasOwnProperty("__buttonOnClick$Action") || (this.__buttonOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("ButtonOnClick", function(o) {
                    o && (o.setAttribute("code.function", "ButtonOnClick"), o.setAttribute("outsystems.function.key", "0b5bda99-bbf9-4733-af16-6454543e2f7e"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("ButtonOnClick"), e = t.callContext(e), r.variables.is_loadingVar = !0, n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "address-details", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__buttonOnClick$Action
        }
        set _buttonOnClick$Action(e) {
            this.__buttonOnClick$Action = e
        }
        get _desktopProcessLayoutBackBtnEvent$Action() {
            return this.hasOwnProperty("__desktopProcessLayoutBackBtnEvent$Action") || (this.__desktopProcessLayoutBackBtnEvent$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("DesktopProcessLayoutBackBtnEvent", function(o) {
                    o && (o.setAttribute("code.function", "DesktopProcessLayoutBackBtnEvent"), o.setAttribute("outsystems.function.key", "2a856f53-392c-455c-a7bb-8bc0a360a697"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("DesktopProcessLayoutBackBtnEvent"), e = t.callContext(e), C.getenableCitizenship() ? n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "nationality", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.None), e, !0) : A.isDesktop$Action(e).isDesktopOut ? n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "personal-details", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.None), e, !0) : n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "place-of-birth", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__desktopProcessLayoutBackBtnEvent$Action
        }
        set _desktopProcessLayoutBackBtnEvent$Action(e) {
            this.__desktopProcessLayoutBackBtnEvent$Action = e
        }
        get _fetchCountryList$Action() {
            return this.hasOwnProperty("__fetchCountryList$Action") || (this.__fetchCountryList$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("FetchCountryList", function(o) {
                    return o && (o.setAttribute("code.function", "FetchCountryList"), o.setAttribute("outsystems.function.key", "5f3a424f-3ad0-408b-958e-d0e83b9693f9"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("FetchCountryList"), e = t.callContext(e);
                        var v = new n.DataTypes.VariableHolder,
                            d = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return r.flush(), P.getCountryListCache$Action(e).then(function(s) {
                                v.value = s
                            }).then(function() {
                                r.variables.country_listVar = v.value.countries_listOut, d.value = n.SystemActions.listFilter(r.variables.country_listVar, function(s) {
                                    return C.getresidence() !== n.BuiltinFunctions.nullTextIdentifier() ? s.alpha2Attr === C.getresidence() : s.alpha2Attr === "ae"
                                }, e), r.variables.currentSelectionCountryVar = d.value.filteredListOut.getCurrent(e.iterationContext)
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__fetchCountryList$Action
        }
        set _fetchCountryList$Action(e) {
            this.__fetchCountryList$Action = e
        }
        get _onCountrySelect$Action() {
            return this.hasOwnProperty("__onCountrySelect$Action") || (this.__onCountrySelect$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("OnCountrySelect", function(v) {
                    v && (v.setAttribute("code.function", "OnCountrySelect"), v.setAttribute("outsystems.function.key", "70c2fc72-bff3-4488-b5b5-0e244c962dd3"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnCountrySelect"), r = i.callContext(r);
                        var d = new n.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.OnboardingFlow.EmailPhone.OnCountrySelect$vars")));
                        d.value.selectedCountryInLocal = e;
                        var s = new n.DataTypes.VariableHolder;
                        s.value = n.SystemActions.listFilter(t.variables.country_listVar, function(h) {
                            return h.alpha2Attr === d.value.selectedCountryInLocal
                        }, r), t.variables.selectedPhoneNumberCountryVar = d.value.selectedCountryInLocal, t.variables.fieldErrorMessageVar = n.BuiltinFunctions.nullTextIdentifier(), t.variables.countryCodeVar = n.BuiltinFunctions.index(s.value.filteredListOut.getCurrent(r.iterationContext).country_calling_codesAttr.getCurrent(r.iterationContext), " ", 0, !1, !1) === -1 ? s.value.filteredListOut.getCurrent(r.iterationContext).country_calling_codesAttr.getCurrent(r.iterationContext) : n.BuiltinFunctions.substr(s.value.filteredListOut.getCurrent(r.iterationContext).country_calling_codesAttr.getCurrent(r.iterationContext), 0, n.BuiltinFunctions.index(s.value.filteredListOut.getCurrent(r.iterationContext).country_calling_codesAttr.getCurrent(r.iterationContext), " ", 0, !1, !1)), t.variables.currentSelectionCountryVar = s.value.filteredListOut.getCurrent(r.iterationContext)
                    } finally {
                        v && v.end()
                    }
                }, 1)
            }), this.__onCountrySelect$Action
        }
        set _onCountrySelect$Action(e) {
            this.__onCountrySelect$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "7527822f-ef61-4684-a7d3-59ea2c0aba18"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var v = new n.DataTypes.VariableHolder,
                            d = new n.DataTypes.VariableHolder,
                            s = new n.DataTypes.VariableHolder,
                            h = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType);
                        return n.Flow.executeAsyncFlow(function() {
                            return n.Logger.startActiveSpan("JavaScript1", function(l) {
                                l && (l.setAttribute("code.function", "JavaScript1"), l.setAttribute("outsystems.function.key", "4bd64373-167d-4016-adcd-0e5be520f9c0"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(M, "JavaScript1", "OnReady", null, function(y) {}, {
                                        DesktopProcessLayoutBackBtnEvent: t.clientActionProxies.desktopProcessLayoutBackBtnEvent$Action
                                    }, {})
                                } finally {
                                    l && l.end()
                                }
                            }, 1), r.variables.is_email_verifiedVar = !0, r.variables.is_loadingVar = !1, v.value = P.getAuth$Action(e), d.value = n.Logger.startActiveSpan("GetPhoneandEmailDetails", function(l) {
                                l && (l.setAttribute("code.function", "GetPhoneandEmailDetails"), l.setAttribute("outsystems.function.key", "7ce1ad8f-1174-43fb-98c3-1611e8d61a74"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(W, "GetPhoneandEmailDetails", "OnReady", {
                                        is_email_verified: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean),
                                        is_phone_verified: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean),
                                        phone: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.PhoneNumber),
                                        email: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                    }, function(y) {
                                        var u = new(t.constructor.getVariableGroupType("uae.OnboardingFlow.EmailPhone.OnReady$getPhoneandEmailDetailsJSResult"));
                                        return u.is_email_verifiedOut = n.DataConversion.JSNodeParamConverter.from(y.is_email_verified, n.DataTypes.DataTypes.Boolean), u.is_phone_verifiedOut = n.DataConversion.JSNodeParamConverter.from(y.is_phone_verified, n.DataTypes.DataTypes.Boolean), u.phoneOut = n.DataConversion.JSNodeParamConverter.from(y.phone, n.DataTypes.DataTypes.PhoneNumber), u.emailOut = n.DataConversion.JSNodeParamConverter.from(y.email, n.DataTypes.DataTypes.Text), u
                                    }, {}, {})
                                } finally {
                                    l && l.end()
                                }
                            }, 1), t._fetchCountryList$Action(e).then(function() {
                                r.variables.existing_emailVar = d.value.emailOut, r.variables.is_email_verifiedVar = d.value.is_email_verifiedOut, r.variables.is_phone_verifiedVar = d.value.is_phone_verifiedOut, r.variables.is_loadingVar = !1, r.variables.emailVar = d.value.emailOut, h.value.jSONOut = n.JSONUtils.serializeToJSON(r.variables.country_listVar, !1, !1), s.value = n.Logger.startActiveSpan("GetCountryFromNumber", function(l) {
                                    l && (l.setAttribute("code.function", "GetCountryFromNumber"), l.setAttribute("outsystems.function.key", "c07365bb-3a87-4b96-9a4d-0acc9d711b56"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(G, "GetCountryFromNumber", "OnReady", {
                                            CountryList: n.DataConversion.JSNodeParamConverter.to(h.value.jSONOut, n.DataTypes.DataTypes.Text),
                                            PhoneNumber: n.DataConversion.JSNodeParamConverter.to(d.value.phoneOut, n.DataTypes.DataTypes.Text),
                                            SelectedCountry: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text),
                                            Number: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                        }, function(y) {
                                            var u = new(t.constructor.getVariableGroupType("uae.OnboardingFlow.EmailPhone.OnReady$getCountryFromNumberJSResult"));
                                            return u.selectedCountryOut = n.DataConversion.JSNodeParamConverter.from(y.SelectedCountry, n.DataTypes.DataTypes.Text), u.numberOut = n.DataConversion.JSNodeParamConverter.from(y.Number, n.DataTypes.DataTypes.Text), u
                                        }, {}, {})
                                    } finally {
                                        l && l.end()
                                    }
                                }, 1), r.variables.selectedPhoneNumberCountryVar = s.value.selectedCountryOut, r.variables.phoneVar = s.value.numberOut
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("StopOnboardingOnContinue", function(o) {
                    o && (o.setAttribute("code.function", "StopOnboardingOnContinue"), o.setAttribute("outsystems.function.key", "c6e351d9-be1f-4c90-a5bb-ae60abd2300e"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("StopOnboardingOnContinue"), e = t.callContext(e), r.variables.shouldShowStopOnBoardingVar = !r.variables.shouldShowStopOnBoardingVar
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(e) {
            this.__stopOnboardingOnContinue$Action = e
        }
        get _onLiveChatClick$Action() {
            return this.hasOwnProperty("__onLiveChatClick$Action") || (this.__onLiveChatClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("OnLiveChatClick", function(o) {
                    return o && (o.setAttribute("code.function", "OnLiveChatClick"), o.setAttribute("outsystems.function.key", "dba3b4bd-3e6c-4230-b233-0a583e0a7aaa"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnLiveChatClick"), e = t.callContext(e);
                        var v = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return v.value = n.Logger.startActiveSpan("Intercom", function(d) {
                                d && (d.setAttribute("code.function", "Intercom"), d.setAttribute("outsystems.function.key", "958cf53c-a45b-4582-9b45-510e711e49f6"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(U, "Intercom", "OnLiveChatClick", {
                                        is_already_loaded: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean)
                                    }, function(s) {
                                        var h = new(t.constructor.getVariableGroupType("uae.OnboardingFlow.EmailPhone.OnLiveChatClick$intercomJSResult"));
                                        return h.is_already_loadedOut = n.DataConversion.JSNodeParamConverter.from(s.is_already_loaded, n.DataTypes.DataTypes.Boolean), h
                                    }, {}, {})
                                } finally {
                                    d && d.end()
                                }
                            }, 1), n.Flow.executeSequence(function() {
                                if (!v.value.is_already_loadedOut) return r.flush(), P.openIntercom$Action(e)
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onLiveChatClick$Action
        }
        set _onLiveChatClick$Action(e) {
            this.__onLiveChatClick$Action = e
        }
        layoutOnboardingcloseEvent$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("LayoutOnboardingcloseEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "LayoutOnboardingcloseEvent"), t.setAttribute("outsystems.function.key", "0a56a89e-49e6-452e-b540-bad86d53bc6b"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._layoutOnboardingcloseEvent$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        buttonOnClick$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("ButtonOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "ButtonOnClick"), t.setAttribute("outsystems.function.key", "0b5bda99-bbf9-4733-af16-6454543e2f7e"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._buttonOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        desktopProcessLayoutBackBtnEvent$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("DesktopProcessLayoutBackBtnEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "DesktopProcessLayoutBackBtnEvent"), t.setAttribute("outsystems.function.key", "2a856f53-392c-455c-a7bb-8bc0a360a697"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._desktopProcessLayoutBackBtnEvent$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        fetchCountryList$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("FetchCountryList__proxy", function(t) {
                return t && (t.setAttribute("code.function", "FetchCountryList"), t.setAttribute("outsystems.function.key", "5f3a424f-3ad0-408b-958e-d0e83b9693f9"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._fetchCountryList$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onCountrySelect$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnCountrySelect__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnCountrySelect"), i.setAttribute("outsystems.function.key", "70c2fc72-bff3-4488-b5b5-0e244c962dd3"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onCountrySelect$Action, r, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "7527822f-ef61-4684-a7d3-59ea2c0aba18"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        stopOnboardingOnContinue$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(t) {
                t && (t.setAttribute("code.function", "StopOnboardingOnContinue"), t.setAttribute("outsystems.function.key", "c6e351d9-be1f-4c90-a5bb-ae60abd2300e"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._stopOnboardingOnContinue$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onLiveChatClick$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnLiveChatClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnLiveChatClick"), t.setAttribute("outsystems.function.key", "dba3b4bd-3e6c-4230-b233-0a583e0a7aaa"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onLiveChatClick$Action, e)
                }, function() {
                    t && t.end()
                })
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
                    i = this.idService;
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return J.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return P.defaultTimeout
        }
    };
    a(m, "ControllerInner");
    let f = m;
    p = f, p.registerVariableGroupType("uae.OnboardingFlow.EmailPhone.OnCountrySelect$vars", [{
        name: "SelectedCountry",
        attrName: "selectedCountryInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.OnboardingFlow.EmailPhone.OnReady$getPhoneandEmailDetailsJSResult", [{
        name: "is_email_verified",
        attrName: "is_email_verifiedOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "is_phone_verified",
        attrName: "is_phone_verifiedOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "phone",
        attrName: "phoneOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.PhoneNumber,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "email",
        attrName: "emailOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.OnboardingFlow.EmailPhone.OnReady$getCountryFromNumberJSResult", [{
        name: "SelectedCountry",
        attrName: "selectedCountryOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Number",
        attrName: "numberOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.OnboardingFlow.EmailPhone.OnLiveChatClick$intercomJSResult", [{
        name: "is_already_loaded",
        attrName: "is_already_loadedOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }])
}
var p, z = new n.Controller.ControllerFactory(p, Z);
var _ = ue(le());
var b = T,
    q = class q extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("email", "emailVar", "email", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_email_verified", "is_email_verifiedVar", "is_email_verified", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_phone_verified", "is_phone_verifiedVar", "is_phone_verified", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("FieldErrorMessage", "fieldErrorMessageVar", "FieldErrorMessage", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("existing_email", "existing_emailVar", "existing_email", !0, !1, b.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1), this.attr("ShowLiveChatMessage", "showLiveChatMessageVar", "ShowLiveChatMessage", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldShowStopOnBoarding", "shouldShowStopOnBoardingVar", "ShouldShowStopOnBoarding", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("phone", "phoneVar", "phone", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SelectedPhoneNumberCountry", "selectedPhoneNumberCountryVar", "SelectedPhoneNumberCountry", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("country_list", "country_listVar", "country_list", !0, !1, b.DataTypes.DataTypes.RecordList, function() {
                return b.DataTypes.ImmutableBase.getData(new(b.GenericTypeCache.getGenericList(w)))
            }, !1, b.GenericTypeCache.getGenericList(w)), this.attr("CountryCode", "countryCodeVar", "CountryCode", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CurrentSelectionCountry", "currentSelectionCountryVar", "CurrentSelectionCountry", !0, !1, b.DataTypes.DataTypes.Record, function() {
                return b.DataTypes.ImmutableBase.getData(new w)
            }, !1, w)].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(q, "VariablesRecord");
var D = q;
D.init();
var Q = class Q extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form2: b.Model.ValidationWidgetRecord
        }
    }
};
a(Q, "WidgetsRecord");
var j = Q,
    Y = class Y extends b.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return j
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(m) {}
    };
a(Y, "Model");
var L = Y;
L._hasValidationWidgetsValue = void 0;
var K = new b.Model.ModelFactory(L);
var se = k.PlaceholderContent,
    tt = k.IteratorPlaceholderContent,
    fe = a(function() {
        var f = te(function(m) {
            var c = m.model,
                e = m.controller,
                r = m.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                o = V,
                v = R,
                d = {
                    props: m,
                    validateWidget: a(function(u) {
                        m.validateWidget(m, u)
                    }, "validateWidget")
                },
                s = c,
                h = re,
                l = ne,
                y = ee();
            return _.createElement("div", m.rootNodeProperties, _.createElement(B, {
                getOwnerSpan: a(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: c.variables.shouldShowStopOnBoardingVar
                },
                events: {
                    _handleError: a(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    onContinue$Action: a(function() {
                        var u = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(u))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: s,
                _dependencies: []
            }), _.createElement(S, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "1"
                },
                _widgetRecordProvider: s
            }, _.createElement(F, {
                getOwnerSpan: a(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ProgressBarPercentage: 33,
                    Title: O.resolve(E.TranslationsService).getMessage("_+wINaDjA0qy4QEL2plI7w#Value.1891809410.1", "Personal details"),
                    ShouldEmitPreviousEvent: !0,
                    shouldShowProgressBarInMobile: !0
                },
                events: {
                    _handleError: a(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    onClickPrevious$Action: a(function() {
                        var u = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                        e.desktopProcessLayoutBackBtnEvent$Action(e.callContext(u))
                    }, "onClickPrevious$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "2",
                    alias: "2"
                },
                _widgetRecordProvider: s,
                placeholders: {
                    content: new se(function() {
                        return [_.createElement(ie, {
                            _validationProps: {
                                validationService: t
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
                            _idProps: {
                                service: r,
                                name: "Form2"
                            },
                            _widgetRecordProvider: s
                        }, _.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "relative",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "4"
                            },
                            _widgetRecordProvider: s
                        }, _.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal; margin-bottom: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "PageHeading"
                            },
                            _widgetRecordProvider: s
                        }, _.createElement(x, {
                            extendedProperties: {
                                style: "font-weight: 900;"
                            },
                            text: [l(v("_Lhb4D5zG0GT7+uj87g2iQ#Value", "Your verified details"))],
                            _idProps: {
                                service: r,
                                uuid: "6"
                            },
                            _widgetRecordProvider: s
                        })), _.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 48px;"
                            },
                            style: "flex flex-col gap-y-6",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "FormContainer"
                            },
                            _widgetRecordProvider: s
                        }, _.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "w-full flex flex-col gap-l",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "8"
                            },
                            _widgetRecordProvider: s
                        }, _.createElement(H, {
                            getOwnerSpan: a(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                OldEmail: c.variables.emailVar,
                                LabelTitle: O.resolve(E.TranslationsService).getMessage("CrBcg8UKaE2sdbqhuHh6Sg#Value.67066748.1", "Email"),
                                IsVerified: c.variables.is_email_verifiedVar,
                                showLiveChatMessage: c.variables.showLiveChatMessageVar
                            },
                            events: {
                                _handleError: a(function(u) {
                                    e.handleError(u)
                                }, "_handleError"),
                                triggerLiveChat$Action: a(function() {
                                    return Promise.resolve().then(function() {
                                        var u = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                        return e.onLiveChatClick$Action(e.callContext(u))
                                    })
                                }, "triggerLiveChat$Action")
                            },
                            _validationProps: {
                                validationService: t,
                                validationParentId: r.getId("Form2")
                            },
                            _idProps: {
                                service: r,
                                uuid: "9",
                                alias: "3"
                            },
                            _widgetRecordProvider: s,
                            _dependencies: []
                        })), _.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "w-full flex flex-col gap-l",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "10"
                            },
                            _widgetRecordProvider: s
                        }, _.createElement(I, {
                            getOwnerSpan: a(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedCountry: c.getCachedValue(r.getId("hgoNhTWRV0q9+fCdmkFM0Q.SelectedCountry"), function() {
                                    return c.variables.selectedPhoneNumberCountryVar !== N.nullTextIdentifier() ? c.variables.selectedPhoneNumberCountryVar : C.getresidence() !== N.nullTextIdentifier() ? C.getresidence() : "ae"
                                }, function() {
                                    return c.variables.selectedPhoneNumberCountryVar
                                }, function() {
                                    return C.getresidence()
                                }),
                                ShowOnlyPhoneNumber: !0,
                                LabelTitle: O.resolve(E.TranslationsService).getMessage("WOPgKeR8jUyOKnfJiEha2w#Value.-526187941.1", "Phone number"),
                                IsVerified: c.variables.is_phone_verifiedVar,
                                showLiveChatMessage: c.variables.showLiveChatMessageVar,
                                CountryList: c.variables.country_listVar,
                                OldNumber: c.variables.phoneVar
                            },
                            events: {
                                _handleError: a(function(u) {
                                    e.handleError(u)
                                }, "_handleError"),
                                countrySelectEvent$Action: a(function(u) {
                                    var g = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                    e.onCountrySelect$Action(u, e.callContext(g))
                                }, "countrySelectEvent$Action"),
                                triggerLiveChat$Action: a(function() {
                                    return Promise.resolve().then(function() {
                                        var u = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                        return e.onLiveChatClick$Action(e.callContext(u))
                                    })
                                }, "triggerLiveChat$Action")
                            },
                            _validationProps: {
                                validationService: t,
                                validationParentId: r.getId("Form2")
                            },
                            _idProps: {
                                service: r,
                                uuid: "11",
                                alias: "4"
                            },
                            _widgetRecordProvider: s,
                            _dependencies: []
                        }))), _.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px; text-align: end;"
                            },
                            style: c.getCachedValue(r.getId("ButtonContainer.Style"), function() {
                                return A.isDesktop$Action(i).isDesktopOut ? "" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: s
                        }, _.createElement($, {
                            getOwnerSpan: a(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: c.getCachedValue(r.getId("c6pZTzgwmEKUEYxzdruTmQ.ExtendedClass"), function() {
                                    return A.isDesktop$Action(i).isDesktopOut ? "" : "full-width"
                                }),
                                IsLoading: !1
                            },
                            events: {
                                _handleError: a(function(u) {
                                    e.handleError(u)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: t,
                                validationParentId: r.getId("Form2")
                            },
                            _idProps: {
                                service: r,
                                uuid: "13",
                                alias: "5"
                            },
                            _widgetRecordProvider: s,
                            placeholders: {
                                button: new se(function() {
                                    return [_.createElement(oe, {
                                        enabled: !c.variables.is_loadingVar,
                                        extendedProperties: {
                                            style: "border-radius: 100px; min-width: 96px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent",
                                            marginLeft: "0"
                                        },
                                        isDefault: !0,
                                        onClick: a(function() {
                                            var u = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                            e.buttonOnClick$Action(e.callContext(u))
                                        }, "onClick"),
                                        style: c.getCachedValue(r.getId("Verify_btn5.Style"), function() {
                                            return A.isDesktop$Action(i).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button email-phone__button"
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "Verify_btn5"
                                        },
                                        _widgetRecordProvider: s
                                    }, _.createElement(S, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: s
                                    }), _.createElement(x, {
                                        extendedProperties: {
                                            style: "font-size: 16px; font-weight: bold;"
                                        },
                                        text: [l(v("5sOc+dYoaE6EsM+oqCcnKQ#Value", "Next"))],
                                        _idProps: {
                                            service: r,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: s
                                    }))]
                                })
                            },
                            _dependencies: [o(c.variables.is_loadingVar)]
                        }))))]
                    })
                },
                _dependencies: [o(c.variables.is_loadingVar), o(c.variables.phoneVar), o(c.variables.country_listVar), o(c.variables.is_phone_verifiedVar), o(C.getresidence()), o(c.variables.selectedPhoneNumberCountryVar), o(c.variables.showLiveChatMessageVar), o(c.variables.is_email_verifiedVar), o(c.variables.emailVar)]
            })))
        }, {
            topLevelComponent: !0,
            getAttributes: a(function() {
                return {
                    codeFunction: "EmailPhone",
                    functionKey: "8837ab5f-7065-441c-89ac-7a094d2b24fe",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.EmailPhone",
            modelFactory: K,
            controllerFactory: z,
            getTitle: a(function(m) {
                var c = m.model,
                    e = m.controller,
                    r = m.controller.idService,
                    t = e.validationService,
                    i = e.callContext(),
                    o = V,
                    v = R,
                    d = {
                        props: m,
                        validateWidget: a(function(s) {
                            m.validateWidget(m, s)
                        }, "validateWidget")
                    };
                return O.resolve(E.TranslationsService).getMessage("X6s3iGVwHESJrHoJTSsk_g#TitleExpression.957528541.1", "Email-Phone| Deriv")
            }, "getTitle")
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.EmailPhone.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [B, F, H, I, $]
        }, f
    }, "componentFactory"),
    ye = fe();
export {
    z as controllerModule, K as modelModule, ye as viewModule, J as webFlowControllerModule
};