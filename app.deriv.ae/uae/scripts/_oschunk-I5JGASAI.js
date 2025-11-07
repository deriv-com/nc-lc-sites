import {
    a as ue
} from "./_oschunk-3MOYZQ2C.js";
import {
    a as le,
    f,
    h as Z,
    m as ce,
    n as Y,
    q as L,
    s as D,
    u as de
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Q,
    g as p,
    m as w,
    o as H,
    q as F,
    r as I,
    s as T,
    t as x
} from "./_oschunk-4VHUVDBV.js";
import {
    a as P
} from "./_oschunk-KXORGPRQ.js";
import {
    Qb as b,
    Sb as R,
    a as De,
    ub as E
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as xe,
    W as m,
    c as o,
    e as X,
    h as z,
    m as V,
    n as N,
    p as B,
    w as G
} from "./_oschunk-M5BUVJ72.js";
var j = m,
    ve = class ve extends j.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(j.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(ve, "VariablesRecord");
var ee = ve;
ee.init();
var he = class he extends j.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(he, "WidgetsRecord");
var me = he,
    ye = class ye extends j.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return ee
        }
        static getWidgetsRecordConstructor() {
            return me
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {}
    };
o(ye, "Model");
var te = ye;
te._hasValidationWidgetsValue = void 0;
var ke = new j.Model.ModelFactory(te);
var K = m,
    Se = class Se extends K.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(K.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(Se, "VariablesRecord");
var ne = Se;
ne.init();
var Ee = class Ee extends K.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(Ee, "WidgetsRecord");
var _e = Ee,
    pe = class pe extends K.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return ne
        }
        static getWidgetsRecordConstructor() {
            return _e
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {}
    };
o(pe, "Model");
var re = pe;
re._hasValidationWidgetsValue = void 0;
var Ve = new K.Model.ModelFactory(re);
var C = m,
    Ae = class Ae extends C.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("HasFixedHeader", "hasFixedHeaderIn", "HasFixedHeader", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, C.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(C.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(Ae, "VariablesRecord");
var ie = Ae;
ie.init();
var be = class be extends C.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(be, "WidgetsRecord");
var Ce = be,
    W = class W extends C.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ie
        }
        static getWidgetsRecordConstructor() {
            return Ce
        }
        static get hasValidationWidgets() {
            return W._hasValidationWidgetsValue === void 0 && (W._hasValidationWidgetsValue = void 0 || void 0), W._hasValidationWidgetsValue
        }
        setInputs(i) {
            "HasFixedHeader" in i && (this.variables.hasFixedHeaderIn = i.HasFixedHeader, "_hasFixedHeaderInDataFetchStatus" in i && (this.variables._hasFixedHeaderInDataFetchStatus = i._hasFixedHeaderInDataFetchStatus)), "EnableAccessibilityFeatures" in i && (this.variables.enableAccessibilityFeaturesIn = i.EnableAccessibilityFeatures, "_enableAccessibilityFeaturesInDataFetchStatus" in i && (this.variables._enableAccessibilityFeaturesInDataFetchStatus = i._enableAccessibilityFeaturesInDataFetchStatus)), "ExtendedClass" in i && (this.variables.extendedClassIn = i.ExtendedClass, "_extendedClassInDataFetchStatus" in i && (this.variables._extendedClassInDataFetchStatus = i._extendedClassInDataFetchStatus))
        }
    };
o(W, "Model");
var oe = W;
oe._hasValidationWidgetsValue = void 0;
var Ne = new C.Model.ModelFactory(oe);
var J = m,
    Re = class Re extends J.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(J.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(Re, "VariablesRecord");
var ae = Re;
ae.init();
var Pe = class Pe extends J.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(Pe, "WidgetsRecord");
var Oe = Pe,
    $ = class $ extends J.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return ae
        }
        static getWidgetsRecordConstructor() {
            return Oe
        }
        static get hasValidationWidgets() {
            return $._hasValidationWidgetsValue === void 0 && ($._hasValidationWidgetsValue = void 0), $._hasValidationWidgetsValue
        }
        setInputs(i) {}
    };
