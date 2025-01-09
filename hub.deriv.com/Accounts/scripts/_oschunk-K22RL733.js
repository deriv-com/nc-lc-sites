import {
    a as Wt,
    b as Jt,
    c as Mt,
    d as Bt,
    e as Gt,
    f as Yt,
    g as zt
} from "./_oschunk-UDUH4ENV.js";
import {
    a as Ut
} from "./_oschunk-UKL7ALB3.js";
import {
    a as _t
} from "./_oschunk-QLNDJKPS.js";
import {
    a as Ct
} from "./_oschunk-5ZYL2O4C.js";
import "./_oschunk-CKBUXFBK.js";
import "./_oschunk-XH5MAFIM.js";
import "./_oschunk-7TZ3KR6K.js";
import {
    a as w
} from "./_oschunk-SI24YMBJ.js";
import {
    a as St
} from "./_oschunk-FSPIWF67.js";
import "./_oschunk-FSWTA5WV.js";
import "./_oschunk-VZCHS3W5.js";
import "./_oschunk-ENDX3VJY.js";
import "./_oschunk-FTYAL2B7.js";
import {
    a as At
} from "./_oschunk-GPNNXU3M.js";
import {
    b as E,
    d as S,
    f as P,
    g as ft,
    k as L,
    r as $
} from "./_oschunk-M2CKCDBB.js";
import "./_oschunk-DSZRJG3L.js";
import "./_oschunk-FX7ZCYVH.js";
import {
    a as x
} from "./_oschunk-NQZZDANH.js";
import {
    a as M,
    g as V,
    i as O
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-YIVLIJ7Z.js";
import "./_oschunk-XBVY76NY.js";
import "./_oschunk-TGM73NNA.js";
import "./_oschunk-4PNSWRUJ.js";
import "./_oschunk-BTXBTSZ3.js";
import "./_oschunk-5MMGFCSA.js";
import "./_oschunk-ZHFHVHFO.js";
import "./_oschunk-P7KMMADX.js";
import {
    a as _,
    o as T
} from "./_oschunk-KZFTAIEG.js";
import {
    Hg as D,
    Ig as F,
    a as dt
} from "./_oschunk-UATY3RVV.js";
import {
    ia as C
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as o,
    h as J
} from "./_oschunk-QHO7QY6K.js";
var R = J(M());
var I = J(M());

function ht(d, s, y, t) {
    let i = ["DobMismatch", "NameMismatch"];
    try {
        let n = JSON.parse(d.ErrorCodeList).find(r => i.includes(r));
        d.ShouldRetriggerPOI = !n
    } catch (e) {
        d.ShouldRetriggerPOI = !0
    }
}
o(ht, "default");

function pt(d, s, y, t) {
    try {
        let i = JSON.parse(d.KYCStatusData),
            {
                last_rejected: e
            } = i,
            n = o(g => {
                let A = g.filter(c => !["NameMismatch", "DobMismatch"].includes(c));
                return A != null && A.includes("Expired") ? "Failed_ExpiredDocSubmit" : "Failed_General"
            }, "computeError");
        if (d.RiskClassification === "high") {
            d.StatusToDisplay = "HighRisk";
            return
        }
        let {
            report_available: r,
            rejected_reasons: u
        } = e;
        r ? d.Status === "expired" ? d.StatusToDisplay = "IDV_Expired" : u.length > 2 ? d.StatusToDisplay = n(u) : u != null && u.includes("NameMismatch") && (u != null && u.includes("DobMismatch")) && u.length < 3 ? d.StatusToDisplay = "Failed_NameDOBMismatch" : u != null && u.includes("NameMismatch") ? d.StatusToDisplay = "Failed_NameMismatch" : u != null && u.includes("DobMismatch") ? d.StatusToDisplay = "Failed_DOBMismatch" : (console.log("Error status"), d.StatusToDisplay = "Failed_General") : d.StatusToDisplay = "Failed_General"
    } catch (i) {
        console.log("Error log: ", i), d.StatusToDisplay = "Failed_General"
    }
}
o(pt, "default");

function bt(d, s, y, t) {
    d.status === "pending" ? d.needsPOA ? d.StatusToDisplay = "InProgress_needs_POA" : d.StatusToDisplay = "InProgress" : d.needsPOA ? d.StatusToDisplay = "verified_need_poa" : d.StatusToDisplay = "verified"
}
o(bt, "default");
var l = C; {
    let s = class s extends l.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getVerificationStatus$ServerAction() {
            return this.hasOwnProperty("_getVerificationStatus$ServerAction") || (this._getVerificationStatus$ServerAction = function(t, i) {
                var e = this.controller;
                return l.Logger.startActiveSpan("GetVerificationStatus", function(n) {
                    return n && (n.setAttribute("code.function", "GetVerificationStatus"), n.setAttribute("outsystems.function.key", "2da87ed2-13fa-40aa-8a1b-04d796fb93f6"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), l.Flow.tryFinally(function() {
                        var r = {
                            VerificationStatusID: l.DataConversion.ServerDataConverter.to(t, l.DataTypes.DataTypes.Text)
                        };
                        return e.callServerAction("GetVerificationStatus", "screenservices/Accounts/ProofOfIdentity/IDVVerificationStatus/ActionGetVerificationStatus", "glWZNBuKnAKRPG8FzpqVGw", r, e.callContext(i), void 0, void 0, !1).then(function(u) {
                            var g = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.IDVVerificationStatus$ActionGetVerificationStatus"));
                            return g.verificationConfigOut = l.DataConversion.ServerDataConverter.from(u.VerificationConfig, D), g
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getVerificationStatus$ServerAction
        }
        set getVerificationStatus$ServerAction(t) {
            this._getVerificationStatus$ServerAction = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickCTA$Action() {
            return this.hasOwnProperty("__onClickCTA$Action") || (this.__onClickCTA$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return l.Logger.startActiveSpan("OnClickCTA", function(r) {
                    r && (r.setAttribute("code.function", "OnClickCTA"), r.setAttribute("outsystems.function.key", "19d34e26-1807-45d2-8875-62dd4397a952"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnClickCTA"), t = e.callContext(t);
                        var u = new l.DataTypes.VariableHolder,
                            g = new l.DataTypes.VariableHolder(new l.DataTypes.JSONSerializeOutputType);
                        return g.value.jSONOut = l.JSONUtils.serializeToJSON(i.variables.kYCConfigDataIn.identityAttr.lastRejectedAttr.rejectedReasonsAttr, !1, !1, l.DataTypes.DataTypes.Text), u.value = l.Logger.startActiveSpan("CheckErrors", function(A) {
                            A && (A.setAttribute("code.function", "CheckErrors"), A.setAttribute("outsystems.function.key", "a2adc356-da62-4f44-853d-11160a21df06"), A.setAttribute("outsystems.function.owner.name", "Accounts"), A.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), A.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(ht, "CheckErrors", "OnClickCTA", {
                                    ErrorCodeList: l.DataConversion.JSNodeParamConverter.to(g.value.jSONOut, l.DataTypes.DataTypes.Text),
                                    ShouldRetriggerPOI: l.DataConversion.JSNodeParamConverter.to(!1, l.DataTypes.DataTypes.Boolean)
                                }, function(c) {
                                    var a = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.IDVVerificationStatus.OnClickCTA$checkErrorsJSResult"));
                                    return a.shouldRetriggerPOIOut = l.DataConversion.JSNodeParamConverter.from(c.ShouldRetriggerPOI, l.DataTypes.DataTypes.Boolean), a
                                }, {}, {})
                            } finally {
                                A && A.end()
                            }
                        }, 1), u.value.shouldRetriggerPOIOut ? l.Navigation.navigateTo(l.Navigation.generateScreenURL("Accounts", "ProofOfIdentity", {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), t, !0) : l.Navigation.navigateTo(l.Navigation.generateScreenURL("Accounts", "UpdateDetails", {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickCTA$Action
        }
        set _onClickCTA$Action(t) {
            this.__onClickCTA$Action = t
        }
        get _computeIDVStatus$Action() {
            return this.hasOwnProperty("__computeIDVStatus$Action") || (this.__computeIDVStatus$Action = function(t, i) {
                var e = this.model,
                    n = this.controller,
                    r = this.idService;
                return l.Logger.startActiveSpan("ComputeIDVStatus", function(u) {
                    return u && (u.setAttribute("code.function", "ComputeIDVStatus"), u.setAttribute("outsystems.function.key", "3fef6eb0-2b33-4aa8-96e3-4b2aa9fae027"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        n.ensureControllerAlive("ComputeIDVStatus"), i = n.callContext(i);
                        var g = new l.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("Accounts.ProofOfIdentity.IDVVerificationStatus.ComputeIDVStatus$vars")));
                        g.value.kYCIdentityConfigInLocal = t;
                        var A = new l.DataTypes.VariableHolder,
                            c = new l.DataTypes.VariableHolder;
                        return l.Flow.executeAsyncFlow(function() {
                            return c.value = l.Logger.startActiveSpan("ComputeStatus", function(a) {
                                a && (a.setAttribute("code.function", "ComputeStatus"), a.setAttribute("outsystems.function.key", "5cfca9bf-df9c-4d55-abe1-fb28299a66d5"), a.setAttribute("outsystems.function.owner.name", "Accounts"), a.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return n.safeExecuteJSNode(pt, "ComputeStatus", "ComputeIDVStatus", {
                                        Status: l.DataConversion.JSNodeParamConverter.to(e.variables.kYCConfigDataIn.identityAttr.statusAttr, l.DataTypes.DataTypes.Text),
                                        KYCStatusData: l.DataConversion.JSNodeParamConverter.to(g.value.kYCIdentityConfigInLocal, l.DataTypes.DataTypes.Text),
                                        RiskClassification: l.DataConversion.JSNodeParamConverter.to(e.variables.kYCConfigDataIn.riskClassificationAttr, l.DataTypes.DataTypes.Text),
                                        StatusToDisplay: l.DataConversion.JSNodeParamConverter.to("", l.DataTypes.DataTypes.Text)
                                    }, function(b) {
                                        var ot = new(n.constructor.getVariableGroupType("Accounts.ProofOfIdentity.IDVVerificationStatus.ComputeIDVStatus$computeStatusJSResult"));
                                        return ot.statusToDisplayOut = l.DataConversion.JSNodeParamConverter.from(b.StatusToDisplay, l.DataTypes.DataTypes.Text), ot
                                    }, {}, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), e.flush(), n.getVerificationStatus$ServerAction(l.BuiltinFunctions.textToIdentifier(c.value.statusToDisplayOut), i).then(function(a) {
                                A.value = a
                            }).then(function() {
                                e.variables.statusConfigVar = A.value.verificationConfigOut
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__computeIDVStatus$Action
        }
        set _computeIDVStatus$Action(t) {
            this.__computeIDVStatus$Action = t
        }
        get _onClickOk$Action() {
            return this.hasOwnProperty("__onClickOk$Action") || (this.__onClickOk$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return l.Logger.startActiveSpan("OnClickOk", function(r) {
                    r && (r.setAttribute("code.function", "OnClickOk"), r.setAttribute("outsystems.function.key", "5c6ad2f6-8db5-4274-b407-7e3a0f579ea2"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (e.ensureControllerAlive("OnClickOk"), t = e.callContext(t), _.getIsWorkflow()) T.closeTab$Action(t);
                        else return l.Navigation.navigateTo(l.Navigation.generateScreenURL("Accounts", "Verification", {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickOk$Action
        }
        set _onClickOk$Action(t) {
            this.__onClickOk$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return l.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "6dc29070-e9f9-4444-ad2c-bb42cff745f7"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var u = new l.DataTypes.VariableHolder,
                            g = new l.DataTypes.VariableHolder,
                            A = new l.DataTypes.VariableHolder(new l.DataTypes.JSONSerializeOutputType);
                        return l.Flow.executeAsyncFlow(function() {
                            return i.variables.isLoadingVar = !0, i.variables.isPOARequiredVar = i.variables.kYCConfigDataIn.addressAttr.statusAttr === "required", i.variables.shouldResubmitPOIVar = l.BuiltinFunctions.index("rejected expired resubmit revoked", i.variables.kYCConfigDataIn.identityAttr.statusAttr, 0, !1, !0) > -1, l.Flow.executeSequence(function() {
                                return l.BuiltinFunctions.index("pending verified", i.variables.kYCConfigDataIn.identityAttr.statusAttr, 0, !1, !0) === -1 ? (A.value.jSONOut = l.JSONUtils.serializeToJSON(i.variables.kYCConfigDataIn.identityAttr, !1, !1), e._computeIDVStatus$Action(A.value.jSONOut, t).then(function() {
                                    i.variables.isLoadingVar = !1
                                })) : l.Flow.executeSequence(function() {
                                    if (l.BuiltinFunctions.index("pending verified", i.variables.kYCConfigDataIn.identityAttr.statusAttr, 0, !1, !0) > -1) return g.value = l.Logger.startActiveSpan("ComputeStatus", function(c) {
                                        c && (c.setAttribute("code.function", "ComputeStatus"), c.setAttribute("outsystems.function.key", "54a08ae5-69ef-44fb-90ff-459044e786a9"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return e.safeExecuteJSNode(bt, "ComputeStatus", "OnReady", {
                                                status: l.DataConversion.JSNodeParamConverter.to(i.variables.kYCConfigDataIn.identityAttr.statusAttr, l.DataTypes.DataTypes.Text),
                                                needsPOA: l.DataConversion.JSNodeParamConverter.to(i.variables.isPOARequiredVar, l.DataTypes.DataTypes.Boolean),
                                                StatusToDisplay: l.DataConversion.JSNodeParamConverter.to("", l.DataTypes.DataTypes.Text)
                                            }, function(a) {
                                                var b = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.IDVVerificationStatus.OnReady$computeStatusJSResult"));
                                                return b.statusToDisplayOut = l.DataConversion.JSNodeParamConverter.from(a.StatusToDisplay, l.DataTypes.DataTypes.Text), b
                                            }, {}, {})
                                        } finally {
                                            c && c.end()
                                        }
                                    }, 1), i.flush(), e.getVerificationStatus$ServerAction(l.BuiltinFunctions.textToIdentifier(g.value.statusToDisplayOut), t).then(function(c) {
                                        u.value = c
                                    }).then(function() {
                                        i.variables.statusConfigVar = u.value.verificationConfigOut, i.variables.isLoadingVar = !1
                                    });
                                    T.logger$Action("Otherwise", "Flow", t), i.variables.isLoadingVar = !1
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        onClickCTA$Action(t) {
            var i = this.controller;
            return l.Logger.startActiveSpan("OnClickCTA__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickCTA"), e.setAttribute("outsystems.function.key", "19d34e26-1807-45d2-8875-62dd4397a952"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickCTA$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        computeIDVStatus$Action(t, i) {
            var e = this.controller;
            return l.Logger.startActiveSpan("ComputeIDVStatus__proxy", function(n) {
                return n && (n.setAttribute("code.function", "ComputeIDVStatus"), n.setAttribute("outsystems.function.key", "3fef6eb0-2b33-4aa8-96e3-4b2aa9fae027"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._computeIDVStatus$Action, i, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onClickOk$Action(t) {
            var i = this.controller;
            return l.Logger.startActiveSpan("OnClickOk__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickOk"), e.setAttribute("outsystems.function.key", "5c6ad2f6-8db5-4274-b407-7e3a0f579ea2"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickOk$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var i = this.controller;
            return l.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "6dc29070-e9f9-4444-ad2c-bb42cff745f7"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
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
                var i = this.controller,
                    e = this.model,
                    n = this.idService;
                return i.onReady$Action(t)
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
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let d = s;
    B = d, B.registerVariableGroupType("Accounts.ProofOfIdentity.IDVVerificationStatus$ActionGetVerificationStatus", [{
        name: "VerificationConfig",
        attrName: "verificationConfigOut",
        mandatory: !1,
        dataType: l.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new D
        }, "defaultValue"),
        complexType: D
    }]), B.registerVariableGroupType("Accounts.ProofOfIdentity.IDVVerificationStatus.OnClickCTA$checkErrorsJSResult", [{
        name: "ShouldRetriggerPOI",
        attrName: "shouldRetriggerPOIOut",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }]), B.registerVariableGroupType("Accounts.ProofOfIdentity.IDVVerificationStatus.ComputeIDVStatus$vars", [{
        name: "KYCIdentityConfig",
        attrName: "kYCIdentityConfigInLocal",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), B.registerVariableGroupType("Accounts.ProofOfIdentity.IDVVerificationStatus.ComputeIDVStatus$computeStatusJSResult", [{
        name: "StatusToDisplay",
        attrName: "statusToDisplayOut",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), B.registerVariableGroupType("Accounts.ProofOfIdentity.IDVVerificationStatus.OnReady$computeStatusJSResult", [{
        name: "StatusToDisplay",
        attrName: "statusToDisplayOut",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var B, jt = new l.Controller.ControllerFactory(B, x);
var H = J(M());
var W = C; {
    let s = class s extends W.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClose$Action() {
            return this.hasOwnProperty("__onClose$Action") || (this.__onClose$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return W.Logger.startActiveSpan("OnClose", function(r) {
                    r && (r.setAttribute("code.function", "OnClose"), r.setAttribute("outsystems.function.key", "1ebc33f7-3995-4428-acd0-cd4e392ac994"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (e.ensureControllerAlive("OnClose"), t = e.callContext(t), _.getIsWorkflow()) T.closeTab$Action(t);
                        else return W.Navigation.navigateTo(W.Navigation.generateScreenURL("Accounts", "Verification", {}), W.Transitions.createTransition(W.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClose$Action
        }
        set _onClose$Action(t) {
            this.__onClose$Action = t
        }
        onClose$Action(t) {
            var i = this.controller;
            return W.Logger.startActiveSpan("OnClose__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClose"), e.setAttribute("outsystems.function.key", "1ebc33f7-3995-4428-acd0-cd4e392ac994"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClose$Action, t)
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
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let d = s;
    Kt = d
}
var Kt, qt = new W.Controller.ControllerFactory(Kt, x);
var G = J(M());
var Zt = C; {
    let s = class s extends Zt.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
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
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let d = s;
    Qt = d
}
var Qt, Xt = new Zt.Controller.ControllerFactory(Qt, x);
var st = C,
    Le = O.PlaceholderContent,
    We = O.IteratorPlaceholderContent,
    Y = class Y extends V.BaseWebBlock {
        static get displayName() {
            return "Common.StatusIcon"
        }
        static getAttributes() {
            return {
                codeFunction: "StatusIcon",
                functionKey: "65b7d154-5c6a-433f-af42-5f6a3c54a250",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
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
            return Wt
        }
        get controllerFactory() {
            return Xt
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                y = this.controller,
                t = this.idService,
                i = y.validationService,
                e = this.widgetsRecordProvider,
                n = y.callContext(),
                r = Y.ifWidget,
                u = Y.textWidget,
                g = Y.asPrimitiveValue,
                A = Y.getTranslation,
                c = this;
            return G.createElement("div", this.getRootNodeProperties(), r(s.variables.statusIn === "pending" || s.variables.statusIn === "verified", !1, this, function() {
                return [G.createElement(S, {
                    align: 0,
                    animate: !0,
                    visible: s.variables.statusIn === "verified",
                    _idProps: {
                        service: t,
                        uuid: "0"
                    },
                    _widgetRecordProvider: e,
                    visible_dataFetchStatus: st.Model.calculateDataFetchStatus(s.variables._statusInDataFetchStatus)
                }, G.createElement(L, {
                    image: st.Navigation.VersionedURL.getVersionedUrl("img/Accounts.verificationsuccess.svg"),
                    type: 0,
                    _idProps: {
                        service: t,
                        uuid: "1"
                    },
                    _widgetRecordProvider: e
                })), G.createElement(S, {
                    align: 0,
                    animate: !0,
                    visible: s.variables.statusIn === "pending",
                    _idProps: {
                        service: t,
                        uuid: "2"
                    },
                    _widgetRecordProvider: e,
                    visible_dataFetchStatus: st.Model.calculateDataFetchStatus(s.variables._statusInDataFetchStatus)
                }, G.createElement(L, {
                    image: st.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLightUserPendingIcon.png"),
                    type: 0,
                    _idProps: {
                        service: t,
                        uuid: "3"
                    },
                    _widgetRecordProvider: e
                }))]
            }, function() {
                return [G.createElement(L, {
                    image: st.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLightUserErrorIcon.svg"),
                    type: 0,
                    _idProps: {
                        service: t,
                        uuid: "4"
                    },
                    _widgetRecordProvider: e
                })]
            }))
        }
    };
o(Y, "View");
var Pt = Y,
    Tt = Pt;
var vt = C,
    re = O.PlaceholderContent,
    qe = O.IteratorPlaceholderContent,
    z = class z extends V.BaseWebBlock {
        static get displayName() {
            return "ProofOfIdentity.VerificationStatus"
        }
        static getAttributes() {
            return {
                codeFunction: "VerificationStatus",
                functionKey: "4361493d-2fb0-4a29-8708-7bb29170738f",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.ProofOfIdentity.VerificationStatus.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [_t, Tt]
        }
        get modelFactory() {
            return Jt
        }
        get controllerFactory() {
            return qt
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                y = this.controller,
                t = this.idService,
                i = y.validationService,
                e = this.widgetsRecordProvider,
                n = y.callContext(),
                r = z.ifWidget,
                u = z.textWidget,
                g = z.asPrimitiveValue,
                A = z.getTranslation,
                c = this;
            return H.createElement("div", this.getRootNodeProperties(), H.createElement(S, {
                align: 0,
                animate: !1,
                style: "full-height",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: e
            }, r(_.getDevice() === "desktop", !1, this, function() {
                return [H.createElement(S, {
                    align: 0,
                    animate: !1,
                    style: "margin-bottom-base",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "1"
                    },
                    _widgetRecordProvider: e
                }, H.createElement(_t, {
                    getOwnerSpan: o(function() {
                        return c.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return c.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Title: s.variables.headingTextIn,
                        _titleInDataFetchStatus: vt.Model.calculateDataFetchStatus(s.variables._headingTextInDataFetchStatus),
                        ShouldDisplayCloseButton: !0,
                        ShouldDisplayBackButton: !1
                    },
                    events: {
                        _handleError: o(function(a) {
                            y.handleError(a)
                        }, "_handleError"),
                        onClickClose$Action: o(function() {
                            var a = n.clone();
                            y.onClose$Action(y.callContext(a))
                        }, "onClickClose$Action")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: t,
                        uuid: "2",
                        alias: "1"
                    },
                    _widgetRecordProvider: e,
                    placeholders: {
                        additionalcontent: re.Empty
                    },
                    _dependencies: []
                }))]
            }, function() {
                return []
            }), H.createElement(S, {
                align: 0,
                animate: !1,
                style: s.getCachedValue(t.getId("VerificationStatusBody.Style"), function() {
                    return "full-height display-flex flex-direction-column align-items-center row-gap-m verification-status__body" + (_.getIsWorkflow() ? " workflow" : "")
                }, function() {
                    return _.getIsWorkflow()
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    name: "VerificationStatusBody"
                },
                _widgetRecordProvider: e
            }, H.createElement(Tt, {
                getOwnerSpan: o(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Status: s.variables.statusIn,
                    _statusInDataFetchStatus: vt.Model.calculateDataFetchStatus(s.variables._statusInDataFetchStatus)
                },
                events: {
                    _handleError: o(function(a) {
                        y.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "4",
                    alias: "2"
                },
                _widgetRecordProvider: e,
                _dependencies: []
            }), H.createElement(S, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column row-gap-s align-items-center",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "5"
                },
                _widgetRecordProvider: e
            }, H.createElement(P, {
                style: "font-bold font-size-h6",
                value: s.variables.statusConfigIn.titleAttr,
                _idProps: {
                    service: t,
                    name: "Title"
                },
                _widgetRecordProvider: e,
                value_dataFetchStatus: vt.Model.calculateDataFetchStatus(s.variables._statusConfigInDataFetchStatus)
            }), H.createElement(P, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                style: "text-align-center",
                value: s.variables.statusConfigIn.messageAttr,
                _idProps: {
                    service: t,
                    name: "Message"
                },
                _widgetRecordProvider: e,
                value_dataFetchStatus: vt.Model.calculateDataFetchStatus(s.variables._statusConfigInDataFetchStatus)
            })))))
        }
    };
o(z, "View");
var Et = z,
    N = Et;
var ct = C,
    si = O.PlaceholderContent,
    ci = O.IteratorPlaceholderContent,
    U = class U extends V.BaseWebBlock {
        static get displayName() {
            return "ProofOfIdentity.IDVVerificationStatus"
        }
        static getAttributes() {
            return {
                codeFunction: "IDVVerificationStatus",
                functionKey: "711c47bb-28fe-4164-90df-84b9837c94bd",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.ProofOfIdentity.IDVVerificationStatus.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [w, N]
        }
        get modelFactory() {
            return Mt
        }
        get controllerFactory() {
            return jt
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                y = this.controller,
                t = this.idService,
                i = y.validationService,
                e = this.widgetsRecordProvider,
                n = y.callContext(),
                r = U.ifWidget,
                u = U.textWidget,
                g = U.asPrimitiveValue,
                A = U.getTranslation,
                c = this;
            return I.createElement("div", this.getRootNodeProperties(), r(s.variables.isLoadingVar, !0, this, function() {
                return [I.createElement(w, {
                    getOwnerSpan: o(function() {
                        return c.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return c.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(a) {
                            y.handleError(a)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: e,
                    _dependencies: []
                })]
            }, function() {
                return [I.createElement(S, {
                    align: 0,
                    animate: !0,
                    style: "idv-status__layout display-flex flex-direction-column row-gap-m full-height",
                    visible: !s.variables.isLoadingVar,
                    _idProps: {
                        service: t,
                        uuid: "1"
                    },
                    _widgetRecordProvider: e
                }, I.createElement(S, {
                    align: 0,
                    animate: !1,
                    style: "idv-status__body-content",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "2"
                    },
                    _widgetRecordProvider: e
                }, I.createElement(N, {
                    getOwnerSpan: o(function() {
                        return c.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return c.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        HeadingText: "Proof of Identity",
                        Status: s.variables.kYCConfigDataIn.identityAttr.statusAttr,
                        _statusInDataFetchStatus: ct.Model.calculateDataFetchStatus(s.variables._kYCConfigDataInDataFetchStatus),
                        StatusConfig: s.variables.statusConfigVar
                    },
                    events: {
                        _handleError: o(function(a) {
                            y.handleError(a)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: t,
                        uuid: "3",
                        alias: "2"
                    },
                    _widgetRecordProvider: e,
                    _dependencies: []
                })), I.createElement(S, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-center idv-status__btn-layout",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "4"
                    },
                    _widgetRecordProvider: e
                }, r(s.variables.shouldResubmitPOIVar, !1, this, function() {
                    return [I.createElement(E, {
                        enabled: !0,
                        extendedProperties: {
                            style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                        },
                        isDefault: !1,
                        onClick: o(function() {
                            c.validateWidget("");
                            var a = n.clone();
                            y.onClickCTA$Action(y.callContext(a))
                        }, "onClick"),
                        style: "btn btn-primary idv-status__btn",
                        visible: s.variables.shouldResubmitPOIVar,
                        _idProps: {
                            service: t,
                            uuid: "5"
                        },
                        _widgetRecordProvider: e
                    }, I.createElement(P, {
                        value: s.variables.statusConfigVar.buttonTextAttr,
                        _idProps: {
                            service: t,
                            uuid: "6"
                        },
                        _widgetRecordProvider: e
                    }))]
                }, function() {
                    return [r(s.variables.isPOARequiredVar, !1, this, function() {
                        return [I.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                try {
                                    ct.Navigation.navigateTo(ct.Navigation.generateScreenURL("Accounts", "ProofOfAddress", {}), ct.Transitions.createTransition(ct.Transitions.TransitionAnimation.Default), null, !0)
                                } catch (a) {
                                    if (a.name !== "RedirectOccurredException") throw a
                                }
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: s.variables.isPOARequiredVar && !_.getIsWorkflow(),
                            _idProps: {
                                service: t,
                                uuid: "7"
                            },
                            _widgetRecordProvider: e
                        }, I.createElement($, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: ["Submit proof of address"],
                            _idProps: {
                                service: t,
                                uuid: "8"
                            },
                            _widgetRecordProvider: e
                        }))]
                    }, function() {
                        return [I.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                c.validateWidget("");
                                var a = n.clone();
                                y.onClickOk$Action(y.callContext(a))
                            }, "onClick"),
                            style: "btn btn-primary idv-status__btn ",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "9"
                            },
                            _widgetRecordProvider: e
                        }, I.createElement(P, {
                            value: "OK",
                            _idProps: {
                                service: t,
                                uuid: "10"
                            },
                            _widgetRecordProvider: e
                        }))]
                    })]
                })))]
            }))
        }
    };
o(U, "View");
var Rt = U,
    yt = Rt;
var h = J(M());

function Dt(d, s, y, t) {
    try {
        let i = JSON.parse(d.ErrorList),
            e = i.filter(r => ["DataComparisonDateOfBirth", "DataValidationDateOfBirth", "DataComparisonName"].includes(r.code)),
            n = !i.every(r => e.includes(r));
        d.ShouldRetriggerPOI = n
    } catch (i) {
        d.ShouldRetriggerPOI = !0
    }
}
o(Dt, "default");

function wt(d, s, y, t) {
    d.status === "pending" ? d.needsPOA ? d.StatusToDisplay = "InProgress_needs_POA" : d.StatusToDisplay = "InProgress" : d.needsPOA ? d.StatusToDisplay = "verified_need_poa" : d.StatusToDisplay = "verified"
}
o(wt, "default");
var f = C; {
    let s = class s extends f.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getVerificationStatus$ServerAction() {
            return this.hasOwnProperty("_getVerificationStatus$ServerAction") || (this._getVerificationStatus$ServerAction = function(t, i) {
                var e = this.controller;
                return f.Logger.startActiveSpan("GetVerificationStatus", function(n) {
                    return n && (n.setAttribute("code.function", "GetVerificationStatus"), n.setAttribute("outsystems.function.key", "2da87ed2-13fa-40aa-8a1b-04d796fb93f6"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), f.Flow.tryFinally(function() {
                        var r = {
                            VerificationStatusID: f.DataConversion.ServerDataConverter.to(t, f.DataTypes.DataTypes.Text)
                        };
                        return e.callServerAction("GetVerificationStatus", "screenservices/Accounts/ProofOfIdentity/OnfidoVerificationStatus/ActionGetVerificationStatus", "glWZNBuKnAKRPG8FzpqVGw", r, e.callContext(i), void 0, void 0, !1).then(function(u) {
                            var g = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.OnfidoVerificationStatus$ActionGetVerificationStatus"));
                            return g.verificationConfigOut = f.DataConversion.ServerDataConverter.from(u.VerificationConfig, D), g
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getVerificationStatus$ServerAction
        }
        set getVerificationStatus$ServerAction(t) {
            this._getVerificationStatus$ServerAction = t
        }
        get getOnfidoErrors$ServerAction() {
            return this.hasOwnProperty("_getOnfidoErrors$ServerAction") || (this._getOnfidoErrors$ServerAction = function(t, i) {
                var e = this.controller;
                return f.Logger.startActiveSpan("GetOnfidoErrors", function(n) {
                    return n && (n.setAttribute("code.function", "GetOnfidoErrors"), n.setAttribute("outsystems.function.key", "c16b3eee-4245-47d1-b9ce-97403f4c1927"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), f.Flow.tryFinally(function() {
                        var r = {
                            OnfidoErrorList: f.DataConversion.ServerDataConverter.to(t, f.DataTypes.DataTypes.RecordList)
                        };
                        return e.callServerAction("GetOnfidoErrors", "screenservices/Accounts/ProofOfIdentity/OnfidoVerificationStatus/ActionGetOnfidoErrors", "cuZuqa_eeR005Ftc0hOTzg", r, e.callContext(i), void 0, void 0, !1).then(function(u) {
                            var g = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.OnfidoVerificationStatus$ActionGetOnfidoErrors"));
                            return g.errorConfigOut = f.DataConversion.ServerDataConverter.from(u.ErrorConfig, F), g
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getOnfidoErrors$ServerAction
        }
        set getOnfidoErrors$ServerAction(t) {
            this._getOnfidoErrors$ServerAction = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickCTA$Action() {
            return this.hasOwnProperty("__onClickCTA$Action") || (this.__onClickCTA$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return f.Logger.startActiveSpan("OnClickCTA", function(r) {
                    r && (r.setAttribute("code.function", "OnClickCTA"), r.setAttribute("outsystems.function.key", "3411c076-9276-4ef7-b660-1f05bd9f0659"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnClickCTA"), t = e.callContext(t);
                        var u = new f.DataTypes.VariableHolder,
                            g = new f.DataTypes.VariableHolder(new f.DataTypes.JSONSerializeOutputType);
                        return g.value.jSONOut = f.JSONUtils.serializeToJSON(i.variables.statusConfigVar, !1, !1), u.value = f.Logger.startActiveSpan("CheckDataUpdate", function(A) {
                            A && (A.setAttribute("code.function", "CheckDataUpdate"), A.setAttribute("outsystems.function.key", "b76f4f5a-9825-4521-9065-bc00ba9484d2"), A.setAttribute("outsystems.function.owner.name", "Accounts"), A.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), A.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(Dt, "CheckDataUpdate", "OnClickCTA", {
                                    ErrorList: f.DataConversion.JSNodeParamConverter.to(g.value.jSONOut, f.DataTypes.DataTypes.Text),
                                    ShouldRetriggerPOI: f.DataConversion.JSNodeParamConverter.to(!1, f.DataTypes.DataTypes.Boolean)
                                }, function(c) {
                                    var a = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.OnfidoVerificationStatus.OnClickCTA$checkDataUpdateJSResult"));
                                    return a.shouldRetriggerPOIOut = f.DataConversion.JSNodeParamConverter.from(c.ShouldRetriggerPOI, f.DataTypes.DataTypes.Boolean), a
                                }, {}, {})
                            } finally {
                                A && A.end()
                            }
                        }, 1), u.value.shouldRetriggerPOIOut ? f.Navigation.navigateTo(f.Navigation.generateScreenURL("Accounts", "ProofOfIdentity", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.Default), t, !0) : f.Navigation.navigateTo(f.Navigation.generateScreenURL("Accounts", "UpdateDetails", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickCTA$Action
        }
        set _onClickCTA$Action(t) {
            this.__onClickCTA$Action = t
        }
        get _onClickOk$Action() {
            return this.hasOwnProperty("__onClickOk$Action") || (this.__onClickOk$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return f.Logger.startActiveSpan("OnClickOk", function(r) {
                    r && (r.setAttribute("code.function", "OnClickOk"), r.setAttribute("outsystems.function.key", "405e21d8-db7b-4e3c-8063-c60004f5c6a8"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (e.ensureControllerAlive("OnClickOk"), t = e.callContext(t), _.getIsWorkflow()) T.closeTab$Action(t);
                        else return f.Navigation.navigateTo(f.Navigation.generateScreenURL("Accounts", "Verification", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickOk$Action
        }
        set _onClickOk$Action(t) {
            this.__onClickOk$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return f.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "c0d8a081-95a2-4ce6-a45e-684bd3ff5aa0"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var u = new f.DataTypes.VariableHolder,
                            g = new f.DataTypes.VariableHolder,
                            A = new f.DataTypes.VariableHolder(new f.DataTypes.JSONSerializeOutputType);
                        return f.Flow.executeAsyncFlow(function() {
                            return i.variables.isLoadingVar = !0, i.variables.statusVar = i.variables.kYCConfigDataIn.identityAttr.statusAttr, i.variables.isPOARequiredVar = i.variables.kYCConfigDataIn.addressAttr.statusAttr === "required", i.variables.shouldResubmitPOIVar = f.BuiltinFunctions.index("rejected expired resubmit revoked", i.variables.statusVar, 0, !1, !0) > -1, f.Flow.executeSequence(function() {
                                return f.BuiltinFunctions.index("pending verified", i.variables.kYCConfigDataIn.identityAttr.statusAttr, 0, !1, !0) === -1 ? (A.value.jSONOut = f.JSONUtils.serializeToJSON(i.variables.kYCConfigDataIn.identityAttr, !1, !1), e._computeOnfidoStatus$Action(A.value.jSONOut, t).then(function() {
                                    i.variables.isLoadingVar = !1
                                })) : f.Flow.executeSequence(function() {
                                    if (f.BuiltinFunctions.index("pending verified", i.variables.kYCConfigDataIn.identityAttr.statusAttr, 0, !1, !0) > -1) return g.value = f.Logger.startActiveSpan("ComputeStatus", function(c) {
                                        c && (c.setAttribute("code.function", "ComputeStatus"), c.setAttribute("outsystems.function.key", "ac2e8119-5179-4b2e-b059-016219b320cd"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return e.safeExecuteJSNode(wt, "ComputeStatus", "OnReady", {
                                                status: f.DataConversion.JSNodeParamConverter.to(i.variables.kYCConfigDataIn.identityAttr.statusAttr, f.DataTypes.DataTypes.Text),
                                                needsPOA: f.DataConversion.JSNodeParamConverter.to(i.variables.isPOARequiredVar, f.DataTypes.DataTypes.Boolean),
                                                StatusToDisplay: f.DataConversion.JSNodeParamConverter.to("", f.DataTypes.DataTypes.Text)
                                            }, function(a) {
                                                var b = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.OnfidoVerificationStatus.OnReady$computeStatusJSResult"));
                                                return b.statusToDisplayOut = f.DataConversion.JSNodeParamConverter.from(a.StatusToDisplay, f.DataTypes.DataTypes.Text), b
                                            }, {}, {})
                                        } finally {
                                            c && c.end()
                                        }
                                    }, 1), i.flush(), e.getVerificationStatus$ServerAction(f.BuiltinFunctions.textToIdentifier(g.value.statusToDisplayOut), t).then(function(c) {
                                        u.value = c
                                    }).then(function() {
                                        i.variables.statusConfigVar.setCurrent(t.iterationContext, u.value.verificationConfigOut), i.variables.isLoadingVar = !1
                                    });
                                    i.variables.isLoadingVar = !1
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _computeOnfidoStatus$Action() {
            return this.hasOwnProperty("__computeOnfidoStatus$Action") || (this.__computeOnfidoStatus$Action = function(t, i) {
                var e = this.model,
                    n = this.controller,
                    r = this.idService;
                return f.Logger.startActiveSpan("ComputeOnfidoStatus", function(u) {
                    return u && (u.setAttribute("code.function", "ComputeOnfidoStatus"), u.setAttribute("outsystems.function.key", "da8af453-2758-4d4f-b972-59624d666d4c"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                        n.ensureControllerAlive("ComputeOnfidoStatus"), i = n.callContext(i);
                        var g = new f.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("Accounts.ProofOfIdentity.OnfidoVerificationStatus.ComputeOnfidoStatus$vars")));
                        g.value.kYCConfigInLocal = t;
                        var A = new f.DataTypes.VariableHolder,
                            c = new f.DataTypes.VariableHolder(new f.DataTypes.JSONSerializeOutputType);
                        return f.Flow.executeAsyncFlow(function() {
                            return e.flush(), n.getOnfidoErrors$ServerAction(e.variables.kYCConfigDataIn.identityAttr.lastRejectedAttr.rejectedReasonsAttr, i).then(function(a) {
                                A.value = a
                            }).then(function() {
                                c.value.jSONOut = f.JSONUtils.serializeToJSON(A.value.errorConfigOut, !1, !1), e.variables.statusConfigVar = A.value.errorConfigOut
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__computeOnfidoStatus$Action
        }
        set _computeOnfidoStatus$Action(t) {
            this.__computeOnfidoStatus$Action = t
        }
        onClickCTA$Action(t) {
            var i = this.controller;
            return f.Logger.startActiveSpan("OnClickCTA__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickCTA"), e.setAttribute("outsystems.function.key", "3411c076-9276-4ef7-b660-1f05bd9f0659"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickCTA$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onClickOk$Action(t) {
            var i = this.controller;
            return f.Logger.startActiveSpan("OnClickOk__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickOk"), e.setAttribute("outsystems.function.key", "405e21d8-db7b-4e3c-8063-c60004f5c6a8"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickOk$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var i = this.controller;
            return f.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "c0d8a081-95a2-4ce6-a45e-684bd3ff5aa0"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        computeOnfidoStatus$Action(t, i) {
            var e = this.controller;
            return f.Logger.startActiveSpan("ComputeOnfidoStatus__proxy", function(n) {
                return n && (n.setAttribute("code.function", "ComputeOnfidoStatus"), n.setAttribute("outsystems.function.key", "da8af453-2758-4d4f-b972-59624d666d4c"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._computeOnfidoStatus$Action, i, t)
                }, function() {
                    n && n.end()
                })
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
                var i = this.controller,
                    e = this.model,
                    n = this.idService;
                return i.onReady$Action(t)
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
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let d = s;
    j = d, j.registerVariableGroupType("Accounts.ProofOfIdentity.OnfidoVerificationStatus$ActionGetVerificationStatus", [{
        name: "VerificationConfig",
        attrName: "verificationConfigOut",
        mandatory: !1,
        dataType: f.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new D
        }, "defaultValue"),
        complexType: D
    }]), j.registerVariableGroupType("Accounts.ProofOfIdentity.OnfidoVerificationStatus$ActionGetOnfidoErrors", [{
        name: "ErrorConfig",
        attrName: "errorConfigOut",
        mandatory: !1,
        dataType: f.DataTypes.DataTypes.RecordList,
        defaultValue: o(function() {
            return new F
        }, "defaultValue"),
        complexType: F
    }]), j.registerVariableGroupType("Accounts.ProofOfIdentity.OnfidoVerificationStatus.OnClickCTA$checkDataUpdateJSResult", [{
        name: "ShouldRetriggerPOI",
        attrName: "shouldRetriggerPOIOut",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }]), j.registerVariableGroupType("Accounts.ProofOfIdentity.OnfidoVerificationStatus.OnReady$computeStatusJSResult", [{
        name: "StatusToDisplay",
        attrName: "statusToDisplayOut",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), j.registerVariableGroupType("Accounts.ProofOfIdentity.OnfidoVerificationStatus.ComputeOnfidoStatus$vars", [{
        name: "KYCConfig",
        attrName: "kYCConfigInLocal",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var j, te = new f.Controller.ControllerFactory(j, x);
var it = C,
    Vi = O.PlaceholderContent,
    oe = O.IteratorPlaceholderContent,
    K = class K extends V.BaseWebBlock {
        static get displayName() {
            return "ProofOfIdentity.OnfidoVerificationStatus"
        }
        static getAttributes() {
            return {
                codeFunction: "OnfidoVerificationStatus",
                functionKey: "238f1ef9-b815-469d-9394-1ab3a41b7fba",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.ProofOfIdentity.OnfidoVerificationStatus.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [w, N]
        }
        get modelFactory() {
            return Bt
        }
        get controllerFactory() {
            return te
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                y = this.controller,
                t = this.idService,
                i = y.validationService,
                e = this.widgetsRecordProvider,
                n = y.callContext(),
                r = K.ifWidget,
                u = K.textWidget,
                g = K.asPrimitiveValue,
                A = K.getTranslation,
                c = this;
            return h.createElement("div", this.getRootNodeProperties(), r(s.variables.isLoadingVar, !1, this, function() {
                return [h.createElement(w, {
                    getOwnerSpan: o(function() {
                        return c.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return c.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(a) {
                            y.handleError(a)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: e,
                    _dependencies: []
                })]
            }, function() {
                return [h.createElement(S, {
                    align: 0,
                    animate: !1,
                    style: "manual-status__layout display-flex flex-direction-column row-gap-m full-height",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "1"
                    },
                    _widgetRecordProvider: e
                }, h.createElement(S, {
                    align: 0,
                    animate: !1,
                    style: "manual-status__body-content",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "2"
                    },
                    _widgetRecordProvider: e
                }, r(s.variables.statusConfigVar.length > 1, !1, this, function() {
                    return [h.createElement(S, {
                        align: 0,
                        animate: !1,
                        style: "display-flex flex-direction-column",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "3"
                        },
                        _widgetRecordProvider: e
                    }, h.createElement(S, {
                        align: 0,
                        animate: !1,
                        style: "display-flex full-width justify-content-center",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "4"
                        },
                        _widgetRecordProvider: e
                    }, h.createElement(L, {
                        image: it.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLightUserErrorIcon.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "5"
                        },
                        _widgetRecordProvider: e
                    })), h.createElement(S, {
                        align: 0,
                        animate: !1,
                        style: "display-flex flex-direction-column row-gap-s align-items-center",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "6"
                        },
                        _widgetRecordProvider: e
                    }, h.createElement(S, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "7"
                        },
                        _widgetRecordProvider: e
                    }, h.createElement($, {
                        style: "heading6",
                        text: ["Verification failed"],
                        _idProps: {
                            service: t,
                            uuid: "8"
                        },
                        _widgetRecordProvider: e
                    })), h.createElement(S, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "9"
                        },
                        _widgetRecordProvider: e
                    }, "Your identity verification failed due to:"), h.createElement(ft, {
                        animateItems: !0,
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        mode: 0,
                        source: s.variables.statusConfigVar,
                        style: "list list-group",
                        tag: "div",
                        _idProps: {
                            service: t,
                            uuid: "10"
                        },
                        _widgetRecordProvider: e,
                        placeholders: {
                            content: new oe(function(a, b) {
                                return [h.createElement(S, {
                                    align: 0,
                                    animate: !1,
                                    style: "bullet-item",
                                    visible: !0,
                                    _idProps: {
                                        service: a,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: e,
                                    _dependencies: [g(s.variables.statusConfigVar.getCurrent(b.iterationContext).messageAttr)]
                                }, h.createElement(P, {
                                    value: s.variables.statusConfigVar.getCurrent(b.iterationContext).messageAttr,
                                    _idProps: {
                                        service: a,
                                        uuid: "12"
                                    },
                                    _widgetRecordProvider: e
                                }))]
                            }, n, t, "1")
                        },
                        _dependencies: []
                    }), h.createElement(S, {
                        align: 0,
                        animate: !1,
                        style: "display-flex justify-content-center manual-status__btn-layout",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "13"
                        },
                        _widgetRecordProvider: e
                    }, h.createElement(E, {
                        enabled: !0,
                        extendedProperties: {
                            style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                        },
                        isDefault: !1,
                        onClick: o(function() {
                            c.validateWidget("");
                            var a = n.clone();
                            y.onClickCTA$Action(y.callContext(a))
                        }, "onClick"),
                        style: "btn btn-primary manual-status__btn",
                        visible: s.variables.shouldResubmitPOIVar,
                        _idProps: {
                            service: t,
                            uuid: "14"
                        },
                        _widgetRecordProvider: e
                    }, h.createElement(P, {
                        value: s.variables.statusConfigVar.getCurrent(n.iterationContext).buttonTextAttr,
                        _idProps: {
                            service: t,
                            uuid: "15"
                        },
                        _widgetRecordProvider: e
                    })))))]
                }, function() {
                    return [h.createElement(N, {
                        getOwnerSpan: o(function() {
                            return c.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: o(function() {
                            return c.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            HeadingText: "Proof of Identity",
                            Status: s.variables.kYCConfigDataIn.identityAttr.statusAttr,
                            _statusInDataFetchStatus: it.Model.calculateDataFetchStatus(s.variables._kYCConfigDataInDataFetchStatus),
                            StatusConfig: s.variables.statusConfigVar.getCurrent(n.iterationContext)
                        },
                        events: {
                            _handleError: o(function(a) {
                                y.handleError(a)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: i
                        },
                        _idProps: {
                            service: t,
                            uuid: "16",
                            alias: "2"
                        },
                        _widgetRecordProvider: e,
                        _dependencies: []
                    })]
                })), h.createElement(S, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-center manual-status__btn-layout",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "17"
                    },
                    _widgetRecordProvider: e
                }, r(s.variables.shouldResubmitPOIVar, !1, this, function() {
                    return [h.createElement(E, {
                        enabled: !0,
                        extendedProperties: {
                            style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                        },
                        isDefault: !1,
                        onClick: o(function() {
                            c.validateWidget("");
                            var a = n.clone();
                            y.onClickCTA$Action(y.callContext(a))
                        }, "onClick"),
                        style: "btn btn-primary manual-status__btn",
                        visible: s.variables.shouldResubmitPOIVar,
                        _idProps: {
                            service: t,
                            uuid: "18"
                        },
                        _widgetRecordProvider: e
                    }, h.createElement(P, {
                        value: s.variables.statusConfigVar.getCurrent(n.iterationContext).buttonTextAttr,
                        _idProps: {
                            service: t,
                            uuid: "19"
                        },
                        _widgetRecordProvider: e
                    }))]
                }, function() {
                    return [r(s.variables.isPOARequiredVar, !1, this, function() {
                        return [h.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                try {
                                    it.Navigation.navigateTo(it.Navigation.generateScreenURL("Accounts", "ProofOfAddress", {}), it.Transitions.createTransition(it.Transitions.TransitionAnimation.Default), null, !0)
                                } catch (a) {
                                    if (a.name !== "RedirectOccurredException") throw a
                                }
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: s.variables.isPOARequiredVar && !_.getIsWorkflow(),
                            _idProps: {
                                service: t,
                                uuid: "20"
                            },
                            _widgetRecordProvider: e
                        }, h.createElement($, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: ["Submit proof of address"],
                            _idProps: {
                                service: t,
                                uuid: "21"
                            },
                            _widgetRecordProvider: e
                        }))]
                    }, function() {
                        return [h.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                c.validateWidget("");
                                var a = n.clone();
                                y.onClickOk$Action(y.callContext(a))
                            }, "onClick"),
                            style: "btn btn-primary manual-status__btn",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "22"
                            },
                            _widgetRecordProvider: e
                        }, h.createElement(P, {
                            value: "OK",
                            _idProps: {
                                service: t,
                                uuid: "23"
                            },
                            _widgetRecordProvider: e
                        }))]
                    })]
                })))]
            }))
        }
    };
o(K, "View");
var Vt = K,
    mt = Vt;
var p = J(M());

function It(d, s, y, t) {
    d.status === "pending" ? d.needsPOA ? d.StatusToDisplay = "InProgress_needs_POA" : d.StatusToDisplay = "InProgress" : d.needsPOA ? d.StatusToDisplay = "verified_need_poa" : d.StatusToDisplay = "verified"
}
o(It, "default");

function kt(d, s, y, t) {
    try {
        let i = JSON.parse(d.ErrorList),
            e = i.filter(r => ["DataComparisonDateOfBirth", "DataValidationDateOfBirth", "DataComparisonName"].includes(r.code)),
            n = !i.every(r => e.includes(r));
        d.ShouldRetriggerPOI = n
    } catch (i) {
        d.ShouldRetriggerPOI = !0
    }
}
o(kt, "default");
var v = C; {
    let s = class s extends v.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getOnfidoErrors$ServerAction() {
            return this.hasOwnProperty("_getOnfidoErrors$ServerAction") || (this._getOnfidoErrors$ServerAction = function(t, i) {
                var e = this.controller;
                return v.Logger.startActiveSpan("GetOnfidoErrors", function(n) {
                    return n && (n.setAttribute("code.function", "GetOnfidoErrors"), n.setAttribute("outsystems.function.key", "c16b3eee-4245-47d1-b9ce-97403f4c1927"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), v.Flow.tryFinally(function() {
                        var r = {
                            OnfidoErrorList: v.DataConversion.ServerDataConverter.to(t, v.DataTypes.DataTypes.RecordList)
                        };
                        return e.callServerAction("GetOnfidoErrors", "screenservices/Accounts/ProofOfIdentity/SmileIDVerificationStatus/ActionGetOnfidoErrors", "cuZuqa_eeR005Ftc0hOTzg", r, e.callContext(i), void 0, void 0, !1).then(function(u) {
                            var g = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.SmileIDVerificationStatus$ActionGetOnfidoErrors"));
                            return g.errorConfigOut = v.DataConversion.ServerDataConverter.from(u.ErrorConfig, F), g
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getOnfidoErrors$ServerAction
        }
        set getOnfidoErrors$ServerAction(t) {
            this._getOnfidoErrors$ServerAction = t
        }
        get getVerificationStatus$ServerAction() {
            return this.hasOwnProperty("_getVerificationStatus$ServerAction") || (this._getVerificationStatus$ServerAction = function(t, i) {
                var e = this.controller;
                return v.Logger.startActiveSpan("GetVerificationStatus", function(n) {
                    return n && (n.setAttribute("code.function", "GetVerificationStatus"), n.setAttribute("outsystems.function.key", "2da87ed2-13fa-40aa-8a1b-04d796fb93f6"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), v.Flow.tryFinally(function() {
                        var r = {
                            VerificationStatusID: v.DataConversion.ServerDataConverter.to(t, v.DataTypes.DataTypes.Text)
                        };
                        return e.callServerAction("GetVerificationStatus", "screenservices/Accounts/ProofOfIdentity/SmileIDVerificationStatus/ActionGetVerificationStatus", "glWZNBuKnAKRPG8FzpqVGw", r, e.callContext(i), void 0, void 0, !1).then(function(u) {
                            var g = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.SmileIDVerificationStatus$ActionGetVerificationStatus"));
                            return g.verificationConfigOut = v.DataConversion.ServerDataConverter.from(u.VerificationConfig, D), g
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getVerificationStatus$ServerAction
        }
        set getVerificationStatus$ServerAction(t) {
            this._getVerificationStatus$ServerAction = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _computeOnfidoStatus$Action() {
            return this.hasOwnProperty("__computeOnfidoStatus$Action") || (this.__computeOnfidoStatus$Action = function(t, i) {
                var e = this.model,
                    n = this.controller,
                    r = this.idService;
                return v.Logger.startActiveSpan("ComputeOnfidoStatus", function(u) {
                    return u && (u.setAttribute("code.function", "ComputeOnfidoStatus"), u.setAttribute("outsystems.function.key", "257f946f-72d6-49b7-9867-9324636dc864"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                        n.ensureControllerAlive("ComputeOnfidoStatus"), i = n.callContext(i);
                        var g = new v.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("Accounts.ProofOfIdentity.SmileIDVerificationStatus.ComputeOnfidoStatus$vars")));
                        g.value.kYCConfigInLocal = t;
                        var A = new v.DataTypes.VariableHolder,
                            c = new v.DataTypes.VariableHolder(new v.DataTypes.JSONSerializeOutputType);
                        return v.Flow.executeAsyncFlow(function() {
                            return e.flush(), n.getOnfidoErrors$ServerAction(e.variables.kYCConfigDataIn.identityAttr.lastRejectedAttr.rejectedReasonsAttr, i).then(function(a) {
                                A.value = a
                            }).then(function() {
                                c.value.jSONOut = v.JSONUtils.serializeToJSON(A.value.errorConfigOut, !1, !1), e.variables.statusConfigVar = A.value.errorConfigOut
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__computeOnfidoStatus$Action
        }
        set _computeOnfidoStatus$Action(t) {
            this.__computeOnfidoStatus$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return v.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "5f19e121-f00c-4025-b3dc-05c5d37c3fc8"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var u = new v.DataTypes.VariableHolder,
                            g = new v.DataTypes.VariableHolder,
                            A = new v.DataTypes.VariableHolder(new v.DataTypes.JSONSerializeOutputType);
                        return v.Flow.executeAsyncFlow(function() {
                            return i.variables.isLoadingVar = !0, i.variables.statusVar = i.variables.kYCConfigDataIn.identityAttr.statusAttr, i.variables.isPOARequiredVar = i.variables.kYCConfigDataIn.addressAttr.statusAttr === "required", i.variables.shouldResubmitPOIVar = v.BuiltinFunctions.index("rejected expired resubmit revoked", i.variables.statusVar, 0, !1, !0) > -1, v.Flow.executeSequence(function() {
                                return v.BuiltinFunctions.index("pending verified", i.variables.kYCConfigDataIn.identityAttr.statusAttr, 0, !1, !0) === -1 ? (A.value.jSONOut = v.JSONUtils.serializeToJSON(i.variables.kYCConfigDataIn.identityAttr, !1, !1), e._computeOnfidoStatus$Action(A.value.jSONOut, t).then(function() {
                                    i.variables.isLoadingVar = !1
                                })) : v.Flow.executeSequence(function() {
                                    if (v.BuiltinFunctions.index("pending verified", i.variables.kYCConfigDataIn.identityAttr.statusAttr, 0, !1, !0) > -1) return g.value = v.Logger.startActiveSpan("ComputeStatus", function(c) {
                                        c && (c.setAttribute("code.function", "ComputeStatus"), c.setAttribute("outsystems.function.key", "e142e8a4-a754-4bc0-99b9-e9be5143064e"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return e.safeExecuteJSNode(It, "ComputeStatus", "OnReady", {
                                                needsPOA: v.DataConversion.JSNodeParamConverter.to(i.variables.isPOARequiredVar, v.DataTypes.DataTypes.Boolean),
                                                status: v.DataConversion.JSNodeParamConverter.to(i.variables.kYCConfigDataIn.identityAttr.statusAttr, v.DataTypes.DataTypes.Text),
                                                StatusToDisplay: v.DataConversion.JSNodeParamConverter.to("", v.DataTypes.DataTypes.Text)
                                            }, function(a) {
                                                var b = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.SmileIDVerificationStatus.OnReady$computeStatusJSResult"));
                                                return b.statusToDisplayOut = v.DataConversion.JSNodeParamConverter.from(a.StatusToDisplay, v.DataTypes.DataTypes.Text), b
                                            }, {}, {})
                                        } finally {
                                            c && c.end()
                                        }
                                    }, 1), i.flush(), e.getVerificationStatus$ServerAction(v.BuiltinFunctions.textToIdentifier(g.value.statusToDisplayOut), t).then(function(c) {
                                        u.value = c
                                    }).then(function() {
                                        i.variables.statusConfigVar.setCurrent(t.iterationContext, u.value.verificationConfigOut), i.variables.isLoadingVar = !1
                                    });
                                    i.variables.isLoadingVar = !1
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onClickOk$Action() {
            return this.hasOwnProperty("__onClickOk$Action") || (this.__onClickOk$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return v.Logger.startActiveSpan("OnClickOk", function(r) {
                    r && (r.setAttribute("code.function", "OnClickOk"), r.setAttribute("outsystems.function.key", "a89bfbbe-09a8-428a-acf0-cdbe96f58357"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (e.ensureControllerAlive("OnClickOk"), t = e.callContext(t), _.getIsWorkflow()) T.closeTab$Action(t);
                        else return v.Navigation.navigateTo(v.Navigation.generateScreenURL("Accounts", "Verification", {}), v.Transitions.createTransition(v.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickOk$Action
        }
        set _onClickOk$Action(t) {
            this.__onClickOk$Action = t
        }
        get _onClickCTA$Action() {
            return this.hasOwnProperty("__onClickCTA$Action") || (this.__onClickCTA$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return v.Logger.startActiveSpan("OnClickCTA", function(r) {
                    r && (r.setAttribute("code.function", "OnClickCTA"), r.setAttribute("outsystems.function.key", "f1b9ade7-ba13-43f3-afec-57a830423355"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnClickCTA"), t = e.callContext(t);
                        var u = new v.DataTypes.VariableHolder,
                            g = new v.DataTypes.VariableHolder(new v.DataTypes.JSONSerializeOutputType);
                        return g.value.jSONOut = v.JSONUtils.serializeToJSON(i.variables.statusConfigVar, !1, !1), u.value = v.Logger.startActiveSpan("CheckDataUpdate", function(A) {
                            A && (A.setAttribute("code.function", "CheckDataUpdate"), A.setAttribute("outsystems.function.key", "1b7e4f35-ad5e-40da-9974-9c2370cc7b97"), A.setAttribute("outsystems.function.owner.name", "Accounts"), A.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), A.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(kt, "CheckDataUpdate", "OnClickCTA", {
                                    ErrorList: v.DataConversion.JSNodeParamConverter.to(g.value.jSONOut, v.DataTypes.DataTypes.Text),
                                    ShouldRetriggerPOI: v.DataConversion.JSNodeParamConverter.to(!1, v.DataTypes.DataTypes.Boolean)
                                }, function(c) {
                                    var a = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.SmileIDVerificationStatus.OnClickCTA$checkDataUpdateJSResult"));
                                    return a.shouldRetriggerPOIOut = v.DataConversion.JSNodeParamConverter.from(c.ShouldRetriggerPOI, v.DataTypes.DataTypes.Boolean), a
                                }, {}, {})
                            } finally {
                                A && A.end()
                            }
                        }, 1), u.value.shouldRetriggerPOIOut ? v.Navigation.navigateTo(v.Navigation.generateScreenURL("Accounts", "ProofOfIdentity", {}), v.Transitions.createTransition(v.Transitions.TransitionAnimation.Default), t, !0) : v.Navigation.navigateTo(v.Navigation.generateScreenURL("Accounts", "UpdateDetails", {}), v.Transitions.createTransition(v.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickCTA$Action
        }
        set _onClickCTA$Action(t) {
            this.__onClickCTA$Action = t
        }
        computeOnfidoStatus$Action(t, i) {
            var e = this.controller;
            return v.Logger.startActiveSpan("ComputeOnfidoStatus__proxy", function(n) {
                return n && (n.setAttribute("code.function", "ComputeOnfidoStatus"), n.setAttribute("outsystems.function.key", "257f946f-72d6-49b7-9867-9324636dc864"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._computeOnfidoStatus$Action, i, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onReady$Action(t) {
            var i = this.controller;
            return v.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "5f19e121-f00c-4025-b3dc-05c5d37c3fc8"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onClickOk$Action(t) {
            var i = this.controller;
            return v.Logger.startActiveSpan("OnClickOk__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickOk"), e.setAttribute("outsystems.function.key", "a89bfbbe-09a8-428a-acf0-cdbe96f58357"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickOk$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onClickCTA$Action(t) {
            var i = this.controller;
            return v.Logger.startActiveSpan("OnClickCTA__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickCTA"), e.setAttribute("outsystems.function.key", "f1b9ade7-ba13-43f3-afec-57a830423355"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickCTA$Action, t)
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
                var i = this.controller,
                    e = this.model,
                    n = this.idService;
                return i.onReady$Action(t)
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
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let d = s;
    q = d, q.registerVariableGroupType("Accounts.ProofOfIdentity.SmileIDVerificationStatus$ActionGetOnfidoErrors", [{
        name: "ErrorConfig",
        attrName: "errorConfigOut",
        mandatory: !1,
        dataType: v.DataTypes.DataTypes.RecordList,
        defaultValue: o(function() {
            return new F
        }, "defaultValue"),
        complexType: F
    }]), q.registerVariableGroupType("Accounts.ProofOfIdentity.SmileIDVerificationStatus$ActionGetVerificationStatus", [{
        name: "VerificationConfig",
        attrName: "verificationConfigOut",
        mandatory: !1,
        dataType: v.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new D
        }, "defaultValue"),
        complexType: D
    }]), q.registerVariableGroupType("Accounts.ProofOfIdentity.SmileIDVerificationStatus.ComputeOnfidoStatus$vars", [{
        name: "KYCConfig",
        attrName: "kYCConfigInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), q.registerVariableGroupType("Accounts.ProofOfIdentity.SmileIDVerificationStatus.OnReady$computeStatusJSResult", [{
        name: "StatusToDisplay",
        attrName: "statusToDisplayOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), q.registerVariableGroupType("Accounts.ProofOfIdentity.SmileIDVerificationStatus.OnClickCTA$checkDataUpdateJSResult", [{
        name: "ShouldRetriggerPOI",
        attrName: "shouldRetriggerPOIOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }])
}
var q, ee = new v.Controller.ControllerFactory(q, x);
var nt = C,
    en = O.PlaceholderContent,
    ae = O.IteratorPlaceholderContent,
    Z = class Z extends V.BaseWebBlock {
        static get displayName() {
            return "ProofOfIdentity.SmileIDVerificationStatus"
        }
        static getAttributes() {
            return {
                codeFunction: "SmileIDVerificationStatus",
                functionKey: "600cb959-f7be-4455-ad3a-492a5fa02170",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.ProofOfIdentity.SmileIDVerificationStatus.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [w, N]
        }
        get modelFactory() {
            return Gt
        }
        get controllerFactory() {
            return ee
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                y = this.controller,
                t = this.idService,
                i = y.validationService,
                e = this.widgetsRecordProvider,
                n = y.callContext(),
                r = Z.ifWidget,
                u = Z.textWidget,
                g = Z.asPrimitiveValue,
                A = Z.getTranslation,
                c = this;
            return p.createElement("div", this.getRootNodeProperties(), r(s.variables.isLoadingVar, !1, this, function() {
                return [p.createElement(w, {
                    getOwnerSpan: o(function() {
                        return c.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return c.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(a) {
                            y.handleError(a)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: e,
                    _dependencies: []
                })]
            }, function() {
                return [p.createElement(S, {
                    align: 0,
                    animate: !1,
                    style: "manual-status__layout display-flex flex-direction-column row-gap-m full-height",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "1"
                    },
                    _widgetRecordProvider: e
                }, p.createElement(S, {
                    align: 0,
                    animate: !1,
                    style: "manual-status__body-content",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "2"
                    },
                    _widgetRecordProvider: e
                }, r(s.variables.statusConfigVar.length > 1, !1, this, function() {
                    return [p.createElement(S, {
                        align: 0,
                        animate: !1,
                        style: "display-flex flex-direction-column",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "3"
                        },
                        _widgetRecordProvider: e
                    }, p.createElement(S, {
                        align: 0,
                        animate: !1,
                        style: "display-flex full-width justify-content-center",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "4"
                        },
                        _widgetRecordProvider: e
                    }, p.createElement(L, {
                        image: nt.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLightUserErrorIcon.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "5"
                        },
                        _widgetRecordProvider: e
                    })), p.createElement(S, {
                        align: 0,
                        animate: !1,
                        style: "display-flex flex-direction-column row-gap-s align-items-center",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "6"
                        },
                        _widgetRecordProvider: e
                    }, p.createElement(S, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "7"
                        },
                        _widgetRecordProvider: e
                    }, p.createElement($, {
                        style: "heading6",
                        text: ["Verification failed"],
                        _idProps: {
                            service: t,
                            uuid: "8"
                        },
                        _widgetRecordProvider: e
                    })), p.createElement(S, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "9"
                        },
                        _widgetRecordProvider: e
                    }, "Your identity verification failed due to:"), p.createElement(ft, {
                        animateItems: !0,
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        mode: 0,
                        source: s.variables.statusConfigVar,
                        style: "list list-group",
                        tag: "div",
                        _idProps: {
                            service: t,
                            uuid: "10"
                        },
                        _widgetRecordProvider: e,
                        placeholders: {
                            content: new ae(function(a, b) {
                                return [p.createElement(S, {
                                    align: 0,
                                    animate: !1,
                                    style: "bullet-item",
                                    visible: !0,
                                    _idProps: {
                                        service: a,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: e,
                                    _dependencies: [g(s.variables.statusConfigVar.getCurrent(b.iterationContext).messageAttr)]
                                }, p.createElement(P, {
                                    value: s.variables.statusConfigVar.getCurrent(b.iterationContext).messageAttr,
                                    _idProps: {
                                        service: a,
                                        uuid: "12"
                                    },
                                    _widgetRecordProvider: e
                                }))]
                            }, n, t, "1")
                        },
                        _dependencies: []
                    }), p.createElement(S, {
                        align: 0,
                        animate: !1,
                        style: "display-flex justify-content-center manual-status__btn-layout",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "13"
                        },
                        _widgetRecordProvider: e
                    }, p.createElement(E, {
                        enabled: !0,
                        extendedProperties: {
                            style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                        },
                        isDefault: !1,
                        onClick: o(function() {
                            c.validateWidget("");
                            var a = n.clone();
                            y.onClickCTA$Action(y.callContext(a))
                        }, "onClick"),
                        style: "btn btn-primary manual-status__btn",
                        visible: s.variables.shouldResubmitPOIVar,
                        _idProps: {
                            service: t,
                            uuid: "14"
                        },
                        _widgetRecordProvider: e
                    }, p.createElement(P, {
                        value: s.variables.statusConfigVar.getCurrent(n.iterationContext).buttonTextAttr,
                        _idProps: {
                            service: t,
                            uuid: "15"
                        },
                        _widgetRecordProvider: e
                    })))))]
                }, function() {
                    return [p.createElement(N, {
                        getOwnerSpan: o(function() {
                            return c.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: o(function() {
                            return c.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            HeadingText: "Proof of Identity",
                            StatusConfig: s.variables.statusConfigVar.getCurrent(n.iterationContext),
                            Status: s.variables.kYCConfigDataIn.identityAttr.statusAttr,
                            _statusInDataFetchStatus: nt.Model.calculateDataFetchStatus(s.variables._kYCConfigDataInDataFetchStatus)
                        },
                        events: {
                            _handleError: o(function(a) {
                                y.handleError(a)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: i
                        },
                        _idProps: {
                            service: t,
                            uuid: "16",
                            alias: "2"
                        },
                        _widgetRecordProvider: e,
                        _dependencies: []
                    })]
                })), p.createElement(S, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-center manual-status__btn-layout",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "17"
                    },
                    _widgetRecordProvider: e
                }, r(s.variables.shouldResubmitPOIVar, !1, this, function() {
                    return [p.createElement(E, {
                        enabled: !0,
                        extendedProperties: {
                            style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                        },
                        isDefault: !1,
                        onClick: o(function() {
                            c.validateWidget("");
                            var a = n.clone();
                            y.onClickCTA$Action(y.callContext(a))
                        }, "onClick"),
                        style: "btn btn-primary manual-status__btn",
                        visible: s.variables.shouldResubmitPOIVar,
                        _idProps: {
                            service: t,
                            uuid: "18"
                        },
                        _widgetRecordProvider: e
                    }, p.createElement(P, {
                        value: s.variables.statusConfigVar.getCurrent(n.iterationContext).buttonTextAttr,
                        _idProps: {
                            service: t,
                            uuid: "19"
                        },
                        _widgetRecordProvider: e
                    }))]
                }, function() {
                    return [r(s.variables.isPOARequiredVar, !1, this, function() {
                        return [p.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                try {
                                    nt.Navigation.navigateTo(nt.Navigation.generateScreenURL("Accounts", "ProofOfAddress", {}), nt.Transitions.createTransition(nt.Transitions.TransitionAnimation.Default), null, !0)
                                } catch (a) {
                                    if (a.name !== "RedirectOccurredException") throw a
                                }
                            }, "onClick"),
                            style: "btn btn-primary manual-status__btn",
                            visible: s.variables.isPOARequiredVar,
                            _idProps: {
                                service: t,
                                uuid: "20"
                            },
                            _widgetRecordProvider: e
                        }, p.createElement($, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: ["Submit proof of address"],
                            _idProps: {
                                service: t,
                                uuid: "21"
                            },
                            _widgetRecordProvider: e
                        }))]
                    }, function() {
                        return [p.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                c.validateWidget("");
                                var a = n.clone();
                                y.onClickOk$Action(y.callContext(a))
                            }, "onClick"),
                            style: "btn btn-primary manual-status__btn",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "22"
                            },
                            _widgetRecordProvider: e
                        }, p.createElement(P, {
                            value: "OK",
                            _idProps: {
                                service: t,
                                uuid: "23"
                            },
                            _widgetRecordProvider: e
                        }))]
                    })]
                })))]
            }))
        }
    };
o(Z, "View");
var xt = Z,
    Nt = xt;
var k = J(M());

function $t(d, s, y, t) {
    d.status === "pending" ? d.needsPOA ? d.StatusToDisplay = "ManualInProgress_WithPOA" : d.StatusToDisplay = "ManualInProgress" : d.needsPOA ? d.StatusToDisplay = "verified_need_poa" : d.StatusToDisplay = "verified"
}
o($t, "default");

function Ht(d, s, y, t) {
    try {
        let i = JSON.parse(d.KYCStatusData),
            {
                last_rejected: e
            } = i,
            {
                rejected_reasons: n
            } = e;
        console.log("Rejected_reasons Manual: ", n), d.StatusToDisplay = "Failed_General"
    } catch (i) {
        console.log("Err log: ", i), d.StatusToDisplay = "Failed_General"
    }
}
o(Ht, "default");
var m = C; {
    let s = class s extends m.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getVerificationStatus$ServerAction() {
            return this.hasOwnProperty("_getVerificationStatus$ServerAction") || (this._getVerificationStatus$ServerAction = function(t, i) {
                var e = this.controller;
                return m.Logger.startActiveSpan("GetVerificationStatus", function(n) {
                    return n && (n.setAttribute("code.function", "GetVerificationStatus"), n.setAttribute("outsystems.function.key", "2da87ed2-13fa-40aa-8a1b-04d796fb93f6"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), m.Flow.tryFinally(function() {
                        var r = {
                            VerificationStatusID: m.DataConversion.ServerDataConverter.to(t, m.DataTypes.DataTypes.Text)
                        };
                        return e.callServerAction("GetVerificationStatus", "screenservices/Accounts/ProofOfIdentity/ManualVerificationStatus/ActionGetVerificationStatus", "glWZNBuKnAKRPG8FzpqVGw", r, e.callContext(i), void 0, void 0, !1).then(function(u) {
                            var g = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.ManualVerificationStatus$ActionGetVerificationStatus"));
                            return g.verificationConfigOut = m.DataConversion.ServerDataConverter.from(u.VerificationConfig, D), g
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getVerificationStatus$ServerAction
        }
        set getVerificationStatus$ServerAction(t) {
            this._getVerificationStatus$ServerAction = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickCTA$Action() {
            return this.hasOwnProperty("__onClickCTA$Action") || (this.__onClickCTA$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return m.Logger.startActiveSpan("OnClickCTA", function(r) {
                    r && (r.setAttribute("code.function", "OnClickCTA"), r.setAttribute("outsystems.function.key", "1d055ea1-5bce-4124-8650-550114653c6b"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("OnClickCTA"), t = e.callContext(t), i.variables.statusConfigVar.codeAttr === dt.verificationStatusMessage.failed_General ? m.Navigation.navigateTo(m.Navigation.generateScreenURL("Accounts", "ProofOfIdentity", {}), m.Transitions.createTransition(m.Transitions.TransitionAnimation.Default), t, !0) : m.Navigation.navigateTo(m.Navigation.generateScreenURL("Accounts", "UpdateDetails", {}), m.Transitions.createTransition(m.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickCTA$Action
        }
        set _onClickCTA$Action(t) {
            this.__onClickCTA$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return m.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "270c5fe2-6dbe-401c-a18e-f6aae3ab7d3b"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var u = new m.DataTypes.VariableHolder,
                            g = new m.DataTypes.VariableHolder,
                            A = new m.DataTypes.VariableHolder(new m.DataTypes.JSONSerializeOutputType);
                        return m.Flow.executeAsyncFlow(function() {
                            return i.variables.isLoadingVar = !0, i.variables.statusVar = i.variables.kYCConfigDataIn.identityAttr.statusAttr, i.variables.isPOARequiredVar = i.variables.kYCConfigDataIn.addressAttr.statusAttr === "required", i.variables.shouldResubmitPOIVar = m.BuiltinFunctions.index("rejected expired resubmit revoked", i.variables.statusVar, 0, !1, !0) > -1, m.Flow.executeSequence(function() {
                                return m.BuiltinFunctions.index("pending verified", i.variables.kYCConfigDataIn.identityAttr.statusAttr, 0, !1, !0) === -1 ? (A.value.jSONOut = m.JSONUtils.serializeToJSON(i.variables.kYCConfigDataIn.identityAttr, !1, !1), e._computeManualStatus$Action(A.value.jSONOut, t).then(function() {
                                    i.variables.isLoadingVar = !1
                                })) : m.Flow.executeSequence(function() {
                                    if (m.BuiltinFunctions.index("pending verified", i.variables.kYCConfigDataIn.identityAttr.statusAttr, 0, !1, !0) > -1) return g.value = m.Logger.startActiveSpan("ComputeStatus", function(c) {
                                        c && (c.setAttribute("code.function", "ComputeStatus"), c.setAttribute("outsystems.function.key", "e4e9b1a1-9645-4a9b-ab02-f2520fd8a536"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return e.safeExecuteJSNode($t, "ComputeStatus", "OnReady", {
                                                status: m.DataConversion.JSNodeParamConverter.to(i.variables.kYCConfigDataIn.identityAttr.statusAttr, m.DataTypes.DataTypes.Text),
                                                needsPOA: m.DataConversion.JSNodeParamConverter.to(i.variables.isPOARequiredVar, m.DataTypes.DataTypes.Boolean),
                                                StatusToDisplay: m.DataConversion.JSNodeParamConverter.to("", m.DataTypes.DataTypes.Text)
                                            }, function(a) {
                                                var b = new(e.constructor.getVariableGroupType("Accounts.ProofOfIdentity.ManualVerificationStatus.OnReady$computeStatusJSResult"));
                                                return b.statusToDisplayOut = m.DataConversion.JSNodeParamConverter.from(a.StatusToDisplay, m.DataTypes.DataTypes.Text), b
                                            }, {}, {})
                                        } finally {
                                            c && c.end()
                                        }
                                    }, 1), i.flush(), e.getVerificationStatus$ServerAction(m.BuiltinFunctions.textToIdentifier(g.value.statusToDisplayOut), t).then(function(c) {
                                        u.value = c
                                    }).then(function() {
                                        i.variables.statusConfigVar = u.value.verificationConfigOut, i.variables.isLoadingVar = !1
                                    });
                                    i.variables.isLoadingVar = !1
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onClickOk$Action() {
            return this.hasOwnProperty("__onClickOk$Action") || (this.__onClickOk$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    n = this.idService;
                return m.Logger.startActiveSpan("OnClickOk", function(r) {
                    r && (r.setAttribute("code.function", "OnClickOk"), r.setAttribute("outsystems.function.key", "c4a89070-047a-4d84-8f0f-7f7a3e0df591"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (e.ensureControllerAlive("OnClickOk"), t = e.callContext(t), _.getIsWorkflow()) T.closeTab$Action(t);
                        else return m.Navigation.navigateTo(m.Navigation.generateScreenURL("Accounts", "Verification", {}), m.Transitions.createTransition(m.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickOk$Action
        }
        set _onClickOk$Action(t) {
            this.__onClickOk$Action = t
        }
        get _computeManualStatus$Action() {
            return this.hasOwnProperty("__computeManualStatus$Action") || (this.__computeManualStatus$Action = function(t, i) {
                var e = this.model,
                    n = this.controller,
                    r = this.idService;
                return m.Logger.startActiveSpan("ComputeManualStatus", function(u) {
                    return u && (u.setAttribute("code.function", "ComputeManualStatus"), u.setAttribute("outsystems.function.key", "cc31f572-dc7e-4944-9bd7-7c6f3f9d5745"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        n.ensureControllerAlive("ComputeManualStatus"), i = n.callContext(i);
                        var g = new m.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("Accounts.ProofOfIdentity.ManualVerificationStatus.ComputeManualStatus$vars")));
                        g.value.kYCConfigInLocal = t;
                        var A = new m.DataTypes.VariableHolder,
                            c = new m.DataTypes.VariableHolder;
                        return m.Flow.executeAsyncFlow(function() {
                            return c.value = m.Logger.startActiveSpan("ComputeStatus", function(a) {
                                a && (a.setAttribute("code.function", "ComputeStatus"), a.setAttribute("outsystems.function.key", "fd74a7ea-1e39-4887-bb52-f10e316adda3"), a.setAttribute("outsystems.function.owner.name", "Accounts"), a.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return n.safeExecuteJSNode(Ht, "ComputeStatus", "ComputeManualStatus", {
                                        KYCStatusData: m.DataConversion.JSNodeParamConverter.to(g.value.kYCConfigInLocal, m.DataTypes.DataTypes.Text),
                                        StatusToDisplay: m.DataConversion.JSNodeParamConverter.to("", m.DataTypes.DataTypes.Text)
                                    }, function(b) {
                                        var ot = new(n.constructor.getVariableGroupType("Accounts.ProofOfIdentity.ManualVerificationStatus.ComputeManualStatus$computeStatusJSResult"));
                                        return ot.statusToDisplayOut = m.DataConversion.JSNodeParamConverter.from(b.StatusToDisplay, m.DataTypes.DataTypes.Text), ot
                                    }, {}, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), m.Flow.executeSequence(function() {
                                if (c.value.statusToDisplayOut === dt.verificationStatusMessage.failed_General) return e.flush(), n.getVerificationStatus$ServerAction(dt.verificationStatusMessage.failed_General, i).then(function(a) {
                                    A.value = a
                                }).then(function() {
                                    e.variables.statusConfigVar = A.value.verificationConfigOut
                                })
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__computeManualStatus$Action
        }
        set _computeManualStatus$Action(t) {
            this.__computeManualStatus$Action = t
        }
        onClickCTA$Action(t) {
            var i = this.controller;
            return m.Logger.startActiveSpan("OnClickCTA__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickCTA"), e.setAttribute("outsystems.function.key", "1d055ea1-5bce-4124-8650-550114653c6b"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickCTA$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var i = this.controller;
            return m.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "270c5fe2-6dbe-401c-a18e-f6aae3ab7d3b"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onClickOk$Action(t) {
            var i = this.controller;
            return m.Logger.startActiveSpan("OnClickOk__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickOk"), e.setAttribute("outsystems.function.key", "c4a89070-047a-4d84-8f0f-7f7a3e0df591"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickOk$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        computeManualStatus$Action(t, i) {
            var e = this.controller;
            return m.Logger.startActiveSpan("ComputeManualStatus__proxy", function(n) {
                return n && (n.setAttribute("code.function", "ComputeManualStatus"), n.setAttribute("outsystems.function.key", "cc31f572-dc7e-4944-9bd7-7c6f3f9d5745"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._computeManualStatus$Action, i, t)
                }, function() {
                    n && n.end()
                })
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
                var i = this.controller,
                    e = this.model,
                    n = this.idService;
                return i.onReady$Action(t)
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
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let d = s;
    rt = d, rt.registerVariableGroupType("Accounts.ProofOfIdentity.ManualVerificationStatus$ActionGetVerificationStatus", [{
        name: "VerificationConfig",
        attrName: "verificationConfigOut",
        mandatory: !1,
        dataType: m.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new D
        }, "defaultValue"),
        complexType: D
    }]), rt.registerVariableGroupType("Accounts.ProofOfIdentity.ManualVerificationStatus.OnReady$computeStatusJSResult", [{
        name: "StatusToDisplay",
        attrName: "statusToDisplayOut",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), rt.registerVariableGroupType("Accounts.ProofOfIdentity.ManualVerificationStatus.ComputeManualStatus$vars", [{
        name: "KYCConfig",
        attrName: "kYCConfigInLocal",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), rt.registerVariableGroupType("Accounts.ProofOfIdentity.ManualVerificationStatus.ComputeManualStatus$computeStatusJSResult", [{
        name: "StatusToDisplay",
        attrName: "statusToDisplayOut",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var rt, ie = new m.Controller.ControllerFactory(rt, x);
var ut = C,
    Pn = O.PlaceholderContent,
    Tn = O.IteratorPlaceholderContent,
    Q = class Q extends V.BaseWebBlock {
        static get displayName() {
            return "ProofOfIdentity.ManualVerificationStatus"
        }
        static getAttributes() {
            return {
                codeFunction: "ManualVerificationStatus",
                functionKey: "32fd6bf3-e250-4c08-beb0-035a57ff1ae4",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.ProofOfIdentity.ManualVerificationStatus.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [w, N]
        }
        get modelFactory() {
            return Yt
        }
        get controllerFactory() {
            return ie
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                y = this.controller,
                t = this.idService,
                i = y.validationService,
                e = this.widgetsRecordProvider,
                n = y.callContext(),
                r = Q.ifWidget,
                u = Q.textWidget,
                g = Q.asPrimitiveValue,
                A = Q.getTranslation,
                c = this;
            return k.createElement("div", this.getRootNodeProperties(), r(s.variables.isLoadingVar, !1, this, function() {
                return [k.createElement(w, {
                    getOwnerSpan: o(function() {
                        return c.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return c.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(a) {
                            y.handleError(a)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: e,
                    _dependencies: []
                })]
            }, function() {
                return [k.createElement(S, {
                    align: 0,
                    animate: !1,
                    style: "manual-status__layout display-flex flex-direction-column row-gap-m full-height",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "1"
                    },
                    _widgetRecordProvider: e
                }, k.createElement(S, {
                    align: 0,
                    animate: !1,
                    style: "manual-status__body-content",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "2"
                    },
                    _widgetRecordProvider: e
                }, k.createElement(N, {
                    getOwnerSpan: o(function() {
                        return c.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return c.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Status: s.variables.kYCConfigDataIn.identityAttr.statusAttr,
                        _statusInDataFetchStatus: ut.Model.calculateDataFetchStatus(s.variables._kYCConfigDataInDataFetchStatus),
                        HeadingText: "Proof of Identity",
                        StatusConfig: s.variables.statusConfigVar
                    },
                    events: {
                        _handleError: o(function(a) {
                            y.handleError(a)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: t,
                        uuid: "3",
                        alias: "2"
                    },
                    _widgetRecordProvider: e,
                    _dependencies: []
                })), k.createElement(S, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-center manual-status__btn-layout",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "4"
                    },
                    _widgetRecordProvider: e
                }, r(s.variables.shouldResubmitPOIVar, !1, this, function() {
                    return [k.createElement(E, {
                        enabled: !0,
                        extendedProperties: {
                            style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                        },
                        isDefault: !1,
                        onClick: o(function() {
                            c.validateWidget("");
                            var a = n.clone();
                            y.onClickCTA$Action(y.callContext(a))
                        }, "onClick"),
                        style: "btn btn-primary manual-status__btn",
                        visible: s.variables.shouldResubmitPOIVar,
                        _idProps: {
                            service: t,
                            uuid: "5"
                        },
                        _widgetRecordProvider: e
                    }, k.createElement(P, {
                        value: s.variables.statusConfigVar.buttonTextAttr,
                        _idProps: {
                            service: t,
                            uuid: "6"
                        },
                        _widgetRecordProvider: e
                    }))]
                }, function() {
                    return [r(s.variables.isPOARequiredVar && !_.getIsWorkflow(), !1, this, function() {
                        return [k.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                try {
                                    ut.Navigation.navigateTo(ut.Navigation.generateScreenURL("Accounts", "ProofOfAddress", {}), ut.Transitions.createTransition(ut.Transitions.TransitionAnimation.Default), null, !0)
                                } catch (a) {
                                    if (a.name !== "RedirectOccurredException") throw a
                                }
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: s.variables.isPOARequiredVar,
                            _idProps: {
                                service: t,
                                uuid: "7"
                            },
                            _widgetRecordProvider: e
                        }, k.createElement($, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: ["Submit proof of address"],
                            _idProps: {
                                service: t,
                                uuid: "8"
                            },
                            _widgetRecordProvider: e
                        }))]
                    }, function() {
                        return [k.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                c.validateWidget("");
                                var a = n.clone();
                                y.onClickOk$Action(y.callContext(a))
                            }, "onClick"),
                            style: "btn btn-primary manual-status__btn",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "9"
                            },
                            _widgetRecordProvider: e
                        }, k.createElement(P, {
                            value: "OK",
                            _idProps: {
                                service: t,
                                uuid: "10"
                            },
                            _widgetRecordProvider: e
                        }))]
                    })]
                })))]
            }))
        }
    };
o(Q, "View");
var Ft = Q,
    gt = Ft;
var ne = C,
    lt = O.PlaceholderContent,
    Gn = O.IteratorPlaceholderContent,
    X = class X extends V.BaseWebScreen {
        static get displayName() {
            return "MainFlow.ProofOfIdentityStatus"
        }
        static getAttributes() {
            return {
                codeFunction: "ProofOfIdentityStatus",
                functionKey: "e524f42a-7531-435f-9a06-7452b50c7bd8",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Accounts.DerivAccounts.css", "css/Accounts.MainFlow.ProofOfIdentityStatus.css", "css/Accounts.DerivAccounts.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [At, St, w, yt, mt, Nt, gt, Ct]
        }
        get modelFactory() {
            return zt
        }
        get controllerFactory() {
            return Ut
        }
        get title() {
            return "ProofOfIdentityStatus"
        }
        internalRender() {
            let s = this.model,
                y = this.controller,
                t = this.idService,
                i = y.validationService,
                e = this.widgetsRecordProvider,
                n = y.callContext(),
                r = X.ifWidget,
                u = X.textWidget,
                g = X.asPrimitiveValue,
                A = X.getTranslation,
                c = this;
            return R.createElement("div", this.getRootNodeProperties(), R.createElement(At, {
                getOwnerSpan: o(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsDesktop: _.getDevice() === "desktop"
                },
                events: {
                    _handleError: o(function(a) {
                        y.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: e,
                placeholders: {
                    desktopLayout: new lt(function() {
                        return [R.createElement(St, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedSection: "verification"
                            },
                            events: {
                                _handleError: o(function(a) {
                                    y.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                content: new lt(function() {
                                    return [r(s.variables.isLoadingVar || s.variables.kYCAuthStatusDataVar.identityAttr.statusAttr === ne.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                                        return [R.createElement(w, {
                                            getOwnerSpan: o(function() {
                                                return c.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return c.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {},
                                            events: {
                                                _handleError: o(function(a) {
                                                    y.handleError(a)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: t,
                                                uuid: "2",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: e,
                                            _dependencies: []
                                        })]
                                    }, function() {
                                        return [r(s.variables.kYCAuthStatusDataVar.identityAttr.serviceAttr === "idv", !1, this, function() {
                                            return [R.createElement(S, {
                                                align: 0,
                                                animate: !1,
                                                style: s.getCachedValue(t.getId("39FyF1C2O0+2p+Rylp9P8A.Style"), function() {
                                                    return "full-height full-width" + (_.getIsWorkflow() ? "  display-flex justify-content-center" : "")
                                                }, function() {
                                                    return _.getIsWorkflow()
                                                }),
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "3"
                                                },
                                                _widgetRecordProvider: e
                                            }, R.createElement(yt, {
                                                getOwnerSpan: o(function() {
                                                    return c.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: o(function() {
                                                    return c.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    KYCConfigData: s.variables.kYCAuthStatusDataVar
                                                },
                                                events: {
                                                    _handleError: o(function(a) {
                                                        y.handleError(a)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: i
                                                },
                                                _idProps: {
                                                    service: t,
                                                    uuid: "4",
                                                    alias: "4"
                                                },
                                                _widgetRecordProvider: e,
                                                _dependencies: []
                                            }))]
                                        }, function() {
                                            return [r(s.variables.kYCAuthStatusDataVar.identityAttr.serviceAttr === "onfido", !1, this, function() {
                                                return [R.createElement(S, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: s.getCachedValue(t.getId("UEaxNOO9oka2DxRAO3VVjA.Style"), function() {
                                                        return "full-height full-width" + (_.getIsWorkflow() ? "  display-flex justify-content-center" : "")
                                                    }, function() {
                                                        return _.getIsWorkflow()
                                                    }),
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "5"
                                                    },
                                                    _widgetRecordProvider: e
                                                }, R.createElement(mt, {
                                                    getOwnerSpan: o(function() {
                                                        return c.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: o(function() {
                                                        return c.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        KYCConfigData: s.variables.kYCAuthStatusDataVar
                                                    },
                                                    events: {
                                                        _handleError: o(function(a) {
                                                            y.handleError(a)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "6",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: e,
                                                    _dependencies: []
                                                }))]
                                            }, function() {
                                                return [r(s.variables.kYCAuthStatusDataVar.identityAttr.serviceAttr === "smile_id", !1, this, function() {
                                                    return [R.createElement(Nt, {
                                                        getOwnerSpan: o(function() {
                                                            return c.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: o(function() {
                                                            return c.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            KYCConfigData: s.variables.kYCAuthStatusDataVar
                                                        },
                                                        events: {
                                                            _handleError: o(function(a) {
                                                                y.handleError(a)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: i
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "7",
                                                            alias: "6"
                                                        },
                                                        _widgetRecordProvider: e,
                                                        _dependencies: []
                                                    })]
                                                }, function() {
                                                    return [R.createElement(S, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: s.getCachedValue(t.getId("3jMxG0rBKU6rTWZzRgtH9Q.Style"), function() {
                                                            return "full-height full-width" + (_.getIsWorkflow() ? "  display-flex justify-content-center" : "")
                                                        }, function() {
                                                            return _.getIsWorkflow()
                                                        }),
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "8"
                                                        },
                                                        _widgetRecordProvider: e
                                                    }, R.createElement(gt, {
                                                        getOwnerSpan: o(function() {
                                                            return c.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: o(function() {
                                                            return c.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            KYCConfigData: s.variables.kYCAuthStatusDataVar
                                                        },
                                                        events: {
                                                            _handleError: o(function(a) {
                                                                y.handleError(a)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: i
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "9",
                                                            alias: "7"
                                                        },
                                                        _widgetRecordProvider: e,
                                                        _dependencies: []
                                                    }))]
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            },
                            _dependencies: [g(_.getIsWorkflow()), g(s.variables.kYCAuthStatusDataVar), g(s.variables.isLoadingVar)]
                        })]
                    }),
                    tabletLayout: lt.Empty,
                    defaultLayout: new lt(function() {
                        return [R.createElement(Ct, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Title: "Proof of identity",
                                DisplayCloseButton: !0,
                                DisplayBackButton: !1
                            },
                            events: {
                                _handleError: o(function(a) {
                                    y.handleError(a)
                                }, "_handleError"),
                                eventClose$Action: o(function() {
                                    var a = n.clone();
                                    y.onEventClose$Action(y.callContext(a))
                                }, "eventClose$Action"),
                                eventBack$Action: o(function() {
                                    var a = n.clone();
                                    y.onEventBack$Action(y.callContext(a))
                                }, "eventBack$Action")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: t,
                                uuid: "10",
                                alias: "8"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                sectioncontent: new lt(function() {
                                    return [r(s.variables.isLoadingVar || s.variables.kYCAuthStatusDataVar.identityAttr.statusAttr === ne.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                                        return [R.createElement(w, {
                                            getOwnerSpan: o(function() {
                                                return c.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return c.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {},
                                            events: {
                                                _handleError: o(function(a) {
                                                    y.handleError(a)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: t,
                                                uuid: "11",
                                                alias: "9"
                                            },
                                            _widgetRecordProvider: e,
                                            _dependencies: []
                                        })]
                                    }, function() {
                                        return [R.createElement(S, {
                                            align: 0,
                                            animate: !1,
                                            style: "full-height",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: e
                                        }, r(s.variables.kYCAuthStatusDataVar.identityAttr.serviceAttr === "idv", !1, this, function() {
                                            return [R.createElement(yt, {
                                                getOwnerSpan: o(function() {
                                                    return c.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: o(function() {
                                                    return c.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    KYCConfigData: s.variables.kYCAuthStatusDataVar
                                                },
                                                events: {
                                                    _handleError: o(function(a) {
                                                        y.handleError(a)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: i
                                                },
                                                _idProps: {
                                                    service: t,
                                                    uuid: "13",
                                                    alias: "10"
                                                },
                                                _widgetRecordProvider: e,
                                                _dependencies: []
                                            })]
                                        }, function() {
                                            return [r(s.variables.kYCAuthStatusDataVar.identityAttr.serviceAttr === "onfido", !1, this, function() {
                                                return [R.createElement(mt, {
                                                    getOwnerSpan: o(function() {
                                                        return c.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: o(function() {
                                                        return c.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        KYCConfigData: s.variables.kYCAuthStatusDataVar
                                                    },
                                                    events: {
                                                        _handleError: o(function(a) {
                                                            y.handleError(a)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "14",
                                                        alias: "11"
                                                    },
                                                    _widgetRecordProvider: e,
                                                    _dependencies: []
                                                })]
                                            }, function() {
                                                return [R.createElement(gt, {
                                                    getOwnerSpan: o(function() {
                                                        return c.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: o(function() {
                                                        return c.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        KYCConfigData: s.variables.kYCAuthStatusDataVar
                                                    },
                                                    events: {
                                                        _handleError: o(function(a) {
                                                            y.handleError(a)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "15",
                                                        alias: "12"
                                                    },
                                                    _widgetRecordProvider: e,
                                                    _dependencies: []
                                                })]
                                            })]
                                        }))]
                                    })]
                                })
                            },
                            _dependencies: [g(s.variables.kYCAuthStatusDataVar), g(s.variables.isLoadingVar)]
                        })]
                    })
                },
                _dependencies: [g(_.getIsWorkflow()), g(s.variables.kYCAuthStatusDataVar), g(s.variables.isLoadingVar)]
            }))
        }
    };
o(X, "View");
var Lt = X,
    Yn = Lt;
export {
    Yn as
    default
};