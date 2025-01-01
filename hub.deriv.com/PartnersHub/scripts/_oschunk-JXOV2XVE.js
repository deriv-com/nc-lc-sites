import {
    a as A
} from "./_oschunk-WOBRVJRS.js";
import {
    a as b
} from "./_oschunk-4GXKK3IG.js";
import {
    a as i,
    q as g
} from "./_oschunk-BDI2RWOA.js";
import {
    Ac as y
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as f
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as h
} from "./_oschunk-QHO7QY6K.js";
var _ = {};
var a = f; {
    let u = class u extends a.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, _);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getLanguagesByEnabled$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getLanguagesByEnabled$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getLanguagesByEnabled$AggrRefresh() {
            return this.hasOwnProperty("_getLanguagesByEnabled$AggrRefresh") || (this._getLanguagesByEnabled$AggrRefresh = function() {
                var e = function(n, t, d) {
                    var r = this.model,
                        o = this.controller,
                        d = o.callContext(d);
                    return o.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetLanguagesByEnabled", "screenservices/PartnersHub/Home/PartnersHubDashboard/ScreenDataSetGetLanguagesByEnabled", "cnBgnoMwy_TAeq5mNtfykw", n, t, function(l) {
                        r.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr = l
                    }, function(l) {
                        r.variables.getLanguagesByEnabledAggr.replaceWith(a.DataConversion.ServerDataConverter.from(l, r.variables.getLanguagesByEnabledAggr.constructor))
                    }, void 0, void 0, void 0, d, i, !0)
                }.bind(this);
                return a.Logger.startActiveSpan("GetLanguagesByEnabled", function(n) {
                    return n && (n.setAttribute("code.function", "GetLanguagesByEnabled"), n.setAttribute("outsystems.function.key", "6dbd848d-a8c0-4816-acf2-77b315e5af6b"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), a.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        n && n.end()
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
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "6f4e55b7-9dc8-4ff7-93c2-413003e19445"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), g.rudderstackTrackEvent$Action(function() {
                            var o = new y;
                            return o.actionAttr = "homepage_open", o
                        }(), "ce_partnershub_form", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onSwitchLanguage$Action() {
            return this.hasOwnProperty("__onSwitchLanguage$Action") || (this.__onSwitchLanguage$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return a.Logger.startActiveSpan("OnSwitchLanguage", function(r) {
                    return r && (r.setAttribute("code.function", "OnSwitchLanguage"), r.setAttribute("outsystems.function.key", "8ea2c90e-3ddd-4d7e-9528-479d591dbba3"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnSwitchLanguage"), e = t.callContext(e), a.Flow.executeAsyncFlow(function() {
                            a.SystemActions.setCurrentLocale(i.getLanguage(), e), i.setLanguageShortCode(n.variables.getLanguagesByEnabledAggr.listOut.getCurrent(e.iterationContext).languagesAttr.shortCodeAttr);
                            var o = t.getLanguagesByEnabled$AggrRefresh(50, 0, e);
                            return n.flush(), o
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onSwitchLanguage$Action
        }
        set _onSwitchLanguage$Action(e) {
            this.__onSwitchLanguage$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "6f4e55b7-9dc8-4ff7-93c2-413003e19445"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSwitchLanguage$Action(e) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnSwitchLanguage__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnSwitchLanguage"), t.setAttribute("outsystems.function.key", "8ea2c90e-3ddd-4d7e-9528-479d591dbba3"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onSwitchLanguage$Action, e)
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
                    c = this.idService;
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
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return A.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return g.defaultTimeout
        }
    };
    h(u, "ControllerInner");
    let s = u;
    E = s
}
var E, C = new a.Controller.ControllerFactory(E, b);
export {
    C as a
};