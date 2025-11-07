import {
    b as E,
    f as v,
    n as $,
    q as G,
    r as N,
    u as m
} from "./_oschunk-VR5BNL2K.js";
import {
    a as X,
    g as C,
    m as H,
    o as D,
    q as F,
    r as W,
    s as V,
    t as I
} from "./_oschunk-4VHUVDBV.js";
import {
    a as T
} from "./_oschunk-KXORGPRQ.js";
import {
    Sb as x,
    ub as R
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as k,
    W as h,
    c as s,
    e as K,
    p as P
} from "./_oschunk-M5BUVJ72.js";
var f = h,
    b = class b extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShouldShow", "shouldShowIn", "ShouldShow", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowInDataFetchStatus", "_shouldShowInDataFetchStatus", "_shouldShowInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(b, "VariablesRecord");
var _ = b;
_.init();
var O = class O extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(O, "WidgetsRecord");
var w = O,
    A = class A extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return _
        }
        static getWidgetsRecordConstructor() {
            return w
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(o) {
            "ShouldShow" in o && (this.variables.shouldShowIn = o.ShouldShow, "_shouldShowInDataFetchStatus" in o && (this.variables._shouldShowInDataFetchStatus = o._shouldShowInDataFetchStatus))
        }
    };
s(A, "Model");
var S = A;
S._hasValidationWidgetsValue = void 0;
var L = new f.Model.ModelFactory(S);
var i = K(X());
var U = {
        "9k3kgb2XJ0SsKXV3y_OeyQ#Value": "\u0627\u0628\u062F\u0623 \u062D\u0633\u0627\u0628 \u062A\u062C\u0631\u064A\u0628\u064A",
        "oT6iWG9DnEC82j4t4fnkXQ#Value": "\u0627\u0633\u062A\u0645\u0631",
        "xjXhwsepBE6P3xuR5Pxw4A#Value": "\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u062E\u0631\u0648\u062C \u0627\u0644\u0622\u0646 \u0648\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u062A\u062C\u0631\u064A\u0628\u064A \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0630\u0644\u0643\u061F",
        "8a50WML9bUWoYQRYTXUDgA#Value": "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F\u061F"
    },
    M = {
        "ar-001": {
            translations: U,
            isRTL: !0
        }
    };
