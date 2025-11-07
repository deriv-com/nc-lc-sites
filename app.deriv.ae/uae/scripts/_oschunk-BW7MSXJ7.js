import {
    a as M
} from "./_oschunk-PHBEQLQL.js";
import {
    a as D
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as k
} from "./_oschunk-4ZYYVQOE.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as X,
    f as g,
    h as A,
    l as ee,
    n as te,
    o as re,
    u as y
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ae,
    g as W,
    m as Q,
    n as K,
    q as Y,
    r as J,
    s as H,
    t as F
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Z
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    G as T,
    H as I,
    Sb as b,
    mb as O,
    r as V
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as _,
    c as d,
    e as ie,
    m as C,
    n as E,
    v as U,
    w
} from "./_oschunk-M5BUVJ72.js";
var oe = {
        "rT9DZzHpnUWIVEL0kqECLw#Value": "\u0633\u062D\u0628",
        "QV9YTFZK3E6FVpmu1G53qg#ValueExpression.-1831186718.1": "\u0627\u0644\u0631\u0635\u064A\u062F:",
        "mAKjbMPSj0O3PvUIvLgedQ#ValueExpression.1964981368.1": "\u0627\u0644\u0645\u0628\u0644\u063A",
        "NbE7CmyVYEGZ_HdBkZbG+g#Value": "\u0645\u0628\u0644\u063A \u0627\u0644\u0633\u062D\u0628",
        "VMMcXNJWtUu9ma0VuIh8tw#Value": "\u0625\u0644\u0649",
        "DtdOGtwIw0CHCrkIEMZzug#Value": "\u0645\u0646",
        "599bOd4Es0efAF4CS7OOXQ#Value": "\u0645\u0628\u0644\u063A \u0627\u0644\u0633\u062D\u0628",
        "3khmpS6AcEik6UARMwVcMA#Value.1098876423.1": "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0633\u062D\u0628 \u0647\u0648 ",
        "xbjM1_jjwkSekEkFSLRO7Q#Value.1877137235.1": "\u0627\u0644\u0645\u0628\u0644\u063A \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0631\u0635\u064A\u062F",
        "hVVzaMUbyEGL+vj5is7fsA#Title": "\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u0631\u0627\u062F \u0633\u062D\u0628\u0647 | Deriv",
        "hVVzaMUbyEGL+vj5is7fsA#TitleExpression.990125096.1": "\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u0631\u0627\u062F \u0633\u062D\u0628\u0647 | Deriv"
    },
    ne = {
        "ar-001": {
            translations: oe,
            isRTL: !0
        }
    };
