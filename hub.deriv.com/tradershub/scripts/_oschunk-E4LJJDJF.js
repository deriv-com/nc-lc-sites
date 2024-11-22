import {
    a as y
} from "./_oschunk-Y45M2O2K.js";
import {
    a as m
} from "./_oschunk-TIJZDWYD.js";
import {
    a as A,
    d as f
} from "./_oschunk-27GDEXUT.js";
import {
    ia as b
} from "./_oschunk-NTQBNJ73.js";
import {
    c as l
} from "./_oschunk-DVBKI63I.js";
var g = {
        "goGC0Dzn50uVKpTfkT+PXg#Value": "Enregistrer les modifications",
        "ig1Naf1fU0imQgQDJfJNhw#Value": "Nom",
        "OGG8gySjFk2Kx4j_mw0Hzw#Value": "Email",
        "CC+GcxKJA0WGIoSdH+66Dw#Value": "Changez votre mot de passe",
        "p2BRIdDiM0u9QmUgGEZ+eg#Value": "Votre profil",
        "BCj50fqknk2pzWrhIjEw5A#Title": "Votre profil",
        "BCj50fqknk2pzWrhIjEw5A#TitleExpression.-777369892.1": "Votre profil"
    },
    v = {
        "fr-FR": {
            translations: g,
            isRTL: !1
        }
    };
