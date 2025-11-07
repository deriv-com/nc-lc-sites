import {
    a as J
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as j
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import {
    a as W
} from "./_oschunk-UZGD3HJ2.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as L
} from "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as ue,
    f as w,
    p as G,
    u as B
} from "./_oschunk-VR5BNL2K.js";
import {
    a as he,
    g as H,
    m as oe,
    n as ae,
    q as se,
    r as ce,
    s as U,
    t as M
} from "./_oschunk-4VHUVDBV.js";
import {
    a as ie
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    C as D,
    Fb as F,
    Lb as g,
    Pb as re,
    Qb as I,
    Sb as O,
    Va as ne,
    Wa as E,
    a as ee,
    l as te,
    ub as b
} from "./_oschunk-Z7QRTJDJ.js";
import {
    K as V,
    W as N,
    c,
    e as ve,
    m as _,
    n as C,
    w as k,
    x as z
} from "./_oschunk-M5BUVJ72.js";
var be = {
        "HO3HwEOA9kqPVPTeDnl5hQ#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "b5Rft0cKDUOm1N2hGOWj2w#Value.974258437.1": "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u064A\u0627\u0631\u0627\u062A \u0644\u0644\u0639\u0631\u0636.",
        "YYlN3NJawUKsmYnJXuySMA#Value.-512840794.1": "\u0628\u062D\u062B...",
        "iG16_UZZd0GZCerq1eLjgQ#Value.974258437.1": "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u064A\u0627\u0631\u0627\u062A \u0644\u0644\u0639\u0631\u0636.",
        "sEfeyfwkN0eJ+Pe9jll87w#Value.-1822154468.1": "\u0627\u062E\u062A\u0631",
        "dPjTGoWBakWEdBAX8mepHg#Value": "\u0645\u062D\u0644 \u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0627\u0644\u0636\u0631\u064A\u0628\u064A",
        "U9TA0rR_k0OOaw10c0DkWA#Value.974258437.1": "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u064A\u0627\u0631\u0627\u062A \u0644\u0644\u0639\u0631\u0636.",
        "jzTAE0ieV0iIT6x_cPQ+xQ#Value.-512840794.1": "\u0628\u062D\u062B...",
        "JK49m8XlyUmqg3w0+fGksA#Value.974258437.1": "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u064A\u0627\u0631\u0627\u062A \u0644\u0644\u0639\u0631\u0636.",
        "qkJ8ajkQ_EWYr6dwxQoPxQ#Value.-1822154468.1": "\u0627\u062E\u062A\u0631",
        "LB6a4V0NFkijlh14ZSbqGQ#Value": "\u0645\u062D\u0644 \u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0627\u0644\u0636\u0631\u064A\u0628\u064A",
        "JxRVFNpBr0moAMA2hIkZNA#Value": "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0636\u0631\u0627\u0626\u0628",
        "DRThks0AK0S2E1XG+aKGaw#Title": "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0636\u0631\u064A\u0628\u0629 | Deriv",
        "DRThks0AK0S2E1XG+aKGaw#TitleExpression.-2036052554.1": "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0636\u0631\u064A\u0628\u0629 | Deriv"
    },
    le = {
        "ar-001": {
            translations: be,
            isRTL: !0
        }
    };

