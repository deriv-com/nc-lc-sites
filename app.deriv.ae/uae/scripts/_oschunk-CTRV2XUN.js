import {
    a as k
} from "./_oschunk-PHBEQLQL.js";
import {
    a as D
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as F
} from "./_oschunk-TLJXDQWQ.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as K,
    f,
    h as x,
    n as Z,
    u as C
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ne,
    g as V,
    m as j,
    n as G,
    q as Y,
    r as X,
    s as W,
    t as H
} from "./_oschunk-4VHUVDBV.js";
import {
    a as J
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    G as T,
    Sb as w,
    ma as A,
    r as R,
    ub as Q
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as l,
    e as ie,
    m as B,
    n as z,
    w as b
} from "./_oschunk-M5BUVJ72.js";
var ae = {
        "c7OaHwhle0ynusV6gbtnOA#Value": "\u062A\u0623\u0643\u064A\u062F",
        "pJO7uP20WU+ui5X0OO8+6g#Value": "\u0645\u0628\u0644\u063A \u0627\u0644\u0633\u062D\u0628",
        "ySYeH38CgU2OFgJHa0TrFQ#Value": "\u0625\u0644\u0649",
        "Q+UpTT4z106QqC0XJOqkxQ#Value": "\u0645\u0646",
        "QMhklLp1CkmavYECY3nrQw#Value": "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0633\u062D\u0628",
        "NnjrNU1uMU2nrSIrU9btEw#Title": "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0633\u062D\u0628 | Deriv",
        "NnjrNU1uMU2nrSIrU9btEw#TitleExpression.1956917583.1": "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0633\u062D\u0628 | Deriv"
    },
    ee = {
        "ar-001": {
            translations: ae,
            isRTL: !0
        }
    };
