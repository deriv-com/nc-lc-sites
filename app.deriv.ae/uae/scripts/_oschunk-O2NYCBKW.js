import {
    a as C
} from "./_oschunk-WXVQSRVV.js";
import {
    a as Pe
} from "./_oschunk-YVFTECWM.js";
import {
    f as l,
    h as Y,
    n as p,
    p as ee,
    s as M,
    u as S
} from "./_oschunk-VR5BNL2K.js";
import {
    a as X,
    g as A,
    m as I,
    o as H,
    q as V,
    r as W,
    s as k,
    t as N
} from "./_oschunk-4VHUVDBV.js";
import {
    a as L
} from "./_oschunk-KXORGPRQ.js";
import {
    E as Q,
    Qb as Z,
    Sb as D
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as be,
    W as R,
    c as r,
    e as K,
    m as Ce,
    n as Ee,
    p as E
} from "./_oschunk-M5BUVJ72.js";
var w = R,
    ne = class ne extends w.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Balance", "balanceVar", "Balance", !0, !1, w.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsDemo", "isDemoVar", "IsDemo", !0, !1, w.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Config", "configIn", "Config", !0, !1, w.DataTypes.DataTypes.Record, function() {
                return w.DataTypes.ImmutableBase.getData(new Q)
            }, !1, Q), this.attr("_configInDataFetchStatus", "_configInDataFetchStatus", "_configInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("is_mt5_balance_loading", "is_mt5_balance_loadingIn", "is_mt5_balance_loading", !0, !1, w.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_mt5_balance_loadingInDataFetchStatus", "_is_mt5_balance_loadingInDataFetchStatus", "_is_mt5_balance_loadingInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(w.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(ne, "VariablesRecord");
var z = ne;
z.init();
var re = class re extends w.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(re, "WidgetsRecord");
var te = re,
    ie = class ie extends w.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return z
        }
        static getWidgetsRecordConstructor() {
            return te
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(c) {
            "Config" in c && (this.variables.configIn = c.Config, "_configInDataFetchStatus" in c && (this.variables._configInDataFetchStatus = c._configInDataFetchStatus)), "is_mt5_balance_loading" in c && (this.variables.is_mt5_balance_loadingIn = c.is_mt5_balance_loading, "_is_mt5_balance_loadingInDataFetchStatus" in c && (this.variables._is_mt5_balance_loadingInDataFetchStatus = c._is_mt5_balance_loadingInDataFetchStatus))
        }
    };
r(ie, "Model");
var B = ie;
B._hasValidationWidgetsValue = void 0;
var Re = new w.Model.ModelFactory(B);
var T = R,
    se = class se extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Device", "deviceVar", "Device", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ObserverObj", "observerObjVar", "ObserverObj", !0, !1, T.DataTypes.DataTypes.Object, function() {
                return null
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(se, "VariablesRecord");
var J = se;
J.init();
var le = class le extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(le, "WidgetsRecord");
var ae = le,
    de = class de extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return J
        }
        static getWidgetsRecordConstructor() {
            return ae
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(c) {}
    };
r(de, "Model");
var G = de;
G._hasValidationWidgetsValue = void 0;
var Oe = new T.Model.ModelFactory(G);
var F = R,
    ue = class ue extends F.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(F.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(ue, "VariablesRecord");
var j = ue;
j.init();
var ve = class ve extends F.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(ve, "WidgetsRecord");
var ce = ve,
    $ = class $ extends F.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return j
        }
        static getWidgetsRecordConstructor() {
            return ce
        }
        static get hasValidationWidgets() {
            return $._hasValidationWidgetsValue === void 0 && ($._hasValidationWidgetsValue = void 0 || void 0), $._hasValidationWidgetsValue
        }
        setInputs(c) {}
    };
r($, "Model");
var q = $;
q._hasValidationWidgetsValue = void 0;
var xe = new F.Model.ModelFactory(q);
var O = K(X());
var $e = {
        "VZjDR3vicEul_tDWmEpG5A#ValueExpression.-453570690.1": "(\u062A\u062C\u0631\u064A\u0628\u064A)",
        "+jo6w9lexE2XBZFAtmNS8A#Value.46730161.1": "10000"
    },
    Ae = {
        "ar-001": {
            translations: $e,
            isRTL: !0
        }
    };