function Z(m, v, u, e) {
    let r = JSON.parse(m.country),
        o = (m.language || "en") === "en-US" ? "name" : "nameAr";
    r.sort((i, s) => {
        if (i.alpha2 === "ae") return -1;
        if (s.alpha2 === "ae") return 1;
        let y = m.language || "en",
            l = y === "en-US" ? "name" : "nameAr";
        return i[l].localeCompare(s[l], y, {
            sensitivity: "base"
        })
    }), m.sorted_countries = JSON.stringify(r)
}
c(Z, "default");
var t = N; {
    let v = class v extends t.Controller.BaseViewController {
        constructor(e, r, n) {
            super(e, r, n, le);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get putCitizenship$ServerAction() {
            return this.hasOwnProperty("_putCitizenship$ServerAction") || (this._putCitizenship$ServerAction = function(e, r, n) {
                var o = this.controller;
                return t.Logger.startActiveSpan("PutCitizenship", function(i) {
                    return i && (i.setAttribute("code.function", "PutCitizenship"), i.setAttribute("outsystems.function.key", "3e7397ce-cc57-41e0-8cde-3fdc7f4f006c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var s = {
                            Authorization: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text),
                            Request: t.DataConversion.ServerDataConverter.to(r, t.DataTypes.DataTypes.Record)
                        };
                        return o.callServerAction("PutCitizenship", "screenservices/uae/OnboardingFlow/Nationality/ActionPutCitizenship", "VweRTlBYei5q5JQsntItfg", s, o.callContext(n), void 0, void 0, !0).then(function(y) {
                            var l = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.Nationality$ActionPutCitizenship"));
                            return l.responseOut = t.DataConversion.ServerDataConverter.from(y.Response, E), l
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._putCitizenship$ServerAction
        }
        set putCitizenship$ServerAction(e) {
            this._putCitizenship$ServerAction = e
        }
        get putUpdateClientProfile$ServerAction() {
            return this.hasOwnProperty("_putUpdateClientProfile$ServerAction") || (this._putUpdateClientProfile$ServerAction = function(e, r, n) {
                var o = this.controller;
                return t.Logger.startActiveSpan("PutUpdateClientProfile", function(i) {
                    return i && (i.setAttribute("code.function", "PutUpdateClientProfile"), i.setAttribute("outsystems.function.key", "fb60c2d5-bb40-4a04-a22a-fbadb8fbd524"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var s = {
                            authorization: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text),
                            Request: t.DataConversion.ServerDataConverter.to(r, t.DataTypes.DataTypes.Record)
                        };
                        return o.callServerAction("PutUpdateClientProfile", "screenservices/uae/OnboardingFlow/Nationality/ActionPutUpdateClientProfile", "EuPrrpYMvG7cq2cwRzoBOA", s, o.callContext(n), void 0, void 0, !0).then(function(y) {
                            var l = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.Nationality$ActionPutUpdateClientProfile"));
                            return l.responseOut = t.DataConversion.ServerDataConverter.from(y.Response, E), l
                        })
                    }, function() {
                        i && i.end()
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
        get _realAccountCreationLayoutOnClickPrevious$Action() {
            return this.hasOwnProperty("__realAccountCreationLayoutOnClickPrevious$Action") || (this.__realAccountCreationLayoutOnClickPrevious$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("RealAccountCreationLayoutOnClickPrevious", function(i) {
                    i && (i.setAttribute("code.function", "RealAccountCreationLayoutOnClickPrevious"), i.setAttribute("outsystems.function.key", "1f9b68f9-75f9-430b-947f-351e440d5c7c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("RealAccountCreationLayoutOnClickPrevious"), e = n.callContext(e), b.gethideDOB() ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "user-name", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "date-of-birth", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__realAccountCreationLayoutOnClickPrevious$Action
        }
        set _realAccountCreationLayoutOnClickPrevious$Action(e) {
            this.__realAccountCreationLayoutOnClickPrevious$Action = e
        }
        get _fetchCountryList$Action() {
            return this.hasOwnProperty("__fetchCountryList$Action") || (this.__fetchCountryList$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("FetchCountryList", function(i) {
                    return i && (i.setAttribute("code.function", "FetchCountryList"), i.setAttribute("outsystems.function.key", "2a0cbc07-2476-43b1-912a-da0ac26f651d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        n.ensureControllerAlive("FetchCountryList"), e = n.callContext(e);
                        var s = new t.DataTypes.VariableHolder,
                            y = new t.DataTypes.VariableHolder,
                            l = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            A = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(t.GenericTypeCache.getGenericList(D))));
                        return t.Flow.executeAsyncFlow(function() {
                            return r.variables.is_loadingVar = !0, r.flush(), O.getCountryListCache$Action(e).then(function(h) {
                                s.value = h
                            }).then(function() {
                                l.value.jSONOut = t.JSONUtils.serializeToJSON(s.value.countries_listOut, !1, !1), y.value = t.Logger.startActiveSpan("JavaScript2", function(h) {
                                    h && (h.setAttribute("code.function", "JavaScript2"), h.setAttribute("outsystems.function.key", "86e777de-c4d5-4981-a7de-4f3e89ce906e"), h.setAttribute("outsystems.function.owner.name", "uae"), h.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), h.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return n.safeExecuteJSNode(Z, "JavaScript2", "FetchCountryList", {
                                            language: t.DataConversion.JSNodeParamConverter.to(b.getlanguage(), t.DataTypes.DataTypes.Text),
                                            country: t.DataConversion.JSNodeParamConverter.to(l.value.jSONOut, t.DataTypes.DataTypes.Text),
                                            sorted_countries: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                        }, function(d) {
                                            var a = new(n.constructor.getVariableGroupType("uae.OnboardingFlow.Nationality.FetchCountryList$javaScript2JSResult"));
                                            return a.sorted_countriesOut = t.DataConversion.JSNodeParamConverter.from(d.sorted_countries, t.DataTypes.DataTypes.Text), a
                                        }, {}, {})
                                    } finally {
                                        h && h.end()
                                    }
                                }, 1), A.value.dataOut = t.JSONUtils.deserializeFromJSON(y.value.sorted_countriesOut, t.GenericTypeCache.getGenericList(D), !1), r.variables.country_listVar = A.value.dataOut, r.variables.is_loadingVar = !1
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__fetchCountryList$Action
        }
        set _fetchCountryList$Action(e) {
            this.__fetchCountryList$Action = e
        }
        get _dropdownSearchInitialized$Action() {
            return this.hasOwnProperty("__dropdownSearchInitialized$Action") || (this.__dropdownSearchInitialized$Action = function(e, r) {
                var n = this.model,
                    o = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("DropdownSearchInitialized", function(s) {
                    s && (s.setAttribute("code.function", "DropdownSearchInitialized"), s.setAttribute("outsystems.function.key", "33ea10de-1d1e-4768-8e6c-72d6c9d84510"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("DropdownSearchInitialized"), r = o.callContext(r);
                        var y = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.OnboardingFlow.Nationality.DropdownSearchInitialized$vars")));
                        y.value.dropdownSearchIdInLocal = e;
                        var l = new t.DataTypes.VariableHolder;
                        l.value = I.setVirtualSelectConfigs$Action(y.value.dropdownSearchIdInLocal, (function() {
                            var A = new re;
                            return A.searchNormalizeAttr = ee.booleanTypes.false, A
                        })(), r)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__dropdownSearchInitialized$Action
        }
        set _dropdownSearchInitialized$Action(e) {
            this.__dropdownSearchInitialized$Action = e
        }
        get _citizenshipDropdownSearchOnChanged$Action() {
            return this.hasOwnProperty("__citizenshipDropdownSearchOnChanged$Action") || (this.__citizenshipDropdownSearchOnChanged$Action = function(e, r) {
                var n = this.model,
                    o = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("CitizenshipDropdownSearchOnChanged", function(s) {
                    s && (s.setAttribute("code.function", "CitizenshipDropdownSearchOnChanged"), s.setAttribute("outsystems.function.key", "386ca54b-ae97-423f-8262-54616c891486"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("CitizenshipDropdownSearchOnChanged"), r = o.callContext(r);
                        var y = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.OnboardingFlow.Nationality.CitizenshipDropdownSearchOnChanged$vars")));
                        y.value.selectedOptionListInLocal = e.clone(), n.variables.citizenshipVar = y.value.selectedOptionListInLocal.getCurrent(r.iterationContext).valueAttr, b.setcitizenship(n.variables.citizenshipVar)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__citizenshipDropdownSearchOnChanged$Action
        }
        set _citizenshipDropdownSearchOnChanged$Action(e) {
            this.__citizenshipDropdownSearchOnChanged$Action = e
        }
        get _layoutOnboardingcloseEvent$Action() {
            return this.hasOwnProperty("__layoutOnboardingcloseEvent$Action") || (this.__layoutOnboardingcloseEvent$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("LayoutOnboardingcloseEvent", function(i) {
                    i && (i.setAttribute("code.function", "LayoutOnboardingcloseEvent"), i.setAttribute("outsystems.function.key", "4af753da-aad4-4978-b77a-f208ccee7c22"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("LayoutOnboardingcloseEvent"), e = n.callContext(e), r.variables.shouldStopOnboardingVar = !r.variables.shouldStopOnboardingVar
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__layoutOnboardingcloseEvent$Action
        }
        set _layoutOnboardingcloseEvent$Action(e) {
            this.__layoutOnboardingcloseEvent$Action = e
        }
        get _pOBDropdownSearchOnChanged$Action() {
            return this.hasOwnProperty("__pOBDropdownSearchOnChanged$Action") || (this.__pOBDropdownSearchOnChanged$Action = function(e, r) {
                var n = this.model,
                    o = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("POBDropdownSearchOnChanged", function(s) {
                    s && (s.setAttribute("code.function", "POBDropdownSearchOnChanged"), s.setAttribute("outsystems.function.key", "5cbac44b-0b05-486e-9d34-68dc1736c8b9"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("POBDropdownSearchOnChanged"), r = o.callContext(r);
                        var y = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.OnboardingFlow.Nationality.POBDropdownSearchOnChanged$vars")));
                        y.value.selectedOptionListInLocal = e.clone(), n.variables.place_of_birthVar = y.value.selectedOptionListInLocal.getCurrent(r.iterationContext).valueAttr, b.setplace_of_birth(n.variables.place_of_birthVar)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__pOBDropdownSearchOnChanged$Action
        }
        set _pOBDropdownSearchOnChanged$Action(e) {
            this.__pOBDropdownSearchOnChanged$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "9175d6c8-1d51-4950-be0a-0564149c9ef6"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnInitialize"), e = n.callContext(e), b.setRealSignupCurrentStep(2)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "bd55753e-fa35-4561-85b6-23dbd5efb6f0"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var s = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return n._fetchCountryList$Action(e).then(function() {
                                b.getplace_of_birth() !== t.BuiltinFunctions.nullTextIdentifier() && (r.variables.place_of_birthVar = b.getplace_of_birth()), b.getcitizenship() !== t.BuiltinFunctions.nullTextIdentifier() && (r.variables.citizenshipVar = b.getcitizenship()), O.consoleLog$Action(r.variables.place_of_birthVar + r.variables.citizenshipVar, e), s.value = O.getAuthenticator$Action(e), r.variables.authenticatorVar = s.value.authenticatorOut
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _nextOnClick$Action() {
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("NextOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "NextOnClick"), i.setAttribute("outsystems.function.key", "dd942b2d-288b-461f-a832-786e1d12948d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        n.ensureControllerAlive("NextOnClick"), e = n.callContext(e);
                        var s = new t.DataTypes.VariableHolder,
                            y = new t.DataTypes.VariableHolder,
                            l = new t.DataTypes.VariableHolder,
                            A = new t.DataTypes.VariableHolder,
                            h = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return h.value = O.getAuth$Action(e), l.value = O.getUserMetaData$Action(e), r.variables.is_loadingVar = !0, r.flush(), n.putUpdateClientProfile$ServerAction(h.value.tokenOut, (function() {
                                var d = new ne;
                                return d.first_nameAttr = b.getfirst_name(), d.last_nameAttr = b.getlast_name(), d.date_of_birthAttr = t.BuiltinFunctions.textToDate(b.getdate_of_birth()), d.birth_countryAttr = r.variables.place_of_birthVar, d.residence_countryAttr = b.getresidence(), d
                            })(), e).then(function(d) {
                                y.value = d
                            }).then(function() {
                                return r.flush(), n.putCitizenship$ServerAction(h.value.tokenOut, (function() {
                                    var d = new te;
                                    return d.citizen_countryAttr = r.variables.citizenshipVar, d
                                })(), e).then(function(d) {
                                    s.value = d
                                })
                            }).then(function() {
                                r.variables.is_loadingVar = !1
                            }).then(function() {
                                return O.getFeatureFlag$Action("PhoneNumber", e).shouldEnableOut ? (A.value = O.getUserMetaData$Action(e), A.value.userMetadataOut.emailAttr !== t.BuiltinFunctions.nullTextIdentifier() && A.value.userMetadataOut.phoneAttr !== t.BuiltinFunctions.nullTextIdentifier() ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "user-email-phone", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)) : b.getProvider() === "email" ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "user-phone-number", {
                                    type: t.DataConversion.ServerDataConverter.to("add", t.DataTypes.DataTypes.Text),
                                    from: t.DataConversion.ServerDataConverter.to("onboarding", t.DataTypes.DataTypes.Text)
                                }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), e, !0)) : t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "user-email-section", {
                                    type: t.DataConversion.ServerDataConverter.to("add", t.DataTypes.DataTypes.Text),
                                    from: t.DataConversion.ServerDataConverter.to("onboarding", t.DataTypes.DataTypes.Text)
                                }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), e, !0))) : t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "address-details", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), e, !0))
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(e) {
            this.__nextOnClick$Action = e
        }
        realAccountCreationLayoutOnClickPrevious$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("RealAccountCreationLayoutOnClickPrevious__proxy", function(n) {
                n && (n.setAttribute("code.function", "RealAccountCreationLayoutOnClickPrevious"), n.setAttribute("outsystems.function.key", "1f9b68f9-75f9-430b-947f-351e440d5c7c"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._realAccountCreationLayoutOnClickPrevious$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        fetchCountryList$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("FetchCountryList__proxy", function(n) {
                return n && (n.setAttribute("code.function", "FetchCountryList"), n.setAttribute("outsystems.function.key", "2a0cbc07-2476-43b1-912a-da0ac26f651d"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._fetchCountryList$Action, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        dropdownSearchInitialized$Action(e, r) {
            var n = this.controller;
            return t.Logger.startActiveSpan("DropdownSearchInitialized__proxy", function(o) {
                o && (o.setAttribute("code.function", "DropdownSearchInitialized"), o.setAttribute("outsystems.function.key", "33ea10de-1d1e-4768-8e6c-72d6c9d84510"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._dropdownSearchInitialized$Action, r, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        citizenshipDropdownSearchOnChanged$Action(e, r) {
            var n = this.controller;
            return t.Logger.startActiveSpan("CitizenshipDropdownSearchOnChanged__proxy", function(o) {
                o && (o.setAttribute("code.function", "CitizenshipDropdownSearchOnChanged"), o.setAttribute("outsystems.function.key", "386ca54b-ae97-423f-8262-54616c891486"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._citizenshipDropdownSearchOnChanged$Action, r, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        layoutOnboardingcloseEvent$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("LayoutOnboardingcloseEvent__proxy", function(n) {
                n && (n.setAttribute("code.function", "LayoutOnboardingcloseEvent"), n.setAttribute("outsystems.function.key", "4af753da-aad4-4978-b77a-f208ccee7c22"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._layoutOnboardingcloseEvent$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        pOBDropdownSearchOnChanged$Action(e, r) {
            var n = this.controller;
            return t.Logger.startActiveSpan("POBDropdownSearchOnChanged__proxy", function(o) {
                o && (o.setAttribute("code.function", "POBDropdownSearchOnChanged"), o.setAttribute("outsystems.function.key", "5cbac44b-0b05-486e-9d34-68dc1736c8b9"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._pOBDropdownSearchOnChanged$Action, r, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnInitialize__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "9175d6c8-1d51-4950-be0a-0564149c9ef6"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "bd55753e-fa35-4561-85b6-23dbd5efb6f0"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        nextOnClick$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("NextOnClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "NextOnClick"), n.setAttribute("outsystems.function.key", "dd942b2d-288b-461f-a832-786e1d12948d"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._nextOnClick$Action, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    n = this.model,
                    o = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    n = this.model,
                    o = this.idService;
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
            return O.defaultTimeout
        }
    };
    c(v, "ControllerInner");
    let m = v;
    T = m, T.registerVariableGroupType("uae.OnboardingFlow.Nationality$ActionPutCitizenship", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: c(function() {
            return new E
        }, "defaultValue"),
        complexType: E
    }]), T.registerVariableGroupType("uae.OnboardingFlow.Nationality$ActionPutUpdateClientProfile", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: c(function() {
            return new E
        }, "defaultValue"),
        complexType: E
    }]), T.registerVariableGroupType("uae.OnboardingFlow.Nationality.FetchCountryList$javaScript2JSResult", [{
        name: "sorted_countries",
        attrName: "sorted_countriesOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), T.registerVariableGroupType("uae.OnboardingFlow.Nationality.DropdownSearchInitialized$vars", [{
        name: "DropdownSearchId",
        attrName: "dropdownSearchIdInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), T.registerVariableGroupType("uae.OnboardingFlow.Nationality.CitizenshipDropdownSearchOnChanged$vars", [{
        name: "SelectedOptionList",
        attrName: "selectedOptionListInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.RecordList,
        defaultValue: c(function() {
            return new(t.GenericTypeCache.getGenericList(g))
        }, "defaultValue"),
        complexType: t.GenericTypeCache.getGenericList(g)
    }]), T.registerVariableGroupType("uae.OnboardingFlow.Nationality.POBDropdownSearchOnChanged$vars", [{
        name: "SelectedOptionList",
        attrName: "selectedOptionListInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.RecordList,
        defaultValue: c(function() {
            return new(t.GenericTypeCache.getGenericList(g))
        }, "defaultValue"),
        complexType: t.GenericTypeCache.getGenericList(g)
    }])
}
var T, q = new t.Controller.ControllerFactory(T, ie);
var S = ve(he());
var p = N,
    X = class X extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("country_list", "country_listVar", "country_list", !0, !1, p.DataTypes.DataTypes.RecordList, function() {
                return p.DataTypes.ImmutableBase.getData(new(p.GenericTypeCache.getGenericList(D)))
            }, !1, p.GenericTypeCache.getGenericList(D)), this.attr("place_of_birth", "place_of_birthVar", "place_of_birth", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("citizenship", "citizenshipVar", "citizenship", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Authenticator", "authenticatorVar", "Authenticator", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(X, "VariablesRecord");
var R = X;
R.init();
var Y = class Y extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(Y, "WidgetsRecord");
var Q = Y,
    P = class P extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return R
        }
        static getWidgetsRecordConstructor() {
            return Q
        }
        static get hasValidationWidgets() {
            return P._hasValidationWidgetsValue === void 0 && (P._hasValidationWidgetsValue = void 0 || void 0 || void 0), P._hasValidationWidgetsValue
        }
        setInputs(v) {}
    };
c(P, "Model");
var x = P;
x._hasValidationWidgetsValue = void 0;
var K = new p.Model.ModelFactory(x);
var ge = H.PlaceholderContent,
    Xe = H.IteratorPlaceholderContent,
    Ae = c(function() {
        var m = ae(function(v) {
            var u = v.model,
                e = v.controller,
                r = v.controller.idService,
                n = e.validationService,
                o = e.callContext(),
                i = U,
                s = M,
                y = {
                    props: v,
                    validateWidget: c(function(a) {
                        v.validateWidget(v, a)
                    }, "validateWidget")
                },
                l = u,
                A = ce,
                h = se,
                d = oe();
            return S.createElement("div", v.rootNodeProperties, S.createElement(j, {
                getOwnerSpan: c(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Personal details",
                    ProgressBarPercentage: 33,
                    shouldShowProgressBarInMobile: !0,
                    ShouldEmitPreviousEvent: !0
                },
                events: {
                    _handleError: c(function(a) {
                        e.handleError(a)
                    }, "_handleError"),
                    onClickPrevious$Action: c(function() {
                        var a = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.realAccountCreationLayoutOnClickPrevious$Action(e.callContext(a))
                    }, "onClickPrevious$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: l,
                placeholders: {
                    content: new ge(function() {
                        return [S.createElement(w, {
                            align: 0,
                            animate: !1,
                            style: "relative",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "1"
                            },
                            _widgetRecordProvider: l
                        }, S.createElement(w, {
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
                            _widgetRecordProvider: l
                        }, S.createElement(B, {
                            extendedProperties: {
                                style: "font-weight: 900;"
                            },
                            text: [h(s("JxRVFNpBr0moAMA2hIkZNA#Value", "Nationality"))],
                            _idProps: {
                                service: r,
                                uuid: "3"
                            },
                            _widgetRecordProvider: l
                        })), S.createElement(w, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 48px;"
                            },
                            style: "flex flex-col gap-y-4",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "FormContainer"
                            },
                            _widgetRecordProvider: l
                        }, S.createElement(w, {
                            align: 0,
                            animate: !1,
                            style: "w-full flex flex-col gap-4",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "FieldContainer"
                            },
                            _widgetRecordProvider: l
                        }, S.createElement(w, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "6"
                            },
                            _widgetRecordProvider: l
                        }, S.createElement(G, {
                            extendedProperties: {
                                style: "margin-bottom: 4px; margin-top: 4px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: r,
                                name: "PlaceOfBirth"
                            },
                            _widgetRecordProvider: l
                        }, h(s("LB6a4V0NFkijlh14ZSbqGQ#Value", "Country of birth"))), S.createElement(L, {
                            getOwnerSpan: c(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                OptionsList: u.getCachedValue(r.getId("We+MRcAWjUqGZ26Z6t3BzA.OptionsList"), function() {
                                    return z.JSConversions.typeConvertRecordList(u.variables.country_listVar, new(V.getGenericList(g)), function(a, f) {
                                        return f.valueAttr = a.alpha2Attr, f.labelAttr = b.getlanguage() === "en-US" ? a.emojiAttr + " " + a.nameAttr : a.nameArAttr + " " + a.emojiAttr, f
                                    })
                                }, function() {
                                    return u.variables.country_listVar
                                }),
                                StartingSelection: u.getCachedValue(r.getId("We+MRcAWjUqGZ26Z6t3BzA.StartingSelection"), function() {
                                    return (function() {
                                        var a = new(V.getGenericList(g));
                                        return a.pushAll([(function() {
                                            var f = new g;
                                            return f.valueAttr = u.variables.place_of_birthVar, f.labelAttr = u.variables.place_of_birthVar, f
                                        })()]), a
                                    })()
                                }, function() {
                                    return u.variables.place_of_birthVar
                                }),
                                Prompt: _.resolve(C.TranslationsService).getMessage("qkJ8ajkQ_EWYr6dwxQoPxQ#Value.-1822154468.1", "Select"),
                                OptionalConfigs: u.getCachedValue(r.getId("We+MRcAWjUqGZ26Z6t3BzA.OptionalConfigs"), function() {
                                    return (function() {
                                        var a = new F;
                                        return a.noResultsTextAttr = _.resolve(C.TranslationsService).getMessage("JK49m8XlyUmqg3w0+fGksA#Value.974258437.1", "There are no options to show."), a.searchPromptAttr = _.resolve(C.TranslationsService).getMessage("jzTAE0ieV0iIT6x_cPQ+xQ#Value.-512840794.1", "Search..."), a.noOptionsTextAttr = _.resolve(C.TranslationsService).getMessage("U9TA0rR_k0OOaw10c0DkWA#Value.974258437.1", "There are no options to show."), a
                                    })()
                                })
                            },
                            events: {
                                _handleError: c(function(a) {
                                    e.handleError(a)
                                }, "_handleError"),
                                initialized$Action: c(function(a) {
                                    var f = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.dropdownSearchInitialized$Action(a, e.callContext(f))
                                }, "initialized$Action"),
                                onChanged$Action: c(function(a, f) {
                                    var $ = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.pOBDropdownSearchOnChanged$Action(f, e.callContext($))
                                }, "onChanged$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: r,
                                uuid: "8",
                                alias: "2"
                            },
                            _widgetRecordProvider: l,
                            _dependencies: []
                        })), S.createElement(w, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "9"
                            },
                            _widgetRecordProvider: l
                        }, S.createElement(G, {
                            extendedProperties: {
                                style: "margin-bottom: 4px; margin-top: 4px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: r,
                                name: "FieldLabel2"
                            },
                            _widgetRecordProvider: l
                        }, h(s("dPjTGoWBakWEdBAX8mepHg#Value", "Citizenship"))), S.createElement(L, {
                            getOwnerSpan: c(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                StartingSelection: u.getCachedValue(r.getId("dw9u2kdNIUyLDZmXO1dLDw.StartingSelection"), function() {
                                    return (function() {
                                        var a = new(V.getGenericList(g));
                                        return a.pushAll([(function() {
                                            var f = new g;
                                            return f.valueAttr = u.variables.citizenshipVar, f.labelAttr = u.variables.citizenshipVar, f
                                        })()]), a
                                    })()
                                }, function() {
                                    return u.variables.citizenshipVar
                                }),
                                OptionsList: u.getCachedValue(r.getId("dw9u2kdNIUyLDZmXO1dLDw.OptionsList"), function() {
                                    return z.JSConversions.typeConvertRecordList(u.variables.country_listVar, new(V.getGenericList(g)), function(a, f) {
                                        return f.valueAttr = a.alpha2Attr, f.labelAttr = b.getlanguage() === "en-US" ? a.emojiAttr + " " + a.nameAttr : a.nameArAttr + " " + a.emojiAttr, f
                                    })
                                }, function() {
                                    return u.variables.country_listVar
                                }),
                                Prompt: _.resolve(C.TranslationsService).getMessage("sEfeyfwkN0eJ+Pe9jll87w#Value.-1822154468.1", "Select"),
                                OptionalConfigs: u.getCachedValue(r.getId("dw9u2kdNIUyLDZmXO1dLDw.OptionalConfigs"), function() {
                                    return (function() {
                                        var a = new F;
                                        return a.isDisabledAttr = u.variables.authenticatorVar === "uae_pass", a.noResultsTextAttr = _.resolve(C.TranslationsService).getMessage("iG16_UZZd0GZCerq1eLjgQ#Value.974258437.1", "There are no options to show."), a.searchPromptAttr = _.resolve(C.TranslationsService).getMessage("YYlN3NJawUKsmYnJXuySMA#Value.-512840794.1", "Search..."), a.noOptionsTextAttr = _.resolve(C.TranslationsService).getMessage("b5Rft0cKDUOm1N2hGOWj2w#Value.974258437.1", "There are no options to show."), a
                                    })()
                                }, function() {
                                    return u.variables.authenticatorVar
                                })
                            },
                            events: {
                                _handleError: c(function(a) {
                                    e.handleError(a)
                                }, "_handleError"),
                                onChanged$Action: c(function(a, f) {
                                    var $ = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.citizenshipDropdownSearchOnChanged$Action(f, e.callContext($))
                                }, "onChanged$Action"),
                                initialized$Action: c(function(a) {
                                    var f = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.dropdownSearchInitialized$Action(a, e.callContext(f))
                                }, "initialized$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: r,
                                uuid: "11",
                                alias: "3"
                            },
                            _widgetRecordProvider: l,
                            _dependencies: []
                        })))), S.createElement(w, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px; text-align: end;"
                            },
                            style: u.getCachedValue(r.getId("ButtonContainer.Style"), function() {
                                return I.isDesktop$Action(o).isDesktopOut ? "" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: l
                        }, S.createElement(ue, {
                            enabled: u.getCachedValue(r.getId("NextButton3.Enabled"), function() {
                                return u.variables.place_of_birthVar !== k.nullTextIdentifier() && u.variables.citizenshipVar !== k.nullTextIdentifier() && !u.variables.is_loadingVar
                            }, function() {
                                return u.variables.place_of_birthVar
                            }, function() {
                                return u.variables.citizenshipVar
                            }, function() {
                                return u.variables.is_loadingVar
                            }),
                            extendedProperties: {
                                style: "border-radius: 24px;"
                            },
                            gridProperties: {
                                width: "96px"
                            },
                            isDefault: !1,
                            onClick: c(function() {
                                return Promise.resolve().then(function() {
                                    var a = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    return e.nextOnClick$Action(e.callContext(a))
                                })
                            }, "onClick"),
                            style: u.getCachedValue(r.getId("NextButton3.Style"), function() {
                                return I.isDesktop$Action(o).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                            }),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "NextButton3"
                            },
                            _widgetRecordProvider: l
                        }, S.createElement(B, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [h(s("HO3HwEOA9kqPVPTeDnl5hQ#Value", "Next"))],
                            _idProps: {
                                service: r,
                                uuid: "14"
                            },
                            _widgetRecordProvider: l
                        }))))]
                    })
                },
                _dependencies: [i(u.variables.is_loadingVar), i(u.variables.authenticatorVar), i(u.variables.citizenshipVar), i(u.variables.place_of_birthVar), i(u.variables.country_listVar)]
            }), S.createElement(W, {
                getOwnerSpan: c(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: c(function(a) {
                        e.handleError(a)
                    }, "_handleError"),
                    onContinue$Action: c(function() {
                        var a = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.layoutOnboardingcloseEvent$Action(e.callContext(a))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: r,
                    uuid: "15",
                    alias: "4"
                },
                _widgetRecordProvider: l,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: c(function() {
                return {
                    codeFunction: "Nationality",
                    functionKey: "92e1140d-00cd-442b-b613-55c6f9a2866b",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.Nationality",
            modelFactory: K,
            controllerFactory: q,
            getTitle: c(function(v) {
                var u = v.model,
                    e = v.controller,
                    r = v.controller.idService,
                    n = e.validationService,
                    o = e.callContext(),
                    i = U,
                    s = M,
                    y = {
                        props: v,
                        validateWidget: c(function(l) {
                            v.validateWidget(v, l)
                        }, "validateWidget")
                    };
                return _.resolve(C.TranslationsService).getMessage("DRThks0AK0S2E1XG+aKGaw#TitleExpression.-2036052554.1", "Nationality | Deriv")
            }, "getTitle")
        });
        return m.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.Nationality.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [j, L, W]
        }, m
    }, "componentFactory"),
    _e = Ae();
export {
    q as controllerModule, K as modelModule, _e as viewModule, J as webFlowControllerModule
};