import {
    a as V
} from "./_oschunk-RTFWHKPU.js";
import {
    a as M
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as A
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as R,
    f as l,
    h,
    n as D,
    u as H
} from "./_oschunk-VR5BNL2K.js";
import {
    a as re,
    g as x,
    m as $,
    n as G,
    q as K,
    r as Q,
    s as b,
    t as T
} from "./_oschunk-4VHUVDBV.js";
import {
    a as B
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as j,
    Sb as C,
    a as O
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as _,
    c as a,
    e as te,
    m as g,
    n as p,
    p as w
} from "./_oschunk-M5BUVJ72.js";
var ne = {
        "kvyad1GTtUq6mXTD09cd+g#Value": "\u062A\u0645",
        "lzY5VwrCTUeJefy5Q_qazA#ValueExpression.1903406212.1": "\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0622\u0646 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u062D\u0633\u0627\u0628\u0627\u062A MT5 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629.",
        "7K6RpvcDt0mpEhfxjnDlmA#ValueExpression.1469471943.1": "\u062A\u0645 \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643",
        "Pv4LLjhlt0i6_bEZ3un73g#Value": "\u062A\u0645",
        "BX6zAQ7fg0Kipuu2GXXnaQ#ValueExpression.1903406212.1": "\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0622\u0646 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u062D\u0633\u0627\u0628\u0627\u062A MT5 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629.",
        "PG0QLEWS6EehMmUfcHciHw#ValueExpression.1469471943.1": "\u062A\u0645 \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643",
        "gukcU6+UaUuJG9dKb1PPUw#Title": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5 | Deriv",
        "gukcU6+UaUuJG9dKb1PPUw#TitleExpression.-1648935080.1": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 MT5 | Deriv"
    },
    X = {
        "ar-001": {
            translations: ne,
            isRTL: !0
        }
    };