var r = S; {
    let d = class d extends r.Controller.BaseViewController {
        constructor(e, t, i) {
            super(e, t, i, ee);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postWithdraw$ServerAction() {
            return this.hasOwnProperty("_postWithdraw$ServerAction") || (this._postWithdraw$ServerAction = function(e, t, i) {
                var v = this.controller;
                return r.Logger.startActiveSpan("PostWithdraw", function(n) {
                    return n && (n.setAttribute("code.function", "PostWithdraw"), n.setAttribute("outsystems.function.key", "171522f3-2052-40a1-9dcf-bdadd245428c"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var u = {
                            Authorization: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text),
                            Request: r.DataConversion.ServerDataConverter.to(t, r.DataTypes.DataTypes.Record)
                        };
                        return v.callServerAction("PostWithdraw", "screenservices/uae/WithdrawFlow/ConfirmWithdraw/ActionPostWithdraw", "u7RlDpDINsORoJHJa3ZpMw", u, v.callContext(i), void 0, void 0, !0).then(function(m) {
                            var a = new(v.constructor.getVariableGroupType("uae.WithdrawFlow.ConfirmWithdraw$ActionPostWithdraw"));
                            return a.responseOut = r.DataConversion.ServerDataConverter.from(m.Response, A), a
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._postWithdraw$ServerAction
        }
        set postWithdraw$ServerAction(e) {
            this._postWithdraw$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    i = this.controller,
                    v = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "052610da-8ff8-48c2-8a08-cde6398fd0c3"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnReady"), e = i.callContext(e);
                        var u = new r.DataTypes.VariableHolder,
                            m = new r.DataTypes.VariableHolder;
                        m.value = w.getWithdrawWallet$Action(e), u.value = w.getWithdrawRequest$Action(e), t.variables.withdraw_requestVar = u.value.withdraw_requestOut, t.variables.walletVar = m.value.walletOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _confirmOnClick$Action() {
            return this.hasOwnProperty("__confirmOnClick$Action") || (this.__confirmOnClick$Action = function(e) {
                var t = this.model,
                    i = this.controller,
                    v = this.idService;
                return r.Logger.startActiveSpan("ConfirmOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "ConfirmOnClick"), n.setAttribute("outsystems.function.key", "0899390c-ee93-467e-a256-2b520ad37ad8"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        i.ensureControllerAlive("ConfirmOnClick"), e = i.callContext(e);
                        var u = new r.DataTypes.VariableHolder(new r.DataTypes.ErrorHandlerOutputType),
                            m = new r.DataTypes.VariableHolder,
                            a = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (t.variables.withdraw_requestVar.amountAttr.gt(r.BuiltinFunctions.integerToDecimal(0))) return a.value = w.getAuth$Action(e), t.variables.withdraw_requestVar.fromAttr.wallet_idAttr = t.variables.walletVar.idAttr, t.variables.is_posting_withdrawVar = !0, t.flush(), i.postWithdraw$ServerAction(a.value.tokenOut, t.variables.withdraw_requestVar, e.withTimeout(60)).then(function(p) {
                                    m.value = p
                                }).then(function() {
                                    t.variables.is_posting_withdrawVar = !1
                                }).then(function() {
                                    if (m.value.responseOut.dataAttr.length > 0 || m.value.responseOut.errorsAttr.length > 0) return w.updateWithdrawResponse$Action(m.value.responseOut, e), r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "withdraw-status", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0))
                                })
                            })
                        }).catch(function(p) {
                            if (r.Logger.debug("ConfirmWithdraw.ConfirmOnClick", r.Exceptions.getMessage(p)), !r.Exceptions.isSystem(p)) return r.Logger.error(null, p, null, null, 1), u.value.exceptionMessageAttr = r.Exceptions.getMessage(p), r.Logger.startActiveSpan("AllExceptions", function(c) {
                                return c && (c.setAttribute("code.function", "AllExceptions"), c.setAttribute("outsystems.function.key", "cca24515-e60d-43a9-9c3c-d07e0de4e739"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), r.Flow.tryFinally(function() {
                                    return r.Flow.executeAsyncFlow(function() {
                                        return Q.setwithdraw_response(""), r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "withdraw-status", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0))
                                    })
                                }, function() {
                                    c && c.end()
                                })
                            }, 1);
                            throw p
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__confirmOnClick$Action
        }
        set _confirmOnClick$Action(e) {
            this.__confirmOnClick$Action = e
        }
        onReady$Action(e) {
            var t = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "052610da-8ff8-48c2-8a08-cde6398fd0c3"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        confirmOnClick$Action(e) {
            var t = this.controller;
            return r.Logger.startActiveSpan("ConfirmOnClick__proxy", function(i) {
                return i && (i.setAttribute("code.function", "ConfirmOnClick"), i.setAttribute("outsystems.function.key", "0899390c-ee93-467e-a256-2b520ad37ad8"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._confirmOnClick$Action, e)
                }, function() {
                    i && i.end()
                })
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
                    i = this.model,
                    v = this.idService;
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
                return k.default.handleError(e, this.callContext())
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
    l(d, "ControllerInner");
    let h = d;
    N = h, N.registerVariableGroupType("uae.WithdrawFlow.ConfirmWithdraw$ActionPostWithdraw", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new A
        }, "defaultValue"),
        complexType: A
    }])
}
var N, L = new r.Controller.ControllerFactory(N, J);
var o = ie(ne());
var g = S,
    $ = class $ extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("withdraw_request", "withdraw_requestVar", "withdraw_request", !0, !1, g.DataTypes.DataTypes.Record, function() {
                return g.DataTypes.ImmutableBase.getData(new T)
            }, !1, T), this.attr("wallet", "walletVar", "wallet", !0, !1, g.DataTypes.DataTypes.Record, function() {
                return g.DataTypes.ImmutableBase.getData(new R)
            }, !1, R), this.attr("is_posting_withdraw", "is_posting_withdrawVar", "is_posting_withdraw", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l($, "VariablesRecord");
var O = $;
O.init();
var U = class U extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(U, "WidgetsRecord");
var M = U,
    _ = class _ extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return M
        }
        static get hasValidationWidgets() {
            return _._hasValidationWidgetsValue === void 0 && (_._hasValidationWidgetsValue = void 0 || void 0), _._hasValidationWidgetsValue
        }
        setInputs(d) {}
    };
l(_, "Model");
var P = _;
P._hasValidationWidgetsValue = void 0;
var I = new g.Model.ModelFactory(P);
var q = V.PlaceholderContent,
    Ve = V.IteratorPlaceholderContent,
    se = l(function() {
        var h = G(function(d) {
            var s = d.model,
                e = d.controller,
                t = d.controller.idService,
                i = e.validationService,
                v = e.callContext(),
                n = W,
                u = H,
                m = {
                    props: d,
                    validateWidget: l(function(y) {
                        d.validateWidget(d, y)
                    }, "validateWidget")
                },
                a = s,
                p = X,
                c = Y,
                E = j();
            return o.createElement("div", d.rootNodeProperties, o.createElement(D, {
                getOwnerSpan: l(function() {
                    return E.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return E.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_back_button: !0
                },
                events: {
                    _handleError: l(function(y) {
                        e.handleError(y)
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
                _widgetRecordProvider: a,
                placeholders: {
                    content: new q(function() {
                        return [o.createElement(f, {
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
                            _widgetRecordProvider: a
                        }, o.createElement(C, {
                            extendedProperties: {
                                style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                            },
                            text: [c(u("QMhklLp1CkmavYECY3nrQw#Value", "Withdraw Confirmation"))],
                            _idProps: {
                                service: t,
                                uuid: "2"
                            },
                            _widgetRecordProvider: a
                        }), o.createElement(f, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "3"
                            },
                            _widgetRecordProvider: a
                        }, o.createElement(f, {
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
                            _widgetRecordProvider: a
                        }, o.createElement(f, {
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
                            _widgetRecordProvider: a
                        }, o.createElement(C, {
                            extendedProperties: {
                                style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                            },
                            text: [c(u("Q+UpTT4z106QqC0XJOqkxQ#Value", "From"))],
                            _idProps: {
                                service: t,
                                uuid: "6"
                            },
                            _widgetRecordProvider: a
                        }), o.createElement(f, {
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
                            _widgetRecordProvider: a
                        }, o.createElement(Z, {
                            extendedProperties: {
                                style: "height: 24px;"
                            },
                            gridProperties: {
                                width: "24px",
                                marginLeft: "0"
                            },
                            type: 1,
                            url: s.getCachedValue(t.getId("l8D9IF5uy0atfs59Oleekw.Url"), function() {
                                return "/ChampionApp/img/ChampionApp.currency" + b.toLower(s.variables.walletVar.currencyAttr) + ".svg"
                            }, function() {
                                return s.variables.walletVar.currencyAttr
                            }),
                            _idProps: {
                                service: t,
                                uuid: "8"
                            },
                            _widgetRecordProvider: a
                        }), o.createElement(x, {
                            extendedProperties: {
                                style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            value: s.variables.walletVar.currencyAttr + " wallet",
                            _idProps: {
                                service: t,
                                uuid: "9"
                            },
                            _widgetRecordProvider: a
                        })))), o.createElement(f, {
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
                            _widgetRecordProvider: a
                        }, o.createElement(f, {
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
                            _widgetRecordProvider: a
                        }, o.createElement(C, {
                            extendedProperties: {
                                style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                            },
                            text: [c(u("ySYeH38CgU2OFgJHa0TrFQ#Value", "To"))],
                            _idProps: {
                                service: t,
                                uuid: "12"
                            },
                            _widgetRecordProvider: a
                        }), o.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex: 2 0 0; gap: 8px; justify-content: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "13"
                            },
                            _widgetRecordProvider: a
                        }, o.createElement(x, {
                            extendedProperties: {
                                style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: right; white-space: break-spaces; word-break: break-word; word-wrap: break-word;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            value: s.variables.withdraw_requestVar.toAttr.addressAttr,
                            _idProps: {
                                service: t,
                                uuid: "14"
                            },
                            _widgetRecordProvider: a
                        })))), o.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid var(--border-secondary, rgba(0, 0, 0, 0.08); display: flex; flex-direction: column;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "15"
                            },
                            _widgetRecordProvider: a
                        }, o.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: flex-start; align-self: stretch; display: flex; gap: 16px; padding: 16px 0px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "16"
                            },
                            _widgetRecordProvider: a
                        }, o.createElement(C, {
                            extendedProperties: {
                                style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                            },
                            text: [c(u("pJO7uP20WU+ui5X0OO8+6g#Value", "Withdraw amount"))],
                            _idProps: {
                                service: t,
                                uuid: "17"
                            },
                            _widgetRecordProvider: a
                        }), o.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 8px; justify-content: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "18"
                            },
                            _widgetRecordProvider: a
                        }, o.createElement(x, {
                            extendedProperties: {
                                style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            value: s.getCachedValue(t.getId("StKjDfpN+EmiQMDoadAbDQ.Value"), function() {
                                return (s.variables.withdraw_requestVar.amountAttr.gt(b.integerToDecimal(0)) ? s.variables.walletVar.currencyAttr === "GBP" || s.variables.walletVar.currencyAttr === "USD" ? b.formatCurrency(s.variables.withdraw_requestVar.amountAttr, "", 2, ".", ",") : b.formatCurrency(s.variables.withdraw_requestVar.amountAttr, "", 8, ".", ",") : "-") + " " + s.variables.walletVar.currencyAttr
                            }, function() {
                                return s.variables.withdraw_requestVar.amountAttr
                            }, function() {
                                return s.variables.walletVar.currencyAttr
                            }),
                            _idProps: {
                                service: t,
                                uuid: "19"
                            },
                            _widgetRecordProvider: a
                        }))))))]
                    }),
                    footer: new q(function() {
                        return [o.createElement(F, {
                            getOwnerSpan: l(function() {
                                return E.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: l(function() {
                                return E.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: s.variables.is_posting_withdrawVar
                            },
                            events: {
                                _handleError: l(function(y) {
                                    e.handleError(y)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: t,
                                uuid: "20",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            placeholders: {
                                button: new q(function() {
                                    return [o.createElement(K, {
                                        enabled: !0,
                                        extendedProperties: {
                                            style: "border-radius: 96px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: !1,
                                        onClick: l(function() {
                                            return Promise.resolve().then(function() {
                                                var y = typeof v != "undefined" && v !== null ? v.clone() : e.callContext().clone();
                                                return e.confirmOnClick$Action(e.callContext(y))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary action-button",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: a
                                    }, o.createElement(f, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: a
                                    }), c(u("c7OaHwhle0ynusV6gbtnOA#Value", "Confirm")))]
                                })
                            },
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: [n(s.variables.is_posting_withdrawVar), n(s.variables.withdraw_requestVar.amountAttr), n(s.variables.withdraw_requestVar.toAttr.addressAttr), n(s.variables.walletVar.currencyAttr)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: l(function() {
                return {
                    codeFunction: "ConfirmWithdraw",
                    functionKey: "35eb7836-6e4d-4d31-a7ad-222b53d6ed13",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "WithdrawFlow.ConfirmWithdraw",
            modelFactory: I,
            controllerFactory: L,
            getTitle: l(function(d) {
                var s = d.model,
                    e = d.controller,
                    t = d.controller.idService,
                    i = e.validationService,
                    v = e.callContext(),
                    n = W,
                    u = H,
                    m = {
                        props: d,
                        validateWidget: l(function(a) {
                            d.validateWidget(d, a)
                        }, "validateWidget")
                    };
                return B.resolve(z.TranslationsService).getMessage("NnjrNU1uMU2nrSIrU9btEw#TitleExpression.1956917583.1", "Confirm withdrawal | Deriv")
            }, "getTitle")
        });
        return h.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, h.getJsDependencies = function() {
            return []
        }, h.getBlocks = function() {
            return [D, F]
        }, h
    }, "componentFactory"),
    le = se();
export {
    L as controllerModule, I as modelModule, le as viewModule, k as webFlowControllerModule
};