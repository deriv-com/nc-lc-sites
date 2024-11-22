import {
    a as B
} from "./_oschunk-CHDRSEFP.js";
import {
    a as U
} from "./_oschunk-Y45M2O2K.js";
import {
    a as v,
    c as G,
    d as b
} from "./_oschunk-27GDEXUT.js";
import {
    Bc as V,
    Gf as g,
    Of as F,
    Pf as _,
    Sb as O,
    ud as p
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as z
} from "./_oschunk-NTQBNJ73.js";
import {
    a as x,
    b as H,
    c as A
} from "./_oschunk-DVBKI63I.js";
var X = {
        "tk2AVO3sjUu0VGDL_Ce+jA#Value": "Transfert",
        "uPBzeqBKgE69LZnOCO4bew#Value": "Voir les sp\xE9cifications",
        "6IiGdsEYP06nsIpsfm4H7Q#Value": "Comptes disponibles",
        "K34fG267aE23l2enpmqezA#Value": "Mes comptes",
        "gcgQSS26UkK60r3pOIaf5g#Value": "Tradez des positions plus importantes avec moins de capital sur un large \xE9ventail de march\xE9s mondiaux.",
        "wDlKcbQEL0SpHAWlCti6Kw#Value": "trading de CFD"
    },
    j = {
        "fr-FR": {
            translations: X,
            isRTL: !1
        }
    };

function $(f, T, w, r) {
    let o = JSON.parse(f.TradingPlatformStatus).trading_platform_status,
        e = f.SelectedPlatform,
        i = o.find(a => a.platform === e);
    f.BOLockStatus = i == null ? void 0 : i.status
}
A($, "default");

function L(f, T, w, r) {
    let e = JSON.parse(f.CreatedAccounts).find(i => i.status);
    f.HasStatus = !!e, f.BOLockStatus = e ? e.status : ""
}
A(L, "default");

function R(f, T, w, r) {
    f.Payload = JSON.stringify({
        platform: "ctrader",
        account_type: f.AccountType,
        market_type: f.MarketType,
        company: f.Shortcode
    })
}
A(R, "default");

function E(f, T, w, r) {
    let o = JSON.parse(f.Response),
        e = o.authorize.loginid,
        i = {
            [e]: H(x({}, o.authorize.account_list[0]), {
                token: f.Token,
                email: o.authorize.email,
                session_start: new Date().getTime(),
                excluded_until: "",
                landing_company_name: o.authorize.landing_company_name,
                residence: o.authorize.country,
                balance: o.authorize.balance,
                accepted_bch: 0
            })
        };
    if (window.JSCookies) {
        let s = new Date(new Date().getTime() + 6e4);
        JSCookies.set("client.accounts", JSON.stringify(i), {
            domain: ".deriv.com",
            expires: s,
            secure: !0
        }), JSCookies.set("active_loginid", e, {
            domain: ".deriv.com",
            expires: s,
            secure: !0
        })
    }
    let a = f.RedirectTo;
    setTimeout(() => {
        if (window.location.hostname === "hub.deriv.com") return window.location.href = `https://app.deriv.com/redirect?action=redirect&redirect_to=${a}`;
        window.location.href = `https://staging-app.deriv.com/redirect?action=redirect&redirect_to=${a}`
    }, 100)
}
A(E, "default");

function P(f, T, w, r) {
    f.FilteredData = JSON.stringify(JSON.parse(f.CreatedAccounts).find(o => o.identifier === JSON.parse(f.SelectedAccount).identifier))
}
A(P, "default");

function I(f, T, w, r) {
    f.FilteredData = JSON.stringify(JSON.parse(f.CreatedAccounts).find(o => o.identifier === JSON.parse(f.SelectedAccount).identifier))
}
A(I, "default");

function J(f, T, w, r) {
    let o = f.ProductIdentifier,
        i = JSON.parse(f.CFDAccounts).find(a => a.CFDAccounts.ProductIdentifier === o);
    f.SelectedAvailableAccount = JSON.stringify(i)
}
A(J, "default");

