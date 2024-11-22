import {
    a as V
} from "./_oschunk-EFUSIMB4.js";
import {
    a as J
} from "./_oschunk-Y45M2O2K.js";
import {
    a as O,
    d as b
} from "./_oschunk-27GDEXUT.js";
import {
    $e as g,
    jc as w
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as E
} from "./_oschunk-NTQBNJ73.js";
import {
    c as d
} from "./_oschunk-DVBKI63I.js";
var P = {
        "F0t1v8lfSECi5gyVgpCp5A#Value": "Ajouter plus de comptes"
    },
    M = {
        "fr-FR": {
            translations: P,
            isRTL: !1
        }
    };

function N(i, A, p, r) {
    let t = JSON.parse(i.CurrenciesList),
        n = JSON.parse(i.AvailableAccounts),
        f = t.filter(o => {
            var s, c;
            return ((c = (s = n == null ? void 0 : n.available_accounts) == null ? void 0 : s.trading) == null ? void 0 : c.filter(y => y.currency === o.Currencies.Code)).length > 0
        }).map(o => o.Currencies);
    i.Response = JSON.stringify(f)
}
d(N, "default");

function C(i, A, p, r) {
    let t = JSON.parse(i.GetSettings);

    function n(f) {
        let o = new Date(f * 1e3),
            u = o.getUTCFullYear(),
            s = String(o.getUTCMonth() + 1).padStart(2, "0"),
            c = String(o.getUTCDate()).padStart(2, "0");
        return `${u}-${s}-${c}`
    }
    d(n, "formatTimestampToDate"), i.Payload = JSON.stringify({
        currency: i.SelectedCurrency,
        date_of_birth: n(t.date_of_birth),
        first_name: t.first_name,
        last_name: t.last_name,
        residence: t.country_code
    })
}
d(C, "default");

function D(i, A, p, r) {
    let t = JSON.parse(localStorage.getItem("accountsList"));
    t[i.LoginId] = {
        token: i.Token
    }, localStorage.setItem("accountsList", JSON.stringify(t)), localStorage.setItem("client.accounts", JSON.stringify(t))
}
d(D, "default");

