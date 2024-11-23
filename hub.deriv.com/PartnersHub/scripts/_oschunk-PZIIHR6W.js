import {
    a as fe
} from "./_oschunk-ZDT7T2SV.js";
import {
    a as qe
} from "./_oschunk-P5Q7WBO6.js";
import {
    a as ue,
    b as ve,
    c as X,
    d as ge
} from "./_oschunk-IIUARQZW.js";
import "./_oschunk-TO5AYNPX.js";
import {
    a as B
} from "./_oschunk-RNYL55HD.js";
import {
    a as L
} from "./_oschunk-UOGDTLIS.js";
import "./_oschunk-2PG5HA6L.js";
import "./_oschunk-EK5A3TSV.js";
import "./_oschunk-I7KZQPH5.js";
import "./_oschunk-CXWYKNLS.js";
import "./_oschunk-S4T4FX3G.js";
import "./_oschunk-SELPP7T7.js";
import {
    a as je
} from "./_oschunk-AQGGBOMR.js";
import "./_oschunk-CPXZZQHI.js";
import "./_oschunk-COGS3DBX.js";
import "./_oschunk-CPRRDSIA.js";
import {
    a as de
} from "./_oschunk-AP2LGV3I.js";
import "./_oschunk-QM6TPNLS.js";
import "./_oschunk-HMQSENZ4.js";
import "./_oschunk-PISKEOZB.js";
import {
    a as ce
} from "./_oschunk-XLHEEBMK.js";
import "./_oschunk-ANY3DTL7.js";
import "./_oschunk-22UUXQ4S.js";
import "./_oschunk-QCCZFQH6.js";
import {
    a as Ge,
    b as Je
} from "./_oschunk-4YFBPYRH.js";
import {
    a as Ze
} from "./_oschunk-NR4KXK35.js";
import {
    a as Ne,
    b as Me,
    c as We,
    d as y,
    f as T,
    g as G,
    n as Ue,
    p as ze,
    s as J,
    u as j
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-7BKGLZMI.js";
import {
    a as ke
} from "./_oschunk-6WALBPGV.js";
import {
    a as Y,
    g as w,
    i as I
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import {
    a as $,
    c as le,
    o as p,
    p as Be
} from "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import {
    Re as z,
    hd as U,
    od as $e,
    pd as Le,
    rf as Z
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as C
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a,
    h as Q
} from "./_oschunk-QHO7QY6K.js";
var v = Q(Y());
var P = Q(Y());
var b = C,
    Ce = class Ce extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, b.DataTypes.DataTypes.Record, function() {
                return b.DataTypes.ImmutableBase.getData(new le)
            }, !1, le), this.attr("StartsOpen", "startsOpenIn", "StartsOpen", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Direction", "directionIn", "Direction", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return U.direction.right
            }, !1), this.attr("_directionInDataFetchStatus", "_directionInDataFetchStatus", "_directionInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasOverlay", "hasOverlayIn", "HasOverlay", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasOverlayInDataFetchStatus", "_hasOverlayInDataFetchStatus", "_hasOverlayInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Width", "widthIn", "Width", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return "500px"
            }, !1), this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Ce, "VariablesRecord");
var ee = Ce;
ee.init();
var ye = class ye extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(ye, "WidgetsRecord");
var he = ye,
    be = class be extends b.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ee
        }
        static getWidgetsRecordConstructor() {
            return he
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "StartsOpen" in t && (this.variables.startsOpenIn = t.StartsOpen, "_startsOpenInDataFetchStatus" in t && (this.variables._startsOpenInDataFetchStatus = t._startsOpenInDataFetchStatus)), "Direction" in t && (this.variables.directionIn = t.Direction, "_directionInDataFetchStatus" in t && (this.variables._directionInDataFetchStatus = t._directionInDataFetchStatus)), "HasOverlay" in t && (this.variables.hasOverlayIn = t.HasOverlay, "_hasOverlayInDataFetchStatus" in t && (this.variables._hasOverlayInDataFetchStatus = t._hasOverlayInDataFetchStatus)), "Width" in t && (this.variables.widthIn = t.Width, "_widthInDataFetchStatus" in t && (this.variables._widthInDataFetchStatus = t._widthInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
a(be, "Model");
var te = be;
te._hasValidationWidgetsValue = void 0;
var Ke = new b.Model.ModelFactory(te);
var S = C,
    pe = class pe extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("HeaderInfo", "headerInfoIn", "HeaderInfo", !0, !1, S.DataTypes.DataTypes.Record, function() {
                return S.DataTypes.ImmutableBase.getData(new Z)
            }, !1, Z), this.attr("_headerInfoInDataFetchStatus", "_headerInfoInDataFetchStatus", "_headerInfoInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("FooterInfo", "footerInfoIn", "FooterInfo", !0, !1, S.DataTypes.DataTypes.Record, function() {
                return S.DataTypes.ImmutableBase.getData(new z)
            }, !1, z), this.attr("_footerInfoInDataFetchStatus", "_footerInfoInDataFetchStatus", "_footerInfoInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsSidebarOpen", "isSidebarOpenIn", "IsSidebarOpen", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isSidebarOpenInDataFetchStatus", "_isSidebarOpenInDataFetchStatus", "_isSidebarOpenInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ContentClassName", "contentClassNameIn", "ContentClassName", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_contentClassNameInDataFetchStatus", "_contentClassNameInDataFetchStatus", "_contentClassNameInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(pe, "VariablesRecord");
var ne = pe;
ne.init();
var Se = class Se extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Se, "WidgetsRecord");
var _e = Se,
    k = class k extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ne
        }
        static getWidgetsRecordConstructor() {
            return _e
        }
        static get hasValidationWidgets() {
            return k._hasValidationWidgetsValue === void 0 && (k._hasValidationWidgetsValue = void 0 || void 0 || void 0), k._hasValidationWidgetsValue
        }
        setInputs(t) {
            "HeaderInfo" in t && (this.variables.headerInfoIn = t.HeaderInfo, "_headerInfoInDataFetchStatus" in t && (this.variables._headerInfoInDataFetchStatus = t._headerInfoInDataFetchStatus)), "FooterInfo" in t && (this.variables.footerInfoIn = t.FooterInfo, "_footerInfoInDataFetchStatus" in t && (this.variables._footerInfoInDataFetchStatus = t._footerInfoInDataFetchStatus)), "IsSidebarOpen" in t && (this.variables.isSidebarOpenIn = t.IsSidebarOpen, "_isSidebarOpenInDataFetchStatus" in t && (this.variables._isSidebarOpenInDataFetchStatus = t._isSidebarOpenInDataFetchStatus)), "ContentClassName" in t && (this.variables.contentClassNameIn = t.ContentClassName, "_contentClassNameInDataFetchStatus" in t && (this.variables._contentClassNameInDataFetchStatus = t._contentClassNameInDataFetchStatus))
        }
    };
