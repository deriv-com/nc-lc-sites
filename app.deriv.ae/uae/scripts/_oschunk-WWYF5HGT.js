import {
    a as W
} from "./_oschunk-WJ5PVGKG.js";
import "./_oschunk-JQ2HBHMK.js";
import {
    a as B
} from "./_oschunk-7ZNALR7E.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as $,
    f as m,
    h as p,
    n as G,
    u as H
} from "./_oschunk-VR5BNL2K.js";
import {
    a as fe,
    g as M,
    m as re,
    n as ae,
    q as ie,
    r as ne,
    s as se,
    t as L
} from "./_oschunk-4VHUVDBV.js";
import {
    a as te
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    K as D,
    Ra as ee,
    Sb as A,
    Ta as R,
    a as h,
    ja as I,
    sb as F,
    ub as v,
    wa as k
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as E,
    c as l,
    e as de,
    p as N
} from "./_oschunk-M5BUVJ72.js";
var oe = {};

function J(g, d, y, a) {
    g.formatted_display_name = g.display_name.replace(/-([A-Z])/g, function(t, r) {
        return "-" + r.toLowerCase()
    })
}
l(J, "default");

function z(g, d, y, a) {
    d.CallMT5AccountSpecs(g.account_type), d.CallOnBoardingStatus()
}
l(z, "default");

function U(g, d, y, a) {
    return new Promise(function(t, r) {
        fetch("https://assets.deriv.ae/business/config/account-specifications.json").then(s => {
            if (!s.ok) throw new Error("Network response was not ok");
            return s.json()
        }).then(s => {
            let i = {};
            s.data.forEach(f => {
                let n = f.account,
                    _ = n.specification.type;
                i[_] || (i[_] = []), i[_].push(n)
            }), g.account_specification = JSON.stringify(i), t(i)
        }).catch(s => {
            console.error("Fetch error:", s)
        })
    })
}
l(U, "default");