function R(i, A, p, r) {
    let n = JSON.parse(i.AvailableAccounts).filter(f => f.Code !== i.SelectedCurrency);
    n.length > 1 ? (i.ShouldRedirectToOptions = !1, i.Response = JSON.stringify(n)) : i.ShouldRedirectToOptions = !0
}
d(R, "default");
var e = E; {
    let A = class A extends e.Controller.BaseViewController {
        constructor(r, t, n) {
            super(r, t, n, M);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCurrencies$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCurrencies$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getCurrencies$AggrRefresh() {
            return this.hasOwnProperty("_getCurrencies$AggrRefresh") || (this._getCurrencies$AggrRefresh = function() {
                var r = function(t, n, s) {
                    var o = this.model,
                        u = this.controller,
                        s = u.callContext(s);
                    return u.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrencies", "screenservices/tradershub/MainFlow/AddMoreAccount/ScreenDataSetGetCurrencies", "npjMYW44GFvhkxw14gO3vA", t, n, function(c) {
                        o.variables.getCurrenciesAggr.dataFetchStatusAttr = c
                    }, function(c) {
                        o.variables.getCurrenciesAggr.replaceWith(e.DataConversion.ServerDataConverter.from(c, o.variables.getCurrenciesAggr.constructor))
                    }, void 0, void 0, void 0, s, void 0, !0).then(function() {
                        return u._onAfterFetch$Action(u.callContext(s))
                    })
                }.bind(this);
                return e.Logger.startActiveSpan("GetCurrencies", function(t) {
                    return t && (t.setAttribute("code.function", "GetCurrencies"), t.setAttribute("outsystems.function.key", "e98bf6f8-4bd0-4468-bbc4-fe8d9d5e50ee"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), e.Flow.tryFinally(function() {
                        return r()
                    }, function() {
                        t && t.end()
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
        get _onAfterFetch$Action() {
            return this.hasOwnProperty("__onAfterFetch$Action") || (this.__onAfterFetch$Action = function(r) {
                var t = this.model,
                    n = this.controller,
                    f = this.idService;
                return e.Logger.startActiveSpan("OnAfterFetch", function(o) {
                    return o && (o.setAttribute("code.function", "OnAfterFetch"), o.setAttribute("outsystems.function.key", "9244253b-2dd9-42c4-8e37-402229dd80b5"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnAfterFetch"), r = n.callContext(r);
                        var u = new e.DataTypes.VariableHolder,
                            s = new e.DataTypes.VariableHolder,
                            c = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(g)));
                        return e.Flow.executeAsyncFlow(function() {
                            return t.variables.isLoadingVar = !0, t.flush(), b.getAvailableAccounts$Action(r).then(function(l) {
                                u.value = l
                            }).then(function() {
                                u.value.isErrorOut ? (e.FeedbackMessageService.showFeedbackMessage(u.value.errorMessageOut, 3), t.variables.isLoadingVar = !1) : (c.value.jSONOut = e.JSONUtils.serializeToJSON(t.variables.getCurrenciesAggr.listOut, !1, !1), s.value = e.Logger.startActiveSpan("ModifyData", function(l) {
                                    l && (l.setAttribute("code.function", "ModifyData"), l.setAttribute("outsystems.function.key", "089da623-7864-402f-9972-c9d1e1684b68"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return n.safeExecuteJSNode(N, "ModifyData", "OnAfterFetch", {
                                            AvailableAccounts: e.DataConversion.JSNodeParamConverter.to(u.value.responseOut, e.DataTypes.DataTypes.Text),
                                            CurrenciesList: e.DataConversion.JSNodeParamConverter.to(c.value.jSONOut, e.DataTypes.DataTypes.Text),
                                            Response: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                        }, function(T) {
                                            var h = new(n.constructor.getVariableGroupType("tradershub.MainFlow.AddMoreAccount.OnAfterFetch$modifyDataJSResult"));
                                            return h.responseOut = e.DataConversion.JSNodeParamConverter.from(T.Response, e.DataTypes.DataTypes.Text), h
                                        }, {}, {})
                                    } finally {
                                        l && l.end()
                                    }
                                }, 1), y.value.dataOut = e.JSONUtils.deserializeFromJSON(s.value.responseOut, g, !1), t.variables.availableAccountsVar = y.value.dataOut, t.variables.isLoadingVar = !1)
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onAfterFetch$Action
        }
        set _onAfterFetch$Action(r) {
            this.__onAfterFetch$Action = r
        }
        get _addNewAccountAction$Action() {
            return this.hasOwnProperty("__addNewAccountAction$Action") || (this.__addNewAccountAction$Action = function(r) {
                var t = this.model,
                    n = this.controller,
                    f = this.idService;
                return e.Logger.startActiveSpan("AddNewAccountAction", function(o) {
                    return o && (o.setAttribute("code.function", "AddNewAccountAction"), o.setAttribute("outsystems.function.key", "e0569aa3-17c3-4191-93e7-575846474ce1"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        n.ensureControllerAlive("AddNewAccountAction"), r = n.callContext(r);
                        var u = new e.DataTypes.VariableHolder,
                            s = new e.DataTypes.VariableHolder,
                            c = new e.DataTypes.VariableHolder,
                            y = new e.DataTypes.VariableHolder,
                            l = new e.DataTypes.VariableHolder,
                            T = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            h = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            F = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(g))),
                            _ = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(w)));
                        return e.Flow.executeAsyncFlow(function() {
                            return t.variables.isLoadingVar = !0, t.flush(), b.sendGetSetting$Action(r).then(function(a) {
                                c.value = a
                            }).then(function() {
                                return e.Flow.executeSequence(function() {
                                    if (c.value.isErrorOut) e.FeedbackMessageService.showFeedbackMessage(c.value.errorMessageOut, 3), t.variables.isLoadingVar = !1;
                                    else return T.value.jSONOut = e.JSONUtils.serializeToJSON(c.value.getSettingResponseOut, !1, !1), y.value = e.Logger.startActiveSpan("NewAccountRealPayload", function(a) {
                                        a && (a.setAttribute("code.function", "NewAccountRealPayload"), a.setAttribute("outsystems.function.key", "15f8e1c8-6dbc-4b60-88b8-d9a686178fd6"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return n.safeExecuteJSNode(C, "NewAccountRealPayload", "AddNewAccountAction", {
                                                GetSettings: e.DataConversion.JSNodeParamConverter.to(T.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                SelectedCurrency: e.DataConversion.JSNodeParamConverter.to(t.variables.availableAccountsVar.getCurrent(r.iterationContext).codeAttr, e.DataTypes.DataTypes.Text),
                                                Payload: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                            }, function(S) {
                                                var v = new(n.constructor.getVariableGroupType("tradershub.MainFlow.AddMoreAccount.AddNewAccountAction$newAccountRealPayloadJSResult"));
                                                return v.payloadOut = e.DataConversion.JSNodeParamConverter.from(S.Payload, e.DataTypes.DataTypes.Text), v
                                            }, {}, {})
                                        } finally {
                                            a && a.end()
                                        }
                                    }, 1), t.flush(), b.derivApiSendMessage$Action(y.value.payloadOut, "new_account_real", !0, r).then(function(a) {
                                        s.value = a
                                    }).then(function() {
                                        return e.Flow.executeSequence(function() {
                                            if (s.value.isErrorOut) e.FeedbackMessageService.showFeedbackMessage(s.value.errorMessageOut, 3), t.variables.isLoadingVar = !1;
                                            else return _.value.dataOut = e.JSONUtils.deserializeFromJSON(s.value.responseOut, w, !1), O.setAuthToken(_.value.dataOut.new_account_realAttr.oauth_tokenAttr), e.Logger.startActiveSpan("UpdateAccountList", function(a) {
                                                a && (a.setAttribute("code.function", "UpdateAccountList"), a.setAttribute("outsystems.function.key", "7d5918dd-f633-4fd1-b6e8-ed3dee2c36da"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return n.safeExecuteJSNode(D, "UpdateAccountList", "AddNewAccountAction", {
                                                        Token: e.DataConversion.JSNodeParamConverter.to(_.value.dataOut.new_account_realAttr.oauth_tokenAttr, e.DataTypes.DataTypes.Text),
                                                        LoginId: e.DataConversion.JSNodeParamConverter.to(_.value.dataOut.new_account_realAttr.client_idAttr, e.DataTypes.DataTypes.Text)
                                                    }, function(S) {}, {}, {})
                                                } finally {
                                                    a && a.end()
                                                }
                                            }, 1), t.flush(), b.sendAuthorize$Action(!0, r).then(function(a) {
                                                u.value = a
                                            }).then(function() {
                                                h.value.jSONOut = e.JSONUtils.serializeToJSON(t.variables.availableAccountsVar, !1, !1), l.value = e.Logger.startActiveSpan("RemoveSelectedAccount", function(a) {
                                                    a && (a.setAttribute("code.function", "RemoveSelectedAccount"), a.setAttribute("outsystems.function.key", "84744806-5ab6-4654-8b81-8fbdc959e15a"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                    try {
                                                        return n.safeExecuteJSNode(R, "RemoveSelectedAccount", "AddNewAccountAction", {
                                                            SelectedCurrency: e.DataConversion.JSNodeParamConverter.to(t.variables.availableAccountsVar.getCurrent(r.iterationContext).codeAttr, e.DataTypes.DataTypes.Text),
                                                            AvailableAccounts: e.DataConversion.JSNodeParamConverter.to(h.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                            Response: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                            ShouldRedirectToOptions: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                                        }, function(S) {
                                                            var v = new(n.constructor.getVariableGroupType("tradershub.MainFlow.AddMoreAccount.AddNewAccountAction$removeSelectedAccountJSResult"));
                                                            return v.responseOut = e.DataConversion.JSNodeParamConverter.from(S.Response, e.DataTypes.DataTypes.Text), v.shouldRedirectToOptionsOut = e.DataConversion.JSNodeParamConverter.from(S.ShouldRedirectToOptions, e.DataTypes.DataTypes.Boolean), v
                                                        }, {}, {})
                                                    } finally {
                                                        a && a.end()
                                                    }
                                                }, 1), F.value.dataOut = e.JSONUtils.deserializeFromJSON(l.value.responseOut, g, !1), O.setActiveLoginId(u.value.responseOut.authorizeAttr.loginidAttr), t.variables.isLoadingVar = !1, t.variables.availableAccountsVar = F.value.dataOut, e.FeedbackMessageService.showFeedbackMessage(u.value.responseOut.authorizeAttr.currencyAttr + " options trading account added.", 1)
                                            }).then(function() {
                                                if (l.value.shouldRedirectToOptionsOut) return e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "options", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0))
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__addNewAccountAction$Action
        }
        set _addNewAccountAction$Action(r) {
            this.__addNewAccountAction$Action = r
        }
        onAfterFetch$Action(r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OnAfterFetch__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnAfterFetch"), n.setAttribute("outsystems.function.key", "9244253b-2dd9-42c4-8e37-402229dd80b5"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onAfterFetch$Action, r)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        addNewAccountAction$Action(r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("AddNewAccountAction__proxy", function(n) {
                return n && (n.setAttribute("code.function", "AddNewAccountAction"), n.setAttribute("outsystems.function.key", "e0569aa3-17c3-4191-93e7-575846474ce1"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._addNewAccountAction$Action, r)
                }, function() {
                    n && n.end()
                })
            }, 0)
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
                return V.default.handleError(r, this.callContext())
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
    d(A, "ControllerInner");
    let i = A;
    m = i, m.registerVariableGroupType("tradershub.MainFlow.AddMoreAccount.OnAfterFetch$modifyDataJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.MainFlow.AddMoreAccount.AddNewAccountAction$newAccountRealPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.MainFlow.AddMoreAccount.AddNewAccountAction$removeSelectedAccountJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ShouldRedirectToOptions",
        attrName: "shouldRedirectToOptionsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: d(function() {
            return !1
        }, "defaultValue")
    }])
}
var m, te = new e.Controller.ControllerFactory(m, J);
export {
    te as a
};