function M(f, T, w, r) {
    var i;
    let o = JSON.parse(f.AccountStatusResponse),
        e = ((i = o == null ? void 0 : o.get_account_status) == null ? void 0 : i.status) || [];
    f.IsMT5PasswordSet = !e.includes("mt5_password_not_set"), f.IsDxtradePasswordSet = !e.includes("dxtrade_password_not_set")
}
A(M, "default");
var t = z; {
    let T = class T extends t.Controller.BaseViewController {
        constructor(r, o, e) {
            super(r, o, e, j);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCFDAccounts$AggrRefresh: 0,
                getMockData$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCFDAccounts$AggrRefresh: [],
                getMockData$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getCFDAccounts$AggrRefresh() {
            return this.hasOwnProperty("_getCFDAccounts$AggrRefresh") || (this._getCFDAccounts$AggrRefresh = function() {
                var r = function(o, e, u) {
                    var a = this.model,
                        s = this.controller,
                        u = s.callContext(u);
                    return s.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCFDAccounts", "screenservices/tradershub/CFDFlows/CFDs/ScreenDataSetGetCFDAccounts", "i1AITAe1GDlGnVTWZhXZHw", o, e, function(d) {
                        a.variables.getCFDAccountsAggr.dataFetchStatusAttr = d
                    }, function(d) {
                        a.variables.getCFDAccountsAggr.replaceWith(t.DataConversion.ServerDataConverter.from(d, a.variables.getCFDAccountsAggr.constructor))
                    }, void 0, void 0, void 0, u, void 0, !0).then(function() {
                        return s._onAfterFetch$Action(s.callContext(u))
                    })
                }.bind(this);
                return t.Logger.startActiveSpan("GetCFDAccounts", function(o) {
                    return o && (o.setAttribute("code.function", "GetCFDAccounts"), o.setAttribute("outsystems.function.key", "6b0f180b-c987-4938-886f-58b238635e58"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), t.Flow.tryFinally(function() {
                        return r()
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getCFDAccounts$AggrRefresh
        }
        set getCFDAccounts$AggrRefresh(r) {
            this._getCFDAccounts$AggrRefresh = r
        }
        get getMockData$AggrRefresh() {
            return this.hasOwnProperty("_getMockData$AggrRefresh") || (this._getMockData$AggrRefresh = function() {
                var r = function(o, e, u) {
                    var a = this.model,
                        s = this.controller,
                        u = s.callContext(u);
                    return s.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetMockData", "screenservices/tradershub/CFDFlows/CFDs/ScreenDataSetGetMockData", "_mU2tGXf0msCUB09Z2_epw", o, e, function(d) {
                        a.variables.getMockDataAggr.dataFetchStatusAttr = d
                    }, function(d) {
                        a.variables.getMockDataAggr.replaceWith(t.DataConversion.ServerDataConverter.from(d, a.variables.getMockDataAggr.constructor))
                    }, void 0, void 0, void 0, u, void 0, !0)
                }.bind(this);
                return t.Logger.startActiveSpan("GetMockData", function(o) {
                    return o && (o.setAttribute("code.function", "GetMockData"), o.setAttribute("outsystems.function.key", "9e0575cb-7ada-4155-b9d3-caeabc525b32"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), t.Flow.tryFinally(function() {
                        return r()
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getMockData$AggrRefresh
        }
        set getMockData$AggrRefresh(r) {
            this._getMockData$AggrRefresh = r
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getCFDAccounts$AggrRefresh", "getMockData$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _getDXTradeAccounts$Action() {
            return this.hasOwnProperty("__getDXTradeAccounts$Action") || (this.__getDXTradeAccounts$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("GetDXTradeAccounts", function(a) {
                    return a && (a.setAttribute("code.function", "GetDXTradeAccounts"), a.setAttribute("outsystems.function.key", "05583aba-2b30-4976-8d88-b5faf4ed05da"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("GetDXTradeAccounts"), r = e.callContext(r);
                        var s = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder,
                            n = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(F)));
                        return t.Flow.executeAsyncFlow(function() {
                            return o.flush(), b.createdDxTradeAccounts$Action(t.DataConversion.JSConversions.typeConvertRecordList(o.variables.getCFDAccountsAggr.listOut, new _, function(c, l) {
                                return l = c.cFDAccountsAttr, l
                            }), o.variables.accountTypeVar, r).then(function(c) {
                                u.value = c
                            }).then(function() {
                                return n.value.dataOut = t.JSONUtils.deserializeFromJSON(u.value.responseOut, F, !1), o.flush(), b.availableDxtradeAccounts$Action(t.DataConversion.JSConversions.typeConvertRecordList(o.variables.getCFDAccountsAggr.listOut, new _, function(c, l) {
                                    return l = c.cFDAccountsAttr, l
                                }), r).then(function(c) {
                                    d.value = c
                                })
                            }).then(function() {
                                s.value = b.filterAvailableAccounts$Action(d.value.responseOut, u.value.responseOut, r), o.variables.createdDXTraderAccountsVar = n.value.dataOut, o.variables.availableDXTraderAccountsVar = s.value.filteredAvailableAccountsOut
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__getDXTradeAccounts$Action
        }
        set _getDXTradeAccounts$Action(r) {
            this.__getDXTradeAccounts$Action = r
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("OnInitialize", function(a) {
                    a && (a.setAttribute("code.function", "OnInitialize"), a.setAttribute("outsystems.function.key", "1f4db8e7-7535-4034-b3ea-f7c82a09a160"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), r = e.callContext(r);
                        var s = new t.DataTypes.VariableHolder;
                        if (s.value = b.featureFlagValueByName$Action("Options", r), !s.value.isEnabledOut) return t.Navigation.navigateTo(t.Navigation.generateScreenURL("https://app.deriv.com", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(r) {
            this.__onInitialize$Action = r
        }
        get _availableAccountOnClick$Action() {
            return this.hasOwnProperty("__availableAccountOnClick$Action") || (this.__availableAccountOnClick$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("AvailableAccountOnClick", function(a) {
                    return a && (a.setAttribute("code.function", "AvailableAccountOnClick"), a.setAttribute("outsystems.function.key", "432a04cd-6269-4401-b5dc-957f8e8f2fa1"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("AvailableAccountOnClick"), r = e.callContext(r);
                        var s = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                return v.getAuthToken() !== "" ? (o.flush(), b.tradingPlatformStatus$Action(r).then(function(n) {
                                    s.value = n
                                }).then(function() {
                                    u.value = t.Logger.startActiveSpan("CheckTradingPlatformStatus", function(n) {
                                        n && (n.setAttribute("code.function", "CheckTradingPlatformStatus"), n.setAttribute("outsystems.function.key", "d632df1f-56c7-4c12-9222-37b850f957cb"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return e.safeExecuteJSNode($, "CheckTradingPlatformStatus", "AvailableAccountOnClick", {
                                                TradingPlatformStatus: t.DataConversion.JSNodeParamConverter.to(s.value.responseOut, t.DataTypes.DataTypes.Text),
                                                SelectedPlatform: t.DataConversion.JSNodeParamConverter.to(o.variables.availableCFDAccountsVar.getCurrent(r.iterationContext).platformAttr, t.DataTypes.DataTypes.Text),
                                                BOLockStatus: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                            }, function(c) {
                                                var l = new(e.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.AvailableAccountOnClick$checkTradingPlatformStatusJSResult"));
                                                return l.bOLockStatusOut = t.DataConversion.JSNodeParamConverter.from(c.BOLockStatus, t.DataTypes.DataTypes.Text), l
                                            }, {}, {})
                                        } finally {
                                            n && n.end()
                                        }
                                    }, 1)
                                }).then(function() {
                                    return t.Flow.executeSequence(function() {
                                        if (u.value.bOLockStatusOut !== "active") o.variables.selectedAccountVar.statusAttr = u.value.bOLockStatusOut, o.variables.showModalVar = "ShowBOLocksModal";
                                        else return t.Flow.executeSequence(function() {
                                            return o.variables.availableCFDAccountsVar.getCurrent(r.iterationContext).identifierAttr === "ctrader_standard" ? e._cTraderAccountCreation$Action(o.variables.availableCFDAccountsVar.getCurrent(r.iterationContext).market_typeAttr, o.variables.availableCFDAccountsVar.getCurrent(r.iterationContext).shortcodeAttr, r) : (d.value = t.Logger.startActiveSpan("FindBOLockStatus", function(n) {
                                                n && (n.setAttribute("code.function", "FindBOLockStatus"), n.setAttribute("outsystems.function.key", "e62446a3-cac5-42d0-a2de-b8f16673c1e8"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return e.safeExecuteJSNode(L, "FindBOLockStatus", "AvailableAccountOnClick", {
                                                        CreatedAccounts: t.DataConversion.JSNodeParamConverter.to(v.getCreatedCFDAccounts(), t.DataTypes.DataTypes.Text),
                                                        BOLockStatus: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                                        HasStatus: t.DataConversion.JSNodeParamConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                                                    }, function(c) {
                                                        var l = new(e.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.AvailableAccountOnClick$findBOLockStatusJSResult"));
                                                        return l.bOLockStatusOut = t.DataConversion.JSNodeParamConverter.from(c.BOLockStatus, t.DataTypes.DataTypes.Text), l.hasStatusOut = t.DataConversion.JSNodeParamConverter.from(c.HasStatus, t.DataTypes.DataTypes.Boolean), l
                                                    }, {}, {})
                                                } finally {
                                                    n && n.end()
                                                }
                                            }, 1), t.Flow.executeSequence(function() {
                                                if (d.value.hasStatusOut) o.variables.selectedAccountVar.statusAttr = d.value.bOLockStatusOut, o.variables.showModalVar = "ShowBOLocksModal";
                                                else return e._checkIsPasswordSet$Action(r).then(function() {
                                                    o.variables.availableCFDAccountsVar.getCurrent(r.iterationContext).requiresVerificationAttr ? (o.variables.showModalVar = "ShowVerificationModal", o.variables.profileSetupVar = o.variables.availableCFDAccountsVar.getCurrent(r.iterationContext).profileSetupAttr, o.variables.selectedAccountVar = t.DataConversion.JSConversions.typeConvertRecord(o.variables.availableCFDAccountsVar.getCurrent(r.iterationContext), new O, function(n, c) {
                                                        return c.market_typeAttr = n.market_typeAttr, c.platformAttr = n.platformAttr, c.nameAttr = n.nameAttr, c.productAttr = n.productAttr, c.sub_account_typeAttr = n.sub_account_typeAttr, c.identifierAttr = n.identifierAttr, c.iconAttr = n.iconAttr, c.labelAttr = n.labelAttr, c.descriptionAttr = n.descriptionAttr, c.shortcodeAttr = n.shortcodeAttr, c
                                                    })) : (o.variables.selectedAccountVar = t.DataConversion.JSConversions.typeConvertRecord(o.variables.availableCFDAccountsVar.getCurrent(r.iterationContext), new O, function(n, c) {
                                                        return c.market_typeAttr = n.market_typeAttr, c.platformAttr = n.platformAttr, c.nameAttr = n.nameAttr, c.productAttr = n.productAttr, c.sub_account_typeAttr = n.sub_account_typeAttr, c.identifierAttr = n.identifierAttr, c.iconAttr = n.iconAttr, c.labelAttr = n.labelAttr, c.descriptionAttr = n.descriptionAttr, c.shortcodeAttr = n.shortcodeAttr, c
                                                    }), o.variables.selectedAvailableAccountVar = o.variables.availableCFDAccountsVar.getCurrent(r.iterationContext), o.variables.showModalVar = "ShowPasswordModal")
                                                })
                                            }))
                                        })
                                    })
                                })) : t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "tradingSpecification", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Fade), r, !0))
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__availableAccountOnClick$Action
        }
        set _availableAccountOnClick$Action(r) {
            this.__availableAccountOnClick$Action = r
        }
        get _ctraderAppOnClick$Action() {
            return this.hasOwnProperty("__ctraderAppOnClick$Action") || (this.__ctraderAppOnClick$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("CtraderAppOnClick", function(a) {
                    a && (a.setAttribute("code.function", "CtraderAppOnClick"), a.setAttribute("outsystems.function.key", "51dcf5eb-d7ff-48bf-b00f-8eebaaa1074a"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("CtraderAppOnClick"), r = e.callContext(r), b.openDeepLink$Action("ctrader", "", "", r)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__ctraderAppOnClick$Action
        }
        set _ctraderAppOnClick$Action(r) {
            this.__ctraderAppOnClick$Action = r
        }
        get _closeModal$Action() {
            return this.hasOwnProperty("__closeModal$Action") || (this.__closeModal$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("CloseModal", function(a) {
                    a && (a.setAttribute("code.function", "CloseModal"), a.setAttribute("outsystems.function.key", "71f432b0-0acd-4772-a807-f2b8edb18362"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("CloseModal"), r = e.callContext(r), o.variables.showModalVar = ""
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__closeModal$Action
        }
        set _closeModal$Action(r) {
            this.__closeModal$Action = r
        }
        get _handleForgotPassword$Action() {
            return this.hasOwnProperty("__handleForgotPassword$Action") || (this.__handleForgotPassword$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("HandleForgotPassword", function(a) {
                    return a && (a.setAttribute("code.function", "HandleForgotPassword"), a.setAttribute("outsystems.function.key", "7279c1fe-8a35-4a1a-9e16-b3b3cdcdb85f"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("HandleForgotPassword"), r = e.callContext(r);
                        var s = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return o.flush(), b.sendGetSetting$Action(r).then(function(d) {
                                s.value = d
                            }).then(function() {
                                return o.flush(), b.verifyEmail$Action(o.variables.selectedAccountVar.platformAttr === "dxtrade" ? "trading_platform_dxtrade_password_reset" : "trading_platform_mt5_password_reset", s.value.getSettingResponseOut.emailAttr, r).then(function(d) {
                                    u.value = d
                                })
                            }).then(function() {
                                o.variables.showModalVar = "", v.setSignupEmail(s.value.getSettingResponseOut.emailAttr), o.variables.showModalVar = "", v.settrading_platform_dxtrade_password_reset(""), v.settrading_platform_mt5_password_reset("")
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__handleForgotPassword$Action
        }
        set _handleForgotPassword$Action(r) {
            this.__handleForgotPassword$Action = r
        }
        get _cTraderAccountCreation$Action() {
            return this.hasOwnProperty("__cTraderAccountCreation$Action") || (this.__cTraderAccountCreation$Action = function(r, o, e) {
                var i = this.model,
                    a = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("CTraderAccountCreation", function(u) {
                    return u && (u.setAttribute("code.function", "CTraderAccountCreation"), u.setAttribute("outsystems.function.key", "7b200fc3-08db-4662-8039-bc73c4e85a67"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        a.ensureControllerAlive("CTraderAccountCreation"), e = a.callContext(e);
                        var d = new t.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.CTraderAccountCreation$vars")));
                        d.value.marketTypeInLocal = r, d.value.shortcodeInLocal = o;
                        var n = new t.DataTypes.VariableHolder,
                            c = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return i.variables.accountCreationLoadingVar = !0, i.variables.showModalVar = "ShowCTraderTradeModal", c.value = t.Logger.startActiveSpan("GeneratePayload", function(l) {
                                l && (l.setAttribute("code.function", "GeneratePayload"), l.setAttribute("outsystems.function.key", "240a2495-8603-41a8-8449-cf99465ddfaa"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return a.safeExecuteJSNode(R, "GeneratePayload", "CTraderAccountCreation", {
                                        AccountType: t.DataConversion.JSNodeParamConverter.to(v.getAccountType(), t.DataTypes.DataTypes.Text),
                                        Shortcode: t.DataConversion.JSNodeParamConverter.to(d.value.shortcodeInLocal, t.DataTypes.DataTypes.Text),
                                        MarketType: t.DataConversion.JSNodeParamConverter.to(d.value.marketTypeInLocal, t.DataTypes.DataTypes.Text),
                                        Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                    }, function(h) {
                                        var D = new(a.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.CTraderAccountCreation$generatePayloadJSResult"));
                                        return D.payloadOut = t.DataConversion.JSNodeParamConverter.from(h.Payload, t.DataTypes.DataTypes.Text), D
                                    }, {}, {})
                                } finally {
                                    l && l.end()
                                }
                            }, 1), i.flush(), b.derivApiSendMessage$Action(c.value.payloadOut, "trading_platform_new_account", !0, e).then(function(l) {
                                n.value = l
                            }).then(function() {
                                return t.Flow.executeSequence(function() {
                                    if (n.value.isErrorOut) t.FeedbackMessageService.showFeedbackMessage(n.value.errorMessageOut, 3), i.variables.showModalVar = "ShowCTraderTradeModal", i.variables.accountCreationLoadingVar = !1;
                                    else return a._getCTraderAccounts$Action(e).then(function() {
                                        a._combineAccounts$Action(e), t.FeedbackMessageService.showFeedbackMessage("Your cTrader account is ready.", 1), i.variables.accountCreationLoadingVar = !1
                                    })
                                })
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__cTraderAccountCreation$Action
        }
        set _cTraderAccountCreation$Action(r) {
            this.__cTraderAccountCreation$Action = r
        }
        get _redirectToAccounts$Action() {
            return this.hasOwnProperty("__redirectToAccounts$Action") || (this.__redirectToAccounts$Action = function(r, o) {
                var e = this.model,
                    i = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("RedirectToAccounts", function(s) {
                    return s && (s.setAttribute("code.function", "RedirectToAccounts"), s.setAttribute("outsystems.function.key", "880dce88-67a2-4b03-ab9f-939ed86d4fe3"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        i.ensureControllerAlive("RedirectToAccounts"), o = i.callContext(o);
                        var u = new t.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.RedirectToAccounts$vars")));
                        u.value.redirectToInLocal = r;
                        var d = new t.DataTypes.VariableHolder,
                            n = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType);
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                if (!e.variables.profileSetupVar.getCurrent(o.iterationContext).isDisabledAttr) return e.flush(), b.sendAuthorize$Action(!1, o).then(function(c) {
                                    d.value = c
                                }).then(function() {
                                    n.value.jSONOut = t.JSONUtils.serializeToJSON(d.value.responseOut, !1, !1), t.Logger.startActiveSpan("SyncLocalStorage", function(c) {
                                        c && (c.setAttribute("code.function", "SyncLocalStorage"), c.setAttribute("outsystems.function.key", "e4c8dca0-50ef-43b1-a225-3075a184cc1c"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return i.safeExecuteJSNode(E, "SyncLocalStorage", "RedirectToAccounts", {
                                                Token: t.DataConversion.JSNodeParamConverter.to(v.getAuthToken(), t.DataTypes.DataTypes.Text),
                                                Response: t.DataConversion.JSNodeParamConverter.to(n.value.jSONOut, t.DataTypes.DataTypes.Text),
                                                RedirectTo: t.DataConversion.JSNodeParamConverter.to(u.value.redirectToInLocal, t.DataTypes.DataTypes.Text)
                                            }, function(l) {}, {}, {})
                                        } finally {
                                            c && c.end()
                                        }
                                    }, 1)
                                })
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__redirectToAccounts$Action
        }
        set _redirectToAccounts$Action(r) {
            this.__redirectToAccounts$Action = r
        }
        get _getCTraderAccounts$Action() {
            return this.hasOwnProperty("__getCTraderAccounts$Action") || (this.__getCTraderAccounts$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("GetCTraderAccounts", function(a) {
                    return a && (a.setAttribute("code.function", "GetCTraderAccounts"), a.setAttribute("outsystems.function.key", "a14f502c-5fee-4da4-9343-80ca7006980e"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("GetCTraderAccounts"), r = e.callContext(r);
                        var s = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder,
                            n = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(F))),
                            c = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(g)));
                        return t.Flow.executeAsyncFlow(function() {
                            return o.flush(), b.createdCTraderAccounts$Action(t.DataConversion.JSConversions.typeConvertRecordList(o.variables.getCFDAccountsAggr.listOut, new _, function(l, h) {
                                return h = l.cFDAccountsAttr, h
                            }), o.variables.accountTypeVar, r).then(function(l) {
                                s.value = l
                            }).then(function() {
                                return n.value.dataOut = t.JSONUtils.deserializeFromJSON(s.value.responseOut, F, !1), o.flush(), b.availableCTraderAccounts$Action(t.DataConversion.JSConversions.typeConvertRecordList(o.variables.getCFDAccountsAggr.listOut, new _, function(l, h) {
                                    return h = l.cFDAccountsAttr, h
                                }), r).then(function(l) {
                                    u.value = l
                                })
                            }).then(function() {
                                c.value.dataOut = t.JSONUtils.deserializeFromJSON(u.value.responseOut, g, !1), d.value = b.filterAvailableAccounts$Action(u.value.responseOut, s.value.responseOut, r), o.variables.createdCTraderAccountsVar = n.value.dataOut, o.variables.availableCTraderAccountsVar = d.value.filteredAvailableAccountsOut, o.variables.totalCTraderBalanceVar = s.value.totalCTraderBalanceOut, o.variables.cTraderAvailableAccountsCountVar = c.value.dataOut.getCurrent(r.iterationContext).available_countAttr
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__getCTraderAccounts$Action
        }
        set _getCTraderAccounts$Action(r) {
            this.__getCTraderAccounts$Action = r
        }
        get _getLoggedOutData$Action() {
            return this.hasOwnProperty("__getLoggedOutData$Action") || (this.__getLoggedOutData$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("GetLoggedOutData", function(a) {
                    return a && (a.setAttribute("code.function", "GetLoggedOutData"), a.setAttribute("outsystems.function.key", "aa97f3e9-6a02-4723-b9af-2b2c14946dfc"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("GetLoggedOutData"), r = e.callContext(r);
                        var s = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder,
                            n = new t.DataTypes.VariableHolder,
                            c = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            l = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(g))),
                            h = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(g))),
                            D = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(g)));
                        return t.Flow.executeAsyncFlow(function() {
                            return c.value.jSONOut = t.JSONUtils.serializeToJSON(o.variables.getCFDAccountsAggr.listOut, !1, !1), v.setCreatedCFDAccounts(c.value.jSONOut), o.flush(), b.getWebsiteStatus$Action(r).then(function() {
                                return o.flush(), b.availableMT5Accounts$Action(t.DataConversion.JSConversions.typeConvertRecordList(o.variables.getCFDAccountsAggr.listOut, new _, function(C, S) {
                                    return S = C.cFDAccountsAttr, S
                                }), r).then(function(C) {
                                    d.value = C
                                })
                            }).then(function() {
                                return h.value.dataOut = t.JSONUtils.deserializeFromJSON(d.value.responseOut, g, !1), o.flush(), b.availableDxtradeAccounts$Action(t.DataConversion.JSConversions.typeConvertRecordList(o.variables.getCFDAccountsAggr.listOut, new _, function(C, S) {
                                    return S = C.cFDAccountsAttr, S
                                }), r).then(function(C) {
                                    u.value = C
                                })
                            }).then(function() {
                                return l.value.dataOut = t.JSONUtils.deserializeFromJSON(u.value.responseOut, g, !1), o.flush(), b.availableCTraderAccounts$Action(t.DataConversion.JSConversions.typeConvertRecordList(o.variables.getCFDAccountsAggr.listOut, new _, function(C, S) {
                                    return S = C.cFDAccountsAttr, S
                                }), r).then(function(C) {
                                    n.value = C
                                })
                            }).then(function() {
                                D.value.dataOut = t.JSONUtils.deserializeFromJSON(n.value.responseOut, g, !1)
                            }).then(function() {
                                h.value.dataOut.isEmpty && l.value.dataOut.isEmpty && D.value.dataOut.isEmpty ? (v.getConfirmedNotResident() || (o.variables.showModalVar = "ShowRestrictedCountryWarningModal"), o.variables.isEmptyVar = !0) : (s.value = b.combineAvailableAccounts$Action(h.value.dataOut, D.value.dataOut, l.value.dataOut, r), o.variables.availableCFDAccountsVar = s.value.combinedListOut)
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__getLoggedOutData$Action
        }
        set _getLoggedOutData$Action(r) {
            this.__getLoggedOutData$Action = r
        }
        get _onAccountCreated$Action() {
            return this.hasOwnProperty("__onAccountCreated$Action") || (this.__onAccountCreated$Action = function(r, o) {
                var e = this.model,
                    i = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("OnAccountCreated", function(s) {
                    return s && (s.setAttribute("code.function", "OnAccountCreated"), s.setAttribute("outsystems.function.key", "c9d3ab2d-bd75-4a85-8a53-6c3c7ae39462"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnAccountCreated"), o = i.callContext(o);
                        var u = new t.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.OnAccountCreated$vars")));
                        u.value.platformInLocal = r;
                        var d = new t.DataTypes.VariableHolder,
                            n = new t.DataTypes.VariableHolder,
                            c = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            l = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            h = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            D = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            C = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(O))),
                            S = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(O)));
                        return t.Flow.executeAsyncFlow(function() {
                            return e.variables.accountCreationLoadingVar = !0, t.Flow.executeSequence(function() {
                                return u.value.platformInLocal === "mt5" ? i._getMT5Accounts$Action(o).then(function() {
                                    i._combineAccounts$Action(o), h.value.jSONOut = t.JSONUtils.serializeToJSON(e.variables.selectedAccountVar, !1, !1), D.value.jSONOut = t.JSONUtils.serializeToJSON(e.variables.createdCFDAccountsVar, !1, !1), d.value = t.Logger.startActiveSpan("FilterData2", function(y) {
                                        y && (y.setAttribute("code.function", "FilterData2"), y.setAttribute("outsystems.function.key", "b6060e1c-3a35-4d65-87f2-82796f1e0490"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return i.safeExecuteJSNode(P, "FilterData2", "OnAccountCreated", {
                                                CreatedAccounts: t.DataConversion.JSNodeParamConverter.to(D.value.jSONOut, t.DataTypes.DataTypes.Text),
                                                SelectedAccount: t.DataConversion.JSNodeParamConverter.to(h.value.jSONOut, t.DataTypes.DataTypes.Text),
                                                FilteredData: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                            }, function(k) {
                                                var N = new(i.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.OnAccountCreated$filterData2JSResult"));
                                                return N.filteredDataOut = t.DataConversion.JSNodeParamConverter.from(k.FilteredData, t.DataTypes.DataTypes.Text), N
                                            }, {}, {})
                                        } finally {
                                            y && y.end()
                                        }
                                    }, 1), S.value.dataOut = t.JSONUtils.deserializeFromJSON(d.value.filteredDataOut, O, !1), e.variables.showModalVar = "", t.FeedbackMessageService.showFeedbackMessage("Your Deriv MT5 account is ready.", 1), e.variables.selectedAccountVar = S.value.dataOut, e.variables.showModalVar = "ShowMT5TradeModal", e.variables.accountCreationLoadingVar = !1
                                }) : i._getDXTradeAccounts$Action(o).then(function() {
                                    i._combineAccounts$Action(o), c.value.jSONOut = t.JSONUtils.serializeToJSON(e.variables.selectedAccountVar, !1, !1), l.value.jSONOut = t.JSONUtils.serializeToJSON(e.variables.createdCFDAccountsVar, !1, !1), n.value = t.Logger.startActiveSpan("FilterData", function(y) {
                                        y && (y.setAttribute("code.function", "FilterData"), y.setAttribute("outsystems.function.key", "c653d80f-2a57-49f1-9a8c-c28e22ffc3a8"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return i.safeExecuteJSNode(I, "FilterData", "OnAccountCreated", {
                                                SelectedAccount: t.DataConversion.JSNodeParamConverter.to(c.value.jSONOut, t.DataTypes.DataTypes.Text),
                                                CreatedAccounts: t.DataConversion.JSNodeParamConverter.to(l.value.jSONOut, t.DataTypes.DataTypes.Text),
                                                FilteredData: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                            }, function(k) {
                                                var N = new(i.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.OnAccountCreated$filterDataJSResult"));
                                                return N.filteredDataOut = t.DataConversion.JSNodeParamConverter.from(k.FilteredData, t.DataTypes.DataTypes.Text), N
                                            }, {}, {})
                                        } finally {
                                            y && y.end()
                                        }
                                    }, 1), C.value.dataOut = t.JSONUtils.deserializeFromJSON(n.value.filteredDataOut, O, !1), e.variables.showModalVar = "", t.FeedbackMessageService.showFeedbackMessage("Your DerivX account is ready.", 1), e.variables.accountCreationLoadingVar = !1, e.variables.selectedAccountVar = C.value.dataOut, e.variables.showModalVar = "ShowDxtradeTradeModal"
                                })
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onAccountCreated$Action
        }
        set _onAccountCreated$Action(r) {
            this.__onAccountCreated$Action = r
        }
        get _checkURLParam$Action() {
            return this.hasOwnProperty("__checkURLParam$Action") || (this.__checkURLParam$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("CheckURLParam", function(a) {
                    return a && (a.setAttribute("code.function", "CheckURLParam"), a.setAttribute("outsystems.function.key", "ce8d2bcb-f3fb-4739-9cb4-6aeaa9cd58a0"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("CheckURLParam"), r = e.callContext(r);
                        var s = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            d = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(V)));
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                if (o.variables.productIdentifierIn !== t.BuiltinFunctions.nullTextIdentifier()) return u.value.jSONOut = t.JSONUtils.serializeToJSON(o.variables.getCFDAccountsAggr.listOut, !1, !1), s.value = t.Logger.startActiveSpan("SetSelectedAccount", function(n) {
                                    n && (n.setAttribute("code.function", "SetSelectedAccount"), n.setAttribute("outsystems.function.key", "9aff3024-0ce5-43c4-a964-bf0d6f4868a2"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(J, "SetSelectedAccount", "CheckURLParam", {
                                            ProductIdentifier: t.DataConversion.JSNodeParamConverter.to(o.variables.productIdentifierIn, t.DataTypes.DataTypes.Text),
                                            CFDAccounts: t.DataConversion.JSNodeParamConverter.to(u.value.jSONOut, t.DataTypes.DataTypes.Text),
                                            SelectedAvailableAccount: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                        }, function(c) {
                                            var l = new(e.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.CheckURLParam$setSelectedAccountJSResult"));
                                            return l.selectedAvailableAccountOut = t.DataConversion.JSNodeParamConverter.from(c.SelectedAvailableAccount, t.DataTypes.DataTypes.Text), l
                                        }, {}, {})
                                    } finally {
                                        n && n.end()
                                    }
                                }, 1), d.value.dataOut = t.JSONUtils.deserializeFromJSON(s.value.selectedAvailableAccountOut, V, !1), e._checkIsPasswordSet$Action(r).then(function() {
                                    o.variables.selectedAvailableAccountVar = d.value.dataOut, o.variables.showModalVar = "ShowPasswordModal", o.variables.productIdentifierIn = ""
                                })
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__checkURLParam$Action
        }
        set _checkURLParam$Action(r) {
            this.__checkURLParam$Action = r
        }
        get _createdAccountOnClick$Action() {
            return this.hasOwnProperty("__createdAccountOnClick$Action") || (this.__createdAccountOnClick$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("CreatedAccountOnClick", function(a) {
                    a && (a.setAttribute("code.function", "CreatedAccountOnClick"), a.setAttribute("outsystems.function.key", "d47b0d56-61e1-4f48-820c-04520b7fd5d3"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("CreatedAccountOnClick"), r = e.callContext(r), o.variables.selectedAccountVar = o.variables.createdCFDAccountsVar.getCurrent(r.iterationContext), o.variables.createdCFDAccountsVar.getCurrent(r.iterationContext).platformAttr === "ctrader" ? o.variables.showModalVar = "ShowCTraderTradeModal" : o.variables.createdCFDAccountsVar.getCurrent(r.iterationContext).platformAttr === "dxtrade" ? o.variables.showModalVar = "ShowDxtradeTradeModal" : o.variables.selectedAccountVar.statusAttr !== t.BuiltinFunctions.nullTextIdentifier() ? o.variables.showModalVar = "ShowBOLocksModal" : o.variables.showModalVar = "ShowMT5TradeModal"
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__createdAccountOnClick$Action
        }
        set _createdAccountOnClick$Action(r) {
            this.__createdAccountOnClick$Action = r
        }
        get _onAfterFetch$Action() {
            return this.hasOwnProperty("__onAfterFetch$Action") || (this.__onAfterFetch$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("OnAfterFetch", function(a) {
                    return a && (a.setAttribute("code.function", "OnAfterFetch"), a.setAttribute("outsystems.function.key", "dc79af1d-7223-4912-9628-348ff0978d89"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnAfterFetch"), r = e.callContext(r);
                        var s = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return o.variables.dataLoadingVar = !0, o.variables.isEmptyVar = !1, o.variables.accountTypeVar = v.getAccountType(), t.Flow.executeSequence(function() {
                                return v.getAuthToken() !== t.BuiltinFunctions.nullTextIdentifier() ? e._getMT5Accounts$Action(r).then(function() {
                                    return e._getDXTradeAccounts$Action(r)
                                }).then(function() {
                                    return e._getCTraderAccounts$Action(r)
                                }).then(function() {
                                    return e._combineAccounts$Action(r), o.variables.dataLoadingVar = !1, e._checkURLParam$Action(r)
                                }).then(function() {
                                    s.value = b.isDowntimePeriod$Action(r), o.variables.isDowntimeVar = s.value.isDowntimeOut
                                }) : e._getLoggedOutData$Action(r).then(function() {
                                    o.variables.dataLoadingVar = !1
                                })
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onAfterFetch$Action
        }
        set _onAfterFetch$Action(r) {
            this.__onAfterFetch$Action = r
        }
        get _combineAccounts$Action() {
            return this.hasOwnProperty("__combineAccounts$Action") || (this.__combineAccounts$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("CombineAccounts", function(a) {
                    a && (a.setAttribute("code.function", "CombineAccounts"), a.setAttribute("outsystems.function.key", "e0cf216f-3e80-4bf9-a71f-3e4b159f30a7"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("CombineAccounts"), r = e.callContext(r);
                        var s = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType);
                        u.value = b.combineAvailableAccounts$Action(o.variables.availableMT5AccountsVar, o.variables.availableCTraderAccountsVar, o.variables.availableDXTraderAccountsVar, r), s.value = b.combineCreatedAccounts$Action(o.variables.createdMT5AccountsVar, o.variables.createdCTraderAccountsVar, o.variables.createdDXTraderAccountsVar, r), d.value.jSONOut = t.JSONUtils.serializeToJSON(s.value.combinedListOut, !1, !1), o.variables.availableCFDAccountsVar = u.value.combinedListOut, o.variables.createdCFDAccountsVar = s.value.combinedListOut, v.setCreatedCFDAccounts(d.value.jSONOut)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__combineAccounts$Action
        }
        set _combineAccounts$Action(r) {
            this.__combineAccounts$Action = r
        }
        get _setDemoValue$Action() {
            return this.hasOwnProperty("__setDemoValue$Action") || (this.__setDemoValue$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("SetDemoValue", function(a) {
                    return a && (a.setAttribute("code.function", "SetDemoValue"), a.setAttribute("outsystems.function.key", "e69d1594-184e-4f7f-ae0d-f7fb9f9a773a"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("SetDemoValue"), r = e.callContext(r), t.Flow.executeAsyncFlow(function() {
                            return v.setAccountType("demo"), o.variables.accountTypeVar = "demo", o.variables.dataLoadingVar = !0, e._getMT5Accounts$Action(r).then(function() {
                                return e._getDXTradeAccounts$Action(r)
                            }).then(function() {
                                return e._getCTraderAccounts$Action(r)
                            }).then(function() {
                                e._combineAccounts$Action(r), o.variables.dataLoadingVar = !1
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__setDemoValue$Action
        }
        set _setDemoValue$Action(r) {
            this.__setDemoValue$Action = r
        }
        get _setRealValue$Action() {
            return this.hasOwnProperty("__setRealValue$Action") || (this.__setRealValue$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("SetRealValue", function(a) {
                    return a && (a.setAttribute("code.function", "SetRealValue"), a.setAttribute("outsystems.function.key", "ecd6bab1-70f8-432d-b7d7-df892473d0b6"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("SetRealValue"), r = e.callContext(r), t.Flow.executeAsyncFlow(function() {
                            return v.setAccountType("real"), v.setDemoLoginId(""), o.variables.accountTypeVar = "real", o.variables.dataLoadingVar = !0, e._getMT5Accounts$Action(r).then(function() {
                                return e._getDXTradeAccounts$Action(r)
                            }).then(function() {
                                return e._getCTraderAccounts$Action(r)
                            }).then(function() {
                                e._combineAccounts$Action(r), o.variables.dataLoadingVar = !1
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__setRealValue$Action
        }
        set _setRealValue$Action(r) {
            this.__setRealValue$Action = r
        }
        get _getMT5Accounts$Action() {
            return this.hasOwnProperty("__getMT5Accounts$Action") || (this.__getMT5Accounts$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("GetMT5Accounts", function(a) {
                    return a && (a.setAttribute("code.function", "GetMT5Accounts"), a.setAttribute("outsystems.function.key", "ed6cc09a-0eeb-4e1c-bad3-d9efd7925770"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("GetMT5Accounts"), r = e.callContext(r);
                        var s = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder,
                            n = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(F)));
                        return t.Flow.executeAsyncFlow(function() {
                            return o.flush(), b.createdMT5Accounts$Action(t.DataConversion.JSConversions.typeConvertRecordList(o.variables.getCFDAccountsAggr.listOut, new _, function(c, l) {
                                return l = c.cFDAccountsAttr, l
                            }), o.variables.accountTypeVar, r).then(function(c) {
                                u.value = c
                            }).then(function() {
                                return o.flush(), b.availableMT5Accounts$Action(t.DataConversion.JSConversions.typeConvertRecordList(o.variables.getCFDAccountsAggr.listOut, new _, function(c, l) {
                                    return l = c.cFDAccountsAttr, l
                                }), r).then(function(c) {
                                    s.value = c
                                })
                            }).then(function() {
                                d.value = b.filterAvailableAccounts$Action(s.value.responseOut, u.value.responseOut, r), n.value.dataOut = t.JSONUtils.deserializeFromJSON(u.value.responseOut, F, !1), o.variables.availableMT5AccountsVar = d.value.filteredAvailableAccountsOut, o.variables.createdMT5AccountsVar = n.value.dataOut
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__getMT5Accounts$Action
        }
        set _getMT5Accounts$Action(r) {
            this.__getMT5Accounts$Action = r
        }
        get _checkIsPasswordSet$Action() {
            return this.hasOwnProperty("__checkIsPasswordSet$Action") || (this.__checkIsPasswordSet$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("CheckIsPasswordSet", function(a) {
                    return a && (a.setAttribute("code.function", "CheckIsPasswordSet"), a.setAttribute("outsystems.function.key", "f5b9a00e-cf1e-4340-9e69-06cac42896d1"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("CheckIsPasswordSet"), r = e.callContext(r);
                        var s = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType);
                        return t.Flow.executeAsyncFlow(function() {
                            return o.flush(), b.getAccountStatus2$Action(r).then(function(n) {
                                s.value = n
                            }).then(function() {
                                d.value.jSONOut = t.JSONUtils.serializeToJSON(s.value.responseOut, !1, !1), u.value = t.Logger.startActiveSpan("CheckIsPasswordSet", function(n) {
                                    n && (n.setAttribute("code.function", "CheckIsPasswordSet"), n.setAttribute("outsystems.function.key", "6bbdcd05-65dc-42d3-a4e6-4b890871964b"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(M, "CheckIsPasswordSet", "CheckIsPasswordSet", {
                                            AccountStatusResponse: t.DataConversion.JSNodeParamConverter.to(d.value.jSONOut, t.DataTypes.DataTypes.Text),
                                            IsMT5PasswordSet: t.DataConversion.JSNodeParamConverter.to(!1, t.DataTypes.DataTypes.Boolean),
                                            IsDxtradePasswordSet: t.DataConversion.JSNodeParamConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                                        }, function(c) {
                                            var l = new(e.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.CheckIsPasswordSet$checkIsPasswordSetJSResult"));
                                            return l.isMT5PasswordSetOut = t.DataConversion.JSNodeParamConverter.from(c.IsMT5PasswordSet, t.DataTypes.DataTypes.Boolean), l.isDxtradePasswordSetOut = t.DataConversion.JSNodeParamConverter.from(c.IsDxtradePasswordSet, t.DataTypes.DataTypes.Boolean), l
                                        }, {}, {})
                                    } finally {
                                        n && n.end()
                                    }
                                }, 1), o.variables.isMt5PasswordSetVar = u.value.isMT5PasswordSetOut, o.variables.isDxtradePasswordSetVar = u.value.isDxtradePasswordSetOut
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__checkIsPasswordSet$Action
        }
        set _checkIsPasswordSet$Action(r) {
            this.__checkIsPasswordSet$Action = r
        }
        get _ctraderWebTerminalOnClick$Action() {
            return this.hasOwnProperty("__ctraderWebTerminalOnClick$Action") || (this.__ctraderWebTerminalOnClick$Action = function(r) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("CtraderWebTerminalOnClick", function(a) {
                    return a && (a.setAttribute("code.function", "CtraderWebTerminalOnClick"), a.setAttribute("outsystems.function.key", "fda7275a-dbc8-45ab-bbb3-d0cea7cee65a"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("CtraderWebTerminalOnClick"), r = e.callContext(r);
                        var s = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(p)));
                        return t.Flow.executeAsyncFlow(function() {
                            return u.value = G.getPlatformFromURL$Action("", r), o.flush(), b.cFDServiceToken$Action("ctrader", r).then(function(n) {
                                s.value = n
                            }).then(function() {
                                d.value.dataOut = t.JSONUtils.deserializeFromJSON(s.value.tokenOut, p, !1)
                            }).then(function() {
                                return u.value.isStagingOut ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("https://ct-uat.deriv.com?token=" + d.value.dataOut.service_tokenAttr.ctraderAttr.tokenAttr, {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0)) : u.value.isProductionOut ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("https://ct.deriv.com?token=" + d.value.dataOut.service_tokenAttr.ctraderAttr.tokenAttr, {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0)) : t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("https://ct.deriv.com", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0))
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__ctraderWebTerminalOnClick$Action
        }
        set _ctraderWebTerminalOnClick$Action(r) {
            this.__ctraderWebTerminalOnClick$Action = r
        }
        getDXTradeAccounts$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("GetDXTradeAccounts__proxy", function(e) {
                return e && (e.setAttribute("code.function", "GetDXTradeAccounts"), e.setAttribute("outsystems.function.key", "05583aba-2b30-4976-8d88-b5faf4ed05da"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._getDXTradeAccounts$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onInitialize$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "1f4db8e7-7535-4034-b3ea-f7c82a09a160"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onInitialize$Action, r)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        availableAccountOnClick$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("AvailableAccountOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "AvailableAccountOnClick"), e.setAttribute("outsystems.function.key", "432a04cd-6269-4401-b5dc-957f8e8f2fa1"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._availableAccountOnClick$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        ctraderAppOnClick$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("CtraderAppOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "CtraderAppOnClick"), e.setAttribute("outsystems.function.key", "51dcf5eb-d7ff-48bf-b00f-8eebaaa1074a"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._ctraderAppOnClick$Action, r)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        closeModal$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("CloseModal__proxy", function(e) {
                e && (e.setAttribute("code.function", "CloseModal"), e.setAttribute("outsystems.function.key", "71f432b0-0acd-4772-a807-f2b8edb18362"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._closeModal$Action, r)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        handleForgotPassword$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("HandleForgotPassword__proxy", function(e) {
                return e && (e.setAttribute("code.function", "HandleForgotPassword"), e.setAttribute("outsystems.function.key", "7279c1fe-8a35-4a1a-9e16-b3b3cdcdb85f"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._handleForgotPassword$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        cTraderAccountCreation$Action(r, o, e) {
            var i = this.controller;
            return t.Logger.startActiveSpan("CTraderAccountCreation__proxy", function(a) {
                return a && (a.setAttribute("code.function", "CTraderAccountCreation"), a.setAttribute("outsystems.function.key", "7b200fc3-08db-4662-8039-bc73c4e85a67"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._cTraderAccountCreation$Action, e, r, o)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        redirectToAccounts$Action(r, o) {
            var e = this.controller;
            return t.Logger.startActiveSpan("RedirectToAccounts__proxy", function(i) {
                return i && (i.setAttribute("code.function", "RedirectToAccounts"), i.setAttribute("outsystems.function.key", "880dce88-67a2-4b03-ab9f-939ed86d4fe3"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._redirectToAccounts$Action, o, r)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        getCTraderAccounts$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("GetCTraderAccounts__proxy", function(e) {
                return e && (e.setAttribute("code.function", "GetCTraderAccounts"), e.setAttribute("outsystems.function.key", "a14f502c-5fee-4da4-9343-80ca7006980e"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._getCTraderAccounts$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        getLoggedOutData$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("GetLoggedOutData__proxy", function(e) {
                return e && (e.setAttribute("code.function", "GetLoggedOutData"), e.setAttribute("outsystems.function.key", "aa97f3e9-6a02-4723-b9af-2b2c14946dfc"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._getLoggedOutData$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onAccountCreated$Action(r, o) {
            var e = this.controller;
            return t.Logger.startActiveSpan("OnAccountCreated__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnAccountCreated"), i.setAttribute("outsystems.function.key", "c9d3ab2d-bd75-4a85-8a53-6c3c7ae39462"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._onAccountCreated$Action, o, r)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        checkURLParam$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("CheckURLParam__proxy", function(e) {
                return e && (e.setAttribute("code.function", "CheckURLParam"), e.setAttribute("outsystems.function.key", "ce8d2bcb-f3fb-4739-9cb4-6aeaa9cd58a0"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._checkURLParam$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        createdAccountOnClick$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("CreatedAccountOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "CreatedAccountOnClick"), e.setAttribute("outsystems.function.key", "d47b0d56-61e1-4f48-820c-04520b7fd5d3"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._createdAccountOnClick$Action, r)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onAfterFetch$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("OnAfterFetch__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnAfterFetch"), e.setAttribute("outsystems.function.key", "dc79af1d-7223-4912-9628-348ff0978d89"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onAfterFetch$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        combineAccounts$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("CombineAccounts__proxy", function(e) {
                e && (e.setAttribute("code.function", "CombineAccounts"), e.setAttribute("outsystems.function.key", "e0cf216f-3e80-4bf9-a71f-3e4b159f30a7"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._combineAccounts$Action, r)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        setDemoValue$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("SetDemoValue__proxy", function(e) {
                return e && (e.setAttribute("code.function", "SetDemoValue"), e.setAttribute("outsystems.function.key", "e69d1594-184e-4f7f-ae0d-f7fb9f9a773a"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._setDemoValue$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        setRealValue$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("SetRealValue__proxy", function(e) {
                return e && (e.setAttribute("code.function", "SetRealValue"), e.setAttribute("outsystems.function.key", "ecd6bab1-70f8-432d-b7d7-df892473d0b6"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._setRealValue$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        getMT5Accounts$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("GetMT5Accounts__proxy", function(e) {
                return e && (e.setAttribute("code.function", "GetMT5Accounts"), e.setAttribute("outsystems.function.key", "ed6cc09a-0eeb-4e1c-bad3-d9efd7925770"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._getMT5Accounts$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        checkIsPasswordSet$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("CheckIsPasswordSet__proxy", function(e) {
                return e && (e.setAttribute("code.function", "CheckIsPasswordSet"), e.setAttribute("outsystems.function.key", "f5b9a00e-cf1e-4340-9e69-06cac42896d1"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._checkIsPasswordSet$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        ctraderWebTerminalOnClick$Action(r) {
            var o = this.controller;
            return t.Logger.startActiveSpan("CtraderWebTerminalOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "CtraderWebTerminalOnClick"), e.setAttribute("outsystems.function.key", "fda7275a-dbc8-45ab-bbb3-d0cea7cee65a"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._ctraderWebTerminalOnClick$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(r) {
                var o = this.controller,
                    e = this.model,
                    i = this.idService;
                return o.onInitialize$Action(r)
            }), this._onInitializeEventHandler
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
                return B.default.handleError(r, this.callContext())
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    A(T, "ControllerInner");
    let f = T;
    m = f, m.registerVariableGroupType("tradershub.CFDFlows.CFDs.AvailableAccountOnClick$checkTradingPlatformStatusJSResult", [{
        name: "BOLockStatus",
        attrName: "bOLockStatusOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: A(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.CFDFlows.CFDs.AvailableAccountOnClick$findBOLockStatusJSResult", [{
        name: "BOLockStatus",
        attrName: "bOLockStatusOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: A(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "HasStatus",
        attrName: "hasStatusOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Boolean,
        defaultValue: A(function() {
            return !1
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.CFDFlows.CFDs.CTraderAccountCreation$vars", [{
        name: "MarketType",
        attrName: "marketTypeInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: A(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Shortcode",
        attrName: "shortcodeInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: A(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.CFDFlows.CFDs.CTraderAccountCreation$generatePayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: A(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.CFDFlows.CFDs.RedirectToAccounts$vars", [{
        name: "RedirectTo",
        attrName: "redirectToInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: A(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.CFDFlows.CFDs.OnAccountCreated$vars", [{
        name: "Platform",
        attrName: "platformInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: A(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.CFDFlows.CFDs.OnAccountCreated$filterData2JSResult", [{
        name: "FilteredData",
        attrName: "filteredDataOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: A(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.CFDFlows.CFDs.OnAccountCreated$filterDataJSResult", [{
        name: "FilteredData",
        attrName: "filteredDataOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: A(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.CFDFlows.CFDs.CheckURLParam$setSelectedAccountJSResult", [{
        name: "SelectedAvailableAccount",
        attrName: "selectedAvailableAccountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: A(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.CFDFlows.CFDs.CheckIsPasswordSet$checkIsPasswordSetJSResult", [{
        name: "IsMT5PasswordSet",
        attrName: "isMT5PasswordSetOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Boolean,
        defaultValue: A(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsDxtradePasswordSet",
        attrName: "isDxtradePasswordSetOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Boolean,
        defaultValue: A(function() {
            return !1
        }, "defaultValue")
    }])
}
var m, kt = new t.Controller.ControllerFactory(m, U);
export {
    kt as a
};