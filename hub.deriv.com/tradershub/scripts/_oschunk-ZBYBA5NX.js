import {
    a as _
} from "./_oschunk-UK73WSZT.js";
import {
    a as b
} from "./_oschunk-Y45M2O2K.js";
import {
    d as f
} from "./_oschunk-27GDEXUT.js";
import {
    ia as y
} from "./_oschunk-NTQBNJ73.js";
import {
    c as d
} from "./_oschunk-DVBKI63I.js";
var g = {
        "VOitC6kJKkW9G1_Ev1yQcA#Value": "Voir les transactions",
        "aS0uG5zS+0aboChDFz53Xg#Value": "r\xE9seau lors du transfert vers Deriv. Des transferts incorrects peuvent entra\xEEner une perte de fonds.",
        "VdEsO1d1WE+jDaXxwvPUyg#Value": "Dans votre portefeuille crypto, s\xE9lectionnez le",
        "ZtOd9uYc1UOO3qNrfxQlnA#Value": "Pour \xE9viter la perte de fonds :",
        "Lr7hbpVptU2zuSTcnZkrGQ#Value": "Copi\xE9",
        "6E1f4sIdD0iz_GdQ_TDn0w#Value": "Retour",
        "S_w_+ypGc06GCEGp1JHxFA#Value": "Erreur"
    },
    v = {
        "fr-FR": {
            translations: g,
            isRTL: !1
        }
    };

function A(c, l, m, t) {
    navigator.clipboard.writeText(c.TextToCopy).catch(r => {
        console.error("Failed to copy text: ", r)
    })
}
d(A, "default");

