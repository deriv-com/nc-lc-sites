import {
    a as w
} from "./_oschunk-VG7T2MUB.js";
import {
    a as T
} from "./_oschunk-BHZNFATE.js";
import {
    h as p
} from "./_oschunk-WAXNMQCP.js";
import {
    a as N,
    g as _,
    i as h
} from "./_oschunk-J7LCUWB3.js";
import {
    a as l
} from "./_oschunk-H7UK4VZM.js";
import {
    s as C
} from "./_oschunk-JSVFHRDW.js";
import {
    Bd as y
} from "./_oschunk-44PT7RP7.js";
import {
    ia as S
} from "./_oschunk-NTQBNJ73.js";
import {
    c,
    g as E
} from "./_oschunk-DVBKI63I.js";
var O = E(N());
var D = {};

function g(A, f, m, e) {
    A.Initialized = f.InitializedHandler, A.OnSelected = f.OnSelectHandler
}
c(g, "default");
var i = S; {
    let f = class f extends i.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, D);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: c(function(n) {
                    return n = n === void 0 ? "" : n, o.executeActionInsideJSNode(o._initializedHandler$Action.bind(o, i.DataConversion.JSNodeParamConverter.from(n, i.DataTypes.DataTypes.Text)), o.callContext(), function(s) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onSelectHandler$Action: c(function(n, s) {
                    return n = n === void 0 ? "" : n, s = s === void 0 ? "" : s, o.executeActionInsideJSNode(o._onSelectHandler$Action.bind(o, i.DataConversion.JSNodeParamConverter.from(n, i.DataTypes.DataTypes.Text), i.DataConversion.JSNodeParamConverter.from(s, i.DataTypes.DataTypes.Text)), o.callContext(), function(a) {
                        return {}
                    }, function() {}, "OnSelectHandler")
                }, "onSelectHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "0d159f84-d40b-428b-8fcf-df8a7d87a020"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnDestroy"), e = r.callContext(e), l.dropdownDestroy$Action(t.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "1829e28b-fb2a-4de4-897f-3c5571d2e267"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnInitialize"), e = r.callContext(e);
                        var s = new i.DataTypes.VariableHolder,
                            a = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        l.logEvent$Action(y.logType.general, "Going to create Dropdown Search", e), s.value = l.generateUniqueId$Action(t.variables.internalConfigsVar.uniqueIdAttr, e), t.variables.internalConfigsVar.uniqueIdAttr = s.value.unique_IDOut, t.variables.internalConfigsVar.optionsListAttr = t.variables.optionsListIn, t.variables.internalConfigsVar.startingSelectionAttr = t.variables.startingSelectionIn, t.variables.internalConfigsVar.isDisabledAttr = t.variables.optionalConfigsIn.isDisabledAttr, t.variables.internalConfigsVar.promptAttr = t.variables.promptIn === "" ? t.variables.prompt_DefaultVar : t.variables.promptIn, t.variables.internalConfigsVar.noResultsTextAttr = t.variables.optionalConfigsIn.noResultsTextAttr === "" ? t.variables.noResultsText_DefaultVar : t.variables.optionalConfigsIn.noResultsTextAttr, t.variables.internalConfigsVar.searchPromptAttr = t.variables.optionalConfigsIn.searchPromptAttr === "" ? t.variables.searchPrompt_DefaultVar : t.variables.optionalConfigsIn.searchPromptAttr, t.variables.internalConfigsVar.allowMultipleSelectionAttr = t.variables.optionalConfigsIn.allowMultipleSelectionAttr, t.variables.internalConfigsVar.extendedClassAttr = t.variables.extendedClassIn, t.variables.internalConfigsVar.noOptionsTextAttr = t.variables.optionalConfigsIn.noOptionsTextAttr === "" ? t.variables.noOptionsText_DefaultVar : t.variables.optionalConfigsIn.noOptionsTextAttr, a.value.jSONOut = i.JSONUtils.serializeToJSON(t.variables.internalConfigsVar, !0, !1), l.dropdownCreate$Action(t.variables.internalConfigsVar.uniqueIdAttr, y.dropdownType.search, y.dropdownProvider.virtualSelect, a.value.jSONOut, e), r._registerCallbacks$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "300cda6f-bc6d-4ad5-9077-8037b6e5082b"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e), l.dropdownInitialize$Action(t.variables.internalConfigsVar.uniqueIdAttr, e), l.logEvent$Action(y.logType.general, "Dropdown Search created", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, t) {
                var r = this.model,
                    o = this.controller,
                    n = this.idService;
                return i.Logger.startActiveSpan("InitializedHandler", function(s) {
                    return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "448950a4-050f-4479-93a4-a88cbeac8025"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), t = o.callContext(t);
                        var a = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.InitializedHandler$vars")));
                        return a.value.dropdownSearchIdInLocal = e, i.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(a.value.dropdownSearchIdInLocal, t)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "5c3e9294-b0aa-4efc-9d8f-36887d45bc69"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnParametersChanged"), e = r.callContext(e);
                        var s = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType),
                            a = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType),
                            u = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType),
                            d = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        s.value.jSONOut = i.JSONUtils.serializeToJSON(t.variables.optionsListIn, !1, !1), d.value.jSONOut = i.JSONUtils.serializeToJSON(t.variables.internalConfigsVar.optionsListAttr, !1, !1), s.value.jSONOut !== d.value.jSONOut && (t.variables.internalConfigsVar.optionsListAttr = t.variables.optionsListIn, l.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "OptionsList", s.value.jSONOut, e)), u.value.jSONOut = i.JSONUtils.serializeToJSON(t.variables.startingSelectionIn, !1, !1), a.value.jSONOut = i.JSONUtils.serializeToJSON(t.variables.internalConfigsVar.startingSelectionAttr, !1, !1), u.value.jSONOut !== a.value.jSONOut && (t.variables.internalConfigsVar.startingSelectionAttr = t.variables.startingSelectionIn, l.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "StartingSelection", u.value.jSONOut, e)), t.variables.promptIn !== t.variables.internalConfigsVar.promptAttr && (t.variables.internalConfigsVar.promptAttr = t.variables.promptIn === "" ? t.variables.prompt_DefaultVar : t.variables.promptIn, l.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "Prompt", t.variables.internalConfigsVar.promptAttr, e)), t.variables.optionalConfigsIn.isDisabledAttr !== t.variables.internalConfigsVar.isDisabledAttr && (t.variables.internalConfigsVar.isDisabledAttr = t.variables.optionalConfigsIn.isDisabledAttr, l.dropdownChangeBooleanProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "IsDisabled", t.variables.internalConfigsVar.isDisabledAttr, e)), t.variables.optionalConfigsIn.noResultsTextAttr !== t.variables.internalConfigsVar.noResultsTextAttr && (t.variables.internalConfigsVar.noResultsTextAttr = t.variables.optionalConfigsIn.noResultsTextAttr === "" ? t.variables.noResultsText_DefaultVar : t.variables.optionalConfigsIn.noResultsTextAttr, l.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "NoResultsText", t.variables.internalConfigsVar.noResultsTextAttr, e)), t.variables.optionalConfigsIn.noOptionsTextAttr !== t.variables.internalConfigsVar.noOptionsTextAttr && (t.variables.internalConfigsVar.noOptionsTextAttr = t.variables.optionalConfigsIn.noOptionsTextAttr === "" ? t.variables.noOptionsText_DefaultVar : t.variables.optionalConfigsIn.noOptionsTextAttr, l.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "NoOptionsText", t.variables.internalConfigsVar.noOptionsTextAttr, e)), t.variables.optionalConfigsIn.searchPromptAttr !== t.variables.internalConfigsVar.searchPromptAttr && (t.variables.internalConfigsVar.searchPromptAttr = t.variables.optionalConfigsIn.searchPromptAttr === "" ? t.variables.searchPrompt_DefaultVar : t.variables.optionalConfigsIn.searchPromptAttr, l.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "SearchPrompt", t.variables.internalConfigsVar.searchPromptAttr, e)), t.variables.optionalConfigsIn.allowMultipleSelectionAttr !== t.variables.internalConfigsVar.allowMultipleSelectionAttr && (t.variables.internalConfigsVar.allowMultipleSelectionAttr = t.variables.optionalConfigsIn.allowMultipleSelectionAttr, l.dropdownChangeBooleanProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "AllowMultipleSelection", t.variables.internalConfigsVar.allowMultipleSelectionAttr, e)), t.variables.extendedClassIn !== t.variables.internalConfigsVar.extendedClassAttr && (t.variables.internalConfigsVar.extendedClassAttr = t.variables.extendedClassIn, l.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", t.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onSelectHandler$Action() {
            return this.hasOwnProperty("__onSelectHandler$Action") || (this.__onSelectHandler$Action = function(e, t, r) {
                var o = this.model,
                    n = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnSelectHandler", function(a) {
                    return a && (a.setAttribute("code.function", "OnSelectHandler"), a.setAttribute("outsystems.function.key", "7c7c4cf1-f156-4ef8-92cb-84f29f556a1f"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnSelectHandler"), r = n.callContext(r);
                        var u = new i.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.OnSelectHandler$vars")));
                        u.value.dropdownSearchIdInLocal = e, u.value.selectedOptionsJSONInLocal = t;
                        var d = new i.DataTypes.VariableHolder(new(i.Controller.BaseController.getJSONDeserializeOutputType(C)));
                        return i.Flow.executeAsyncFlow(function() {
                            return d.value.dataOut = i.JSONUtils.deserializeFromJSON(u.value.selectedOptionsJSONInLocal, C, !1), n.onChanged$Action(u.value.dropdownSearchIdInLocal, d.value.dataOut, r)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onSelectHandler$Action
        }
        set _onSelectHandler$Action(e) {
            this.__onSelectHandler$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "b3e3288b-aff8-45b1-91d8-35d03b871702"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("RegisterCallbacks"), e = r.callContext(e);
                        var s = new i.DataTypes.VariableHolder;
                        s.value = i.Logger.startActiveSpan("GetCallbackHandlers", function(a) {
                            a && (a.setAttribute("code.function", "GetCallbackHandlers"), a.setAttribute("outsystems.function.key", "e042847c-74b0-49ac-b76b-1a6c2c1e5522"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(g, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnSelected: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object),
                                    Initialized: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object)
                                }, function(u) {
                                    var d = new(r.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return d.onSelectedOut = i.DataConversion.JSNodeParamConverter.from(u.OnSelected, i.DataTypes.DataTypes.Object), d.initializedOut = i.DataConversion.JSNodeParamConverter.from(u.Initialized, i.DataTypes.DataTypes.Object), d
                                }, {
                                    InitializedHandler: r.clientActionProxies.initializedHandler$Action,
                                    OnSelectHandler: r.clientActionProxies.onSelectHandler$Action
                                }, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), l.dropdownRegisterCallback$Action(t.variables.internalConfigsVar.uniqueIdAttr, y.registeredCallbackEvents.onSelected, s.value.onSelectedOut, e), l.dropdownRegisterCallback$Action(t.variables.internalConfigsVar.uniqueIdAttr, y.registeredCallbackEvents.initialized, s.value.initializedOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        onDestroy$Action(e) {
            var t = this.controller;
            return i.Logger.startActiveSpan("OnDestroy__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "0d159f84-d40b-428b-8fcf-df8a7d87a020"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onDestroy$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var t = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "1829e28b-fb2a-4de4-897f-3c5571d2e267"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "300cda6f-bc6d-4ad5-9077-8037b6e5082b"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, t) {
            var r = this.controller;
            return i.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "448950a4-050f-4479-93a4-a88cbeac8025"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._initializedHandler$Action, t, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var t = this.controller;
            return i.Logger.startActiveSpan("OnParametersChanged__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "5c3e9294-b0aa-4efc-9d8f-36887d45bc69"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onParametersChanged$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onSelectHandler$Action(e, t, r) {
            var o = this.controller;
            return i.Logger.startActiveSpan("OnSelectHandler__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnSelectHandler"), n.setAttribute("outsystems.function.key", "7c7c4cf1-f156-4ef8-92cb-84f29f556a1f"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onSelectHandler$Action, r, e, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        registerCallbacks$Action(e) {
            var t = this.controller;
            return i.Logger.startActiveSpan("RegisterCallbacks__proxy", function(r) {
                r && (r.setAttribute("code.function", "RegisterCallbacks"), r.setAttribute("outsystems.function.key", "b3e3288b-aff8-45b1-91d8-35d03b871702"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._registerCallbacks$Action, e)
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
        set initialized$Action(e) {
            this._initialized$Action = e
        }
        get onChanged$Action() {
            return this.hasOwnProperty("_onChanged$Action") || (this._onChanged$Action = function() {
                return Promise.resolve()
            }), this._onChanged$Action
        }
        set onChanged$Action(e) {
            this._onChanged$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    o = this.idService;
                return t.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    o = this.idService;
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    o = this.idService;
                return t.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    o = this.idService;
                return t.onParametersChanged$Action(e)
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
            return l.defaultTimeout
        }
    };
    c(f, "ControllerInner");
    let A = f;
    v = A, v.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.InitializedHandler$vars", [{
        name: "DropdownSearchId",
        attrName: "dropdownSearchIdInLocal",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), v.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.OnSelectHandler$vars", [{
        name: "DropdownSearchId",
        attrName: "dropdownSearchIdInLocal",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "SelectedOptionsJSON",
        attrName: "selectedOptionsJSONInLocal",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), v.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnSelected",
        attrName: "onSelectedOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }, {
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }])
}
var v, $ = new i.Controller.ControllerFactory(v, T);
var W = h.PlaceholderContent,
    K = h.IteratorPlaceholderContent,
    b = class b extends _.BaseWebBlock {
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
            return w
        }
        get controllerFactory() {
            return $
        }
        get title() {
            return ""
        }
        internalRender() {
            let f = this.model,
                m = this.controller,
                e = this.idService,
                t = m.validationService,
                r = this.widgetsRecordProvider,
                o = m.callContext(),
                n = b.ifWidget,
                s = b.textWidget,
                a = b.asPrimitiveValue,
                u = b.getTranslation,
                d = this;
            return O.createElement("div", this.getRootNodeProperties(), n(!1, !1, this, function() {
                return []
            }, function() {
                return [O.createElement(p, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: f.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-dropdown-search",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "DropdownSearch"
                    },
                    _widgetRecordProvider: r
                })]
            }))
        }
    };
c(b, "View");
var I = b,
    Q = I;
export {
    Q as a
};