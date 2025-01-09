import {
    a as G
} from "./_oschunk-IBUKHOCS.js";
import {
    a as Z
} from "./_oschunk-7TZ3KR6K.js";
import {
    a as ye,
    b as be
} from "./_oschunk-FSWTA5WV.js";
import {
    a as F
} from "./_oschunk-FTYAL2B7.js";
import {
    a as X,
    b as pe
} from "./_oschunk-GPNNXU3M.js";
import {
    b as B,
    d as u,
    f as H,
    l as S,
    n as L,
    p as _e
} from "./_oschunk-M2CKCDBB.js";
import {
    a as U
} from "./_oschunk-NQZZDANH.js";
import {
    a as N,
    g as P,
    i as y
} from "./_oschunk-WZHUAZJP.js";
import {
    a as ve,
    b as fe,
    c as he,
    d as j,
    e as me,
    f as ge
} from "./_oschunk-Q6J66ALP.js";
import {
    m as $,
    o as M
} from "./_oschunk-KZFTAIEG.js";
import {
    a as k
} from "./_oschunk-UATY3RVV.js";
import {
    ia as m
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as r,
    h as V
} from "./_oschunk-QHO7QY6K.js";
var d = V(N());

function ee(g, n, l) {
    console.log("done")
}
r(ee, "default");
var _ = m; {
    let n = class n extends _.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _tOTPEnteredOTP$Action() {
            return this.hasOwnProperty("__tOTPEnteredOTP$Action") || (this.__tOTPEnteredOTP$Action = function(e, i) {
                var t = this.model,
                    a = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("TOTPEnteredOTP", function(v) {
                    v && (v.setAttribute("code.function", "TOTPEnteredOTP"), v.setAttribute("outsystems.function.key", "0b7a4782-b7ba-4d61-aa47-e38379e379e0"), v.setAttribute("outsystems.function.owner.name", "Accounts"), v.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), v.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("TOTPEnteredOTP"), i = a.callContext(i);
                        var h = new _.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("Accounts.Security.TwoFA.TOTPEnteredOTP$vars")));
                        h.value.oTPValueInLocal = e, _.Logger.startActiveSpan("JavaScript1", function(p) {
                            p && (p.setAttribute("code.function", "JavaScript1"), p.setAttribute("outsystems.function.key", "976c8210-2a18-4855-a425-6599ba56976c"), p.setAttribute("outsystems.function.owner.name", "Accounts"), p.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), p.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(ee, "JavaScript1", "TOTPEnteredOTP", null, function(c) {}, {}, {})
                            } finally {
                                p && p.end()
                            }
                        }, 1)
                    } finally {
                        v && v.end()
                    }
                }, 1)
            }), this.__tOTPEnteredOTP$Action
        }
        set _tOTPEnteredOTP$Action(e) {
            this.__tOTPEnteredOTP$Action = e
        }
        get _onClickBackButton$Action() {
            return this.hasOwnProperty("__onClickBackButton$Action") || (this.__onClickBackButton$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return _.Logger.startActiveSpan("OnClickBackButton", function(o) {
                    o && (o.setAttribute("code.function", "OnClickBackButton"), o.setAttribute("outsystems.function.key", "1acb8050-5102-4f5a-bf20-1e063b7b06e8"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickBackButton"), e = t.callContext(e), _.Navigation.navigateTo(_.Navigation.generateScreenURL("Accounts", "Security", {}), _.Transitions.createTransition(_.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onClickBackButton$Action
        }
        set _onClickBackButton$Action(e) {
            this.__onClickBackButton$Action = e
        }
        get _buttonOnClick$Action() {
            return this.hasOwnProperty("__buttonOnClick$Action") || (this.__buttonOnClick$Action = function(e, i) {
                var t = this.model,
                    a = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("ButtonOnClick", function(v) {
                    v && (v.setAttribute("code.function", "ButtonOnClick"), v.setAttribute("outsystems.function.key", "64227b80-70d0-4acc-9c3d-f8a0a70f08e7"), v.setAttribute("outsystems.function.owner.name", "Accounts"), v.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), v.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("ButtonOnClick"), i = a.callContext(i);
                        var h = new _.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("Accounts.Security.TwoFA.ButtonOnClick$vars")));
                        h.value.valueInLocal = e, h.value.valueInLocal === "next" && (t.variables.isNextClickedVar = !0)
                    } finally {
                        v && v.end()
                    }
                }, 1)
            }), this.__buttonOnClick$Action
        }
        set _buttonOnClick$Action(e) {
            this.__buttonOnClick$Action = e
        }
        get _linkOnClick$Action() {
            return this.hasOwnProperty("__linkOnClick$Action") || (this.__linkOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return _.Logger.startActiveSpan("LinkOnClick", function(o) {
                    o && (o.setAttribute("code.function", "LinkOnClick"), o.setAttribute("outsystems.function.key", "cbf58b79-4c0c-49e1-a2a7-70312a24f4f2"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("LinkOnClick"), e = t.callContext(e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__linkOnClick$Action
        }
        set _linkOnClick$Action(e) {
            this.__linkOnClick$Action = e
        }
        tOTPEnteredOTP$Action(e, i) {
            var t = this.controller;
            return _.Logger.startActiveSpan("TOTPEnteredOTP__proxy", function(a) {
                a && (a.setAttribute("code.function", "TOTPEnteredOTP"), a.setAttribute("outsystems.function.key", "0b7a4782-b7ba-4d61-aa47-e38379e379e0"), a.setAttribute("outsystems.function.owner.name", "Accounts"), a.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._tOTPEnteredOTP$Action, i, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onClickBackButton$Action(e) {
            var i = this.controller;
            return _.Logger.startActiveSpan("OnClickBackButton__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickBackButton"), t.setAttribute("outsystems.function.key", "1acb8050-5102-4f5a-bf20-1e063b7b06e8"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickBackButton$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        buttonOnClick$Action(e, i) {
            var t = this.controller;
            return _.Logger.startActiveSpan("ButtonOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "ButtonOnClick"), a.setAttribute("outsystems.function.key", "64227b80-70d0-4acc-9c3d-f8a0a70f08e7"), a.setAttribute("outsystems.function.owner.name", "Accounts"), a.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._buttonOnClick$Action, i, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        linkOnClick$Action(e) {
            var i = this.controller;
            return _.Logger.startActiveSpan("LinkOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "LinkOnClick"), t.setAttribute("outsystems.function.key", "cbf58b79-4c0c-49e1-a2a7-70312a24f4f2"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._linkOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
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
            return M.defaultTimeout
        }
    };
    r(n, "ControllerInner");
    let g = n;
    z = g, z.registerVariableGroupType("Accounts.Security.TwoFA.TOTPEnteredOTP$vars", [{
        name: "OTPValue",
        attrName: "oTPValueInLocal",
        mandatory: !0,
        dataType: _.DataTypes.DataTypes.Text,
        defaultValue: r(function() {
            return ""
        }, "defaultValue")
    }]), z.registerVariableGroupType("Accounts.Security.TwoFA.ButtonOnClick$vars", [{
        name: "Value",
        attrName: "valueInLocal",
        mandatory: !1,
        dataType: _.DataTypes.DataTypes.Text,
        defaultValue: r(function() {
            return ""
        }, "defaultValue")
    }])
}
var z, Pe = new _.Controller.ControllerFactory(z, U);
var b = V(N());
var f = m; {
    let n = class n extends f.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return f.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "190d558f-500e-47f2-b0a7-12822f55d3ed"), o.setAttribute("outsystems.function.owner.name", "UIKit"), o.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var v = new f.DataTypes.VariableHolder;
                        t._onParametersChanged$Action(e), v.value = $.setFocus$Action(a.getId("I1"), e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _validateOTP$Action() {
            return this.hasOwnProperty("__validateOTP$Action") || (this.__validateOTP$Action = function(e, i, t) {
                var a = this.model,
                    o = this.controller,
                    v = this.idService;
                return f.Logger.startActiveSpan("ValidateOTP", function(h) {
                    return h && (h.setAttribute("code.function", "ValidateOTP"), h.setAttribute("outsystems.function.key", "27b40427-0081-43d3-aa97-f24604b4c668"), h.setAttribute("outsystems.function.owner.name", "UIKit"), h.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), h.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                        o.ensureControllerAlive("ValidateOTP"), t = o.callContext(t);
                        var p = new f.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("UIKit.Components.TOTP.ValidateOTP$vars")));
                        p.value.nextWidgetIdInLocal = e, p.value.inputValueInLocal = i;
                        var c = new f.DataTypes.VariableHolder;
                        return f.Flow.executeAsyncFlow(function() {
                            return f.Flow.executeSequence(function() {
                                if (a.variables.digit1Var !== f.BuiltinFunctions.nullTextIdentifier() && a.variables.digit2Var !== f.BuiltinFunctions.nullTextIdentifier() && a.variables.digit3Var !== f.BuiltinFunctions.nullTextIdentifier() && a.variables.digit4Var !== f.BuiltinFunctions.nullTextIdentifier() && a.variables.digit5Var !== f.BuiltinFunctions.nullTextIdentifier() && a.variables.digit6Var !== f.BuiltinFunctions.nullTextIdentifier()) return o.enteredOTP$Action(a.variables.digit1Var + a.variables.digit2Var + a.variables.digit3Var + a.variables.digit4Var + a.variables.digit5Var + a.variables.digit6Var, t);
                                p.value.inputValueInLocal !== f.BuiltinFunctions.nullTextIdentifier() && (c.value = $.setFocus$Action(p.value.nextWidgetIdInLocal, t))
                            })
                        })
                    }, function() {
                        h && h.end()
                    })
                }, 1)
            }), this.__validateOTP$Action
        }
        set _validateOTP$Action(e) {
            this.__validateOTP$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return f.Logger.startActiveSpan("OnParametersChanged", function(o) {
                    o && (o.setAttribute("code.function", "OnParametersChanged"), o.setAttribute("outsystems.function.key", "e53927dd-9f63-4f3e-b989-f92d385cc3aa"), o.setAttribute("outsystems.function.owner.name", "UIKit"), o.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), i.variables.errorMessageIn !== f.BuiltinFunctions.nullTextIdentifier() && (i.widgets.get(a.getId("I1")).validAttr = !1, i.widgets.get(a.getId("I2")).validAttr = !1, i.widgets.get(a.getId("I3")).validAttr = !1, i.widgets.get(a.getId("I4")).validAttr = !1, i.widgets.get(a.getId("I5")).validAttr = !1, i.widgets.get(a.getId("I6")).validAttr = !1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onReady$Action(e) {
            var i = this.controller;
            return f.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "190d558f-500e-47f2-b0a7-12822f55d3ed"), t.setAttribute("outsystems.function.owner.name", "UIKit"), t.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        validateOTP$Action(e, i, t) {
            var a = this.controller;
            return f.Logger.startActiveSpan("ValidateOTP__proxy", function(o) {
                return o && (o.setAttribute("code.function", "ValidateOTP"), o.setAttribute("outsystems.function.key", "27b40427-0081-43d3-aa97-f24604b4c668"), o.setAttribute("outsystems.function.owner.name", "UIKit"), o.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._validateOTP$Action, t, e, i)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var i = this.controller;
            return f.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "e53927dd-9f63-4f3e-b989-f92d385cc3aa"), t.setAttribute("outsystems.function.owner.name", "UIKit"), t.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get enteredOTP$Action() {
            return this.hasOwnProperty("_enteredOTP$Action") || (this._enteredOTP$Action = function() {
                return Promise.resolve()
            }), this._enteredOTP$Action
        }
        set enteredOTP$Action(e) {
            this._enteredOTP$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    a = this.idService;
                return i.onReady$Action(e)
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    a = this.idService;
                return i.onParametersChanged$Action(e)
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
            return ye.defaultTimeout
        }
    };
    r(n, "ControllerInner");
    let g = n;
    te = g, te.registerVariableGroupType("UIKit.Components.TOTP.ValidateOTP$vars", [{
        name: "NextWidgetId",
        attrName: "nextWidgetIdInLocal",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Text,
        defaultValue: r(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "InputValue",
        attrName: "inputValueInLocal",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Text,
        defaultValue: r(function() {
            return ""
        }, "defaultValue")
    }])
}
var te, Ee = new f.Controller.ControllerFactory(te, be);
var C = m,
    st = y.PlaceholderContent,
    lt = y.IteratorPlaceholderContent,
    O = class O extends P.BaseWebBlock {
        static get displayName() {
            return "Components.TOTP"
        }
        static getAttributes() {
            return {
                codeFunction: "TOTP",
                functionKey: "201d3f95-5709-4252-9c58-e4249fbdd398",
                functionOwnerName: "UIKit",
                functionOwnerKey: "895880e5-5422-4df6-a1a2-263897502224",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/UIKit.Components.TOTP.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return ve
        }
        get controllerFactory() {
            return Ee
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                a = l.callContext(),
                o = O.ifWidget,
                v = O.textWidget,
                h = O.asPrimitiveValue,
                p = O.getTranslation,
                c = this;
            return b.createElement("div", this.getRootNodeProperties(), b.createElement(u, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column row-gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, b.createElement(u, {
                align: 0,
                animate: !1,
                style: "display-flex column-gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, b.createElement(S, {
                _validationProps: {
                    validationService: i
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 0,
                onChange: r(function() {
                    return Promise.resolve().then(function() {
                        var s = a.clone();
                        return l.validateOTP$Action(e.getId("I2"), n.variables.digit1Var, l.callContext(s))
                    })
                }, "onChange"),
                style: "form-control input-field",
                variable: n.createVariable(C.DataTypes.DataTypes.Text, n.variables.digit1Var, function(s) {
                    n.variables.digit1Var = s
                }),
                _idProps: {
                    service: e,
                    name: "I1"
                },
                _widgetRecordProvider: t
            }), b.createElement(S, {
                _validationProps: {
                    validationService: i
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 0,
                onChange: r(function() {
                    return Promise.resolve().then(function() {
                        var s = a.clone();
                        return l.validateOTP$Action(e.getId("I3"), n.variables.digit2Var, l.callContext(s))
                    })
                }, "onChange"),
                style: "form-control input-field",
                variable: n.createVariable(C.DataTypes.DataTypes.Text, n.variables.digit2Var, function(s) {
                    n.variables.digit2Var = s
                }),
                _idProps: {
                    service: e,
                    name: "I2"
                },
                _widgetRecordProvider: t
            }), b.createElement(S, {
                _validationProps: {
                    validationService: i
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 0,
                onChange: r(function() {
                    return Promise.resolve().then(function() {
                        var s = a.clone();
                        return l.validateOTP$Action(e.getId("I4"), n.variables.digit3Var, l.callContext(s))
                    })
                }, "onChange"),
                style: "form-control input-field",
                variable: n.createVariable(C.DataTypes.DataTypes.Text, n.variables.digit3Var, function(s) {
                    n.variables.digit3Var = s
                }),
                _idProps: {
                    service: e,
                    name: "I3"
                },
                _widgetRecordProvider: t
            }), b.createElement(S, {
                _validationProps: {
                    validationService: i
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 0,
                onChange: r(function() {
                    return Promise.resolve().then(function() {
                        var s = a.clone();
                        return l.validateOTP$Action(e.getId("I5"), n.variables.digit4Var, l.callContext(s))
                    })
                }, "onChange"),
                style: "form-control input-field",
                variable: n.createVariable(C.DataTypes.DataTypes.Text, n.variables.digit4Var, function(s) {
                    n.variables.digit4Var = s
                }),
                _idProps: {
                    service: e,
                    name: "I4"
                },
                _widgetRecordProvider: t
            }), b.createElement(S, {
                _validationProps: {
                    validationService: i
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 0,
                onChange: r(function() {
                    return Promise.resolve().then(function() {
                        var s = a.clone();
                        return l.validateOTP$Action(e.getId("I6"), n.variables.digit5Var, l.callContext(s))
                    })
                }, "onChange"),
                style: "form-control input-field",
                variable: n.createVariable(C.DataTypes.DataTypes.Text, n.variables.digit5Var, function(s) {
                    n.variables.digit5Var = s
                }),
                _idProps: {
                    service: e,
                    name: "I5"
                },
                _widgetRecordProvider: t
            }), b.createElement(S, {
                _validationProps: {
                    validationService: i
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 0,
                onChange: r(function() {
                    return Promise.resolve().then(function() {
                        var s = a.clone();
                        return l.validateOTP$Action(e.getId("I6"), n.variables.digit6Var, l.callContext(s))
                    })
                }, "onChange"),
                style: "form-control input-field",
                variable: n.createVariable(C.DataTypes.DataTypes.Text, n.variables.digit6Var, function(s) {
                    n.variables.digit6Var = s
                }),
                _idProps: {
                    service: e,
                    name: "I6"
                },
                _widgetRecordProvider: t
            })), b.createElement(u, {
                align: 0,
                animate: !0,
                visible: n.getCachedValue(e.getId("GabpX5fZFkuMksl5+B3ScA.Visible"), function() {
                    return n.variables.errorMessageIn !== C.BuiltinFunctions.nullTextIdentifier()
                }, function() {
                    return n.variables.errorMessageIn
                }),
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: C.Model.calculateDataFetchStatus(n.variables._errorMessageInDataFetchStatus)
            }, b.createElement(H, {
                style: "error-text font-size-s",
                value: n.variables.errorMessageIn,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: C.Model.calculateDataFetchStatus(n.variables._errorMessageInDataFetchStatus)
            }))))
        }
    };
r(O, "View");
var ne = O,
    re = ne;
var R = V(N());
var Ce = m; {
    let n = class n extends Ce.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
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
            return M.defaultTimeout
        }
    };
    r(n, "ControllerInner");
    let g = n;
    Ae = g
}
var Ae, Se = new Ce.Controller.ControllerFactory(Ae, U);
var J = V(N());
var Oe = {};
var we = m; {
    let n = class n extends we.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, Oe);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
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
            return $.defaultTimeout
        }
    };
    r(n, "ControllerInner");
    let g = n;
    Re = g
}
var Re, Te = new we.Controller.ControllerFactory(Re, pe);
var W = m,
    wt = y.PlaceholderContent,
    Rt = y.IteratorPlaceholderContent,
    w = class w extends P.BaseWebBlock {
        static get displayName() {
            return "Numbers.Badge"
        }
        static getAttributes() {
            return {
                codeFunction: "Badge",
                functionKey: "94a98cbf-411d-4033-8d1d-53ffda1583a9",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return fe
        }
        get controllerFactory() {
            return Te
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                a = l.callContext(),
                o = w.ifWidget,
                v = w.textWidget,
                h = w.asPrimitiveValue,
                p = w.getTranslation,
                c = this;
            return J.createElement("div", this.getRootNodeProperties(), J.createElement(u, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: n.getCachedValue(e.getId("kfxE4shQO0masm8Vyqhizw.Style"), function() {
                    return "badge" + (n.variables.sizeIn !== W.BuiltinFunctions.nullTextIdentifier() ? " badge-" + n.variables.sizeIn : "") + " border-radius-" + n.variables.shapeIn + (n.variables.isLightIn ? " background-" + n.variables.colorIn + "-lightest text-" + n.variables.colorIn + "-darker" : " background-" + n.variables.colorIn) + " " + n.variables.extendedClassIn
                }, function() {
                    return n.variables.sizeIn
                }, function() {
                    return n.variables.shapeIn
                }, function() {
                    return n.variables.isLightIn
                }, function() {
                    return n.variables.colorIn
                }, function() {
                    return n.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: W.Model.calculateDataFetchStatus(n.variables._sizeInDataFetchStatus, n.variables._shapeInDataFetchStatus, n.variables._isLightInDataFetchStatus, n.variables._colorInDataFetchStatus, n.variables._extendedClassInDataFetchStatus)
            }, J.createElement(H, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                value: n.getCachedValue(e.getId("filbsbawVU+827X5Mk3PDw.Value"), function() {
                    return n.variables.numberIn.lte(W.BuiltinFunctions.integerToLongInteger(99)) ? W.BuiltinFunctions.longIntegerToText(n.variables.numberIn) : "99+"
                }, function() {
                    return n.variables.numberIn
                }),
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: W.Model.calculateDataFetchStatus(n.variables._numberInDataFetchStatus)
            })))
        }
    };
r(w, "View");
var ie = w,
    ae = ie;
var oe = m,
    $t = y.PlaceholderContent,
    Nt = y.IteratorPlaceholderContent,
    T = class T extends P.BaseWebBlock {
        static get displayName() {
            return "Common.StepItem"
        }
        static getAttributes() {
            return {
                codeFunction: "StepItem",
                functionKey: "7b448ffa-aca2-4d5f-86e3-124ac87a5ff4",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Common.StepItem.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [ae]
        }
        get modelFactory() {
            return he
        }
        get controllerFactory() {
            return Se
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                a = l.callContext(),
                o = T.ifWidget,
                v = T.textWidget,
                h = T.asPrimitiveValue,
                p = T.getTranslation,
                c = this;
            return R.createElement("div", this.getRootNodeProperties(), R.createElement(u, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, R.createElement(u, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, R.createElement(ae, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Size: k.size.small,
                    Color: k.color.neutral10,
                    Number: oe.BuiltinFunctions.integerToLongInteger(n.variables.valueIn),
                    _numberInDataFetchStatus: oe.Model.calculateDataFetchStatus(n.variables._valueInDataFetchStatus)
                },
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), R.createElement(H, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                style: "font-size-base font-bold",
                value: n.variables.textIn,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: oe.Model.calculateDataFetchStatus(n.variables._textInDataFetchStatus)
            })), R.createElement(_e, {
                align: 0,
                content: c.props.placeholders.content,
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            })))
        }
    };
r(T, "View");
var se = T,
    A = se;
var q = V(N());
var Ne = m,
    ce = class ce extends Ne.LanguageResources.BaseMessagesProvider {
        constructor(n) {
            super(n), this.setMessage("Validation.Mandatory", "Required field!"), this.setMessage("Validation.Integer", "Integer expected!"), this.setMessage("Validation.LongInteger", "Integer expected!"), this.setMessage("Validation.Decimal", "Decimal expected!"), this.setMessage("Validation.Currency", "Currency expected!"), this.setMessage("Validation.Date", "Date expected!"), this.setMessage("Validation.Time", "Time expected!"), this.setMessage("Validation.DateTime", "DateTime expected!"), this.setMessage("Validation.Text", "Text expected!"), this.setMessage("Validation.PhoneNumber", "Phone Number expected!"), this.setMessage("Validation.Email", "Email expected!"), this.setMessage("UpgradeComplete", "Your application has been updated to the latest version."), this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost."), this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update."), this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.")
        }
    };
r(ce, "MessagesProvider");
var le = ce,
    Ie = new le;
var D = m; {
    let n = class n extends D.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _generate$Action() {
            return this.hasOwnProperty("__generate$Action") || (this.__generate$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return D.Logger.startActiveSpan("Generate", function(o) {
                    o && (o.setAttribute("code.function", "Generate"), o.setAttribute("outsystems.function.key", "36268c66-d7ec-417f-a693-ababbcd77941"), o.setAttribute("outsystems.function.owner.name", "QRGenerator"), o.setAttribute("outsystems.function.owner.key", "2e2477c2-f018-4e3c-aa24-c1b8e91f464a"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Generate"), e = t.callContext(e), j.generateQR$Action(a.getId("QR"), i.variables.textIn, e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__generate$Action
        }
        set _generate$Action(e) {
            this.__generate$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return D.Logger.startActiveSpan("OnParametersChanged", function(o) {
                    o && (o.setAttribute("code.function", "OnParametersChanged"), o.setAttribute("outsystems.function.key", "8a3cb702-cef1-433d-a98f-7b67e438dd9c"), o.setAttribute("outsystems.function.owner.name", "QRGenerator"), o.setAttribute("outsystems.function.owner.key", "2e2477c2-f018-4e3c-aa24-c1b8e91f464a"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), t._generate$Action(e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        generate$Action(e) {
            var i = this.controller;
            return D.Logger.startActiveSpan("Generate__proxy", function(t) {
                t && (t.setAttribute("code.function", "Generate"), t.setAttribute("outsystems.function.key", "36268c66-d7ec-417f-a693-ababbcd77941"), t.setAttribute("outsystems.function.owner.name", "QRGenerator"), t.setAttribute("outsystems.function.owner.key", "2e2477c2-f018-4e3c-aa24-c1b8e91f464a"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._generate$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var i = this.controller;
            return D.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "8a3cb702-cef1-433d-a98f-7b67e438dd9c"), t.setAttribute("outsystems.function.owner.name", "QRGenerator"), t.setAttribute("outsystems.function.owner.key", "2e2477c2-f018-4e3c-aa24-c1b8e91f464a"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    a = this.idService;
                return i.onParametersChanged$Action(e)
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
            return j.defaultTimeout
        }
    };
    r(n, "ControllerInner");
    let g = n;
    xe = g
}
var xe, ke = new D.Controller.ControllerFactory(xe, Ie);
var Xt = y.PlaceholderContent,
    Zt = y.IteratorPlaceholderContent,
    I = class I extends P.BaseWebBlock {
        static get displayName() {
            return "UIFlow.Block_QR"
        }
        static getAttributes() {
            return {
                codeFunction: "Block_QR",
                functionKey: "d6f3ed9a-55be-44f8-a688-57391055d631",
                functionOwnerName: "QRGenerator",
                functionOwnerKey: "2e2477c2-f018-4e3c-aa24-c1b8e91f464a",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/QRGenerator.UserScripts.jquery_min.js", "scripts/QRGenerator.UserScripts.qrcode_min.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return me
        }
        get controllerFactory() {
            return ke
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                a = l.callContext(),
                o = I.ifWidget,
                v = I.textWidget,
                h = I.asPrimitiveValue,
                p = I.getTranslation,
                c = this;
            return q.createElement("div", this.getRootNodeProperties(), q.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: center;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, q.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 150px; padding: 5px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "150px"
                },
                style: "qrcode",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "QR"
                },
                _widgetRecordProvider: t
            })))
        }
    };
r(I, "View");
var de = I,
    Y = de;
var He = m,
    E = y.PlaceholderContent,
    mn = y.IteratorPlaceholderContent,
    x = class x extends P.BaseWebBlock {
        static get displayName() {
            return "Security.TwoFA"
        }
        static getAttributes() {
            return {
                codeFunction: "TwoFA",
                functionKey: "6b8c0c16-e684-46bd-9020-b559bcfe5607",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Security.TwoFA.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [X, Z, re, G, A, F, Y]
        }
        get modelFactory() {
            return ge
        }
        get controllerFactory() {
            return Pe
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                a = l.callContext(),
                o = x.ifWidget,
                v = x.textWidget,
                h = x.asPrimitiveValue,
                p = x.getTranslation,
                c = this;
            return d.createElement("div", this.getRootNodeProperties(), d.createElement(u, {
                align: 0,
                animate: !1,
                style: "two-fa__container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, d.createElement(X, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    desktopLayout: new E(function() {
                        return [d.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-m full-height",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "DesktopContainer"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "two-fa__header",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "TwoFaHeader"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(Z, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShouldDisplayCloseButton: !1,
                                Title: n.getCachedValue(e.getId("laHc1RMcRkeYeCPczFWMvw.Title"), function() {
                                    return n.variables.isNextClickedVar ? "Enter verification code" : n.variables.hasEnabled2FaIn ? "Disable 2FA" : "Set up your authenticator app"
                                }, function() {
                                    return n.variables.isNextClickedVar
                                }, function() {
                                    return n.variables.hasEnabled2FaIn
                                }),
                                _titleInDataFetchStatus: He.Model.calculateDataFetchStatus(n.variables._hasEnabled2FaInDataFetchStatus),
                                ShouldDisplayBackButton: !0
                            },
                            events: {
                                _handleError: r(function(s) {
                                    l.handleError(s)
                                }, "_handleError"),
                                onClickBackButton$Action: r(function() {
                                    var s = a.clone();
                                    l.onClickBackButton$Action(l.callContext(s))
                                }, "onClickBackButton$Action")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "4",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                additionalcontent: E.Empty
                            },
                            _dependencies: []
                        })), d.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column two-fa__body",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "TwoFaBody"
                            },
                            _widgetRecordProvider: t
                        }, o(n.variables.isNextClickedVar, !1, this, function() {
                            return [d.createElement(re, {
                                getOwnerSpan: r(function() {
                                    return c.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return c.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: r(function(s) {
                                        l.handleError(s)
                                    }, "_handleError"),
                                    enteredOTP$Action: r(function(s) {
                                        var Fe = a.clone();
                                        l.tOTPEnteredOTP$Action(s, l.callContext(Fe))
                                    }, "enteredOTP$Action")
                                },
                                _validationProps: {
                                    validationService: i
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "6",
                                    alias: "3"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }, function() {
                            return [o(n.variables.hasEnabled2FaIn, !1, this, function() {
                                return []
                            }, function() {
                                return [d.createElement(G, {
                                    getOwnerSpan: r(function() {
                                        return c.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: r(function() {
                                        return c.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Text: "Enable 2FA to strengthen your account security.",
                                        Type: k.messageType.info
                                    },
                                    events: {
                                        _handleError: r(function(s) {
                                            l.handleError(s)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: i
                                    },
                                    _idProps: {
                                        service: e,
                                        uuid: "7",
                                        alias: "4"
                                    },
                                    _widgetRecordProvider: t,
                                    _dependencies: []
                                })]
                            }), d.createElement(u, {
                                align: 0,
                                animate: !1,
                                style: "two-fa__body__container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: t
                            }, o(n.variables.hasEnabled2FaIn, !1, this, function() {
                                return ["2FA authentication keeps your account safer by adding an extra step in the login process. Disabling it removes this layer of security."]
                            }, function() {
                                return [d.createElement(A, {
                                    getOwnerSpan: r(function() {
                                        return c.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: r(function() {
                                        return c.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Text: "Install an authenticator app in your device.",
                                        Value: 1
                                    },
                                    events: {
                                        _handleError: r(function(s) {
                                            l.handleError(s)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: i
                                    },
                                    _idProps: {
                                        service: e,
                                        uuid: "9",
                                        alias: "5"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        content: new E(function() {
                                            return [d.createElement(u, {
                                                align: 0,
                                                animate: !1,
                                                style: "font-size-base font-bold text-neutral-8",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "10"
                                                },
                                                _widgetRecordProvider: t
                                            }, d.createElement(u, {
                                                align: 0,
                                                animate: !1,
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: t
                                            }, "Recommended:"), d.createElement(L, {
                                                enabled: !0,
                                                onClick: r(function() {
                                                    var s = a.clone();
                                                    l.linkOnClick$Action(l.callContext(s))
                                                }, "onClick"),
                                                style: "two-fa__links text-neutral-8",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: t
                                            }, "Authy"), " or", d.createElement(L, {
                                                enabled: !0,
                                                gridProperties: {
                                                    classes: "ThemeGrid_MarginGutter"
                                                },
                                                onClick: r(function() {
                                                    var s = a.clone();
                                                    l.linkOnClick$Action(l.callContext(s))
                                                }, "onClick"),
                                                style: "two-fa__links text-neutral-8",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: t
                                            }, "Google Authenticator"))]
                                        })
                                    },
                                    _dependencies: []
                                }), d.createElement(F, {
                                    getOwnerSpan: r(function() {
                                        return c.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: r(function() {
                                        return c.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        IsVertical: !1
                                    },
                                    events: {
                                        _handleError: r(function(s) {
                                            l.handleError(s)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: i
                                    },
                                    _idProps: {
                                        service: e,
                                        uuid: "14",
                                        alias: "6"
                                    },
                                    _widgetRecordProvider: t,
                                    _dependencies: []
                                }), d.createElement(A, {
                                    getOwnerSpan: r(function() {
                                        return c.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: r(function() {
                                        return c.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Text: "Scan the QR code or copy and paste the code into your app.",
                                        Value: 2
                                    },
                                    events: {
                                        _handleError: r(function(s) {
                                            l.handleError(s)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: i
                                    },
                                    _idProps: {
                                        service: e,
                                        uuid: "15",
                                        alias: "7"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        content: new E(function() {
                                            return [d.createElement(Y, {
                                                getOwnerSpan: r(function() {
                                                    return c.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: r(function() {
                                                    return c.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    Text: "otpauth://totp/user@deriv.com?secret=la3uys2ngvmgsvkrkriviudshe&issuer=Deriv.com"
                                                },
                                                events: {
                                                    _handleError: r(function(s) {
                                                        l.handleError(s)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: i
                                                },
                                                _idProps: {
                                                    service: e,
                                                    uuid: "16",
                                                    alias: "8"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            })]
                                        })
                                    },
                                    _dependencies: []
                                }), d.createElement(F, {
                                    getOwnerSpan: r(function() {
                                        return c.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: r(function() {
                                        return c.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        IsVertical: !1
                                    },
                                    events: {
                                        _handleError: r(function(s) {
                                            l.handleError(s)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: i
                                    },
                                    _idProps: {
                                        service: e,
                                        uuid: "17",
                                        alias: "9"
                                    },
                                    _widgetRecordProvider: t,
                                    _dependencies: []
                                }), d.createElement(A, {
                                    getOwnerSpan: r(function() {
                                        return c.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: r(function() {
                                        return c.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Value: 3,
                                        Text: "Complete the setup in your app, then click Next."
                                    },
                                    events: {
                                        _handleError: r(function(s) {
                                            l.handleError(s)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: i
                                    },
                                    _idProps: {
                                        service: e,
                                        uuid: "18",
                                        alias: "10"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        content: E.Empty
                                    },
                                    _dependencies: []
                                })]
                            })), d.createElement(u, {
                                align: 0,
                                animate: !1,
                                style: "w-full display-flex flex-direction-column gap-s",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "ButtonsContainer2"
                                },
                                _widgetRecordProvider: t
                            }, d.createElement(B, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: r(function() {
                                    var s = a.clone();
                                    l.buttonOnClick$Action("next", l.callContext(s))
                                }, "onClick"),
                                style: "btn btn-primary w-full",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: t
                            }, o(n.variables.hasEnabled2FaIn, !1, this, function() {
                                return ["Disable 2FA"]
                            }, function() {
                                return ["Next"]
                            })), d.createElement(B, {
                                enabled: !0,
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                isDefault: !1,
                                onClick: r(function() {
                                    var s = a.clone();
                                    l.buttonOnClick$Action("", l.callContext(s))
                                }, "onClick"),
                                style: "btn",
                                visible: n.variables.hasEnabled2FaIn,
                                _idProps: {
                                    service: e,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: t,
                                visible_dataFetchStatus: He.Model.calculateDataFetchStatus(n.variables._hasEnabled2FaInDataFetchStatus)
                            }, "Cancel"))]
                        })))]
                    }),
                    tabletLayout: E.Empty,
                    defaultLayout: new E(function() {
                        return [d.createElement(u, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "TwoFaBody2"
                            },
                            _widgetRecordProvider: t
                        }, o(n.variables.hasEnabled2FaIn, !1, this, function() {
                            return []
                        }, function() {
                            return [d.createElement(G, {
                                getOwnerSpan: r(function() {
                                    return c.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return c.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Text: "Enable 2FA to strengthen your account security.",
                                    Type: k.messageType.info
                                },
                                events: {
                                    _handleError: r(function(s) {
                                        l.handleError(s)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: i
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "23",
                                    alias: "11"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }), d.createElement(u, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: t
                        }, o(n.variables.hasEnabled2FaIn, !1, this, function() {
                            return ["2FA authentication keeps your account safer by adding an extra step in the login process. Disabling it removes this layer of security."]
                        }, function() {
                            return [d.createElement(A, {
                                getOwnerSpan: r(function() {
                                    return c.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return c.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Value: 1,
                                    Text: "Install an authenticator app in your device."
                                },
                                events: {
                                    _handleError: r(function(s) {
                                        l.handleError(s)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: i
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "25",
                                    alias: "12"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new E(function() {
                                        return [d.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            style: "font-size-base font-bold text-neutral-8",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "26"
                                            },
                                            _widgetRecordProvider: t
                                        }, d.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "27"
                                            },
                                            _widgetRecordProvider: t
                                        }, "Recommended:"), d.createElement(L, {
                                            enabled: !0,
                                            onClick: r(function() {
                                                var s = a.clone();
                                                l.linkOnClick$Action(l.callContext(s))
                                            }, "onClick"),
                                            style: "two-fa__links text-neutral-8",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "28"
                                            },
                                            _widgetRecordProvider: t
                                        }, "Authy"), " or", d.createElement(L, {
                                            enabled: !0,
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            onClick: r(function() {
                                                var s = a.clone();
                                                l.linkOnClick$Action(l.callContext(s))
                                            }, "onClick"),
                                            style: "two-fa__links text-neutral-8",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "29"
                                            },
                                            _widgetRecordProvider: t
                                        }, "Google Authenticator"))]
                                    })
                                },
                                _dependencies: []
                            }), d.createElement(F, {
                                getOwnerSpan: r(function() {
                                    return c.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return c.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsVertical: !1
                                },
                                events: {
                                    _handleError: r(function(s) {
                                        l.handleError(s)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: i
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "30",
                                    alias: "13"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), d.createElement(A, {
                                getOwnerSpan: r(function() {
                                    return c.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return c.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Value: 2,
                                    Text: "Scan the QR code or copy and paste the code into your app."
                                },
                                events: {
                                    _handleError: r(function(s) {
                                        l.handleError(s)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: i
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "31",
                                    alias: "14"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new E(function() {
                                        return [d.createElement(Y, {
                                            getOwnerSpan: r(function() {
                                                return c.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: r(function() {
                                                return c.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Text: "https://app.deriv.com"
                                            },
                                            events: {
                                                _handleError: r(function(s) {
                                                    l.handleError(s)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "32",
                                                alias: "15"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    })
                                },
                                _dependencies: []
                            }), d.createElement(F, {
                                getOwnerSpan: r(function() {
                                    return c.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return c.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsVertical: !1
                                },
                                events: {
                                    _handleError: r(function(s) {
                                        l.handleError(s)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: i
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "33",
                                    alias: "16"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), d.createElement(A, {
                                getOwnerSpan: r(function() {
                                    return c.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return c.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Text: "Complete the setup in your app, then click Next.",
                                    Value: 3
                                },
                                events: {
                                    _handleError: r(function(s) {
                                        l.handleError(s)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: i
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "34",
                                    alias: "17"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: E.Empty
                                },
                                _dependencies: []
                            })]
                        })), d.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "w-full",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ButtonsContainer"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(B, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: r(function() {
                                var s = a.clone();
                                l.buttonOnClick$Action("", l.callContext(s))
                            }, "onClick"),
                            style: "btn btn-primary w-full",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "36"
                            },
                            _widgetRecordProvider: t
                        }, o(n.variables.hasEnabled2FaIn, !1, this, function() {
                            return ["Disable 2FA"]
                        }, function() {
                            return ["Next"]
                        })), o(n.variables.hasEnabled2FaIn, !1, this, function() {
                            return [d.createElement(B, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: r(function() {
                                    var s = a.clone();
                                    l.buttonOnClick$Action("", l.callContext(s))
                                }, "onClick"),
                                style: "btn",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: t
                            }, "Cancel")]
                        }, function() {
                            return []
                        })))]
                    })
                },
                _dependencies: [h(n.variables._hasEnabled2FaInDataFetchStatus), h(n.variables.hasEnabled2FaIn), h(n.variables.isNextClickedVar)]
            })))
        }
    };
r(x, "View");
var ue = x,
    gn = ue;
export {
    gn as a
};