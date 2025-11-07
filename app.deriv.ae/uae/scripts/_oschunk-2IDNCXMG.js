import {
    a as W
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as U
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import {
    a as B
} from "./_oschunk-UZGD3HJ2.js";
import {
    a as F
} from "./_oschunk-GONH5KKX.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as H
} from "./_oschunk-4ZYYVQOE.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as oe,
    f as v,
    h as x,
    i as ae,
    j as se,
    m as ce,
    n as le,
    o as ue,
    p as de,
    u as D
} from "./_oschunk-VR5BNL2K.js";
import {
    a as _e,
    g as V,
    m as te,
    n as re,
    q as ne,
    r as ie,
    s as $,
    t as N
} from "./_oschunk-4VHUVDBV.js";
import {
    a as ee
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    C,
    Qb as R,
    Sb as p,
    Va as Z,
    Wa as T,
    ub as f
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as w,
    c as s,
    e as ve,
    m as O,
    n as P,
    p as Y,
    v as K,
    w as X
} from "./_oschunk-M5BUVJ72.js";
var ge = {
        "6ZeiqPrNNUmEv5SKP264+w#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "6bPVo8AwSUioRsCST1OI1g#ValueExpression.974258437.1": "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u064A\u0627\u0631\u0627\u062A \u0644\u0644\u0639\u0631\u0636.",
        "wnOT_FodeEmg27Vx4r9jdg#ValueExpression.-1822469688.1": "\u0628\u062D\u062B",
        "_EYtNlNpdEyDJ1Pnb88R1w#Value": "\u0645\u0631\u0628\u0639 \u0627\u0644\u0628\u062D\u062B",
        "ToUpYTssikevtCitbwjcXQ#Value": "\u0628\u0644\u062F \u0627\u0644\u0645\u064A\u0644\u0627\u062F",
        "PqiOapnpskqIxl0yHkVo8Q#Value.1891809410.1": "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0634\u062E\u0635\u064A\u0629",
        "+DYo03gwv0Wc6mno6LJh2Q#Title": "\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u064A\u0644\u0627\u062F | Deriv",
        "+DYo03gwv0Wc6mno6LJh2Q#TitleExpression.-1462032023.1": "\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u064A\u0644\u0627\u062F | Deriv"
    },
    be = {
        "PqiOapnpskqIxl0yHkVo8Q#Value.1891809410.1": "Kontow\xE4hrung"
    },
    me = {
        "PqiOapnpskqIxl0yHkVo8Q#Value.1891809410.1": "Moneda de cuenta"
    },
    he = {
        "PqiOapnpskqIxl0yHkVo8Q#Value.1891809410.1": "Devise du compte"
    },
    Ae = {
        "PqiOapnpskqIxl0yHkVo8Q#Value.1891809410.1": "Valuta del conto"
    },
    Ce = {
        "PqiOapnpskqIxl0yHkVo8Q#Value.1891809410.1": "Waluta konta"
    },
    pe = {
        "PqiOapnpskqIxl0yHkVo8Q#Value.1891809410.1": "Moeda da conta"
    },
    Se = {
        "PqiOapnpskqIxl0yHkVo8Q#Value.1891809410.1": "\u0412\u0430\u043B\u044E\u0442\u0430 \u0441\u0447\u0435\u0442\u0430"
    },
    fe = {
        "ar-001": {
            translations: ge,
            isRTL: !0
        },
        "de-DE": {
            translations: be,
            isRTL: !1
        },
        "es-ES": {
            translations: me,
            isRTL: !1
        },
        "fr-FR": {
            translations: he,
            isRTL: !1
        },
        "it-IT": {
            translations: Ae,
            isRTL: !1
        },
        "pl-PL": {
            translations: Ce,
            isRTL: !1
        },
        "pt-PT": {
            translations: pe,
            isRTL: !1
        },
        "ru-RU": {
            translations: Se,
            isRTL: !1
        }
    };

