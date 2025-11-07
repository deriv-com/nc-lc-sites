import {
    a as C
} from "./_oschunk-ES37VNGZ.js";
import {
    a as V
} from "./_oschunk-7ZNALR7E.js";
import {
    b as _,
    f as o,
    h as f,
    n as P,
    u as h
} from "./_oschunk-VR5BNL2K.js";
import {
    a as J,
    g as R,
    m as N,
    n as M,
    q as G,
    r as U,
    s as z,
    t as T
} from "./_oschunk-4VHUVDBV.js";
import {
    a as $
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as I,
    Sb as y
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as A,
    c as d,
    e as q,
    p as x
} from "./_oschunk-M5BUVJ72.js";
var j = {};
var l = A; {
    let v = class v extends l.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, j);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _setupTradingAccountOnClick$Action() {
            return this.hasOwnProperty("__setupTradingAccountOnClick$Action") || (this.__setupTradingAccountOnClick$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    s = this.idService;
                return l.Logger.startActiveSpan("SetupTradingAccountOnClick", function(a) {
                    a && (a.setAttribute("code.function", "SetupTradingAccountOnClick"), a.setAttribute("outsystems.function.key", "4a9cca46-f945-42b9-8d22-1b8ae7cf8986"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("SetupTradingAccountOnClick"), e = n.callContext(e), l.Navigation.navigateTo(l.Navigation.generateScreenURL("uae", "CurrencySelectionV2", {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__setupTradingAccountOnClick$Action
        }
        set _setupTradingAccountOnClick$Action(e) {
            this.__setupTradingAccountOnClick$Action = e
        }
        get _maybeLaterOnClick$Action() {
            return this.hasOwnProperty("__maybeLaterOnClick$Action") || (this.__maybeLaterOnClick$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    s = this.idService;
                return l.Logger.startActiveSpan("MaybeLaterOnClick", function(a) {
                    a && (a.setAttribute("code.function", "MaybeLaterOnClick"), a.setAttribute("outsystems.function.key", "da1b3136-19df-42fe-ba40-92af5b2ae76d"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("MaybeLaterOnClick"), e = n.callContext(e), l.Navigation.navigateTo(l.Navigation.generateScreenURL("uae", "Home_V2", {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__maybeLaterOnClick$Action
        }
        set _maybeLaterOnClick$Action(e) {
            this.__maybeLaterOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    s = this.idService;
                return l.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "de483ff3-d979-4b66-bec1-10d14bd595ba"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var c = new l.DataTypes.VariableHolder,
                            L = new l.DataTypes.VariableHolder;
                        return l.Flow.executeAsyncFlow(function() {
                            return t.variables.is_loadingVar = !0, L.value = y.getAuth$Action(e), t.flush(), y.getUserKYCStatus$Action(e).then(function(r) {
                                c.value = r
                            }).then(function() {
                                y.consoleLog$Action("poi statxcxcvxvxvus" + c.value.responseOut.dataAttr.detailsAttr.poaAttr.moderation_commentAttr, e)
                            }).then(function() {
                                return l.Flow.executeSequence(function() {
                                    if (c.value.responseOut.dataAttr.detailsAttr.poiAttr.statusAttr === "rejected" || c.value.responseOut.dataAttr.detailsAttr.poiAttr.statusAttr === "verified" || c.value.responseOut.dataAttr.detailsAttr.poiAttr.statusAttr === "pending" || c.value.responseOut.dataAttr.detailsAttr.poiAttr.statusAttr === "pending_poi" || c.value.responseOut.dataAttr.detailsAttr.poaAttr.statusAttr === "rejected" || c.value.responseOut.dataAttr.detailsAttr.poaAttr.statusAttr === "verified" || c.value.responseOut.dataAttr.detailsAttr.poaAttr.statusAttr === "pending" || c.value.responseOut.dataAttr.detailsAttr.poaAttr.statusAttr === "pending_poa" || c.value.responseOut.dataAttr.detailsAttr.poaAttr.statusAttr === "pending_provider" || c.value.responseOut.dataAttr.detailsAttr.poiAttr.statusAttr === "pending_provider") return t.flush(), y.initalizeIntercom$Action(e)
                                })
                            }).then(function() {
                                t.variables.is_loadingVar = !1, t.variables.poa_statusVar = c.value.responseOut.dataAttr.detailsAttr.poaAttr.statusAttr, t.variables.poi_statusVar = c.value.responseOut.dataAttr.detailsAttr.poiAttr.statusAttr, t.variables.poi_rejection_reasonsVar = c.value.responseOut.dataAttr.detailsAttr.poiAttr.moderation_commentAttr, t.variables.poa_rejection_reasonsVar = c.value.responseOut.dataAttr.detailsAttr.poaAttr.moderation_commentAttr, y.consoleLog$Action("poi statxcxcvxvxvus" + c.value.responseOut.dataAttr.detailsAttr.poaAttr.moderation_commentAttr + t.variables.poa_rejection_reasonsVar, e)
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
        setupTradingAccountOnClick$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("SetupTradingAccountOnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "SetupTradingAccountOnClick"), n.setAttribute("outsystems.function.key", "4a9cca46-f945-42b9-8d22-1b8ae7cf8986"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setupTradingAccountOnClick$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        maybeLaterOnClick$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("MaybeLaterOnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "MaybeLaterOnClick"), n.setAttribute("outsystems.function.key", "da1b3136-19df-42fe-ba40-92af5b2ae76d"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._maybeLaterOnClick$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("OnReady__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "de483ff3-d979-4b66-bec1-10d14bd595ba"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    n && n.end()
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
                var t = this.controller,
                    n = this.model,
                    s = this.idService;
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
                return V.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    d(v, "ControllerInner");
    let m = v;
    B = m
}
var B, F = new l.Controller.ControllerFactory(B, $);
var i = q(J());
var g = A,
    H = class H extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("poa_status", "poa_statusVar", "poa_status", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("poi_status", "poi_statusVar", "poi_status", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("poi_rejection_reasons", "poi_rejection_reasonsVar", "poi_rejection_reasons", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("poa_rejection_reasons", "poa_rejection_reasonsVar", "poa_rejection_reasons", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(H, "VariablesRecord");
var O = H;
O.init();
var D = class D extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
d(D, "WidgetsRecord");
var W = D,
    b = class b extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return W
        }
        static get hasValidationWidgets() {
            return b._hasValidationWidgetsValue === void 0 && (b._hasValidationWidgetsValue = void 0), b._hasValidationWidgetsValue
        }
        setInputs(v) {}
    };
d(b, "Model");
var w = b;
w._hasValidationWidgetsValue = void 0;
var k = new g.Model.ModelFactory(w);
var E = R.PlaceholderContent,
    Re = R.IteratorPlaceholderContent,
    X = d(function() {
        var m = M(function(v) {
            var u = v.model,
                e = v.controller,
                t = v.controller.idService,
                n = e.validationService,
                s = e.callContext(),
                a = z,
                c = T,
                L = {
                    props: v,
                    validateWidget: d(function(p) {
                        v.validateWidget(v, p)
                    }, "validateWidget")
                },
                r = u,
                Y = U,
                Z = G,
                S = N();
            return i.createElement("div", v.rootNodeProperties, Y(I.isDesktop$Action(s).isDesktopOut, !1, this, function() {
                return [i.createElement(C, {
                    getOwnerSpan: d(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: d(function(p) {
                            e.handleError(p)
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
                        content: new E(function() {
                            return [i.createElement(o, {
                                align: 0,
                                animate: !0,
                                visible: u.variables.poi_statusVar === "verified" && u.variables.poa_statusVar === "verified",
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(o, {
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
                            }, i.createElement(P, {
                                extendedProperties: {
                                    style: "height: 256px;"
                                },
                                gridProperties: {
                                    width: "256px"
                                },
                                image: x.VersionedURL.getVersionedUrl("img/uae.Group2.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(o, {
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
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "align-self: stretch; color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 32px; font-weight: 800; text-align: center;"
                                },
                                value: "Verification successful",
                                _idProps: {
                                    service: t,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(f, {
                                extendedProperties: {
                                    style: "color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 16px; font-weight: 400;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                style: "text-align-center",
                                value: "We\u2019ve verified your identity and address. Next, set up your trading account.",
                                _idProps: {
                                    service: t,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: r
                            })), i.createElement(o, {
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
                            }, i.createElement(o, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: d(function() {
                                    var p = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.maybeLaterOnClick$Action(e.callContext(p))
                                }, "onClick"),
                                style: "btn-secondary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(h, {
                                extendedProperties: {
                                    style: "color: var(--component-button-label-color-white-secondary, #FFF); font-weight: 800;"
                                },
                                text: ["Maybe later"],
                                _idProps: {
                                    service: t,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(o, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: var(--component-button-height-lg, 48px);"
                                },
                                isDefault: !1,
                                onClick: d(function() {
                                    var p = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.setupTradingAccountOnClick$Action(e.callContext(p))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(h, {
                                extendedProperties: {
                                    style: "font-weight: 800;"
                                },
                                text: ["Set up trading account"],
                                _idProps: {
                                    service: t,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: r
                            })))))), i.createElement(o, {
                                align: 0,
                                animate: !0,
                                visible: (u.variables.poi_statusVar === "pending" || u.variables.poi_statusVar === "pending_provider") && (u.variables.poa_statusVar === "pending" || u.variables.poa_statusVar === "pending_provider"),
                                _idProps: {
                                    service: t,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(o, {
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
                            }, i.createElement(P, {
                                image: x.VersionedURL.getVersionedUrl("img/uae.Documentreview.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(o, {
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
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "align-self: stretch; color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 32px; font-weight: 800; text-align: center;"
                                },
                                value: "Documents in review",
                                _idProps: {
                                    service: t,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(f, {
                                extendedProperties: {
                                    style: "color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 16px; font-weight: 400;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                style: "text-align-center",
                                value: "This usually takes a few minutes. We\u2019ll let you know when it\u2019s complete, or you can check the status in your Profile.",
                                _idProps: {
                                    service: t,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: r
                            })), i.createElement(o, {
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
                            }, i.createElement(o, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: var(--component-button-height-lg, 48px);"
                                },
                                gridProperties: {
                                    width: "280px"
                                },
                                isDefault: !1,
                                onClick: d(function() {
                                    var p = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.maybeLaterOnClick$Action(e.callContext(p))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(h, {
                                extendedProperties: {
                                    style: "font-weight: 800;"
                                },
                                text: ["Done"],
                                _idProps: {
                                    service: t,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: r
                            }))))))]
                        }),
                        content2: E.Empty
                    },
                    _dependencies: [a(u.variables.poa_statusVar), a(u.variables.poi_statusVar)]
                })]
            }, function() {
                return [i.createElement(C, {
                    getOwnerSpan: d(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: d(function(p) {
                            e.handleError(p)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: t,
                        uuid: "24",
                        alias: "2"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        content: E.Empty,
                        content2: new E(function() {
                            return [i.createElement(o, {
                                align: 0,
                                animate: !0,
                                visible: u.variables.poi_statusVar === "verified" && u.variables.poa_statusVar === "verified",
                                _idProps: {
                                    service: t,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; gap: 16px; padding: 24px;"
                                },
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(P, {
                                extendedProperties: {
                                    style: "height: 256px;"
                                },
                                gridProperties: {
                                    width: "256px"
                                },
                                image: x.VersionedURL.getVersionedUrl("img/uae.Group2.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(o, {
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
                                    uuid: "28"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "align-self: stretch; color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 32px; font-weight: 800; text-align: center;"
                                },
                                value: "Verification successful",
                                _idProps: {
                                    service: t,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(f, {
                                extendedProperties: {
                                    style: "color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 16px; font-weight: 400;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                style: "text-align-center",
                                value: "We\u2019ve verified your identity and address. Next, set up your trading account.",
                                _idProps: {
                                    service: t,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "gap: 8px;"
                                },
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(o, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(o, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: r
                            })), i.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "gap: 8px;"
                                },
                                style: "display-flex flex-direction-column fixed bottom-0 left-0 w-full flex justify-center px-6 py-4",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Footer4"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(o, {
                                align: 0,
                                animate: !1,
                                style: "full-width",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                enabled: !0,
                                gridProperties: {
                                    width: "100%"
                                },
                                isDefault: !1,
                                onClick: d(function() {
                                    var p = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.maybeLaterOnClick$Action(e.callContext(p))
                                }, "onClick"),
                                style: "btn-secondary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(h, {
                                extendedProperties: {
                                    style: "color: var(--component-button-label-color-white-secondary, #FFF); font-weight: 800;"
                                },
                                text: ["Maybe later"],
                                _idProps: {
                                    service: t,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(o, {
                                align: 0,
                                animate: !1,
                                style: "full-width",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: var(--component-button-height-lg, 48px);"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                isDefault: !1,
                                onClick: d(function() {
                                    var p = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.setupTradingAccountOnClick$Action(e.callContext(p))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "39"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(h, {
                                extendedProperties: {
                                    style: "font-weight: 800;"
                                },
                                text: ["Set up trading account"],
                                _idProps: {
                                    service: t,
                                    uuid: "40"
                                },
                                _widgetRecordProvider: r
                            }))))), i.createElement(o, {
                                align: 0,
                                animate: !0,
                                visible: (u.variables.poi_statusVar === "pending" || u.variables.poi_statusVar === "pending_provider") && (u.variables.poa_statusVar === "pending" || u.variables.poa_statusVar === "pending_provider"),
                                _idProps: {
                                    service: t,
                                    uuid: "41"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; gap: 16px; height: 483px; padding: 24px;"
                                },
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(P, {
                                image: x.VersionedURL.getVersionedUrl("img/uae.Documentreview.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(o, {
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
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "align-self: stretch; color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 32px; font-weight: 800; text-align: center;"
                                },
                                value: "Documents in review",
                                _idProps: {
                                    service: t,
                                    uuid: "45"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(f, {
                                extendedProperties: {
                                    style: "color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 16px; font-weight: 400;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                style: "text-align-center",
                                value: "This usually takes a few minutes. We\u2019ll let you know when it\u2019s complete, or you can check the status in your Profile.",
                                _idProps: {
                                    service: t,
                                    uuid: "46"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "gap: 8px;"
                                },
                                style: "display-flex flex-direction-column fixed bottom-0 left-0 w-full flex justify-center px-6 py-4",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Footer3"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(o, {
                                align: 0,
                                animate: !1,
                                style: "full-width",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "48"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(_, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: var(--component-button-border-radius-lg, 24px);"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                isDefault: !1,
                                onClick: d(function() {
                                    var p = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.maybeLaterOnClick$Action(e.callContext(p))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "DoneButton"
                                },
                                _widgetRecordProvider: r
                            }, "Done"))))]
                        })
                    },
                    _dependencies: [a(u.variables.poa_statusVar), a(u.variables.poi_statusVar)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: d(function() {
                return {
                    codeFunction: "KYCStatus_V2",
                    functionKey: "1cf9c562-38aa-497b-8586-b61beb826a2c",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Flow.KYCStatus_V2",
            modelFactory: k,
            controllerFactory: F,
            getTitle: d(function() {
                return T("YsX5HKo4e0mFhrYb64JqLA#Title", "KYCStatus_V2")
            }, "getTitle")
        });
        return m.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.V2Flow.KYCStatus_V2.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [C]
        }, m
    }, "componentFactory"),
    Q = X();
export {
    F as controllerModule, k as modelModule, Q as viewModule, V as webFlowControllerModule
};