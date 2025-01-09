import {
    a as D
} from "./_oschunk-FX7ZCYVH.js";
import {
    a as T
} from "./_oschunk-NQZZDANH.js";
import {
    a as d,
    n as O,
    o as m
} from "./_oschunk-KZFTAIEG.js";
import {
    hj as E,
    ma as v
} from "./_oschunk-UATY3RVV.js";
import {
    ia as C
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as l
} from "./_oschunk-QHO7QY6K.js";

function b(f, A, N, t) {
    let o = JSON.parse(f.ErrorString),
        e = ["DataComparisonDateOfBirth", "DataValidationDateOfBirth", "DobMismatch"],
        i = ["NameMismatch", "DataComparisonName"],
        n = o.find(u => e.includes(u)),
        a = o.find(u => i.includes(u));
    f.IsDobError = !!n, f.IsNameError = !!a
}
l(b, "default");
var r = C; {
    let A = class A extends r.Controller.BaseViewController {
        constructor(t, o, e) {
            super(t, o, e);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(n) {
                    return n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "23c89253-9c9a-40e4-91a7-f4fd2aa9399e"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OnInitialize"), t = e.callContext(t), r.Flow.executeAsyncFlow(function() {
                            return o.flush(), r.SystemActions.requireScript("https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js", t)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _personalDetailsHandleError$Action() {
            return this.hasOwnProperty("__personalDetailsHandleError$Action") || (this.__personalDetailsHandleError$Action = function(t, o) {
                var e = this.model,
                    i = this.controller,
                    n = this.idService;
                return r.Logger.startActiveSpan("PersonalDetailsHandleError", function(a) {
                    a && (a.setAttribute("code.function", "PersonalDetailsHandleError"), a.setAttribute("outsystems.function.key", "249f04d3-55eb-4b14-aa2f-c4999c28460b"), a.setAttribute("outsystems.function.owner.name", "Accounts"), a.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("PersonalDetailsHandleError"), o = i.callContext(o);
                        var u = new r.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("Accounts.MainFlow.UpdateDetails.PersonalDetailsHandleError$vars")));
                        u.value.errorCode2InLocal = t.clone(), e.variables.errorDataVar = u.value.errorCode2InLocal
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__personalDetailsHandleError$Action
        }
        set _personalDetailsHandleError$Action(t) {
            this.__personalDetailsHandleError$Action = t
        }
        get _liveChat_OnClick$Action() {
            return this.hasOwnProperty("__liveChat_OnClick$Action") || (this.__liveChat_OnClick$Action = function(t) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("LiveChat_OnClick", function(n) {
                    n && (n.setAttribute("code.function", "LiveChat_OnClick"), n.setAttribute("outsystems.function.key", "7ba58fe4-85db-4be8-9f03-70dc91f95cc8"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("LiveChat_OnClick"), t = e.callContext(t), m.showLiveChat$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__liveChat_OnClick$Action
        }
        set _liveChat_OnClick$Action(t) {
            this.__liveChat_OnClick$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "84101209-9b9a-4100-83c6-20d44596ee7c"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var a = new r.DataTypes.VariableHolder,
                            u = new r.DataTypes.VariableHolder,
                            c = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType);
                        return r.Flow.executeAsyncFlow(function() {
                            return o.variables.isLoadingVar = !0, o.flush(), O.kYCAuthStatus$Action(d.getServer(), d.getAuthToken(), d.getAppId(), "en", function() {
                                var s = new E;
                                return s.countryAttr = d.getCountry(), s
                            }(), t).then(function(s) {
                                a.value = s
                            }).then(function() {
                                c.value.jSONOut = r.JSONUtils.serializeToJSON(a.value.responseOut.kYCAuthStatusAttr.identityAttr.lastRejectedAttr.rejectedReasonsAttr, !1, !1, r.DataTypes.DataTypes.Text), u.value = r.Logger.startActiveSpan("ErrorComputation", function(s) {
                                    s && (s.setAttribute("code.function", "ErrorComputation"), s.setAttribute("outsystems.function.key", "d31a5a60-c011-4d56-a9eb-c77953f30909"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(b, "ErrorComputation", "OnReady", {
                                            ErrorString: r.DataConversion.JSNodeParamConverter.to(c.value.jSONOut, r.DataTypes.DataTypes.Text),
                                            IsDobError: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean),
                                            IsNameError: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean)
                                        }, function(_) {
                                            var h = new(e.constructor.getVariableGroupType("Accounts.MainFlow.UpdateDetails.OnReady$errorComputationJSResult"));
                                            return h.isDobErrorOut = r.DataConversion.JSNodeParamConverter.from(_.IsDobError, r.DataTypes.DataTypes.Boolean), h.isNameErrorOut = r.DataConversion.JSNodeParamConverter.from(_.IsNameError, r.DataTypes.DataTypes.Boolean), h
                                        }, {}, {})
                                    } finally {
                                        s && s.end()
                                    }
                                }, 1), o.variables.rejectedReasonVar = c.value.jSONOut, o.variables.shouldUpdateNameVar = u.value.isNameErrorOut, o.variables.shouldUpdateDOBVar = u.value.isDobErrorOut, o.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onClose$Action() {
            return this.hasOwnProperty("__onClose$Action") || (this.__onClose$Action = function(t) {
                var o = this.model,
                    e = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnClose", function(n) {
                    n && (n.setAttribute("code.function", "OnClose"), n.setAttribute("outsystems.function.key", "9da3f09e-7d75-4901-8001-fd65d543c823"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (e.ensureControllerAlive("OnClose"), t = e.callContext(t), d.getIsWorkflow()) m.closeTab$Action(t);
                        else return r.Navigation.navigateTo(r.Navigation.generateScreenURL("Accounts", "Verification", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClose$Action
        }
        set _onClose$Action(t) {
            this.__onClose$Action = t
        }
        get _onChange$Action() {
            return this.hasOwnProperty("__onChange$Action") || (this.__onChange$Action = function(t, o, e, i) {
                var n = this.model,
                    a = this.controller,
                    u = this.idService;
                return r.Logger.startActiveSpan("onChange", function(c) {
                    c && (c.setAttribute("code.function", "onChange"), c.setAttribute("outsystems.function.key", "e06bf342-91e0-40f6-b8f1-cdcf6b08495b"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("onChange"), i = a.callContext(i);
                        var s = new r.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("Accounts.MainFlow.UpdateDetails.onChange$vars")));
                        s.value.firstNameInLocal = t, s.value.lastNameInLocal = o, s.value.dateOfBirthInLocal = e, n.variables.shouldUpdateNameVar && (n.variables.userFirstNameVar.valueAttr = s.value.firstNameInLocal, n.variables.userLastNameVar.valueAttr = s.value.lastNameInLocal), n.variables.shouldUpdateDOBVar && (n.variables.userDateOfBirthVar.valueAttr = s.value.dateOfBirthInLocal)
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__onChange$Action
        }
        set _onChange$Action(t) {
            this.__onChange$Action = t
        }
        onInitialize$Action(t) {
            var o = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "23c89253-9c9a-40e4-91a7-f4fd2aa9399e"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onInitialize$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        personalDetailsHandleError$Action(t, o) {
            var e = this.controller;
            return r.Logger.startActiveSpan("PersonalDetailsHandleError__proxy", function(i) {
                i && (i.setAttribute("code.function", "PersonalDetailsHandleError"), i.setAttribute("outsystems.function.key", "249f04d3-55eb-4b14-aa2f-c4999c28460b"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._personalDetailsHandleError$Action, o, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        liveChat_OnClick$Action(t) {
            var o = this.controller;
            return r.Logger.startActiveSpan("LiveChat_OnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "LiveChat_OnClick"), e.setAttribute("outsystems.function.key", "7ba58fe4-85db-4be8-9f03-70dc91f95cc8"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._liveChat_OnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var o = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "84101209-9b9a-4100-83c6-20d44596ee7c"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onClose$Action(t) {
            var o = this.controller;
            return r.Logger.startActiveSpan("OnClose__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClose"), e.setAttribute("outsystems.function.key", "9da3f09e-7d75-4901-8001-fd65d543c823"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onClose$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onChange$Action(t, o, e, i) {
            var n = this.controller;
            return r.Logger.startActiveSpan("onChange__proxy", function(a) {
                a && (a.setAttribute("code.function", "onChange"), a.setAttribute("outsystems.function.key", "e06bf342-91e0-40f6-b8f1-cdcf6b08495b"), a.setAttribute("outsystems.function.owner.name", "Accounts"), a.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onChange$Action, i, t, o, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var o = this.controller,
                    e = this.model,
                    i = this.idService;
                return o.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var o = this.controller,
                    e = this.model,
                    i = this.idService;
                return o.onReady$Action(t)
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return D.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return m.defaultTimeout
        }
    };
    l(A, "ControllerInner");
    let f = A;
    y = f, y.registerVariableGroupType("Accounts.MainFlow.UpdateDetails.PersonalDetailsHandleError$vars", [{
        name: "ErrorCode2",
        attrName: "errorCode2InLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new v
        }, "defaultValue"),
        complexType: v
    }]), y.registerVariableGroupType("Accounts.MainFlow.UpdateDetails.OnReady$errorComputationJSResult", [{
        name: "IsDobError",
        attrName: "isDobErrorOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsNameError",
        attrName: "isNameErrorOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }]), y.registerVariableGroupType("Accounts.MainFlow.UpdateDetails.onChange$vars", [{
        name: "FirstName",
        attrName: "firstNameInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LastName",
        attrName: "lastNameInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "DateOfBirth",
        attrName: "dateOfBirthInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Date,
        defaultValue: l(function() {
            return r.DataTypes.DateTime.defaultValue
        }, "defaultValue")
    }])
}
var y, V = new r.Controller.ControllerFactory(y, T);
export {
    V as a
};