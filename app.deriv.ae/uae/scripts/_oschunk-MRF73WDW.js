import {
    a as T
} from "./_oschunk-LRPUW3LC.js";
import {
    a as O
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as R
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import {
    a as S
} from "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as C,
    f,
    u as v
} from "./_oschunk-VR5BNL2K.js";
import {
    a as te,
    g as E,
    m as z,
    n as B,
    q as K,
    r as G,
    s as P,
    t as A
} from "./_oschunk-4VHUVDBV.js";
import {
    a as F
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as I,
    Sb as U,
    ub as h
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as p,
    c as i,
    e as ee,
    m as W,
    n as $
} from "./_oschunk-M5BUVJ72.js";
var ne = {
        "j2RYy1uHC0mN01zPotouVA#Value": "\u0631\u0628\u0645\u0627 \u0644\u0627\u062D\u0642\u064B\u0627",
        "wnB05+DcjkKM3lKhVQImfg#Value": "\u0645\u062A\u0627\u0628\u0639\u0629",
        "g1QTydcF3Uyil03fwzu2Wg#Value": "\u062A\u0627\u0628\u0639 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0639\u0646\u0648\u0627\u0646",
        "HOS1NUTcn02JH036Lyk58w#Value": "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0647\u0648\u064A\u062A\u0643",
        "43bXa7h+1U2xVkADUUFqcQ#Value": "\u0631\u0628\u0645\u0627 \u0644\u0627\u062D\u0642\u064B\u0627",
        "14EAVodPbkiVdYA5eKm4MQ#Value": "\u0645\u062A\u0627\u0628\u0639\u0629",
        "0PmKULYw1E2rcjPmvJ6b0w#Value": "\u062A\u0627\u0628\u0639 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0639\u0646\u0648\u0627\u0646",
        "UHg0S8JigEqGDTN6kIPDaw#Value": "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0647\u0648\u064A\u062A\u0643",
        "_O7ax9uykUePOmG7DNk3sg#Title": "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 | Deriv",
        "_O7ax9uykUePOmG7DNk3sg#TitleExpression.-997842563.1": "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 | Deriv"
    },
    Y = {
        "ar-001": {
            translations: ne,
            isRTL: !0
        }
    };
