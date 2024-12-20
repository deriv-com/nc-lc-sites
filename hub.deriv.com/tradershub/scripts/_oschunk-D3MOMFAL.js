import {
    a as M
} from "./_oschunk-IAMW2WLL.js";
import {
    a as J
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as w,
    d as h
} from "./_oschunk-VADNKVBQ.js";
import {
    Bc as C,
    Df as S
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as E
} from "./_oschunk-5EPHB76O.js";
import {
    c as d
} from "./_oschunk-DVBKI63I.js";
var P = {
        "F0t1v8lfSECi5gyVgpCp5A#Value": "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A",
        "hNv6JEs2FECYWJoo0eZIXA#Message.-1310993086.1": "\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u062D\u0633\u0627\u0628 \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A."
    },
    L = {
        "F0t1v8lfSECi5gyVgpCp5A#Value": "Weitere Konten hinzuf\xFCgen",
        "hNv6JEs2FECYWJoo0eZIXA#Message.-1310993086.1": "Optionshandelskonto hinzugef\xFCgt."
    },
    H = {
        "F0t1v8lfSECi5gyVgpCp5A#Value": "Agregar m\xE1s cuentas",
        "hNv6JEs2FECYWJoo0eZIXA#Message.-1310993086.1": "Se ha a\xF1adido la cuenta de trading de opciones."
    },
    $ = {
        "F0t1v8lfSECi5gyVgpCp5A#Value": "Ajouter d'autres comptes",
        "hNv6JEs2FECYWJoo0eZIXA#Message.-1310993086.1": "Compte de trading d'options ajout\xE9."
    },
    x = {
        "F0t1v8lfSECi5gyVgpCp5A#Value": "Aggiungi pi\xF9 conti",
        "hNv6JEs2FECYWJoo0eZIXA#Message.-1310993086.1": "Account di trading opzioni aggiunto."
    },
    k = {
        "F0t1v8lfSECi5gyVgpCp5A#Value": "Dodaj wi\u0119cej kont",
        "hNv6JEs2FECYWJoo0eZIXA#Message.-1310993086.1": "Dodano konto handlowe opcji."
    },
    I = {
        "F0t1v8lfSECi5gyVgpCp5A#Value": "Adicionar mais contas",
        "hNv6JEs2FECYWJoo0eZIXA#Message.-1310993086.1": "Conta de negocia\xE7\xE3o de op\xE7\xF5es adicionada."
    },
    z = {
        "F0t1v8lfSECi5gyVgpCp5A#Value": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u0432",
        "hNv6JEs2FECYWJoo0eZIXA#Message.-1310993086.1": "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0441\u0447\u0435\u0442 \u0434\u043B\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438 \u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043C\u0438."
    },
    V = {
        "ar-001": {
            translations: P,
            isRTL: !0
        },
        "de-DE": {
            translations: L,
            isRTL: !1
        },
        "es-ES": {
            translations: H,
            isRTL: !1
        },
        "fr-FR": {
            translations: $,
            isRTL: !1
        },
        "it-IT": {
            translations: x,
            isRTL: !1
        },
        "pl-PL": {
            translations: k,
            isRTL: !1
        },
        "pt-PT": {
            translations: I,
            isRTL: !1
        },
        "ru-RU": {
            translations: z,
            isRTL: !1
        }
    };

function N(s, A, p, r) {
    let t = JSON.parse(s.CurrenciesList),
        a = JSON.parse(s.AvailableAccounts),
        f = t.filter(o => {
            var i, c;
            return ((c = (i = a == null ? void 0 : a.available_accounts) == null ? void 0 : i.trading) == null ? void 0 : c.filter(v => v.currency === o.Currencies.Code)).length > 0
        }).map(o => o.Currencies);
    s.Response = JSON.stringify(f)
}
d(N, "default");