var i = b; {
    let c = class c extends i.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, v);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getUserById$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getUserById$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get updateUser$ServerAction() {
            return this.hasOwnProperty("_updateUser$ServerAction") || (this._updateUser$ServerAction = function(e, n) {
                var t = this.controller;
                return i.Logger.startActiveSpan("UpdateUser", function(s) {
                    return s && (s.setAttribute("code.function", "UpdateUser"), s.setAttribute("outsystems.function.key", "07cdfda9-d775-4f13-8c33-3f2164d4abd6"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), i.Flow.tryFinally(function() {
                        var r = {
                            UserUpdateInfo: i.DataConversion.ServerDataConverter.to(e, i.DataTypes.DataTypes.Record)
                        };
                        return t.callServerAction("UpdateUser", "screenservices/tradershub/Common/UserProfile/ActionUpdateUser", "f+w9TRZi1JqSKbln3hu0zw", r, t.callContext(n), void 0, void 0, !0).then(function(o) {
                            var a = new(t.constructor.getVariableGroupType("tradershub.Common.UserProfile$ActionUpdateUser"));
                            return a.updateUserResultOut = i.DataConversion.ServerDataConverter.from(o.UpdateUserResult, i.SystemStructures.UpdateUserResultRec), a
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 0)
            }), this._updateUser$ServerAction
        }
        set updateUser$ServerAction(e) {
            this._updateUser$ServerAction = e
        }
        get getUserById$AggrRefresh() {
            return this.hasOwnProperty("_getUserById$AggrRefresh") || (this._getUserById$AggrRefresh = function() {
                var e = function(n, t, a) {
                    var r = this.model,
                        o = this.controller,
                        a = o.callContext(a);
                    return o.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetUserById", "screenservices/tradershub/Common/UserProfile/ScreenDataSetGetUserById", "rUhHAGRRggSPZ_kmlqB_2g", n, t, function(u) {
                        r.variables.getUserByIdAggr.dataFetchStatusAttr = u
                    }, function(u) {
                        r.variables.getUserByIdAggr.replaceWith(i.DataConversion.ServerDataConverter.from(u, r.variables.getUserByIdAggr.constructor))
                    }, void 0, void 0, void 0, a, void 0, !0).then(function() {
                        o._setIsButtonEnabled$Action(o.callContext(a))
                    })
                }.bind(this);
                return i.Logger.startActiveSpan("GetUserById", function(n) {
                    return n && (n.setAttribute("code.function", "GetUserById"), n.setAttribute("outsystems.function.key", "b5d62b22-7653-488a-8b08-2eaa8da04970"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), i.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getUserById$AggrRefresh
        }
        set getUserById$AggrRefresh(e) {
            this._getUserById$AggrRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getUserById$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _saveChangesOnClick$Action() {
            return this.hasOwnProperty("__saveChangesOnClick$Action") || (this.__saveChangesOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("SaveChangesOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "SaveChangesOnClick"), r.setAttribute("outsystems.function.key", "b52968ec-1930-4c88-82db-317164f104ad"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SaveChangesOnClick"), e = t.callContext(e);
                        var o = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return n.flush(), t.updateUser$ServerAction(i.DataConversion.JSConversions.typeConvertRecord(n.variables.getUserByIdAggr.listOut.getCurrent(e.iterationContext).userAttr, new i.SystemStructures.UserUpdateInfoRec, function(a, u) {
                                return u.nameAttr = a.nameAttr, u.photoURLAttr = a.photoUrlAttr, u
                            }), e).then(function(a) {
                                o.value = a
                            }).then(function() {
                                o.value.updateUserResultOut.successAttr ? (A.setUserName(n.variables.getUserByIdAggr.listOut.getCurrent(e.iterationContext).userAttr.nameAttr), i.FeedbackMessageService.showFeedbackMessage("Your profile has been successfully updated!", 1)) : o.value.updateUserResultOut.updateUserFailureReasonAttr.invalidCredentialsAttr ? i.FeedbackMessageService.showFeedbackMessage("Invalid credentials.", 3) : o.value.updateUserResultOut.updateUserFailureReasonAttr.invalidNameAttr ? i.FeedbackMessageService.showFeedbackMessage("Name invalid.", 3) : i.FeedbackMessageService.showFeedbackMessage("Update user failed.", 3)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__saveChangesOnClick$Action
        }
        set _saveChangesOnClick$Action(e) {
            this.__saveChangesOnClick$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "ba77697d-581a-4cd7-9d59-ffbde89f3750"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var o = new i.DataTypes.VariableHolder;
                        o.value = i.SystemActions.isExternalUser(e), n.variables.isExternalVar = o.value.isExternalUserOut
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _setIsButtonEnabled$Action() {
            return this.hasOwnProperty("__setIsButtonEnabled$Action") || (this.__setIsButtonEnabled$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("SetIsButtonEnabled", function(r) {
                    r && (r.setAttribute("code.function", "SetIsButtonEnabled"), r.setAttribute("outsystems.function.key", "be2cab1a-a7ab-49c6-bb2b-2c38548d94a0"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SetIsButtonEnabled"), e = t.callContext(e), n.variables.isButtonEnabledVar = n.variables.getUserByIdAggr.listOut.getCurrent(e.iterationContext).userAttr.nameAttr !== ""
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__setIsButtonEnabled$Action
        }
        set _setIsButtonEnabled$Action(e) {
            this.__setIsButtonEnabled$Action = e
        }
        get _input_NameOnChange$Action() {
            return this.hasOwnProperty("__input_NameOnChange$Action") || (this.__input_NameOnChange$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("Input_NameOnChange", function(r) {
                    r && (r.setAttribute("code.function", "Input_NameOnChange"), r.setAttribute("outsystems.function.key", "c0800096-aab1-4b53-b787-66181cd4fb0d"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Input_NameOnChange"), e = t.callContext(e), t._setIsButtonEnabled$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__input_NameOnChange$Action
        }
        set _input_NameOnChange$Action(e) {
            this.__input_NameOnChange$Action = e
        }
        saveChangesOnClick$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("SaveChangesOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SaveChangesOnClick"), t.setAttribute("outsystems.function.key", "b52968ec-1930-4c88-82db-317164f104ad"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._saveChangesOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "ba77697d-581a-4cd7-9d59-ffbde89f3750"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setIsButtonEnabled$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("SetIsButtonEnabled__proxy", function(t) {
                t && (t.setAttribute("code.function", "SetIsButtonEnabled"), t.setAttribute("outsystems.function.key", "be2cab1a-a7ab-49c6-bb2b-2c38548d94a0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._setIsButtonEnabled$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        input_NameOnChange$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("Input_NameOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "Input_NameOnChange"), t.setAttribute("outsystems.function.key", "c0800096-aab1-4b53-b787-66181cd4fb0d"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._input_NameOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    s = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
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
                return m.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {
            i.Authorization.ensureUserHasRole({
                roles: [f.roles.tradershub]
            })
        }
        getDefaultTimeout() {
            return f.defaultTimeout
        }
    };
    l(c, "ControllerInner");
    let d = c;
    h = d, h.registerVariableGroupType("tradershub.Common.UserProfile$ActionUpdateUser", [{
        name: "UpdateUserResult",
        attrName: "updateUserResultOut",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new i.SystemStructures.UpdateUserResultRec
        }, "defaultValue"),
        complexType: i.SystemStructures.UpdateUserResultRec
    }])
}
var h, p = new i.Controller.ControllerFactory(h, y);
export {
    p as a
};