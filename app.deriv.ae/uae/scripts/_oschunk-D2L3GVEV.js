import {
    a as H
} from "./_oschunk-7WLWGNR5.js";
import {
    b as F
} from "./_oschunk-I5JGASAI.js";
import "./_oschunk-3MOYZQ2C.js";
import {
    a as k
} from "./_oschunk-73TFAYXQ.js";
import {
    a as B
} from "./_oschunk-OICVXO63.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as ne,
    f as x,
    h as ie,
    l as ae,
    o as oe,
    p as N,
    q as se
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ce,
    g as R,
    m as Z,
    n as ee,
    q as te,
    r as re,
    s as U,
    t as P
} from "./_oschunk-4VHUVDBV.js";
import {
    a as X
} from "./_oschunk-KXORGPRQ.js";
import {
    a as T
} from "./_oschunk-ZM75JAVW.js";
import {
    Rb as Y,
    Sb as w,
    a as Q,
    ub as q
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as O,
    W as S,
    c as o,
    e as ue,
    h as I,
    m as G,
    n as j,
    p as J,
    v as K
} from "./_oschunk-M5BUVJ72.js";
var de = {
        "goGC0Dzn50uVKpTfkT+PXg#Value": "\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A",
        "ig1Naf1fU0imQgQDJfJNhw#Value": "\u0627\u0644\u0627\u0633\u0645",
        "OGG8gySjFk2Kx4j_mw0Hzw#Value": "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "CC+GcxKJA0WGIoSdH+66Dw#Value": "\u063A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643",
        "p2BRIdDiM0u9QmUgGEZ+eg#Value": "\u0645\u0644\u0641\u0643 \u0627\u0644\u0634\u062E\u0635\u064A",
        "xhT4vi4wl06u9rmHNzX6Rw#Message.-1116833701.1": "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0639\u062A\u0645\u0627\u062F \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629.",
        "1y7xRtG0okytITVgH6dNNw#Message.-2024545483.1": "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0645\u0644\u0641\u0643 \u0627\u0644\u0634\u062E\u0635\u064A \u0628\u0646\u062C\u0627\u062D!",
        "l999Hg9rWkyjkgtF8Gwxeg#Message.1913925139.1": "\u0641\u0634\u0644 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645.",
        "zQbgBepJLUmTYtJOYsq+2g#Message.173117164.1": "\u0627\u0644\u0627\u0633\u0645 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D.",
        "BCj50fqknk2pzWrhIjEw5A#Title": "\u0645\u0644\u0641\u0643 \u0627\u0644\u0634\u062E\u0635\u064A",
        "BCj50fqknk2pzWrhIjEw5A#TitleExpression.-777369892.1": "\u0645\u0644\u0641\u0643 \u0627\u0644\u0634\u062E\u0635\u064A"
    },
    le = {
        "ar-001": {
            translations: de,
            isRTL: !0
        }
    };