function O(s, A, p, r) {
    let t = JSON.parse(s.GetSettings);

    function a(f) {
        let o = new Date(f * 1e3),
            u = o.getUTCFullYear(),
            i = String(o.getUTCMonth() + 1).padStart(2, "0"),
            c = String(o.getUTCDate()).padStart(2, "0");
        return `${u}-${i}-${c}`
    }
    d(a, "formatTimestampToDate"), s.Payload = JSON.stringify({
        currency: s.SelectedCurrency,
        date_of_birth: a(t.date_of_birth),
        first_name: t.first_name,
        last_name: t.last_name,
        residence: t.country_code
    })
}
d(O, "default");

function D(s, A, p, r) {
    let t = JSON.parse(localStorage.getItem("accountsList"));
    t[s.LoginId] = {
        token: s.Token
    }, localStorage.setItem("accountsList", JSON.stringify(t)), localStorage.setItem("client.accounts", JSON.stringify(t))
}
d(D, "default");

function R(s, A, p, r) {
    let a = JSON.parse(s.AvailableAccounts).filter(f => f.Code !== s.SelectedCurrency);
    a.length > 1 ? (s.ShouldRedirectToOptions = !1, s.Response = JSON.stringify(a)) : s.ShouldRedirectToOptions = !0
}
d(R, "default");
var e = E; {
    let A = class A extends e.Controller.BaseViewController {
        constructor(r, t, a) {
            super(r, t, a, V);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCurrencies$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCurrencies$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getCurrencies$AggrRefresh() {
            return this.hasOwnProperty("_getCurrencies$AggrRefresh") || (this._getCurrencies$AggrRefresh = function() {
                var r = function(t, a, i) {
                    var o = this.model,
                        u = this.controller,
                        i = u.callContext(i);
                    return u.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrencies", "screenservices/tradershub/MainFlow/AddMoreAccount/ScreenDataSetGetCurrencies", "dZlsET6Ad83BH_EDdV90MA", t, a, function(c) {
                        o.variables.getCurrenciesAggr.dataFetchStatusAttr = c
                    }, function(c) {
                        o.variables.getCurrenciesAggr.replaceWith(e.DataConversion.ServerDataConverter.from(c, o.variables.getCurrenciesAggr.constructor))
                    }, void 0, void 0, void 0, i, void 0, !0).then(function() {
                        return u._onAfterFetch$Action(u.callContext(i))
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
                    a = this.controller,
                    f = this.idService;
                return e.Logger.startActiveSpan("OnAfterFetch", function(o) {
                    return o && (o.setAttribute("code.function", "OnAfterFetch"), o.setAttribute("outsystems.function.key", "9244253b-2dd9-42c4-8e37-402229dd80b5"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        a.ensureControllerAlive("OnAfterFetch"), r = a.callContext(r);
                        var u = new e.DataTypes.VariableHolder,
                            i = new e.DataTypes.VariableHolder,
                            c = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            v = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(S)));
                        return e.Flow.executeAsyncFlow(function() {
                            return t.variables.isLoadingVar = !0, t.flush(), h.getAvailableAccounts$Action(r).then(function(l) {
                                u.value = l
                            }).then(function() {
                                u.value.isErrorOut ? (e.FeedbackMessageService.showFeedbackMessage(u.value.errorMessageOut, 3), t.variables.isLoadingVar = !1) : (c.value.jSONOut = e.JSONUtils.serializeToJSON(t.variables.getCurrenciesAggr.listOut, !1, !1), i.value = e.Logger.startActiveSpan("ModifyData", function(l) {
                                    l && (l.setAttribute("code.function", "ModifyData"), l.setAttribute("outsystems.function.key", "089da623-7864-402f-9972-c9d1e1684b68"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return a.safeExecuteJSNode(N, "ModifyData", "OnAfterFetch", {
                                            AvailableAccounts: e.DataConversion.JSNodeParamConverter.to(u.value.responseOut, e.DataTypes.DataTypes.Text),
                                            CurrenciesList: e.DataConversion.JSNodeParamConverter.to(c.value.jSONOut, e.DataTypes.DataTypes.Text),
                                            Response: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                        }, function(m) {
                                            var b = new(a.constructor.getVariableGroupType("tradershub.MainFlow.AddMoreAccount.OnAfterFetch$modifyDataJSResult"));
                                            return b.responseOut = e.DataConversion.JSNodeParamConverter.from(m.Response, e.DataTypes.DataTypes.Text), b
                                        }, {}, {})
                                    } finally {
                                        l && l.end()
                                    }
                                }, 1), v.value.dataOut = e.JSONUtils.deserializeFromJSON(i.value.responseOut, S, !1), t.variables.availableAccountsVar = v.value.dataOut, t.variables.isLoadingVar = !1)
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
                    a = this.controller,
                    f = this.idService;
                return e.Logger.startActiveSpan("AddNewAccountAction", function(o) {
                    return o && (o.setAttribute("code.function", "AddNewAccountAction"), o.setAttribute("outsystems.function.key", "e0569aa3-17c3-4191-93e7-575846474ce1"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        a.ensureControllerAlive("AddNewAccountAction"), r = a.callContext(r);
                        var u = new e.DataTypes.VariableHolder,
                            i = new e.DataTypes.VariableHolder,
                            c = new e.DataTypes.VariableHolder,
                            v = new e.DataTypes.VariableHolder,
                            l = new e.DataTypes.VariableHolder,
                            m = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            F = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(S))),
                            T = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(C)));
                        return e.Flow.executeAsyncFlow(function() {
                            return t.variables.isLoadingVar = !0, t.flush(), h.sendGetSetting$Action(r).then(function(n) {
                                c.value = n
                            }).then(function() {
                                return e.Flow.executeSequence(function() {
                                    if (c.value.isErrorOut) e.FeedbackMessageService.showFeedbackMessage(c.value.errorMessageOut, 3), t.variables.isLoadingVar = !1;
                                    else return m.value.jSONOut = e.JSONUtils.serializeToJSON(c.value.getSettingResponseOut, !1, !1), v.value = e.Logger.startActiveSpan("NewAccountRealPayload", function(n) {
                                        n && (n.setAttribute("code.function", "NewAccountRealPayload"), n.setAttribute("outsystems.function.key", "15f8e1c8-6dbc-4b60-88b8-d9a686178fd6"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return a.safeExecuteJSNode(O, "NewAccountRealPayload", "AddNewAccountAction", {
                                                GetSettings: e.DataConversion.JSNodeParamConverter.to(m.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                SelectedCurrency: e.DataConversion.JSNodeParamConverter.to(t.variables.availableAccountsVar.getCurrent(r.iterationContext).codeAttr, e.DataTypes.DataTypes.Text),
                                                Payload: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                            }, function(g) {
                                                var y = new(a.constructor.getVariableGroupType("tradershub.MainFlow.AddMoreAccount.AddNewAccountAction$newAccountRealPayloadJSResult"));
                                                return y.payloadOut = e.DataConversion.JSNodeParamConverter.from(g.Payload, e.DataTypes.DataTypes.Text), y
                                            }, {}, {})
                                        } finally {
                                            n && n.end()
                                        }
                                    }, 1), t.flush(), h.derivApiSendMessage$Action(v.value.payloadOut, "new_account_real", r).then(function(n) {
                                        i.value = n
                                    }).then(function() {
                                        return e.Flow.executeSequence(function() {
                                            if (i.value.isErrorOut) e.FeedbackMessageService.showFeedbackMessage(i.value.errorMessageOut, 3), t.variables.isLoadingVar = !1;
                                            else return T.value.dataOut = e.JSONUtils.deserializeFromJSON(i.value.responseOut, C, !1), w.setAuthToken(T.value.dataOut.new_account_realAttr.oauth_tokenAttr), e.Logger.startActiveSpan("UpdateAccountList", function(n) {
                                                n && (n.setAttribute("code.function", "UpdateAccountList"), n.setAttribute("outsystems.function.key", "7d5918dd-f633-4fd1-b6e8-ed3dee2c36da"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return a.safeExecuteJSNode(D, "UpdateAccountList", "AddNewAccountAction", {
                                                        Token: e.DataConversion.JSNodeParamConverter.to(T.value.dataOut.new_account_realAttr.oauth_tokenAttr, e.DataTypes.DataTypes.Text),
                                                        LoginId: e.DataConversion.JSNodeParamConverter.to(T.value.dataOut.new_account_realAttr.client_idAttr, e.DataTypes.DataTypes.Text)
                                                    }, function(g) {}, {}, {})
                                                } finally {
                                                    n && n.end()
                                                }
                                            }, 1), t.flush(), h.sendAuthorize$Action(!0, r).then(function(n) {
                                                u.value = n
                                            }).then(function() {
                                                b.value.jSONOut = e.JSONUtils.serializeToJSON(t.variables.availableAccountsVar, !1, !1), l.value = e.Logger.startActiveSpan("RemoveSelectedAccount", function(n) {
                                                    n && (n.setAttribute("code.function", "RemoveSelectedAccount"), n.setAttribute("outsystems.function.key", "84744806-5ab6-4654-8b81-8fbdc959e15a"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                    try {
                                                        return a.safeExecuteJSNode(R, "RemoveSelectedAccount", "AddNewAccountAction", {
                                                            SelectedCurrency: e.DataConversion.JSNodeParamConverter.to(t.variables.availableAccountsVar.getCurrent(r.iterationContext).codeAttr, e.DataTypes.DataTypes.Text),
                                                            AvailableAccounts: e.DataConversion.JSNodeParamConverter.to(b.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                            Response: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                            ShouldRedirectToOptions: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                                        }, function(g) {
                                                            var y = new(a.constructor.getVariableGroupType("tradershub.MainFlow.AddMoreAccount.AddNewAccountAction$removeSelectedAccountJSResult"));
                                                            return y.responseOut = e.DataConversion.JSNodeParamConverter.from(g.Response, e.DataTypes.DataTypes.Text), y.shouldRedirectToOptionsOut = e.DataConversion.JSNodeParamConverter.from(g.ShouldRedirectToOptions, e.DataTypes.DataTypes.Boolean), y
                                                        }, {}, {})
                                                    } finally {
                                                        n && n.end()
                                                    }
                                                }, 1), F.value.dataOut = e.JSONUtils.deserializeFromJSON(l.value.responseOut, S, !1), w.setActiveTradingLoginId(u.value.responseOut.authorizeAttr.loginidAttr), t.variables.isLoadingVar = !1, t.variables.availableAccountsVar = F.value.dataOut, e.FeedbackMessageService.showFeedbackMessage(u.value.responseOut.authorizeAttr.currencyAttr + e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("hNv6JEs2FECYWJoo0eZIXA#Message.-1310993086.1", " options trading account added."), 1)
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
            return e.Logger.startActiveSpan("OnAfterFetch__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnAfterFetch"), a.setAttribute("outsystems.function.key", "9244253b-2dd9-42c4-8e37-402229dd80b5"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onAfterFetch$Action, r)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        addNewAccountAction$Action(r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("AddNewAccountAction__proxy", function(a) {
                return a && (a.setAttribute("code.function", "AddNewAccountAction"), a.setAttribute("outsystems.function.key", "e0569aa3-17c3-4191-93e7-575846474ce1"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._addNewAccountAction$Action, r)
                }, function() {
                    a && a.end()
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
                return M.default.handleError(r, this.callContext())
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return h.defaultTimeout
        }
    };
    d(A, "ControllerInner");
    let s = A;
    _ = s, _.registerVariableGroupType("tradershub.MainFlow.AddMoreAccount.OnAfterFetch$modifyDataJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), _.registerVariableGroupType("tradershub.MainFlow.AddMoreAccount.AddNewAccountAction$newAccountRealPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), _.registerVariableGroupType("tradershub.MainFlow.AddMoreAccount.AddNewAccountAction$removeSelectedAccountJSResult", [{
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
var _, ue = new e.Controller.ControllerFactory(_, J);
export {
    ue as a
};