import {
    a as O
} from "./_oschunk-FX7ZCYVH.js";
import {
    a as C
} from "./_oschunk-NQZZDANH.js";
import {
    a as d,
    n as v,
    o as b
} from "./_oschunk-KZFTAIEG.js";
import {
    Ya as A,
    hj as _
} from "./_oschunk-UATY3RVV.js";
import {
    ia as S
} from "./_oschunk-3RH6DZJJ.js";
import {
    c
} from "./_oschunk-QHO7QY6K.js";
var r = S; {
    let h = class h extends r.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _updateStep$Action() {
            return this.hasOwnProperty("__updateStep$Action") || (this.__updateStep$Action = function(t, n) {
                var e = this.model,
                    o = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("UpdateStep", function(s) {
                    s && (s.setAttribute("code.function", "UpdateStep"), s.setAttribute("outsystems.function.key", "1d426b1b-3d4f-4d99-9e6e-440afa0a72d1"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("UpdateStep"), n = o.callContext(n);
                        var a = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("Accounts.MainFlow.ProofOfAddress.UpdateStep$vars")));
                        if (a.value.stepIndexInLocal = t, a.value.stepIndexInLocal < 1)
                            if (d.getIsWorkflow()) b.closeTab$Action(n);
                            else return r.Navigation.navigateTo(r.Navigation.generateScreenURL("Accounts", "Verification", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), n, !0);
                        else e.variables.stepVar = a.value.stepIndexInLocal, e.variables.step2Var = a.value.stepIndexInLocal
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__updateStep$Action
        }
        set _updateStep$Action(t) {
            this.__updateStep$Action = t
        }
        get _onCloseScreen$Action() {
            return this.hasOwnProperty("__onCloseScreen$Action") || (this.__onCloseScreen$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnCloseScreen", function(i) {
                    i && (i.setAttribute("code.function", "OnCloseScreen"), i.setAttribute("outsystems.function.key", "31535e38-39b7-4676-90de-bb8dff4269e1"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (e.ensureControllerAlive("OnCloseScreen"), t = e.callContext(t), d.getIsWorkflow()) b.closeTab$Action(t);
                        else return r.Navigation.navigateTo(r.Navigation.generateScreenURL("Accounts", "Verification", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onCloseScreen$Action
        }
        set _onCloseScreen$Action(t) {
            this.__onCloseScreen$Action = t
        }
        get _allowResubmittionOnClick$Action() {
            return this.hasOwnProperty("__allowResubmittionOnClick$Action") || (this.__allowResubmittionOnClick$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("AllowResubmittionOnClick", function(i) {
                    i && (i.setAttribute("code.function", "AllowResubmittionOnClick"), i.setAttribute("outsystems.function.key", "4f0acfe2-5c54-405a-ae21-da665439051d"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("AllowResubmittionOnClick"), t = e.callContext(t), n.variables.allowResubmissionVar = !0
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__allowResubmittionOnClick$Action
        }
        set _allowResubmittionOnClick$Action(t) {
            this.__allowResubmittionOnClick$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "84dc2c0a-46fe-489e-b6c7-40a8687685a9"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var s = new r.DataTypes.VariableHolder,
                            a = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType);
                        return r.Flow.executeAsyncFlow(function() {
                            return n.flush(), v.kYCAuthStatus$Action(d.getServer(), d.getAuthToken(), d.getAppId(), "en", function() {
                                var y = new _;
                                return y
                            }(), t).then(function(y) {
                                s.value = y
                            }).then(function() {
                                n.variables.pOAVerificationStatusVar = s.value.responseOut.kYCAuthStatusAttr.addressAttr.statusAttr, n.variables.isLoadingVar = !1, n.variables.lastRejectedReasonVar = s.value.responseOut.kYCAuthStatusAttr.addressAttr.lastRejectedAttr.rejectedReasonsAttr, n.variables.pOIVerificationStatusVar = s.value.responseOut.kYCAuthStatusAttr.identityAttr.statusAttr, d.setPOASelectedDocumentKey(""), d.setPOASelectedDocumentName(""), a.value.jSONOut = r.JSONUtils.serializeToJSON(s.value.responseOut, !1, !1)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onChangeAddress$Action() {
            return this.hasOwnProperty("__onChangeAddress$Action") || (this.__onChangeAddress$Action = function(t, n, e, o, i) {
                var s = this.model,
                    a = this.controller,
                    y = this.idService;
                return r.Logger.startActiveSpan("OnChangeAddress", function(u) {
                    u && (u.setAttribute("code.function", "OnChangeAddress"), u.setAttribute("outsystems.function.key", "8ed53fe4-b58d-45bf-be6e-ff10c6f207ac"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnChangeAddress"), i = a.callContext(i);
                        var l = new r.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("Accounts.MainFlow.ProofOfAddress.OnChangeAddress$vars")));
                        l.value.addressInLocal = t, l.value.townCityInLocal = n, l.value.postalZipInLocal = e, l.value.stateProvinceInLocal = o.clone(), s.variables.userAddressVar = l.value.addressInLocal, s.variables.userTownCityVar = l.value.townCityInLocal, s.variables.userStateProvinceVar = l.value.stateProvinceInLocal, s.variables.userPostalZipVar = l.value.postalZipInLocal
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onChangeAddress$Action
        }
        set _onChangeAddress$Action(t) {
            this.__onChangeAddress$Action = t
        }
        get _onDocumentSelection$Action() {
            return this.hasOwnProperty("__onDocumentSelection$Action") || (this.__onDocumentSelection$Action = function(t, n) {
                var e = this.model,
                    o = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnDocumentSelection", function(s) {
                    s && (s.setAttribute("code.function", "OnDocumentSelection"), s.setAttribute("outsystems.function.key", "999433c9-08e5-4323-a455-031ca1dbb6e1"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnDocumentSelection"), n = o.callContext(n);
                        var a = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("Accounts.MainFlow.ProofOfAddress.OnDocumentSelection$vars")));
                        a.value.selectedDocumentTypeInLocal = t, e.variables.documentNameVar = a.value.selectedDocumentTypeInLocal
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onDocumentSelection$Action
        }
        set _onDocumentSelection$Action(t) {
            this.__onDocumentSelection$Action = t
        }
        get _mobileOnChangeSelectedState$Action() {
            return this.hasOwnProperty("__mobileOnChangeSelectedState$Action") || (this.__mobileOnChangeSelectedState$Action = function(t, n) {
                var e = this.model,
                    o = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("MobileOnChangeSelectedState", function(s) {
                    s && (s.setAttribute("code.function", "MobileOnChangeSelectedState"), s.setAttribute("outsystems.function.key", "c5f84d29-5e97-4371-a37d-a59b8f24a519"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("MobileOnChangeSelectedState"), n = o.callContext(n);
                        var a = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("Accounts.MainFlow.ProofOfAddress.MobileOnChangeSelectedState$vars")));
                        a.value.stateProvinceInLocal = t.clone(), e.variables.userStateProvinceVar = a.value.stateProvinceInLocal
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__mobileOnChangeSelectedState$Action
        }
        set _mobileOnChangeSelectedState$Action(t) {
            this.__mobileOnChangeSelectedState$Action = t
        }
        get _showMobileStateList$Action() {
            return this.hasOwnProperty("__showMobileStateList$Action") || (this.__showMobileStateList$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("ShowMobileStateList", function(i) {
                    i && (i.setAttribute("code.function", "ShowMobileStateList"), i.setAttribute("outsystems.function.key", "e31a2c3e-fafc-435e-b712-a9e75de22762"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("ShowMobileStateList"), t = e.callContext(t), n.variables.setStateListFlagVar = !n.variables.setStateListFlagVar
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__showMobileStateList$Action
        }
        set _showMobileStateList$Action(t) {
            this.__showMobileStateList$Action = t
        }
        updateStep$Action(t, n) {
            var e = this.controller;
            return r.Logger.startActiveSpan("UpdateStep__proxy", function(o) {
                o && (o.setAttribute("code.function", "UpdateStep"), o.setAttribute("outsystems.function.key", "1d426b1b-3d4f-4d99-9e6e-440afa0a72d1"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._updateStep$Action, n, t)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onCloseScreen$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnCloseScreen__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnCloseScreen"), e.setAttribute("outsystems.function.key", "31535e38-39b7-4676-90de-bb8dff4269e1"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onCloseScreen$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        allowResubmittionOnClick$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("AllowResubmittionOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "AllowResubmittionOnClick"), e.setAttribute("outsystems.function.key", "4f0acfe2-5c54-405a-ae21-da665439051d"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._allowResubmittionOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "84dc2c0a-46fe-489e-b6c7-40a8687685a9"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onChangeAddress$Action(t, n, e, o, i) {
            var s = this.controller;
            return r.Logger.startActiveSpan("OnChangeAddress__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnChangeAddress"), a.setAttribute("outsystems.function.key", "8ed53fe4-b58d-45bf-be6e-ff10c6f207ac"), a.setAttribute("outsystems.function.owner.name", "Accounts"), a.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._onChangeAddress$Action, i, t, n, e, o)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onDocumentSelection$Action(t, n) {
            var e = this.controller;
            return r.Logger.startActiveSpan("OnDocumentSelection__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnDocumentSelection"), o.setAttribute("outsystems.function.key", "999433c9-08e5-4323-a455-031ca1dbb6e1"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onDocumentSelection$Action, n, t)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        mobileOnChangeSelectedState$Action(t, n) {
            var e = this.controller;
            return r.Logger.startActiveSpan("MobileOnChangeSelectedState__proxy", function(o) {
                o && (o.setAttribute("code.function", "MobileOnChangeSelectedState"), o.setAttribute("outsystems.function.key", "c5f84d29-5e97-4371-a37d-a59b8f24a519"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._mobileOnChangeSelectedState$Action, n, t)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        showMobileStateList$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("ShowMobileStateList__proxy", function(e) {
                e && (e.setAttribute("code.function", "ShowMobileStateList"), e.setAttribute("outsystems.function.key", "e31a2c3e-fafc-435e-b712-a9e75de22762"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._showMobileStateList$Action, t)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    o = this.idService;
                return n.onReady$Action(t)
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
                return O.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    c(h, "ControllerInner");
    let m = h;
    f = m, f.registerVariableGroupType("Accounts.MainFlow.ProofOfAddress.UpdateStep$vars", [{
        name: "StepIndex",
        attrName: "stepIndexInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Integer,
        defaultValue: c(function() {
            return 0
        }, "defaultValue")
    }]), f.registerVariableGroupType("Accounts.MainFlow.ProofOfAddress.OnChangeAddress$vars", [{
        name: "Address",
        attrName: "addressInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "TownCity",
        attrName: "townCityInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "PostalZip",
        attrName: "postalZipInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "StateProvince",
        attrName: "stateProvinceInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: c(function() {
            return new A
        }, "defaultValue"),
        complexType: A
    }]), f.registerVariableGroupType("Accounts.MainFlow.ProofOfAddress.OnDocumentSelection$vars", [{
        name: "SelectedDocumentType",
        attrName: "selectedDocumentTypeInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), f.registerVariableGroupType("Accounts.MainFlow.ProofOfAddress.MobileOnChangeSelectedState$vars", [{
        name: "StateProvince",
        attrName: "stateProvinceInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: c(function() {
            return new A
        }, "defaultValue"),
        complexType: A
    }])
}
var f, R = new r.Controller.ControllerFactory(f, C);
export {
    R as a
};