var a = _; {
    let c = class c extends a.Controller.BaseViewController {
        constructor(t, e, r) {
            super(t, e, r, ne);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getCurrencyConfig$ServerAction() {
            return this.hasOwnProperty("_getCurrencyConfig$ServerAction") || (this._getCurrencyConfig$ServerAction = function(t, e) {
                var r = this.controller;
                return a.Logger.startActiveSpan("GetCurrencyConfig", function(s) {
                    return s && (s.setAttribute("code.function", "GetCurrencyConfig"), s.setAttribute("outsystems.function.key", "344935f9-bf5b-4634-aba2-db4c51ac12e2"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), a.Flow.tryFinally(function() {
                        var n = {
                            currency: a.DataConversion.ServerDataConverter.to(t, a.DataTypes.DataTypes.Text)
                        };
                        return r.callServerAction("GetCurrencyConfig", "screenservices/uae/WithdrawFlow/WithdrawAmount/ActionGetCurrencyConfig", "auneRzUWYP17IvRUyOP08Q", n, r.callContext(e), void 0, void 0, !0).then(function(f) {
                            var h = new(r.constructor.getVariableGroupType("uae.WithdrawFlow.WithdrawAmount$ActionGetCurrencyConfig"));
                            return h.responseOut = a.DataConversion.ServerDataConverter.from(f.Response, O), h
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 0)
            }), this._getCurrencyConfig$ServerAction
        }
        set getCurrencyConfig$ServerAction(t) {
            this._getCurrencyConfig$ServerAction = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    s = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "2f3dd2e5-223e-4e37-8f08-a022f349371f"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), t = r.callContext(t);
                        var f = new a.DataTypes.VariableHolder,
                            h = new a.DataTypes.VariableHolder,
                            o = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return e.variables.is_loadingVar = !0, o.value = b.getWithdrawWallet$Action(t), h.value = b.getWithdrawRequest$Action(t), e.variables.withdraw_requestVar = h.value.withdraw_requestOut, e.variables.walletVar = o.value.walletOut, e.flush(), r.getCurrencyConfig$ServerAction(e.variables.walletVar.currencyAttr, t).then(function(B) {
                                f.value = B
                            }).then(function() {
                                e.variables.currency_configVar = f.value.responseOut.dataAttr.getItem(0), e.variables.is_loadingVar = !1
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
        get _inputAmountOnChange$Action() {
            return this.hasOwnProperty("__inputAmountOnChange$Action") || (this.__inputAmountOnChange$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    s = this.idService;
                return a.Logger.startActiveSpan("InputAmountOnChange", function(n) {
                    n && (n.setAttribute("code.function", "InputAmountOnChange"), n.setAttribute("outsystems.function.key", "8bcb26fe-7ab9-49eb-a43c-ef92d08323f6"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("InputAmountOnChange"), t = r.callContext(t), e.variables.withdraw_requestVar.amountAttr.gte(e.variables.currency_configVar.limitAttr.withdrawalAttr.min_amount_in_base_currencyAttr) ? e.variables.withdraw_requestVar.amountAttr.lt(e.variables.walletVar.balanceAttr) ? (e.widgets.get(s.getId("Input_amount")).validAttr = !0, e.widgets.get(s.getId("Input_amount")).validationMessageAttr = "") : (e.widgets.get(s.getId("Input_amount")).validAttr = !1, e.widgets.get(s.getId("Input_amount")).validationMessageAttr = a.Injector.resolve(a.ServiceNames.TranslationsService).getMessage("xbjM1_jjwkSekEkFSLRO7Q#Value.1877137235.1", "Amount exceeds balance")) : (e.widgets.get(s.getId("Input_amount")).validAttr = !1, e.widgets.get(s.getId("Input_amount")).validationMessageAttr = a.Injector.resolve(a.ServiceNames.TranslationsService).getMessage("3khmpS6AcEik6UARMwVcMA#Value.1098876423.1", "Minimum withdrawal amount is ") + a.BuiltinFunctions.decimalToText(e.variables.currency_configVar.limitAttr.withdrawalAttr.min_amount_in_base_currencyAttr) + ".")
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__inputAmountOnChange$Action
        }
        set _inputAmountOnChange$Action(t) {
            this.__inputAmountOnChange$Action = t
        }
        get _withdrawOnClick$Action() {
            return this.hasOwnProperty("__withdrawOnClick$Action") || (this.__withdrawOnClick$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    s = this.idService;
                return a.Logger.startActiveSpan("WithdrawOnClick", function(n) {
                    n && (n.setAttribute("code.function", "WithdrawOnClick"), n.setAttribute("outsystems.function.key", "f5e3af11-af66-4798-a436-8896dc7f8789"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (r.ensureControllerAlive("WithdrawOnClick"), t = r.callContext(t), e.variables.withdraw_requestVar.amountAttr.gt(a.BuiltinFunctions.integerToDecimal(0)) && e.widgets.get(s.getId("WithdrawForm")).validAttr) return b.updateWithdrawRequest$Action(e.variables.withdraw_requestVar, t), a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "confirm-withdraw", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__withdrawOnClick$Action
        }
        set _withdrawOnClick$Action(t) {
            this.__withdrawOnClick$Action = t
        }
        onReady$Action(t) {
            var e = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "2f3dd2e5-223e-4e37-8f08-a022f349371f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._onReady$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        inputAmountOnChange$Action(t) {
            var e = this.controller;
            return a.Logger.startActiveSpan("InputAmountOnChange__proxy", function(r) {
                r && (r.setAttribute("code.function", "InputAmountOnChange"), r.setAttribute("outsystems.function.key", "8bcb26fe-7ab9-49eb-a43c-ef92d08323f6"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._inputAmountOnChange$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        withdrawOnClick$Action(t) {
            var e = this.controller;
            return a.Logger.startActiveSpan("WithdrawOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "WithdrawOnClick"), r.setAttribute("outsystems.function.key", "f5e3af11-af66-4798-a436-8896dc7f8789"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._withdrawOnClick$Action, t)
                } finally {
                    r && r.end()
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
                var e = this.controller,
                    r = this.model,
                    s = this.idService;
                return e.onReady$Action(t)
            }), this._onReadyEventHandler
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return M.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    d(c, "ControllerInner");
    let m = c;
    N = m, N.registerVariableGroupType("uae.WithdrawFlow.WithdrawAmount$ActionGetCurrencyConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Record,
        defaultValue: d(function() {
            return new O
        }, "defaultValue"),
        complexType: O
    }])
}
var N, $ = new a.Controller.ControllerFactory(N, Z);
var l = ie(ae());
var u = _,
    z = class z extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("withdraw_request", "withdraw_requestVar", "withdraw_request", !0, !1, u.DataTypes.DataTypes.Record, function() {
                return u.DataTypes.ImmutableBase.getData(new T)
            }, !1, T), this.attr("wallet", "walletVar", "wallet", !0, !1, u.DataTypes.DataTypes.Record, function() {
                return u.DataTypes.ImmutableBase.getData(new V)
            }, !1, V), this.attr("currency_config", "currency_configVar", "currency_config", !0, !1, u.DataTypes.DataTypes.Record, function() {
                return u.DataTypes.ImmutableBase.getData(new I)
            }, !1, I), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(z, "VariablesRecord");
var x = z;
x.init();
var G = class G extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            WithdrawForm: u.Model.ValidationWidgetRecord,
            Input_amount: u.Model.ValidationWidgetRecord
        }
    }
};
d(G, "WidgetsRecord");
var L = G,
    j = class j extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return x
        }
        static getWidgetsRecordConstructor() {
            return L
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(c) {}
    };
d(j, "Model");
var P = j;
P._hasValidationWidgetsValue = void 0;
var q = new u.Model.ModelFactory(P);
var R = W.PlaceholderContent,
    We = W.IteratorPlaceholderContent,
    le = d(function() {
        var m = K(function(c) {
            var i = c.model,
                t = c.controller,
                e = c.controller.idService,
                r = t.validationService,
                s = t.callContext(),
                n = H,
                f = F,
                h = {
                    props: c,
                    validateWidget: d(function(v) {
                        c.validateWidget(c, v)
                    }, "validateWidget")
                },
                o = i,
                B = J,
                p = Y,
                S = Q();
            return l.createElement("div", c.rootNodeProperties, l.createElement(D, {
                getOwnerSpan: d(function() {
                    return S.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: d(function() {
                    return S.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_back_button: !0
                },
                events: {
                    _handleError: d(function(v) {
                        t.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    content: new R(function() {
                        return [l.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(y, {
                            extendedProperties: {
                                style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                            },
                            text: [p(f("599bOd4Es0efAF4CS7OOXQ#Value", "Withdraw amount"))],
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: o
                        }), l.createElement(g, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid var(--border-secondary, rgba(0, 0, 0, 0.08); display: flex; flex-direction: column;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: flex-start; align-self: stretch; display: flex; gap: 16px; padding: 16px 0px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "FromContainer"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(y, {
                            extendedProperties: {
                                style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                            },
                            text: [p(f("DtdOGtwIw0CHCrkIEMZzug#Value", "From"))],
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: o
                        }), l.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 8px; justify-content: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(te, {
                            extendedProperties: {
                                style: "height: 24px;"
                            },
                            gridProperties: {
                                width: "24px",
                                marginLeft: "0"
                            },
                            type: 1,
                            url: i.getCachedValue(e.getId("yiNl6WpgO0qhTt2dhzHz2w.Url"), function() {
                                return "/ChampionApp/img/ChampionApp.currency" + w.toLower(i.variables.walletVar.currencyAttr) + ".svg"
                            }, function() {
                                return i.variables.walletVar.currencyAttr
                            }),
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: o
                        }), l.createElement(A, {
                            extendedProperties: {
                                style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            value: i.variables.walletVar.currencyAttr + ` wallet\r
`,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: o
                        })))), l.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid var(--border-secondary, rgba(0, 0, 0, 0.08); display: flex; flex-direction: column;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: flex-start; align-self: stretch; display: flex; gap: 16px; padding: 16px 0px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ToContainer"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(y, {
                            extendedProperties: {
                                style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                            },
                            text: [p(f("VMMcXNJWtUu9ma0VuIh8tw#Value", "To"))],
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: o
                        }), l.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex: 2 0 0; gap: 8px; justify-content: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: right; white-space: break-spaces; word-break: break-word; word-wrap: break-word;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            value: i.variables.withdraw_requestVar.toAttr.addressAttr,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: o
                        }))))), l.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 8px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(y, {
                            extendedProperties: {
                                style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                            },
                            text: [p(f("NbE7CmyVYEGZ_HdBkZbG+g#Value", "Withdraw amount"))],
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: o
                        }), l.createElement(ee, {
                            _validationProps: {
                                validationService: r
                            },
                            extendedProperties: {
                                style: "border: 0px; padding: 0px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "form card",
                            _idProps: {
                                service: e,
                                name: "WithdrawForm"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(k, {
                            getOwnerSpan: d(function() {
                                return S.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: d(function() {
                                return S.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "withdrawal-amount",
                                AlignIconRight: !0
                            },
                            events: {
                                _handleError: d(function(v) {
                                    t.handleError(v)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r,
                                validationParentId: e.getId("WithdrawForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "18",
                                alias: "2"
                            },
                            _widgetRecordProvider: o,
                            placeholders: {
                                icon: new R(function() {
                                    return [l.createElement(A, {
                                        value: i.variables.walletVar.currencyAttr,
                                        _idProps: {
                                            service: e,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: o
                                    })]
                                }),
                                input: new R(function() {
                                    return [l.createElement(re, {
                                        _validationProps: {
                                            validationService: r,
                                            validationParentId: e.getId("WithdrawForm")
                                        },
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: 2,
                                        mandatory: !1,
                                        maxLength: 0,
                                        onChange: d(function() {
                                            var v = typeof s != "undefined" && s !== null ? s.clone() : t.callContext().clone();
                                            t.inputAmountOnChange$Action(t.callContext(v))
                                        }, "onChange"),
                                        prompt: C.resolve(E.TranslationsService).getMessage("mAKjbMPSj0O3PvUIvLgedQ#ValueExpression.1964981368.1", "Amount"),
                                        style: "form-control",
                                        variable: i.createVariable(U.DataTypes.Decimal, i.variables.withdraw_requestVar.amountAttr, function(v) {
                                            i.variables.withdraw_requestVar.amountAttr = v
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "Input_amount"
                                        },
                                        _widgetRecordProvider: o
                                    })]
                                })
                            },
                            _dependencies: [n(i.variables.withdraw_requestVar.amountAttr), n(i.variables.walletVar.currencyAttr)]
                        })), l.createElement(A, {
                            extendedProperties: {
                                style: "---comment-6: /* 157.143% */; color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            style: i.getCachedValue(e.getId("j1zRn6sjD0iGqkht9BR2HA.Style"), function() {
                                return i.widgets.get(e.getId("Input_amount")).validAttr ? "" : "invisible"
                            }, function() {
                                return i.widgets.get(e.getId("Input_amount")).validAttr
                            }),
                            value: i.getCachedValue(e.getId("j1zRn6sjD0iGqkht9BR2HA.Value"), function() {
                                return C.resolve(E.TranslationsService).getMessage("QV9YTFZK3E6FVpmu1G53qg#ValueExpression.-1831186718.1", "Balance: ") + (i.variables.walletVar.currencyAttr === "GBP" || i.variables.walletVar.currencyAttr === "USD" ? w.formatCurrency(i.variables.walletVar.balanceAttr, "", 2, ".", ",") : w.formatCurrency(i.variables.walletVar.balanceAttr, "", 8, ".", ",")) + " " + i.variables.walletVar.currencyAttr
                            }, function() {
                                return i.variables.walletVar.currencyAttr
                            }, function() {
                                return i.variables.walletVar.balanceAttr
                            }),
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: o
                        })))]
                    }),
                    footer: new R(function() {
                        return [l.createElement(X, {
                            enabled: i.getCachedValue(e.getId("oJ2EZMLfZUybMy+ckaymiA.Enabled"), function() {
                                return w.length(i.variables.withdraw_requestVar.toAttr.addressAttr) > 0 && i.variables.withdraw_requestVar.amountAttr.gt(w.integerToDecimal(0)) && i.widgets.get(e.getId("WithdrawForm")).validAttr
                            }, function() {
                                return i.variables.withdraw_requestVar.toAttr.addressAttr
                            }, function() {
                                return i.variables.withdraw_requestVar.amountAttr
                            }, function() {
                                return i.widgets.get(e.getId("WithdrawForm")).validAttr
                            }),
                            isDefault: !1,
                            onClick: d(function() {
                                var v = typeof s != "undefined" && s !== null ? s.clone() : t.callContext().clone();
                                t.withdrawOnClick$Action(t.callContext(v))
                            }, "onClick"),
                            style: "btn btn-primary action-button",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [p(f("rT9DZzHpnUWIVEL0kqECLw#Value", "Withdraw"))],
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: o
                        }))]
                    })
                },
                _dependencies: [n(i.widgets.get(e.getId("WithdrawForm")).validAttr), n(i.widgets.get(e.getId("Input_amount")).validAttr), n(i.variables.withdraw_requestVar.amountAttr), n(i.variables.withdraw_requestVar.toAttr.addressAttr), n(i.variables.walletVar.balanceAttr), n(i.variables.walletVar.currencyAttr)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: d(function() {
                return {
                    codeFunction: "WithdrawAmount",
                    functionKey: "68735585-1bc5-41c8-8bfa-f8f98acedfb0",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "WithdrawFlow.WithdrawAmount",
            modelFactory: q,
            controllerFactory: $,
            getTitle: d(function(c) {
                var i = c.model,
                    t = c.controller,
                    e = c.controller.idService,
                    r = t.validationService,
                    s = t.callContext(),
                    n = H,
                    f = F,
                    h = {
                        props: c,
                        validateWidget: d(function(o) {
                            c.validateWidget(c, o)
                        }, "validateWidget")
                    };
                return C.resolve(E.TranslationsService).getMessage("hVVzaMUbyEGL+vj5is7fsA#TitleExpression.990125096.1", "Withdraw amount | Deriv")
            }, "getTitle")
        });
        return m.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.WithdrawFlow.WithdrawAmount.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [D, k]
        }, m
    }, "componentFactory"),
    de = le();
export {
    $ as controllerModule, q as modelModule, de as viewModule, M as webFlowControllerModule
};