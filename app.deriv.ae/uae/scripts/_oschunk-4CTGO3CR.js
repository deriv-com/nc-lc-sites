import {
    a as k
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as R
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as W
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as p,
    f as c,
    n as w,
    p as A,
    u as f
} from "./_oschunk-VR5BNL2K.js";
import {
    a as te,
    g as P,
    m as B,
    n as j,
    q as Y,
    r as G,
    s as S,
    t as x
} from "./_oschunk-4VHUVDBV.js";
import {
    a as z
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as F,
    Sb as U
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as _,
    c as a,
    e as ee,
    m as I,
    n as $,
    p as O
} from "./_oschunk-M5BUVJ72.js";
var re = {
        "0VDtikxAaEiOdRffeEipxw#Value": "\u0631\u0628\u0645\u0627 \u0644\u0627\u062D\u0642\u064B\u0627",
        "lWmi1v1EnUaRQn8MUyMyoA#Value": "\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0640 Wallets",
        "txOoZubxC0yz_VTH7Y0OFg#Value": "\u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0631\u0635\u064A\u062F \u0643\u0627\u0641\u064D \u0641\u064A \u0627\u0644\u0640 Wallet \u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0623\u0645\u0648\u0627\u0644 \u0625\u0644\u0649 \u062D\u0633\u0627\u0628 MT5 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643.",
        "nJamWfUngUK6dsmEuFfZ_A#Value": "\u0642\u0645 \u0628\u0627\u0644\u0625\u064A\u062F\u0627\u0639 \u0623\u0648\u0644\u064B\u0627",
        "_tV7jAprAkSSwY3Lo_c8WQ#Value": "\u0631\u0628\u0645\u0627 \u0644\u0627\u062D\u0642\u064B\u0627",
        "JRrOvLI3zEC9ttNoAHAWuQ#Value": "\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0640 Wallets",
        "hXtP+jHCokuyKruvxvihKg#Value": "\u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0631\u0635\u064A\u062F \u0643\u0627\u0641\u064D \u0641\u064A \u0627\u0644\u0640 Wallet \u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0623\u0645\u0648\u0627\u0644 \u0625\u0644\u0649 \u062D\u0633\u0627\u0628 MT5 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643.",
        "dmNiZCdE1kCmXjeY3XpBCw#Value": "\u0642\u0645 \u0628\u0627\u0644\u0625\u064A\u062F\u0627\u0639 \u0623\u0648\u0644\u064B\u0627",
        "M5dLEIqqJUqPI7j3YBQCUg#Title": "\u0642\u0645 \u0628\u0627\u0644\u0625\u064A\u062F\u0627\u0639 | Deriv",
        "M5dLEIqqJUqPI7j3YBQCUg#TitleExpression.-2055123609.1": "\u0642\u0645 \u0628\u0627\u0644\u0625\u064A\u062F\u0627\u0639 | Deriv"
    },
    q = {
        "ar-001": {
            translations: re,
            isRTL: !0
        }
    };