var i = S; {
    let u = class u extends i.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, le);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getUserById$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getUserById$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get updateUser$ServerAction() {
            return this.hasOwnProperty("_updateUser$ServerAction") || (this._updateUser$ServerAction = function(e, r) {
                var t = this.controller;
                return i.Logger.startActiveSpan("UpdateUser", function(a) {
                    return a && (a.setAttribute("code.function", "UpdateUser"), a.setAttribute("outsystems.function.key", "07cdfda9-d775-4f13-8c33-3f2164d4abd6"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), i.Flow.tryFinally(function() {
                        var n = {
                            UserUpdateInfo: i.DataConversion.ServerDataConverter.to(e, i.DataTypes.DataTypes.Record)
                        };
                        return t.callServerAction("UpdateUser", "screenservices/uae/Common/UserProfile/ActionUpdateUser", "f+w9TRZi1JqSKbln3hu0zw", n, t.callContext(r), void 0, void 0, !0).then(function(c) {
                            var g = new(t.constructor.getVariableGroupType("uae.Common.UserProfile$ActionUpdateUser"));
                            return g.updateUserResultOut = i.DataConversion.ServerDataConverter.from(c.UpdateUserResult, i.SystemStructures.UpdateUserResultRec), g
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 0)
            }), this._updateUser$ServerAction
        }
        set updateUser$ServerAction(e) {
            this._updateUser$ServerAction = e
        }
        get getUserById$AggrRefresh() {
            return this.hasOwnProperty("_getUserById$AggrRefresh") || (this._getUserById$AggrRefresh = function() {
                var e = function(r, t, l) {
                    var n = this.model,
                        c = this.controller,
                        g = this.idService,
                        l = c.callContext(l);
                    return c.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetUserById", "screenservices/uae/Common/UserProfile/ScreenDataSetGetUserById", "9DephTSKE2e+GiJbIm3JJg", r, t, function(b) {
                        n.variables.getUserByIdAggr.dataFetchStatusAttr = b
                    }, function(b) {
                        n.variables.getUserByIdAggr.replaceWith(i.DataConversion.ServerDataConverter.from(b, n.variables.getUserByIdAggr.constructor))
                    }, void 0, void 0, void 0, l, void 0, !0).then(function() {
                        c._setIsButtonEnabled$Action(c.callContext(l))
                    })
                }.bind(this);
                return i.Logger.startActiveSpan("GetUserById", function(r) {
                    return r && (r.setAttribute("code.function", "GetUserById"), r.setAttribute("outsystems.function.key", "b5d62b22-7653-488a-8b08-2eaa8da04970"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), i.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        r && r.end()
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
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("SaveChangesOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "SaveChangesOnClick"), n.setAttribute("outsystems.function.key", "b52968ec-1930-4c88-82db-317164f104ad"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SaveChangesOnClick"), e = t.callContext(e);
                        var c = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return r.flush(), t.updateUser$ServerAction(i.DataConversion.JSConversions.typeConvertRecord(r.variables.getUserByIdAggr.listOut.getCurrent(e.iterationContext).userAttr, new i.SystemStructures.UserUpdateInfoRec, function(g, l) {
                                return l.nameAttr = g.nameAttr, l.photoURLAttr = g.photoUrlAttr, l
                            }), e).then(function(g) {
                                c.value = g
                            }).then(function() {
                                c.value.updateUserResultOut.successAttr ? (q.setUserName(r.variables.getUserByIdAggr.listOut.getCurrent(e.iterationContext).userAttr.nameAttr), i.FeedbackMessageService.showFeedbackMessage(i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("1y7xRtG0okytITVgH6dNNw#Message.-2024545483.1", "Your profile has been successfully updated!"), 1)) : c.value.updateUserResultOut.updateUserFailureReasonAttr.invalidCredentialsAttr ? i.FeedbackMessageService.showFeedbackMessage(i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("xhT4vi4wl06u9rmHNzX6Rw#Message.-1116833701.1", "Invalid credentials."), 3) : c.value.updateUserResultOut.updateUserFailureReasonAttr.invalidNameAttr ? i.FeedbackMessageService.showFeedbackMessage(i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("zQbgBepJLUmTYtJOYsq+2g#Message.173117164.1", "Name invalid."), 3) : i.FeedbackMessageService.showFeedbackMessage(i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("l999Hg9rWkyjkgtF8Gwxeg#Message.1913925139.1", "Update user failed."), 3)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__saveChangesOnClick$Action
        }
        set _saveChangesOnClick$Action(e) {
            this.__saveChangesOnClick$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "ba77697d-581a-4cd7-9d59-ffbde89f3750"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var c = new i.DataTypes.VariableHolder;
                        c.value = i.SystemActions.isExternalUser(e), r.variables.isExternalVar = c.value.isExternalUserOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _setIsButtonEnabled$Action() {
            return this.hasOwnProperty("__setIsButtonEnabled$Action") || (this.__setIsButtonEnabled$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("SetIsButtonEnabled", function(n) {
                    n && (n.setAttribute("code.function", "SetIsButtonEnabled"), n.setAttribute("outsystems.function.key", "be2cab1a-a7ab-49c6-bb2b-2c38548d94a0"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SetIsButtonEnabled"), e = t.callContext(e), r.variables.isButtonEnabledVar = r.variables.getUserByIdAggr.listOut.getCurrent(e.iterationContext).userAttr.nameAttr !== ""
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__setIsButtonEnabled$Action
        }
        set _setIsButtonEnabled$Action(e) {
            this.__setIsButtonEnabled$Action = e
        }
        get _input_NameOnChange$Action() {
            return this.hasOwnProperty("__input_NameOnChange$Action") || (this.__input_NameOnChange$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("Input_NameOnChange", function(n) {
                    n && (n.setAttribute("code.function", "Input_NameOnChange"), n.setAttribute("outsystems.function.key", "c0800096-aab1-4b53-b787-66181cd4fb0d"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Input_NameOnChange"), e = t.callContext(e), t._setIsButtonEnabled$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__input_NameOnChange$Action
        }
        set _input_NameOnChange$Action(e) {
            this.__input_NameOnChange$Action = e
        }
        saveChangesOnClick$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("SaveChangesOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SaveChangesOnClick"), t.setAttribute("outsystems.function.key", "b52968ec-1930-4c88-82db-317164f104ad"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._saveChangesOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "ba77697d-581a-4cd7-9d59-ffbde89f3750"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setIsButtonEnabled$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("SetIsButtonEnabled__proxy", function(t) {
                t && (t.setAttribute("code.function", "SetIsButtonEnabled"), t.setAttribute("outsystems.function.key", "be2cab1a-a7ab-49c6-bb2b-2c38548d94a0"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._setIsButtonEnabled$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        input_NameOnChange$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("Input_NameOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "Input_NameOnChange"), t.setAttribute("outsystems.function.key", "c0800096-aab1-4b53-b787-66181cd4fb0d"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._input_NameOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    a = this.idService;
                return r.onInitialize$Action(e)
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
                return T.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {
            i.Authorization.ensureUserHasRole({
                roles: [w.roles.uae]
            })
        }
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    o(u, "ControllerInner");
    let y = u;
    D = y, D.registerVariableGroupType("uae.Common.UserProfile$ActionUpdateUser", [{
        name: "UpdateUserResult",
        attrName: "updateUserResultOut",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new i.SystemStructures.UpdateUserResultRec
        }, "defaultValue"),
        complexType: i.SystemStructures.UpdateUserResultRec
    }])
}
var D, V = new i.Controller.ControllerFactory(D, X);
var v = ue(ce());
var d = S,
    _ = class _ extends d.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(d.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return d.GenericTypeCache.getGenericList(d.GenericTypeCache.getImplicitRecord(Y, {
                name: "User",
                attrName: "userAttr",
                nameForJson: "User2",
                uniqueId: "ced01335-8a82-a813-f1d9-a5108f17ce79"
            }))
        }
        static fromStructure(u) {
            return new _(new _.RecordClass({
                RecordListType: d.DataTypes.ImmutableBase.getData(u)
            }))
        }
    };
o(_, "GetUserByIdAggrRec");
var C = _;
C.init();
var L = class L extends d.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsButtonEnabled", "isButtonEnabledVar", "IsButtonEnabled", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsExternal", "isExternalVar", "IsExternal", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("GetUserById", "getUserByIdAggr", "GetUserById", !0, !0, d.DataTypes.DataTypes.Record, function() {
            return d.DataTypes.ImmutableBase.getData(new C)
        }, !0, C)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
o(L, "VariablesRecord");
var p = L;
p.init();
var W = class W extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form: d.Model.ValidationWidgetRecord,
            Input_Name: d.Model.ValidationWidgetRecord
        }
    }
};
o(W, "WidgetsRecord");
var $ = W,
    z = class z extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return $
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(u) {}
    };
o(z, "Model");
var E = z;
E._hasValidationWidgetsValue = void 0;
var M = new d.Model.ModelFactory(E);
var m = R.PlaceholderContent,
    ze = R.IteratorPlaceholderContent,
    fe = o(function() {
        var y = ee(function(u) {
            var s = u.model,
                e = u.controller,
                r = u.controller.idService,
                t = e.validationService,
                a = e.callContext(),
                n = U,
                c = P,
                g = {
                    props: u,
                    validateWidget: o(function(f) {
                        u.validateWidget(u, f)
                    }, "validateWidget")
                },
                l = s,
                b = re,
                A = te,
                h = Z();
            return v.createElement("div", u.rootNodeProperties, v.createElement(F, {
                getOwnerSpan: o(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(f) {
                        e.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: l,
                placeholders: {
                    header: new m(function() {
                        return [v.createElement(H, {
                            getOwnerSpan: o(function() {
                                return h.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return h.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(f) {
                                    e.handleError(f)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: t
                            },
                            _idProps: {
                                service: r,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: l,
                            _dependencies: []
                        })]
                    }),
                    breadcrumbs: m.Empty,
                    title: new m(function() {
                        return [A(c("p2BRIdDiM0u9QmUgGEZ+eg#Value", "Your profile"))]
                    }),
                    actions: new m(function() {
                        return [b(s.variables.isExternalVar, !1, this, function() {
                            return []
                        }, function() {
                            return [v.createElement(se, {
                                enabled: !0,
                                transition: I.createTransition(I.TransitionAnimation.Default),
                                url: J.generateScreenURL("uae", "change-password-screen", {}),
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: l
                            }, A(c("CC+GcxKJA0WGIoSdH+66Dw#Value", "Change your password")))]
                        })]
                    }),
                    mainContent: new m(function() {
                        return [v.createElement(ae, {
                            _validationProps: {
                                validationService: t
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "form card",
                            _idProps: {
                                service: r,
                                name: "Form"
                            },
                            _widgetRecordProvider: l
                        }, v.createElement(B, {
                            getOwnerSpan: o(function() {
                                return h.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return h.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PhoneBehavior: Q.breakColumns.all
                            },
                            events: {
                                _handleError: o(function(f) {
                                    e.handleError(f)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: t,
                                validationParentId: r.getId("Form")
                            },
                            _idProps: {
                                service: r,
                                uuid: "4",
                                alias: "3"
                            },
                            _widgetRecordProvider: l,
                            placeholders: {
                                column1: new m(function() {
                                    return [v.createElement(x, {
                                        align: 0,
                                        animate: !1,
                                        style: "margin-bottom-m",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: l
                                    }, v.createElement(N, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        _idProps: {
                                            service: r,
                                            name: "EmailLabel"
                                        },
                                        _widgetRecordProvider: l
                                    }, A(c("OGG8gySjFk2Kx4j_mw0Hzw#Value", "Email"))), v.createElement(ie, {
                                        value: s.variables.getUserByIdAggr.listOut.getCurrent(a.iterationContext).userAttr.emailAttr,
                                        _idProps: {
                                            service: r,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: l,
                                        value_dataFetchStatus: O.calculateDataFetchStatus(s.variables.getUserByIdAggr.dataFetchStatusAttr)
                                    })), v.createElement(x, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: l
                                    }, v.createElement(k, {
                                        getOwnerSpan: o(function() {
                                            return h.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return h.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: o(function(f) {
                                                e.handleError(f)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: t,
                                            validationParentId: r.getId("Form")
                                        },
                                        _idProps: {
                                            service: r,
                                            uuid: "9",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: l,
                                        placeholders: {
                                            label: new m(function() {
                                                return [v.createElement(N, {
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    _idProps: {
                                                        service: r,
                                                        name: "NameLabel"
                                                    },
                                                    _widgetRecordProvider: l
                                                }, A(c("ig1Naf1fU0imQgQDJfJNhw#Value", "Name")))]
                                            }),
                                            input: new m(function() {
                                                return [v.createElement(oe, {
                                                    _validationProps: {
                                                        validationService: t,
                                                        validationParentId: r.getId("Form")
                                                    },
                                                    enabled: !s.variables.isExternalVar,
                                                    extendedProperties: {
                                                        tabIndex: "1"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: 0,
                                                    mandatory: !0,
                                                    maxLength: 0,
                                                    onChange: o(function() {
                                                        var f = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                                                        e.input_NameOnChange$Action(e.callContext(f))
                                                    }, "onChange"),
                                                    style: "form-control",
                                                    variable: s.createVariable(K.DataTypes.Text, s.variables.getUserByIdAggr.listOut.getCurrent(a.iterationContext).userAttr.nameAttr, function(f) {
                                                        s.variables.getUserByIdAggr.listOut.getCurrent(a.iterationContext).userAttr.nameAttr = f
                                                    }),
                                                    _idProps: {
                                                        service: r,
                                                        name: "Input_Name"
                                                    },
                                                    _widgetRecordProvider: l,
                                                    variable_dataFetchStatus: O.calculateDataFetchStatus(s.variables.getUserByIdAggr.dataFetchStatusAttr)
                                                })]
                                            })
                                        },
                                        _dependencies: [n(s.variables.isExternalVar), n(s.variables.getUserByIdAggr.dataFetchStatusAttr), n(s.variables.getUserByIdAggr.listOut.getCurrent(a.iterationContext).userAttr.nameAttr)]
                                    })), b(s.variables.isExternalVar, !1, this, function() {
                                        return []
                                    }, function() {
                                        return [v.createElement(ne, {
                                            enabled: s.variables.isButtonEnabledVar,
                                            extendedProperties: {
                                                tabIndex: "2"
                                            },
                                            isDefault: !0,
                                            onClick: o(function() {
                                                return g.validateWidget(r.getId("Form")), Promise.resolve().then(function() {
                                                    var f = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                                                    return e.saveChangesOnClick$Action(e.callContext(f))
                                                })
                                            }, "onClick"),
                                            style: "btn btn-primary",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                name: "SaveChangesButton"
                                            },
                                            _widgetRecordProvider: l
                                        }, A(c("goGC0Dzn50uVKpTfkT+PXg#Value", "Save changes")))]
                                    })]
                                }),
                                column2: m.Empty
                            },
                            _dependencies: [n(s.variables.isButtonEnabledVar), n(s.variables.isExternalVar), n(s.variables.getUserByIdAggr.dataFetchStatusAttr), n(s.variables.getUserByIdAggr.listOut.getCurrent(a.iterationContext).userAttr.nameAttr), n(s.variables.getUserByIdAggr.listOut.getCurrent(a.iterationContext).userAttr.emailAttr)]
                        }))]
                    }),
                    footer: m.Empty
                },
                _dependencies: [n(s.variables.isButtonEnabledVar), n(s.variables.getUserByIdAggr.dataFetchStatusAttr), n(s.variables.getUserByIdAggr.listOut.getCurrent(a.iterationContext).userAttr.nameAttr), n(s.variables.getUserByIdAggr.listOut.getCurrent(a.iterationContext).userAttr.emailAttr), n(s.variables.isExternalVar)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: o(function() {
                return {
                    codeFunction: "UserProfile",
                    functionKey: "d1f92804-a4fa-4d9e-a9cd-6ae1223130e4",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.UserProfile",
            modelFactory: M,
            controllerFactory: V,
            getTitle: o(function(u) {
                var s = u.model,
                    e = u.controller,
                    r = u.controller.idService,
                    t = e.validationService,
                    a = e.callContext(),
                    n = U,
                    c = P,
                    g = {
                        props: u,
                        validateWidget: o(function(l) {
                            u.validateWidget(u, l)
                        }, "validateWidget")
                    };
                return G.resolve(j.TranslationsService).getMessage("BCj50fqknk2pzWrhIjEw5A#TitleExpression.-777369892.1", "Your profile")
            }, "getTitle")
        });
        return y.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, y.getJsDependencies = function() {
            return []
        }, y.getBlocks = function() {
            return [F, H, B, k]
        }, y
    }, "componentFactory"),
    ve = fe();
export {
    V as controllerModule, M as modelModule, ve as viewModule, T as webFlowControllerModule
};