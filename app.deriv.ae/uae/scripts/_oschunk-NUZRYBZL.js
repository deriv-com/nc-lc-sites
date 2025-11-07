import {
    a as M
} from "./_oschunk-YVFTECWM.js";
import {
    a as x,
    f as y,
    m as E,
    s as F
} from "./_oschunk-VR5BNL2K.js";
import {
    a as J,
    g as P,
    m as H,
    o as V,
    q as N,
    r as k,
    s as U,
    t as z
} from "./_oschunk-4VHUVDBV.js";
import {
    Jb as O,
    Mb as p,
    Qb as c,
    vb as m,
    xb as I
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as d,
    e as q
} from "./_oschunk-M5BUVJ72.js";
var f = S,
    D = class D extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, f.DataTypes.DataTypes.Record, function() {
                return f.DataTypes.ImmutableBase.getData(new I)
            }, !1, I), this.attr("Navigation", "navigationIn", "Navigation", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return m.carouselNavigation.both
            }, !1), this.attr("_navigationInDataFetchStatus", "_navigationInDataFetchStatus", "_navigationInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Height", "heightIn", "Height", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return "auto"
            }, !1), this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ItemsPerSlide", "itemsPerSlideIn", "ItemsPerSlide", !0, !1, f.DataTypes.DataTypes.Record, function() {
                return f.DataTypes.ImmutableBase.getData(new p)
            }, !1, p), this.attr("_itemsPerSlideInDataFetchStatus", "_itemsPerSlideInDataFetchStatus", "_itemsPerSlideInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, f.DataTypes.DataTypes.Record, function() {
                return f.DataTypes.ImmutableBase.getData(new O)
            }, !1, O), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(D, "VariablesRecord");
var h = D;
h.init();
var R = class R extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
d(R, "WidgetsRecord");
var T = R,
    $ = class $ extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(o) {
            "Navigation" in o && (this.variables.navigationIn = o.Navigation, "_navigationInDataFetchStatus" in o && (this.variables._navigationInDataFetchStatus = o._navigationInDataFetchStatus)), "Height" in o && (this.variables.heightIn = o.Height, "_heightInDataFetchStatus" in o && (this.variables._heightInDataFetchStatus = o._heightInDataFetchStatus)), "ItemsPerSlide" in o && (this.variables.itemsPerSlideIn = o.ItemsPerSlide, "_itemsPerSlideInDataFetchStatus" in o && (this.variables._itemsPerSlideInDataFetchStatus = o._itemsPerSlideInDataFetchStatus)), "OptionalConfigs" in o && (this.variables.optionalConfigsIn = o.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in o && (this.variables._optionalConfigsInDataFetchStatus = o._optionalConfigsInDataFetchStatus)), "ExtendedClass" in o && (this.variables.extendedClassIn = o.ExtendedClass, "_extendedClassInDataFetchStatus" in o && (this.variables._extendedClassInDataFetchStatus = o._extendedClassInDataFetchStatus))
        }
    };
d($, "Model");
var C = $;
C._hasValidationWidgetsValue = void 0;
var L = new f.Model.ModelFactory(C);
var v = q(J());
var W = {};

