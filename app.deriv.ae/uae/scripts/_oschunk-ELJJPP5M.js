import {
    a as re
} from "./_oschunk-ACEDINHZ.js";
import {
    a as j
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as ee
} from "./_oschunk-TLJXDQWQ.js";
import {
    a as te
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as Ae,
    f as v,
    h as C,
    l as be,
    n as Y,
    u as D
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ye,
    g as V,
    m as M,
    n as _e,
    o as he,
    q as I,
    r as $,
    s as k,
    t as B
} from "./_oschunk-4VHUVDBV.js";
import {
    a as N
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    A as pe,
    Qb as ge,
    Sa as W,
    Sb as A,
    Ua as Z,
    _a as X,
    a as K,
    t as R,
    ub as L
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as s,
    e as me,
    m as P,
    n as x,
    w as _
} from "./_oschunk-M5BUVJ72.js";
var Re = {
        "MTmiGgnCIU+ceVTZ_boV2g#Title": "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062A\u062D\u0648\u064A\u0644 | Deriv",
        "MTmiGgnCIU+ceVTZ_boV2g#TitleExpression.-1583204731.1": "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062A\u062D\u0648\u064A\u0644 | Deriv"
    },
    Se = {
        "ar-001": {
            translations: Re,
            isRTL: !0
        }
    };
