import {
    a as z
} from "./_oschunk-24WIHVSN.js";
import {
    v as V
} from "./_oschunk-O5KC3WOL.js";
import {
    a as L,
    g,
    m as p,
    o as P,
    q as $,
    r as R,
    s as H,
    t as k
} from "./_oschunk-NVHFAAS2.js";
import {
    Aa as S,
    Ga as d,
    la as y
} from "./_oschunk-WCMQG33O.js";
import {
    X as m,
    c as u,
    f as G
} from "./_oschunk-DFKJJKI4.js";
var o = m,
    w = class w extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_configs", "internal_configsVar", "Internal_configs", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("RowItemsDesktop", "rowItemsDesktopIn", "RowItemsDesktop", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 4
            }, !1), this.attr("_rowItemsDesktopInDataFetchStatus", "_rowItemsDesktopInDataFetchStatus", "_rowItemsDesktopInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("RowItemsTablet", "rowItemsTabletIn", "RowItemsTablet", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 3
            }, !1), this.attr("_rowItemsTabletInDataFetchStatus", "_rowItemsTabletInDataFetchStatus", "_rowItemsTabletInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("RowItemsPhone", "rowItemsPhoneIn", "RowItemsPhone", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("_rowItemsPhoneInDataFetchStatus", "_rowItemsPhoneInDataFetchStatus", "_rowItemsPhoneInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ItemsGap", "itemsGapIn", "ItemsGap", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return y.space.base
            }, !1), this.attr("_itemsGapInDataFetchStatus", "_itemsGapInDataFetchStatus", "_itemsGapInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(w, "VariablesRecord");
var b = w;
b.init();
var O = class O extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(O, "WidgetsRecord");
var C = O,
    D = class D extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return b
        }
        static getWidgetsRecordConstructor() {
            return C
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "RowItemsDesktop" in a && (this.variables.rowItemsDesktopIn = a.RowItemsDesktop, "_rowItemsDesktopInDataFetchStatus" in a && (this.variables._rowItemsDesktopInDataFetchStatus = a._rowItemsDesktopInDataFetchStatus)), "RowItemsTablet" in a && (this.variables.rowItemsTabletIn = a.RowItemsTablet, "_rowItemsTabletInDataFetchStatus" in a && (this.variables._rowItemsTabletInDataFetchStatus = a._rowItemsTabletInDataFetchStatus)), "RowItemsPhone" in a && (this.variables.rowItemsPhoneIn = a.RowItemsPhone, "_rowItemsPhoneInDataFetchStatus" in a && (this.variables._rowItemsPhoneInDataFetchStatus = a._rowItemsPhoneInDataFetchStatus)), "ItemsGap" in a && (this.variables.itemsGapIn = a.ItemsGap, "_itemsGapInDataFetchStatus" in a && (this.variables._itemsGapInDataFetchStatus = a._itemsGapInDataFetchStatus)), "ExtendedClass" in a && (this.variables.extendedClassIn = a.ExtendedClass, "_extendedClassInDataFetchStatus" in a && (this.variables._extendedClassInDataFetchStatus = a._extendedClassInDataFetchStatus))
        }
    };
u(D, "Model");
var I = D;
I._hasValidationWidgetsValue = void 0;
var N = new o.Model.ModelFactory(I);
var T = G(L());
var F = {};