function w(b, o, _, t) {
    b.OnSlideMovedObj = o.OnSlideMovedHandler, b.OnCarouselInitializedObj = o.InitializeHandler
}
d(w, "default");
var r = S; {
    let o = class o extends r.Controller.BaseViewController {
        constructor(t, e, i) {
            super(t, e, i, W);
            var a = this.controller;
            this.clientActionProxies = {
                onSlideMovedHandler$Action: d(function(n, u) {
                    return n = n === void 0 ? "" : n, u = u === void 0 ? 0 : u, a.executeActionInsideJSNode(a._onSlideMovedHandler$Action.bind(a, r.DataConversion.JSNodeParamConverter.from(n, r.DataTypes.DataTypes.Text), r.DataConversion.JSNodeParamConverter.from(u, r.DataTypes.DataTypes.Integer)), a.callContext(), function(s) {
                        return {}
                    }, function() {}, "OnSlideMovedHandler")
                }, "onSlideMovedHandler$Action"),
                initializeHandler$Action: d(function(n) {
                    return n = n === void 0 ? "" : n, a.executeActionInsideJSNode(a._initializeHandler$Action.bind(a, r.DataConversion.JSNodeParamConverter.from(n, r.DataTypes.DataTypes.Text)), a.callContext(), function(u) {
                        return {}
                    }, function() {}, "InitializeHandler")
                }, "initializeHandler$Action")
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
                    i = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "1c69d0f1-3724-475c-b06f-bae9655df488"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnDestroy"), t = i.callContext(t), c.carouselDestroy$Action(e.variables.internalConfigsVar.uniqueIdAttr, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _initializeHandler$Action() {
            return this.hasOwnProperty("__initializeHandler$Action") || (this.__initializeHandler$Action = function(t, e) {
                var i = this.model,
                    a = this.controller,
                    n = this.idService;
                return r.Logger.startActiveSpan("InitializeHandler", function(u) {
                    return u && (u.setAttribute("code.function", "InitializeHandler"), u.setAttribute("outsystems.function.key", "2878f020-349a-4095-92b5-64914bdbefc7"), u.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), u.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        a.ensureControllerAlive("InitializeHandler"), e = a.callContext(e);
                        var s = new r.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("OutSystemsUI.Interaction.Carousel.InitializeHandler$vars")));
                        return s.value.carouselIdInLocal = t, r.Flow.executeAsyncFlow(function() {
                            return a.initialized$Action(s.value.carouselIdInLocal, e)
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__initializeHandler$Action
        }
        set _initializeHandler$Action(t) {
            this.__initializeHandler$Action = t
        }
        get _onSlideMovedHandler$Action() {
            return this.hasOwnProperty("__onSlideMovedHandler$Action") || (this.__onSlideMovedHandler$Action = function(t, e, i) {
                var a = this.model,
                    n = this.controller,
                    u = this.idService;
                return r.Logger.startActiveSpan("OnSlideMovedHandler", function(s) {
                    return s && (s.setAttribute("code.function", "OnSlideMovedHandler"), s.setAttribute("outsystems.function.key", "2b489ae5-936e-4624-b650-e33d88fbc446"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnSlideMovedHandler"), i = n.callContext(i);
                        var l = new r.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("OutSystemsUI.Interaction.Carousel.OnSlideMovedHandler$vars")));
                        return l.value.carouselIdInLocal = t, l.value.indexInLocal = e, r.Flow.executeAsyncFlow(function() {
                            return n.onSlideMoved$Action(l.value.carouselIdInLocal, l.value.indexInLocal, i)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onSlideMovedHandler$Action
        }
        set _onSlideMovedHandler$Action(t) {
            this.__onSlideMovedHandler$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var e = this.model,
                    i = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "4c5a128f-3f2a-4cb0-b2f3-031aef45cb2d"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnParametersChanged"), t = i.callContext(t), e.variables.navigationIn !== e.variables.internalConfigsVar.navigationAttr && (e.variables.internalConfigsVar.navigationAttr = e.variables.navigationIn, c.carouselChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "Navigation", e.variables.internalConfigsVar.navigationAttr, t)), e.variables.itemsPerSlideIn.desktopAttr !== e.variables.internalConfigsVar.itemsDesktopAttr && (e.variables.internalConfigsVar.itemsDesktopAttr = e.variables.itemsPerSlideIn.desktopAttr, c.carouselChangeIntegerProp$Action(e.variables.internalConfigsVar.uniqueIdAttr, "ItemsDesktop", e.variables.internalConfigsVar.itemsDesktopAttr, t)), e.variables.itemsPerSlideIn.tabletAttr !== e.variables.internalConfigsVar.itemsTabletAttr && (e.variables.internalConfigsVar.itemsTabletAttr = e.variables.itemsPerSlideIn.tabletAttr, c.carouselChangeIntegerProp$Action(e.variables.internalConfigsVar.uniqueIdAttr, "ItemsTablet", e.variables.internalConfigsVar.itemsTabletAttr, t)), e.variables.itemsPerSlideIn.phoneAttr !== e.variables.internalConfigsVar.itemsPhoneAttr && (e.variables.internalConfigsVar.itemsPhoneAttr = e.variables.itemsPerSlideIn.phoneAttr, c.carouselChangeIntegerProp$Action(e.variables.internalConfigsVar.uniqueIdAttr, "ItemsPhone", e.variables.internalConfigsVar.itemsPhoneAttr, t)), e.variables.optionalConfigsIn.autoPlayAttr !== e.variables.internalConfigsVar.autoPlayAttr && (e.variables.internalConfigsVar.autoPlayAttr = e.variables.optionalConfigsIn.autoPlayAttr, c.carouselChangeBooleanProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "AutoPlay", e.variables.internalConfigsVar.autoPlayAttr, t)), e.variables.optionalConfigsIn.loopAttr !== e.variables.internalConfigsVar.loopAttr && (e.variables.internalConfigsVar.loopAttr = e.variables.optionalConfigsIn.loopAttr, c.carouselChangeBooleanProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "Loop", e.variables.internalConfigsVar.loopAttr, t)), e.variables.optionalConfigsIn.paddingAttr !== e.variables.internalConfigsVar.paddingAttr && (e.variables.internalConfigsVar.paddingAttr = e.variables.optionalConfigsIn.paddingAttr, c.carouselChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "Padding", e.variables.internalConfigsVar.paddingAttr, t)), e.variables.optionalConfigsIn.itemsGapAttr !== e.variables.internalConfigsVar.itemsGapAttr && (e.variables.internalConfigsVar.itemsGapAttr = e.variables.optionalConfigsIn.itemsGapAttr, c.carouselChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "ItemsGap", e.variables.internalConfigsVar.itemsGapAttr, t)), e.variables.optionalConfigsIn.startingPositionAttr !== e.variables.internalConfigsVar.startingPositionAttr && (e.variables.internalConfigsVar.startingPositionAttr = e.variables.optionalConfigsIn.startingPositionAttr, c.carouselChangeIntegerProp$Action(e.variables.internalConfigsVar.uniqueIdAttr, "StartingPosition", e.variables.internalConfigsVar.startingPositionAttr, t)), e.variables.heightIn !== e.variables.internalConfigsVar.heightAttr && (e.variables.internalConfigsVar.heightAttr = e.variables.heightIn, c.carouselChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "Height", e.variables.internalConfigsVar.heightAttr, t)), e.variables.extendedClassIn !== e.variables.internalConfigsVar.extendedClassAttr && (e.variables.internalConfigsVar.extendedClassAttr = e.variables.extendedClassIn, c.carouselChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", e.variables.internalConfigsVar.extendedClassAttr, t))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var e = this.model,
                    i = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "55a88d23-f92e-4195-9c3a-18901ac10ad0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnReady"), t = i.callContext(t), c.carouselInitialize$Action(e.variables.internalConfigsVar.uniqueIdAttr, t), c.logEvent$Action(m.logType.general, "Carousel created", t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var e = this.model,
                    i = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "dafe53b9-d39c-4d96-baa2-2002b3bd13b5"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnInitialize"), t = i.callContext(t);
                        var u = new r.DataTypes.VariableHolder,
                            s = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType);
                        c.logEvent$Action(m.logType.general, "Going to create Carousel", t), u.value = c.generateUniqueId$Action(e.variables.internalConfigsVar.uniqueIdAttr, t), e.variables.internalConfigsVar.uniqueIdAttr = u.value.unique_IDOut, e.variables.internalConfigsVar.extendedClassAttr = e.variables.extendedClassIn, e.variables.internalConfigsVar.navigationAttr = e.variables.navigationIn, e.variables.internalConfigsVar.heightAttr = e.variables.heightIn, e.variables.internalConfigsVar.autoPlayAttr = e.variables.optionalConfigsIn.autoPlayAttr, e.variables.internalConfigsVar.loopAttr = e.variables.optionalConfigsIn.loopAttr, e.variables.internalConfigsVar.paddingAttr = e.variables.optionalConfigsIn.paddingAttr, e.variables.internalConfigsVar.itemsGapAttr = e.variables.optionalConfigsIn.itemsGapAttr, e.variables.internalConfigsVar.startingPositionAttr = e.variables.optionalConfigsIn.startingPositionAttr, e.variables.internalConfigsVar.itemsDesktopAttr = e.variables.itemsPerSlideIn.desktopAttr, e.variables.internalConfigsVar.itemsTabletAttr = e.variables.itemsPerSlideIn.tabletAttr, e.variables.internalConfigsVar.itemsPhoneAttr = e.variables.itemsPerSlideIn.phoneAttr, s.value.jSONOut = r.JSONUtils.serializeToJSON(e.variables.internalConfigsVar, !0, !1), c.carouselCreate$Action(e.variables.internalConfigsVar.uniqueIdAttr, s.value.jSONOut, m.carouselProvider.splide, t), i._registerCallbacks$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(t) {
                var e = this.model,
                    i = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "e67db216-47ed-4faa-9f19-6598ecde7b6f"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("RegisterCallbacks"), t = i.callContext(t);
                        var u = new r.DataTypes.VariableHolder;
                        u.value = r.Logger.startActiveSpan("GetCallbackHandlers", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandlers"), s.setAttribute("outsystems.function.key", "12086b05-e58f-48cd-bdd4-a449983a20de"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(w, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnSlideMovedObj: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object),
                                    OnCarouselInitializedObj: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object)
                                }, function(l) {
                                    var g = new(i.constructor.getVariableGroupType("OutSystemsUI.Interaction.Carousel.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return g.onSlideMovedObjOut = r.DataConversion.JSNodeParamConverter.from(l.OnSlideMovedObj, r.DataTypes.DataTypes.Object), g.onCarouselInitializedObjOut = r.DataConversion.JSNodeParamConverter.from(l.OnCarouselInitializedObj, r.DataTypes.DataTypes.Object), g
                                }, {
                                    OnSlideMovedHandler: i.clientActionProxies.onSlideMovedHandler$Action,
                                    InitializeHandler: i.clientActionProxies.initializeHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), c.carouselRegisterCallback$Action(e.variables.internalConfigsVar.uniqueIdAttr, m.registeredCallbackEvents.carousel_OnSlideMoved, u.value.onSlideMovedObjOut, t), c.carouselRegisterCallback$Action(e.variables.internalConfigsVar.uniqueIdAttr, m.registeredCallbackEvents.initialized, u.value.onCarouselInitializedObjOut, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(t) {
            this.__registerCallbacks$Action = t
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(t) {
                var e = this.model,
                    i = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnRender", function(n) {
                    n && (n.setAttribute("code.function", "OnRender"), n.setAttribute("outsystems.function.key", "ff217726-3e54-4696-a30d-8293d473e1b0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnRender"), t = i.callContext(t), c.carouselUpdateOnRender$Action(e.variables.internalConfigsVar.uniqueIdAttr, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(t) {
            this.__onRender$Action = t
        }
        onDestroy$Action(t) {
            var e = this.controller;
            return r.Logger.startActiveSpan("OnDestroy__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "1c69d0f1-3724-475c-b06f-bae9655df488"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onDestroy$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        initializeHandler$Action(t, e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("InitializeHandler__proxy", function(a) {
                return a && (a.setAttribute("code.function", "InitializeHandler"), a.setAttribute("outsystems.function.key", "2878f020-349a-4095-92b5-64914bdbefc7"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._initializeHandler$Action, e, t)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        onSlideMovedHandler$Action(t, e, i) {
            var a = this.controller;
            return r.Logger.startActiveSpan("OnSlideMovedHandler__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnSlideMovedHandler"), n.setAttribute("outsystems.function.key", "2b489ae5-936e-4624-b650-e33d88fbc446"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onSlideMovedHandler$Action, i, t, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onParametersChanged$Action(t) {
            var e = this.controller;
            return r.Logger.startActiveSpan("OnParametersChanged__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "4c5a128f-3f2a-4cb0-b2f3-031aef45cb2d"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onParametersChanged$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var e = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "55a88d23-f92e-4195-9c3a-18901ac10ad0"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onReady$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var e = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "dafe53b9-d39c-4d96-baa2-2002b3bd13b5"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onInitialize$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        registerCallbacks$Action(t) {
            var e = this.controller;
            return r.Logger.startActiveSpan("RegisterCallbacks__proxy", function(i) {
                i && (i.setAttribute("code.function", "RegisterCallbacks"), i.setAttribute("outsystems.function.key", "e67db216-47ed-4faa-9f19-6598ecde7b6f"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._registerCallbacks$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onRender$Action(t) {
            var e = this.controller;
            return r.Logger.startActiveSpan("OnRender__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnRender"), i.setAttribute("outsystems.function.key", "ff217726-3e54-4696-a30d-8293d473e1b0"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onRender$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        get onSlideMoved$Action() {
            return this.hasOwnProperty("_onSlideMoved$Action") || (this._onSlideMoved$Action = function() {
                return Promise.resolve()
            }), this._onSlideMoved$Action
        }
        set onSlideMoved$Action(t) {
            this._onSlideMoved$Action = t
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
                    i = this.model,
                    a = this.idService;
                return e.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var e = this.controller,
                    i = this.model,
                    a = this.idService;
                return e.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(t) {
                var e = this.controller,
                    i = this.model,
                    a = this.idService;
                return e.onRender$Action(t)
            }), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(t) {
                var e = this.controller,
                    i = this.model,
                    a = this.idService;
                return e.onDestroy$Action(t)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var e = this.controller,
                    i = this.model,
                    a = this.idService;
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
            return c.defaultTimeout
        }
    };
    d(o, "ControllerInner");
    let b = o;
    A = b, A.registerVariableGroupType("OutSystemsUI.Interaction.Carousel.InitializeHandler$vars", [{
        name: "CarouselId",
        attrName: "carouselIdInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("OutSystemsUI.Interaction.Carousel.OnSlideMovedHandler$vars", [{
        name: "CarouselId",
        attrName: "carouselIdInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Index",
        attrName: "indexInLocal",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Integer,
        defaultValue: d(function() {
            return 0
        }, "defaultValue")
    }]), A.registerVariableGroupType("OutSystemsUI.Interaction.Carousel.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnSlideMovedObj",
        attrName: "onSlideMovedObjOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: d(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnCarouselInitializedObj",
        attrName: "onCarouselInitializedObjOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: d(function() {
            return null
        }, "defaultValue")
    }])
}
var A, j = new r.Controller.ControllerFactory(A, M);
var Ae = P.PlaceholderContent,
    Se = P.IteratorPlaceholderContent,
    K = d(function() {
        var b = V(function(o) {
            var _ = o.model,
                t = o.controller,
                e = o.controller.idService,
                i = t.validationService,
                a = t.callContext(),
                n = U,
                u = z,
                s = {
                    props: o,
                    validateWidget: d(function(G) {
                        o.validateWidget(o, G)
                    }, "validateWidget")
                },
                l = _,
                g = k,
                Q = N,
                X = H();
            return v.createElement("div", o.rootNodeProperties, v.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    name: _.variables.internalConfigsVar.uniqueIdAttr
                },
                style: "osui-carousel",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: l
            }, v.createElement(y, {
                align: 0,
                animate: !1,
                style: "osui-carousel__track",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: l
            }, g(!1, !1, this, function() {
                return []
            }, function() {
                return [v.createElement(F, {
                    align: 0,
                    content: s.props.placeholders.carouselItems,
                    style: "osui-carousel__content",
                    _idProps: {
                        service: e,
                        name: "CarouselItems"
                    },
                    _widgetRecordProvider: l
                }), v.createElement(y, {
                    align: 0,
                    animate: !1,
                    style: "splide__arrows",
                    visible: !1,
                    _idProps: {
                        service: e,
                        name: "Arrows"
                    },
                    _widgetRecordProvider: l
                }, v.createElement(y, {
                    align: 0,
                    animate: !1,
                    style: "splide__arrow splide__arrow--prev background-neutral-0",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: l
                }, v.createElement(E, {
                    extendedProperties: {
                        style: "font-size: 18px;"
                    },
                    icon: "angle-left",
                    iconSize: 0,
                    style: "icon text-neutral-7",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: l
                })), v.createElement(y, {
                    align: 0,
                    animate: !1,
                    style: "splide__arrow splide__arrow--next background-neutral-0",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: l
                }, v.createElement(E, {
                    extendedProperties: {
                        style: "font-size: 18px;"
                    },
                    icon: "angle-right",
                    iconSize: 0,
                    style: "icon text-neutral-7",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: l
                }))), v.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "text-align: center;"
                    },
                    style: "splide__pagination",
                    visible: !1,
                    _idProps: {
                        service: e,
                        name: "Pagination"
                    },
                    _widgetRecordProvider: l
                }, v.createElement(x, {
                    tag: "li",
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: l
                }, v.createElement(y, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page is-active",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: l
                }), v.createElement(y, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: l
                }), v.createElement(y, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: l
                }), v.createElement(y, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "13"
                    },
                    _widgetRecordProvider: l
                }), v.createElement(y, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: l
                }), v.createElement(y, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "15"
                    },
                    _widgetRecordProvider: l
                })))]
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: d(function() {
                return {
                    codeFunction: "Carousel",
                    functionKey: "322c145b-0e8d-472c-b394-9fc44623687f",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Interaction.Carousel",
            modelFactory: L,
            controllerFactory: j
        });
        return b.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, b.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.UserScripts.Splide.js", "scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }, b.getBlocks = function() {
            return []
        }, b
    }, "componentFactory"),
    he = K();
export {
    he as a
};