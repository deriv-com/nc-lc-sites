import {
    a as U
} from "./_oschunk-YVFTECWM.js";
import {
    f as z
} from "./_oschunk-VR5BNL2K.js";
import {
    a as J,
    g as O,
    m as $,
    o as H,
    q as N,
    r as P,
    s as x,
    t as R
} from "./_oschunk-4VHUVDBV.js";
import {
    Fb as g,
    Lb as v,
    Nb as I,
    Qb as c,
    vb as S
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as A,
    c as d,
    e as G
} from "./_oschunk-M5BUVJ72.js";
var l = A,
    T = class T extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new I)
            }, !1, I), this.attr("NoOptionsText_Default", "noOptionsText_DefaultVar", "NoOptionsText_Default", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return "There are no options to show."
            }, !1), this.attr("NoResultsText_Default", "noResultsText_DefaultVar", "NoResultsText_Default", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return "There are no options to show."
            }, !1), this.attr("Prompt_Default", "prompt_DefaultVar", "Prompt_Default", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return "Select..."
            }, !1), this.attr("SearchPrompt_Default", "searchPrompt_DefaultVar", "SearchPrompt_Default", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return "Search..."
            }, !1), this.attr("OptionsList", "optionsListIn", "OptionsList", !0, !1, l.DataTypes.DataTypes.RecordList, function() {
                return l.DataTypes.ImmutableBase.getData(new(l.GenericTypeCache.getGenericList(v)))
            }, !1, l.GenericTypeCache.getGenericList(v)), this.attr("_optionsListInDataFetchStatus", "_optionsListInDataFetchStatus", "_optionsListInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("StartingSelection", "startingSelectionIn", "StartingSelection", !0, !1, l.DataTypes.DataTypes.RecordList, function() {
                return l.DataTypes.ImmutableBase.getData(new(l.GenericTypeCache.getGenericList(v)))
            }, !1, l.GenericTypeCache.getGenericList(v)), this.attr("_startingSelectionInDataFetchStatus", "_startingSelectionInDataFetchStatus", "_startingSelectionInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Prompt", "promptIn", "Prompt", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return "Select..."
            }, !1), this.attr("_promptInDataFetchStatus", "_promptInDataFetchStatus", "_promptInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new g)
            }, !1, g), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(T, "VariablesRecord");
var h = T;
h.init();
var D = class D extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
d(D, "WidgetsRecord");
var _ = D,
    w = class w extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(o) {
            "OptionsList" in o && (this.variables.optionsListIn = o.OptionsList, "_optionsListInDataFetchStatus" in o && (this.variables._optionsListInDataFetchStatus = o._optionsListInDataFetchStatus)), "StartingSelection" in o && (this.variables.startingSelectionIn = o.StartingSelection, "_startingSelectionInDataFetchStatus" in o && (this.variables._startingSelectionInDataFetchStatus = o._startingSelectionInDataFetchStatus)), "Prompt" in o && (this.variables.promptIn = o.Prompt, "_promptInDataFetchStatus" in o && (this.variables._promptInDataFetchStatus = o._promptInDataFetchStatus)), "OptionalConfigs" in o && (this.variables.optionalConfigsIn = o.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in o && (this.variables._optionalConfigsInDataFetchStatus = o._optionalConfigsInDataFetchStatus)), "ExtendedClass" in o && (this.variables.extendedClassIn = o.ExtendedClass, "_extendedClassInDataFetchStatus" in o && (this.variables._extendedClassInDataFetchStatus = o._extendedClassInDataFetchStatus))
        }
    };
d(w, "Model");
var C = w;
C._hasValidationWidgetsValue = void 0;
var L = new l.Model.ModelFactory(C);
var V = G(J());
var k = {};