function M(h, y, c) {
    h.UpdateClientProfile()
}
s(M, "default");
var i = w; {
    let y = class y extends i.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, fe);
            var o = this.controller;
            this.clientActionProxies = {
                updateClientProfile$Action: s(function() {
                    return o.executeActionInsideJSNode(o._updateClientProfile$Action.bind(o), o.callContext(), function(r) {
                        return {}
                    }, function() {}, "UpdateClientProfile")
                }, "updateClientProfile$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get putUpdateClientProfile$ServerAction() {
            return this.hasOwnProperty("_putUpdateClientProfile$ServerAction") || (this._putUpdateClientProfile$ServerAction = function(e, n, t) {
                var o = this.controller;
                return i.Logger.startActiveSpan("PutUpdateClientProfile", function(r) {
                    return r && (r.setAttribute("code.function", "PutUpdateClientProfile"), r.setAttribute("outsystems.function.key", "fb60c2d5-bb40-4a04-a22a-fbadb8fbd524"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), i.Flow.tryFinally(function() {
                        var d = {
                            authorization: i.DataConversion.ServerDataConverter.to(e, i.DataTypes.DataTypes.Text),
                            Request: i.DataConversion.ServerDataConverter.to(n, i.DataTypes.DataTypes.Record)
                        };
                        return o.callServerAction("PutUpdateClientProfile", "screenservices/uae/OnboardingFlow/PlaceofBirth/ActionPutUpdateClientProfile", "EuPrrpYMvG7cq2cwRzoBOA", d, o.callContext(t), void 0, void 0, !0).then(function(b) {
                            var a = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.PlaceofBirth$ActionPutUpdateClientProfile"));
                            return a.responseOut = i.DataConversion.ServerDataConverter.from(b.Response, T), a
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._putUpdateClientProfile$ServerAction
        }
        set putUpdateClientProfile$ServerAction(e) {
            this._putUpdateClientProfile$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _nextOnClick$Action() {
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("NextOnClick", function(r) {
                    r && (r.setAttribute("code.function", "NextOnClick"), r.setAttribute("outsystems.function.key", "3ef73db3-ad5e-4be2-b172-9fa6ab4b67bb"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("NextOnClick"), e = t.callContext(e);
                        var d = new i.DataTypes.VariableHolder;
                        return p.getFeatureFlag$Action("PhoneNumber", e).shouldEnableOut ? (d.value = p.getUserMetaData$Action(e), d.value.userMetadataOut.emailAttr !== i.BuiltinFunctions.nullTextIdentifier() && d.value.userMetadataOut.phoneAttr !== i.BuiltinFunctions.nullTextIdentifier() ? i.Navigation.navigateTo(i.Navigation.generateScreenURL("uae", "user-email-phone", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0) : f.getProvider() === "email" ? i.Navigation.navigateTo(i.Navigation.generateScreenURL("uae", "user-phone-number", {
                            from: i.DataConversion.ServerDataConverter.to("onboarding", i.DataTypes.DataTypes.Text),
                            type: i.DataConversion.ServerDataConverter.to("add", i.DataTypes.DataTypes.Text)
                        }), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0) : i.Navigation.navigateTo(i.Navigation.generateScreenURL("uae", "user-email-section", {
                            type: i.DataConversion.ServerDataConverter.to("add", i.DataTypes.DataTypes.Text),
                            from: i.DataConversion.ServerDataConverter.to("onboarding", i.DataTypes.DataTypes.Text)
                        }), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0)) : i.Navigation.navigateTo(i.Navigation.generateScreenURL("uae", "address-details", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(e) {
            this.__nextOnClick$Action = e
        }
        get _fetchCountryList$Action() {
            return this.hasOwnProperty("__fetchCountryList$Action") || (this.__fetchCountryList$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("FetchCountryList", function(r) {
                    return r && (r.setAttribute("code.function", "FetchCountryList"), r.setAttribute("outsystems.function.key", "571451a8-704b-49f9-b31f-1cb169cdcd52"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("FetchCountryList"), e = t.callContext(e);
                        var d = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return n.variables.is_loadingVar = !0, n.flush(), p.getCountryListCache$Action(e).then(function(b) {
                                d.value = b
                            }).then(function() {
                                n.variables.is_loadingVar = !1, n.variables.country_listVar = d.value.countries_listOut, n.variables.filtered_country_listVar = n.variables.country_listVar
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__fetchCountryList$Action
        }
        set _fetchCountryList$Action(e) {
            this.__fetchCountryList$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "65a1bbff-62fe-47d6-9193-b9b81dab2678"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnReady"), e = t.callContext(e), i.Flow.executeAsyncFlow(function() {
                            return n.variables.is_loadingVar = !1, n.variables.country_search_inputVar = "", t._fetchCountryList$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onSelectPlaceOfBirth$Action() {
            return this.hasOwnProperty("__onSelectPlaceOfBirth$Action") || (this.__onSelectPlaceOfBirth$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    r = this.idService;
                return i.Logger.startActiveSpan("OnSelectPlaceOfBirth", function(d) {
                    d && (d.setAttribute("code.function", "OnSelectPlaceOfBirth"), d.setAttribute("outsystems.function.key", "8fdccfec-89a7-42ad-88a6-355747641ea5"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnSelectPlaceOfBirth"), n = o.callContext(n);
                        var b = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.OnboardingFlow.PlaceofBirth.OnSelectPlaceOfBirth$vars")));
                        b.value.selected_countryInLocal = e.clone();
                        var a = new i.DataTypes.VariableHolder;
                        a.value = p.getAuth$Action(n), f.setplace_of_birth(b.value.selected_countryInLocal.alpha2Attr), i.Logger.startActiveSpan("JavaScript1", function(m) {
                            m && (m.setAttribute("code.function", "JavaScript1"), m.setAttribute("outsystems.function.key", "8dc0f7f4-843b-4df3-962f-fdf4f97c9f2f"), m.setAttribute("outsystems.function.owner.name", "uae"), m.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(M, "JavaScript1", "OnSelectPlaceOfBirth", null, function(E) {}, {
                                    UpdateClientProfile: o.clientActionProxies.updateClientProfile$Action
                                }, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1)
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__onSelectPlaceOfBirth$Action
        }
        set _onSelectPlaceOfBirth$Action(e) {
            this.__onSelectPlaceOfBirth$Action = e
        }
        get _realAccountCreationLayoutOnClickPrevious$Action() {
            return this.hasOwnProperty("__realAccountCreationLayoutOnClickPrevious$Action") || (this.__realAccountCreationLayoutOnClickPrevious$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("RealAccountCreationLayoutOnClickPrevious", function(r) {
                    r && (r.setAttribute("code.function", "RealAccountCreationLayoutOnClickPrevious"), r.setAttribute("outsystems.function.key", "98368dd4-4da1-467d-900c-72ff4a1514a3"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("RealAccountCreationLayoutOnClickPrevious"), e = t.callContext(e), f.gethideDOB() ? i.Navigation.navigateTo(i.Navigation.generateScreenURL("uae", "user-name", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0) : i.Navigation.navigateTo(i.Navigation.generateScreenURL("uae", "date-of-birth", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__realAccountCreationLayoutOnClickPrevious$Action
        }
        set _realAccountCreationLayoutOnClickPrevious$Action(e) {
            this.__realAccountCreationLayoutOnClickPrevious$Action = e
        }
        get _onClickClearSearch$Action() {
            return this.hasOwnProperty("__onClickClearSearch$Action") || (this.__onClickClearSearch$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnClickClearSearch", function(r) {
                    return r && (r.setAttribute("code.function", "OnClickClearSearch"), r.setAttribute("outsystems.function.key", "9fc1b6d8-41cc-4e23-9007-805c0b55a568"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickClearSearch"), e = t.callContext(e), i.Flow.executeAsyncFlow(function() {
                            return n.variables.country_search_inputVar = "", t._fetchCountryList$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onClickClearSearch$Action
        }
        set _onClickClearSearch$Action(e) {
            this.__onClickClearSearch$Action = e
        }
        get _updateClientProfile$Action() {
            return this.hasOwnProperty("__updateClientProfile$Action") || (this.__updateClientProfile$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("UpdateClientProfile", function(r) {
                    return r && (r.setAttribute("code.function", "UpdateClientProfile"), r.setAttribute("outsystems.function.key", "ccc67ef5-8ef2-4403-a5e1-5c4c8bf44b6a"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("UpdateClientProfile"), e = t.callContext(e);
                        var d = new i.DataTypes.VariableHolder,
                            b = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return b.value = p.getAuth$Action(e), n.flush(), t.putUpdateClientProfile$ServerAction(b.value.tokenOut, (function() {
                                var a = new Z;
                                return a.first_nameAttr = f.getfirst_name(), a.last_nameAttr = f.getlast_name(), a.date_of_birthAttr = i.BuiltinFunctions.textToDate(f.getdate_of_birth()), a.birth_countryAttr = f.getplace_of_birth(), a.residence_countryAttr = f.getresidence(), a
                            })(), e).then(function(a) {
                                d.value = a
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__updateClientProfile$Action
        }
        set _updateClientProfile$Action(e) {
            this.__updateClientProfile$Action = e
        }
        get _onSearch$Action() {
            return this.hasOwnProperty("__onSearch$Action") || (this.__onSearch$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnSearch", function(r) {
                    r && (r.setAttribute("code.function", "OnSearch"), r.setAttribute("outsystems.function.key", "e2d16744-98bf-4a71-92a6-70e4e89b5293"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnSearch"), e = t.callContext(e);
                        var d = new i.DataTypes.VariableHolder;
                        d.value = i.SystemActions.listFilter(n.variables.country_listVar, function(b) {
                            return i.BuiltinFunctions.length(n.variables.country_search_inputVar) > 1 ? i.BuiltinFunctions.index(i.BuiltinFunctions.toLower(f.getlanguage() === "en-US" ? b.nameAttr : b.nameArAttr), i.BuiltinFunctions.toLower(n.variables.country_search_inputVar), 0, !1, !1) > -1 : !0
                        }, e), n.variables.filtered_country_listVar = d.value.filteredListOut
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onSearch$Action
        }
        set _onSearch$Action(e) {
            this.__onSearch$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "f13c8511-8863-4c50-bb90-d05ca5d42057"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), f.setRealSignupCurrentStep(2)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _layoutOnboardingcloseEvent$Action() {
            return this.hasOwnProperty("__layoutOnboardingcloseEvent$Action") || (this.__layoutOnboardingcloseEvent$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("LayoutOnboardingcloseEvent", function(r) {
                    r && (r.setAttribute("code.function", "LayoutOnboardingcloseEvent"), r.setAttribute("outsystems.function.key", "f6a4dc23-358d-4832-bd0b-b5a57c47dfce"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("LayoutOnboardingcloseEvent"), e = t.callContext(e), n.variables.shouldShowCloseOnboardingVar = !n.variables.shouldShowCloseOnboardingVar
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__layoutOnboardingcloseEvent$Action
        }
        set _layoutOnboardingcloseEvent$Action(e) {
            this.__layoutOnboardingcloseEvent$Action = e
        }
        nextOnClick$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("NextOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "NextOnClick"), t.setAttribute("outsystems.function.key", "3ef73db3-ad5e-4be2-b172-9fa6ab4b67bb"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._nextOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        fetchCountryList$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("FetchCountryList__proxy", function(t) {
                return t && (t.setAttribute("code.function", "FetchCountryList"), t.setAttribute("outsystems.function.key", "571451a8-704b-49f9-b31f-1cb169cdcd52"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._fetchCountryList$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "65a1bbff-62fe-47d6-9193-b9b81dab2678"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onSelectPlaceOfBirth$Action(e, n) {
            var t = this.controller;
            return i.Logger.startActiveSpan("OnSelectPlaceOfBirth__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnSelectPlaceOfBirth"), o.setAttribute("outsystems.function.key", "8fdccfec-89a7-42ad-88a6-355747641ea5"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectPlaceOfBirth$Action, n, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        realAccountCreationLayoutOnClickPrevious$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("RealAccountCreationLayoutOnClickPrevious__proxy", function(t) {
                t && (t.setAttribute("code.function", "RealAccountCreationLayoutOnClickPrevious"), t.setAttribute("outsystems.function.key", "98368dd4-4da1-467d-900c-72ff4a1514a3"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._realAccountCreationLayoutOnClickPrevious$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickClearSearch$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnClickClearSearch__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickClearSearch"), t.setAttribute("outsystems.function.key", "9fc1b6d8-41cc-4e23-9007-805c0b55a568"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClickClearSearch$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        updateClientProfile$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("UpdateClientProfile__proxy", function(t) {
                return t && (t.setAttribute("code.function", "UpdateClientProfile"), t.setAttribute("outsystems.function.key", "ccc67ef5-8ef2-4403-a5e1-5c4c8bf44b6a"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._updateClientProfile$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onSearch$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnSearch__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnSearch"), t.setAttribute("outsystems.function.key", "e2d16744-98bf-4a71-92a6-70e4e89b5293"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onSearch$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "f13c8511-8863-4c50-bb90-d05ca5d42057"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        layoutOnboardingcloseEvent$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("LayoutOnboardingcloseEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "LayoutOnboardingcloseEvent"), t.setAttribute("outsystems.function.key", "f6a4dc23-358d-4832-bd0b-b5a57c47dfce"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._layoutOnboardingcloseEvent$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onReady$Action(e)
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
                return W.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return p.defaultTimeout
        }
    };
    s(y, "ControllerInner");
    let h = y;
    I = h, I.registerVariableGroupType("uae.OnboardingFlow.PlaceofBirth$ActionPutUpdateClientProfile", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new T
        }, "defaultValue"),
        complexType: T
    }]), I.registerVariableGroupType("uae.OnboardingFlow.PlaceofBirth.OnSelectPlaceOfBirth$vars", [{
        name: "selected_country",
        attrName: "selected_countryInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new C
        }, "defaultValue"),
        complexType: C
    }])
}
var I, z = new i.Controller.ControllerFactory(I, ee);
var l = ve(_e());
var _ = w,
    Q = class Q extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("country_list", "country_listVar", "country_list", !0, !1, _.DataTypes.DataTypes.RecordList, function() {
                return _.DataTypes.ImmutableBase.getData(new(_.GenericTypeCache.getGenericList(C)))
            }, !1, _.GenericTypeCache.getGenericList(C)), this.attr("filtered_country_list", "filtered_country_listVar", "filtered_country_list", !0, !1, _.DataTypes.DataTypes.RecordList, function() {
                return _.DataTypes.ImmutableBase.getData(new(_.GenericTypeCache.getGenericList(C)))
            }, !1, _.GenericTypeCache.getGenericList(C)), this.attr("country_search_input", "country_search_inputVar", "country_search_input", !0, !1, _.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ShouldShowCloseOnboarding", "shouldShowCloseOnboardingVar", "ShouldShowCloseOnboarding", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(Q, "VariablesRecord");
var L = Q;
L.init();
var J = class J extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedItem2: _.Model.ValidationWidgetRecord
        }
    }
};
s(J, "WidgetsRecord");
var q = J,
    j = class j extends _.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return L
        }
        static getWidgetsRecordConstructor() {
            return q
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(y) {}
    };
s(j, "Model");
var k = j;
k._hasValidationWidgetsValue = void 0;
var G = new _.Model.ModelFactory(k);
var S = V.PlaceholderContent,
    Pe = V.IteratorPlaceholderContent,
    we = s(function() {
        var h = re(function(y) {
            var c = y.model,
                e = y.controller,
                n = y.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                r = $,
                d = N,
                b = {
                    props: y,
                    validateWidget: s(function(u) {
                        y.validateWidget(y, u)
                    }, "validateWidget")
                },
                a = c,
                m = ie,
                E = ne,
                A = te();
            return l.createElement("div", y.rootNodeProperties, l.createElement(U, {
                getOwnerSpan: s(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ProgressBarPercentage: 33,
                    shouldShowProgressBarInMobile: !0,
                    Title: O.resolve(P.TranslationsService).getMessage("PqiOapnpskqIxl0yHkVo8Q#Value.1891809410.1", "Personal details"),
                    ShouldEmitPreviousEvent: !0
                },
                events: {
                    _handleError: s(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    onClickPrevious$Action: s(function() {
                        var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.realAccountCreationLayoutOnClickPrevious$Action(e.callContext(u))
                    }, "onClickPrevious$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    content: new S(function() {
                        return [l.createElement(v, {
                            align: 0,
                            animate: !1,
                            style: "relative",
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "1"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal; margin-bottom: 16px; margin-top: 24px; padding: 0px;"
                            },
                            visible: c.getCachedValue(n.getId("PageHeading2.Visible"), function() {
                                return !R.isDesktop$Action(o).isDesktopOut
                            }),
                            _idProps: {
                                service: n,
                                name: "PageHeading2"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(D, {
                            extendedProperties: {
                                style: "font-weight: 900;"
                            },
                            text: [E(d("ToUpYTssikevtCitbwjcXQ#Value", "Your country of birth"))],
                            _idProps: {
                                service: n,
                                uuid: "3"
                            },
                            _widgetRecordProvider: a
                        })), l.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding-bottom: 80px;"
                            },
                            style: "currency-container",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "ListContainer"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(F, {
                            getOwnerSpan: s(function() {
                                return A.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return A.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: s(function(u) {
                                    e.handleError(u)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: t
                            },
                            _idProps: {
                                service: n,
                                uuid: "5",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            placeholders: {
                                input: new S(function() {
                                    return [l.createElement(de, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "wcag-hide-text",
                                        _idProps: {
                                            service: n,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: a
                                    }, E(d("_EYtNlNpdEyDJ1Pnb88R1w#Value", "Search input"))), l.createElement(H, {
                                        getOwnerSpan: s(function() {
                                            return A.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: s(function() {
                                            return A.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            AlignIconRight: !0
                                        },
                                        events: {
                                            _handleError: s(function(u) {
                                                e.handleError(u)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: t
                                        },
                                        _idProps: {
                                            service: n,
                                            uuid: "7",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: a,
                                        placeholders: {
                                            icon: new S(function() {
                                                return [l.createElement(ce, {
                                                    extendedEvents: {
                                                        onClick: s(function() {
                                                            return Promise.resolve().then(function() {
                                                                var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                                                return e.onClickClearSearch$Action(e.callContext(u))
                                                            })
                                                        }, "onClick")
                                                    },
                                                    icon: "times",
                                                    iconSize: 0,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: n,
                                                        uuid: "8"
                                                    },
                                                    _widgetRecordProvider: a
                                                })]
                                            }),
                                            input: new S(function() {
                                                return [l.createElement(ue, {
                                                    _validationProps: {
                                                        validationService: t
                                                    },
                                                    enabled: !0,
                                                    extendedProperties: {
                                                        style: "font-size: 14px; margin-bottom: 16px; margin-top: 16px; padding-inline-end: var(--space-xl); padding-inline-start: var(--space-xl);"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: 8,
                                                    mandatory: !1,
                                                    maxLength: 0,
                                                    onChange: s(function() {
                                                        var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                                        e.onSearch$Action(e.callContext(u))
                                                    }, "onChange"),
                                                    prompt: O.resolve(P.TranslationsService).getMessage("wnOT_FodeEmg27Vx4r9jdg#ValueExpression.-1822469688.1", "Search"),
                                                    style: "form-control",
                                                    variable: c.createVariable(K.DataTypes.Text, c.variables.country_search_inputVar, function(u) {
                                                        c.variables.country_search_inputVar = u
                                                    }),
                                                    _idProps: {
                                                        service: n,
                                                        name: "Input_SearchedItem2"
                                                    },
                                                    _widgetRecordProvider: a
                                                })]
                                            })
                                        },
                                        _dependencies: [r(c.variables.country_search_inputVar)]
                                    })]
                                })
                            },
                            _dependencies: [r(c.variables.country_search_inputVar)]
                        }), l.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 8px; margin-top: 16px;"
                            },
                            gridProperties: {
                                marginLeft: "8px"
                            },
                            style: "category-container",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "Container"
                            },
                            _widgetRecordProvider: a
                        }, m(c.variables.is_loadingVar, !1, this, function() {
                            return [l.createElement(v, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; flex-direction: column; gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "animate-pulse w-full currency list-container",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "LoaderContainer"
                                },
                                _widgetRecordProvider: a
                            }, l.createElement(v, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "ListItemPlaceholder2"
                                },
                                _widgetRecordProvider: a
                            }), l.createElement(v, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "ListItemPlaceholder3"
                                },
                                _widgetRecordProvider: a
                            }), l.createElement(v, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "ListItemPlaceholder4"
                                },
                                _widgetRecordProvider: a
                            }), l.createElement(v, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "ListItemPlaceholder5"
                                },
                                _widgetRecordProvider: a
                            }))]
                        }, function() {
                            return [l.createElement(ae, {
                                animateItems: !1,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; row-gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: c.variables.filtered_country_listVar,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: n,
                                    name: "Container2"
                                },
                                _widgetRecordProvider: a,
                                placeholders: {
                                    content: new Pe(function(u, g) {
                                        return [l.createElement(se, {
                                            extendedProperties: {
                                                className: c.getCachedValue(u.getId("ListItem1.class"), function() {
                                                    return c.variables.filtered_country_listVar.getCurrent(g.iterationContext).alpha2Attr === f.getplace_of_birth() ? "item item-selected" : "item"
                                                }, function() {
                                                    return c.variables.filtered_country_listVar.getCurrent(g.iterationContext).alpha2Attr
                                                }, function() {
                                                    return f.getplace_of_birth()
                                                })
                                            },
                                            onClick: s(function() {
                                                var ye = typeof g != "undefined" && g !== null ? g.clone() : e.callContext().clone();
                                                e.onSelectPlaceOfBirth$Action(c.variables.filtered_country_listVar.getCurrent(g.iterationContext), e.callContext(ye))
                                            }, "onClick"),
                                            style: '"list-item"',
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: u,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: a,
                                            placeholders: {
                                                leftActions: S.Empty,
                                                content: new S(function() {
                                                    return [l.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "align-items: center; align-self: stretch; display: flex; gap: 16px;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "100%"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: u,
                                                            uuid: "18"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, l.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        gridProperties: {
                                                            classes: "OSInline"
                                                        },
                                                        style: "flex align-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: u,
                                                            uuid: "19"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, l.createElement(x, {
                                                        extendedProperties: {
                                                            style: "font-size: 24px;"
                                                        },
                                                        value: c.variables.filtered_country_listVar.getCurrent(g.iterationContext).emojiAttr,
                                                        _idProps: {
                                                            service: u,
                                                            uuid: "20"
                                                        },
                                                        _widgetRecordProvider: a
                                                    })), l.createElement(x, {
                                                        gridProperties: {
                                                            marginLeft: "0"
                                                        },
                                                        value: c.getCachedValue(u.getId("SAg4Lw1Q+kOC4PgbnDaW_Q.Value"), function() {
                                                            return f.getlanguage() === "en-US" ? c.variables.filtered_country_listVar.getCurrent(g.iterationContext).nameAttr : c.variables.filtered_country_listVar.getCurrent(g.iterationContext).nameArAttr
                                                        }, function() {
                                                            return f.getlanguage()
                                                        }, function() {
                                                            return c.variables.filtered_country_listVar.getCurrent(g.iterationContext).nameAttr
                                                        }, function() {
                                                            return c.variables.filtered_country_listVar.getCurrent(g.iterationContext).nameArAttr
                                                        }),
                                                        _idProps: {
                                                            service: u,
                                                            uuid: "21"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }), l.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "align-items: center; display: flex; justify-content: center; margin-inline-start: auto;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "32px"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: u,
                                                            uuid: "22"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, m(c.variables.filtered_country_listVar.getCurrent(g.iterationContext).alpha2Attr === f.getplace_of_birth(), !1, this, function() {
                                                        return [l.createElement(le, {
                                                            image: Y.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: u,
                                                                uuid: "23"
                                                            },
                                                            _widgetRecordProvider: a
                                                        })]
                                                    }, function() {
                                                        return []
                                                    })))]
                                                }),
                                                rightActions: S.Empty
                                            },
                                            _dependencies: [r(f.getplace_of_birth()), r(f.getlanguage()), r(c.variables.filtered_country_listVar.getCurrent(g.iterationContext).alpha2Attr), r(c.variables.filtered_country_listVar.getCurrent(g.iterationContext).nameArAttr), r(c.variables.filtered_country_listVar.getCurrent(g.iterationContext).nameAttr), r(c.variables.filtered_country_listVar.getCurrent(g.iterationContext).emojiAttr)]
                                        })]
                                    }, o, n, "1")
                                },
                                _dependencies: [r(f.getlanguage()), r(f.getplace_of_birth())]
                            }), l.createElement(v, {
                                align: 0,
                                animate: !0,
                                visible: c.variables.filtered_country_listVar.isEmpty,
                                _idProps: {
                                    service: n,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: a
                            }, l.createElement(v, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; display: flex; gap: 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: a
                            }, l.createElement(v, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "flex align-center",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: a
                            }, l.createElement(x, {
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                value: O.resolve(P.TranslationsService).getMessage("6bPVo8AwSUioRsCST1OI1g#ValueExpression.974258437.1", "There are no options to show."),
                                _idProps: {
                                    service: n,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: a
                            }))))]
                        }))), l.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background: white; margin-top: 24px; text-align: right;"
                            },
                            style: c.getCachedValue(n.getId("ButtonContainer.Style"), function() {
                                return R.isDesktop$Action(o).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(oe, {
                            enabled: c.getCachedValue(n.getId("NextButton3.Enabled"), function() {
                                return f.getplace_of_birth() !== X.nullTextIdentifier()
                            }, function() {
                                return f.getplace_of_birth()
                            }),
                            extendedProperties: {
                                style: "border-radius: 24px;"
                            },
                            gridProperties: {
                                width: "96px"
                            },
                            isDefault: !1,
                            onClick: s(function() {
                                var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                e.nextOnClick$Action(e.callContext(u))
                            }, "onClick"),
                            style: c.getCachedValue(n.getId("NextButton3.Style"), function() {
                                return R.isDesktop$Action(o).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "NextButton3"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(D, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [E(d("6ZeiqPrNNUmEv5SKP264+w#Value", "Next"))],
                            _idProps: {
                                service: n,
                                uuid: "30"
                            },
                            _widgetRecordProvider: a
                        }))))]
                    })
                },
                _dependencies: [r(f.getlanguage()), r(f.getplace_of_birth()), r(c.variables.filtered_country_listVar), r(c.variables.is_loadingVar), r(c.variables.country_search_inputVar)]
            }), l.createElement(B, {
                getOwnerSpan: s(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: c.variables.shouldShowCloseOnboardingVar
                },
                events: {
                    _handleError: s(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    onContinue$Action: s(function() {
                        var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.layoutOnboardingcloseEvent$Action(e.callContext(u))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "31",
                    alias: "4"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: s(function() {
                return {
                    codeFunction: "PlaceofBirth",
                    functionKey: "d32836f8-3078-45bf-9cea-69e8e8b261d9",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.PlaceofBirth",
            modelFactory: G,
            controllerFactory: z,
            getTitle: s(function(y) {
                var c = y.model,
                    e = y.controller,
                    n = y.controller.idService,
                    t = e.validationService,
                    o = e.callContext(),
                    r = $,
                    d = N,
                    b = {
                        props: y,
                        validateWidget: s(function(a) {
                            y.validateWidget(y, a)
                        }, "validateWidget")
                    };
                return O.resolve(P.TranslationsService).getMessage("+DYo03gwv0Wc6mno6LJh2Q#TitleExpression.-1462032023.1", "Place of birth | Deriv")
            }, "getTitle")
        });
        return h.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.PlaceofBirth.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, h.getJsDependencies = function() {
            return []
        }, h.getBlocks = function() {
            return [U, F, H, B]
        }, h
    }, "componentFactory"),
    Ee = we();
export {
    z as controllerModule, G as modelModule, Ee as viewModule, W as webFlowControllerModule
};