import {
    a as M
} from "./_oschunk-ICR7HB42.js";
import {
    a as I
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as H
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as C,
    f as _,
    h as L,
    n as N,
    p as F,
    u as A
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ue,
    g as V,
    m as ie,
    n as re,
    q as ne,
    r as ae,
    s as $,
    t as D
} from "./_oschunk-4VHUVDBV.js";
import {
    a as te
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as ee,
    Sb as v,
    V as O,
    na as q,
    r as k,
    sb as W,
    ub as f
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as w,
    c,
    e as ce,
    m as X,
    n as Z,
    p as x
} from "./_oschunk-M5BUVJ72.js";
var de = {
        "35C6LTPaRkCBiDJuI1vKMQ#Value": "\u0631\u0628\u0645\u0627 \u0644\u0627\u062D\u0642\u0627\u064B",
        "rbHsQ9DB6EiBi_HkliaoZw#Value": "\u0625\u064A\u062F\u0627\u0639",
        "5yvbQeEYAkiEfB+PpEKJpw#Value": "\u0642\u0645 \u0628\u0625\u064A\u062F\u0627\u0639 \u0627\u0644\u0623\u0645\u0648\u0627\u0644 \u0627\u0644\u0622\u0646.",
        "Xi9Yc4pU70+PMtN9RWda_g#Value": "\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0645\u062D\u0641\u0638\u0629",
        "9g04_ULB2EmDBcIVwXveIw#Value": "\u0631\u0628\u0645\u0627 \u0644\u0627\u062D\u0642\u0627\u064B",
        "QLFVJMpvIU6TYr_brIgoQA#Value": "\u0625\u064A\u062F\u0627\u0639",
        "WiBBl3PSXU6924+5FjY2Mg#Value": "\u0642\u0645 \u0628\u0625\u064A\u062F\u0627\u0639 \u0627\u0644\u0623\u0645\u0648\u0627\u0644 \u0627\u0644\u0622\u0646.",
        "RUxSCTRhy0u9Eo8aPPjETA#Value": "\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0645\u062D\u0641\u0638\u0629",
        "0vdHtffmzEuySajHxVD0Fw#Title": "\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0640 Wallet | Deriv",
        "0vdHtffmzEuySajHxVD0Fw#TitleExpression.-1812546396.1": "\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0640 Wallet | Deriv"
    },
    oe = {
        "ar-001": {
            translations: de,
            isRTL: !0
        }
    };

function B(g, d, p, e) {
    var i = [];
    try {
        i = JSON.parse(localStorage.getItem("$OS_Users$uae$ClientVars$wallet_list_1")) || []
    } catch (s) {
        i = []
    }
    var t = !1;
    i.length > 0 && i[0].wallet_type !== null && (t = !0), g.IsWalletTypeValid = t
}
c(B, "default");

function J(g, d, p) {
    g.CallSendEmail()
}
c(J, "default");

