import {
    a as H
} from "./_oschunk-X7XKSCB7.js";
import {
    a as I
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as g,
    h as J,
    i as Y,
    j as ee,
    k as te,
    n as L,
    u as W
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ae,
    g as x,
    m as Q,
    n as X,
    q as Z,
    r as q,
    s as V,
    t as D
} from "./_oschunk-4VHUVDBV.js";
import {
    a as K
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Ca as w,
    Sb as T,
    r as R
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as p,
    c,
    e as ie,
    m as z,
    n as B,
    p as j,
    w as b
} from "./_oschunk-M5BUVJ72.js";
var oe = {
        "eI7t1CMu0U68lXczr6aheg#Value": "\u0625\u062C\u0631\u0627\u0621",
        "35GzME05bEmjf3+jOFvgZg#Value": "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u062D\u0641\u0638\u0629 \u0627\u0644\u062A\u064A \u062A\u0631\u064A\u062F \u0627\u0644\u0625\u064A\u062F\u0627\u0639 \u0628\u0647\u0627.",
        "9tCuFHNd1UiC9TksyuH0RA#Value": "\u0627\u062E\u062A\u0631 \u0645\u062D\u0641\u0638\u062A\u0643",
        "79hI5O6iSUO5iVVmopWnkQ#Title": "\u0625\u064A\u062F\u0627\u0639 \u0627\u0644\u0645\u062D\u0641\u0638\u0629 | Deriv",
        "79hI5O6iSUO5iVVmopWnkQ#TitleExpression.1173522097.1": "\u0625\u064A\u062F\u0627\u0639 \u0627\u0644\u0645\u062D\u0641\u0638\u0629 | Deriv"
    },
    re = {
        "ar-001": {
            translations: oe,
            isRTL: !0
        }
    };
