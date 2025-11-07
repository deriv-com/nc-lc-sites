import {
    a as T
} from "./_oschunk-4ZYYVQOE.js";
import {
    a as D
} from "./_oschunk-HFW3V2GI.js";
import {
    f as g,
    h as C,
    m as J,
    o as z,
    p as Z,
    q as j,
    u as K
} from "./_oschunk-VR5BNL2K.js";
import {
    a as re,
    g as p,
    m as N,
    o as H,
    q as W,
    r as B,
    s as U,
    t as G
} from "./_oschunk-4VHUVDBV.js";
import {
    a as k
} from "./_oschunk-KXORGPRQ.js";
import {
    Sb as w
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as m,
    W as b,
    c as l,
    e as te,
    m as y,
    n as _,
    v as M,
    w as E
} from "./_oschunk-M5BUVJ72.js";
var c = te(re());
var f = b,
    F = class F extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FieldValue", "fieldValueVar", "FieldValue", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("showLoader", "showLoaderVar", "showLoader", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("FieldUpdated", "fieldUpdatedVar", "FieldUpdated", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ErrorMessage", "errorMessageIn", "ErrorMessage", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("LabelTitle", "labelTitleIn", "LabelTitle", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelTitleInDataFetchStatus", "_labelTitleInDataFetchStatus", "_labelTitleInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("showLiveChatMessage", "showLiveChatMessageIn", "showLiveChatMessage", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLiveChatMessageInDataFetchStatus", "_showLiveChatMessageInDataFetchStatus", "_showLiveChatMessageInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OldEmail", "oldEmailIn", "OldEmail", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_oldEmailInDataFetchStatus", "_oldEmailInDataFetchStatus", "_oldEmailInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsVerified", "isVerifiedIn", "IsVerified", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVerifiedInDataFetchStatus", "_isVerifiedInDataFetchStatus", "_isVerifiedInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(F, "VariablesRecord");
var I = F;
I.init();
var V = class V extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            EmailField2: f.Model.ValidationWidgetRecord
        }
    }
};
l(V, "WidgetsRecord");
var P = V,
    R = class R extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return I
        }
        static getWidgetsRecordConstructor() {
            return P
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(a) {
            "ErrorMessage" in a && (this.variables.errorMessageIn = a.ErrorMessage, "_errorMessageInDataFetchStatus" in a && (this.variables._errorMessageInDataFetchStatus = a._errorMessageInDataFetchStatus)), "LabelTitle" in a && (this.variables.labelTitleIn = a.LabelTitle, "_labelTitleInDataFetchStatus" in a && (this.variables._labelTitleInDataFetchStatus = a._labelTitleInDataFetchStatus)), "showLiveChatMessage" in a && (this.variables.showLiveChatMessageIn = a.showLiveChatMessage, "_showLiveChatMessageInDataFetchStatus" in a && (this.variables._showLiveChatMessageInDataFetchStatus = a._showLiveChatMessageInDataFetchStatus)), "OldEmail" in a && (this.variables.oldEmailIn = a.OldEmail, "_oldEmailInDataFetchStatus" in a && (this.variables._oldEmailInDataFetchStatus = a._oldEmailInDataFetchStatus)), "IsVerified" in a && (this.variables.isVerifiedIn = a.IsVerified, "_isVerifiedInDataFetchStatus" in a && (this.variables._isVerifiedInDataFetchStatus = a._isVerifiedInDataFetchStatus))
        }
    };
l(R, "Model");
var O = R;
O._hasValidationWidgetsValue = void 0;
var X = new f.Model.ModelFactory(O);
var ne = {
        "UpjKf3pjA0OvSuSGEWlXZA#ValueExpression.1914659542.1": "\u0644\u0644\u0645\u0633\u0627\u0639\u062F\u0629.",
        "_leOYLl6_E2tu1csv81CnA#Value": "\u0627\u0644\u062F\u0631\u062F\u0634\u0629 \u0627\u0644\u062D\u064A\u0629",
        "drTEETlfwUa7Oa9bJX6cnA#ValueExpression.1868128565.1": "\u0644\u0645 \u0646\u062A\u0645\u0643\u0646 \u0645\u0646 \u0625\u0636\u0627\u0641\u0629 \u0647\u0630\u0627 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A. \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631",
        "oN89Rc4KwUWFRIWeK5n5Vg#ValueExpression.250580020.1": "\u0623\u062F\u062E\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "JaR2NnZc20GpQZnhCWT+Bg#ValueExpression.67066748.1": "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"
    },
    Q = {
        "ar-001": {
            translations: ne,
            isRTL: !0
        }
    };

