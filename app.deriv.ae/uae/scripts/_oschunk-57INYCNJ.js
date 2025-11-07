import {
    a as se
} from "./_oschunk-J6UGFGPZ.js";
import {
    a as q
} from "./_oschunk-ES37VNGZ.js";
import {
    a as j
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as z
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import {
    a as J
} from "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as E,
    f as c,
    h as p,
    n as T,
    u as x
} from "./_oschunk-VR5BNL2K.js";
import {
    a as oe,
    g as V,
    m as H,
    n as Re,
    o as K,
    q as N,
    r as Y,
    s as F,
    t as W
} from "./_oschunk-4VHUVDBV.js";
import {
    a as L
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as we,
    Sb as I,
    ka as ne,
    ub as A
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as w,
    W as R,
    c as o,
    e as ie,
    m as Oe,
    n as Pe,
    p as m,
    w as D
} from "./_oschunk-M5BUVJ72.js";
var je = {
        "9ObfQemx00iLpFwOqLNzQA#Title": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629 | Deriv",
        "9ObfQemx00iLpFwOqLNzQA#TitleExpression.1272643895.1": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629 | Deriv"
    },
    Ce = {
        "ar-001": {
            translations: je,
            isRTL: !0
        }
    };

function le(f, u, e, a) {
    function t() {
        if (window.Intercom) {
            window.Intercom("show"), f.is_already_loaded = !0;
            return
        }
        f.is_already_loaded = !1
    }
    o(t, "showIntercom")
}
o(le, "default");
var s = R; {
    let u = class u extends s.Controller.BaseViewController {
        constructor(a, t, n) {
            super(a, t, n, Ce);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get _pOIStatusOnClick$Action() {
            return this.hasOwnProperty("__pOIStatusOnClick$Action") || (this.__pOIStatusOnClick$Action = function(a) {
                var t = this.model,
                    n = this.controller,
                    v = this.idService;
                return s.Logger.startActiveSpan("POIStatusOnClick", function(l) {
                    return l && (l.setAttribute("code.function", "POIStatusOnClick"), l.setAttribute("outsystems.function.key", "363d2829-320c-4153-8728-2f19b07c7e6b"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("POIStatusOnClick"), a = n.callContext(a), s.Flow.executeAsyncFlow(function() {
                            return s.Flow.executeSequence(function() {
                                if (!t.variables.shouldShowPOIIn || t.variables.is_loadingVar === !0 || t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "verified" || t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "rejected" || t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending" || t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending_provider" || A.getenableUSkycFlow() && t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "region_blocked") t.variables.shouldShowPOAIn && n._pOAStatusOnClick$Action(a);
                                else return s.Flow.executeSequence(function() {
                                    return t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "rejected" ? n._openLivechat$Action(a) : A.getenableUSkycFlow() && t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "region_blocked" ? s.Flow.returnAsync(s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "kyc-status", {
                                        type: s.DataConversion.ServerDataConverter.to("poi", s.DataTypes.DataTypes.Text)
                                    }), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0)) : t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.has_remaining_attemptsAttr === !0 ? ((A.getkyc_flow_from() === "banner" || A.getkyc_flow_from() === "banner_poi" || A.getkyc_flow_from() === "banner_poa") && A.setkyc_flow_from("banner_poi"), s.Flow.returnAsync(s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "verify-poi", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0))) : s.Flow.returnAsync(s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "verification-limit-reached", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0))
                                })
                            })
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__pOIStatusOnClick$Action
        }
        set _pOIStatusOnClick$Action(a) {
            this.__pOIStatusOnClick$Action = a
        }
        get _openLivechat$Action() {
            return this.hasOwnProperty("__openLivechat$Action") || (this.__openLivechat$Action = function(a) {
                var t = this.model,
                    n = this.controller,
                    v = this.idService;
                return s.Logger.startActiveSpan("OpenLivechat", function(l) {
                    return l && (l.setAttribute("code.function", "OpenLivechat"), l.setAttribute("outsystems.function.key", "49c548db-b0c2-4043-a53d-f1eb6cfec192"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OpenLivechat"), a = n.callContext(a);
                        var O = new s.DataTypes.VariableHolder;
                        return s.Flow.executeAsyncFlow(function() {
                            return O.value = s.Logger.startActiveSpan("ShowIntercom", function(P) {
                                P && (P.setAttribute("code.function", "ShowIntercom"), P.setAttribute("outsystems.function.key", "bcebcc48-6caf-4246-8223-1e6a6b5fbf9e"), P.setAttribute("outsystems.function.owner.name", "uae"), P.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), P.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return n.safeExecuteJSNode(le, "ShowIntercom", "OpenLivechat", {
                                        is_already_loaded: s.DataConversion.JSNodeParamConverter.to(!1, s.DataTypes.DataTypes.Boolean)
                                    }, function(r) {
                                        var _ = new(n.constructor.getVariableGroupType("uae.UserProfileFlow.VerificationStatus.OpenLivechat$showIntercomJSResult"));
                                        return _.is_already_loadedOut = s.DataConversion.JSNodeParamConverter.from(r.is_already_loaded, s.DataTypes.DataTypes.Boolean), _
                                    }, {}, {})
                                } finally {
                                    P && P.end()
                                }
                            }, 1), s.Flow.executeSequence(function() {
                                if (!O.value.is_already_loadedOut) return t.flush(), I.openIntercom$Action(a)
                            })
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__openLivechat$Action
        }
        set _openLivechat$Action(a) {
            this.__openLivechat$Action = a
        }
        get _handleOnClose$Action() {
            return this.hasOwnProperty("__handleOnClose$Action") || (this.__handleOnClose$Action = function(a) {
                var t = this.model,
                    n = this.controller,
                    v = this.idService;
                return s.Logger.startActiveSpan("HandleOnClose", function(l) {
                    l && (l.setAttribute("code.function", "HandleOnClose"), l.setAttribute("outsystems.function.key", "75385102-b1a4-4fc9-9627-abc3ca611415"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("HandleOnClose"), a = n.callContext(a), A.getkyc_flow_from() === "banner" || A.getkyc_flow_from() === "banner_poi" || A.getkyc_flow_from() === "banner_poa" ? s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "Home_V2", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.None), a, !0) : A.getkyc_flow_from() === "wallet" ? s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "wallet", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0) : A.getkyc_flow_from() === "trade" ? s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "mt5/activation", {
                            is_demo: s.DataConversion.ServerDataConverter.to(!1, s.DataTypes.DataTypes.Boolean)
                        }), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0) : A.getkyc_flow_from() === "profile" ? s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "user-profile", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0) : s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "Home_V2", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__handleOnClose$Action
        }
        set _handleOnClose$Action(a) {
            this.__handleOnClose$Action = a
        }
        get _maybeLaterOnClick$Action() {
            return this.hasOwnProperty("__maybeLaterOnClick$Action") || (this.__maybeLaterOnClick$Action = function(a) {
                var t = this.model,
                    n = this.controller,
                    v = this.idService;
                return s.Logger.startActiveSpan("MaybeLaterOnClick", function(l) {
                    l && (l.setAttribute("code.function", "MaybeLaterOnClick"), l.setAttribute("outsystems.function.key", "78abceb4-6d62-41f5-acd4-1d124f6b2767"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("MaybeLaterOnClick"), a = n.callContext(a), s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "Home_V2", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__maybeLaterOnClick$Action
        }
        set _maybeLaterOnClick$Action(a) {
            this.__maybeLaterOnClick$Action = a
        }
        get _onClickCTAButton$Action() {
            return this.hasOwnProperty("__onClickCTAButton$Action") || (this.__onClickCTAButton$Action = function(a) {
                var t = this.model,
                    n = this.controller,
                    v = this.idService;
                return s.Logger.startActiveSpan("onClickCTAButton", function(l) {
                    return l && (l.setAttribute("code.function", "onClickCTAButton"), l.setAttribute("outsystems.function.key", "91119d97-098e-494f-8949-46134f6c19bc"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("onClickCTAButton"), a = n.callContext(a), s.Flow.executeAsyncFlow(function() {
                            return s.Flow.executeSequence(function() {
                                return t.variables.shouldShowLivechatVar ? n._openLivechat$Action(a) : s.Flow.executeSequence(function() {
                                    if (t.variables.shouldShowPOIIn) return n._pOIStatusOnClick$Action(a);
                                    n._pOAStatusOnClick$Action(a)
                                })
                            })
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__onClickCTAButton$Action
        }
        set _onClickCTAButton$Action(a) {
            this.__onClickCTAButton$Action = a
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(a) {
                var t = this.model,
                    n = this.controller,
                    v = this.idService;
                return s.Logger.startActiveSpan("OnReady", function(l) {
                    return l && (l.setAttribute("code.function", "OnReady"), l.setAttribute("outsystems.function.key", "b83f7f90-e875-4d7a-9ec7-8ee6ae663466"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnReady"), a = n.callContext(a);
                        var O = new s.DataTypes.VariableHolder,
                            P = new s.DataTypes.VariableHolder,
                            r = new s.DataTypes.VariableHolder(new s.DataTypes.JSONSerializeOutputType);
                        return s.Flow.executeAsyncFlow(function() {
                            return P.value = I.getAuth$Action(a), t.variables.is_loadingVar = !0, t.flush(), I.getUserKYCStatus$Action(a).then(function(_) {
                                O.value = _
                            }).then(function() {
                                r.value.jSONOut = s.JSONUtils.serializeToJSON(O.value.responseOut, !1, !1), I.consoleLog$Action("hi dd" + r.value.jSONOut, a), I.consoleLog$Action("hi here" + t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr, a), t.variables.kYCResponseVar = O.value.responseOut, t.variables.pOIFailedORRejectedVar = O.value.responseOut.dataAttr.detailsAttr.poiAttr.statusAttr === "failed" || O.value.responseOut.dataAttr.detailsAttr.poiAttr.statusAttr === "rejected", t.variables.pOAFailedORRejectedVar = O.value.responseOut.dataAttr.detailsAttr.poaAttr.statusAttr === "failed" || O.value.responseOut.dataAttr.detailsAttr.poaAttr.statusAttr === "rejected", t.variables.shouldShowLivechatVar = t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "rejected" || t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "rejected" || A.getenableUSkycFlow() && (t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "region_blocked" || t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "region_blocked"), t.variables.hasPOILimitReachedVar = t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr !== "verified" && !t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.has_remaining_attemptsAttr, t.variables.hasPOALimitReachedVar = t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr !== "verified" && !t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.has_remaining_attemptsAttr, t.variables.is_loadingVar = !1
                            })
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(a) {
            this.__onReady$Action = a
        }
        get _setupTradingAccountOnClick$Action() {
            return this.hasOwnProperty("__setupTradingAccountOnClick$Action") || (this.__setupTradingAccountOnClick$Action = function(a) {
                var t = this.model,
                    n = this.controller,
                    v = this.idService;
                return s.Logger.startActiveSpan("SetupTradingAccountOnClick", function(l) {
                    l && (l.setAttribute("code.function", "SetupTradingAccountOnClick"), l.setAttribute("outsystems.function.key", "c2a033a2-7353-44dc-9f6d-79e942796536"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("SetupTradingAccountOnClick"), a = n.callContext(a), s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "CurrencySelectionV2", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__setupTradingAccountOnClick$Action
        }
        set _setupTradingAccountOnClick$Action(a) {
            this.__setupTradingAccountOnClick$Action = a
        }
        get _pOAStatusOnClick$Action() {
            return this.hasOwnProperty("__pOAStatusOnClick$Action") || (this.__pOAStatusOnClick$Action = function(a) {
                var t = this.model,
                    n = this.controller,
                    v = this.idService;
                return s.Logger.startActiveSpan("POAStatusOnClick", function(l) {
                    l && (l.setAttribute("code.function", "POAStatusOnClick"), l.setAttribute("outsystems.function.key", "e87b07c0-e8be-40b5-b9b5-99013c0dfe23"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (n.ensureControllerAlive("POAStatusOnClick"), a = n.callContext(a), !(t.variables.is_loadingVar === !0 || t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "verified")) return t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "rejected" ? s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "verification-paused", {
                            blocked_by: s.DataConversion.ServerDataConverter.to("poa", s.DataTypes.DataTypes.Text),
                            type: s.DataConversion.ServerDataConverter.to("poa", s.DataTypes.DataTypes.Text)
                        }), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0) : t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "rejected" || A.getenableUSkycFlow() && t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "region_blocked" ? s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "verification-paused", {
                            type: s.DataConversion.ServerDataConverter.to("poa", s.DataTypes.DataTypes.Text),
                            blocked_by: s.DataConversion.ServerDataConverter.to("poi", s.DataTypes.DataTypes.Text)
                        }), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0) : A.getenableUSkycFlow() && t.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "region_blocked" ? s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "kyc-status", {
                            type: s.DataConversion.ServerDataConverter.to("poa", s.DataTypes.DataTypes.Text)
                        }), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0) : t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "rejected" || t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending" || t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending_provider" || t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "failed" || t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "verified" ? s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "kyc-status", {
                            type: s.DataConversion.ServerDataConverter.to("poa", s.DataTypes.DataTypes.Text)
                        }), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0) : t.variables.kYCResponseVar.dataAttr.detailsAttr.hasMoreAttemptsAttr === !0 && A.getupdateKYCFlow() || t.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.has_remaining_attemptsAttr === !0 ? ((A.getkyc_flow_from() === "banner" || A.getkyc_flow_from() === "banner_poi" || A.getkyc_flow_from() === "banner_poa") && A.setkyc_flow_from("banner_poa"), s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "verify-poa", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0)) : s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "verification-limit-reached", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), a, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__pOAStatusOnClick$Action
        }
        set _pOAStatusOnClick$Action(a) {
            this.__pOAStatusOnClick$Action = a
        }
        pOIStatusOnClick$Action(a) {
            var t = this.controller;
            return s.Logger.startActiveSpan("POIStatusOnClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "POIStatusOnClick"), n.setAttribute("outsystems.function.key", "363d2829-320c-4153-8728-2f19b07c7e6b"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._pOIStatusOnClick$Action, a)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        openLivechat$Action(a) {
            var t = this.controller;
            return s.Logger.startActiveSpan("OpenLivechat__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OpenLivechat"), n.setAttribute("outsystems.function.key", "49c548db-b0c2-4043-a53d-f1eb6cfec192"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._openLivechat$Action, a)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        handleOnClose$Action(a) {
            var t = this.controller;
            return s.Logger.startActiveSpan("HandleOnClose__proxy", function(n) {
                n && (n.setAttribute("code.function", "HandleOnClose"), n.setAttribute("outsystems.function.key", "75385102-b1a4-4fc9-9627-abc3ca611415"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._handleOnClose$Action, a)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        maybeLaterOnClick$Action(a) {
            var t = this.controller;
            return s.Logger.startActiveSpan("MaybeLaterOnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "MaybeLaterOnClick"), n.setAttribute("outsystems.function.key", "78abceb4-6d62-41f5-acd4-1d124f6b2767"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._maybeLaterOnClick$Action, a)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onClickCTAButton$Action(a) {
            var t = this.controller;
            return s.Logger.startActiveSpan("onClickCTAButton__proxy", function(n) {
                return n && (n.setAttribute("code.function", "onClickCTAButton"), n.setAttribute("outsystems.function.key", "91119d97-098e-494f-8949-46134f6c19bc"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onClickCTAButton$Action, a)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onReady$Action(a) {
            var t = this.controller;
            return s.Logger.startActiveSpan("OnReady__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "b83f7f90-e875-4d7a-9ec7-8ee6ae663466"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, a)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        setupTradingAccountOnClick$Action(a) {
            var t = this.controller;
            return s.Logger.startActiveSpan("SetupTradingAccountOnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "SetupTradingAccountOnClick"), n.setAttribute("outsystems.function.key", "c2a033a2-7353-44dc-9f6d-79e942796536"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setupTradingAccountOnClick$Action, a)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        pOAStatusOnClick$Action(a) {
            var t = this.controller;
            return s.Logger.startActiveSpan("POAStatusOnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "POAStatusOnClick"), n.setAttribute("outsystems.function.key", "e87b07c0-e8be-40b5-b9b5-99013c0dfe23"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._pOAStatusOnClick$Action, a)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(a) {
            this._onInitializeEventHandler = a
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(a) {
                var t = this.controller,
                    n = this.model,
                    v = this.idService;
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
                return se.default.handleError(a, this.callContext())
            }), this._handleError
        }
        set handleError(a) {
            this._handleError = a
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return I.defaultTimeout
        }
    };
    o(u, "ControllerInner");
    let f = u;
    de = f, de.registerVariableGroupType("uae.UserProfileFlow.VerificationStatus.OpenLivechat$showIntercomJSResult", [{
        name: "is_already_loaded",
        attrName: "is_already_loadedOut",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }])
}
var de, ce = new s.Controller.ControllerFactory(de, L);
var i = ie(oe());
var B = R,
    ge = class ge extends B.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("kyc_status", "kyc_statusIn", "kyc_status", !0, !1, B.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_kyc_statusInDataFetchStatus", "_kyc_statusInDataFetchStatus", "_kyc_statusInDataFetchStatus", !0, !1, B.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(B.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(ge, "VariablesRecord");
var Q = ge;
Q.init();
var pe = class pe extends B.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(pe, "WidgetsRecord");
var ue = pe,
    $ = class $ extends B.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Q
        }
        static getWidgetsRecordConstructor() {
            return ue
        }
        static get hasValidationWidgets() {
            return $._hasValidationWidgetsValue === void 0 && ($._hasValidationWidgetsValue = void 0), $._hasValidationWidgetsValue
        }
        setInputs(u) {
            "kyc_status" in u && (this.variables.kyc_statusIn = u.kyc_status, "_kyc_statusInDataFetchStatus" in u && (this.variables._kyc_statusInDataFetchStatus = u._kyc_statusInDataFetchStatus))
        }
    };
o($, "Model");
var Z = $;
Z._hasValidationWidgetsValue = void 0;
var xe = new B.Model.ModelFactory(Z);
var S = R,
    me = class me extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Image", "imageIn", "Image", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_imageInDataFetchStatus", "_imageInDataFetchStatus", "_imageInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title2", "title2In", "Title2", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_title2InDataFetchStatus", "_title2InDataFetchStatus", "_title2InDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Description2", "description2In", "Description2", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_description2InDataFetchStatus", "_description2InDataFetchStatus", "_description2InDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldShowStatusTag", "shouldShowStatusTagIn", "ShouldShowStatusTag", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowStatusTagInDataFetchStatus", "_shouldShowStatusTagInDataFetchStatus", "_shouldShowStatusTagInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldShowWarningBackground", "shouldShowWarningBackgroundIn", "ShouldShowWarningBackground", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowWarningBackgroundInDataFetchStatus", "_shouldShowWarningBackgroundInDataFetchStatus", "_shouldShowWarningBackgroundInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("StatusTag", "statusTagIn", "StatusTag", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusTagInDataFetchStatus", "_statusTagInDataFetchStatus", "_statusTagInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("is_loading", "is_loadingIn", "is_loading", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_loadingInDataFetchStatus", "_is_loadingInDataFetchStatus", "_is_loadingInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("shouldShowBoth", "shouldShowBothIn", "shouldShowBoth", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowBothInDataFetchStatus", "_shouldShowBothInDataFetchStatus", "_shouldShowBothInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Image2", "image2In", "Image2", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_image2InDataFetchStatus", "_image2InDataFetchStatus", "_image2InDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(me, "VariablesRecord");
var X = me;
X.init();
var Se = class Se extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(Se, "WidgetsRecord");
var fe = Se,
    U = class U extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return X
        }
        static getWidgetsRecordConstructor() {
            return fe
        }
        static get hasValidationWidgets() {
            return U._hasValidationWidgetsValue === void 0 && (U._hasValidationWidgetsValue = void 0), U._hasValidationWidgetsValue
        }
        setInputs(u) {
            "Image" in u && (this.variables.imageIn = u.Image, "_imageInDataFetchStatus" in u && (this.variables._imageInDataFetchStatus = u._imageInDataFetchStatus)), "Title2" in u && (this.variables.title2In = u.Title2, "_title2InDataFetchStatus" in u && (this.variables._title2InDataFetchStatus = u._title2InDataFetchStatus)), "Description2" in u && (this.variables.description2In = u.Description2, "_description2InDataFetchStatus" in u && (this.variables._description2InDataFetchStatus = u._description2InDataFetchStatus)), "ShouldShowStatusTag" in u && (this.variables.shouldShowStatusTagIn = u.ShouldShowStatusTag, "_shouldShowStatusTagInDataFetchStatus" in u && (this.variables._shouldShowStatusTagInDataFetchStatus = u._shouldShowStatusTagInDataFetchStatus)), "ShouldShowWarningBackground" in u && (this.variables.shouldShowWarningBackgroundIn = u.ShouldShowWarningBackground, "_shouldShowWarningBackgroundInDataFetchStatus" in u && (this.variables._shouldShowWarningBackgroundInDataFetchStatus = u._shouldShowWarningBackgroundInDataFetchStatus)), "StatusTag" in u && (this.variables.statusTagIn = u.StatusTag, "_statusTagInDataFetchStatus" in u && (this.variables._statusTagInDataFetchStatus = u._statusTagInDataFetchStatus)), "is_loading" in u && (this.variables.is_loadingIn = u.is_loading, "_is_loadingInDataFetchStatus" in u && (this.variables._is_loadingInDataFetchStatus = u._is_loadingInDataFetchStatus)), "shouldShowBoth" in u && (this.variables.shouldShowBothIn = u.shouldShowBoth, "_shouldShowBothInDataFetchStatus" in u && (this.variables._shouldShowBothInDataFetchStatus = u._shouldShowBothInDataFetchStatus)), "Image2" in u && (this.variables.image2In = u.Image2, "_image2InDataFetchStatus" in u && (this.variables._image2InDataFetchStatus = u._image2InDataFetchStatus))
        }
    };
o(U, "Model");
var ee = U;
ee._hasValidationWidgetsValue = void 0;
var Ve = new S.Model.ModelFactory(ee);
var y = R,
    ye = class ye extends y.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("KYCResponse", "kYCResponseVar", "KYCResponse", !0, !1, y.DataTypes.DataTypes.Record, function() {
                return y.DataTypes.ImmutableBase.getData(new ne)
            }, !1, ne), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("POIFailedORRejected", "pOIFailedORRejectedVar", "POIFailedORRejected", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("POAFailedORRejected", "pOAFailedORRejectedVar", "POAFailedORRejected", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldShowLivechat", "shouldShowLivechatVar", "ShouldShowLivechat", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("HasPOILimitReached", "hasPOILimitReachedVar", "HasPOILimitReached", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("HasPOALimitReached", "hasPOALimitReachedVar", "HasPOALimitReached", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("shouldShowPOI", "shouldShowPOIIn", "shouldShowPOI", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowPOIInDataFetchStatus", "_shouldShowPOIInDataFetchStatus", "_shouldShowPOIInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("shouldShowPOA", "shouldShowPOAIn", "shouldShowPOA", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowPOAInDataFetchStatus", "_shouldShowPOAInDataFetchStatus", "_shouldShowPOAInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(y.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(ye, "VariablesRecord");
var te = ye;
te.init();
var be = class be extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(be, "WidgetsRecord");
var _e = be,
    M = class M extends y.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return te
        }
        static getWidgetsRecordConstructor() {
            return _e
        }
        static get hasValidationWidgets() {
            return M._hasValidationWidgetsValue === void 0 && (M._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), M._hasValidationWidgetsValue
        }
        setInputs(u) {
            "shouldShowPOI" in u && (this.variables.shouldShowPOIIn = y.DataConversion.ServerDataConverter.from(u.shouldShowPOI, y.DataTypes.DataTypes.Boolean)), "shouldShowPOA" in u && (this.variables.shouldShowPOAIn = y.DataConversion.ServerDataConverter.from(u.shouldShowPOA, y.DataTypes.DataTypes.Boolean))
        }
    };
o(M, "Model");
var ae = M;
ae._hasValidationWidgetsValue = void 0;
var Ae = new y.Model.ModelFactory(ae);
var h = ie(oe());
var Fe = {};
var We = R; {
    let u = class u extends We.Controller.BaseViewController {
        constructor(a, t, n) {
            super(a, t, n, Fe);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(a) {
            this._onInitializeEventHandler = a
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
                return controller.handleError(a)
            }), this._handleError
        }
        set handleError(a) {
            this._handleError = a
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return I.defaultTimeout
        }
    };
    o(u, "ControllerInner");
    let f = u;
    Be = f
}
var Be, Le = new We.Controller.ControllerFactory(Be, L);
var k = ie(oe());
var ze = {
        "vAH4Kg1MGUmsWVmmY9rczQ#Value": "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
        "Nqwcs8gJ206f3iea_FzV6A#Value": "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629"
    },
    He = {
        "ar-001": {
            translations: ze,
            isRTL: !0
        }
    };
var Ne = R; {
    let u = class u extends Ne.Controller.BaseViewController {
        constructor(a, t, n) {
            super(a, t, n, He);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(a) {
            this._onInitializeEventHandler = a
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
                return controller.handleError(a)
            }), this._handleError
        }
        set handleError(a) {
            this._handleError = a
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return I.defaultTimeout
        }
    };
    o(u, "ControllerInner");
    let f = u;
    Ye = f
}
var Ye, $e = new Ne.Controller.ControllerFactory(Ye, L);
var jt = V.PlaceholderContent,
    zt = V.IteratorPlaceholderContent,
    Ge = o(function() {
        var f = K(function(u) {
            var e = u.model,
                a = u.controller,
                t = u.controller.idService,
                n = a.validationService,
                v = a.callContext(),
                l = F,
                O = W,
                P = {
                    props: u,
                    validateWidget: o(function(d) {
                        u.validateWidget(u, d)
                    }, "validateWidget")
                },
                r = e,
                _ = Y,
                G = N,
                g = H();
            return k.createElement("div", u.rootNodeProperties, _(e.variables.kyc_statusIn === "pending" || e.variables.kyc_statusIn === "pending_provider", !1, this, function() {
                return [k.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; background: #FFF7E6; border-radius: 4px; display: flex; gap: 8px; height: 24px; justify-content: center; padding: 0px 8px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "InReviewcontainer"
                    },
                    _widgetRecordProvider: r
                }, k.createElement(J, {
                    getOwnerSpan: o(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: `<svg width='12' height='18' viewBox='0 0 12 18' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<g clip-path='url(#clip0_4003_55955)'>\r
<path d='M6 4.25C4.10156 4.25 2.39062 5.25781 1.45312 6.875C0.492188 8.51562 0.492188 10.5078 1.45312 12.125C2.39062 13.7656 4.10156 14.75 6 14.75C7.875 14.75 9.58594 13.7656 10.5234 12.125C11.4844 10.5078 11.4844 8.51562 10.5234 6.875C9.58594 5.25781 7.875 4.25 6 4.25ZM6 15.5C3.84375 15.5 1.875 14.375 0.796875 12.5C-0.28125 10.6484 -0.28125 8.375 0.796875 6.5C1.875 4.64844 3.84375 3.5 6 3.5C8.13281 3.5 10.1016 4.64844 11.1797 6.5C12.2578 8.375 12.2578 10.6484 11.1797 12.5C10.1016 14.375 8.13281 15.5 6 15.5ZM6 6.5C6.1875 6.5 6.375 6.6875 6.375 6.875V9.875C6.375 10.0859 6.1875 10.25 6 10.25C5.78906 10.25 5.625 10.0859 5.625 9.875V6.875C5.625 6.6875 5.78906 6.5 6 6.5ZM6.5625 11.75C6.5625 12.0781 6.30469 12.3125 6 12.3125C5.67188 12.3125 5.4375 12.0781 5.4375 11.75C5.4375 11.4453 5.67188 11.1875 6 11.1875C6.30469 11.1875 6.5625 11.4453 6.5625 11.75Z' fill='#C47D00'/>\r
</g>\r
<defs>\r
<clipPath id='clip0_4003_55955'>\r
<rect width='12' height='18' fill='white'/>\r
</clipPath>\r
</defs>\r
</svg>`
                    },
                    events: {
                        _handleError: o(function(d) {
                            a.handleError(d)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: t,
                        uuid: "1",
                        alias: "1"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                }), k.createElement(x, {
                    extendedProperties: {
                        style: "color: var(--color-pending-warning, #C47D00); font-size: 12px; font-style: normal; font-weight: 500; line-height: 20px;"
                    },
                    text: [G(O("Nqwcs8gJ206f3iea_FzV6A#Value", "In review"))],
                    _idProps: {
                        service: t,
                        uuid: "2"
                    },
                    _widgetRecordProvider: r
                }))]
            }, function() {
                return [_(e.variables.kyc_statusIn === "verified", !1, this, function() {
                    return [k.createElement(c, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: center; background: rgba(0, 136, 50, 0.08); border-radius: 4px; display: flex; gap: 8px; height: 24px; justify-content: center; padding: 0px 8px;"
                        },
                        gridProperties: {
                            classes: "OSInline",
                            width: "fit-content"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "3"
                        },
                        _widgetRecordProvider: r
                    }, k.createElement(J, {
                        getOwnerSpan: o(function() {
                            return g.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: o(function() {
                            return g.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            SVGCode: `<svg width='12' height='18' viewBox='0 0 12 18' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<g clip-path='url(#clip0_4003_50610)'>\r
<path d='M6 4.25C4.10156 4.25 2.39062 5.25781 1.45312 6.875C0.492188 8.51562 0.492188 10.5078 1.45312 12.125C2.39062 13.7656 4.10156 14.75 6 14.75C7.875 14.75 9.58594 13.7656 10.5234 12.125C11.4844 10.5078 11.4844 8.51562 10.5234 6.875C9.58594 5.25781 7.875 4.25 6 4.25ZM6 15.5C3.84375 15.5 1.875 14.375 0.796875 12.5C-0.28125 10.6484 -0.28125 8.375 0.796875 6.5C1.875 4.64844 3.84375 3.5 6 3.5C8.13281 3.5 10.1016 4.64844 11.1797 6.5C12.2578 8.375 12.2578 10.6484 11.1797 12.5C10.1016 14.375 8.13281 15.5 6 15.5ZM8.50781 8.28125L5.50781 11.2812C5.36719 11.4219 5.10938 11.4219 4.96875 11.2812L3.46875 9.78125C3.32812 9.64062 3.32812 9.38281 3.46875 9.24219C3.60938 9.10156 3.86719 9.10156 4.00781 9.24219L5.25 10.4844L7.96875 7.74219C8.10938 7.60156 8.36719 7.60156 8.50781 7.74219C8.64844 7.88281 8.64844 8.14062 8.50781 8.28125Z' fill='#007A22'/>\r
</g>\r
<defs>\r
<clipPath id='clip0_4003_50610'>\r
<rect width='12' height='18' fill='white'/>\r
</clipPath>\r
</defs>\r
</svg>`
                        },
                        events: {
                            _handleError: o(function(d) {
                                a.handleError(d)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: n
                        },
                        _idProps: {
                            service: t,
                            uuid: "4",
                            alias: "2"
                        },
                        _widgetRecordProvider: r,
                        _dependencies: []
                    }), k.createElement(x, {
                        extendedProperties: {
                            style: "color: var(--color-verified); font-size: 12px; font-style: normal; font-weight: 500; line-height: 20px;"
                        },
                        text: [G(O("vAH4Kg1MGUmsWVmmY9rczQ#Value", "Verified"))],
                        _idProps: {
                            service: t,
                            uuid: "5"
                        },
                        _widgetRecordProvider: r
                    }))]
                }, function() {
                    return []
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "NewKYCStatusBadge",
                    functionKey: "d79fa06c-7904-4adb-a839-ad629a5e8b85",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "KYCFlow.NewKYCStatusBadge",
            modelFactory: xe,
            controllerFactory: $e
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [J]
        }, f
    }, "componentFactory"),
    re = Ge();
var ra = V.PlaceholderContent,
    ia = V.IteratorPlaceholderContent,
    Ke = o(function() {
        var f = K(function(u) {
            var e = u.model,
                a = u.controller,
                t = u.controller.idService,
                n = a.validationService,
                v = a.callContext(),
                l = F,
                O = W,
                P = {
                    props: u,
                    validateWidget: o(function(d) {
                        u.validateWidget(u, d)
                    }, "validateWidget")
                },
                r = e,
                _ = Y,
                G = N,
                g = H();
            return h.createElement("div", u.rootNodeProperties, _(e.variables.is_loadingIn, !1, this, function() {
                return [h.createElement(c, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "Result2"
                    },
                    _widgetRecordProvider: r
                }, h.createElement(c, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "1"
                    },
                    _widgetRecordProvider: r
                }, h.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "height: 40px;"
                    },
                    style: "w-full rounded animate-pulse skelton-loader-bg",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "LoadingItemField13"
                    },
                    _widgetRecordProvider: r
                }), h.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "height: 40px;"
                    },
                    style: "w-full rounded animate-pulse skelton-loader-bg",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "LoadingItemField16"
                    },
                    _widgetRecordProvider: r
                })))]
            }, function() {
                return [_(e.variables.shouldShowBothIn, !1, this, function() {
                    return [h.createElement(c, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: flex-start; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                        },
                        style: e.getCachedValue(t.getId("TwoResults.Style"), function() {
                            return e.variables.shouldShowWarningBackgroundIn ? "failed-badge" : ""
                        }, function() {
                            return e.variables.shouldShowWarningBackgroundIn
                        }),
                        visible: !0,
                        _idProps: {
                            service: t,
                            name: "TwoResults"
                        },
                        _widgetRecordProvider: r,
                        style_dataFetchStatus: w.calculateDataFetchStatus(e.variables._shouldShowWarningBackgroundInDataFetchStatus)
                    }, h.createElement(c, {
                        align: 0,
                        animate: !1,
                        style: "flex",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "5"
                        },
                        _widgetRecordProvider: r
                    }, h.createElement(T, {
                        type: 1,
                        url: e.variables.imageIn,
                        _idProps: {
                            service: t,
                            name: "Img3"
                        },
                        _widgetRecordProvider: r,
                        url_dataFetchStatus: w.calculateDataFetchStatus(e.variables._imageInDataFetchStatus)
                    }), h.createElement(T, {
                        gridProperties: {
                            classes: "ThemeGrid_MarginGutter"
                        },
                        type: 1,
                        url: e.variables.image2In,
                        _idProps: {
                            service: t,
                            name: "Img4"
                        },
                        _widgetRecordProvider: r,
                        url_dataFetchStatus: w.calculateDataFetchStatus(e.variables._image2InDataFetchStatus)
                    })), h.createElement(c, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "height: 100%;"
                        },
                        gridProperties: {
                            classes: "OSInline",
                            width: "100%"
                        },
                        style: "flex justify-content-space-between align-items-center",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "8"
                        },
                        _widgetRecordProvider: r
                    }, h.createElement(c, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: flex-start; display: flex; flex-direction: column; gap: 8px;"
                        },
                        style: "flex flex-col",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "9"
                        },
                        _widgetRecordProvider: r
                    }, h.createElement(c, {
                        align: 0,
                        animate: !1,
                        style: "display-flex flex-col",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "10"
                        },
                        _widgetRecordProvider: r
                    }, h.createElement(p, {
                        extendedProperties: {
                            style: "font-size: 16px; font-weight: bold;"
                        },
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        value: e.variables.title2In,
                        _idProps: {
                            service: t,
                            name: "Title3"
                        },
                        _widgetRecordProvider: r,
                        value_dataFetchStatus: w.calculateDataFetchStatus(e.variables._title2InDataFetchStatus)
                    }), h.createElement(p, {
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        value: e.variables.description2In,
                        _idProps: {
                            service: t,
                            name: "Description3"
                        },
                        _widgetRecordProvider: r,
                        value_dataFetchStatus: w.calculateDataFetchStatus(e.variables._description2InDataFetchStatus)
                    })), h.createElement(c, {
                        align: 0,
                        animate: !0,
                        visible: e.variables.shouldShowStatusTagIn,
                        _idProps: {
                            service: t,
                            name: "Tag2"
                        },
                        _widgetRecordProvider: r,
                        visible_dataFetchStatus: w.calculateDataFetchStatus(e.variables._shouldShowStatusTagInDataFetchStatus)
                    }, h.createElement(re, {
                        getOwnerSpan: o(function() {
                            return g.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: o(function() {
                            return g.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            kyc_status: e.variables.statusTagIn,
                            _kyc_statusInDataFetchStatus: w.calculateDataFetchStatus(e.variables._statusTagInDataFetchStatus)
                        },
                        events: {
                            _handleError: o(function(d) {
                                a.handleError(d)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: n
                        },
                        _idProps: {
                            service: t,
                            uuid: "14",
                            alias: "1"
                        },
                        _widgetRecordProvider: r,
                        _dependencies: []
                    })))))]
                }, function() {
                    return [h.createElement(c, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: flex-start; align-self: stretch; display: flex; gap: 16px;"
                        },
                        style: e.getCachedValue(t.getId("SingleResult.Style"), function() {
                            return e.variables.shouldShowWarningBackgroundIn ? "failed-badge" : ""
                        }, function() {
                            return e.variables.shouldShowWarningBackgroundIn
                        }),
                        visible: !0,
                        _idProps: {
                            service: t,
                            name: "SingleResult"
                        },
                        _widgetRecordProvider: r,
                        style_dataFetchStatus: w.calculateDataFetchStatus(e.variables._shouldShowWarningBackgroundInDataFetchStatus)
                    }, h.createElement(c, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "16"
                        },
                        _widgetRecordProvider: r
                    }, h.createElement(T, {
                        type: 1,
                        url: e.variables.imageIn,
                        _idProps: {
                            service: t,
                            name: "Img"
                        },
                        _widgetRecordProvider: r,
                        url_dataFetchStatus: w.calculateDataFetchStatus(e.variables._imageInDataFetchStatus)
                    })), h.createElement(c, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "height: 100%;"
                        },
                        gridProperties: {
                            classes: "OSInline",
                            width: "100%"
                        },
                        style: "flex justify-content-space-between align-items-center",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "18"
                        },
                        _widgetRecordProvider: r
                    }, h.createElement(c, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: flex-start; display: flex; flex-direction: column; gap: 8px;"
                        },
                        style: "flex flex-col",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "19"
                        },
                        _widgetRecordProvider: r
                    }, h.createElement(c, {
                        align: 0,
                        animate: !1,
                        style: "display-flex flex-col",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "20"
                        },
                        _widgetRecordProvider: r
                    }, h.createElement(p, {
                        extendedProperties: {
                            style: "font-size: 16px; font-weight: bold;"
                        },
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        value: e.variables.title2In,
                        _idProps: {
                            service: t,
                            name: "Title"
                        },
                        _widgetRecordProvider: r,
                        value_dataFetchStatus: w.calculateDataFetchStatus(e.variables._title2InDataFetchStatus)
                    }), h.createElement(p, {
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        value: e.variables.description2In,
                        _idProps: {
                            service: t,
                            name: "Description"
                        },
                        _widgetRecordProvider: r,
                        value_dataFetchStatus: w.calculateDataFetchStatus(e.variables._description2InDataFetchStatus)
                    })), h.createElement(c, {
                        align: 0,
                        animate: !0,
                        visible: e.variables.shouldShowStatusTagIn,
                        _idProps: {
                            service: t,
                            name: "Tag"
                        },
                        _widgetRecordProvider: r,
                        visible_dataFetchStatus: w.calculateDataFetchStatus(e.variables._shouldShowStatusTagInDataFetchStatus)
                    }, h.createElement(re, {
                        getOwnerSpan: o(function() {
                            return g.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: o(function() {
                            return g.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            kyc_status: e.variables.statusTagIn,
                            _kyc_statusInDataFetchStatus: w.calculateDataFetchStatus(e.variables._statusTagInDataFetchStatus)
                        },
                        events: {
                            _handleError: o(function(d) {
                                a.handleError(d)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: n
                        },
                        _idProps: {
                            service: t,
                            uuid: "24",
                            alias: "2"
                        },
                        _widgetRecordProvider: r,
                        _dependencies: []
                    })))))]
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "KYCStatusBadge",
                    functionKey: "199a943f-1885-4f35-865f-eeee6cf15104",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.KYCStatusBadge",
            modelFactory: Ve,
            controllerFactory: Le
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [re]
        }, f
    }, "componentFactory"),
    b = Ke();
var C = V.PlaceholderContent,
    _a = V.IteratorPlaceholderContent,
    Je = o(function() {
        var f = Re(function(u) {
            var e = u.model,
                a = u.controller,
                t = u.controller.idService,
                n = a.validationService,
                v = a.callContext(),
                l = F,
                O = W,
                P = {
                    props: u,
                    validateWidget: o(function(d) {
                        u.validateWidget(u, d)
                    }, "validateWidget")
                },
                r = e,
                _ = Y,
                G = N,
                g = H();
            return i.createElement("div", u.rootNodeProperties, _(we.isDesktop$Action(v).isDesktopOut, !1, this, function() {
                return [_(e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "rejected" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "rejected", !1, this, function() {
                    return [i.createElement(z, {
                        getOwnerSpan: o(function() {
                            return g.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: o(function() {
                            return g.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            ShowClosebutton: !0
                        },
                        events: {
                            _handleError: o(function(d) {
                                a.handleError(d)
                            }, "_handleError"),
                            closeBtnEvent$Action: o(function() {
                                var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                a.handleOnClose$Action(a.callContext(d))
                            }, "closeBtnEvent$Action")
                        },
                        _validationProps: {
                            validationService: n
                        },
                        _idProps: {
                            service: t,
                            uuid: "0",
                            alias: "1"
                        },
                        _widgetRecordProvider: r,
                        placeholders: {
                            contentbody: new C(function() {
                                return [i.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    style: "flex flex-col gap-y-7",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "1"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "2"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(p, {
                                    extendedProperties: {
                                        style: "font-size: 24px; font-weight: bold;"
                                    },
                                    value: "Verification status",
                                    _idProps: {
                                        service: t,
                                        uuid: "3"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "4"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(p, {
                                    extendedProperties: {
                                        style: "font-size: 16px;"
                                    },
                                    value: "We found a problem with your documents.",
                                    _idProps: {
                                        service: t,
                                        uuid: "5"
                                    },
                                    _widgetRecordProvider: r
                                }))), i.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    style: "flex flex-col gap-6",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "6"
                                    },
                                    _widgetRecordProvider: r
                                }, _(e.variables.shouldShowPOIIn && e.variables.shouldShowPOAIn, !1, this, function() {
                                    return [i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "POIPOA3"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(b, {
                                        getOwnerSpan: o(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Description2: "We couldn't verify your details. Contact us via live chat to continue.",
                                            ShouldShowWarningBackground: !0,
                                            Title2: "Identity & Address verification failed",
                                            ShouldShowStatusTag: !1,
                                            Image: m.VersionedURL.getVersionedUrl("img/uae.poi.svg"),
                                            is_loading: e.variables.is_loadingVar,
                                            shouldShowBoth: !0,
                                            Image2: m.VersionedURL.getVersionedUrl("img/uae.poa.svg")
                                        },
                                        events: {
                                            _handleError: o(function(d) {
                                                a.handleError(d)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: t,
                                            name: "POIPOAStatusBlock6",
                                            alias: "2"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    }))]
                                }, function() {
                                    return [i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        style: "flex flex-col gap-6",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        visible: e.variables.shouldShowPOIIn,
                                        _idProps: {
                                            service: t,
                                            name: "POI7"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(b, {
                                        getOwnerSpan: o(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Image: m.VersionedURL.getVersionedUrl("img/uae.poi.svg"),
                                            ShouldShowWarningBackground: !0,
                                            Title2: "Identity verification failed",
                                            shouldShowBoth: !1,
                                            is_loading: e.variables.is_loadingVar,
                                            Description2: e.getCachedValue(t.getId("POIStatusBlock7.Description2"), function() {
                                                return e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr !== D.nullTextIdentifier() ? e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr : "We couldn't verify your details. Contact us via live chat to continue."
                                            }, function() {
                                                return e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr
                                            }),
                                            StatusTag: e.getCachedValue(t.getId("POIStatusBlock7.StatusTag"), function() {
                                                return D.nullTextIdentifier()
                                            }),
                                            ShouldShowStatusTag: !1
                                        },
                                        events: {
                                            _handleError: o(function(d) {
                                                a.handleError(d)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: t,
                                            name: "POIStatusBlock7",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    })), i.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        visible: e.variables.shouldShowPOAIn,
                                        _idProps: {
                                            service: t,
                                            name: "POA7"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(b, {
                                        getOwnerSpan: o(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            shouldShowBoth: !1,
                                            is_loading: e.variables.is_loadingVar,
                                            ShouldShowStatusTag: e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr !== "unverified" && !e.variables.pOAFailedORRejectedVar,
                                            StatusTag: e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr,
                                            ShouldShowWarningBackground: e.variables.pOAFailedORRejectedVar,
                                            Title2: e.getCachedValue(t.getId("POAStatusBlock7.Title2"), function() {
                                                return e.variables.pOAFailedORRejectedVar ? "Address verification failed" : "Address verification"
                                            }, function() {
                                                return e.variables.pOAFailedORRejectedVar
                                            }),
                                            Description2: e.getCachedValue(t.getId("POAStatusBlock7.Description2"), function() {
                                                return e.variables.pOAFailedORRejectedVar ? e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.moderation_commentAttr : "Upload a document confirming your current home address."
                                            }, function() {
                                                return e.variables.pOAFailedORRejectedVar
                                            }, function() {
                                                return e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.moderation_commentAttr
                                            }),
                                            Image: m.VersionedURL.getVersionedUrl("img/uae.poa.svg")
                                        },
                                        events: {
                                            _handleError: o(function(d) {
                                                a.handleError(d)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: t,
                                            name: "POAStatusBlock7",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    })))]
                                })), i.createElement(c, {
                                    align: 0,
                                    animate: !0,
                                    extendedProperties: {
                                        style: "background: white; padding: 16px; z-index: 10;"
                                    },
                                    style: "flex justify-content-flex-end",
                                    visible: !e.variables.is_loadingVar,
                                    _idProps: {
                                        service: t,
                                        name: "ActionButton7"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(E, {
                                    enabled: !0,
                                    extendedProperties: {
                                        style: "flex: none;"
                                    },
                                    isDefault: !1,
                                    onClick: o(function() {
                                        return Promise.resolve().then(function() {
                                            var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                            return a.onClickCTAButton$Action(a.callContext(d))
                                        })
                                    }, "onClick"),
                                    style: "btn btn-primary action-button",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "SaveButton8"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    style: "osui-btn-loading__spinner-animation",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "16"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(p, {
                                    extendedProperties: {
                                        style: "font-size: 16px;"
                                    },
                                    value: e.getCachedValue(t.getId("2Qr_A8RdTkaTdFx283rz9Q.Value"), function() {
                                        return e.variables.shouldShowLivechatVar ? "Contact us" : "Resubmit"
                                    }, function() {
                                        return e.variables.shouldShowLivechatVar
                                    }),
                                    _idProps: {
                                        service: t,
                                        uuid: "17"
                                    },
                                    _widgetRecordProvider: r
                                }))))]
                            })
                        },
                        _dependencies: [l(e.variables.shouldShowLivechatVar), l(e.variables.pOAFailedORRejectedVar), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.moderation_commentAttr), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr), l(e.variables.is_loadingVar), l(e.variables.shouldShowPOAIn), l(e.variables.shouldShowPOIIn)]
                    })]
                }, function() {
                    return [_(e.variables.hasPOILimitReachedVar || e.variables.hasPOALimitReachedVar, !1, this, function() {
                        return [i.createElement(z, {
                            getOwnerSpan: o(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShowClosebutton: !0
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError"),
                                closeBtnEvent$Action: o(function() {
                                    var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                    a.handleOnClose$Action(a.callContext(d))
                                }, "closeBtnEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: t,
                                uuid: "18",
                                alias: "5"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                contentbody: new C(function() {
                                    return [i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "height: 581px;"
                                        },
                                        style: "flex flex-col gap-y-7",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 24px; font-weight: bold;"
                                        },
                                        value: "Verification status",
                                        _idProps: {
                                            service: t,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        value: e.getCachedValue(t.getId("3gDlYGInGUub1kZaXBQpBA.Value"), function() {
                                            return e.variables.shouldShowPOIIn && e.variables.shouldShowPOAIn ? "There was a problem with few of your documents." : "We found a problem with your documents."
                                        }, function() {
                                            return e.variables.shouldShowPOIIn
                                        }, function() {
                                            return e.variables.shouldShowPOAIn
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: r
                                    }))), i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "24"
                                        },
                                        _widgetRecordProvider: r
                                    }, _(e.variables.shouldShowPOIIn && e.variables.hasPOILimitReachedVar && e.variables.shouldShowPOAIn && e.variables.hasPOALimitReachedVar, !1, this, function() {
                                        return [i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "POIPOA4"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(b, {
                                            getOwnerSpan: o(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                shouldShowBoth: !0,
                                                Description2: "Maximum number of verification attempts reached. Contact us via live chat to continue.",
                                                Image: m.VersionedURL.getVersionedUrl("img/uae.poi.svg"),
                                                Image2: m.VersionedURL.getVersionedUrl("img/uae.poa.svg"),
                                                ShouldShowStatusTag: !1,
                                                Title2: "Identity & Address verification failed",
                                                ShouldShowWarningBackground: !0,
                                                is_loading: e.variables.is_loadingVar
                                            },
                                            events: {
                                                _handleError: o(function(d) {
                                                    a.handleError(d)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: n
                                            },
                                            _idProps: {
                                                service: t,
                                                name: "POIPOAStatusBlock7",
                                                alias: "6"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        }))]
                                    }, function() {
                                        return [i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            style: "flex flex-col gap-6",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "27"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(c, {
                                            align: 0,
                                            animate: !0,
                                            visible: e.variables.shouldShowPOIIn && e.variables.hasPOILimitReachedVar,
                                            _idProps: {
                                                service: t,
                                                name: "POI6"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(b, {
                                            getOwnerSpan: o(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ShouldShowStatusTag: !1,
                                                Image: m.VersionedURL.getVersionedUrl("img/uae.poi.svg"),
                                                Description2: "Maximum number of verification attempts reached. Contact us via live chat to continue.",
                                                is_loading: e.variables.is_loadingVar,
                                                ShouldShowWarningBackground: !0,
                                                StatusTag: e.getCachedValue(t.getId("POIStatusBlock6.StatusTag"), function() {
                                                    return D.nullTextIdentifier()
                                                }),
                                                Title2: "Identity verification failed",
                                                shouldShowBoth: !1
                                            },
                                            events: {
                                                _handleError: o(function(d) {
                                                    a.handleError(d)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: n
                                            },
                                            _idProps: {
                                                service: t,
                                                name: "POIStatusBlock6",
                                                alias: "7"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        })), i.createElement(c, {
                                            align: 0,
                                            animate: !0,
                                            visible: e.variables.shouldShowPOAIn && e.variables.hasPOALimitReachedVar,
                                            _idProps: {
                                                service: t,
                                                name: "POA6"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(b, {
                                            getOwnerSpan: o(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ShouldShowStatusTag: !1,
                                                Title2: "Address verification failed",
                                                is_loading: e.variables.is_loadingVar,
                                                ShouldShowWarningBackground: !0,
                                                Image: m.VersionedURL.getVersionedUrl("img/uae.poa.svg"),
                                                shouldShowBoth: !1,
                                                Description2: "Maximum number of verification attempts reached. Contact us via live chat to continue."
                                            },
                                            events: {
                                                _handleError: o(function(d) {
                                                    a.handleError(d)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: n
                                            },
                                            _idProps: {
                                                service: t,
                                                name: "POAStatusBlock6",
                                                alias: "8"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        })))]
                                    })), i.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        extendedProperties: {
                                            style: "background: white; padding: 16px; z-index: 10;"
                                        },
                                        style: "flex justify-content-flex-end",
                                        visible: !e.variables.is_loadingVar,
                                        _idProps: {
                                            service: t,
                                            name: "ActionButton8"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(E, {
                                        enabled: !0,
                                        extendedProperties: {
                                            style: "flex: none;"
                                        },
                                        isDefault: !1,
                                        onClick: o(function() {
                                            return Promise.resolve().then(function() {
                                                var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                                return a.openLivechat$Action(a.callContext(d))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary action-button",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "SaveButton9"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "34"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        value: "Contact us",
                                        _idProps: {
                                            service: t,
                                            uuid: "35"
                                        },
                                        _widgetRecordProvider: r
                                    }))))]
                                })
                            },
                            _dependencies: [l(e.variables.is_loadingVar), l(e.variables.hasPOALimitReachedVar), l(e.variables.hasPOILimitReachedVar), l(e.variables.shouldShowPOAIn), l(e.variables.shouldShowPOIIn)]
                        })]
                    }, function() {
                        return [_(e.variables.shouldShowPOIIn && e.variables.shouldShowPOAIn ? (e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "verified" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending_provider") && (e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "verified" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending_provider") : e.variables.shouldShowPOIIn ? e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "verified" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending_provider" : e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "verified" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending_provider", !1, this, function() {
                            return [i.createElement(q, {
                                getOwnerSpan: o(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: o(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: o(function(d) {
                                        a.handleError(d)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: n
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "36",
                                    alias: "9"
                                },
                                _widgetRecordProvider: r,
                                placeholders: {
                                    content: new C(function() {
                                        return [i.createElement(c, {
                                            align: 0,
                                            animate: !0,
                                            visible: e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "verified" && e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "verified",
                                            _idProps: {
                                                service: t,
                                                uuid: "37"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; align-self: stretch; gap: 24px; padding: 24px;"
                                            },
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "38"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(T, {
                                            extendedProperties: {
                                                style: "height: 256px;"
                                            },
                                            gridProperties: {
                                                width: "256px"
                                            },
                                            image: m.VersionedURL.getVersionedUrl("img/uae.Group2.png"),
                                            type: 0,
                                            _idProps: {
                                                service: t,
                                                uuid: "39"
                                            },
                                            _widgetRecordProvider: r
                                        }), i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-self: center; display: flex; flex-direction: column; gap: 8px;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline ThemeGrid_MarginGutter",
                                                width: "100%"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "40"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(p, {
                                            extendedProperties: {
                                                style: "align-self: stretch; color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 32px; font-weight: 800; text-align: center;"
                                            },
                                            value: "Verification successful",
                                            _idProps: {
                                                service: t,
                                                uuid: "41"
                                            },
                                            _widgetRecordProvider: r
                                        }), i.createElement(p, {
                                            extendedProperties: {
                                                style: "color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 16px; font-weight: 400;"
                                            },
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            style: "text-align-center",
                                            value: "We\u2019ve verified your identity and address. Next, set up your trading account.",
                                            _idProps: {
                                                service: t,
                                                uuid: "42"
                                            },
                                            _widgetRecordProvider: r
                                        })), i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "gap: 8px;"
                                            },
                                            style: "display-flex flex-direction-row",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "43"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "44"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(E, {
                                            enabled: !0,
                                            isDefault: !1,
                                            onClick: o(function() {
                                                var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                                a.maybeLaterOnClick$Action(a.callContext(d))
                                            }, "onClick"),
                                            style: "btn-secondary",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "45"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(x, {
                                            extendedProperties: {
                                                style: "color: var(--component-button-label-color-white-secondary, #FFF); font-weight: 800;"
                                            },
                                            text: ["Maybe later"],
                                            _idProps: {
                                                service: t,
                                                uuid: "46"
                                            },
                                            _widgetRecordProvider: r
                                        }))), i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "47"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(E, {
                                            enabled: !0,
                                            extendedProperties: {
                                                style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: var(--component-button-height-lg, 48px);"
                                            },
                                            isDefault: !1,
                                            onClick: o(function() {
                                                var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                                a.setupTradingAccountOnClick$Action(a.callContext(d))
                                            }, "onClick"),
                                            style: "btn btn-primary",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "48"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(x, {
                                            extendedProperties: {
                                                style: "font-weight: 800;"
                                            },
                                            text: ["Set up trading account"],
                                            _idProps: {
                                                service: t,
                                                uuid: "49"
                                            },
                                            _widgetRecordProvider: r
                                        })))))), i.createElement(c, {
                                            align: 0,
                                            animate: !0,
                                            visible: (e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending_provider") && (e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending_provider"),
                                            _idProps: {
                                                service: t,
                                                uuid: "50"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; align-self: stretch; gap: 24px; padding: 24px;"
                                            },
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "51"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(T, {
                                            image: m.VersionedURL.getVersionedUrl("img/uae.Documentreview.png"),
                                            type: 0,
                                            _idProps: {
                                                service: t,
                                                uuid: "52"
                                            },
                                            _widgetRecordProvider: r
                                        }), i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-self: center; display: flex; flex-direction: column; gap: 8px;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline ThemeGrid_MarginGutter",
                                                width: "100%"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "53"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(p, {
                                            extendedProperties: {
                                                style: "align-self: stretch; color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 32px; font-weight: 800; text-align: center;"
                                            },
                                            value: "Documents in review",
                                            _idProps: {
                                                service: t,
                                                uuid: "54"
                                            },
                                            _widgetRecordProvider: r
                                        }), i.createElement(p, {
                                            extendedProperties: {
                                                style: "color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 16px; font-weight: 400;"
                                            },
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            style: "text-align-center",
                                            value: "This usually takes a few minutes. We\u2019ll let you know when it\u2019s complete, or you can check the status in your Profile.",
                                            _idProps: {
                                                service: t,
                                                uuid: "55"
                                            },
                                            _widgetRecordProvider: r
                                        })), i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "gap: 8px;"
                                            },
                                            style: "display-flex flex-direction-row",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "56"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "57"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(E, {
                                            enabled: !0,
                                            extendedProperties: {
                                                style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: var(--component-button-height-lg, 48px);"
                                            },
                                            gridProperties: {
                                                width: "280px"
                                            },
                                            isDefault: !1,
                                            onClick: o(function() {
                                                var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                                a.maybeLaterOnClick$Action(a.callContext(d))
                                            }, "onClick"),
                                            style: "btn btn-primary",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "58"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(x, {
                                            extendedProperties: {
                                                style: "font-weight: 800;"
                                            },
                                            text: ["Done"],
                                            _idProps: {
                                                service: t,
                                                uuid: "59"
                                            },
                                            _widgetRecordProvider: r
                                        }))))))]
                                    }),
                                    content2: C.Empty
                                },
                                _dependencies: [l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr)]
                            })]
                        }, function() {
                            return []
                        }), i.createElement(z, {
                            getOwnerSpan: o(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShowClosebutton: !0
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError"),
                                closeBtnEvent$Action: o(function() {
                                    var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                    a.handleOnClose$Action(a.callContext(d))
                                }, "closeBtnEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: t,
                                uuid: "60",
                                alias: "10"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                contentbody: new C(function() {
                                    return [i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        style: "flex flex-col gap-y-7",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "61"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "62"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 24px; font-weight: bold;"
                                        },
                                        value: e.getCachedValue(t.getId("MWq80HinlUGvUfVA2tvdTQ.Value"), function() {
                                            return e.variables.shouldShowPOIIn && e.variables.shouldShowPOAIn ? "Verification status" : "Verify yourself"
                                        }, function() {
                                            return e.variables.shouldShowPOIIn
                                        }, function() {
                                            return e.variables.shouldShowPOAIn
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "63"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "64"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        value: e.getCachedValue(t.getId("gKAgOncPV0e+g9OkOnRLeA.Value"), function() {
                                            return e.variables.shouldShowPOIIn && e.variables.shouldShowPOAIn ? "Two quick steps to secure your account." : "We found a problem with your documents. Check the details below and resubmit."
                                        }, function() {
                                            return e.variables.shouldShowPOIIn
                                        }, function() {
                                            return e.variables.shouldShowPOAIn
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "65"
                                        },
                                        _widgetRecordProvider: r
                                    }))), i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        style: "flex flex-col gap-6",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "66"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        visible: e.variables.shouldShowPOIIn,
                                        _idProps: {
                                            service: t,
                                            name: "POI5"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(b, {
                                        getOwnerSpan: o(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            is_loading: e.variables.is_loadingVar,
                                            ShouldShowStatusTag: e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr !== "unverified" && !e.variables.pOIFailedORRejectedVar,
                                            Image: m.VersionedURL.getVersionedUrl("img/uae.poi.svg"),
                                            Title2: e.getCachedValue(t.getId("POIStatusBlock5.Title2"), function() {
                                                return e.variables.pOIFailedORRejectedVar ? "Identity verification failed" : "Identity verification"
                                            }, function() {
                                                return e.variables.pOIFailedORRejectedVar
                                            }),
                                            shouldShowBoth: !1,
                                            ShouldShowWarningBackground: e.variables.pOIFailedORRejectedVar,
                                            Description2: e.getCachedValue(t.getId("POIStatusBlock5.Description2"), function() {
                                                return e.variables.pOIFailedORRejectedVar ? e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr : "Upload a selfie and your official ID document."
                                            }, function() {
                                                return e.variables.pOIFailedORRejectedVar
                                            }, function() {
                                                return e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr
                                            }),
                                            StatusTag: e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr
                                        },
                                        events: {
                                            _handleError: o(function(d) {
                                                a.handleError(d)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: t,
                                            name: "POIStatusBlock5",
                                            alias: "11"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    })), i.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        visible: e.variables.shouldShowPOAIn,
                                        _idProps: {
                                            service: t,
                                            name: "POA5"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(b, {
                                        getOwnerSpan: o(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Description2: e.getCachedValue(t.getId("POAStatusBlock5.Description2"), function() {
                                                return e.variables.pOAFailedORRejectedVar ? e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.moderation_commentAttr : "Upload a document confirming your current home address."
                                            }, function() {
                                                return e.variables.pOAFailedORRejectedVar
                                            }, function() {
                                                return e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.moderation_commentAttr
                                            }),
                                            ShouldShowStatusTag: e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr !== "unverified" && !e.variables.pOAFailedORRejectedVar,
                                            Title2: e.getCachedValue(t.getId("POAStatusBlock5.Title2"), function() {
                                                return e.variables.pOAFailedORRejectedVar ? "Address verification failed" : "Address verification"
                                            }, function() {
                                                return e.variables.pOAFailedORRejectedVar
                                            }),
                                            ShouldShowWarningBackground: e.variables.pOAFailedORRejectedVar,
                                            StatusTag: e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr,
                                            shouldShowBoth: !1,
                                            Image: m.VersionedURL.getVersionedUrl("img/uae.poa.svg"),
                                            is_loading: e.variables.is_loadingVar
                                        },
                                        events: {
                                            _handleError: o(function(d) {
                                                a.handleError(d)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: t,
                                            name: "POAStatusBlock5",
                                            alias: "12"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    }))), i.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        extendedProperties: {
                                            style: "background: white; padding: 16px; z-index: 10;"
                                        },
                                        style: "flex justify-content-flex-end",
                                        visible: !e.variables.is_loadingVar,
                                        _idProps: {
                                            service: t,
                                            name: "ActionButton6"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(E, {
                                        enabled: !0,
                                        extendedProperties: {
                                            style: "flex: none;"
                                        },
                                        isDefault: !1,
                                        onClick: o(function() {
                                            return Promise.resolve().then(function() {
                                                var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                                return a.onClickCTAButton$Action(a.callContext(d))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary action-button",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "SaveButton7"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "73"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        value: e.getCachedValue(t.getId("IkE27fvjEEOy8fGFptIgFg.Value"), function() {
                                            return e.variables.shouldShowLivechatVar ? "Contact us" : "Resubmit"
                                        }, function() {
                                            return e.variables.shouldShowLivechatVar
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "74"
                                        },
                                        _widgetRecordProvider: r
                                    }))))]
                                })
                            },
                            _dependencies: [l(e.variables.shouldShowLivechatVar), l(e.variables.pOAFailedORRejectedVar), l(e.variables.pOIFailedORRejectedVar), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.moderation_commentAttr), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr), l(e.variables.is_loadingVar), l(e.variables.shouldShowPOAIn), l(e.variables.shouldShowPOIIn)]
                        })]
                    })]
                })]
            }, function() {
                return [_(e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "rejected" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "rejected", !1, this, function() {
                    return [i.createElement(j, {
                        getOwnerSpan: o(function() {
                            return g.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: o(function() {
                            return g.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            has_close_icon: !0
                        },
                        events: {
                            _handleError: o(function(d) {
                                a.handleError(d)
                            }, "_handleError"),
                            closeEvent$Action: o(function() {
                                var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                a.handleOnClose$Action(a.callContext(d))
                            }, "closeEvent$Action")
                        },
                        _validationProps: {
                            validationService: n
                        },
                        _idProps: {
                            service: t,
                            uuid: "75",
                            alias: "13"
                        },
                        _widgetRecordProvider: r,
                        placeholders: {
                            content: new C(function() {
                                return [i.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "height: 581px;"
                                    },
                                    style: "flex flex-col gap-y-7",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "76"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "77"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(p, {
                                    extendedProperties: {
                                        style: "font-size: 24px; font-weight: bold;"
                                    },
                                    value: "Verification status",
                                    _idProps: {
                                        service: t,
                                        uuid: "78"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "79"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(p, {
                                    extendedProperties: {
                                        style: "font-size: 16px;"
                                    },
                                    value: "We found a problem with your documents.",
                                    _idProps: {
                                        service: t,
                                        uuid: "80"
                                    },
                                    _widgetRecordProvider: r
                                }))), _(e.variables.shouldShowPOIIn && e.variables.shouldShowPOAIn, !1, this, function() {
                                    return [i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "POIPOA"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(b, {
                                        getOwnerSpan: o(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Image2: m.VersionedURL.getVersionedUrl("img/uae.poa.svg"),
                                            shouldShowBoth: !0,
                                            is_loading: e.variables.is_loadingVar,
                                            ShouldShowStatusTag: !1,
                                            Description2: "We couldn't verify your details. Contact us via live chat to continue.",
                                            ShouldShowWarningBackground: !0,
                                            Title2: "Identity & Address verification failed",
                                            Image: m.VersionedURL.getVersionedUrl("img/uae.poi.svg")
                                        },
                                        events: {
                                            _handleError: o(function(d) {
                                                a.handleError(d)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: t,
                                            name: "POIPOAStatusBlock4",
                                            alias: "14"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    }))]
                                }, function() {
                                    return [i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        style: "flex flex-col gap-6",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "83"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        visible: e.variables.shouldShowPOIIn,
                                        _idProps: {
                                            service: t,
                                            name: "POI3"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(b, {
                                        getOwnerSpan: o(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Description2: e.getCachedValue(t.getId("POIStatusBlock3.Description2"), function() {
                                                return e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr !== D.nullTextIdentifier() ? e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr : "We couldn't verify your details. Contact us via live chat to continue."
                                            }, function() {
                                                return e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr
                                            }),
                                            StatusTag: e.getCachedValue(t.getId("POIStatusBlock3.StatusTag"), function() {
                                                return D.nullTextIdentifier()
                                            }),
                                            Image: m.VersionedURL.getVersionedUrl("img/uae.poi.svg"),
                                            ShouldShowStatusTag: !1,
                                            is_loading: e.variables.is_loadingVar,
                                            ShouldShowWarningBackground: !0,
                                            Title2: "Identity verification failed",
                                            shouldShowBoth: !1
                                        },
                                        events: {
                                            _handleError: o(function(d) {
                                                a.handleError(d)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: t,
                                            name: "POIStatusBlock3",
                                            alias: "15"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    })), i.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        visible: e.variables.shouldShowPOAIn,
                                        _idProps: {
                                            service: t,
                                            name: "POA3"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(b, {
                                        getOwnerSpan: o(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Title2: e.getCachedValue(t.getId("POAStatusBlock3.Title2"), function() {
                                                return e.variables.pOAFailedORRejectedVar ? "Address verification failed" : "Address verification"
                                            }, function() {
                                                return e.variables.pOAFailedORRejectedVar
                                            }),
                                            Image: m.VersionedURL.getVersionedUrl("img/uae.poa.svg"),
                                            ShouldShowWarningBackground: e.variables.pOAFailedORRejectedVar,
                                            shouldShowBoth: !1,
                                            ShouldShowStatusTag: e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr !== "unverified" && !e.variables.pOAFailedORRejectedVar,
                                            is_loading: e.variables.is_loadingVar,
                                            StatusTag: e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr,
                                            Description2: e.getCachedValue(t.getId("POAStatusBlock3.Description2"), function() {
                                                return e.variables.pOAFailedORRejectedVar ? e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.moderation_commentAttr : "Upload a document confirming your current home address."
                                            }, function() {
                                                return e.variables.pOAFailedORRejectedVar
                                            }, function() {
                                                return e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.moderation_commentAttr
                                            })
                                        },
                                        events: {
                                            _handleError: o(function(d) {
                                                a.handleError(d)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: t,
                                            name: "POAStatusBlock3",
                                            alias: "16"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    })))]
                                })), i.createElement(c, {
                                    align: 0,
                                    animate: !0,
                                    extendedProperties: {
                                        style: "background: white; padding: 16px; z-index: 10;"
                                    },
                                    style: "fixed bottom-0 left-0 w-full flex justify-center",
                                    visible: !e.variables.is_loadingVar,
                                    _idProps: {
                                        service: t,
                                        name: "ActionButton3"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(E, {
                                    enabled: !0,
                                    isDefault: !1,
                                    onClick: o(function() {
                                        return Promise.resolve().then(function() {
                                            var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                            return a.openLivechat$Action(a.callContext(d))
                                        })
                                    }, "onClick"),
                                    style: "btn btn-primary action-button w-full",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        name: "SaveButton4"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    style: "osui-btn-loading__spinner-animation",
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "90"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(p, {
                                    value: "Contact us",
                                    _idProps: {
                                        service: t,
                                        uuid: "91"
                                    },
                                    _widgetRecordProvider: r
                                })))]
                            }),
                            footer: C.Empty
                        },
                        _dependencies: [l(e.variables.pOAFailedORRejectedVar), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.moderation_commentAttr), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr), l(e.variables.is_loadingVar), l(e.variables.shouldShowPOAIn), l(e.variables.shouldShowPOIIn)]
                    })]
                }, function() {
                    return [_(e.variables.hasPOILimitReachedVar || e.variables.hasPOALimitReachedVar, !1, this, function() {
                        return [i.createElement(j, {
                            getOwnerSpan: o(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                has_close_icon: !0
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                    a.handleOnClose$Action(a.callContext(d))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: t,
                                uuid: "92",
                                alias: "17"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new C(function() {
                                    return [i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "height: 581px;"
                                        },
                                        style: "flex flex-col gap-y-7",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "93"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "94"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 24px; font-weight: bold;"
                                        },
                                        value: "Verification status",
                                        _idProps: {
                                            service: t,
                                            uuid: "95"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "96"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        value: e.getCachedValue(t.getId("0z2UMxdZN0eFq9mbJl0LDg.Value"), function() {
                                            return e.variables.shouldShowPOIIn && e.variables.shouldShowPOAIn ? "There was a problem with few of your documents." : "We found a problem with your documents."
                                        }, function() {
                                            return e.variables.shouldShowPOIIn
                                        }, function() {
                                            return e.variables.shouldShowPOAIn
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "97"
                                        },
                                        _widgetRecordProvider: r
                                    }))), _(e.variables.shouldShowPOIIn && e.variables.hasPOILimitReachedVar && e.variables.shouldShowPOAIn && e.variables.hasPOALimitReachedVar, !1, this, function() {
                                        return [i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "POIPOA2"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(b, {
                                            getOwnerSpan: o(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Image: m.VersionedURL.getVersionedUrl("img/uae.poi.svg"),
                                                Image2: m.VersionedURL.getVersionedUrl("img/uae.poa.svg"),
                                                shouldShowBoth: !0,
                                                ShouldShowStatusTag: !1,
                                                ShouldShowWarningBackground: !0,
                                                Description2: "Maximum number of verification attempts reached. Contact us via live chat to continue.",
                                                is_loading: e.variables.is_loadingVar,
                                                Title2: "Identity & Address verification failed"
                                            },
                                            events: {
                                                _handleError: o(function(d) {
                                                    a.handleError(d)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: n
                                            },
                                            _idProps: {
                                                service: t,
                                                name: "POIPOAStatusBlock5",
                                                alias: "18"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        }))]
                                    }, function() {
                                        return [i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            style: "flex flex-col gap-6",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "100"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(c, {
                                            align: 0,
                                            animate: !0,
                                            visible: e.variables.shouldShowPOIIn && e.variables.hasPOILimitReachedVar,
                                            _idProps: {
                                                service: t,
                                                name: "POI4"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(b, {
                                            getOwnerSpan: o(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                StatusTag: e.getCachedValue(t.getId("POIStatusBlock4.StatusTag"), function() {
                                                    return D.nullTextIdentifier()
                                                }),
                                                ShouldShowStatusTag: !1,
                                                shouldShowBoth: !1,
                                                Image: m.VersionedURL.getVersionedUrl("img/uae.poi.svg"),
                                                is_loading: e.variables.is_loadingVar,
                                                Description2: "Maximum number of verification attempts reached. Contact us via live chat to continue.",
                                                ShouldShowWarningBackground: !0,
                                                Title2: "Identity verification failed"
                                            },
                                            events: {
                                                _handleError: o(function(d) {
                                                    a.handleError(d)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: n
                                            },
                                            _idProps: {
                                                service: t,
                                                name: "POIStatusBlock4",
                                                alias: "19"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        })), i.createElement(c, {
                                            align: 0,
                                            animate: !0,
                                            visible: e.variables.shouldShowPOAIn && e.variables.hasPOALimitReachedVar,
                                            _idProps: {
                                                service: t,
                                                name: "POA4"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(b, {
                                            getOwnerSpan: o(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                is_loading: e.variables.is_loadingVar,
                                                shouldShowBoth: !1,
                                                Title2: "Address verification failed",
                                                ShouldShowWarningBackground: !0,
                                                Description2: "Maximum number of verification attempts reached. Contact us via live chat to continue.",
                                                Image: m.VersionedURL.getVersionedUrl("img/uae.poa.svg"),
                                                ShouldShowStatusTag: !1
                                            },
                                            events: {
                                                _handleError: o(function(d) {
                                                    a.handleError(d)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: n
                                            },
                                            _idProps: {
                                                service: t,
                                                name: "POAStatusBlock4",
                                                alias: "20"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        })))]
                                    })), i.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        extendedProperties: {
                                            style: "background: white; padding: 16px; z-index: 10;"
                                        },
                                        style: "fixed bottom-0 left-0 w-full flex justify-center",
                                        visible: !e.variables.is_loadingVar,
                                        _idProps: {
                                            service: t,
                                            name: "ActionButton5"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(E, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: o(function() {
                                            return Promise.resolve().then(function() {
                                                var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                                return a.openLivechat$Action(a.callContext(d))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary action-button w-full",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "SaveButton6"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "107"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(p, {
                                        value: "Contact us",
                                        _idProps: {
                                            service: t,
                                            uuid: "108"
                                        },
                                        _widgetRecordProvider: r
                                    })))]
                                }),
                                footer: C.Empty
                            },
                            _dependencies: [l(e.variables.is_loadingVar), l(e.variables.hasPOALimitReachedVar), l(e.variables.hasPOILimitReachedVar), l(e.variables.shouldShowPOAIn), l(e.variables.shouldShowPOIIn)]
                        })]
                    }, function() {
                        return [_(e.variables.shouldShowPOIIn && e.variables.shouldShowPOAIn ? (e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "verified" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending_provider") && (e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "verified" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending_provider") : e.variables.shouldShowPOIIn ? e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "verified" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending_provider" : e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "verified" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending" || e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending_provider", !1, this, function() {
                            return [i.createElement(q, {
                                getOwnerSpan: o(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: o(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: o(function(d) {
                                        a.handleError(d)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: n
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "109",
                                    alias: "21"
                                },
                                _widgetRecordProvider: r,
                                placeholders: {
                                    content: new C(function() {
                                        return [i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "110"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; align-self: stretch; gap: 24px; padding: 24px;"
                                            },
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "111"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(T, {
                                            extendedProperties: {
                                                style: "height: 256px;"
                                            },
                                            gridProperties: {
                                                width: "256px"
                                            },
                                            image: m.VersionedURL.getVersionedUrl("img/uae.Group2.png"),
                                            type: 0,
                                            _idProps: {
                                                service: t,
                                                uuid: "112"
                                            },
                                            _widgetRecordProvider: r
                                        }), i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-self: center; display: flex; flex-direction: column; gap: 8px;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline ThemeGrid_MarginGutter",
                                                width: "100%"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "113"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(p, {
                                            extendedProperties: {
                                                style: "align-self: stretch; color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 32px; font-weight: 800; text-align: center;"
                                            },
                                            value: "Verification successful",
                                            _idProps: {
                                                service: t,
                                                uuid: "114"
                                            },
                                            _widgetRecordProvider: r
                                        }), i.createElement(p, {
                                            extendedProperties: {
                                                style: "color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 16px; font-weight: 400;"
                                            },
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            style: "text-align-center",
                                            value: "We\u2019ve verified your identity and address. Next, set up your trading account.",
                                            _idProps: {
                                                service: t,
                                                uuid: "115"
                                            },
                                            _widgetRecordProvider: r
                                        })), i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "gap: 8px;"
                                            },
                                            style: "display-flex flex-direction-row",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "116"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "117"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(E, {
                                            enabled: !0,
                                            isDefault: !1,
                                            onClick: o(function() {
                                                var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                                a.maybeLaterOnClick$Action(a.callContext(d))
                                            }, "onClick"),
                                            style: "btn-secondary",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "118"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(x, {
                                            extendedProperties: {
                                                style: "color: var(--component-button-label-color-white-secondary, #FFF); font-weight: 800;"
                                            },
                                            text: ["Maybe later"],
                                            _idProps: {
                                                service: t,
                                                uuid: "119"
                                            },
                                            _widgetRecordProvider: r
                                        }))), i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "120"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(E, {
                                            enabled: !0,
                                            extendedProperties: {
                                                style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: var(--component-button-height-lg, 48px);"
                                            },
                                            isDefault: !1,
                                            onClick: o(function() {
                                                var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                                a.setupTradingAccountOnClick$Action(a.callContext(d))
                                            }, "onClick"),
                                            style: "btn btn-primary",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "121"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(x, {
                                            extendedProperties: {
                                                style: "font-weight: 800;"
                                            },
                                            text: ["Set up trading account"],
                                            _idProps: {
                                                service: t,
                                                uuid: "122"
                                            },
                                            _widgetRecordProvider: r
                                        })))))), i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "123"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; align-self: stretch; gap: 24px; padding: 24px;"
                                            },
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "124"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(T, {
                                            image: m.VersionedURL.getVersionedUrl("img/uae.Documentreview.png"),
                                            type: 0,
                                            _idProps: {
                                                service: t,
                                                uuid: "125"
                                            },
                                            _widgetRecordProvider: r
                                        }), i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-self: center; display: flex; flex-direction: column; gap: 8px;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline ThemeGrid_MarginGutter",
                                                width: "100%"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "126"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(p, {
                                            extendedProperties: {
                                                style: "align-self: stretch; color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 32px; font-weight: 800; text-align: center;"
                                            },
                                            value: "Documents in review",
                                            _idProps: {
                                                service: t,
                                                uuid: "127"
                                            },
                                            _widgetRecordProvider: r
                                        }), i.createElement(p, {
                                            extendedProperties: {
                                                style: "color: var(--component-textIcon-inverse-prominent, #FFF); font-size: 16px; font-weight: 400;"
                                            },
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            style: "text-align-center",
                                            value: "This usually takes a few minutes. We\u2019ll let you know when it\u2019s complete, or you can check the status in your Profile.",
                                            _idProps: {
                                                service: t,
                                                uuid: "128"
                                            },
                                            _widgetRecordProvider: r
                                        })), i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "gap: 8px;"
                                            },
                                            style: "display-flex flex-direction-row",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "129"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "130"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(E, {
                                            enabled: !0,
                                            extendedProperties: {
                                                style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: 24px; height: var(--component-button-height-lg, 48px);"
                                            },
                                            gridProperties: {
                                                width: "280px"
                                            },
                                            isDefault: !1,
                                            onClick: o(function() {
                                                var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                                a.maybeLaterOnClick$Action(a.callContext(d))
                                            }, "onClick"),
                                            style: "btn btn-primary",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "131"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(x, {
                                            extendedProperties: {
                                                style: "font-weight: 800;"
                                            },
                                            text: ["Done"],
                                            _idProps: {
                                                service: t,
                                                uuid: "132"
                                            },
                                            _widgetRecordProvider: r
                                        }))))))]
                                    }),
                                    content2: C.Empty
                                },
                                _dependencies: []
                            })]
                        }, function() {
                            return []
                        }), i.createElement(j, {
                            getOwnerSpan: o(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                has_close_icon: !0
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var d = typeof v != "undefined" && v !== null ? v.clone() : a.callContext().clone();
                                    a.handleOnClose$Action(a.callContext(d))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: t,
                                uuid: "133",
                                alias: "22"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new C(function() {
                                    return [i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        style: "flex flex-col gap-y-7",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "134"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "135"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 24px; font-weight: bold;"
                                        },
                                        value: e.getCachedValue(t.getId("m6zng_j6YUaqKYa_ceNGMA.Value"), function() {
                                            return e.variables.shouldShowPOIIn && e.variables.shouldShowPOAIn ? "Verify yourself" : "Verification status"
                                        }, function() {
                                            return e.variables.shouldShowPOIIn
                                        }, function() {
                                            return e.variables.shouldShowPOAIn
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "136"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "137"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        value: e.getCachedValue(t.getId("be35V4tYFkOub7tpt8ZFFA.Value"), function() {
                                            return e.variables.shouldShowPOIIn && e.variables.shouldShowPOAIn ? "Two quick steps to secure your account." : e.variables.shouldShowPOIIn && e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "failed" || e.variables.shouldShowPOAIn && e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "failed" ? "We found a problem with your documents. Check the details below and resubmit." : ""
                                        }, function() {
                                            return e.variables.shouldShowPOIIn
                                        }, function() {
                                            return e.variables.shouldShowPOAIn
                                        }, function() {
                                            return e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr
                                        }, function() {
                                            return e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "138"
                                        },
                                        _widgetRecordProvider: r
                                    }))), i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        style: "flex flex-col gap-6",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "139"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        visible: e.variables.shouldShowPOIIn,
                                        _idProps: {
                                            service: t,
                                            name: "POI"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(b, {
                                        getOwnerSpan: o(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            shouldShowBoth: !1,
                                            is_loading: e.variables.is_loadingVar,
                                            ShouldShowStatusTag: e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr !== "unverified" && !e.variables.pOIFailedORRejectedVar,
                                            Image: m.VersionedURL.getVersionedUrl("img/uae.poi.svg"),
                                            Title2: "Identity verification",
                                            ShouldShowWarningBackground: e.variables.pOIFailedORRejectedVar,
                                            StatusTag: e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr,
                                            Description2: e.getCachedValue(t.getId("POIStatusBlock.Description2"), function() {
                                                return e.variables.pOIFailedORRejectedVar ? e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr : "Upload a selfie and your official ID document."
                                            }, function() {
                                                return e.variables.pOIFailedORRejectedVar
                                            }, function() {
                                                return e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr
                                            })
                                        },
                                        events: {
                                            _handleError: o(function(d) {
                                                a.handleError(d)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: t,
                                            name: "POIStatusBlock",
                                            alias: "23"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    })), i.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        visible: e.variables.shouldShowPOAIn,
                                        _idProps: {
                                            service: t,
                                            name: "POA"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(b, {
                                        getOwnerSpan: o(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Image: m.VersionedURL.getVersionedUrl("img/uae.poa.svg"),
                                            ShouldShowStatusTag: e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr !== "unverified" && !e.variables.pOAFailedORRejectedVar,
                                            is_loading: e.variables.is_loadingVar,
                                            ShouldShowWarningBackground: e.variables.pOAFailedORRejectedVar,
                                            Description2: e.getCachedValue(t.getId("POAStatusBlock.Description2"), function() {
                                                return e.variables.pOAFailedORRejectedVar ? e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.moderation_commentAttr : "Upload a document confirming your current home address."
                                            }, function() {
                                                return e.variables.pOAFailedORRejectedVar
                                            }, function() {
                                                return e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.moderation_commentAttr
                                            }),
                                            shouldShowBoth: !1,
                                            StatusTag: e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr,
                                            Title2: "Address verification"
                                        },
                                        events: {
                                            _handleError: o(function(d) {
                                                a.handleError(d)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: t,
                                            name: "POAStatusBlock",
                                            alias: "24"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    }))))]
                                }),
                                footer: C.Empty
                            },
                            _dependencies: [l(e.variables.pOAFailedORRejectedVar), l(e.variables.pOIFailedORRejectedVar), l(e.variables.is_loadingVar), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.moderation_commentAttr), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.moderation_commentAttr), l(e.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr), l(e.variables.shouldShowPOAIn), l(e.variables.shouldShowPOIIn)]
                        })]
                    })]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: o(function() {
                return {
                    codeFunction: "VerificationStatus",
                    functionKey: "41dfe6f4-b1e9-48d3-8ba4-5c0ea8b37340",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "UserProfileFlow.VerificationStatus",
            modelFactory: Ae,
            controllerFactory: ce,
            getTitle: o(function(u) {
                var e = u.model,
                    a = u.controller,
                    t = u.controller.idService,
                    n = a.validationService,
                    v = a.callContext(),
                    l = F,
                    O = W,
                    P = {
                        props: u,
                        validateWidget: o(function(r) {
                            u.validateWidget(u, r)
                        }, "validateWidget")
                    };
                return Oe.resolve(Pe.TranslationsService).getMessage("9ObfQemx00iLpFwOqLNzQA#TitleExpression.1272643895.1", "Identity verification | Deriv")
            }, "getTitle")
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.UserProfileFlow.VerificationStatus.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [z, b, q, j]
        }, f
    }, "componentFactory"),
    qe = Je();
export {
    ce as controllerModule, Ae as modelModule, qe as viewModule, se as webFlowControllerModule
};