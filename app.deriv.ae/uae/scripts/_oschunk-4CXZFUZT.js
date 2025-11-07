import {
    a as _
} from "./_oschunk-HFW3V2GI.js";
import {
    f,
    h as V,
    q as p,
    s as P
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Y,
    g as D,
    m as x,
    o as $,
    q as L,
    r as W,
    s as M,
    t as N
} from "./_oschunk-4VHUVDBV.js";
import {
    a as T
} from "./_oschunk-KXORGPRQ.js";
import {
    Qb as C,
    Sb as I,
    sb as E
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as v,
    W as m,
    c as a,
    e as J,
    w
} from "./_oschunk-M5BUVJ72.js";
var h = m,
    R = class R extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Heading", "headingIn", "Heading", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_headingInDataFetchStatus", "_headingInDataFetchStatus", "_headingInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnSkipVisible", "btnSkipVisibleIn", "BtnSkipVisible", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_btnSkipVisibleInDataFetchStatus", "_btnSkipVisibleInDataFetchStatus", "_btnSkipVisibleInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnBackVisible", "btnBackVisibleIn", "BtnBackVisible", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_btnBackVisibleInDataFetchStatus", "_btnBackVisibleInDataFetchStatus", "_btnBackVisibleInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnInfoVisible", "btnInfoVisibleIn", "BtnInfoVisible", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_btnInfoVisibleInDataFetchStatus", "_btnInfoVisibleInDataFetchStatus", "_btnInfoVisibleInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("BtnCloseVisible", "btnCloseVisibleIn", "BtnCloseVisible", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_btnCloseVisibleInDataFetchStatus", "_btnCloseVisibleInDataFetchStatus", "_btnCloseVisibleInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SubHeading2", "subHeading2In", "SubHeading2", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_subHeading2InDataFetchStatus", "_subHeading2InDataFetchStatus", "_subHeading2InDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(R, "VariablesRecord");
var k = R;
k.init();
var F = class F extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(F, "WidgetsRecord");
var A = F,
    S = class S extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return k
        }
        static getWidgetsRecordConstructor() {
            return A
        }
        static get hasValidationWidgets() {
            return S._hasValidationWidgetsValue === void 0 && (S._hasValidationWidgetsValue = void 0), S._hasValidationWidgetsValue
        }
        setInputs(n) {
            "Heading" in n && (this.variables.headingIn = n.Heading, "_headingInDataFetchStatus" in n && (this.variables._headingInDataFetchStatus = n._headingInDataFetchStatus)), "BtnSkipVisible" in n && (this.variables.btnSkipVisibleIn = n.BtnSkipVisible, "_btnSkipVisibleInDataFetchStatus" in n && (this.variables._btnSkipVisibleInDataFetchStatus = n._btnSkipVisibleInDataFetchStatus)), "BtnBackVisible" in n && (this.variables.btnBackVisibleIn = n.BtnBackVisible, "_btnBackVisibleInDataFetchStatus" in n && (this.variables._btnBackVisibleInDataFetchStatus = n._btnBackVisibleInDataFetchStatus)), "BtnInfoVisible" in n && (this.variables.btnInfoVisibleIn = n.BtnInfoVisible, "_btnInfoVisibleInDataFetchStatus" in n && (this.variables._btnInfoVisibleInDataFetchStatus = n._btnInfoVisibleInDataFetchStatus)), "BtnCloseVisible" in n && (this.variables.btnCloseVisibleIn = n.BtnCloseVisible, "_btnCloseVisibleInDataFetchStatus" in n && (this.variables._btnCloseVisibleInDataFetchStatus = n._btnCloseVisibleInDataFetchStatus)), "SubHeading2" in n && (this.variables.subHeading2In = n.SubHeading2, "_subHeading2InDataFetchStatus" in n && (this.variables._subHeading2InDataFetchStatus = n._subHeading2InDataFetchStatus))
        }
    };
