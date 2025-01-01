import {
    a as re,
    b as ne
} from "./_oschunk-DFY6DP4F.js";
import {
    a as L
} from "./_oschunk-H5EDH4AY.js";
import {
    a as te
} from "./_oschunk-LDY7XNSJ.js";
import {
    d as A,
    f as N,
    g as K,
    h as H,
    m as $,
    o as Y,
    p as Z,
    u as ee
} from "./_oschunk-LWMGEL7F.js";
import {
    a as q
} from "./_oschunk-4GXKK3IG.js";
import {
    a as X,
    g as V,
    i as T
} from "./_oschunk-WZHUAZJP.js";
import {
    a as _,
    m as D,
    o as g,
    q as Q
} from "./_oschunk-BDI2RWOA.js";
import {
    kd as S,
    tb as P
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    a as W,
    b as B,
    c as d,
    h as G
} from "./_oschunk-QHO7QY6K.js";
var z = G(X());
var ie = {};

function k(m, o, p, t) {
    m.Initialized = o.InitializedHandler, m.OnSelected = o.OnSelectHandler
}
d(k, "default");
var i = h; {
    let o = class o extends i.Controller.BaseViewController {
        constructor(t, e, r) {
            super(t, e, r, ie);
            var a = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: d(function(n) {
                    return n = n === void 0 ? "" : n, a.executeActionInsideJSNode(a._initializedHandler$Action.bind(a, i.DataConversion.JSNodeParamConverter.from(n, i.DataTypes.DataTypes.Text)), a.callContext(), function(c) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onSelectHandler$Action: d(function(n, c) {
                    return n = n === void 0 ? "" : n, c = c === void 0 ? "" : c, a.executeActionInsideJSNode(a._onSelectHandler$Action.bind(a, i.DataConversion.JSNodeParamConverter.from(n, i.DataTypes.DataTypes.Text), i.DataConversion.JSNodeParamConverter.from(c, i.DataTypes.DataTypes.Text)), a.callContext(), function(s) {
                        return {}
                    }, function() {}, "OnSelectHandler")
                }, "onSelectHandler$Action")
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
                    a = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "0d159f84-d40b-428b-8fcf-df8a7d87a020"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnDestroy"), t = r.callContext(t), g.dropdownDestroy$Action(e.variables.internalConfigsVar.uniqueIdAttr, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "1829e28b-fb2a-4de4-897f-3c5571d2e267"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnInitialize"), t = r.callContext(t);
                        var c = new i.DataTypes.VariableHolder,
                            s = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        g.logEvent$Action(S.logType.general, "Going to create Dropdown Search", t), c.value = g.generateUniqueId$Action(e.variables.internalConfigsVar.uniqueIdAttr, t), e.variables.internalConfigsVar.uniqueIdAttr = c.value.unique_IDOut, e.variables.internalConfigsVar.optionsListAttr = e.variables.optionsListIn, e.variables.internalConfigsVar.startingSelectionAttr = e.variables.startingSelectionIn, e.variables.internalConfigsVar.isDisabledAttr = e.variables.optionalConfigsIn.isDisabledAttr, e.variables.internalConfigsVar.promptAttr = e.variables.promptIn === "" ? e.variables.prompt_DefaultVar : e.variables.promptIn, e.variables.internalConfigsVar.noResultsTextAttr = e.variables.optionalConfigsIn.noResultsTextAttr === "" ? e.variables.noResultsText_DefaultVar : e.variables.optionalConfigsIn.noResultsTextAttr, e.variables.internalConfigsVar.searchPromptAttr = e.variables.optionalConfigsIn.searchPromptAttr === "" ? e.variables.searchPrompt_DefaultVar : e.variables.optionalConfigsIn.searchPromptAttr, e.variables.internalConfigsVar.allowMultipleSelectionAttr = e.variables.optionalConfigsIn.allowMultipleSelectionAttr, e.variables.internalConfigsVar.extendedClassAttr = e.variables.extendedClassIn, e.variables.internalConfigsVar.noOptionsTextAttr = e.variables.optionalConfigsIn.noOptionsTextAttr === "" ? e.variables.noOptionsText_DefaultVar : e.variables.optionalConfigsIn.noOptionsTextAttr, s.value.jSONOut = i.JSONUtils.serializeToJSON(e.variables.internalConfigsVar, !0, !1), g.dropdownCreate$Action(e.variables.internalConfigsVar.uniqueIdAttr, S.dropdownType.search, S.dropdownProvider.virtualSelect, s.value.jSONOut, t), r._registerCallbacks$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "300cda6f-bc6d-4ad5-9077-8037b6e5082b"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), t = r.callContext(t), g.dropdownInitialize$Action(e.variables.internalConfigsVar.uniqueIdAttr, t), g.logEvent$Action(S.logType.general, "Dropdown Search created", t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, e) {
                var r = this.model,
                    a = this.controller,
                    n = this.idService;
                return i.Logger.startActiveSpan("InitializedHandler", function(c) {
                    return c && (c.setAttribute("code.function", "InitializedHandler"), c.setAttribute("outsystems.function.key", "448950a4-050f-4479-93a4-a88cbeac8025"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        a.ensureControllerAlive("InitializedHandler"), e = a.callContext(e);
                        var s = new i.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.InitializedHandler$vars")));
                        return s.value.dropdownSearchIdInLocal = t, i.Flow.executeAsyncFlow(function() {
                            return a.initialized$Action(s.value.dropdownSearchIdInLocal, e)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(t) {
            this.__initializedHandler$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "5c3e9294-b0aa-4efc-9d8f-36887d45bc69"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnParametersChanged"), t = r.callContext(t);
                        var c = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType),
                            s = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType),
                            b = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType),
                            y = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        c.value.jSONOut = i.JSONUtils.serializeToJSON(e.variables.optionsListIn, !1, !1), y.value.jSONOut = i.JSONUtils.serializeToJSON(e.variables.internalConfigsVar.optionsListAttr, !1, !1), c.value.jSONOut !== y.value.jSONOut && (e.variables.internalConfigsVar.optionsListAttr = e.variables.optionsListIn, g.dropdownChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "OptionsList", c.value.jSONOut, t)), b.value.jSONOut = i.JSONUtils.serializeToJSON(e.variables.startingSelectionIn, !1, !1), s.value.jSONOut = i.JSONUtils.serializeToJSON(e.variables.internalConfigsVar.startingSelectionAttr, !1, !1), b.value.jSONOut !== s.value.jSONOut && (e.variables.internalConfigsVar.startingSelectionAttr = e.variables.startingSelectionIn, g.dropdownChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "StartingSelection", b.value.jSONOut, t)), e.variables.promptIn !== e.variables.internalConfigsVar.promptAttr && (e.variables.internalConfigsVar.promptAttr = e.variables.promptIn === "" ? e.variables.prompt_DefaultVar : e.variables.promptIn, g.dropdownChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "Prompt", e.variables.internalConfigsVar.promptAttr, t)), e.variables.optionalConfigsIn.isDisabledAttr !== e.variables.internalConfigsVar.isDisabledAttr && (e.variables.internalConfigsVar.isDisabledAttr = e.variables.optionalConfigsIn.isDisabledAttr, g.dropdownChangeBooleanProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "IsDisabled", e.variables.internalConfigsVar.isDisabledAttr, t)), e.variables.optionalConfigsIn.noResultsTextAttr !== e.variables.internalConfigsVar.noResultsTextAttr && (e.variables.internalConfigsVar.noResultsTextAttr = e.variables.optionalConfigsIn.noResultsTextAttr === "" ? e.variables.noResultsText_DefaultVar : e.variables.optionalConfigsIn.noResultsTextAttr, g.dropdownChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "NoResultsText", e.variables.internalConfigsVar.noResultsTextAttr, t)), e.variables.optionalConfigsIn.noOptionsTextAttr !== e.variables.internalConfigsVar.noOptionsTextAttr && (e.variables.internalConfigsVar.noOptionsTextAttr = e.variables.optionalConfigsIn.noOptionsTextAttr === "" ? e.variables.noOptionsText_DefaultVar : e.variables.optionalConfigsIn.noOptionsTextAttr, g.dropdownChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "NoOptionsText", e.variables.internalConfigsVar.noOptionsTextAttr, t)), e.variables.optionalConfigsIn.searchPromptAttr !== e.variables.internalConfigsVar.searchPromptAttr && (e.variables.internalConfigsVar.searchPromptAttr = e.variables.optionalConfigsIn.searchPromptAttr === "" ? e.variables.searchPrompt_DefaultVar : e.variables.optionalConfigsIn.searchPromptAttr, g.dropdownChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "SearchPrompt", e.variables.internalConfigsVar.searchPromptAttr, t)), e.variables.optionalConfigsIn.allowMultipleSelectionAttr !== e.variables.internalConfigsVar.allowMultipleSelectionAttr && (e.variables.internalConfigsVar.allowMultipleSelectionAttr = e.variables.optionalConfigsIn.allowMultipleSelectionAttr, g.dropdownChangeBooleanProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "AllowMultipleSelection", e.variables.internalConfigsVar.allowMultipleSelectionAttr, t)), e.variables.extendedClassIn !== e.variables.internalConfigsVar.extendedClassAttr && (e.variables.internalConfigsVar.extendedClassAttr = e.variables.extendedClassIn, g.dropdownChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", e.variables.internalConfigsVar.extendedClassAttr, t))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _onSelectHandler$Action() {
            return this.hasOwnProperty("__onSelectHandler$Action") || (this.__onSelectHandler$Action = function(t, e, r) {
                var a = this.model,
                    n = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("OnSelectHandler", function(s) {
                    return s && (s.setAttribute("code.function", "OnSelectHandler"), s.setAttribute("outsystems.function.key", "7c7c4cf1-f156-4ef8-92cb-84f29f556a1f"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnSelectHandler"), r = n.callContext(r);
                        var b = new i.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.OnSelectHandler$vars")));
                        b.value.dropdownSearchIdInLocal = t, b.value.selectedOptionsJSONInLocal = e;
                        var y = new i.DataTypes.VariableHolder(new(i.Controller.BaseController.getJSONDeserializeOutputType(D)));
                        return i.Flow.executeAsyncFlow(function() {
                            return y.value.dataOut = i.JSONUtils.deserializeFromJSON(b.value.selectedOptionsJSONInLocal, D, !1), n.onChanged$Action(b.value.dropdownSearchIdInLocal, y.value.dataOut, r)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onSelectHandler$Action
        }
        set _onSelectHandler$Action(t) {
            this.__onSelectHandler$Action = t
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "b3e3288b-aff8-45b1-91d8-35d03b871702"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("RegisterCallbacks"), t = r.callContext(t);
                        var c = new i.DataTypes.VariableHolder;
                        c.value = i.Logger.startActiveSpan("GetCallbackHandlers", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandlers"), s.setAttribute("outsystems.function.key", "e042847c-74b0-49ac-b76b-1a6c2c1e5522"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(k, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnSelected: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object),
                                    Initialized: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object)
                                }, function(b) {
                                    var y = new(r.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return y.onSelectedOut = i.DataConversion.JSNodeParamConverter.from(b.OnSelected, i.DataTypes.DataTypes.Object), y.initializedOut = i.DataConversion.JSNodeParamConverter.from(b.Initialized, i.DataTypes.DataTypes.Object), y
                                }, {
                                    InitializedHandler: r.clientActionProxies.initializedHandler$Action,
                                    OnSelectHandler: r.clientActionProxies.onSelectHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), g.dropdownRegisterCallback$Action(e.variables.internalConfigsVar.uniqueIdAttr, S.registeredCallbackEvents.onSelected, c.value.onSelectedOut, t), g.dropdownRegisterCallback$Action(e.variables.internalConfigsVar.uniqueIdAttr, S.registeredCallbackEvents.initialized, c.value.initializedOut, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(t) {
            this.__registerCallbacks$Action = t
        }
        onDestroy$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnDestroy__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "0d159f84-d40b-428b-8fcf-df8a7d87a020"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onDestroy$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "1829e28b-fb2a-4de4-897f-3c5571d2e267"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onInitialize$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "300cda6f-bc6d-4ad5-9077-8037b6e5082b"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onReady$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("InitializedHandler__proxy", function(a) {
                return a && (a.setAttribute("code.function", "InitializedHandler"), a.setAttribute("outsystems.function.key", "448950a4-050f-4479-93a4-a88cbeac8025"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._initializedHandler$Action, e, t)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        onParametersChanged$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnParametersChanged__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "5c3e9294-b0aa-4efc-9d8f-36887d45bc69"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onParametersChanged$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onSelectHandler$Action(t, e, r) {
            var a = this.controller;
            return i.Logger.startActiveSpan("OnSelectHandler__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnSelectHandler"), n.setAttribute("outsystems.function.key", "7c7c4cf1-f156-4ef8-92cb-84f29f556a1f"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onSelectHandler$Action, r, t, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        registerCallbacks$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("RegisterCallbacks__proxy", function(r) {
                r && (r.setAttribute("code.function", "RegisterCallbacks"), r.setAttribute("outsystems.function.key", "b3e3288b-aff8-45b1-91d8-35d03b871702"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._registerCallbacks$Action, t)
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
        get onChanged$Action() {
            return this.hasOwnProperty("_onChanged$Action") || (this._onChanged$Action = function() {
                return Promise.resolve()
            }), this._onChanged$Action
        }
        set onChanged$Action(t) {
            this._onChanged$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var e = this.controller,
                    r = this.model,
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
                    r = this.model,
                    a = this.idService;
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
                    r = this.model,
                    a = this.idService;
                return e.onParametersChanged$Action(t)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
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
            return g.defaultTimeout
        }
    };
    d(o, "ControllerInner");
    let m = o;
    w = m, w.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.InitializedHandler$vars", [{
        name: "DropdownSearchId",
        attrName: "dropdownSearchIdInLocal",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.OnSelectHandler$vars", [{
        name: "DropdownSearchId",
        attrName: "dropdownSearchIdInLocal",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "SelectedOptionsJSON",
        attrName: "selectedOptionsJSONInLocal",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnSelected",
        attrName: "onSelectedOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: d(function() {
            return null
        }, "defaultValue")
    }, {
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: d(function() {
            return null
        }, "defaultValue")
    }])
}
var w, ae = new i.Controller.ControllerFactory(w, te);
var Ne = T.PlaceholderContent,
    De = T.IteratorPlaceholderContent,
    C = class C extends V.BaseWebBlock {
        static get displayName() {
            return "Interaction.DropdownSearch"
        }
        static getAttributes() {
            return {
                codeFunction: "DropdownSearch",
                functionKey: "b808428c-a355-4da5-ae16-6203477cd31c",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/OutSystemsUI.UserScripts.Virtualselect.js", "scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return re
        }
        get controllerFactory() {
            return ae
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                p = this.controller,
                t = this.idService,
                e = p.validationService,
                r = this.widgetsRecordProvider,
                a = p.callContext(),
                n = C.ifWidget,
                c = C.textWidget,
                s = C.asPrimitiveValue,
                b = C.getTranslation,
                y = this;
            return z.createElement("div", this.getRootNodeProperties(), n(!1, !1, this, function() {
                return []
            }, function() {
                return [z.createElement(A, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: o.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-dropdown-search",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "DropdownSearch"
                    },
                    _widgetRecordProvider: r
                })]
            }))
        }
    };
d(C, "View");
var U = C,
    He = U;
var v = G(X());
var ue = {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "\u0628\u062D\u062B"
    },
    de = {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Dienste nicht verf\xFCgbar",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Suche"
    },
    fe = {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Servicios no disponibles",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Buscar"
    },
    ve = {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Services non disponibles",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Rechercher"
    },
    ye = {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Servizi non disponibili",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Cerca"
    },
    be = {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Us\u0142ugi niedost\u0119pne",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Szukaj"
    },
    me = {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Servi\xE7os indispon\xEDveis",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Pesquisar"
    },
    ge = {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "\u0423\u0441\u043B\u0443\u0433\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "\u041F\u043E\u0438\u0441\u043A"
    },
    oe = {
        "ar-001": {
            translations: ue,
            isRTL: !0
        },
        "de-DE": {
            translations: de,
            isRTL: !1
        },
        "es-ES": {
            translations: fe,
            isRTL: !1
        },
        "fr-FR": {
            translations: ve,
            isRTL: !1
        },
        "it-IT": {
            translations: ye,
            isRTL: !1
        },
        "pl-PL": {
            translations: be,
            isRTL: !1
        },
        "pt-PT": {
            translations: me,
            isRTL: !1
        },
        "ru-RU": {
            translations: ge,
            isRTL: !1
        }
    };

function J(m, o, p, t) {
    let e = JSON.parse(m.ResidenceList),
        r = JSON.stringify(B(W({}, e), {
            residence_list: e.filter(a => a.text.toLowerCase().startsWith(m.SearchedResidence.toLowerCase()))
        }));
    m.FilteredResidenceList = r
}
d(J, "default");

function M(m, o, p, t) {
    let e = JSON.parse(m.ResidenceList);
    e.sort((r, a) => r.value === m.CurrentResidence ? -1 : 1), m.SortedResidenceList = JSON.stringify({
        residence_list: e
    }), console.log(m.CurrentResidence)
}
d(M, "default");
var l = h; {
    let o = class o extends l.Controller.BaseViewController {
        constructor(t, e, r) {
            super(t, e, r, oe);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onSearch$Action() {
            return this.hasOwnProperty("__onSearch$Action") || (this.__onSearch$Action = function(t, e) {
                var r = this.model,
                    a = this.controller,
                    n = this.idService;
                return l.Logger.startActiveSpan("OnSearch", function(c) {
                    c && (c.setAttribute("code.function", "OnSearch"), c.setAttribute("outsystems.function.key", "8473a3f6-13a2-4bc1-be90-3fc9e6b64d44"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnSearch"), e = a.callContext(e);
                        var s = new l.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("PartnersHub.VirtualAccountCreation.ResidenceSelector.OnSearch$vars")));
                        s.value.searchedItemArgInLocal = t;
                        var b = new l.DataTypes.VariableHolder,
                            y = new l.DataTypes.VariableHolder(new l.DataTypes.JSONSerializeOutputType),
                            u = new l.DataTypes.VariableHolder(new(l.Controller.BaseController.getJSONDeserializeOutputType(P)));
                        l.BuiltinFunctions.length(s.value.searchedItemArgInLocal) > 0 ? (y.value.jSONOut = l.JSONUtils.serializeToJSON(r.variables.filteredResidenceListVar, !1, !1), b.value = l.Logger.startActiveSpan("JavaScript1", function(f) {
                            f && (f.setAttribute("code.function", "JavaScript1"), f.setAttribute("outsystems.function.key", "2d776bbd-1d88-4216-b899-f932f8713d09"), f.setAttribute("outsystems.function.owner.name", "PartnersHub"), f.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(J, "JavaScript1", "OnSearch", {
                                    ResidenceList: l.DataConversion.JSNodeParamConverter.to(y.value.jSONOut, l.DataTypes.DataTypes.Text),
                                    SearchedResidence: l.DataConversion.JSNodeParamConverter.to(s.value.searchedItemArgInLocal, l.DataTypes.DataTypes.Text),
                                    FilteredResidenceList: l.DataConversion.JSNodeParamConverter.to("", l.DataTypes.DataTypes.Text)
                                }, function(I) {
                                    var j = new(a.constructor.getVariableGroupType("PartnersHub.VirtualAccountCreation.ResidenceSelector.OnSearch$javaScript1JSResult"));
                                    return j.filteredResidenceListOut = l.DataConversion.JSNodeParamConverter.from(I.FilteredResidenceList, l.DataTypes.DataTypes.Text), j
                                }, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), u.value.dataOut = l.JSONUtils.deserializeFromJSON(b.value.filteredResidenceListOut, P, !1), r.variables.filteredResidenceListVar = u.value.dataOut.residence_listAttr) : r.variables.filteredResidenceListVar = r.variables.sortedResidenceListVar
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__onSearch$Action
        }
        set _onSearch$Action(t) {
            this.__onSearch$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return l.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "e6553aa2-c16f-43c2-b326-b3355dc3a767"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), t = r.callContext(t);
                        var c = new l.DataTypes.VariableHolder,
                            s = new l.DataTypes.VariableHolder(new l.DataTypes.JSONSerializeOutputType),
                            b = new l.DataTypes.VariableHolder(new(l.Controller.BaseController.getJSONDeserializeOutputType(P)));
                        s.value.jSONOut = l.JSONUtils.serializeToJSON(e.variables.residenceListIn, !1, !1), c.value = l.Logger.startActiveSpan("JavaScript1", function(y) {
                            y && (y.setAttribute("code.function", "JavaScript1"), y.setAttribute("outsystems.function.key", "87b9a279-0515-426e-aef0-18922a59fe06"), y.setAttribute("outsystems.function.owner.name", "PartnersHub"), y.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(M, "JavaScript1", "OnReady", {
                                    ResidenceList: l.DataConversion.JSNodeParamConverter.to(s.value.jSONOut, l.DataTypes.DataTypes.Text),
                                    CurrentResidence: l.DataConversion.JSNodeParamConverter.to(e.variables.websiteStatusIn.clients_countryAttr, l.DataTypes.DataTypes.Text),
                                    SortedResidenceList: l.DataConversion.JSNodeParamConverter.to("", l.DataTypes.DataTypes.Text)
                                }, function(u) {
                                    var f = new(r.constructor.getVariableGroupType("PartnersHub.VirtualAccountCreation.ResidenceSelector.OnReady$javaScript1JSResult"));
                                    return f.sortedResidenceListOut = l.DataConversion.JSNodeParamConverter.from(u.SortedResidenceList, l.DataTypes.DataTypes.Text), f
                                }, {}, {})
                            } finally {
                                y && y.end()
                            }
                        }, 1), b.value.dataOut = l.JSONUtils.deserializeFromJSON(c.value.sortedResidenceListOut, P, !1), e.variables.filteredResidenceListVar = b.value.dataOut.residence_listAttr, e.variables.sortedResidenceListVar = b.value.dataOut.residence_listAttr, e.variables.currentResidenceVar = e.variables.websiteStatusIn.clients_countryAttr, _.setClientCountry(e.variables.websiteStatusIn.clients_countryAttr)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        onSearch$Action(t, e) {
            var r = this.controller;
            return l.Logger.startActiveSpan("OnSearch__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnSearch"), a.setAttribute("outsystems.function.key", "8473a3f6-13a2-4bc1-be90-3fc9e6b64d44"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onSearch$Action, e, t)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var e = this.controller;
            return l.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "e6553aa2-c16f-43c2-b326-b3355dc3a767"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onReady$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get onClickCountry$Action() {
            return this.hasOwnProperty("_onClickCountry$Action") || (this._onClickCountry$Action = function() {
                return Promise.resolve()
            }), this._onClickCountry$Action
        }
        set onClickCountry$Action(t) {
            this._onClickCountry$Action = t
        }
        get onClickBack$Action() {
            return this.hasOwnProperty("_onClickBack$Action") || (this._onClickBack$Action = function() {
                return Promise.resolve()
            }), this._onClickBack$Action
        }
        set onClickBack$Action(t) {
            this._onClickBack$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var e = this.controller,
                    r = this.model,
                    a = this.idService;
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var e = this.controller,
                    r = this.model,
                    a = this.idService;
                return e.onReady$Action(t)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
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
            return Q.defaultTimeout
        }
    };
    d(o, "ControllerInner");
    let m = o;
    E = m, E.registerVariableGroupType("PartnersHub.VirtualAccountCreation.ResidenceSelector.OnSearch$vars", [{
        name: "SearchedItemArg",
        attrName: "searchedItemArgInLocal",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), E.registerVariableGroupType("PartnersHub.VirtualAccountCreation.ResidenceSelector.OnSearch$javaScript1JSResult", [{
        name: "FilteredResidenceList",
        attrName: "filteredResidenceListOut",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), E.registerVariableGroupType("PartnersHub.VirtualAccountCreation.ResidenceSelector.OnReady$javaScript1JSResult", [{
        name: "SortedResidenceList",
        attrName: "sortedResidenceListOut",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }])
}
var E, se = new l.Controller.ControllerFactory(E, q);
var x = h,
    O = T.PlaceholderContent,
    Ae = T.IteratorPlaceholderContent,
    R = class R extends V.BaseWebBlock {
        static get displayName() {
            return "VirtualAccountCreation.ResidenceSelector"
        }
        static getAttributes() {
            return {
                codeFunction: "ResidenceSelector",
                functionKey: "18bb4f27-851a-4de9-8ca5-9c4fc4c361ff",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.VirtualAccountCreation.ResidenceSelector.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [L]
        }
        get modelFactory() {
            return ne
        }
        get controllerFactory() {
            return se
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                p = this.controller,
                t = this.idService,
                e = p.validationService,
                r = this.widgetsRecordProvider,
                a = p.callContext(),
                n = R.ifWidget,
                c = R.textWidget,
                s = R.asPrimitiveValue,
                b = R.getTranslation,
                y = this;
            return v.createElement("div", this.getRootNodeProperties(), v.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #fff; height: 100vh;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, v.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-right: 16px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }, v.createElement(L, {
                getOwnerSpan: d(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: d(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: d(function(u) {
                        p.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: e
                },
                _idProps: {
                    service: t,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    input: new O(function() {
                        return [v.createElement(Y, {
                            _validationProps: {
                                validationService: e
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 14px; height: 40px; margin-bottom: 16px; margin-right: 0px; margin-top: 0px; padding: 0px 0px 0px 38px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "0px"
                            },
                            inputType: 8,
                            mandatory: !1,
                            maxLength: 0,
                            onChange: d(function() {
                                var u = a.clone();
                                p.onSearch$Action(o.variables.searchedResidenceVar, p.callContext(u))
                            }, "onChange"),
                            prompt: x.Injector.resolve(x.ServiceNames.TranslationsService).getMessage("zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1", "Search"),
                            style: "form-control",
                            variable: o.createVariable(x.DataTypes.DataTypes.Text, o.variables.searchedResidenceVar, function(u) {
                                o.variables.searchedResidenceVar = u
                            }),
                            _idProps: {
                                service: t,
                                name: "Input_SearchedItem"
                            },
                            _widgetRecordProvider: r
                        })]
                    })
                },
                _dependencies: [s(o.variables.searchedResidenceVar)]
            })), n(x.BuiltinFunctions.length(o.variables.subtitleIn) > 0, !1, this, function() {
                return [v.createElement(N, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 14px; margin-right: 16px;"
                    },
                    gridProperties: {
                        marginLeft: "16px"
                    },
                    value: o.variables.subtitleIn,
                    _idProps: {
                        service: t,
                        uuid: "4"
                    },
                    _widgetRecordProvider: r,
                    value_dataFetchStatus: x.Model.calculateDataFetchStatus(o.variables._subtitleInDataFetchStatus)
                })]
            }, function() {
                return []
            }), n(o.variables.filteredResidenceListVar.length > 0, !1, this, function() {
                return [v.createElement(K, {
                    animateItems: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: o.variables.filteredResidenceListVar,
                    style: "list list-group residence-list",
                    tag: "div",
                    _idProps: {
                        service: t,
                        uuid: "5"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        content: new Ae(function(u, f) {
                            return [v.createElement(A, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: u,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: r,
                                _dependencies: [s(_.getIsCountryUnavailable()), s(o.variables.currentResidenceVar), s(o.variables._websiteStatusInDataFetchStatus), s(o.variables.websiteStatusIn.clients_countryAttr), s(o.variables.filteredResidenceListVar.getCurrent(f.iterationContext).textAttr), s(o.variables.filteredResidenceListVar.getCurrent(f.iterationContext).valueAttr)]
                            }, n(o.variables.filteredResidenceListVar.getCurrent(f.iterationContext).valueAttr === o.variables.websiteStatusIn.clients_countryAttr, !1, this, function() {
                                return [v.createElement(H, {
                                    extendedProperties: {
                                        style: "cursor: pointer; height: fit-content; margin-bottom: 0px; margin-top: 0px;"
                                    },
                                    onClick: d(function() {
                                        var I = f.clone();
                                        p.onClickCountry$Action(o.variables.filteredResidenceListVar.getCurrent(f.iterationContext), p.callContext(I))
                                    }, "onClick"),
                                    style: "list-item residence-item",
                                    triggerActionOnFullSwipeLeft: !0,
                                    triggerActionOnFullSwipeRight: !0,
                                    _idProps: {
                                        service: u,
                                        name: "CurrentCountryItem"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        leftActions: O.Empty,
                                        content: new O(function() {
                                            return [v.createElement(A, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "border-color: #e9ecef; border-style: none none solid none; border-width: 0px 0px 2px 0px; padding: 12px 0px 12px 0px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "8"
                                                },
                                                _widgetRecordProvider: r
                                            }, v.createElement(A, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 0px; margin-right: 16px; margin-top: 0px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "16px"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "9"
                                                },
                                                _widgetRecordProvider: r
                                            }, v.createElement(A, {
                                                align: 0,
                                                animate: !1,
                                                visible: !0,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "10"
                                                },
                                                _widgetRecordProvider: r
                                            }, v.createElement(A, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "border-color: #e9ecef; border-style: solid; border-width: 0px; padding: 12px 0px 12px 0px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: r
                                            }, v.createElement(A, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: r
                                            }, v.createElement(A, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; gap: 8px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: r
                                            }, v.createElement(N, {
                                                extendedProperties: {
                                                    style: "font-size: 20px; font-weight: 700;"
                                                },
                                                style: o.getCachedValue(u.getId("lC5fVYUy7Eal3CKv1kK3yQ.Style"), function() {
                                                    return o.variables.filteredResidenceListVar.getCurrent(f.iterationContext).valueAttr === o.variables.currentResidenceVar ? "current-country" : "country-list"
                                                }, function() {
                                                    return o.variables.filteredResidenceListVar.getCurrent(f.iterationContext).valueAttr
                                                }, function() {
                                                    return o.variables.currentResidenceVar
                                                }),
                                                value: o.variables.filteredResidenceListVar.getCurrent(f.iterationContext).textAttr,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "14"
                                                },
                                                _widgetRecordProvider: r
                                            }))))), v.createElement($, {
                                                extendedProperties: {
                                                    style: "cursor: pointer;"
                                                },
                                                icon: "angle-right",
                                                iconSize: 1,
                                                style: "icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "15"
                                                },
                                                _widgetRecordProvider: r
                                            })))]
                                        }),
                                        rightActions: O.Empty
                                    }
                                })]
                            }, function() {
                                return [v.createElement(H, {
                                    extendedProperties: {
                                        style: "cursor: pointer; height: fit-content; margin-bottom: 0px; margin-top: 0px;"
                                    },
                                    onClick: d(function() {
                                        var I = f.clone();
                                        p.onClickCountry$Action(o.variables.filteredResidenceListVar.getCurrent(f.iterationContext), p.callContext(I))
                                    }, "onClick"),
                                    style: o.getCachedValue(u.getId("ListItem1.Style"), function() {
                                        return o.variables.filteredResidenceListVar.getCurrent(f.iterationContext).valueAttr === o.variables.currentResidenceVar ? _.getIsCountryUnavailable() ? "list-item current-residence-item no-select" : "list-item current-residence-item" : "list-item residence-item"
                                    }, function() {
                                        return o.variables.filteredResidenceListVar.getCurrent(f.iterationContext).valueAttr
                                    }, function() {
                                        return o.variables.currentResidenceVar
                                    }, function() {
                                        return _.getIsCountryUnavailable()
                                    }),
                                    triggerActionOnFullSwipeLeft: !0,
                                    triggerActionOnFullSwipeRight: !0,
                                    _idProps: {
                                        service: u,
                                        name: "ListItem1"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        leftActions: O.Empty,
                                        content: new O(function() {
                                            return [v.createElement(A, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0px"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "17"
                                                },
                                                _widgetRecordProvider: r
                                            }, v.createElement(A, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "18"
                                                },
                                                _widgetRecordProvider: r
                                            }, v.createElement(A, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; gap: 8px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "19"
                                                },
                                                _widgetRecordProvider: r
                                            }, v.createElement(N, {
                                                extendedProperties: {
                                                    style: "font-size: 15px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0px"
                                                },
                                                style: o.getCachedValue(u.getId("kbAQbEuFikmTgsPEIEs6Sg.Style"), function() {
                                                    return o.variables.filteredResidenceListVar.getCurrent(f.iterationContext).valueAttr === o.variables.currentResidenceVar ? "current-country" : "country-list"
                                                }, function() {
                                                    return o.variables.filteredResidenceListVar.getCurrent(f.iterationContext).valueAttr
                                                }, function() {
                                                    return o.variables.currentResidenceVar
                                                }),
                                                value: o.variables.filteredResidenceListVar.getCurrent(f.iterationContext).textAttr,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: r
                                            }))), v.createElement($, {
                                                extendedProperties: {
                                                    style: "cursor: pointer;"
                                                },
                                                icon: "angle-right",
                                                iconSize: 1,
                                                style: "icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "21"
                                                },
                                                _widgetRecordProvider: r
                                            }))]
                                        }),
                                        rightActions: O.Empty
                                    }
                                })]
                            }))]
                        }, a, t, "1")
                    },
                    _dependencies: [s(_.getIsCountryUnavailable()), s(o.variables.currentResidenceVar), s(o.variables._websiteStatusInDataFetchStatus), s(o.variables.websiteStatusIn.clients_countryAttr)]
                })]
            }, function() {
                return [v.createElement(A, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "margin-top: 12px; text-align: center;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "22"
                    },
                    _widgetRecordProvider: r
                }, v.createElement(Z, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: t,
                        uuid: "23"
                    },
                    _widgetRecordProvider: r
                }, v.createElement(ee, {
                    extendedProperties: {
                        style: "color: #222; font-size: 16px;"
                    },
                    text: [c(b("NTn7X7AkMU+QdTPvRjMMCQ#Value", "Services not available"))],
                    _idProps: {
                        service: t,
                        uuid: "24"
                    },
                    _widgetRecordProvider: r
                })))]
            })))
        }
    };
d(R, "View");
var F = R,
    it = F;
export {
    He as a, it as b
};