import {
    a as O
} from "./_oschunk-EFUSIMB4.js";
import {
    a as w
} from "./_oschunk-Y45M2O2K.js";
import {
    a as f,
    d as E
} from "./_oschunk-27GDEXUT.js";
import {
    Me as A
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as S
} from "./_oschunk-NTQBNJ73.js";
import {
    c
} from "./_oschunk-DVBKI63I.js";
var L = {
        "A4Xjk+9CgEm9m3gqtwXjHw#Value": "Activ\xE9",
        "FawrB0ncP0yh8_O65T6_HA#Value": "Nom du drapeau",
        "XwjnmG0C5k6E0fljXSpEbA#Value": "R\xE9initialiser",
        "MV8ukmNCwE26Dfhf2CcJQA#Value": "Sauvegarder",
        "_jEEKfVxaUqriZ1u9xhKpw#Value": "Identifiant de l'application",
        "AEXNPcgQakKnKjJOkOVzrA#Value": "URL",
        "0pzc0E9tEkKafaLsKv+uSw#Value": "Changer le point de terminaison de l'API",
        "Nz1ECC2fMEqSLKQHL_o6YQ#Title": "Point de terminaison | Deriv",
        "Nz1ECC2fMEqSLKQHL_o6YQ#TitleExpression.1629896911.1": "Point de terminaison | Deriv"
    },
    R = {
        "fr-FR": {
            translations: L,
            isRTL: !1
        }
    };

function m(u, d, h, e) {
    let r = localStorage.featureFlags;
    localStorage.clear(), localStorage.setItem("config.server_url", u.URL), localStorage.setItem("ws-url", `wss://${u.URL}/websockets/v3?app_id=${u.AppId}&l=EN&brand=deriv`), localStorage.setItem("config.app_id", u.AppId), localStorage.setItem("featureFlags", r), setTimeout(function() {
        location.reload()
    }, 1e3)
}
c(m, "default");

function v(u, d, h, e) {
    return new Promise(function(r, t) {
        var i;
        let s = localStorage.getItem("config.server_url"),
            a = localStorage.getItem("config.app_id"),
            o = location.hostname,
            l = o === "hub.deriv.com" ? "61554" : o.includes("hub.deriv.me") ? "65205" : o.includes("hub.deriv.be") ? "65206" : o.includes("dev-hub") ? "15438" : o.includes("staging-hub") ? "53503" : null;
        u.FeatureFlags = (i = localStorage.featureFlags) != null ? i : JSON.stringify([]), s && a ? (u.URL = s, u.AppId = a) : (u.URL = "green.derivws.com", u.AppId = l), r()
    })
}
c(v, "default");

function _(u, d, h) {
    let e = localStorage.featureFlags;
    localStorage.clear(), localStorage.setItem("featureFlags", e), location.reload()
}
c(_, "default");

