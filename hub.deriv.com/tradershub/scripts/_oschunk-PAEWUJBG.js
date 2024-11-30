import {
    a as ne,
    b as ie
} from "./_oschunk-22A4VW7Y.js";
import {
    a as oe
} from "./_oschunk-ZN276B3B.js";
import "./_oschunk-RNXGKL75.js";
import {
    a as G
} from "./_oschunk-MD5SGUPG.js";
import "./_oschunk-DFHS2IVF.js";
import {
    a as U
} from "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    h as p,
    j as x,
    k as $,
    l as J,
    r as A,
    t as W,
    y as H
} from "./_oschunk-WAXNMQCP.js";
import {
    a as te
} from "./_oschunk-LHY3WMNC.js";
import {
    a as re,
    g as L,
    i as S
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as y,
    d as V
} from "./_oschunk-XMOR6XCC.js";
import "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import {
    Db as k,
    We as E,
    qf as I,
    wb as ee
} from "./_oschunk-44PT7RP7.js";
import {
    ia as O
} from "./_oschunk-NTQBNJ73.js";
import {
    c as f,
    g as Y
} from "./_oschunk-DVBKI63I.js";
var D = Y(re());
var m = Y(re());
var ue = {
        "ib4gbC+_+0Gm2pyq1JbhWw#Value": "\u063A\u064A\u0651\u0631 \u0630\u0644\u0643",
        "q+pIc5+TSUOaZ9OTkms5Kw#Value": "\u0645\u0648\u0635\u0649 \u0628\u0647"
    },
    de = {
        "ib4gbC+_+0Gm2pyq1JbhWw#Value": "Andere",
        "q+pIc5+TSUOaZ9OTkms5Kw#Value": "Empfohlen"
    },
    le = {
        "ib4gbC+_+0Gm2pyq1JbhWw#Value": "Otro",
        "q+pIc5+TSUOaZ9OTkms5Kw#Value": "Recomendado"
    },
    fe = {
        "ib4gbC+_+0Gm2pyq1JbhWw#Value": "Autre",
        "q+pIc5+TSUOaZ9OTkms5Kw#Value": "Recommand\xE9"
    },
    me = {
        "ib4gbC+_+0Gm2pyq1JbhWw#Value": "Altro",
        "q+pIc5+TSUOaZ9OTkms5Kw#Value": "Raccomandato"
    },
    ye = {
        "ib4gbC+_+0Gm2pyq1JbhWw#Value": "Inne",
        "q+pIc5+TSUOaZ9OTkms5Kw#Value": "Zalecane"
    },
    ge = {
        "ib4gbC+_+0Gm2pyq1JbhWw#Value": "Outro",
        "q+pIc5+TSUOaZ9OTkms5Kw#Value": "Recomendado"
    },
    Ce = {
        "ib4gbC+_+0Gm2pyq1JbhWw#Value": "\u0414\u0440\u0443\u0433\u043E\u0439",
        "q+pIc5+TSUOaZ9OTkms5Kw#Value": "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F"
    },
    ae = {
        "ar-001": {
            translations: ue,
            isRTL: !0
        },
        "de-DE": {
            translations: de,
            isRTL: !1
        },
        "es-ES": {
            translations: le,
            isRTL: !1
        },
        "fr-FR": {
            translations: fe,
            isRTL: !1
        },
        "it-IT": {
            translations: me,
            isRTL: !1
        },
        "pl-PL": {
            translations: ye,
            isRTL: !1
        },
        "pt-PT": {
            translations: ge,
            isRTL: !1
        },
        "ru-RU": {
            translations: Ce,
            isRTL: !1
        }
    };