function E(y, o, p, e) {
    y.Initialized = o.InitializedHandler, y.OnSelected = o.OnSelectHandler
}
d(E, "default");
var a = A; {
    let o = class o extends a.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, k);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: d(function(r) {
                    return r = r === void 0 ? "" : r, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, a.DataConversion.JSNodeParamConverter.from(r, a.DataTypes.DataTypes.Text)), i.callContext(), function(u) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onSelectHandler$Action: d(function(r, u) {
                    return r = r === void 0 ? "" : r, u = u === void 0 ? "" : u, i.executeActionInsideJSNode(i._onSelectHandler$Action.bind(i, a.DataConversion.JSNodeParamConverter.from(r, a.DataTypes.DataTypes.Text), a.DataConversion.JSNodeParamConverter.from(u, a.DataTypes.DataTypes.Text)), i.callContext(), function(s) {
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
                    n = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "0d159f84-d40b-428b-8fcf-df8a7d87a020"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnDestroy"), e = n.callContext(e), c.dropdownDestroy$Action(t.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        r && r.end()
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
                    n = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "1829e28b-fb2a-4de4-897f-3c5571d2e267"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnInitialize"), e = n.callContext(e);
                        var u = new a.DataTypes.VariableHolder,
                            s = new a.DataTypes.VariableHolder(new a.DataTypes.JSONSerializeOutputType);
                        c.logEvent$Action(S.logType.general, "Going to create Dropdown Search", e), u.value = c.generateUniqueId$Action(t.variables.internalConfigsVar.uniqueIdAttr, e), t.variables.internalConfigsVar.uniqueIdAttr = u.value.unique_IDOut, t.variables.internalConfigsVar.optionsListAttr = t.variables.optionsListIn, t.variables.internalConfigsVar.startingSelectionAttr = t.variables.startingSelectionIn, t.variables.internalConfigsVar.isDisabledAttr = t.variables.optionalConfigsIn.isDisabledAttr, t.variables.internalConfigsVar.promptAttr = t.variables.promptIn === "" ? t.variables.prompt_DefaultVar : t.variables.promptIn, t.variables.internalConfigsVar.noResultsTextAttr = t.variables.optionalConfigsIn.noResultsTextAttr === "" ? t.variables.noResultsText_DefaultVar : t.variables.optionalConfigsIn.noResultsTextAttr, t.variables.internalConfigsVar.searchPromptAttr = t.variables.optionalConfigsIn.searchPromptAttr === "" ? t.variables.searchPrompt_DefaultVar : t.variables.optionalConfigsIn.searchPromptAttr, t.variables.internalConfigsVar.allowMultipleSelectionAttr = t.variables.optionalConfigsIn.allowMultipleSelectionAttr, t.variables.internalConfigsVar.extendedClassAttr = t.variables.extendedClassIn, t.variables.internalConfigsVar.noOptionsTextAttr = t.variables.optionalConfigsIn.noOptionsTextAttr === "" ? t.variables.noOptionsText_DefaultVar : t.variables.optionalConfigsIn.noOptionsTextAttr, t.variables.internalConfigsVar.sanitizeDropdownValuesAttr = t.variables.optionalConfigsIn.sanitizeDropdownValuesAttr, s.value.jSONOut = a.JSONUtils.serializeToJSON(t.variables.internalConfigsVar, !0, !1), c.dropdownCreate$Action(t.variables.internalConfigsVar.uniqueIdAttr, S.dropdownType.search, S.dropdownProvider.virtualSelect, s.value.jSONOut, e), n._registerCallbacks$Action(e)
                    } finally {
                        r && r.end()
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
                    n = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "300cda6f-bc6d-4ad5-9077-8037b6e5082b"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e), c.dropdownInitialize$Action(t.variables.internalConfigsVar.uniqueIdAttr, e), c.logEvent$Action(S.logType.general, "Dropdown Search created", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, t) {
                var n = this.model,
                    i = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("InitializedHandler", function(u) {
                    return u && (u.setAttribute("code.function", "InitializedHandler"), u.setAttribute("outsystems.function.key", "448950a4-050f-4479-93a4-a88cbeac8025"), u.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), u.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), t = i.callContext(t);
                        var s = new a.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.InitializedHandler$vars")));
                        return s.value.dropdownSearchIdInLocal = e, a.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(s.value.dropdownSearchIdInLocal, t)
                        })
                    }, function() {
                        u && u.end()
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
                    n = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "5c3e9294-b0aa-4efc-9d8f-36887d45bc69"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnParametersChanged"), e = n.callContext(e);
                        var u = new a.DataTypes.VariableHolder(new a.DataTypes.JSONSerializeOutputType),
                            s = new a.DataTypes.VariableHolder(new a.DataTypes.JSONSerializeOutputType),
                            f = new a.DataTypes.VariableHolder(new a.DataTypes.JSONSerializeOutputType),
                            b = new a.DataTypes.VariableHolder(new a.DataTypes.JSONSerializeOutputType);
                        u.value.jSONOut = a.JSONUtils.serializeToJSON(t.variables.optionsListIn, !1, !1), b.value.jSONOut = a.JSONUtils.serializeToJSON(t.variables.internalConfigsVar.optionsListAttr, !1, !1), u.value.jSONOut !== b.value.jSONOut && (t.variables.internalConfigsVar.optionsListAttr = t.variables.optionsListIn, c.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "OptionsList", u.value.jSONOut, e)), f.value.jSONOut = a.JSONUtils.serializeToJSON(t.variables.startingSelectionIn, !1, !1), s.value.jSONOut = a.JSONUtils.serializeToJSON(t.variables.internalConfigsVar.startingSelectionAttr, !1, !1), f.value.jSONOut !== s.value.jSONOut && (t.variables.internalConfigsVar.startingSelectionAttr = t.variables.startingSelectionIn, c.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "StartingSelection", f.value.jSONOut, e)), t.variables.promptIn !== t.variables.internalConfigsVar.promptAttr && (t.variables.internalConfigsVar.promptAttr = t.variables.promptIn === "" ? t.variables.prompt_DefaultVar : t.variables.promptIn, c.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "Prompt", t.variables.internalConfigsVar.promptAttr, e)), t.variables.optionalConfigsIn.isDisabledAttr !== t.variables.internalConfigsVar.isDisabledAttr && (t.variables.internalConfigsVar.isDisabledAttr = t.variables.optionalConfigsIn.isDisabledAttr, c.dropdownChangeBooleanProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "IsDisabled", t.variables.internalConfigsVar.isDisabledAttr, e)), t.variables.optionalConfigsIn.noResultsTextAttr !== t.variables.internalConfigsVar.noResultsTextAttr && (t.variables.internalConfigsVar.noResultsTextAttr = t.variables.optionalConfigsIn.noResultsTextAttr === "" ? t.variables.noResultsText_DefaultVar : t.variables.optionalConfigsIn.noResultsTextAttr, c.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "NoResultsText", t.variables.internalConfigsVar.noResultsTextAttr, e)), t.variables.optionalConfigsIn.noOptionsTextAttr !== t.variables.internalConfigsVar.noOptionsTextAttr && (t.variables.internalConfigsVar.noOptionsTextAttr = t.variables.optionalConfigsIn.noOptionsTextAttr === "" ? t.variables.noOptionsText_DefaultVar : t.variables.optionalConfigsIn.noOptionsTextAttr, c.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "NoOptionsText", t.variables.internalConfigsVar.noOptionsTextAttr, e)), t.variables.optionalConfigsIn.searchPromptAttr !== t.variables.internalConfigsVar.searchPromptAttr && (t.variables.internalConfigsVar.searchPromptAttr = t.variables.optionalConfigsIn.searchPromptAttr === "" ? t.variables.searchPrompt_DefaultVar : t.variables.optionalConfigsIn.searchPromptAttr, c.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "SearchPrompt", t.variables.internalConfigsVar.searchPromptAttr, e)), t.variables.optionalConfigsIn.allowMultipleSelectionAttr !== t.variables.internalConfigsVar.allowMultipleSelectionAttr && (t.variables.internalConfigsVar.allowMultipleSelectionAttr = t.variables.optionalConfigsIn.allowMultipleSelectionAttr, c.dropdownChangeBooleanProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "AllowMultipleSelection", t.variables.internalConfigsVar.allowMultipleSelectionAttr, e)), t.variables.optionalConfigsIn.sanitizeDropdownValuesAttr !== t.variables.internalConfigsVar.sanitizeDropdownValuesAttr && (t.variables.internalConfigsVar.sanitizeDropdownValuesAttr = t.variables.optionalConfigsIn.sanitizeDropdownValuesAttr, c.dropdownChangeBooleanProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "SanitizeDropdownValues", t.variables.internalConfigsVar.sanitizeDropdownValuesAttr, e)), t.variables.extendedClassIn !== t.variables.internalConfigsVar.extendedClassAttr && (t.variables.internalConfigsVar.extendedClassAttr = t.variables.extendedClassIn, c.dropdownChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", t.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onSelectHandler$Action() {
            return this.hasOwnProperty("__onSelectHandler$Action") || (this.__onSelectHandler$Action = function(e, t, n) {
                var i = this.model,
                    r = this.controller,
                    u = this.idService;
                return a.Logger.startActiveSpan("OnSelectHandler", function(s) {
                    return s && (s.setAttribute("code.function", "OnSelectHandler"), s.setAttribute("outsystems.function.key", "7c7c4cf1-f156-4ef8-92cb-84f29f556a1f"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnSelectHandler"), n = r.callContext(n);
                        var f = new a.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.OnSelectHandler$vars")));
                        f.value.dropdownSearchIdInLocal = e, f.value.selectedOptionsJSONInLocal = t;
                        var b = new a.DataTypes.VariableHolder(new(a.Controller.BaseController.getJSONDeserializeOutputType(a.GenericTypeCache.getGenericList(v))));
                        return a.Flow.executeAsyncFlow(function() {
                            return b.value.dataOut = a.JSONUtils.deserializeFromJSON(f.value.selectedOptionsJSONInLocal, a.GenericTypeCache.getGenericList(v), !1), r.onChanged$Action(f.value.dropdownSearchIdInLocal, b.value.dataOut, n)
                        })
                    }, function() {
                        s && s.end()
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
                    n = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("RegisterCallbacks", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallbacks"), r.setAttribute("outsystems.function.key", "b3e3288b-aff8-45b1-91d8-35d03b871702"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("RegisterCallbacks"), e = n.callContext(e);
                        var u = new a.DataTypes.VariableHolder;
                        u.value = a.Logger.startActiveSpan("GetCallbackHandlers", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandlers"), s.setAttribute("outsystems.function.key", "e042847c-74b0-49ac-b76b-1a6c2c1e5522"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(E, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnSelected: a.DataConversion.JSNodeParamConverter.to(null, a.DataTypes.DataTypes.Object),
                                    Initialized: a.DataConversion.JSNodeParamConverter.to(null, a.DataTypes.DataTypes.Object)
                                }, function(f) {
                                    var b = new(n.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return b.onSelectedOut = a.DataConversion.JSNodeParamConverter.from(f.OnSelected, a.DataTypes.DataTypes.Object), b.initializedOut = a.DataConversion.JSNodeParamConverter.from(f.Initialized, a.DataTypes.DataTypes.Object), b
                                }, {
                                    InitializedHandler: n.clientActionProxies.initializedHandler$Action,
                                    OnSelectHandler: n.clientActionProxies.onSelectHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), c.dropdownRegisterCallback$Action(t.variables.internalConfigsVar.uniqueIdAttr, S.registeredCallbackEvents.onSelected, u.value.onSelectedOut, e), c.dropdownRegisterCallback$Action(t.variables.internalConfigsVar.uniqueIdAttr, S.registeredCallbackEvents.initialized, u.value.initializedOut, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        onDestroy$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnDestroy__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "0d159f84-d40b-428b-8fcf-df8a7d87a020"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onDestroy$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnInitialize__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "1829e28b-fb2a-4de4-897f-3c5571d2e267"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "300cda6f-bc6d-4ad5-9077-8037b6e5082b"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "448950a4-050f-4479-93a4-a88cbeac8025"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._initializedHandler$Action, t, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnParametersChanged__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "5c3e9294-b0aa-4efc-9d8f-36887d45bc69"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onParametersChanged$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onSelectHandler$Action(e, t, n) {
            var i = this.controller;
            return a.Logger.startActiveSpan("OnSelectHandler__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnSelectHandler"), r.setAttribute("outsystems.function.key", "7c7c4cf1-f156-4ef8-92cb-84f29f556a1f"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onSelectHandler$Action, n, e, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        registerCallbacks$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("RegisterCallbacks__proxy", function(n) {
                n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "b3e3288b-aff8-45b1-91d8-35d03b871702"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._registerCallbacks$Action, e)
                } finally {
                    n && n.end()
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
                    n = this.model,
                    i = this.idService;
                return t.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    n = this.model,
                    i = this.idService;
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
                    n = this.model,
                    i = this.idService;
                return t.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var t = this.controller,
                    n = this.model,
                    i = this.idService;
                return t.onParametersChanged$Action(e)
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
            return c.defaultTimeout
        }
    };
    d(o, "ControllerInner");
    let y = o;
    m = y, m.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.InitializedHandler$vars", [{
        name: "DropdownSearchId",
        attrName: "dropdownSearchIdInLocal",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.OnSelectHandler$vars", [{
        name: "DropdownSearchId",
        attrName: "dropdownSearchIdInLocal",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "SelectedOptionsJSON",
        attrName: "selectedOptionsJSONInLocal",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnSelected",
        attrName: "onSelectedOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Object,
        defaultValue: d(function() {
            return null
        }, "defaultValue")
    }, {
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Object,
        defaultValue: d(function() {
            return null
        }, "defaultValue")
    }])
}
var m, F = new a.Controller.ControllerFactory(m, U);
var vt = O.PlaceholderContent,
    St = O.IteratorPlaceholderContent,
    q = d(function() {
        var y = H(function(o) {
            var p = o.model,
                e = o.controller,
                t = o.controller.idService,
                n = e.validationService,
                i = e.callContext(),
                r = x,
                u = R,
                s = {
                    props: o,
                    validateWidget: d(function(M) {
                        o.validateWidget(o, M)
                    }, "validateWidget")
                },
                f = p,
                b = P,
                B = N,
                W = $();
            return V.createElement("div", o.rootNodeProperties, b(!1, !1, this, function() {
                return []
            }, function() {
                return [V.createElement(z, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: p.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-dropdown-search",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "DropdownSearch"
                    },
                    _widgetRecordProvider: f
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: d(function() {
                return {
                    codeFunction: "DropdownSearch",
                    functionKey: "b808428c-a355-4da5-ae16-6203477cd31c",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Interaction.DropdownSearch",
            modelFactory: L,
            controllerFactory: F
        });
        return y.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, y.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.UserScripts.Virtualselect.js", "scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }, y.getBlocks = function() {
            return []
        }, y
    }, "componentFactory"),
    mt = q();
export {
    mt as a
};