function h(c, l, m, t) {
    let r = document.getElementById("QRCode");
    r && window.QRCode && r.childNodes.length === 0 && new QRCode(r, {
        text: c.CryptoAddress,
        width: 156,
        height: 156
    })
}
d(h, "default");
var o = y; {
    let l = class l extends o.Controller.BaseViewController {
        constructor(t, r, e) {
            super(t, r, e, v);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCurrencies$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCurrencies$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getCurrencies$AggrRefresh() {
            return this.hasOwnProperty("_getCurrencies$AggrRefresh") || (this._getCurrencies$AggrRefresh = function() {
                var t = function(r, e, s) {
                    var n = this.model,
                        i = this.controller,
                        s = i.callContext(s);
                    return i.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrencies", "screenservices/tradershub/WalletFlows/WalletsCryptoDeposit/ScreenDataSetGetCurrencies", "npjMYW44GFvhkxw14gO3vA", r, e, function(u) {
                        n.variables.getCurrenciesAggr.dataFetchStatusAttr = u
                    }, function(u) {
                        n.variables.getCurrenciesAggr.replaceWith(o.DataConversion.ServerDataConverter.from(u, n.variables.getCurrenciesAggr.constructor))
                    }, void 0, void 0, void 0, s, void 0, !0).then(function() {
                        return i._getCurrenciesOnAfterFetch$Action(i.callContext(s))
                    })
                }.bind(this);
                return o.Logger.startActiveSpan("GetCurrencies", function(r) {
                    return r && (r.setAttribute("code.function", "GetCurrencies"), r.setAttribute("outsystems.function.key", "692abfde-a25b-4da4-8efd-c16df055b0b0"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), o.Flow.tryFinally(function() {
                        return t()
                    }, function() {
                        r && r.end()
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
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    a = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "28416295-2fd0-495f-92de-652db6e904ad"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var i = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return r.variables.isLoadingVar = !0, r.flush(), f.postCashierCryptoDeposit$Action("deposit", t).then(function(s) {
                                i.value = s
                            }).then(function() {
                                r.variables.cryptoAddressVar = i.value.responseOut.cashierAttr.depositAttr.addressAttr, r.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _getCurrenciesOnAfterFetch$Action() {
            return this.hasOwnProperty("__getCurrenciesOnAfterFetch$Action") || (this.__getCurrenciesOnAfterFetch$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    a = this.idService;
                return o.Logger.startActiveSpan("GetCurrenciesOnAfterFetch", function(n) {
                    return n && (n.setAttribute("code.function", "GetCurrenciesOnAfterFetch"), n.setAttribute("outsystems.function.key", "66161f2d-22c4-4737-983c-1361ef43aed8"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        e.ensureControllerAlive("GetCurrenciesOnAfterFetch"), t = e.callContext(t);
                        var i = new o.DataTypes.VariableHolder,
                            s = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return r.flush(), f.sendAuthorize$Action(!1, t).then(function(u) {
                                s.value = u
                            }).then(function() {
                                i.value = o.SystemActions.listFilter(r.variables.getCurrenciesAggr.listOut, function(u) {
                                    return u.currenciesAttr.codeAttr === s.value.responseOut.authorizeAttr.currencyAttr
                                }, t), r.variables.currencyVar = i.value.filteredListOut.getCurrent(t.iterationContext).currenciesAttr
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__getCurrenciesOnAfterFetch$Action
        }
        set _getCurrenciesOnAfterFetch$Action(t) {
            this.__getCurrenciesOnAfterFetch$Action = t
        }
        get _clipboardAction$Action() {
            return this.hasOwnProperty("__clipboardAction$Action") || (this.__clipboardAction$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    a = this.idService;
                return o.Logger.startActiveSpan("ClipboardAction", function(n) {
                    n && (n.setAttribute("code.function", "ClipboardAction"), n.setAttribute("outsystems.function.key", "6dba5fea-499a-47be-a472-5fde952c6c27"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("ClipboardAction"), t = e.callContext(t), o.Logger.startActiveSpan("ClipboardAction", function(i) {
                            i && (i.setAttribute("code.function", "ClipboardAction"), i.setAttribute("outsystems.function.key", "9d81bf5b-63a1-4a10-8e0a-f4e863272ee5"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(A, "ClipboardAction", "ClipboardAction", {
                                    TextToCopy: o.DataConversion.JSNodeParamConverter.to(r.variables.cryptoAddressVar, o.DataTypes.DataTypes.Text)
                                }, function(s) {}, {}, {})
                            } finally {
                                i && i.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__clipboardAction$Action
        }
        set _clipboardAction$Action(t) {
            this.__clipboardAction$Action = t
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    a = this.idService;
                return o.Logger.startActiveSpan("OnRender", function(n) {
                    n && (n.setAttribute("code.function", "OnRender"), n.setAttribute("outsystems.function.key", "8d559dbf-56d7-4900-bfe5-fd522eeca08b"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnRender"), t = e.callContext(t), o.Logger.startActiveSpan("InitQR", function(i) {
                            i && (i.setAttribute("code.function", "InitQR"), i.setAttribute("outsystems.function.key", "5d91dacb-ae52-41e3-a82d-42b564d42217"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(h, "InitQR", "OnRender", {
                                    CryptoAddress: o.DataConversion.JSNodeParamConverter.to(r.variables.cryptoAddressVar, o.DataTypes.DataTypes.Text)
                                }, function(s) {}, {}, {})
                            } finally {
                                i && i.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(t) {
            this.__onRender$Action = t
        }
        onReady$Action(t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "28416295-2fd0-495f-92de-652db6e904ad"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        getCurrenciesOnAfterFetch$Action(t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("GetCurrenciesOnAfterFetch__proxy", function(e) {
                return e && (e.setAttribute("code.function", "GetCurrenciesOnAfterFetch"), e.setAttribute("outsystems.function.key", "66161f2d-22c4-4737-983c-1361ef43aed8"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._getCurrenciesOnAfterFetch$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        clipboardAction$Action(t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("ClipboardAction__proxy", function(e) {
                e && (e.setAttribute("code.function", "ClipboardAction"), e.setAttribute("outsystems.function.key", "6dba5fea-499a-47be-a472-5fde952c6c27"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._clipboardAction$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onRender$Action(t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnRender__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnRender"), e.setAttribute("outsystems.function.key", "8d559dbf-56d7-4900-bfe5-fd522eeca08b"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onRender$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var r = this.controller,
                    e = this.model,
                    a = this.idService;
                return r.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(t) {
                var r = this.controller,
                    e = this.model,
                    a = this.idService;
                return r.onRender$Action(t)
            }), this._onRenderEventHandler
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
                return _.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return f.defaultTimeout
        }
    };
    d(l, "ControllerInner");
    let c = l;
    C = c
}
var C, P = new o.Controller.ControllerFactory(C, b);
export {
    P as a
};