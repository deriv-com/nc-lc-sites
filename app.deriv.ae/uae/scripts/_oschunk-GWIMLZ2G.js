import {
    a as q
} from "./_oschunk-ICR7HB42.js";
import {
    a as Q
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import {
    a as ae
} from "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as v,
    h as G,
    i as U,
    j as z,
    k as B,
    n as E,
    u as D
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ue,
    g as N,
    m as te,
    n as re,
    q as ne,
    r as ie,
    s as k,
    t as $
} from "./_oschunk-4VHUVDBV.js";
import {
    a as ee
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Ca as W,
    Sb as x,
    a as Y,
    aa as A,
    nb as I,
    ub as h
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as T,
    c as d,
    e as le,
    m as P,
    n as O,
    p as R,
    w as M
} from "./_oschunk-M5BUVJ72.js";
var de = {
        "v4M3MyGd4kyIuqSpKO51sQ#Value": "\u0625\u062C\u0631\u0627\u0621",
        "9VrfbhCzUkueGEqUmkv6VA#ValueExpression.1032.1": " (",
        "9VrfbhCzUkueGEqUmkv6VA#ValueExpression.41.1": ")",
        "GPyHm3TgmkO_RQLUuXgY+Q#Value": "\u0623\u062E\u0631\u0649",
        "BlkNOwKZUUmmr+fr6o0s9A#Value": "\u0625\u062C\u0631\u0627\u0621",
        "ACVj1bSInUeHHiuUsW1fPw#ValueExpression.1032.1": " (",
        "ACVj1bSInUeHHiuUsW1fPw#ValueExpression.41.1": ")",
        "Ta7acCwKMU+cKApRWcLLQA#Value": "\u0645\u064F\u0642\u062A\u0631\u062D",
        "2QqAQdbyLEGx1V7KpY_2OQ#Value": "\u0647\u064A\u0627 \u0646\u0641\u0639\u0651\u0644 \u0645\u062D\u0641\u0638\u0629",
        "hJ8eEoixa0mRXZD8COfwbQ#Value.-1323258979.1": "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u062D\u0641\u0638\u0629.",
        "mbDhC0wxd0+M31pR_sPFpg#Title": "\u0625\u0636\u0627\u0641\u0629 \u0645\u062D\u0641\u0638\u0629 | Deriv",
        "mbDhC0wxd0+M31pR_sPFpg#TitleExpression.-1759009646.1": "\u0625\u0636\u0627\u0641\u0629 \u0645\u062D\u0641\u0638\u0629 | Deriv"
    },
    oe = {
        "ar-001": {
            translations: de,
            isRTL: !0
        }
    };