a(S, "Model");
var O = S;
O._hasValidationWidgetsValue = void 0;
var U = new h.Model.ModelFactory(O);
var s = J(Y());
var G = {};
var d = m; {
    let n = class n extends d.Controller.BaseViewController {
        constructor(e, t, i) {
            super(e, t, i, G);
            var l = this.controller;
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
                    i = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(c) {
                    return c && (c.setAttribute("code.function", "OnReady"), c.setAttribute("outsystems.function.key", "348f6431-bb51-4cef-bd79-690f16011d9f"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnReady"), e = i.callContext(e);
                        var B = new d.DataTypes.VariableHolder,
                            y = new d.DataTypes.VariableHolder,
                            r = new d.DataTypes.VariableHolder(new(d.Controller.BaseController.getJSONDeserializeOutputType(E)));
                        return d.Flow.executeAsyncFlow(function() {
                            return B.value = I.getAuth$Action(e), t.flush(), I.fetchRestAPI$Action("GET", "client/onboarding-status", "", !0, e).then(function(H) {
                                y.value = H
                            }).then(function() {
                                r.value.dataOut = d.JSONUtils.deserializeFromJSON(y.value.resposneOut, E, !1)
                            }).then(function() {})
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _linkOnClick$Action() {
            return this.hasOwnProperty("__linkOnClick$Action") || (this.__linkOnClick$Action = function(e) {
                var t = this.model,
                    i = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("LinkOnClick", function(c) {
                    c && (c.setAttribute("code.function", "LinkOnClick"), c.setAttribute("outsystems.function.key", "d4a195df-65cb-44f7-8288-986880e29f31"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return i.ensureControllerAlive("LinkOnClick"), e = i.callContext(e), d.Navigation.navigateTo(d.Navigation.generateScreenURL("uae", "Home_V2", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__linkOnClick$Action
        }
        set _linkOnClick$Action(e) {
            this.__linkOnClick$Action = e
        }
        onReady$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "348f6431-bb51-4cef-bd79-690f16011d9f"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        linkOnClick$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("LinkOnClick__proxy", function(i) {
                i && (i.setAttribute("code.function", "LinkOnClick"), i.setAttribute("outsystems.function.key", "d4a195df-65cb-44f7-8288-986880e29f31"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._linkOnClick$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        get event_ClickIBtnnfo$Action() {
            return this.hasOwnProperty("_event_ClickIBtnnfo$Action") || (this._event_ClickIBtnnfo$Action = function() {
                return Promise.resolve()
            }), this._event_ClickIBtnnfo$Action
        }
        set event_ClickIBtnnfo$Action(e) {
            this._event_ClickIBtnnfo$Action = e
        }
        get event_ClickBtnBack$Action() {
            return this.hasOwnProperty("_event_ClickBtnBack$Action") || (this._event_ClickBtnBack$Action = function() {
                return Promise.resolve()
            }), this._event_ClickBtnBack$Action
        }
        set event_ClickBtnBack$Action(e) {
            this._event_ClickBtnBack$Action = e
        }
        get event_ClickBtnSkip$Action() {
            return this.hasOwnProperty("_event_ClickBtnSkip$Action") || (this._event_ClickBtnSkip$Action = function() {
                return Promise.resolve()
            }), this._event_ClickBtnSkip$Action
        }
        set event_ClickBtnSkip$Action(e) {
            this._event_ClickBtnSkip$Action = e
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
                    i = this.model,
                    l = this.idService;
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
            return I.defaultTimeout
        }
    };
    a(n, "ControllerInner");
    let g = n;
    q = g
}
var q, K = new d.Controller.ControllerFactory(q, T);
var we = D.PlaceholderContent,
    Ee = D.IteratorPlaceholderContent,
    j = a(function() {
        var g = $(function(n) {
            var o = n.model,
                e = n.controller,
                t = n.controller.idService,
                i = e.validationService,
                l = e.callContext(),
                c = M,
                B = N,
                y = {
                    props: n,
                    validateWidget: a(function(u) {
                        n.validateWidget(n, u)
                    }, "validateWidget")
                },
                r = o,
                H = W,
                Z = L,
                b = x();
            return s.createElement("div", n.rootNodeProperties, s.createElement(f, {
                align: 0,
                animate: !1,
                style: o.getCachedValue(t.getId("vWNu8fU2FkiafN_6SWdz5g.Style"), function() {
                    return "layout-onboarding full-width full-height display-flex justify-content-center" + (C.isDesktop$Action(l).isDesktopOut ? " overflow-vertical" : "")
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "gap: 24px; max-width: 600px;"
                },
                style: "display-flex flex-direction-column full-height padding-x-m padding-y-base full-width",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-m",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: r
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: r
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: r
            }, s.createElement(p, {
                enabled: !0,
                onClick: a(function() {
                    var u = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.event_ClickBtnBack$Action(e.callContext(u))
                }, "onClick"),
                visible: o.variables.btnBackVisibleIn,
                _idProps: {
                    service: t,
                    name: "BtnBack"
                },
                _widgetRecordProvider: r,
                visible_dataFetchStatus: v.calculateDataFetchStatus(o.variables._btnBackVisibleInDataFetchStatus)
            }, s.createElement(_, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: "<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='32' height='32' rx='16' fill='#000' fill-opacity='.04'/><path d='m9.281 15.313 5-5a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406L12.408 15H22c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-9.594l3.281 3.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.406 0l-5-5a.964.964 0 0 1 0-1.407' fill='#181C25'/></svg>"
                },
                events: {
                    _handleError: a(function(u) {
                        e.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "6",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                _dependencies: []
            }))), s.createElement(f, {
                align: 0,
                animate: !1,
                style: "display-flex gap-s",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "7"
                },
                _widgetRecordProvider: r
            }, s.createElement(p, {
                enabled: !0,
                onClick: a(function() {
                    var u = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.event_ClickIBtnnfo$Action(e.callContext(u))
                }, "onClick"),
                visible: o.variables.btnInfoVisibleIn,
                _idProps: {
                    service: t,
                    name: "BtnInfo"
                },
                _widgetRecordProvider: r,
                visible_dataFetchStatus: v.calculateDataFetchStatus(o.variables._btnInfoVisibleInDataFetchStatus)
            }, s.createElement(_, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: "<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='32' height='32' rx='16' fill='#000' fill-opacity='.04'/><path d='M22.5 16c0-2.312-1.25-4.437-3.25-5.625a6.52 6.52 0 0 0-6.5 0C10.719 11.563 9.5 13.688 9.5 16a6.51 6.51 0 0 0 3.25 5.656 6.52 6.52 0 0 0 6.5 0c2-1.187 3.25-3.312 3.25-5.656M8 16a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0 2.469 1.437 4 4.062 4 6.906a8.02 8.02 0 0 1-4 6.938c-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 8 16m5.281-2.812A1.75 1.75 0 0 1 14.937 12h1.813c1.094 0 2 .906 2 2 0 .688-.406 1.344-1 1.688l-1 .593c-.031.407-.344.719-.75.719a.72.72 0 0 1-.75-.75v-.406c0-.281.125-.531.375-.656L17 14.406a.49.49 0 0 0 .25-.406c0-.281-.219-.469-.5-.469h-1.812a.235.235 0 0 0-.22.156l-.03.032a.734.734 0 0 1-.938.469.78.78 0 0 1-.469-.97zM15 19c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1' fill='#000' fill-opacity='.72'/></svg>"
                },
                events: {
                    _handleError: a(function(u) {
                        e.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "9",
                    alias: "2"
                },
                _widgetRecordProvider: r,
                _dependencies: []
            })), s.createElement(p, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: a(function() {
                    var u = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.event_ClickBtnSkip$Action(e.callContext(u))
                }, "onClick"),
                visible: o.variables.btnSkipVisibleIn,
                _idProps: {
                    service: t,
                    name: "BtnSkip"
                },
                _widgetRecordProvider: r,
                visible_dataFetchStatus: v.calculateDataFetchStatus(o.variables._btnSkipVisibleInDataFetchStatus)
            }, s.createElement(_, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: "<svg width='64' height='32' viewBox='0 0 64 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 16C0 7.163 7.163 0 16 0h32c8.837 0 16 7.163 16 16s-7.163 16-16 16H16C7.163 32 0 24.837 0 16' fill='#000' fill-opacity='.04'/><path d='M23.03 13.87q-.049-.546-.443-.85-.387-.308-1.108-.308-.477 0-.796.125a1.04 1.04 0 0 0-.477.343.83.83 0 0 0-.164.492.73.73 0 0 0 .09.403q.105.173.298.308.198.129.477.229.279.099.627.174l.875.198q.755.165 1.332.438.582.274.974.651.398.378.602.87t.209 1.104q-.006.965-.488 1.655-.481.691-1.387 1.06-.9.367-2.172.367-1.278 0-2.227-.383-.95-.382-1.477-1.163-.527-.78-.542-1.974h2.357q.03.492.263.82.234.33.641.498.414.17.955.169.497 0 .845-.134.353-.135.542-.373a.88.88 0 0 0 .194-.547.75.75 0 0 0-.179-.492q-.174-.21-.537-.358a5.5 5.5 0 0 0-.915-.284l-1.064-.248q-1.322-.303-2.083-.98-.76-.68-.755-1.84-.006-.943.507-1.655.511-.71 1.417-1.108.904-.398 2.063-.398 1.183 0 2.053.403.875.398 1.357 1.118.483.721.493 1.67zm5.931 5.126.01-2.898h.338l2.148-2.734h2.754L31.02 17.28h-.641zM26.77 21V10.818h2.43V21zm4.743 0-1.999-3.172 1.6-1.725L34.322 21zm3.57 0v-7.636h2.43V21zm1.217-8.526q-.512 0-.88-.338a1.1 1.1 0 0 1-.368-.826q0-.477.368-.815.368-.343.88-.343.517 0 .88.343.368.338.368.815 0 .483-.368.826a1.25 1.25 0 0 1-.88.338m2.76 11.39v-10.5h2.407v1.307h.075q.149-.348.422-.671.279-.323.706-.527.432-.21 1.034-.209.795 0 1.487.418.696.417 1.123 1.287t.428 2.218q0 1.297-.413 2.172-.408.876-1.104 1.313-.69.437-1.536.437-.576 0-1-.189a2.2 2.2 0 0 1-.71-.497 2.4 2.4 0 0 1-.437-.66h-.05v4.1zm2.382-6.682q0 .616.164 1.074.17.458.482.71.318.25.761.25.447 0 .76-.25.314-.252.473-.71.165-.457.164-1.074 0-.616-.164-1.07a1.5 1.5 0 0 0-.472-.7 1.17 1.17 0 0 0-.761-.249q-.447 0-.76.244-.314.243-.483.696a3.2 3.2 0 0 0-.164 1.079' fill='#181C25'/></svg>"
                },
                events: {
                    _handleError: a(function(u) {
                        e.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "11",
                    alias: "3"
                },
                _widgetRecordProvider: r,
                _dependencies: []
            })), s.createElement(p, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: a(function() {
                    var u = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.linkOnClick$Action(e.callContext(u))
                }, "onClick"),
                visible: o.variables.btnCloseVisibleIn,
                _idProps: {
                    service: t,
                    name: "BtnClose"
                },
                _widgetRecordProvider: r,
                visible_dataFetchStatus: v.calculateDataFetchStatus(o.variables._btnCloseVisibleInDataFetchStatus)
            }, s.createElement(_, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<rect width='32' height='32' rx='16' fill='black' fill-opacity='0.04'/>\r
<path d='M20.6875 12.7188L17.4062 16L20.6875 19.3125C21.0938 19.6875 21.0938 20.3438 20.6875 20.7188C20.3125 21.125 19.6562 21.125 19.2812 20.7188L16 17.4375L12.6875 20.7188C12.3125 21.125 11.6562 21.125 11.2812 20.7188C10.875 20.3438 10.875 19.6875 11.2812 19.3125L14.5625 16L11.2812 12.7188C10.875 12.3438 10.875 11.6875 11.2812 11.3125C11.6562 10.9062 12.3125 10.9062 12.6875 11.3125L16 14.5938L19.2812 11.3125C19.6562 10.9062 20.3125 10.9062 20.6875 11.3125C21.0938 11.6875 21.0938 12.3438 20.6875 12.7188Z' fill='#181C25'/>\r
</svg>\r
`
                },
                events: {
                    _handleError: a(function(u) {
                        e.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "13",
                    alias: "4"
                },
                _widgetRecordProvider: r,
                _dependencies: []
            }))))), s.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "gap: 16px;"
                },
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "14"
                },
                _widgetRecordProvider: r
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "15"
                },
                _widgetRecordProvider: r
            }, s.createElement(f, {
                align: 0,
                animate: !0,
                visible: o.getCachedValue(t.getId("Title.Visible"), function() {
                    return o.variables.headingIn !== w.nullTextIdentifier()
                }, function() {
                    return o.variables.headingIn
                }),
                _idProps: {
                    service: t,
                    name: "Title"
                },
                _widgetRecordProvider: r,
                visible_dataFetchStatus: v.calculateDataFetchStatus(o.variables._headingInDataFetchStatus)
            }, s.createElement(V, {
                extendedProperties: {
                    style: "font-weight: 800;"
                },
                style: o.getCachedValue(t.getId("D2iCWrCBpU6ukHfZJYtuow.Style"), function() {
                    return C.isDesktop$Action(l).isDesktopOut ? "font-size-h2" : "font-size-h5"
                }),
                value: o.variables.headingIn,
                _idProps: {
                    service: t,
                    uuid: "17"
                },
                _widgetRecordProvider: r,
                value_dataFetchStatus: v.calculateDataFetchStatus(o.variables._headingInDataFetchStatus)
            })), s.createElement(f, {
                align: 0,
                animate: !0,
                visible: o.getCachedValue(t.getId("Subheading.Visible"), function() {
                    return o.variables.subHeading2In !== w.nullTextIdentifier()
                }, function() {
                    return o.variables.subHeading2In
                }),
                _idProps: {
                    service: t,
                    name: "Subheading"
                },
                _widgetRecordProvider: r,
                visible_dataFetchStatus: v.calculateDataFetchStatus(o.variables._subHeading2InDataFetchStatus)
            }, s.createElement(V, {
                value: o.variables.subHeading2In,
                _idProps: {
                    service: t,
                    uuid: "19"
                },
                _widgetRecordProvider: r,
                value_dataFetchStatus: v.calculateDataFetchStatus(o.variables._subHeading2InDataFetchStatus)
            }))), s.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "cursor: unset; overscroll-behavior: none;"
                },
                style: o.getCachedValue(t.getId("uMT8cu5yxE+RAWD29rZB6w.Style"), function() {
                    return "hide-scrollbar" + (C.isDesktop$Action(l).isDesktopOut ? "" : " flex-1 overflow-vertical")
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "20"
                },
                _widgetRecordProvider: r
            }, s.createElement(P, {
                align: 0,
                content: y.props.placeholders.content,
                style: "",
                _idProps: {
                    service: t,
                    name: "Content"
                },
                _widgetRecordProvider: r
            }))), s.createElement(P, {
                align: 0,
                content: y.props.placeholders.buttonContainer,
                style: "padding-top-base button-container",
                _idProps: {
                    service: t,
                    name: "ButtonContainer"
                },
                _widgetRecordProvider: r
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: a(function() {
                return {
                    codeFunction: "LayoutKYC",
                    functionKey: "e42f08d4-fe96-4e44-9d40-1bf59176e2db",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutKYC",
            modelFactory: U,
            controllerFactory: K
        });
        return g.getCssDependencies = function() {
            return ["css/uae.Layouts.LayoutKYC.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return ["scripts/uae.UserScripts.yupumd.js"]
        }, g.getBlocks = function() {
            return [_]
        }, g
    }, "componentFactory"),
    De = j();
export {
    De as a
};