var m = S; {
    let c = class c extends m.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, Se);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _desktopProcessLayoutCloseBtnEvent$Action() {
            return this.hasOwnProperty("__desktopProcessLayoutCloseBtnEvent$Action") || (this.__desktopProcessLayoutCloseBtnEvent$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    d = this.idService;
                return m.Logger.startActiveSpan("DesktopProcessLayoutCloseBtnEvent", function(i) {
                    i && (i.setAttribute("code.function", "DesktopProcessLayoutCloseBtnEvent"), i.setAttribute("outsystems.function.key", "1005eedf-9219-4a42-83eb-466a5e14c71a"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("DesktopProcessLayoutCloseBtnEvent"), e = r.callContext(e);
                        var f = new m.DataTypes.VariableHolder(new(m.Controller.BaseController.getJSONDeserializeOutputType(Z)));
                        return f.value.dataOut = m.JSONUtils.deserializeFromJSON(L.gettransfer_init(), Z, !1), f.value.dataOut.wallet_idAttr.gt(m.BuiltinFunctions.integerToLongInteger(0)) ? m.Navigation.navigateTo(m.Navigation.generateScreenURL("uae", "wallet", {}), m.Transitions.createTransition(m.Transitions.TransitionAnimation.Default), e, !0) : (A.setAccountDetailsInputs$Action((function() {
                            var b = new pe;
                            return b.mt5_typeAttr = (L.getSelectedMT5AccountType() === "standard" ? K.mT5Types.standard : K.mT5Types.swapFree).toString(), b.is_demoAttr = !1, b.account_idAttr = f.value.dataOut.account_idAttr, b
                        })(), e), m.Navigation.navigateTo(m.Navigation.generateScreenURL("uae", "mt5/account-details", {
                            is_demo: m.DataConversion.ServerDataConverter.to(!1, m.DataTypes.DataTypes.Boolean)
                        }), m.Transitions.createTransition(m.Transitions.TransitionAnimation.Default), e, !0))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__desktopProcessLayoutCloseBtnEvent$Action
        }
        set _desktopProcessLayoutCloseBtnEvent$Action(e) {
            this.__desktopProcessLayoutCloseBtnEvent$Action = e
        }
        get _desktopProcessLayoutBackBtnEvent$Action() {
            return this.hasOwnProperty("__desktopProcessLayoutBackBtnEvent$Action") || (this.__desktopProcessLayoutBackBtnEvent$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    d = this.idService;
                return m.Logger.startActiveSpan("DesktopProcessLayoutBackBtnEvent", function(i) {
                    i && (i.setAttribute("code.function", "DesktopProcessLayoutBackBtnEvent"), i.setAttribute("outsystems.function.key", "4369f0e5-2e93-4125-9b1e-8e7beb7021b3"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("DesktopProcessLayoutBackBtnEvent"), e = r.callContext(e), m.Navigation.navigateBack(null, e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__desktopProcessLayoutBackBtnEvent$Action
        }
        set _desktopProcessLayoutBackBtnEvent$Action(e) {
            this.__desktopProcessLayoutBackBtnEvent$Action = e
        }
        desktopProcessLayoutCloseBtnEvent$Action(e) {
            var t = this.controller;
            return m.Logger.startActiveSpan("DesktopProcessLayoutCloseBtnEvent__proxy", function(r) {
                r && (r.setAttribute("code.function", "DesktopProcessLayoutCloseBtnEvent"), r.setAttribute("outsystems.function.key", "1005eedf-9219-4a42-83eb-466a5e14c71a"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._desktopProcessLayoutCloseBtnEvent$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        desktopProcessLayoutBackBtnEvent$Action(e) {
            var t = this.controller;
            return m.Logger.startActiveSpan("DesktopProcessLayoutBackBtnEvent__proxy", function(r) {
                r && (r.setAttribute("code.function", "DesktopProcessLayoutBackBtnEvent"), r.setAttribute("outsystems.function.key", "4369f0e5-2e93-4125-9b1e-8e7beb7021b3"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._desktopProcessLayoutBackBtnEvent$Action, e)
                } finally {
                    r && r.end()
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
                return re.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return A.defaultTimeout
        }
    };
    s(c, "ControllerInner");
    let g = c;
    Ce = g
}
var Ce, ne = new m.Controller.ControllerFactory(Ce, N);
var w = me(ye());
var T = S,
    ie = class ie extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("transfer_data", "transfer_dataVar", "transfer_data", !0, !1, T.DataTypes.DataTypes.Record, function() {
                return T.DataTypes.ImmutableBase.getData(new X)
            }, !1, X), this.attr("is_posting_transfer", "is_posting_transferVar", "is_posting_transfer", !0, !1, T.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(ie, "VariablesRecord");
var U = ie;
U.init();
var se = class se extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            TransferForm: T.Model.ValidationWidgetRecord
        }
    }
};
s(se, "WidgetsRecord");
var ae = se,
    le = class le extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return U
        }
        static getWidgetsRecordConstructor() {
            return ae
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(c) {}
    };
s(le, "Model");
var z = le;
z._hasValidationWidgetsValue = void 0;
var Te = new T.Model.ModelFactory(z);
var F = S,
    ue = class ue extends F.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(F.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(ue, "VariablesRecord");
var q = ue;
q.init();
var fe = class fe extends F.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(fe, "WidgetsRecord");
var ce = fe,
    H = class H extends F.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return q
        }
        static getWidgetsRecordConstructor() {
            return ce
        }
        static get hasValidationWidgets() {
            return H._hasValidationWidgetsValue === void 0 && (H._hasValidationWidgetsValue = void 0 || void 0 || void 0), H._hasValidationWidgetsValue
        }
        setInputs(c) {}
    };
s(H, "Model");
var J = H;
J._hasValidationWidgetsValue = void 0;
var de = new F.Model.ModelFactory(J);
var l = me(ye());
var De = {
        "m4+valdmdUCdHrUIK+eT0g#Value": "\u062A\u0623\u0643\u064A\u062F",
        "pcCly_dLsUK3L4DzftyGvQ#ValueExpression.-59419061.1": "\u0633\u062A\u062D\u0635\u0644 \u0639\u0644\u0649",
        "48JsgAdXMki3VdbLBiJ89w#ValueExpression.-1273591729.1": "\u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644",
        "48JsgAdXMki3VdbLBiJ89w#ValueExpression.1188.1": "%)",
        "48JsgAdXMki3VdbLBiJ89w#ValueExpression.40.1": " (",
        "17lkLAnUm0iSL+xR4WgqGQ#Value": "\u0623\u0646\u062A \u062A\u0642\u0648\u0645 \u0628\u0627\u0644\u062A\u062D\u0648\u064A\u0644",
        "cwQ3SBCYZU+g_puQY++E_g#Value": "\u0625\u0644\u0649",
        "ppHNqTNZuEOzJpcm1RlbXQ#Value": "\u0645\u0646",
        "0mZGeZbWIU+meb7gTpnLfQ#Value": "\u062A\u0623\u0643\u064A\u062F"
    },
    we = {
        "ar-001": {
            translations: De,
            isRTL: !0
        }
    };
var a = S; {
    let c = class c extends a.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, we);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postTransfer$ServerAction() {
            return this.hasOwnProperty("_postTransfer$ServerAction") || (this._postTransfer$ServerAction = function(e, t, r) {
                var d = this.controller;
                return a.Logger.startActiveSpan("PostTransfer", function(i) {
                    return i && (i.setAttribute("code.function", "PostTransfer"), i.setAttribute("outsystems.function.key", "b7fef145-6502-4922-849f-279638fe27b9"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), a.Flow.tryFinally(function() {
                        var f = {
                            Authorization: a.DataConversion.ServerDataConverter.to(e, a.DataTypes.DataTypes.Text),
                            Request: a.DataConversion.ServerDataConverter.to(t, a.DataTypes.DataTypes.Record)
                        };
                        return d.callServerAction("PostTransfer", "screenservices/uae/TransferFlow/ConfirmTransferBlock/ActionPostTransfer", "rsN14UhyKnQb9wfmLbXphw", f, d.callContext(r), void 0, void 0, !0).then(function(b) {
                            var n = new(d.constructor.getVariableGroupType("uae.TransferFlow.ConfirmTransferBlock$ActionPostTransfer"));
                            return n.responseOut = a.DataConversion.ServerDataConverter.from(b.Response, R), n
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._postTransfer$ServerAction
        }
        set postTransfer$ServerAction(e) {
            this._postTransfer$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onConfirmTransfer$Action() {
            return this.hasOwnProperty("__onConfirmTransfer$Action") || (this.__onConfirmTransfer$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    d = this.idService;
                return a.Logger.startActiveSpan("OnConfirmTransfer", function(i) {
                    return i && (i.setAttribute("code.function", "OnConfirmTransfer"), i.setAttribute("outsystems.function.key", "153b2f1d-611b-4aae-a10b-5328e9cee2e8"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnConfirmTransfer"), e = r.callContext(e);
                        var f = new a.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.TransferFlow.ConfirmTransferBlock.OnConfirmTransfer$vars"))),
                            b = new a.DataTypes.VariableHolder(new a.DataTypes.ErrorHandlerOutputType),
                            n = new a.DataTypes.VariableHolder,
                            O = new a.DataTypes.VariableHolder,
                            E = new a.DataTypes.VariableHolder,
                            h = new a.DataTypes.VariableHolder,
                            u = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return t.variables.is_posting_transferVar = !0, E.value = A.getAuth$Action(e), f.value.transfer_requestVar = a.DataConversion.JSConversions.typeConvertRecord(t.variables.transfer_dataVar, new W, function(p, y) {
                                return y.fromAttr.idAttr = p.fromAttr.idAttr, y.fromAttr.typeAttr = p.fromAttr.typeAttr, y.fromAttr.client_rateAttr = p.fromAttr.client_rateAttr, y.toAttr.idAttr = p.toAttr.idAttr, y.toAttr.typeAttr = p.toAttr.typeAttr, y.toAttr.client_rateAttr = p.toAttr.client_rateAttr, y.from_amountAttr = p.from_amountAttr, y
                            }), t.flush(), r.postTransfer$ServerAction(E.value.tokenOut, f.value.transfer_requestVar, e).then(function(p) {
                                n.value = p
                            }).then(function() {
                                t.variables.is_posting_transferVar = !1
                            }).then(function() {
                                return a.Flow.executeSequence(function() {
                                    return n.value.responseOut.dataAttr.length > 0 || n.value.responseOut.errorsAttr.length > 0 ? (f.value.transfer_responseVar = n.value.responseOut, t.flush(), A.getWalletListCache$Action(e).then(function(p) {
                                        h.value = p
                                    }).then(function() {
                                        return t.flush(), A.getAccountListCache$Action(e).then(function(p) {
                                            u.value = p
                                        })
                                    }).then(function() {
                                        return O.value = A.addAccountData$Action(n.value.responseOut.dataAttr, h.value.wallet_listOut, u.value.account_listOut, e), f.value.transfer_responseVar.dataAttr = O.value.updated_transactionsOut, A.updateTransferResponse$Action(f.value.transfer_responseVar, e), a.Flow.returnAsync(a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "transfer-status", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0))
                                    })) : (A.updateTransferResponse$Action(n.value.responseOut, e), a.Flow.returnAsync(a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "transfer-status", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0)))
                                })
                            })
                        }).catch(function(p) {
                            if (a.Logger.debug("ConfirmTransferBlock.OnConfirmTransfer", a.Exceptions.getMessage(p)), !a.Exceptions.isSystem(p)) return a.Logger.error(null, p, null, null, 1), b.value.exceptionMessageAttr = a.Exceptions.getMessage(p), a.Logger.startActiveSpan("AllExceptions", function(y) {
                                return y && (y.setAttribute("code.function", "AllExceptions"), y.setAttribute("outsystems.function.key", "5adfb1ba-fa82-48b9-9b23-db0c988f780f"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), a.Flow.tryFinally(function() {
                                    return a.Flow.executeAsyncFlow(function() {
                                        return L.settransfer_response(""), a.Flow.returnAsync(a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "transfer-status", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0))
                                    })
                                }, function() {
                                    y && y.end()
                                })
                            }, 1);
                            throw p
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onConfirmTransfer$Action
        }
        set _onConfirmTransfer$Action(e) {
            this.__onConfirmTransfer$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    d = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "dc88e445-44c9-4945-93c6-5d4109d9cb46"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var f = new a.DataTypes.VariableHolder;
                        f.value = A.getTransferData$Action(e), t.variables.transfer_dataVar = f.value.transfer_dataOut
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onConfirmTransfer$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnConfirmTransfer__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnConfirmTransfer"), r.setAttribute("outsystems.function.key", "153b2f1d-611b-4aae-a10b-5328e9cee2e8"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onConfirmTransfer$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "dc88e445-44c9-4945-93c6-5d4109d9cb46"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    r && r.end()
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    d = this.idService;
                return t.onReady$Action(e)
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
            return A.defaultTimeout
        }
    };
    s(c, "ControllerInner");
    let g = c;
    G = g, G.registerVariableGroupType("uae.TransferFlow.ConfirmTransferBlock$ActionPostTransfer", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new R
        }, "defaultValue"),
        complexType: R
    }]), G.registerVariableGroupType("uae.TransferFlow.ConfirmTransferBlock.OnConfirmTransfer$vars", [{
        name: "transfer_request",
        attrName: "transfer_requestVar",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new W
        }, "defaultValue"),
        complexType: W
    }, {
        name: "transfer_response",
        attrName: "transfer_responseVar",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new R
        }, "defaultValue"),
        complexType: R
    }])
}
var G, Oe = new a.Controller.ControllerFactory(G, N);
var ke = V.PlaceholderContent,
    gt = V.IteratorPlaceholderContent,
    Be = s(function() {
        var g = he(function(c) {
            var o = c.model,
                e = c.controller,
                t = c.controller.idService,
                r = e.validationService,
                d = e.callContext(),
                i = k,
                f = B,
                b = {
                    props: c,
                    validateWidget: s(function(u) {
                        c.validateWidget(c, u)
                    }, "validateWidget")
                },
                n = o,
                O = $,
                E = I,
                h = M();
            return l.createElement("div", c.rootNodeProperties, l.createElement(be, {
                _validationProps: {
                    validationService: r
                },
                extendedProperties: {
                    style: "display: flex; flex-direction: column; height: 100%;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "form",
                _idProps: {
                    service: t,
                    name: "TransferForm"
                },
                _widgetRecordProvider: n
            }, l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: n
            }, l.createElement(D, {
                extendedProperties: {
                    style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                },
                text: [E(f("0mZGeZbWIU+meb7gTpnLfQ#Value", "Confirmation"))],
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: n
            }), l.createElement(v, {
                align: 0,
                animate: !1,
                style: "flex flex-col flex-1",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: n
            }, l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid var(--border-secondary, rgba(0, 0, 0, 0.08); display: flex; flex-direction: column;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: n
            }, l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; gap: 16px; padding: 16px 0px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    name: "FromContainer"
                },
                _widgetRecordProvider: n
            }, l.createElement(D, {
                extendedProperties: {
                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                text: [E(f("ppHNqTNZuEOzJpcm1RlbXQ#Value", "From"))],
                _idProps: {
                    service: t,
                    uuid: "6"
                },
                _widgetRecordProvider: n
            }), l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px; justify-content: center;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "7"
                },
                _widgetRecordProvider: n
            }, l.createElement(Y, {
                extendedProperties: {
                    style: "height: 24px;"
                },
                gridProperties: {
                    width: "24px",
                    marginLeft: "0"
                },
                type: 1,
                url: o.variables.transfer_dataVar.fromAttr.logoAttr,
                _idProps: {
                    service: t,
                    uuid: "8"
                },
                _widgetRecordProvider: n
            }), l.createElement(C, {
                extendedProperties: {
                    style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: o.variables.transfer_dataVar.fromAttr.nameAttr,
                _idProps: {
                    service: t,
                    uuid: "9"
                },
                _widgetRecordProvider: n
            })))), l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid var(--border-secondary, rgba(0, 0, 0, 0.08); display: flex; flex-direction: column;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "10"
                },
                _widgetRecordProvider: n
            }, l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; gap: 16px; padding: 16px 0px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    name: "ToContainer"
                },
                _widgetRecordProvider: n
            }, l.createElement(D, {
                extendedProperties: {
                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                text: [E(f("cwQ3SBCYZU+g_puQY++E_g#Value", "To"))],
                _idProps: {
                    service: t,
                    uuid: "12"
                },
                _widgetRecordProvider: n
            }), l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px; justify-content: center;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "13"
                },
                _widgetRecordProvider: n
            }, l.createElement(Y, {
                extendedProperties: {
                    style: "height: 24px;"
                },
                gridProperties: {
                    width: "24px",
                    marginLeft: "0"
                },
                type: 1,
                url: o.variables.transfer_dataVar.toAttr.logoAttr,
                _idProps: {
                    service: t,
                    uuid: "14"
                },
                _widgetRecordProvider: n
            }), l.createElement(C, {
                extendedProperties: {
                    style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: o.variables.transfer_dataVar.toAttr.nameAttr,
                _idProps: {
                    service: t,
                    uuid: "15"
                },
                _widgetRecordProvider: n
            })))), l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid var(--border-secondary, rgba(0, 0, 0, 0.08); display: flex; flex-direction: column;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "16"
                },
                _widgetRecordProvider: n
            }, l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; gap: 16px; padding: 16px 0px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "17"
                },
                _widgetRecordProvider: n
            }, l.createElement(D, {
                extendedProperties: {
                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                text: [E(f("17lkLAnUm0iSL+xR4WgqGQ#Value", "You\u2019re transferring"))],
                _idProps: {
                    service: t,
                    uuid: "18"
                },
                _widgetRecordProvider: n
            }), l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px; justify-content: center;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "19"
                },
                _widgetRecordProvider: n
            }, l.createElement(C, {
                extendedProperties: {
                    style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: o.getCachedValue(t.getId("6UK18iwe6kSYFc7eybg1ag.Value"), function() {
                    return (o.variables.transfer_dataVar.from_amountAttr.gt(_.integerToDecimal(0)) ? o.variables.transfer_dataVar.fromAttr.currencyAttr === "AED" || o.variables.transfer_dataVar.fromAttr.currencyAttr === "USD" ? _.formatCurrency(o.variables.transfer_dataVar.from_amountAttr, "", 2, ".", ",") : _.formatCurrency(o.variables.transfer_dataVar.from_amountAttr, "", 8, ".", ",") : "-") + " " + o.variables.transfer_dataVar.fromAttr.currencyAttr
                }, function() {
                    return o.variables.transfer_dataVar.from_amountAttr
                }, function() {
                    return o.variables.transfer_dataVar.fromAttr.currencyAttr
                }),
                _idProps: {
                    service: t,
                    uuid: "20"
                },
                _widgetRecordProvider: n
            })))), l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid var(--border-secondary, rgba(0, 0, 0, 0.08); display: flex; flex-direction: column;"
                },
                visible: !1,
                _idProps: {
                    service: t,
                    uuid: "21"
                },
                _widgetRecordProvider: n
            }, l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; gap: 16px; padding: 16px 0px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "22"
                },
                _widgetRecordProvider: n
            }, l.createElement(C, {
                extendedProperties: {
                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                value: o.getCachedValue(t.getId("M62ki6o5sUmKW_Q3H5Cb2w.Value"), function() {
                    return P.resolve(x.TranslationsService).getMessage("48JsgAdXMki3VdbLBiJ89w#ValueExpression.-1273591729.1", "Transfer fee ") + (o.variables.transfer_dataVar.quoteAttr.transfer_fee_percentageAttr.gt(_.integerToDecimal(0)) ? P.resolve(x.TranslationsService).getMessage("48JsgAdXMki3VdbLBiJ89w#ValueExpression.40.1", "(") + _.decimalToText(o.variables.transfer_dataVar.quoteAttr.transfer_fee_percentageAttr) + P.resolve(x.TranslationsService).getMessage("48JsgAdXMki3VdbLBiJ89w#ValueExpression.1188.1", "%)") : "")
                }, function() {
                    return o.variables.transfer_dataVar.quoteAttr.transfer_fee_percentageAttr
                }),
                _idProps: {
                    service: t,
                    uuid: "23"
                },
                _widgetRecordProvider: n
            }), l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px; justify-content: center;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "24"
                },
                _widgetRecordProvider: n
            }, l.createElement(C, {
                extendedProperties: {
                    style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: o.getCachedValue(t.getId("xMNp3KktBkmxZRvCxElN0g.Value"), function() {
                    return (o.variables.transfer_dataVar.quoteAttr.transfer_feeAttr.gt(_.integerToDecimal(0)) ? o.variables.transfer_dataVar.fromAttr.currencyAttr === "AED" || o.variables.transfer_dataVar.fromAttr.currencyAttr === "USD" ? _.formatCurrency(o.variables.transfer_dataVar.quoteAttr.transfer_feeAttr, "", 4, ".", ",") : _.formatCurrency(o.variables.transfer_dataVar.quoteAttr.transfer_feeAttr, "", 8, ".", ",") : "-") + " " + o.variables.transfer_dataVar.fromAttr.currencyAttr
                }, function() {
                    return o.variables.transfer_dataVar.quoteAttr.transfer_feeAttr
                }, function() {
                    return o.variables.transfer_dataVar.fromAttr.currencyAttr
                }),
                _idProps: {
                    service: t,
                    uuid: "25"
                },
                _widgetRecordProvider: n
            })))), l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid var(--border-secondary, rgba(0, 0, 0, 0.08); display: flex; flex-direction: column;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "26"
                },
                _widgetRecordProvider: n
            }, l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; gap: 16px; padding: 16px 0px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "27"
                },
                _widgetRecordProvider: n
            }, l.createElement(C, {
                extendedProperties: {
                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                value: P.resolve(x.TranslationsService).getMessage("pcCly_dLsUK3L4DzftyGvQ#ValueExpression.-59419061.1", "You'll receive"),
                _idProps: {
                    service: t,
                    uuid: "28"
                },
                _widgetRecordProvider: n
            }), l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-end; display: flex; flex-direction: column;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "29"
                },
                _widgetRecordProvider: n
            }, l.createElement(C, {
                extendedProperties: {
                    style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: o.getCachedValue(t.getId("q1MwggYXA0mQ6Dly2xC3nA.Value"), function() {
                    return "\u2248" + (o.variables.transfer_dataVar.quoteAttr.to_net_amountAttr.gt(_.integerToDecimal(0)) ? o.variables.transfer_dataVar.toAttr.currencyAttr === "AED" || o.variables.transfer_dataVar.toAttr.currencyAttr === "USD" ? _.formatCurrency(o.variables.transfer_dataVar.quoteAttr.to_net_amountAttr, "", 2, ".", ",") : _.formatCurrency(o.variables.transfer_dataVar.quoteAttr.to_net_amountAttr, "", 8, ".", ",") : "-") + " " + o.variables.transfer_dataVar.toAttr.currencyAttr
                }, function() {
                    return o.variables.transfer_dataVar.quoteAttr.to_net_amountAttr
                }, function() {
                    return o.variables.transfer_dataVar.toAttr.currencyAttr
                }),
                _idProps: {
                    service: t,
                    uuid: "30"
                },
                _widgetRecordProvider: n
            }), O(o.variables.transfer_dataVar.fromAttr.currencyAttr === o.variables.transfer_dataVar.toAttr.currencyAttr, !1, this, function() {
                return []
            }, function() {
                return [l.createElement(C, {
                    extendedProperties: {
                        style: "---comment-6: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: right;"
                    },
                    value: o.getCachedValue(t.getId("AgoWksSaMk++hfC7VObKlA.Value"), function() {
                        return (o.variables.transfer_dataVar.quoteAttr.from_net_amountAttr.gt(_.integerToDecimal(0)) ? o.variables.transfer_dataVar.fromAttr.currencyAttr === "AED" || o.variables.transfer_dataVar.fromAttr.currencyAttr === "USD" ? _.formatCurrency(o.variables.transfer_dataVar.quoteAttr.from_net_amountAttr, "", 2, ".", ",") : _.formatCurrency(o.variables.transfer_dataVar.quoteAttr.from_net_amountAttr, "", 8, ".", ",") : "-") + " " + o.variables.transfer_dataVar.fromAttr.currencyAttr
                    }, function() {
                        return o.variables.transfer_dataVar.quoteAttr.from_net_amountAttr
                    }, function() {
                        return o.variables.transfer_dataVar.fromAttr.currencyAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "31"
                    },
                    _widgetRecordProvider: n
                })]
            }))))), l.createElement(ee, {
                getOwnerSpan: s(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLoading: o.variables.is_posting_transferVar,
                    ExtendedClass: "w-full"
                },
                events: {
                    _handleError: s(function(u) {
                        e.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r,
                    validationParentId: t.getId("TransferForm")
                },
                _idProps: {
                    service: t,
                    uuid: "32",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    button: new ke(function() {
                        return [l.createElement(Ae, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 96px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !0,
                            onClick: s(function() {
                                return Promise.resolve().then(function() {
                                    var u = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                    return e.onConfirmTransfer$Action(e.callContext(u))
                                })
                            }, "onClick"),
                            style: "btn btn-primary action-button",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "33"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(v, {
                            align: 0,
                            animate: !1,
                            style: "osui-btn-loading__spinner-animation",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "34"
                            },
                            _widgetRecordProvider: n
                        }), l.createElement(D, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [E(f("m4+valdmdUCdHrUIK+eT0g#Value", "Confirm"))],
                            _idProps: {
                                service: t,
                                uuid: "35"
                            },
                            _widgetRecordProvider: n
                        }))]
                    })
                },
                _dependencies: []
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "ConfirmTransferBlock",
                    functionKey: "0912f562-a192-4a06-bd25-48a981508956",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TransferFlow.ConfirmTransferBlock",
            modelFactory: Te,
            controllerFactory: Oe
        });
        return g.getCssDependencies = function() {
            return ["css/uae.TransferFlow.ConfirmTransferBlock.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [ee]
        }, g
    }, "componentFactory"),
    Q = Be();
