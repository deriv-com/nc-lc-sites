import {
    a as te,
    b as re
} from "./_oschunk-A7IGA6SC.js";
import {
    a as ne
} from "./_oschunk-XQIJ4R7W.js";
import "./_oschunk-ILTRYJXV.js";
import {
    a as H
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import {
    a as W
} from "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    h as p,
    j as x,
    k as D,
    l as $,
    r as A,
    t as J,
    y as B
} from "./_oschunk-HUOHOHZB.js";
import {
    a as X
} from "./_oschunk-Y45M2O2K.js";
import {
    a as ee,
    g as I,
    i as O
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as f,
    d as T
} from "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    $e as k,
    sb as Q,
    yb as E
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as S
} from "./_oschunk-NTQBNJ73.js";
import {
    c as d,
    g as Y
} from "./_oschunk-DVBKI63I.js";
var V = Y(ee());
var l = Y(ee());
var ae = {
        "ib4gbC+_+0Gm2pyq1JbhWw#Value": "Autre",
        "q+pIc5+TSUOaZ9OTkms5Kw#Value": "Recommand\xE9"
    },
    ie = {
        "fr-FR": {
            translations: ae,
            isRTL: !1
        }
    };

function U(y, a, m, t) {
    var C, n, s, h, P, Z;
    let i = JSON.parse(y.RawCurrenciesList).map(b => b.Currencies),
        e = JSON.parse(y.LandingCompanyResponse || JSON.stringify({
            landing_company: {
                gaming_company: {
                    legal_allowed_currencies: []
                },
                financial_company: {
                    legal_allowed_currencies: []
                }
            }
        })),
        v = (s = (n = (C = e.landing_company) == null ? void 0 : C.gaming_company) == null ? void 0 : n.legal_allowed_currencies) != null ? s : [],
        o = (Z = (P = (h = e.landing_company) == null ? void 0 : h.financial_company) == null ? void 0 : P.legal_allowed_currencies) != null ? Z : [],
        c = !y.IsEU && (v != null && v.length) ? v : o,
        u = i.filter(b => c.includes(b.Code) && b.Category === "Recommended"),
        g = i.filter(b => c.includes(b.Code) && b.Category === "Other");
    u.sort((b, L) => b.Id - L.Id), g.sort((b, L) => b.Id - L.Id), y.IsEU ? (y.RecommendedCurrencies = JSON.stringify(g), y.OtherCurrencies = JSON.stringify(u)) : (y.RecommendedCurrencies = JSON.stringify(u), y.OtherCurrencies = JSON.stringify(g))
}
d(U, "default");