function M(v, s, g, r) {
    var C, i, a, b, T, X;
    let n = JSON.parse(v.RawCurrenciesList).map(h => h.Currencies),
        t = JSON.parse(v.LandingCompanyResponse || JSON.stringify({
            landing_company: {
                gaming_company: {
                    legal_allowed_currencies: []
                },
                financial_company: {
                    legal_allowed_currencies: []
                }
            }
        })),
        o = (a = (i = (C = t.landing_company) == null ? void 0 : C.gaming_company) == null ? void 0 : i.legal_allowed_currencies) != null ? a : [],
        l = (X = (T = (b = t.landing_company) == null ? void 0 : b.financial_company) == null ? void 0 : T.legal_allowed_currencies) != null ? X : [],
        c = !v.IsEU && (o != null && o.length) ? o : l,
        u = n.filter(h => c.includes(h.Code) && h.Category === "Recommended"),
        d = n.filter(h => c.includes(h.Code) && h.Category === "Other");
    u.sort((h, B) => h.Id - B.Id), d.sort((h, B) => h.Id - B.Id), v.IsEU ? (v.RecommendedCurrencies = JSON.stringify(d), v.OtherCurrencies = JSON.stringify(u)) : (v.RecommendedCurrencies = JSON.stringify(u), v.OtherCurrencies = JSON.stringify(d))
}
f(M, "default");

function z(v, s, g) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: "0",
            step_codename: "account_currency",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
f(z, "default");

function q(v, s, g) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: "0",
            step_codename: "account_currency",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
f(q, "default");