o($, "Model");
var se = $;
se._hasValidationWidgetsValue = void 0;
var We = new J.Model.ModelFactory(se);
var v = X(Q());
var Ze = {
        "DPA6LVADxkO6jcLIqfhj2g#Value.-1469475029.1": "\u062A\u062E\u0637\u064A \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 (\u0627\u0636\u063A\u0637 Enter)",
        "mjrohuRrREqdE8Am2dRAOw#Value": "\u062A\u062E\u0637\u064A \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 (\u0627\u0636\u063A\u0637 Enter)"
    },
    $e = {
        "ar-001": {
            translations: Ze,
            isRTL: !0
        }
    };
var g = m; {
    let i = class i extends g.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, $e);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _skipToContentOnClick$Action() {
            return this.hasOwnProperty("__skipToContentOnClick$Action") || (this.__skipToContentOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return g.Logger.startActiveSpan("SkipToContentOnClick", function(r) {
                    r && (r.setAttribute("code.function", "SkipToContentOnClick"), r.setAttribute("outsystems.function.key", "d3358d97-637f-414b-8164-7a1fd218a5a6"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SkipToContentOnClick"), e = t.callContext(e);
                        var h = new g.DataTypes.VariableHolder;
                        h.value = b.skipToContent$Action(l.getId("MainContentWrapper"), e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__skipToContentOnClick$Action
        }
        set _skipToContentOnClick$Action(e) {
            this.__skipToContentOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return g.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "eea22139-79bd-48cd-8097-602c3071963b"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var h = new g.DataTypes.VariableHolder,
                            y = new g.DataTypes.VariableHolder;
                        return g.Flow.executeAsyncFlow(function() {
                            return n.flush(), b.layoutReady$Action(e).then(function() {
                                y.value = b.setLang$Action("", e), h.value = b.addFavicon$Action("favicon.png", e)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return g.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "fccada4a-9eda-4de6-ab35-2a6a8582a236"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), b.layoutDestroy$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        skipToContentOnClick$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("SkipToContentOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "SkipToContentOnClick"), t.setAttribute("outsystems.function.key", "d3358d97-637f-414b-8164-7a1fd218a5a6"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._skipToContentOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "eea22139-79bd-48cd-8097-602c3071963b"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "fccada4a-9eda-4de6-ab35-2a6a8582a236"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
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
                    l = this.idService;
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    l = this.idService;
                return n.onDestroy$Action(e)
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
            return R.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let s = i;
    Ue = s
}
var Ue, Me = new g.Controller.ControllerFactory(Ue, P);
var U = X(Q());
var et = {
        "mVd_z8GJI0e1Xo8+sk4hsw#Value.1915663098.1": "\u0642\u0645 \u0628\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"
    },
    ze = {
        "ar-001": {
            translations: et,
            isRTL: !0
        }
    };
var S = m; {
    let i = class i extends S.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ze);
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
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return S.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "4f2b7015-1940-48bb-959d-b100250e3f20"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), S.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var h = new S.DataTypes.VariableHolder;
                        return S.Flow.executeAsyncFlow(function() {
                            return n.flush(), b.setMenuIconListeners$Action(e).then(function(y) {
                                h.value = y
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onClick$Action() {
            return this.hasOwnProperty("__onClick$Action") || (this.__onClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return S.Logger.startActiveSpan("OnClick", function(r) {
                    return r && (r.setAttribute("code.function", "OnClick"), r.setAttribute("outsystems.function.key", "f374e41d-b8b1-43e6-9e4c-97174295b7b0"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), S.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClick"), e = t.callContext(e);
                        var h = new S.DataTypes.VariableHolder;
                        return S.Flow.executeAsyncFlow(function() {
                            return n.flush(), b.toggleSideMenu$Action(e).then(function(y) {
                                h.value = y
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onClick$Action
        }
        set _onClick$Action(e) {
            this.__onClick$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return S.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "4f2b7015-1940-48bb-959d-b100250e3f20"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), S.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClick$Action(e) {
            var n = this.controller;
            return S.Logger.startActiveSpan("OnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClick"), t.setAttribute("outsystems.function.key", "f374e41d-b8b1-43e6-9e4c-97174295b7b0"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), S.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClick$Action, e)
                }, function() {
                    t && t.end()
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
                var n = this.controller,
                    t = this.model,
                    l = this.idService;
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    l = this.idService;
                return n.onReady$Action(e)
            }), this._onParametersChangedEventHandler
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
            return R.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let s = i;
    Be = s
}
var Be, Ge = new S.Controller.ControllerFactory(Be, P);
var Yt = p.PlaceholderContent,
    en = p.IteratorPlaceholderContent,
    tt = o(function() {
        var s = H(function(i) {
            var d = i.model,
                e = i.controller,
                n = i.controller.idService,
                t = e.validationService,
                l = e.callContext(),
                r = T,
                h = x,
                y = {
                    props: i,
                    validateWidget: o(function(u) {
                        i.validateWidget(i, u)
                    }, "validateWidget")
                },
                a = d,
                M = I,
                k = F,
                A = w();
            return U.createElement("div", i.rootNodeProperties, U.createElement(f, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var u = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                            return e.onClick$Action(e.callContext(u))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    "aria-label": V.resolve(N.TranslationsService).getMessage("mVd_z8GJI0e1Xo8+sk4hsw#Value.1915663098.1", "Toggle the Menu"),
                    role: "button",
                    tabIndex: "0",
                    "aria-haspopup": "true"
                },
                style: "menu-icon",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: a
            }, U.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    "aria-hidden": "true"
                },
                style: "menu-icon-line",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "1"
                },
                _widgetRecordProvider: a
            }), U.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    "aria-hidden": "true"
                },
                style: "menu-icon-line",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "2"
                },
                _widgetRecordProvider: a
            }), U.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    "aria-hidden": "true"
                },
                style: "menu-icon-line",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "3"
                },
                _widgetRecordProvider: a
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "MenuIcon",
                    functionKey: "96fa937f-c17f-436d-845d-6f1a6c743802",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.MenuIcon",
            modelFactory: ke,
            controllerFactory: Ge
        });
        return s.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return []
        }, s
    }, "componentFactory"),
    Ie = tt();
var q = X(Q());
var je = {};
var O = m; {
    let i = class i extends O.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, je);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _applicationNameOnClick$Action() {
            return this.hasOwnProperty("__applicationNameOnClick$Action") || (this.__applicationNameOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return O.Logger.startActiveSpan("ApplicationNameOnClick", function(r) {
                    r && (r.setAttribute("code.function", "ApplicationNameOnClick"), r.setAttribute("outsystems.function.key", "cc810bf7-d904-4d64-9043-7ed6198ce78b"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("ApplicationNameOnClick"), e = t.callContext(e), O.Navigation.navigateTo(O.Navigation.generateScreenURL(O.BuiltinFunctions.getOwnerURLPath(), {}), O.Transitions.createTransition(O.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__applicationNameOnClick$Action
        }
        set _applicationNameOnClick$Action(e) {
            this.__applicationNameOnClick$Action = e
        }
        applicationNameOnClick$Action(e) {
            var n = this.controller;
            return O.Logger.startActiveSpan("ApplicationNameOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "ApplicationNameOnClick"), t.setAttribute("outsystems.function.key", "cc810bf7-d904-4d64-9043-7ed6198ce78b"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._applicationNameOnClick$Action, e)
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
            return R.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let s = i;
    Ke = s
}
var Ke, Je = new O.Controller.ControllerFactory(Ke, P);
var Sn = p.PlaceholderContent,
    En = p.IteratorPlaceholderContent,
    nt = o(function() {
        var s = H(function(i) {
            var d = i.model,
                e = i.controller,
                n = i.controller.idService,
                t = e.validationService,
                l = e.callContext(),
                r = T,
                h = x,
                y = {
                    props: i,
                    validateWidget: o(function(u) {
                        i.validateWidget(i, u)
                    }, "validateWidget")
                },
                a = d,
                M = I,
                k = F,
                A = w();
            return q.createElement("div", i.rootNodeProperties, q.createElement(f, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        var u = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                        e.applicationNameOnClick$Action(e.callContext(u))
                    }, "onClick")
                },
                extendedProperties: {
                    role: "button",
                    tabIndex: "0"
                },
                style: "application-name display-flex align-items-center full-height",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "ApplicationTitleWrapper"
                },
                _widgetRecordProvider: a
            }, q.createElement(Y, {
                extendedProperties: {
                    alt: "",
                    style: "height: 32px;"
                },
                image: B.VersionedURL.getVersionedUrl("img/uae.Logo.png"),
                style: "app-logo",
                type: 0,
                _idProps: {
                    service: n,
                    name: "AppLogo"
                },
                _widgetRecordProvider: a
            }), q.createElement(Z, {
                value: d.getCachedValue(n.getId("aZ+ALintY06glfRG8XzhyQ.Value"), function() {
                    return G.getAppName()
                }),
                _idProps: {
                    service: n,
                    uuid: "2"
                },
                _widgetRecordProvider: a
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "ApplicationTitle",
                    functionKey: "99261221-5631-4dea-b701-80292a8a29bf",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.ApplicationTitle",
            modelFactory: Ve,
            controllerFactory: Je
        });
        return s.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return []
        }, s
    }, "componentFactory"),
    Te = nt();
var Dn = p.PlaceholderContent,
    kn = p.IteratorPlaceholderContent,
    rt = o(function() {
        var s = H(function(i) {
            var d = i.model,
                e = i.controller,
                n = i.controller.idService,
                t = e.validationService,
                l = e.callContext(),
                r = T,
                h = x,
                y = {
                    props: i,
                    validateWidget: o(function(u) {
                        i.validateWidget(i, u)
                    }, "validateWidget")
                },
                a = d,
                M = I,
                k = F,
                A = w();
            return v.createElement("div", i.rootNodeProperties, v.createElement(f, {
                align: 0,
                animate: !1,
                style: d.getCachedValue(n.getId("LayoutWrapper.Style"), function() {
                    return "layout layout-top" + (d.variables.hasFixedHeaderIn ? " fixed-header" : "") + (d.variables.enableAccessibilityFeaturesIn ? " has-accessible-features" : "") + (d.variables.extendedClassIn === "" ? "" : " " + d.variables.extendedClassIn)
                }, function() {
                    return d.variables.hasFixedHeaderIn
                }, function() {
                    return d.variables.enableAccessibilityFeaturesIn
                }, function() {
                    return d.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: n,
                    name: "LayoutWrapper"
                },
                _widgetRecordProvider: a,
                style_dataFetchStatus: xe.calculateDataFetchStatus(d.variables._hasFixedHeaderInDataFetchStatus, d.variables._enableAccessibilityFeaturesInDataFetchStatus, d.variables._extendedClassInDataFetchStatus)
            }, v.createElement(f, {
                align: 0,
                animate: !1,
                style: "main",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "1"
                },
                _widgetRecordProvider: a
            }, v.createElement(le, {
                extendedProperties: {
                    role: "banner",
                    className: "header"
                },
                tag: "header",
                _idProps: {
                    service: n,
                    name: "Header2"
                },
                _widgetRecordProvider: a
            }, v.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    "aria-label": V.resolve(N.TranslationsService).getMessage("DPA6LVADxkO6jcLIqfhj2g#Value.-1469475029.1", "Skip to Content (Press Enter)"),
                    "data-showskipcontent": d.getCachedValue(n.getId("VUCrXupa4kG8pPfT8AIZBg.data-showskipcontent"), function() {
                        return d.variables.enableAccessibilityFeaturesIn ? "true" : "false"
                    }, function() {
                        return d.variables.enableAccessibilityFeaturesIn
                    })
                },
                onClick: o(function() {
                    var u = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.skipToContentOnClick$Action(e.callContext(u))
                }, "onClick"),
                style: "skip-nav",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "3"
                },
                _widgetRecordProvider: a
            }, k(h("mjrohuRrREqdE8Am2dRAOw#Value", "Skip to Content (Press Enter)"))), v.createElement(f, {
                align: 0,
                animate: !1,
                style: "header-top ThemeGrid_Container",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "4"
                },
                _widgetRecordProvider: a
            }, v.createElement(f, {
                align: 0,
                animate: !1,
                style: "header-content display-flex ",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "5"
                },
                _widgetRecordProvider: a
            }, v.createElement(Ie, {
                getOwnerSpan: o(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(u) {
                        e.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "6",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            }), v.createElement(Te, {
                getOwnerSpan: o(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(u) {
                        e.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "7",
                    alias: "2"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            }), v.createElement(D, {
                align: 0,
                content: y.props.placeholders.header,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "header-navigation",
                _idProps: {
                    service: n,
                    name: "Header"
                },
                _widgetRecordProvider: a
            })))), v.createElement(f, {
                align: 0,
                animate: !1,
                style: "content",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Content"
                },
                _widgetRecordProvider: a
            }, v.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    role: "main"
                },
                style: "main-content ThemeGrid_Container",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "MainContentWrapper"
                },
                _widgetRecordProvider: a
            }, v.createElement(D, {
                align: 0,
                content: y.props.placeholders.breadcrumbs,
                style: "content-breadcrumbs ph",
                _idProps: {
                    service: n,
                    name: "Breadcrumbs"
                },
                _widgetRecordProvider: a
            }), v.createElement(f, {
                align: 0,
                animate: !1,
                style: "content-top display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "12"
                },
                _widgetRecordProvider: a
            }, v.createElement(D, {
                align: 0,
                content: y.props.placeholders.title,
                style: "content-top-title heading1 ph",
                _idProps: {
                    service: n,
                    name: "Title"
                },
                _widgetRecordProvider: a
            }), v.createElement(D, {
                align: 0,
                content: y.props.placeholders.actions,
                style: "content-top-actions ph",
                _idProps: {
                    service: n,
                    name: "Actions"
                },
                _widgetRecordProvider: a
            })), v.createElement(D, {
                align: 0,
                content: y.props.placeholders.mainContent,
                style: "content-middle",
                _idProps: {
                    service: n,
                    name: "MainContent"
                },
                _widgetRecordProvider: a
            })), v.createElement(le, {
                extendedProperties: {
                    role: "contentinfo",
                    className: "content-bottom"
                },
                tag: "footer",
                _idProps: {
                    service: n,
                    uuid: "16"
                },
                _widgetRecordProvider: a
            }, v.createElement(D, {
                align: 0,
                content: y.props.placeholders.footer,
                style: "footer ThemeGrid_Container ph",
                _idProps: {
                    service: n,
                    name: "Footer"
                },
                _widgetRecordProvider: a
            }))))))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "LayoutTopMenu",
                    functionKey: "2cc2a24c-0ee3-4a4e-b7ef-32c7feff1982",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutTopMenu",
            modelFactory: Ne,
            controllerFactory: Me
        });
        return s.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return [Ie, Te]
        }, s
    }, "componentFactory"),
    Vn = rt();
var _ = X(Q());
var it = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
        "TCQDA_VwfkO0r6CiwhvSpA#Value.2121520573.1": "\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"
    },
    qe = {
        "ar-001": {
            translations: it,
            isRTL: !0
        }
    };
var c = m; {
    let i = class i extends c.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, qe);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _clientLogout$Action() {
            return this.hasOwnProperty("__clientLogout$Action") || (this.__clientLogout$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return c.Logger.startActiveSpan("ClientLogout", function(r) {
                    return r && (r.setAttribute("code.function", "ClientLogout"), r.setAttribute("outsystems.function.key", "16b8bb2e-2d06-444a-9efc-eb164c5727d8"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ClientLogout"), e = t.callContext(e), c.Flow.executeAsyncFlow(function() {
                            return n.flush(), c.SystemActions.logout(e).then(function() {
                                return E.setUserName(""), E.setUserPhotoURL(""), E.setLastURL(""), c.Flow.returnAsync(c.Navigation.navigateTo(c.Navigation.generateScreenURL(c.BuiltinFunctions.getOwnerURLPath(), {}), c.Transitions.createTransition(c.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__clientLogout$Action
        }
        set _clientLogout$Action(e) {
            this.__clientLogout$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return c.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "178caa22-4a4c-4694-b37a-07d6fef86df8"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnReady"), e = t.callContext(e), c.Flow.executeAsyncFlow(function() {
                            return t._getUsernameAndPhoto$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _getUsernameAndPhoto$Action() {
            return this.hasOwnProperty("__getUsernameAndPhoto$Action") || (this.__getUsernameAndPhoto$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return c.Logger.startActiveSpan("GetUsernameAndPhoto", function(r) {
                    return r && (r.setAttribute("code.function", "GetUsernameAndPhoto"), r.setAttribute("outsystems.function.key", "c78050da-d0b4-41e0-b4a6-d2d77ea57b9f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        t.ensureControllerAlive("GetUsernameAndPhoto"), e = t.callContext(e);
                        var h = new c.DataTypes.VariableHolder;
                        return c.Flow.executeAsyncFlow(function() {
                            return c.Flow.executeSequence(function() {
                                if (E.getUserName() === "" && c.BuiltinFunctions.getUserId().toString() !== c.BuiltinFunctions.nullTextIdentifier()) return n.flush(), c.SystemActions.getUserProfile(e).then(function(y) {
                                    h.value = y
                                }).then(function() {
                                    E.setUserName(h.value.userInfoOut.nameAttr), E.setUserPhotoURL(h.value.userInfoOut.photoURLAttr)
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__getUsernameAndPhoto$Action
        }
        set _getUsernameAndPhoto$Action(e) {
            this.__getUsernameAndPhoto$Action = e
        }
        clientLogout$Action(e) {
            var n = this.controller;
            return c.Logger.startActiveSpan("ClientLogout__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ClientLogout"), t.setAttribute("outsystems.function.key", "16b8bb2e-2d06-444a-9efc-eb164c5727d8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._clientLogout$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return c.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "178caa22-4a4c-4694-b37a-07d6fef86df8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getUsernameAndPhoto$Action(e) {
            var n = this.controller;
            return c.Logger.startActiveSpan("GetUsernameAndPhoto__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetUsernameAndPhoto"), t.setAttribute("outsystems.function.key", "c78050da-d0b4-41e0-b4a6-d2d77ea57b9f"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._getUsernameAndPhoto$Action, e)
                }, function() {
                    t && t.end()
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
                var n = this.controller,
                    t = this.model,
                    l = this.idService;
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
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return R.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let s = i;
    Xe = s
}
var Xe, Qe = new c.Controller.ControllerFactory(Xe, P);
var nr = p.PlaceholderContent,
    rr = p.IteratorPlaceholderContent,
    ot = o(function() {
        var s = H(function(i) {
            var d = i.model,
                e = i.controller,
                n = i.controller.idService,
                t = e.validationService,
                l = e.callContext(),
                r = T,
                h = x,
                y = {
                    props: i,
                    validateWidget: o(function(u) {
                        i.validateWidget(i, u)
                    }, "validateWidget")
                },
                a = d,
                M = I,
                k = F,
                A = w();
            return _.createElement("div", i.rootNodeProperties, _.createElement(f, {
                align: 0,
                animate: !1,
                style: "user-info",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: a
            }, M(G.getUserId().toString() !== G.nullTextIdentifier(), !1, this, function() {
                return [_.createElement(f, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "1"
                    },
                    _widgetRecordProvider: a
                }, M(E.getUserPhotoURL() !== "", !1, this, function() {
                    return [_.createElement(Y, {
                        extendedProperties: {
                            title: E.getUserName(),
                            alt: V.resolve(N.TranslationsService).getMessage("TCQDA_VwfkO0r6CiwhvSpA#Value.2121520573.1", "User photo")
                        },
                        style: "avatar avatar-small border-radius-rounded",
                        type: 1,
                        url: E.getUserPhotoURL(),
                        _idProps: {
                            service: n,
                            uuid: "2"
                        },
                        _widgetRecordProvider: a
                    })]
                }, function() {
                    return [_.createElement(ue, {
                        getOwnerSpan: o(function() {
                            return A.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: o(function() {
                            return A.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            Size: De.size.small,
                            Name: E.getUserName()
                        },
                        events: {
                            _handleError: o(function(u) {
                                e.handleError(u)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: t
                        },
                        _idProps: {
                            service: n,
                            uuid: "3",
                            alias: "1"
                        },
                        _widgetRecordProvider: a,
                        _dependencies: []
                    })]
                }), _.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "margin-left-s",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "4"
                    },
                    _widgetRecordProvider: a
                }, _.createElement(L, {
                    enabled: !0,
                    transition: z.createTransition(z.TransitionAnimation.Default),
                    url: B.generateScreenURL("uae", "UserProfile", {}),
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "5"
                    },
                    _widgetRecordProvider: a
                }, _.createElement(Z, {
                    value: E.getUserName(),
                    _idProps: {
                        service: n,
                        uuid: "6"
                    },
                    _widgetRecordProvider: a
                })))), _.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "margin-left-s",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "7"
                    },
                    _widgetRecordProvider: a
                }, _.createElement(L, {
                    enabled: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var u = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                            return e.clientLogout$Action(e.callContext(u))
                        })
                    }, "onClick"),
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "8"
                    },
                    _widgetRecordProvider: a
                }, _.createElement(ce, {
                    icon: "sign-out",
                    iconSize: 0,
                    style: "icon",
                    visible: !0,
                    _idProps: {
                        service: n,
                        name: "Icon3"
                    },
                    _widgetRecordProvider: a
                }), _.createElement(de, {
                    style: "margin-left-s wcag-hide-text",
                    text: [k(h("2Djm+3zPL0anWsH6xyInWg#Value", "Log out"))],
                    _idProps: {
                        service: n,
                        uuid: "10"
                    },
                    _widgetRecordProvider: a
                })))]
            }, function() {
                return [_.createElement(L, {
                    enabled: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    transition: z.createTransition(z.TransitionAnimation.Fade),
                    url: B.generateScreenURL("uae", "signup", {}),
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "11"
                    },
                    _widgetRecordProvider: a
                }, _.createElement(ce, {
                    icon: "sign-in",
                    iconSize: 0,
                    style: "icon",
                    visible: !0,
                    _idProps: {
                        service: n,
                        name: "Icon4"
                    },
                    _widgetRecordProvider: a
                }), _.createElement(de, {
                    style: "margin-left-s",
                    text: [k(h("nej3A_4R7kaUkfwGE5ub6w#Value", "Login"))],
                    _idProps: {
                        service: n,
                        uuid: "13"
                    },
                    _widgetRecordProvider: a
                }))]
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "UserInfo",
                    functionKey: "aff58ebe-2f28-4941-a4ac-832f90c8e43e",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.UserInfo",
            modelFactory: We,
            controllerFactory: Qe
        });
        return s.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return [ue]
        }, s
    }, "componentFactory"),
    ir = ot();
export {
    Te as a, Vn as b, ir as c
};