var l = _; {
    let d = class d extends l.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, q);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _layoutOnboardingcloseEvent$Action() {
            return this.hasOwnProperty("__layoutOnboardingcloseEvent$Action") || (this.__layoutOnboardingcloseEvent$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return l.Logger.startActiveSpan("LayoutOnboardingcloseEvent", function(o) {
                    o && (o.setAttribute("code.function", "LayoutOnboardingcloseEvent"), o.setAttribute("outsystems.function.key", "1d30d55e-ba2e-4b3d-bdb9-2f29889f6ed9"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("LayoutOnboardingcloseEvent"), e = r.callContext(e), l.Navigation.navigateTo(l.Navigation.generateScreenURL("uae", "home", {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__layoutOnboardingcloseEvent$Action
        }
        set _layoutOnboardingcloseEvent$Action(e) {
            this.__layoutOnboardingcloseEvent$Action = e
        }
        get _maybeLaterOnClick$Action() {
            return this.hasOwnProperty("__maybeLaterOnClick$Action") || (this.__maybeLaterOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return l.Logger.startActiveSpan("MaybeLaterOnClick", function(o) {
                    o && (o.setAttribute("code.function", "MaybeLaterOnClick"), o.setAttribute("outsystems.function.key", "357a9d60-c5c3-4d06-805e-321e9fecaa81"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("MaybeLaterOnClick"), e = r.callContext(e), l.Navigation.navigateTo(l.Navigation.generateScreenURL("uae", "home", {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__maybeLaterOnClick$Action
        }
        set _maybeLaterOnClick$Action(e) {
            this.__maybeLaterOnClick$Action = e
        }
        get _gotoWalletsOnClick$Action() {
            return this.hasOwnProperty("__gotoWalletsOnClick$Action") || (this.__gotoWalletsOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return l.Logger.startActiveSpan("GotoWalletsOnClick", function(o) {
                    o && (o.setAttribute("code.function", "GotoWalletsOnClick"), o.setAttribute("outsystems.function.key", "a7715936-9b5f-4e9d-ba02-475b505e8281"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("GotoWalletsOnClick"), e = r.callContext(e), l.Navigation.navigateTo(l.Navigation.generateScreenURL("uae", "wallet", {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__gotoWalletsOnClick$Action
        }
        set _gotoWalletsOnClick$Action(e) {
            this.__gotoWalletsOnClick$Action = e
        }
        layoutOnboardingcloseEvent$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("LayoutOnboardingcloseEvent__proxy", function(r) {
                r && (r.setAttribute("code.function", "LayoutOnboardingcloseEvent"), r.setAttribute("outsystems.function.key", "1d30d55e-ba2e-4b3d-bdb9-2f29889f6ed9"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._layoutOnboardingcloseEvent$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        maybeLaterOnClick$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("MaybeLaterOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "MaybeLaterOnClick"), r.setAttribute("outsystems.function.key", "357a9d60-c5c3-4d06-805e-321e9fecaa81"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._maybeLaterOnClick$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        gotoWalletsOnClick$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("GotoWalletsOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "GotoWalletsOnClick"), r.setAttribute("outsystems.function.key", "a7715936-9b5f-4e9d-ba02-475b505e8281"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._gotoWalletsOnClick$Action, e)
                } finally {
                    r && r.end()
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
                return k.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return U.defaultTimeout
        }
    };
    a(d, "ControllerInner");
    let g = d;
    Q = g
}
var Q, L = new l.Controller.ControllerFactory(Q, z);
var i = ee(te());
var b = _,
    V = class V extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(V, "VariablesRecord");
var E = V;
E.init();
var M = class M extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(M, "WidgetsRecord");
var T = M,
    y = class y extends b.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return y._hasValidationWidgetsValue === void 0 && (y._hasValidationWidgetsValue = void 0 || void 0), y._hasValidationWidgetsValue
        }
        setInputs(d) {}
    };
a(y, "Model");
var C = y;
C._hasValidationWidgetsValue = void 0;
var H = new b.Model.ModelFactory(C);
var N = P.PlaceholderContent,
    He = P.IteratorPlaceholderContent,
    ne = a(function() {
        var g = j(function(d) {
            var D = d.model,
                e = d.controller,
                t = d.controller.idService,
                r = e.validationService,
                s = e.callContext(),
                o = S,
                v = x,
                X = {
                    props: d,
                    validateWidget: a(function(u) {
                        d.validateWidget(d, u)
                    }, "validateWidget")
                },
                n = D,
                Z = G,
                m = Y,
                h = B();
            return i.createElement("div", d.rootNodeProperties, Z(F.isDesktop$Action(s).isDesktopOut, !1, this, function() {
                return [i.createElement(W, {
                    getOwnerSpan: a(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !1,
                        ShowBackbutton: !1
                    },
                    events: {
                        _handleError: a(function(u) {
                            e.handleError(u)
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
                    _widgetRecordProvider: n,
                    placeholders: {
                        contentbody: new N(function() {
                            return [i.createElement(c, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col justify-content-center align-content-flex-start",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(c, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SuccessImage"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(w, {
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                image: O.VersionedURL.getVersionedUrl("img/uae.walletDeposit.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: n
                            })), i.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "text-align: start;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(A, {
                                extendedProperties: {
                                    style: "color: #00080A; font-size: 24px; font-weight: 900;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "margin-inline-start: 0px;"
                                },
                                text: [m(v("dmNiZCdE1kCmXjeY3XpBCw#Value", "Make a deposit first"))],
                                _idProps: {
                                    service: t,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: n
                            }))), i.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "text-align: start;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                text: [m(v("hXtP+jHCokuyKruvxvihKg#Value", "You need a sufficient Wallet balance to transfer funds to your MT5 account."))],
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: n
                            })), i.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 24px 0px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: white; padding: 4px 0px;"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ActionButton"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(p, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: a(function() {
                                    var u = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.gotoWalletsOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "btn btn-primary action-button w-full",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [m(v("JRrOvLI3zEC9ttNoAHAWuQ#Value", "Go to Wallets"))],
                                _idProps: {
                                    service: t,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: n
                            }))), i.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: white; padding: 4px 0px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ActionButton2"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(p, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "height: 48px; margin-inline-start: 0;"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                isDefault: !1,
                                onClick: a(function() {
                                    var u = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.maybeLaterOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "secondary-button",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [m(v("_tV7jAprAkSSwY3Lo_c8WQ#Value", "Maybe later"))],
                                _idProps: {
                                    service: t,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: n
                            })))))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [i.createElement(R, {
                    getOwnerSpan: a(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_close_icon: !1
                    },
                    events: {
                        _handleError: a(function(u) {
                            e.handleError(u)
                        }, "_handleError"),
                        closeEvent$Action: a(function() {
                            var u = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                            e.layoutOnboardingcloseEvent$Action(e.callContext(u))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "16",
                        alias: "2"
                    },
                    _widgetRecordProvider: n,
                    placeholders: {
                        content: new N(function() {
                            return [i.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding-top: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(c, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col justify-content-center align-content-flex-start",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(c, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "SuccessImage2"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(w, {
                                extendedProperties: {
                                    style: "margin-inline-start: 0;"
                                },
                                image: O.VersionedURL.getVersionedUrl("img/uae.walletDeposit.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: n
                            })), i.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "text-align: start;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(A, {
                                extendedProperties: {
                                    style: "color: #00080A; font-size: 24px; font-weight: 900;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "margin-inline-start: 0px;"
                                },
                                text: [m(v("nJamWfUngUK6dsmEuFfZ_A#Value", "Make a deposit first"))],
                                _idProps: {
                                    service: t,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: n
                            }))), i.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "text-align: start;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                text: [m(v("txOoZubxC0yz_VTH7Y0OFg#Value", "You need a sufficient Wallet balance to transfer funds to your MT5 account."))],
                                _idProps: {
                                    service: t,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: n
                            })), i.createElement(c, {
                                align: 0,
                                animate: !1,
                                style: "fixed bottom-0 left-0 w-full flex justify-center flex-col",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: white; padding: 0 16px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ActionButton3"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(p, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: a(function() {
                                    var u = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.gotoWalletsOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "btn btn-primary action-button",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [m(v("lWmi1v1EnUaRQn8MUyMyoA#Value", "Go to Wallets"))],
                                _idProps: {
                                    service: t,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: n
                            }))), i.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: white; padding: 16px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ActionButton4"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(p, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "height: 48px; margin-inline-start: 0;"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                isDefault: !1,
                                onClick: a(function() {
                                    var u = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.maybeLaterOnClick$Action(e.callContext(u))
                                }, "onClick"),
                                style: "secondary-button",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: n
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [m(v("0VDtikxAaEiOdRffeEipxw#Value", "Maybe later"))],
                                _idProps: {
                                    service: t,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: n
                            }))))))]
                        }),
                        footer: N.Empty
                    },
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: a(function() {
                return {
                    codeFunction: "MakeADeposit",
                    functionKey: "104b9733-aa8a-4a25-8f23-b8f760140252",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.MakeADeposit",
            modelFactory: H,
            controllerFactory: L,
            getTitle: a(function(d) {
                var D = d.model,
                    e = d.controller,
                    t = d.controller.idService,
                    r = e.validationService,
                    s = e.callContext(),
                    o = S,
                    v = x,
                    X = {
                        props: d,
                        validateWidget: a(function(n) {
                            d.validateWidget(d, n)
                        }, "validateWidget")
                    };
                return I.resolve($.TranslationsService).getMessage("M5dLEIqqJUqPI7j3YBQCUg#TitleExpression.-2055123609.1", "Make a deposit | Deriv")
            }, "getTitle")
        });
        return g.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [W, R]
        }, g
    }, "componentFactory"),
    ie = ne();
export {
    L as controllerModule, H as modelModule, ie as viewModule, k as webFlowControllerModule
};