function L(v, a, o) {
    window.handleDocumentMouseDownAdded && (document.removeEventListener("mousedown", window.handleDocumentMouseDown), delete window.handleDocumentMouseDown, window.handleDocumentMouseDownAdded = !1), window.handleOutsidePhoneDropdownClickAdded && (document.removeEventListener("mousedown", window.handleOutsidePhoneDropdownClick), delete window.handleOutsidePhoneDropdownClick, window.handleOutsidePhoneDropdownClickAdded = !1)
}
l(L, "default");
var s = b; {
    let a = class a extends s.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Q);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _input_FieldValueOnChange$Action() {
            return this.hasOwnProperty("__input_FieldValueOnChange$Action") || (this.__input_FieldValueOnChange$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("Input_FieldValueOnChange", function(n) {
                    return n && (n.setAttribute("code.function", "Input_FieldValueOnChange"), n.setAttribute("outsystems.function.key", "410a50ad-e9fa-496d-b468-069fad1c01d1"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("Input_FieldValueOnChange"), e = t.callContext(e), s.Flow.executeAsyncFlow(function() {
                            return t.fieldValueChangeEvent$Action(r.variables.fieldValueVar, e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__input_FieldValueOnChange$Action
        }
        set _input_FieldValueOnChange$Action(e) {
            this.__input_FieldValueOnChange$Action = e
        }
        get _toggleLoader$Action() {
            return this.hasOwnProperty("__toggleLoader$Action") || (this.__toggleLoader$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    n = this.idService;
                return s.Logger.startActiveSpan("ToggleLoader", function(u) {
                    u && (u.setAttribute("code.function", "ToggleLoader"), u.setAttribute("outsystems.function.key", "4fd4fe8b-47a5-41da-8222-0f6cc88f8821"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("ToggleLoader"), r = i.callContext(r);
                        var S = new s.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.Common.EmailBlock.ToggleLoader$vars")));
                        S.value.shouldShowInLocal = e, t.variables.showLoaderVar = S.value.shouldShowInLocal
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__toggleLoader$Action
        }
        set _toggleLoader$Action(e) {
            this.__toggleLoader$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "9e731896-bca2-43d5-8e6a-51cec35b5e02"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), r.variables.oldEmailIn !== s.BuiltinFunctions.nullTextIdentifier() && (r.variables.fieldValueVar = r.variables.oldEmailIn, r.variables.fieldUpdatedVar = !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "ce9516ce-2d0c-4771-a606-9ba7367999fe"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), s.Logger.startActiveSpan("JavaScript1", function(u) {
                            u && (u.setAttribute("code.function", "JavaScript1"), u.setAttribute("outsystems.function.key", "909b18d3-c0f2-48ea-9f66-b8be94882b53"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(L, "JavaScript1", "OnDestroy", null, function(S) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onClickClear$Action() {
            return this.hasOwnProperty("__onClickClear$Action") || (this.__onClickClear$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("OnClickClear", function(n) {
                    return n && (n.setAttribute("code.function", "OnClickClear"), n.setAttribute("outsystems.function.key", "dcefe631-f9e6-45a6-b37d-e6dfc2e3aea7"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickClear"), e = t.callContext(e), s.Flow.executeAsyncFlow(function() {
                            return r.variables.fieldValueVar = s.BuiltinFunctions.nullTextIdentifier(), t.fieldValueChangeEvent$Action(r.variables.fieldValueVar, e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClickClear$Action
        }
        set _onClickClear$Action(e) {
            this.__onClickClear$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "e0882c90-6c1b-4aeb-b4ff-7ddbfe8dc617"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.variables.oldEmailIn !== s.BuiltinFunctions.nullTextIdentifier() && !r.variables.fieldUpdatedVar && (r.variables.fieldValueVar = r.variables.oldEmailIn, r.variables.fieldUpdatedVar = !0), r.widgets.get(i.getId("EmailField2")).validAttr = r.variables.errorMessageIn === s.BuiltinFunctions.nullTextIdentifier(), r.widgets.get(i.getId("EmailField2")).validationMessageAttr = r.variables.errorMessageIn
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        input_FieldValueOnChange$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("Input_FieldValueOnChange__proxy", function(t) {
                return t && (t.setAttribute("code.function", "Input_FieldValueOnChange"), t.setAttribute("outsystems.function.key", "410a50ad-e9fa-496d-b468-069fad1c01d1"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._input_FieldValueOnChange$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        toggleLoader$Action(e, r) {
            var t = this.controller;
            return s.Logger.startActiveSpan("ToggleLoader__proxy", function(i) {
                i && (i.setAttribute("code.function", "ToggleLoader"), i.setAttribute("outsystems.function.key", "4fd4fe8b-47a5-41da-8222-0f6cc88f8821"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._toggleLoader$Action, r, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "9e731896-bca2-43d5-8e6a-51cec35b5e02"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "ce9516ce-2d0c-4771-a606-9ba7367999fe"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickClear$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("OnClickClear__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickClear"), t.setAttribute("outsystems.function.key", "dcefe631-f9e6-45a6-b37d-e6dfc2e3aea7"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClickClear$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "e0882c90-6c1b-4aeb-b4ff-7ddbfe8dc617"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get fieldValueChangeEvent$Action() {
            return this.hasOwnProperty("_fieldValueChangeEvent$Action") || (this._fieldValueChangeEvent$Action = function() {
                return Promise.resolve()
            }), this._fieldValueChangeEvent$Action
        }
        set fieldValueChangeEvent$Action(e) {
            this._fieldValueChangeEvent$Action = e
        }
        get triggerLiveChat$Action() {
            return this.hasOwnProperty("_triggerLiveChat$Action") || (this._triggerLiveChat$Action = function() {
                return Promise.resolve()
            }), this._triggerLiveChat$Action
        }
        set triggerLiveChat$Action(e) {
            this._triggerLiveChat$Action = e
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
                    i = this.idService;
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
                    t = this.model,
                    i = this.idService;
                return r.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onParametersChanged$Action(e)
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
            return w.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let v = a;
    $ = v, $.registerVariableGroupType("uae.Common.EmailBlock.ToggleLoader$vars", [{
        name: "shouldShow",
        attrName: "shouldShowInLocal",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }])
}
var $, Y = new s.Controller.ControllerFactory($, k);
var q = p.PlaceholderContent,
    Fe = p.IteratorPlaceholderContent,
    ae = l(function() {
        var v = H(function(a) {
            var o = a.model,
                e = a.controller,
                r = a.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                n = U,
                u = G,
                S = {
                    props: a,
                    validateWidget: l(function(h) {
                        a.validateWidget(a, h)
                    }, "validateWidget")
                },
                d = o,
                x = B,
                ee = W,
                A = N();
            return c.createElement("div", a.rootNodeProperties, c.createElement(g, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: d
            }, c.createElement(Z, {
                extendedProperties: {
                    style: "margin-bottom: 4px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: r,
                    uuid: "1"
                },
                _widgetRecordProvider: d
            }, c.createElement(C, {
                value: o.getCachedValue(r.getId("nwq8PANB3E2ZOb2VIwsogg.Value"), function() {
                    return o.variables.labelTitleIn !== E.nullTextIdentifier() ? o.variables.labelTitleIn : y.resolve(_.TranslationsService).getMessage("JaR2NnZc20GpQZnhCWT+Bg#ValueExpression.67066748.1", "Email")
                }, function() {
                    return o.variables.labelTitleIn
                }),
                _idProps: {
                    service: r,
                    uuid: "2"
                },
                _widgetRecordProvider: d,
                value_dataFetchStatus: m.calculateDataFetchStatus(o.variables._labelTitleInDataFetchStatus)
            })), c.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex gap-s full-width position-relative",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "3"
                },
                _widgetRecordProvider: d
            }, x(o.variables.showLoaderVar, !1, this, function() {
                return [c.createElement(g, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "height: 40px;"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "4"
                    },
                    _widgetRecordProvider: d
                }, c.createElement(g, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "height: 40px;"
                    },
                    style: "w-full h-full animate-pulse rounded-lg skelton-loader-bg",
                    visible: !0,
                    _idProps: {
                        service: r,
                        name: "Loader2"
                    },
                    _widgetRecordProvider: d
                }))]
            }, function() {
                return [c.createElement(g, {
                    align: 0,
                    animate: !1,
                    style: "full-width",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "6"
                    },
                    _widgetRecordProvider: d
                }, c.createElement(T, {
                    getOwnerSpan: l(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ExtendedClass: "w-full",
                        AlignIconRight: o.getCachedValue(r.getId("IsHa5HprcUavdPBwfc+v5A.AlignIconRight"), function() {
                            return E.toLower(w.languageMapper$Action(i).charCodeOut) === "en"
                        })
                    },
                    events: {
                        _handleError: l(function(h) {
                            e.handleError(h)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: r,
                        uuid: "7",
                        alias: "1"
                    },
                    _widgetRecordProvider: d,
                    placeholders: {
                        icon: new q(function() {
                            return [c.createElement(g, {
                                align: 0,
                                animate: !1,
                                visible: !1,
                                _idProps: {
                                    service: r,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: d
                            }, x(o.variables.isVerifiedIn, !1, this, function() {
                                return [c.createElement(D, {
                                    getOwnerSpan: l(function() {
                                        return A.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: l(function() {
                                        return A.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        SVGCode: `<svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M12 20.5C9.125 20.5 6.5 19 5.0625 16.5C3.625 14.0312 3.625 11 5.0625 8.5C6.5 6.03125 9.125 4.5 12 4.5C14.8438 4.5 17.4688 6.03125 18.9062 8.5C20.3438 11 20.3438 14.0312 18.9062 16.5C17.4688 19 14.8438 20.5 12 20.5ZM15.5312 11.0312H15.5C15.8125 10.75 15.8125 10.2812 15.5 9.96875C15.2188 9.6875 14.75 9.6875 14.4688 9.96875L11 13.4688L9.53125 12C9.21875 11.6875 8.75 11.6875 8.46875 12C8.15625 12.2812 8.15625 12.75 8.46875 13.0312L10.4688 15.0312C10.75 15.3438 11.2188 15.3438 11.5312 15.0312L15.5312 11.0312Z' fill='#007A22'/>\r
</svg>`
                                    },
                                    events: {
                                        _handleError: l(function(h) {
                                            e.handleError(h)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: t
                                    },
                                    _idProps: {
                                        service: r,
                                        uuid: "9",
                                        alias: "2"
                                    },
                                    _widgetRecordProvider: d,
                                    _dependencies: []
                                })]
                            }, function() {
                                return [c.createElement(J, {
                                    extendedEvents: {
                                        onClick: l(function() {
                                            return Promise.resolve().then(function() {
                                                var h = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                return e.onClickClear$Action(e.callContext(h))
                                            })
                                        }, "onClick")
                                    },
                                    icon: "times-circle",
                                    iconSize: 0,
                                    style: "icon cursor-pointer",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        uuid: "10"
                                    },
                                    _widgetRecordProvider: d
                                })]
                            }))]
                        }),
                        input: new q(function() {
                            return [c.createElement(z, {
                                _validationProps: {
                                    validationService: t
                                },
                                enabled: !o.variables.isVerifiedIn,
                                extendedProperties: {
                                    style: "font-size: var(--font-size-s);"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: 0,
                                mandatory: !1,
                                maxLength: 100,
                                onChange: l(function() {
                                    return Promise.resolve().then(function() {
                                        var h = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                        return e.input_FieldValueOnChange$Action(e.callContext(h))
                                    })
                                }, "onChange"),
                                prompt: y.resolve(_.TranslationsService).getMessage("oN89Rc4KwUWFRIWeK5n5Vg#ValueExpression.250580020.1", "Enter email"),
                                style: o.getCachedValue(r.getId("EmailField2.Style"), function() {
                                    return "form-control font-size-s " + (o.variables.errorMessageIn !== E.nullTextIdentifier() || o.variables.showLiveChatMessageIn ? "not-valid" : "")
                                }, function() {
                                    return o.variables.errorMessageIn
                                }, function() {
                                    return o.variables.showLiveChatMessageIn
                                }),
                                variable: o.createVariable(M.DataTypes.Text, o.variables.fieldValueVar, function(h) {
                                    o.variables.fieldValueVar = h
                                }),
                                _idProps: {
                                    service: r,
                                    name: "EmailField2"
                                },
                                _widgetRecordProvider: d,
                                enabled_dataFetchStatus: m.calculateDataFetchStatus(o.variables._isVerifiedInDataFetchStatus),
                                style_dataFetchStatus: m.calculateDataFetchStatus(o.variables._errorMessageInDataFetchStatus, o.variables._showLiveChatMessageInDataFetchStatus)
                            })]
                        })
                    },
                    _dependencies: [n(o.variables.showLiveChatMessageIn), n(o.variables.errorMessageIn), n(o.variables.fieldValueVar), n(o.variables._showLiveChatMessageInDataFetchStatus), n(o.variables._errorMessageInDataFetchStatus), n(o.variables._isVerifiedInDataFetchStatus), n(o.variables.isVerifiedIn)]
                }), c.createElement(g, {
                    align: 0,
                    animate: !1,
                    visible: !1,
                    _idProps: {
                        service: r,
                        uuid: "12"
                    },
                    _widgetRecordProvider: d
                }, c.createElement(C, {
                    style: "validation-message",
                    value: o.variables.errorMessageIn,
                    _idProps: {
                        service: r,
                        uuid: "13"
                    },
                    _widgetRecordProvider: d,
                    value_dataFetchStatus: m.calculateDataFetchStatus(o.variables._errorMessageInDataFetchStatus)
                })), c.createElement(g, {
                    align: 0,
                    animate: !0,
                    visible: o.variables.showLiveChatMessageIn,
                    _idProps: {
                        service: r,
                        uuid: "14"
                    },
                    _widgetRecordProvider: d,
                    visible_dataFetchStatus: m.calculateDataFetchStatus(o.variables._showLiveChatMessageInDataFetchStatus)
                }, c.createElement(C, {
                    style: "validation-message",
                    value: y.resolve(_.TranslationsService).getMessage("drTEETlfwUa7Oa9bJX6cnA#ValueExpression.1868128565.1", "We couldn't add this email. Contact us via "),
                    _idProps: {
                        service: r,
                        uuid: "15"
                    },
                    _widgetRecordProvider: d
                }), c.createElement(j, {
                    enabled: !0,
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    onClick: l(function() {
                        var h = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                        e.triggerLiveChat$Action(e.callContext(h))
                    }, "onClick"),
                    style: "live-chat-link cursor-pointer",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "16"
                    },
                    _widgetRecordProvider: d
                }, c.createElement(K, {
                    extendedProperties: {
                        style: "text-decoration: underline;"
                    },
                    style: "validation-message",
                    text: [ee(u("_leOYLl6_E2tu1csv81CnA#Value", "live chat"))],
                    _idProps: {
                        service: r,
                        uuid: "17"
                    },
                    _widgetRecordProvider: d
                })), c.createElement(C, {
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    style: "validation-message",
                    value: y.resolve(_.TranslationsService).getMessage("UpjKf3pjA0OvSuSGEWlXZA#ValueExpression.1914659542.1", " for help."),
                    _idProps: {
                        service: r,
                        uuid: "18"
                    },
                    _widgetRecordProvider: d
                })))]
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: l(function() {
                return {
                    codeFunction: "EmailBlock",
                    functionKey: "0ddff055-dbec-476e-8ffe-d9cfe1d289a2",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.EmailBlock",
            modelFactory: X,
            controllerFactory: Y
        });
        return v.getCssDependencies = function() {
            return ["css/uae.Common.EmailBlock.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [T, D]
        }, v
    }, "componentFactory"),
    Ve = ae();
export {
    Ve as a
};