function K(v, s, g, r) {
    v.Payload = JSON.stringify({
        landing_company: v.CountryCode
    })
}
f(K, "default");
var e = O; {
    let s = class s extends e.Controller.BaseViewController {
        constructor(r, n, t) {
            super(r, n, t, ae);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCurrencies$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCurrencies$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getCurrencies$AggrRefresh() {
            return this.hasOwnProperty("_getCurrencies$AggrRefresh") || (this._getCurrencies$AggrRefresh = function() {
                var r = function(n, t, u) {
                    var l = this.model,
                        c = this.controller,
                        u = c.callContext(u);
                    return c.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrencies", "screenservices/tradershub/RealAccountCreationBlocks/AccountCurrencyBlock/ScreenDataSetGetCurrencies", "dZlsET6Ad83BH_EDdV90MA", n, t, function(d) {
                        l.variables.getCurrenciesAggr.dataFetchStatusAttr = d
                    }, function(d) {
                        l.variables.getCurrenciesAggr.replaceWith(e.DataConversion.ServerDataConverter.from(d, l.variables.getCurrenciesAggr.constructor))
                    }, void 0, void 0, void 0, u, void 0, !0).then(function() {
                        return c._onReady$Action(c.callContext(u))
                    })
                }.bind(this);
                return e.Logger.startActiveSpan("GetCurrencies", function(n) {
                    return n && (n.setAttribute("code.function", "GetCurrencies"), n.setAttribute("outsystems.function.key", "64ea3413-5b85-45ea-a634-df484db4d1c0"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), e.Flow.tryFinally(function() {
                        return r()
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getCurrencies$AggrRefresh
        }
        set getCurrencies$AggrRefresh(r) {
            this._getCurrencies$AggrRefresh = r
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getCurrencies$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _filterCurrenciesFunction$Action() {
            return this.hasOwnProperty("__filterCurrenciesFunction$Action") || (this.__filterCurrenciesFunction$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("FilterCurrenciesFunction", function(l) {
                    l && (l.setAttribute("code.function", "FilterCurrenciesFunction"), l.setAttribute("outsystems.function.key", "2c16e74d-90fa-4350-897f-94b5d2249055"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("FilterCurrenciesFunction"), r = t.callContext(r);
                        var c = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            d = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(I))),
                            C = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(I)));
                        u.value.jSONOut = e.JSONUtils.serializeToJSON(n.variables.getCurrenciesAggr.listOut, !1, !1), c.value = e.Logger.startActiveSpan("JavaScript1", function(i) {
                            i && (i.setAttribute("code.function", "JavaScript1"), i.setAttribute("outsystems.function.key", "81b40fd3-0118-4533-b23b-a5fc55b06b83"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(M, "JavaScript1", "FilterCurrenciesFunction", {
                                    IsEU: e.DataConversion.JSNodeParamConverter.to(y.getIsEuUser(), e.DataTypes.DataTypes.Boolean),
                                    LandingCompanyResponse: e.DataConversion.JSNodeParamConverter.to(y.getRawLandingCompanyResponse(), e.DataTypes.DataTypes.Text),
                                    RawCurrenciesList: e.DataConversion.JSNodeParamConverter.to(u.value.jSONOut, e.DataTypes.DataTypes.Text),
                                    RecommendedCurrencies: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                    OtherCurrencies: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(a) {
                                    var b = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.FilterCurrenciesFunction$javaScript1JSResult"));
                                    return b.recommendedCurrenciesOut = e.DataConversion.JSNodeParamConverter.from(a.RecommendedCurrencies, e.DataTypes.DataTypes.Text), b.otherCurrenciesOut = e.DataConversion.JSNodeParamConverter.from(a.OtherCurrencies, e.DataTypes.DataTypes.Text), b
                                }, {}, {})
                            } finally {
                                i && i.end()
                            }
                        }, 1), C.value.dataOut = e.JSONUtils.deserializeFromJSON(c.value.recommendedCurrenciesOut, I, !1), d.value.dataOut = e.JSONUtils.deserializeFromJSON(c.value.otherCurrenciesOut, I, !1), n.variables.filteredRecommendedCurrenciesVar = C.value.dataOut, n.variables.filteredOtherCurrenciesVar = d.value.dataOut
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__filterCurrenciesFunction$Action
        }
        set _filterCurrenciesFunction$Action(r) {
            this.__filterCurrenciesFunction$Action = r
        }
        get _recommendedListItemOnClick$Action() {
            return this.hasOwnProperty("__recommendedListItemOnClick$Action") || (this.__recommendedListItemOnClick$Action = function(r, n) {
                var t = this.model,
                    o = this.controller,
                    l = this.idService;
                return e.Logger.startActiveSpan("RecommendedListItemOnClick", function(c) {
                    return c && (c.setAttribute("code.function", "RecommendedListItemOnClick"), c.setAttribute("outsystems.function.key", "7bcd2bfc-11f4-411f-9f16-58032e0ee43f"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        o.ensureControllerAlive("RecommendedListItemOnClick"), n = o.callContext(n);
                        var u = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.RecommendedListItemOnClick$vars")));
                        return u.value.currencyInLocal = r.clone(), e.Flow.executeAsyncFlow(function() {
                            return y.setSelectedCurrencyCode(u.value.currencyInLocal.codeAttr), y.setRealSignupWalletAccountType(u.value.currencyInLocal.walletAccountTypeAttr), e.Logger.startActiveSpan("RudderStack", function(d) {
                                d && (d.setAttribute("code.function", "RudderStack"), d.setAttribute("outsystems.function.key", "30475e20-91dc-4312-b42e-e64b4a7e78fc"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return o.safeExecuteJSNode(z, "RudderStack", "RecommendedListItemOnClick", null, function(C) {}, {}, {})
                                } finally {
                                    d && d.end()
                                }
                            }, 1), o.nextStepEvent$Action(n)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__recommendedListItemOnClick$Action
        }
        set _recommendedListItemOnClick$Action(r) {
            this.__recommendedListItemOnClick$Action = r
        }
        get _otherCurrenciesItemOnClick$Action() {
            return this.hasOwnProperty("__otherCurrenciesItemOnClick$Action") || (this.__otherCurrenciesItemOnClick$Action = function(r, n) {
                var t = this.model,
                    o = this.controller,
                    l = this.idService;
                return e.Logger.startActiveSpan("OtherCurrenciesItemOnClick", function(c) {
                    return c && (c.setAttribute("code.function", "OtherCurrenciesItemOnClick"), c.setAttribute("outsystems.function.key", "b838397e-9882-4c10-ae6f-4574c77ed208"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OtherCurrenciesItemOnClick"), n = o.callContext(n);
                        var u = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.OtherCurrenciesItemOnClick$vars")));
                        return u.value.currencyInLocal = r.clone(), e.Flow.executeAsyncFlow(function() {
                            return y.setSelectedCurrencyCode(u.value.currencyInLocal.codeAttr), y.setRealSignupWalletAccountType(u.value.currencyInLocal.walletAccountTypeAttr), e.Logger.startActiveSpan("RudderStack", function(d) {
                                d && (d.setAttribute("code.function", "RudderStack"), d.setAttribute("outsystems.function.key", "fc837aaa-b438-4fd9-9c3b-2a60d4f26403"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return o.safeExecuteJSNode(q, "RudderStack", "OtherCurrenciesItemOnClick", null, function(C) {}, {}, {})
                                } finally {
                                    d && d.end()
                                }
                            }, 1), o.nextStepEvent$Action(n)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__otherCurrenciesItemOnClick$Action
        }
        set _otherCurrenciesItemOnClick$Action(r) {
            this.__otherCurrenciesItemOnClick$Action = r
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(l) {
                    return l && (l.setAttribute("code.function", "OnReady"), l.setAttribute("outsystems.function.key", "db431d01-adee-411c-b3fe-ff29641ee35f"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), r = t.callContext(r);
                        var c = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder,
                            d = new e.DataTypes.VariableHolder,
                            C = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(k))),
                            i = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(k)));
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                if (y.getRawLandingCompanyResponse() === e.BuiltinFunctions.nullTextIdentifier()) return e.Flow.executeSequence(function() {
                                    return n.variables.landingCompanyVar.landing_companyAttr.gaming_companyAttr.legal_allowed_currenciesAttr.isEmpty && e.BuiltinFunctions.length(y.getAuthToken()) > 1 ? (n.flush(), V.sendGetSetting$Action(r).then(function(a) {
                                        u.value = a
                                    }).then(function() {
                                        return d.value = e.Logger.startActiveSpan("LandingCompanyPayload", function(a) {
                                            a && (a.setAttribute("code.function", "LandingCompanyPayload"), a.setAttribute("outsystems.function.key", "fb544b18-75a6-4f46-8802-c565a31ec661"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return t.safeExecuteJSNode(K, "LandingCompanyPayload", "OnReady", {
                                                    CountryCode: e.DataConversion.JSNodeParamConverter.to(u.value.getSettingResponseOut.country_codeAttr, e.DataTypes.DataTypes.Text),
                                                    Payload: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                }, function(b) {
                                                    var T = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.OnReady$landingCompanyPayloadJSResult"));
                                                    return T.payloadOut = e.DataConversion.JSNodeParamConverter.from(b.Payload, e.DataTypes.DataTypes.Text), T
                                                }, {}, {})
                                            } finally {
                                                a && a.end()
                                            }
                                        }, 1), n.flush(), V.derivApiSendMessage$Action(d.value.payloadOut, "", !1, r).then(function(a) {
                                            c.value = a
                                        })
                                    }).then(function() {
                                        C.value.dataOut = e.JSONUtils.deserializeFromJSON(c.value.responseOut, k, !1), n.variables.landingCompanyVar = C.value.dataOut, y.setRawLandingCompanyResponse(c.value.responseOut), y.setSelectedCitizenship(u.value.getSettingResponseOut.citizenAttr), t._filterCurrenciesFunction$Action(r)
                                    })) : e.Flow.returnAsync()
                                });
                                if (n.variables.landingCompanyVar.landing_companyAttr.gaming_companyAttr.legal_allowed_currenciesAttr.isEmpty && e.BuiltinFunctions.length(y.getAuthToken()) > 1) i.value.dataOut = e.JSONUtils.deserializeFromJSON(y.getRawLandingCompanyResponse(), k, !1), n.variables.landingCompanyVar = i.value.dataOut, t._filterCurrenciesFunction$Action(r);
                                else return e.Flow.returnAsync()
                            }).then(function() {
                                n.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(r) {
            this.__onReady$Action = r
        }
        filterCurrenciesFunction$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("FilterCurrenciesFunction__proxy", function(t) {
                t && (t.setAttribute("code.function", "FilterCurrenciesFunction"), t.setAttribute("outsystems.function.key", "2c16e74d-90fa-4350-897f-94b5d2249055"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._filterCurrenciesFunction$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        recommendedListItemOnClick$Action(r, n) {
            var t = this.controller;
            return e.Logger.startActiveSpan("RecommendedListItemOnClick__proxy", function(o) {
                return o && (o.setAttribute("code.function", "RecommendedListItemOnClick"), o.setAttribute("outsystems.function.key", "7bcd2bfc-11f4-411f-9f16-58032e0ee43f"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._recommendedListItemOnClick$Action, n, r)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        otherCurrenciesItemOnClick$Action(r, n) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OtherCurrenciesItemOnClick__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OtherCurrenciesItemOnClick"), o.setAttribute("outsystems.function.key", "b838397e-9882-4c10-ae6f-4574c77ed208"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._otherCurrenciesItemOnClick$Action, n, r)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onReady$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "db431d01-adee-411c-b3fe-ff29641ee35f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get nextStepEvent$Action() {
            return this.hasOwnProperty("_nextStepEvent$Action") || (this._nextStepEvent$Action = function() {
                return Promise.resolve()
            }), this._nextStepEvent$Action
        }
        set nextStepEvent$Action(r) {
            this._nextStepEvent$Action = r
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(r) {
            this._onInitializeEventHandler = r
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(r) {
            this._onReadyEventHandler = r
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(r) {
            this._onRenderEventHandler = r
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(r) {
            this._onDestroyEventHandler = r
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(r) {
            this._onParametersChangedEventHandler = r
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r) {
                return controller.handleError(r)
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return V.defaultTimeout
        }
    };
    f(s, "ControllerInner");
    let v = s;
    w = v, w.registerVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.FilterCurrenciesFunction$javaScript1JSResult", [{
        name: "RecommendedCurrencies",
        attrName: "recommendedCurrenciesOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "OtherCurrencies",
        attrName: "otherCurrenciesOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.RecommendedListItemOnClick$vars", [{
        name: "Currency",
        attrName: "currencyInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: f(function() {
            return new E
        }, "defaultValue"),
        complexType: E
    }]), w.registerVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.OtherCurrenciesItemOnClick$vars", [{
        name: "Currency",
        attrName: "currencyInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: f(function() {
            return new E
        }, "defaultValue"),
        complexType: E
    }]), w.registerVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.OnReady$landingCompanyPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }])
}
var w, ce = new e.Controller.ControllerFactory(w, te);
var N = O,
    P = S.PlaceholderContent,
    se = S.IteratorPlaceholderContent,
    R = class R extends L.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.AccountCurrencyBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "AccountCurrencyBlock",
                functionKey: "4ba5e16e-0d4e-4271-84fb-0cca46322ed7",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [U]
        }
        get modelFactory() {
            return ne
        }
        get controllerFactory() {
            return ce
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                g = this.controller,
                r = this.idService,
                n = g.validationService,
                t = this.widgetsRecordProvider,
                o = g.callContext(),
                l = R.ifWidget,
                c = R.textWidget,
                u = R.asPrimitiveValue,
                d = R.getTranslation,
                C = this;
            return m.createElement("div", this.getRootNodeProperties(), l(s.variables.isLoadingVar, !1, this, function() {
                return [m.createElement(U, {
                    getOwnerSpan: f(function() {
                        return C.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: f(function() {
                        return C.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: f(function(i) {
                            g.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: r,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return [m.createElement(p, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; display: flex; flex-direction: column; padding: 16px 0;"
                    },
                    style: "full-width",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                }, m.createElement(H, {
                    extendedProperties: {
                        style: "color: #000; font-size: 16px;"
                    },
                    text: [c(d("q+pIc5+TSUOaZ9OTkms5Kw#Value", "Recommended"))],
                    _idProps: {
                        service: r,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }), m.createElement($, {
                    animateItems: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: s.variables.filteredRecommendedCurrenciesVar,
                    style: "list list-group display-flex flex-direction-column gap-base",
                    tag: "div",
                    _idProps: {
                        service: r,
                        name: "RecommendedList"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        content: new se(function(i, a) {
                            return [m.createElement(J, {
                                onClick: f(function() {
                                    return Promise.resolve().then(function() {
                                        var b = a.clone();
                                        return g.recommendedListItemOnClick$Action(s.variables.filteredRecommendedCurrenciesVar.getCurrent(a.iterationContext), g.callContext(b))
                                    })
                                }, "onClick"),
                                style: s.getCachedValue(i.getId("RecommendedListItem.Style"), function() {
                                    return s.variables.filteredRecommendedCurrenciesVar.getCurrent(a.iterationContext).codeAttr === y.getSelectedCurrencyCode() ? "currency-list--selected" : "currency-list"
                                }, function() {
                                    return s.variables.filteredRecommendedCurrenciesVar.getCurrent(a.iterationContext).codeAttr
                                }, function() {
                                    return y.getSelectedCurrencyCode()
                                }),
                                triggerActionOnFullSwipeLeft: !1,
                                triggerActionOnFullSwipeRight: !1,
                                _idProps: {
                                    service: i,
                                    name: "RecommendedListItem"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    leftActions: P.Empty,
                                    content: new P(function() {
                                        return [m.createElement(p, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; justify-content: space-between;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "100%"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: t
                                        }, m.createElement(p, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            style: "display-flex align-items-center gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: t
                                        }, m.createElement(A, {
                                            gridProperties: {
                                                width: "24px"
                                            },
                                            type: 1,
                                            url: s.variables.filteredRecommendedCurrenciesVar.getCurrent(a.iterationContext).iconAttr,
                                            _idProps: {
                                                service: i,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: t
                                        }), m.createElement(W, {
                                            extendedProperties: {
                                                style: "color: #101213; font-weight: 500;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent",
                                                marginLeft: "16px"
                                            },
                                            style: "display-flex cursor-pointer",
                                            _idProps: {
                                                service: i,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: t
                                        }, m.createElement(x, {
                                            extendedProperties: {
                                                style: "font-weight: 500;"
                                            },
                                            style: "curreny-name",
                                            value: s.variables.filteredRecommendedCurrenciesVar.getCurrent(a.iterationContext).nameAttr,
                                            _idProps: {
                                                service: i,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: t
                                        }), m.createElement(x, {
                                            extendedProperties: {
                                                style: "font-weight: 500;"
                                            },
                                            gridProperties: {
                                                marginLeft: "2px"
                                            },
                                            style: "curreny-name",
                                            value: "(" + s.variables.filteredRecommendedCurrenciesVar.getCurrent(a.iterationContext).codeAttr + ")",
                                            _idProps: {
                                                service: i,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: t
                                        }))), m.createElement(p, {
                                            align: 0,
                                            animate: !1,
                                            style: "list-item-icon display-flex",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: t
                                        }, l(y.getSelectedCurrencyCode() === s.variables.filteredRecommendedCurrenciesVar.getCurrent(a.iterationContext).codeAttr, !1, this, function() {
                                            return [m.createElement(A, {
                                                image: N.Navigation.VersionedURL.getVersionedUrl("img/tradershub.roundedblackcheckmark.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: t
                                            })]
                                        }, function() {
                                            return [m.createElement(A, {
                                                image: N.Navigation.VersionedURL.getVersionedUrl("img/tradershub.rightIcon.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: t
                                            })]
                                        })))]
                                    }),
                                    rightActions: P.Empty
                                },
                                _dependencies: [u(y.getSelectedCurrencyCode()), u(s.variables.filteredRecommendedCurrenciesVar.getCurrent(a.iterationContext).codeAttr), u(s.variables.filteredRecommendedCurrenciesVar.getCurrent(a.iterationContext).nameAttr), u(s.variables.filteredRecommendedCurrenciesVar.getCurrent(a.iterationContext).iconAttr)]
                            })]
                        }, o, r, "1")
                    },
                    _dependencies: [u(y.getSelectedCurrencyCode())]
                }), m.createElement(H, {
                    extendedProperties: {
                        style: "color: #000; font-size: 16px;"
                    },
                    text: [c(d("ib4gbC+_+0Gm2pyq1JbhWw#Value", "Other"))],
                    _idProps: {
                        service: r,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                }), m.createElement($, {
                    animateItems: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: s.variables.filteredOtherCurrenciesVar,
                    style: "list list-group display-flex flex-direction-column gap-base",
                    tag: "div",
                    _idProps: {
                        service: r,
                        name: "OtherCurrencies"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        content: new se(function(i, a) {
                            return [m.createElement(J, {
                                onClick: f(function() {
                                    return Promise.resolve().then(function() {
                                        var b = a.clone();
                                        return g.otherCurrenciesItemOnClick$Action(s.variables.filteredOtherCurrenciesVar.getCurrent(a.iterationContext), g.callContext(b))
                                    })
                                }, "onClick"),
                                style: s.getCachedValue(i.getId("OtherCurrenciesItem.Style"), function() {
                                    return s.variables.filteredOtherCurrenciesVar.getCurrent(a.iterationContext).codeAttr === y.getSelectedCurrencyCode() ? "currency-list--selected" : "currency-list"
                                }, function() {
                                    return s.variables.filteredOtherCurrenciesVar.getCurrent(a.iterationContext).codeAttr
                                }, function() {
                                    return y.getSelectedCurrencyCode()
                                }),
                                triggerActionOnFullSwipeLeft: !1,
                                triggerActionOnFullSwipeRight: !1,
                                _idProps: {
                                    service: i,
                                    name: "OtherCurrenciesItem"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    leftActions: P.Empty,
                                    content: new P(function() {
                                        return [m.createElement(p, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; justify-content: space-between;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "100%"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: t
                                        }, m.createElement(p, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            style: "display-flex align-items-center gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: t
                                        }, m.createElement(A, {
                                            gridProperties: {
                                                width: "32px"
                                            },
                                            type: 1,
                                            url: s.variables.filteredOtherCurrenciesVar.getCurrent(a.iterationContext).iconAttr,
                                            _idProps: {
                                                service: i,
                                                uuid: "19"
                                            },
                                            _widgetRecordProvider: t
                                        }), m.createElement(W, {
                                            extendedProperties: {
                                                style: "color: #101213; font-weight: 500;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent",
                                                marginLeft: "16px"
                                            },
                                            style: "display-flex",
                                            _idProps: {
                                                service: i,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: t
                                        }, m.createElement(x, {
                                            extendedProperties: {
                                                style: "font-weight: 500;"
                                            },
                                            style: "curreny-name cursor-pointer",
                                            value: s.variables.filteredOtherCurrenciesVar.getCurrent(a.iterationContext).nameAttr,
                                            _idProps: {
                                                service: i,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: t
                                        }), m.createElement(x, {
                                            extendedProperties: {
                                                style: "font-weight: 500;"
                                            },
                                            gridProperties: {
                                                marginLeft: "2px"
                                            },
                                            style: "curreny-name",
                                            value: "(" + s.variables.filteredOtherCurrenciesVar.getCurrent(a.iterationContext).codeAttr + ")",
                                            _idProps: {
                                                service: i,
                                                uuid: "22"
                                            },
                                            _widgetRecordProvider: t
                                        }))), m.createElement(p, {
                                            align: 0,
                                            animate: !1,
                                            style: "list-item-icon display-flex",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "23"
                                            },
                                            _widgetRecordProvider: t
                                        }, l(y.getSelectedCurrencyCode() === s.variables.filteredOtherCurrenciesVar.getCurrent(a.iterationContext).codeAttr, !1, this, function() {
                                            return [m.createElement(A, {
                                                image: N.Navigation.VersionedURL.getVersionedUrl("img/tradershub.roundedblackcheckmark.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "24"
                                                },
                                                _widgetRecordProvider: t
                                            })]
                                        }, function() {
                                            return [m.createElement(A, {
                                                image: N.Navigation.VersionedURL.getVersionedUrl("img/tradershub.rightIcon.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "25"
                                                },
                                                _widgetRecordProvider: t
                                            })]
                                        })))]
                                    }),
                                    rightActions: P.Empty
                                },
                                _dependencies: [u(y.getSelectedCurrencyCode()), u(s.variables.filteredOtherCurrenciesVar.getCurrent(a.iterationContext).codeAttr), u(s.variables.filteredOtherCurrenciesVar.getCurrent(a.iterationContext).nameAttr), u(s.variables.filteredOtherCurrenciesVar.getCurrent(a.iterationContext).iconAttr)]
                            })]
                        }, o, r, "2")
                    },
                    _dependencies: [u(y.getSelectedCurrencyCode())]
                }))]
            }))
        }
    };
f(R, "View");
var Z = R,
    j = Z;
var F = O,
    he = S.PlaceholderContent,
    rt = S.IteratorPlaceholderContent,
    _ = class _ extends L.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.CurrencySelection"
        }
        static getAttributes() {
            return {
                codeFunction: "CurrencySelection",
                functionKey: "dfa38c03-0595-44ed-b6b0-72ee8b3bfff2",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.CurrencySelection.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [G, j]
        }
        get modelFactory() {
            return ie
        }
        get controllerFactory() {
            return oe
        }
        get title() {
            let s = this.model,
                g = this.controller,
                r = this.idService,
                n = g.validationService,
                t = g.callContext(),
                o = _.asPrimitiveValue,
                l = _.getTranslation,
                c = this;
            return F.Injector.resolve(F.ServiceNames.TranslationsService).getMessage("A4yj35UF7US2sHLuizv_8g#TitleExpression.-2098612361.1", "Currency selection | Deriv")
        }
        internalRender() {
            let s = this.model,
                g = this.controller,
                r = this.idService,
                n = g.validationService,
                t = this.widgetsRecordProvider,
                o = g.callContext(),
                l = _.ifWidget,
                c = _.textWidget,
                u = _.asPrimitiveValue,
                d = _.getTranslation,
                C = this;
            return D.createElement("div", this.getRootNodeProperties(), D.createElement(G, {
                getOwnerSpan: f(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: f(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: F.Injector.resolve(F.ServiceNames.TranslationsService).getMessage("B5RGTeMzGEm12_haIDhUtA#Value.-1477898012.1", "Account Currency"),
                    Analytics: s.getCachedValue(r.getId("t5AZM2y2GkeaV0n0n4D55g.Analytics"), function() {
                        return function() {
                            var i = new ee;
                            return i.stepCodenameAttr = "account_currency", i.stepNumberAttr = "0", i
                        }()
                    })
                },
                events: {
                    _handleError: f(function(i) {
                        g.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new he(function() {
                        return [D.createElement(j, {
                            getOwnerSpan: f(function() {
                                return C.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: f(function() {
                                return C.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: f(function(i) {
                                    g.handleError(i)
                                }, "_handleError"),
                                nextStepEvent$Action: f(function() {
                                    var i = o.clone();
                                    g.accountCurrencyBlockNextStepEvent$Action(g.callContext(i))
                                }, "nextStepEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: r,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
f(_, "View");
var Q = _,
    nt = Q;
export {
    nt as
    default
};