function ge(g, c, y, e) {
    var m;
    let t = g.currency,
        a = {
            style: "currency",
            currency: "AED",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        },
        u = new Intl.NumberFormat("en-US", a).format((m = g.Amount) != null ? m : 1e4).replace(t, "").trim() + ` ${t}`;
    g.Balance = u
}
r(ge, "default");
var f = R; {
    let c = class c extends f.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, Ae);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    o = this.idService;
                return f.Logger.startActiveSpan("OnReady", function(d) {
                    d && (d.setAttribute("code.function", "OnReady"), d.setAttribute("outsystems.function.key", "12072f3f-64b0-4142-9f31-5bef3ddf861c"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnReady"), e = a.callContext(e);
                        var u = new f.DataTypes.VariableHolder;
                        u.value = f.Logger.startActiveSpan("FormatCurrency", function(m) {
                            m && (m.setAttribute("code.function", "FormatCurrency"), m.setAttribute("outsystems.function.key", "2fb000d1-adf2-4b12-ad62-b9061a2c09ed"), m.setAttribute("outsystems.function.owner.name", "uae"), m.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(ge, "FormatCurrency", "OnReady", {
                                    currency: f.DataConversion.JSNodeParamConverter.to(t.variables.configIn.currencyAttr !== f.BuiltinFunctions.nullTextIdentifier() ? t.variables.configIn.currencyAttr : "AED", f.DataTypes.DataTypes.Text),
                                    Amount: f.DataConversion.JSNodeParamConverter.to(t.variables.configIn.balanceAttr !== f.BuiltinFunctions.nullTextIdentifier() ? t.variables.configIn.balanceAttr : f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("+jo6w9lexE2XBZFAtmNS8A#Value.46730161.1", "10000"), f.DataTypes.DataTypes.Text),
                                    Balance: f.DataConversion.JSNodeParamConverter.to("", f.DataTypes.DataTypes.Text)
                                }, function(n) {
                                    var P = new(a.constructor.getVariableGroupType("uae.AccountsCommon.MT5AccountCard.OnReady$formatCurrencyJSResult"));
                                    return P.balanceOut = f.DataConversion.JSNodeParamConverter.from(n.Balance, f.DataTypes.DataTypes.Text), P
                                }, {}, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1), t.variables.balanceVar = u.value.balanceOut, t.variables.isDemoVar = t.variables.configIn.platform_typeAttr === "demo"
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onClick2$Action() {
            return this.hasOwnProperty("__onClick2$Action") || (this.__onClick2$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    o = this.idService;
                return f.Logger.startActiveSpan("OnClick2", function(d) {
                    return d && (d.setAttribute("code.function", "OnClick2"), d.setAttribute("outsystems.function.key", "b1ee5815-db21-416e-9d61-df128dc6e7a8"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                        return a.ensureControllerAlive("OnClick2"), e = a.callContext(e), f.Flow.executeAsyncFlow(function() {
                            return D.setSelectedMt5AccountDetails$Action(t.variables.configIn, e), a.onClick$Action(e)
                        })
                    }, function() {
                        d && d.end()
                    })
                }, 1)
            }), this.__onClick2$Action
        }
        set _onClick2$Action(e) {
            this.__onClick2$Action = e
        }
        onReady$Action(e) {
            var t = this.controller;
            return f.Logger.startActiveSpan("OnReady__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "12072f3f-64b0-4142-9f31-5bef3ddf861c"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onClick2$Action(e) {
            var t = this.controller;
            return f.Logger.startActiveSpan("OnClick2__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnClick2"), a.setAttribute("outsystems.function.key", "b1ee5815-db21-416e-9d61-df128dc6e7a8"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onClick2$Action, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        get onClick$Action() {
            return this.hasOwnProperty("_onClick$Action") || (this._onClick$Action = function() {
                return Promise.resolve()
            }), this._onClick$Action
        }
        set onClick$Action(e) {
            this._onClick$Action = e
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
                    a = this.model,
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
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return D.defaultTimeout
        }
    };
    r(c, "ControllerInner");
    let g = c;
    me = g, me.registerVariableGroupType("uae.AccountsCommon.MT5AccountCard.OnReady$formatCurrencyJSResult", [{
        name: "Balance",
        attrName: "balanceOut",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Text,
        defaultValue: r(function() {
            return ""
        }, "defaultValue")
    }])
}
var me, Te = new f.Controller.ControllerFactory(me, L);
var yt = A.PlaceholderContent,
    _t = A.IteratorPlaceholderContent,
    Fe = r(function() {
        var g = H(function(c) {
            var y = c.model,
                e = c.controller,
                t = c.controller.idService,
                a = e.validationService,
                o = e.callContext(),
                d = k,
                u = N,
                m = {
                    props: c,
                    validateWidget: r(function(s) {
                        c.validateWidget(c, s)
                    }, "validateWidget")
                },
                n = y,
                P = W,
                _ = V,
                v = I();
            return O.createElement("div", c.rootNodeProperties, O.createElement(l, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: r(function() {
                        return Promise.resolve().then(function() {
                            var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            return e.onClick2$Action(e.callContext(s))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "background: #EFF3F5;"
                },
                style: "display-flex mt5-card column-gap-base",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: n
            }, O.createElement(l, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: n
            }, P(y.variables.configIn.typeAttr === "standard", !1, this, function() {
                return [O.createElement(p, {
                    extendedProperties: {
                        style: "height: 48px; margin-bottom: 0px; margin-inline-end: 16px;"
                    },
                    gridProperties: {
                        width: "48px"
                    },
                    type: 1,
                    url: "https://assets.deriv.ae/common/platform/dmt5-standard-sm.svg",
                    _idProps: {
                        service: t,
                        uuid: "2"
                    },
                    _widgetRecordProvider: n
                })]
            }, function() {
                return [O.createElement(p, {
                    extendedProperties: {
                        style: "height: 48px; margin-bottom: 0px; margin-inline-end: 16px;"
                    },
                    gridProperties: {
                        width: "48px"
                    },
                    type: 1,
                    url: "https://assets.deriv.ae/common/platform/dmt5-swf-sm.svg",
                    _idProps: {
                        service: t,
                        uuid: "3"
                    },
                    _widgetRecordProvider: n
                })]
            })), O.createElement(l, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "cursor-pointer",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: n
            }, P(y.variables.is_mt5_balance_loadingIn, !1, this, function() {
                return [O.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "margin-top: 4px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "animate-pulse w-full main-goal list-container gap-y-4 flex flex-col",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "LoaderContainer3"
                    },
                    _widgetRecordProvider: n
                }, O.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #e5e7eb; border-radius: 8px; height: 20px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "80px"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder3"
                    },
                    _widgetRecordProvider: n
                }))]
            }, function() {
                return [O.createElement(ee, {
                    extendedProperties: {
                        style: "margin-bottom: 4px;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    style: "cursor-pointer",
                    _idProps: {
                        service: t,
                        uuid: "7"
                    },
                    _widgetRecordProvider: n
                }, O.createElement(Y, {
                    extendedProperties: {
                        style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 16px; font-style: normal; line-height: 22px;"
                    },
                    value: y.variables.balanceVar,
                    _idProps: {
                        service: t,
                        uuid: "8"
                    },
                    _widgetRecordProvider: n
                }))]
            }), O.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; gap: 4px;"
                },
                style: "cursor-pointer",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "9"
                },
                _widgetRecordProvider: n
            }, O.createElement(ee, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "cursor-pointer",
                _idProps: {
                    service: t,
                    uuid: "10"
                },
                _widgetRecordProvider: n
            }, O.createElement(Y, {
                extendedProperties: {
                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                },
                value: y.getCachedValue(t.getId("VoMu4bGTZUutaOx3hvk7VA.Value"), function() {
                    return D.translate$Action(y.variables.configIn.display_nameAttr, o).translatedTextOut + (y.variables.isDemoVar ? Ce.resolve(Ee.TranslationsService).getMessage("VZjDR3vicEul_tDWmEpG5A#ValueExpression.-453570690.1", " (Demo)") : "")
                }, function() {
                    return y.variables.configIn.display_nameAttr
                }, function() {
                    return y.variables.isDemoVar
                }),
                _idProps: {
                    service: t,
                    uuid: "11"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: be.calculateDataFetchStatus(y.variables._configInDataFetchStatus)
            }))))))
        }, {
            topLevelComponent: !1,
            getAttributes: r(function() {
                return {
                    codeFunction: "MT5AccountCard",
                    functionKey: "bcdd42a1-f105-4490-950e-2396e23e5198",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "AccountsCommon.MT5AccountCard",
            modelFactory: Re,
            controllerFactory: Te
        });
        return g.getCssDependencies = function() {
            return ["css/uae.AccountsCommon.MT5AccountCard.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return []
        }, g
    }, "componentFactory"),
    ht = Fe();
var i = K(X());
var Ue = {
        "5vdNH5SL7UeNetFK4ScwhA#Value": "\u062F\u0639\u0645",
        "wTiui9x1Mkm958iWlJ1pOA#Value": "\u0627\u0644\u0623\u0645\u0627\u0646",
        "IZqUA1Ke70mR_Fw9zl220w#Value": "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062D\u0633\u0627\u0628",
        "9Px37H8D8EqlYSLnruZytg#Value": "\u0627\u0644\u0625\u064A\u062F\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u0633\u062D\u0648\u0628\u0627\u062A",
        "sLQGzpD3vUmnAXX8YkOhvA#Value": "MT5",
        "5Cq5oz_8HEqSCd7s1B_wmA#Value": "\u0627\u0644\u0628\u062F\u0621",
        "VtARyqy9u0CBf7IyIsJugg#Value": "\u062F\u0639\u0645",
        "TfoqtcM1PU6So6Bm8nKulg#Value": "\u0627\u0644\u0623\u0645\u0627\u0646",
        "iPNRXqpddU+pFVg5UaXlSQ#Value": "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062D\u0633\u0627\u0628",
        "8UwlwT6soEetTWEgnn22ug#Value": "\u0627\u0644\u0625\u064A\u062F\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u0633\u062D\u0648\u0628\u0627\u062A",
        "cPuSIeooc0+RHBUOpc6f_w#Value": "MT5",
        "STQfBbcVKkGdPqZDf4bKzA#Value": "\u0627\u0644\u0628\u062F\u0621",
        "Q9NshWoml0u8Uc3xlP19eg#Value": "\u062F\u0639\u0645",
        "_AYB6g_w9kO8atwC9LPfDQ#Value": "\u0627\u0644\u0623\u0645\u0627\u0646",
        "9Gd+PP7TZkWBFD0q18Deng#Value": "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062D\u0633\u0627\u0628",
        "+O3+3088wkqNSqp7alU1rw#Value": "\u0627\u0644\u0625\u064A\u062F\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u0633\u062D\u0648\u0628\u0627\u062A",
        "+ixW4h5yBki8SW5ywO3E+w#Value": "MT5",
        "ys9kTURi3UGjqqIqSP_n+w#Value": "\u0627\u0644\u0628\u062F\u0621",
        "TB0FggKzSUeixdzW9tImCQ#Value": "\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629"
    },
    Ve = {
        "ar-001": {
            translations: Ue,
            isRTL: !0
        }
    };

function fe(g, c, y, e) {
    let a = window.location.hostname === "app.deriv.ae" ? "https://deriv.ae" : "https://staging.deriv.ae",
        o = g.Lang !== "EN" ? "/ar" : "",
        d = `${a}${o}/help-centre-question/${g.type}`;
    window.open(d, "_blank", "noopener,noreferrer")
}
r(fe, "default");
var x = R; {
    let c = class c extends x.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, Ve);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickCard$Action() {
            return this.hasOwnProperty("__onClickCard$Action") || (this.__onClickCard$Action = function(e, t) {
                var a = this.model,
                    o = this.controller,
                    d = this.idService;
                return x.Logger.startActiveSpan("OnClickCard", function(u) {
                    u && (u.setAttribute("code.function", "OnClickCard"), u.setAttribute("outsystems.function.key", "49dce7dc-60ff-4341-9a3d-a1a4e53fd698"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnClickCard"), t = o.callContext(t);
                        var m = new x.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.MainFlow.HelpCenter.OnClickCard$vars")));
                        m.value.typeInLocal = e, x.Logger.startActiveSpan("JavaScript1", function(n) {
                            n && (n.setAttribute("code.function", "JavaScript1"), n.setAttribute("outsystems.function.key", "60c2cc1f-f2d8-4c6f-b4b0-14c396e67698"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(fe, "JavaScript1", "OnClickCard", {
                                    type: x.DataConversion.JSNodeParamConverter.to(m.value.typeInLocal, x.DataTypes.DataTypes.Text),
                                    Lang: x.DataConversion.JSNodeParamConverter.to(D.languageMapper$Action(t).charCodeOut, x.DataTypes.DataTypes.Text)
                                }, function(P) {}, {}, {})
                            } finally {
                                n && n.end()
                            }
                        }, 1)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onClickCard$Action
        }
        set _onClickCard$Action(e) {
            this.__onClickCard$Action = e
        }
        onClickCard$Action(e, t) {
            var a = this.controller;
            return x.Logger.startActiveSpan("OnClickCard__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnClickCard"), o.setAttribute("outsystems.function.key", "49dce7dc-60ff-4341-9a3d-a1a4e53fd698"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onClickCard$Action, t, e)
                } finally {
                    o && o.end()
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return D.defaultTimeout
        }
    };
    r(c, "ControllerInner");
    let g = c;
    pe = g, pe.registerVariableGroupType("uae.MainFlow.HelpCenter.OnClickCard$vars", [{
        name: "type",
        attrName: "typeInLocal",
        mandatory: !0,
        dataType: x.DataTypes.DataTypes.Text,
        defaultValue: r(function() {
            return ""
        }, "defaultValue")
    }])
}
var pe, We = new x.Controller.ControllerFactory(pe, L);
var U = K(X());
var ke = {};

function ye(g, c, y, e) {
    var t = document.body,
        a = {
            attributes: !0
        },
        o = r(function() {
            c.OnInitialize()
        }, "callback"),
        d = new MutationObserver(o);
    d.observe(t, a), g.ObserverObject = d
}
r(ye, "default");

function _e(g, c, y, e) {
    g.ObserverObj.disconnect()
}
r(_e, "default");
var b = R; {
    let c = class c extends b.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, ke);
            var o = this.controller;
            this.clientActionProxies = {
                onInitialize$Action: r(function() {
                    return o.executeActionInsideJSNode(o._onInitialize$Action.bind(o), o.callContext(), function(d) {
                        return {}
                    }, function() {}, "OnInitialize")
                }, "onInitialize$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    o = this.idService;
                return b.Logger.startActiveSpan("OnReady", function(d) {
                    d && (d.setAttribute("code.function", "OnReady"), d.setAttribute("outsystems.function.key", "3a59998d-3d1e-438e-aa1d-db0acfb7eac0"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnReady"), e = a.callContext(e);
                        var u = new b.DataTypes.VariableHolder;
                        u.value = b.Logger.startActiveSpan("SetMutationObserver", function(m) {
                            m && (m.setAttribute("code.function", "SetMutationObserver"), m.setAttribute("outsystems.function.key", "17fc1e21-6f89-445f-826c-66b3f0e037e1"), m.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), m.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(ye, "SetMutationObserver", "OnReady", {
                                    ObserverObject: b.DataConversion.JSNodeParamConverter.to(null, b.DataTypes.DataTypes.Object)
                                }, function(n) {
                                    var P = new(a.constructor.getVariableGroupType("OutSystemsUI.Adaptive.DisplayOnDevice.OnReady$setMutationObserverJSResult"));
                                    return P.observerObjectOut = b.DataConversion.JSNodeParamConverter.from(n.ObserverObject, b.DataTypes.DataTypes.Object), P
                                }, {
                                    OnInitialize: a.clientActionProxies.onInitialize$Action
                                }, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1), t.variables.observerObjVar = u.value.observerObjectOut
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    o = this.idService;
                return b.Logger.startActiveSpan("OnInitialize", function(d) {
                    d && (d.setAttribute("code.function", "OnInitialize"), d.setAttribute("outsystems.function.key", "aa6965a4-a4bb-450f-81b9-b30965be2c54"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnInitialize"), e = a.callContext(e);
                        var u = new b.DataTypes.VariableHolder;
                        u.value = Z.getDeviceType$Action(e), t.variables.deviceVar = u.value.deviceOut
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    o = this.idService;
                return b.Logger.startActiveSpan("OnDestroy", function(d) {
                    d && (d.setAttribute("code.function", "OnDestroy"), d.setAttribute("outsystems.function.key", "ab246169-3e95-4086-a1d3-3ba8a82eb2dc"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnDestroy"), e = a.callContext(e), b.Logger.startActiveSpan("StopObserver", function(u) {
                            u && (u.setAttribute("code.function", "StopObserver"), u.setAttribute("outsystems.function.key", "02e1979d-774c-4d7f-b036-c14402c6d16a"), u.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), u.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(_e, "StopObserver", "OnDestroy", {
                                    ObserverObj: b.DataConversion.JSNodeParamConverter.to(t.variables.observerObjVar, b.DataTypes.DataTypes.Object)
                                }, function(m) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        onReady$Action(e) {
            var t = this.controller;
            return b.Logger.startActiveSpan("OnReady__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "3a59998d-3d1e-438e-aa1d-db0acfb7eac0"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var t = this.controller;
            return b.Logger.startActiveSpan("OnInitialize__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnInitialize"), a.setAttribute("outsystems.function.key", "aa6965a4-a4bb-450f-81b9-b30965be2c54"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var t = this.controller;
            return b.Logger.startActiveSpan("OnDestroy__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnDestroy"), a.setAttribute("outsystems.function.key", "ab246169-3e95-4086-a1d3-3ba8a82eb2dc"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onDestroy$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var t = this.controller,
                    a = this.model,
                    o = this.idService;
                return t.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    a = this.model,
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var t = this.controller,
                    a = this.model,
                    o = this.idService;
                return t.onDestroy$Action(e)
            }), this._onDestroyEventHandler
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
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return Z.defaultTimeout
        }
    };
    r(c, "ControllerInner");
    let g = c;
    he = g, he.registerVariableGroupType("OutSystemsUI.Adaptive.DisplayOnDevice.OnReady$setMutationObserverJSResult", [{
        name: "ObserverObject",
        attrName: "observerObjectOut",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Object,
        defaultValue: r(function() {
            return null
        }, "defaultValue")
    }])
}
var he, Ne = new b.Controller.ControllerFactory(he, Pe);
var Xt = A.PlaceholderContent,
    Yt = A.IteratorPlaceholderContent,
    Le = r(function() {
        var g = H(function(c) {
            var y = c.model,
                e = c.controller,
                t = c.controller.idService,
                a = e.validationService,
                o = e.callContext(),
                d = k,
                u = N,
                m = {
                    props: c,
                    validateWidget: r(function(s) {
                        c.validateWidget(c, s)
                    }, "validateWidget")
                },
                n = y,
                P = W,
                _ = V,
                v = I();
            return U.createElement("div", c.rootNodeProperties, P(y.variables.deviceVar === "desktop", !1, this, function() {
                return [U.createElement(M, {
                    align: 0,
                    content: m.props.placeholders.onDesktop,
                    style: "display-on-device-desktop",
                    _idProps: {
                        service: t,
                        name: "OnDesktop"
                    },
                    _widgetRecordProvider: n
                })]
            }, function() {
                return []
            }), P(y.variables.deviceVar === "tablet", !1, this, function() {
                return [U.createElement(M, {
                    align: 0,
                    content: m.props.placeholders.onTablet,
                    style: "display-on-device-tablet",
                    _idProps: {
                        service: t,
                        name: "OnTablet"
                    },
                    _widgetRecordProvider: n
                })]
            }, function() {
                return []
            }), P(y.variables.deviceVar === "phone", !1, this, function() {
                return [U.createElement(M, {
                    align: 0,
                    content: m.props.placeholders.onPhone,
                    style: "display-on-device-phone",
                    _idProps: {
                        service: t,
                        name: "OnPhone"
                    },
                    _widgetRecordProvider: n
                })]
            }, function() {
                return []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: r(function() {
                return {
                    codeFunction: "DisplayOnDevice",
                    functionKey: "558f2ce5-0350-4196-8060-44e236bc40af",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Adaptive.DisplayOnDevice",
            modelFactory: Oe,
            controllerFactory: Ne
        });
        return g.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return []
        }, g
    }, "componentFactory"),
    Se = Le();
var h = A.PlaceholderContent,
    vn = A.IteratorPlaceholderContent,
    Me = r(function() {
        var g = H(function(c) {
            var y = c.model,
                e = c.controller,
                t = c.controller.idService,
                a = e.validationService,
                o = e.callContext(),
                d = k,
                u = N,
                m = {
                    props: c,
                    validateWidget: r(function(s) {
                        c.validateWidget(c, s)
                    }, "validateWidget")
                },
                n = y,
                P = W,
                _ = V,
                v = I();
            return i.createElement("div", c.rootNodeProperties, i.createElement(l, {
                align: 0,
                animate: !1,
                style: "padding-top-base padding-bottom-base help-center",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: n
            }, i.createElement(l, {
                align: 0,
                animate: !1,
                style: "",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: n
            }, i.createElement(S, {
                extendedProperties: {
                    style: "font-size: 20px;"
                },
                style: "heading5 font-bold",
                text: [_(u("TB0FggKzSUeixdzW9tImCQ#Value", "Help centre"))],
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: n
            })), i.createElement(l, {
                align: 0,
                animate: !1,
                style: "padding-top-base padding-bottom-base",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: n
            }, i.createElement(Se, {
                getOwnerSpan: r(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(s) {
                        e.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "4",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    onDesktop: new h(function() {
                        return [i.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "full-width help-center-section",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "5"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("how-do-i-create-a-new-account", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "6"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Gettingstarted",
                                alias: "2"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneLightbulbRegularIcon.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("ys9kTURi3UGjqqIqSP_n+w#Value", "Getting started"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("how-do-i-start-trading-on-deriv-mt5", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "12"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "MT5",
                                alias: "3"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneChartCandlestickRegularIcon.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("+ixW4h5yBki8SW5ywO3E+w#Value", "MT5"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("what-payment-methods-are-available-for-deposits", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "18"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Deposit",
                                alias: "4"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneWalletCirclePlusRegularIcon.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("+O3+3088wkqNSqp7alU1rw#Value", "Deposits and withdrawals"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("is-the-platform-available-to-non-uae-residents", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "24"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Accountmanagement",
                                alias: "5"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "26"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.soliduser.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "28"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("9Gd+PP7TZkWBFD0q18Deng#Value", "Account management"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "29"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("i-didnt-receive-my-verification-code-during-login-what-should-i-do", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "30"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Security",
                                alias: "6"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "32"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "33"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneShieldCheckRegularIcon.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "34"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("_AYB6g_w9kO8atwC9LPfDQ#Value", "Security"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "35"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("does-deriv-offer-multilingual-support", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "36"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Support",
                                alias: "7"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "38"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "39"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneCircleQuestionRegularIcon_1_.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "40"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("Q9NshWoml0u8Uc3xlP19eg#Value", "Support"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "41"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })))]
                    }),
                    onTablet: new h(function() {
                        return [i.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "full-width help-center-section",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "42"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("how-do-i-create-a-new-account", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "43"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Gettingstarted2",
                                alias: "8"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "45"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "46"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneLightbulbRegularIcon.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "47"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("STQfBbcVKkGdPqZDf4bKzA#Value", "Getting started"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "48"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("how-do-i-start-trading-on-deriv-mt5", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "49"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "MT6",
                                alias: "9"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "51"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "52"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneChartCandlestickRegularIcon.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "53"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("cPuSIeooc0+RHBUOpc6f_w#Value", "MT5"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "54"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("what-payment-methods-are-available-for-deposits", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "55"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Deposit2",
                                alias: "10"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "57"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "58"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneWalletCirclePlusRegularIcon.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "59"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("8UwlwT6soEetTWEgnn22ug#Value", "Deposits and withdrawals"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "60"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("is-the-platform-available-to-non-uae-residents", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "61"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Accountmanagement2",
                                alias: "11"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "63"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "64"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.soliduser.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "65"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("iPNRXqpddU+pFVg5UaXlSQ#Value", "Account management"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "66"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("i-didnt-receive-my-verification-code-during-login-what-should-i-do", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "67"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Security2",
                                alias: "12"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "69"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "70"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneShieldCheckRegularIcon.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "71"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("TfoqtcM1PU6So6Bm8nKulg#Value", "Security"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "72"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("does-deriv-offer-multilingual-support", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "73"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Support2",
                                alias: "13"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "75"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "76"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneCircleQuestionRegularIcon_1_.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "77"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("VtARyqy9u0CBf7IyIsJugg#Value", "Support"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "78"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })))]
                    }),
                    onPhone: new h(function() {
                        return [i.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "full-width help-center-section-mobile",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "79"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("how-do-i-create-a-new-account", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "80"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Gettingstarted3",
                                alias: "14"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "82"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "83"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneLightbulbRegularIcon.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "84"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("5Cq5oz_8HEqSCd7s1B_wmA#Value", "Getting started"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "85"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("how-do-i-start-trading-on-deriv-mt5", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "86"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "MT7",
                                alias: "15"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "88"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "89"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneChartCandlestickRegularIcon.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "90"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("sLQGzpD3vUmnAXX8YkOhvA#Value", "MT5"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "91"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("what-payment-methods-are-available-for-deposits", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "92"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Deposit3",
                                alias: "16"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "94"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "95"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneWalletCirclePlusRegularIcon.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "96"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("9Px37H8D8EqlYSLnruZytg#Value", "Deposits and withdrawals"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "97"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("is-the-platform-available-to-non-uae-residents", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "98"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Accountmanagement3",
                                alias: "17"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "100"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "101"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.soliduser.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "102"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("IZqUA1Ke70mR_Fw9zl220w#Value", "Account management"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "103"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("i-didnt-receive-my-verification-code-during-login-what-should-i-do", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "104"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Security3",
                                alias: "18"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "106"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "107"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneShieldCheckRegularIcon.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "108"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("wTiui9x1Mkm958iWlJ1pOA#Value", "Security"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "109"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })), i.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: r(function() {
                                    var s = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.onClickCard$Action("does-deriv-offer-multilingual-support", e.callContext(s))
                                }, "onClick")
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "110"
                            },
                            _widgetRecordProvider: n
                        }, i.createElement(C, {
                            getOwnerSpan: r(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "helper-card-layout"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: t,
                                name: "Support3",
                                alias: "19"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new h(function() {
                                    return [i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-height align-items-center column-gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "112"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "113"
                                        },
                                        _widgetRecordProvider: n
                                    }, i.createElement(p, {
                                        image: E.VersionedURL.getVersionedUrl("img/uae.StandaloneCircleQuestionRegularIcon_1_.svg"),
                                        style: "display-flex flex-direction-column ",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "114"
                                        },
                                        _widgetRecordProvider: n
                                    })), i.createElement(S, {
                                        style: "font-size-base",
                                        text: [_(u("5vdNH5SL7UeNetFK4ScwhA#Value", "Support"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "115"
                                        },
                                        _widgetRecordProvider: n
                                    }))]
                                })
                            },
                            _dependencies: []
                        })))]
                    })
                },
                _dependencies: []
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: r(function() {
                return {
                    codeFunction: "HelpCenter",
                    functionKey: "c54728f1-69f6-4caa-8e76-dec4795317d8",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "MainFlow.HelpCenter",
            modelFactory: xe,
            controllerFactory: We
        });
        return g.getCssDependencies = function() {
            return ["css/uae.MainFlow.HelpCenter.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [Se, C]
        }, g
    }, "componentFactory"),
    gn = Me();
export {
    ht as a, gn as b
};