var ve = V.PlaceholderContent,
    Rt = V.IteratorPlaceholderContent,
    Fe = s(function() {
        var g = _e(function(c) {
            var o = c.model,
                e = c.controller,
                t = c.controller.idService,
                r = e.validationService,
                d = e.callContext(),
                i = k,
                f = B,
                b = {
                    props: c,
                    validateWidget: s(function(u) {
                        c.validateWidget(c, u)
                    }, "validateWidget")
                },
                n = o,
                O = $,
                E = I,
                h = M();
            return w.createElement("div", c.rootNodeProperties, O(ge.isDesktop$Action(d).isDesktopOut, !1, this, function() {
                return [w.createElement(te, {
                    getOwnerSpan: s(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0,
                        ShowBackbutton: !0
                    },
                    events: {
                        _handleError: s(function(u) {
                            e.handleError(u)
                        }, "_handleError"),
                        backBtnEvent$Action: s(function() {
                            var u = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                            e.desktopProcessLayoutBackBtnEvent$Action(e.callContext(u))
                        }, "backBtnEvent$Action"),
                        closeBtnEvent$Action: s(function() {
                            var u = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                            e.desktopProcessLayoutCloseBtnEvent$Action(e.callContext(u))
                        }, "closeBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: n,
                    placeholders: {
                        contentbody: new ve(function() {
                            return [w.createElement(v, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding-top: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: n
                            }, w.createElement(Q, {
                                getOwnerSpan: s(function() {
                                    return h.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return h.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: s(function(u) {
                                        e.handleError(u)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: n,
                                _dependencies: []
                            }))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [w.createElement(j, {
                    getOwnerSpan: s(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !0,
                        has_close_icon: !0
                    },
                    events: {
                        _handleError: s(function(u) {
                            e.handleError(u)
                        }, "_handleError"),
                        closeEvent$Action: s(function() {
                            var u = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                            e.desktopProcessLayoutCloseBtnEvent$Action(e.callContext(u))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "3",
                        alias: "3"
                    },
                    _widgetRecordProvider: n,
                    placeholders: {
                        content: new ve(function() {
                            return [w.createElement(Q, {
                                getOwnerSpan: s(function() {
                                    return h.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return h.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: s(function(u) {
                                        e.handleError(u)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "4",
                                    alias: "4"
                                },
                                _widgetRecordProvider: n,
                                _dependencies: []
                            })]
                        }),
                        footer: ve.Empty
                    },
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: s(function() {
                return {
                    codeFunction: "ConfirmTransfer",
                    functionKey: "1aa23931-c209-4f21-9c79-54d9fdba15da",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TransferFlow.ConfirmTransfer",
            modelFactory: de,
            controllerFactory: ne,
            getTitle: s(function(c) {
                var o = c.model,
                    e = c.controller,
                    t = c.controller.idService,
                    r = e.validationService,
                    d = e.callContext(),
                    i = k,
                    f = B,
                    b = {
                        props: c,
                        validateWidget: s(function(n) {
                            c.validateWidget(c, n)
                        }, "validateWidget")
                    };
                return P.resolve(x.TranslationsService).getMessage("MTmiGgnCIU+ceVTZ_boV2g#TitleExpression.-1583204731.1", "Confirm transfer | Deriv")
            }, "getTitle")
        });
        return g.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.TransferFlow.ConfirmTransfer.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [te, Q, j]
        }, g
    }, "componentFactory"),
    We = Fe();
export {
    ne as controllerModule, de as modelModule, We as viewModule, re as webFlowControllerModule
};