function j(g, d, y, a) {
    let t = [{
            Id: "Forex",
            SVGIcon: "https://assets.deriv.ae/products/forex-sm.svg"
        }, {
            Id: "Stocks",
            SVGIcon: "https://assets.deriv.ae/products/stocks-sm.svg"
        }, {
            Id: "Stock Indices",
            SVGIcon: "https://assets.deriv.ae/products/stock-indices-sm.svg"
        }, {
            Id: "Commodities",
            SVGIcon: "https://assets.deriv.ae/products/commodities-sm.svg"
        }, {
            Id: "Cryptocurrencies",
            SVGIcon: "https://assets.deriv.ae/products/cryptocurrencies-sm.svg"
        }, {
            Id: "ETFs",
            SVGIcon: "https://assets.deriv.ae/products/etf-sm.svg"
        }],
        s = JSON.parse(g.offeringsList).flatMap(i => {
            let u = t.find(f => f.Id === i);
            return u ? [{
                Id: i,
                SVGIcon: u.SVGIcon
            }] : []
        });
    g.offeringsIconandNameList = JSON.stringify(s)
}
l(j, "default");
var e = E; {
    let d = class d extends e.Controller.BaseViewController {
        constructor(a, t, r) {
            super(a, t, r, oe);
            var s = this.controller;
            this.clientActionProxies = {
                callMT5AccountSpecs$Action: l(function(i) {
                    return i = i === void 0 ? "" : i, s.executeActionInsideJSNode(s._callMT5AccountSpecs$Action.bind(s, e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), s.callContext(), function(u) {
                        return {}
                    }, function() {}, "CallMT5AccountSpecs")
                }, "callMT5AccountSpecs$Action"),
                callOnBoardingStatus$Action: l(function() {
                    return s.executeActionInsideJSNode(s._callOnBoardingStatus$Action.bind(s), s.callContext(), function(i) {
                        return {}
                    }, function() {}, "CallOnBoardingStatus")
                }, "callOnBoardingStatus$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getMt5accountspecs$ServerAction() {
            return this.hasOwnProperty("_getMt5accountspecs$ServerAction") || (this._getMt5accountspecs$ServerAction = function(a, t, r) {
                var s = this.controller;
                return e.Logger.startActiveSpan("GetMt5accountspecs", function(i) {
                    return i && (i.setAttribute("code.function", "GetMt5accountspecs"), i.setAttribute("outsystems.function.key", "b75b35ca-3f67-40fd-98e4-f1887ab92fd7"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var u = {
                            account_type: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                            authorization: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text)
                        };
                        return s.callServerAction("GetMt5accountspecs", "screenservices/uae/V2Flow/MT5AccountType/ActionGetMt5accountspecs", "BuFPmo87XV2bB+Q2pFo4lg", u, s.callContext(r), void 0, void 0, !0).then(function(f) {
                            var n = new(s.constructor.getVariableGroupType("uae.V2Flow.MT5AccountType$ActionGetMt5accountspecs"));
                            return n.responseOut = e.DataConversion.ServerDataConverter.from(f.Response, R), n
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getMt5accountspecs$ServerAction
        }
        set getMt5accountspecs$ServerAction(a) {
            this._getMt5accountspecs$ServerAction = a
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get _activateOnClick$Action() {
            return this.hasOwnProperty("__activateOnClick$Action") || (this.__activateOnClick$Action = function(a, t) {
                var r = this.model,
                    s = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("ActivateOnClick", function(u) {
                    return u && (u.setAttribute("code.function", "ActivateOnClick"), u.setAttribute("outsystems.function.key", "1ccfe968-9cf8-4111-8e21-e4692e43e178"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        s.ensureControllerAlive("ActivateOnClick"), t = s.callContext(t);
                        var f = new e.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("uae.V2Flow.MT5AccountType.ActivateOnClick$vars")));
                        f.value.account_type2InLocal = a;
                        var n = new e.DataTypes.VariableHolder,
                            _ = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                return v.getupdateKYCFlow() ? s._activateOnClickNewFlow$Action(t) : (n.value = A.getAuth$Action(t), r.flush(), A.getUserOnboardingStatus$Action(t).then(function(S) {
                                    _.value = S
                                }).then(function() {
                                    v.setSelectedMT5AccountType(f.value.account_type2InLocal), A.consoleLog$Action((r.variables.is_demoIn ? "True" : "False") + "<-- is demo" + (v.gethasMT5Accounts() ? "True" : "False") + "whether user has created mt5 accounts before or not" + v.getSelectedMT5AccountType() + "account type", t)
                                }).then(function() {
                                    return r.variables.is_demoIn ? v.gethasMT5Accounts() ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "MT5EnterPassword_V2", {
                                        is_demo: e.DataConversion.ServerDataConverter.to(!0, e.DataTypes.DataTypes.Boolean),
                                        mt5_type: e.DataConversion.ServerDataConverter.to(v.getSelectedMT5AccountType() === "standard" ? h.mT5Types.standard : h.mT5Types.swapFree, e.DataTypes.DataTypes.Integer)
                                    }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)) : e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "CreatePassword_V2", {
                                        is_demo: e.DataConversion.ServerDataConverter.to(!0, e.DataTypes.DataTypes.Boolean),
                                        from: e.DataConversion.ServerDataConverter.to("mt5-account-type", e.DataTypes.DataTypes.Text)
                                    }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)) : v.gethasMT5Accounts() ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "MT5EnterPassword_V2", {
                                        mt5_type: e.DataConversion.ServerDataConverter.to(f.value.account_type2InLocal === "standard" ? h.mT5Types.standard : h.mT5Types.swapFree, e.DataTypes.DataTypes.Integer),
                                        is_demo: e.DataConversion.ServerDataConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                    }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)) : e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "CreatePassword_V2", {
                                        from: e.DataConversion.ServerDataConverter.to("mt5-account-type", e.DataTypes.DataTypes.Text),
                                        is_demo: e.DataConversion.ServerDataConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                    }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0))
                                }))
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__activateOnClick$Action
        }
        set _activateOnClick$Action(a) {
            this.__activateOnClick$Action = a
        }
        get _cancelOnClick$Action() {
            return this.hasOwnProperty("__cancelOnClick$Action") || (this.__cancelOnClick$Action = function(a) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("CancelOnClick", function(i) {
                    i && (i.setAttribute("code.function", "CancelOnClick"), i.setAttribute("outsystems.function.key", "2a3f9e1c-53b0-48e5-a59e-bc627505b94e"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("CancelOnClick"), a = r.callContext(a), t.variables.show_kyc_verification_popupVar = !1
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__cancelOnClick$Action
        }
        set _cancelOnClick$Action(a) {
            this.__cancelOnClick$Action = a
        }
        get _callMT5AccountSpecs$Action() {
            return this.hasOwnProperty("__callMT5AccountSpecs$Action") || (this.__callMT5AccountSpecs$Action = function(a, t) {
                var r = this.model,
                    s = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("CallMT5AccountSpecs", function(u) {
                    return u && (u.setAttribute("code.function", "CallMT5AccountSpecs"), u.setAttribute("outsystems.function.key", "2b17d068-a1e6-4d2a-8d93-0cd6449d6ced"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        s.ensureControllerAlive("CallMT5AccountSpecs"), t = s.callContext(t);
                        var f = new e.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("uae.V2Flow.MT5AccountType.CallMT5AccountSpecs$vars")));
                        f.value.accountType2InLocal = a;
                        var n = new e.DataTypes.VariableHolder,
                            _ = new e.DataTypes.VariableHolder,
                            S = new e.DataTypes.VariableHolder,
                            C = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            w = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(k)));
                        return e.Flow.executeAsyncFlow(function() {
                            return _.value = A.getAuth$Action(t), A.setAccountActivationInputs$Action((function() {
                                var T = new ee;
                                return T.is_demoAttr = r.variables.is_demoIn, T.show_activation_actionAttr = r.variables.show_activate_actionIn, T.account_typeAttr = f.value.accountType2InLocal, T
                            })(), t), v.setSelectedMT5AccountType(f.value.accountType2InLocal), e.Flow.executeSequence(function() {
                                if (v.getmt5_account_specification() !== e.BuiltinFunctions.nullTextIdentifier()) b.value.dataOut = e.JSONUtils.deserializeFromJSON(v.getmt5_account_specification(), k, !1), r.variables.display_name_stdVar = b.value.dataOut.standardAttr.getCurrent(t.iterationContext).specificationAttr.display_nameAttr, r.variables.display_name_swfVar = b.value.dataOut.swapfreeAttr.getCurrent(t.iterationContext).specificationAttr.display_nameAttr, r.variables.leverage_stdVar = e.BuiltinFunctions.longIntegerToText(b.value.dataOut.standardAttr.getCurrent(t.iterationContext).specificationAttr.max_leverageAttr), r.variables.leverage_swfVar = e.BuiltinFunctions.longIntegerToText(b.value.dataOut.swapfreeAttr.getCurrent(t.iterationContext).specificationAttr.max_leverageAttr), r.variables.spreads_stdVar = e.BuiltinFunctions.decimalToText(b.value.dataOut.standardAttr.getCurrent(t.iterationContext).specificationAttr.pipsAttr), r.variables.spreads_swfVar = e.BuiltinFunctions.decimalToText(b.value.dataOut.swapfreeAttr.getCurrent(t.iterationContext).specificationAttr.pipsAttr), r.variables.descr_stdVar = b.value.dataOut.standardAttr.getCurrent(t.iterationContext).specificationAttr.informationAttr, r.variables.descr_swfVar = b.value.dataOut.swapfreeAttr.getCurrent(t.iterationContext).specificationAttr.informationAttr, r.variables.offeringList_stdVar = b.value.dataOut.standardAttr.getCurrent(t.iterationContext).specificationAttr.markets_offeredAttr, r.variables.offeringList_swfVar = b.value.dataOut.swapfreeAttr.getCurrent(t.iterationContext).specificationAttr.markets_offeredAttr, w.value.jSONOut = e.JSONUtils.serializeToJSON(r.variables.offeringList_stdVar, !1, !1, e.DataTypes.DataTypes.Text), C.value.jSONOut = e.JSONUtils.serializeToJSON(r.variables.offeringList_swfVar, !1, !1, e.DataTypes.DataTypes.Text), r.variables.offering_items_stdVar = e.BuiltinFunctions.replace(e.BuiltinFunctions.replace(e.BuiltinFunctions.replace(e.BuiltinFunctions.replace(w.value.jSONOut, "[", ""), "]", ""), '"', ""), ",", ", "), r.variables.offering_items_swfVar = e.BuiltinFunctions.replace(e.BuiltinFunctions.replace(e.BuiltinFunctions.replace(e.BuiltinFunctions.replace(C.value.jSONOut, "[", ""), "]", ""), '"', ""), ",", ", ");
                                else return r.flush(), s.getMt5accountspecs$ServerAction(v.getSelectedMT5AccountType(), _.value.tokenOut, t).then(function(T) {
                                    n.value = T
                                }).then(function() {
                                    S.value = e.Logger.startActiveSpan("FormatDisplayName", function(T) {
                                        T && (T.setAttribute("code.function", "FormatDisplayName"), T.setAttribute("outsystems.function.key", "14b00dd4-968f-4bd0-b9f2-ff204ef0115d"), T.setAttribute("outsystems.function.owner.name", "uae"), T.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), T.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return s.safeExecuteJSNode(J, "FormatDisplayName", "CallMT5AccountSpecs", {
                                                display_name: e.DataConversion.JSNodeParamConverter.to(n.value.responseOut.dataAttr.getCurrent(t.iterationContext).display_nameAttr, e.DataTypes.DataTypes.Text),
                                                formatted_display_name: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                            }, function(le) {
                                                var X = new(s.constructor.getVariableGroupType("uae.V2Flow.MT5AccountType.CallMT5AccountSpecs$formatDisplayNameJSResult"));
                                                return X.formatted_display_nameOut = e.DataConversion.JSNodeParamConverter.from(le.formatted_display_name, e.DataTypes.DataTypes.Text), X
                                            }, {}, {})
                                        } finally {
                                            T && T.end()
                                        }
                                    }, 1), r.variables.offeringsListVar = n.value.responseOut.dataAttr.getCurrent(t.iterationContext).markets_offeredAttr, r.variables.leverageVar = n.value.responseOut.dataAttr.getCurrent(t.iterationContext).max_leverageAttr, r.variables.spreadsVar = e.BuiltinFunctions.decimalToText(n.value.responseOut.dataAttr.getCurrent(t.iterationContext).pipsAttr), r.variables.display_nameVar = S.value.formatted_display_nameOut, r.variables.descriptionVar = n.value.responseOut.dataAttr.getCurrent(t.iterationContext).informationAttr, s._getOfferingsList$Action(t), r.variables.is_loadingVar = !1
                                })
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__callMT5AccountSpecs$Action
        }
        set _callMT5AccountSpecs$Action(a) {
            this.__callMT5AccountSpecs$Action = a
        }
        get _retakeAssessmentOnClick$Action() {
            return this.hasOwnProperty("__retakeAssessmentOnClick$Action") || (this.__retakeAssessmentOnClick$Action = function(a) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("RetakeAssessmentOnClick", function(i) {
                    i && (i.setAttribute("code.function", "RetakeAssessmentOnClick"), i.setAttribute("outsystems.function.key", "66e3dc50-ec82-4874-9040-6cab68da9e38"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("RetakeAssessmentOnClick"), a = r.callContext(a), r._cancelOnClick$Action(a), e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "retake-assessment", {
                            from: e.DataConversion.ServerDataConverter.to("trade", e.DataTypes.DataTypes.Text)
                        }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__retakeAssessmentOnClick$Action
        }
        set _retakeAssessmentOnClick$Action(a) {
            this.__retakeAssessmentOnClick$Action = a
        }
        get _activateOnClickNewFlow$Action() {
            return this.hasOwnProperty("__activateOnClickNewFlow$Action") || (this.__activateOnClickNewFlow$Action = function(a) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("ActivateOnClickNewFlow", function(i) {
                    return i && (i.setAttribute("code.function", "ActivateOnClickNewFlow"), i.setAttribute("outsystems.function.key", "8c04b941-1348-4052-b198-214cfb9e98c2"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        r.ensureControllerAlive("ActivateOnClickNewFlow"), a = r.callContext(a);
                        var u = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                return t.variables.is_demoIn ? v.gethasMT5Accounts() ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "mt5/password", {
                                    mt5_type: e.DataConversion.ServerDataConverter.to(v.getSelectedMT5AccountType() === "standard" ? h.mT5Types.standard : h.mT5Types.swapFree, e.DataTypes.DataTypes.Integer),
                                    is_demo: e.DataConversion.ServerDataConverter.to(!0, e.DataTypes.DataTypes.Boolean)
                                }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0)) : e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "mt5/create-password", {
                                    from: e.DataConversion.ServerDataConverter.to("mt5-activation", e.DataTypes.DataTypes.Text),
                                    is_demo: e.DataConversion.ServerDataConverter.to(!0, e.DataTypes.DataTypes.Boolean)
                                }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0)) : (t.flush(), A.getUserOnboardingStatus$Action(a).then(function(n) {
                                    u.value = n
                                }).then(function() {
                                    return t.flush(), A.getUserKYCStatus$Action(a).then(function(n) {
                                        f.value = n
                                    })
                                }).then(function() {
                                    t.variables.getKYCResponseVar = f.value.responseOut.dataAttr
                                }).then(function() {
                                    if (t.variables.getKYCResponseVar.detailsAttr.poiAttr.statusAttr === "verified" && t.variables.getKYCResponseVar.detailsAttr.poaAttr.statusAttr === "verified") return v.gethasMT5Accounts() ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "mt5/password", {
                                        mt5_type: e.DataConversion.ServerDataConverter.to(v.getSelectedMT5AccountType() === "standard" ? h.mT5Types.standard : h.mT5Types.swapFree, e.DataTypes.DataTypes.Integer),
                                        is_demo: e.DataConversion.ServerDataConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                    }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0)) : e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "mt5/create-password", {
                                        is_demo: e.DataConversion.ServerDataConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                        from: e.DataConversion.ServerDataConverter.to("mt5-activation", e.DataTypes.DataTypes.Text)
                                    }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0));
                                    if (t.variables.getKYCResponseVar.statusAttr !== "verified" && t.variables.getKYCResponseVar.detailsAttr.hasMoreAttemptsAttr === !1 && u.value.responseOut.dataAttr.getCurrent(a.iterationContext).walletAttr.createdAttr === !0) t.variables.show_kyc_verification_popupVar = !0;
                                    else {
                                        if (t.variables.onboardingStatusVar.dataAttr.getCurrent(a.iterationContext).walletAttr.createdAttr === !1) return e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "currency-selection", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0));
                                        if (v.getenableUAEPass() && (u.value.responseOut.dataAttr.getCurrent(a.iterationContext).kycAttr.main_statusAttr === "unverified" || u.value.responseOut.dataAttr.getCurrent(a.iterationContext).kycAttr.main_statusAttr === "pending_poa") && !t.variables.is_demoIn && u.value.responseOut.dataAttr.getCurrent(a.iterationContext).walletAttr.createdAttr && u.value.responseOut.dataAttr.getCurrent(a.iterationContext).kycAttr.poi_statusAttr === "verified" && u.value.responseOut.dataAttr.getCurrent(a.iterationContext).kycAttr.poa_statusAttr === "unverified") return v.setkyc_flow_from("trade"), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "verify-poa", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0));
                                        if (t.variables.getKYCResponseVar.detailsAttr.poiAttr.statusAttr === "unverified" && t.variables.getKYCResponseVar.detailsAttr.poaAttr.statusAttr === "unverified") return v.setkyc_flow_from("trade"), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "get-verified", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0));
                                        t.variables.show_kyc_verification_popupVar = !0
                                    }
                                }))
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__activateOnClickNewFlow$Action
        }
        set _activateOnClickNewFlow$Action(a) {
            this.__activateOnClickNewFlow$Action = a
        }
        get _callOnBoardingStatus$Action() {
            return this.hasOwnProperty("__callOnBoardingStatus$Action") || (this.__callOnBoardingStatus$Action = function(a) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("CallOnBoardingStatus", function(i) {
                    return i && (i.setAttribute("code.function", "CallOnBoardingStatus"), i.setAttribute("outsystems.function.key", "b016134f-a4c6-4265-9ab1-db4006815f7c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        r.ensureControllerAlive("CallOnBoardingStatus"), a = r.callContext(a);
                        var u = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return u.value = A.getAuth$Action(a), t.flush(), A.getUserOnboardingStatus$Action(a).then(function(n) {
                                f.value = n
                            }).then(function() {
                                t.variables.onboardingStatusVar = f.value.responseOut
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__callOnBoardingStatus$Action
        }
        set _callOnBoardingStatus$Action(a) {
            this.__callOnBoardingStatus$Action = a
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(a) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "b0b7fca6-2e5d-4d37-84c4-5bc57b589000"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnInitialize"), a = r.callContext(a);
                        var u = new e.DataTypes.VariableHolder;
                        u.value = A.getAccountActivationInputs$Action(a), t.variables.is_demoIn = t.variables.is_demoIn !== !0 && t.variables.is_demoIn !== !1 ? u.value.accountActivationInputsOut.is_demoAttr : t.variables.is_demoIn, t.variables.show_activate_actionIn = u.value.accountActivationInputsOut.show_activation_actionAttr, t.variables.account_typeIn = t.variables.account_typeIn === e.BuiltinFunctions.nullIdentifier().toString() || t.variables.account_typeIn === "" ? u.value.accountActivationInputsOut.account_typeAttr : t.variables.account_typeIn, v.setSelectedMT5AccountType(t.variables.account_typeIn)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(a) {
            this.__onInitialize$Action = a
        }
        get _viewStatusOnClick$Action() {
            return this.hasOwnProperty("__viewStatusOnClick$Action") || (this.__viewStatusOnClick$Action = function(a) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("ViewStatusOnClick", function(i) {
                    i && (i.setAttribute("code.function", "ViewStatusOnClick"), i.setAttribute("outsystems.function.key", "d338a72f-77d0-4496-a72b-8c7427850ac0"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("ViewStatusOnClick"), a = r.callContext(a), v.setkyc_flow_from("trade "), e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "identity-verification-status", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__viewStatusOnClick$Action
        }
        set _viewStatusOnClick$Action(a) {
            this.__viewStatusOnClick$Action = a
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(a) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "ea49749c-8e29-48df-b285-4d2de852bed0"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), a = r.callContext(a);
                        var u = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return u.value = A.getAuth$Action(a), e.Logger.startActiveSpan("CallCDNMT5Specifications", function(n) {
                                n && (n.setAttribute("code.function", "CallCDNMT5Specifications"), n.setAttribute("outsystems.function.key", "ad67a5a3-0db6-4011-88be-ac96544f3411"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return r.safeExecuteAsyncJSNode(U, "CallCDNMT5Specifications", "OnReady", {
                                        account_specification: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(_) {
                                        var S = new(r.constructor.getVariableGroupType("uae.V2Flow.MT5AccountType.OnReady$callCDNMT5SpecificationsJSResult"));
                                        return S.account_specificationOut = e.DataConversion.JSNodeParamConverter.from(_.account_specification, e.DataTypes.DataTypes.Text), S
                                    }, {}, {})
                                } finally {
                                    n && n.end()
                                }
                            }, 1).then(function(n) {
                                f.value = n
                            }).then(function() {
                                v.setSelectedMT5AccountType(t.variables.account_typeIn === e.BuiltinFunctions.nullIdentifier().toString() ? v.getSelectedMT5AccountType() : t.variables.account_typeIn), v.setmt5_account_specification(f.value.account_specificationOut), e.Logger.startActiveSpan("Loadcalls", function(n) {
                                    n && (n.setAttribute("code.function", "Loadcalls"), n.setAttribute("outsystems.function.key", "9faed54f-1a48-4990-8ee7-3764052d3359"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return r.safeExecuteJSNode(z, "Loadcalls", "OnReady", {
                                            account_type: e.DataConversion.JSNodeParamConverter.to(v.getSelectedMT5AccountType(), e.DataTypes.DataTypes.Text)
                                        }, function(_) {}, {
                                            CallMT5AccountSpecs: r.clientActionProxies.callMT5AccountSpecs$Action,
                                            CallOnBoardingStatus: r.clientActionProxies.callOnBoardingStatus$Action
                                        }, {})
                                    } finally {
                                        n && n.end()
                                    }
                                }, 1)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(a) {
            this.__onReady$Action = a
        }
        get _getOfferingsList$Action() {
            return this.hasOwnProperty("__getOfferingsList$Action") || (this.__getOfferingsList$Action = function(a) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("GetOfferingsList", function(i) {
                    i && (i.setAttribute("code.function", "GetOfferingsList"), i.setAttribute("outsystems.function.key", "f042a5c8-409d-483e-8e1d-a97de71d31db"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("GetOfferingsList"), a = r.callContext(a);
                        var u = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            n = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.GenericTypeCache.getGenericList(D))));
                        f.value.jSONOut = e.JSONUtils.serializeToJSON(t.variables.offeringsListVar, !1, !1, e.DataTypes.DataTypes.Text), u.value = e.Logger.startActiveSpan("FilterItems", function(_) {
                            _ && (_.setAttribute("code.function", "FilterItems"), _.setAttribute("outsystems.function.key", "9e5d5868-96de-4538-9590-4f860a47a6ce"), _.setAttribute("outsystems.function.owner.name", "uae"), _.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), _.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(j, "FilterItems", "GetOfferingsList", {
                                    offeringsList: e.DataConversion.JSNodeParamConverter.to(f.value.jSONOut, e.DataTypes.DataTypes.Text),
                                    offeringsIconandNameList: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(S) {
                                    var C = new(r.constructor.getVariableGroupType("uae.V2Flow.MT5AccountType.GetOfferingsList$filterItemsJSResult"));
                                    return C.offeringsIconandNameListOut = e.DataConversion.JSNodeParamConverter.from(S.offeringsIconandNameList, e.DataTypes.DataTypes.Text), C
                                }, {}, {})
                            } finally {
                                _ && _.end()
                            }
                        }, 1), n.value.dataOut = e.JSONUtils.deserializeFromJSON(u.value.offeringsIconandNameListOut, e.GenericTypeCache.getGenericList(D), !1), t.variables.offerings_itemsVar = n.value.dataOut
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__getOfferingsList$Action
        }
        set _getOfferingsList$Action(a) {
            this.__getOfferingsList$Action = a
        }
        activateOnClick$Action(a, t) {
            var r = this.controller;
            return e.Logger.startActiveSpan("ActivateOnClick__proxy", function(s) {
                return s && (s.setAttribute("code.function", "ActivateOnClick"), s.setAttribute("outsystems.function.key", "1ccfe968-9cf8-4111-8e21-e4692e43e178"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._activateOnClick$Action, t, a)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        cancelOnClick$Action(a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("CancelOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "CancelOnClick"), r.setAttribute("outsystems.function.key", "2a3f9e1c-53b0-48e5-a59e-bc627505b94e"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._cancelOnClick$Action, a)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        callMT5AccountSpecs$Action(a, t) {
            var r = this.controller;
            return e.Logger.startActiveSpan("CallMT5AccountSpecs__proxy", function(s) {
                return s && (s.setAttribute("code.function", "CallMT5AccountSpecs"), s.setAttribute("outsystems.function.key", "2b17d068-a1e6-4d2a-8d93-0cd6449d6ced"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._callMT5AccountSpecs$Action, t, a)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        retakeAssessmentOnClick$Action(a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("RetakeAssessmentOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "RetakeAssessmentOnClick"), r.setAttribute("outsystems.function.key", "66e3dc50-ec82-4874-9040-6cab68da9e38"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._retakeAssessmentOnClick$Action, a)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        activateOnClickNewFlow$Action(a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("ActivateOnClickNewFlow__proxy", function(r) {
                return r && (r.setAttribute("code.function", "ActivateOnClickNewFlow"), r.setAttribute("outsystems.function.key", "8c04b941-1348-4052-b198-214cfb9e98c2"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._activateOnClickNewFlow$Action, a)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        callOnBoardingStatus$Action(a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("CallOnBoardingStatus__proxy", function(r) {
                return r && (r.setAttribute("code.function", "CallOnBoardingStatus"), r.setAttribute("outsystems.function.key", "b016134f-a4c6-4265-9ab1-db4006815f7c"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._callOnBoardingStatus$Action, a)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onInitialize$Action(a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "b0b7fca6-2e5d-4d37-84c4-5bc57b589000"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, a)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        viewStatusOnClick$Action(a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("ViewStatusOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "ViewStatusOnClick"), r.setAttribute("outsystems.function.key", "d338a72f-77d0-4496-a72b-8c7427850ac0"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._viewStatusOnClick$Action, a)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "ea49749c-8e29-48df-b285-4d2de852bed0"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, a)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        getOfferingsList$Action(a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("GetOfferingsList__proxy", function(r) {
                r && (r.setAttribute("code.function", "GetOfferingsList"), r.setAttribute("outsystems.function.key", "f042a5c8-409d-483e-8e1d-a97de71d31db"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._getOfferingsList$Action, a)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(a) {
                var t = this.controller,
                    r = this.model,
                    s = this.idService;
                return t.onInitialize$Action(a)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(a) {
            this._onInitializeEventHandler = a
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(a) {
                var t = this.controller,
                    r = this.model,
                    s = this.idService;
                return t.onReady$Action(a)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(a) {
            this._onReadyEventHandler = a
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(a) {
            this._onRenderEventHandler = a
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(a) {
            this._onDestroyEventHandler = a
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(a) {
            this._onParametersChangedEventHandler = a
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(a) {
            this._onSyncStartEventHandler = a
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(a) {
            this._onSyncCompleteEventHandler = a
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(a) {
            this._onSyncErrorEventHandler = a
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(a) {
                return B.default.handleError(a, this.callContext())
            }), this._handleError
        }
        set handleError(a) {
            this._handleError = a
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return A.defaultTimeout
        }
    };
    l(d, "ControllerInner");
    let g = d;
    O = g, O.registerVariableGroupType("uae.V2Flow.MT5AccountType$ActionGetMt5accountspecs", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new R
        }, "defaultValue"),
        complexType: R
    }]), O.registerVariableGroupType("uae.V2Flow.MT5AccountType.ActivateOnClick$vars", [{
        name: "account_type2",
        attrName: "account_type2InLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), O.registerVariableGroupType("uae.V2Flow.MT5AccountType.CallMT5AccountSpecs$vars", [{
        name: "accountType2",
        attrName: "accountType2InLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), O.registerVariableGroupType("uae.V2Flow.MT5AccountType.CallMT5AccountSpecs$formatDisplayNameJSResult", [{
        name: "formatted_display_name",
        attrName: "formatted_display_nameOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), O.registerVariableGroupType("uae.V2Flow.MT5AccountType.OnReady$callCDNMT5SpecificationsJSResult", [{
        name: "account_specification",
        attrName: "account_specificationOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), O.registerVariableGroupType("uae.V2Flow.MT5AccountType.GetOfferingsList$filterItemsJSResult", [{
        name: "offeringsIconandNameList",
        attrName: "offeringsIconandNameListOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var O, K = new e.Controller.ControllerFactory(O, te);
var c = de(fe());
var o = E,
    Z = class Z extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isExecuting", "isExecutingVar", "isExecuting", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("offeringsList", "offeringsListVar", "offeringsList", !0, !1, o.DataTypes.DataTypes.RecordList, function() {
                return o.DataTypes.ImmutableBase.getData(new o.DataTypes.TextList)
            }, !1, o.DataTypes.TextList), this.attr("leverage", "leverageVar", "leverage", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("spreads", "spreadsVar", "spreads", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("display_name", "display_nameVar", "display_name", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("description", "descriptionVar", "description", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("onboardingStatus", "onboardingStatusVar", "onboardingStatus", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new F)
            }, !1, F), this.attr("show_kyc_verification_popup", "show_kyc_verification_popupVar", "show_kyc_verification_popup", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("offerings_items", "offerings_itemsVar", "offerings_items", !0, !1, o.DataTypes.DataTypes.RecordList, function() {
                return o.DataTypes.ImmutableBase.getData(new(o.GenericTypeCache.getGenericList(D)))
            }, !1, o.GenericTypeCache.getGenericList(D)), this.attr("GetKYCResponse", "getKYCResponseVar", "GetKYCResponse", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new I)
            }, !1, I), this.attr("display_name_std", "display_name_stdVar", "display_name_std", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("display_name_swf", "display_name_swfVar", "display_name_swf", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("leverage_std", "leverage_stdVar", "leverage_std", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("leverage_swf", "leverage_swfVar", "leverage_swf", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("spreads_std", "spreads_stdVar", "spreads_std", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("spreads_swf", "spreads_swfVar", "spreads_swf", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("descr_std", "descr_stdVar", "descr_std", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("descr_swf", "descr_swfVar", "descr_swf", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("offeringList_std", "offeringList_stdVar", "offeringList_std", !0, !1, o.DataTypes.DataTypes.RecordList, function() {
                return o.DataTypes.ImmutableBase.getData(new o.DataTypes.TextList)
            }, !1, o.DataTypes.TextList), this.attr("offeringList_swf", "offeringList_swfVar", "offeringList_swf", !0, !1, o.DataTypes.DataTypes.RecordList, function() {
                return o.DataTypes.ImmutableBase.getData(new o.DataTypes.TextList)
            }, !1, o.DataTypes.TextList), this.attr("offering_items_std", "offering_items_stdVar", "offering_items_std", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("offering_items_swf", "offering_items_swfVar", "offering_items_swf", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_from", "is_fromIn", "is_from", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_is_fromInDataFetchStatus", "_is_fromInDataFetchStatus", "_is_fromInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("account_type", "account_typeIn", "account_type", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_account_typeInDataFetchStatus", "_account_typeInDataFetchStatus", "_account_typeInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("is_demo", "is_demoIn", "is_demo", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_demoInDataFetchStatus", "_is_demoInDataFetchStatus", "_is_demoInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("show_activate_action", "show_activate_actionIn", "show_activate_action", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_show_activate_actionInDataFetchStatus", "_show_activate_actionInDataFetchStatus", "_show_activate_actionInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(Z, "VariablesRecord");
var P = Z;
P.init();
var Q = class Q extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(Q, "WidgetsRecord");
var Y = Q,
    x = class x extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return Y
        }
        static get hasValidationWidgets() {
            return x._hasValidationWidgetsValue === void 0 && (x._hasValidationWidgetsValue = void 0), x._hasValidationWidgetsValue
        }
        setInputs(d) {
            "is_from" in d && (this.variables.is_fromIn = o.DataConversion.ServerDataConverter.from(d.is_from, o.DataTypes.DataTypes.Text)), "account_type" in d && (this.variables.account_typeIn = o.DataConversion.ServerDataConverter.from(d.account_type, o.DataTypes.DataTypes.Text)), "is_demo" in d && (this.variables.is_demoIn = o.DataConversion.ServerDataConverter.from(d.is_demo, o.DataTypes.DataTypes.Boolean)), "show_activate_action" in d && (this.variables.show_activate_actionIn = o.DataConversion.ServerDataConverter.from(d.show_activate_action, o.DataTypes.DataTypes.Boolean))
        }
    };
l(x, "Model");
var V = x;
V._hasValidationWidgetsValue = void 0;
var q = new o.Model.ModelFactory(V);
var ue = M.PlaceholderContent,
    Ye = M.IteratorPlaceholderContent,
    ve = l(function() {
        var g = ae(function(d) {
            var y = d.model,
                a = d.controller,
                t = d.controller.idService,
                r = a.validationService,
                s = a.callContext(),
                i = se,
                u = L,
                f = {
                    props: d,
                    validateWidget: l(function(w) {
                        d.validateWidget(d, w)
                    }, "validateWidget")
                },
                n = y,
                _ = ne,
                S = ie,
                C = re();
            return c.createElement("div", d.rootNodeProperties, c.createElement(W, {
                getOwnerSpan: l(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Progress: 66,
                    Heading: "Select a trading account"
                },
                events: {
                    _handleError: l(function(w) {
                        a.handleError(w)
                    }, "_handleError")
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
                    content: new ue(function() {
                        return [c.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: flex-start; align-self: stretch; display: flex; flex-direction: row; gap: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "1"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "mt5-card",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "2"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(G, {
                            image: N.VersionedURL.getVersionedUrl("img/uae.mt5std.png"),
                            type: 0,
                            _idProps: {
                                service: t,
                                uuid: "3"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: 700;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            value: y.variables.display_name_stdVar,
                            _idProps: {
                                service: t,
                                uuid: "4"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            value: y.variables.descr_stdVar,
                            _idProps: {
                                service: t,
                                uuid: "5"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "gap: 8px;"
                            },
                            style: "display-flex flex-direction-column align-items-flex-start align-self-stretch",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "6"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "display-flex justify-content-space-between align-items-center align-self-stretch",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "7"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; border-radius: 8px; flex-direction: column; justify-content: center; padding: 0 8px;"
                            },
                            style: "display-flex",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "8"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(p, {
                            extendedProperties: {
                                style: "font-weight: 800;"
                            },
                            value: "1: " + y.variables.leverage_stdVar,
                            _idProps: {
                                service: t,
                                uuid: "9"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); font-weight: 400; text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "100%"
                            },
                            value: "Max leverage",
                            _idProps: {
                                service: t,
                                uuid: "10"
                            },
                            _widgetRecordProvider: n
                        })), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; border-radius: 8px; flex-direction: column; justify-content: center; padding: 0 8px;"
                            },
                            style: "display-flex",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "11"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(p, {
                            extendedProperties: {
                                style: "font-weight: 800;"
                            },
                            value: y.variables.spreads_stdVar + " pips",
                            _idProps: {
                                service: t,
                                uuid: "12"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); font-weight: 400; text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "100%"
                            },
                            value: "Min. spread",
                            _idProps: {
                                service: t,
                                uuid: "13"
                            },
                            _widgetRecordProvider: n
                        }))), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "display-flex justify-content-space-between align-items-center align-self-stretch",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "14"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; border-radius: 8px; flex-direction: column; justify-content: center; padding: 0 8px;"
                            },
                            style: "display-flex",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "15"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(p, {
                            extendedProperties: {
                                style: "font-weight: 800;"
                            },
                            value: "No",
                            _idProps: {
                                service: t,
                                uuid: "16"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); font-weight: 400; text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "100%"
                            },
                            value: "Commission",
                            _idProps: {
                                service: t,
                                uuid: "17"
                            },
                            _widgetRecordProvider: n
                        })), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; border-radius: 8px; flex-direction: column; justify-content: center; padding: 0 8px;"
                            },
                            style: "display-flex",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "18"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(p, {
                            extendedProperties: {
                                style: "font-weight: 800;"
                            },
                            value: "No",
                            _idProps: {
                                service: t,
                                uuid: "19"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); font-weight: 400; text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "100%"
                            },
                            value: "Min. deposit",
                            _idProps: {
                                service: t,
                                uuid: "20"
                            },
                            _widgetRecordProvider: n
                        })))), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column align-content-flex-start align-self-stretch",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "21"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(p, {
                            extendedProperties: {
                                style: "align-items: center; color: var(--component-textIcon-normal-default, rgba(0, 0, 0, 0.72)); font-weight: 400;"
                            },
                            style: "text-align-center",
                            value: "Markets",
                            _idProps: {
                                service: t,
                                uuid: "22"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            value: y.variables.offering_items_stdVar,
                            _idProps: {
                                service: t,
                                uuid: "23"
                            },
                            _widgetRecordProvider: n
                        })), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "w-full",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "ActivateButtonSTD"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement($, {
                            enabled: !0,
                            extendedProperties: {
                                style: "align-items: center; background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: 48px;"
                            },
                            isDefault: !1,
                            onClick: l(function() {
                                return Promise.resolve().then(function() {
                                    var w = typeof s != "undefined" && s !== null ? s.clone() : a.callContext().clone();
                                    return a.activateOnClick$Action("standard", a.callContext(w))
                                })
                            }, "onClick"),
                            style: "btn btn-primary w-full",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "25"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(H, {
                            style: "btn-primary",
                            text: ["Activate"],
                            _idProps: {
                                service: t,
                                uuid: "26"
                            },
                            _widgetRecordProvider: n
                        })))), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "mt5-card",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "27"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(G, {
                            image: N.VersionedURL.getVersionedUrl("img/uae.mt5swp.png"),
                            type: 0,
                            _idProps: {
                                service: t,
                                uuid: "28"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: 700;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            value: y.variables.display_name_swfVar,
                            _idProps: {
                                service: t,
                                uuid: "29"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            value: y.variables.descr_swfVar,
                            _idProps: {
                                service: t,
                                uuid: "30"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "gap: 8px;"
                            },
                            style: "display-flex flex-direction-column align-items-flex-start align-self-stretch",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "31"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "display-flex justify-content-space-between align-items-center align-self-stretch",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "32"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; border-radius: 8px; flex-direction: column; justify-content: center; padding: 0 8px;"
                            },
                            style: "display-flex",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "33"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(p, {
                            extendedProperties: {
                                style: "font-weight: 800;"
                            },
                            value: "1: " + y.variables.leverage_swfVar,
                            _idProps: {
                                service: t,
                                uuid: "34"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); font-weight: 400; text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "100%"
                            },
                            value: "Max leverage",
                            _idProps: {
                                service: t,
                                uuid: "35"
                            },
                            _widgetRecordProvider: n
                        })), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; border-radius: 8px; flex-direction: column; justify-content: center; padding: 0 8px;"
                            },
                            style: "display-flex",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "36"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(p, {
                            extendedProperties: {
                                style: "font-weight: 800;"
                            },
                            value: y.variables.spreads_swfVar,
                            _idProps: {
                                service: t,
                                uuid: "37"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); font-weight: 400; text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "100%"
                            },
                            value: "Min. spread",
                            _idProps: {
                                service: t,
                                uuid: "38"
                            },
                            _widgetRecordProvider: n
                        }))), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "display-flex justify-content-space-between align-items-center align-self-stretch",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "39"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; border-radius: 8px; flex-direction: column; justify-content: center; padding: 0 8px;"
                            },
                            style: "display-flex",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "40"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(p, {
                            extendedProperties: {
                                style: "font-weight: 800;"
                            },
                            value: "No",
                            _idProps: {
                                service: t,
                                uuid: "41"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); font-weight: 400; text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "100%"
                            },
                            value: "Commission",
                            _idProps: {
                                service: t,
                                uuid: "42"
                            },
                            _widgetRecordProvider: n
                        })), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; border-radius: 8px; flex-direction: column; justify-content: center; padding: 0 8px;"
                            },
                            style: "display-flex",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "43"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(p, {
                            extendedProperties: {
                                style: "font-weight: 800;"
                            },
                            value: "No",
                            _idProps: {
                                service: t,
                                uuid: "44"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); font-weight: 400; text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "100%"
                            },
                            value: "Min. deposit",
                            _idProps: {
                                service: t,
                                uuid: "45"
                            },
                            _widgetRecordProvider: n
                        })))), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column align-content-flex-start align-self-stretch",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "46"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(p, {
                            extendedProperties: {
                                style: "align-items: center; color: var(--component-textIcon-normal-default, rgba(0, 0, 0, 0.72)); font-weight: 400;"
                            },
                            style: "text-align-center",
                            value: "Markets",
                            _idProps: {
                                service: t,
                                uuid: "47"
                            },
                            _widgetRecordProvider: n
                        }), c.createElement(p, {
                            extendedProperties: {
                                style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            value: y.variables.offering_items_swfVar,
                            _idProps: {
                                service: t,
                                uuid: "48"
                            },
                            _widgetRecordProvider: n
                        })), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "w-full",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "ActivateButtonSWF"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement($, {
                            enabled: !0,
                            extendedProperties: {
                                style: "align-items: center; background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: 48px;"
                            },
                            isDefault: !1,
                            onClick: l(function() {
                                return Promise.resolve().then(function() {
                                    var w = typeof s != "undefined" && s !== null ? s.clone() : a.callContext().clone();
                                    return a.activateOnClick$Action("swap-free", a.callContext(w))
                                })
                            }, "onClick"),
                            style: "btn btn-primary w-full",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "50"
                            },
                            _widgetRecordProvider: n
                        }, c.createElement(H, {
                            style: "btn-primary",
                            text: ["Activate"],
                            _idProps: {
                                service: t,
                                uuid: "51"
                            },
                            _widgetRecordProvider: n
                        })))))]
                    }),
                    buttonContainer: ue.Empty
                },
                _dependencies: [i(y.variables.offering_items_swfVar), i(y.variables.spreads_swfVar), i(y.variables.leverage_swfVar), i(y.variables.descr_swfVar), i(y.variables.display_name_swfVar), i(y.variables.offering_items_stdVar), i(y.variables.spreads_stdVar), i(y.variables.leverage_stdVar), i(y.variables.descr_stdVar), i(y.variables.display_name_stdVar)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: l(function() {
                return {
                    codeFunction: "MT5AccountType",
                    functionKey: "f66a44be-ffd6-41a4-b866-15287396a7c7",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Flow.MT5AccountType",
            modelFactory: q,
            controllerFactory: K,
            getTitle: l(function() {
                return L("vkRq9tb_pEG4ZhUoc5anxw#Title", "MT5AccountType")
            }, "getTitle")
        });
        return g.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.V2Flow.MT5AccountType.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [W]
        }, g
    }, "componentFactory"),
    pe = ve();
export {
    K as controllerModule, q as modelModule, pe as viewModule, B as webFlowControllerModule
};