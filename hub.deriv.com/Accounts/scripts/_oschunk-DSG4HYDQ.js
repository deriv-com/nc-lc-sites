import {
    a as I
} from "./_oschunk-FX7ZCYVH.js";
import {
    a as g
} from "./_oschunk-NQZZDANH.js";
import {
    a as f,
    n as v,
    o as C
} from "./_oschunk-KZFTAIEG.js";
import {
    Ed as b,
    Ya as h,
    hj as D,
    ma as m
} from "./_oschunk-UATY3RVV.js";
import {
    ia as _
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var i = _; {
    let A = class A extends i.Controller.BaseViewController {
        constructor(t, r, o) {
            super(t, r, o);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onChangeManualDocData$Action() {
            return this.hasOwnProperty("__onChangeManualDocData$Action") || (this.__onChangeManualDocData$Action = function(t, r, o) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnChangeManualDocData", function(u) {
                    u && (u.setAttribute("code.function", "OnChangeManualDocData"), u.setAttribute("outsystems.function.key", "2258136c-578f-4d28-9ba7-0a904024878e"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnChangeManualDocData"), o = e.callContext(o);
                        var c = new i.DataTypes.VariableHolder(new(e.constructor.getVariableGroupType("Accounts.MainFlow.ProofOfIdentity.OnChangeManualDocData$vars")));
                        c.value.documentNumber2InLocal = t, c.value.expiryDateInLocal = r, n.variables.documentNumberVar = c.value.documentNumber2InLocal, n.variables.documentExpiryDateVar = c.value.expiryDateInLocal
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onChangeManualDocData$Action
        }
        set _onChangeManualDocData$Action(t) {
            this.__onChangeManualDocData$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var r = this.model,
                    o = this.controller,
                    n = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(e) {
                    return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "5e940fca-327a-428c-908e-7f64c987741d"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OnReady"), t = o.callContext(t);
                        var a = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return r.variables.isLoadingVar = !0, r.flush(), v.kYCAuthStatus$Action(f.getServer(), f.getAuthToken(), f.getAppId(), "en", function() {
                                var u = new D;
                                return u
                            }(), t).then(function(u) {
                                a.value = u
                            }).then(function() {
                                r.variables.kYCAuthStatusDataVar = a.value.responseOut.kYCAuthStatusAttr, r.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        e && e.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onIdentityDocumentChange$Action() {
            return this.hasOwnProperty("__onIdentityDocumentChange$Action") || (this.__onIdentityDocumentChange$Action = function(t, r) {
                var o = this.model,
                    n = this.controller,
                    e = this.idService;
                return i.Logger.startActiveSpan("OnIdentityDocumentChange", function(a) {
                    a && (a.setAttribute("code.function", "OnIdentityDocumentChange"), a.setAttribute("outsystems.function.key", "5eb157d4-5cdb-4ed9-8ca3-5eb15f92199b"), a.setAttribute("outsystems.function.owner.name", "Accounts"), a.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnIdentityDocumentChange"), r = n.callContext(r);
                        var u = new i.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("Accounts.MainFlow.ProofOfIdentity.OnIdentityDocumentChange$vars")));
                        u.value.identityDocumentConfigInLocal = t.clone(), o.variables.documentTypeVar = u.value.identityDocumentConfigInLocal
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onIdentityDocumentChange$Action
        }
        set _onIdentityDocumentChange$Action(t) {
            this.__onIdentityDocumentChange$Action = t
        }
        get _personalDetailsHandleError$Action() {
            return this.hasOwnProperty("__personalDetailsHandleError$Action") || (this.__personalDetailsHandleError$Action = function(t, r) {
                var o = this.model,
                    n = this.controller,
                    e = this.idService;
                return i.Logger.startActiveSpan("PersonalDetailsHandleError", function(a) {
                    a && (a.setAttribute("code.function", "PersonalDetailsHandleError"), a.setAttribute("outsystems.function.key", "7807a254-8811-40db-93cd-a880444427ab"), a.setAttribute("outsystems.function.owner.name", "Accounts"), a.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("PersonalDetailsHandleError"), r = n.callContext(r);
                        var u = new i.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("Accounts.MainFlow.ProofOfIdentity.PersonalDetailsHandleError$vars")));
                        u.value.errorCode2InLocal = t.clone(), o.variables.errorDataVar = u.value.errorCode2InLocal
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__personalDetailsHandleError$Action
        }
        set _personalDetailsHandleError$Action(t) {
            this.__personalDetailsHandleError$Action = t
        }
        get _updateStep$Action() {
            return this.hasOwnProperty("__updateStep$Action") || (this.__updateStep$Action = function(t, r) {
                var o = this.model,
                    n = this.controller,
                    e = this.idService;
                return i.Logger.startActiveSpan("UpdateStep", function(a) {
                    a && (a.setAttribute("code.function", "UpdateStep"), a.setAttribute("outsystems.function.key", "a2752425-9503-498b-b8ee-53f09342e8b2"), a.setAttribute("outsystems.function.owner.name", "Accounts"), a.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("UpdateStep"), r = n.callContext(r);
                        var u = new i.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("Accounts.MainFlow.ProofOfIdentity.UpdateStep$vars")));
                        u.value.stepIndexInLocal = t, o.variables.stepVar = u.value.stepIndexInLocal
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__updateStep$Action
        }
        set _updateStep$Action(t) {
            this.__updateStep$Action = t
        }
        get _onDocumentIssuingCountryChange$Action() {
            return this.hasOwnProperty("__onDocumentIssuingCountryChange$Action") || (this.__onDocumentIssuingCountryChange$Action = function(t, r, o) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnDocumentIssuingCountryChange", function(u) {
                    u && (u.setAttribute("code.function", "OnDocumentIssuingCountryChange"), u.setAttribute("outsystems.function.key", "a61d2475-f07b-4c62-8848-bec9bb70d238"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDocumentIssuingCountryChange"), o = e.callContext(o);
                        var c = new i.DataTypes.VariableHolder(new(e.constructor.getVariableGroupType("Accounts.MainFlow.ProofOfIdentity.OnDocumentIssuingCountryChange$vars")));
                        c.value.stepIndexInLocal = t, c.value.selectedCountryInLocal = r.clone(), n.variables.stepVar = c.value.stepIndexInLocal, n.variables.documentIssuingCountryVar = c.value.selectedCountryInLocal
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onDocumentIssuingCountryChange$Action
        }
        set _onDocumentIssuingCountryChange$Action(t) {
            this.__onDocumentIssuingCountryChange$Action = t
        }
        get _liveChat_OnClick$Action() {
            return this.hasOwnProperty("__liveChat_OnClick$Action") || (this.__liveChat_OnClick$Action = function(t) {
                var r = this.model,
                    o = this.controller,
                    n = this.idService;
                return i.Logger.startActiveSpan("LiveChat_OnClick", function(e) {
                    e && (e.setAttribute("code.function", "LiveChat_OnClick"), e.setAttribute("outsystems.function.key", "cbb321ba-2af9-4a38-b12d-00dbcd19b1ac"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("LiveChat_OnClick"), t = o.callContext(t), C.showLiveChat$Action(t)
                    } finally {
                        e && e.end()
                    }
                }, 1)
            }), this.__liveChat_OnClick$Action
        }
        set _liveChat_OnClick$Action(t) {
            this.__liveChat_OnClick$Action = t
        }
        get _onPersonalDetailsChange$Action() {
            return this.hasOwnProperty("__onPersonalDetailsChange$Action") || (this.__onPersonalDetailsChange$Action = function(t, r, o, n) {
                var e = this.model,
                    a = this.controller,
                    u = this.idService;
                return i.Logger.startActiveSpan("OnPersonalDetailsChange", function(c) {
                    c && (c.setAttribute("code.function", "OnPersonalDetailsChange"), c.setAttribute("outsystems.function.key", "d059bc30-d6a2-4871-b489-7d1de9e80159"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnPersonalDetailsChange"), n = a.callContext(n);
                        var d = new i.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("Accounts.MainFlow.ProofOfIdentity.OnPersonalDetailsChange$vars")));
                        d.value.firstNameInLocal = t, d.value.lastNameInLocal = r, d.value.dateOfBirthInLocal = o, e.variables.userFirstNameVar = d.value.firstNameInLocal, e.variables.userLastNameVar = d.value.lastNameInLocal, e.variables.userDateOfBirthVar = d.value.dateOfBirthInLocal
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__onPersonalDetailsChange$Action
        }
        set _onPersonalDetailsChange$Action(t) {
            this.__onPersonalDetailsChange$Action = t
        }
        get _onIDVDocChange$Action() {
            return this.hasOwnProperty("__onIDVDocChange$Action") || (this.__onIDVDocChange$Action = function(t, r, o) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnIDVDocChange", function(u) {
                    u && (u.setAttribute("code.function", "OnIDVDocChange"), u.setAttribute("outsystems.function.key", "eecb4d19-052a-43e1-918b-d7cb6fe36447"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnIDVDocChange"), o = e.callContext(o);
                        var c = new i.DataTypes.VariableHolder(new(e.constructor.getVariableGroupType("Accounts.MainFlow.ProofOfIdentity.OnIDVDocChange$vars")));
                        c.value.documentNumber2InLocal = t, c.value.additionalDocNumberInLocal = r, n.variables.documentNumberVar = c.value.documentNumber2InLocal, n.variables.additionalDocumentNumberVar = c.value.additionalDocNumberInLocal
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onIDVDocChange$Action
        }
        set _onIDVDocChange$Action(t) {
            this.__onIDVDocChange$Action = t
        }
        onChangeManualDocData$Action(t, r, o) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnChangeManualDocData__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnChangeManualDocData"), e.setAttribute("outsystems.function.key", "2258136c-578f-4d28-9ba7-0a904024878e"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onChangeManualDocData$Action, o, t, r)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "5e940fca-327a-428c-908e-7f64c987741d"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, t)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onIdentityDocumentChange$Action(t, r) {
            var o = this.controller;
            return i.Logger.startActiveSpan("OnIdentityDocumentChange__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnIdentityDocumentChange"), n.setAttribute("outsystems.function.key", "5eb157d4-5cdb-4ed9-8ca3-5eb15f92199b"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onIdentityDocumentChange$Action, r, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        personalDetailsHandleError$Action(t, r) {
            var o = this.controller;
            return i.Logger.startActiveSpan("PersonalDetailsHandleError__proxy", function(n) {
                n && (n.setAttribute("code.function", "PersonalDetailsHandleError"), n.setAttribute("outsystems.function.key", "7807a254-8811-40db-93cd-a880444427ab"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._personalDetailsHandleError$Action, r, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        updateStep$Action(t, r) {
            var o = this.controller;
            return i.Logger.startActiveSpan("UpdateStep__proxy", function(n) {
                n && (n.setAttribute("code.function", "UpdateStep"), n.setAttribute("outsystems.function.key", "a2752425-9503-498b-b8ee-53f09342e8b2"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._updateStep$Action, r, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onDocumentIssuingCountryChange$Action(t, r, o) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnDocumentIssuingCountryChange__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDocumentIssuingCountryChange"), e.setAttribute("outsystems.function.key", "a61d2475-f07b-4c62-8848-bec9bb70d238"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDocumentIssuingCountryChange$Action, o, t, r)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        liveChat_OnClick$Action(t) {
            var r = this.controller;
            return i.Logger.startActiveSpan("LiveChat_OnClick__proxy", function(o) {
                o && (o.setAttribute("code.function", "LiveChat_OnClick"), o.setAttribute("outsystems.function.key", "cbb321ba-2af9-4a38-b12d-00dbcd19b1ac"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._liveChat_OnClick$Action, t)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onPersonalDetailsChange$Action(t, r, o, n) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnPersonalDetailsChange__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnPersonalDetailsChange"), a.setAttribute("outsystems.function.key", "d059bc30-d6a2-4871-b489-7d1de9e80159"), a.setAttribute("outsystems.function.owner.name", "Accounts"), a.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onPersonalDetailsChange$Action, n, t, r, o)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onIDVDocChange$Action(t, r, o) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnIDVDocChange__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnIDVDocChange"), e.setAttribute("outsystems.function.key", "eecb4d19-052a-43e1-918b-d7cb6fe36447"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onIDVDocChange$Action, o, t, r)
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
                var r = this.controller,
                    o = this.model,
                    n = this.idService;
                return r.onReady$Action(t)
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
                return I.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return C.defaultTimeout
        }
    };
    s(A, "ControllerInner");
    let y = A;
    l = y, l.registerVariableGroupType("Accounts.MainFlow.ProofOfIdentity.OnChangeManualDocData$vars", [{
        name: "DocumentNumber2",
        attrName: "documentNumber2InLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ExpiryDate",
        attrName: "expiryDateInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Date,
        defaultValue: s(function() {
            return i.DataTypes.DateTime.defaultValue
        }, "defaultValue")
    }]), l.registerVariableGroupType("Accounts.MainFlow.ProofOfIdentity.OnIdentityDocumentChange$vars", [{
        name: "IdentityDocumentConfig",
        attrName: "identityDocumentConfigInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new b
        }, "defaultValue"),
        complexType: b
    }]), l.registerVariableGroupType("Accounts.MainFlow.ProofOfIdentity.PersonalDetailsHandleError$vars", [{
        name: "ErrorCode2",
        attrName: "errorCode2InLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new m
        }, "defaultValue"),
        complexType: m
    }]), l.registerVariableGroupType("Accounts.MainFlow.ProofOfIdentity.UpdateStep$vars", [{
        name: "StepIndex",
        attrName: "stepIndexInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Integer,
        defaultValue: s(function() {
            return 0
        }, "defaultValue")
    }]), l.registerVariableGroupType("Accounts.MainFlow.ProofOfIdentity.OnDocumentIssuingCountryChange$vars", [{
        name: "StepIndex",
        attrName: "stepIndexInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Integer,
        defaultValue: s(function() {
            return 0
        }, "defaultValue")
    }, {
        name: "SelectedCountry",
        attrName: "selectedCountryInLocal",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new h
        }, "defaultValue"),
        complexType: h
    }]), l.registerVariableGroupType("Accounts.MainFlow.ProofOfIdentity.OnPersonalDetailsChange$vars", [{
        name: "FirstName",
        attrName: "firstNameInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LastName",
        attrName: "lastNameInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "DateOfBirth",
        attrName: "dateOfBirthInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Date,
        defaultValue: s(function() {
            return i.DataTypes.DateTime.defaultValue
        }, "defaultValue")
    }]), l.registerVariableGroupType("Accounts.MainFlow.ProofOfIdentity.OnIDVDocChange$vars", [{
        name: "DocumentNumber2",
        attrName: "documentNumber2InLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "AdditionalDocNumber",
        attrName: "additionalDocNumberInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var l, L = new i.Controller.ControllerFactory(l, g);
export {
    L as a
};