var n = p; {
    let l = class l extends n.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, re);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getWalletList$ServerAction() {
            return this.hasOwnProperty("_getWalletList$ServerAction") || (this._getWalletList$ServerAction = function(e, t) {
                var r = this.controller;
                return n.Logger.startActiveSpan("GetWalletList", function(i) {
                    return i && (i.setAttribute("code.function", "GetWalletList"), i.setAttribute("outsystems.function.key", "457611d5-9b1a-4faf-a88a-d21184a30f68"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var a = {
                            authorization: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Text)
                        };
                        return r.callServerAction("GetWalletList", "screenservices/uae/DepositFlow/DepositWallet/ActionGetWalletList", "mBL53KMNBzvxE1nMqxclWg", a, r.callContext(t), void 0, void 0, !0).then(function(u) {
                            var y = new(r.constructor.getVariableGroupType("uae.DepositFlow.DepositWallet$ActionGetWalletList"));
                            return y.responseOut = n.DataConversion.ServerDataConverter.from(u.Response, w), y
                        })
                    }, function() {
                        i && i.end()
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
        get _actionOnClick$Action() {
            return this.hasOwnProperty("__actionOnClick$Action") || (this.__actionOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("ActionOnClick", function(a) {
                    a && (a.setAttribute("code.function", "ActionOnClick"), a.setAttribute("outsystems.function.key", "46e59084-e3fd-4b02-aa39-a338f1db8fc2"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("ActionOnClick"), e = r.callContext(e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__actionOnClick$Action
        }
        set _actionOnClick$Action(e) {
            this.__actionOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "79e65b2b-769a-475c-a8ac-a8a6ea056ed4"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var u = new n.DataTypes.VariableHolder,
                            y = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return y.value = T.getAuth$Action(e), t.variables.is_loadingVar = !0, t.flush(), r.getWalletList$ServerAction(y.value.tokenOut, e).then(function(o) {
                                u.value = o
                            }).then(function() {
                                t.variables.wallet_listVar = u.value.responseOut.dataAttr.walletsAttr, t.variables.is_loadingVar = !1
                            }).then(function() {
                                if (t.variables.wallet_listVar.length === 1) return n.Flow.returnAsync(n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "deposit", {
                                    wallet_id: n.DataConversion.ServerDataConverter.to(n.BuiltinFunctions.longIntegerToText(t.variables.wallet_listVar.getItem(0).idAttr), n.DataTypes.DataTypes.Text)
                                }), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onSelectCurrency$Action() {
            return this.hasOwnProperty("__onSelectCurrency$Action") || (this.__onSelectCurrency$Action = function(e, t) {
                var r = this.model,
                    i = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnSelectCurrency", function(u) {
                    u && (u.setAttribute("code.function", "OnSelectCurrency"), u.setAttribute("outsystems.function.key", "d174479d-c14d-408a-8be9-b2a04399aec4"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnSelectCurrency"), t = i.callContext(t);
                        var y = new n.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.DepositFlow.DepositWallet.OnSelectCurrency$vars")));
                        return y.value.wallet_idInLocal = e, n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "deposit", {
                            wallet_id: n.DataConversion.ServerDataConverter.to(n.BuiltinFunctions.longIntegerToText(y.value.wallet_idInLocal), n.DataTypes.DataTypes.Text)
                        }), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onSelectCurrency$Action
        }
        set _onSelectCurrency$Action(e) {
            this.__onSelectCurrency$Action = e
        }
        actionOnClick$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("ActionOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "ActionOnClick"), r.setAttribute("outsystems.function.key", "46e59084-e3fd-4b02-aa39-a338f1db8fc2"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._actionOnClick$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "79e65b2b-769a-475c-a8ac-a8a6ea056ed4"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onSelectCurrency$Action(e, t) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnSelectCurrency__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnSelectCurrency"), i.setAttribute("outsystems.function.key", "d174479d-c14d-408a-8be9-b2a04399aec4"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onSelectCurrency$Action, t, e)
                } finally {
                    i && i.end()
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
                    r = this.model,
                    i = this.idService;
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
                return H.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    c(l, "ControllerInner");
    let h = l;
    C = h, C.registerVariableGroupType("uae.DepositFlow.DepositWallet$ActionGetWalletList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: c(function() {
            return new w
        }, "defaultValue"),
        complexType: w
    }]), C.registerVariableGroupType("uae.DepositFlow.DepositWallet.OnSelectCurrency$vars", [{
        name: "wallet_id",
        attrName: "wallet_idInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.LongInteger,
        defaultValue: c(function() {
            return n.DataTypes.LongInteger.defaultValue
        }, "defaultValue")
    }])
}
var C, F = new n.Controller.ControllerFactory(C, K);
var s = ie(ae());
var m = p,
    $ = class $ extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("wallet_list", "wallet_listVar", "wallet_list", !0, !1, m.DataTypes.DataTypes.RecordList, function() {
                return m.DataTypes.ImmutableBase.getData(new(m.GenericTypeCache.getGenericList(R)))
            }, !1, m.GenericTypeCache.getGenericList(R))].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c($, "VariablesRecord");
var A = $;
A.init();
var M = class M extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(M, "WidgetsRecord");
var k = M,
    _ = class _ extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return A
        }
        static getWidgetsRecordConstructor() {
            return k
        }
        static get hasValidationWidgets() {
            return _._hasValidationWidgetsValue === void 0 && (_._hasValidationWidgetsValue = void 0), _._hasValidationWidgetsValue
        }
        setInputs(l) {}
    };
c(_, "Model");
var E = _;
E._hasValidationWidgetsValue = void 0;
var N = new m.Model.ModelFactory(E);
var S = x.PlaceholderContent,
    le = x.IteratorPlaceholderContent,
    ce = c(function() {
        var h = X(function(l) {
            var d = l.model,
                e = l.controller,
                t = l.controller.idService,
                r = e.validationService,
                i = e.callContext(),
                a = V,
                u = D,
                y = {
                    props: l,
                    validateWidget: c(function(f) {
                        l.validateWidget(l, f)
                    }, "validateWidget")
                },
                o = d,
                G = q,
                O = Z,
                U = Q();
            return s.createElement("div", l.rootNodeProperties, s.createElement(I, {
                getOwnerSpan: c(function() {
                    return U.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return U.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_back_button: !0
                },
                events: {
                    _handleError: c(function(f) {
                        e.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    content: new S(function() {
                        return [s.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 8px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "1"
                            },
                            _widgetRecordProvider: o
                        }, s.createElement(W, {
                            extendedProperties: {
                                style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                            },
                            text: [O(u("9tCuFHNd1UiC9TksyuH0RA#Value", "Choose your wallet"))],
                            _idProps: {
                                service: t,
                                uuid: "2"
                            },
                            _widgetRecordProvider: o
                        }), s.createElement(W, {
                            extendedProperties: {
                                style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                            },
                            text: [O(u("35GzME05bEmjf3+jOFvgZg#Value", "Please choose the wallet you want to make a deposit with."))],
                            _idProps: {
                                service: t,
                                uuid: "3"
                            },
                            _widgetRecordProvider: o
                        })), s.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 8px; margin-top: 40px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "4"
                            },
                            _widgetRecordProvider: o
                        }, G(d.variables.is_loadingVar, !1, this, function() {
                            return [s.createElement(g, {
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
                                    service: t,
                                    name: "LoaderContainer"
                                },
                                _widgetRecordProvider: o
                            }, s.createElement(g, {
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
                                _widgetRecordProvider: o
                            }), s.createElement(g, {
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
                                _widgetRecordProvider: o
                            }), s.createElement(g, {
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
                                _widgetRecordProvider: o
                            }))]
                        }, function() {
                            return [s.createElement(Y, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: d.variables.wallet_listVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: t,
                                    name: "CurrencyListContainer"
                                },
                                _widgetRecordProvider: o,
                                placeholders: {
                                    content: new le(function(f, v) {
                                        return [s.createElement(ee, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: c(function() {
                                                var P = typeof v != "undefined" && v !== null ? v.clone() : e.callContext().clone();
                                                e.onSelectCurrency$Action(d.variables.wallet_listVar.getCurrent(v.iterationContext).idAttr, e.callContext(P))
                                            }, "onClick"),
                                            style: d.getCachedValue(f.getId("ListItem1.Style"), function() {
                                                return d.variables.wallet_listVar.getCurrent(v.iterationContext).currencyAttr === "" ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return d.variables.wallet_listVar.getCurrent(v.iterationContext).currencyAttr
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: f,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: o,
                                            placeholders: {
                                                leftActions: S.Empty,
                                                content: new S(function() {
                                                    return [s.createElement(g, {
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
                                                            service: f,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: o
                                                    }, s.createElement(g, {
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
                                                            service: f,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: o
                                                    }, s.createElement(L, {
                                                        extendedProperties: {
                                                            style: "height: fit-content;"
                                                        },
                                                        gridProperties: {
                                                            width: "fit-content"
                                                        },
                                                        type: 1,
                                                        url: d.getCachedValue(f.getId("I5fUpnu+pkyEKt6QYSi3_w.Url"), function() {
                                                            return "/" + b.getAppName() + "/img/" + b.getAppName() + ".currency" + b.toLower(d.variables.wallet_listVar.getCurrent(v.iterationContext).currencyAttr) + ".svg"
                                                        }, function() {
                                                            return d.variables.wallet_listVar.getCurrent(v.iterationContext).currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: f,
                                                            uuid: "13"
                                                        },
                                                        _widgetRecordProvider: o
                                                    })), s.createElement(J, {
                                                        gridProperties: {
                                                            classes: "ThemeGrid_MarginGutter"
                                                        },
                                                        value: d.variables.wallet_listVar.getCurrent(v.iterationContext).currencyAttr + " wallet",
                                                        _idProps: {
                                                            service: f,
                                                            uuid: "14"
                                                        },
                                                        _widgetRecordProvider: o
                                                    }), s.createElement(g, {
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
                                                            service: f,
                                                            uuid: "15"
                                                        },
                                                        _widgetRecordProvider: o
                                                    }, G(d.variables.wallet_listVar.getCurrent(v.iterationContext).currencyAttr === "", !1, this, function() {
                                                        return [s.createElement(L, {
                                                            image: j.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: f,
                                                                uuid: "16"
                                                            },
                                                            _widgetRecordProvider: o
                                                        })]
                                                    }, function() {
                                                        return []
                                                    })))]
                                                }),
                                                rightActions: new S(function() {
                                                    return [s.createElement(te, {
                                                        onClick: c(function() {
                                                            var P = typeof v != "undefined" && v !== null ? v.clone() : e.callContext().clone();
                                                            e.actionOnClick$Action(e.callContext(P))
                                                        }, "onClick"),
                                                        style: "list-item-action list-item-action-primary",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: f,
                                                            uuid: "17"
                                                        },
                                                        _widgetRecordProvider: o
                                                    }, O(u("eI7t1CMu0U68lXczr6aheg#Value", "Action")))]
                                                })
                                            },
                                            _dependencies: [a(d.variables.wallet_listVar.getCurrent(v.iterationContext).currencyAttr)]
                                        })]
                                    }, i, t, "1")
                                },
                                _dependencies: []
                            })]
                        }))]
                    }),
                    footer: S.Empty
                },
                _dependencies: [a(d.variables.wallet_listVar), a(d.variables.is_loadingVar)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: c(function() {
                return {
                    codeFunction: "DepositWallet",
                    functionKey: "e448d8ef-a2ee-4349-b989-5566a295a791",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "DepositFlow.DepositWallet",
            modelFactory: N,
            controllerFactory: F,
            getTitle: c(function(l) {
                var d = l.model,
                    e = l.controller,
                    t = l.controller.idService,
                    r = e.validationService,
                    i = e.callContext(),
                    a = V,
                    u = D,
                    y = {
                        props: l,
                        validateWidget: c(function(o) {
                            l.validateWidget(l, o)
                        }, "validateWidget")
                    };
                return z.resolve(B.TranslationsService).getMessage("79hI5O6iSUO5iVVmopWnkQ#TitleExpression.1173522097.1", "Wallet deposit | Deriv")
            }, "getTitle")
        });
        return h.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.DepositFlow.DepositWallet.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, h.getJsDependencies = function() {
            return []
        }, h.getBlocks = function() {
            return [I]
        }, h
    }, "componentFactory"),
    ue = ce();
export {
    F as controllerModule, N as modelModule, ue as viewModule, H as webFlowControllerModule
};