function E(f, a, h, t) {
    f.Initialized = a.InitializedHandler
}
u(E, "default");
var i = m; {
    let a = class a extends i.Controller.BaseViewController {
        constructor(t, e, r) {
            super(t, e, r, F);
            var s = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: u(function(n) {
                    return n = n === void 0 ? "" : n, s.executeActionInsideJSNode(s._initializedHandler$Action.bind(s, i.DataConversion.JSNodeParamConverter.from(n, i.DataTypes.DataTypes.Text)), s.callContext(), function(l) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "5459d23f-0390-4502-84fa-01a15f551924"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnDestroy"), t = r.callContext(t), d.galleryDestroy$Action(e.variables.internal_configsVar.uniqueIdAttr, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "993aa900-c093-4af7-9b2f-047e319926a0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), t = r.callContext(t), d.galleryInitialize$Action(e.variables.internal_configsVar.uniqueIdAttr, t), d.logEvent$Action(y.logType.general, "Gallery created", t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "9a476224-82c4-4d0f-9d2f-18e89e77161b"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnParametersChanged"), t = r.callContext(t), e.variables.rowItemsPhoneIn.toString() !== e.variables.internal_configsVar.rowItemsPhoneAttr && (e.variables.internal_configsVar.rowItemsPhoneAttr = e.variables.rowItemsPhoneIn.toString(), d.galleryChangeTextProperty$Action(e.variables.internal_configsVar.uniqueIdAttr, "RowItemsPhone", e.variables.internal_configsVar.rowItemsPhoneAttr, t)), e.variables.rowItemsTabletIn.toString() !== e.variables.internal_configsVar.rowItemsTabletAttr && (e.variables.internal_configsVar.rowItemsTabletAttr = e.variables.rowItemsTabletIn.toString(), d.galleryChangeTextProperty$Action(e.variables.internal_configsVar.uniqueIdAttr, "RowItemsTablet", e.variables.internal_configsVar.rowItemsTabletAttr, t)), e.variables.rowItemsDesktopIn.toString() !== e.variables.internal_configsVar.rowItemsDesktopAttr && (e.variables.internal_configsVar.rowItemsDesktopAttr = e.variables.rowItemsDesktopIn.toString(), d.galleryChangeTextProperty$Action(e.variables.internal_configsVar.uniqueIdAttr, "RowItemsDesktop", e.variables.internal_configsVar.rowItemsDesktopAttr, t)), e.variables.itemsGapIn !== e.variables.internal_configsVar.itemsGapAttr && (e.variables.internal_configsVar.itemsGapAttr = e.variables.itemsGapIn, d.galleryChangeTextProperty$Action(e.variables.internal_configsVar.uniqueIdAttr, "ItemsGap", e.variables.internal_configsVar.itemsGapAttr, t)), e.variables.extendedClassIn !== e.variables.internal_configsVar.extendedClassAttr && (e.variables.internal_configsVar.extendedClassAttr = e.variables.extendedClassIn, d.galleryChangeTextProperty$Action(e.variables.internal_configsVar.uniqueIdAttr, "ExtendedClass", e.variables.internal_configsVar.extendedClassAttr, t))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, e) {
                var r = this.model,
                    s = this.controller,
                    n = this.idService;
                return i.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "bc44f04e-d3a6-4da3-ac29-f9f7800c0b3b"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        s.ensureControllerAlive("InitializedHandler"), e = s.callContext(e);
                        var c = new i.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("OutSystemsUI.Adaptive.Gallery.InitializedHandler$vars")));
                        return c.value.galleryIdInLocal = t, i.Flow.executeAsyncFlow(function() {
                            return s.initialized$Action(c.value.galleryIdInLocal, e)
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(t) {
            this.__initializedHandler$Action = t
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "e6191de5-d11f-4bd9-b0a1-80a8af1cec45"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("RegisterCallbacks"), t = r.callContext(t);
                        var l = new i.DataTypes.VariableHolder;
                        l.value = i.Logger.startActiveSpan("GetCallbackHandlers", function(c) {
                            c && (c.setAttribute("code.function", "GetCallbackHandlers"), c.setAttribute("outsystems.function.key", "a250a322-bea6-44b5-b40d-212a6964f1fa"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(E, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object)
                                }, function(A) {
                                    var _ = new(r.constructor.getVariableGroupType("OutSystemsUI.Adaptive.Gallery.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return _.initializedOut = i.DataConversion.JSNodeParamConverter.from(A.Initialized, i.DataTypes.DataTypes.Object), _
                                }, {
                                    InitializedHandler: r.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), d.galleryRegisterCallback$Action(e.variables.internal_configsVar.uniqueIdAttr, y.registeredCallbackEvents.initialized, l.value.initializedOut, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(t) {
            this.__registerCallbacks$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "f590b1c8-2ce5-4213-b875-6ab4cbaf666d"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnInitialize"), t = r.callContext(t);
                        var l = new i.DataTypes.VariableHolder,
                            c = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        d.logEvent$Action(y.logType.general, "Creating Gallery", t), l.value = d.generateUniqueId$Action(e.variables.internal_configsVar.uniqueIdAttr, t), e.variables.internal_configsVar.uniqueIdAttr = l.value.unique_IDOut, e.variables.internal_configsVar.rowItemsPhoneAttr = e.variables.rowItemsPhoneIn.toString(), e.variables.internal_configsVar.rowItemsTabletAttr = e.variables.rowItemsTabletIn.toString(), e.variables.internal_configsVar.rowItemsDesktopAttr = e.variables.rowItemsDesktopIn.toString(), e.variables.internal_configsVar.itemsGapAttr = e.variables.itemsGapIn, e.variables.internal_configsVar.extendedClassAttr = e.variables.extendedClassIn, c.value.jSONOut = i.JSONUtils.serializeToJSON(e.variables.internal_configsVar, !0, !1), d.galleryCreate$Action(e.variables.internal_configsVar.uniqueIdAttr, c.value.jSONOut, t), r._registerCallbacks$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        onDestroy$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnDestroy__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "5459d23f-0390-4502-84fa-01a15f551924"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onDestroy$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "993aa900-c093-4af7-9b2f-047e319926a0"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onReady$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onParametersChanged$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnParametersChanged__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "9a476224-82c4-4d0f-9d2f-18e89e77161b"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onParametersChanged$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("InitializedHandler__proxy", function(s) {
                return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "bc44f04e-d3a6-4da3-ac29-f9f7800c0b3b"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._initializedHandler$Action, e, t)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        registerCallbacks$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("RegisterCallbacks__proxy", function(r) {
                r && (r.setAttribute("code.function", "RegisterCallbacks"), r.setAttribute("outsystems.function.key", "e6191de5-d11f-4bd9-b0a1-80a8af1cec45"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._registerCallbacks$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "f590b1c8-2ce5-4213-b875-6ab4cbaf666d"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onInitialize$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get initialized$Action() {
            return this.hasOwnProperty("_initialized$Action") || (this._initialized$Action = function() {
                return Promise.resolve()
            }), this._initialized$Action
        }
        set initialized$Action(t) {
            this._initialized$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var e = this.controller,
                    r = this.model,
                    s = this.idService;
                return e.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var e = this.controller,
                    r = this.model,
                    s = this.idService;
                return e.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(t) {
                var e = this.controller,
                    r = this.model,
                    s = this.idService;
                return e.onDestroy$Action(t)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var e = this.controller,
                    r = this.model,
                    s = this.idService;
                return e.onParametersChanged$Action(t)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return d.defaultTimeout
        }
    };
    u(a, "ControllerInner");
    let f = a;
    v = f, v.registerVariableGroupType("OutSystemsUI.Adaptive.Gallery.InitializedHandler$vars", [{
        name: "GalleryId",
        attrName: "galleryIdInLocal",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), v.registerVariableGroupType("OutSystemsUI.Adaptive.Gallery.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: u(function() {
            return null
        }, "defaultValue")
    }])
}
var v, U = new i.Controller.ControllerFactory(v, z);
var yt = g.PlaceholderContent,
    mt = g.IteratorPlaceholderContent,
    q = u(function() {
        var f = P(function(a) {
            var h = a.model,
                t = a.controller,
                e = a.controller.idService,
                r = t.validationService,
                s = t.callContext(),
                n = H,
                l = k,
                c = {
                    props: a,
                    validateWidget: u(function(x) {
                        a.validateWidget(a, x)
                    }, "validateWidget")
                },
                A = h,
                _ = R,
                W = $,
                J = p();
            return T.createElement("div", a.rootNodeProperties, T.createElement(V, {
                align: 0,
                content: c.props.placeholders.content,
                extendedProperties: {
                    name: h.variables.internal_configsVar.uniqueIdAttr
                },
                style: "osui-gallery",
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: A
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "Gallery",
                    functionKey: "858e3702-ebcf-4395-b63d-04282d7f04b6",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Adaptive.Gallery",
            modelFactory: N,
            controllerFactory: U
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }, f.getBlocks = function() {
            return []
        }, f
    }, "componentFactory"),
    bt = q();
export {
    bt as a
};