var l = h; {
    let o = class o extends l.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, M);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _keepGoingOnClick$Action() {
            return this.hasOwnProperty("__keepGoingOnClick$Action") || (this.__keepGoingOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return l.Logger.startActiveSpan("KeepGoingOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "KeepGoingOnClick"), r.setAttribute("outsystems.function.key", "57c0da8f-ce42-415e-8916-a74f43c9447f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("KeepGoingOnClick"), e = t.callContext(e), l.Flow.executeAsyncFlow(function() {
                            return t.onContinue$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__keepGoingOnClick$Action
        }
        set _keepGoingOnClick$Action(e) {
            this.__keepGoingOnClick$Action = e
        }
        get _onClickTryDemo$Action() {
            return this.hasOwnProperty("__onClickTryDemo$Action") || (this.__onClickTryDemo$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return l.Logger.startActiveSpan("onClickTryDemo", function(r) {
                    r && (r.setAttribute("code.function", "onClickTryDemo"), r.setAttribute("outsystems.function.key", "d12eb812-50d7-4cf1-a5d4-4b44a4bbda22"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("onClickTryDemo"), e = t.callContext(e), R.setshould_skip_currency_selection(!1), n.variables.shouldShowIn = !1, l.Navigation.navigateTo(l.Navigation.generateScreenURL("uae", "home", {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickTryDemo$Action
        }
        set _onClickTryDemo$Action(e) {
            this.__onClickTryDemo$Action = e
        }
        keepGoingOnClick$Action(e) {
            var n = this.controller;
            return l.Logger.startActiveSpan("KeepGoingOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "KeepGoingOnClick"), t.setAttribute("outsystems.function.key", "57c0da8f-ce42-415e-8916-a74f43c9447f"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._keepGoingOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickTryDemo$Action(e) {
            var n = this.controller;
            return l.Logger.startActiveSpan("onClickTryDemo__proxy", function(t) {
                t && (t.setAttribute("code.function", "onClickTryDemo"), t.setAttribute("outsystems.function.key", "d12eb812-50d7-4cf1-a5d4-4b44a4bbda22"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickTryDemo$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onContinue$Action() {
            return this.hasOwnProperty("_onContinue$Action") || (this._onContinue$Action = function() {
                return Promise.resolve()
            }), this._onContinue$Action
        }
        set onContinue$Action(e) {
            this._onContinue$Action = e
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
            return x.defaultTimeout
        }
    };
    s(o, "ControllerInner");
    let d = o;
    B = d
}
var B, z = new l.Controller.ControllerFactory(B, T);
var _e = C.PlaceholderContent,
    Se = C.IteratorPlaceholderContent,
    Q = s(function() {
        var d = D(function(o) {
            var p = o.model,
                e = o.controller,
                n = o.controller.idService,
                t = e.validationService,
                c = e.callContext(),
                r = V,
                y = I,
                j = {
                    props: o,
                    validateWidget: s(function(u) {
                        o.validateWidget(o, u)
                    }, "validateWidget")
                },
                a = p,
                Y = W,
                g = F,
                J = H();
            return i.createElement("div", o.rootNodeProperties, i.createElement(N, {
                extendedProperties: {
                    style: "border-radius: 8px; padding: 16px; width: 330px;"
                },
                showPopup: p.variables.shouldShowIn,
                style: "popup-dialog stop-onboarding",
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: a,
                showPopup_dataFetchStatus: k.calculateDataFetchStatus(p.variables._shouldShowInDataFetchStatus)
            }, i.createElement(v, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column row-gap-m",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "1"
                },
                _widgetRecordProvider: a
            }, i.createElement(v, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Heading"
                },
                _widgetRecordProvider: a
            }, i.createElement(m, {
                extendedProperties: {
                    style: "font-size: 18px;"
                },
                style: "heading5 font-bold",
                text: [g(y("8a50WML9bUWoYQRYTXUDgA#Value", "Are you sure?"))],
                _idProps: {
                    service: n,
                    uuid: "3"
                },
                _widgetRecordProvider: a
            }), i.createElement(G, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: s(function() {
                    return Promise.resolve().then(function() {
                        var u = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                        return e.keepGoingOnClick$Action(e.callContext(u))
                    })
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "4"
                },
                _widgetRecordProvider: a
            }, i.createElement($, {
                image: P.VersionedURL.getVersionedUrl("img/uae.close.svg"),
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "5"
                },
                _widgetRecordProvider: a
            }))), i.createElement(v, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Body"
                },
                _widgetRecordProvider: a
            }, i.createElement(m, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                text: [g(y("xjXhwsepBE6P3xuR5Pxw4A#Value", "Exit now and try demo trading instead?"))],
                _idProps: {
                    service: n,
                    uuid: "7"
                },
                _widgetRecordProvider: a
            })), i.createElement(v, {
                align: 0,
                animate: !1,
                style: "full-width display-flex flex-direction-column row-gap-s",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Footer"
                },
                _widgetRecordProvider: a
            }, i.createElement(E, {
                enabled: !0,
                isDefault: !1,
                onClick: s(function() {
                    return Promise.resolve().then(function() {
                        var u = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                        return e.keepGoingOnClick$Action(e.callContext(u))
                    })
                }, "onClick"),
                style: "btn btn-primary action-button full-width",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "9"
                },
                _widgetRecordProvider: a
            }, i.createElement(m, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                text: [g(y("oT6iWG9DnEC82j4t4fnkXQ#Value", "Keep going"))],
                _idProps: {
                    service: n,
                    uuid: "10"
                },
                _widgetRecordProvider: a
            })), i.createElement(E, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                isDefault: !1,
                onClick: s(function() {
                    var u = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                    e.onClickTryDemo$Action(e.callContext(u))
                }, "onClick"),
                style: "btn btn-cancel secondary-button full-width",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "11"
                },
                _widgetRecordProvider: a
            }, i.createElement(m, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                text: [g(y("9k3kgb2XJ0SsKXV3y_OeyQ#Value", "Try demo"))],
                _idProps: {
                    service: n,
                    uuid: "12"
                },
                _widgetRecordProvider: a
            }))))))
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "StopOnboarding",
                    functionKey: "4a80be00-68c3-4d4c-8301-61833f3f70d9",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.StopOnboarding",
            modelFactory: L,
            controllerFactory: z
        });
        return d.getCssDependencies = function() {
            return ["css/uae.OnboardingFlow.StopOnboarding.css", "css/OutSystemsReactWidgets.css"]
        }, d.getJsDependencies = function() {
            return []
        }, d.getBlocks = function() {
            return []
        }, d
    }, "componentFactory"),
    pe = Q();
export {
    pe as a
};