function U(g, d, p) {
    g.walletListing()
}
c(U, "default");
var r = w; {
    let d = class d extends r.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, oe);
            var s = this.controller;
            this.clientActionProxies = {
                callSendEmail$Action: c(function() {
                    return s.executeActionInsideJSNode(s._callSendEmail$Action.bind(s), s.callContext(), function(n) {
                        return {}
                    }, function() {}, "CallSendEmail")
                }, "callSendEmail$Action"),
                walletListing$Action: c(function() {
                    return s.executeActionInsideJSNode(s._walletListing$Action.bind(s), s.callContext(), function(n) {
                        return {}
                    }, function() {}, "walletListing")
                }, "walletListing$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postWalletemail$ServerAction() {
            return this.hasOwnProperty("_postWalletemail$ServerAction") || (this._postWalletemail$ServerAction = function(e, i, t) {
                var s = this.controller;
                return r.Logger.startActiveSpan("PostWalletemail", function(n) {
                    return n && (n.setAttribute("code.function", "PostWalletemail"), n.setAttribute("outsystems.function.key", "773a0fd0-03d5-462f-9e19-1b5c48385158"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var l = {
                            Authorization: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text),
                            Request: r.DataConversion.ServerDataConverter.to(i, r.DataTypes.DataTypes.Record)
                        };
                        return s.callServerAction("PostWalletemail", "screenservices/uae/MainFlow/WalletActivatedSuccessScreen/ActionPostWalletemail", "5TM2CZkUWv7SoSh5CYvuQw", l, s.callContext(t), void 0, void 0, !0).then(function(u) {
                            var a = new(s.constructor.getVariableGroupType("uae.MainFlow.WalletActivatedSuccessScreen$ActionPostWalletemail"));
                            return a.responseOut = r.DataConversion.ServerDataConverter.from(u.Response, O), a
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._postWalletemail$ServerAction
        }
        set postWalletemail$ServerAction(e) {
            this._postWalletemail$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _checkWallet$Action() {
            return this.hasOwnProperty("__checkWallet$Action") || (this.__checkWallet$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("CheckWallet", function(n) {
                    n && (n.setAttribute("code.function", "CheckWallet"), n.setAttribute("outsystems.function.key", "2872e4c1-7a29-433e-8a2b-508458196100"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CheckWallet"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder;
                        l.value = r.Logger.startActiveSpan("JavaScript1", function(u) {
                            u && (u.setAttribute("code.function", "JavaScript1"), u.setAttribute("outsystems.function.key", "8564c9ca-ecc4-4435-801d-28ebe32d6e70"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(B, "JavaScript1", "CheckWallet", {
                                    IsWalletTypeValid: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean)
                                }, function(a) {
                                    var h = new(t.constructor.getVariableGroupType("uae.MainFlow.WalletActivatedSuccessScreen.CheckWallet$javaScript1JSResult"));
                                    return h.isWalletTypeValidOut = r.DataConversion.JSNodeParamConverter.from(a.IsWalletTypeValid, r.DataTypes.DataTypes.Boolean), h
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), i.variables.isWalletValidVar = l.value.isWalletTypeValidOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__checkWallet$Action
        }
        set _checkWallet$Action(e) {
            this.__checkWallet$Action = e
        }
        get _actionButton2OnClick$Action() {
            return this.hasOwnProperty("__actionButton2OnClick$Action") || (this.__actionButton2OnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("ActionButton2OnClick", function(n) {
                    n && (n.setAttribute("code.function", "ActionButton2OnClick"), n.setAttribute("outsystems.function.key", "55e0685b-e593-4af7-b89f-0e28730c241f"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("ActionButton2OnClick"), e = t.callContext(e), r.Logger.startActiveSpan("JavaScript1", function(l) {
                            l && (l.setAttribute("code.function", "JavaScript1"), l.setAttribute("outsystems.function.key", "3f96cc83-c65a-407f-9d83-d337e2e17898"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(J, "JavaScript1", "ActionButton2OnClick", null, function(u) {}, {
                                    CallSendEmail: t.clientActionProxies.callSendEmail$Action
                                }, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1), v.getFeatureFlag$Action("Tracking", e).shouldEnableOut && (i.variables.isWalletValidVar ? v.rudderstackTrackEvent$Action("ce_wallet_authentication_ae_form", "step_passed", "Maybe later", "wallet_activated_page", "", "", f.getlanguage(), e) : v.rudderstackTrackEvent$Action("ce_wallet_authentication_ae_form", "step_passed", "Maybe later", "wallet_activated_page", "manual_url", "", f.getlanguage(), e)), r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "home", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__actionButton2OnClick$Action
        }
        set _actionButton2OnClick$Action(e) {
            this.__actionButton2OnClick$Action = e
        }
        get _nextOnClick$Action() {
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("NextOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "NextOnClick"), n.setAttribute("outsystems.function.key", "6490c947-13c1-4def-9f51-c112cbdd557a"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("NextOnClick"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder,
                            u = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(W)));
                        return r.Flow.executeAsyncFlow(function() {
                            return f.setkyc_flow_from("home"), i.variables.onboardingStatusVar = f.getonboardingAPIResponse(), u.value.dataOut = r.JSONUtils.deserializeFromJSON(i.variables.onboardingStatusVar, W, !1), r.Flow.executeSequence(function() {
                                return u.value.dataOut.dataAttr.getCurrent(e.iterationContext).kycAttr.main_statusAttr === "verified" ? (v.getFeatureFlag$Action("Tracking", e).shouldEnableOut && (i.variables.isWalletValidVar ? v.rudderstackTrackEvent$Action("ce_wallet_authorisation_ae_form", "step_passed", "Deposit", "wallet_activated_page", "", "", f.getlanguage(), e) : v.rudderstackTrackEvent$Action("ce_wallet_authorisation_ae_form", "step_passed", "Deposit", "wallet_activated_page", "manual_url", "", f.getlanguage(), e)), i.flush(), v.getWalletListCache$Action(e).then(function(a) {
                                    l.value = a
                                }).then(function() {
                                    return r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "deposit", {
                                        wallet_id: r.DataConversion.ServerDataConverter.to(r.BuiltinFunctions.longIntegerToText(l.value.wallet_listOut.getCurrent(e.iterationContext).idAttr), r.DataTypes.DataTypes.Text)
                                    }), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0))
                                })) : u.value.dataOut.dataAttr.getCurrent(e.iterationContext).kycAttr.main_statusAttr === "unverified" && u.value.dataOut.dataAttr.getCurrent(e.iterationContext).kycAttr.poa_statusAttr === "unverified" && u.value.dataOut.dataAttr.getCurrent(e.iterationContext).kycAttr.poi_statusAttr === "verified" ? (v.getFeatureFlag$Action("Tracking", e).shouldEnableOut && (i.variables.isWalletValidVar ? v.rudderstackTrackEvent$Action("ce_wallet_authentication_ae_form", "step_passed", "Deposit_poa", "wallet_activated_page", "", "", f.getlanguage(), e) : v.rudderstackTrackEvent$Action("ce_wallet_authentication_ae_form", "step_passed", "Deposit_poa", "wallet_activated_page", "manual_url", "", f.getlanguage(), e)), r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "verify-poa", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0))) : (v.getFeatureFlag$Action("Tracking", e).shouldEnableOut && (i.variables.isWalletValidVar ? v.rudderstackTrackEvent$Action("ce_wallet_authentication_ae_form", "step_passed", "Deposit_poi", "wallet_activated_page", "", "", f.getlanguage(), e) : v.rudderstackTrackEvent$Action("ce_wallet_authentication_ae_form", "step_passed", "Deposit_poi", "wallet_activated_page", "manual_url", "", f.getlanguage(), e)), f.getenableUAEPass() ? r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "get-verified", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)) : r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "verify-your-identity", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(e) {
            this.__nextOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "6f94bd30-76d2-442d-ae54-41c8e4a1a8ff"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), r.Logger.startActiveSpan("JavaScript1", function(l) {
                            l && (l.setAttribute("code.function", "JavaScript1"), l.setAttribute("outsystems.function.key", "54e49f14-9ecd-4112-986e-0d656cff0edf"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(U, "JavaScript1", "OnReady", null, function(u) {}, {
                                    walletListing: t.clientActionProxies.walletListing$Action
                                }, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1), v.getFeatureFlag$Action("Tracking", e).shouldEnableOut && (t._checkWallet$Action(e), i.variables.isWalletValidVar ? v.rudderstackTrackEvent$Action("ce_wallet_authorisation_ae_form", "open", "wallet_activated", "wallet_activated_page", "", "", f.getlanguage(), e) : v.rudderstackTrackEvent$Action("ce_wallet_authorisation_ae_form", "open", "wallet_activated_false", "wallet_activated_page", "", "", f.getlanguage(), e))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _walletListing$Action() {
            return this.hasOwnProperty("__walletListing$Action") || (this.__walletListing$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("walletListing", function(n) {
                    return n && (n.setAttribute("code.function", "walletListing"), n.setAttribute("outsystems.function.key", "c7224db6-3d0c-4b76-8980-c4a780378108"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("walletListing"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return i.flush(), v.getWalletListCache$Action(e).then(function(u) {
                                l.value = u
                            }).then(function() {
                                i.variables.wallet_listVar = l.value.wallet_listOut
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__walletListing$Action
        }
        set _walletListing$Action(e) {
            this.__walletListing$Action = e
        }
        get _callSendEmail$Action() {
            return this.hasOwnProperty("__callSendEmail$Action") || (this.__callSendEmail$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("CallSendEmail", function(n) {
                    return n && (n.setAttribute("code.function", "CallSendEmail"), n.setAttribute("outsystems.function.key", "ed3a8455-7716-4a88-84ae-345f10a120ee"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("CallSendEmail"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder,
                            u = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return u.value = v.getAuth$Action(e), i.flush(), t.postWalletemail$ServerAction(u.value.tokenOut, (function() {
                                var a = new q;
                                return a.currencyAttr = f.getcurrency(), a
                            })(), e).then(function(a) {
                                l.value = a
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__callSendEmail$Action
        }
        set _callSendEmail$Action(e) {
            this.__callSendEmail$Action = e
        }
        checkWallet$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("CheckWallet__proxy", function(t) {
                t && (t.setAttribute("code.function", "CheckWallet"), t.setAttribute("outsystems.function.key", "2872e4c1-7a29-433e-8a2b-508458196100"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._checkWallet$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        actionButton2OnClick$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("ActionButton2OnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "ActionButton2OnClick"), t.setAttribute("outsystems.function.key", "55e0685b-e593-4af7-b89f-0e28730c241f"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._actionButton2OnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        nextOnClick$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("NextOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "NextOnClick"), t.setAttribute("outsystems.function.key", "6490c947-13c1-4def-9f51-c112cbdd557a"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._nextOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "6f94bd30-76d2-442d-ae54-41c8e4a1a8ff"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        walletListing$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("walletListing__proxy", function(t) {
                return t && (t.setAttribute("code.function", "walletListing"), t.setAttribute("outsystems.function.key", "c7224db6-3d0c-4b76-8980-c4a780378108"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._walletListing$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        callSendEmail$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("CallSendEmail__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CallSendEmail"), t.setAttribute("outsystems.function.key", "ed3a8455-7716-4a88-84ae-345f10a120ee"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._callSendEmail$Action, e)
                }, function() {
                    t && t.end()
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
                var i = this.controller,
                    t = this.model,
                    s = this.idService;
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
                return M.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return v.defaultTimeout
        }
    };
    c(d, "ControllerInner");
    let g = d;
    P = g, P.registerVariableGroupType("uae.MainFlow.WalletActivatedSuccessScreen$ActionPostWalletemail", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: c(function() {
            return new O
        }, "defaultValue"),
        complexType: O
    }]), P.registerVariableGroupType("uae.MainFlow.WalletActivatedSuccessScreen.CheckWallet$javaScript1JSResult", [{
        name: "IsWalletTypeValid",
        attrName: "isWalletTypeValidOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }])
}
var P, z = new r.Controller.ControllerFactory(P, te);
var o = ce(ue());
var m = w,
    Q = class Q extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("OnboardingStatus", "onboardingStatusVar", "OnboardingStatus", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("wallet_list", "wallet_listVar", "wallet_list", !0, !1, m.DataTypes.DataTypes.RecordList, function() {
                return m.DataTypes.ImmutableBase.getData(new(m.GenericTypeCache.getGenericList(k)))
            }, !1, m.GenericTypeCache.getGenericList(k)), this.attr("IsWalletValid", "isWalletValidVar", "IsWalletValid", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(Q, "VariablesRecord");
var R = Q;
R.init();
var Y = class Y extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(Y, "WidgetsRecord");
var j = Y,
    b = class b extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return R
        }
        static getWidgetsRecordConstructor() {
            return j
        }
        static get hasValidationWidgets() {
            return b._hasValidationWidgetsValue === void 0 && (b._hasValidationWidgetsValue = void 0 || void 0), b._hasValidationWidgetsValue
        }
        setInputs(d) {}
    };
c(b, "Model");
var T = b;
T._hasValidationWidgetsValue = void 0;
var G = new m.Model.ModelFactory(T);
var K = V.PlaceholderContent,
    Ke = V.IteratorPlaceholderContent,
    ve = c(function() {
        var g = re(function(d) {
            var p = d.model,
                e = d.controller,
                i = d.controller.idService,
                t = e.validationService,
                s = e.callContext(),
                n = $,
                l = D,
                u = {
                    props: d,
                    validateWidget: c(function(y) {
                        d.validateWidget(d, y)
                    }, "validateWidget")
                },
                a = p,
                h = ae,
                S = ne,
                E = ie();
            return o.createElement("div", d.rootNodeProperties, h(p.variables.isLoadingVar, !1, this, function() {
                return [o.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-center",
                    visible: !0,
                    _idProps: {
                        service: i,
                        uuid: "0"
                    },
                    _widgetRecordProvider: a
                }, o.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "skeleton-loader",
                    visible: !0,
                    _idProps: {
                        service: i,
                        uuid: "1"
                    },
                    _widgetRecordProvider: a
                }, o.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "icon-placeholder",
                    visible: !0,
                    _idProps: {
                        service: i,
                        name: "Icon"
                    },
                    _widgetRecordProvider: a
                }), o.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "title-placeholder",
                    visible: !0,
                    _idProps: {
                        service: i,
                        name: "Title"
                    },
                    _widgetRecordProvider: a
                }), o.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "subtitle-placeholder",
                    visible: !0,
                    _idProps: {
                        service: i,
                        name: "Subtitle"
                    },
                    _widgetRecordProvider: a
                }), o.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "button-placeholder deposit-button",
                    visible: !0,
                    _idProps: {
                        service: i,
                        uuid: "5"
                    },
                    _widgetRecordProvider: a
                }), o.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "button-placeholder maybe-later-button",
                    visible: !0,
                    _idProps: {
                        service: i,
                        uuid: "6"
                    },
                    _widgetRecordProvider: a
                })))]
            }, function() {
                return [h(ee.isDesktop$Action(s).isDesktopOut, !1, this, function() {
                    return [o.createElement(H, {
                        getOwnerSpan: c(function() {
                            return E.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: c(function() {
                            return E.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {},
                        events: {
                            _handleError: c(function(y) {
                                e.handleError(y)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: t
                        },
                        _idProps: {
                            service: i,
                            uuid: "7",
                            alias: "1"
                        },
                        _widgetRecordProvider: a,
                        placeholders: {
                            contentbody: new K(function() {
                                return [o.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex flex-direction-column justify-content-center row-gap-m",
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        uuid: "8"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    style: "justify-content-center display-flex",
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        name: "SuccessImage2"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(N, {
                                    image: x.VersionedURL.getVersionedUrl("img/uae.ic_success_tick.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: i,
                                        uuid: "10"
                                    },
                                    _widgetRecordProvider: a
                                })), o.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex flex-direction-column row-gap-base",
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(F, {
                                    extendedProperties: {
                                        style: "color: #00080A; font-size: 24px; font-weight: 900;"
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    style: "display-flex justify-content-center",
                                    _idProps: {
                                        service: i,
                                        uuid: "12"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(L, {
                                    value: f.getcurrency(),
                                    _idProps: {
                                        service: i,
                                        uuid: "13"
                                    },
                                    _widgetRecordProvider: a
                                }), o.createElement(A, {
                                    extendedProperties: {
                                        style: "margin-left: 5px;"
                                    },
                                    text: [S(l("RUxSCTRhy0u9Eo8aPPjETA#Value", "Wallet is activated"))],
                                    _idProps: {
                                        service: i,
                                        uuid: "14"
                                    },
                                    _widgetRecordProvider: a
                                })), o.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex justify-content-center",
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        uuid: "15"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(A, {
                                    extendedProperties: {
                                        style: "font-size: 16px;"
                                    },
                                    text: [S(l("WiBBl3PSXU6924+5FjY2Mg#Value", "Make a deposit now."))],
                                    _idProps: {
                                        service: i,
                                        uuid: "16"
                                    },
                                    _widgetRecordProvider: a
                                }))), o.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex flex-direction-column row-gap-s",
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        uuid: "17"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(C, {
                                    enabled: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    isDefault: !1,
                                    onClick: c(function() {
                                        return Promise.resolve().then(function() {
                                            var y = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                            return e.nextOnClick$Action(e.callContext(y))
                                        })
                                    }, "onClick"),
                                    style: "btn btn-primary action-button",
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        uuid: "18"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(A, {
                                    extendedProperties: {
                                        style: "font-size: 16px; font-weight: bold;"
                                    },
                                    text: [S(l("QLFVJMpvIU6TYr_brIgoQA#Value", "Deposit"))],
                                    _idProps: {
                                        service: i,
                                        uuid: "19"
                                    },
                                    _widgetRecordProvider: a
                                })), o.createElement(C, {
                                    enabled: !0,
                                    extendedProperties: {
                                        style: "align-items: center; align-self: stretch; border: 1px solid var(--button-color-glacier-blue-secondary-default-border, #00080A); border-radius: 96px; display: flex; gap: 8px; height: 48px; justify-content: center; max-height: 48px; min-height: 48px; padding: 0px 24px;"
                                    },
                                    gridProperties: {
                                        width: "100%"
                                    },
                                    isDefault: !1,
                                    onClick: c(function() {
                                        var y = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                        e.actionButton2OnClick$Action(e.callContext(y))
                                    }, "onClick"),
                                    style: "",
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        uuid: "20"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(A, {
                                    extendedProperties: {
                                        style: "font-size: 16px; font-weight: bold;"
                                    },
                                    style: "",
                                    text: [S(l("9g04_ULB2EmDBcIVwXveIw#Value", "Maybe later"))],
                                    _idProps: {
                                        service: i,
                                        uuid: "21"
                                    },
                                    _widgetRecordProvider: a
                                }))))]
                            })
                        },
                        _dependencies: [n(f.getcurrency())]
                    })]
                }, function() {
                    return [o.createElement(I, {
                        getOwnerSpan: c(function() {
                            return E.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: c(function() {
                            return E.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            hasRighAction: !1,
                            has_back_button: !1,
                            hasActionLeftButton: !1
                        },
                        events: {
                            _handleError: c(function(y) {
                                e.handleError(y)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: t
                        },
                        _idProps: {
                            service: i,
                            uuid: "22",
                            alias: "2"
                        },
                        _widgetRecordProvider: a,
                        placeholders: {
                            content: new K(function() {
                                return [o.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-top: 150px;"
                                    },
                                    style: "flex flex-col align-items-center justify-content-center",
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        uuid: "23"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        name: "SuccessImage3"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(N, {
                                    image: x.VersionedURL.getVersionedUrl("img/uae.ic_success_tick.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: i,
                                        uuid: "25"
                                    },
                                    _widgetRecordProvider: a
                                })), o.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        uuid: "26"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(F, {
                                    extendedProperties: {
                                        style: "color: #00080A; font-size: 24px; font-weight: 900;"
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    _idProps: {
                                        service: i,
                                        uuid: "27"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(L, {
                                    value: f.getcurrency(),
                                    _idProps: {
                                        service: i,
                                        uuid: "28"
                                    },
                                    _widgetRecordProvider: a
                                }), o.createElement(A, {
                                    extendedProperties: {
                                        style: "margin-left: 5px;"
                                    },
                                    text: [S(l("Xi9Yc4pU70+PMtN9RWda_g#Value", "Wallet is activated"))],
                                    _idProps: {
                                        service: i,
                                        uuid: "29"
                                    },
                                    _widgetRecordProvider: a
                                }))), o.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        uuid: "30"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(A, {
                                    extendedProperties: {
                                        style: "font-size: 16px;"
                                    },
                                    text: [S(l("5yvbQeEYAkiEfB+PpEKJpw#Value", "Make a deposit now."))],
                                    _idProps: {
                                        service: i,
                                        uuid: "31"
                                    },
                                    _widgetRecordProvider: a
                                })), o.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    style: "fixed bottom-0 left-0 w-full flex justify-center flex-col",
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        uuid: "32"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background: white; padding: 0px 16px;"
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        name: "ActionButton3"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(C, {
                                    enabled: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    isDefault: !1,
                                    onClick: c(function() {
                                        return Promise.resolve().then(function() {
                                            var y = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                            return e.nextOnClick$Action(e.callContext(y))
                                        })
                                    }, "onClick"),
                                    style: "btn btn-primary action-button",
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        uuid: "34"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(A, {
                                    extendedProperties: {
                                        style: "font-size: 16px; font-weight: bold;"
                                    },
                                    text: [S(l("rbHsQ9DB6EiBi_HkliaoZw#Value", "Deposit"))],
                                    _idProps: {
                                        service: i,
                                        uuid: "35"
                                    },
                                    _widgetRecordProvider: a
                                }))), o.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background: white; padding: 16px;"
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        name: "ActionButton4"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(C, {
                                    enabled: !0,
                                    extendedProperties: {
                                        style: "align-items: center; align-self: stretch; border: 1px solid var(--button-color-glacier-blue-secondary-default-border, #00080A); border-radius: 96px; display: flex; gap: 8px; height: 48px; justify-content: center; max-height: 48px; min-height: 48px; padding: 0px 24px;"
                                    },
                                    gridProperties: {
                                        width: "100%"
                                    },
                                    isDefault: !1,
                                    onClick: c(function() {
                                        var y = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                        e.actionButton2OnClick$Action(e.callContext(y))
                                    }, "onClick"),
                                    style: "",
                                    visible: !0,
                                    _idProps: {
                                        service: i,
                                        uuid: "37"
                                    },
                                    _widgetRecordProvider: a
                                }, o.createElement(A, {
                                    extendedProperties: {
                                        style: "font-size: 16px; font-weight: bold;"
                                    },
                                    style: "",
                                    text: [S(l("35C6LTPaRkCBiDJuI1vKMQ#Value", "Maybe later"))],
                                    _idProps: {
                                        service: i,
                                        uuid: "38"
                                    },
                                    _widgetRecordProvider: a
                                })))))]
                            }),
                            footer: K.Empty
                        },
                        _dependencies: [n(f.getcurrency())]
                    })]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: c(function() {
                return {
                    codeFunction: "WalletActivatedSuccessScreen",
                    functionKey: "b547f7d2-e6f7-4bcc-b249-a8c7c550f417",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "MainFlow.WalletActivatedSuccessScreen",
            modelFactory: G,
            controllerFactory: z,
            getTitle: c(function(d) {
                var p = d.model,
                    e = d.controller,
                    i = d.controller.idService,
                    t = e.validationService,
                    s = e.callContext(),
                    n = $,
                    l = D,
                    u = {
                        props: d,
                        validateWidget: c(function(a) {
                            d.validateWidget(d, a)
                        }, "validateWidget")
                    };
                return X.resolve(Z.TranslationsService).getMessage("0vdHtffmzEuySajHxVD0Fw#TitleExpression.-1812546396.1", "Wallet activated | Deriv")
            }, "getTitle")
        });
        return g.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.MainFlow.WalletActivatedSuccessScreen.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [H, I]
        }, g
    }, "componentFactory"),
    _e = ve();
export {
    z as controllerModule, G as modelModule, _e as viewModule, M as webFlowControllerModule
};