var t = T; {
    let m = class m extends t.Controller.BaseViewController {
        constructor(e, r, s) {
            super(e, r, s, oe);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postWallets$ServerAction() {
            return this.hasOwnProperty("_postWallets$ServerAction") || (this._postWallets$ServerAction = function(e, r, s) {
                var u = this.controller;
                return t.Logger.startActiveSpan("PostWallets", function(l) {
                    return l && (l.setAttribute("code.function", "PostWallets"), l.setAttribute("outsystems.function.key", "5845eb09-25fe-4708-b6d5-4db07ff0e39a"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var f = {
                            authorization: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text),
                            Request: t.DataConversion.ServerDataConverter.to(r, t.DataTypes.DataTypes.Record)
                        };
                        return u.callServerAction("PostWallets", "screenservices/uae/MainFlow/AddWallet/ActionPostWallets", "TKNVFu+4FInQfxWXdmw8Uw", f, u.callContext(s), void 0, void 0, !0).then(function(_) {
                            var n = new(u.constructor.getVariableGroupType("uae.MainFlow.AddWallet$ActionPostWallets"));
                            return n.responseOut = t.DataConversion.ServerDataConverter.from(_.Response, I), n
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 0)
            }), this._postWallets$ServerAction
        }
        set postWallets$ServerAction(e) {
            this._postWallets$ServerAction = e
        }
        get getWalletList$ServerAction() {
            return this.hasOwnProperty("_getWalletList$ServerAction") || (this._getWalletList$ServerAction = function(e, r) {
                var s = this.controller;
                return t.Logger.startActiveSpan("GetWalletList", function(u) {
                    return u && (u.setAttribute("code.function", "GetWalletList"), u.setAttribute("outsystems.function.key", "457611d5-9b1a-4faf-a88a-d21184a30f68"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var l = {
                            authorization: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text)
                        };
                        return s.callServerAction("GetWalletList", "screenservices/uae/MainFlow/AddWallet/ActionGetWalletList", "mBL53KMNBzvxE1nMqxclWg", l, s.callContext(r), void 0, void 0, !0).then(function(f) {
                            var _ = new(s.constructor.getVariableGroupType("uae.MainFlow.AddWallet$ActionGetWalletList"));
                            return _.responseOut = t.DataConversion.ServerDataConverter.from(f.Response, W), _
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 0)
            }), this._getWalletList$ServerAction
        }
        set getWalletList$ServerAction(e) {
            this._getWalletList$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSelectCurrency$Action() {
            return this.hasOwnProperty("__onSelectCurrency$Action") || (this.__onSelectCurrency$Action = function(e, r) {
                var s = this.model,
                    u = this.controller,
                    l = this.idService;
                return t.Logger.startActiveSpan("OnSelectCurrency", function(f) {
                    return f && (f.setAttribute("code.function", "OnSelectCurrency"), f.setAttribute("outsystems.function.key", "7517acab-4e4a-4a58-855d-bf83252739f0"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        u.ensureControllerAlive("OnSelectCurrency"), r = u.callContext(r);
                        var _ = new t.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("uae.MainFlow.AddWallet.OnSelectCurrency$vars")));
                        _.value.currency_inputInLocal = e;
                        var n = new t.DataTypes.VariableHolder(new t.DataTypes.ErrorHandlerOutputType),
                            b = new t.DataTypes.VariableHolder,
                            S = new t.DataTypes.VariableHolder,
                            y = new t.DataTypes.VariableHolder,
                            a = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                if (!s.variables.is_submittingVar) return y.value = x.getAuth$Action(r), a.value = t.SystemActions.listIndexOf(s.variables.available_walletsVar, function(i) {
                                    return i.currencyAttr === _.value.currency_inputInLocal
                                }, r), s.variables.wallet_requestVar = s.variables.available_walletsVar.getItem(a.value.positionOut), s.variables.is_submittingVar = !0, s.flush(), u.postWallets$ServerAction(y.value.tokenOut, s.variables.wallet_requestVar, r).then(function(i) {
                                    b.value = i
                                }).then(function() {
                                    return s.variables.is_submittingVar = !1, S.value = x.getToastConfig$Action(r), ae.iziToast_Show$Action("", t.BuiltinFunctions.toUpper(_.value.currency_inputInLocal) + t.Injector.resolve(t.ServiceNames.TranslationsService).getMessage("hJ8eEoixa0mRXZD8COfwbQ#Value.-1323258979.1", " wallet is added."), Y.iziToast_Position.bottomCenter, S.value.configOut, r), t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "home", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0))
                                })
                            })
                        }).catch(function(i) {
                            if (t.Logger.debug("AddWallet.OnSelectCurrency", t.Exceptions.getMessage(i)), !t.Exceptions.isSystem(i)) return t.Logger.error(null, i, null, null, 1), n.value.exceptionMessageAttr = t.Exceptions.getMessage(i), t.Logger.startActiveSpan("AllExceptions", function(p) {
                                return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "bf00a188-226d-4d47-965f-1dee13ffef86"), p.setAttribute("outsystems.function.owner.name", "uae"), p.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), t.Flow.tryFinally(function() {
                                    return t.Flow.executeAsyncFlow(function() {
                                        return s.variables.is_submittingVar = !1, t.Flow.returnAsync()
                                    })
                                }, function() {
                                    p && p.end()
                                })
                            }, 1);
                            throw i
                        })
                    }, function() {
                        f && f.end()
                    })
                }, 1)
            }), this.__onSelectCurrency$Action
        }
        set _onSelectCurrency$Action(e) {
            this.__onSelectCurrency$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    s = this.controller,
                    u = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(l) {
                    return l && (l.setAttribute("code.function", "OnReady"), l.setAttribute("outsystems.function.key", "ea2a4206-fbf0-484d-87c7-d25ce6cc1cdd"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        s.ensureControllerAlive("OnReady"), e = s.callContext(e);
                        var f = new t.DataTypes.VariableHolder(new t.DataTypes.ErrorHandlerOutputType),
                            _ = new t.DataTypes.VariableHolder,
                            n = new t.DataTypes.VariableHolder,
                            b = new t.DataTypes.VariableHolder,
                            S = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return r.variables.is_loadingVar = !0, b.value = x.getAuth$Action(e), r.flush(), s.getWalletList$ServerAction(b.value.tokenOut, e).then(function(y) {
                                _.value = y
                            }).then(function() {
                                r.variables.available_walletsVar = _.value.responseOut.dataAttr.available_walletsAttr, S.value = t.SystemActions.listFilter(_.value.responseOut.dataAttr.available_walletsAttr, function(y) {
                                    return y.categoryAttr === "recommended"
                                }, e), r.variables.recommended_currenciesVar = S.value.filteredListOut, n.value = t.SystemActions.listFilter(_.value.responseOut.dataAttr.available_walletsAttr, function(y) {
                                    return y.categoryAttr === "other"
                                }, e), r.variables.other_currenciesVar = n.value.filteredListOut, r.variables.is_loadingVar = !1
                            })
                        }).catch(function(y) {
                            if (t.Logger.debug("AddWallet.OnReady", t.Exceptions.getMessage(y)), !t.Exceptions.isSystem(y)) return f.value.exceptionMessageAttr = t.Exceptions.getMessage(y), t.Logger.startActiveSpan("AllExceptions", function(a) {
                                return a && (a.setAttribute("code.function", "AllExceptions"), a.setAttribute("outsystems.function.key", "c38367d8-a02f-40ec-81fb-d738a3ad3d79"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), t.Flow.tryFinally(function() {
                                    return t.Flow.executeAsyncFlow(function() {
                                        return t.Flow.returnAsync()
                                    })
                                }, function() {
                                    a && a.end()
                                })
                            }, 1);
                            throw y
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onSelectCurrency$Action(e, r) {
            var s = this.controller;
            return t.Logger.startActiveSpan("OnSelectCurrency__proxy", function(u) {
                return u && (u.setAttribute("code.function", "OnSelectCurrency"), u.setAttribute("outsystems.function.key", "7517acab-4e4a-4a58-855d-bf83252739f0"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._onSelectCurrency$Action, r, e)
                }, function() {
                    u && u.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(s) {
                return s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "ea2a4206-fbf0-484d-87c7-d25ce6cc1cdd"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    s && s.end()
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
                    s = this.model,
                    u = this.idService;
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
                return q.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return x.defaultTimeout
        }
    };
    d(m, "ControllerInner");
    let w = m;
    L = w, L.registerVariableGroupType("uae.MainFlow.AddWallet$ActionPostWallets", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: d(function() {
            return new I
        }, "defaultValue"),
        complexType: I
    }]), L.registerVariableGroupType("uae.MainFlow.AddWallet$ActionGetWalletList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: d(function() {
            return new W
        }, "defaultValue"),
        complexType: W
    }]), L.registerVariableGroupType("uae.MainFlow.AddWallet.OnSelectCurrency$vars", [{
        name: "currency_input",
        attrName: "currency_inputInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }])
}
var L, K = new t.Controller.ControllerFactory(L, ee);
var c = le(ue());
var g = T,
    Z = class Z extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("recommended_currencies", "recommended_currenciesVar", "recommended_currencies", !0, !1, g.DataTypes.DataTypes.RecordList, function() {
                return g.DataTypes.ImmutableBase.getData(new(g.GenericTypeCache.getGenericList(A)))
            }, !1, g.GenericTypeCache.getGenericList(A)), this.attr("other_currencies", "other_currenciesVar", "other_currencies", !0, !1, g.DataTypes.DataTypes.RecordList, function() {
                return g.DataTypes.ImmutableBase.getData(new(g.GenericTypeCache.getGenericList(A)))
            }, !1, g.GenericTypeCache.getGenericList(A)), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("available_wallets", "available_walletsVar", "available_wallets", !0, !1, g.DataTypes.DataTypes.RecordList, function() {
                return g.DataTypes.ImmutableBase.getData(new(g.GenericTypeCache.getGenericList(A)))
            }, !1, g.GenericTypeCache.getGenericList(A)), this.attr("wallet_request", "wallet_requestVar", "wallet_request", !0, !1, g.DataTypes.DataTypes.Record, function() {
                return g.DataTypes.ImmutableBase.getData(new A)
            }, !1, A), this.attr("is_submitting", "is_submittingVar", "is_submitting", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(Z, "VariablesRecord");
var H = Z;
H.init();
var J = class J extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
d(J, "WidgetsRecord");
var j = J,
    V = class V extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return H
        }
        static getWidgetsRecordConstructor() {
            return j
        }
        static get hasValidationWidgets() {
            return V._hasValidationWidgetsValue === void 0 && (V._hasValidationWidgetsValue = void 0), V._hasValidationWidgetsValue
        }
        setInputs(m) {}
    };
d(V, "Model");
var F = V;
F._hasValidationWidgetsValue = void 0;
var X = new g.Model.ModelFactory(F);
var C = N.PlaceholderContent,
    ce = N.IteratorPlaceholderContent,
    ge = d(function() {
        var w = re(function(m) {
            var o = m.model,
                e = m.controller,
                r = m.controller.idService,
                s = e.validationService,
                u = e.callContext(),
                l = k,
                f = $,
                _ = {
                    props: m,
                    validateWidget: d(function(a) {
                        m.validateWidget(m, a)
                    }, "validateWidget")
                },
                n = o,
                b = ie,
                S = ne,
                y = te();
            return c.createElement("div", m.rootNodeProperties, c.createElement(Q, {
                getOwnerSpan: d(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: d(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_back_button: !0,
                    show_loader: o.variables.is_submittingVar
                },
                events: {
                    _handleError: d(function(a) {
                        e.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: s
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    content: new C(function() {
                        return [c.createElement(v, {
                            align: 0,
                            animate: !1,
                            style: "heading",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "PageHeading"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(D, {
                            extendedProperties: {
                                style: "font-weight: 900;"
                            },
                            text: [S(f("2QqAQdbyLEGx1V7KpY_2OQ#Value", "Let\u2019s activate a wallet"))],
                            _idProps: {
                                service: r,
                                uuid: "2"
                            },
                            _widgetRecordProvider: n
                        })), c.createElement(v, {
                            align: 0,
                            animate: !1,
                            style: "currency-container",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "CurrencyListContainer"
                            },
                            _widgetRecordProvider: n
                        }, b(o.variables.recommended_currenciesVar.length > 0, !1, this, function() {
                            return [c.createElement(v, {
                                align: 0,
                                animate: !1,
                                style: "category-container",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "RecommendedCurrenciesContainer"
                                },
                                _widgetRecordProvider: n
                            }, c.createElement(D, {
                                extendedProperties: {
                                    style: "color: rgba(0, 0, 0, 0.96); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                text: [S(f("Ta7acCwKMU+cKApRWcLLQA#Value", "Recommended"))],
                                _idProps: {
                                    service: r,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: n
                            }), b(o.variables.is_loadingVar, !1, this, function() {
                                return [c.createElement(v, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-top: 4px;"
                                    },
                                    gridProperties: {
                                        classes: "OSInline"
                                    },
                                    style: "animate-pulse w-full currency list-container",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "LoaderContainer"
                                    },
                                    _widgetRecordProvider: n
                                }, c.createElement(v, {
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
                                        service: r,
                                        name: "ListItemPlaceholder"
                                    },
                                    _widgetRecordProvider: n
                                }))]
                            }, function() {
                                return [c.createElement(U, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: o.variables.recommended_currenciesVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: r,
                                        name: "RecommendedCurrencyList"
                                    },
                                    _widgetRecordProvider: n,
                                    placeholders: {
                                        content: new ce(function(a, i) {
                                            return [c.createElement(z, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: d(function() {
                                                    return Promise.resolve().then(function() {
                                                        var p = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                        return e.onSelectCurrency$Action(o.variables.recommended_currenciesVar.getCurrent(i.iterationContext).currencyAttr, e.callContext(p))
                                                    })
                                                }, "onClick"),
                                                style: o.getCachedValue(a.getId("CurrencyListItem.Style"), function() {
                                                    return o.variables.recommended_currenciesVar.getCurrent(i.iterationContext).currencyAttr === h.getcurrency() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return o.variables.recommended_currenciesVar.getCurrent(i.iterationContext).currencyAttr
                                                }, function() {
                                                    return h.getcurrency()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: a,
                                                    name: "CurrencyListItem"
                                                },
                                                _widgetRecordProvider: n,
                                                placeholders: {
                                                    leftActions: C.Empty,
                                                    content: new C(function() {
                                                        return [c.createElement(v, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "align-items: center; display: flex;"
                                                            },
                                                            gridProperties: {
                                                                classes: "OSInline",
                                                                width: "100%"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: a,
                                                                uuid: "10"
                                                            },
                                                            _widgetRecordProvider: n
                                                        }, c.createElement(v, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "height: 24px; margin-right: 16px;"
                                                            },
                                                            gridProperties: {
                                                                classes: "OSInline",
                                                                width: "24px"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: a,
                                                                uuid: "11"
                                                            },
                                                            _widgetRecordProvider: n
                                                        }, c.createElement(E, {
                                                            extendedProperties: {
                                                                style: "height: fit-content;"
                                                            },
                                                            gridProperties: {
                                                                width: "fit-content"
                                                            },
                                                            type: 1,
                                                            url: o.getCachedValue(a.getId("XtGQC4iICk2mB5CLjsKHmA.Url"), function() {
                                                                return "/ChampionApp/img/ChampionApp.currency" + M.toLower(o.variables.recommended_currenciesVar.getCurrent(i.iterationContext).currencyAttr) + ".svg"
                                                            }, function() {
                                                                return o.variables.recommended_currenciesVar.getCurrent(i.iterationContext).currencyAttr
                                                            }),
                                                            _idProps: {
                                                                service: a,
                                                                uuid: "12"
                                                            },
                                                            _widgetRecordProvider: n
                                                        })), c.createElement(G, {
                                                            gridProperties: {
                                                                classes: "ThemeGrid_MarginGutter"
                                                            },
                                                            value: o.variables.recommended_currenciesVar.getCurrent(i.iterationContext).labelAttr + P.resolve(O.TranslationsService).getMessage("ACVj1bSInUeHHiuUsW1fPw#ValueExpression.1032.1", " (") + o.variables.recommended_currenciesVar.getCurrent(i.iterationContext).currencyAttr + P.resolve(O.TranslationsService).getMessage("ACVj1bSInUeHHiuUsW1fPw#ValueExpression.41.1", ")"),
                                                            _idProps: {
                                                                service: a,
                                                                uuid: "13"
                                                            },
                                                            _widgetRecordProvider: n
                                                        }), c.createElement(v, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "align-items: center; display: flex; justify-content: center;"
                                                            },
                                                            gridProperties: {
                                                                classes: "OSInline",
                                                                width: "32px",
                                                                marginLeft: "auto"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: a,
                                                                uuid: "14"
                                                            },
                                                            _widgetRecordProvider: n
                                                        }, b(o.variables.recommended_currenciesVar.getCurrent(i.iterationContext).currencyAttr === h.getcurrency(), !1, this, function() {
                                                            return [c.createElement(E, {
                                                                image: R.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: a,
                                                                    uuid: "15"
                                                                },
                                                                _widgetRecordProvider: n
                                                            })]
                                                        }, function() {
                                                            return [c.createElement(E, {
                                                                image: R.VersionedURL.getVersionedUrl("img/uae.chevronright.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: a,
                                                                    uuid: "16"
                                                                },
                                                                _widgetRecordProvider: n
                                                            })]
                                                        })))]
                                                    }),
                                                    rightActions: new C(function() {
                                                        return [c.createElement(B, {
                                                            onClick: d(function() {
                                                                return Promise.resolve().then(function() {
                                                                    var p = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                                    return e.onSelectCurrency$Action(o.variables.recommended_currenciesVar.getCurrent(i.iterationContext).currencyAttr, e.callContext(p))
                                                                })
                                                            }, "onClick"),
                                                            style: "list-item-action list-item-action-primary",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: a,
                                                                uuid: "17"
                                                            },
                                                            _widgetRecordProvider: n
                                                        }, S(f("BlkNOwKZUUmmr+fr6o0s9A#Value", "Action")))]
                                                    })
                                                },
                                                _dependencies: [l(h.getcurrency()), l(o.variables.recommended_currenciesVar.getCurrent(i.iterationContext).labelAttr), l(o.variables.recommended_currenciesVar.getCurrent(i.iterationContext).currencyAttr)]
                                            })]
                                        }, u, r, "1")
                                    },
                                    _dependencies: [l(h.getcurrency())]
                                })]
                            }))]
                        }, function() {
                            return []
                        }), c.createElement(v, {
                            align: 0,
                            animate: !1,
                            style: "category-container",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "OtherCurrenciesContainer"
                            },
                            _widgetRecordProvider: n
                        }, b(o.variables.recommended_currenciesVar.length > 0, !1, this, function() {
                            return [c.createElement(D, {
                                extendedProperties: {
                                    style: "color: rgba(0, 0, 0, 0.96); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                text: [S(f("GPyHm3TgmkO_RQLUuXgY+Q#Value", "Other"))],
                                _idProps: {
                                    service: r,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: n
                            })]
                        }, function() {
                            return []
                        }), b(o.variables.is_loadingVar, !1, this, function() {
                            return [c.createElement(v, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: fit-content; margin-top: 4px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                style: "animate-pulse w-full currency list-container",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "LoaderContainer2"
                                },
                                _widgetRecordProvider: n
                            }, c.createElement(v, {
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
                                    service: r,
                                    name: "ListItemPlaceholder2"
                                },
                                _widgetRecordProvider: n
                            }), c.createElement(v, {
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
                                    service: r,
                                    name: "ListItemPlaceholder3"
                                },
                                _widgetRecordProvider: n
                            }), c.createElement(v, {
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
                                    service: r,
                                    name: "ListItemPlaceholder4"
                                },
                                _widgetRecordProvider: n
                            }), c.createElement(v, {
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
                                    service: r,
                                    name: "ListItemPlaceholder5"
                                },
                                _widgetRecordProvider: n
                            }))]
                        }, function() {
                            return [c.createElement(U, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: o.variables.other_currenciesVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: r,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: n,
                                placeholders: {
                                    content: new ce(function(a, i) {
                                        return [c.createElement(z, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: d(function() {
                                                return Promise.resolve().then(function() {
                                                    var p = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                    return e.onSelectCurrency$Action(o.variables.other_currenciesVar.getCurrent(i.iterationContext).currencyAttr, e.callContext(p))
                                                })
                                            }, "onClick"),
                                            style: o.getCachedValue(a.getId("ListItem1.Style"), function() {
                                                return o.variables.other_currenciesVar.getCurrent(i.iterationContext).currencyAttr === h.getcurrency() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return o.variables.other_currenciesVar.getCurrent(i.iterationContext).currencyAttr
                                            }, function() {
                                                return h.getcurrency()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: a,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: n,
                                            placeholders: {
                                                leftActions: C.Empty,
                                                content: new C(function() {
                                                    return [c.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "align-items: center; display: flex;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "100%"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: a,
                                                            uuid: "27"
                                                        },
                                                        _widgetRecordProvider: n
                                                    }, c.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "height: 24px; margin-right: 16px;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "24px"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: a,
                                                            uuid: "28"
                                                        },
                                                        _widgetRecordProvider: n
                                                    }, c.createElement(E, {
                                                        extendedProperties: {
                                                            style: "height: fit-content;"
                                                        },
                                                        gridProperties: {
                                                            width: "fit-content"
                                                        },
                                                        type: 1,
                                                        url: o.getCachedValue(a.getId("Lo_JZXqp10iVv2m_R_XkHw.Url"), function() {
                                                            return "/ChampionApp/img/ChampionApp.currency" + M.toLower(o.variables.other_currenciesVar.getCurrent(i.iterationContext).currencyAttr) + ".svg"
                                                        }, function() {
                                                            return o.variables.other_currenciesVar.getCurrent(i.iterationContext).currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: a,
                                                            uuid: "29"
                                                        },
                                                        _widgetRecordProvider: n
                                                    })), c.createElement(G, {
                                                        gridProperties: {
                                                            classes: "ThemeGrid_MarginGutter"
                                                        },
                                                        value: o.variables.other_currenciesVar.getCurrent(i.iterationContext).labelAttr + P.resolve(O.TranslationsService).getMessage("9VrfbhCzUkueGEqUmkv6VA#ValueExpression.1032.1", " (") + o.variables.other_currenciesVar.getCurrent(i.iterationContext).currencyAttr + P.resolve(O.TranslationsService).getMessage("9VrfbhCzUkueGEqUmkv6VA#ValueExpression.41.1", ")"),
                                                        _idProps: {
                                                            service: a,
                                                            uuid: "30"
                                                        },
                                                        _widgetRecordProvider: n
                                                    }), c.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "align-items: center; display: flex; justify-content: center;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "32px",
                                                            marginLeft: "auto"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: a,
                                                            uuid: "31"
                                                        },
                                                        _widgetRecordProvider: n
                                                    }, b(o.variables.other_currenciesVar.getCurrent(i.iterationContext).currencyAttr === h.getcurrency(), !1, this, function() {
                                                        return [c.createElement(E, {
                                                            image: R.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: a,
                                                                uuid: "32"
                                                            },
                                                            _widgetRecordProvider: n
                                                        })]
                                                    }, function() {
                                                        return [c.createElement(E, {
                                                            image: R.VersionedURL.getVersionedUrl("img/uae.chevronright.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: a,
                                                                uuid: "33"
                                                            },
                                                            _widgetRecordProvider: n
                                                        })]
                                                    })))]
                                                }),
                                                rightActions: new C(function() {
                                                    return [c.createElement(B, {
                                                        onClick: d(function() {
                                                            return Promise.resolve().then(function() {
                                                                var p = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                                return e.onSelectCurrency$Action(o.variables.other_currenciesVar.getCurrent(i.iterationContext).currencyAttr, e.callContext(p))
                                                            })
                                                        }, "onClick"),
                                                        style: "list-item-action list-item-action-primary",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: a,
                                                            uuid: "34"
                                                        },
                                                        _widgetRecordProvider: n
                                                    }, S(f("v4M3MyGd4kyIuqSpKO51sQ#Value", "Action")))]
                                                })
                                            },
                                            _dependencies: [l(h.getcurrency()), l(o.variables.other_currenciesVar.getCurrent(i.iterationContext).labelAttr), l(o.variables.other_currenciesVar.getCurrent(i.iterationContext).currencyAttr)]
                                        })]
                                    }, u, r, "2")
                                },
                                _dependencies: [l(h.getcurrency())]
                            })]
                        })))]
                    }),
                    footer: C.Empty
                },
                _dependencies: [l(o.variables.other_currenciesVar), l(h.getcurrency()), l(o.variables.is_loadingVar), l(o.variables.recommended_currenciesVar)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: d(function() {
                return {
                    codeFunction: "AddWallet",
                    functionKey: "0be1b099-314c-4f77-8cdf-5a51fec3c5a6",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "MainFlow.AddWallet",
            modelFactory: X,
            controllerFactory: K,
            getTitle: d(function(m) {
                var o = m.model,
                    e = m.controller,
                    r = m.controller.idService,
                    s = e.validationService,
                    u = e.callContext(),
                    l = k,
                    f = $,
                    _ = {
                        props: m,
                        validateWidget: d(function(n) {
                            m.validateWidget(m, n)
                        }, "validateWidget")
                    };
                return P.resolve(O.TranslationsService).getMessage("mbDhC0wxd0+M31pR_sPFpg#TitleExpression.-1759009646.1", "Add wallet | Deriv")
            }, "getTitle")
        });
        return w.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.MainFlow.AddWallet.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, w.getJsDependencies = function() {
            return []
        }, w.getBlocks = function() {
            return [Q]
        }, w
    }, "componentFactory"),
    me = ge();
export {
    K as controllerModule, X as modelModule, me as viewModule, q as webFlowControllerModule
};