a(k, "Model");
var re = k;
re._hasValidationWidgetsValue = void 0;
var Xe = new S.Model.ModelFactory(re);
var et = {};
var R = C; {
    let t = class t extends R.Controller.BaseViewController {
        constructor(e, r, n) {
            super(e, r, n, et);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    l = this.idService;
                return R.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "4acb3ddd-8cbc-49df-9625-3ccdd7d0a758"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), R.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("OnReady"), e = n.callContext(e), R.Flow.executeAsyncFlow(function() {
                            return n.setModalId$Action(l.getId("SideModal"), e)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return R.Logger.startActiveSpan("OnReady__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "4acb3ddd-8cbc-49df-9625-3ccdd7d0a758"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), R.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        get headerLeftButtonAction$Action() {
            return this.hasOwnProperty("_headerLeftButtonAction$Action") || (this._headerLeftButtonAction$Action = function() {
                return Promise.resolve()
            }), this._headerLeftButtonAction$Action
        }
        set headerLeftButtonAction$Action(e) {
            this._headerLeftButtonAction$Action = e
        }
        get secondaryButtonAction$Action() {
            return this.hasOwnProperty("_secondaryButtonAction$Action") || (this._secondaryButtonAction$Action = function() {
                return Promise.resolve()
            }), this._secondaryButtonAction$Action
        }
        set secondaryButtonAction$Action(e) {
            this._secondaryButtonAction$Action = e
        }
        get primaryButtonAction$Action() {
            return this.hasOwnProperty("_primaryButtonAction$Action") || (this._primaryButtonAction$Action = function() {
                return Promise.resolve()
            }), this._primaryButtonAction$Action
        }
        set primaryButtonAction$Action(e) {
            this._primaryButtonAction$Action = e
        }
        get headerRightButtonAction$Action() {
            return this.hasOwnProperty("_headerRightButtonAction$Action") || (this._headerRightButtonAction$Action = function() {
                return Promise.resolve()
            }), this._headerRightButtonAction$Action
        }
        set headerRightButtonAction$Action(e) {
            this._headerRightButtonAction$Action = e
        }
        get setModalId$Action() {
            return this.hasOwnProperty("_setModalId$Action") || (this._setModalId$Action = function() {
                return Promise.resolve()
            }), this._setModalId$Action
        }
        set setModalId$Action(e) {
            this._setModalId$Action = e
        }
        get toggleSidebar$Action() {
            return this.hasOwnProperty("_toggleSidebar$Action") || (this._toggleSidebar$Action = function() {
                return Promise.resolve()
            }), this._toggleSidebar$Action
        }
        set toggleSidebar$Action(e) {
            this._toggleSidebar$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    n = this.model,
                    l = this.idService;
                return r.onReady$Action(e)
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
            return Be.defaultTimeout
        }
    };
    a(t, "ControllerInner");
    let A = t;
    tt = A
}
var tt, nt = new R.Controller.ControllerFactory(tt, ke);
var K = Q(Y());
var rt = {};

function Ae(A, t, s, e) {
    A.Initialized = t.InitializedHandler, A.OnToggle = t.OnToggleHandler
}
a(Ae, "default");
var d = C; {
    let t = class t extends d.Controller.BaseViewController {
        constructor(e, r, n) {
            super(e, r, n, rt);
            var l = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: a(function(o) {
                    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(l._initializedHandler$Action.bind(l, d.DataConversion.JSNodeParamConverter.from(o, d.DataTypes.DataTypes.Text)), l.callContext(), function(h) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onToggleHandler$Action: a(function(o, h) {
                    return o = o === void 0 ? "" : o, h = h === void 0 ? !1 : h, l.executeActionInsideJSNode(l._onToggleHandler$Action.bind(l, d.DataConversion.JSNodeParamConverter.from(o, d.DataTypes.DataTypes.Text), d.DataConversion.JSNodeParamConverter.from(h, d.DataTypes.DataTypes.Boolean)), l.callContext(), function(c) {
                        return {}
                    }, function() {}, "OnToggleHandler")
                }, "onToggleHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onToggleHandler$Action() {
            return this.hasOwnProperty("__onToggleHandler$Action") || (this.__onToggleHandler$Action = function(e, r, n) {
                var l = this.model,
                    o = this.controller,
                    h = this.idService;
                return d.Logger.startActiveSpan("OnToggleHandler", function(c) {
                    return c && (c.setAttribute("code.function", "OnToggleHandler"), c.setAttribute("outsystems.function.key", "510b2b7c-68cc-4da8-b7a6-034d2407c2aa"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OnToggleHandler"), n = o.callContext(n);
                        var _ = new d.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.OnToggleHandler$vars")));
                        return _.value.sidebarIdInLocal = e, _.value.isSidebarOpenInLocal = r, d.Flow.executeAsyncFlow(function() {
                            return o.onToggle$Action(_.value.sidebarIdInLocal, _.value.isSidebarOpenInLocal, n)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__onToggleHandler$Action
        }
        set _onToggleHandler$Action(e) {
            this.__onToggleHandler$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnDestroy", function(o) {
                    o && (o.setAttribute("code.function", "OnDestroy"), o.setAttribute("outsystems.function.key", "6f5d90fa-a1d4-4a3c-9e10-c128e430a035"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnDestroy"), e = n.callContext(e), p.sidebarDestroy$Action(r.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, r) {
                var n = this.model,
                    l = this.controller,
                    o = this.idService;
                return d.Logger.startActiveSpan("InitializedHandler", function(h) {
                    return h && (h.setAttribute("code.function", "InitializedHandler"), h.setAttribute("outsystems.function.key", "74447a0f-577d-41a7-9f0d-139ad9a6a970"), h.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), h.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), h.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        l.ensureControllerAlive("InitializedHandler"), r = l.callContext(r);
                        var c = new d.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.InitializedHandler$vars")));
                        return c.value.sidebarIdInLocal = e, d.Flow.executeAsyncFlow(function() {
                            return l.initialized$Action(c.value.sidebarIdInLocal, r)
                        })
                    }, function() {
                        h && h.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("RegisterCallback", function(o) {
                    o && (o.setAttribute("code.function", "RegisterCallback"), o.setAttribute("outsystems.function.key", "906c4cfb-5d12-4fac-bfe8-12ed6cb7f6d0"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("RegisterCallback"), e = n.callContext(e);
                        var h = new d.DataTypes.VariableHolder;
                        h.value = d.Logger.startActiveSpan("GetCallbackHandlers", function(c) {
                            c && (c.setAttribute("code.function", "GetCallbackHandlers"), c.setAttribute("outsystems.function.key", "16489112-6d1e-42f0-b19a-98486a8f2949"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(Ae, "GetCallbackHandlers", "RegisterCallback", {
                                    Initialized: d.DataConversion.JSNodeParamConverter.to(null, d.DataTypes.DataTypes.Object),
                                    OnToggle: d.DataConversion.JSNodeParamConverter.to(null, d.DataTypes.DataTypes.Object)
                                }, function(_) {
                                    var u = new(n.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.RegisterCallback$getCallbackHandlersJSResult"));
                                    return u.initializedOut = d.DataConversion.JSNodeParamConverter.from(_.Initialized, d.DataTypes.DataTypes.Object), u.onToggleOut = d.DataConversion.JSNodeParamConverter.from(_.OnToggle, d.DataTypes.DataTypes.Object), u
                                }, {
                                    InitializedHandler: n.clientActionProxies.initializedHandler$Action,
                                    OnToggleHandler: n.clientActionProxies.onToggleHandler$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), p.sidebarRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Initialized", h.value.initializedOut, e), p.sidebarRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, "OnToggle", h.value.onToggleOut, e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__registerCallback$Action
        }
        set _registerCallback$Action(e) {
            this.__registerCallback$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnInitialize", function(o) {
                    o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "b7a6efcc-5270-4ea2-af52-d01d2ef558b1"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnInitialize"), e = n.callContext(e);
                        var h = new d.DataTypes.VariableHolder,
                            c = new d.DataTypes.VariableHolder(new d.DataTypes.JSONSerializeOutputType);
                        p.logEvent$Action(U.logType.general, "Going to create Sidebar", e), h.value = p.generateUniqueId$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), r.variables.internalConfigsVar.uniqueIdAttr = h.value.unique_IDOut, r.variables.internalConfigsVar.startsOpenAttr = r.variables.startsOpenIn, r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, r.variables.internalConfigsVar.directionAttr = r.variables.directionIn, r.variables.internalConfigsVar.widthAttr = r.variables.widthIn, r.variables.internalConfigsVar.hasOverlayAttr = r.variables.hasOverlayIn, c.value.jSONOut = d.JSONUtils.serializeToJSON(r.variables.internalConfigsVar, !0, !1), p.sidebarCreate$Action(r.variables.internalConfigsVar.uniqueIdAttr, c.value.jSONOut, e), n._registerCallback$Action(e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "c6021e96-f45c-468e-8681-c1926c06d0ed"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e), p.sidebarInitialize$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), p.logEvent$Action(U.logType.general, "Sidebar created", e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnParametersChanged", function(o) {
                    o && (o.setAttribute("code.function", "OnParametersChanged"), o.setAttribute("outsystems.function.key", "ff0bbc89-1e1f-440d-ad0b-7c2a0cce3350"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnParametersChanged"), e = n.callContext(e), r.variables.internalConfigsVar.startsOpenAttr !== r.variables.startsOpenIn && (r.variables.internalConfigsVar.startsOpenAttr = r.variables.startsOpenIn, p.sidebarChangeBooleanProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "StartsOpen", r.variables.internalConfigsVar.startsOpenAttr, e)), r.variables.internalConfigsVar.directionAttr !== r.variables.directionIn && (r.variables.internalConfigsVar.directionAttr = r.variables.directionIn, p.sidebarChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Direction", r.variables.internalConfigsVar.directionAttr, e)), r.variables.internalConfigsVar.widthAttr !== r.variables.widthIn && (r.variables.internalConfigsVar.widthAttr = r.variables.widthIn, p.sidebarChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Width", r.variables.internalConfigsVar.widthAttr, e)), r.variables.internalConfigsVar.hasOverlayAttr !== r.variables.hasOverlayIn && (r.variables.internalConfigsVar.hasOverlayAttr = r.variables.hasOverlayIn, p.sidebarChangeBooleanProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "HasOverlay", r.variables.internalConfigsVar.hasOverlayAttr, e)), r.variables.internalConfigsVar.extendedClassAttr !== r.variables.extendedClassIn && (r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, p.sidebarChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", r.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onToggleHandler$Action(e, r, n) {
            var l = this.controller;
            return d.Logger.startActiveSpan("OnToggleHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnToggleHandler"), o.setAttribute("outsystems.function.key", "510b2b7c-68cc-4da8-b7a6-034d2407c2aa"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return l.safeExecuteClientAction(l._onToggleHandler$Action, n, e, r)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("OnDestroy__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "6f5d90fa-a1d4-4a3c-9e10-c128e430a035"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, r) {
            var n = this.controller;
            return d.Logger.startActiveSpan("InitializedHandler__proxy", function(l) {
                return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "74447a0f-577d-41a7-9f0d-139ad9a6a970"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._initializedHandler$Action, r, e)
                }, function() {
                    l && l.end()
                })
            }, 0)
        }
        registerCallback$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("RegisterCallback__proxy", function(n) {
                n && (n.setAttribute("code.function", "RegisterCallback"), n.setAttribute("outsystems.function.key", "906c4cfb-5d12-4fac-bfe8-12ed6cb7f6d0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._registerCallback$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("OnInitialize__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "b7a6efcc-5270-4ea2-af52-d01d2ef558b1"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "c6021e96-f45c-468e-8681-c1926c06d0ed"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("OnParametersChanged__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "ff0bbc89-1e1f-440d-ad0b-7c2a0cce3350"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        get onToggle$Action() {
            return this.hasOwnProperty("_onToggle$Action") || (this._onToggle$Action = function() {
                return Promise.resolve()
            }), this._onToggle$Action
        }
        set onToggle$Action(e) {
            this._onToggle$Action = e
        }
        get initialized$Action() {
            return this.hasOwnProperty("_initialized$Action") || (this._initialized$Action = function() {
                return Promise.resolve()
            }), this._initialized$Action
        }
        set initialized$Action(e) {
            this._initialized$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    n = this.model,
                    l = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    n = this.model,
                    l = this.idService;
                return r.onReady$Action(e)
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
                var r = this.controller,
                    n = this.model,
                    l = this.idService;
                return r.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var r = this.controller,
                    n = this.model,
                    l = this.idService;
                return r.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
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
            return p.defaultTimeout
        }
    };
    a(t, "ControllerInner");
    let A = t;
    q = A, q.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.OnToggleHandler$vars", [{
        name: "SidebarId",
        attrName: "sidebarIdInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsSidebarOpen",
        attrName: "isSidebarOpenInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }]), q.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.InitializedHandler$vars", [{
        name: "SidebarId",
        attrName: "sidebarIdInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), q.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.RegisterCallback$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Object,
        defaultValue: a(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnToggle",
        attrName: "onToggleOut",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Object,
        defaultValue: a(function() {
            return null
        }, "defaultValue")
    }])
}
var q, at = new d.Controller.ControllerFactory(q, Ze);
var kt = I.PlaceholderContent,
    Nt = I.IteratorPlaceholderContent,
    H = class H extends w.BaseWebBlock {
        static get displayName() {
            return "Interaction.Sidebar"
        }
        static getAttributes() {
            return {
                codeFunction: "Sidebar",
                functionKey: "8dbd8a4f-a81a-4fe1-9206-f0f7e108babe",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Ke
        }
        get controllerFactory() {
            return at
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                s = this.controller,
                e = this.idService,
                r = s.validationService,
                n = this.widgetsRecordProvider,
                l = s.callContext(),
                o = H.ifWidget,
                h = H.textWidget,
                c = H.asPrimitiveValue,
                _ = H.getTranslation,
                u = this;
            return K.createElement("div", this.getRootNodeProperties(), o(!1, !1, this, function() {
                return []
            }, function() {
                return [K.createElement(Ne, {
                    extendedProperties: {
                        className: "osui-sidebar",
                        name: t.variables.internalConfigsVar.uniqueIdAttr
                    },
                    tag: "aside",
                    _idProps: {
                        service: e,
                        name: "Sidebar"
                    },
                    _widgetRecordProvider: n
                }, K.createElement(J, {
                    align: 0,
                    content: u.props.placeholders.header,
                    style: "osui-sidebar__header ph",
                    _idProps: {
                        service: e,
                        name: "Header"
                    },
                    _widgetRecordProvider: n
                }), K.createElement(J, {
                    align: 0,
                    content: u.props.placeholders.content,
                    style: "osui-sidebar__content ph",
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: n
                }))]
            }))
        }
    };
a(H, "View");
var Ie = H,
    Pe = Ie;
var E = C,
    it = I.PlaceholderContent,
    Yt = I.IteratorPlaceholderContent,
    F = class F extends w.BaseWebBlock {
        static get displayName() {
            return "Common.SideBar"
        }
        static getAttributes() {
            return {
                codeFunction: "SideBar",
                functionKey: "df8824c3-c71f-48cd-80bc-936280695177",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.SideBar.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Pe, B, ge]
        }
        get modelFactory() {
            return Xe
        }
        get controllerFactory() {
            return nt
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                s = this.controller,
                e = this.idService,
                r = s.validationService,
                n = this.widgetsRecordProvider,
                l = s.callContext(),
                o = F.ifWidget,
                h = F.textWidget,
                c = F.asPrimitiveValue,
                _ = F.getTranslation,
                u = this;
            return P.createElement("div", this.getRootNodeProperties(), P.createElement(Pe, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HasOverlay: !0,
                    ExtendedClass: "ph-filter-sidebar",
                    StartsOpen: !1
                },
                events: {
                    _handleError: a(function(i) {
                        s.handleError(i)
                    }, "_handleError"),
                    onToggle$Action: a(function(i, g) {
                        var m = l.clone();
                        s.toggleSidebar$Action(t.variables.isSidebarOpenIn, s.callContext(m))
                    }, "onToggle$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    name: "SideModal",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    header: new it(function() {
                        return [P.createElement(y, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: n
                        }, P.createElement(B, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Title: t.variables.headerInfoIn.titleAttr,
                                _titleInDataFetchStatus: E.Model.calculateDataFetchStatus(t.variables._headerInfoInDataFetchStatus),
                                ShowLeftButton: t.variables.headerInfoIn.showLeftButtonAttr,
                                _showLeftButtonInDataFetchStatus: E.Model.calculateDataFetchStatus(t.variables._headerInfoInDataFetchStatus),
                                CustomRightIcon: t.variables.headerInfoIn.customRightIconAttr,
                                _customRightIconInDataFetchStatus: E.Model.calculateDataFetchStatus(t.variables._headerInfoInDataFetchStatus),
                                ShowRightButton: t.variables.headerInfoIn.showRightButtonAttr,
                                _showRightButtonInDataFetchStatus: E.Model.calculateDataFetchStatus(t.variables._headerInfoInDataFetchStatus)
                            },
                            events: {
                                _handleError: a(function(i) {
                                    s.handleError(i)
                                }, "_handleError"),
                                rightButtonAction$Action: a(function() {
                                    var i = l.clone();
                                    s.headerRightButtonAction$Action(s.callContext(i))
                                }, "rightButtonAction$Action"),
                                leftButtonAction$Action: a(function() {
                                    var i = l.clone();
                                    s.headerLeftButtonAction$Action(s.callContext(i))
                                }, "leftButtonAction$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: n,
                            _dependencies: []
                        }))]
                    }),
                    content: new it(function() {
                        return [P.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: "ph-sidebar-content-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "SidebarContentContainer"
                            },
                            _widgetRecordProvider: n
                        }, P.createElement(J, {
                            align: 0,
                            content: u.props.placeholders.bodyContent,
                            style: t.variables.contentClassNameIn,
                            _idProps: {
                                service: e,
                                name: "BodyContent"
                            },
                            _widgetRecordProvider: n,
                            style_dataFetchStatus: E.Model.calculateDataFetchStatus(t.variables._contentClassNameInDataFetchStatus)
                        })), P.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: "ph-sidebar-sticky-button",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: n
                        }, P.createElement(ge, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShouldHideOnDesktop: t.variables.footerInfoIn.shouldHideOnDesktopAttr,
                                _shouldHideOnDesktopInDataFetchStatus: E.Model.calculateDataFetchStatus(t.variables._footerInfoInDataFetchStatus),
                                SecondaryButtonLabel: t.variables.footerInfoIn.secondaryButtonLabelAttr,
                                _secondaryButtonLabelInDataFetchStatus: E.Model.calculateDataFetchStatus(t.variables._footerInfoInDataFetchStatus),
                                PrimaryButtonLabel: t.variables.footerInfoIn.primaryButtonLabelAttr,
                                _primaryButtonLabelInDataFetchStatus: E.Model.calculateDataFetchStatus(t.variables._footerInfoInDataFetchStatus)
                            },
                            events: {
                                _handleError: a(function(i) {
                                    s.handleError(i)
                                }, "_handleError"),
                                secondaryOnClick$Action: a(function() {
                                    var i = l.clone();
                                    s.secondaryButtonAction$Action(s.callContext(i))
                                }, "secondaryOnClick$Action"),
                                primaryOnClick$Action: a(function() {
                                    var i = l.clone();
                                    s.primaryButtonAction$Action(s.callContext(i))
                                }, "primaryOnClick$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "6",
                                alias: "3"
                            },
                            _widgetRecordProvider: n,
                            _dependencies: []
                        }))]
                    })
                }
            }))
        }
    };
a(F, "View");
var Ee = F,
    De = Ee;
var M = Q(Y());
var O = C,
    Re = class Re extends O.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Label", "labelIn", "Label", !0, !1, O.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", !0, !1, O.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsSelected", "isSelectedIn", "IsSelected", !0, !1, O.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", !0, !1, O.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Icon", "iconIn", "Icon", !0, !1, O.DataTypes.DataTypes.Text, function() {
                return `<svg width="81" height="32" viewBox="0 0 81 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M3.08773 21L0.707734 11.228H1.95373L3.00373 15.932L3.81573 19.586H3.84373L4.75373 15.932L5.98573 11.228H7.32973L8.51973 15.932L9.42973 19.572H9.47173L10.3117 15.932L11.4177 11.228H12.6217L10.1157 21H8.81373L7.53973 16.128L6.64373 12.544H6.61573L5.69173 16.128L4.38973 21H3.08773ZM16.5974 21.168C16.1027 21.168 15.6547 21.0793 15.2534 20.902C14.8614 20.7247 14.5207 20.4727 14.2314 20.146C13.9514 19.81 13.7321 19.4133 13.5734 18.956C13.4241 18.4893 13.3494 17.9667 13.3494 17.388C13.3494 16.8187 13.4241 16.3007 13.5734 15.834C13.7321 15.3673 13.9514 14.9707 14.2314 14.644C14.5207 14.308 14.8614 14.0513 15.2534 13.874C15.6547 13.6967 16.1027 13.608 16.5974 13.608C17.0827 13.608 17.5167 13.6967 17.8994 13.874C18.2821 14.0513 18.6087 14.2987 18.8794 14.616C19.1501 14.924 19.3554 15.2927 19.4954 15.722C19.6447 16.1513 19.7194 16.6227 19.7194 17.136V17.668H14.5254V18.004C14.5254 18.312 14.5721 18.6013 14.6654 18.872C14.7681 19.1333 14.9081 19.362 15.0854 19.558C15.2721 19.754 15.4961 19.908 15.7574 20.02C16.0281 20.132 16.3314 20.188 16.6674 20.188C17.1247 20.188 17.5214 20.0807 17.8574 19.866C18.2027 19.6513 18.4687 19.3433 18.6554 18.942L19.4534 19.516C19.2201 20.0107 18.8561 20.412 18.3614 20.72C17.8667 21.0187 17.2787 21.168 16.5974 21.168ZM16.5974 14.546C16.2894 14.546 16.0094 14.602 15.7574 14.714C15.5054 14.8167 15.2861 14.966 15.0994 15.162C14.9221 15.358 14.7821 15.5913 14.6794 15.862C14.5767 16.1233 14.5254 16.4127 14.5254 16.73V16.828H18.5154V16.674C18.5154 16.03 18.3381 15.5167 17.9834 15.134C17.6381 14.742 17.1761 14.546 16.5974 14.546ZM21.565 10.64H22.685V14.952H22.741C22.9277 14.4947 23.1983 14.1587 23.553 13.944C23.917 13.72 24.351 13.608 24.855 13.608C25.303 13.608 25.709 13.6967 26.073 13.874C26.437 14.0513 26.745 14.3033 26.997 14.63C27.2583 14.9567 27.4543 15.3533 27.585 15.82C27.725 16.2867 27.795 16.8093 27.795 17.388C27.795 17.9667 27.725 18.4893 27.585 18.956C27.4543 19.4227 27.2583 19.8193 26.997 20.146C26.745 20.4727 26.437 20.7247 26.073 20.902C25.709 21.0793 25.303 21.168 24.855 21.168C23.875 21.168 23.1703 20.72 22.741 19.824H22.685V21H21.565V10.64ZM24.547 20.16C25.1817 20.16 25.681 19.964 26.045 19.572C26.409 19.1707 26.591 18.648 26.591 18.004V16.772C26.591 16.128 26.409 15.61 26.045 15.218C25.681 14.8167 25.1817 14.616 24.547 14.616C24.295 14.616 24.0523 14.6533 23.819 14.728C23.595 14.7933 23.399 14.8867 23.231 15.008C23.063 15.1293 22.9277 15.2787 22.825 15.456C22.7317 15.624 22.685 15.806 22.685 16.002V18.69C22.685 18.9233 22.7317 19.1333 22.825 19.32C22.9277 19.4973 23.063 19.6513 23.231 19.782C23.399 19.9033 23.595 19.9967 23.819 20.062C24.0523 20.1273 24.295 20.16 24.547 20.16ZM30.2461 12.082C30.0034 12.082 29.8261 12.026 29.7141 11.914C29.6114 11.7927 29.5601 11.6387 29.5601 11.452V11.27C29.5601 11.0833 29.6114 10.934 29.7141 10.822C29.8261 10.7007 30.0034 10.64 30.2461 10.64C30.4888 10.64 30.6614 10.7007 30.7641 10.822C30.8761 10.934 30.9321 11.0833 30.9321 11.27V11.452C30.9321 11.6387 30.8761 11.7927 30.7641 11.914C30.6614 12.026 30.4888 12.082 30.2461 12.082ZM29.6861 13.776H30.8061V21H29.6861V13.776ZM33.1861 21V13.776H34.3061V14.952H34.3621C34.5394 14.5413 34.7868 14.2147 35.1041 13.972C35.4308 13.7293 35.8648 13.608 36.4061 13.608C37.1528 13.608 37.7408 13.8507 38.1701 14.336C38.6088 14.812 38.8281 15.4887 38.8281 16.366V21H37.7081V16.562C37.7081 15.2647 37.1621 14.616 36.0701 14.616C35.8461 14.616 35.6268 14.644 35.4121 14.7C35.2068 14.756 35.0201 14.84 34.8521 14.952C34.6841 15.064 34.5488 15.2087 34.4461 15.386C34.3528 15.554 34.3061 15.7547 34.3061 15.988V21H33.1861ZM46.3931 21C45.9731 21 45.6698 20.888 45.4831 20.664C45.3058 20.44 45.1938 20.16 45.1471 19.824H45.0771C44.9185 20.272 44.6571 20.608 44.2931 20.832C43.9291 21.056 43.4951 21.168 42.9911 21.168C42.2258 21.168 41.6285 20.972 41.1991 20.58C40.7791 20.188 40.5691 19.656 40.5691 18.984C40.5691 18.3027 40.8165 17.78 41.3111 17.416C41.8151 17.052 42.5945 16.87 43.6491 16.87H45.0771V16.156C45.0771 15.6427 44.9371 15.2507 44.6571 14.98C44.3771 14.7093 43.9478 14.574 43.3691 14.574C42.9305 14.574 42.5618 14.672 42.2631 14.868C41.9738 15.064 41.7311 15.3253 41.5351 15.652L40.8631 15.022C41.0591 14.63 41.3718 14.2987 41.8011 14.028C42.2305 13.748 42.7718 13.608 43.4251 13.608C44.3025 13.608 44.9838 13.8227 45.4691 14.252C45.9545 14.6813 46.1971 15.2787 46.1971 16.044V20.02H47.0231V21H46.3931ZM43.1731 20.216C43.4531 20.216 43.7098 20.1833 43.9431 20.118C44.1765 20.0527 44.3771 19.9593 44.5451 19.838C44.7131 19.7167 44.8438 19.5767 44.9371 19.418C45.0305 19.2593 45.0771 19.0867 45.0771 18.9V17.71H43.5931C42.9491 17.71 42.4778 17.8033 42.1791 17.99C41.8898 18.1767 41.7451 18.4473 41.7451 18.802V19.096C41.7451 19.4507 41.8711 19.726 42.1231 19.922C42.3845 20.118 42.7345 20.216 43.1731 20.216ZM48.6216 21V13.776H49.7416V15.106H49.8116C49.9423 14.7607 50.1756 14.4527 50.5116 14.182C50.8476 13.9113 51.3096 13.776 51.8976 13.776H52.3316V14.896H51.6736C51.067 14.896 50.591 15.0127 50.2456 15.246C49.9096 15.47 49.7416 15.7547 49.7416 16.1V21H48.6216Z" fill="white"/>\r
<path d="M71.9883 13.9258L69.6445 16.2695L71.9688 18.5938C72.1641 18.7695 72.1641 19.0625 71.9688 19.2383C71.793 19.4336 71.5 19.4336 71.3242 19.2383L68.9805 16.9141L66.6562 19.2383C66.4805 19.4336 66.1875 19.4336 66.0117 19.2383C65.8164 19.0625 65.8164 18.7695 66.0117 18.5742L68.3359 16.25L66.0117 13.9258C65.8164 13.75 65.8164 13.457 66.0117 13.2617C66.1875 13.0859 66.4805 13.0859 66.6758 13.2617L69 15.6055L71.3242 13.2812C71.5 13.0859 71.793 13.0859 71.9883 13.2812C72.1641 13.457 72.1641 13.75 71.9883 13.9258Z" fill="white"/>\r
</svg>`
            }, !1), this.attr("_iconInDataFetchStatus", "_iconInDataFetchStatus", "_iconInDataFetchStatus", !0, !1, O.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(O.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Re, "VariablesRecord");
var ae = Re;
ae.init();
var He = class He extends O.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(He, "WidgetsRecord");
var Te = He,
    N = class N extends O.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ae
        }
        static getWidgetsRecordConstructor() {
            return Te
        }
        static get hasValidationWidgets() {
            return N._hasValidationWidgetsValue === void 0 && (N._hasValidationWidgetsValue = void 0), N._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Label" in t && (this.variables.labelIn = t.Label, "_labelInDataFetchStatus" in t && (this.variables._labelInDataFetchStatus = t._labelInDataFetchStatus)), "IsSelected" in t && (this.variables.isSelectedIn = t.IsSelected, "_isSelectedInDataFetchStatus" in t && (this.variables._isSelectedInDataFetchStatus = t._isSelectedInDataFetchStatus)), "Icon" in t && (this.variables.iconIn = t.Icon, "_iconInDataFetchStatus" in t && (this.variables._iconInDataFetchStatus = t._iconInDataFetchStatus))
        }
    };
a(N, "Model");
var ie = N;
ie._hasValidationWidgetsValue = void 0;
var st = new O.Model.ModelFactory(ie);
var lt = C; {
    let t = class t extends lt.Controller.BaseViewController {
        constructor(e, r, n) {
            super(e, r, n);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onClickIcon$Action() {
            return this.hasOwnProperty("_onClickIcon$Action") || (this._onClickIcon$Action = function() {
                return Promise.resolve()
            }), this._onClickIcon$Action
        }
        set onClickIcon$Action(e) {
            this._onClickIcon$Action = e
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
            return Ge.defaultTimeout
        }
    };
    a(t, "ControllerInner");
    let A = t;
    ct = A
}
var ct, dt = new lt.Controller.ControllerFactory(ct, Je);
var Fe = C,
    hn = I.PlaceholderContent,
    mn = I.IteratorPlaceholderContent,
    x = class x extends w.BaseWebBlock {
        static get displayName() {
            return "Chip.Chip"
        }
        static getAttributes() {
            return {
                codeFunction: "Chip",
                functionKey: "e63764ed-7495-4a73-89de-3babcd0528b1",
                functionOwnerName: "CustomComponentsOfficial",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponentsOfficial.Chip.Chip.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [L]
        }
        get modelFactory() {
            return st
        }
        get controllerFactory() {
            return dt
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                s = this.controller,
                e = this.idService,
                r = s.validationService,
                n = this.widgetsRecordProvider,
                l = s.callContext(),
                o = x.ifWidget,
                h = x.textWidget,
                c = x.asPrimitiveValue,
                _ = x.getTranslation,
                u = this;
            return M.createElement("div", this.getRootNodeProperties(), M.createElement(Me, {
                enabled: !0,
                extendedProperties: {
                    "data-state": t.getCachedValue(e.getId("s1RSbThQ7kWB_VUGu_6Lhg.data-state"), function() {
                        return t.variables.isSelectedIn ? "selected" : ""
                    }, function() {
                        return t.variables.isSelectedIn
                    })
                },
                isDefault: !1,
                onClick: a(function() {
                    var i = l.clone();
                    s.onClick$Action(s.callContext(i))
                }, "onClick"),
                style: "deriv-chip",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: n
            }, M.createElement(T, {
                style: "deriv-chip--label",
                value: t.variables.labelIn,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: Fe.Model.calculateDataFetchStatus(t.variables._labelInDataFetchStatus)
            }), o(t.variables.iconIn !== Fe.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [M.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: a(function() {
                            var i = l.clone();
                            s.onClickIcon$Action(s.callContext(i))
                        }, "onClick")
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: n
                }, M.createElement(L, {
                    getOwnerSpan: a(function() {
                        return u.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return u.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: t.variables.iconIn,
                        _sVGCodeInDataFetchStatus: Fe.Model.calculateDataFetchStatus(t.variables._iconInDataFetchStatus)
                    },
                    events: {
                        _handleError: a(function(i) {
                            s.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "3",
                        alias: "1"
                    },
                    _widgetRecordProvider: n,
                    _dependencies: []
                }))]
            }, function() {
                return []
            })))
        }
    };
a(x, "View");
var xe = x,
    W = xe;
var f = C,
    D = I.PlaceholderContent,
    oe = I.IteratorPlaceholderContent,
    V = class V extends w.BaseWebScreen {
        static get displayName() {
            return "Events.AllEvent"
        }
        static getAttributes() {
            return {
                codeFunction: "AllEvent",
                functionKey: "3fa319a3-f0ca-4817-b843-e4df4ce2b2df",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Events.AllEvent.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/PartnersHub.UserScripts.DerivAnalytics.js"]
        }
        static getBlocks() {
            return [ue, ce, ve, X, De, W, B, de, fe, L]
        }
        get modelFactory() {
            return je
        }
        get controllerFactory() {
            return qe
        }
        get title() {
            return w.BaseWebScreen.getTranslation("oxmjP8rwF0i4Q+TfTOKy3w#Title", "AllEvent")
        }
        internalRender() {
            let t = this.model,
                s = this.controller,
                e = this.idService,
                r = s.validationService,
                n = this.widgetsRecordProvider,
                l = s.callContext(),
                o = V.ifWidget,
                h = V.textWidget,
                c = V.asPrimitiveValue,
                _ = V.getTranslation,
                u = this;
            return v.createElement("div", this.getRootNodeProperties(), v.createElement(ue, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    StickyFooter: !0
                },
                events: {
                    _handleError: a(function(i) {
                        s.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    header: new D(function() {
                        return [v.createElement(ce, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(i) {
                                    s.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                onDesktop: new D(function() {
                                    return [v.createElement(ve, {
                                        getOwnerSpan: a(function() {
                                            return u.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: a(function() {
                                            return u.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: a(function(i) {
                                                s.handleError(i)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "2",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    })]
                                }),
                                onTablet: new D(function() {
                                    return [v.createElement(X, {
                                        getOwnerSpan: a(function() {
                                            return u.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: a(function() {
                                            return u.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            CustomRightIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M5 6.75C5 6.34375 5.3125 6 5.75 6H18.25C18.6562 6 19 6.34375 19 6.75C19 7.1875 18.6562 7.5 18.25 7.5H5.75C5.3125 7.5 5 7.1875 5 6.75ZM7 11.75C7 11.3438 7.3125 11 7.75 11H16.25C16.6562 11 17 11.3438 17 11.75C17 12.1875 16.6562 12.5 16.25 12.5H7.75C7.3125 12.5 7 12.1875 7 11.75ZM14 16.75C14 17.1875 13.6562 17.5 13.25 17.5H10.75C10.3125 17.5 10 17.1875 10 16.75C10 16.3438 10.3125 16 10.75 16H13.25C13.6562 16 14 16.3438 14 16.75Z" fill="#101213"/>\r
</svg>`,
                                            Title: f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("wgaot0vCu0ycXS3erNt_Qw#Value.-1578876803.1", "Upcoming events"),
                                            ShowRightButton: $.getisEventFilterEnabledFF(),
                                            ShowLeftButton: !0
                                        },
                                        events: {
                                            _handleError: a(function(i) {
                                                s.handleError(i)
                                            }, "_handleError"),
                                            onClickLeftButton$Action: a(function() {
                                                var i = l.clone();
                                                s.titleBlockBackButtonAction$Action(s.callContext(i))
                                            }, "onClickLeftButton$Action"),
                                            onClickRightButton$Action: a(function() {
                                                var i = l.clone();
                                                s.toggleSidebar$Action(s.callContext(i))
                                            }, "onClickRightButton$Action")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "3",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    })]
                                }),
                                onPhone: new D(function() {
                                    return [v.createElement(X, {
                                        getOwnerSpan: a(function() {
                                            return u.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: a(function() {
                                            return u.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            CustomRightIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M5 6.75C5 6.34375 5.3125 6 5.75 6H18.25C18.6562 6 19 6.34375 19 6.75C19 7.1875 18.6562 7.5 18.25 7.5H5.75C5.3125 7.5 5 7.1875 5 6.75ZM7 11.75C7 11.3438 7.3125 11 7.75 11H16.25C16.6562 11 17 11.3438 17 11.75C17 12.1875 16.6562 12.5 16.25 12.5H7.75C7.3125 12.5 7 12.1875 7 11.75ZM14 16.75C14 17.1875 13.6562 17.5 13.25 17.5H10.75C10.3125 17.5 10 17.1875 10 16.75C10 16.3438 10.3125 16 10.75 16H13.25C13.6562 16 14 16.3438 14 16.75Z" fill="#101213"/>\r
</svg>`,
                                            ShowRightButton: $.getisEventFilterEnabledFF(),
                                            ShowLeftButton: !0,
                                            Title: f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("cCoC_ME_P0+J45JhXbasig#Value.-1578876803.1", "Upcoming events")
                                        },
                                        events: {
                                            _handleError: a(function(i) {
                                                s.handleError(i)
                                            }, "_handleError"),
                                            onClickRightButton$Action: a(function() {
                                                var i = l.clone();
                                                s.toggleSidebar$Action(s.callContext(i))
                                            }, "onClickRightButton$Action"),
                                            onClickLeftButton$Action: a(function() {
                                                var i = l.clone();
                                                s.titleBlockBackButtonAction$Action(s.callContext(i))
                                            }, "onClickLeftButton$Action")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "4",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    })]
                                })
                            },
                            _dependencies: [c($.getisEventFilterEnabledFF())]
                        })]
                    }),
                    content: new D(function() {
                        return [v.createElement(De, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ContentClassName: "display-flex flex-direction-column gap-base",
                                IsSidebarOpen: t.variables.isSidebarOpenVar,
                                FooterInfo: t.getCachedValue(e.getId("qeg9S5yd3ESRklnFRgQlCw.FooterInfo"), function() {
                                    return function() {
                                        var i = new z;
                                        return i.primaryButtonLabelAttr = f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("hZKHeCrb5kO6XgVCy5Alsw#Value.63476558.1", "Apply"), i.secondaryButtonLabelAttr = f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("FJW9KzylqEyYE77wl8bgvg#Value.731508014.1", "Clear all"), i.shouldHideOnDesktopAttr = !1, i
                                    }()
                                }),
                                HeaderInfo: t.getCachedValue(e.getId("qeg9S5yd3ESRklnFRgQlCw.HeaderInfo"), function() {
                                    return function() {
                                        var i = new Z;
                                        return i.showLeftButtonAttr = !1, i.showRightButtonAttr = !0, i.titleAttr = f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("BFCrdmMOWUu+MucgMYz8pQ#Value.810105819.1", "Filters"), i
                                    }()
                                })
                            },
                            events: {
                                _handleError: a(function(i) {
                                    s.handleError(i)
                                }, "_handleError"),
                                setModalId$Action: a(function(i) {
                                    var g = l.clone();
                                    s.setModalId$Action(i, s.callContext(g))
                                }, "setModalId$Action"),
                                primaryButtonAction$Action: a(function() {
                                    var i = l.clone();
                                    s.onClickApplyFilter$Action(s.callContext(i))
                                }, "primaryButtonAction$Action"),
                                toggleSidebar$Action: a(function(i) {
                                    var g = l.clone();
                                    s.toggleSidebarVariable$Action(s.callContext(g))
                                }, "toggleSidebar$Action"),
                                headerRightButtonAction$Action: a(function() {
                                    var i = l.clone();
                                    s.toggleSidebar$Action(s.callContext(i))
                                }, "headerRightButtonAction$Action"),
                                secondaryButtonAction$Action: a(function() {
                                    var i = l.clone();
                                    s.onClickClearAllFilter$Action(s.callContext(i))
                                }, "secondaryButtonAction$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "5",
                                alias: "6"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                bodyContent: new D(function() {
                                    return [v.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column gap-s",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: n
                                    }, v.createElement(j, {
                                        style: "ph-section-16-title",
                                        text: [h(_("QYLNgluUC0Wf3Wk1crkpEA#Value", "Event"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: n
                                    }), v.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex gap-s padding-y-s overflow-horizontal",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: n
                                    }, v.createElement(W, {
                                        getOwnerSpan: a(function() {
                                            return u.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: a(function() {
                                            return u.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Icon: "",
                                            Label: f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("ruCi9zgpbkKkkM9kPaAqNQ#Value.65921.1", "All"),
                                            IsSelected: t.getCachedValue(e.getId("2KVFxVMBGkKXWOGZw0AMAw.IsSelected"), function() {
                                                return t.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr.equals(f.BuiltinFunctions.integerToLongInteger(f.BuiltinFunctions.nullIdentifier()))
                                            }, function() {
                                                return t.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr
                                            })
                                        },
                                        events: {
                                            _handleError: a(function(i) {
                                                s.handleError(i)
                                            }, "_handleError"),
                                            onClick$Action: a(function() {
                                                var i = l.clone();
                                                s.eventTypeOnClick$Action(f.BuiltinFunctions.integerToLongInteger(0), s.callContext(i))
                                            }, "onClick$Action")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "9",
                                            alias: "7"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    }), v.createElement(G, {
                                        animateItems: !0,
                                        extendedProperties: {
                                            "disable-virtualization": "True"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: 0,
                                        source: t.variables.getEventTypesAggr.listOut,
                                        style: "display-flex gap-s",
                                        tag: "div",
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: n,
                                        source_dataFetchStatus: f.Model.calculateDataFetchStatus(t.variables.getEventTypesAggr.dataFetchStatusAttr),
                                        placeholders: {
                                            content: new oe(function(i, g) {
                                                return [v.createElement(W, {
                                                    getOwnerSpan: a(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        IsSelected: t.variables.getEventTypesAggr.listOut.getCurrent(g.iterationContext).selectedAttr === !0,
                                                        _isSelectedInDataFetchStatus: f.Model.calculateDataFetchStatus(t.variables.getEventTypesAggr.dataFetchStatusAttr),
                                                        Label: t.variables.getEventTypesAggr.listOut.getCurrent(g.iterationContext).eventTypeAttr.typeAttr,
                                                        _labelInDataFetchStatus: f.Model.calculateDataFetchStatus(t.variables.getEventTypesAggr.dataFetchStatusAttr),
                                                        Icon: ""
                                                    },
                                                    events: {
                                                        _handleError: a(function(m) {
                                                            s.handleError(m)
                                                        }, "_handleError"),
                                                        onClick$Action: a(function() {
                                                            var m = g.clone();
                                                            s.eventTypeOnClick$Action(t.variables.getEventTypesAggr.listOut.getCurrent(g.iterationContext).eventTypeAttr.idAttr, s.callContext(m))
                                                        }, "onClick$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: r
                                                    },
                                                    _idProps: {
                                                        service: i,
                                                        uuid: "11",
                                                        alias: "8"
                                                    },
                                                    _widgetRecordProvider: n,
                                                    _dependencies: []
                                                })]
                                            }, l, e, "1")
                                        },
                                        _dependencies: [c(t.variables.getEventTypesAggr.dataFetchStatusAttr)]
                                    }))), v.createElement(j, {
                                        style: "ph-section-16-title",
                                        text: [h(_("Ef6SBOOtbUCliUZFBKhV9Q#Value", "Language"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: n
                                    }), v.createElement(G, {
                                        animateItems: !0,
                                        extendedProperties: {
                                            "disable-virtualization": "True"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: 0,
                                        source: t.variables.getLanguagesByEnabledAggr.listOut,
                                        style: "display-flex flex-direction-column gap-m",
                                        tag: "div",
                                        _idProps: {
                                            service: e,
                                            name: "LanguageList"
                                        },
                                        _widgetRecordProvider: n,
                                        source_dataFetchStatus: f.Model.calculateDataFetchStatus(t.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr),
                                        placeholders: {
                                            content: new oe(function(i, g) {
                                                return [v.createElement(y, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex justify-content-space-between align-items-center",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: i,
                                                        name: "EachLanguageContainer"
                                                    },
                                                    _widgetRecordProvider: n,
                                                    _dependencies: [c(t.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), c(t.variables.getLanguagesByEnabledAggr.listOut.getCurrent(g.iterationContext).selectedAttr), c(t.variables.getLanguagesByEnabledAggr.listOut.getCurrent(g.iterationContext).languagesAttr.nameAttr)]
                                                }, v.createElement(ze, {
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    style: "cursor-pointer",
                                                    targetWidget: "LanguageCheckbox",
                                                    _idProps: {
                                                        service: i,
                                                        uuid: "15"
                                                    },
                                                    _widgetRecordProvider: n
                                                }, v.createElement(T, {
                                                    style: "ph-text",
                                                    value: t.variables.getLanguagesByEnabledAggr.listOut.getCurrent(g.iterationContext).languagesAttr.nameAttr,
                                                    _idProps: {
                                                        service: i,
                                                        name: "Language"
                                                    },
                                                    _widgetRecordProvider: n,
                                                    value_dataFetchStatus: f.Model.calculateDataFetchStatus(t.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)
                                                })), v.createElement(y, {
                                                    align: 0,
                                                    animate: !1,
                                                    extendedProperties: {
                                                        style: "height: 24px;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSInline",
                                                        width: "24px"
                                                    },
                                                    visible: !0,
                                                    _idProps: {
                                                        service: i,
                                                        uuid: "17"
                                                    },
                                                    _widgetRecordProvider: n
                                                }, v.createElement(We, {
                                                    _validationProps: {
                                                        validationService: r
                                                    },
                                                    enabled: !0,
                                                    extendedProperties: {
                                                        "disable-virtualization": "True"
                                                    },
                                                    style: "ph-checkbox",
                                                    variable: t.createVariable(f.DataTypes.DataTypes.Boolean, t.variables.getLanguagesByEnabledAggr.listOut.getCurrent(g.iterationContext).selectedAttr, function(m) {
                                                        t.variables.getLanguagesByEnabledAggr.listOut.getCurrent(g.iterationContext).selectedAttr = m
                                                    }),
                                                    _idProps: {
                                                        service: i,
                                                        name: "LanguageCheckbox"
                                                    },
                                                    _widgetRecordProvider: n,
                                                    variable_dataFetchStatus: f.Model.calculateDataFetchStatus(t.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)
                                                })))]
                                            }, l, e, "2")
                                        },
                                        _dependencies: [c(t.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)]
                                    })]
                                })
                            },
                            _dependencies: [c(t.variables.getLanguagesByEnabledAggr.listOut), c(t.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), c(t.variables.getEventTypesAggr.dataFetchStatusAttr), c(t.variables.getEventTypesAggr.listOut), c(t.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr)]
                        }), v.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-m",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: n
                        }, v.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: "ph-event-details-header-block",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: n
                        }, v.createElement(B, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                CustomRightIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M5 6.75C5 6.34375 5.3125 6 5.75 6H18.25C18.6562 6 19 6.34375 19 6.75C19 7.1875 18.6562 7.5 18.25 7.5H5.75C5.3125 7.5 5 7.1875 5 6.75ZM7 11.75C7 11.3438 7.3125 11 7.75 11H16.25C16.6562 11 17 11.3438 17 11.75C17 12.1875 16.6562 12.5 16.25 12.5H7.75C7.3125 12.5 7 12.1875 7 11.75ZM14 16.75C14 17.1875 13.6562 17.5 13.25 17.5H10.75C10.3125 17.5 10 17.1875 10 16.75C10 16.3438 10.3125 16 10.75 16H13.25C13.6562 16 14 16.3438 14 16.75Z" fill="#101213"/>\r
</svg>`,
                                Title: f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("muwNnIDZBke8+ajTN9r64w#Value.-1578876803.1", "Upcoming events"),
                                ShowRightButton: $.getisEventFilterEnabledFF(),
                                ShowLeftButton: !0
                            },
                            events: {
                                _handleError: a(function(i) {
                                    s.handleError(i)
                                }, "_handleError"),
                                leftButtonAction$Action: a(function() {
                                    var i = l.clone();
                                    s.titleBlockBackButtonAction$Action(s.callContext(i))
                                }, "leftButtonAction$Action"),
                                rightButtonAction$Action: a(function() {
                                    var i = l.clone();
                                    s.toggleSidebar$Action(s.callContext(i))
                                }, "rightButtonAction$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "21",
                                alias: "9"
                            },
                            _widgetRecordProvider: n,
                            _dependencies: []
                        })), v.createElement(de, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: t.variables.isLoadingVar
                            },
                            events: {
                                _handleError: a(function(i) {
                                    s.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "22",
                                alias: "10"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new D(function() {
                                    return [v.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        style: t.getCachedValue(e.getId("YCHQlrTWY0SfAGEZKURWEg.Style"), function() {
                                            return "display-flex gap-s " + (t.variables.eventFiltersVar.eventLanguagesFilterAttr.length > 0 || t.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeLabelAttr !== f.BuiltinFunctions.nullTextIdentifier() ? "ph-chip-container" : "")
                                        }, function() {
                                            return t.variables.eventFiltersVar.eventLanguagesFilterAttr.length
                                        }, function() {
                                            return t.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeLabelAttr
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: n
                                    }, o(t.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeLabelAttr !== f.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                                        return [v.createElement(W, {
                                            getOwnerSpan: a(function() {
                                                return u.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return u.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Label: t.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeLabelAttr,
                                                IsSelected: !0,
                                                Icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M14.9883 9.92578L12.6445 12.2695L14.9688 14.5938C15.1641 14.7695 15.1641 15.0625 14.9688 15.2383C14.793 15.4336 14.5 15.4336 14.3242 15.2383L11.9805 12.9141L9.65625 15.2383C9.48047 15.4336 9.1875 15.4336 9.01172 15.2383C8.81641 15.0625 8.81641 14.7695 9.01172 14.5742L11.3359 12.25L9.01172 9.92578C8.81641 9.75 8.81641 9.45703 9.01172 9.26172C9.1875 9.08594 9.48047 9.08594 9.67578 9.26172L12 11.6055L14.3242 9.28125C14.5 9.08594 14.793 9.08594 14.9883 9.28125C15.1641 9.45703 15.1641 9.75 14.9883 9.92578Z" fill="white"/>\r
</svg>`
                                            },
                                            events: {
                                                _handleError: a(function(i) {
                                                    s.handleError(i)
                                                }, "_handleError"),
                                                onClickIcon$Action: a(function() {
                                                    var i = l.clone();
                                                    s.chipOnClick$Action(-1, t.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr, s.callContext(i))
                                                }, "onClickIcon$Action")
                                            },
                                            _validationProps: {
                                                validationService: r
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "24",
                                                alias: "11"
                                            },
                                            _widgetRecordProvider: n,
                                            _dependencies: []
                                        })]
                                    }, function() {
                                        return []
                                    }), v.createElement(G, {
                                        animateItems: !0,
                                        extendedProperties: {
                                            "disable-virtualization": "True"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: 0,
                                        source: t.variables.eventFiltersVar.eventLanguagesFilterAttr,
                                        style: "display-flex gap-s",
                                        tag: "div",
                                        _idProps: {
                                            service: e,
                                            uuid: "25"
                                        },
                                        _widgetRecordProvider: n,
                                        placeholders: {
                                            content: new oe(function(i, g) {
                                                return [v.createElement(W, {
                                                    getOwnerSpan: a(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Label: t.variables.eventFiltersVar.eventLanguagesFilterAttr.getCurrent(g.iterationContext).languagesLabelAttr,
                                                        IsSelected: !0,
                                                        Icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M14.9883 9.92578L12.6445 12.2695L14.9688 14.5938C15.1641 14.7695 15.1641 15.0625 14.9688 15.2383C14.793 15.4336 14.5 15.4336 14.3242 15.2383L11.9805 12.9141L9.65625 15.2383C9.48047 15.4336 9.1875 15.4336 9.01172 15.2383C8.81641 15.0625 8.81641 14.7695 9.01172 14.5742L11.3359 12.25L9.01172 9.92578C8.81641 9.75 8.81641 9.45703 9.01172 9.26172C9.1875 9.08594 9.48047 9.08594 9.67578 9.26172L12 11.6055L14.3242 9.28125C14.5 9.08594 14.793 9.08594 14.9883 9.28125C15.1641 9.45703 15.1641 9.75 14.9883 9.92578Z" fill="white"/>\r
</svg>`
                                                    },
                                                    events: {
                                                        _handleError: a(function(m) {
                                                            s.handleError(m)
                                                        }, "_handleError"),
                                                        onClickIcon$Action: a(function() {
                                                            var m = g.clone();
                                                            s.chipOnClick$Action(t.variables.eventFiltersVar.eventLanguagesFilterAttr.getCurrentRowNumber(g.iterationContext), f.BuiltinFunctions.integerToLongInteger(t.variables.eventFiltersVar.eventLanguagesFilterAttr.getCurrent(g.iterationContext).languagesIdAttr), s.callContext(m))
                                                        }, "onClickIcon$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: r
                                                    },
                                                    _idProps: {
                                                        service: i,
                                                        uuid: "26",
                                                        alias: "12"
                                                    },
                                                    _widgetRecordProvider: n,
                                                    _dependencies: []
                                                })]
                                            }, l, e, "3")
                                        },
                                        _dependencies: []
                                    })), o(t.variables.eventsDataVar.isEmpty, !1, this, function() {
                                        return [v.createElement(y, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column gap-m align-items-center",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "27"
                                            },
                                            _widgetRecordProvider: n
                                        }, v.createElement(Ue, {
                                            gridProperties: {
                                                width: "128px"
                                            },
                                            image: f.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.no_event.png"),
                                            type: 0,
                                            _idProps: {
                                                service: e,
                                                uuid: "28"
                                            },
                                            _widgetRecordProvider: n
                                        }), v.createElement(y, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column gap-s text-align-center",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "29"
                                            },
                                            _widgetRecordProvider: n
                                        }, v.createElement(j, {
                                            style: "ph-section-title",
                                            text: [h(_("TZKga9LMmkq7GK8I6wdgSw#Value", "No events available"))],
                                            _idProps: {
                                                service: e,
                                                uuid: "30"
                                            },
                                            _widgetRecordProvider: n
                                        }), v.createElement(j, {
                                            style: "ph-text",
                                            text: [h(_("a2hvOCl6Z0O7rHmt6Gaz+w#Value", "Try different filters or check back later. "))],
                                            _idProps: {
                                                service: e,
                                                uuid: "31"
                                            },
                                            _widgetRecordProvider: n
                                        })))]
                                    }, function() {
                                        return [v.createElement(G, {
                                            animateItems: !0,
                                            extendedProperties: {
                                                "disable-virtualization": "True"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: 0,
                                            source: t.variables.eventsDataVar,
                                            style: "ph-event-list ph-event-grid-three",
                                            tag: "div",
                                            _idProps: {
                                                service: e,
                                                name: "EventList"
                                            },
                                            _widgetRecordProvider: n,
                                            placeholders: {
                                                content: new oe(function(i, g) {
                                                    return [v.createElement(y, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedEvents: {
                                                            onClick: a(function() {
                                                                var m = g.clone();
                                                                s.onClickEvent$Action(t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.idAttr, s.callContext(m))
                                                            }, "onClick")
                                                        },
                                                        style: "ph-event-card-container",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "33"
                                                        },
                                                        _widgetRecordProvider: n,
                                                        _dependencies: [c(t.variables.eventsDataVar.getCurrent(g.iterationContext).countryAttr.nameAttr), c(t.variables.eventsDataVar.getCurrent(g.iterationContext).countryAttr.timeZoneAttr), c(t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.dateTimeAttr), c(t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.titleAttr), c(t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.mobileImageAttr), c(t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.idAttr)]
                                                    }, v.createElement(fe, {
                                                        getOwnerSpan: a(function() {
                                                            return u.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: a(function() {
                                                            return u.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            EventDetails: t.getCachedValue(i.getId("nuSJHY9TT0+I_iqZQjubhw.EventDetails"), function() {
                                                                return function() {
                                                                    var m = new Le;
                                                                    return m.idAttr = t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.idAttr, m.fileNamesAttr = function() {
                                                                        var se = new $e;
                                                                        return se.desktopImageNameAttr = "", se.mobileImageNameAttr = t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.mobileImageAttr, se
                                                                    }(), m
                                                                }()
                                                            }, function() {
                                                                return t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.idAttr
                                                            }, function() {
                                                                return t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.mobileImageAttr
                                                            })
                                                        },
                                                        events: {
                                                            _handleError: a(function(m) {
                                                                s.handleError(m)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: r
                                                        },
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "34",
                                                            alias: "13"
                                                        },
                                                        _widgetRecordProvider: n,
                                                        _dependencies: []
                                                    }), v.createElement(y, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "ph-event-card-info padding-base",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "35"
                                                        },
                                                        _widgetRecordProvider: n
                                                    }, v.createElement(y, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column ph-event-card-details-container",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "36"
                                                        },
                                                        _widgetRecordProvider: n
                                                    }, v.createElement(T, {
                                                        extendedProperties: {
                                                            style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 700; line-height: 22px; margin-bottom: 4px;"
                                                        },
                                                        value: t.getCachedValue(i.getId("64E3XNFSzUKPaUNvGYXeAw.Value"), function() {
                                                            return t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.titleAttr + ", " + f.BuiltinFunctions.year(f.BuiltinFunctions.textToDateTime(t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.dateTimeAttr)).toString()
                                                        }, function() {
                                                            return t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.titleAttr
                                                        }, function() {
                                                            return t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.dateTimeAttr
                                                        }),
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "37"
                                                        },
                                                        _widgetRecordProvider: n
                                                    }), v.createElement(T, {
                                                        extendedProperties: {
                                                            style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                                        },
                                                        gridProperties: {
                                                            marginLeft: "0"
                                                        },
                                                        value: t.getCachedValue(i.getId("pHQUBliMLU+mAmr4XkLYLw.Value"), function() {
                                                            return f.BuiltinFunctions.formatDateTime(f.BuiltinFunctions.textToDateTime(t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.dateTimeAttr), "d MMM, HH:mm") + " " + t.variables.eventsDataVar.getCurrent(g.iterationContext).countryAttr.timeZoneAttr
                                                        }, function() {
                                                            return t.variables.eventsDataVar.getCurrent(g.iterationContext).eventAttr.dateTimeAttr
                                                        }, function() {
                                                            return t.variables.eventsDataVar.getCurrent(g.iterationContext).countryAttr.timeZoneAttr
                                                        }),
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "38"
                                                        },
                                                        _widgetRecordProvider: n
                                                    }), v.createElement(T, {
                                                        extendedProperties: {
                                                            style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                                        },
                                                        gridProperties: {
                                                            marginLeft: "0"
                                                        },
                                                        value: t.variables.eventsDataVar.getCurrent(g.iterationContext).countryAttr.nameAttr,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "39"
                                                        },
                                                        _widgetRecordProvider: n
                                                    })), v.createElement(L, {
                                                        getOwnerSpan: a(function() {
                                                            return u.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: a(function() {
                                                            return u.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            SVGCode: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.34375 6.65625C7.53125 6.84375 7.53125 7.1875 7.34375 7.375L1.34375 13.375C1.15625 13.5625 0.8125 13.5625 0.625 13.375C0.4375 13.1875 0.4375 12.8438 0.625 12.6562L6.28125 7L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7.34375 6.65625Z" fill="#101213"/>\r
</svg>`
                                                        },
                                                        events: {
                                                            _handleError: a(function(m) {
                                                                s.handleError(m)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: r
                                                        },
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "40",
                                                            alias: "14"
                                                        },
                                                        _widgetRecordProvider: n,
                                                        _dependencies: []
                                                    })))]
                                                }, l, e, "4")
                                            },
                                            _dependencies: []
                                        })]
                                    })]
                                })
                            },
                            _dependencies: [c(t.variables.eventsDataVar), c(t.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr), c(t.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeLabelAttr), c(t.variables.eventFiltersVar.eventLanguagesFilterAttr)]
                        }))]
                    }),
                    footer: D.Empty
                },
                _dependencies: [c(t.variables.eventsDataVar), c(t.variables.isLoadingVar), c(t.variables.getLanguagesByEnabledAggr.listOut), c(t.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), c(t.variables.getEventTypesAggr.dataFetchStatusAttr), c(t.variables.getEventTypesAggr.listOut), c(t.variables.eventFiltersVar.eventLanguagesFilterAttr), c(t.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeLabelAttr), c(t.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr), c(t.variables.isSidebarOpenVar), c($.getisEventFilterEnabledFF())]
            }))
        }
    };
a(V, "View");
var Ve = V,
    Ln = Ve;
export {
    Ln as
    default
};