var r = p; {
    let c = class c extends r.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Y);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _handleMaybeLater$Action() {
            return this.hasOwnProperty("__handleMaybeLater$Action") || (this.__handleMaybeLater$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("HandleMaybeLater", function(a) {
                    a && (a.setAttribute("code.function", "HandleMaybeLater"), a.setAttribute("outsystems.function.key", "2500eca6-3f1e-4ca9-b0ca-aaf86bb5b2e2"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("HandleMaybeLater"), e = t.callContext(e), h.getkyc_flow_from() === "unverified_profile" || h.getkyc_flow_from() === "profile" ? r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "user-profile", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0) : h.getkyc_flow_from() === "wallet" ? r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "wallet", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0) : h.getkyc_flow_from() === "trade" ? r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "mt5/activation", {
                            is_demo: r.DataConversion.ServerDataConverter.to(!1, r.DataTypes.DataTypes.Boolean)
                        }), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0) : h.getkyc_flow_from() === "banner_add_funds" ? r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "home", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0) : r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "home", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__handleMaybeLater$Action
        }
        set _handleMaybeLater$Action(e) {
            this.__handleMaybeLater$Action = e
        }
        get _handleOnContinue$Action() {
            return this.hasOwnProperty("__handleOnContinue$Action") || (this.__handleOnContinue$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("HandleOnContinue", function(a) {
                    a && (a.setAttribute("code.function", "HandleOnContinue"), a.setAttribute("outsystems.function.key", "a50b5580-425a-4616-b362-f78baa490888"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("HandleOnContinue"), e = t.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "verify-poa", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__handleOnContinue$Action
        }
        set _handleOnContinue$Action(e) {
            this.__handleOnContinue$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(a) {
                    a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "ecc48168-2a69-42e3-a5dc-b7c3bc02a3d8"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        handleMaybeLater$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("HandleMaybeLater__proxy", function(t) {
                t && (t.setAttribute("code.function", "HandleMaybeLater"), t.setAttribute("outsystems.function.key", "2500eca6-3f1e-4ca9-b0ca-aaf86bb5b2e2"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._handleMaybeLater$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        handleOnContinue$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("HandleOnContinue__proxy", function(t) {
                t && (t.setAttribute("code.function", "HandleOnContinue"), t.setAttribute("outsystems.function.key", "a50b5580-425a-4616-b362-f78baa490888"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._handleOnContinue$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "ecc48168-2a69-42e3-a5dc-b7c3bc02a3d8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
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
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onReady$Action(e)
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
                return T.default.handleError(e, this.callContext())
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
    i(c, "ControllerInner");
    let m = c;
    j = m
}
var j, H = new r.Controller.ControllerFactory(j, F);
var s = ee(te());
var b = p,
    M = class M extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(M, "VariablesRecord");
var w = M;
w.init();
var D = class D extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(D, "WidgetsRecord");
var V = D,
    _ = class _ extends b.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return w
        }
        static getWidgetsRecordConstructor() {
            return V
        }
        static get hasValidationWidgets() {
            return _._hasValidationWidgetsValue === void 0 && (_._hasValidationWidgetsValue = void 0 || void 0 || void 0), _._hasValidationWidgetsValue
        }
        setInputs(c) {}
    };
i(_, "Model");
var x = _;
x._hasValidationWidgetsValue = void 0;
var L = new b.Model.ModelFactory(x);
var N = E.PlaceholderContent,
    Me = E.IteratorPlaceholderContent,
    re = i(function() {
        var m = B(function(c) {
            var k = c.model,
                e = c.controller,
                n = c.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                a = P,
                u = A,
                q = {
                    props: c,
                    validateWidget: i(function(d) {
                        c.validateWidget(c, d)
                    }, "validateWidget")
                },
                l = k,
                X = G,
                y = K,
                g = z();
            return s.createElement("div", c.rootNodeProperties, X(I.isDesktop$Action(o).isDesktopOut, !1, this, function() {
                return [s.createElement(R, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0,
                        ShowBackbutton: !1
                    },
                    events: {
                        _handleError: i(function(d) {
                            e.handleError(d)
                        }, "_handleError"),
                        closeBtnEvent$Action: i(function() {
                            var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            e.handleMaybeLater$Action(e.callContext(d))
                        }, "closeBtnEvent$Action"),
                        backBtnEvent$Action: i(function() {
                            var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            e.handleOnContinue$Action(e.callContext(d))
                        }, "backBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: l,
                    placeholders: {
                        contentbody: new N(function() {
                            return [s.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "w-full flex justify-center mb-6",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: l
                            }, s.createElement(S, {
                                getOwnerSpan: i(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: `<svg width='96' height='97' viewBox='0 0 96 97' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M48 80.5C36.5 80.5 26 74.5 20.25 64.5C14.5 54.625 14.5 42.5 20.25 32.5C26 22.625 36.5 16.5 48 16.5C59.375 16.5 69.875 22.625 75.625 32.5C81.375 42.5 81.375 54.625 75.625 64.5C69.875 74.5 59.375 80.5 48 80.5ZM36 44.5C33.75 44.5 32 46.375 32 48.5C32 50.75 33.75 52.5 36 52.5C38.125 52.5 40 50.75 40 48.5C40 46.375 38.125 44.5 36 44.5ZM44 48.5C44 50.75 45.75 52.5 48 52.5C50.125 52.5 52 50.75 52 48.5C52 46.375 50.125 44.5 48 44.5C45.75 44.5 44 46.375 44 48.5ZM60 44.5C57.75 44.5 56 46.375 56 48.5C56 50.75 57.75 52.5 60 52.5C62.125 52.5 64 50.75 64 48.5C64 46.375 62.125 44.5 60 44.5Z' fill='#FF9C13' fill-opacity='0.88'/>\r
</svg>`
                                },
                                events: {
                                    _handleError: i(function(d) {
                                        e.handleError(d)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: t
                                },
                                _idProps: {
                                    service: n,
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: l,
                                _dependencies: []
                            })), s.createElement(f, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "text-center mb-2",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "PageHeading2"
                                },
                                _widgetRecordProvider: l
                            }, s.createElement(v, {
                                extendedProperties: {
                                    style: "color: var(--text-brandPrimaryProminent, #00080A); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                text: [y(u("UHg0S8JigEqGDTN6kIPDaw#Value", "Your identity verification is in progress"))],
                                _idProps: {
                                    service: n,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: l
                            })), s.createElement(f, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 25px;"
                                },
                                style: "text-center",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: l
                            }, s.createElement(v, {
                                extendedProperties: {
                                    style: "---comment-5: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                text: [y(u("0PmKULYw1E2rcjPmvJ6b0w#Value", "Continue with address verification"))],
                                _idProps: {
                                    service: n,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: l
                            })), s.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-2 mx-6 my-4",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: l
                            }, s.createElement(C, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: i(function() {
                                    var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.handleOnContinue$Action(e.callContext(d))
                                }, "onClick"),
                                style: "w-full btn btn-primary action-button",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: l
                            }, s.createElement(v, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [y(u("14EAVodPbkiVdYA5eKm4MQ#Value", "Continue"))],
                                _idProps: {
                                    service: n,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: l
                            })), s.createElement(C, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; border: 1px solid #181C25; border-radius: 24px; display: flex; gap: 8px; height: 48px; justify-content: center; max-height: 48px; min-height: 48px; padding: 0px 28px;"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                isDefault: !1,
                                onClick: i(function() {
                                    var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.handleMaybeLater$Action(e.callContext(d))
                                }, "onClick"),
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: l
                            }, s.createElement(v, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [y(u("43bXa7h+1U2xVkADUUFqcQ#Value", "Maybe later"))],
                                _idProps: {
                                    service: n,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: l
                            })))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [s.createElement(O, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_close_icon: !0,
                        has_back_button: !1
                    },
                    events: {
                        _handleError: i(function(d) {
                            e.handleError(d)
                        }, "_handleError"),
                        closeEvent$Action: i(function() {
                            var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            e.handleMaybeLater$Action(e.callContext(d))
                        }, "closeEvent$Action"),
                        onLeftActionEvent$Action: i(function() {
                            var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            e.handleOnContinue$Action(e.callContext(d))
                        }, "onLeftActionEvent$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        uuid: "12",
                        alias: "3"
                    },
                    _widgetRecordProvider: l,
                    placeholders: {
                        content: new N(function() {
                            return [s.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "w-full flex justify-center mb-6",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: l
                            }, s.createElement(S, {
                                getOwnerSpan: i(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: `<svg width='96' height='97' viewBox='0 0 96 97' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M48 80.5C36.5 80.5 26 74.5 20.25 64.5C14.5 54.625 14.5 42.5 20.25 32.5C26 22.625 36.5 16.5 48 16.5C59.375 16.5 69.875 22.625 75.625 32.5C81.375 42.5 81.375 54.625 75.625 64.5C69.875 74.5 59.375 80.5 48 80.5ZM36 44.5C33.75 44.5 32 46.375 32 48.5C32 50.75 33.75 52.5 36 52.5C38.125 52.5 40 50.75 40 48.5C40 46.375 38.125 44.5 36 44.5ZM44 48.5C44 50.75 45.75 52.5 48 52.5C50.125 52.5 52 50.75 52 48.5C52 46.375 50.125 44.5 48 44.5C45.75 44.5 44 46.375 44 48.5ZM60 44.5C57.75 44.5 56 46.375 56 48.5C56 50.75 57.75 52.5 60 52.5C62.125 52.5 64 50.75 64 48.5C64 46.375 62.125 44.5 60 44.5Z' fill='#FF9C13' fill-opacity='0.88'/>\r
</svg>`
                                },
                                events: {
                                    _handleError: i(function(d) {
                                        e.handleError(d)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: t
                                },
                                _idProps: {
                                    service: n,
                                    uuid: "14",
                                    alias: "4"
                                },
                                _widgetRecordProvider: l,
                                _dependencies: []
                            })), s.createElement(f, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "text-center mb-2",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "PageHeading3"
                                },
                                _widgetRecordProvider: l
                            }, s.createElement(v, {
                                extendedProperties: {
                                    style: "color: var(--text-brandPrimaryProminent, #00080A); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                text: [y(u("HOS1NUTcn02JH036Lyk58w#Value", "Your identity verification is in progress"))],
                                _idProps: {
                                    service: n,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: l
                            })), s.createElement(f, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 25px;"
                                },
                                style: "text-center",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: l
                            }, s.createElement(v, {
                                extendedProperties: {
                                    style: "---comment-5: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                text: [y(u("g1QTydcF3Uyil03fwzu2Wg#Value", "Continue with address verification"))],
                                _idProps: {
                                    service: n,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: l
                            })), s.createElement(f, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: white; padding: 16px;"
                                },
                                style: "fixed bottom-0 left-0 w-full flex flex-col items-center gap-2",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "ActionButton"
                                },
                                _widgetRecordProvider: l
                            }, s.createElement(C, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: i(function() {
                                    var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.handleOnContinue$Action(e.callContext(d))
                                }, "onClick"),
                                style: "w-full btn btn-primary action-button",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: l
                            }, s.createElement(v, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [y(u("wnB05+DcjkKM3lKhVQImfg#Value", "Continue"))],
                                _idProps: {
                                    service: n,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: l
                            })), s.createElement(C, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; border: 1px solid #181C25; border-radius: 24px; display: flex; gap: 8px; height: 48px; justify-content: center; max-height: 48px; min-height: 48px; padding: 0px 28px;"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                isDefault: !1,
                                onClick: i(function() {
                                    var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.handleMaybeLater$Action(e.callContext(d))
                                }, "onClick"),
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: l
                            }, s.createElement(v, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [y(u("j2RYy1uHC0mN01zPotouVA#Value", "Maybe later"))],
                                _idProps: {
                                    service: n,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: l
                            })))]
                        }),
                        footer: N.Empty
                    },
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: i(function() {
                return {
                    codeFunction: "TransitionPage",
                    functionKey: "c7daeefc-b2db-4791-8f3a-61bb0cd937b2",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "KYCFlow.TransitionPage",
            modelFactory: L,
            controllerFactory: H,
            getTitle: i(function(c) {
                var k = c.model,
                    e = c.controller,
                    n = c.controller.idService,
                    t = e.validationService,
                    o = e.callContext(),
                    a = P,
                    u = A,
                    q = {
                        props: c,
                        validateWidget: i(function(l) {
                            c.validateWidget(c, l)
                        }, "validateWidget")
                    };
                return W.resolve($.TranslationsService).getMessage("_O7ax9uykUePOmG7DNk3sg#TitleExpression.-997842563.1", "Verification In Progress | Deriv")
            }, "getTitle")
        });
        return m.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [R, S, O]
        }, m
    }, "componentFactory"),
    ie = re();
export {
    H as controllerModule, L as modelModule, ie as viewModule, T as webFlowControllerModule
};