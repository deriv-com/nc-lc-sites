import {
    a as Y
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as q
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    a as P,
    f as l,
    h as f,
    n as z,
    u as y
} from "./_oschunk-VR5BNL2K.js";
import {
    a as fe,
    g as O,
    m as G,
    n as pe,
    o as he,
    q as k,
    r as N,
    s as M,
    t as W
} from "./_oschunk-4VHUVDBV.js";
import {
    a as B
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qa as H,
    Qb as ve,
    Sb as x,
    s as K
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as b,
    c as o,
    e as ge,
    m as D,
    n as I,
    p as F,
    w as i
} from "./_oschunk-M5BUVJ72.js";
var ye = {};
var xe = {};
var R = b,
    ee = class ee extends R.Controller.BaseController {
        getDefaultTimeout() {
            return x.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(d, e) {
                var a = this.controller;
                R.Logger.debug("CashierFlow", R.Exceptions.getMessage(d));
                var t = R.Injector.resolve(R.ServiceNames.GlobalExceptionHandler);
                return t(d, e), R.ErrorHandling.UNHANDLED_ERROR_RESULT
            }), this._handleError
        }
        set handleError(d) {
            this._handleError = d
        }
    };
o(ee, "Controller");
var Z = ee,
    J = new Z(xe);
var w = b; {
    let d = class d extends w.Controller.BaseViewController {
        constructor(a, t, s) {
            super(a, t, s, ye);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get _closeBtnEvent$Action() {
            return this.hasOwnProperty("__closeBtnEvent$Action") || (this.__closeBtnEvent$Action = function(a) {
                var t = this.model,
                    s = this.controller,
                    v = this.idService;
                return w.Logger.startActiveSpan("CloseBtnEvent", function(g) {
                    g && (g.setAttribute("code.function", "CloseBtnEvent"), g.setAttribute("outsystems.function.key", "4336ad42-96ec-4df5-8a4f-46477bdf4cdf"), g.setAttribute("outsystems.function.owner.name", "uae"), g.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return s.ensureControllerAlive("CloseBtnEvent"), a = s.callContext(a), w.Navigation.navigateTo(w.Navigation.generateScreenURL("uae", "wallet", {}), w.Transitions.createTransition(w.Transitions.TransitionAnimation.Default), a, !0)
                    } finally {
                        g && g.end()
                    }
                }, 1)
            }), this.__closeBtnEvent$Action
        }
        set _closeBtnEvent$Action(a) {
            this.__closeBtnEvent$Action = a
        }
        closeBtnEvent$Action(a) {
            var t = this.controller;
            return w.Logger.startActiveSpan("CloseBtnEvent__proxy", function(s) {
                s && (s.setAttribute("code.function", "CloseBtnEvent"), s.setAttribute("outsystems.function.key", "4336ad42-96ec-4df5-8a4f-46477bdf4cdf"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._closeBtnEvent$Action, a)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(a) {
            this._onInitializeEventHandler = a
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(a) {
            this._onReadyEventHandler = a
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(a) {
            this._onRenderEventHandler = a
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(a) {
            this._onDestroyEventHandler = a
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(a) {
            this._onParametersChangedEventHandler = a
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(a) {
            this._onSyncStartEventHandler = a
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(a) {
            this._onSyncCompleteEventHandler = a
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(a) {
            this._onSyncErrorEventHandler = a
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(a) {
                return J.default.handleError(a, this.callContext())
            }), this._handleError
        }
        set handleError(a) {
            this._handleError = a
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return x.defaultTimeout
        }
    };
    o(d, "ControllerInner");
    let A = d;
    Ae = A
}
var Ae, te = new w.Controller.ControllerFactory(Ae, B);
var T = ge(fe());
var S = b,
    ne = class ne extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("transaction", "transactionVar", "transaction", !0, !1, S.DataTypes.DataTypes.Record, function() {
                return S.DataTypes.ImmutableBase.getData(new K)
            }, !1, K), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("id", "idIn", "id", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_idInDataFetchStatus", "_idInDataFetchStatus", "_idInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(ne, "VariablesRecord");
var L = ne;
L.init();
var ie = class ie extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(ie, "WidgetsRecord");
var re = ie,
    oe = class oe extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return L
        }
        static getWidgetsRecordConstructor() {
            return re
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(d) {
            "id" in d && (this.variables.idIn = d.id, "_idInDataFetchStatus" in d && (this.variables._idInDataFetchStatus = d._idInDataFetchStatus))
        }
    };
o(oe, "Model");
var U = oe;
U._hasValidationWidgetsValue = void 0;
var _e = new S.Model.ModelFactory(U);
var E = b,
    de = class de extends E.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("id", "idIn", "id", !0, !1, E.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_idInDataFetchStatus", "_idInDataFetchStatus", "_idInDataFetchStatus", !0, !1, E.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(E.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(de, "VariablesRecord");
var Q = de;
Q.init();
var ce = class ce extends E.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(ce, "WidgetsRecord");
var se = ce,
    C = class C extends E.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Q
        }
        static getWidgetsRecordConstructor() {
            return se
        }
        static get hasValidationWidgets() {
            return C._hasValidationWidgetsValue === void 0 && (C._hasValidationWidgetsValue = void 0 || void 0 || void 0), C._hasValidationWidgetsValue
        }
        setInputs(d) {
            "id" in d && (this.variables.idIn = E.DataConversion.ServerDataConverter.from(d.id, E.DataTypes.DataTypes.Text))
        }
    };
o(C, "Model");
var j = C;
j._hasValidationWidgetsValue = void 0;
var le = new E.Model.ModelFactory(j);
var n = ge(fe());
var we = {
        "QnFjzCxlO06ZPCgaGTzXdg#Value": "\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u0633\u062A\u0644\u0645",
        "b4QkveOCukGUbngyBGyIIg#ValueExpression.-1980746255.1": "\u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644",
        "b4QkveOCukGUbngyBGyIIg#ValueExpression.1032.1": ")",
        "b4QkveOCukGUbngyBGyIIg#ValueExpression.1188.1": "%)",
        "AXzL9ck_R0yAIsGX6rCx8Q#Value": "\u0645\u0628\u0644\u063A \u0627\u0644\u062A\u062D\u0648\u064A\u0644",
        "m2z0EEjaQEO+yekzXqCj_w#Value": "\u0645\u0628\u0644\u063A \u0627\u0644\u0625\u064A\u062F\u0627\u0639",
        "DZhxGjmpf0agWOK8ybL2+w#Value": "\u0645\u0628\u0644\u063A \u0627\u0644\u0625\u064A\u062F\u0627\u0639",
        "3_V4FsiB80aO8X6wHoqwGg#Value": "\u0645\u0628\u0644\u063A \u0627\u0644\u0633\u062D\u0628",
        "UT6X88HHYUOe3N8+inbnKQ#Value": "\u0645\u0628\u0644\u063A \u0627\u0644\u0625\u064A\u062F\u0627\u0639",
        "Fwv40RqYqESb6NDSwNsMNQ#Value": "\u0625\u0644\u0649",
        "00BtEsFS1UK05rFI2nefig#Value": "\u0645\u0646",
        "YPhvbPZQgE6s3OdtPajg5w#Value": "\u0627\u0644\u0648\u0642\u062A",
        "Nv6vYGj1y0eebXuPGMaIpg#ValueExpression.80981793.1": "\u0627\u0644\u064A\u0648\u0645",
        "FDuOVJOHNEq9u1cYdSjoUQ#Value": "\u0627\u0644\u062A\u0627\u0631\u064A\u062E",
        "dThQjR3_dUGG4_JV9ZddQQ#Value": "\u0646\u0648\u0639 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",
        "yKb9vWDYhEyiS3jb46msYA#Value": "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",
        "h9ac8rbTPkOP_BdpGy2npQ#Value": "\u0645\u0639\u0631\u0651\u0641 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",
        "KHoNSG7eVESRoUqelLTIpw#Value": "\u0646\u0627\u062C\u062D",
        "s8yx7dA7m0+S3ynumtAWCQ#Value": "\u0642\u064A\u062F \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629",
        "FyW5AMrM0Ua7qaVwfaJfSw#Value": "\u062A\u0623\u0643\u064A\u062F",
        "YzmfWjgeoEWSiwtZcUEOQQ#Value": "\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629",
        "1AjdIYhmMkGYrvLek1Da8A#Value": "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629"
    },
    Se = {
        "ar-001": {
            translations: we,
            isRTL: !0
        }
    };
var c = b; {
    let d = class d extends c.Controller.BaseViewController {
        constructor(a, t, s) {
            super(a, t, s, Se);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getTransactions$ServerAction() {
            return this.hasOwnProperty("_getTransactions$ServerAction") || (this._getTransactions$ServerAction = function(a, t, s, v, g, u) {
                var V = this.controller;
                return c.Logger.startActiveSpan("GetTransactions", function(r) {
                    return r && (r.setAttribute("code.function", "GetTransactions"), r.setAttribute("outsystems.function.key", "7917e6a7-a515-4824-a4d1-08d0f6818cb9"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), c.Flow.tryFinally(function() {
                        var _ = {
                            authorization: c.DataConversion.ServerDataConverter.to(a, c.DataTypes.DataTypes.Text),
                            wallet_id: c.DataConversion.ServerDataConverter.to(t, c.DataTypes.DataTypes.Text),
                            id: c.DataConversion.ServerDataConverter.to(s, c.DataTypes.DataTypes.Text),
                            page: c.DataConversion.ServerDataConverter.to(v, c.DataTypes.DataTypes.Text),
                            per_page: c.DataConversion.ServerDataConverter.to(g, c.DataTypes.DataTypes.Text)
                        };
                        return V.callServerAction("GetTransactions", "screenservices/uae/CashierFlow/TransactionDetailsBlock/ActionGetTransactions", "omibcVee8kcbtkGobOJhHg", _, V.callContext(u), void 0, void 0, !0).then(function(m) {
                            var h = new(V.constructor.getVariableGroupType("uae.CashierFlow.TransactionDetailsBlock$ActionGetTransactions"));
                            return h.responseOut = c.DataConversion.ServerDataConverter.from(m.Response, H), h
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._getTransactions$ServerAction
        }
        set getTransactions$ServerAction(a) {
            this._getTransactions$ServerAction = a
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(a) {
                var t = this.model,
                    s = this.controller,
                    v = this.idService;
                return c.Logger.startActiveSpan("OnReady", function(g) {
                    return g && (g.setAttribute("code.function", "OnReady"), g.setAttribute("outsystems.function.key", "ef1c05b6-cbd1-44fd-b697-3a6826e60723"), g.setAttribute("outsystems.function.owner.name", "uae"), g.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        s.ensureControllerAlive("OnReady"), a = s.callContext(a);
                        var u = new c.DataTypes.VariableHolder,
                            V = new c.DataTypes.VariableHolder,
                            r = new c.DataTypes.VariableHolder,
                            _ = new c.DataTypes.VariableHolder,
                            m = new c.DataTypes.VariableHolder;
                        return c.Flow.executeAsyncFlow(function() {
                            return t.variables.is_loadingVar = !0, _.value = x.getAuth$Action(a), t.flush(), s.getTransactions$ServerAction(_.value.tokenOut, "", t.variables.idIn, "", "", a).then(function(h) {
                                u.value = h
                            }).then(function() {
                                return c.Flow.executeSequence(function() {
                                    if (u.value.responseOut.dataAttr.length === 1) return t.flush(), x.getAccountListCache$Action(a).then(function(h) {
                                        V.value = h
                                    }).then(function() {
                                        return t.flush(), x.getWalletListCache$Action(a).then(function(h) {
                                            r.value = h
                                        })
                                    }).then(function() {
                                        m.value = x.addAccountData$Action(u.value.responseOut.dataAttr, r.value.wallet_listOut, V.value.account_listOut, a), t.variables.transactionVar = m.value.updated_transactionsOut.getItem(0), a.iterationContext.registerIterationStart(r.value.wallet_listOut)
                                    }).then(function() {
                                        try {
                                            for (var h = a.iterationContext.getIterator(r.value.wallet_listOut), p = 0; p < r.value.wallet_listOut.length;) h.currentRowNumber = p, r.value.wallet_listOut.getItem(p.valueOf()).idAttr.equals(t.variables.transactionVar.wallet_idAttr) && (t.variables.transactionVar.walletAttr = r.value.wallet_listOut.getItem(p.valueOf())), p++
                                        } finally {
                                            a.iterationContext.registerIterationEnd(r.value.wallet_listOut)
                                        }
                                        t.variables.is_loadingVar = !1
                                    })
                                })
                            })
                        })
                    }, function() {
                        g && g.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(a) {
            this.__onReady$Action = a
        }
        onReady$Action(a) {
            var t = this.controller;
            return c.Logger.startActiveSpan("OnReady__proxy", function(s) {
                return s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "ef1c05b6-cbd1-44fd-b697-3a6826e60723"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, a)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(a) {
            this._onInitializeEventHandler = a
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(a) {
                var t = this.controller,
                    s = this.model,
                    v = this.idService;
                return t.onReady$Action(a)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(a) {
            this._onReadyEventHandler = a
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(a) {
            this._onRenderEventHandler = a
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(a) {
            this._onDestroyEventHandler = a
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(a) {
            this._onParametersChangedEventHandler = a
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(a) {
            this._onSyncStartEventHandler = a
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(a) {
            this._onSyncCompleteEventHandler = a
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(a) {
            this._onSyncErrorEventHandler = a
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(a) {
                return controller.handleError(a)
            }), this._handleError
        }
        set handleError(a) {
            this._handleError = a
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return x.defaultTimeout
        }
    };
    o(d, "ControllerInner");
    let A = d;
    ue = A, ue.registerVariableGroupType("uae.CashierFlow.TransactionDetailsBlock$ActionGetTransactions", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: c.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new H
        }, "defaultValue"),
        complexType: H
    }])
}
var ue, Ee = new c.Controller.ControllerFactory(ue, B);
var yt = O.PlaceholderContent,
    xt = O.IteratorPlaceholderContent,
    Re = o(function() {
        var A = he(function(d) {
            var e = d.model,
                a = d.controller,
                t = d.controller.idService,
                s = a.validationService,
                v = a.callContext(),
                g = M,
                u = W,
                V = {
                    props: d,
                    validateWidget: o(function(p) {
                        d.validateWidget(d, p)
                    }, "validateWidget")
                },
                r = e,
                _ = N,
                m = k,
                h = G();
            return n.createElement("div", d.rootNodeProperties, n.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, n.createElement(l, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }, n.createElement(y, {
                extendedProperties: {
                    style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                },
                text: [m(u("1AjdIYhmMkGYrvLek1Da8A#Value", "Transaction detail"))],
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: r
            })), _(e.variables.is_loadingVar, !1, this, function() {
                return [n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-self: stretch; display: flex; flex-direction: column; gap: 8px; height: fit-content; margin-top: 4px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    style: "animate-pulse w-full currency list-container",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "LoaderContainer"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(l, {
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
                        service: t,
                        name: "ListItemPlaceholder2"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(l, {
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
                        service: t,
                        name: "ListItemPlaceholder3"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(l, {
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
                        service: t,
                        name: "ListItemPlaceholder4"
                    },
                    _widgetRecordProvider: r
                }))]
            }, function() {
                return [n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "7"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(l, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; display: flex; flex-direction: column;"
                    },
                    visible: e.variables.transactionVar.categoryAttr === "payment",
                    _idProps: {
                        service: t,
                        uuid: "8"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "9"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 4px; justify-content: center; min-height: 44px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "10"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(P, {
                    extendedProperties: {
                        className: "track invisible"
                    },
                    tag: "span",
                    _idProps: {
                        service: t,
                        uuid: "11"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "position: relative;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "12"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(P, {
                    extendedProperties: {
                        className: e.getCachedValue(t.getId("TzhBcNKHpk6DwIGY9FLHlA.class"), function() {
                            return "progress-icon " + (e.variables.transactionVar.statusAttr === "started" || e.variables.transactionVar.statusAttr === "pending" ? "progress-icon__pending" : "progress-icon__completed")
                        }, function() {
                            return e.variables.transactionVar.statusAttr
                        })
                    },
                    tag: "span",
                    _idProps: {
                        service: t,
                        uuid: "13"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(z, {
                    extendedProperties: {
                        style: "align-items: center; display: flex; height: 100%; justify-content: center; position: absolute; top: 0;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter",
                        width: "100%"
                    },
                    image: F.VersionedURL.getVersionedUrl("img/uae.check.svg"),
                    style: e.getCachedValue(t.getId("+vz4GTOYq0+uUgTHRQkQVg.Style"), function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr === "0" || e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr === "" ? "hidden" : ""
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr
                    }),
                    type: 0,
                    _idProps: {
                        service: t,
                        uuid: "14"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(P, {
                    extendedProperties: {
                        className: e.getCachedValue(t.getId("B9643ONyR0i8IfGU2WULhA.class"), function() {
                            return "track " + (i.textToIntegerValidate(e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr) && i.textToInteger(e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr) > 0 || e.variables.transactionVar.statusAttr === "completed" ? "track__completed" : "")
                        }, function() {
                            return e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr
                        }, function() {
                            return e.variables.transactionVar.statusAttr
                        })
                    },
                    tag: "span",
                    _idProps: {
                        service: t,
                        uuid: "15"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(y, {
                    extendedProperties: {
                        className: e.getCachedValue(t.getId("YzmfWjgeoEWSiwtZcUEOQQ.class"), function() {
                            return "progress-text " + (e.variables.transactionVar.statusAttr === "pending" || e.variables.transactionVar.statusAttr === "completed" ? "progress-text__completed" : "")
                        }, function() {
                            return e.variables.transactionVar.statusAttr
                        }),
                        style: "font-size: 14px; font-style: normal; font-weight: 700; line-height: 22px;"
                    },
                    text: [m(u("YzmfWjgeoEWSiwtZcUEOQQ#Value", "Processing"))],
                    _idProps: {
                        service: t,
                        uuid: "16"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px;"
                    },
                    visible: !1,
                    _idProps: {
                        service: t,
                        uuid: "17"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 4px; justify-content: center; min-height: 44px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "18"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(P, {
                    extendedProperties: {
                        className: e.getCachedValue(t.getId("VUKBv_WSCECUyDrbYNh77A.class"), function() {
                            return "track track__fixed " + (i.textToIntegerValidate(e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr) && i.textToInteger(e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr) > 0 || e.variables.transactionVar.statusAttr === "completed" ? "track__completed" : "")
                        }, function() {
                            return e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr
                        }, function() {
                            return e.variables.transactionVar.statusAttr
                        })
                    },
                    tag: "span",
                    _idProps: {
                        service: t,
                        uuid: "19"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "position: relative;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "20"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(P, {
                    extendedProperties: {
                        className: e.getCachedValue(t.getId("IqsbOUoA9Em8DhUjhKSe9A.class"), function() {
                            return "progress-icon " + (i.textToIntegerValidate(e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr) && i.textToInteger(e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr) > 0 || e.variables.transactionVar.statusAttr === "completed" ? "progress-icon__" + e.variables.transactionVar.statusAttr : "")
                        }, function() {
                            return e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr
                        }, function() {
                            return e.variables.transactionVar.statusAttr
                        })
                    },
                    tag: "span",
                    _idProps: {
                        service: t,
                        uuid: "21"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(z, {
                    extendedProperties: {
                        style: "align-items: center; display: flex; height: 100%; justify-content: center; position: absolute; top: 0;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter",
                        width: "100%"
                    },
                    image: F.VersionedURL.getVersionedUrl("img/uae.check.svg"),
                    style: e.getCachedValue(t.getId("HZ88zwPlp0SPyV_TUUuAsQ.Style"), function() {
                        return e.variables.transactionVar.statusAttr === "pending" ? "hidden" : ""
                    }, function() {
                        return e.variables.transactionVar.statusAttr
                    }),
                    type: 0,
                    _idProps: {
                        service: t,
                        uuid: "22"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(P, {
                    extendedProperties: {
                        className: e.getCachedValue(t.getId("wqMuKixTK02MC5BoZb5W+Q.class"), function() {
                            return "track " + (e.variables.transactionVar.statusAttr === "completed" ? "track__completed" : "")
                        }, function() {
                            return e.variables.transactionVar.statusAttr
                        })
                    },
                    tag: "span",
                    _idProps: {
                        service: t,
                        uuid: "23"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; display: flex; flex: 1 0 0; flex-direction: column; justify-content: center; padding: 13px 0px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "24"
                    },
                    _widgetRecordProvider: r
                }, _(e.variables.transactionVar.typeAttr === "deposit", !1, this, function() {
                    return [n.createElement(l, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "display: flex; flex-direction: column;"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "25"
                        },
                        _widgetRecordProvider: r
                    }, n.createElement(y, {
                        extendedProperties: {
                            className: e.getCachedValue(t.getId("FyW5AMrM0Ua7qaVwfaJfSw.class"), function() {
                                return "progress-text " + (i.textToIntegerValidate(e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr) && i.textToInteger(e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr) > 0 || e.variables.transactionVar.statusAttr === "completed" ? "progress-text__completed" : "")
                            }, function() {
                                return e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr
                            }, function() {
                                return e.variables.transactionVar.statusAttr
                            }),
                            style: "font-size: 14px; font-style: normal; font-weight: 700; line-height: 22px;"
                        },
                        text: [m(u("FyW5AMrM0Ua7qaVwfaJfSw#Value", "Confirming"))],
                        _idProps: {
                            service: t,
                            uuid: "26"
                        },
                        _widgetRecordProvider: r
                    }), n.createElement(f, {
                        extendedProperties: {
                            className: e.getCachedValue(t.getId("OrIboKnp2ECD_PboZEqAWA.class"), function() {
                                return "progress-text " + (i.textToIntegerValidate(e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr) && i.textToInteger(e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr) > 0 ? "progress-text__completed" : "hidden")
                            }, function() {
                                return e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr
                            }),
                            style: "font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px;"
                        },
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        value: e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr + " confirmation",
                        _idProps: {
                            service: t,
                            uuid: "27"
                        },
                        _widgetRecordProvider: r
                    }))]
                }, function() {
                    return [n.createElement(l, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "display: flex; flex-direction: column;"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "28"
                        },
                        _widgetRecordProvider: r
                    }, n.createElement(y, {
                        extendedProperties: {
                            className: e.getCachedValue(t.getId("s8yx7dA7m0+S3ynumtAWCQ.class"), function() {
                                return "progress-text " + (i.textToIntegerValidate(e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr) && i.textToInteger(e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr) > 0 || e.variables.transactionVar.statusAttr === "completed" ? "progress-text__completed" : "")
                            }, function() {
                                return e.variables.transactionVar.metadataAttr.metadataAttr.confirmationsAttr
                            }, function() {
                                return e.variables.transactionVar.statusAttr
                            }),
                            style: "font-size: 14px; font-style: normal; font-weight: 700; line-height: 22px;"
                        },
                        text: [m(u("s8yx7dA7m0+S3ynumtAWCQ#Value", "In process"))],
                        _idProps: {
                            service: t,
                            uuid: "29"
                        },
                        _widgetRecordProvider: r
                    }))]
                }))), n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "30"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 4px; justify-content: center; min-height: 44px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "31"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(P, {
                    extendedProperties: {
                        className: e.getCachedValue(t.getId("xIBTDkbTjEqUsZQrLl5SuA.class"), function() {
                            return "track track-fixed " + (e.variables.transactionVar.statusAttr === "completed" ? "track__completed" : "")
                        }, function() {
                            return e.variables.transactionVar.statusAttr
                        })
                    },
                    tag: "span",
                    _idProps: {
                        service: t,
                        uuid: "32"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "position: relative;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "33"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(P, {
                    extendedProperties: {
                        className: e.getCachedValue(t.getId("x7DJYXFQ5E2dWI0f3VLpaA.class"), function() {
                            return "progress-icon " + (e.variables.transactionVar.statusAttr === "completed" ? "progress-icon__completed" : "")
                        }, function() {
                            return e.variables.transactionVar.statusAttr
                        })
                    },
                    tag: "span",
                    _idProps: {
                        service: t,
                        uuid: "34"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(z, {
                    extendedProperties: {
                        style: "align-items: center; display: flex; height: 100%; justify-content: center; position: absolute; top: 0;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter",
                        width: "100%"
                    },
                    image: F.VersionedURL.getVersionedUrl("img/uae.check.svg"),
                    type: 0,
                    _idProps: {
                        service: t,
                        uuid: "35"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(P, {
                    extendedProperties: {
                        className: e.getCachedValue(t.getId("D4r7SNhnqEmsALyVs1R7KQ.class"), function() {
                            return "track invisible " + (e.variables.transactionVar.statusAttr === "completed" ? "track__completed" : "")
                        }, function() {
                            return e.variables.transactionVar.statusAttr
                        })
                    },
                    tag: "span",
                    _idProps: {
                        service: t,
                        uuid: "36"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; display: flex; flex: 1 0 0; flex-direction: column; justify-content: center; padding: 13px 0px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "37"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        className: e.getCachedValue(t.getId("KHoNSG7eVESRoUqelLTIpw.class"), function() {
                            return "progress-text " + (e.variables.transactionVar.statusAttr === "completed" ? "progress-text__completed" : "")
                        }, function() {
                            return e.variables.transactionVar.statusAttr
                        }),
                        style: "font-size: 14px; font-style: normal; font-weight: 700; line-height: 22px;"
                    },
                    text: [m(u("KHoNSG7eVESRoUqelLTIpw#Value", "Successful"))],
                    _idProps: {
                        service: t,
                        uuid: "38"
                    },
                    _widgetRecordProvider: r
                })))), n.createElement(l, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "39"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "40"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("h9ac8rbTPkOP_BdpGy2npQ#Value", "Transaction ID"))],
                    _idProps: {
                        service: t,
                        uuid: "41"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    value: i.longIntegerToText(e.variables.transactionVar.idAttr),
                    _idProps: {
                        service: t,
                        uuid: "42"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: e.variables.transactionVar.categoryAttr === "payment" && e.variables.transactionVar.cashierAttr === "crypto",
                    _idProps: {
                        service: t,
                        uuid: "43"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("yKb9vWDYhEyiS3jb46msYA#Value", "Transaction hash"))],
                    _idProps: {
                        service: t,
                        uuid: "44"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(P, {
                    extendedProperties: {
                        target: "_blank",
                        href: e.variables.transactionVar.metadataAttr.metadataAttr.explorer_urlAttr,
                        className: "full-width link underline hover:no-underline transition duration-300"
                    },
                    tag: "a",
                    _idProps: {
                        service: t,
                        uuid: "45"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(f, {
                    extendedProperties: {
                        style: "display: block; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                    },
                    gridProperties: {
                        width: "100%"
                    },
                    value: e.variables.transactionVar.metadataAttr.transaction_idAttr,
                    _idProps: {
                        service: t,
                        uuid: "46"
                    },
                    _widgetRecordProvider: r
                }))), n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "47"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("dThQjR3_dUGG4_JV9ZddQQ#Value", "Transaction type"))],
                    _idProps: {
                        service: t,
                        uuid: "48"
                    },
                    _widgetRecordProvider: r
                }), _(e.variables.transactionVar.categoryAttr === "payment", !1, this, function() {
                    return [_(e.variables.transactionVar.typeAttr === "adjustment", !1, this, function() {
                        return [n.createElement(f, {
                            extendedProperties: {
                                style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                            },
                            value: e.getCachedValue(t.getId("zhnOc8xky06bkjOhTvRTFA.Value"), function() {
                                return e.variables.transactionVar.amountAttr.gte(i.integerToDecimal(0)) ? "System credit" : "System debit"
                            }, function() {
                                return e.variables.transactionVar.amountAttr
                            }),
                            _idProps: {
                                service: t,
                                uuid: "49"
                            },
                            _widgetRecordProvider: r
                        })]
                    }, function() {
                        return [n.createElement(f, {
                            extendedProperties: {
                                style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                            },
                            value: e.getCachedValue(t.getId("QjfkPZBrRU2xpxkrNyW7pg.Value"), function() {
                                return i.toUpper(i.substr(e.variables.transactionVar.typeAttr, 0, 1)) + i.substr(e.variables.transactionVar.typeAttr, 1, i.length(e.variables.transactionVar.typeAttr))
                            }, function() {
                                return e.variables.transactionVar.typeAttr
                            }),
                            _idProps: {
                                service: t,
                                uuid: "50"
                            },
                            _widgetRecordProvider: r
                        })]
                    })]
                }, function() {
                    return [n.createElement(f, {
                        extendedProperties: {
                            style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                        },
                        value: e.getCachedValue(t.getId("VtQ0i3p8kU+Z9iU5cdTPyA.Value"), function() {
                            return i.toUpper(i.substr(e.variables.transactionVar.categoryAttr, 0, 1)) + i.substr(e.variables.transactionVar.categoryAttr, 1, i.length(e.variables.transactionVar.categoryAttr))
                        }, function() {
                            return e.variables.transactionVar.categoryAttr
                        }),
                        _idProps: {
                            service: t,
                            uuid: "51"
                        },
                        _widgetRecordProvider: r
                    })]
                })), n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "52"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("FDuOVJOHNEq9u1cYdSjoUQ#Value", "Date"))],
                    _idProps: {
                        service: t,
                        uuid: "53"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    value: e.getCachedValue(t.getId("_68eGVGHhEaSzvijTTKQ+A.Value"), function() {
                        return i.dateTimeToDate(e.variables.transactionVar.payment_timeAttr).equals(i.dateTimeToDate(i.currDate())) ? D.resolve(I.TranslationsService).getMessage("Nv6vYGj1y0eebXuPGMaIpg#ValueExpression.80981793.1", "Today") : i.formatDateTime(e.variables.transactionVar.payment_timeAttr, "dd MMMM yyyy")
                    }, function() {
                        return e.variables.transactionVar.payment_timeAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "54"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "55"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("YPhvbPZQgE6s3OdtPajg5w#Value", "Time"))],
                    _idProps: {
                        service: t,
                        uuid: "56"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    value: e.getCachedValue(t.getId("S3Rrxf2j9EOnD28e0UCXLg.Value"), function() {
                        return i.formatDateTime(e.variables.transactionVar.payment_timeAttr, "HH:mm:ss")
                    }, function() {
                        return e.variables.transactionVar.payment_timeAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "57"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: e.getCachedValue(t.getId("From.Visible"), function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.idAttr.gt(i.integerToLongInteger(0)) || i.length(e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.nameAttr) > 0
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.idAttr
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.nameAttr
                    }),
                    _idProps: {
                        service: t,
                        name: "From"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("00BtEsFS1UK05rFI2nefig#Value", "From"))],
                    _idProps: {
                        service: t,
                        uuid: "59"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    value: e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.nameAttr,
                    _idProps: {
                        service: t,
                        uuid: "60"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    style: "hidden",
                    value: i.longIntegerToText(e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.idAttr),
                    _idProps: {
                        service: t,
                        uuid: "61"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: e.getCachedValue(t.getId("ToWallet.Visible"), function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.toAttr.idAttr.gt(i.integerToLongInteger(0)) || i.length(e.variables.transactionVar.metadataAttr.metadataAttr.toAttr.nameAttr) > 0
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.toAttr.idAttr
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.toAttr.nameAttr
                    }),
                    _idProps: {
                        service: t,
                        name: "ToWallet"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("Fwv40RqYqESb6NDSwNsMNQ#Value", "To"))],
                    _idProps: {
                        service: t,
                        uuid: "63"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    value: e.variables.transactionVar.metadataAttr.metadataAttr.toAttr.nameAttr,
                    _idProps: {
                        service: t,
                        uuid: "64"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    style: "hidden",
                    value: i.longIntegerToText(e.variables.transactionVar.metadataAttr.metadataAttr.toAttr.idAttr),
                    _idProps: {
                        service: t,
                        uuid: "65"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: e.variables.transactionVar.categoryAttr === "payment" && e.variables.transactionVar.typeAttr === "deposit",
                    _idProps: {
                        service: t,
                        name: "DepositAmount"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("UT6X88HHYUOe3N8+inbnKQ#Value", "Deposit amount"))],
                    _idProps: {
                        service: t,
                        uuid: "67"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    value: e.getCachedValue(t.getId("QUS5E4WAyU2ZGfriND1t4g.Value"), function() {
                        return x.formatCurrency2$Action(i.decimalToText(e.variables.transactionVar.amountAttr), v).formattedBalanceOut + " " + e.variables.transactionVar.metadataAttr.metadataAttr.processed_dataAttr.transactionAttr.currencyAttr
                    }, function() {
                        return e.variables.transactionVar.amountAttr
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.processed_dataAttr.transactionAttr.currencyAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "68"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: e.variables.transactionVar.categoryAttr === "payment" && e.variables.transactionVar.typeAttr === "withdrawal",
                    _idProps: {
                        service: t,
                        name: "WithdrawAmount"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("3_V4FsiB80aO8X6wHoqwGg#Value", "Withdraw amount"))],
                    _idProps: {
                        service: t,
                        uuid: "70"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    value: i.decimalToText(e.variables.transactionVar.amountAttr) + " " + e.variables.transactionVar.metadataAttr.metadataAttr.processed_dataAttr.transactionAttr.currencyAttr,
                    _idProps: {
                        service: t,
                        uuid: "71"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: e.variables.transactionVar.categoryAttr === "payment" && e.variables.transactionVar.typeAttr === "adjustment" && e.variables.transactionVar.amountAttr.gte(i.integerToDecimal(0)),
                    _idProps: {
                        service: t,
                        name: "CreditAdjustment"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("DZhxGjmpf0agWOK8ybL2+w#Value", "Amount"))],
                    _idProps: {
                        service: t,
                        uuid: "73"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    value: e.getCachedValue(t.getId("mmdVovrFFEKhawbTakFlmA.Value"), function() {
                        return x.formatCurrency2$Action(i.decimalToText(e.variables.transactionVar.amountAttr), v).formattedBalanceOut + " " + (i.length(e.variables.transactionVar.metadataAttr.metadataAttr.processed_dataAttr.transactionAttr.currencyAttr) > 0 ? e.variables.transactionVar.metadataAttr.metadataAttr.processed_dataAttr.transactionAttr.currencyAttr : e.variables.transactionVar.walletAttr.currencyAttr)
                    }, function() {
                        return e.variables.transactionVar.amountAttr
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.processed_dataAttr.transactionAttr.currencyAttr
                    }, function() {
                        return e.variables.transactionVar.walletAttr.currencyAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "74"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: e.variables.transactionVar.categoryAttr === "payment" && e.variables.transactionVar.typeAttr === "adjustment" && e.variables.transactionVar.amountAttr.lt(i.integerToDecimal(0)),
                    _idProps: {
                        service: t,
                        name: "DebitAdjustment"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("m2z0EEjaQEO+yekzXqCj_w#Value", "Amount"))],
                    _idProps: {
                        service: t,
                        uuid: "76"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    value: e.getCachedValue(t.getId("6nmt5f9DC0y0SMcg9rqpUQ.Value"), function() {
                        return x.formatCurrency2$Action(i.decimalToText(e.variables.transactionVar.amountAttr), v).formattedBalanceOut + " " + (i.length(e.variables.transactionVar.metadataAttr.metadataAttr.processed_dataAttr.transactionAttr.currencyAttr) > 0 ? e.variables.transactionVar.metadataAttr.metadataAttr.processed_dataAttr.transactionAttr.currencyAttr : e.variables.transactionVar.walletAttr.currencyAttr)
                    }, function() {
                        return e.variables.transactionVar.amountAttr
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.processed_dataAttr.transactionAttr.currencyAttr
                    }, function() {
                        return e.variables.transactionVar.walletAttr.currencyAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "77"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: e.variables.transactionVar.categoryAttr === "transfer",
                    _idProps: {
                        service: t,
                        name: "TransferAmount"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("AXzL9ck_R0yAIsGX6rCx8Q#Value", "Transfer amount"))],
                    _idProps: {
                        service: t,
                        uuid: "79"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    value: e.getCachedValue(t.getId("KlJL2gz_AkW0aGSFV_KAYg.Value"), function() {
                        return x.formatCurrency2$Action(i.decimalToText(e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.amountAttr), v).formattedBalanceOut + " " + e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.currencyAttr
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.amountAttr
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.currencyAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "80"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: !1,
                    _idProps: {
                        service: t,
                        name: "TransferFee"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    value: e.getCachedValue(t.getId("d7JAl26OVkyUwCBF8tgb5w.Value"), function() {
                        return D.resolve(I.TranslationsService).getMessage("b4QkveOCukGUbngyBGyIIg#ValueExpression.-1980746255.1", "Transfer fee") + (e.variables.transactionVar.metadataAttr.metadataAttr.transferAttr.transfer_feeAttr.percentageAttr.gt(i.integerToLongInteger(0)) ? D.resolve(I.TranslationsService).getMessage("b4QkveOCukGUbngyBGyIIg#ValueExpression.1032.1", " (") + i.longIntegerToText(e.variables.transactionVar.metadataAttr.metadataAttr.transferAttr.transfer_feeAttr.percentageAttr) + D.resolve(I.TranslationsService).getMessage("b4QkveOCukGUbngyBGyIIg#ValueExpression.1188.1", "%)") : "")
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.transferAttr.transfer_feeAttr.percentageAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "82"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    value: e.getCachedValue(t.getId("Ktj5RDWl2ESPyZlAk44xcA.Value"), function() {
                        return x.formatCurrency2$Action(i.decimalToText(e.variables.transactionVar.metadataAttr.metadataAttr.transferAttr.transfer_feeAttr.amountAttr), v).formattedBalanceOut + " " + e.variables.transactionVar.metadataAttr.metadataAttr.transferAttr.transfer_feeAttr.currencyAttr
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.transferAttr.transfer_feeAttr.amountAttr
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.transferAttr.transfer_feeAttr.currencyAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "83"
                    },
                    _widgetRecordProvider: r
                })), n.createElement(l, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 16px 0px;"
                    },
                    visible: e.variables.transactionVar.categoryAttr === "transfer",
                    _idProps: {
                        service: t,
                        name: "AmountReceive"
                    },
                    _widgetRecordProvider: r
                }, n.createElement(y, {
                    extendedProperties: {
                        style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    text: [m(u("QnFjzCxlO06ZPCgaGTzXdg#Value", "Amount receive"))],
                    _idProps: {
                        service: t,
                        uuid: "85"
                    },
                    _widgetRecordProvider: r
                }), n.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    value: e.getCachedValue(t.getId("4KlFr0Jhc0G1m_mgl5mmUw.Value"), function() {
                        return x.formatCurrency2$Action(i.decimalToText(e.variables.transactionVar.metadataAttr.metadataAttr.toAttr.amountAttr), v).formattedBalanceOut + " " + e.variables.transactionVar.metadataAttr.metadataAttr.toAttr.currencyAttr
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.toAttr.amountAttr
                    }, function() {
                        return e.variables.transactionVar.metadataAttr.metadataAttr.toAttr.currencyAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "86"
                    },
                    _widgetRecordProvider: r
                }), _(e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.currencyAttr !== e.variables.transactionVar.metadataAttr.metadataAttr.toAttr.currencyAttr, !1, this, function() {
                    return [n.createElement(f, {
                        extendedProperties: {
                            style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                        },
                        value: e.getCachedValue(t.getId("p_IZfBtFo0eUKceYVKUClg.Value"), function() {
                            return x.formatCurrency2$Action(i.decimalToText(e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.net_amountAttr), v).formattedBalanceOut + " " + e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.currencyAttr
                        }, function() {
                            return e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.net_amountAttr
                        }, function() {
                            return e.variables.transactionVar.metadataAttr.metadataAttr.fromAttr.currencyAttr
                        }),
                        _idProps: {
                            service: t,
                            uuid: "87"
                        },
                        _widgetRecordProvider: r
                    })]
                }, function() {
                    return []
                }))))]
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "TransactionDetailsBlock",
                    functionKey: "161c953f-88ac-4adf-84e5-4dd88c6532dc",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CashierFlow.TransactionDetailsBlock",
            modelFactory: _e,
            controllerFactory: Ee
        });
        return A.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, A.getJsDependencies = function() {
            return []
        }, A.getBlocks = function() {
            return []
        }, A
    }, "componentFactory"),
    $ = Re();
var me = O.PlaceholderContent,
    Ft = O.IteratorPlaceholderContent,
    Ce = o(function() {
        var A = pe(function(d) {
            var e = d.model,
                a = d.controller,
                t = d.controller.idService,
                s = a.validationService,
                v = a.callContext(),
                g = M,
                u = W,
                V = {
                    props: d,
                    validateWidget: o(function(p) {
                        d.validateWidget(d, p)
                    }, "validateWidget")
                },
                r = e,
                _ = N,
                m = k,
                h = G();
            return T.createElement("div", d.rootNodeProperties, _(ve.isDesktop$Action(v).isDesktopOut, !1, this, function() {
                return [T.createElement(q, {
                    getOwnerSpan: o(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0,
                        ShowBackbutton: !1,
                        ShowInfoButton: !1
                    },
                    events: {
                        _handleError: o(function(p) {
                            a.handleError(p)
                        }, "_handleError"),
                        closeBtnEvent$Action: o(function() {
                            var p = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                            a.closeBtnEvent$Action(a.callContext(p))
                        }, "closeBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: s
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        contentbody: new me(function() {
                            return [T.createElement($, {
                                getOwnerSpan: o(function() {
                                    return h.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: o(function() {
                                    return h.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    id: e.variables.idIn
                                },
                                events: {
                                    _handleError: o(function(p) {
                                        a.handleError(p)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: s
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "1",
                                    alias: "2"
                                },
                                _widgetRecordProvider: r,
                                _dependencies: []
                            })]
                        })
                    },
                    _dependencies: [g(e.variables.idIn)]
                })]
            }, function() {
                return [T.createElement(Y, {
                    getOwnerSpan: o(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_close_icon: !0,
                        has_back_button: !1
                    },
                    events: {
                        _handleError: o(function(p) {
                            a.handleError(p)
                        }, "_handleError"),
                        closeEvent$Action: o(function() {
                            var p = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                            a.closeBtnEvent$Action(a.callContext(p))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: s
                    },
                    _idProps: {
                        service: t,
                        uuid: "2",
                        alias: "3"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        content: new me(function() {
                            return [T.createElement($, {
                                getOwnerSpan: o(function() {
                                    return h.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: o(function() {
                                    return h.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    id: e.variables.idIn
                                },
                                events: {
                                    _handleError: o(function(p) {
                                        a.handleError(p)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: s
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "3",
                                    alias: "4"
                                },
                                _widgetRecordProvider: r,
                                _dependencies: []
                            })]
                        }),
                        footer: me.Empty
                    },
                    _dependencies: [g(e.variables.idIn)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: o(function() {
                return {
                    codeFunction: "TransactionDetails",
                    functionKey: "4ce88a00-f928-4d60-ab17-c417c2c933ed",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CashierFlow.TransactionDetails",
            modelFactory: le,
            controllerFactory: te,
            getTitle: o(function() {
                return W("AIroTCj5YE2rF8QXwskz7Q#Title", "TransactionDetails")
            }, "getTitle")
        });
        return A.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.CashierFlow.TransactionDetails.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, A.getJsDependencies = function() {
            return []
        }, A.getBlocks = function() {
            return [q, $, Y]
        }, A
    }, "componentFactory"),
    Te = Ce();
export {
    te as controllerModule, le as modelModule, Te as viewModule, J as webFlowControllerModule
};