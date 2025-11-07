import {
    a as E
} from "./_oschunk-ES37VNGZ.js";
import {
    a as L
} from "./_oschunk-7ZNALR7E.js";
import {
    b as m,
    f as d,
    h as y,
    n as C,
    u as _
} from "./_oschunk-VR5BNL2K.js";
import {
    a as re,
    g as V,
    m as K,
    n as X,
    q,
    r as Q,
    s as k,
    t as I
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Y
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Ca as R,
    Qb as j,
    Sb as O,
    ub as W
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as P,
    c as l,
    e as te,
    m as J,
    n as U,
    p as w
} from "./_oschunk-M5BUVJ72.js";
var ie = {
        "CaXBTb5zl0eFAXEDO0sr3A#Title": "\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 MT5 | Deriv",
        "CaXBTb5zl0eFAXEDO0sr3A#TitleExpression.1319289949.1": "\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 MT5 | Deriv"
    },
    Z = {
        "ar-001": {
            translations: ie,
            isRTL: !0
        }
    };

function M(f, c, g, e) {
    let t = "";
    f.MT5Type === "standard" ? t = window.i18n.getTranslation(f.language, "Standard") : t = window.i18n.getTranslation(f.language, "Swap-free"), f.isDemo && (t = t + " (Demo)"), f.name = t
}
l(M, "default");
var a = P; {
    let c = class c extends a.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, Z);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getWalletList$ServerAction() {
            return this.hasOwnProperty("_getWalletList$ServerAction") || (this._getWalletList$ServerAction = function(e, t) {
                var n = this.controller;
                return a.Logger.startActiveSpan("GetWalletList", function(o) {
                    return o && (o.setAttribute("code.function", "GetWalletList"), o.setAttribute("outsystems.function.key", "457611d5-9b1a-4faf-a88a-d21184a30f68"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), a.Flow.tryFinally(function() {
                        var s = {
                            authorization: a.DataConversion.ServerDataConverter.to(e, a.DataTypes.DataTypes.Text)
                        };
                        return n.callServerAction("GetWalletList", "screenservices/uae/V2Flow/MT5AccountCreationSuccess_V2/ActionGetWalletList", "mBL53KMNBzvxE1nMqxclWg", s, n.callContext(t), void 0, void 0, !0).then(function(h) {
                            var b = new(n.constructor.getVariableGroupType("uae.V2Flow.MT5AccountCreationSuccess_V2$ActionGetWalletList"));
                            return b.responseOut = a.DataConversion.ServerDataConverter.from(h.Response, R), b
                        })
                    }, function() {
                        o && o.end()
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
        get _depositOnClick$Action() {
            return this.hasOwnProperty("__depositOnClick$Action") || (this.__depositOnClick$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("DepositOnClick", function(s) {
                    s && (s.setAttribute("code.function", "DepositOnClick"), s.setAttribute("outsystems.function.key", "0d560925-7ad9-4ba3-b88e-e5db2f9a532a"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("DepositOnClick"), e = n.callContext(e), a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "deposit", {
                            wallet_id: a.DataConversion.ServerDataConverter.to(a.BuiltinFunctions.longIntegerToText(t.variables.wallet_idVar), a.DataTypes.DataTypes.Text)
                        }), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__depositOnClick$Action
        }
        set _depositOnClick$Action(e) {
            this.__depositOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(s) {
                    return s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "1365abd9-1042-43ff-85fb-83f5f8bd3f63"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var h = new a.DataTypes.VariableHolder,
                            b = new a.DataTypes.VariableHolder,
                            r = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return b.value = O.getAuth$Action(e), t.variables.is_loadingVar = !0, t.flush(), n.getWalletList$ServerAction(b.value.tokenOut, e).then(function(p) {
                                h.value = p
                            }).then(function() {
                                t.variables.has_balanceVar = h.value.responseOut.dataAttr.walletsAttr.getCurrent(e.iterationContext).balanceAttr.gt(a.BuiltinFunctions.integerToDecimal(0)), t.variables.is_loadingVar = !1, t.variables.wallet_idVar = h.value.responseOut.dataAttr.walletsAttr.getCurrent(e.iterationContext).idAttr, r.value = a.Logger.startActiveSpan("JavaScript1", function(p) {
                                    p && (p.setAttribute("code.function", "JavaScript1"), p.setAttribute("outsystems.function.key", "580b5f62-4a88-490e-8486-79bde158bfc2"), p.setAttribute("outsystems.function.owner.name", "uae"), p.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), p.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return n.safeExecuteJSNode(M, "JavaScript1", "OnReady", {
                                            language: a.DataConversion.JSNodeParamConverter.to(a.BuiltinFunctions.toLower(O.languageMapper$Action(e).charCodeOut), a.DataTypes.DataTypes.Text),
                                            MT5Type: a.DataConversion.JSNodeParamConverter.to(W.getSelectedMT5AccountType(), a.DataTypes.DataTypes.Text),
                                            isDemo: a.DataConversion.JSNodeParamConverter.to(t.variables.is_demoIn, a.DataTypes.DataTypes.Boolean),
                                            name: a.DataConversion.JSNodeParamConverter.to("", a.DataTypes.DataTypes.Text)
                                        }, function(z) {
                                            var S = new(n.constructor.getVariableGroupType("uae.V2Flow.MT5AccountCreationSuccess_V2.OnReady$javaScript1JSResult"));
                                            return S.nameOut = a.DataConversion.JSNodeParamConverter.from(z.name, a.DataTypes.DataTypes.Text), S
                                        }, {}, {})
                                    } finally {
                                        p && p.end()
                                    }
                                }, 1), W.sethasMT5Accounts(!0), t.variables.mT5AccountVar = r.value.nameOut
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _maybeLaterOnClick$Action() {
            return this.hasOwnProperty("__maybeLaterOnClick$Action") || (this.__maybeLaterOnClick$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("MaybeLaterOnClick", function(s) {
                    s && (s.setAttribute("code.function", "MaybeLaterOnClick"), s.setAttribute("outsystems.function.key", "8047e33b-12a3-4988-b124-c807ebd52c4f"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("MaybeLaterOnClick"), e = n.callContext(e), a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "Home_V2", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__maybeLaterOnClick$Action
        }
        set _maybeLaterOnClick$Action(e) {
            this.__maybeLaterOnClick$Action = e
        }
        depositOnClick$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("DepositOnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "DepositOnClick"), n.setAttribute("outsystems.function.key", "0d560925-7ad9-4ba3-b88e-e5db2f9a532a"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._depositOnClick$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "1365abd9-1042-43ff-85fb-83f5f8bd3f63"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        maybeLaterOnClick$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("MaybeLaterOnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "MaybeLaterOnClick"), n.setAttribute("outsystems.function.key", "8047e33b-12a3-4988-b124-c807ebd52c4f"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._maybeLaterOnClick$Action, e)
                } finally {
                    n && n.end()
                }
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
                var t = this.controller,
                    n = this.model,
                    o = this.idService;
                return t.onReady$Action(e)
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
                return L.default.handleError(e, this.callContext())
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
    l(c, "ControllerInner");
    let f = c;
    T = f, T.registerVariableGroupType("uae.V2Flow.MT5AccountCreationSuccess_V2$ActionGetWalletList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new R
        }, "defaultValue"),
        complexType: R
    }]), T.registerVariableGroupType("uae.V2Flow.MT5AccountCreationSuccess_V2.OnReady$javaScript1JSResult", [{
        name: "name",
        attrName: "nameOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var T, H = new a.Controller.ControllerFactory(T, Y);
var i = te(re());
var v = P,
    G = class G extends v.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("has_balance", "has_balanceVar", "has_balance", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("wallet_id", "wallet_idVar", "wallet_id", !0, !1, v.DataTypes.DataTypes.LongInteger, function() {
                return v.DataTypes.LongInteger.defaultValue
            }, !1), this.attr("MT5Account", "mT5AccountVar", "MT5Account", !0, !1, v.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_demo", "is_demoIn", "is_demo", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_demoInDataFetchStatus", "_is_demoInDataFetchStatus", "_is_demoInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("type", "typeIn", "type", !0, !1, v.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_typeInDataFetchStatus", "_typeInDataFetchStatus", "_typeInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(v.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(G, "VariablesRecord");
var A = G;
A.init();
var B = class B extends v.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(B, "WidgetsRecord");
var N = B,
    x = class x extends v.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return A
        }
        static getWidgetsRecordConstructor() {
            return N
        }
        static get hasValidationWidgets() {
            return x._hasValidationWidgetsValue === void 0 && (x._hasValidationWidgetsValue = void 0), x._hasValidationWidgetsValue
        }
        setInputs(c) {
            "is_demo" in c && (this.variables.is_demoIn = v.DataConversion.ServerDataConverter.from(c.is_demo, v.DataTypes.DataTypes.Boolean)), "type" in c && (this.variables.typeIn = v.DataConversion.ServerDataConverter.from(c.type, v.DataTypes.DataTypes.Text))
        }
    };
l(x, "Model");
var D = x;
D._hasValidationWidgetsValue = void 0;
var $ = new v.Model.ModelFactory(D);
var F = V.PlaceholderContent,
    Le = V.IteratorPlaceholderContent,
    ne = l(function() {
        var f = X(function(c) {
            var g = c.model,
                e = c.controller,
                t = c.controller.idService,
                n = e.validationService,
                o = e.callContext(),
                s = k,
                h = I,
                b = {
                    props: c,
                    validateWidget: l(function(u) {
                        c.validateWidget(c, u)
                    }, "validateWidget")
                },
                r = g,
                p = Q,
                z = q,
                S = K();
            return i.createElement("div", c.rootNodeProperties, p(j.isDesktop$Action(o).isDesktopOut, !1, this, function() {
                return [i.createElement(E, {
                    getOwnerSpan: l(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: l(function(u) {
                            e.handleError(u)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        content: new F(function() {
                            return [i.createElement(d, {
                                align: 0,
                                animate: !0,
                                visible: g.variables.typeIn === "standard",
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; gap: 24px; padding: 24px;"
                                },
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(C, {
                                extendedProperties: {
                                    style: "height: 128px; margin-bottom: 24px;"
                                },
                                gridProperties: {
                                    width: "128px"
                                },
                                image: w.VersionedURL.getVersionedUrl("img/uae.account_standard.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-self: center; display: flex; flex-direction: column; gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSInline ThemeGrid_MarginGutter",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(y, {
                                extendedProperties: {
                                    style: "align-self: stretch; color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 32px; font-weight: 800; text-align: center;"
                                },
                                value: "MT5 Standard activated",
                                _idProps: {
                                    service: t,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(y, {
                                extendedProperties: {
                                    style: "color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 16px; font-weight: 400;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                style: "text-align-center",
                                value: "You can now make a deposit into your Wallet and transfer funds to your Deriv MT5 account.",
                                _idProps: {
                                    service: t,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: r
                            })), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "gap: 8px;"
                                },
                                style: "display-flex flex-direction-row",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(m, {
                                enabled: !0,
                                gridProperties: {
                                    width: "220px"
                                },
                                isDefault: !1,
                                onClick: l(function() {
                                    var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.maybeLaterOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "btn-secondary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                extendedProperties: {
                                    style: "color: var(--component-button-label-color-white-secondary, #FFF); font-weight: 800;"
                                },
                                text: ["Maybe later"],
                                _idProps: {
                                    service: t,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(m, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: var(--component-button-height-lg, 48px); min-width: 96px;"
                                },
                                gridProperties: {
                                    width: "220px"
                                },
                                isDefault: !1,
                                onClick: l(function() {
                                    var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.depositOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                extendedProperties: {
                                    style: "font-weight: 800;"
                                },
                                text: ["Deposit"],
                                _idProps: {
                                    service: t,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: r
                            })))))), i.createElement(d, {
                                align: 0,
                                animate: !0,
                                visible: g.variables.typeIn === "swap-free",
                                _idProps: {
                                    service: t,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; gap: 24px; padding: 24px;"
                                },
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(C, {
                                extendedProperties: {
                                    style: "height: 128px; margin-bottom: 24px;"
                                },
                                gridProperties: {
                                    width: "128px"
                                },
                                image: w.VersionedURL.getVersionedUrl("img/uae.account_swapfree.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-self: center; display: flex; flex-direction: column; gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSInline ThemeGrid_MarginGutter",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(y, {
                                extendedProperties: {
                                    style: "align-self: stretch; color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 32px; font-weight: 800; text-align: center;"
                                },
                                value: "MT5 Swap-Free activated",
                                _idProps: {
                                    service: t,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(y, {
                                extendedProperties: {
                                    style: "color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 16px; font-weight: 400;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                style: "text-align-center",
                                value: "You can now make a deposit into your Wallet and transfer funds to your Deriv MT5 account.",
                                _idProps: {
                                    service: t,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: r
                            })), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "gap: 8px;"
                                },
                                style: "display-flex flex-direction-row",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(m, {
                                enabled: !0,
                                gridProperties: {
                                    width: "220px"
                                },
                                isDefault: !1,
                                onClick: l(function() {
                                    var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.maybeLaterOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "btn-secondary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                extendedProperties: {
                                    style: "color: var(--component-button-label-color-white-secondary, #FFF); font-weight: 800;"
                                },
                                text: ["Maybe later"],
                                _idProps: {
                                    service: t,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(m, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: var(--component-button-height-lg, 48px); min-width: 96px;"
                                },
                                gridProperties: {
                                    width: "220px"
                                },
                                isDefault: !1,
                                onClick: l(function() {
                                    var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.depositOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                extendedProperties: {
                                    style: "font-weight: 800;"
                                },
                                text: ["Deposit"],
                                _idProps: {
                                    service: t,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: r
                            }))))))]
                        }),
                        content2: F.Empty
                    },
                    _dependencies: [s(g.variables.typeIn)]
                })]
            }, function() {
                return [i.createElement(E, {
                    getOwnerSpan: l(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: l(function(u) {
                            e.handleError(u)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: t,
                        uuid: "27",
                        alias: "2"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        content: F.Empty,
                        content2: new F(function() {
                            return [i.createElement(d, {
                                align: 0,
                                animate: !0,
                                visible: g.variables.typeIn === "standard",
                                _idProps: {
                                    service: t,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; gap: 24px; padding: 24px;"
                                },
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(C, {
                                extendedProperties: {
                                    style: "height: 128px; margin-bottom: 24px;"
                                },
                                gridProperties: {
                                    width: "128px"
                                },
                                image: w.VersionedURL.getVersionedUrl("img/uae.account_standard.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-self: center; display: flex; flex-direction: column; gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSInline ThemeGrid_MarginGutter",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(y, {
                                extendedProperties: {
                                    style: "align-self: stretch; color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 32px; font-weight: 800; text-align: center;"
                                },
                                value: "MT5 Standard activated",
                                _idProps: {
                                    service: t,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(y, {
                                extendedProperties: {
                                    style: "color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 16px; font-weight: 400;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                style: "text-align-center",
                                value: "You can now make a deposit into your Wallet and transfer funds to your Deriv MT5 account.",
                                _idProps: {
                                    service: t,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: r
                            })), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "gap: 8px;"
                                },
                                style: "display-flex flex-direction-column fixed bottom-0 left-0 w-full flex justify-center px-6 py-4",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Footer5"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "full-width",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(m, {
                                enabled: !0,
                                gridProperties: {
                                    width: "100%"
                                },
                                isDefault: !1,
                                onClick: l(function() {
                                    var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.maybeLaterOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "btn-secondary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                extendedProperties: {
                                    style: "color: var(--component-button-label-color-white-secondary, #FFF); font-weight: 800;"
                                },
                                text: ["Maybe later"],
                                _idProps: {
                                    service: t,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "full-width",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(m, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: var(--component-button-height-lg, 48px); min-width: 96px;"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                isDefault: !1,
                                onClick: l(function() {
                                    var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.depositOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "39"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                extendedProperties: {
                                    style: "font-weight: 800;"
                                },
                                text: ["Deposit"],
                                _idProps: {
                                    service: t,
                                    uuid: "40"
                                },
                                _widgetRecordProvider: r
                            })))))), i.createElement(d, {
                                align: 0,
                                animate: !0,
                                visible: g.variables.typeIn === "swap-free",
                                _idProps: {
                                    service: t,
                                    uuid: "41"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; gap: 24px; padding: 24px;"
                                },
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(C, {
                                extendedProperties: {
                                    style: "height: 128px; margin-bottom: 24px;"
                                },
                                gridProperties: {
                                    width: "128px"
                                },
                                image: w.VersionedURL.getVersionedUrl("img/uae.account_swapfree.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-self: center; display: flex; flex-direction: column; gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSInline ThemeGrid_MarginGutter",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "44"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(y, {
                                extendedProperties: {
                                    style: "align-self: stretch; color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 32px; font-weight: 800; text-align: center;"
                                },
                                value: "MT5 Swap-Free activated",
                                _idProps: {
                                    service: t,
                                    uuid: "45"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(y, {
                                extendedProperties: {
                                    style: "color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 16px; font-weight: 400;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                style: "text-align-center",
                                value: "You can now make a deposit into your Wallet and transfer funds to your Deriv MT5 account.",
                                _idProps: {
                                    service: t,
                                    uuid: "46"
                                },
                                _widgetRecordProvider: r
                            })), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "display-flex flex-direction-column fixed bottom-0 left-0 w-full flex justify-center px-6 py-4",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Footer4"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "full-width",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "48"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(m, {
                                enabled: !0,
                                gridProperties: {
                                    width: "100%"
                                },
                                isDefault: !1,
                                onClick: l(function() {
                                    var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.maybeLaterOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "btn-secondary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "49"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                extendedProperties: {
                                    style: "color: var(--component-button-label-color-white-secondary, #FFF); font-weight: 800;"
                                },
                                text: ["Maybe later"],
                                _idProps: {
                                    service: t,
                                    uuid: "50"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "full-width",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "51"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(m, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: var(--component-button-height-lg, 48px); min-width: 96px;"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                isDefault: !1,
                                onClick: l(function() {
                                    var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.depositOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "52"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                extendedProperties: {
                                    style: "font-weight: 800;"
                                },
                                text: ["Deposit"],
                                _idProps: {
                                    service: t,
                                    uuid: "53"
                                },
                                _widgetRecordProvider: r
                            }))))))]
                        })
                    },
                    _dependencies: [s(g.variables.typeIn)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: l(function() {
                return {
                    codeFunction: "MT5AccountCreationSuccess_V2",
                    functionKey: "4dc1a509-73be-4797-8501-71033b4b2bdc",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Flow.MT5AccountCreationSuccess_V2",
            modelFactory: $,
            controllerFactory: H,
            getTitle: l(function(c) {
                var g = c.model,
                    e = c.controller,
                    t = c.controller.idService,
                    n = e.validationService,
                    o = e.callContext(),
                    s = k,
                    h = I,
                    b = {
                        props: c,
                        validateWidget: l(function(r) {
                            c.validateWidget(c, r)
                        }, "validateWidget")
                    };
                return J.resolve(U.TranslationsService).getMessage("CaXBTb5zl0eFAXEDO0sr3A#TitleExpression.1319289949.1", "MT5 account created | Deriv")
            }, "getTitle")
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.V2Flow.MT5AccountCreationSuccess_V2.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [E]
        }, f
    }, "componentFactory"),
    ae = ne();
export {
    H as controllerModule, $ as modelModule, ae as viewModule, L as webFlowControllerModule
};