function C(u, d, h, e) {
    window == null || window.toggleFeatureFlag(u.FlagName)
}
c(C, "default");
var n = S; {
    let d = class d extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, R);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getLanguagesByEnabled$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getLanguagesByEnabled$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getLanguagesByEnabled$AggrRefresh() {
            return this.hasOwnProperty("_getLanguagesByEnabled$AggrRefresh") || (this._getLanguagesByEnabled$AggrRefresh = function() {
                var e = function(r, t, l) {
                    var a = this.model,
                        o = this.controller,
                        l = o.callContext(l);
                    return o.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetLanguagesByEnabled", "screenservices/tradershub/MainFlow/Endpoint/ScreenDataSetGetLanguagesByEnabled", "FK+LS4a0AESlZwxIMv6YXQ", r, t, function(i) {
                        a.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr = i
                    }, function(i) {
                        a.variables.getLanguagesByEnabledAggr.replaceWith(n.DataConversion.ServerDataConverter.from(i, a.variables.getLanguagesByEnabledAggr.constructor))
                    }, void 0, void 0, void 0, l, void 0, !0)
                }.bind(this);
                return n.Logger.startActiveSpan("GetLanguagesByEnabled", function(r) {
                    return r && (r.setAttribute("code.function", "GetLanguagesByEnabled"), r.setAttribute("outsystems.function.key", "aed25ae5-16c2-41a9-918b-a2ee79552d20"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), n.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._getLanguagesByEnabled$AggrRefresh
        }
        set getLanguagesByEnabled$AggrRefresh(e) {
            this._getLanguagesByEnabled$AggrRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getLanguagesByEnabled$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _saveOnClick$Action() {
            return this.hasOwnProperty("__saveOnClick$Action") || (this.__saveOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("SaveOnClick", function(a) {
                    a && (a.setAttribute("code.function", "SaveOnClick"), a.setAttribute("outsystems.function.key", "24964f40-1585-42af-9270-ab79bd32859f"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SaveOnClick"), e = t.callContext(e), r.widgets.get(s.getId("Form1")).validAttr && (n.FeedbackMessageService.showFeedbackMessage("Update success!", 1), n.Logger.startActiveSpan("SaveWSURL", function(o) {
                            o && (o.setAttribute("code.function", "SaveWSURL"), o.setAttribute("outsystems.function.key", "b3144945-09b0-4259-acb8-13f5fe8fb9e0"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(m, "SaveWSURL", "SaveOnClick", {
                                    AppId: n.DataConversion.JSNodeParamConverter.to(r.variables.appIdVar, n.DataTypes.DataTypes.Text),
                                    URL: n.DataConversion.JSNodeParamConverter.to(r.variables.uRLVar, n.DataTypes.DataTypes.Text)
                                }, function(l) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1))
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__saveOnClick$Action
        }
        set _saveOnClick$Action(e) {
            this.__saveOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "6b71ac30-0993-407a-8ac2-b0cc6d4ad0dd"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var o = new n.DataTypes.VariableHolder,
                            l = new n.DataTypes.VariableHolder(new(n.Controller.BaseController.getJSONDeserializeOutputType(A)));
                        return n.Flow.executeAsyncFlow(function() {
                            return n.Logger.startActiveSpan("GetConfig", function(i) {
                                i && (i.setAttribute("code.function", "GetConfig"), i.setAttribute("outsystems.function.key", "e468e45d-3ba4-43ec-be83-c0150dfb5b87"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteAsyncJSNode(v, "GetConfig", "OnReady", {
                                        URL: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text),
                                        AppId: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text),
                                        FeatureFlags: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                    }, function(g) {
                                        var y = new(t.constructor.getVariableGroupType("tradershub.MainFlow.Endpoint.OnReady$getConfigJSResult"));
                                        return y.uRLOut = n.DataConversion.JSNodeParamConverter.from(g.URL, n.DataTypes.DataTypes.Text), y.appIdOut = n.DataConversion.JSNodeParamConverter.from(g.AppId, n.DataTypes.DataTypes.Text), y.featureFlagsOut = n.DataConversion.JSNodeParamConverter.from(g.FeatureFlags, n.DataTypes.DataTypes.Text), y
                                    }, {}, {})
                                } finally {
                                    i && i.end()
                                }
                            }, 1).then(function(i) {
                                o.value = i
                            }).then(function() {
                                l.value.dataOut = n.JSONUtils.deserializeFromJSON(o.value.featureFlagsOut, A, !1), r.variables.uRLVar = o.value.uRLOut, r.variables.appIdVar = o.value.appIdOut, f.setAppId(o.value.appIdOut), f.setURL(o.value.uRLOut), r.variables.featureFlagsVar = l.value.dataOut
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
        get _resetOnClick$Action() {
            return this.hasOwnProperty("__resetOnClick$Action") || (this.__resetOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("ResetOnClick", function(a) {
                    a && (a.setAttribute("code.function", "ResetOnClick"), a.setAttribute("outsystems.function.key", "7324bba6-8178-4043-b82a-e5bc25c835b1"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ResetOnClick"), e = t.callContext(e), f.setWebsocketURL(f.getDefaultWebsocketURL()), n.FeedbackMessageService.showFeedbackMessage("Reset success!", 1), n.Logger.startActiveSpan("ResetWSConfig", function(o) {
                            o && (o.setAttribute("code.function", "ResetWSConfig"), o.setAttribute("outsystems.function.key", "4c1b0550-90a4-43ed-bace-ac4056664a43"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(_, "ResetWSConfig", "ResetOnClick", null, function(l) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__resetOnClick$Action
        }
        set _resetOnClick$Action(e) {
            this.__resetOnClick$Action = e
        }
        get _switchOnChange$Action() {
            return this.hasOwnProperty("__switchOnChange$Action") || (this.__switchOnChange$Action = function(e, r) {
                var t = this.model,
                    s = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("SwitchOnChange", function(o) {
                    o && (o.setAttribute("code.function", "SwitchOnChange"), o.setAttribute("outsystems.function.key", "a702c1bb-e919-4d28-bf36-142e3ec2e522"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("SwitchOnChange"), r = s.callContext(r);
                        var l = new n.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("tradershub.MainFlow.Endpoint.SwitchOnChange$vars")));
                        l.value.flagNameInLocal = e, n.Logger.startActiveSpan("UpdateFeatureFlagByName", function(i) {
                            i && (i.setAttribute("code.function", "UpdateFeatureFlagByName"), i.setAttribute("outsystems.function.key", "87e0d895-d309-4cc0-b2b0-777eef0561a6"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return s.safeExecuteJSNode(C, "UpdateFeatureFlagByName", "SwitchOnChange", {
                                    FlagName: n.DataConversion.JSNodeParamConverter.to(l.value.flagNameInLocal, n.DataTypes.DataTypes.Text)
                                }, function(g) {}, {}, {})
                            } finally {
                                i && i.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__switchOnChange$Action
        }
        set _switchOnChange$Action(e) {
            this.__switchOnChange$Action = e
        }
        get _onSwitchLanguage$Action() {
            return this.hasOwnProperty("__onSwitchLanguage$Action") || (this.__onSwitchLanguage$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("OnSwitchLanguage", function(a) {
                    return a && (a.setAttribute("code.function", "OnSwitchLanguage"), a.setAttribute("outsystems.function.key", "faca6888-8f11-4b45-9ca2-4ffd2cd3cebf"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnSwitchLanguage"), e = t.callContext(e), n.Flow.executeAsyncFlow(function() {
                            n.SystemActions.setCurrentLocale(f.getLanguage(), e);
                            var o = t.getLanguagesByEnabled$AggrRefresh(50, 0, e);
                            return r.flush(), o
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onSwitchLanguage$Action
        }
        set _onSwitchLanguage$Action(e) {
            this.__onSwitchLanguage$Action = e
        }
        saveOnClick$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("SaveOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "SaveOnClick"), t.setAttribute("outsystems.function.key", "24964f40-1585-42af-9270-ab79bd32859f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._saveOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "6b71ac30-0993-407a-8ac2-b0cc6d4ad0dd"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        resetOnClick$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("ResetOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "ResetOnClick"), t.setAttribute("outsystems.function.key", "7324bba6-8178-4043-b82a-e5bc25c835b1"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._resetOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        switchOnChange$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("SwitchOnChange__proxy", function(s) {
                s && (s.setAttribute("code.function", "SwitchOnChange"), s.setAttribute("outsystems.function.key", "a702c1bb-e919-4d28-bf36-142e3ec2e522"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._switchOnChange$Action, r, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        onSwitchLanguage$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnSwitchLanguage__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnSwitchLanguage"), t.setAttribute("outsystems.function.key", "faca6888-8f11-4b45-9ca2-4ffd2cd3cebf"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onSwitchLanguage$Action, e)
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
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
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
                return O.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return E.defaultTimeout
        }
    };
    c(d, "ControllerInner");
    let u = d;
    b = u, b.registerVariableGroupType("tradershub.MainFlow.Endpoint.OnReady$getConfigJSResult", [{
        name: "URL",
        attrName: "uRLOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "AppId",
        attrName: "appIdOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "FeatureFlags",
        attrName: "featureFlagsOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), b.registerVariableGroupType("tradershub.MainFlow.Endpoint.SwitchOnChange$vars", [{
        name: "FlagName",
        attrName: "flagNameInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var b, j = new n.Controller.ControllerFactory(b, w);
export {
    j as a
};