function z(y, a, m) {
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
d(z, "default");

function G(y, a, m) {
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
d(G, "default");

function M(y, a, m, t) {
    y.Payload = JSON.stringify({
        landing_company: y.CountryCode
    })
}
d(M, "default");
var r = S; {
    let a = class a extends r.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e, ie);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCurrencies$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCurrencies$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getCurrencies$AggrRefresh() {
            return this.hasOwnProperty("_getCurrencies$AggrRefresh") || (this._getCurrencies$AggrRefresh = function() {
                var t = function(i, e, u) {
                    var o = this.model,
                        c = this.controller,
                        u = c.callContext(u);
                    return c.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrencies", "screenservices/tradershub/RealAccountCreationBlocks/AccountCurrencyBlock/ScreenDataSetGetCurrencies", "npjMYW44GFvhkxw14gO3vA", i, e, function(g) {
                        o.variables.getCurrenciesAggr.dataFetchStatusAttr = g
                    }, function(g) {
                        o.variables.getCurrenciesAggr.replaceWith(r.DataConversion.ServerDataConverter.from(g, o.variables.getCurrenciesAggr.constructor))
                    }, void 0, void 0, void 0, u, void 0, !0).then(function() {
                        return c._onReady$Action(c.callContext(u))
                    })
                }.bind(this);
                return r.Logger.startActiveSpan("GetCurrencies", function(i) {
                    return i && (i.setAttribute("code.function", "GetCurrencies"), i.setAttribute("outsystems.function.key", "64ea3413-5b85-45ea-a634-df484db4d1c0"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), r.Flow.tryFinally(function() {
                        return t()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getCurrencies$AggrRefresh
        }
        set getCurrencies$AggrRefresh(t) {
            this._getCurrencies$AggrRefresh = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getCurrencies$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _filterCurrenciesFunction$Action() {
            return this.hasOwnProperty("__filterCurrenciesFunction$Action") || (this.__filterCurrenciesFunction$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    v = this.idService;
                return r.Logger.startActiveSpan("FilterCurrenciesFunction", function(o) {
                    o && (o.setAttribute("code.function", "FilterCurrenciesFunction"), o.setAttribute("outsystems.function.key", "2c16e74d-90fa-4350-897f-94b5d2249055"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("FilterCurrenciesFunction"), t = e.callContext(t);
                        var c = new r.DataTypes.VariableHolder,
                            u = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            g = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(k))),
                            C = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(k)));
                        u.value.jSONOut = r.JSONUtils.serializeToJSON(i.variables.getCurrenciesAggr.listOut, !1, !1), c.value = r.Logger.startActiveSpan("JavaScript1", function(n) {
                            n && (n.setAttribute("code.function", "JavaScript1"), n.setAttribute("outsystems.function.key", "81b40fd3-0118-4533-b23b-a5fc55b06b83"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(U, "JavaScript1", "FilterCurrenciesFunction", {
                                    IsEU: r.DataConversion.JSNodeParamConverter.to(f.getIsEuUser(), r.DataTypes.DataTypes.Boolean),
                                    LandingCompanyResponse: r.DataConversion.JSNodeParamConverter.to(f.getRawLandingCompanyResponse(), r.DataTypes.DataTypes.Text),
                                    RawCurrenciesList: r.DataConversion.JSNodeParamConverter.to(u.value.jSONOut, r.DataTypes.DataTypes.Text),
                                    RecommendedCurrencies: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                    OtherCurrencies: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(s) {
                                    var h = new(e.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.FilterCurrenciesFunction$javaScript1JSResult"));
                                    return h.recommendedCurrenciesOut = r.DataConversion.JSNodeParamConverter.from(s.RecommendedCurrencies, r.DataTypes.DataTypes.Text), h.otherCurrenciesOut = r.DataConversion.JSNodeParamConverter.from(s.OtherCurrencies, r.DataTypes.DataTypes.Text), h
                                }, {}, {})
                            } finally {
                                n && n.end()
                            }
                        }, 1), C.value.dataOut = r.JSONUtils.deserializeFromJSON(c.value.recommendedCurrenciesOut, k, !1), g.value.dataOut = r.JSONUtils.deserializeFromJSON(c.value.otherCurrenciesOut, k, !1), i.variables.filteredRecommendedCurrenciesVar = C.value.dataOut, i.variables.filteredOtherCurrenciesVar = g.value.dataOut
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__filterCurrenciesFunction$Action
        }
        set _filterCurrenciesFunction$Action(t) {
            this.__filterCurrenciesFunction$Action = t
        }
        get _recommendedListItemOnClick$Action() {
            return this.hasOwnProperty("__recommendedListItemOnClick$Action") || (this.__recommendedListItemOnClick$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    v = this.idService;
                return r.Logger.startActiveSpan("RecommendedListItemOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "RecommendedListItemOnClick"), o.setAttribute("outsystems.function.key", "7bcd2bfc-11f4-411f-9f16-58032e0ee43f"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("RecommendedListItemOnClick"), t = e.callContext(t), r.Flow.executeAsyncFlow(function() {
                            return f.setSelectedCurrencyCode(i.variables.filteredRecommendedCurrenciesVar.getCurrent(t.iterationContext).codeAttr), r.Logger.startActiveSpan("RudderStack", function(c) {
                                c && (c.setAttribute("code.function", "RudderStack"), c.setAttribute("outsystems.function.key", "30475e20-91dc-4312-b42e-e64b4a7e78fc"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteJSNode(z, "RudderStack", "RecommendedListItemOnClick", null, function(u) {}, {}, {})
                                } finally {
                                    c && c.end()
                                }
                            }, 1), e.nextStepEvent$Action(t)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__recommendedListItemOnClick$Action
        }
        set _recommendedListItemOnClick$Action(t) {
            this.__recommendedListItemOnClick$Action = t
        }
        get _otherCurrenciesItemOnClick$Action() {
            return this.hasOwnProperty("__otherCurrenciesItemOnClick$Action") || (this.__otherCurrenciesItemOnClick$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    v = this.idService;
                return r.Logger.startActiveSpan("OtherCurrenciesItemOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "OtherCurrenciesItemOnClick"), o.setAttribute("outsystems.function.key", "b838397e-9882-4c10-ae6f-4574c77ed208"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OtherCurrenciesItemOnClick"), t = e.callContext(t), r.Flow.executeAsyncFlow(function() {
                            return f.setSelectedCurrencyCode(i.variables.filteredOtherCurrenciesVar.getCurrent(t.iterationContext).codeAttr), r.Logger.startActiveSpan("RudderStack", function(c) {
                                c && (c.setAttribute("code.function", "RudderStack"), c.setAttribute("outsystems.function.key", "fc837aaa-b438-4fd9-9c3b-2a60d4f26403"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteJSNode(G, "RudderStack", "OtherCurrenciesItemOnClick", null, function(u) {}, {}, {})
                                } finally {
                                    c && c.end()
                                }
                            }, 1), e.nextStepEvent$Action(t)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__otherCurrenciesItemOnClick$Action
        }
        set _otherCurrenciesItemOnClick$Action(t) {
            this.__otherCurrenciesItemOnClick$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    v = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "db431d01-adee-411c-b3fe-ff29641ee35f"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var c = new r.DataTypes.VariableHolder,
                            u = new r.DataTypes.VariableHolder,
                            g = new r.DataTypes.VariableHolder,
                            C = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(E))),
                            n = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(E)));
                        return r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (f.getRawLandingCompanyResponse() === r.BuiltinFunctions.nullTextIdentifier()) return r.Flow.executeSequence(function() {
                                    return i.variables.landingCompanyVar.landing_companyAttr.gaming_companyAttr.legal_allowed_currenciesAttr.isEmpty && r.BuiltinFunctions.length(f.getAuthToken()) > 1 ? (i.flush(), T.sendGetSetting$Action(t).then(function(s) {
                                        u.value = s
                                    }).then(function() {
                                        return g.value = r.Logger.startActiveSpan("LandingCompanyPayload", function(s) {
                                            s && (s.setAttribute("code.function", "LandingCompanyPayload"), s.setAttribute("outsystems.function.key", "fb544b18-75a6-4f46-8802-c565a31ec661"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return e.safeExecuteJSNode(M, "LandingCompanyPayload", "OnReady", {
                                                    CountryCode: r.DataConversion.JSNodeParamConverter.to(u.value.getSettingResponseOut.country_codeAttr, r.DataTypes.DataTypes.Text),
                                                    Payload: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                                }, function(h) {
                                                    var P = new(e.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.OnReady$landingCompanyPayloadJSResult"));
                                                    return P.payloadOut = r.DataConversion.JSNodeParamConverter.from(h.Payload, r.DataTypes.DataTypes.Text), P
                                                }, {}, {})
                                            } finally {
                                                s && s.end()
                                            }
                                        }, 1), i.flush(), T.derivApiSendMessage$Action(g.value.payloadOut, "", !1, t).then(function(s) {
                                            c.value = s
                                        })
                                    }).then(function() {
                                        C.value.dataOut = r.JSONUtils.deserializeFromJSON(c.value.responseOut, E, !1), i.variables.landingCompanyVar = C.value.dataOut, f.setRawLandingCompanyResponse(c.value.responseOut), f.setSelectedCitizenship(u.value.getSettingResponseOut.citizenAttr), e._filterCurrenciesFunction$Action(t)
                                    })) : r.Flow.returnAsync()
                                });
                                if (i.variables.landingCompanyVar.landing_companyAttr.gaming_companyAttr.legal_allowed_currenciesAttr.isEmpty && r.BuiltinFunctions.length(f.getAuthToken()) > 1) n.value.dataOut = r.JSONUtils.deserializeFromJSON(f.getRawLandingCompanyResponse(), E, !1), i.variables.landingCompanyVar = n.value.dataOut, e._filterCurrenciesFunction$Action(t);
                                else return r.Flow.returnAsync()
                            }).then(function() {
                                i.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        filterCurrenciesFunction$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("FilterCurrenciesFunction__proxy", function(e) {
                e && (e.setAttribute("code.function", "FilterCurrenciesFunction"), e.setAttribute("outsystems.function.key", "2c16e74d-90fa-4350-897f-94b5d2249055"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._filterCurrenciesFunction$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        recommendedListItemOnClick$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("RecommendedListItemOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "RecommendedListItemOnClick"), e.setAttribute("outsystems.function.key", "7bcd2bfc-11f4-411f-9f16-58032e0ee43f"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._recommendedListItemOnClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        otherCurrenciesItemOnClick$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OtherCurrenciesItemOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OtherCurrenciesItemOnClick"), e.setAttribute("outsystems.function.key", "b838397e-9882-4c10-ae6f-4574c77ed208"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._otherCurrenciesItemOnClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onReady$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "db431d01-adee-411c-b3fe-ff29641ee35f"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get nextStepEvent$Action() {
            return this.hasOwnProperty("_nextStepEvent$Action") || (this._nextStepEvent$Action = function() {
                return Promise.resolve()
            }), this._nextStepEvent$Action
        }
        set nextStepEvent$Action(t) {
            this._nextStepEvent$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    d(a, "ControllerInner");
    let y = a;
    F = y, F.registerVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.FilterCurrenciesFunction$javaScript1JSResult", [{
        name: "RecommendedCurrencies",
        attrName: "recommendedCurrenciesOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "OtherCurrencies",
        attrName: "otherCurrenciesOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), F.registerVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.OnReady$landingCompanyPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }])
}
var F, oe = new r.Controller.ControllerFactory(F, X);
var N = S,
    w = O.PlaceholderContent,
    se = O.IteratorPlaceholderContent,
    R = class R extends I.BaseWebBlock {
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
            return [W]
        }
        get modelFactory() {
            return te
        }
        get controllerFactory() {
            return oe
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                m = this.controller,
                t = this.idService,
                i = m.validationService,
                e = this.widgetsRecordProvider,
                v = m.callContext(),
                o = R.ifWidget,
                c = R.textWidget,
                u = R.asPrimitiveValue,
                g = R.getTranslation,
                C = this;
            return l.createElement("div", this.getRootNodeProperties(), o(a.variables.isLoadingVar, !1, this, function() {
                return [l.createElement(W, {
                    getOwnerSpan: d(function() {
                        return C.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return C.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: d(function(n) {
                            m.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: e,
                    _dependencies: []
                })]
            }, function() {
                return [l.createElement(p, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; display: flex; flex-direction: column; padding: 16px 0;"
                    },
                    style: "full-width",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "1"
                    },
                    _widgetRecordProvider: e
                }, l.createElement(B, {
                    extendedProperties: {
                        style: "color: #000; font-size: 16px;"
                    },
                    text: [c(g("q+pIc5+TSUOaZ9OTkms5Kw#Value", "Recommended"))],
                    _idProps: {
                        service: t,
                        uuid: "2"
                    },
                    _widgetRecordProvider: e
                }), l.createElement(D, {
                    animateItems: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: a.variables.filteredRecommendedCurrenciesVar,
                    style: "list list-group display-flex flex-direction-column gap-base",
                    tag: "div",
                    _idProps: {
                        service: t,
                        name: "RecommendedList"
                    },
                    _widgetRecordProvider: e,
                    placeholders: {
                        content: new se(function(n, s) {
                            return [l.createElement($, {
                                onClick: d(function() {
                                    return Promise.resolve().then(function() {
                                        var h = s.clone();
                                        return m.recommendedListItemOnClick$Action(m.callContext(h))
                                    })
                                }, "onClick"),
                                style: a.getCachedValue(n.getId("RecommendedListItem.Style"), function() {
                                    return a.variables.filteredRecommendedCurrenciesVar.getCurrent(s.iterationContext).codeAttr === f.getSelectedCurrencyCode() ? "currency-list--selected" : "currency-list"
                                }, function() {
                                    return a.variables.filteredRecommendedCurrenciesVar.getCurrent(s.iterationContext).codeAttr
                                }, function() {
                                    return f.getSelectedCurrencyCode()
                                }),
                                triggerActionOnFullSwipeLeft: !1,
                                triggerActionOnFullSwipeRight: !1,
                                _idProps: {
                                    service: n,
                                    name: "RecommendedListItem"
                                },
                                _widgetRecordProvider: e,
                                placeholders: {
                                    leftActions: w.Empty,
                                    content: new w(function() {
                                        return [l.createElement(p, {
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
                                                service: n,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: e
                                        }, l.createElement(p, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            style: "display-flex align-items-center gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: n,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: e
                                        }, l.createElement(A, {
                                            gridProperties: {
                                                width: "24px"
                                            },
                                            type: 1,
                                            url: a.variables.filteredRecommendedCurrenciesVar.getCurrent(s.iterationContext).iconAttr,
                                            _idProps: {
                                                service: n,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: e
                                        }), l.createElement(J, {
                                            extendedProperties: {
                                                style: "color: #101213; font-weight: 500;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent",
                                                marginLeft: "16px"
                                            },
                                            style: "display-flex cursor-pointer",
                                            _idProps: {
                                                service: n,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: e
                                        }, l.createElement(x, {
                                            extendedProperties: {
                                                style: "font-weight: 500;"
                                            },
                                            style: "curreny-name",
                                            value: a.variables.filteredRecommendedCurrenciesVar.getCurrent(s.iterationContext).nameAttr,
                                            _idProps: {
                                                service: n,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: e
                                        }), l.createElement(x, {
                                            extendedProperties: {
                                                style: "font-weight: 500;"
                                            },
                                            gridProperties: {
                                                marginLeft: "2px"
                                            },
                                            style: "curreny-name",
                                            value: "(" + a.variables.filteredRecommendedCurrenciesVar.getCurrent(s.iterationContext).codeAttr + ")",
                                            _idProps: {
                                                service: n,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: e
                                        }))), l.createElement(p, {
                                            align: 0,
                                            animate: !1,
                                            style: "list-item-icon display-flex",
                                            visible: !0,
                                            _idProps: {
                                                service: n,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: e
                                        }, o(f.getSelectedCurrencyCode() === a.variables.filteredRecommendedCurrenciesVar.getCurrent(s.iterationContext).codeAttr, !1, this, function() {
                                            return [l.createElement(A, {
                                                image: N.Navigation.VersionedURL.getVersionedUrl("img/tradershub.roundedblackcheckmark.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        }, function() {
                                            return [l.createElement(A, {
                                                image: N.Navigation.VersionedURL.getVersionedUrl("img/tradershub.rightIcon.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        })))]
                                    }),
                                    rightActions: w.Empty
                                },
                                _dependencies: [u(f.getSelectedCurrencyCode()), u(a.variables.filteredRecommendedCurrenciesVar.getCurrent(s.iterationContext).codeAttr), u(a.variables.filteredRecommendedCurrenciesVar.getCurrent(s.iterationContext).nameAttr), u(a.variables.filteredRecommendedCurrenciesVar.getCurrent(s.iterationContext).iconAttr)]
                            })]
                        }, v, t, "1")
                    },
                    _dependencies: [u(f.getSelectedCurrencyCode())]
                }), l.createElement(B, {
                    extendedProperties: {
                        style: "color: #000; font-size: 16px;"
                    },
                    text: [c(g("ib4gbC+_+0Gm2pyq1JbhWw#Value", "Other"))],
                    _idProps: {
                        service: t,
                        uuid: "14"
                    },
                    _widgetRecordProvider: e
                }), l.createElement(D, {
                    animateItems: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: a.variables.filteredOtherCurrenciesVar,
                    style: "list list-group display-flex flex-direction-column gap-base",
                    tag: "div",
                    _idProps: {
                        service: t,
                        name: "OtherCurrencies"
                    },
                    _widgetRecordProvider: e,
                    placeholders: {
                        content: new se(function(n, s) {
                            return [l.createElement($, {
                                onClick: d(function() {
                                    return Promise.resolve().then(function() {
                                        var h = s.clone();
                                        return m.otherCurrenciesItemOnClick$Action(m.callContext(h))
                                    })
                                }, "onClick"),
                                style: a.getCachedValue(n.getId("OtherCurrenciesItem.Style"), function() {
                                    return a.variables.filteredOtherCurrenciesVar.getCurrent(s.iterationContext).codeAttr === f.getSelectedCurrencyCode() ? "currency-list--selected" : "currency-list"
                                }, function() {
                                    return a.variables.filteredOtherCurrenciesVar.getCurrent(s.iterationContext).codeAttr
                                }, function() {
                                    return f.getSelectedCurrencyCode()
                                }),
                                triggerActionOnFullSwipeLeft: !1,
                                triggerActionOnFullSwipeRight: !1,
                                _idProps: {
                                    service: n,
                                    name: "OtherCurrenciesItem"
                                },
                                _widgetRecordProvider: e,
                                placeholders: {
                                    leftActions: w.Empty,
                                    content: new w(function() {
                                        return [l.createElement(p, {
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
                                                service: n,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: e
                                        }, l.createElement(p, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            style: "display-flex align-items-center gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: n,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: e
                                        }, l.createElement(A, {
                                            gridProperties: {
                                                width: "32px"
                                            },
                                            type: 1,
                                            url: a.variables.filteredOtherCurrenciesVar.getCurrent(s.iterationContext).iconAttr,
                                            _idProps: {
                                                service: n,
                                                uuid: "19"
                                            },
                                            _widgetRecordProvider: e
                                        }), l.createElement(J, {
                                            extendedProperties: {
                                                style: "color: #101213; font-weight: 500;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent",
                                                marginLeft: "16px"
                                            },
                                            style: "display-flex",
                                            _idProps: {
                                                service: n,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: e
                                        }, l.createElement(x, {
                                            extendedProperties: {
                                                style: "font-weight: 500;"
                                            },
                                            style: "curreny-name cursor-pointer",
                                            value: a.variables.filteredOtherCurrenciesVar.getCurrent(s.iterationContext).nameAttr,
                                            _idProps: {
                                                service: n,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: e
                                        }), l.createElement(x, {
                                            extendedProperties: {
                                                style: "font-weight: 500;"
                                            },
                                            gridProperties: {
                                                marginLeft: "2px"
                                            },
                                            style: "curreny-name",
                                            value: "(" + a.variables.filteredOtherCurrenciesVar.getCurrent(s.iterationContext).codeAttr + ")",
                                            _idProps: {
                                                service: n,
                                                uuid: "22"
                                            },
                                            _widgetRecordProvider: e
                                        }))), l.createElement(p, {
                                            align: 0,
                                            animate: !1,
                                            style: "list-item-icon display-flex",
                                            visible: !0,
                                            _idProps: {
                                                service: n,
                                                uuid: "23"
                                            },
                                            _widgetRecordProvider: e
                                        }, o(f.getSelectedCurrencyCode() === a.variables.filteredOtherCurrenciesVar.getCurrent(s.iterationContext).codeAttr, !1, this, function() {
                                            return [l.createElement(A, {
                                                image: N.Navigation.VersionedURL.getVersionedUrl("img/tradershub.roundedblackcheckmark.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "24"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        }, function() {
                                            return [l.createElement(A, {
                                                image: N.Navigation.VersionedURL.getVersionedUrl("img/tradershub.rightIcon.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "25"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        })))]
                                    }),
                                    rightActions: w.Empty
                                },
                                _dependencies: [u(f.getSelectedCurrencyCode()), u(a.variables.filteredOtherCurrenciesVar.getCurrent(s.iterationContext).codeAttr), u(a.variables.filteredOtherCurrenciesVar.getCurrent(s.iterationContext).nameAttr), u(a.variables.filteredOtherCurrenciesVar.getCurrent(s.iterationContext).iconAttr)]
                            })]
                        }, v, t, "2")
                    },
                    _dependencies: [u(f.getSelectedCurrencyCode())]
                }))]
            }))
        }
    };
d(R, "View");
var j = R,
    q = j;
var ce = S,
    le = O.PlaceholderContent,
    qe = O.IteratorPlaceholderContent,
    _ = class _ extends I.BaseWebScreen {
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
            return [H, q]
        }
        get modelFactory() {
            return re
        }
        get controllerFactory() {
            return ne
        }
        get title() {
            let a = this.model,
                m = this.controller,
                t = this.idService,
                i = m.validationService,
                e = m.callContext(),
                v = _.asPrimitiveValue,
                o = _.getTranslation,
                c = this;
            return ce.Injector.resolve(ce.ServiceNames.TranslationsService).getMessage("A4yj35UF7US2sHLuizv_8g#TitleExpression.-2098612361.1", "Currency selection | Deriv")
        }
        internalRender() {
            let a = this.model,
                m = this.controller,
                t = this.idService,
                i = m.validationService,
                e = this.widgetsRecordProvider,
                v = m.callContext(),
                o = _.ifWidget,
                c = _.textWidget,
                u = _.asPrimitiveValue,
                g = _.getTranslation,
                C = this;
            return V.createElement("div", this.getRootNodeProperties(), V.createElement(H, {
                getOwnerSpan: d(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: d(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Account Currency",
                    Analytics: a.getCachedValue(t.getId("t5AZM2y2GkeaV0n0n4D55g.Analytics"), function() {
                        return function() {
                            var n = new Q;
                            return n.stepCodenameAttr = "account_currency", n.stepNumberAttr = "0", n
                        }()
                    })
                },
                events: {
                    _handleError: d(function(n) {
                        m.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: e,
                placeholders: {
                    content: new le(function() {
                        return [V.createElement(q, {
                            getOwnerSpan: d(function() {
                                return C.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: d(function() {
                                return C.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: d(function(n) {
                                    m.handleError(n)
                                }, "_handleError"),
                                nextStepEvent$Action: d(function() {
                                    var n = v.clone();
                                    m.accountCurrencyBlockNextStepEvent$Action(m.callContext(n))
                                }, "nextStepEvent$Action")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: e,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
d(_, "View");
var K = _,
    Ke = K;
export {
    Ke as
    default
};