var o = _; {
    let i = class i extends o.Controller.BaseViewController {
        constructor(e, t, s) {
            super(e, t, s, X);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _doneOnClick$Action() {
            return this.hasOwnProperty("__doneOnClick$Action") || (this.__doneOnClick$Action = function(e) {
                var t = this.model,
                    s = this.controller,
                    d = this.idService;
                return o.Logger.startActiveSpan("DoneOnClick", function(c) {
                    c && (c.setAttribute("code.function", "DoneOnClick"), c.setAttribute("outsystems.function.key", "cfc54e92-dc8a-4520-bfb3-d5aede17acd1"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("DoneOnClick"), e = s.callContext(e);
                        var f = new o.DataTypes.VariableHolder;
                        return f.value = C.getAccountActivationInputs$Action(e), t.variables.fromIn === "mt5_enter_password" ? o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "mt5/password", {
                            is_demo: o.DataConversion.ServerDataConverter.to(f.value.accountActivationInputsOut.is_demoAttr, o.DataTypes.DataTypes.Boolean),
                            mt5_type: o.DataConversion.ServerDataConverter.to(f.value.accountActivationInputsOut.account_typeAttr === "swap-free" ? O.mT5Types.swapFree : O.mT5Types.standard, o.DataTypes.DataTypes.Integer)
                        }), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0) : o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "mt5/account-details", {
                            is_demo: o.DataConversion.ServerDataConverter.to(f.value.accountActivationInputsOut.is_demoAttr, o.DataTypes.DataTypes.Boolean)
                        }), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__doneOnClick$Action
        }
        set _doneOnClick$Action(e) {
            this.__doneOnClick$Action = e
        }
        doneOnClick$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("DoneOnClick__proxy", function(s) {
                s && (s.setAttribute("code.function", "DoneOnClick"), s.setAttribute("outsystems.function.key", "cfc54e92-dc8a-4520-bfb3-d5aede17acd1"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._doneOnClick$Action, e)
                } finally {
                    s && s.end()
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
                return V.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return C.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let m = i;
    J = m
}
var J, W = new o.Controller.ControllerFactory(J, B);
var n = te(re());
var v = _,
    L = class L extends v.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("from", "fromIn", "from", !0, !1, v.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_fromInDataFetchStatus", "_fromInDataFetchStatus", "_fromInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(v.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(L, "VariablesRecord");
var E = L;
E.init();
var U = class U extends v.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(U, "WidgetsRecord");
var k = U,
    y = class y extends v.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return k
        }
        static get hasValidationWidgets() {
            return y._hasValidationWidgetsValue === void 0 && (y._hasValidationWidgetsValue = void 0 || void 0), y._hasValidationWidgetsValue
        }
        setInputs(i) {
            "from" in i && (this.variables.fromIn = v.DataConversion.ServerDataConverter.from(i.from, v.DataTypes.DataTypes.Text))
        }
    };
a(y, "Model");
var P = y;
P._hasValidationWidgetsValue = void 0;
var I = new v.Model.ModelFactory(P);
var F = x.PlaceholderContent,
    ke = x.IteratorPlaceholderContent,
    ie = a(function() {
        var m = G(function(i) {
            var N = i.model,
                e = i.controller,
                t = i.controller.idService,
                s = e.validationService,
                d = e.callContext(),
                c = b,
                f = T,
                Z = {
                    props: i,
                    validateWidget: a(function(u) {
                        i.validateWidget(i, u)
                    }, "validateWidget")
                },
                r = N,
                ee = Q,
                z = K,
                S = $();
            return n.createElement("div", i.rootNodeProperties, ee(j.isDesktop$Action(d).isDesktopOut, !1, this, function() {
                return [n.createElement(A, {
                    getOwnerSpan: a(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowInfoButton: !1,
                        ShowBackbutton: !1,
                        ShowClosebutton: !1
                    },
                    events: {
                        _handleError: a(function(u) {
                            e.handleError(u)
                        }, "_handleError")
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
                        contentbody: new F(function() {
                            return [n.createElement(l, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; flex-direction: column; justify-content: center; margin-bottom: 40px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(l, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "justify-content: center;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(l, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; justify-content: center; margin-bottom: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(D, {
                                image: w.VersionedURL.getVersionedUrl("img/uae.ic_success_tick.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: r
                            })), n.createElement(l, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 8px; text-align: center;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(h, {
                                extendedProperties: {
                                    style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                value: g.resolve(p.TranslationsService).getMessage("PG0QLEWS6EehMmUfcHciHw#ValueExpression.1469471943.1", "Your MT5 password has been reset"),
                                _idProps: {
                                    service: t,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: r
                            }), n.createElement(h, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: center;"
                                },
                                value: g.resolve(p.TranslationsService).getMessage("BX6zAQ7fg0Kipuu2GXXnaQ#ValueExpression.1903406212.1", "You can now log in to your MT5 accounts with your new password."),
                                _idProps: {
                                    service: t,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: r
                            })))), n.createElement(l, {
                                align: 0,
                                animate: !1,
                                style: "bottom-0 left-0 w-full flex justify-center",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(R, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "margin-bottom: 10px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                isDefault: !1,
                                onClick: a(function() {
                                    var u = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                    e.doneOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "btn btn-primary action-button",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Done2"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(H, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-style: normal; font-weight: 600; line-height: 24px;"
                                },
                                text: [z(f("Pv4LLjhlt0i6_bEZ3un73g#Value", "Done"))],
                                _idProps: {
                                    service: t,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: r
                            })))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [n.createElement(M, {
                    getOwnerSpan: a(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !1
                    },
                    events: {
                        _handleError: a(function(u) {
                            e.handleError(u)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: s
                    },
                    _idProps: {
                        service: t,
                        uuid: "11",
                        alias: "2"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        content: new F(function() {
                            return [n.createElement(l, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(l, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "ThemeGrid_Width8"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(l, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; justify-content: center; margin-bottom: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(D, {
                                image: w.VersionedURL.getVersionedUrl("img/uae.ic_success_tick.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: r
                            })), n.createElement(l, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 8px; text-align: center;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(h, {
                                extendedProperties: {
                                    style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                value: g.resolve(p.TranslationsService).getMessage("7K6RpvcDt0mpEhfxjnDlmA#ValueExpression.1469471943.1", "Your MT5 password has been reset"),
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: r
                            }), n.createElement(h, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: center;"
                                },
                                value: g.resolve(p.TranslationsService).getMessage("lzY5VwrCTUeJefy5Q_qazA#ValueExpression.1903406212.1", "You can now log in to your MT5 accounts with your new password."),
                                _idProps: {
                                    service: t,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: r
                            }))))]
                        }),
                        footer: new F(function() {
                            return [n.createElement(l, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: white; padding: 16px;"
                                },
                                style: "fixed bottom-0 left-0 w-full flex justify-center",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ActionButton"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(l, {
                                align: 0,
                                animate: !1,
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(R, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border: none; border-radius: 96px;"
                                },
                                isDefault: !1,
                                onClick: a(function() {
                                    var u = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                    e.doneOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "btn btn-primary action-button",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: r
                            }, n.createElement(H, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [z(f("kvyad1GTtUq6mXTD09cd+g#Value", "Done"))],
                                _idProps: {
                                    service: t,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: r
                            }))))]
                        })
                    },
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: a(function() {
                return {
                    codeFunction: "MT5PasswordResetSuccess",
                    functionKey: "531ce982-94af-4b69-891b-d74a6f53cf53",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "MT5Flow.MT5PasswordResetSuccess",
            modelFactory: I,
            controllerFactory: W,
            getTitle: a(function(i) {
                var N = i.model,
                    e = i.controller,
                    t = i.controller.idService,
                    s = e.validationService,
                    d = e.callContext(),
                    c = b,
                    f = T,
                    Z = {
                        props: i,
                        validateWidget: a(function(r) {
                            i.validateWidget(i, r)
                        }, "validateWidget")
                    };
                return g.resolve(p.TranslationsService).getMessage("gukcU6+UaUuJG9dKb1PPUw#TitleExpression.-1648935080.1", "MT5 reset password | Deriv")
            }, "getTitle")
        });
        return m.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.MT5Flow.MT5PasswordResetSuccess.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [A, M]
        }, m
    }, "componentFactory"),
    ae = ie();
export {
    W as controllerModule, I as modelModule, ae as viewModule, V as webFlowControllerModule
};