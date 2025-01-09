import {
    a as b
} from "./_oschunk-FX7ZCYVH.js";
import {
    a as g
} from "./_oschunk-NQZZDANH.js";
import {
    a,
    o as u
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as y
} from "./_oschunk-3RH6DZJJ.js";
import {
    c
} from "./_oschunk-QHO7QY6K.js";

function f(s, l, _, t) {
    let r = `wss://${s.Server}/websockets/v3?app_id=${s.OAuthAppId}&l=EN&brand=deriv`;
    s.URL = r, window.location.reload()
}
c(f, "default");
var n = y; {
    let l = class l extends n.Controller.BaseViewController {
        constructor(t, r, e) {
            super(t, r, e);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _setOriginalSettingsOnClick$Action() {
            return this.hasOwnProperty("__setOriginalSettingsOnClick$Action") || (this.__setOriginalSettingsOnClick$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    d = this.idService;
                return n.Logger.startActiveSpan("SetOriginalSettingsOnClick", function(i) {
                    i && (i.setAttribute("code.function", "SetOriginalSettingsOnClick"), i.setAttribute("outsystems.function.key", "6df131e4-0b92-4cb4-9976-1b9f427e3129"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("SetOriginalSettingsOnClick"), t = e.callContext(t), a.setServer("green.derivws.com"), a.setAppId("36300"), e._submitOnClick$Action(t)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__setOriginalSettingsOnClick$Action
        }
        set _setOriginalSettingsOnClick$Action(t) {
            this.__setOriginalSettingsOnClick$Action = t
        }
        get _submitOnClick$Action() {
            return this.hasOwnProperty("__submitOnClick$Action") || (this.__submitOnClick$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    d = this.idService;
                return n.Logger.startActiveSpan("SubmitOnClick", function(i) {
                    i && (i.setAttribute("code.function", "SubmitOnClick"), i.setAttribute("outsystems.function.key", "c8855e81-c415-41a5-803c-2babbdf834c8"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("SubmitOnClick"), t = e.callContext(t);
                        var h = new n.DataTypes.VariableHolder;
                        r.widgets.get(d.getId("Form1")).validAttr && (h.value = n.Logger.startActiveSpan("StoringInLocalStorage", function(o) {
                            o && (o.setAttribute("code.function", "StoringInLocalStorage"), o.setAttribute("outsystems.function.key", "81cc736d-c0e1-48cb-9796-e8853dca8ff2"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(f, "StoringInLocalStorage", "SubmitOnClick", {
                                    Server: n.DataConversion.JSNodeParamConverter.to(a.getServer(), n.DataTypes.DataTypes.Text),
                                    OAuthAppId: n.DataConversion.JSNodeParamConverter.to(a.getAppId(), n.DataTypes.DataTypes.Text),
                                    URL: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                }, function(v) {
                                    var m = new(e.constructor.getVariableGroupType("Accounts.MainFlow.EndPoint.SubmitOnClick$storingInLocalStorageJSResult"));
                                    return m.uRLOut = n.DataConversion.JSNodeParamConverter.from(v.URL, n.DataTypes.DataTypes.Text), m
                                }, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1), a.setWS_URL(h.value.uRLOut), n.FeedbackMessageService.showFeedbackMessage("Data updated successfully", 1), u.clearSession$Action(t), u.redirectToLogin$Action(t))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__submitOnClick$Action
        }
        set _submitOnClick$Action(t) {
            this.__submitOnClick$Action = t
        }
        setOriginalSettingsOnClick$Action(t) {
            var r = this.controller;
            return n.Logger.startActiveSpan("SetOriginalSettingsOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "SetOriginalSettingsOnClick"), e.setAttribute("outsystems.function.key", "6df131e4-0b92-4cb4-9976-1b9f427e3129"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._setOriginalSettingsOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        submitOnClick$Action(t) {
            var r = this.controller;
            return n.Logger.startActiveSpan("SubmitOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "SubmitOnClick"), e.setAttribute("outsystems.function.key", "c8855e81-c415-41a5-803c-2babbdf834c8"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._submitOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return b.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return u.defaultTimeout
        }
    };
    c(l, "ControllerInner");
    let s = l;
    A = s, A.registerVariableGroupType("Accounts.MainFlow.EndPoint.SubmitOnClick$storingInLocalStorageJSResult", [{
        name: "URL",
        attrName: "uRLOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var A, R = new n.Controller.ControllerFactory(A, g);
export {
    R as a
};